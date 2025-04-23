import { NextRequest, NextResponse } from 'next/server';
import { addRegistration } from '@/lib/prisma';
import { Prisma } from '@prisma/client';

export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const body = await request.json();
    
    // Validate required fields
    if (!body.name || !body.email || !body.phone || !body.education || !body.experience || !body.payment || !body.referral) {
      return NextResponse.json(
        { error: 'Todos os campos obrigatórios devem ser preenchidos' },
        { status: 400 }
      );
    }
    
    // Adicionar à inscrição oficial usando o modelo dedicado
    const data = await addRegistration({
      name: body.name,
      email: body.email,
      phone: body.phone,
      education: body.education,
      experience: body.experience,
      payment: body.payment,
      referral: body.referral,
      message: body.message || ''
    });
    
    // Return success response
    return NextResponse.json({ success: true, data }, { status: 201 });
  } catch (error) {
    console.error('Error in inscricao API:', error);
    
    // Handle duplicate email error
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === 'P2002' && Array.isArray(error.meta?.target) && error.meta.target.includes('email')) {
        return NextResponse.json(
          { error: 'Este email já está cadastrado' },
          { status: 409 }
        );
      }
    }
    
    // Generic error response
    return NextResponse.json(
      { error: 'Erro ao processar sua inscrição' },
      { status: 500 }
    );
  }
}