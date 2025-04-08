'use client';

import { motion } from 'framer-motion';
import { FaShieldAlt, FaClock, FaUsers, FaGraduationCap, FaMoneyBillWave } from 'react-icons/fa';

export default function GuaranteeAndUrgency() {
    // Data fixa para o término da promoção (07/05/2025)
    const deadline = new Date('2025-05-07');
    const formattedDeadline = deadline.toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });

    // Número limitado de vagas
    const totalSpots = 20;
    const remainingSpots = 16;
    const spotPercentage = Math.round((remainingSpots / totalSpots) * 100);

    return (
        <section className="py-16 bg-gray-light relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary"></div>
            <div className="blur-effect bottom-20 right-20 opacity-20"></div>
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Garantia de Satisfação */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="card p-8 border-2 border-success glow-effect"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="text-success text-5xl">
                                <FaShieldAlt />
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold">Garantia de Satisfação</h3>
                        </div>
                        <p className="text-lg mb-6">
                            Tenha <span className="font-bold text-success">7 dias de garantia</span> após o início do curso. Se você não ficar satisfeito com o conteúdo ou metodologia, devolvemos 100% do seu investimento, sem perguntas.
                        </p>
                        <div className="bg-success/10 p-4 rounded-lg">
                            <h4 className="font-bold text-lg mb-2">O que garantimos:</h4>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-2">
                                    <span className="text-success mt-1">✓</span>
                                    <span>Arquivos de aula e projetos completos com repositório no GitHub do curso com as tecnologias mais recentes do mercado</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-success mt-1">✓</span>
                                    <span>Suporte personalizado durante todo o curso para tirar suas dúvidas</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-success mt-1">✓</span>
                                    <span>Projetos práticos que você poderá adicionar ao seu portfólio profissional</span>
                                </li>
                            </ul>
                        </div>
                    </motion.div>

                    {/* Urgência e Escassez */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="card p-8 border-2 border-warning glow-effect"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="text-warning text-5xl">
                                <FaClock />
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold">Vagas Limitadas</h3>
                        </div>

                        <div className="mb-6">
                            <div className="flex justify-between mb-2">
                                <span className="font-bold">Vagas restantes: {remainingSpots}/{totalSpots}</span>
                                <span className="text-warning font-bold">{spotPercentage}%</span>
                            </div>
                            <div className="w-full bg-gray-medium/30 rounded-full h-4">
                                <div
                                    className="bg-warning h-4 rounded-full"
                                    style={{ width: `${spotPercentage}%` }}
                                ></div>
                            </div>
                        </div>

                        <div className="mb-6">
                            <p className="text-lg font-bold mb-2">Promoção válida até:</p>
                            <div className="bg-warning/20 p-4 rounded-lg text-center">
                                <p className="text-xl font-bold text-warning">{formattedDeadline}</p>
                            </div>
                        </div>

                        <div className="bg-warning/10 p-4 rounded-lg mb-6">
                            <h4 className="font-bold text-lg mb-2">Por que se inscrever agora:</h4>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-2">
                                    <span className="text-warning mt-1"><FaMoneyBillWave /></span>
                                    <span>Preço promocional de lançamento com <span className="font-bold">30% de desconto</span></span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-warning mt-1"><FaUsers /></span>
                                    <span>Turmas pequenas para garantir atenção personalizada</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-warning mt-1"><FaGraduationCap /></span>
                                    <span>Bônus exclusivos para os primeiros inscritos</span>
                                </li>
                            </ul>
                        </div>

                        <div className="flex justify-center">
                            <a href="#inscricao" className="block btn-primary flex justify-center text-center text-white font-bold py-3 px-6 rounded-lg hover:opacity-90 transition duration-300">
                                Garantir minha vaga agora
                            </a>
                        </div>

                    </motion.div>
                </div>
            </div>
        </section>
    );
}