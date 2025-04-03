
import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const dataDotsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!dataDotsRef.current) return;
    
    // Create animated data dots in the background
    const createDataDots = () => {
      const dotContainer = dataDotsRef.current;
      if (!dotContainer) return;
      
      // Clear existing dots
      dotContainer.innerHTML = '';
      
      // Create new dots
      const numberOfDots = 50;
      for (let i = 0; i < numberOfDots; i++) {
        const dot = document.createElement('div');
        dot.classList.add('data-dot');
        
        // Random position
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        dot.style.left = `${posX}%`;
        dot.style.top = `${posY}%`;
        
        // Random size
        const size = Math.random() * 4 + 1;
        dot.style.width = `${size}px`;
        dot.style.height = `${size}px`;
        
        // Random opacity
        dot.style.opacity = `${Math.random() * 0.3 + 0.1}`;
        
        // Random animation delay
        dot.style.animationDelay = `${Math.random() * 5}s`;
        dot.classList.add('animate-pulse-slow');
        
        dotContainer.appendChild(dot);
      }
    };
    
    createDataDots();
    window.addEventListener('resize', createDataDots);
    
    return () => {
      window.removeEventListener('resize', createDataDots);
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background data dots */}
      <div ref={dataDotsRef} className="absolute inset-0 overflow-hidden"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 pt-16 z-10">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in">
            <span className="gradient-text">LADS</span>
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold mb-8 animate-fade-in" style={{ animationDelay: '200ms' }}>
            Liga Acadêmica de Ciência de Dados e IA
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mb-12 text-lads-light animate-fade-in" style={{ animationDelay: '400ms' }}>
            Explorando o futuro através de dados e inteligência artificial. 
            Unindo acadêmicos e profissionais para resolver problemas complexos e criar 
            soluções inovadoras.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '600ms' }}>
            <a href="#about" className="bg-lads-accent hover:bg-blue-600 text-white font-semibold px-8 py-3 rounded-md transition-colors">
              Conheça a LADS
            </a>
            <a href="#projects" className="border border-lads-accent text-lads-accent hover:bg-lads-accent/10 font-semibold px-8 py-3 rounded-md transition-colors">
              Nossos Projetos
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-float">
        <a href="#about" className="flex flex-col items-center text-lads-light opacity-70 hover:opacity-100 transition-opacity">
          <span className="text-sm mb-2">Saiba mais</span>
          <ArrowDown size={20} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
