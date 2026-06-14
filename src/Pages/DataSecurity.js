import React,{useEffect,useState} from "react";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const stats = [
  { value: "0", label: "data breaches since inception" },
  { value: "2,500+", label: "Clients served securely" },
  { value: "ISO 27001", label: ":2013 certified" },
  { value: "24×7", label: "Active IT monitoring" },
];

const principles = [
  {
  
    title: "Confidentiality",
    desc: "Client data is strictly access-controlled. Only authorised personnel can view sensitive information, enforced through role-based permissions and audit trails. ",
  },
  {
   
    title: "Integrity",
    desc: "Data remains accurate and unaltered throughout its lifecycle. Tamper detection and change-logging ensure nothing is modified without an authorised record. ",
  },
  {

    title: "Availability",
    desc: "Systems and data are accessible when you need them. Redundant infrastructure and 24x7 monitoring prevent disruption and minimise downtime.",
  },
];

const corePractices = [
  { label: "Encryption", detail: "Data at rest + in transit",  icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6 text-primary mx-auto -3"
      >
        <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ), },
  { label: "Role-based access", detail: "Least-privilege controls" ,  icon: (
     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shield-check w-6 h-6 text-primary mx-auto "><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
    ), },
  { label: "Secure VPN", detail: "Encrypted remote access" ,  icon: (
     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-wifi w-6 h-6 text-primary mx-auto "><path d="M12 20h.01"></path><path d="M2 8.82a15 15 0 0 1 20 0"></path><path d="M5 12.859a10 10 0 0 1 14 0"></path><path d="M8.5 16.429a5 5 0 0 1 7 0"></path></svg>
    ), },
  { label: "Data masking", detail: "Sensitive field obfuscation" ,  icon: (
   <svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
  className="lucide lucide-eye-off w-6 h-6 text-primary mx-auto -3"
>
  <path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49" />
  
  <path d="M14.084 14.158a3 3 0 0 1-4.242-4.242" />
  
  <path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143" />
  
  <path d="m2 2 20 20" />
</svg>
    ), },
];

const pillars = [
  {
    num: "01",
    title: "Real-Time Screen Monitoring",
    desc: "Access the live feed of your virtual employee’s screen at any time. You gain full visibility, zero friction and stay connected from anywhere in the world. ",
  },
  {
    num: "02",
    title: "Restricted Website Access",
    desc: "Specify any third-party sites you want blocked and we handle the reset. Your data stays within boundaries you define at all times. ",
  },
  {
    num: "03",
    title: "Backed By Indian IT Law",
    desc: "All the operations are protected under the Indian Information Technology Act. This provides your business with a robust legal safety net backed by national legislation. ",
  },
  {
    num: "04",
    title: "Zero External Storage",
    desc: "External storage devices are strictly prohibited. Our IT and legal teams conduct round-the-clock checks to ensure this policy is always enforced. ",
  },
];

const accreditations = [
  {
    tag: "ISO 27001:2013",
    title: "Information Security Standard",
    desc: "Our certification governs every aspect of our security posture from implementation to continual improvement, giving you internationally recognised assurance.",
  },
  {
    tag: "CERT-In",
    title: "Incident Response Ready",
    desc: "In the unlikely event of any security incident, our response protocol follows the latest CERT-In guidelines — swift resolution, minimal impact, full accountability.",
  },
  {
    tag: "HIPAA + SOC 2",
    title: "Broader Compliance Alignment",
    desc: "HIPAA-aware practices for healthcare clients and SOC 2-inspired internal controls for operational transparency across all engagements.",
  },
];

const eeat = [
  {
    label: "Experience",
    sub: "Proven track record",
    desc: "Zero data breaches across 2,500+ client engagements since inception. Our security posture is validated through real-world outcomes, not hypotheticals. ",

    color: "#1a2e1a",
    bg: "#e8f5e8",
    accent: "#2d6a2d",
  },
  {
    label: "Expertise",
    sub: "Certified professionals",
    desc: "50+ IT professionals certified across Cisco, Linux and Microsoft. Policies authored and overseen by qualified legal advocates and compliance experts. ",
    color: "#1a1a2e",
    bg: "#e8e8f5",
    accent: "#2d2d8a",
  },
  {
    label: "Authoritativeness",
    sub: "Recognised standards",
    desc: "ISO 27001:2013 certified. Incident protocols aligned to CERT-in. Operations governed by the Indian Information Technology Act. ",
    color: "#2e1a1a",
    bg: "#f5e8e8",
    accent: "#8a2d2d",
  },
  {
    label: "Trustworthiness",
    sub: "Legally accountable",
    desc: "Every employee signs an NDA. Client data is backed by enforceable legal protections including criminal liability and full compensation rights. ",
    color: "#1a2a2e",
    bg: "#e8f2f5",
    accent: "#1a6a7a",
  },
];

const physicalDigital = [
  { icon:(<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users w-5 h-5 text-primary mt-1 flex-shrink-0"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>), title: "Certified IT Team", desc: " 50+ resources certified across Cisco, Linux and Microsoft platforms. " },
  { icon: (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-monitor-smartphone w-5 h-5 text-primary mt-1 flex-shrink-0"><path d="M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8"></path><path d="M10 19v-3.96 3.15"></path><path d="M7 19h5"></path><rect width="6" height="10" x="16" y="12" rx="2"></rect></svg>), title: "Remote System Access", desc: "You can remotely access your employee’s system at any time on your terms. " },
  { icon: (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shield-alert w-5 h-5 text-primary mt-1 flex-shrink-0"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="M12 8v4"></path><path d="M12 16h.01"></path></svg>), title: "Anti-Virus & Anti-Spam", desc: "All machines run updated endpoint protection software at all times. " },
  { icon: (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-flame w-5 h-5 text-primary mt-1 flex-shrink-0"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path></svg>), title: "SonicWALL Firewall", desc: "Enterprise-grade network security deployed across every workstation. " },
];

const culture = [
  { num: "01", title: "NDA Signed Employees", desc: "Every team member, from operations to IT, signs a comprehensive Non-Disclosure Agreement before handling any client data. Legal accountability begins from day one and not after an incident. " },
  { num: "02", title: "Employee Sensitization", desc: "Mandatory security training regular refresher courses and unannounced audits ensure every team member treats your data with the care it deserves every single day. " },
  { num: "03", title: "Expert Legal Oversight", desc: "Our legal compliance is guided by experts and advocates who keep our policies sharp, current and enforceable. " },
  { num: "04", title: "24×7 IT Support Desk", desc: "Our in-house IT team monitors network and systems administration around the clock. Any anomaly is caught and resolved before it can become a problem." },
];

const legalPoints = [
  {number:"1", title: "Criminal Imprisonment", desc: "Sentences ranging from 3 years to life imprisonment for those found guilty of data theft or unauthorized access. " },
  {number:"2", title: "Substantial Financial Penalties", desc: "Hefty fines are levied against any party responsible for a breach of data security obligations. " },
  {number:"3", title: "Assured Client Compensation", desc: "Any damages arising from a data incident are fully compensable you are never left without legal resources. " },
];

const faqs = [
  {
    q: "How do you protect sensitive client data?",
    a: "We use a multi-layered security model that includes end-to-end encryption for data at rest and in transit. We ensure there is role-based access control, SonicWALL firewall protection, real-time screen monitoring & a zero external storage policy. All the systems are monitored 24/7 by our certified IT team and every employee signs an NDA before handling any client information.",
  },
  {
    q: "Do your employees sign NDAs?",
    a: "Yes, every Citadel Coworkers employee regardless of their role or seniority, signs a comprehensive NDA before being granted access to any client data. This is a non-negotiable condition of employment and is legally enforceable under Indian law. ",},
  {
    q: "Is my data stored securely?",
    a: "Absolutely, data is encrypted both at rest and during transmission. We operate a zero external storage policy- USB drives and external devices are strictly prohibited across all workstations. All storage is internal, access-controlled and subject to round-the-clock monitoring by our IT and legal teams. ",
  },
  {
    q: "What happens in case of a breach?",
    a: "In the unlikely event of a security incident, we have had zero breaches since inception and our response protocol follows the latest CERT-in guidelines. This ensures a swift containment, full accountability and minimal impact. Clients are notified promptly and any damages are fully compensable under the Indian Information Technology Act. ",
  },
  {
    q: "What certifications do you hold?",
    a: "We are ISO 27001:2013 certified, the internationally recognized standard for information security management. Our incident response protocols follow CERT-in guidelines and our internal controls are built to align with SOC 2-inspired frameworks for clients in regulated industries. ",
  },
  {
    q: "Can I monitor my remote employee's activity?",
    a: "Yes, you have full visibility through our real-time screen monitoring feature, access the live feed or your virtual employee’s screen at any time from anywhere in the world. You can also remotely access their system on demand and specify which third-party websites to block, giving you complete control over their digital environment. ",
  },
];

const styles = `




  .cs-root {
  
    color: #0f1117;
    background: #f8f7f3;
    min-height: 100vh;
  }
p.cs-letter-body b {
    margin-bottom: 14px !important;
    display: inline-block;
    font-size: 19px;
    text-transform: capitalize;
    color: #1749d5;
}
    section.cs-cta-section:before {
    content: "";
    position: absolute;
    inset: 0;
    background: url(https://virtualassistant24x7.com/wp-content/uploads/2026/04/30d8e6f35_generated_0493f725-1.png) center / cover no-repeat;
    opacity: 0.1;
    z-index: 1;
}
  /* HERO */
  .cs-hero {
background: #d2d6e2;
    padding: 100px 48px 80px;
    position: relative;
    overflow: hidden;
    height: 100vh;
    display: flex;
    align-items: center;
  }
  .cs-hero::before {
    content: '';
    position: absolute;
    top: -120px; right: -120px;
    width: 480px; height: 480px;
    border-radius: 50%;
    background: rgba(23,73,213,0.07);
    pointer-events: none;
  }
  .cs-hero-eyebrow {
       background: #edf4ef;
    border: 1px solid #9fb4a2;
    border-radius: 50px;
    color: #183f2f;
    display: inline-flex;
    font-size: 12px;
    letter-spacing: 2px;
    margin-bottom: 30px;
    padding: 10px 18px;
    text-transform: uppercase;
  }
  .cs-hero-title {

    font-size: clamp(42px, 6vw, 76px);
    font-weight: 900;
    color: #000;
    line-height: 1.05;
    max-width: 720px;
    margin-bottom: 32px;
  }
  .cs-hero-title em {
    font-style: italic;
    color: #1749d5;
  }
  .cs-hero-sub {
   
    margin-bottom: 60px;
  }
  .cs-stats-row {
       display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1px;
    background: #fff;
    border: 1px solid rgb(23 73 213 / 35%);
    border-radius: 12px;
    overflow: hidden;
    max-width: 100%;
  }
  .cs-stat {
       background: rgba(245, 240, 232, 0.04);
    padding: 28px 24px;
    transition: background 0.2s;
    border: 1px solid #efefef;
    text-align: center;
  }
  .cs-stat:hover { background: rgba(23,73,213,0.08); }
  .cs-stat-value {
  
    font-size: 32px;
    font-weight: 700;
    color: #1749d5;
    line-height: 1;
    margin-bottom: 8px;
  }
  .cs-stat-label {
    font-size: 15px;
    color: #000;
    font-weight: 400;
    line-height: 1.4;
        text-transform: capitalize;
  }

  /* SECTION SHARED */

  .cs-section-alt { background: #fff; }
  .cs-section-dark { background:radial-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px), linear-gradient(135deg, #0f1c3f, #1e3a8a) }
  .cs-eyebrow {
    background: #edf4ef;
    border: 1px solid #9fb4a2;
    border-radius: 50px;
    color: #183f2f;
    display: inline-flex;
    font-size: 12px;
    letter-spacing: 2px;
    margin-bottom: 30px;
    padding: 10px 18px;
    text-transform: uppercase;
  }
    .cs-eyebrow-title {
    color: #183f2f;
    display: inline-flex;
    font-size: 18px;
    letter-spacing: 2px;
    margin-bottom: 30px;
    margin-top: 10px;
    text-transform: uppercase;
}
  .cs-eyebrow-light { color: rgba(23,73,213,0.75); }
  .cs-section-title {
  
    font-size: 32px;
    font-weight: 700;
    color: #0f1117;
    line-height: 1.15;
    margin-bottom: 16px;
  }
  .cs-section-title-light { color: #f5f0e8; }
  .cs-section-subtitle {
  
    color: #000;
  
    line-height: 1.65;
   
  }
    .cs-practice-icon {
    align-items: center;
    background: #c5e2dd;
    border-radius: 10px;
    display: flex;
    height: 50px;
    justify-content: center;
    padding: 10px;
    width: 50px;
    margin-bottom: 20px;
    color: #1749d5;
}
  .cs-section-subtitle-light { color: rgba(245,240,232,0.55); }

  /* PRINCIPLES */
  .cs-principles-grid {

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
      border-radius: 10px;
    border-radius: 16px;
    overflow: hidden;
    margin-bottom: 56px;
  }
  .cs-principle {
    background: #f8f7f3;
      border-radius: 20px;
    padding: 40px 32px;
    transition: background 0.2s;
  }
  .cs-principle:hover { background: #1d4ed626; }
  .cs-principle-icon { font-size: 28px; margin-bottom: 20px; }
  .cs-principle-title {

    font-size: 18px;
    font-weight: 700;
    color: #0f1117;
    margin-bottom: 12px;
  }
  .cs-principle-desc { font-size: 14px; color: #5a5a5a; line-height: 1.7; }

  /* CORE PRACTICES */
  .cs-practices-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 12px;
  }
  .cs-practice {
      background: #f8f7f3;
    border-radius: 12px;
    padding: 24px 20px;
    border: 1px solid rgba(23, 73, 213, 0.15);
  }
  .cs-practice-label {
    font-size: 15px;
    font-weight: 600;
    color: #1749d5;
    margin-bottom: 8px;
  }
  .cs-practice-detail { font-size: 13px; color: rgba(245,240,232,0.45); }

  /* PILLARS */
  .cs-pillars-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2px;
    background: #e5e3dc;
    border: 2px solid #e5e3dc;
    border-radius: 16px;
    overflow: hidden;
  }
  .cs-pillar {
    background: #fff;
    padding: 44px 40px;
    transition: background 0.2s;
  }
  .cs-pillar:hover { background: #f8f7f3; }
  .cs-pillar-num {

    font-size: 48px;
    font-weight: 900;
    color: #e5e3dc;
    line-height: 1;
    margin-bottom: 20px;
  }
  .cs-pillar-title {
    font-size: 18px;
    font-weight: 600;
    color: #0f1117;
    margin-bottom: 12px;
  }
  .cs-pillar-desc { font-size: 14px; color: #5a5a5a; line-height: 1.7; }

  /* ACCREDITATIONS */
  .cs-accred-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }
  .cs-accred {
    border: 1px solid rgba(245,240,232,0.1);
    border-radius: 14px;
    padding: 36px 28px;
    transition: border-color 0.2s, background 0.2s;
  }
  .cs-accred:hover {
    border-color: rgba(23,73,213,0.3);
    background: rgba(23,73,213,0.04);
  }
  .cs-accred-tag {
      display: inline-block;
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    background: rgb(23 73 213 / 42%);
    color: #fff;
    padding: 5px 12px;
    border-radius: 100px;
    margin-bottom: 20px;
  }
  .cs-accred-title {
  
    font-size: 19px;
    font-weight: 700;
    color: #f5f0e8;
    margin-bottom: 12px;
  }
  .cs-accred-desc {  color: #fff; line-height: 1.7; }

  /* EEAT */
  .cs-eeat-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
  }
  .cs-eeat-card {
    border-radius: 14px;
    padding: 32px 24px;
  }
  .cs-eeat-label {
font-size: 15px;
    font-weight: 700;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    margin-bottom: 6px;
    margin-bottom: 14px;
  }
  .cs-eeat-sub {
   
      font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    margin-bottom: 6px;
  }
  .cs-eeat-desc { font-size: 13px; line-height: 1.65; }

  /* PHYSICAL DIGITAL */
  .cs-phys-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2px;
    background: #1749d54d;
    border: 2px solid #1749d54d;
    border-radius: 16px;
    overflow: hidden;
    margin-top:50px;
  }
    .cs-phys-icon {
    align-items: center;
    background: #c5e2dd;
    border-radius: 10px;
    display: flex;
    height: 50px;
    justify-content: center;
    padding: 10px;
    width: 50px;
    margin-bottom: 20px;
    color: #1749d5;
}
  .cs-phys-item {
    background: #fff;
    padding: 36px 28px;
    transition: background 0.2s;
  }
  .cs-phys-item:hover { background: #f8f7f3; }
  .cs-phys-icon { font-size: 32px; margin-bottom: 16px; }
  .cs-phys-title { font-size: 15px; font-weight: 600; color: #0f1117; margin-bottom: 10px; }
  .cs-phys-desc { font-size: 13px; color: #6b6b6b; line-height: 1.6; }

  /* CULTURE */
  .cs-culture-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }
  .cs-culture-item {
    display: flex;
    gap: 24px;
    padding: 32px;
    border-radius: 14px;
    border: 1px solid #e5e3dc;
    background: #fff;
    transition: border-color 0.2s;
  }
  .cs-culture-item:hover { border-color: #c5b88a; }
  .cs-culture-num {
   

    font-size: 36px;
    font-weight: 900;
    color: #e5e3dc;
    line-height: 1;
    flex-shrink: 0;
    width: 48px;
  }
  .cs-culture-title { font-size: 16px; font-weight: 600; color: #0f1117; margin-bottom: 10px; }
  .cs-culture-desc { font-size: 13.5px; color: #5a5a5a; line-height: 1.65; }

  /* LEGAL */
  .cs-legal-grid {
    display: grid;
        margin-top: 40px;
    grid-template-columns: repeat(1, 1fr);
    gap: 12px;
       position: relative;
    border-radius: 16px;
  ;
  }
  .cs-legal-item:nth-child(even) {
    margin-left: 40px;
}
  .cs-legal-item {
      background: #ffffff;
    padding: 30px;
    border-radius: 25px;
        margin-bottom: 20px;
    position: relative;
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.05);
    transition: 0.4s ease;
  }
  .cs-legal-item:hover { background: #efefe; }
  .cs-legal-title {
  
    font-size: 20px;
    font-weight: 700;
    color: #1749d5;
    margin-bottom: 14px;
  }
  .cs-legal-desc { font-size: 14px; color: #000; line-height: 1.7; }

  /* FAQ */

  .cs-faq-item {
       border: 1px solid #efefef;
    border-radius: 12px;
    margin-bottom: 20px;
  }
    .cs-faq-a {
    display: none;
}
  .cs-faq-q {
    width: 100%;
    background: none;
    border: none;
    cursor: pointer;
    padding: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: left;
    gap: 16px;
  }
  .cs-faq-q-text { font-size: 16px; font-weight: 500; color: #0f1117; }
  .cs-faq-icon {
    font-size: 22px;
    color: #1749d5;
    flex-shrink: 0;
    font-weight: 300;
    line-height: 1;
    transition: transform 0.25s;
  }
  .cs-faq-icon.open { transform: rotate(45deg); }
  .cs-faq-a {
   
    color: #5a5a5a;
    line-height: 1.75;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.35s ease, padding 0.25s;
  }
  .cs-faq-a.open { max-height: 300px; padding-bottom: 24px;       display: block !important;    background: #efefef;
    padding: 15px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px; }

  /* LETTER */
  .cs-letter {
  
    background: #fff;
    border-radius: 16px;
    padding: 56px 60px;
    border-left: 3px solid #1749d5;
  }
  .cs-letter-body {
  
    color: #3a3a3a;
    line-height: 1.8;
    margin-bottom: 32px;
  }
  .cs-letter-sig { font-size: 13.5px; color: #9a9a9a; }
  .cs-letter-sig strong { display: block; color: #0f1117; font-size: 15px; margin-bottom: 4px; }

  /* CTA */
  .cs-cta-section {
     text-align: center;
    background: radial-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px), linear-gradient(135deg, #0f1c3f, #1e3a8a);
        position: relative;
  }
  .cs-cta-title {
  
font-size: 32px;
    font-weight: 700;
    color: #fff;
    line-height: 1.15;
    margin-bottom: 16px;
    text-transform: capitalize;
  }
  .cs-cta-sub {
       color: #fff;
    margin-bottom: 40px;
  }
  .cs-btn {
    display: inline-block;
    background: #fff;
    color: #0f1117;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    padding: 16px 40px;
    border-radius: 100px;
    border: none;
    cursor: pointer;
    transition: background 0.2s, transform 0.15s;
    text-decoration: none;
        position: relative;
    z-index: 999;
  }
  .cs-btn:hover { background: #4a6fe0; transform: translateY(-1px); }

  @media (max-width: 900px) {
  
    .cs-stats-row { grid-template-columns: repeat(2, 1fr); }
    .cs-principles-grid { grid-template-columns: 1fr; }
    .cs-practices-grid { grid-template-columns: repeat(2, 1fr); }
    .cs-pillars-grid { grid-template-columns: 1fr; }
    .cs-accred-grid { grid-template-columns: 1fr; }
    .cs-eeat-grid { grid-template-columns: repeat(1, 1fr); }
    .cs-phys-grid { grid-template-columns: repeat(1, 1fr); }
    .cs-culture-grid { grid-template-columns: 1fr; }
    .cs-legal-grid { grid-template-columns: 1fr; }

    .cs-hero { padding: inherit  !important}
    .cs-letter { padding: 40px 28px; }
    .cs-cta-section { padding: 64px 24px; }
	
  }

  @media (max-width: 768px) {
  .cs-stat-label
  {
  font-size: 12px !important;
  }
      .cs-hero {
        padding: inherit !important;
        height: auto !important;
        padding-top: 100px !important;
        padding-bottom: 100px !important;
    }
        .cs-legal-item:nth-child(even) {
     margin-left: 0px !important; 
}
     .cs-legal-title {
    font-size: 18px;
    font-weight: 700;
    color: #1749d5;
    margin-bottom: 4px;
}
.cs-stat
{
    padding: 23px 7px !important;
}
.cs-stat-value
{
    font-size: 22px !important;
}
  
`;


export default function DataSecurity() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
  <HelmetProvider>
                <Helmet>
                    <title>Data Security: - citadel coworkers</title>
                    <meta name="description" content="Data Security: Cookie List A cookie is a small piece of data (text file) that a website – when visited by a user – asks your browser to store on your device in order to remember information about you, such as your language preference or login information. Those cookies are set by us and called […]" />
                    <link rel="canonical" href={window.location.href} />
                </Helmet>
      <style>{styles}</style>

      
      <div className="cs-root">

        {/* HERO */}
        <section className="cs-hero">
            <div className="container">
          <p className="cs-hero-eyebrow">Data Security at Citadel Coworkers</p>
          <h1 className="cs-hero-title">
            Your Data Is<br /><em>Non-Negotiable.</em>
          </h1>
          <p className="cs-hero-sub">
          Working with Citadel Coworkers means that you’re entering a 360° secure partnership that is built on transparency, compliance and zero breaches. 

          </p>
          <div className="cs-stats-row">
            {stats.map((s, i) => (
              <div className="cs-stat" key={i}>
                <div className="cs-stat-value">{s.value}</div>
                <div className="cs-stat-label">{s.label}</div>
              </div>
            ))}
          </div>
          </div>
        </section>

        {/* BUILT-IN SECURITY MODEL */}
        <section className="cs-section cs-section-alt">
               <div className="container">
          <p className="cs-eyebrow">Protection pillar</p>
          <h2 className="cs-section-title">Built-in Security Model</h2>
          <p className="cs-section-subtitle">Every layer of CCW's security model works together.</p>
  <p className="cs-eyebrow-title">Protection pillar</p>
          <div className="cs-principles-grid" style={{ marginBottom: 48 }}>
            {principles.map((p, i) => (
              <div className="cs-principle" key={i}>
            
                <div className="cs-principle-title">{p.title}</div>
                <div className="cs-principle-desc">{p.desc}</div>
              </div>
            ))}
          </div>

         <p className="cs-eyebrow-title">Core Security Practices </p>
          <div className="cs-practices-grid" style={{ marginBottom: 56 }}>
            {corePractices.map((c, i) => (
              <div className="cs-practice" key={i}>
                <div className="cs-practice-icon">{c.icon}</div>
                <div className="cs-principle-title">{c.label}</div>
                <div className="cs-principle-desc">{c.detail}</div>
              </div>
            ))}
          </div>

          <p className="cs-eyebrow-title" style={{ marginBottom: 20 }}>Security pillars</p>
          <div className="cs-pillars-grid">
            {pillars.map((p, i) => (
              <div className="cs-pillar" key={i}>
                <div className="cs-pillar-num">{p.num}</div>
                <div className="cs-pillar-title">{p.title}</div>
                <div className="cs-pillar-desc">{p.desc}</div>
              </div>
            ))}
          </div>
          </div>
        </section>

        {/* ACCREDITATIONS */}
        <section className="cs-section cs-section-dark">
            <div className="container">
          <p className="cs-eyebrow">Accreditations</p>
          <h2 className="cs-section-title cs-section-title-light">Security You Can Verify Independently</h2>
          <p className="cs-section-subtitle cs-section-subtitle-light">Independently verifiable certifications and compliance alignment.</p>
          <div className="cs-accred-grid">
            {accreditations.map((a, i) => (
              <div className="cs-accred" key={i}>
                <span className="cs-accred-tag">{a.tag}</span>
                <div className="cs-accred-title">{a.title}</div>
                <div className="cs-accred-desc">{a.desc}</div>
              </div>
            ))}
          </div>
          </div>
        </section>

       

        {/* INTERNAL CULTURE */}
        <section className="cs-section cs-section-alt">
              <div className="container">
          <p className="cs-eyebrow">Internal culture</p>
          <h2 className="cs-section-title">Security From The Inside Out</h2>
          <p className="cs-section-subtitle">Great security doesn't start with technology — it starts with people.</p>
          <div className="cs-culture-grid">
            {culture.map((c, i) => (
              <div className="cs-culture-item" key={i}>
                <div className="cs-culture-num">{c.num}</div>
                <div>
                  <div className="cs-culture-title">{c.title}</div>
                  <div className="cs-culture-desc">{c.desc}</div>
                </div>
              </div>
            ))}
          </div>
          </div>
        </section>

        {/* LEGAL */}
        <section className="cs-section cs-section-dark">
              <div className="container">
          <p className="cs-eyebrow cs-eyebrow-light">Legal partnership</p>
          <h2 className="cs-section-title cs-section-title-light">The Law Is On Your Side</h2>
          <p className="cs-section-subtitle cs-section-subtitle-light">We don’t just promise data security we back it with the full weight of the Indian Information Technology Act. Anyone who tampers with your data faces serious legal consequences. </p>
          <div className="cs-legal-grid">
            {legalPoints.map((l, i) => (
              <div className="cs-legal-item" key={i}>
                <div class="flow-number">{l.number}</div>
                <div className="cs-legal-title">{l.title}</div>
                <div className="cs-legal-desc">{l.desc}</div>
              </div>
            ))}
          </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="cs-section cs-section-alt">
             <div className="container">
          <p className="cs-eyebrow">FAQ</p>
          <h2 className="cs-section-title">Frequently Asked Questions</h2>
          <p className="cs-section-subtitle">Everything you need to know about how Citadel Coworkers protects your data.</p>
          <div className="cs-faq-list">
            {faqs.map((f, i) => (
              <div className="cs-faq-item" key={i}>
                <button
                  className="cs-faq-q"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                >
                  <span className="cs-faq-q-text">{f.q}</span>
                  <span className={`cs-faq-icon${openFaq === i ? " open" : ""}`}>+</span>
                </button>
                <div className={`cs-faq-a${openFaq === i ? " open" : ""}`}>{f.a}</div>
              </div>
            ))}
          </div>
          </div>
        </section>

        {/* NOTE FROM TEAM */}
        <section className="cs-section">
             <div className="container">
          <p className="cs-eyebrow">A note from our team</p>
          <div className="cs-letter">

            <p className="cs-letter-body">
             <b>To our clients, </b>
<br></br>
In today’s world, your data is among the most valuable assets your business holds. We take that seriously, not as a compliance checkbox but as a core commitment embedded into how we operate every single day. 
<p></p>
Data security at Citadel Coworkers isn’t a feature we offer. It’s a way of working that is reinforced through regular internal audits, surprise checks, rigorous training and a culture that treats every client’s data as sacred. 
<p></p>
Our clients around the world have trusted us with their sensitive information and not one has ever experienced a breach. That record is our most important credentials and we intend to keep it that way. 

            </p>
            <div className="cs-letter-sig">
              <span className="name-bold"> Rajiv Kasana</span>
              <strong>Head of Legal, Citadel Coworkers</strong>
              Data Protection &amp; Compliance Division
            </div>
          </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cs-cta-section">
          <div className="container">
            <h2 className="cs-cta-title">Ready to get started?</h2>
            <p className="cs-cta-sub">Join thousands of businesses that trust Citadel Coworkers to handle their work and their data with complete care. 
</p>
            <button className="cs-btn">Hire with Confidence →</button>
          </div>
        </section>

      </div>
	          </HelmetProvider>

  );
}