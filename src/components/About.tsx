
import React from 'react';
import { Brain, Target, BookOpen, Users, Award, Link } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Brain className="h-8 w-8 text-lads-accent" />,
      title: 'Pesquisa Avançada',
      description: 'Conduzimos pesquisas de ponta em Ciência de Dados e IA, buscando constantemente expandir fronteiras do conhecimento.'
    },
    {
      icon: <Target className="h-8 w-8 text-lads-accent" />,
      title: 'Projetos Aplicados',
      description: 'Desenvolvemos soluções práticas para problemas reais, aplicando conhecimentos teóricos em contextos do mundo real.'
    },
    {
      icon: <BookOpen className="h-8 w-8 text-lads-accent" />,
      title: 'Educação e Capacitação',
      description: 'Oferecemos workshops, cursos e materiais didáticos para disseminar conhecimento em Data Science e IA.'
    },
    {
      icon: <Users className="h-8 w-8 text-lads-accent" />,
      title: 'Comunidade Colaborativa',
      description: 'Construímos uma rede de estudantes, professores e profissionais para compartilhar experiências e conhecimentos.'
    },
    {
      icon: <Award className="h-8 w-8 text-lads-accent" />,
      title: 'Excelência Acadêmica',
      description: 'Mantemos os mais altos padrões de rigor acadêmico e excelência em todas as nossas atividades e projetos.'
    },
    {
      icon: <Link className="h-8 w-8 text-lads-accent" />,
      title: 'Parcerias Estratégicas',
      description: 'Colaboramos com instituições acadêmicas, empresas e organizações para ampliar o impacto do nosso trabalho.'
    }
  ];

  return (
    <section id="about" className="py-28 bg-gradient-to-b from-lads-black to-lads-dark">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block mb-4 px-4 py-1 border border-lads-accent/30 rounded-full bg-lads-accent/5">
              <span className="text-lads-accent text-sm">Sobre Nós</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Conheça a <span className="gradient-text">LADS</span>
            </h2>
            <p className="text-lads-light mb-6">
              A Liga Acadêmica de Ciência de Dados e IA (LADS) é uma organização dedicada 
              ao estudo, desenvolvimento e aplicação de tecnologias avançadas de análise de dados 
              e inteligência artificial em contextos acadêmicos e profissionais.
            </p>
            <p className="text-lads-light mb-8">
              Fundada por estudantes e professores apaixonados por tecnologia, a LADS busca construir 
              uma comunidade forte e diversa, comprometida com o uso ético e responsável da tecnologia 
              para resolver problemas complexos e contribuir para o avanço científico e social.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#team" 
                className="bg-lads-accent hover:bg-blue-600 text-white font-medium px-6 py-2.5 rounded-md transition-colors inline-flex justify-center"
              >
                Conheça Nossa Equipe
              </a>
              <a 
                href="#projects" 
                className="border border-lads-muted hover:border-lads-accent text-white hover:text-lads-accent font-medium px-6 py-2.5 rounded-md transition-colors inline-flex justify-center"
              >
                Ver Nossos Projetos
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="p-4 rounded-lg border border-lads-muted bg-lads-black/50 hover:border-lads-accent transition-all duration-300"
              >
                <div className="mb-3">{feature.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-lads-light">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
