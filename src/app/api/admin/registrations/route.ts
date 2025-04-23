import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// Função para verificar se o usuário está autenticado
// Em uma implementação real, você deve adicionar autenticação adequada
function isAuthenticated() {
  // Implementação simplificada - em produção, use um sistema de autenticação adequado
  // como NextAuth.js ou similar
  return true;
}

export async function GET() {
  // Verificar autenticação
  if (!isAuthenticated()) {
    return NextResponse.json({ error: 'Não autorizado' }, { status: 401 });
  }

  try {
    // Buscar todas as inscrições do banco de dados
    const registrations = await prisma.registration.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    });

    // Formatar os dados para o formato esperado pelo frontend
    const formattedRegistrations = registrations.map(reg => ({
      id: reg.id,
      name: reg.name,
      email: reg.email,
      phone: reg.phone,
      education: reg.education,
      experience: reg.experience,
      payment: reg.payment,
      referral: reg.referral,
      message: reg.message,
      created_at: reg.createdAt.toISOString()
    }));

    return NextResponse.json(formattedRegistrations);
  } catch (error) {
    console.error('Erro ao buscar inscrições:', error);
    return NextResponse.json(
      { error: 'Erro ao buscar inscrições' },
      { status: 500 }
    );
  }
}