import nodemailer from 'nodemailer';
import { prisma } from './prisma';
import { WaitlistEntry } from './types';

// Email configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

// Interface for email template
export interface EmailTemplate {
  subject: string;
  body: string;
  name?: string; // Template name for tracking purposes
}

// Interface for email options
export interface SendEmailOptions {
  to: string;
  subject: string;
  html: string;
  from?: string;
}

/**
 * Get all waitlist entries from the database
 */
export async function getWaitlistEntries(): Promise<WaitlistEntry[]> {
  try {
    console.log('Fetching waitlist entries from database...');
    const entries = await prisma.waitlist.findMany({
      orderBy: {
        createdAt: 'desc',
      },
      include: {
        sentEmails: true, // Include sent emails to track which templates were sent
      },
    });
    
    console.log('Database query result:', JSON.stringify(entries, null, 2));
    
    if (!entries || entries.length === 0) {
      console.log('No waitlist entries found in the database');
      return [];
    }
    
    // Map the entries to ensure proper field mapping between Prisma model and WaitlistEntry type
    const mappedEntries = entries.map(entry => ({
      id: entry.id,
      name: entry.name,
      email: entry.email,
      phone: entry.phone,
      message: entry.message ?? undefined,
      created_at: entry.createdAt.toISOString(),
      sentEmails: entry.sentEmails.map(email => ({
        templateName: email.templateName,
        sentAt: email.sentAt.toISOString()
      }))
    }));
    
    console.log('Mapped waitlist entries:', JSON.stringify(mappedEntries, null, 2));
    return mappedEntries;
  } catch (error) {
    console.error('Error in getWaitlistEntries:', error);
    throw error;
  }
}

/**
 * Create a personalized email content by replacing placeholders with user data
 * @param template The email template with placeholders
 * @param user The user data to personalize the email
 */
export function createPersonalizedEmail(template: EmailTemplate, user: WaitlistEntry): EmailTemplate {
  let personalizedSubject = template.subject;
  let personalizedBody = template.body;
  
  // Replace placeholders with user data
  const placeholders = {
    '{name}': user.name,
    '{email}': user.email,
    '{phone}': user.phone,
  };
  
  // Replace all placeholders in subject and body
  Object.entries(placeholders).forEach(([placeholder, value]) => {
    personalizedSubject = personalizedSubject.replace(new RegExp(placeholder, 'g'), value);
    personalizedBody = personalizedBody.replace(new RegExp(placeholder, 'g'), value);
  });
  
  return {
    subject: personalizedSubject,
    body: personalizedBody,
    name: template.name
  };
}

/**
 * Check if a template has already been sent to a user
 * @param userId The user ID
 * @param templateName The template name
 */
export async function hasTemplateSentToUser(userId: string, templateName: string): Promise<boolean> {
  try {
    const sentEmail = await prisma.sentEmail.findUnique({
      where: {
        waitlistId_templateName: {
          waitlistId: userId,
          templateName: templateName
        }
      }
    });
    
    return !!sentEmail;
  } catch (error) {
    console.error('Error checking if template was sent:', error);
    return false;
  }
}

/**
 * Record that a template has been sent to a user
 * @param userId The user ID
 * @param templateName The template name
 */
async function recordTemplateSent(userId: string, templateName: string): Promise<void> {
  try {
    await prisma.sentEmail.create({
      data: {
        templateName,
        waitlistId: userId
      }
    });
  } catch (error) {
    console.error('Error recording sent template:', error);
  }
}

/**
 * Send an email using nodemailer
 * @param options Email sending options
 */
export async function sendEmail(options: SendEmailOptions): Promise<boolean> {
  try {
    const mailOptions = {
      from: options.from || process.env.GMAIL_USER,
      to: options.to,
      subject: options.subject,
      html: options.html,
    };
    
    await transporter.sendMail(mailOptions);
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
}

/**
 * Send personalized emails to all waitlist users
 * @param template The email template to use
 */
export async function sendEmailsToWaitlist(template: EmailTemplate): Promise<{ success: number; failed: number }> {
  const users = await getWaitlistEntries();
  let successCount = 0;
  let failedCount = 0;
  
  for (const user of users) {
    // Skip if this template has already been sent to this user
    if (template.name && user.id && await hasTemplateSentToUser(user.id, template.name)) {
      console.log(`Template ${template.name} already sent to ${user.email}, skipping...`);
      continue;
    }
    
    const personalizedEmail = createPersonalizedEmail(template, user);
    
    const success = await sendEmail({
      to: user.email,
      subject: personalizedEmail.subject,
      html: personalizedEmail.body,
    });
    
    if (success) {
      // Record that this template has been sent to this user
      if (template.name && user.id) {
        await recordTemplateSent(user.id, template.name);
      }
      successCount++;
    } else {
      failedCount++;
    }
  }
  
  return {
    success: successCount,
    failed: failedCount,
  };
}

/**
 * Send a personalized email to a specific waitlist user
 * @param email The email address of the user
 * @param template The email template to use
 */
export async function sendEmailToUser(email: string, template: EmailTemplate): Promise<boolean> {
  try {
    const user = await prisma.waitlist.findUnique({
      where: { email },
    });
    
    if (!user) {
      throw new Error(`User with email ${email} not found`);
    }
    
    // Skip if this template has already been sent to this user
    if (template.name && await hasTemplateSentToUser(user.id, template.name)) {
      console.log(`Template ${template.name} already sent to ${email}, skipping...`);
      return true; // Return true as if it was successful since we're skipping intentionally
    }
    
    const personalizedEmail = createPersonalizedEmail(template, {
      ...user,
      message: user.message ?? undefined
    });
    
    const success = await sendEmail({
      to: user.email,
      subject: personalizedEmail.subject,
      html: personalizedEmail.body,
    });
    
    if (success && template.name) {
      // Record that this template has been sent to this user
      await recordTemplateSent(user.id, template.name);
    }
    
    return success;
  } catch (error) {
    console.error('Error sending email to user:', error);
    return false;
  }
}