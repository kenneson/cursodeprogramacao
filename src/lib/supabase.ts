import { createClient } from '@supabase/supabase-js';

// These environment variables need to be set in your .env.local file
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

// Create a single supabase client for interacting with your database
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Type definition for waitlist entry
export type WaitlistEntry = {
  id?: string;
  name: string;
  email: string;
  phone: string;
  message?: string;
  created_at?: string;
};

// Function to add a new entry to the waitlist
export async function addToWaitlist(entry: Omit<WaitlistEntry, 'id' | 'created_at'>) {
  const { data, error } = await supabase
    .from('waitlist')
    .insert([entry])
    .select();
  
  if (error) {
    throw error;
  }
  
  return data;
}