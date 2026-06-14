import React, {
  useEffect,
  useState,
  lazy,
  Suspense,


} from "react";


import  "../Component/css/finance-accounting.css";

import {
  industries,
  services,
  logos,
  tools
} from "../Data/financeData";
import { Helmet, HelmetProvider } from 'react-helmet-async';
const TestimonialsFinance = lazy(() =>
  import("../Component/TestimonialsFinance")
);
const Slider = lazy(() => import("react-slick"));
const TeamSection = lazy(() =>
  import("../Component/TeamSectionFiancalandingpage")
);
const WhyCitadelFinance = lazy(() =>
  import("../Component/WhyCitadelFinance")
);
const ContactFiance = lazy(() =>
 import("../Component/Fianaceladningpagecontact")
);
const FinanceAccounting = () => {

const scrollToForm = () => {
  const element = document.getElementById("Form-scroll");

  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

  const [visibleIndustries, setVisibleIndustries] = useState(6);
const [showTopBtn, setShowTopBtn] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY > 400) {
      setShowTopBtn(true);
    } else {
      setShowTopBtn(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);


const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};


 const [showAllServices, setShowAllServices] = useState(false);
const [showHeavySections, setShowHeavySections] = useState(false);

useEffect(() => {
  const trigger = document.getElementById("lazy-trigger");

  if (!trigger) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setShowHeavySections(true);
        observer.disconnect();
      }
    },
    {
      rootMargin: "300px",
    }
  );

  observer.observe(trigger);

  return () => observer.disconnect();
}, []);







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



  
    return(
      <HelmetProvider>
        <> 
            <Helmet>
      <meta name="robots" content="noindex, nofollow" />
  
        <style>{`
  body {
    padding-top: 0;
}
  .financeAccounting h2.title-page,
  .financeAccounting h2.title-page .hours {
    animation: none !important;
    transform: none !important;
    transition: none !important;
    opacity: 1 !important;
  }
    `}</style>
    </Helmet>
<div className="financeAccounting">
          <section className="Finace-accounting-section">
            <div className="container">
              <div className="offshore-wrapper card ">


                <div className="page-content ">
                  <div className="mini-badge">Finance & Accounting Outsourcing</div>
                  <h2 className="title-page"> <span className="hours"> Cut Costs. Not Quality.</span><br></br> Hire Expert Finance Teams from India.</h2>
				             <p className="des-fina">
                   Dedicated remote accountants, bookkeepers & finance analysts — fully managed, fully accountable. Your US operations, powered by India's top talent.
                    
    </p>
	<h2>
                    <div className="price-tag">
  <span className="small-text">Starting At</span>
   <span className="Grentext"> US $7</span>
  <span className="small-text">/hour</span>
</div>
                  </h2>

       

	<div className="hero-points">
<div className="top-badges">
  
 

  <div className="badge">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-shield w-4 h-4 text-primary" data-source-location="components/landing/Hero:52:20" data-dynamic-content="false"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
    <span>No Contracts</span>
  </div>

  <div className="badge">
 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-circle-check-big w-4 h-4 text-primary" data-source-location="components/landing/Hero:52:20" data-dynamic-content="false"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
    <span>No Upfront Costs</span>
  </div>

</div>
<div className="free-trial">

<span><h2>1</h2> Week Free Trial</span>
</div>
</div>


<div className="Button-sec">
<a
  href="/"
  className="colorBtn"
  onClick={(e) => {
    e.preventDefault();
    scrollToForm();
  }}
>
  Hire Now
</a>
</div>

<div className="trusted-section">
  <p className="heading-trust">TRUSTED & RATED</p>
 <div className="rating-wrapper">

  <div className="rating-card">
  <a href="https://www.trustpilot.com/review/citadelcoworkers.com">
    <div className="icon trustpilot"><img src="/images/star-trust.webp" loading="lazy"
  decoding="async" /></div>
    <div className="rating-text">
      <strong>4.4/5</strong>
   
      <p>Trustpilot</p>
    </div>
	</a>
  </div>




</div>
</div>

                </div>


                <div className="Contact-from-finace ">
				
				  <video
   
 
  preload="none"
  controls
  loop
  playsInline
  width="540"
  height="540"
  poster="/images/thumb-video.webp"
  className="heroVideoPlayer"
  >
    <source
     src="/images/meta ads 11 (1080 x 1080 px) (3).mp4"
            type="video/mp4"
    />
  </video>
		

				
       
                </div>

              </div>
			
            </div>
          </section>

          <section className="explore">
            <div className="container">
              <div className="row align-items-center mb-3">
                <div className="col-md-12 col-12 text-center"><div className="sectionHeading">
                  <h2>Revolutionize Your Business with the Best <span className="color-high">Financial Services</span> </h2>
                  <h4></h4></div></div><div className="col-md-12">
                    <div className="clientNum">
                   
                    <div className="clientBx  flip-card">
					  <div className="flip-inner">
					   <div className="flip-front">
                      <div className="client-icon">
                        <img src="/images/Projects.png" alt="Skilled Finance Experts"    loading="lazy"
  decoding="async"
  width="48"
  height="48"
 /></div>

                      <p><span>$50M+</span></p><h3>Managed in Client Finances</h3></div>
					  
					     <div className="flip-back">
    
      <p>Across multiple industries with consistent financial oversight</p>
    </div>
					  </div>  </div>
                      <div className="clientBx flip-card">
					   <div className="flip-inner">
					    <div className="flip-front">
					  <div className="client-icon">
                        <img src="/images/rating (3).png" alt="Happy Clients"    loading="lazy"
  decoding="async"
  width="48"
  height="48"
 /> </div><p><span>98% </span></p><h3>Client Retention Rate </h3></div>     <div className="flip-back">
     
      <p> Long-term partnerships built on trust and performance</p>

    </div></div>	</div>	
						<div className="clientBx flip-card">   <div className="flip-inner">  <div className="flip-front"><div className="client-icon"><img src="/images/Software-pay.png" alt="Payroll Software" loading="lazy"
  decoding="async"
  width="48"
  height="48"/></div><p><span>99.9%</span></p><h3>Accuracy in Financial Reporting </h3></div><div className="flip-back">
     
      <p> Ensuring error-free, audit-ready financials</p>
    </div></div></div>
						
                    <div className="clientBx flip-card">   <div className="flip-inner">  <div className="flip-front"><div className="client-icon"><img src="/images/expert (2).png" alt="Skilled Finance Experts"    loading="lazy"
  decoding="async"
  width="48"
  height="48"/></div><p><span>40</span>+</p>
                      <h3>Dedicated Finance Experts</h3></div> <div className="flip-back">
     
      <p> Skilled professionals managing end-to-end finance operations</p>

    </div></div></div>
					  
					  </div></div></div></div>
          </section>
		  
		  
		  
		

<section className="case-study-section">
   <div className="container">
  <div className="case-study-wrapper">


    <div className="case-left">

      <div className="mini-badge">
        FEATURED ENGAGEMENT · 2021–2025
      </div>
<div className="Rhythm-logo"><img src="/images/samll-logo-rhy.webp" alt="Rhythm Superfoods" /></div>
      <h1 className="main-heading">
        Four Years Running The Books
        for <span className="color-high">Rhythm Superfoods.</span>
      </h1>

      <p className="description">
        Citadel served as the outsourced bookkeeping team for Rhythm
        Superfoods, a national CPG snack brand sold across thousands
        of retail doors in the US. We owned the full back office —
        AP, AR, reconciliations, and monthly close — reporting directly
        to the company’s CFO.
      </p>

      <p className="description">
        For nearly four years. Without a single in-house finance hire
        required on their side to keep the books clean.
      </p>
<div className="engagement-strip">

  <div className="engagement-box">
    <h3>4 yrs</h3>
    <span>Continuous Engagement</span>
  </div>

  <div className="engagement-box">
    <h3>100%</h3>
    <span>Bookkeeping Owned</span>
  </div>

  <div className="engagement-box">
    <h3>CFO</h3>
    <span>Reference Available</span>
  </div>

</div>
    <div className="scope-title">
            Scope Owned By Citadel
          </div>
    <div className="tags">

            <div className="tag">Accounts payable</div>
            <div className="tag">Accounts receivable</div>
            <div className="tag">Bank reconciliations</div>
            <div className="tag">Monthly close</div>
            <div className="tag">Sales tax • multi-state</div>
            <div className="tag">CFO reporting pack</div>
            <div className="tag muted">Retailer chargebacks</div>

          </div>
	
	

      

    </div>

 
    <div className="case-right">

      <div className="small-label">
        ★ REFERENCE AVAILABLE
      </div>

      <h2>Talk to their CFO.</h2>

      <p>
        Allison White, CFO at Rhythm Superfoods, is happy to take
        reference calls from prospective clients evaluating Citadel.
        Available on request once we've scoped your engagement.
      </p>
  <div className="quote-card">

        <div className="quote-icon">❞</div>

        <h3>
          “Most outsourced bookkeeping relationships don’t survive year one.
          Ours ran for nearly four.”
        </h3>

        <div className="rating-row">
          <div className="stars">★★★★★</div>
          <span>Engagement Period: 2021–2025</span>
        </div>

      </div>
     

      <button className="reference-btn">
        <a href="https://www.citadelcoworkers.com/case-study/rhythm-superfoods" target="_blank" rel="noopener noreferrer">
          Read the full case study →
        </a>
      </button>

    </div>

  </div> </div>

</section>


   <section className="servics-sec">
      <div className="container">
        <div className="sectionHeading text-center mb-4">
          <div className="mini-badge">What We Offer</div>

          <h2 style={{ textAlign: "center", color: "#000" }}>
            Full-Spectrum <span className="color-high">Finance & Accounting</span> Services
          </h2>

          <div
            className="para"
            style={{ textAlign: "center", color: "#000" }}
          >
            From day-to-day bookkeeping to strategic CFO-level guidance, we get
            exactly the financial expertise your business needs without the
            full-time overhead.
          </div>
        </div>

        <div className="ser-grid">
          {services.map((service, index) => (
            <div
              key={index}
              className={`box-card-3d mobile-service-card ${
                index >= 6 && !showAllServices ? "mobile-hidden-service" : ""
              }`}
            >
              <div className="icon-svg-F">
                <img
                  src={service.img}
                  alt={service.alt}
                  className="serviceIco"
                  width="64"
                  height="64"
                    loading="lazy"
  decoding="async"
  sizes="64px"
                />
              </div>

              <h3>{service.title}</h3>

              <p>{service.desc}</p>
            </div>
          ))}
        </div>

        {/* Mobile View More Button */}
        <div className="mobile-view-more-btn">
          {!showAllServices && (
            <button onClick={() => setShowAllServices(true)}>
              View More Services
            </button>
          )}
        </div>
      </div>
    </section>




<div id="lazy-trigger" style={{ height: "1px" }}></div>
{showHeavySections && (
  <Suspense fallback={<div />}>
    <TeamSection />
  </Suspense>
)}
<section className="Form-scroll" id="Form-scroll">
<div className="container">
<div className="form-wrapper-top">
<div className="Formwrapper-left">
<div className="mini-badge">Free Consultation</div>

<h1 className="main-heading">Get Your Dedicated Finance Expert in<span className="color-high"> 48 Hours</span></h1>

<p className="description">Tell us what you need and we'll match you with the right resource — no commitment required for the first week.
</p>
<div className="benefits-box">
  <div className="benefit-item">
<span className="check-icon">
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
    <path d="M20 6L9 17L4 12" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
</span>
    <div>
      <h4>No long-term contracts</h4>
      <p>Month-to-month, scale up or down any time</p>
    </div>
  </div>

  <div className="benefit-item">
 <span className="check-icon">
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
    <path d="M20 6L9 17L4 12" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
</span>
    <div>
      <h4>Transparent pricing from US $7/hr</h4>
      <p>All-inclusive — no hidden fees</p>
    </div>
  </div>

  <div className="benefit-item">
   <span className="check-icon">
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
    <path d="M20 6L9 17L4 12" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
</span>
    <div>
      <h4>Dedicated resource model</h4>
      <p>Your resource, your time zone, your tools</p>
    </div>
  </div>

  <div className="benefit-item">
<span className="check-icon">
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
    <path d="M20 6L9 17L4 12" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
</span>
    <div>
      <h4>Free 1-week trial</h4>
      <p>Try before you commit — zero risk</p>
    </div>
  </div>
</div>
</div>
<div className="Formwrapper-right">
  <div className="bottom-contact-from">
			 <Suspense fallback={<div />}>
   <ContactFiance />
</Suspense>
			  
			  </div>
</div>
</div>

</div>
</section>


  {showHeavySections && (

		  <section className="toolslider testimonial">

        
        <div className="sectionHeading text-center mb-30">
          <h2>Advanced Tools Supporting Efficient Financial Management & <span className="color-high">Accounting Solutions</span></h2>
        </div>
   <Suspense fallback={<div />}>
        <Slider {...settings} className="pp-slider">
          {tools.map((img, index) => (
            <div key={index} className="tool-slide">
              <img src={img} alt="tool"   loading="lazy"
  decoding="async" />
            </div>
          ))}
        </Slider>

   </Suspense>
    </section>
)}



{showHeavySections && (
  <section>
    <div className="container">
      <div className="sectionHeading text-center mb-30">
        <div className="mini-badge">Who we serve</div>

        <h2>
          Finance Expertise Across{" "}
          <span className="color-high">Industries</span>
        </h2>

        <p>
          Our teams understand how finance works across different business
          models.
        </p>
      </div>

      <div className="industry-grid">
        {industries.slice(0, visibleIndustries).map((industry, index) => (
          <div className="industry-box" key={index}>
            <div className="industry-img">
              <img
                src={industry.img}
                alt={industry.title}
                loading="lazy"
                decoding="async"
              />

              <span className="industry-badge">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>

            <div className="industry-content">
              <h3>{industry.title}</h3>
              <p>{industry.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="industry-actions">
        {visibleIndustries < industries.length && (
          <button
            className="industry-load-btn"
            onClick={() =>
              setVisibleIndustries((prev) =>
                Math.min(prev + 3, industries.length)
              )
            }
          >
            Load More Industries
          </button>
        )}

<a
  href="/"
  className="colorBtn"
  onClick={(e) => {
    e.preventDefault();
    scrollToForm();
  }}
>
          Hire Finance Expert
        </a>
      </div>
    </div>
  </section>
)}

		
{showHeavySections && (
  <>

        <Suspense fallback={<div />}>
  <WhyCitadelFinance />
</Suspense>

          <Suspense fallback={<div />}>
  <TestimonialsFinance />
</Suspense>
  
 </>
)}
        
          <section className="bottom-sec-coor">
            <div className="bottom-conclusion">
              <div className="container">
                <div className="sectionHeading text-center mb-4">

                  <h2>Ready to Hire Your <span className="color-high">Finance Team?</span>
                  </h2>
                  <div className="para">Share your requirements and our team will get back with the best strategy to move forward.
                  </div></div>

                <div className="btn-group">
                  <a href="/contact-us" className="ctaBtn">Get a Free Consultation</a>
                  <a href="tel:+19294707990" className="btn-outline">Call Now !</a>
                </div>
              </div>

            </div>
          </section>
<a
  href="/"
className="sticky-contact-btn"
  onClick={(e) => {
    e.preventDefault();
    scrollToForm();
  }}
>
    
  Get In Touch
</a>
          {showTopBtn && (
  <button
    className="backToTop"
    onClick={scrollToTop}
    aria-label="Back to top"
  >
    ↑
  </button>
)}
        </div></></HelmetProvider>
    )
};

export default FinanceAccounting;