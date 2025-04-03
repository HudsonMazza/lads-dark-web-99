
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Team from '@/components/Team';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="bg-lads-black text-white overflow-hidden">
      <Navbar />
      <Hero />
      <Skills />
      <About />
      <Projects />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
