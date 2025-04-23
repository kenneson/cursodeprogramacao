import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Inscrição - Curso de Programação Web em Santarém-PA',
  description: 'Formulário de inscrição para o curso de programação web em Santarém-PA. Aprenda desenvolvimento web com aulas presenciais e online.',
};

export default function InscricaoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      {children}
    </section>
  );
}