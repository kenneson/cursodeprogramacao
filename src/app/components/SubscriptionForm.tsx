'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaCheckCircle, FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export default function SubscriptionForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitError(null);
    
    try {
      // Use a API route em vez do Supabase diretamente
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone,
          message: data.message || ''
        }),
      });
      
      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.error || 'Erro ao processar sua inscrição');
      }
      
      console.log('Waitlist entry added successfully', result);
      setIsSubmitted(true);
      reset(); // Reset the form fields
    } catch (error) {
      console.error('Error adding to waitlist:', error);
      setSubmitError(error instanceof Error ? error.message : 'Ocorreu um erro ao processar sua inscrição. Por favor, tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      {isSubmitted ? (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-green-100 border border-green-400 text-green-700 px-4 py-8 rounded-lg text-center"
        >
          <FaCheckCircle className="text-5xl mx-auto mb-4 text-green-500" />
          <h3 className="text-2xl font-bold mb-2">Inscrição Recebida!</h3>
          <p className="mb-4">Agradecemos seu interesse no nosso curso de Programação Web. Você foi adicionado à nossa lista de espera e em breve nossa equipe entrará em contato com mais informações.</p>
          <a 
            href="https://wa.me/5593988111109?text=Oi%20Kenneson%20!%20Acabei%20de%20Manifestar%20Interesse%20no%20Curso%20de%20Programa%C3%A7%C3%A3o" 
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
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          onSubmit={handleSubmit(onSubmit)}
          className="card p-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="name" className="block mb-2 font-medium">Nome Completo</label>
              <input 
                type="text" 
                id="name"
                className="w-full px-4 py-2 bg-shape border border-gray-medium rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                placeholder="Seu nome completo"
                {...register('name', { required: 'Nome é obrigatório' })}
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 font-medium">E-mail</label>
              <input 
                type="email" 
                id="email"
                className="w-full px-4 py-2 bg-shape border border-gray-medium rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
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
          </div>
          <div className="mb-6">
            <label htmlFor="phone" className="block mb-2 font-medium">Telefone (WhatsApp)</label>
            <input 
              type="tel" 
              id="phone"
              className="w-full px-4 py-2 bg-shape border border-gray-medium rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
              placeholder="(93) 99999-9999"
              {...register('phone', { required: 'Telefone é obrigatório' })}
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block mb-2 font-medium">Mensagem (opcional)</label>
            <textarea 
              id="message"
              rows={4}
              className="w-full px-4 py-2 bg-shape border border-gray-medium rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
              placeholder="Dúvidas ou comentários adicionais"
              {...register('message')}
            ></textarea>
          </div>
          {submitError && (
            <div className="mb-6 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg">
              {submitError}
            </div>
          )}
          <button 
            type="submit" 
            className="w-full btn-primary py-3 flex items-center justify-center"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Processando...' : 'Enviar Inscrição'}
          </button>
        </motion.form>
      )}
    </div>
  );
}