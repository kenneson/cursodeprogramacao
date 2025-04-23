import { NextRequest, NextResponse } from 'next/server';
import { sendEmailsToWaitlist, sendEmailToUser, EmailTemplate } from '@/lib/emailService';

/**
 * API route to send emails to waitlist users
 * POST /api/email
 */
export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const body = await request.json();
    
    // Validate required fields
    if (!body.subject || !body.body) {
      return NextResponse.json(
        { error: 'Assunto e corpo do email são obrigatórios' },
        { status: 400 }
      );
    }
    
    const template: EmailTemplate = {
      subject: body.subject,
      body: body.body,
      name: body.templateName // Include template name for tracking
    };
    
    // If an email is provided, send to a specific user
    if (body.email) {
      const success = await sendEmailToUser(body.email, template);
      
      if (success) {
        return NextResponse.json(
          { success: true, message: 'Email enviado com sucesso' },
          { status: 200 }
        );
      } else {
        return NextResponse.json(
          { error: 'Falha ao enviar email' },
          { status: 500 }
        );
      }
    }
    
    // Otherwise, send to all waitlist users
    const result = await sendEmailsToWaitlist(template);
    
    return NextResponse.json(
      { 
        success: true, 
        message: `Emails enviados: ${result.success} com sucesso, ${result.failed} falhas` 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error in email API:', error);
    
    return NextResponse.json(
      { error: 'Erro ao processar sua solicitação' },
      { status: 500 }
    );
  }
}