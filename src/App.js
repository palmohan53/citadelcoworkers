import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './Component/Footer';
import Header from './Component/Header';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Services from './Pages/Services';

import './App.css';
function App() {
  return (
    <div className="App">
      <Header />
      {/* <Home /> */}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact-us" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
