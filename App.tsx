import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Hello } from './components/Hello';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Nav } from './components/Nav';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Footer } from './components/Footer';



function App() {
  return (
    <Router>
      <Header />
      <Nav/>
      <main className="main-content">
        <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/About" element={<About />} /> 
        </Routes>
        </main>
        <Footer/>
    </Router>
  );
}

export default App;
