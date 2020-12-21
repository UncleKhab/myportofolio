import './App.css';
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import AboutSection from './components/AboutSection'

function App() {
  return (
    <>
      <Navbar />
      <HeroSection/>
      <ProjectsSection/>
      <AboutSection />
    </>
  );
}

export default App;
