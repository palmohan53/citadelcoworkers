import React, { useEffect, useState } from "react";

const PricingPage = () => {
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    const revealEls = document.querySelectorAll(".reveal");
const icons = {
  hourly: "M12 6v6l4 2 M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z",
  partTime: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2 M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z M22 21v-2a4 4 0 0 0-3-3.87 M16 3.13a4 4 0 0 1 0 7.75",
  fullTime: "M10 6V5a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v1 M3 7h18v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z M3 13h18",
  invoice: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2v6h6 M8 13h8 M8 17h6",
  growth: "M3 17l6-6 4 4 8-8 M21 7v6h-6",
  money: "M12 1v22 M17 5H9.5a3.5 3.5 0 0 0 0 7H14a3.5 3.5 0 0 1 0 7H6",
};
const SvgIcon = ({ type }) => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#1565FF"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d={icons[type]} />
  </svg>
);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("visible");
            }, index * 80);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    revealEls.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const plans = [
    {
      name: "Business Plan",
      tier: "Full-time",
      features: ["8 hours a day", "5 days a week", "Dedicated resource"],
      featured: false,
    },
    {
      name: "Pro Plan",
      tier: "Part-time",
      features: ["4 hours a day", "5 days a week", "Dedicated resource"],
      featured: true,
    },
    {
      name: "Basic Plan",
      tier: "Hourly",
      features: ["60 hours a month", "Pay-as-you-consume", "Ideal for low volume work"],
      featured: false,
    },
  ];

  const billingSteps = [
    {
      number: "01",
      title: "No Upfront Recruiting Fees",
      desc: "You only pay once you've met and approved your coworker. Sourcing and vetting are entirely on us.",
    },
    {
      number: "02",
      title: "One Predictable Invoice",
      desc: "Salary, benefits, equipment, and management roll into a single flat monthly rate. No payroll to run.",
    },
    {
      number: "03",
      title: "Scale Up Or Down Freely",
      desc: "Add coworkers as you grow or pause with notice. No long-term lock-in on monthly plans.",
    },
  ];

  const faqs = [
    {
      q: "What exactly is included in the monthly rate?",
      a: "Everything: your coworker's salary, benefits, equipment, software, and ongoing management by a Citadel success manager. You receive one flat invoice — no payroll, taxes, or hidden fees.",
    },
    {
      q: "What if my coworker isn't the right fit?",
      a: "Every Full-Time and Dedicated plan includes a free replacement guarantee. If it isn't working, we'll re-match you at no extra cost, usually within a week.",
    },
    {
      q: "Can I hire across multiple roles?",
      a: "Yes. Mix developers, designers, support, and admins under one Dedicated Team plan, managed by a single team lead and one consolidated invoice.",
    },
    {
      q: "Is there a long-term contract?",
      a: "Monthly plans run month-to-month with notice to pause or cancel. Dedicated Team engagements have a 3-month minimum, so the team can ramp up properly.",
    },
    {
      q: "How does annual billing save 15%?",
      a: "Paying for 12 months upfront locks in a 15% discount on the monthly rate and guarantees your coworker's availability for the full year.",
    },
  ];

  return (
    <>
      <style>{`
        :root {
          --blue:#204ecf;
          --blue-light:#E9EFFF;
          --blue-mid:#5F84FF;
          --grey-bg:#F5F5F7;
          --grey-mid:#DDDDE3;
          --grey-dark:#888899;
          --onyx:#121212;
          --white:#ffffff;
          --ease:cubic-bezier(0.23, 1, 0.32, 1);
        }

        .pricing-page {
          font-family: 'Inter', sans-serif;
          background: var(--grey-bg);
          color: var(--onyx);
          overflow-x: hidden;
        }

        .pricing-page * {
          box-sizing: border-box;
        }

    

        .label {
          display: block;
          color: var(--blue);
          font-weight: 700;
          font-size: 0.72rem;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          margin-bottom: 1.5rem;
        }

        .section-heading {
          font-weight: 900;
      
          
       
          font-size: clamp(2rem, 5vw, 3.5rem);
          margin-bottom: 3rem;
        }

        .pricing-hero {
        
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 150px 0px;
              padding-bottom: 0px;
        }

        .pricing-hero h1 {
          font-weight: 900;
  text-transform: capitalize;
    
      
          font-size: 60px;
          margin-bottom: 2rem;
        }

        .pricing-hero h1 .accent {
          color: var(--blue);
        }

        .pricing-hero p {
        
          color: var(--grey-dark);
        
          line-height: 1.7;
          margin-bottom: 4rem;
        }

        .energy-line {
          height: 2px;
          background: var(--blue);
          width: 100%;
          transform-origin: left;
          animation: growLine 1.2s var(--ease) 0.5s both;
        }

        @keyframes growLine {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }

        .pricing-section {
          padding: 7rem 0;
        }

        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          margin-top: 4rem;
        }

        .plan-card {
          background: var(--white);
          padding: 2.75rem;
          display: flex;
          flex-direction: column;
          border-top: 4px solid transparent;
          transition: transform 0.5s var(--ease), border-color 0.4s ease, box-shadow 0.5s ease;
        }

        .plan-card:hover {
          transform: translateY(-10px);
          border-top-color: var(--blue);
          box-shadow: 0 40px 80px rgba(0,0,0,0.06);
        }

        .plan-card.featured {
          border-top-color: var(--blue);
          box-shadow: 0 40px 80px rgba(32,78,207,0.08);
        }

        .plan-name {
          font-size: 0.72rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--grey-dark);
          margin-bottom: 0.5rem;
        }

        .plan-tier {
          font-size: 2.25rem;
          font-weight: 800;
          color: var(--blue);
          margin-bottom: 2rem;
          letter-spacing: -0.02em;
        }

        .feature-list {
          list-style: none;
          flex-grow: 1;
          margin-bottom: 2.5rem;
          padding: 0;
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem 0;
          border-bottom: 1px solid var(--grey-mid);
          font-size: 0.95rem;
        }

        .tick {
          width: 22px;
          height: 22px;
          min-width: 22px;
          background: var(--blue-light);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--blue);
          font-size: 11px;
          font-weight: 900;
        }

        .btn {
          display: block;
          text-align: center;
          padding: 1.1rem 1.5rem;
          font-weight: 700;
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          text-decoration: none;
          transition: background 0.4s var(--ease), color 0.3s ease;
        }

        .btn-dark {
          background: var(--onyx);
          color: var(--white);
        }

        .btn-dark:hover {
          background: var(--blue);
        }

        .btn-blue {
          background: var(--blue);
          color: var(--white);
        }

        .timeline-section {
          background:
            radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
            linear-gradient(135deg, #0f1c3f, #1e3a8a);
          background-size: 22px 22px, cover;
          padding: 80px 0;
          color: #fff;
        }

        .timeline-wrap {
          max-width: 1200px;
          position: relative;
          padding-left: 90px;
        }

        .timeline-line {
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 2px;
          background: #2563ff;
        }

        .timeline-line span {
          position: absolute;
          left: 50%;
          width: 16px;
          height: 16px;
          background: #fff;
          border: 2px solid #2563ff;
          border-radius: 50%;
          transform: translateX(-50%);
        }

        .timeline-line span:nth-child(1) { top: 88px; }
        .timeline-line span:nth-child(2) { top: 49%; }
        .timeline-line span:nth-child(3) { bottom: 105px; }

        .timeline-item {
          display: grid;
          grid-template-columns: 180px 1fr;
          gap: 60px;
          padding: 45px 0;
          border-bottom: 1px solid rgba(255,255,255,0.12);
        }

        .timeline-item:last-child {
          border-bottom: none;
        }

        .timeline-number {
          font-size: clamp(70px, 8vw, 120px);
          font-weight: 800;
          line-height: 0.9;
          color: rgba(255,255,255,0.08);
        }

        .timeline-content {
          padding-top: 10px;
        }

        .timeline-content h3 {
          font-size: 28px;
          font-weight: 800;
          text-transform: uppercase;
          margin-bottom: 14px;
        }

        .timeline-content p {
       
          font-size: 16px;
  
      
        }

.faq-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px 70px;
  align-items: start;
}

.faq-column {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.faq-item {
  background: #fff;
  border: 1px solid rgba(15, 23, 42, 0.1);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(15, 23, 42, 0.04);
}

.faq-body {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.35s ease;
}

.faq-item.open .faq-body {
  max-height: 500px;
}

@media (max-width: 900px) {
  .faq-grid {
    grid-template-columns: 1fr;
  }
}

        .cta-section {
          padding: 0 0 7rem;
        }

        .cta-box {
           background: radial-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px), linear-gradient(135deg, #0f1c3f, #1e3a8a);
    color: var(--white);
    padding: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    border-radius: 14px;
        }

        .cta-box .label {
          color: var(--white);
          opacity: 0.65;
        }

        .cta-box h2 {
          font-weight: 900;
       
       
         font-size: 60px;
         
          margin-bottom: 1.5rem;
        }

        .cta-box p {
          font-size: 1.1rem;
          max-width: 48ch;
          opacity: 0.88;
          margin-bottom: 2.75rem;
          line-height: 1.7;
        }

        .btn-white {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          background: var(--white);
          color: var(--blue);
          padding: 1.1rem 2.25rem;
          font-weight: 700;
          font-size: 0.82rem;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          text-decoration: none;
        }

        .reveal {
          opacity: 0;
          transform: translateY(35px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }

        .reveal.visible {
          opacity: 1;
          transform: translateY(0);
        }

        @media (max-width: 1024px) {
       

          .pricing-grid,
          .faq-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .timeline-wrap {
            padding-left: 40px;
          }

          .timeline-item {
            grid-template-columns: 1fr;
            gap: 16px;
            padding: 35px 0;
          }

          .timeline-content h3 {
            font-size: 22px;
          }
        }

        @media (max-width: 600px) {
          .pricing-page .container {
            padding-left: 1.25rem;
            padding-right: 1.25rem;
          }

          .pricing-hero {
            padding-top: 5rem;
          }

          .plan-card {
            padding: 2rem;
          }

          .cta-box {
            padding: 5rem 1.5rem;
          }
        }
          section.faq-section .reveal {
    text-align: center;
}
          .section-label {
    background: #edf4ef;
    border: 1px solid #9fb4a2;
    border-radius: 50px;
    color: #183f2f;
    display: inline-flex;
    font-size: 10px;
    letter-spacing: 2px;
    margin-bottom: 30px;
    padding: 10px 18px;
        font-family: "Lexend Deca", sans-serif;
    text-transform: uppercase;
}
    .pricing-models-section {
  position: relative;

  background: #f8faff;
  overflow: hidden;
}

.pricing-bg {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 20% 15%, rgba(21, 101, 255, 0.12), transparent 28%),
    radial-gradient(circle at 85% 75%, rgba(79, 140, 255, 0.14), transparent 30%);
  pointer-events: none;
}

.pricing-container {
  position: relative;
  max-width: 1240px;
  margin: 0 auto;
}

.pricing-head {
  text-align: center;
  margin-bottom: 54px;
}

.pricing-eyebrow {
  display: inline-flex;
  padding: 8px 16px;
  border-radius: 999px;
  background: #eef4ff;
  color: #1565ff;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.pricing-head h2 {
  margin: 18px auto 0;

  font-size: clamp(34px, 4vw, 56px);

  color: #071633;
  font-weight: 800;

}

.pricing-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
}

.pricing-card {
  position: relative;
  padding: 42px;
  min-height: 430px;
  background: rgba(255, 255, 255, 0.88);
  border: 1px solid rgba(15, 23, 42, 0.08);
  border-radius: 28px;
  box-shadow: 0 24px 70px rgba(15, 23, 42, 0.08);
  transition: 0.35s ease;
}

.pricing-card::before {
  content: "";
  position: absolute;
  inset: 0;
  padding: 1px;
  border-radius: inherit;
  background: linear-gradient(135deg, rgba(21,101,255,.55), transparent 35%, rgba(79,140,255,.45));
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  opacity: 0;
  transition: 0.35s ease;
}

.pricing-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 34px 90px rgba(21, 101, 255, 0.16);
}

.pricing-card:hover::before,
.pricing-card.featured::before {
  opacity: 1;
}

.featured {
  transform: translateY(-14px);
  box-shadow: 0 34px 90px rgba(21, 101, 255, 0.18);
}

.popular-badge {
  position: absolute;
  top: -16px;
  left: 50%;
  transform: translateX(-50%);
  padding: 9px 20px;
  border-radius: 999px;
  background: linear-gradient(135deg, #1565ff, #4f8cff);
  color: #fff;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  box-shadow: 0 14px 34px rgba(21, 101, 255, 0.35);
}

.plan-label {
  color: #64748b;
  font-size: 13px;
  font-weight: 800;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.pricing-card h3 {
    margin: 16px 0 10px;
    font-size: 30px;
    line-height: 1;
    color: #1749d5;
    /* letter-spacing: -0.04em; */
    text-transform: capitalize;
    font-weight: bold;
}

.pricing-card ul {
  list-style: none;
  padding: 0;
  margin: 0 0 42px;
}
  span.faq-icon {
    background: #1749d5;
    border-radius: 16px;
    width: 17px;
    color: #fff;
    height: 17px;
    display: flex;
    align-items: center;
    justify-content: center;
}
  span.faq-q {
    font-size: 15px;
    font-weight: bold;
    text-transform: capitalize;
}
    .faq-item p.faq-a {
    padding-left: 20px;
    padding-right: 20px;
}
button.faq-toggle {
    display: flex;
    align-items: center;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    background: none border-box;
    border: navajowhite;
    padding: 16px;
}
.pricing-card li {
  display: flex;
  align-items: center;
      font-family: "Lexend Deca", sans-serif;
  gap: 12px;
  padding: 17px 0;
  border-bottom: 1px solid rgba(15, 23, 42, 0.08);
  color: #26344d;
  font-size: 16px;
}

.pricing-card li::before {
  content: "✓";
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: inline-grid;
  place-items: center;
  flex: 0 0 auto;
  background: #eef4ff;
  color: #1565ff;
  font-size: 13px;
  font-weight: 900;
}

.plan-btn {
  position: absolute;
  left: 42px;
  right: 42px;
  bottom: 42px;
  height: 58px;
  border-radius: 16px;
  background: #071633;
  color: #fff;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  font-size: 15px;
  font-weight: 800;
  transition: 0.3s ease;
}

.featured .plan-btn,
.plan-btn:hover {
  background: linear-gradient(135deg, #1565ff, #4f8cff);
  box-shadow: 0 18px 34px rgba(21, 101, 255, 0.28);
}

.plan-btn span {
  transition: 0.3s ease;
}

.plan-btn:hover span {
  transform: translateX(5px);
}

@media (max-width: 991px) {
  .pricing-grid {
    grid-template-columns: 1fr;
  }

  .featured {
    transform: none;
  }
}

@media (max-width: 575px) {
  .pricing-models-section {
    padding: 70px 16px;
  }

  .pricing-card {
    padding: 30px;
    min-height: 400px;
  }

  .pricing-card h3 {
    font-size: 38px;
  }

  .plan-btn {
    left: 30px;
    right: 30px;
    bottom: 30px;
  }
}
  .pricing-hero h1 .accent {
    color: var(--blue);
    margin-left: 15px;
}
      `}</style>

      <main className="pricing-page">
        <section className="pricing-hero">
          <div className="container reveal">
            <div className="section-label">Operational Excellence</div>
            <h1>
            All-Inclusive 
                <span className="accent">Hiring Models</span> <br />
             With Zero Overhead.
            </h1>
            <p>
              No recruiter fees, no payroll headaches, no surprises. Pick a commitment, meet your vetted coworker, and start in days.
            </p>
      
          </div>
        </section>

<section class="pricing-models-section">
  <div class="pricing-bg"></div>

  <div class="pricing-container">
    <div class="pricing-head">
      <span class="section-label">Flexible Hiring Models</span>
      <h2>Switch Seamlessly Between These Hiring Models</h2>
    </div>

    <div class="pricing-grid">
	
	  <div class="pricing-card ">
     
        <span class="plan-label">Pro Plan</span>
        <h3>Part-time</h3>

        <ul>
          <li>4 hours a day</li>
          <li>5 days a week</li>
          <li>Dedicated resource</li>
        </ul>

        <a href="/contact-us" class="plan-btn">Get Started <span>→</span></a>
      </div>
	  
	  
      <div class="pricing-card featured">
	     <div class="popular-badge">Most Popular</div>
        <span class="plan-label">Business Plan</span>
        <h3>Full-time</h3>

        <ul>
          <li>8 hours a day</li>
          <li>5 days a week</li>
          <li>Dedicated resource</li>
        </ul>

        <a href="/contact-us" class="plan-btn">Get Started <span>→</span></a>
      </div>

   

      <div class="pricing-card">
        <span class="plan-label">Basic Plan</span>
        <h3>Hourly</h3>

        <ul>
          <li>60 hours a month</li>
          <li>Pay-as-you-consume</li>
          <li>Ideal for low volume work</li>
        </ul>

        <a href="/contact-us" class="plan-btn">Get Started <span>→</span></a>
      </div>
    </div>
  </div>
</section>
        <section className="timeline-section reveal">
          <div className="container">
            <h2 className="section-heading ">How Billing Works</h2>

            <div className="timeline-wrap">
              <div className="timeline-line">
                <span></span>
                <span></span>
                <span></span>
              </div>

              {billingSteps.map((step, index) => (
                <div className="timeline-item reveal" key={index}>
                  <div className="timeline-number">{step.number}</div>
                  <div className="timeline-content">
                    <h3>{step.title}</h3>
                    <p>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="faq-section">
          <div className="container">
            <div className="reveal">
              <div className="section-label">Knowledge Base</div>
              <h2 className="section-heading">
                Pricing Questions, Answered
                
              </h2>
            </div>
<div className="faq-grid">
  <div className="faq-column">
    {faqs.filter((_, i) => i % 2 === 0).map((faq, index) => {
      const realIndex = index * 2;

      return (
        <div className={`faq-item ${openFaq === realIndex ? "open" : ""}`} key={realIndex}>
          <button className="faq-toggle" onClick={() => setOpenFaq(openFaq === realIndex ? null : realIndex)}>
            <span className="faq-q">{faq.q}</span>
            <span className="faq-icon">+</span>
          </button>

          <div className="faq-body">
            <p className="faq-a">{faq.a}</p>
          </div>
        </div>
      );
    })}
  </div>

  <div className="faq-column">
    {faqs.filter((_, i) => i % 2 !== 0).map((faq, index) => {
      const realIndex = index * 2 + 1;

      return (
        <div className={`faq-item ${openFaq === realIndex ? "open" : ""}`} key={realIndex}>
          <button className="faq-toggle" onClick={() => setOpenFaq(openFaq === realIndex ? null : realIndex)}>
            <span className="faq-q">{faq.q}</span>
            <span className="faq-icon">+</span>
          </button>

          <div className="faq-body">
            <p className="faq-a">{faq.a}</p>
          </div>
        </div>
      );
    })}
  </div>
</div>
          </div>
        </section>

        <section className="cta-section" id="quote">
          <div className="container">
            <div className="cta-box reveal">
                    <span class="section-label">Next Steps</span>

              <h2>
                Not Sure Which <br />
                Plan Fits?
              </h2>
              <p>
                Tell us about your team and we'll recommend the right coworker mix — free, no commitment.
              </p>
              <a href="/contact-us" className="btn-white">
                Get A Custom Quote <span className="arrow">→</span>
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default PricingPage;