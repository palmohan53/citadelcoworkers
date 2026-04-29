import React from "react";
const OurMission = () => {
const teamData = [
  {name:"Akansha Sharma", role:"Senior Manager Digital Marketing", img:"../images/Akansha-new.png"},
        {name:"Ashmeet Kaur", role:"Co->HR Generalist & Talent Acquisition Head", img:"../images/Meenu-Singh.png"},
        {name:"Bhawna", role:"Senior Manager, Recruitment Team", img:"../images/Bhawana.png"},
       {name:"Akshat Varshney", role:"Vice President, Finance Department", img:"../images/Akshat-new.png"},
        {name:"Mansij Kureel", role:"Vice President, Ops & Client Relations", img:"../images/mansij-new.png"},
        {name:"Amit Gupta", role:"Vice President, Finance Department", img:"../images/Amit-new.png"},
        {name:"Suresh Sharma", role:"Co-founder", img:"../images/Suresh (1).png"},
        {name:"Kamaljeet Singh", role:"Director", img:"../images/KJNEW.png"},
        {name:"Kumari Santosh", role:"Content Writer", img:"../images/santoshnew.png"},
        {name:"Poonam Sharma", role:"HR Manager", img:"../images/PoonamHR.png"},
          
     
]
const [showAll, setShowAll] = React.useState(false);
const [visible, setVisible] = React.useState(4);

  return (
    <>
      <style>{`
      .step-icon img {
    width: 40px;
}
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
    .white-box-card.new-style {
    position: relative;
}
    .hero h1
      {color:#fff;}
.white-box-card {
    background: #fff;
    text-align: left;
    color: #000 !important;
        margin-top: 40px;
    padding: 40px;
    border-radius: 14px;
    background: linear-gradient(180deg, #f8fbff, #ffffff);
    box-shadow: 0 20px 60px rgba(0,0,0,0.08);
}

.white-box-card p {
    color: #000;
    padding: 40p;
}
section.cta-section .about-button {
  
    justify-content: center;
      }
/* SECTION */
.cta-section {
  padding: 80px 20px;
  text-align:center;

}

/* STEPS WRAPPER */
.steps {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-bottom: 60px;
  flex-wrap: wrap;
}

/* BOX (instead of card) */
.step-box {
  
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 14px;
  padding: 35px 25px;

  transition: 0.3s ease;
      background: #4675f5;
    margin-top: 52px;
}

/* HOVER EFFECT */
.step-box:hover {
  transform: translateY(-6px);
  border-color: rgba(34, 211, 238, 0.4);
  box-shadow: 0 10px 30px rgba(34, 211, 238, 0.08);
}

/* ICON */
.step-icon {
  width: 70px;
  height: 70px;
  border: 1px solid rgba(34, 211, 238, 0.4);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 15px;
  color: #22d3ee;
  font-size: 20px;
}

/* LABEL */
.step-label {
  font-size: 11px;
  letter-spacing: 2px;
  color: #fff;
  margin-bottom: 10px;
}

/* TEXT */
.step-box h3 {
    font-size: 19px;
    margin-bottom: 10px;
    color: #fff;
    text-transform: capitalize;
}

.step-desc {
  font-size: 14px;
  color: #fff;
      }
/* ARROW */
.step-arrow {
  color: #22d3ee;
  font-size: 20px;
}
.sovereign-section {
  padding: 80px 20px;
}



.tag {
  font-size: 11px;
  letter-spacing: 3px;
  color: rgba(34, 211, 238, 0.8);
  margin-bottom: 20px;
}
.column.right-ic .icon.muted {
    background: red;
    color: #fff;
    font-size: 20px;
}
.heading {
  font-size: 48px;
  font-weight: 600;
  margin-bottom: 40px;
  line-height: 1.3;
}



.card {
  display: grid;
  grid-template-columns: 1fr 1fr;
  border: 1px solid rgba(255,255,255,0.08);

  overflow: hidden;
}

.column {
padding: 50px;
    text-align: left;
    background: #efefef;
    border: 1px solid #1749d5;
}

.left {
  border-right: 1px solid rgba(255,255,255,0.08);
}

.subheading {
  font-size: 11px;
  letter-spacing: 3px;
  margin-bottom: 35px;
}

.highlight {
  color: rgba(34, 211, 238, 0.8);
}

.muted {
  color: rgba(255,255,255,0.4);
}

section.sovereign-section ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

section.sovereign-section li {
  display: flex;
  gap: 15px;
  margin-bottom: 28px;
  align-items: center;
}

section.sovereign-section .icon {
  width: 36px;
  height: 36px;
  border: 1px solid rgba(34, 211, 238, 0.3);
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: #22d3ee;
  flex-shrink: 0;
}

.icon.muted {
  border: 1px solid rgba(255,255,255,0.15);
  color: rgba(255,255,255,0.4);
}

section.sovereign-section li P {
    margin-bottom: 0px !important;
}

.right li p {
  color: rgba(255,255,255,0.5);
}
 .testimonial-section {
      padding: 80px 20px;
      display: flex;
      justify-content: center;
      background: #05080d;
    }
.quote svg {
    transform: rotate(180deg);
}
    .testimonial-card {
      margin-top: 60px;
      width: 100    margin-top: 60px;%;
      background: #fff;
      border-radius: 14px;
      padding: 40px;
      border: 1px solid rgba(255,255,255,0.05);
    }

    .quote {
       font-size: 40px;
    color: #1749d5;
    
    }

    .testimonial-text {
      font-size: 20px;
      line-height: 1.7;
      color: #000;
    }

    .highlight {
      color: #00d4ff;
      font-weight: 600;
    }

    .author {
      display: flex;
      align-items: center;
      gap: 15px;
      margin-top: 30px;
	  color:#000;    }

    .author img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      object-fit: cover;
    }

    .author h4 {
      margin: 0;
      font-size: 14px;
    }

    .author p {
      margin: 2px 0 0;
      font-size: 12px;
        color: #1749d5;
    }

    @media (max-width: 768px) {
      .testimonial-text {
        font-size: 16px;
      }
    }
      /* TEAM GRID */
.team-strip {
  padding: 60px 20px;
  background: #0b0f14;
  color: #fff;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 20px;
  justify-items: center;
}

/* MEMBER */
.team-member {
  position: relative;
  width: 100px;
  height: 100px;
  cursor: pointer;
}

.team-member img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
}

/* HOVER OVERLAY */
.member-info {
      position: absolute;
    bottom: -65px;
        z-index: 9;
    left: 50%;
    transform: translateX(-50%);
    background: #000;
    color: #fff;
    padding: 10px 14px;
    border-radius: 10px;
    width: 140px;
    opacity: 0;
    transition: 0.3s;
}

.team-member:hover .member-info {
  opacity: 1;
}

.member-info h4 {
  font-size: 11px;
  margin: 0;
}

.member-info p {
  font-size: 10px;
  color: #00d4ff;
}

/* BUTTON */
.view-btn {
  margin-top: 60px;
  text-align: center;
}

.view-btn button {
    cursor: pointer;
    padding: 14px 26px;
    border-radius: 10px;
    font-weight: 600;
	    border: navajowhite;
    text-decoration: none;
    background: linear-gradient(90deg, #4f6df5, #3b82f6);
    color: white;
    box-shadow: 0 10px 25px rgba(79, 109, 245, 0.25);
    font-size: 15px;
    transition: all .25s ease;
}

/* RESPONSIVE */
@media (max-width: 1024px) {
  .team-grid {
    grid-template-columns: repeat(5, 1fr);
  }
}

@media (max-width: 768px) {
  .team-grid {
    grid-template-columns: repeat(3, 1fr);
  }
    .step-box
    {margin-top:10px;}
    section.sovereign-section .card {
    display: block !important;
    margin-bottom:40px;
}
    .column.left {
    padding: 10px;
}

.column.right-ic {
    padding: 10px;
}
    section.hero {
    height: auto;
}
    section.sovereign-section .icon
    {
    width:30px !important;
    height:30px !important}
}
	/* HOVER CARD - IMPROVED */



/* NAME */
.member-info h4 {
  margin: 0;
  font-size: 14px;
  font-weight: 600;
}

/* DESIGNATION */
.member-info p {
  margin: 5px 0 0;
  font-size: 12px;
  color: #9aa4af;
}  
	  /* TEAM SLIDER */
.team-strip {
  padding: 60px 20px;
  background: #f2f2f2;
}
/* HOVER CARD - IMPROVED */



.member-info::after {
  content: "";
  position: absolute;
  top: -6px;
  left: 50%;
  transform: translateX(-50%);
  
  width: 12px;
  height: 12px;
  background: #11161c;
  transform: translateX(-50%) rotate(45deg);
}
/* NAME */
.member-info h4 {
  margin: 0;
  font-size: 14px;
  font-weight: 600;
}

/* DESIGNATION */
.member-info p {
  margin: 5px 0 0;
  font-size: 12px;
  color: #9aa4af;
}
.team-member {
  position: relative;
  width: 100px !important;
  margin: auto;
}

/* IMAGE */
.team-member img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
}




/* TEXT */
.member-info h4 {
  margin: 0;
  font-size: 13px;
}

.member-info p {
  margin: 4px 0 0;
  font-size: 11px;
  color: #9aa4af;
}

/* REMOVE DEFAULT ARROWS */
.slick-prev:before,
.slick-next:before {
  display: none;
}
      .hero {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  background: radial-gradient(circle at center, #1749d5 0%, #5070cc 80%);
  color: white;
  overflow: hidden;
}

/* GRID BACKGROUND */
.hero::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(rgba(0,255,255,0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0,255,255,0.05) 1px, transparent 1px);
  background-size: 60px 60px;
  opacity: 0.8;
}



.hero small {
    background: rgb(23 73 213 / 52%);
    padding: 6px 14px;
    border-radius: 20px;
    font-size: 19px;
    display: inline-block;
    color: #fff;
    margin-bottom: 18px;
}

.hero h1 {
  font-size: 53px;
  font-weight: 700;
  margin-top: 10px;
}



.hero p {
  margin-top: 5px;


}

/* BUTTONS */
.btn-group {
  margin-top: 35px;
}

.btn {
  padding: 14px 30px;
  border-radius: 10px;
  margin: 10px;
  cursor: pointer;
}

.btn-primary {
    background: linear-gradient(90deg, #00cc83, #00cc83f5);
    color: #fff;
}

.btn-primary:hover {
  transform: scale(1.05);
  box-shadow: 0 0 40px rgba(0,255,255,0.9);
}

.btn-secondary {
  background: transparent;
  border: 1px solid rgba(255,255,255,0.2);
  color: white;
}

/* STATS */
.stats {
  margin-top: 70px;
  display: flex;
  justify-content: center;
  gap: 60px;
  flex-wrap: wrap;
}

.stat h2 {
  font-size: 28px;
}

.stat p {
  font-size: 12px;
  color: #fff;
}

/* RESPONSIVE */
@media(max-width: 768px){
  .hero h1 {
    font-size: 38px;
  }
}
  .mission-section {
     padding: 100px 80px;
    background: #efefef;
    color: #fff;
}

.mission-section .container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 60px;
}

/* LEFT */
.left {
  flex: 1;
}

.tag {
      color: #1749d5;
    letter-spacing: 3px;
    font-size: 12px;
    margin-bottom: 20px;
}

.left h1 {
    font-size: 48px;
    line-height: 1.2;
    font-weight: 600;
    color: #000;
}

.left h1 span {
  color: #1749d5
}

.desc {
  margin-top: 20px;
  color: #000;
  line-height: 1.7;
  max-width: 500px;
}

/* RIGHT IMAGE */
.right {
  flex: 1;
  display: flex;
  justify-content: center;
}

.right img {
  width: 100%;
  max-width: 420px;
  border-radius: 16px;
  filter: brightness(0.8);
  box-shadow: 0 20px 60px rgba(0,0,0,0.6);
}

/* RESPONSIVE */
@media (max-width: 900px) {
  .mission-section .container {
    flex-direction: column;
    text-align: center;
  }

  .desc {
    max-width: 100%;
  }
}
.right {
  flex: 1;
  display: flex;
  justify-content: center;
}








.image-box::after {
  content: "";
  position: absolute;
  top: -10px;
  right: -10px;
  width: 60px;
  height: 60px;

  border-top: 2px solid #00e5ff;
  border-right: 2px solid #00e5ff;

  border-radius: 8px;
  opacity: 0.8;
}
  .image-box::after {
  animation: glowLine 2s infinite alternate;
}

@keyframes glowLine {
  from {
    opacity: 0.5;
  }
  to {
    opacity: 1;
  }
}.section {
  padding: 100px 80px;
  display: flex;
  justify-content: center;
}

/* CONTAINER */
.mission-section .container {
  max-width: 1200px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 80px;
}

/* LEFT */
.left {
  flex: 1;
}

.left h1 {
  font-size: 48px;
  line-height: 1.2;
  font-weight: 600;
  color: #d1d5db;
}

.highlight {
  color: #00e5ff;
}
.column.left .icon {
    background: #00cc83;
    color: #fff;
    font-size: 20px;
}
.left p {

  color: #000;
  line-height: 1.7;
  max-width: 520px;
}

/* RIGHT IMAGE */
.right {
  flex: 1;
  display: flex;
  justify-content: center;
}

.image-box {
  position: relative;
  max-width: 420px;
}

/* IMAGE */
.image-box img {
  width: 100%;
  border-radius: 18px;
  filter: brightness(0.85) contrast(1.1);
  box-shadow: 0 25px 80px rgba(0,0,0,0.7);
}

/* CYAN CORNER */
.image-box::after {
  content: "";
  position: absolute;
  top: -10px;
  right: -10px;
  width: 60px;
  height: 60px;
  border-top: 2px solid #00e5ff;
  border-right: 2px solid #00e5ff;
  border-radius: 6px;
}

/* NAME CARD */
.image-info {
  position: absolute;
  bottom: 15px;
  left: 15px;
  right: 15px;

  padding: 14px;
  border-radius: 12px;

  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(6px);

  border: 1px solid rgba(255,255,255,0.1);
}

.image-info h4 {
  margin: 0;
  font-size: 15px;
}

.image-info p {
  margin: 2px 0 0;
  font-size: 12px;
  color: #9aa5b1;
}

/* RESPONSIVE */
@media(max-width: 900px){
  .mission-section .container {
    flex-direction: column;
    text-align: center;
  }

  .left p {
    max-width: 100%;
  }
}
   .arrow {
  position: absolute;
  width: 220px;
  height: 120px;
  left: 45%;
  bottom: 40px;

  opacity: 0.8;
} .curve-arrow path {
  stroke-dashoffset: 100;
  animation: dash 3s linear infinite;
}
.team-section {
  padding: 80px 20px;
  background: #efefef;
  text-align: center;
}

.team-section h2 {
  font-size: 36px;
  margin-bottom: 40px;
}

.team-section h2 span {
  color: #3b82f6;
}



/* MEMBER */
.team-member {
  position: relative;
  width: 100px;
}

/* IMAGE */
.team-member img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  transition: 0.3s;
}

/* HOVER CARD */
.member-card {
  position: absolute;
  bottom: -65px;
  left: 50%;
  transform: translateX(-50%);
  background: #000;
  color: #fff;
  padding: 10px 14px;
  border-radius: 10px;
  width: 140px;
  opacity: 0;
  transition: 0.3s;
}

.team-member:hover .member-card {
  opacity: 1;
}

/* TEXT */
.member-card h4 {
  font-size: 13px;
  margin: 0;
}

.member-card p {
  font-size: 11px;
  margin-top: 4px;
  color: #ccc;
}

/* BUTTON */
.load-btn {
  margin-top: 40px;
  padding: 12px 24px;
  border-radius: 10px;
  background: linear-gradient(90deg, #4f6df5, #3b82f6);
  color: white;
  border: none;
  cursor: pointer;
}

/* RESPONSIVE */
@media (max-width: 1024px) {
  .team-grid {
    grid-template-columns: repeat(5, 1fr);
  }
}

@media (max-width: 768px) {
  .team-grid {
    grid-template-columns: repeat(3, 1fr);
  }
    .heading
    {
    font-size:38px;}
}
@keyframes dash {
  to {
    stroke-dashoffset: 0;
  }
}
 .curve-arrow {
  position: absolute;
  width: 240px;
  height: 140px;

  left: 50%;
  bottom: 30px;

  transform: translateX(-50%);
  opacity: 0.8;
  pointer-events: none;
}
  /* STAFFING SECTION */
.staffing-section {
  background: #0b0f14;
  color: #fff;
  padding: 100px 80px;
}

.staffing-container {
  max-width: 1200px;
  margin: auto;
}

.staffing-tag {
  color: #00d4ff;
  font-size: 12px;
  letter-spacing: 2px;
  margin-bottom: 10px;
}

.staffing-heading {
  font-size: 42px;
  line-height: 1.3;
  margin-bottom: 20px;
}

.staffing-heading span {
  color: #00d4ff;
}

.staffing-desc {
  color: #9aa4af;
  max-width: 600px;
  margin-bottom: 40px;
}

.staffing-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 25px;
}

.staffing-card {
  background: #11161c;
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 12px;
  padding: 25px;
  transition: 0.3s;
}

.staffing-card:hover {
  border-color: #00d4ff;
  transform: translateY(-5px);
}

.staffing-icon {
  width: 40px;
  height: 40px;
  border: 1px solid #00d4ff;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #00d4ff;
  margin-bottom: 12px;
}

.staffing-card h3 {
  margin-bottom: 10px;
}

.staffing-card p {
  color: #9aa4af;
  font-size: 14px;
  margin-bottom: 12px;
}

.staffing-link {
  color: #00d4ff;
  font-size: 14px;
  cursor: pointer;
      }



/* NAME */
.member-info h4 {
  margin: 0;
  font-size: 14px;
  font-weight: 600;
}

/* DESIGNATION */
.member-info p {
  margin: 5px 0 0;
  font-size: 12px;
  color: #9aa4af;
}
/* Responsive */
@media (max-width: 768px) {
  .staffing-grid {
    grid-template-columns: 1fr;
  }

  .staffing-heading {
    font-size: 30px;
  }
}
.team-cards-section h2 {
    color: #fff !important;
}
/* PREMIUM TEAM SECTION */
.team-cards-section {
  padding: 80px 20px;
  background: #0f172a;
  color: #fff;
}

.team-cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 25px;
}

/* CARD */
.team-card {
  position: relative;
  border-radius: 14px;
  overflow: hidden;
  background: #111;
}

/* IMAGE */
.team-card img {
  width: 100%;
  height: 340px;
  object-fit: cover;

  transition: 0.4s;
}

/* HOVER EFFECT */
.team-card:hover img {
  filter: grayscale(0%) brightness(1);
  transform: scale(1.05);
}

/* OVERLAY TEXT */
.team-info {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 16px;
  background: linear-gradient(to top, rgba(0,0,0,0.9), transparent);
}

.team-info h4 {
  margin: 0;
  font-size: 16px;
}

.team-info p {
  margin: 4px 0 0;
  font-size: 13px;
  color: #9aa4af;
}

/* EXPERIENCE TAG */
.exp-tag {
  position: absolute;
  top: 12px;
  right: 12px;
  background: rgba(0,0,0,0.6);
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 12px;
  color: #fff;
}
.Content-box a.btn.primary {
    margin: 0;
}
section.bg-grey-strip {
    background: #efefef;
}
/* LOAD MORE BUTTON */
.load-more {
  text-align: center;
  margin-top: 40px;
}
.Content-box h2 {
    font-size: 38px;
    margin-bottom: 25px;
}
.load-more button {
    padding: 14px 26px;
    border-radius: 10px;
    font-weight: 600;
    text-decoration: none;
    background: linear-gradient(90deg, #4f6df5, #3b82f6);
    color: white;
    box-shadow: 0 10px 25px rgba(79, 109, 245, 0.25);
    font-size: 15px;
    transition: all .25s ease;
}

/* RESPONSIVE */
@media (max-width: 1024px) {
  .team-cards {
    grid-template-columns: repeat(2, 1fr);
  }
}

section.bg-blue-strip {
    background: #4675f5;
    color: #fff;
}
section.bg-blue-strip .greenText,section.bg-grey-strip .greenText {
  
    background: linear-gradient(90deg, #00cc83, #00ffa3);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
  `}</style>
<section className="hero ">
      <div className="hero-content">
          <div class="container">
        <small className="tag-label">WHO WE ARE</small>

        <h1 className="title">
        
          <span>Our Mission.</span>
        </h1>
<div class="white-box-card">
     <p> To empower entrepreneurs to build their dream with ambitious virtual coworkers who become their
       indispensable partners, a reliable extensions of your team that help turn vision into reality, no matter the challenge.</p>

<p>What we mean by “coworker” is not a temporary helper but a committed partner who shows up exactly when it matters the
 most and takes on your mission as their own. </p>

<p>Being an entrepreneur is unpredictable. Growth of the business doesn’t just need skilled support, they need reliable 
team members who stay through crises, adapt seamlessly and become an indispensable extension you can count on day after day.</p>

      
   <div className="author">
        <img src="/images/Suresh-Sharma.jpg" alt="Suresh Sharma" />
        <div>
          <h4>Suresh Sharma</h4>
          <p>Co-Founder, Citadel Coworkers</p>
        </div>
      </div>
</div>

      </div>  </div>
    </section>




<section class="bg-grey-strip"><div class="container approach-layout reveal reveal-left active"><div class="Content-box"><span class="section-label">
  OUR APPROACH</span><h2>What We Do
</h2>
   <p class="d">Citadel Coworkers specializes in providing cost-effective, dedicated and <a href="https://www.citadelcoworkers.com/services/virtual-assistant">full-time virtual staffing and outsourcing solutions</a>. We help businesses of all sizes, from startups to established enterprises, through dedicated staff augmentation. </p>

   <p class="d">You can opt for project-based outsourcing and long-term remote team building in India, based on your business requirements. Our comprehensive services cover high-demand domains, including software development and IT services, digital marketing, specialized support in finance and bookkeeping and business operations. </p>

   <p class="d">For all your non-technical and administrative functions, we deliver <a href="https://www.citadelcoworkers.com/services/virtual-assistant">reliable virtual assistance across customer support</a>, back-office operations and documentation services, which helps ensure smooth, efficient and scalable business operations. </p> 
<div class="about-button"><a href="/services" class="btn primary">  Our services
                         →</a></div>
</div></div></section>
<section class="bg-blue-strip">
  <div class="container "><div class="approach-layout reveal reveal-left active">
  <div class="Content-box">
<h2>What Matters 
 <span class="DD"> Most To Us</span></h2>
 <p>Trust isn’t built overnight. It grows with the consistent actions, shared goals and people who truly show up every day.  At Citadel Coworkers, we believe in creating long-lasting relationships as they are the foundation of everything we do. 
</p>
<p>We stand out by investing deeply in our people from day one. We handpick only the top 3% of India’s talent through rigorous assessments, check for cultural alignment and a supportive environment that encourages long-term commitment. The result can be seen that our virtual coworkers stay with us and treat your business challenges as their own. 
</p>
</div></div>
 </div>

 </section>


<section className="bg-grey-strip">
  <div className="container">

    <div className="approach-left">
      <h2>
        Our Long-Serving<span class="S"> Employees</span>
      </h2>
    </div>

    {/* FIRST ROW */}
    <div className="team-grid">
      {teamData.slice(0, 7).map((m, i) => (
        <div className="team-member" key={i}>
          <img src={m.img} />
          <div className="member-info">
            <h4>{m.name}</h4>
            <p>{m.role}</p>
          </div>
        </div>
      ))}
    </div>

    {/* SECOND ROW */}
    {showAll && (
      <div className="team-grid" style={{ marginTop: "20px" }}>
        {teamData.slice(7, 16).map((m, i) => (
          <div className="team-member" key={i}>
            <img src={m.img} />
            <div className="member-info">
              <h4>{m.name}</h4>
              <p>{m.role}</p>
            </div>
          </div>
        ))}
      </div>
    )}

    {/* BUTTON */}
    <div className="view-btn ">
      <button onClick={() => setShowAll(!showAll)}>
        {showAll ? "View Less ↑" : "View More ↓"}
      </button>
    </div>
<div className="white-box-card new-style">
    <div className="quote">
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
        className="lucide lucide-quote h-6 w-6 text-white"
        style={{ color: "#fff" }}
      >
        <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
        <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
      </svg>
    </div>
<p>The real secret ot oour success is treating your business like our own - understanding your vision, caring about every milestone and delivering virtual coworkers who
become unwavering partners in growth.</p>
  <div className="author">
        <img src="/images/Suresh-Sharma.jpg" alt="Suresh Sharma" />
        <div>
          <h4>Suresh Sharma</h4>
          <p>Co-Founder, Citadel Coworkers</p>
        </div>
      </div>
</div>
  </div>
</section>

     
       <section class="sovereign-section">
  <div class="container">



    <h2 class="heading">
      Where We <span class=""> Stand</span> — and Where We <span class="">Don’t</span>
    </h2>

    <div class="card">


      <div class="column left">
        <p class="subheading ">WHAT WE STAND FOR</p>

        <ul>
          <li>
            <div class="icon">✓</div>
            <p>Top 3% talent only — no compromise on quality</p>
          </li>

          <li>
          <div class="icon">✓</div>
            <p>True partnership — your rules, your success</p>
          </li>

          <li>
            <div class="icon">✓</div>
            <p>Transparency — no hidden fees, clear pricing</p>
          </li>

          <li>
             <div class="icon">✓</div>
            <p>Long-term commitment in client relationships that last</p>
          </li>

          <li>
         <div class="icon">✓</div>
            <p>Cultural & communication fit — people who understand your world</p>
          </li>
        </ul>
      </div>

  
      <div class="column right-ic">
        <p class="subheading ">WHAT WE DO NOT STAND FOR</p>

        <ul>
          <li>
            <div class="icon muted">✕</div>
            <p>Disposable freelancers who vanish after a project</p>
          </li>

          <li>
            <div class="icon muted">✕</div>
            <p>Cutting corners on talent just to chase the lowest price</p>
          </li>

          <li>
            <div class="icon muted">✕</div>
            <p>Treating people like interchangeable resources</p>
          </li>

          <li>
            <div class="icon muted">✕</div>
            <p>Promises that don’t survive the first challenge</p>
          </li>

          <li>
            <div class="icon muted">✕</div>
            <p>Agencies that force you into endless onboarding cycles</p>
          </li>
        </ul>
      </div>

    </div>
  </div>
</section>

<section class="bg-blue-strip"><div class="container approach-layout reveal active"><div class="Content-box"><h2>The Change We Are Driving

</h2>
<p>We are here, breaking outsourcing stereotypes where the endless search for reliable team continues, fear of cultural gaps and the frustration businesses face due to short-term fixes that often end up creating more problems. 
</p>
<p>We exist to replace the uncertainty of an entrepreneur with confidencethat makes hiring dedicated virtual coworkers as straightforward and trustworthy as adding an in-house team member, without overhead or geographic limits. 
</p>





</div></div></section>
<section class="cta-section bg-grey-strip">
  <div class="container">

    <p class="tag">READY TO BEGIN?</p>

    <h2 class="heading">
    Ready to Meet the Virtual Coworkers Who Could Become Your <span class="">Most trusted Partner?</span>

    </h2>

    <p class="subtext">
      From your first brief to a fully deployed team member in 48 hours.
      No middlemen, no compromises, no surprises.
    </p>

    <div class="steps">

      <div class="step-box">
        <div class="step-icon"><img src="https://virtualassistant24x7.com/wp-content/uploads/2026/03/chat.png"></img></div>
        <p class="step-label">STEP 1</p>
        <h3>Tell us your needs</h3>
        <p class="step-desc">Share your requirements and team structure</p>
      </div>

      <div class="step-arrow">→</div>

      <div class="step-box">
        <div class="step-icon"><img src="https://virtualassistant24x7.com/wp-content/uploads/2026/03/businessman.png"></img></div>
        <p class="step-label">STEP 2</p>
        <h3>Match with top-3% professionals</h3>
        <p class="step-desc">We handpick your ideal virtual coworkers</p>
      </div>

      <div class="step-arrow">→</div>

      <div class="step-box">
        <div class="step-icon"><img src="https://virtualassistant24x7.com/wp-content/uploads/2026/03/48-hours-1.png"/></div>
        <p class="step-label">STEP 3</p>
        <h3>48-Hour deployment</h3>
        <p class="step-desc">Your new team member starts in two days</p>
      </div>

    </div>
<div class="about-button"><a href="/services" class="btn primary"> Connect With Your Match →</a></div>
  

  </div>
</section>

    </>
  );
};

export default OurMission;