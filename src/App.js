import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './Component/Footer';
import Header from './Component/Header';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Services from './Pages/Services';
import BlogDetails from './Pages/BlogDetails';
import Blog from './Pages/Blog';

import './App.css';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        {/* <Home /> */}
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:service" element={<Services />} />
          <Route path="/blog/" element={<Blog />} />
          <Route path="/blog/:blog" element={<BlogDetails />} />
          <Route path="/contact-us" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
