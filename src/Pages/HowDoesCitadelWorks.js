import React,{useEffect} from "react";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import  "../Component/css/how-citadel-works.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Pricing  from "../Component/Pricing";
const HowDoesCitadelWorks = () => {
   
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return(
        <React.Fragment>
            <HelmetProvider>
                <Helmet>
                    <title>How Does Citadel - citadel coworkers</title>
                    <meta name="description" content="How Does Citadel Cookie List A cookie is a small piece of data (text file) that a website – when visited by a user – asks your browser to store on your device in order to remember information about you, such as your language preference or login information. Those cookies are set by us and called […]" />
                    <link rel="canonical" href={window.location.href} />
                </Helmet>

                  <div className="HowDoesCitadelWorks">
      <section class="offshore-section">
  <div class="container">
    <div class="offshore-wrapper">

 
      <div class="offshore-content">
        <div class="badge">🌐 How Does Citadel Work</div>
        <h1>Our Offshore<br />Outsourcing Approach</h1>

        <p>
          Build dedicated offshore teams in India without the complexity.
          Access highly skilled professionals while we handle recruitment,
          infrastructure, and operations.
        </p>

        <div class="buttons">
          <a href="/contact-us" class="btn primary">
            Build Your Team →
          </a>
         
        </div>

    
      </div>

    
      <div class="offshore-image">
        <img src="/images/Work.gif" alt="Office" />
      </div>

    </div>
  </div>
</section>

<section classname="offshore-benefits"> 
  
  <div className="container ">
    <div className="benefits-content">
      <h2 className="page-title-sub">How Does Citadel Work 
</h2>
<p>
  Hiring global talent should not feel complicated. Citadel Coworkers empowers businesses around the globe by helping you build <a href="/">dedicated offshore teams in India</a>. No more headaches with recruitment, infrastructure, or the daily grind of operations.
</p>
<p>From grasping your needs to getting the right person up and running, our approach gives you the reins while we manage the operational intricacies behind the curtain.
</p>
<p>
We've changed the game in traditional outsourcing, allowing clients to bring on full-time, dedicated virtual employees who work solely for them. Citadel guarantees a seamless and transparent experience throughout the entire process.

</p>
    </div>

  </div>
</section>

<section class="workflow">
  <div className="container">
    <div className="heading-process">
   <h2 className="page-title-sub">Our Simple 4-Step Hiring Process

</h2>
    </div>
   
  <div class="workflow-grid">

   
    <div class="card">
      <div class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-text text-primary"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg></div>
      <span class="step-work">01</span>
      <h3>Share Your Requirements
</h3>
      <p>
        Please tell us exactly what you need, what skills are needed, how much experience is needed, what the main duties are and how many hours you intend to work. We work closely with you to make sure we find people who are a good fit for your company's needs and team culture.

      </p>
    </div>

  
    <div class="card">
      <div class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search text-primary"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg></div>
      <span class="step-work">02</span>
      <h3>Candidate Sourcing & Shortlisting
</h3>
      <p>
       With your specifications in hand our recruitment team begins the hunt, tapping into our established talent network. Every candidate goes through a carefully designed hiring process, blending AI and human expertise. This approach allows us to evaluate their technical capabilities, communication skills, relevant experience, and how well they'd mesh with the position before we compile a shortlist.

      </p>
    </div>


    <div class="card">
      <div class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-check text-primary"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><polyline points="16 11 18 13 22 9"></polyline></svg></div>
      <span class="step-work">03</span>
      <h3> Interview And Select Your Candidate 
</h3>
      <p>
       You'll have the opportunity to examine the profiles of those who made the cut and then interview them yourself. You can use this method to find out how skilled they are, ask them specific questions, and then decide if they would be a suitable fit for your company. You are the one who makes the final decision about who to hire.

      </p>
    </div>

  
    <div class="card">
      <div class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-rocket text-primary"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg></div>
      <span class="step-work">04</span>
      <h3>Onboard & Start Working 
</h3>
      <p>
        After you've selected a candidate we take care of onboarding and operational setup. Your dedicated professional integrates with your team as we manage the underlying infrastructure. Your employee adheres to your directives, workflows and timelines. Daily communication and collaboration flow effortlessly through your chosen tools.

      </p>
    </div>
</div>
  </div>
</section>
<div><Pricing /></div>
<section className="stats-section">
<div className="container">

   <h2 className="page-title-sub text-center">What Do We Offer</h2>
 <div className="email-2026-flow">
          <div className="flow-item">
            <div className="flow-number">01</div>
            <h4>Dedicated Employee Model

</h4>
            <p>With CCW, outsourcing means <a href="/">hiring your own dedicated person in India</a>, just like you would hire a local employee in your own nation. We were the first company in the outsourcing business to use the Dedicated Employee Model, which focuses on a direct, one-on-one contact between you and your virtual employee. How it works: 
</p>
<ul>
  <li>
    You provide your staff assignments and projects directly.  </li>
  <li>Your worker follows your orders, timelines, and processes.   </li>
  <li>You may easily talk to and work with others every day using the tools you like best.

  </li>
</ul>
          </div>
          <div className="flow-item">
            <div className="flow-number">02</div>
            <h4>Team Model

</h4>
            <p>Our Team Model is tailored for clients who are outsourcing IT and software development projects, encompassing PHP, .Net and Web Design. It includes:

</p>
<ul>
  <li>A Technical Team Leader (TTL) oversees the operation, supported by a Senior Software Engineer (SSE).</li>
  <li>The whole team pitches in to ensure you get the hours you need each day, with a flexible schedule.</li>
  <li>Scalability is a breeze, meaning you can easily tweak the team size or hours to fit your project's requirements.</li>
</ul>
          </div>
          <div className="flow-item">
            <div className="flow-number">03</div>
            <h4>Infrastructure And Operational Support

</h4>
            <p>Partnering with Citadel Coworkers means you're not just getting skilled professionals; you're also getting a completely managed offshore operation. We handle all the essentials for your talent:</p>
         <ul>
          <li>
            A contemporary office environment      </li>                              
   <li>Reliable, high-speed internet and secure systems     </li>
   <li>IT support and technical help     </li>
   <li>HR management and payroll     </li>
   <li>Administrative and operational oversight     </li>

        
         </ul>
         
         </div>
        <div className="cta-box"><div class="content">
        
          <p>
           This full support allows your team to work in a steady, professional setting, so you don't have to worry about the costs and inconveniences of setting up an office overseas.
</p></div></div>
         
       
      </div>
</div>

</section>

<section className="Last-sec">
  <div className="Last-content">
    
  

    <h1>
      Build Your Dedicated 
      Offshore Team
    </h1>

    <p>
     Whether you are a startup, agency or growing enterprise, Citadel Coworkers helps you access highly skilled professionals in India while reducing hiring costs and operational complexity. 

    </p>
  <p>
Start building your remote team today and scale your business with the right talent


    </p>
    <a href="/contact-us" className="btn primary">
     Build Your Dedicated Team 

    </a>

    <div className="points">
      <span>No Hidden Fees</span>
      <span>Transparent Process</span>
      <span>100% Dedicated Staff</span>
      <span>Scalable Teams</span>
    </div>

  </div>
</section>

    </div>
            
            </HelmetProvider>
            {/* <Testimonial /> */}
        </React.Fragment>
    )
};

export default HowDoesCitadelWorks;