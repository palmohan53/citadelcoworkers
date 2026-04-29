import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import  "../Component/css/finance-accounting.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Contact from "../Component/BlogContactForm"
import { Helmet, HelmetProvider } from 'react-helmet-async';
import FinanceBrandslider from "../Component/FinaceBrandslider";
const FinanceAccounting = () => {

   const [activePopup, setActivePopup] = useState(null);
  
    const logos = [
         {
        src: "https://virtualassistant24x7.com/wp-content/uploads/2026/01/apnew-logo-1.png",
        alt: "Associated Press",
        Image: "https://virtualassistant24x7.com/wp-content/uploads/2026/03/New-ap-1-scaled.webp"
      },
      {
        src: "https://virtualassistant24x7.com/wp-content/uploads/2026/03/The-Chronicle-Journal.webp",
        alt: "The Chronicle Journal",
        Image: "https://virtualassistant24x7.com/wp-content/uploads/2026/03/The-Chronicle-Journal-1-scaled.webp"
      },
       {
        src: "https://virtualassistant24x7.com/wp-content/uploads/2026/03/bc-logo-1.webp",
        alt: "Barchart",
        Image: "https://virtualassistant24x7.com/wp-content/uploads/2026/03/bar-scaled.webp"
      },
       {
        src: "https://virtualassistant24x7.com/wp-content/uploads/2026/03/openpr-logo-slogan.webp",
        alt: "Open PR",
        Image: "https://virtualassistant24x7.com/wp-content/uploads/2026/03/Open-PR-scaled.webp"
      },
  
      
       {
        src: "https://virtualassistant24x7.com/wp-content/uploads/2026/03/Am-news.webp",
        alt: "Morning News",
        Image: "https://virtualassistant24x7.com/wp-content/uploads/2026/03/Am-news-1-scaled.webp"
      },
  
       {
        src: "https://virtualassistant24x7.com/wp-content/uploads/2026/03/fin-1.webp",
        alt: "Financial content ",
        Image: "https://virtualassistant24x7.com/wp-content/uploads/2026/03/Financial-content-1-scaled.webp"
      },
    
    
   
    
    {
        src: "https://virtualassistant24x7.com/wp-content/uploads/2026/03/getnews.webp",
        alt: "Get news",
        Image: "https://virtualassistant24x7.com/wp-content/uploads/2026/03/Get-scaled.webp"
      },
    
    {
        src: "https://virtualassistant24x7.com/wp-content/uploads/2026/03/xpr.webp",
        alt: "XPR media",
        Image: "https://virtualassistant24x7.com/wp-content/uploads/2026/03/xpr-2-scaled.webp"
      },
    {
        src: "https://virtualassistant24x7.com/wp-content/uploads/2026/03/business-insurance-logo.webp",
        alt: "Business Insurance",
        Image: "https://virtualassistant24x7.com/wp-content/uploads/2026/03/bus-scaled.webp"
      },
    
    
    
    
    {
        src: "https://virtualassistant24x7.com/wp-content/uploads/2026/03/news.atlantanews-online.com_.webp",
        alt: "Altana news",
        Image: "https://virtualassistant24x7.com/wp-content/uploads/2026/03/lta-scaled.webp"
      },
        {
        src: "https://virtualassistant24x7.com/wp-content/uploads/2026/04/evaluation-tech-1-e1595253356825.webp",
        alt: "evaluation tech",
        Image: "https://virtualassistant24x7.com/wp-content/uploads/2026/04/ti-scaled.webp"
      },
  
        {
        src: "https://virtualassistant24x7.com/wp-content/uploads/2026/04/Aologo.webp",
        alt: "Ai",
        Image: "https://virtualassistant24x7.com/wp-content/uploads/2026/04/Tech-scaled.webp"
      },
      {
        src: "https://virtualassistant24x7.com/wp-content/uploads/2026/04/tech-vts.webp",
        alt: "Ai",
        Image: "https://virtualassistant24x7.com/wp-content/uploads/2026/04/tecf-scaled.webp"
      },
      
      {
        src: "https://virtualassistant24x7.com/wp-content/uploads/2026/04/Tech-Gadget-X.webp",
        alt: "tech",
        Image: "https://virtualassistant24x7.com/wp-content/uploads/2026/04/tech-1-scaled.webp"
      },
        {
        src: "https://virtualassistant24x7.com/wp-content/uploads/2026/04/Tech-Gadget-X.webp",
        alt: "tech",
        Image: ""
      },
    ];


	  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow:5 }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 3 }
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 2 }
      }
    ]
  };
  const settings2 = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
	arrows: false,
    responsive: [
      {
        breakpoint: 992,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 576,
        settings: { slidesToShow: 1 }
      }
    ]
  };
  const settingsTeam = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
	arrows: false,
    responsive: [
      {
        breakpoint: 992,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 576,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  const tools = [
    "https://virtualassistant24x7.com/wp-content/uploads/2025/11/NetSuite-1.webp",
    "https://virtualassistant24x7.com/wp-content/uploads/2025/11/Zoho-Books-1.webp",
    "https://virtualassistant24x7.com/wp-content/uploads/2025/11/FreshBooks.webp",
    "https://virtualassistant24x7.com/wp-content/uploads/2025/11/Microsoft-Dynamics-365.webp",
    "https://virtualassistant24x7.com/wp-content/uploads/2025/11/Sage-Accounting.webp",
    "https://virtualassistant24x7.com/wp-content/uploads/2025/11/NetSuite-1.webp",
    "https://virtualassistant24x7.com/wp-content/uploads/2025/11/Tally-ERP.webp",
    "https://virtualassistant24x7.com/wp-content/uploads/2025/12/KashFlow.webp",
    "https://virtualassistant24x7.com/wp-content/uploads/2025/12/Bill.-com.webp",
	"https://virtualassistant24x7.com/wp-content/uploads/2025/11/xero.webp",

	   
  ];
    useEffect(() => {

  const elements = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: "0px 0px -80px 0px",
    }
  );

  elements.forEach((el) => observer.observe(el));

  return () => observer.disconnect();

}, []);
    return(
        <><style>{`
          body{
          padding:0px !important;
        }
.hero-points {
  margin-top: 18px;
}
.flip-back h4 {
    font-size: 20px;
}
    .clientBx.flip-card {
    padding: 0px !important;
}
.flip-back p {
    font-size: 15px !important;
}
    
.flip-inner {
  position: relative;
  width: 100%;
  height: 180px;
  transition: transform 0.6s;
  transform-style: preserve-3d;
}

.clientBx:hover .flip-inner {
  transform: rotateY(180deg);
}

.flip-front,
.flip-back {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}


/* BACK */
.flip-back {
  background:radial-gradient(circle at 20% 20%, #1e3a8a, #020617);
  color: #fff;
  transform: rotateY(180deg);
  padding: 15px;
  text-align: center;
}
.hero-points .point {
  display: flex;
  align-items: center;

      gap: 20px;
  color: #fff;
  font-size: 14px;
  margin-bottom: 8px;
  font-weight: 500;
}
           `}</style><div className="financeAccounting">
          <section class="Finace-accounting-section">
            <div class="container">
              <div class="offshore-wrapper card ">


                <div class="page-content reveal reveal-left">
                  <div class="titile-tag">Finance & Accounting Outsourcing</div>
                  <h2 class="title-page">Outsource Expert Finance Teams<br></br><span className="Grentext">Starting at $5/hr</span>
                  </h2>

                  <p>
                    Hire pre-screened India-based finance & accounting professionals<br></br> who integrate directly into your business.
                    <img src="https://virtualassistant24x7.com/wp-content/uploads/2026/03/arrow-1.webp" alt="Arrow" />
    </p>
	
	


{/* 👉 Add this block below */}
<div className="hero-points">
<div class="pointer">
  <div className="point">
<svg width="25" height="25" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="#00cc83" stroke-width="2"></path></svg>
    <span>No Contracts
</span>
  </div>

  <div className="point">
   <svg width="25" height="25" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="#00cc83" stroke-width="2"></path></svg>
    <span>No Upfront Costs
</span>
  </div>
  
   <div className="point">
   <svg width="25" height="25" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="#00cc83" stroke-width="2"></path></svg>
    <span>Get Your Finance Team in 48 Hours
</span>
  </div>
  
  
   <div className="point">
  <svg width="25" height="25" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="#00cc83" stroke-width="2"></path></svg>
    <span>Trusted by 100+ businesses


</span>
  </div>
  
  
   <div className="point">
   <svg width="25" height="25" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="#00cc83" stroke-width="2"></path></svg>
    <span>96% client retention

</span>
  </div>
</div>
<div class="free-trial">

<span><h2>1</h2> Week Free Trial</span>
</div>
</div>


                </div>


                <div class="Contact-from-finace reveal reveal-right">
                  <Contact />
                </div>

              </div>
            </div>
          </section>

          <section class="explore reveal reveal-bottom">
            <div class="container">
              <div class="row align-items-center mb-3">
                <div class="col-md-12 col-12 text-center"><div class="sectionHeading">
                  <h2>Revolutionize Your Business with the Best Financial Services </h2>
                  <h4></h4></div></div><div class="col-md-12">
                    <div class="clientNum">
                   
                    <div class="clientBx  flip-card">
					  <div class="flip-inner">
					   <div className="flip-front">
                      <div class="client-icon">
                        <img src="/images/Projects.png" alt="Skilled Finance Experts" /></div>

                      <p><span>$50M+</span></p><h3>Managed in Client Finances</h3></div>
					  
					     <div class="flip-back">
    
      <p>Across multiple industries with consistent financial oversight</p>
    </div>
					  </div>  </div>
                      <div class="clientBx flip-card">
					   <div class="flip-inner">
					    <div className="flip-front">
					  <div class="client-icon">
                        <img src="/images/rating (3).png" alt="Happy Clients" /> </div><p><span>98% </span></p><h3>Client Retention Rate </h3></div>     <div class="flip-back">
     
      <p> Long-term partnerships built on trust and performance</p>

    </div></div>	</div>	
						<div class="clientBx flip-card">   <div class="flip-inner">  <div className="flip-front"><div class="client-icon"><img src="/images/Software-pay.png" alt="Payroll Software"/></div><p><span>99.9%</span></p><h3>Accuracy in Financial Reporting </h3></div><div class="flip-back">
     
      <p> Ensuring error-free, audit-ready financials</p>
    </div></div></div>
						
                    <div class="clientBx flip-card">   <div class="flip-inner">  <div className="flip-front"><div class="client-icon"><img src="/images/expert (2).png" alt="Skilled Finance Experts" /></div><p><span>40</span>+</p>
                      <h3>Dedicated Finance Experts</h3></div> <div class="flip-back">
     
      <p> Skilled professionals managing end-to-end finance operations</p>

    </div></div></div>
					  
					  </div></div></div></div>
          </section>

          <section className="reveal reveal-bottom servics-sec">
            <div className="container">
              <div className="sectionHeading text-center mb-4">
                <div class="titile-tag">What We Offer</div>
                <h2 style={{ textAlign: "center", color: "#fff" }}>
                  Full-Spectrum Finance & Accounting Services </h2><div className="para">From day-to-day bookkeeping to strategic CFO-level guidance, we get exactly the financial expertise your business needs without the full-time overhead.

                </div></div>

              <div className="ser-grid">

                {/* Box 1 */}
                <div className="box-card-3d">
                  <div className="icon-svg">    {/* SVG */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-book-open w-6 h-6 text-primary"><path d="M12 7v14"></path><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path></svg></div>
                  <h3>Bookkeeping & Accounting
                  </h3>
                  <p> Maintain accurate financial records with end-to-end bookkeeping, invoice management and reconciliations ensuring clean, audit-ready books at all times.

                  </p>
                </div>

                {/* Box 2 */}
                <div className="box-card-3d">
                  <div className="icon-svg">
                    <div class="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/15 transition-colors duration-300"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-credit-card w-4 h-4 text-primary" data-source-location="components/finance/ServicesSection:73:20" data-dynamic-content="false"><rect width="20" height="14" x="2" y="5" rx="2"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg></div></div>
                  <h3>Accounts Payable
                  </h3>
                  <p>Streamlined invoice processing, vendor management and timely payments to maintain strong supplier relationships and controlled cash outflows.


                  </p>
                </div>
				
				
				   <div className="box-card-3d">
                  <div className="icon-svg">
                    <div class="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/15 transition-colors duration-300"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-receipt w-4 h-4 text-primary" data-source-location="components/finance/ServicesSection:73:20" data-dynamic-content="false"><path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"></path><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path><path d="M12 17.5v-11"></path></svg></div></div>
                  <h3>Accounts Receivable

                  </h3>
                  <p>Efficient invoicing, payment tracking and follow-ups to accelerate collections and improve cash flow visibility.



                  </p>
                </div>
				
				

                {/* Box 4 */}
                <div className="box-card-3d">
                  <div className="icon-svg">
                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-building2 w-4 h-4 text-primary" data-source-location="components/finance/ServicesSection:73:20" data-dynamic-content="false"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path><path d="M10 6h4"></path><path d="M10 10h4"></path><path d="M10 14h4"></path><path d="M10 18h4"></path></svg></div>
                  <h3>Bank Reconciliation

                  </h3>
                  <p>Accurate matching of financial records with bank statements to identify discrepancies and ensure reliable cash balances.

                  </p>
                </div>

                {/* Box 4 */}
                <div className="box-card-3d">
                  <div className="icon-svg">    {/* SVG */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users w-4 h-4 text-primary" data-source-location="components/finance/ServicesSection:73:20" data-dynamic-content="false"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg></div>
                  <h3>Payroll Processing & Compliance
                  </h3>
                  <p>End-to-end payroll management including salary calculations, tax deductions, filings and compliance, ensuring timely and error-free payouts.



                  </p>
                </div>

                {/* Box 5 */}
                <div className="box-card-3d">
                  <div className="icon-svg">    {/* SVG */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-text w-6 h-6 text-primary"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg></div>
                  <h3>Tax Preparation & Compliance

                  </h3>
                  <p>Comprehensive tax support including filings, regulatory compliance and advisory across jurisdictions to minimize risk and optimize tax outcomes.


                  </p>
                </div>
				
				
				
				
				  <div className="box-card-3d">
                  <div className="icon-svg">    {/* SVG */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-text w-6 h-6 text-primary"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg></div>
                  <h3>QuickBooks Setup & Management


                  </h3>
                  <p>Seamless QuickBooks configuration, workflow customization and ongoing management tailored to your business needs
				  </p>
                </div>
				
				
					  <div className="box-card-3d">
                  <div className="icon-svg">    {/* SVG */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-text w-6 h-6 text-primary"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg></div>
                  <h3>Financial Reporting



                  </h3>
                  <p>Timely preparation of financial statements, management reports and compliance documents to keep stakeholders informed and aligned.

				  </p>
                </div>
					  <div className="box-card-3d">
                  <div className="icon-svg">    {/* SVG */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-text w-6 h-6 text-primary"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg></div>
                  <h3>Financial Analysis & Insights




                  </h3>
                  <p>In-depth analysis of financial data, performance trends and key metrics to support informed decision-making and business growth.


				  </p>
                </div>
				 <div className="box-card-3d">
                  <div className="icon-svg">    {/* SVG */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-text w-6 h-6 text-primary"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg></div>
                  <h3>Forecasting & Budgeting





                  </h3>
                  <p>Data-driven financial planning with accurate forecasts and budgets to help you manage cash flow and plan for future growth.



				  </p>
                </div>
				
				
				 <div className="box-card-3d">
                  <div className="icon-svg">    {/* SVG */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-text w-6 h-6 text-primary"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg></div>
                  <h3>Strategic Financial Management






                  </h3>
                  <p>Expert guidance on financial planning, cash flow optimization and long-term strategy to strengthen your business foundation.




				  </p>
                </div>
				
				 <div className="box-card-3d">
                  <div className="icon-svg">    {/* SVG */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-text w-6 h-6 text-primary"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg></div>
                  <h3>Virtual Finance Manager







                  </h3>
                  <p>Dedicated finance leadership to oversee operations, ensure compliance, manage reporting and drive financial efficiency.





				  </p>
                </div>
					 <div className="box-card-3d">
                  <div className="icon-svg">    {/* SVG */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trending-up w-4 h-4 text-primary" data-source-location="components/finance/ServicesSection:73:20" data-dynamic-content="false"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg></div>
                  <h3>Financial Analysts</h3>
                  <p>Skilled analysts to evaluate data, identify trends and deliver actionable insights for smarter business decisions.</p>
                </div>
				
	 <div className="box-card-3d">
                  <div className="icon-svg">    {/* SVG */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-dollar-sign w-4 h-4 text-primary" data-source-location="components/finance/ServicesSection:73:20" data-dynamic-content="false"><line x1="12" x2="12" y1="2" y2="22"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg></div>
                  <h3>Job Costing & Profitability Analysis</h3>
                  <p>Detailed cost tracking and budget comparison to evaluate project profitability and improve cost control.
</p>
                </div>
				
				<div className="box-card-3d">
                  <div className="icon-svg">    {/* SVG */}
                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shield-check w-4 h-4 text-primary" data-source-location="components/finance/ServicesSection:73:20" data-dynamic-content="false"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg></div>
                  <h3>Audit & Error Checking</h3>
                  <p>Regular financial audits and error detection to maintain accuracy, compliance and clean financial records.
</p>
                </div>
				
				
				
					<div className="box-card-3d">
                  <div className="icon-svg">    {/* SVG */}
                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shield-check w-4 h-4 text-primary" data-source-location="components/finance/ServicesSection:73:20" data-dynamic-content="false"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg></div>
                  <h3>Audit & Error Checking</h3>
                  <p>Regular financial audits and error detection to maintain accuracy, compliance and clean financial records.
</p>
                </div>
				
				
				
				
                {/* Box 6 */}
                <div className="box-card-3d">
                  <div className="icon-svg">    {/* SVG */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-spreadsheet w-4 h-4 text-primary" data-source-location="components/finance/ServicesSection:73:20" data-dynamic-content="false"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M8 13h2"></path><path d="M14 13h2"></path><path d="M8 17h2"></path><path d="M14 17h2"></path></svg></div>
                  <h3>Payroll Reporting & Documentation

                  </h3>
                  <p>Comprehensive payroll reports and audit-ready documentation to support HR, compliance and decision-making.


                    .</p>
                </div>
				
				
				<div className="box-card-3d">
                  <div className="icon-svg">    {/* SVG */}
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart w-4 h-4 text-primary" data-source-location="components/finance/ServicesSection:73:20" data-dynamic-content="false"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg></div>
                  <h3>Benefits & Deductions Management


                  </h3>
                  <p>Accurate handling of employee benefits, deductions and coordination with HR systems for consistency and compliance.



                    .</p>
                </div>
				
				<div className="box-card-3d">
                  <div className="icon-svg">    {/* SVG */}
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clock w-4 h-4 text-primary" data-source-location="components/finance/ServicesSection:73:20" data-dynamic-content="false"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg></div>
                  <h3>Time & Attendance Monitoring



                  </h3>
                  <p>Tracking employee work hours and attendance to ensure accurate payroll processing and operational efficiency.




                    .</p>
                </div>
				
				<div className="box-card-3d">
                  <div className="icon-svg">    {/* SVG */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-landmark w-4 h-4 text-primary" data-source-location="components/finance/ServicesSection:73:20" data-dynamic-content="false"><line x1="3" x2="21" y1="22" y2="22"></line><line x1="6" x2="6" y1="18" y2="11"></line><line x1="10" x2="10" y1="18" y2="11"></line><line x1="14" x2="14" y1="18" y2="11"></line><line x1="18" x2="18" y1="18" y2="11"></line><polygon points="12 2 20 7 4 7"></polygon></svg></div>
                  <h3>Direct Deposit Management




                  </h3>
                  <p>Secure setup and management of employee payments with accurate and timely direct deposits.





                    .</p>
                </div>
				
				
					<div className="box-card-3d">
                  <div className="icon-svg">    {/* SVG */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-landmark w-4 h-4 text-primary" data-source-location="components/finance/ServicesSection:73:20" data-dynamic-content="false"><line x1="3" x2="21" y1="22" y2="22"></line><line x1="6" x2="6" y1="18" y2="11"></line><line x1="10" x2="10" y1="18" y2="11"></line><line x1="14" x2="14" y1="18" y2="11"></line><line x1="18" x2="18" y1="18" y2="11"></line><polygon points="12 2 20 7 4 7"></polygon></svg></div>
                  <h3>Data Security & Confidentiality





                  </h3>
                  <p>Strict data protection protocols to safeguard financial and employee information with complete confidentiality.






                    .</p>
                </div>

              </div>
            </div>
          </section>
		 {/* Team  1 */}
<section className="Teamsection">
<div className="container">
<div className="sectionHeading text-center mb-4">
<h2>Your Extended Team That Protects Your Financial Accuracy</h2>
<div className="para">Our specialists can handle everything from bookkeeping to strategic finance jobs and take full responsibility for their work</div></div>

              <div classNa01me="Team-slider">
 <Slider {...settingsTeam} className="pp-slider">

<div class="talent-card">
        <div class="img-wrap">
		<span class="Price">$9/hour</span>
          <img src="https://virtualassistant24x7.com/wp-content/uploads/2025/02/Rahul-3-2.webp" />
        </div>

        <div class="card-body">
		<div class="name-expert">
          <h3>Anjali Desai </h3>
		  <p class="verified"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle-check" class="svg-inline--fa fa-circle-check " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"></path></svg> Verified Expert</p>
		  </div>
          <p class="role">Online Stock Investment Consultant</p>

          

          <p class="desc">
           Anjali excels in financial analysis, control, and forecasting using Microsoft Excel, SAP Business One, and NetSuite. With over 5 years of experience, she delivers sound financial strategies that drive business growth. Choose Anjali for reliable and strategic financial insights and analysis.
          </p>

          <div class="skills">
            <span>Net Suite</span>
            <span>Sap One</span>
         <span>Dot net-framework</span>
          </div>
        </div>
      </div>

  
     

    
    <div class="talent-card">
        <div class="img-wrap">
		<span class="Price">$8/hour</span>
          <img src="https://virtualassistant24x7.com/wp-content/uploads/2025/02/Priya.webp" />
        </div>

        <div class="card-body">
		<div class="name-expert">
          <h3>Priya Kapoor</h3>
		  <p class="verified"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle-check" class="svg-inline--fa fa-circle-check " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"></path></svg> Verified Expert</p>
		  </div>
          <p class="role">Remote Accounting Assistant</p>

          

          <p class="desc">
        Priya is skilled in accounting operations such as bookkeeping, payroll processing, and tax management using QuickBooks, Xero, and Sage Accounting. With over 6 years of experience in the finance industry, she ensures accuracy, compliance, and timely financial reporting while maintaining organized records and detailed documentation.
          </p>

          <div class="skills">
            <span>Quict Intuit</span>
            <span>Xero</span>
         <span>Sage Acconting</span>
          </div>
        </div>
      </div>
	  
	  
	  
	  <div class="talent-card">
        <div class="img-wrap">
		<span class="Price">$9/hour</span>
          <img src="https://virtualassistant24x7.com/wp-content/uploads/2025/08/Untitled-design-2025-10-11T173625.982.webp" />
        </div>

        <div class="card-body">
		<div class="name-expert">
          <h3>Rajesh Singh</h3>
		  <p class="verified"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle-check" class="svg-inline--fa fa-circle-check " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"></path></svg> Verified Expert</p>
		  </div>
          <p class="role">Senior Payroll Analyst</p>

          

          <p class="desc">
         Rajesh  brings over 8 years of expertise in payroll audits, tax filing, and multi-state compliance. He blends analytical insight with real-world experience to support scalable payroll systems for growing teams. Rajesh thrives in fast-paced environments where accuracy and strategic insights are critical to success.
          </p>

          <div class="skills">
            <span>Kronos </span>
            <span> Tax Reporting </span>
         <span> Multi-State Payroll</span>
          </div>
        </div>
      </div>
	  

   <div class="talent-card">
        <div class="img-wrap">
		<span class="Price">$8/hour</span>
          <img src="https://virtualassistant24x7.com/wp-content/uploads/2025/08/Sneha-Kumari.webp" />
        </div>

        <div class="card-body">
		<div class="name-expert">
          <h3>Sneha Kumari</h3>
		  <p class="verified"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle-check" class="svg-inline--fa fa-circle-check " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"></path></svg> Verified Expert</p>
		  </div>
          <p class="role">Global Payroll Manager</p>

          

          <p class="desc">
         Sneha kumari has been a part of several payroll outsourcing companies. She manages complex international payrolls across multiple regions. With 10+ years in global payroll leadership, Sneha is good at aligning payroll with strategic goals. She’s passionate about simplifying global operations and building payroll systems that grow with businesses.
          </p>

          <div class="skills">
            <span>SAP SuccessFactors  </span>
            <span>  Global Compliance  </span>
         <span>  Strategic Payroll Planning</span>
          </div>
        </div>
      </div>

    <div class="talent-card">
        <div class="img-wrap">
		<span class="Price">$7/hour</span>
          <img src="https://virtualassistant24x7.com/wp-content/uploads/2025/08/Radhika-Arora.webp" />
        </div>

        <div class="card-body">
		<div class="name-expert">
          <h3>Radhika Arora</h3>
		  <p class="verified"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle-check" class="svg-inline--fa fa-circle-check " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"></path></svg> Verified Expert</p>
		  </div>
          <p class="role">Senior Payroll Analyst</p>

          

          <p class="desc">
         Radhika Arora brings over 8 years of expertise in payroll audits, tax filing, and multi-state compliance. She blends analytical insight with real-world experience to support scalable payroll systems for growing teams. Radhika thrives in fast-paced environments where accuracy and strategic insights are critical to success. 
          </p>

          <div class="skills">
            <span>Kronos </span>
            <span>  Tax Reporting   </span>
         <span>   Multi-State Payroll</span>
          </div>
        </div>
      </div>
	  
	  
	    <div class="talent-card">
        <div class="img-wrap">
		<span class="Price">$8/hour</span>
          <img src="https://virtualassistant24x7.com/wp-content/uploads/2025/08/Sarthak-Goyal.webp" />
        </div>

        <div class="card-body">
		<div class="name-expert">
          <h3>Sarthak Goyal</h3>
		  <p class="verified"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle-check" class="svg-inline--fa fa-circle-check " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"></path></svg> Verified Expert</p>
		  </div>
          <p class="role">Tax Planning Specialist</p>

          

          <p class="desc">
         With 9+ years of experience in tax strategy and compliance, I specialize in optimizing tax structures to minimize liabilities while ensuring full regulatory adherence. I help businesses navigate complex tax laws, identify deductions, and implement proactive tax-saving strategies that drive financial efficiency.
          </p>

          <div class="skills">
            <span>SAP FICO </span>
            <span> NetSuite </span>
         <span>    QuickBooks</span>        <span>  Tally ERP</span>
          </div>
        </div>
      </div>
	  
	  
	    <div class="talent-card">
        <div class="img-wrap">
		<span class="Price">$7/hour</span>
          <img src="https://virtualassistant24x7.com/wp-content/uploads/2025/08/Aditi-Sharma.webp" />
        </div>

        <div class="card-body">
		<div class="name-expert">
          <h3>Aditi Sharma</h3>
		  <p class="verified"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle-check" class="svg-inline--fa fa-circle-check " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"></path></svg> Verified Expert</p>
		  </div>
          <p class="role">AR Reporting & Reconciliation Expert</p>

          

          <p class="desc">
        With credit risk monitoring, customer account reconciliation, and AR aging analysis knowledge, Aditi is an accounts receivable specialist who brings 9+ years of experience to the table. She has worked in different accounts receivable outsourcing firms in India. Fast and accurate, she leads clients toward total control.
          </p>

          <div class="skills">
            <span>Credit Monitoring  </span>
            <span>Credit Monitoring   </span>
         <span>   ERP Data Management</span>
          </div>
        </div>
      </div>
	  
	  
	  
	    <div class="talent-card">
        <div class="img-wrap">
		<span class="Price">$9/hour</span>
          <img src="https://virtualassistant24x7.com/wp-content/uploads/2025/08/kunal-Khurana.webp" />
        </div>

        <div class="card-body">
		<div class="name-expert">
          <h3>kunal Khurana</h3>
		  <p class="verified"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle-check" class="svg-inline--fa fa-circle-check " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"></path></svg> Verified Expert</p>
		  </div>
          <p class="role">Inventory Bookkeeping Specialistz</p>

          

          <p class="desc">
       Kunal brings over eight years of hands-on experience managing global accounts receivable (AR) systems across various industries. He’s a pro at cash application, sorting out invoice disputes, and cutting down Days Sales Outstanding (DSO). With his deep knowledge of AR automation tools.
          </p>

          <div class="skills">
            <span>Cash Application    </span>
            <span>  DSO Reduction  </span>
         <span>   Invoice Dispute Resolution</span>
          </div>
        </div>
      </div>
	  
	  
	  <div class="talent-card">
        <div class="img-wrap">
		<span class="Price">$9/hour</span>
          <img src="https://virtualassistant24x7.com/wp-content/uploads/2025/08/Anurag-Kushwaha.webp" />
        </div>

        <div class="card-body">
		<div class="name-expert">
          <h3>Anurag Kushwaha</h3>
		  <p class="verified"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle-check" class="svg-inline--fa fa-circle-check " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"></path></svg> Verified Expert</p>
		  </div>
          <p class="role">Inventory Bookkeeping Specialist</p>

          

          <p class="desc">
       Anurag Kushwaha focuses on managing and reconciling inventory for companies with multiple locations. He boasts practical experience in retail and eCommerce, and can ensure inventory records are correct, shrinkage is less, and month-end statements are clean. Anurag is an advocate for keeping inventory flowing.
          </p>

          <div class="skills">
            <span>Xero  </span>
            <span>   Inventory Reconciliation   </span>
         <span>   Unleashed</span>
          </div>
        </div>
      </div>
	  
	  
 <div class="talent-card">
        <div class="img-wrap">
		<span class="Price">$9/hour</span>
          <img src="https://virtualassistant24x7.com/wp-content/uploads/2025/10/Priyanka-Sharma.webp" />
        </div>

        <div class="card-body">
		<div class="name-expert">
          <h3>Priyanka Sharma</h3>
		  <p class="verified"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle-check" class="svg-inline--fa fa-circle-check " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"></path></svg> Verified Expert</p>
		  </div>
          <p class="role">Inventory Bookkeeping Specialist</p>

          

          <p class="desc">
      With 9 years of AP experience, Priyanka has mastered invoice processing, vendor reconciliation and payment approvals for global clients. She is known for making sure that no duplicate payment is made and compliance is maintained.<br></br> 
          </p>

          <div class="skills">
            <span>Invoice Management  </span>
            <span>  Vendor Reconciliation  </span>
         <span>    PO Matching</span>
          </div>
        </div>
      </div>
	  
	  
 </Slider>
 </div>
 </div>


</section>
		  <section className="toolslider testimonial">

        
        <div className="sectionHeading text-center mb-30">
          <h2>Advanced Tools Supporting Efficient Financial Management & Accounting Solutions</h2>
        </div>

        <Slider {...settings} className="pp-slider">
          {tools.map((img, index) => (
            <div key={index} className="tool-slide">
              <img src={img} alt="tool" />
            </div>
          ))}
        </Slider>

   
    </section>

          <section class="section">
            <div class="container">
              <div className="flex-div">

                <div class="New-left reveal reveal-left">
                  <div class="titile-tag">WHY CITADEL COWORKERS</div>
                  <div class="sectionHeading">
                    <h2>Finance Professionals Who Go Beyond the Books</h2>
                    <h4></h4></div>



                  <p>
                    We don’t just close books — we open possibilities. Our finance managers
                    identify your highest-ROI opportunities and turn reporting into a strategic advantage.
                  </p>
                  <div class="img-bottom-content">
                    <img src="/images/f.gif"></img>
                  </div>
                </div>


                <div class="Right-new reveal reveal-right">

                  <div class="card">
                    <div class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-check w-5 h-5 text-primary"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><polyline points="16 11 18 13 22 9"></polyline></svg></div>
                    <p>Professionals who have been pre-screened and have experience with compliance in multiple countries are ready to go quickly.</p>
                  </div>
                  <div class="card">
                    <div class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plug w-5 h-5 text-primary"><path d="M12 22v-5"></path><path d="M9 8V2"></path><path d="M15 8V2"></path><path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z"></path></svg></div>
                    <p>Dashboards that show you what's going on in real time and records that are ready for an audit so you never have to rush at the end of the month.

                    </p>
                  </div>
                  <div class="card">
                    <div class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-activity w-5 h-5 text-primary"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg></div>
                    <p>Dashboards that show you what's going on in real time and records that are ready for an audit so you never have to rush at the end of the month.

                    </p>
                  </div>

                  <div class="card">
                    <div class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-scaling w-5 h-5 text-primary"><path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M14 15H9v-5"></path><path d="M16 3h5v5"></path><path d="M21 3 9 15"></path></svg></div>
                    <p>Scalable teams can grow or shrink depending on the needs of your project and workload.</p>
                  </div>

                  <div class="card">
                    <div class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-award w-5 h-5 text-primary"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></svg></div>
                    <p>Battle-tested support for M&A, fundraising and due diligence on more than 2,500 projects.
                      .</p>
                  </div>

                  <div class="card">
                    <div class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-lock w-5 h-5 text-primary"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg></div>
                    <p>Strict data security standards with encryption and full compliance protocols.
                    </p>
                  </div>

                </div>    </div>

            </div>
          </section>

          <section className="citadel-testimonial reveal reveal-bottom">
            <div className="container">

              <h2>Client Success Stories</h2>

              <div className="testmonial-slider">
 <Slider {...settings2} className="pp-slider">

                {/* CARD 1 */}
                <div>
                  <div className="testimonial-card">
                    <div className="quote"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-quote h-6 w-6 text-white" aria-hidden="true"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg></div>

                    <p className="text">
                      "We've been hiring Citadel Coworkers for finance and accounting outsourcing services ever since! They have done a great job to help us optimize our financial processes itself and even saved us the costs for doing that. It really has been a game changer."
                    </p>


                    <div className="footer">
                      <div className="client-info">

                        <img
                          src="https://citadelcoworkers.com/wp-content/uploads/2025/02/emily_s-2.png"
                          alt="client"
                          className="client-img" />

                        <div>
                          <strong>Emily Thompson</strong>

                        </div>

                      </div>
                    </div>


                  </div>
                </div>

                {/* CARD 2 */}
                <div>
                  <div className="testimonial-card ">
                    <div className="quote"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-quote h-6 w-6 text-white" aria-hidden="true"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg></div>

                    <p className="text">
                      "The service forms an integral part of our financial management and is a testament to the professionalism on show from Citadel Coworkers . They were able to scale our business without needing us in the day-to-day operations, because of their team expertly taking care."
                    </p>


                    <div className="footer">
                      <div className="client-info">

                        <img
                          src="https://www.citadelcoworkers.com/wp-content/uploads/2025/02/brianh-1.png"
                          alt="client"
                          className="client-img" />

                        <div>
                          <strong>Benjamin Reed</strong>

                        </div>

                      </div>
                    </div>

                  </div>
                </div>

                {/* CARD 3 */}
                <div>
                  <div className="testimonial-card">
                    <div className="quote"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-quote h-6 w-6 text-white" aria-hidden="true"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg></div>

                    <p className="text">
                      " Their virtual assistants are not only an extension of the team, but also an integral part to growing our business! They have contributed heavily to our business enhancement due to their timely and exact performance. They have become my number one."
                    </p>


                    <div className="footer">
                      <div className="client-info">

                        <img
                          src="https://virtualassistant24x7.com/wp-content/uploads/2025/02/Rachel-Johnson-1.webp"
                          alt="client"
                          className="client-img" />

                        <div>
                          <strong>Rachel Johnson</strong>

                        </div>

                      </div>
                    </div>

                  </div>
                </div>
				
				
				  {/* CARD 4 */}
                <div>
                  <div className="testimonial-card">
                    <div className="quote"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-quote h-6 w-6 text-white" aria-hidden="true"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg></div>

                    <p className="text">
                      "Citadel Coworkers takes the stress out of confusing processes as soon as we hire tax professionals from them. Their know-how about tax stuff lets us chill out, knowing we are saving the most money possible and following all the rules. They've been a great partner for us."
                    </p>


                    <div className="footer">
                      <div className="client-info">

                        <img
                          src="https://virtualassistant24x7.com/wp-content/uploads/2025/08/Jordan_Evans.webp"
                          alt="client"
                          className="client-img" />

                        <div>
                          <strong>Jordan Evans</strong>

                        </div>

                      </div>
                    </div>

                  </div>
                </div>
				
				
				
				  {/* CARD 5 */}
                <div>
                  <div className="testimonial-card">
                    <div className="quote"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-quote h-6 w-6 text-white" aria-hidden="true"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg></div>

                    <p className="text">
                      " Citadel Coworkers really took our tax prep seriously right from the start. Their offshore team felt like they were right here with us, but we also got extra flexibility, speed, and awesome expertise. We highly recommend you hire tax preparers from them."
                    </p>


                    <div className="footer">
                      <div className="client-info">

                        <img
                          src="https://virtualassistant24x7.com/wp-content/uploads/2025/08/Patrick-_Adams.webp"
                          alt="client"
                          className="client-img" />

                        <div>
                          <strong>Patrick  Adams</strong>

                        </div>

                      </div>
                    </div>

                  </div>
                </div>
				
				
				
				  {/* CARD 6 */}
                <div>
                  <div className="testimonial-card">
                    <div className="quote"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-quote h-6 w-6 text-white" aria-hidden="true"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg></div>

                    <p className="text">
                      "Working with Citadel has elevated the quality and consistency of our SOAs. Their paraplanners deliver well-researched documents that streamline our review process, saving us valuable hours each week. This efficiency has helped our firm to onboard more clients."
                    </p>


                    <div className="footer">
                      <div className="client-info">

                        <img
                          src="https://virtualassistant24x7.com/wp-content/uploads/2025/12/New-Project-41.webp"
                          alt="client"
                          className="client-img" />

                        <div>
                          <strong>David Thompson</strong>

                        </div>

                      </div>
                    </div>

                  </div>
                </div>
				  {/* CARD 7 */}
                <div>
                  <div className="testimonial-card">
                    <div className="quote"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-quote h-6 w-6 text-white" aria-hidden="true"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg></div>

                    <p className="text">
                      "It has been a breath of fresh air working with Citadel Coworkers. We no longer spend hours trying to decipher reports or correct mismatched numbers. Their QuickBooks skills are organized, concise, accurate, and on time from day one. It's like we've moved from chaos to clarity."
                    </p>


                    <div className="footer">
                      <div className="client-info">

                        <img
                          src="https://virtualassistant24x7.com/wp-content/uploads/2025/08/New-kaleigh_harlow.webp"
                          alt="client"
                          className="client-img" />

                        <div>
                          <strong>Kaleigh harlow</strong>

                        </div>

                      </div>
                    </div>

                  </div>
                </div>
				
				
				 {/* CARD 8 */}
                <div>
                  <div className="testimonial-card">
                    <div className="quote"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-quote h-6 w-6 text-white" aria-hidden="true"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg></div>

                    <p className="text">
                      "Before working with Citadel Coworkers, our finance team was always behind. Now we’re ahead of schedule. They’ve brought clarity to our cash flow, handled reporting, and even helped us prepare for tax season. The attention to detail has been outstanding."
                    </p>


                    <div className="footer">
                      <div className="client-info">

                        <img
                          src="https://virtualassistant24x7.com/wp-content/uploads/2025/08/Jason-Moore.webp"
                          alt="client"
                          className="client-img" />

                        <div>
                          <strong>Jason Moore</strong>

                        </div>

                      </div>
                    </div>

                  </div>
                </div>
				
				 {/* CARD 8 */}
                <div>
                  <div className="testimonial-card">
                    <div className="quote"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-quote h-6 w-6 text-white" aria-hidden="true"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg></div>

                    <p className="text">
                      "Prior to Citadel Coworkers, our reporting was always last-minute and disorganized. Now it's efficient, on-time, and much more accurate. Their staff keeps the cogs turning in the background while we work with clients. We outsourced, but more importantly, we leveled up."
                    </p>


                    <div className="footer">
                      <div className="client-info">

                        <img
                          src="https://virtualassistant24x7.com/wp-content/uploads/2025/08/New-Project-32.webp"
                          alt="client"
                          className="client-img" />

                        <div>
                          <strong>Lucy Scott</strong>

                        </div>

                      </div>
                    </div>

                  </div>
                </div>
				
				
				 {/* CARD 9 */}
                <div>
                  <div className="testimonial-card">
                    <div className="quote"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-quote h-6 w-6 text-white" aria-hidden="true"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg></div>

                    <p className="text">
                      "We turned to Citadel Coworkers when we needed help reconciling accounts and managing payroll. The team jumped right in and took ownership like pros. Everything’s on track now, and it’s such a relief to know we’re in good hands. Highly recommend their accounting services."
                    </p>


                    <div className="footer">
                      <div className="client-info">

                        <img
                          src="https://virtualassistant24x7.com/wp-content/uploads/2025/08/1660140639980.webp"
                          alt="client"
                          className="client-img" />

                        <div>
                          <strong>Natalie Brooks</strong>

                        </div>

                      </div>
                    </div>

                  </div>
                </div>
					 {/* CARD 10 */}
                <div>
                  <div className="testimonial-card">
                    <div className="quote"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-quote h-6 w-6 text-white" aria-hidden="true"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg></div>

                    <p className="text">
                      "Working with Citadel Coworkers on our accounting needs has been a game changer. They simplified our month-end processes and helped us clean up years of messy records. The transition was smooth, and now everything is just handled—accurately and on time"
                    </p>


                    <div className="footer">
                      <div className="client-info">

                        <img
                          src="https://virtualassistant24x7.com/wp-content/uploads/2025/08/Ethan-Ross.webp"
                          alt="client"
                          className="client-img" />

                        <div>
                          <strong>Ethan Ross</strong>

                        </div>

                      </div>
                    </div>

                  </div>
                </div>
				
				
				
</Slider>
              </div>

            </div>
          </section>
       
          <section><FinanceBrandslider /></section>
          <section className="bottom-sec-coor">
            <div className="bottom-conclusion reveal reveal-bottom">
              <div class="container">
                <div class="sectionHeading text-center mb-4">

                  <h2>Ready to Hire Your <span class="Grentext">Finance Team?</span>
                  </h2>
                  <div class="para">Share your requirements and our team will get back with the best strategy to move forward.
                  </div></div>

                <div class="btn-group">
                  <button class="ctaBtn">Get a Free Consultation</button>
                  <a href="tel:+19294707990" class="btn-outline">Call Now !</a>
                </div>
              </div>

            </div>
          </section>
        </div></>
    )
};

export default FinanceAccounting;