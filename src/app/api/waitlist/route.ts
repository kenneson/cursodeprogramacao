import { NextRequest, NextResponse } from 'next/server';
import { addToWaitlist } from '@/lib/prisma';
import { Prisma } from '@prisma/client';
import { getWaitlistEntries } from '@/lib/emailService';

export async function GET() {
  try {
    console.log('API: Fetching waitlist entries...');
    // Get all waitlist entries
    const entries = await getWaitlistEntries();
    
    console.log('API: Entries received from service:', entries ? entries.length : 0);
    
    if (!entries || entries.length === 0) {
      console.log('API: No entries found or empty array returned');
    } else {
      console.log('API: First few entries:', JSON.stringify(entries.slice(0, 2), null, 2));
    }
    
    // Return success response
    return NextResponse.json({ success: true, entries }, { status: 200 });
  } catch (error) {
    console.error('Error fetching waitlist entries:', error);
    
    // Generic error response
    return NextResponse.json(
      { error: 'Erro ao buscar entradas da lista de espera' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const body = await request.json();
    
    // Validate required fields
    if (!body.name || !body.email || !body.phone) {
      return NextResponse.json(
        { error: 'Nome, email e telefone são obrigatórios' },
        { status: 400 }
      );
    }
    
    // Add to waitlist
    const data = await addToWaitlist({
      name: body.name,
      email: body.email,
      phone: body.phone,
      message: body.message || ''
    });
    
    // Return success response
    return NextResponse.json({ success: true, data }, { status: 201 });
  } catch (error) {
    console.error('Error in waitlist API:', error);
    
    // Handle duplicate email error
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === 'P2002' && Array.isArray(error.meta?.target) && error.meta.target.includes('email')) {
        return NextResponse.json(
          { error: 'Este email já está cadastrado na lista de espera' },
          { status: 409 }
        );
      }
    }
    
    // Generic error response
    return NextResponse.json(
      { error: 'Erro ao processar sua solicitação' },
      { status: 500 }
    );
  }
}