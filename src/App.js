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
import RefundPolicy from './Pages/RefundPolicy';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import CookiePolicy from './Pages/CookiePolicy';
import UserAgreement from './Pages/UserAgreement';
import Offshore from './Pages/Offshore';
import FaqPage from './Pages/FaqPage';
import AboutCitadelAdvantage from './Pages/AboutCitadelAdvantage';
import DataSecurity from './Pages/DataSecurity';
import HowDoesCitadelWorks from './Pages/HowDoesCitadelWorks';



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
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/citadel-coworkers-user-agreement" element={<UserAgreement />} />
          <Route path="/offshore" element={<Offshore />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/about-citadel-advantage" element={<AboutCitadelAdvantage />} />
          <Route path="/data-security" element={<DataSecurity />} />
          <Route path="/how-does-citadel-works" element={<HowDoesCitadelWorks />} />
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
