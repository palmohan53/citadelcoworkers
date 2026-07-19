import React, { useEffect } from "react";

const WHYCitadelCoworkers = () => {
    useEffect(() => {
          window.scrollTo(0, 0)
        }, [])
  const features = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="#204ECF" strokeWidth="2"/>
        <path d="M12 7V12L15 15" stroke="#204ECF" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: "Ready in 48 Hours",
    desc: "Most hiring processes take weeks. Ours doesn't. Tell us what you need and within 48 hours, we match you with a professional who is ready to work pre-vetted, skill-tested and aligned with your goals. No delays. No compromises."
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="9" cy="8" r="3" stroke="#204ECF" strokeWidth="2"/>
        <circle cx="17" cy="9" r="2.5" stroke="#204ECF" strokeWidth="2"/>
        <path d="M4 19C4 15.5 6.5 13 10 13C13.5 13 16 15.5 16 19" stroke="#204ECF" strokeWidth="2"/>
      </svg>
    ),
    title: "Talent That Fits, Not Just Fills",
    desc: "We don't send you a list of profiles and leave you to figure it out. Our recruitment process is rigorous and deliberate; every candidate is assessed for skills, communication and cultural fit before they ever reach you. You get someone who integrates, contributes and delivers from day one."
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="4" width="18" height="14" rx="2" stroke="#204ECF" strokeWidth="2"/>
        <path d="M8 20H16" stroke="#204ECF" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: "Strategic Systems, Not Just Resources",
    desc: "Most staffing companies hand you a person and walk away. We go further. Citadel helps you build the workflows, communication structures and management systems that make your virtual team actually work. A resource without a system is just overhead; we make sure yours is neither."
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="#204ECF" strokeWidth="2"/>
        <path d="M3 12H21" stroke="#204ECF" strokeWidth="2"/>
        <path d="M12 3C15 6 15 18 12 21" stroke="#204ECF" strokeWidth="2"/>
        <path d="M12 3C9 6 9 18 12 21" stroke="#204ECF" strokeWidth="2"/>
      </svg>
    ),
    title: "Global Talent, Zero Geographic Limits",
    desc: "Whether you need a software developer, a graphic designer, a customer support specialist or a project coordinator, we source from a global talent pool so you always get the best person for the role, not just the nearest one available."
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="8" r="4" stroke="#204ECF" strokeWidth="2"/>
        <path d="M5 20C5 16 8 13 12 13C16 13 19 16 19 20" stroke="#204ECF" strokeWidth="2"/>
      </svg>
    ),
    title: "One Dedicated Professional, Entirely Yours",
    desc: "Your virtual employee works exclusively for you. They are not split across multiple clients. They show up for your business, your priorities and your deadlines every single day."
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 3L20 8V16L12 21L4 16V8L12 3Z" stroke="#204ECF" strokeWidth="2"/>
        <path d="M12 8V16" stroke="#204ECF" strokeWidth="2"/>
      </svg>
    ),
    title: "Built for Startups and SMEs",
    desc: "We understand the pace and strain of early-stage and growing businesses. Our solutions are built to scale with you, from hiring your first virtual employee to a whole remote staff across several functions."
  }
];
  useEffect(() => {
    const revealEls = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add("visible"), i * 60);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    revealEls.forEach((el) => observer.observe(el));

    const hero = document.querySelector(".hero");
    const blobs = document.querySelectorAll(".blob");

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const rx = (clientX / innerWidth - 0.5) * 24;
      const ry = (clientY / innerHeight - 0.5) * 24;

      blobs.forEach((blob, i) => {
        const factor = (i + 1) * 0.5;
        blob.style.transform = `translate(${rx * factor}px, ${ry * factor}px)`;
      });
    };

    if (hero) hero.addEventListener("mousemove", handleMouseMove);

    document.querySelectorAll(".feat-card").forEach((card, i) => {
      card.style.transitionDelay = `${i * 70}ms`;
    });

    return () => {
      observer.disconnect();
      if (hero) hero.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <style>{`
      .hero-inner {
    padding-bottom: 0;
}
        @
        :root {
        --blue: #204ECF;
    --blue2: #4A74FF;
    --bg: #F8FAFC;
    --dark: #111827;
    --grey: #6B7280;
    --white: #ffffff;
    --glass: rgba(255, 255, 255, 0.72);
    --glass-border: rgba(255, 255, 255, 0.9);
    --r-xl: 28px;
    --r-lg: 20px;
    --r-md: 14px;
    --shadow-sm: 0 2px 12px rgba(17, 24, 39, 0.06);
    --shadow-md: 0 8px 32px rgba(17, 24, 39, 0.10);
    --shadow-lg: 0 20px 60px rgba(32, 78, 207, 0.14);
    --shadow-blue: 0 8px 32px rgba(74, 116, 255, 0.35);
          --primary: #204ECF;
          --secondary: #4E7CFF;
          --light-grey: #F5F7FC;
          --dark: #1F2937;
          --white: #ffffff;
          --glass-bg: rgba(255,255,255,0.08);
          --glass-border: rgba(255,255,255,0.18);
          --glass-bg-light: rgba(255,255,255,0.72);
          --glass-border-light: rgba(255,255,255,0.9);
          --shadow-card: 0 4px 24px rgba(31,41,55,0.08);
          --radius-xl: 28px;
          --radius-lg: 20px;
          --radius-md: 14px;
        }

        html { scroll-behavior: smooth; }

    
        .hero{
  min-height:100vh;padding-top:68px;
  background:linear-gradient(150deg,#0b1630 0%,#0e1e44 45%,#152554 75%,#1a2d5a 100%);
  position:relative;overflow:hidden;
  display:flex;align-items:center;
}
.hero-grid-overlay{
  position:absolute;inset:0;pointer-events:none;
  background-image:
    linear-gradient(rgba(74,116,255,0.055) 1px,transparent 1px),
    linear-gradient(90deg,rgba(74,116,255,0.055) 1px,transparent 1px);
  background-size:64px 64px;
}
.blob{position:absolute;border-radius:50%;filter:blur(90px);opacity:.3;pointer-events:none;animation:blobDrift 10s ease-in-out infinite}
.b1{width:600px;height:600px;background:radial-gradient(#204ECF,#4A74FF);top:-180px;left:-160px;animation-delay:0s}
.b2{width:480px;height:480px;background:radial-gradient(#4A74FF,#6b9dff);bottom:-100px;right:5%;animation-delay:4s}
.b3{width:320px;height:320px;background:radial-gradient(#1e3a8a,#2563eb);top:30%;right:22%;animation-delay:7s}
@keyframes blobDrift{0%,100%{transform:translate(0,0) scale(1)}33%{transform:translate(20px,-24px) scale(1.04)}66%{transform:translate(-16px,14px) scale(.97)}}

.hero-inner{
  position:relative;
  padding:80px 48px;
      text-align: left;
  display:grid;grid-template-columns:1fr 1fr;gap:80px;align-items:center;width:100%;
}
.hero-badge{
    background: #edf4ef;
    border: 1px solid #9fb4a2;
    border-radius: 50px;
    color: #183f2f;
    display: inline-flex;
    font-size: 10px;
    letter-spacing: 2px;
        align-items: center;
    margin-bottom: 30px;
    padding: 10px 18px;
    text-transform: uppercase;
}
.badge-pulse{width:7px;height:7px;border-radius:50%;background:#4A74FF;box-shadow:0 0 8px #4A74FF;animation:pulse 2s ease-in-out infinite}
@keyframes pulse{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.5;transform:scale(1.4)}}
.hero-h1{
      text-align: left;
  font-size:clamp(40px,4.8vw,68px);font-weight:900;
  line-height:1.06;letter-spacing:-2px;color:var(--white);margin-bottom:24px;
}
.hero-h1 em{
  font-style:normal;
  background:linear-gradient(90deg,#4A74FF,#a5bcff);
  -webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;
}
.hero-desc{color:rgba(255,255,255,.58);line-height:1.72;margin-bottom:44px}
.hero-btns{display:flex;align-items:center;gap:14px;flex-wrap:wrap}
.hero-btn-main{
  display:inline-flex;align-items:center;gap:8px;
  padding:16px 34px;border-radius:100px;font-size:16px;font-weight:700;
  color:var(--white);background:linear-gradient(135deg,var(--blue),var(--blue2));
  box-shadow:0 10px 40px rgba(74,116,255,.45),inset 0 1px 0 rgba(255,255,255,.15);
  transition:transform .2s,box-shadow .2s;position:relative;overflow:hidden;
}
.hero-btn-main::before{content:'';position:absolute;inset:0;background:linear-gradient(135deg,rgba(255,255,255,.12),transparent)}
.hero-btn-main:hover{transform:translateY(-2px);box-shadow:0 16px 50px rgba(74,116,255,.55)}
.hero-btn-outline{
  display:inline-flex;align-items:center;gap:8px;
  padding:15px 30px;border-radius:100px;font-size:15px;font-weight:600;
  color:rgba(255,255,255,.85);background:rgba(255,255,255,.08);
  border:1.5px solid rgba(255,255,255,.2);
  backdrop-filter:blur(10px);transition:background .2s,border-color .2s;
}
.hero-btn-outline:hover{background:rgba(255,255,255,.14);border-color:rgba(255,255,255,.35)}
.hero-trust{margin-top:44px;display:flex;align-items:center;gap:14px}
.hero-avatars{display:flex}
.hero-avatars span{
  width:36px;height:36px;border-radius:50%;border:2.5px solid rgba(255,255,255,.2);
  margin-left:-10px;display:flex;align-items:center;justify-content:center;
  font-size:13px;font-weight:700;color:white;flex-shrink:0;
}
.ha1{background:linear-gradient(135deg,#204ECF,#4A74FF);margin-left:0!important}
.ha2{background:linear-gradient(135deg,#059669,#34d399)}
.ha3{background:linear-gradient(135deg,#7c3aed,#a78bfa)}
.ha4{background:linear-gradient(135deg,#d97706,#fbbf24)}
.hero-trust-copy{font-size:13px;color:rgba(255,255,255,.48);line-height:1.5}
.hero-trust-copy strong{color:rgba(255,255,255,.82);display:block}

/* Hero right: image + floating cards */
.hero-visual{position:relative;display:flex;align-items:center;justify-content:center}
.hero-img-wrap{
  border-radius:var(--r-xl);overflow:hidden;position:relative;
  width:100%;max-width:520px;aspect-ratio:4/3;
  box-shadow:0 32px 80px rgba(0,0,0,.4);
}
.hero-img-wrap img{width:100%;height:100%;object-fit:cover}
.hero-img-wrap::after{
  content:'';position:absolute;inset:0;
  background:linear-gradient(to top right,rgba(10,22,56,.3),transparent);
}
.float-card{
  position:absolute;background:rgba(255,255,255,.96);
    z-index: 99;
  border-radius:var(--r-lg);padding:14px 18px;
  box-shadow:0 16px 48px rgba(0,0,0,.18);
  backdrop-filter:blur(20px);border:1px solid rgba(255,255,255,.9);
  animation:floatY 4s ease-in-out infinite;
}
.fc1{top:-22px;left:-30px;animation-delay:0s}
.fc2{bottom:-18px;right:-28px;animation-delay:2s}
.fc3{top:50%;right:-44px;transform:translateY(-50%);animation-delay:1s}
@keyframes floatY{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}
.fc3{animation:floatY3 4s ease-in-out infinite}
@keyframes floatY3{0%,100%{transform:translateY(-50%)}50%{transform:translateY(calc(-50% - 10px))}}
.fc3 {
    top: 50%;
    right: -44px;
    transform: translateY(-50%);
    animation-delay: 1s;
}
    .hero-btn-main {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 16px 34px;
    border-radius: 100px;
    font-size: 16px;
    font-weight: 700;
    color: var(--white);
    background: linear-gradient(135deg, var(--blue), var(--blue2));
    box-shadow: 0 10px 40px rgba(74, 116, 255, .45), inset 0 1px 0 rgba(255, 255, 255, .15);
    transition: transform .2s, box-shadow .2s;
    position: relative;
    overflow: hidden;
}
.fc-icon{
  width:38px;height:38px;border-radius:11px;
  display:flex;align-items:center;justify-content:center;margin-bottom:8px;
}
.fc-num{font-size:22px;font-weight:800;color:var(--dark)}
.fc-label{font-size:11px;color:var(--grey);font-weight:500;white-space:nowrap}
.fc-row{display:flex;align-items:center;gap:10px}
.fc-pill{
  display:inline-flex;align-items:center;gap:5px;
  background:rgba(5,150,105,.1);border:1px solid rgba(5,150,105,.25);
  border-radius:100px;padding:4px 10px;font-size:11px;color:#059669;font-weight:600;
}
  .float-card {
    position: absolute;
    background: rgba(255, 255, 255, .96);
    border-radius: 10px;
    padding: 14px 18px;
    box-shadow: 0 16px 48px rgba(0, 0, 0, .18);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, .9);
    animation: floatY 4s ease-in-out infinite;
}
.fc-dot{width:6px;height:6px;border-radius:50%;background:#059669;box-shadow:0 0 6px #059669}
.hero-h1 {
  
    font-size: clamp(40px, 4.8vw, 68px);
    font-weight: 900;
    line-height: 1.06;
    letter-spacing: -2px;
    color: #fff;
    margin-bottom: 24px;
}
        .h-card {
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          backdrop-filter: blur(20px);
          border-radius: var(--radius-xl);
          padding: 24px;
        }

        .h-card-main { padding: 32px; }

        .h-card-float {
          position: absolute;
          width: 220px;
          padding: 18px 20px;
        }

        .h-card-float-1 {
          top: -28px;
          right: -32px;
          animation: floatCard1 4s ease-in-out infinite;
        }

        .h-card-float-2 {
          bottom: -28px;
          left: -32px;
          animation: floatCard2 5s ease-in-out infinite;
        }

        @keyframes floatCard1 {
          0%,100% { transform:translateY(0) rotate(2deg); }
          50% { transform:translateY(-10px) rotate(2deg); }
        }

        @keyframes floatCard2 {
          0%,100% { transform:translateY(0) rotate(-2deg); }
          50% { transform:translateY(10px) rotate(-2deg); }
        }

        .h-card-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 20px;
        }

        .h-avatar {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: 700;
          background: linear-gradient(135deg, #204ECF, #4E7CFF);
        }

        .h-card-name { font-size: 14px; font-weight: 600; color: white; }
        .h-card-role { font-size: 12px; color: rgba(255,255,255,.45); margin-top: 2px; }

        .h-stat-row {
          display: flex;
          gap: 16px;
          margin-top: 16px;
        }

        .h-stat {
          flex: 1;
          background: rgba(255,255,255,0.06);
          border-radius: 12px;
          padding: 12px;
          text-align: center;
        }

        .h-stat-num {
          font-family: 'Sora', sans-serif;
          font-size: 22px;
          font-weight: 700;
          color: #7B9FFF;
        }

        .h-stat-label {
          font-size: 10px;
          color: rgba(255,255,255,0.4);
          text-transform: uppercase;
        }

        .h-team-row {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .h-pill {
          display: inline-flex;
          background: rgba(16,185,129,0.18);
          border: 1px solid rgba(16,185,129,0.3);
          border-radius: 100px;
          padding: 4px 10px;
          font-size: 11px;
          color: #34d399;
          margin-top: 5px;
        }

        .features, .final-cta {
           background: #F5F7FC;
        
        }

        .section-center { text-align: center; }

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
    text-transform: uppercase;
        }

        .section-title {
            margin-bottom: 48px;
          font-size: 35px;
          font-weight: 800;
          color: var(--dark);
          letter-spacing: -1px;
          line-height: 1.15;
          margin-bottom: 16px;
        }

        .section-sub {
      
          color: #6B7280;

          line-height: 1.7;
          margin: 0 auto 64px;
        }

        .features-grid {
         
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .feat-card {
          background: rgba(255,255,255,0.72);
          border: 1px solid rgba(255,255,255,0.9);
          backdrop-filter: blur(20px);
          border-radius: 28px;
          padding: 36px 32px;
          box-shadow: var(--shadow-card);
          transition: .28s ease;
        }

        .feat-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 60px rgba(32,78,207,0.14);
        }

        .feat-icon {
          width: 52px;
          height: 52px;
          background: linear-gradient(135deg, rgba(32,78,207,0.1), rgba(78,124,255,0.15));
          border: 1px solid rgba(78,124,255,0.2);
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
          font-size: 24px;
        }

        .feat-title {
       
          font-size: 17px;
          font-weight: 700;
          margin-bottom: 10px;
        }

        .feat-desc {
          font-size: 14px;
          color: #6B7280;
          line-height: 1.7;
        }

        .benefits {
          background: white;
          padding: 60px 40px;
        }

        .benefits-inner {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }

        .benefits-img-wrap {
          border-radius: 28px;
          overflow: hidden;
          background: linear-gradient(135deg, #0a1628, #1a2d5a);
          aspect-ratio: 4/5;
          max-height: 540px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .benefits-list { list-style: none; }

        .benefits-list li {
          display: flex;
          gap: 16px;
          padding: 18px 0;
          border-bottom: 1px solid #F3F4F6;
        }

      .check-icon {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    flex-shrink: 0;
    background: #2252d7;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 12px rgba(74, 116, 255, .3);
    margin-top: 1px;
}

        .benefit-text strong {
          font-size: 15px;
          display: block;
          margin-bottom: 3px;
        }

        .benefit-text span {
          font-size: 13px;
          color: #9CA3AF;
          line-height: 1.5;
        }

        .promise {
          margin: 0 40px 80px;
          border-radius: 32px;
          background: linear-gradient(135deg, #0a1628 0%, #111d3c 50%, #1a2d5a 100%);
          padding: 100px 60px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .promise-title {
      
          font-size: clamp(34px, 4vw, 35px);
          font-weight: 800;
          color: white;
          margin-bottom: 28px;
        }

        .promise-body {
       
          color: rgba(255,255,255,0.65);
          line-height: 1.75;
       
          margin: auto;
        }

        .promise-eyebrow {
          display: inline-flex;
          background: rgba(78,124,255,0.18);
          border: 1px solid rgba(78,124,255,0.3);
          border-radius: 100px;
          padding: 7px 18px;
          color: #a5bcff;
          font-size: 12px;
          font-weight: 600;
          margin-bottom: 28px;
        }

     .promise-divider {
    width: 64px;
    height: 3px;
    background: #00cc83;
    border-radius: 4px;
    margin: 11px auto;
}
.hero-img-wrap img {
    border-radius: 21px;
}
        .final-cta {
          text-align: center;
        }

        .final-cta-title {
        
          font-size: clamp(36px, 4.5vw, 35px);
          font-weight: 800;
          color: var(--dark);
          margin-bottom: 18px;
        }

        .final-cta-sub {
    
          margin-bottom: 44px;
        }

        .final-note {
          margin-top: 20px;
          font-size: 13px;
          color: #9CA3AF;
        }

        .reveal {
          opacity: 0;
          transform: translateY(32px);
          transition: opacity .65s ease, transform .65s ease;
        }

        .reveal.visible {
          opacity: 1;
          transform: translateY(0);
        }

        @media (max-width: 1024px) {
          .hero-inner,
          .benefits-inner {
            grid-template-columns: 1fr;
          }

          .hero-visual,
          .benefits-visual {
            display: none;
          }

          .features-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
                @media (max-width: 768px) {
section.hero {
    min-height: auto;
    padding-top: 0;
    padding-bottom: 0;
}
      }
        @media (max-width: 640px) {
          .hero-inner,
          .features,
          .benefits,
          .final-cta {
            padding-left: 20px;
            padding-right: 20px;
          }

          .features-grid {
            grid-template-columns: 1fr;
          }

          .promise {
            margin: 0 20px 60px;
            padding: 60px 28px;
          }

          .feat-card {
            padding: 28px 24px;
          }
        }
a.final-cta-btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 16px 34px;
    border-radius: 100px;
    font-size: 16px;
    font-weight: 700;
    color: #fff;
    background: #204ecf;
    box-shadow: 0 10px 40px rgba(74, 116, 255, .45), inset 0 1px 0 rgba(255, 255, 255, .15);
    transition: transform .2s, box-shadow .2s;
    position: relative;
    overflow: hidden;
}
        .hero-btn-main {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 16px 34px;
    border-radius: 100px;
    font-size: 16px;
    font-weight: 700;
    color: #fff;
    background: #204ecf;
    box-shadow: 0 10px 40px rgba(74, 116, 255, .45), inset 0 1px 0 rgba(255, 255, 255, .15);
    transition: transform .2s, box-shadow .2s;
    position: relative;
    overflow: hidden;
}
    h2 {
    font-size: clamp(32px, 3.5vw, 35px);
    font-weight: 800;
    color: var(--dark);
    letter-spacing: -1px;
    line-height: 1.15;
    margin-bottom: 16px;
}
    ul.benefits-list {
    padding-left: 0;
}
    .section-build {
    display: flex;
    align-items: center;
    gap:20px;
}
      `}</style>
<section className="hero">
  <div className="hero-grid-overlay"></div>
  <div className="blob b1"></div>
  <div className="blob b2"></div>
  <div className="blob b3"></div>
  <svg style={{position: 'absolute', top: '12%', right: '4%', width: '180px', height: '180px', pointerEvents: 'none', opacity: '.5'}} viewBox="0 0 180 180">
    <defs><pattern id="dp" x="0" y="0" width="18" height="18" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1.5" fill="rgba(74,116,255,0.55)"/></pattern></defs>
    <rect width="180" height="180" fill="url(#dp)"/>
  </svg>
<div className="container">


  <div className="hero-inner">
    
    <div className="hero-left reveal">
      <div className="hero-badge"><span className="badge-pulse"></span>⚡ Citadel Coworkers</div>
      <h1 className="hero-h1">Why Citadel <em>Coworkers</em>
</h1>
      <p className="hero-desc">Your growth deserves more than just a hire. It deserves a system.</p>
      <div className="hero-btns">
        <a href="/contact-us" className="hero-btn-main">Get Started <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M8.5 3.5L13 8l-4.5 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg></a>
   
      </div>
      <div className="hero-trust">
        <div className="hero-avatars">
          <span className="ha1">A</span><span className="ha2">M</span><span className="ha3">J</span><span className="ha4">S</span>
        </div>
        <div className="hero-trust-copy"><strong>500+ teams onboarded</strong>Across 40+ countries worldwide</div>
      </div>
    </div>

    <div className="hero-visual reveal">
      <div className="hero-img-wrap">
        <img src="./images/why-image.webp" alt="Remote team collaborating" loading="eager"/>
        <div style={{position: 'absolute', inset: '0', background: 'linear-gradient(to top right,rgba(10,22,56,.35),transparent)', zIndex: '1'}}></div>
      </div>

   
      <div className="float-card fc1">
        <div className="fc-row">
          <div className="fc-icon" style={{background: 'linear-gradient(135deg,rgba(32,78,207,.12),rgba(74,116,255,.18))', border: '1px solid rgba(74,116,255,.2)'}}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="8" stroke="#4A74FF" strokeWidth="1.6"/><path d="M10 6v4l3 3" stroke="#4A74FF" strokeWidth="1.6" strokeLinecap="round"/></svg>
          </div>
          <div>
            <div className="fc-num">48h</div>
            <div className="fc-label">Average Hire Time</div>
          </div>
        </div>
      </div>

  
      <div className="float-card fc2">
        <div className="fc-row">
          <div className="fc-icon" style={{background: 'linear-gradient(135deg,rgba(5,150,105,.1),rgba(52,211,153,.15))', border: '1px solid rgba(52,211,153,.25)'}}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="8" stroke="#10b981" strokeWidth="1.6"/><path d="M2 10h16M10 2a12 12 0 010 16M10 2a12 12 0 000 16" stroke="#10b981" strokeWidth="1.4"/></svg>
          </div>
          <div>
            <div className="fc-num" style={{color: '#059669'}}>40+</div>
            <div className="fc-label">Countries Available</div>
          </div>
        </div>
        <div style={{marginTop: '8px'}}><span className="fc-pill"><span className="fc-dot"></span>Live Matches</span></div>
      </div>

   
    
    </div>
  </div>
  </div>
</section>
    <section>
      <div className="container reveal">
      <div className="section-build">
        <div className="image-left-sour reveal-left">
           <img src="./images/team (10).webp" alt="Remote team collaborating" loading="eager"/>
        </div>
<div className="build-text">
<h2>Build Your Remote Team Without the Overhead</h2>
 <p>
        Running a startup or SME means every decision counts. You need skilled people, fast, without the burden of lengthy hiring cycles, office infrastructure or HR complexity. Citadel Coworkers exists precisely for that.
      </p>
          <p>We don't just connect you with talent. We help you build a remote workforce that fits into your business 
        like it was always there.</p>
</div>
      </div>


  
      </div>
      
     
    </section>
      <section className="features">
        <div className="container">
        <div className="section-center reveal">
      
          <h2 className="section-title">
            What Makes Us Different

           
          </h2>
     <p>Citadel gives you the talent, tools, and systems to scale — without the traditional hiring friction.</p>
        </div>
<div className="features-grid">
  {features.map((item, index) => (
    <div className="feat-card reveal" key={index}>
      <div className="feat-icon">
        {item.icon}
      </div>

      <div className="feat-title">
        {item.title}
      </div>

      <p className="feat-desc">
        {item.desc}
      </p>
    </div>
  ))}
</div>
</div>
      </section>

      <section className="benefits">
        <div className="benefits-inner">
          <div className="benefits-visual reveal">
            <div className="benefits-img-wrap">
              <img src="./images/whypage.png">
              </img>
            </div>
          </div>

          <div className="reveal">
           
            <h2 className="section-title">
              What You Get
              
              With Citadel
            </h2>
<p>More than a hiring platform — a complete infrastructure for building and managing your remote team</p>
            <ul className="benefits-list">
              {[
                [ "Complete help for hiring and onboarding. We take the procedure out of your hands"],
                ["Professionals in software development, design, customer support and more"],
                ["Integrates seamlessly with your existing team, compliance & management assistance"],
                ["A dedicated contact for continuous assistance and team management"],
           
              ].map((item, index) => (
                <li key={index}>
                  <div className="check-icon"><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2.5 7l3 3 6-6" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path></svg></div>
                  <div className="benefit-text">
                    <strong>{item[0]}</strong>
                    <span>{item[1]}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <div className="promise reveal">

        <h2 className="promise-title">The Citadel Promise</h2>
        <div className="promise-divider"></div>
        <p className="promise-body">
         We believe that the right person, supported by the right systems, can transform a business. That's not a tagline, it's the standard we hold ourselves to with every client we work with.
<br></br>
When you choose Citadel Coworkers, you're not outsourcing a task. You're adding a professional to your team who is invested in your success, backed by an organization that makes sure everything works.

        </p>
      </div>

      <section className="final-cta" id="contact">
        <div className="final-cta-inner reveal">
          <div className="section-label">Let's Get Started</div>
          <h2 className="final-cta-title">
            Ready To Build
      
            Your Team?
          </h2>
          <p className="final-cta-sub">Find your perfect match in 48 hours.</p>
          <a href="#contact" className="final-cta-btn">Get Started →</a>
          <p className="final-note">
            No long-term contracts · Cancel anytime · Dedicated support from day one
          </p>
        </div>
      </section>
    </>
  );
};

export default WHYCitadelCoworkers;