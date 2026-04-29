import React,{useEffect} from "react";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const AboutCitadelAdvantage = () => {
   
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return(
    
        <React.Fragment>
          <style>{`
          .results h4 {
    margin-bottom: 10px !important;
    color: #bfdbfe;
}
    .client-info {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 15px;
}

.client-img {
  width: 65px;
  height: 65px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #3b82f6;
}
.citadel-testimonial .slick-slide > div {
  display: flex;
  justify-content: center;
}.testimonial-card {
  max-width: 70%;
  margin: auto;
      margin-top: 16px;
}
.slick-prev, .slick-next {
    background: none !important;
    box-shadow: none !important;
}
    .slick-prev:before, .slick-next:before {
    color: #fff;
    font-size: 40px;
}
.citadel-testimonial .slick-slide > div {
  display: flex;
  justify-content: center;
}
          .citadel-testimonial {
  padding: 100px 20px;
  text-align: center;
  color: #fff;

  background:
    radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
    linear-gradient(135deg, #0f1c3f, #1e3a8a);

  background-size: 25px 25px, cover;
}

.citadel-testimonial h2 {
  font-size: 38px;
  margin-bottom: 50px;
  font-weight: 700;
}

/* CARD */
.testimonial-card {
  position: relative;
  background: rgba(255,255,255,0.06);
  padding: 40px;
  border-radius: 16px;
  border: 1px solid rgba(255,255,255,0.15);
  text-align: left;
}

/* QUOTE */
.quote {
  position: absolute;
  top: -15px;
  left: 20px;
  background: #2563eb;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* TAG */
.tag {
  display: inline-block;
      margin-top: 30px;
  background: rgba(255,255,255,0.1);
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 12px;
  margin-bottom: 20px;
}

/* TEXT */
.text {
  font-style: italic;
  color: #e5e7eb;
  margin-bottom: 20px;
}

/* RESULTS */
.results p {
  font-size: 14px;
  color: #86efac;
  margin: 5px 0;
}

/* FOOTER */
.footer {
  margin-top: 20px;
  border-top: 1px solid rgba(255,255,255,0.2);
  padding-top: 15px;
}

.footer strong {
  display: block;
}

.footer span {
  display: block;
  font-size: 13px;
  color: #cbd5f5;
}

/* SLICK FIX */
.slick-prev:before,
.slick-next:before {
  color: #fff;
}

.slick-dots li button:before {
  color: #fff;
}
section.Advantage-section .icon {
    margin: unset;
    background: #204ecf;
    margin-bottom: 30px;
    display: flex;
}
    .flow-item:nth-child(odd) {
    margin-left: 40px;
}
    section.Unique-section H2 {
    font-size: 38px;
    font-weight: 700;
    color: #111827;
    margin-bottom: 20px;
    TEXT-ALIGN: CENTER;
    margin-bottom: 60px;
}
    .flow-item h4 {
    color: #1f2937;
    font-size: 16px;
    margin-bottom: 5px;
    font-weight: bold;
}
    .flow-number {
    position: absolute;
    top: -20px;
    left: 40px;
    background: #2563eb;
    color: #ffffff;
    font-weight: 600;
    font-size: 14px;
    padding: 8px 18px;
    border-radius: 30px;
    letter-spacing: 1px;
}
    .flow-item {
    background: #ffffff;
    padding: 30px;
    border-radius: 25px;
    position: relative;
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.05);
    transition: 0.4s ease;
    margin-bottom: 50px;
}
    section.Unique-section {
    padding: 60px 6%;
    background: #f5f8ff;
}
    section.Advantage-section .icon svg {
    color: #fff;
}
section.Advantage-section h2 {
    font-size: 38px;
    text-align: center;
    font-weight: bold;
    margin-bottom: 50px;
}
.problem-section {
  padding: 80px 20px;
  background: #f5f7fb;
}



/* GRID */
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
}

/* CARD */
.card {
  position: relative;
  background: #fff;
  padding: 25px;
  border-radius: 12px;
  border: 1px solid #e5e7eb;
  transition: 0.3s;
}

/* BADGE (NUMBER) */
.badge {
  position: absolute;
  top: -12px;
  right: -12px;
  background: #2563eb;
  color: #fff;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  box-shadow: 0 5px 15px rgba(37, 99, 235, 0.4);
}

/* ICON */
.icon {
  width: 50px;
  height: 50px;
  background: #eef2ff;
  color: #2563eb;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  font-size: 20px;
  margin-bottom: 15px;
}

/* TITLE */
.card h3 {
  font-size: 18px;
  margin-bottom: 10px;
  color: #1f2937;
}

/* TEXT */
.card p {
 
  color: #000;
  line-height: 1.6;
}

/* HOVER */
.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0,0,0,0.08);
}

/* RESPONSIVE */
@media (max-width: 900px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
.cta-section {
  background: #0b0f14;
  padding: 80px 20px;
}

.stats-section {
  padding: 80px 20px;
  text-align: center;
  color: #fff;

  background:
    radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
    linear-gradient(135deg, #0f1c3f, #1e3a8a);

  background-size: 25px 25px, cover;
}


.stats-section .icon {
    background: #00cc8333;
}
/* HEADING */
.stats-section h2 {
  font-size: 38px;
  margin-bottom: 60px;
      font-weight: 700;
}

/* SUBTEXT */
.subtitle {
  max-width: 700px;
  margin: auto;
  color: #cbd5f5;
  font-size: 15px;
  line-height: 1.6;
  margin-bottom: 60px;
}

/* GRID */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 25px;
}

/* CARD */
.stat-card {
  background: rgba(255, 255, 255, 0.05);
  padding: 30px 20px;
  border-radius: 16px;
  border: 1px solid rgba(255,255,255,0.15);
  backdrop-filter: blur(10px);
  transition: 0.3s;
}

/* ICON */
.icon {
  width: 50px;
  height: 50px;
  margin: auto;
  margin-bottom: 15px;
  background: rgba(255,255,255,0.1);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
}

/* NUMBER */
.stat-card h3 {
  font-size: 38px;
  margin-bottom: 5px;
}

/* LABEL */
.stat-card p {
  color: #cbd5f5;
  font-size: 14px;
}

/* HOVER */
.stat-card:hover {
  transform: translateY(-6px);
  border-color: #60a5fa;
}

/* RESPONSIVE */
@media (max-width: 900px) {
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 500px) {
  .stats-grid {
    grid-template-columns: 1fr;
  }
}
/* BOX */
.cta-box {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 30px;
  border-radius: 16px;
  background: #fff;
      border-left: 4px solid #2563eb;
  border: 1px solid rgba(0, 255, 255, 0.2);
  box-shadow: 0 0 40px rgba(0, 255, 255, 0.08);
  margin-top:40px;
      border-left: 4px solid #2563eb;
}

/* ICON */
.icon {
  width: 60px;
  height: 60px;

  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  font-size: 24px;

}

/* TEXT */
.content h2 {
  color: #000;
  font-size: 38px;
  margin-bottom: 10px;
  font-weight: 700;
}

.content p {
  color: #000;

  line-height: 1.6;
  margin: 0;
}

/* RESPONSIVE */
@media (max-width: 768px) {
  .cta-box {
    flex-direction: column;
    text-align: center;
  }
}
     
.citadelSection {
  padding: 80px 20px;
  background: #f5f7fb;
}



section.citadelSection .row {
  display: flex;
  align-items: center;
  gap: 40px;
  flex-wrap: wrap;
}

/* LEFT */
.left {
  flex: 1;
}

.left h2 {
  font-size: 38px;
  font-weight: 700;
  color: #1f2a44;
  margin-bottom: 20px;
}

.desc {
  color: #000;
  line-height: 1.7;
  margin-bottom: 30px;
}

.features {
  list-style: none;
  padding: 0;
}

.features li {
  background: #fff;
  padding: 14px 18px;
  border-radius: 10px;
  margin-bottom: 14px;
  display: flex;
  align-items: center;
  gap: 10px;
  border: 1px solid #e5e7eb;
  font-size: 14px;
  transition: 0.3s;
}

.features li::before {
  content: "✔";
  color: #2563eb;
  font-weight: bold;
}

.features li:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.05);
}

/* RIGHT */
.right {
  flex: 1;
  display: flex;
  justify-content: center;
}

.imageCard {
  position: relative;
  border-radius: 20px;
  overflow: hidden;

}

.imageCard img {
  width: 100%;
  display: block;
  border-radius: 20px;
}

.imageCard::after {
  content: "";
  position: absolute;
  top: 20px;
  left: 20px;
  width: 100%;
  height: 100%;
  background: #dbeafe;
  border-radius: 20px;
  z-index: -1;
}

/* MOBILE */
@media (max-width: 768px) {
  .row {
    flex-direction: column;
  }

  .left h2 {
    font-size: 28px;
  }
}


    .heroSection {
      width: 100%;
  height: 500px;
      position: relative;
      background: url('/images/advantage-img.webp') no-repeat center/cover;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
    }

    .heroOverlay {
      position: absolute;
      inset: 0;
      height: 500px;
      background: linear-gradient(
        90deg,
        rgba(8, 20, 40, 0.95) 0%,
        rgba(8, 20, 40, 0.85) 40%,
        rgba(8, 20, 40, 0.6) 100%
      );
      backdrop-filter: blur(6px);
    }

    .heroContent {
      position: relative;
      text-align: center;

      z-index: 2;
      padding: 0 20px;
           padding-top: 80px;
    }

    .heroContent h1 {
      font-size: 56px;
      font-weight: 700;
      color: #fff;
      margin-bottom: 20px;
    }

    .heroContent p {
      color: #fff;
      font-size: 16px;
      line-height: 1.6;
      margin-bottom: 30px;
    }

    .ctaBtn {
        padding: 14px 26px;
    border-radius: 10px;
    font-weight: 600;
        display: inline-block;
    text-decoration: none;
    background: linear-gradient(90deg, #4f6df5, #3b82f6);
    color: white;
    box-shadow: 0 10px 25px rgba(79, 109, 245, 0.25);
    font-size: 15px;
    transition: all .25s ease;
    }
    .imageWrapper {
  position: relative;
  display: inline-block;
}

/* BACK SHAPE */
.imageWrapper::before {
  content: "";
  position: absolute;
  top: 20px;
  left: 20px;
  width: 100%;
  height: 100%;
  background: #dbeafe; /* light blue */
  border-radius: 20px;
  transform: rotate(-2deg); /* tilt effect */
  z-index: 0;
}

/* MAIN IMAGE CARD */
.imageCard {
  position: relative;
  z-index: 1;
  border-radius: 20px;
  overflow: hidden;

}

.imageCard img {
  width: 100%;
  display: block;
  border-radius: 20px;
}
  .pointer-section {
  background: #0b0f14;
  padding: 60px 20px;
}

.ctaBtn:hover {
    background: #fff !important;
    color: #4f6df5;
}
/* GRID */
.grid {
  display: grid;
      margin-top: 36px;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
}

/* CARD */
.section.citadelSection .card {
  display: flex;
  align-items: center;
  gap: 15px;
  background: #fff;
  border: 1px solid #204ecf;
  padding: 20px;
  border-radius: 12px;
  color: #000;
  transition: 0.3s;
}

/* ICON BOX */
section.citadelSection .icon {
  width: 50px;
  height: 50px;

  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  font-size: 20px;

}

/* TEXT */
section.citadelSection .card p {
  font-size: 14px;
  margin: 0;
  text-align:center;
}

/* HOVER */
.card:hover {
  border-color: #22d3ee;
  transform: translateY(-4px);
}

/* RESPONSIVE */
@media (max-width: 900px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .grid {
    grid-template-columns: 1fr;
  }
  .flow-item:nth-child(odd)
  {margin-left:0px !important;}
    .heroContent h1
          {font-size:30px; !important}
    .heroContent
          {padding-top:0px !important}

          .heroOverlay,section.heroSection {
    height: auto !important;
}
    .content h2,.stats-section h2,section.Advantage-section h2,section.Unique-section H2,.citadel-testimonial h2
          {font-size:28px;}
          
          .testimonial-card
          {padding:15px;}
          }
		  }
  `}
  </style>
            <HelmetProvider>
                <Helmet>
                    <title>About Citadel Advantage - citadel coworkers</title>
                    <meta name="description" content="About Citadel Advantage Cookie List A cookie is a small piece of data (text file) that a website – when visited by a user – asks your browser to store on your device in order to remember information about you, such as your language preference or login information. Those cookies are set by us and called […]" />
                    <link rel="canonical" href={window.location.href} />
                </Helmet>
                <section className="heroSection">

    {/* Overlay */}
    <div className="heroOverlay"></div>

    {/* Content */}
    <div className="heroContent">
        <h1>The Citadel Advantage</h1>
        <p>
           We understand that your business needs a partner, someone who understands your goals, <br></br>shows up consistently and delivers quality work and scales with you. 

        </p>

        <Link to="/contact-us" className="ctaBtn">
            Discover the Citadel Advantage →
        </Link>
    </div>

</section>
               <section className="citadelSection">
  <div className="container">
    <div className="row">

      {/* LEFT */}
      <div className="left">
        <h2>
          What Citadel Coworkers  <span className="greenText">Bring
          to Your Team </span>
        </h2>

        <p className="desc">
          The right talent makes your life easier. At Citadel Coworkers, we work to connect you with 
          pre-vetted professionals from India. They seamlessly integrate within your current workflows 
          and are productive at work from day one. We handle all the hiring processes so you can focus 
          on strategic planning.
        </p>

      
      </div>

      {/* RIGHT */}
      <div className="right">
        <div className="imageCard">
          <div code-path="src/App.tsx:131:15" class="absolute -inset-4 bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl transform rotate-3"></div>
          <img src="/images/teammembers.webp" alt="team" />
        </div>
      </div>

    </div>



    <div className="grid">

      <div className="card">
        <div className="icon"><img src="/images/team-new.webp" alt="Icon" /></div>
        <p>Dedicated professionals across 25+ domains</p>
      </div>

      <div className="card">
        <div className="icon"><img src="/images/Cost savings.webp" alt="Icon" /></div>
        <p>Cost savings of up to 70% compared to local hiring</p>
      </div>

      <div className="card">
        <div className="icon"><img src="/images/onboarding.webp" alt="Icon" /></div>
        <p>Managed onboarding and support</p>
      </div>

      <div className="card">
        <div className="icon"><img src="/images/scale.webp" alt="Icon" /></div>
        <p>Flexible scaling of your team</p>
      </div>

      <div className="card">
        <div className="icon"><img src="/images/ai-brain.webp" alt="Icon" /></div>
        <p>Hybrid AI + Human vetting framework for reliable hiring</p>
      </div>

      <div className="card">
        <div className="icon"><img src="/images/process (1).webp" alt="Icon" /></div>
        <p>Customized systems built around your business workflows</p>
      </div>

    </div>
  <div className="cta-box">



      <div className="content">
        <h2>Don't <span className="greenText">Miss Out</span></h2>
        <p>
         Every minute your team spends on tasks that can be delegated is time that is not spent on improving strategy, clients and growth. We fill the talent gap efficiently and reliably so that nothing falls through the cracks.
        </p>
      </div>

    </div>

  </div>
</section>

<section class="stats-section">
  <div class="container">

    <h2>Business Problems We Solve For You
</h2>

    
   <div className="grid">


      <div className="card">
        <span className="badge">1</span>
        <div className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-dollar-sign h-7 w-7 text-blue-600" aria-hidden="true" x-file-name="ProblemsSection" x-line-number="37" x-column="18" x-component="IconComponent" x-id="ProblemsSection_37_18" x-dynamic="true" x-source-type="static-imported" x-source-var="problemsData" x-source-file="./data/mock" x-source-file-abs="/app/frontend/src/data/mock.js" x-source-line="30" x-source-editable="true" x-array-var="problemsData" x-array-file="./data/mock" x-array-line="30" x-array-item-param="problem"><line x1="12" x2="12" y1="2" y2="22"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg></div>
        <h3>High Hiring Costs</h3>
        <p>Local hiring is expensive and risky, considering the recruitment fees, onboarding cycles, employee benefits and fixed salary commitments. With Citadel, you get access to skilled professionals at a fraction of the cost while maintaining productivity. 
.</p>
      </div>


      <div className="card">
        <span className="badge">2</span>
        <div className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users h-7 w-7 text-blue-600" aria-hidden="true" x-file-name="ProblemsSection" x-line-number="37" x-column="18" x-component="IconComponent" x-id="ProblemsSection_37_18" x-dynamic="true" x-source-type="static-imported" x-source-var="problemsData" x-source-file="./data/mock" x-source-file-abs="/app/frontend/src/data/mock.js" x-source-line="30" x-source-editable="true" x-array-var="problemsData" x-array-file="./data/mock" x-array-line="30" x-array-item-param="problem"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg></div>
        <h3>Talent Shortages</h3>
        <p>Finding the right talent for a specialized role can take months and those delays can impact delivery timelines and client commitments. Citadel connects you with qualified professionals within 48 hours, so your projects keep moving. 
</p>
      </div>

  
      <div className="card">
        <span className="badge">3</span>
        <div className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-zap h-7 w-7 text-blue-600" aria-hidden="true" x-file-name="ProblemsSection" x-line-number="37" x-column="18" x-component="IconComponent" x-id="ProblemsSection_37_18" x-dynamic="true" x-source-type="static-imported" x-source-var="problemsData" x-source-file="./data/mock" x-source-file-abs="/app/frontend/src/data/mock.js" x-source-line="30" x-source-editable="true" x-array-var="problemsData" x-array-file="./data/mock" x-array-line="30" x-array-item-param="problem"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg></div>
        <h3>Limited Bandwidth</h3>
        <p>When critical tasks rely on one or two team members, your operations are in a vulnerable state. A sudden absence or increase in workflow can disrupt projects. Citadel maintains operational stability to keep your workflows running smoothly. 
</p>
      </div>

      <div className="card">
        <span className="badge">4</span>
        <div className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-target h-7 w-7 text-blue-600" aria-hidden="true" x-file-name="ProblemsSection" x-line-number="37" x-column="18" x-component="IconComponent" x-id="ProblemsSection_37_18" x-dynamic="true" x-source-type="static-imported" x-source-var="problemsData" x-source-file="./data/mock" x-source-file-abs="/app/frontend/src/data/mock.js" x-source-line="30" x-source-editable="true" x-array-var="problemsData" x-array-file="./data/mock" x-array-line="30" x-array-item-param="problem"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg></div>
        <h3>Inconsistent Quality</h3>
        <p>Freelancers often work with multiple clients at once, which leads to inconsistent deliverables. When you work at Citadel, you get dedicated professionals aligned with your business goals. This ensures you get steady quality and reliability. 
</p>
      </div>


      <div className="card">
        <span className="badge">5</span>
        <div className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trending-up h-7 w-7 text-blue-600" aria-hidden="true" x-file-name="ProblemsSection" x-line-number="37" x-column="18" x-component="IconComponent" x-id="ProblemsSection_37_18" x-dynamic="true" x-source-type="static-imported" x-source-var="problemsData" x-source-file="./data/mock" x-source-file-abs="/app/frontend/src/data/mock.js" x-source-line="30" x-source-editable="true" x-array-var="problemsData" x-array-file="./data/mock" x-array-line="30" x-array-item-param="problem"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg></div>
        <h3>Slow Execution</h3>
        <p>Delay in execution can lose impact and slow down the whole process. A structured approach at Citadel maintains consistency in outputs, builds visibility and is on schedule to get maximum output from a campaign. 
</p>
      </div>

    
      <div className="card">
        <span className="badge">6</span>
        <div className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-code h-7 w-7 text-blue-600" aria-hidden="true" x-file-name="ProblemsSection" x-line-number="37" x-column="18" x-component="IconComponent" x-id="ProblemsSection_37_18" x-dynamic="true" x-source-type="static-imported" x-source-var="problemsData" x-source-file="./data/mock" x-source-file-abs="/app/frontend/src/data/mock.js" x-source-line="30" x-source-editable="true" x-array-var="problemsData" x-array-file="./data/mock" x-array-line="30" x-array-item-param="problem"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg></div>
        <h3>IT Backlogs</h3>
        <p>Technical backlogs are a cause of slow innovation, which often frustrates clients. Citadel professionals clear pending tasks efficiently, which allows your core team to focus on strategic initiatives and growth. 
</p>
      </div>


      <div className="card">
        <span className="badge">7</span>
        <div className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-globe h-7 w-7 text-blue-600" aria-hidden="true" x-file-name="ProblemsSection" x-line-number="37" x-column="18" x-component="IconComponent" x-id="ProblemsSection_37_18" x-dynamic="true" x-source-type="static-imported" x-source-var="problemsData" x-source-file="./data/mock" x-source-file-abs="/app/frontend/src/data/mock.js" x-source-line="30" x-source-editable="true" x-array-var="problemsData" x-array-file="./data/mock" x-array-line="30" x-array-item-param="problem"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg></div>
        <h3>Expansion Limits</h3>
        <p>Entering new markets needs time and resources you may not currently have. Citadel scalable support so you can expand confidently without committing to permanent hires or making large upfront investments. 
</p>
      </div>

  
      <div className="card">
        <span className="badge">8</span>
        <div className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clock h-7 w-7 text-blue-600" aria-hidden="true" x-file-name="ProblemsSection" x-line-number="37" x-column="18" x-component="IconComponent" x-id="ProblemsSection_37_18" x-dynamic="true" x-source-type="static-imported" x-source-var="problemsData" x-source-file="./data/mock" x-source-file-abs="/app/frontend/src/data/mock.js" x-source-line="30" x-source-editable="true" x-array-var="problemsData" x-array-file="./data/mock" x-array-line="30" x-array-item-param="problem"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg></div>
        <h3>Workflow Gaps</h3>
        <p>When the work stops at the end of your business day, your progress slows down. With Citadel’s professionals operating across different time zones, tasks continue moving forward overnight, helping you increase turnaround speed and maintain consistent momentum. 
</p>
      </div>

 
      <div className="card">
        <span className="badge">9</span>
        <div className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-settings h-7 w-7 text-blue-600" aria-hidden="true" x-file-name="ProblemsSection" x-line-number="37" x-column="18" x-component="IconComponent" x-id="ProblemsSection_37_18" x-dynamic="true" x-source-type="static-imported" x-source-var="problemsData" x-source-file="./data/mock" x-source-file-abs="/app/frontend/src/data/mock.js" x-source-line="30" x-source-editable="true" x-array-var="problemsData" x-array-file="./data/mock" x-array-line="30" x-array-item-param="problem"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg></div>
        <h3>Lack of Systems</h3>
        <p>Businesses struggle not because of talent but because of inefficient systems. Citadel doesn’t just provide you with the right talents; we also build and streamline systems that are tailored to your business, ensuring smoother operations and scalable growth. 
</p>
      </div>

    </div>

  </div>
</section>





<section class="Unique-section">
      <div class="Unique-container container">
        <div class="section-header">
          <h2>Unique Advantages of  <span className="greenText">Our Hiring Process </span>
</h2>
      
        </div>
        <div class="email-2026-flow">
          <div class="flow-item">
            <div class="flow-number">01</div>
            <h4>90% Talent Fit Rate, Higher Than Industry Averages
</h4>
            <p>Our hybrid AI-human vetting process is focused on evaluating the real skills of the candidates rather than just relying on the resumes. They are assessed via skill-based practical tests along with human evaluations conducted by the talent acquisition team. This ensures high talent fit rates and builds a stable team for your business. </p>
          </div>
          <div class="flow-item">
            <div class="flow-number">02</div>
            <h4>Transparent and structured hiring process
</h4>
            <p>Every stage of our hiring process is clearly defined and communicated with you as well as the candidates. This makes sure that both parties can understand how the decisions are made. This approach improves fairness, maintains consistency in hiring and ensures businesses always know the quality standards behind each hire. 
</p>
          </div>
          <div class="flow-item">
            <div class="flow-number">03</div>
            <h4>Candidates tested in real work scenarios
</h4>
            <p>Candidates are evaluated through task-based assessments and real work situations. They are tested on how well they can manage deadlines, ambiguous briefs and collaboration challenges. We make sure they are prepared to perform effectively and integrate smoothly into distributed teams from day one. 
</p>
          </div>
        
         
       
      </div></div>
    </section>

<section className="citadel-testimonial">
  <div className="container">

    <h2>Client Success Stories</h2>

    <Slider
      dots={true}
      arrows={true}
      infinite={true}
      speed={500}
      slidesToShow={1}
      slidesToScroll={1}
      autoplay={true}
      autoplaySpeed={3000}
    >

      {/* CARD 1 */}
      <div>
        <div className="testimonial-card">
          <div className="quote"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-quote h-6 w-6 text-white" aria-hidden="true"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg></div>
          <span className="tag">HIRED – WEB DEVELOPER & MARKETING ASSISTANT
</span>
          <p className="text">
            "We needed reliable support without going through long hiring cycles. Citadel Coworkers connected us with professionals who integrated
             quickly with our internal workflows and started contributing almost immediately."
          </p>
          <div className="results">
            <h4 class="text-lg font-semibold text-blue-200 mb-4">KEY RESULTS</h4>
            <p>✔ Faster hiring for specialized roles</p>
            <p>✔ Seamless integration with internal teams</p>
              <p>✔ Reduced operational workload
</p>
          </div>
		  
		  	   <div className="footer">
  <div className="client-info">

    <img 
      src="/images/clinet 2.webp" 
      alt="client" 
      className="client-img"
    />

    <div>
 <strong>Daniel Whitmore</strong>
            <span>Chief Operating Officer<br></br>Digital Services Firm

</span>
    </div>

  </div>
</div>
        
        
        </div>
      </div>

      {/* CARD 2 */}
      <div>
        <div className="testimonial-card">
          <div className="quote"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-quote h-6 w-6 text-white" aria-hidden="true"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg></div>
          <span className="tag">HIRED – DIGITAL MARKETING SPECIALIST & VIRTUAL ASSISTANT
</span>
          <p className="text">
            "Hiring locally for every role was becoming expensive and time-consuming. Citadel helped us access skilled professionals who handle execution tasks 
            consistently, allowing our core team to stay focused on strategy and client growth."
          </p>
          <div className="results">
            <h4 class="text-lg font-semibold text-blue-200 mb-4">KEY RESULTS</h4>
            <p>✔Lower hiring and operational costs
</p>
            <p>✔ Reliable execution support
</p>
<p>✔ More time for strategic planning

</p>
          </div>
		  
		   <div className="footer">
  <div className="client-info">

    <img 
      src="/images/Lauren Mitchell.webp" 
      alt="client" 
      className="client-img"
    />

    <div>
 <strong>Lauren Mitchell</strong>
          <span>Founder<br></br>
Marketing & Consulting Agency 
</span>
    </div>

  </div>
</div>
         
        </div>
      </div>

      {/* CARD 3 */}
      <div>
        <div className="testimonial-card">
          <div className="quote"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-quote h-6 w-6 text-white" aria-hidden="true"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg></div>
          <span className="tag">HIRED – PHP DEVELOPER & QA TESTER</span>
          <p className="text">
            "As our projects grew, we needed a flexible way to expand the team without committing to permanent hires. Citadel Coworkers provided dependable professionals who helped us maintain delivery timelines while scaling operations."
          </p>
          <div className="results">
            <h4 class="text-lg font-semibold text-blue-200 mb-4">KEY RESULTS</h4>
            <p>✔ Flexible team scaling for projects
</p>
            <p>✔Flexible team scaling for projects
</p>  <p>✔ Reduced hiring delays

</p>
          </div>

          <div className="footer">
  <div className="client-info">

    <img 
      src="/images/clinett1.webp" 
      alt="client" 
      className="client-img"
    />

    <div>
      <strong>Christopher Bennett</strong>
      <span>Managing Director<br></br>
Technology Solutions Company
</span>
    </div>

  </div>
</div>
        
        </div>
      </div>

    </Slider>

  </div>
</section>
           
                <section className="bottom-sec">
                    <div className="container">
                        <div className="sectionHeading text-center">
                            <h2 className="mb-4">Smart Businesses Don’t Do Everything In-House; They Build The Right Team</h2>
                            <p>
                               Citadel Coworkers has helped businesses across the globe to reduce costs, close talent gaps and operate with the kind of efficiency that’s usually reserved for companies with much larger budgets. Whatever your team is missing, we can find it. 

                            </p>
                            <Link to='/contact-us' className="ctaBtn"> Build Your Team With Citadel Now!
</Link>
                        </div>
                    </div>
                </section>
            </HelmetProvider>
            {/* <Testimonial /> */}
        </React.Fragment>
    )
    
};

export default AboutCitadelAdvantage;