import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import  "../Component/css/offshore.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faChalkboardUser, faMapLocationDot, faUsersViewfinder } from '@fortawesome/free-solid-svg-icons';
const Newabout = () => {
    return(

      <React.Fragment>
            <HelmetProvider>
                <Helmet>
                    <title>Offshore - citadel coworkers</title>
                    <meta name="description" content="Understanding Offshore team Understanding an offshore team means embracing a global perspective where expertise knows no bounds. At Citadel Co-workers, we connect you with a pool of 250 specialized professionals, each dedicated to your business’s growth. With seven years of experience and two offices spanning continents, our collaboration has led to the satisfaction of 650 […]" />
                    <link rel="canonical" href={window.location.href} />
                </Helmet>
<div className="offshore-page">
                <section class="hero">
  <div class="overlay"></div>

  <div class="container">
    <div className="banner-content">

    <div class="badge">🌐 YOUR OFFSHORE OFFICE IN INDIA</div>

    <h1>
      Your Dedicated <span>Offshore Hub</span> in India
    </h1>

    <p class="desc">
     Citadel Coworkers' offshore presence is not just about hiring remotely, but rather it's about a fully operational and dedicated hub that acts as your strategic office in India. We have hand-picked 250+ domain experts who drive efficiency, foster real-time collaboration and deliver the same level of productivity as your in-house team. Imagine CCW as your branch office without worrying about creating an entity, legal processes and having immediate access to India’s top talent. 

    </p>



    <div class="buttons">
      <a href="#" class="btn primary">Send Your Requirements →</a>
     
    </div>


</div>
  </div>
</section>


               <section className="citadelSection">
  <div className="container">
    <div className="row">

      {/* LEFT */}
      <div className="left">
        <h2 className="page-title-sub">
     We Manage Your Backend Operations So  <span className="greenText">You Don’t Have To</span>
        </h2>

        <p className="desc">
        Citadel Coworkers handles your complete day-to-day operations and administrative workload from day one, allowing you to smoothly focus on growing your business. 
        </p>

      
      </div>

      {/* RIGHT */}
      <div className="right">
        <div className="imageCard">
          <div code-path="src/App.tsx:131:15" class="absolute -inset-4 bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl transform rotate-3"></div>
          <img src="/images/team (6).webp" alt="team" />
        </div>
      </div>

    </div>



    <div className="grid">

      <div className="card">
        <div className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users text-accent group-hover:text-primary transition-colors duration-300"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg></div>
        <p>payroll administration 
</p>
      </div>

      <div className="card">
        <div className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-monitor text-accent group-hover:text-primary transition-colors duration-300"><rect width="20" height="14" x="2" y="3" rx="2"></rect><line x1="8" x2="16" y1="21" y2="21"></line><line x1="12" x2="12" y1="17" y2="21"></line></svg></div>
        <p>IT provisioning 
</p>
      </div>

      <div className="card">
        <div className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-building2 text-accent group-hover:text-primary transition-colors duration-300"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path><path d="M10 6h4"></path><path d="M10 10h4"></path><path d="M10 14h4"></path><path d="M10 18h4"></path></svg></div>
        <p>Office administration </p>
      </div>

      <div className="card">
        <div className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shield-check text-accent group-hover:text-primary transition-colors duration-300"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg></div>
        <p>Compliance & risk management 
</p>
      </div>

      <div className="card">
        <div className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eye text-accent group-hover:text-primary transition-colors duration-300"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg></div>
        <p>Ongoing supervision 
</p>
      </div>

      <div className="card">
        <div className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-headphones text-accent group-hover:text-primary transition-colors duration-300"><path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"></path></svg></div>
        <p>Client support
</p>
      </div>

    </div>


  </div>
</section>

<section className="full-control">
    <div className="container">
        <div className="Section-content">
            <div className="text-center top-content">
                <h2 className="page-title-sub">
                        Retain Complete Control While We Ensure Accountability
                    </h2>
                    <p>
Working with Citadel Coworkers’ you gain complete access to control over how you want to manage your offshore team the way you want. You set the goals, assign tasks, review output, conduct meetings and drive your performance directly. 
</p>
<p></p><p></p>
            </div>
            <div className="flex-div">
                <div className="left-content">
                    

<div className="img-bottom-content">
    <img src="images/offshore (1).webp" alt="Finance and Accounting Outsourcing" /></div>
<div className="bootom-card-100"><div class="font-bold text-2xl">100%</div><div class="text-sm font-medium opacity-80">Your Control</div></div>
                </div>
                <div className="right-side-content">
<div className="card"><div className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eye text-accent"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg></div><p>
   Our supervisors provide physical oversight during the work hours, make sure your instructions are being enforced and help maintain high standards. 
 </p></div>

 <div className="card"><div className="icon">
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-video text-accent"><path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path><rect x="2" y="6" width="14" height="12" rx="2"></rect></svg></div><p>
  We make sure that you have real-time visibility via HD video tools, shared dashboards and daily/weekly reporting as per your requirement.

 </p></div>


 <div className="card"><div className="icon">
<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-triangle-alert text-accent"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path><path d="M12 9v4"></path><path d="M12 17h.01"></path></svg></div><p>
  We are there for immediate intervention in case there are any issues that arise due to technical and communication our supervisors step in the right way. 

 </p></div>


 <div className="card"><div className="icon">
   <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-scale text-accent"><path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path><path d="M7 21h10"></path><path d="M12 3v18"></path><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"></path></svg></div><p>
  Our supervisors provide a neutral accountability layer, your team reports to you for work and to us for the professional conduct which results in maintaining ethics, discipline and completing work within the deadline. 

 </p></div>
                </div>
            </div>

        </div>
    </div>
</section>
<section className="stats-section">
    <div className="container">
<h2 className="page-title-sub text-center">
Built For SMEs & Growing Businesses
</h2>
<p>Citadel Coworkers makes high-quality operations accessible to SMEs without making any huge investments, legal complexity or long setup times. Our model lets your business have the same advantages as big businesses. 
</p>

<div className="email-2026-flow">
    <div className="flow-item">
        <div className="flow-number">01</div><h4>Zero capital expenditure on office, IT or legal setup 
</h4>
</div>
<div className="flow-item">
<div className="flow-number">02</div><h4>Enterprise-level infrastructure at friendly prices 
</h4>
</div>
<div className="flow-item"><div className="flow-number">03</div>
<h4>Easily scale your team up or down
</h4></div>

<div className="flow-item"><div className="flow-number">04</div>
<h4>Full compliance, HR and supervision handled for you

</h4></div>

<div className="flow-item"><div className="flow-number">05</div>
<h4>MNC-grade offshore benefits without any headaches

</h4></div>

</div>


</div>
</section>
   <section className="Last-sec"><div className="Last-content"><h1>Ready To Activate Your Offshore Hub In India?
</h1><p>Start building your dedicated team today without hidden costs. 
</p>
<a href="/contact-us" class="btn primary">Send Your Requirements</a></div></section>        
           
</div>
            </HelmetProvider>
            {/* <Testimonial /> */}
        </React.Fragment>
    )
};

export default Newabout;