import React, { useState, useEffect } from 'react';
import { Route, Routes, Navigate, useLocation } from 'react-router-dom';

import Footer from './Component/Footer';
import Header from './Component/Header';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Services from './Pages/Services';
import BlogDetails from './Pages/BlogDetails';
import Blog from './Pages/Blog';
import FloatingContact from "./Component/FloatingContact";
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
import ThankYou from "./Component/ThankYou";
import CaseStudySingle from './Component/CaseStudySingle';

const COOKIE_KEY = "cookieConsent";

function App() {

  const [cookieConsent, setCookieConsent] = useState(null);

  useEffect(() => {
    const savedConsent = localStorage.getItem(COOKIE_KEY);
    if (savedConsent) {
      setCookieConsent(savedConsent);
    }
  }, []);

  // 🔥 Load Google Analytics only after Accept
  useEffect(() => {
    if (cookieConsent === "accepted") {
      const script = document.createElement("script");
      script.src = "https://www.googletagmanager.com/gtag/js?id=YOUR_GA_ID";
      script.async = true;
      document.body.appendChild(script);

      window.dataLayer = window.dataLayer || [];
      function gtag(){window.dataLayer.push(arguments);}
      gtag("js", new Date());
      gtag("config", "YOUR_GA_ID");
    }
  }, [cookieConsent]);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_KEY, "accepted");
    setCookieConsent("accepted");
  };

  return (
    <div className="App">

      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/about" element={<Navigate to="/about-us" replace />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:subService" element={<SubServices />} />
        <Route path="/services/:subService/:serviceDetails" element={<SubServices />} />
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
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/case-studies/:parent/:slug" element={<CaseStudySingle />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />

      {/* 🔥 Cookie Banner */}
      {!cookieConsent && (
        <div style={{
          position: "fixed",
          bottom: 0,
          width: "100%",
          background: "#111827",
          color: "#fff",
          padding: "15px",
          textAlign: "center",
          zIndex: 9999
        }}>
      This website uses cookies to ensure proper functionality, analyze performance, and deliver relevant content. By clicking "Accept", you consent to the use of cookies in accordance with our Privacy Policy and Cookie Policy.
          <button
            onClick={handleAccept}
            style={{
              marginLeft: "15px",
              padding: "8px 15px",
              background: "#2563eb",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer"
            }}
          >
            Accept
          </button>
        </div>
      )}

    </div>
  );
}

export default App;