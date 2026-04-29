import React, { useEffect } from 'react';
import { Route, Routes, Navigate, useLocation } from 'react-router-dom';

import Footer from './Component/Footer';
import Header from './Component/Header';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Services from './Pages/Services';
import BlogDetails from './Pages/BlogDetails';
import Blog from './Pages/Blog';
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
import Newabout from './Pages/NewAboutus';
import OurMission from './Pages/OurMission';

import FinanceAccounting from './Pages/FinanceAccounting'
import CookieBanner from './Component/CookieBanner';
import './Framework.css';
import './App.css';
import './Media.css';

function App() {
  const location = useLocation();
useEffect(() => {
  // 🔹 Step 1: Purana Tidio data clean (optional but ok)
  Object.keys(localStorage).forEach((key) => {
    if (key.startsWith("tidio")) {
      localStorage.removeItem(key);
    }
  });

  document.cookie.split(";").forEach((c) => {
    if (c.includes("tidio")) {
      document.cookie =
        c.trim().split("=")[0] +
        "=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/";
    }
  });

  // 🔹 Step 2: Country check FIRST
  fetch("https://ipapi.co/json/")
    .then((res) => res.json())
    .then((data) => {
      // 👉 Sirf NON-India ke liye load karo
      if (data?.country_code !== "IN") {
        const script = document.createElement("script");
        script.src = "https://code.tidio.co/c3t8trmg8jhatth3b5w8akf4gj4sxtad.js";
        script.async = true;
        document.body.appendChild(script);
      } else {
        console.log("Tidio blocked for India 🚫");
      }
    })
    .catch(() => {
      // 🔹 Fallback: safe side → India assume karo → load mat karo
      console.log("Geo fetch failed → blocking Tidio");
    });
}, []);
  // ✅ GTM Load
  useEffect(() => {
    if (!window.gtmLoaded) {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event: "gtm.js" });

      const script = document.createElement("script");
      script.async = true;
      script.src = "https://www.googletagmanager.com/gtm.js?id=GTM-PPG89VBT";
      document.head.appendChild(script);

      window.gtmLoaded = true;
      console.log("GTM Loaded ✅");
    }
  }, []);

  // ✅ Dynamic class based on route
  const getPageClass = () => {
    const path = location.pathname;

    // services pages
    if (path.startsWith("/services")) {
      const parts = path.split("/");
      return parts[parts.length - 1]; // last slug (seo / video-editing)
    }

    // other pages
    if (path === "/") return "home-page";
    if (path.includes("about")) return "about-page";
    if (path.includes("contact")) return "contact-page";
    if (path.includes("blog")) return "blog-page";

    return "";
  };

  return (
    <div className={`App ${getPageClass()}`}>

      {/* ✅ GTM Noscript */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-PPG89VBT"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
          title="gtm"
        ></iframe>
      </noscript>
 <CookieBanner />
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
        <Route path="/your-offshore-office-in-india" element={<Offshore />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/about-citadel-advantage" element={<AboutCitadelAdvantage />} />
        <Route path="/data-security" element={<DataSecurity />} />
        <Route path="/how-does-citadel-works" element={<HowDoesCitadelWorks />} />
        <Route path="/not-found" element={<NotFound />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/case-studies/:parent/:slug" element={<CaseStudySingle />} />
        <Route path="/case-study/:slug" element={<CaseStudySingle />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/about-new" element={<Newabout />} />
          <Route path="/services/finance-accounting" element={<FinanceAccounting />} />
        <Route path="/our-mission" element={<OurMission />} />
        <Route path="/virtual-assistant" element={<Navigate to="/services/virtual-assistant" replace />} />
		 <Route path="/offshore" element={<Navigate to="/your-offshore-office-in-india" replace />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;