
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: 'Prof. Dr. Ana Silva',
      role: 'Coordenadora e Professora de Machine Learning',
      bio: 'PhD em Ciência da Computação com foco em Deep Learning. Pesquisadora na área de modelos preditivos e visão computacional.',
      image: 'bg-gradient-to-br from-indigo-600 to-purple-500'
    },
    {
      name: 'Prof. Dr. Carlos Mendes',
      role: 'Professor de Estatística e Data Science',
      bio: 'Doutor em Estatística com ampla experiência em análise de grandes volumes de dados e métodos estatísticos avançados.',
      image: 'bg-gradient-to-br from-blue-600 to-cyan-500'
    },
    {
      name: 'Luísa Oliveira',
      role: 'Líder de Projetos e Graduanda em Computação',
      bio: 'Especialista em desenvolvimento de algoritmos de aprendizado de máquina e aplicações de IA em problemas reais.',
      image: 'bg-gradient-to-br from-teal-600 to-blue-500'
    },
    {
      name: 'Marcos Pereira',
      role: 'Especialista em NLP e Big Data',
      bio: 'Mestrando em Computação com foco em processamento de linguagem natural e análise de grandes volumes de dados textuais.',
      image: 'bg-gradient-to-br from-blue-500 to-purple-500'
    },
  ];

  return (
    <section id="team" className="py-20 bg-gradient-to-b from-lads-black to-lads-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nossa <span className="gradient-text">Equipe</span>
          </h2>
          <p className="max-w-3xl mx-auto text-lads-light text-lg">
            Conheça os professores e estudantes que compõem a Liga Acadêmica de Ciência de Dados e IA, 
            unindo paixão e expertise para avançar no campo da tecnologia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card flex flex-col items-center text-center">
              <div className={`w-32 h-32 rounded-full mb-6 flex items-center justify-center ${member.image}`}>
                <span className="text-2xl font-bold text-white">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
              <p className="text-lads-accent mb-3">{member.role}</p>
              <p className="text-lads-light text-sm mb-6">{member.bio}</p>
              <div className="flex space-x-4 mt-auto">
                <a href="#" className="text-lads-light hover:text-lads-accent transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="text-lads-light hover:text-lads-accent transition-colors">
                  <Github size={20} />
                </a>
                <a href="#" className="text-lads-light hover:text-lads-accent transition-colors">
                  <Mail size={20} />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <h3 className="text-2xl font-semibold mb-6">Junte-se à nossa equipe</h3>
          <p className="max-w-2xl mx-auto text-lads-light mb-8">
            A LADS está sempre aberta a novos talentos apaixonados por Ciência de Dados e Inteligência Artificial. 
            Se você é estudante ou professor interessado em contribuir com projetos inovadores, entre em contato conosco!
          </p>
          <a 
            href="#contact" 
            className="bg-lads-accent hover:bg-blue-600 text-white font-semibold px-8 py-3 rounded-md transition-colors"
          >
            Entre em contato
          </a>
        </div>
      </div>
    </section>
  );
};

export default Team;
