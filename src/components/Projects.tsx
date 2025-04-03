
import React from 'react';
import { ExternalLink, GitBranch } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Análise Preditiva de Dados Acadêmicos',
      description: 'Sistema de análise que utiliza machine learning para prever o desempenho de estudantes e identificar potenciais desistências, permitindo intervenções preventivas.',
      tags: ['Python', 'Scikit-Learn', 'Pandas', 'Visualização de Dados'],
      image: 'bg-gradient-to-br from-blue-900 to-indigo-900'
    },
    {
      title: 'Processamento de Linguagem Natural para Textos Científicos',
      description: 'Ferramenta que analisa e categoriza automaticamente artigos científicos, facilitando a pesquisa acadêmica e a descoberta de conhecimento.',
      tags: ['NLP', 'BERT', 'TensorFlow', 'Python'],
      image: 'bg-gradient-to-br from-purple-900 to-indigo-900'
    },
    {
      title: 'Dashboard Interativo de Indicadores Educacionais',
      description: 'Plataforma visual que integra e apresenta indicadores de desempenho educacional, permitindo análises comparativas e identificação de tendências.',
      tags: ['R', 'Shiny', 'Tableau', 'SQL'],
      image: 'bg-gradient-to-br from-blue-900 to-cyan-900'
    },
    {
      title: 'Sistema de Recomendação de Material Didático',
      description: 'Algoritmo de recomendação que sugere materiais de estudo personalizados com base no perfil e nas necessidades específicas de cada estudante.',
      tags: ['Python', 'Collaborative Filtering', 'Flask', 'MongoDB'],
      image: 'bg-gradient-to-br from-teal-900 to-blue-900'
    },
  ];

  return (
    <section id="projects" className="py-20 bg-lads-dark relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#1E90FF_1px,transparent_1px)] opacity-10 [background-size:20px_20px]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nossos <span className="gradient-text">Projetos</span>
          </h2>
          <p className="max-w-3xl mx-auto text-lads-light text-lg">
            Exploramos a fronteira do conhecimento em Data Science e IA através de projetos 
            inovadores desenvolvidos por nossa equipe de estudantes e professores.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(30,144,255,0.15)] border border-lads-muted hover:border-lads-accent"
            >
              <div className={`h-48 ${project.image} flex items-center justify-center p-6`}>
                <h3 className="text-2xl font-semibold text-white text-center">{project.title}</h3>
              </div>
              <div className="p-6 bg-gradient-to-b from-lads-dark to-lads-black">
                <p className="text-lads-light mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="text-xs bg-lads-muted text-lads-light px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <button className="flex items-center text-sm text-lads-accent hover:text-blue-400 transition-colors">
                    <ExternalLink size={16} className="mr-1" /> Ver detalhes
                  </button>
                  <button className="flex items-center text-sm text-lads-accent hover:text-blue-400 transition-colors">
                    <GitBranch size={16} className="mr-1" /> Repositório
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="#" 
            className="inline-block border border-lads-accent text-lads-accent hover:bg-lads-accent hover:text-white font-semibold px-8 py-3 rounded-md transition-colors"
          >
            Ver todos os projetos
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
