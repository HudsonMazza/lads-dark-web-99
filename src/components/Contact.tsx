
import React from 'react';
import { MapPin, Mail, Phone, Instagram, Twitter, Facebook, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-lads-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Entre em <span className="gradient-text">Contato</span>
          </h2>
          <p className="max-w-3xl mx-auto text-lads-light text-lg">
            Tem interesse em conhecer mais sobre a LADS ou colaborar em algum projeto? 
            Entre em contato conosco e retornaremos o mais breve possível.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-gradient-to-br from-lads-dark to-lads-black rounded-xl p-8 border border-lads-muted">
            <h3 className="text-2xl font-semibold mb-6">Envie uma mensagem</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-lads-light mb-2">Nome</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full bg-lads-black border border-lads-muted text-white rounded-md px-4 py-2 focus:border-lads-accent focus:outline-none"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-lads-light mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full bg-lads-black border border-lads-muted text-white rounded-md px-4 py-2 focus:border-lads-accent focus:outline-none"
                    placeholder="seu.email@exemplo.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-lads-light mb-2">Assunto</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full bg-lads-black border border-lads-muted text-white rounded-md px-4 py-2 focus:border-lads-accent focus:outline-none"
                  placeholder="Assunto da mensagem"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-lads-light mb-2">Mensagem</label>
                <textarea 
                  id="message" 
                  rows={5} 
                  className="w-full bg-lads-black border border-lads-muted text-white rounded-md px-4 py-2 focus:border-lads-accent focus:outline-none resize-none"
                  placeholder="Sua mensagem"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="bg-lads-accent hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-md transition-colors w-full md:w-auto"
              >
                Enviar mensagem
              </button>
            </form>
          </div>

          <div>
            <div className="bg-gradient-to-br from-lads-dark to-lads-black rounded-xl p-8 border border-lads-muted mb-8">
              <h3 className="text-2xl font-semibold mb-6">Informações de contato</h3>
              <div className="space-y-5">
                <div className="flex items-start">
                  <MapPin className="text-lads-accent mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold">Localização</h4>
                    <p className="text-lads-light">Departamento de Computação, Universidade Federal</p>
                    <p className="text-lads-light">Av. Exemplo, 1000 - Cidade Universitária</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="text-lads-accent mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-lads-light">contato@lads.edu.br</p>
                    <p className="text-lads-light">projetos@lads.edu.br</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="text-lads-accent mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold">Telefone</h4>
                    <p className="text-lads-light">(00) 1234-5678</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-lads-dark to-lads-black rounded-xl p-8 border border-lads-muted">
              <h3 className="text-2xl font-semibold mb-6">Redes sociais</h3>
              <div className="grid grid-cols-2 gap-4">
                <a href="#" className="flex items-center text-lads-light hover:text-lads-accent transition-colors">
                  <Instagram className="mr-3" /> Instagram
                </a>
                <a href="#" className="flex items-center text-lads-light hover:text-lads-accent transition-colors">
                  <Twitter className="mr-3" /> Twitter
                </a>
                <a href="#" className="flex items-center text-lads-light hover:text-lads-accent transition-colors">
                  <Facebook className="mr-3" /> Facebook
                </a>
                <a href="#" className="flex items-center text-lads-light hover:text-lads-accent transition-colors">
                  <Github className="mr-3" /> Github
                </a>
                <a href="#" className="flex items-center text-lads-light hover:text-lads-accent transition-colors">
                  <Linkedin className="mr-3" /> LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
