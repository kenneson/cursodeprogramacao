import { PrismaClient } from '@prisma/client';
import { WaitlistEntry } from './types';

// PrismaClient is attached to the `global` object in development to prevent
// exhausting your database connection limit.
const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

// Function to add a new entry to the waitlist
export async function addToWaitlist(entry: Omit<WaitlistEntry, 'id' | 'created_at'>) {
  const data = await prisma.waitlist.create({
    data: {
      name: entry.name,
      email: entry.email,
      phone: entry.phone,
      message: entry.message || ''
    }
  });
  
  return data;
}