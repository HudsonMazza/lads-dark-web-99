
import React from 'react';
import { ArrowDown, ExternalLink } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 pb-16 overflow-hidden relative bg-lads-black">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#1E90FF_1px,transparent_1px)] opacity-10 [background-size:20px_20px]"></div>
      
      {/* Blur effect elements */}
      <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-lads-accent/20 rounded-full filter blur-[100px]"></div>
      <div className="absolute bottom-1/4 right-1/4 w-60 h-60 bg-blue-700/20 rounded-full filter blur-[100px]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="inline-block mb-6 px-6 py-2 border border-lads-accent/30 rounded-full bg-lads-accent/5">
            <span className="text-lads-accent">Liga Acadêmica de Ciência de Dados e IA</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 max-w-4xl">
            Transformando dados em <span className="gradient-text">conhecimento e inovação</span>
          </h1>
          
          <p className="text-lg md:text-xl max-w-2xl mb-10 text-lads-light">
            Somos uma comunidade acadêmica dedicada ao estudo e aplicação de ciência de dados e 
            inteligência artificial para resolver problemas reais e promover inovação tecnológica.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <a 
              href="#projects" 
              className="bg-lads-accent hover:bg-blue-600 text-white font-medium px-8 py-3 rounded-md transition-colors"
            >
              Ver Projetos
            </a>
            <a 
              href="#contact" 
              className="border border-lads-muted hover:border-lads-accent text-white hover:text-lads-accent font-medium px-8 py-3 rounded-md transition-colors"
            >
              Entre em Contato
            </a>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12">
            <div className="flex flex-col items-center">
              <span className="text-3xl md:text-4xl font-bold text-lads-accent">10+</span>
              <span className="text-lads-light text-sm mt-1">Projetos Concluídos</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl md:text-4xl font-bold text-lads-accent">20+</span>
              <span className="text-lads-light text-sm mt-1">Membros Ativos</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl md:text-4xl font-bold text-lads-accent">5+</span>
              <span className="text-lads-light text-sm mt-1">Parcerias Acadêmicas</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl md:text-4xl font-bold text-lads-accent">3+</span>
              <span className="text-lads-light text-sm mt-1">Anos de Experiência</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#skills" className="flex flex-col items-center text-lads-light opacity-70 hover:opacity-100 transition-opacity">
          <span className="text-sm mb-2">Saiba mais</span>
          <ArrowDown size={20} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
