import React, {useEffect} from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
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
import NotFound from './Pages/NotFound';



function App() {
  useEffect(() => {
    // 1. Load fonts after hydration
    if ('fonts' in document) {
      document.fonts.load('1em "Nato Sans"').then(() => {
        document.documentElement.classList.add('fonts-loaded');
      });
    }
    
    // 2. Fallback for slow mobile devices
    const timeout = setTimeout(() => {
      document.documentElement.classList.add('fonts-loaded');
    }, 500);
    
    return () => clearTimeout(timeout);
  }, []);
  return (
    <div className="App">
     
        {/* <Home /> */}
        
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/services" element={<Services />} />

          
          <Route path="/virtual-assistant" element={<Navigate to="/services/virtual-assistant" replace />} />
          <Route path="/services/:subService" element={<SubServices />} />

          <Route path="/mobile-app-development" element={<Navigate to="/services/mobile-app-development" replace />} />
          <Route path="/services/:subService" element={<SubServices />} />
          
          <Route path="/finance-and-accounting" element={<Navigate to="/services/finance-and-accounting" replace />} />
          <Route path="/services/:subService" element={<SubServices />} />

          <Route path="/digital-marketing" element={<Navigate to="/services/digital-marketing" replace />} />
          <Route path="/services/:subService" element={<SubServices />} />

          <Route path="/legal-process-outsourcing" element={<Navigate to="/services/legal-process-outsourcing" replace />} />
          <Route path="/services/:subService" element={<SubServices />} />

          <Route path="/development" element={<Navigate to="/services/development" replace />} />
          <Route path="/services/:subService" element={<SubServices />} />

          <Route path="/outsource-staff-augmentation-services" element={<Navigate to="/services/outsource-staff-augmentation-services" replace />} />
          <Route path="/services/:subService" element={<SubServices />} />

          <Route path="/hire-content-writers" element={<Navigate to="/services/hire-content-writers" replace />} />
          <Route path="/services/:subService" element={<SubServices />} />
          
          {/* <Route path="/services/:subService" element={<SubServices />} /> */}
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
          <Route path="/not-found" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
