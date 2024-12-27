import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './Component/Footer';
import Header from './Component/Header';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Services from './Pages/Services';
import BlogDetails from './Pages/BlogDetails';
import Blog from './Pages/Blog';

import './Framework.css';
import './App.css';
import './Media.css';
import SubServices from './Pages/SubServices';



function App() {
  return (
    <div className="App">
     
        {/* <Home /> */}
        
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:subService" element={<SubServices />} />
          <Route path="/services/:subService/:serviceDetails" element={<Services />} />
          <Route path="/blog/" element={<Blog />} />
          <Route path="/blog/:blog" element={<BlogDetails />} />
          <Route path="/contact-us" element={<Contact />} />
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
