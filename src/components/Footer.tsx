
import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-lads-black py-16 border-t border-lads-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-lads-accent">L</span>ADS
            </h3>
            <p className="text-lads-light text-sm mb-6">
              Liga Acadêmica de Ciência de Dados e Inteligência Artificial, dedicada ao estudo 
              e aplicação de tecnologias avançadas para resolver problemas complexos.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-lads-accent/10 hover:bg-lads-accent/20 p-2 rounded-md text-lads-accent transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="bg-lads-accent/10 hover:bg-lads-accent/20 p-2 rounded-md text-lads-accent transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="bg-lads-accent/10 hover:bg-lads-accent/20 p-2 rounded-md text-lads-accent transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-5">Links rápidos</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-lads-light hover:text-lads-accent transition-colors">Início</a></li>
              <li><a href="#skills" className="text-lads-light hover:text-lads-accent transition-colors">Habilidades</a></li>
              <li><a href="#about" className="text-lads-light hover:text-lads-accent transition-colors">Sobre</a></li>
              <li><a href="#projects" className="text-lads-light hover:text-lads-accent transition-colors">Projetos</a></li>
              <li><a href="#team" className="text-lads-light hover:text-lads-accent transition-colors">Equipe</a></li>
              <li><a href="#contact" className="text-lads-light hover:text-lads-accent transition-colors">Contato</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-5">Recursos</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-lads-light hover:text-lads-accent transition-colors">Blog</a></li>
              <li><a href="#" className="text-lads-light hover:text-lads-accent transition-colors">Publicações</a></li>
              <li><a href="#" className="text-lads-light hover:text-lads-accent transition-colors">Materiais Didáticos</a></li>
              <li><a href="#" className="text-lads-light hover:text-lads-accent transition-colors">FAQ</a></li>
              <li><a href="#" className="text-lads-light hover:text-lads-accent transition-colors">Eventos</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-5">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Mail size={18} className="text-lads-accent mr-3" />
                <span className="text-lads-light">contato@lads.edu.br</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-lads-accent mr-3" />
                <span className="text-lads-light">(11) 99999-9999</span>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="text-lads-accent mr-3 mt-1 flex-shrink-0" />
                <span className="text-lads-light">Av. Professor Almeida Prado, 500 - Butantã, São Paulo - SP</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-lads-muted/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-lads-light text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Liga Acadêmica de Ciência de Dados e IA. Todos os direitos reservados.
          </p>
          <button 
            onClick={scrollToTop}
            className="bg-lads-accent/10 hover:bg-lads-accent/20 p-2 rounded-md text-lads-accent transition-colors"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
