
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-lads-black py-12 border-t border-lads-muted">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-lads-accent">L</span>ADS
            </h3>
            <p className="text-lads-light text-sm mb-6">
              Liga Acadêmica de Ciência de Dados e Inteligência Artificial, dedicada ao estudo 
              e aplicação de tecnologias avançadas para resolver problemas complexos.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Links rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-lads-light hover:text-lads-accent transition-colors">Início</a></li>
              <li><a href="#about" className="text-lads-light hover:text-lads-accent transition-colors">Sobre</a></li>
              <li><a href="#projects" className="text-lads-light hover:text-lads-accent transition-colors">Projetos</a></li>
              <li><a href="#team" className="text-lads-light hover:text-lads-accent transition-colors">Equipe</a></li>
              <li><a href="#contact" className="text-lads-light hover:text-lads-accent transition-colors">Contato</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Recursos</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-lads-light hover:text-lads-accent transition-colors">Blog</a></li>
              <li><a href="#" className="text-lads-light hover:text-lads-accent transition-colors">Publicações</a></li>
              <li><a href="#" className="text-lads-light hover:text-lads-accent transition-colors">Materiais Didáticos</a></li>
              <li><a href="#" className="text-lads-light hover:text-lads-accent transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Participe</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-lads-light hover:text-lads-accent transition-colors">Processo Seletivo</a></li>
              <li><a href="#" className="text-lads-light hover:text-lads-accent transition-colors">Voluntariado</a></li>
              <li><a href="#" className="text-lads-light hover:text-lads-accent transition-colors">Parcerias</a></li>
              <li><a href="#" className="text-lads-light hover:text-lads-accent transition-colors">Eventos</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-lads-muted text-center">
          <p className="text-lads-light text-sm">
            &copy; {new Date().getFullYear()} Liga Acadêmica de Ciência de Dados e IA. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
