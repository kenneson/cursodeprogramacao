import { NextRequest, NextResponse } from 'next/server';
import { addToWaitlist } from '@/lib/prisma';
import { Prisma } from '@prisma/client';

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