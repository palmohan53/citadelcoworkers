import React, { useState } from "react";


// Existing Components
import Pricing from "./Pricing";
import ServicePackage from "./ServicePackage";

/* ==============================
   SVG ICONS
============================== */

const HiringIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="10" cy="7" r="4" />
    <path d="M20 8v6" />
    <path d="M17 11h6" />
  </svg>
);

const ServiceIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 2l2.4 5 5.6.8-4 3.9.9 5.6L12 15.8 7.1 17.3 8 11.7 4 7.8 9.6 7z" />
  </svg>
);

const PricingTabs = ({ handleScrollClick, service }) => {
  const [activeTab, setActiveTab] = useState("services");

  return (
     <>
       <style>{` 
/* =========================================
   PRICING SECTION
========================================= */

.pricing-section {
  position: relative;
  overflow: hidden;
  padding: 100px 0;
  background: linear-gradient(
    180deg,
    #ffffff 0%,
    #f7f9ff 100%
  );
}

.pricing-section .container {
  max-width: 1320px;
  margin: auto;
  padding: 0 20px;
  position: relative;
  z-index: 5;
}

/* =========================================
BACKGROUND
========================================= */

.pricing-bg-circle {
  position: absolute;
  border-radius: 50%;
  filter: blur(90px);
  opacity: .35;
}

.circle-one{
  width:380px;
  height:380px;
  background:#204ECF;
  top:-120px;
  left:-120px;
}

.circle-two{
  width:320px;
  height:320px;
  background:#8F5BFF;
  bottom:-100px;
  right:-80px;
}

/* =========================================
HEADER
========================================= */

.pricing-heading{
  max-width:760px;
  margin:auto;
  text-align:center;
}

.pricing-badge{

  display:inline-flex;
  align-items:center;

  padding:10px 18px;

  border-radius:40px;

  background:#EEF3FF;

  color:#204ECF;

  font-size:14px;

  font-weight:700;

  margin-bottom:22px;

  border:1px solid rgba(32,78,207,.15);

}



.pricing-heading h2 span{

  color:#204ECF;

}


/* =========================================
TABS
========================================= */

.pricing-tabs{

  width:fit-content;

  margin:60px auto 70px;

  display:flex;

  gap:10px;

  padding:8px;

  background:#fff;

  border-radius:60px;

  border:1px solid #E8ECF5;

  box-shadow:

  0 18px 45px rgba(15,23,42,.08);

}

.pricing-tab{

  display:flex;

  align-items:center;

  gap:10px;

  padding:16px 28px;

  border:none;

  background:transparent;

  border-radius:50px;

  cursor:pointer;

  font-size:16px;

  font-weight:600;

  color:#64748B;

  transition:.35s ease;

}

.pricing-tab svg{

  width:20px;

  height:20px;

}

.pricing-tab:hover{

  color:#204ECF;

}

.pricing-tab.active{

  background:#204ECF;

  color:#fff;

  box-shadow:

  0 14px 30px rgba(32,78,207,.28);

}

.pricing-tab.active svg{

  color:#fff;

}

/* =========================================
CONTENT
========================================= */

.pricing-content{

  margin-top:20px;

  animation:fadeUp .45s ease;

}.pricing-content.pricingtabs section.pricing {
    padding: 0;
}
.pricing-content.pricingtabs .row.mb-5 {
    display: none;
}
@keyframes fadeUp{

  from{

    opacity:0;

    transform:translateY(20px);

  }

  to{

    opacity:1;

    transform:translateY(0);

  }

}
/*=========================================
BOTTOM TRUST SECTION
=========================================*/

.pricing-bottom {
    max-width: 820px;
    margin: 54px auto 0;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    align-items: center;
    padding: 12px 0;
    background: #fff;
    border: 1px solid #edf0f7;
    box-shadow: 0 8px 25px rgba(15, 23, 42, .04);
}

.trust-item {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 9px;
    padding: 0 18px;
}

.trust-item:not(:last-child)::after {
    position: absolute;
    top: 50%;
    right: 0;
    width: 1px;
    height: 22px;
    background: #d7deeb;
    content: "";
    transform: translateY(-50%);
}

.trust-icon {
    width: 19px;
    height: 19px;
    min-width: 19px;
    color: #204ECF;
    display: flex;
    align-items: center;
    justify-content: center;
}

.trust-icon svg{
    width:18px;
    height:18px;
}

.trust-item > div:last-child {
    display: flex;
    align-items: center;
    gap: 4px;
    white-space: nowrap;
}

.trust-item h4{
    margin:0;
    font-size:12px;
    font-weight:500;
    color:#53627d;
    line-height:1;
}

.trust-item p{
    margin:0;
    font-size:12px;
    color:#53627d;
    line-height:1;
}



/*=========================================
HELPER
=========================================*/

.pricing-content>*{

    animation:fadeCards .5s ease;

}

@keyframes fadeCards{

    from{

        opacity:0;

        transform:translateY(25px);

    }

    to{

        opacity:1;

        transform:translateY(0);

    }

}



/*=========================================
SCROLL MARGIN
=========================================*/

.pricing-section{

    scroll-margin-top:120px;

}



/*=========================================
TABLET
=========================================*/

@media(max-width:991px){

.pricing-heading h2{

    font-size:42px;

}



.pricing-tabs{

    flex-wrap:wrap;

    border-radius:24px;

    width:100%;

    justify-content:center;

}

.pricing-tab{

    flex:1;

    justify-content:center;

}

.pricing-bottom{
    max-width:500px;
    grid-template-columns:repeat(2,1fr);
    gap:12px 0;
    padding:14px 0;
}

}



/*=========================================
MOBILE
=========================================*/

@media(max-width:767px){

.pricing-section{

    padding:70px 0;

}

.pricing-heading h2{

    font-size:34px;

}



.pricing-tabs{

    padding:6px;

    gap:6px;

}

.pricing-tab{

    width:100%;

    padding:14px 18px;

    font-size:15px;

}

.pricing-tab span{

    white-space:nowrap;

}

.pricing-bottom{
    margin-top:40px;
    grid-template-columns:1fr;
}

.trust-item{
    justify-content:flex-start;
    padding:0 22px;
}

.trust-item:not(:last-child)::after {
    top:auto;
    right:22px;
    bottom:-6px;
    width:calc(100% - 44px);
    height:1px;
    transform:none;
}

}



/*=========================================
SMALL MOBILE
=========================================*/

@media(max-width:480px){

.pricing-heading h2{

    font-size:30px;

}

.pricing-badge{

    font-size:13px;

}

.pricing-tab{

    font-size:14px;

}

}
`}</style>
    <section className="pricing-section">

      <div className="pricing-bg-circle circle-one"></div>
      <div className="pricing-bg-circle circle-two"></div>

      <div className="container">

        {/* Heading */}

        <div className="pricing-heading sectionHeading">

          <span className="pricing-badge">
            Flexible Pricing
          </span>

          <h2>
            Choose the Right Plan
            <span> for Your Business</span>
          </h2>

          <p>
            Hire dedicated professionals or choose fully managed
            monthly service packages tailored for your business.
          </p>

        </div>

        {/* Tabs */}

        <div className="pricing-tabs">

          <button
            className={`pricing-tab ${
              activeTab === "services" ? "active" : ""
            }`}
            onClick={() => setActiveTab("services")}
          >
            <ServiceIcon />

            <span>Managed Services</span>

          </button>

          <button
            className={`pricing-tab ${
              activeTab === "hiring" ? "active" : ""
            }`}
            onClick={() => setActiveTab("hiring")}
          >
            <HiringIcon />

            <span>Dedicated Hiring</span>

          </button>

        </div>

        {/* Plans */}

        <div className="pricing-content pricingtabs">

          {activeTab === "hiring" ? (
            <Pricing  handleScrollClick={handleScrollClick} />
          ) : (
       <ServicePackage
  handleScrollClick={handleScrollClick}
  service={service}
/>
          )}

        </div>        {/* Bottom Trust Section */}

        <div className="pricing-bottom">

          <div className="trust-item">

            <div className="trust-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6l8-4z" />
                <path d="M9 12l2 2 4-4" />
              </svg>
            </div>

            <div>
              <h4>No Long-Term</h4>
              <p>Contracts</p>
            </div>

          </div>

          <div className="trust-item">

            <div className="trust-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="9" />
                <path d="M9 9l6 6M15 9l-6 6" />
              </svg>
            </div>

            <div>
              <h4>Cancel</h4>
              <p>Anytime</p>
            </div>

          </div>

          <div className="trust-item">

            <div className="trust-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6l8-4z" />
                <path d="M9 12l2 2 4-4" />
              </svg>
            </div>

            <div>
              <h4>Secure &</h4>
              <p>Reliable</p>
            </div>

          </div>

          <div className="trust-item">

            <div className="trust-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M4 12a8 8 0 1116 0" />
                <path d="M4 12v5a2 2 0 002 2h2v-7H6a2 2 0 00-2 2z" />
                <path d="M20 12v5a2 2 0 01-2 2h-2v-7h2a2 2 0 012 2z" />
              </svg>
            </div>

            <div>
              <h4>Expert</h4>
              <p>Support</p>
            </div>

          </div>

        </div>

      </div>

    </section>
    </>
  );
};

export default PricingTabs;
