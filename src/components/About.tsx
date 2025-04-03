
import React from 'react';
import { Database, BrainCog, LineChart, Users, Lightbulb, GraduationCap } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Database className="h-10 w-10 text-lads-accent" />,
      title: 'Ciência de Dados',
      description: 'Exploramos e analisamos dados complexos para extrair insights valiosos e transformá-los em conhecimento aplicável.'
    },
    {
      icon: <BrainCog className="h-10 w-10 text-lads-accent" />,
      title: 'Inteligência Artificial',
      description: 'Desenvolvemos algoritmos e modelos de IA que resolvem problemas reais e potencializam a tomada de decisão.'
    },
    {
      icon: <LineChart className="h-10 w-10 text-lads-accent" />,
      title: 'Análise Preditiva',
      description: 'Utilizamos técnicas estatísticas avançadas para prever tendências e comportamentos futuros com base em dados históricos.'
    },
    {
      icon: <Users className="h-10 w-10 text-lads-accent" />,
      title: 'Comunidade Acadêmica',
      description: 'Reunimos estudantes e professores apaixonados por tecnologia para compartilhar conhecimento e experiências.'
    },
    {
      icon: <Lightbulb className="h-10 w-10 text-lads-accent" />,
      title: 'Inovação',
      description: 'Buscamos constantemente soluções criativas e inovadoras para desafios tecnológicos e sociais.'
    },
    {
      icon: <GraduationCap className="h-10 w-10 text-lads-accent" />,
      title: 'Educação',
      description: 'Promovemos workshops, cursos e eventos para disseminar conhecimento em Data Science e IA.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-lads-dark to-lads-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Sobre a <span className="gradient-text">LADS</span>
          </h2>
          <p className="max-w-3xl mx-auto text-lads-light text-lg">
            A Liga Acadêmica de Ciência de Dados e IA (LADS) é uma organização dedicada 
            ao estudo, desenvolvimento e aplicação de tecnologias avançadas de análise de dados 
            e inteligência artificial em contextos acadêmicos e profissionais.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="tech-card flex flex-col items-center text-center"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-lads-light">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-lads-black/50 rounded-xl p-8 border border-lads-muted">
          <h3 className="text-2xl font-semibold mb-6 text-center">Nossa Missão</h3>
          <div className="flex flex-col md:flex-row gap-10">
            <div className="flex-1">
              <p className="text-lads-light mb-4">
                Nossa missão é fomentar a excelência acadêmica e profissional em Ciência de Dados e 
                Inteligência Artificial, criando um ambiente colaborativo para estudantes e professores 
                desenvolverem habilidades técnicas e realizarem projetos inovadores.
              </p>
              <p className="text-lads-light">
                Trabalhamos para construir uma comunidade forte e diversa, comprometida com o uso ético 
                e responsável da tecnologia para resolver problemas complexos e contribuir para o avanço 
                científico e social.
              </p>
            </div>
            <div className="flex-1">
              <p className="text-lads-light mb-4">
                Buscamos estabelecer parcerias com instituições acadêmicas, empresas e outras organizações, 
                criando oportunidades para nossos membros aplicarem seus conhecimentos em projetos reais 
                e impactantes.
              </p>
              <p className="text-lads-light">
                Acreditamos que a democratização do conhecimento em Data Science e IA é fundamental para 
                formar profissionais preparados para os desafios do futuro digital, capazes de inovar e 
                transformar positivamente a sociedade.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
