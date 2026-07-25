import React, { useEffect,Suspense } from 'react';
import { Route, Routes, Navigate, useLocation } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./Component/Footer"; import Header from "./Component/Header"; import CookieBanner from "./Component/CookieBanner";
import './Framework.css';
import './App.css';
import './Media.css';
const Home = React.lazy(() => import("./Pages/Home"));
const About = React.lazy(() => import("./Pages/About"));
const Contact = React.lazy(() => import("./Pages/Contact"));
const Services = React.lazy(() => import("./Pages/Services"));
const BlogDetails = React.lazy(() => import("./Pages/BlogDetails"));
const Blog = React.lazy(() => import("./Pages/Blog"));
const SubServices = React.lazy(() => import("./Pages/SubServices"));
const RefundPolicy = React.lazy(() => import("./Pages/RefundPolicy"));
const PrivacyPolicy = React.lazy(() => import("./Pages/PrivacyPolicy"));
const CookiePolicy = React.lazy(() => import("./Pages/CookiePolicy"));
const UserAgreement = React.lazy(() => import("./Pages/UserAgreement"));
const Offshore = React.lazy(() => import("./Pages/Offshore"));
const FaqPage = React.lazy(() => import("./Pages/FaqPage"));
const AboutCitadelAdvantage = React.lazy(() => import("./Pages/AboutCitadelAdvantage"));
const DataSecurity = React.lazy(() => import("./Pages/DataSecurity"));
const HowDoesCitadelWorks = React.lazy(() => import("./Pages/HowDoesCitadelWorks"));
const NotFound = React.lazy(() => import("./Pages/NotFound"));
const ThankYou = React.lazy(() => import("./Component/ThankYou"));
const CaseStudySingle = React.lazy(() => import("./Component/CaseStudySingle"));
const Newabout = React.lazy(() => import("./Pages/NewAboutus"));
const OurMission = React.lazy(() => import("./Pages/OurMission"));
const SystemlandingPage = React.lazy(() => import("./Pages/Dummypage.js"));
const FinanceAccounting = React.lazy(() => import("./Pages/FinanceAccounting"));
const TestHome = React.lazy(() => import("./Pages/TestPage.js"));
const FinaceAccountingmetaads2 = React.lazy(() => import("./Pages/FinaceAccountingmetaads2.js"));
const FounderInterviewPage = React.lazy(() => import("./Pages/InterviewWithCEo.js"));
const WorkingRemotely = React.lazy(() => import("./Pages/WorkingRemotely.js"));
const MeetOurTeam = React.lazy(() => import("./Pages/OurTeam.js"));
const UkFiancemeta = React.lazy(() => import("./Pages/UkFiancemeta.js"));
const WHYCitadelCoworkers = React.lazy(() => import("./Pages/WhyCCW.js"));
const PricingPage = React.lazy(() => import("./Pages/PricingPlan.js"));
const UkFiancemetat = React.lazy(() => import("./Pages/TestUK.js"));
const Testimonials = React.lazy(() => import("./Pages/Testimonail.js"));
const DMlanding = React.lazy(() => import("./Pages/DM.js"));
const CaseStudiesPage = React.lazy(() => import("./Pages/Casestudy.js"));
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
useEffect(() => {
  const timer = setTimeout(() => {
    if (!window.gtmLoaded) {
      window.dataLayer = window.dataLayer || [];

      window.dataLayer.push({
        "gtm.start": new Date().getTime(),
        event: "gtm.js",
      });

      const script = document.createElement("script");
      script.async = true;
      script.src =
        "https://www.googletagmanager.com/gtm.js?id=GTM-PPG89VBT";

      document.head.appendChild(script);

      window.gtmLoaded = true;
    }
  }, 1000);

  return () => clearTimeout(timer);
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
const [showFooter, setShowFooter] = React.useState(false);

useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY > 800) {
      setShowFooter(true);
      window.removeEventListener("scroll", handleScroll);
    }
  };

  window.addEventListener("scroll", handleScroll, { passive: true });

  return () => window.removeEventListener("scroll", handleScroll);
}, []);
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

      <Header />
<Suspense fallback={null}>
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
            <Route path="/interview-with-co-founder" element={<FounderInterviewPage />} />
        <Route path="/virtual-assistant" element={<Navigate to="/services/virtual-assistant" replace />} />
		 <Route path="/offshore" element={<Navigate to="/your-offshore-office-in-india" replace />} />
     	 <Route path="/services/SystemlandingPage" element={<SystemlandingPage />} />
 	 <Route path="/services/team" element={<FinaceAccountingmetaads2 />} />
    	 <Route path="/services/team-uk" element={<UkFiancemeta />} />
         <Route path="/working-remotely" element={<WorkingRemotely />} />
         <Route path="/formhome" element={<TestHome></TestHome>} />
         <Route path="/meet-our-team" element={<MeetOurTeam />} />
     <Route path="/why-ccw" element={<WHYCitadelCoworkers />} />
            <Route path="/pricing" element={<PricingPage />} />
             <Route path="/uk" element={<UkFiancemetat />} />
             <Route path="/testimonials" element={<Testimonials />} />
               <Route path="/services/dm-landing" element={<DMlanding />} />
                   <Route path="/case-study" element={<CaseStudiesPage />} />
    <Route path="*" element={<NotFound />} />
      </Routes>
</Suspense>
{showFooter && <Footer />}
    
    </div>
  );
}

export default App;