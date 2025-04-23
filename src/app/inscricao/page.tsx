'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaCheckCircle, FaWhatsapp, FaArrowLeft } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Link from 'next/link';

type FormData = {
  name: string;
  email: string;
  phone: string;
  education: string;
  experience: string;
  payment: string;
  referral: string;
  message: string;
};

export default function InscricaoPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitError(null);
    
    try {
      // Adaptar os dados para o formato esperado pela API
      
      // Usando a API de inscrição dedicada
      const response = await fetch('/api/inscricao', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone,
          education: data.education,
          experience: data.experience,
          payment: data.payment,
          referral: data.referral,
          message: data.message || ''
        }),
      });
      
      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.error || 'Erro ao processar sua inscrição');
      }
      
      console.log('Inscrição oficial realizada com sucesso', result);
      setIsSubmitted(true);
      reset(); // Reset the form fields
    } catch (error) {
      console.error('Erro ao processar inscrição oficial:', error);
      setSubmitError(error instanceof Error ? error.message : 'Ocorreu um erro ao processar sua inscrição. Por favor, tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-white relative overflow-hidden py-12">
      <div className="blur-effect top-0 left-0"></div>
      <div className="blur-effect bottom-0 right-0 bg-secondary"></div>
      
      <div className="container-custom">
        <Link href="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8 transition-colors">
          <FaArrowLeft /> Voltar para a página inicial
        </Link>
        
        <motion.div 
          className="text-center mb-10"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Matrícula para o <span className="gradient-text">Curso de Programação Web</span>
          </h1>
          <p className="text-lg max-w-3xl mx-auto">
            Preencha o formulário abaixo para garantir sua vaga em nossa próxima turma. 
            Esta é a <strong>inscrição oficial</strong> para o curso, diferente da lista de espera.
            Após a matrícula, nossa equipe entrará em contato com mais informações sobre o início das aulas e formas de pagamento.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {isSubmitted ? (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-green-100 border border-green-400 text-green-700 px-4 py-8 rounded-lg text-center"
            >
              <FaCheckCircle className="text-5xl mx-auto mb-4 text-green-500" />
              <h3 className="text-2xl font-bold mb-2">Matrícula Realizada com Sucesso!</h3>
              <p className="mb-4">Agradecemos seu interesse no nosso curso de Programação Web. Sua matrícula oficial foi confirmada e em breve nossa equipe entrará em contato com mais informações sobre o início das aulas e formas de pagamento.</p>
              <a 
                href="https://wa.me/5593988111109?text=Oi%20Kenneson%20!%20Acabei%20de%20realizar%20minha%20matr%C3%ADcula%20no%20Curso%20de%20Programa%C3%A7%C3%A3o" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300"
              >
                <FaWhatsapp /> Falar pelo WhatsApp
              </a>
            </motion.div>
          ) : (
            <motion.form 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              onSubmit={handleSubmit(onSubmit)}
              className="card p-8 border-2 border-primary glow-effect"
            >
              {submitError && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
                  <p>{submitError}</p>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block mb-2 font-medium">Nome Completo *</label>
                  <input
                    id="name"
                    type="text"
                    className={`w-full p-3 rounded-lg bg-gray-800 border ${errors.name ? 'border-red-500' : 'border-gray-600'}`}
                    placeholder="Seu nome completo"
                    {...register('name', { required: 'Nome é obrigatório' })}
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block mb-2 font-medium">E-mail *</label>
                  <input
                    id="email"
                    type="email"
                    className={`w-full p-3 rounded-lg bg-gray-800 border ${errors.email ? 'border-red-500' : 'border-gray-600'}`}
                    placeholder="seu.email@exemplo.com"
                    {...register('email', { 
                      required: 'E-mail é obrigatório',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'E-mail inválido'
                      }
                    })}
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                </div>

                <div>
                  <label htmlFor="phone" className="block mb-2 font-medium">Telefone/WhatsApp *</label>
                  <input
                    id="phone"
                    type="tel"
                    className={`w-full p-3 rounded-lg bg-gray-800 border ${errors.phone ? 'border-red-500' : 'border-gray-600'}`}
                    placeholder="(93) 98811-1109"
                    {...register('phone', { required: 'Telefone é obrigatório' })}
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
                </div>

                <div>
                  <label htmlFor="education" className="block mb-2 font-medium">Formação Acadêmica *</label>
                  <select
                    id="education"
                    className={`w-full p-3 rounded-lg bg-gray-800 border ${errors.education ? 'border-red-500' : 'border-gray-600'}`}
                    {...register('education', { required: 'Formação é obrigatória' })}
                  >
                    <option value="">Selecione sua formação</option>
                    <option value="Ensino Médio">Ensino Médio</option>
                    <option value="Ensino Superior Incompleto">Ensino Superior Incompleto</option>
                    <option value="Ensino Superior Completo">Ensino Superior Completo</option>
                    <option value="Pós-graduação">Pós-graduação</option>
                    <option value="Mestrado/Doutorado">Mestrado/Doutorado</option>
                  </select>
                  {errors.education && <p className="text-red-500 text-sm mt-1">{errors.education.message}</p>}
                </div>

                <div>
                  <label htmlFor="experience" className="block mb-2 font-medium">Experiência com Programação *</label>
                  <select
                    id="experience"
                    className={`w-full p-3 rounded-lg bg-gray-800 border ${errors.experience ? 'border-red-500' : 'border-gray-600'}`}
                    {...register('experience', { required: 'Experiência é obrigatória' })}
                  >
                    <option value="">Selecione sua experiência</option>
                    <option value="Nenhuma">Nenhuma experiência</option>
                    <option value="Iniciante">Iniciante (estudei por conta própria)</option>
                    <option value="Intermediário">Intermediário (já desenvolvi projetos simples)</option>
                    <option value="Avançado">Avançado (trabalho na área)</option>
                  </select>
                  {errors.experience && <p className="text-red-500 text-sm mt-1">{errors.experience.message}</p>}
                </div>

                <div>
                  <label htmlFor="payment" className="block mb-2 font-medium">Forma de Pagamento Preferida *</label>
                  <select
                    id="payment"
                    className={`w-full p-3 rounded-lg bg-gray-800 border ${errors.payment ? 'border-red-500' : 'border-gray-600'}`}
                    {...register('payment', { required: 'Forma de pagamento é obrigatória' })}
                  >
                    <option value="">Selecione a forma de pagamento</option>
                    <option value="Parcelado no cartão">Parcelado no cartão de crédito</option>
                    <option value="Pix">Pix</option>
                  </select>
                  {errors.payment && <p className="text-red-500 text-sm mt-1">{errors.payment.message}</p>}
                </div>

                <div>
                  <label htmlFor="referral" className="block mb-2 font-medium">Como conheceu o curso? *</label>
                  <select
                    id="referral"
                    className={`w-full p-3 rounded-lg bg-gray-800 border ${errors.referral ? 'border-red-500' : 'border-gray-600'}`}
                    {...register('referral', { required: 'Este campo é obrigatório' })}
                  >
                    <option value="">Selecione uma opção</option>
                    <option value="Redes Sociais">Redes Sociais</option>
                    <option value="Indicação de amigo">Indicação de amigo</option>
                    <option value="Google">Google</option>
                    <option value="WhatsApp">WhatsApp</option>
                    <option value="Outro">Outro</option>
                  </select>
                  {errors.referral && <p className="text-red-500 text-sm mt-1">{errors.referral.message}</p>}
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block mb-2 font-medium">Mensagem (opcional)</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600"
                  placeholder="Compartilhe suas expectativas ou dúvidas sobre o curso..."
                  {...register('message')}
                ></textarea>
              </div>

              <div className="bg-primary/10 p-4 rounded-lg mb-6">
                <h3 className="font-bold text-lg mb-2">Ao se inscrever você receberá:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Desconto exclusivo de 30% na primeira turma</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>E-book gratuito &quot;Primeiros Passos na Programação&quot;</span>
                  </li>
                </ul>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full btn-primary py-3 text-center relative overflow-hidden group"
              >
                {isSubmitting ? (
                  <span>Processando...</span>
                ) : (
                  <>
                    <span className="relative z-10">Finalizar Inscrição</span>
                    <span className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                  </>
                )}
              </button>
            </motion.form>
          )}
        </div>
      </div>
    </div>
  );
}