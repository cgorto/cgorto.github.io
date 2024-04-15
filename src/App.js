import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './App.css';
import NavigationCircles from './components/NavigationCircles';
import FunFactsContainer from './components/FunFactsContainer';
import AboutMe from './components/AboutMe';
import MainContent from './components/MainContent';
import QnA from './components/QnA';
import TSS from './components/assets/TSS.png';
import Gender from './components/Gender';

function App() {
  return (
    <Router>
      <div>
        <header className="sticky-header">
          <h1>Bleed Sustainably</h1>
          <nav>
            <Link to="/">Home</Link> | <Link to="/about">About</Link>
          </nav>
        </header>
        <div className="main-grid-container">
          <div className="main-content">
            <Routes>
              <Route path="/" element={
                <>
                  <NavigationCircles />
                  <MainContent />
                  <div className="image-container"><img src={TSS} alt="Infographic about Toxic Shock Syndrome" /></div>
                  <QnA />
                  <Gender />
                  <FunFactsContainer />
                </>
              } />
              <Route path="/about" element={<AboutMe />} />
            </Routes>
          </div>
        </div>


        <footer>
          {/* Footer content */}
        </footer>
      </div>
    </Router>
  );
}

export default App;
