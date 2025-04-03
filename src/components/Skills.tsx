
import React from 'react';
import { Database, BrainCog, LineChart, CheckCircle2, Server, BarChart4, Network, Cpu } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Data Science",
      skills: ["Python", "R", "SQL", "Pandas", "NumPy", "Scikit-Learn", "TensorFlow", "PyTorch"]
    },
    {
      title: "Machine Learning",
      skills: ["Supervised Learning", "Unsupervised Learning", "Deep Learning", "Neural Networks", "NLP", "Computer Vision", "Reinforcement Learning"]
    },
    {
      title: "Big Data",
      skills: ["Hadoop", "Spark", "Data Engineering", "ETL Pipelines", "Data Warehousing", "NoSQL", "MongoDB", "Cassandra"]
    },
    {
      title: "Visualização",
      skills: ["Tableau", "Power BI", "D3.js", "Matplotlib", "Seaborn", "Plotly", "Dashboard Design"]
    },
  ];

  const techIcons = {
    "Data Science": <Database className="w-8 h-8 text-lads-accent" />,
    "Machine Learning": <BrainCog className="w-8 h-8 text-lads-accent" />,
    "Big Data": <Server className="w-8 h-8 text-lads-accent" />,
    "Visualização": <BarChart4 className="w-8 h-8 text-lads-accent" />,
  };

  return (
    <section id="skills" className="py-28 bg-lads-black relative">
      <div className="absolute inset-0 bg-[radial-gradient(#1E90FF_1px,transparent_1px)] [background-size:32px_32px] opacity-10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Nossas <span className="gradient-text">Habilidades</span>
          </h2>
          <p className="text-lads-light text-lg">
            Dominamos as tecnologias e metodologias mais avançadas em Ciência de Dados e Inteligência Artificial
            para resolver problemas complexos e entregar insights valiosos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="tech-card group hover:translate-y-[-5px]"
            >
              <div className="flex items-center space-x-4 mb-6">
                {techIcons[category.title]}
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-center text-lads-light">
                    <CheckCircle2 className="w-4 h-4 text-lads-accent mr-2 flex-shrink-0" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lads-light max-w-2xl mx-auto mb-8">
            Nossa equipe está constantemente atualizando suas habilidades para acompanhar as últimas inovações 
            e tecnologias em Data Science e Inteligência Artificial.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="bg-lads-accent/10 text-lads-accent px-4 py-2 rounded-full text-sm">Data Mining</span>
            <span className="bg-lads-accent/10 text-lads-accent px-4 py-2 rounded-full text-sm">Feature Engineering</span>
            <span className="bg-lads-accent/10 text-lads-accent px-4 py-2 rounded-full text-sm">Time Series</span>
            <span className="bg-lads-accent/10 text-lads-accent px-4 py-2 rounded-full text-sm">Cloud Computing</span>
            <span className="bg-lads-accent/10 text-lads-accent px-4 py-2 rounded-full text-sm">Graph Neural Networks</span>
            <span className="bg-lads-accent/10 text-lads-accent px-4 py-2 rounded-full text-sm">AutoML</span>
            <span className="bg-lads-accent/10 text-lads-accent px-4 py-2 rounded-full text-sm">MLOps</span>
            <span className="bg-lads-accent/10 text-lads-accent px-4 py-2 rounded-full text-sm">Transfer Learning</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
