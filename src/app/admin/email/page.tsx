'use client';

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { WaitlistEntry } from '@/lib/types';
import { motion } from 'framer-motion';
import { welcomeEmailTemplate, reminderEmailTemplate } from '@/lib/emailTemplates';
import { EmailTemplate } from '@/lib/emailService';

interface EmailFormData {
  subject: string;
  body: string;
  email?: string;
  templateName?: string;
}

interface UserInfo {
  name: string;
  email: string;
  phone: string;
  sentEmails?: {
    templateName: string;
    sentAt: string;
  }[];
}

export default function EmailPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<{ success?: boolean; message?: string; error?: string } | null>(null);
  const [waitlistEntries, setWaitlistEntries] = useState<WaitlistEntry[]>([]);
  const [selectedUserInfo, setSelectedUserInfo] = useState<UserInfo | null>(null);
  const [selectedTemplate, setSelectedTemplate] = useState<string>("");
  
  const { register, handleSubmit, setValue, formState: { errors } } = useForm<EmailFormData>();
  
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };
  
  // Fetch waitlist entries when component mounts
  useEffect(() => {
    const fetchWaitlistEntries = async () => {
      try {
        console.log('Fetching waitlist entries from API...');
        const response = await fetch('/api/waitlist');
        console.log('API response status:', response.status);
        
        if (response.ok) {
          const data = await response.json();
          console.log('API response data:', data);
          
          if (data.entries && Array.isArray(data.entries)) {
            console.log('Number of entries received:', data.entries.length);
            setWaitlistEntries(data.entries);
          } else {
            console.error('Invalid entries data format:', data.entries);
            setWaitlistEntries([]);
          }
        } else {
          console.error('Failed to fetch waitlist entries, status:', response.status);
        }
      } catch (error) {
        console.error('Error fetching waitlist entries:', error);
      }
    };
    
    fetchWaitlistEntries();
  }, []);
  
  // Debug: Log waitlist entries whenever they change
  useEffect(() => {
    console.log('Current waitlist entries state:', waitlistEntries);
  }, [waitlistEntries]);
  
  // Handle email selection
  const handleEmailSelection = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedEmail = e.target.value;
    setValue('email', selectedEmail);
    
    if (selectedEmail) {
      const selectedUser = waitlistEntries.find(entry => entry.email === selectedEmail);
      if (selectedUser) {
        setSelectedUserInfo({
          name: selectedUser.name,
          email: selectedUser.email,
          phone: selectedUser.phone,
          sentEmails: selectedUser.sentEmails
        });
      }
    } else {
      setSelectedUserInfo(null);
    }
  };

  // Handle template selection
  const handleTemplateSelection = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const templateValue = e.target.value;
    setSelectedTemplate(templateValue);
    let template: EmailTemplate | null = null;
    
    switch (templateValue) {
      case 'welcome':
        template = welcomeEmailTemplate;
        break;
      case 'reminder':
        template = reminderEmailTemplate;
        break;
      default:
        template = null;
    }
    
    if (template) {
      setValue('subject', template.subject);
      setValue('body', template.body);
      setValue('templateName', template.name);
    }
  };
  
  // Check if a template has been sent to the selected user
  const hasTemplateSent = (templateName: string): boolean | undefined => {
    if (!selectedUserInfo || !selectedUserInfo.sentEmails) return undefined;
    return selectedUserInfo.sentEmails.some(email => email.templateName === templateName);
  };

  // Format date for display
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' });
  };
  
  const onSubmit = async (data: EmailFormData) => {
    setIsLoading(true);
    setResult(null);
    
    try {
      const response = await fetch('/api/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      const result = await response.json();
      
      if (response.ok) {
        setResult({ success: true, message: result.message });
        // Refresh the waitlist entries to update the sent emails status
        const waitlistResponse = await fetch('/api/waitlist');
        if (waitlistResponse.ok) {
          const waitlistData = await waitlistResponse.json();
          if (waitlistData.entries && Array.isArray(waitlistData.entries)) {
            setWaitlistEntries(waitlistData.entries);
            
            // Update selected user info if a user is selected
            if (data.email) {
              const updatedUser = waitlistData.entries.find((entry: WaitlistEntry) => entry.email === data.email);
              if (updatedUser) {
                setSelectedUserInfo({
                  name: updatedUser.name,
                  email: updatedUser.email,
                  phone: updatedUser.phone,
                  sentEmails: updatedUser.sentEmails
                });
              }
            }
          }
        }
      } else {
        setResult({ success: false, error: result.error });
      }
    } catch {
      setResult({ success: false, error: 'Erro ao enviar email' });
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <div className="blur-effect top-0 left-0"></div>
      <div className="blur-effect bottom-0 right-0 bg-secondary"></div>
      
      <div className="container-custom py-10 md:py-16">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-center mb-10"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Enviar Emails</span> para Lista de Espera
          </h1>
          <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-lg max-w-3xl mx-auto">
            Envie emails personalizados para os inscritos na lista de espera do curso.
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="card p-8 border-2 border-primary glow-effect mb-8"
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-6">
              <label htmlFor="emailSelect" className="block text-lg font-medium mb-2">
                Selecione um Email (opcional)
              </label>
              <select
                id="emailSelect"
                className="w-full px-4 py-3 bg-shape border border-gray-medium rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                onChange={handleEmailSelection}
                defaultValue=""
              >
                <option value="">Selecione um email ou deixe em branco para enviar para todos</option>
                {waitlistEntries.map((entry) => (
                  <option key={entry.id} value={entry.email}>
                    {entry.email} - {entry.name}
                  </option>
                ))}
              </select>
              <input
                type="hidden"
                {...register('email')}
              />
              <p className="text-sm text-gray-medium mt-2">
                Se selecionado, o email será enviado apenas para este destinatário.
              </p>
            </div>
            
            {selectedUserInfo && (
              <div className="mb-6 p-4 bg-primary/10 rounded-lg border-l-4 border-primary">
                <h3 className="font-bold text-lg mb-2">Informações do Destinatário:</h3>
                <p className="mb-1"><span className="font-medium">Nome:</span> {selectedUserInfo.name}</p>
                <p className="mb-1"><span className="font-medium">Email:</span> {selectedUserInfo.email}</p>
                <p className="mb-1"><span className="font-medium">Telefone:</span> {selectedUserInfo.phone}</p>
                
                {selectedUserInfo.sentEmails && selectedUserInfo.sentEmails.length > 0 && (
                  <div className="mt-3">
                    <h4 className="font-medium mb-1">Emails já enviados:</h4>
                    <ul className="list-disc pl-5">
                      {selectedUserInfo.sentEmails.map((email, index) => (
                        <li key={index} className="text-sm">
                          {email.templateName === 'welcome_template' ? 'Boas-vindas' : 
                           email.templateName === 'reminder_template' ? 'Lembrete' : 
                           email.templateName} 
                          <span className="text-gray-medium">({formatDate(email.sentAt)})</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            <div className="mb-6">
              <label htmlFor="templateSelect" className="block text-lg font-medium mb-2">
                Selecione um Template
              </label>
              <select
                id="templateSelect"
                className="w-full px-4 py-3 bg-shape border border-gray-medium rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                onChange={handleTemplateSelection}
                value={selectedTemplate}
              >
                <option value="">Selecione um template ou crie seu próprio email</option>
                <option value="welcome" disabled={selectedUserInfo ? hasTemplateSent('welcome_template') : undefined}>
                  Template de Boas-vindas {selectedUserInfo && hasTemplateSent('welcome_template') ? '(Já enviado)' : ''}
                </option>
                <option value="reminder" disabled={selectedUserInfo ? hasTemplateSent('reminder_template') : undefined}>
                  Template de Lembrete {selectedUserInfo && hasTemplateSent('reminder_template') ? '(Já enviado)' : ''}
                </option>
              </select>
              <input
                type="hidden"
                {...register('templateName')}
              />
              <p className="text-sm text-gray-medium mt-2">
                Selecione um template para preencher automaticamente o assunto e conteúdo do email.
                Templates já enviados para o destinatário selecionado estarão desabilitados.
              </p>
            </div>
            
            <div className="mb-6">
              <label htmlFor="subject" className="block text-lg font-medium mb-2">
                Assunto *
              </label>
              <input
                id="subject"
                type="text"
                className="w-full px-4 py-3 bg-shape border border-gray-medium rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                {...register('subject', { required: 'Assunto é obrigatório' })}
              />
              {errors.subject && (
                <p className="text-error text-sm mt-1">{errors.subject.message}</p>
              )}
            </div>
            
            <div className="mb-6">
              <label htmlFor="body" className="block text-lg font-medium mb-2">
                Conteúdo do Email (HTML) *
              </label>
              <textarea
                id="body"
                rows={10}
                className="w-full px-4 py-3 bg-shape border border-gray-medium rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                placeholder="<p>Olá {name},</p>\n<p>Seu email é {email} e seu telefone é {phone}.</p>"
                {...register('body', { required: 'Conteúdo do email é obrigatório' })}
              />
              {errors.body && (
                <p className="text-error text-sm mt-1">{errors.body.message}</p>
              )}
              <p className="text-sm text-gray-medium mt-2">
                Use {'{name}'}, {'{email}'} e {'{phone}'} como placeholders para os dados do usuário.
              </p>
            </div>
            
            <button
              type="submit"
              disabled={isLoading}
              className="w-full md:w-2/3 lg:w-1/2 btn-primary py-3 flex items-center justify-center text-lg font-bold relative overflow-hidden group mx-auto"
            >
              <span className="relative z-10">{isLoading ? 'Enviando...' : 'Enviar Email'}</span>
              <span className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
            </button>
          </form>
        </motion.div>
        
        {result && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={`p-4 rounded-lg ${result.success ? 'bg-success/10 text-success border-l-4 border-success' : 'bg-error/10 text-error border-l-4 border-error'}`}
          >
            {result.success ? (
              <p>{result.message}</p>
            ) : (
              <p>{result.error}</p>
            )}
          </motion.div>
        )}
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 card p-6"
        >
          <h2 className="text-xl font-semibold mb-4 gradient-text">Instruções</h2>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">✓</span>
              <span>Para enviar para todos os usuários da lista de espera, deixe o campo de email específico em branco.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">✓</span>
              <span>Para enviar para apenas um usuário, preencha o campo de email específico.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">✓</span>
              <span>Você pode usar HTML no conteúdo do email para formatação.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">✓</span>
              <span>Templates já enviados para um destinatário específico serão marcados e não poderão ser selecionados novamente.</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}