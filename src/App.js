import './App.css';
import React from 'react'
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import AboutSection from './components/AboutSection'
import ContactSection from './components/ContactSection';

function App() {
  return (
    <>
      <Navbar />
      <HeroSection/>
      <ProjectsSection/>
      <AboutSection />
      <ContactSection />
    </>
  );
}

export default App;
