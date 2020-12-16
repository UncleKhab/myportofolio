import './App.css';
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';

function App() {
  return (
    <>
      <Router>
        <Navbar />
      </Router>
      <HeroSection/>
    </>
  );
}

export default App;
