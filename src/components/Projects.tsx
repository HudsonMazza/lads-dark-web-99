
import React, { useState } from 'react';
import { ExternalLink, GitBranch, Filter } from 'lucide-react';

const Projects = () => {
  const allProjects = [
    {
      title: 'Análise Preditiva de Dados Acadêmicos',
      description: 'Sistema que utiliza machine learning para prever o desempenho de estudantes e identificar potenciais desistências para intervenções preventivas.',
      tags: ['Python', 'Scikit-Learn', 'Pandas', 'Visualização'],
      image: 'bg-gradient-to-br from-blue-900 to-indigo-900',
      category: 'Machine Learning'
    },
    {
      title: 'NLP para Textos Científicos',
      description: 'Ferramenta que analisa e categoriza automaticamente artigos científicos, facilitando a pesquisa acadêmica e a descoberta de conhecimento.',
      tags: ['NLP', 'BERT', 'TensorFlow', 'Python'],
      image: 'bg-gradient-to-br from-purple-900 to-indigo-900',
      category: 'Deep Learning'
    },
    {
      title: 'Dashboard de Indicadores Educacionais',
      description: 'Plataforma visual que integra e apresenta indicadores de desempenho educacional, permitindo análises comparativas e identificação de tendências.',
      tags: ['R', 'Shiny', 'Tableau', 'SQL'],
      image: 'bg-gradient-to-br from-blue-900 to-cyan-900',
      category: 'Visualização'
    },
    {
      title: 'Recomendação de Material Didático',
      description: 'Algoritmo de recomendação que sugere materiais de estudo personalizados com base no perfil e nas necessidades específicas de cada estudante.',
      tags: ['Python', 'Collaborative Filtering', 'Flask', 'MongoDB'],
      image: 'bg-gradient-to-br from-teal-900 to-blue-900',
      category: 'Machine Learning'
    },
    {
      title: 'Análise de Sentimentos em Redes Sociais',
      description: 'Sistema que analisa o sentimento de publicações em redes sociais para identificar padrões e tendências de opinião sobre temas acadêmicos.',
      tags: ['Python', 'NLTK', 'TensorFlow', 'API Integration'],
      image: 'bg-gradient-to-br from-blue-800 to-purple-900',
      category: 'NLP'
    },
    {
      title: 'Detecção de Plágio com IA',
      description: 'Ferramenta que utiliza inteligência artificial para identificar similaridades entre textos e potenciais casos de plágio em trabalhos acadêmicos.',
      tags: ['Python', 'NLP', 'Transformers', 'Flask'],
      image: 'bg-gradient-to-br from-indigo-900 to-blue-800',
      category: 'NLP'
    },
  ];

  const categories = ['Todos', 'Machine Learning', 'Deep Learning', 'NLP', 'Visualização'];
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [visibleProjects, setVisibleProjects] = useState(allProjects);

  const filterProjects = (category) => {
    setSelectedCategory(category);
    if (category === 'Todos') {
      setVisibleProjects(allProjects);
    } else {
      setVisibleProjects(allProjects.filter(project => project.category === category));
    }
  };

  return (
    <section id="projects" className="py-28 bg-lads-dark relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#1E90FF_1px,transparent_1px)] opacity-10 [background-size:20px_20px]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block mb-4 px-4 py-1 border border-lads-accent/30 rounded-full bg-lads-accent/5">
            <span className="text-lads-accent text-sm">Nossos Projetos</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Projetos <span className="gradient-text">Inovadores</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lads-light">
            Exploramos a fronteira do conhecimento em Data Science e IA através de projetos 
            inovadores desenvolvidos por nossa equipe de estudantes e professores.
          </p>
        </div>

        {/* Project filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <Filter className="text-lads-accent mr-2" size={20} />
          {categories.map((category) => (
            <button 
              key={category}
              onClick={() => filterProjects(category)}
              className={`px-4 py-1.5 rounded-full text-sm transition-colors ${
                selectedCategory === category 
                  ? 'bg-lads-accent text-white' 
                  : 'bg-lads-muted/30 text-lads-light hover:bg-lads-muted/50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleProjects.map((project, index) => (
            <div 
              key={index} 
              className="rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(30,144,255,0.15)] border border-lads-muted hover:border-lads-accent hover:translate-y-[-5px] bg-lads-black/50"
            >
              <div className={`h-48 ${project.image} flex items-center justify-center p-6`}>
                <h3 className="text-xl font-semibold text-white text-center">{project.title}</h3>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="text-xs bg-lads-accent/10 text-lads-accent px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-lads-light text-sm mb-6">{project.description}</p>
                <div className="flex gap-4">
                  <a href="#" className="flex items-center text-sm text-lads-accent hover:text-blue-400 transition-colors">
                    <ExternalLink size={16} className="mr-1.5" /> Ver detalhes
                  </a>
                  <a href="#" className="flex items-center text-sm text-lads-accent hover:text-blue-400 transition-colors">
                    <GitBranch size={16} className="mr-1.5" /> Repositório
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="#" 
            className="inline-block border border-lads-accent text-lads-accent hover:bg-lads-accent hover:text-white font-medium px-6 py-2.5 rounded-md transition-colors"
          >
            Ver todos os projetos
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
