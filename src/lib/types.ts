// Type definition for waitlist entry
export type WaitlistEntry = {
  id?: string;
  name: string;
  email: string;
  phone: string;
  message?: string;
  created_at?: string;
  sentEmails?: {
    templateName: string;
    sentAt: string;
  }[];
};

// Type definition for official registration entry
export type RegistrationEntry = {
  id?: string;
  name: string;
  email: string;
  phone: string;
  education: string;
  experience: string;
  payment: string;
  referral: string;
  message?: string;
  created_at?: string;
};