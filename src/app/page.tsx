'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaCode, FaLaptopCode, FaUsers, FaGraduationCap, FaBriefcase, FaCheckCircle, FaLinkedin, FaGithub, FaHtml5, FaNodeJs } from 'react-icons/fa';
import { SiTailwindcss, SiTypescript, SiSupabase, SiPostgresql, SiPrisma } from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';
import { DiJavascript } from 'react-icons/di';

import SubscriptionForm from './components/SubscriptionForm';
import GuaranteeAndUrgency from './components/GuaranteeAndUrgency';

export default function Home() {

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <header className="bg-background text-white relative overflow-hidden">  
        <div className="blur-effect top-0 left-0"></div>
        <div className="blur-effect bottom-0 right-0 bg-secondary"></div>
        <div className="container-custom py-10 md:py-24">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
            <motion.div 
              className="w-full md:w-1/2 text-center md:text-left"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4">
                Aprenda <span className="gradient-text">Programação Web</span> em Santarém-PA
              </h1>
              <p className="text-base sm:text-lg md:text-xl mb-3 md:mb-4">
                Curso híbrido com aulas presenciais e online. Desenvolva habilidades práticas para o mercado de trabalho.
              </p>
              <div className="mb-6 md:mb-8 bg-primary/10 p-3 rounded-lg border-l-4 border-primary">
                <p className="font-bold">🔥 Desconto especial para as primeiras inscrições!</p>
                <p className="text-sm">Garanta sua vaga com condições exclusivas</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
                <a href="#inscricao" className="btn-primary text-center relative overflow-hidden group">
                  <span className="relative z-10">Garanta Sua Vaga</span>
                  <span className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                </a>
                <a href="#sobre" className="btn-secondary text-center">
                  Saiba Mais
                </a>
              </div>
            </motion.div>
            <motion.div 
              className="w-full md:w-1/2 mt-8 md:mt-0"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="relative w-full h-[250px] sm:h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image 
                  src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97"
                  alt="Programação Web"
                  fill
                  style={{ objectFit: 'cover' }}
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </header>

      <main>
      {/* Sobre o Curso */}
        <section id="sobre" className="py-16 bg-gray-light relative overflow-hidden">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Sobre o Curso</h2>
              <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
              <p className="text-lg max-w-3xl mx-auto">
                Um curso completo de programação web com foco em tecnologias modernas e demandadas pelo mercado. 
                <span className="font-bold text-primary">Aprenda de forma prática e construa projetos reais para seu portfólio.</span>
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div 
                className="card p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="text-primary text-4xl mb-4">
                  <FaLaptopCode />
                </div>
                <h3 className="text-xl font-bold mb-2">Formato Híbrido</h3>
                <p>Aulas presenciais em Santarém-PA combinadas com conteúdo online para você estudar no seu ritmo.</p>
              </motion.div>

              <motion.div 
                className="card p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="text-primary text-4xl mb-4">
                  <FaCode />
                </div>
                <h3 className="text-xl font-bold mb-2">Projetos Práticos</h3>
                <p>Desenvolva projetos reais que poderão compor seu portfólio profissional e te destacar no mercado.</p>
              </motion.div>

              <motion.div 
                className="card p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="text-primary text-4xl mb-4">
                  <FaUsers />
                </div>
                <h3 className="text-xl font-bold mb-2">Networking</h3>
                <p>Conecte-se com outros estudantes e profissionais da área, ampliando suas oportunidades de carreira.</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Tecnologias que Você Vai Aprender */}
        <section className="py-16 bg-gray-light relative overflow-hidden">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Tecnologias que Você Vai Aprender</h2>
              <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
              <p className="text-lg max-w-3xl mx-auto mb-8">
                Stack completa de tecnologias modernas para desenvolvimento web full-stack
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Frontend */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-center mb-6">Frontend</h3>
                <motion.div className="card p-6 glow-effect" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-[#000000] text-4xl"><TbBrandNextjs /></div>
                    <h3 className="text-xl font-semibold">Next.js</h3>
                  </div>
                  <p>Framework React para produção com renderização híbrida e otimização automática.</p>
                </motion.div>

                <motion.div className="card p-6 glow-effect" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-[#E44D26] text-4xl"><FaHtml5 /></div>
                    <h3 className="text-xl font-semibold">HTML5</h3>
                  </div>
                  <p>Linguagem de marcação para estruturação de conteúdo web.</p>
                </motion.div>

                <motion.div className="card p-6 glow-effect" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-[#38B2AC] text-4xl"><SiTailwindcss /></div>
                    <h3 className="text-xl font-semibold">Tailwind CSS</h3>
                  </div>
                  <p>Framework CSS utilitário para desenvolvimento rápido e flexível.</p>
                </motion.div>
              </div>

              {/* Backend */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-center mb-6">Backend</h3>
                <motion.div className="card p-6 glow-effect" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-[#44BB3E] text-4xl"><FaNodeJs /></div>
                    <h3 className="text-xl font-semibold">Node.js</h3>
                  </div>
                  <p>Ambiente de execução JavaScript do lado do servidor.</p>
                </motion.div>

                <motion.div className="card p-6 glow-effect" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.5 }}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-[#F7DF1E] text-4xl"><DiJavascript /></div>
                    <h3 className="text-xl font-semibold">JavaScript</h3>
                  </div>
                  <p>Linguagem de programação essencial para desenvolvimento web moderno.</p>
                </motion.div>

                <motion.div className="card p-6 glow-effect" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.6 }}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-[#3178C6] text-4xl"><SiTypescript /></div>
                    <h3 className="text-xl font-semibold">TypeScript</h3>
                  </div>
                  <p>Superset JavaScript com tipagem estática para código mais seguro.</p>
                </motion.div>
              </div>

              {/* Database/Infrastructure */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-center mb-6">Banco de Dados</h3>
                <motion.div className="card p-6 glow-effect" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.7 }}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-[#336791] text-4xl"><SiPostgresql /></div>
                    <h3 className="text-xl font-semibold">PostgreSQL</h3>
                  </div>
                  <p>Sistema de banco de dados relacional robusto e confiável.</p>
                </motion.div>

                <motion.div className="card p-6 glow-effect" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.8 }}>
                  <div className="text-[#3ECF8E] text-4xl"><SiSupabase /></div>
                  <h3 className="text-xl font-semibold">Supabase</h3>
                  <p>Plataforma de backend como serviço com autenticação e banco de dados.</p>
                </motion.div>

                <motion.div className="card p-6 glow-effect" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.9 }}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-[#5A67D8] text-4xl"><SiPrisma /></div>
                    <h3 className="text-xl font-semibold">Prisma ORM</h3>
                  </div>
                  <p>ORM moderno para Node.js e TypeScript com foco em segurança e produtividade.</p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Para quem é o curso */}
        <section className="py-16 bg-gray-light relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary"></div>
          <div className="blur-effect bottom-20 left-20 opacity-20"></div>
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Para quem é este curso?</h2>
              <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div 
                className="card p-6"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-primary text-4xl mb-4">
                  <FaGraduationCap />
                </div>
                <h3 className="text-xl font-bold mb-2">Iniciantes em Programação</h3>
                <p>Pessoas sem experiência prévia que desejam ingressar no mundo da programação web de forma estruturada e prática.</p>
              </motion.div>

              <motion.div 
                className="card p-6"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="text-primary text-4xl mb-4">
                  <FaBriefcase />
                </div>
                <h3 className="text-xl font-bold mb-2">Profissionais em Transição</h3>
                <p>Pessoas que desejam mudar de carreira e ingressar na área de tecnologia com foco em desenvolvimento web.</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Professor Section - NEW */}
        <section className="py-16 bg-background relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent"></div>
          <div className="blur-effect top-40 left-20 opacity-20"></div>
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Conheça o Professor</h2>
              <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            </motion.div>

            <div className="flex flex-col md:flex-row gap-12 items-center">
              <motion.div 
                className="md:w-1/3 w-full max-w-md mx-auto"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="rounded-lg overflow-hidden shadow-xl border-4 border-primary dark:border-gray-800">
                  <Image 
                    src="/professor-kenneson-desenvolvedor-web.jpg"
                    alt="Professor do Curso"
                    width={400}
                    height={600}
                    style={{ maxWidth: '100%', height: 'auto' }}
                    priority
                  />
                </div>
              </motion.div>
              
              <motion.div 
                className="md:w-2/3"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3">Prof. Kenneson Anderson</h3>
                <p className="text-base md:text-lg font-medium text-primary mb-3 md:mb-4">Desenvolvedor Full Stack & Instrutor</p>
                
                <p className="mb-4 text-justify">
                Com mais de 2 anos de experiência no desenvolvimento de aplicações web, é especialista em tecnologias modernas como React, Node.js e arquiteturas em nuvem. Formado em Gestão de TI, combina sólida formação acadêmica com experiência prática no mercado. Atualmente, exerce a função de desenvolvedor Full Stack no setor de inovação de uma empresa multinacional de cybersegurança, utilizando tecnologias avançadas e incorporando inteligência artificial em produtos de ponta.
                </p>
                
                <div className="mb-6">
                  <h4 className="text-xl font-semibold mb-3">Principais Habilidades:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
                    <div className="flex items-center gap-2">
                      <span className="text-primary"><FaCheckCircle /></span>
                      <span>Desenvolvimento Front-end</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-primary"><FaCheckCircle /></span>
                      <span>Desenvolvimento Back-end</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-primary"><FaCheckCircle /></span>
                      <span>Arquitetura de Software</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-primary"><FaCheckCircle /></span>
                      <span>DevOps & Cloud</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-primary"><FaCheckCircle /></span>
                      <span>UI/UX Design</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-primary"><FaCheckCircle /></span>
                      <span>Metodologias Ágeis</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <a 
                    href="https://www.linkedin.com/in/kenneson-anderson/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-[#0077B5] text-white py-2 px-4 rounded-lg hover:bg-[#005885] transition duration-300"
                  >
                    <FaLinkedin /> LinkedIn
                  </a>
                  <a 
                    href="https://github.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-[#333] text-white py-2 px-4 rounded-lg hover:bg-[#111] transition duration-300"
                  >
                    <FaGithub /> GitHub
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Garantia e Urgência */}
        <GuaranteeAndUrgency />
        
        {/* Detalhes do Curso */}
        <section className="py-16 bg-gray-light relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary"></div>
          <div className="blur-effect bottom-40 right-20 opacity-20"></div>
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Detalhes do Curso</h2>
              <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="col-span-1 md:col-span-2"
              >
                <div className="bg-primary text-white p-6 rounded-lg glow-effect">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-2xl font-bold mb-4">Investimento</h3>
                      <div className="mb-6">
                        <p className="text-lg mb-2">Valor promocional de lançamento:</p>
                        <p className="text-4xl font-bold mb-2">R$ 257,00</p>
                        <p className="text-sm">ou até 6x de R$ 48,89</p>
                      </div>
                      <div className="mb-6">
                        <p className="text-lg font-bold">O que está incluso:</p>
                        <ul className="space-y-2 mt-2">
                          <li className="flex items-center gap-2">
                            <FaCheckCircle />
                            <span>Material didático completo</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <FaCheckCircle />
                            <span>Projetos práticos para portfólio</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <FaCheckCircle />
                            <span>Certificado de conclusão</span>
                          </li>
                        </ul>
                      </div>
                      <div className="mb-6">
                        <p className="text-lg font-bold">Informações Gerais:</p>
                        <ul className="space-y-2 mt-2">
                          <li className="flex items-center gap-2">
                            <FaCheckCircle />
                            <span><span className="font-bold">Duração:</span> 1 mês e 1 semana</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <FaCheckCircle />
                            <span><span className="font-bold">Carga Horária:</span> 60 horas</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <FaCheckCircle />
                            <span><span className="font-bold">Formato:</span> Aulas semanais online + <br></br> encontros presenciais para desenvolvimento de projetos</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <FaCheckCircle />
                            <span><span className="font-bold">Local:</span> Centro de Santarém-PA</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <FaCheckCircle />
                            <span><span className="font-bold">Certificado:</span> Sim, ao concluir o curso</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div>
                      <p className="text-lg font-bold mb-3">Cronograma do curso:</p>
                      <div className="bg-white/10 p-3 rounded-lg">
                        <p className="text-white font-medium mb-2">✅ Curso completo em apenas 5 semanas (1 mês e 1 semana)</p>
                        <p className="text-white font-medium mb-2">📅 Calendário do curso:</p>
                        <div className="overflow-x-auto">
                          <table className="w-full text-sm">
                            <thead>
                              <tr className="border-b border-white/20">
                                <th className="text-left py-2 pr-2">Semana</th>
                                <th className="text-left py-2 pr-2">Conteúdo principal</th>
                                <th className="text-left py-2">Horas</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="border-b border-white/10">
                                <td className="py-2 pr-2">1</td>
                                <td className="py-2 pr-2">Fundamentos Web, JS moderno, TS básico</td>
                                <td className="py-2">12h</td>
                              </tr>
                              <tr className="border-b border-white/10">
                                <td className="py-2 pr-2">2</td>
                                <td className="py-2 pr-2">Tailwind, Next.js (App Router), layout</td>
                                <td className="py-2">12h</td>
                              </tr>
                              <tr className="border-b border-white/10">
                                <td className="py-2 pr-2">3</td>
                                <td className="py-2 pr-2">Supabase, PostgreSQL, Prisma</td>
                                <td className="py-2">12h</td>
                              </tr>
                              <tr className="border-b border-white/10">
                                <td className="py-2 pr-2">4</td>
                                <td className="py-2 pr-2">Projeto: CRUD de Produtos + Custos</td>
                                <td className="py-2">12h</td>
                              </tr>
                              <tr>
                                <td className="py-2 pr-2">5</td>
                                <td className="py-2 pr-2">Validações, melhorias, deploy e revisão final</td>
                                <td className="py-2">12h</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <a href="#inscricao" className="block btn-primary text-center text-white font-bold py-3 px-6 rounded-lg hover:opacity-90 transition duration-300 mt-6">
                        Garanta sua vaga
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Formulário de Inscrição */}
        <section id="inscricao" className="py-16 bg-background relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary to-primary"></div>
          <div className="blur-effect top-40 right-20 opacity-20"></div>
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Inscreva-se Agora</h2>
              <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
              <p className="text-lg max-w-3xl mx-auto mb-2">
                Preencha o formulário abaixo para garantir sua vaga ou solicitar mais informações sobre o curso.
              </p>
              <p className="text-primary font-bold text-xl mb-4">Vagas com 30% de desconto!</p>
              <div className="flex justify-center mb-6">
                <div className="bg-warning/20 p-3 rounded-lg text-center inline-block">
                <p className="text-warning font-bold">Oferta válida até: {new Date('2025-05-07').toLocaleDateString('pt-BR')}</p>
                </div>
              </div>
            </motion.div>

            <SubscriptionForm />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-dark text-foreground py-12 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary"></div>
        <div className="blur-effect bottom-0 right-0 opacity-20"></div>
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="bg-card-bg p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-primary">Curso de Programação Web</h3>
              <p className="mb-4">Aprenda a desenvolver aplicações web modernas e inicie sua carreira em tecnologia.</p>
              <p className="flex items-center gap-2"><span className="text-primary">📍</span> Santarém, Pará - Brasil</p>
            </div>
            <div className="bg-card-bg p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-primary">Contato</h3>
              <p className="mb-3 flex items-center gap-2"><span className="text-primary">✉️</span> devkenneson@gmail.com</p>
              <p className="mb-3 flex items-center gap-2"><span className="text-primary">📱</span> WhatsApp: (93) 98811-1109</p>
              <p className="flex items-center gap-2"><span className="text-primary">📸</span> Instagram: @cursoprogramacaostm</p>
            </div>
            <div className="bg-card-bg p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-primary">Links Rápidos</h3>
              <ul className="space-y-3">
                <li><a href="#sobre" className="hover:text-primary transition duration-300 flex items-center gap-2"><span className="text-primary">→</span> Sobre o Curso</a></li>
                <li><a href="#inscricao" className="hover:text-primary transition duration-300 flex items-center gap-2"><span className="text-primary">→</span> Inscrição</a></li>
                <li><a href="#" className="hover:text-primary transition duration-300 flex items-center gap-2"><span className="text-primary">→</span> Política de Privacidade</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p>&copy; {new Date().getFullYear()} Curso de Programação Web Santarém. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
