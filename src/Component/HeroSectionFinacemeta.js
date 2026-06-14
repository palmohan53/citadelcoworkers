import React from "react";
import Slider from "react-slick";

const talents = [
  {
    img: "https://virtualassistant24x7.com/wp-content/uploads/2026/06/Priya-Malhotra-1.webp",
    name: "Priya Malhotra",
    role: "QuickBooks Certified ProAdvisor",
    exp: "US $1,120/Month",
     skills: ["QuickBooks Setup", "Workflow Optimization", "QuickBooks Online" ],
  },
  {
    img: "https://virtualassistant24x7.com/wp-content/uploads/2026/06/Arjun-Kapoor.webp",
    name: "Arjun Kapoor",
    role: "Accounts Payable Specialist",
exp: "US $800/Month",
    skills: ["Invoice management", "Vendor Reconciliation", "PO Matching" ],
  },
  {
    img: "https://virtualassistant24x7.com/wp-content/uploads/2026/06/Kavya.webp",
    name: "Kavya Singh",
    role: "Accounts Receivable Specialist",
exp: "US $1,280/Month",
     skills: ["Cash Application", "DSO Reduction", "Invoice Dispute Resolution" ],
  },
  {
    img: "https://virtualassistant24x7.com/wp-content/uploads/2026/06/AR-1.webp",
    name: "Rohan Verma",
    role: "Financial Paraplanner",
  exp: "US $1,280/Month",
     skills: ["Retirement Projections", "Superannuation Strategies", "SOA Preparation" ],
  },
  {
    img: "https://virtualassistant24x7.com/wp-content/uploads/2026/06/Aditi-Patel.webp",
    name: "Aditi Patel",
    role: "Senior Accountant",
  exp: "US $1,280/Month",
    skills: ["SAP FICO", "NetSuite", "Microsoft Dynamics" ],
  },
  ,
  {
    img: "https://virtualassistant24x7.com/wp-content/uploads/2026/06/ARAV-1.webp",
    name: "Aarav Sharma",
    role: "Senior Bookkeeping Specialist",
exp: "US $1,120/Month",
    skills: ["Xero", "QuickBooks Online", "Financial Reporting" ],
  },
  ,
  {
    img: "https://virtualassistant24x7.com/wp-content/uploads/2026/06/nAYA.webp",
    name: "Ananya Gupta",
    role: "Senior Financial Analyst",
  exp: "US $1,120/Month",
    skills: ["Strategic Planning", " M&A analysis", "Cost Management" ],
  },
  ,
  {
    img: "https://virtualassistant24x7.com/wp-content/uploads/2026/05/HARSH.webp",
    name: "Vivaan Mehta",
    role: "Tax Preparation Specialist",
  exp: "US $1,280/Month",
    skills: ["Proactive Tax Planning", "Business Structuring", "Wealth Preparation" ],
  },
];

export default function HeroSection() {
  const settings = {
    dots: false,
  
    speed: 700,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
         
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
       
     
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
                arrows: true,
        },
      },
    ],
  };

  return (
    <section className="talent-showcase-section">
      <div className="talent-showcase-inner">
        <div className="container">
          <div className="talent-heading">
            <h2>
           Build Your Finance & Accounting Team <br />
              <span className="highlight-color"> Within 24 Hours </span>
            </h2>

            <p>
             Access top 3% finance & accounting talent from India for all your end-to-end accounting requirements <span className="highlight-color"><b>starting at $7/hr.</b></span>
              <br />
        
            </p>



            <div className="talent-btns">
              <a href="#Form-scroll" className="hire-btn" >
               Meet Your Finance Expert →
              </a>
            
            </div>

            <div className="trustpilot-hero-bar">
  <div className="trustpilot-left">
    <span className="trust-star">★</span>
    <strong>Trustpilot</strong>
  </div>

  <div className="trust-divider"></div>

  <div className="trust-rating-boxes">
    <span>★</span>
    <span>★</span>
    <span>★</span>
    <span>★</span>
    <span>★</span>
  </div>

  <strong className="trust-score">4.8/5</strong>

  <div className="trust-divider"></div>

  <span className="trust-reviews">300+ businesses</span>
</div>
          </div>
        </div>

        <div className="talent-slider-wrap">
          <Slider {...settings}>
            {talents.map((talent, index) => (
              <div className="talent-slide" key={index}>
                <div className="talent-card">
                  <img src={talent.img} alt={talent.name} loading="lazy" />

                  <h3>
                    {talent.name} <img src="/images/verified.webp" alt="Verified"  className="verified-ex"/>
                  </h3>

                  <h4>{talent.role}</h4>
                  <strong>{talent.exp}</strong>

                  <div className="skills">
                    {talent.skills.map((skill, i) => (
                      <span key={i}>{skill}</span>
                    ))}
                  </div>

                
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}