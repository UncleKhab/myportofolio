import './App.css';
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';


function App() {
  return (
    <>
      <Navbar />
      <HeroSection/>
      <ProjectsSection/>
    </>
  );
}

export default App;
