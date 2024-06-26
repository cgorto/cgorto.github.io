import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './App.css';
import NavigationCircles from './components/NavigationCircles';
import FunFactsContainer from './components/FunFactsContainer';
import AboutMe from './components/AboutMe';
import MainContent from './components/MainContent';
import QnA from './components/QnA';
import TSS from './components/TSS.png';
import Gender from './components/Gender';
import BarriersToResearch from './components/BarriersToResearch';

function App() {
  return (
    <Router>
      <div>
        <header className="sticky-header">
          <h1>Bleed Sustainably</h1>
          <nav>
            <Link to="/">Home</Link> | <a href="#statement">About</a> | <a href='#sustainable'>Sustainable Menstruation</a>  | <a href='#QnA'>Q&A with JUNE Co.</a> | <a href="#gender">Gender & Sustainability</a>  | <a href="#barriers">Barriers to Research</a>  
          </nav>
        </header>

            <Routes>
              <Route path="/" element={
                <>
                <div className="main-grid-container">
                  <div className="main-content">
                  <NavigationCircles />
                  <section id = "statement"><AboutMe /></section>
                  <section id="sustainable"><MainContent /></section>
                  <h2> Toxic Shock Syndrome Infographic</h2>
                  <div className="image-container"><img src={TSS} alt="Infographic about Toxic Shock Syndrome" /></div>
                  <section id="QnA"><QnA /></section>
                  <section id="gender"><Gender /></section>
                  <section id="barriers"><BarriersToResearch /></section>

                  </div>
                </div>
                <FunFactsContainer />
                </>
              } />
              <Route path="/about" element={
              <div className="main-grid-container">
                <div className="main-content">
              <AboutMe />
              </div>
              </div>
              
              } />
            </Routes>


      </div>
    </Router>
  );
}

export default App;
