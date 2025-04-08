'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

type TestimonialProps = {
  name: string;
  role: string;
  image: string;
  text: string;
  rating: number;
};

const Testimonial = ({ name, role, image, text, rating }: TestimonialProps) => {
  return (
    <motion.div 
      className="card p-6 flex flex-col h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-start mb-4">
        <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-primary">
          <Image 
            src={image} 
            alt={name}
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div>
          <h4 className="text-lg font-bold">{name}</h4>
          <p className="text-gray-medium text-sm">{role}</p>
          <div className="flex mt-1">
            {[...Array(5)].map((_, i) => (
              <FaStar 
                key={i} 
                className={i < rating ? 'text-yellow-400' : 'text-gray-medium'} 
                size={14} 
              />
            ))}
          </div>
        </div>
      </div>
      <div className="flex-grow">
        <FaQuoteLeft className="text-primary opacity-20 text-4xl mb-2" />
        <p className="italic text-gray-dark">&quot;{text}&quot;</p>
      </div>
    </motion.div>
  );
};

export default function Testimonials() {
  const testimonials = [
    {
      name: "Ana Silva",
      role: "Estudante de Administração",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      text: "Nunca imaginei que conseguiria aprender a programar tão rapidamente. O método de ensino é excelente e o professor tem muita paciência. Já estou desenvolvendo meu primeiro site!",
      rating: 5
    },
    {
      name: "Carlos Mendes",
      role: "Designer Gráfico",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      text: "Como designer, sempre quis aprender a implementar meus próprios designs. Este curso me deu as ferramentas para fazer isso e muito mais. Recomendo fortemente!",
      rating: 5
    },
    {
      name: "Juliana Costa",
      role: "Profissional em Transição de Carreira",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      text: "Estava insegura sobre mudar para a área de tecnologia, mas o curso me deu confiança e conhecimento prático. Já consegui meu primeiro freelance como desenvolvedora!",
      rating: 4
    }
  ];

  return (
    <section className="py-16 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary to-primary"></div>
      <div className="blur-effect top-40 left-20 opacity-20"></div>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">O Que Nossos Alunos Dizem</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg max-w-3xl mx-auto">
            Veja como nosso curso tem transformado a vida de pessoas como você
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial 
              key={index}
              name={testimonial.name}
              role={testimonial.role}
              image={testimonial.image}
              text={testimonial.text}
              rating={testimonial.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
}