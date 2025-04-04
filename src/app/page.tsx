'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaCode, FaLaptopCode, FaUsers, FaGraduationCap, FaBriefcase, FaCheckCircle, FaLinkedin, FaGithub, FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiTailwindcss, SiMysql, SiNextdotjs, SiTypescript, SiRedux, SiSass } from 'react-icons/si';

import SubscriptionForm from './components/SubscriptionForm';

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
              <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8">
                Curso híbrido com aulas presenciais e online. Desenvolva habilidades práticas para o mercado de trabalho.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
                <a href="#inscricao" className="btn-primary text-center">
                  Inscreva-se Agora
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
                Aprenda de forma prática e construa projetos reais.
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
        <section className="py-16 bg-background relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary"></div>
          <div className="blur-effect top-40 right-20 opacity-20"></div>
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
              <p className="text-lg max-w-3xl mx-auto">
                Domine as ferramentas e tecnologias mais utilizadas no mercado de desenvolvimento web.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <motion.div 
                className="card p-6 glow-effect"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-[#E44D26] text-4xl">
                    <FaHtml5 />
                  </div>
                  <div className="text-[#264DE4] text-4xl">
                    <FaCss3Alt />
                  </div>
                  <h3 className="text-xl font-bold">HTML5 e CSS3</h3>
                </div>
                <p>Fundamentos da web, estruturação semântica de páginas e estilização moderna com CSS. Aprenda a criar layouts responsivos e acessíveis.</p>
              </motion.div>

              <motion.div 
                className="card p-6 glow-effect"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-[#F7DF1E] text-4xl">
                    <FaJs />
                  </div>
                  <div className="text-[#3178C6] text-4xl">
                    <SiTypescript />
                  </div>
                  <h3 className="text-xl font-bold">JavaScript e TypeScript</h3>
                </div>
                <p>Programação dinâmica para web, manipulação do DOM e interatividade. Aprenda também TypeScript para desenvolvimento mais seguro e produtivo.</p>
              </motion.div>

              <motion.div 
                className="card p-6 glow-effect"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-[#61DAFB] text-4xl">
                    <FaReact />
                  </div>
                  <div className="text-[#764ABC] text-4xl">
                    <SiRedux />
                  </div>
                  <h3 className="text-xl font-bold">React e Redux</h3>
                </div>
                <p>Biblioteca para construção de interfaces modernas e reativas. Aprenda a criar componentes reutilizáveis e gerenciar estados complexos com Redux.</p>
              </motion.div>

              <motion.div 
                className="card p-6 glow-effect"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-[#000000] text-4xl">
                    <SiNextdotjs />
                  </div>
                  <div className="text-[#38B2AC] text-4xl">
                    <SiTailwindcss />
                  </div>
                  <h3 className="text-xl font-bold">Next.js e Tailwind</h3>
                </div>
                <p>Framework React para aplicações web completas com renderização híbrida. Combine com Tailwind CSS para criar interfaces modernas e responsivas rapidamente.</p>
              </motion.div>

              <motion.div 
                className="card p-6 glow-effect"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-[#339933] text-4xl">
                    <FaNodeJs />
                  </div>
                  <div className="text-[#4479A1] text-4xl">
                    <SiMysql />
                  </div>
                  <h3 className="text-xl font-bold">Node.js e Banco de Dados</h3>
                </div>
                <p>Desenvolvimento backend com JavaScript, criação de APIs RESTful e integração com bancos de dados SQL e NoSQL para aplicações completas.</p>
              </motion.div>

              <motion.div 
                className="card p-6 glow-effect"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-[#000000] text-4xl">
                    <FaGithub />
                  </div>
                  <div className="text-[#CC6699] text-4xl">
                    <SiSass />
                  </div>
                  <h3 className="text-xl font-bold">Git/GitHub e Sass</h3>
                </div>
                <p>Controle de versão e colaboração em projetos de desenvolvimento. Aprenda também a utilizar Sass para criar estilos CSS mais organizados e reutilizáveis.</p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="text-center"
            >
              <h3 className="text-2xl font-bold mb-4">Todas as tecnologias em um só lugar</h3>
              <div className="flex flex-wrap justify-center gap-6 mt-6">
                <div className="text-[#E44D26] text-4xl"><FaHtml5 /></div>
                <div className="text-[#264DE4] text-4xl"><FaCss3Alt /></div>
                <div className="text-[#F7DF1E] text-4xl"><FaJs /></div>
                <div className="text-[#61DAFB] text-4xl"><FaReact /></div>
                <div className="text-[#339933] text-4xl"><FaNodeJs /></div>
                <div className="text-[#000000] text-4xl"><FaGithub /></div>
                <div className="text-[#38B2AC] text-4xl"><SiTailwindcss /></div>
                <div className="text-[#4479A1] text-4xl"><SiMysql /></div>
                <div className="text-[#000000] text-4xl"><SiNextdotjs /></div>
                <div className="text-[#3178C6] text-4xl"><SiTypescript /></div>
                <div className="text-[#764ABC] text-4xl"><SiRedux /></div>
                <div className="text-[#CC6699] text-4xl"><SiSass /></div>
              </div>
            </motion.div>
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
                
                <p className="mb-4">
                  Com mais de 2 anos de experiência no desenvolvimento de aplicações web e mobile, 
                  Kenneson é especialista em tecnologias modernas como React, Node.js e arquiteturas em nuvem. 
                  Formado em Gestão de TI. Ele combina conhecimento acadêmico com experiência prática de mercado.
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
                    href="https://linkedin.com/in/professor" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-[#0077B5] text-white py-2 px-4 rounded-lg hover:bg-[#005885] transition duration-300"
                  >
                    <FaLinkedin /> LinkedIn
                  </a>
                  <a 
                    href="https://github.com/professor" 
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="card glow-effect p-6">
                  <h3 className="text-2xl font-bold mb-4">Informações Gerais</h3>
                  <ul className="space-y-3 md:space-y-4">
                    <li className="flex items-start gap-2 md:gap-3">
                      <span className="text-primary mt-1"><FaCheckCircle /></span>
                      <div>
                        <span className="font-bold">Duração:</span> 6 meses
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1"><FaCheckCircle /></span>
                      <div>
                        <span className="font-bold">Carga Horária:</span> 120 horas
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1"><FaCheckCircle /></span>
                      <div>
                        <span className="font-bold">Formato:</span> Aulas presenciais semanais + conteúdo online
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1"><FaCheckCircle /></span>
                      <div>
                        <span className="font-bold">Local:</span> Centro de Santarém-PA
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1"><FaCheckCircle /></span>
                      <div>
                        <span className="font-bold">Certificado:</span> Sim, ao concluir o curso
                      </div>
                    </li>
                  </ul>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="bg-primary text-white p-6 rounded-lg glow-effect">
                  <h3 className="text-2xl font-bold mb-4">Investimento</h3>
                  <div className="mb-6">
                    <p className="text-lg mb-2">Valor promocional de lançamento:</p>
                    <p className="text-4xl font-bold mb-2">R$ 1.200,00</p>
                    <p className="text-sm">ou 6x de R$ 220,00 sem juros</p>
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
                        <span>Acesso à plataforma online</span>
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
                  <a href="#inscricao" className="block btn-primary text-center text-white font-bold py-3 px-6 rounded-lg hover:opacity-90 transition duration-300">
                        Garanta sua vaga
                  </a>
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
              <p className="text-lg max-w-3xl mx-auto">
                Preencha o formulário abaixo para garantir sua vaga ou solicitar mais informações sobre o curso.
              </p>
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
              <p className="mb-3 flex items-center gap-2"><span className="text-primary">📱</span> WhatsApp: (93) 99999-9999</p>
              <p className="flex items-center gap-2"><span className="text-primary">📸</span> Instagram: @cursoprogramacaoweb</p>
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
