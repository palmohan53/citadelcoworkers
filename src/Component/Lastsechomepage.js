import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const cards = [
  {
    title: "Virtual Assistant",
    text: "Available Now",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 20c2-3.5 5.5-5 8-5s6 1.5 8 5" />
      </svg>
    ),
  },
  {
    title: "Customer Support",
    text: "5+ Years Experience",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 12a8 8 0 0116 0" />
        <path d="M6 13v3" />
        <path d="M18 13v3" />
        <path d="M9 20h6" />
      </svg>
    ),
  },
  {
    title: "Bookkeeper",
    text: "Quick Match",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="M8 9h8M8 13h8M8 17h5" />
      </svg>
    ),
  },
  {
    title: "Appointment Setter",
    text: "Ready to Hire",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M8 3v4M16 3v4M3 10h18" />
      </svg>
    ),
  },
  {
    title: "Global Remote Talent",
    text: "Verified Professionals",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18" />
        <path d="M12 3c3 3 3 15 0 18" />
        <path d="M12 3c-3 3-3 15 0 18" />
      </svg>
    ),
  },
];

export default function ConclusionSection() {
  const settings = {
  dots: false,
  arrows: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2500,
  speed: 600,
  slidesToShow: 1,
  slidesToScroll: 1,
  pauseOnHover: true,
  fade: true,
};const teamImages = [
  "/images/Teamlast.webp",
  "/images/Teamlast1.webp",
  "/images/Teamlast2.webp",
  "/images/Teamlast3.webp",
];
  return (
  <>
    <style>{`
        /* ===========================
   CONCLUSION SECTION
=========================== */





/* ===========================
   LEFT
=========================== */

.tag {
  display: inline-block;

  font-size: 14px;
  font-weight: 600;
  letter-spacing: 3px;
  text-transform: uppercase;

  color: #204ecf;

  margin-bottom: 18px;
}
section.conclusion .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
}
.conclusion .left h2 {
  margin: 0;

  font-size: 48px;
  font-weight: 700;



  color: #111;
}

.left p {
  margin-top: 28px;

  max-width: 590px;

  line-height: 1.8;

  color: #666;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 12px;

  margin-top: 42px;

  background: #204ecf;
  color: #fff;

  text-decoration: none;
  font-weight: 600;

  padding: 18px 34px;

  border-radius: 999px;

  transition: all .35s ease;
}

.btn span {
  transition: .35s;
}

.btn:hover {
  transform: translateY(-4px);

  box-shadow:
  0 18px 40px rgba(32,78,207,.22);
}

.btn:hover span {
  transform: translateX(5px);
}

/* ===========================
   RIGHT
=========================== */


/* ===========================
   CARD
=========================== */

.floating-card {

  position: absolute;

  width: 310px;

  background: #fff;

  border-radius: 22px;

  padding: 22px;

  display: flex;
  align-items: center;
  gap: 18px;

  border: 1px solid rgba(0,0,0,.04);

  box-shadow:
    0 10px 40px rgba(15,23,42,.07);

  transition: .4s;
}

.floating-card:hover {

  transform: translateY(-8px) scale(1.03);

  box-shadow:
    0 25px 60px rgba(15,23,42,.12);
}

/* ===========================
   ICON
=========================== */

.icon {

  width: 58px;
  height: 58px;

  border-radius: 16px;

  background: #F4F7FF;

  display: flex;
  align-items: center;
  justify-content: center;

  flex-shrink: 0;

  color: #204ECF;
}

.icon svg {

  width: 28px;
  height: 28px;

  stroke: currentColor;
}

/* ===========================
   TEXT
=========================== */

.content h4 {

  margin: 0;

  font-size: 19px;
  font-weight: 600;

  color: #111;
}

.content p {

  margin-top: 6px;

  font-size: 15px;

  color: #666;
}

/* ===========================
   CARD POSITIONS
=========================== */

.card-1{
    top:0;
    left:90px;
    animation:float1 6s ease-in-out infinite;
}

.card-2{
    top:125px;
    right:0;
    animation:float2 7s ease-in-out infinite;
}

.card-3{
    top:270px;
    left:20px;
    animation:float3 6.5s ease-in-out infinite;
}

.card-4{
    top:405px;
    right:35px;
    animation:float4 7.5s ease-in-out infinite;
}

.card-5{
    bottom:0;
    left:130px;
    animation:float5 8s ease-in-out infinite;
}

/* ===========================
   FLOAT ANIMATIONS
=========================== */

@keyframes float1{
0%,100%{
transform:translateY(0);
}
50%{
transform:translateY(-8px);
}
}

@keyframes float2{
0%,100%{
transform:translateY(0);
}
50%{
transform:translateY(8px);
}
}

@keyframes float3{
0%,100%{
transform:translateY(0);
}
50%{
transform:translateY(-10px);
}
}

@keyframes float4{
0%,100%{
transform:translateY(0);
}
50%{
transform:translateY(9px);
}
}

@keyframes float5{
0%,100%{
transform:translateY(0);
}
50%{
transform:translateY(-8px);
}
}

/* ===========================
   RESPONSIVE
=========================== */

@media (max-width:1100px){

.conclusion{
padding:00px 0;
}

.conclusion .container{

grid-template-columns:1fr;

gap:80px;
}

.left{

text-align:center;
}

.left p{

margin:auto;
margin-top:25px;
}

.right{

height:650px;
margin:auto;
max-width:650px;
}

}

@media (max-width:768px){

.left h2{

font-size:22px !important;
}
section.conclusion .container 
    {
    grid-template-columns: 1fr;
        gap: 5px;
}
.left p{

font-size:18px;
}

.right{

height:auto;

display:flex;

flex-direction:column;

gap:18px;
}

.floating-card{

position:relative;

width:100%;

left:auto !important;
right:auto !important;
top:auto !important;
bottom:auto !important;

animation:none;
}

.btn{

width:100%;

justify-content:center;
}

}

.contete {
    display: grid;
    grid-template-columns: 1fr 1fr;
}
/* Shapes */

.cta-shape {
  position: absolute;
  border-radius: 50%;
  opacity: .12;
}

.shape1 {
  width: 420px;
  height: 420px;
  background: white;
  top: -180px;
  right: -120px;
}

.shape2 {
  width: 280px;
  height: 280px;
  background: white;
  bottom: -120px;
  left: -90px;
}

/* LEFT */

.cta-left {
  flex: 1;
  color: #000;
}

.cta-tag {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: rgb(29 143 122 / 26%);
    border: 1px solid rgb(29 143 122 / 26%);
    color: var(--gold-light);
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    padding: 6px 14px;
    border-radius: 100px;
    margin-bottom: 24px;
    width: fit-content;
}

.cta-left h2 {
  font-size: 52px;
  line-height: 1.15;
  font-weight: 800;
  margin-bottom: 20px;
}

section.cta-section {
    padding-bottom: 0px;
    margin-bottom: -3px;
    background: #efefef;
}

/* Trust */

.trust-badges {
  display: flex;
  gap: 18px;
  flex-wrap: wrap;
  margin: 40px 0;
}

.trust-card {
    text-align: center;
width:30%;
  display: block;
  align-items: center;
  gap: 12px;

  padding: 14px 18px;

  background: #fff;
  color: #111;

  border-radius: 18px;

  box-shadow: 0 18px 40px rgba(0,0,0,.12);

  transition: .35s;
}

.trust-card:hover {
  transform: translateY(-6px);
}



.trust-card strong {
  display: block;
  font-size: 15px;
  font-weight: 700;
}

.trust-card span {
  color: #666;
  font-size: 13px;
}

/* Buttons */

.cta-buttons1 {
  display: flex;
  gap: 18px;
  flex-wrap: wrap;
}

.cta-buttons1 .btn-primary {
    background: #1749d5;
    color: #ff;
    padding: 16px 34px;
    border-radius: 60px;
    font-weight: 700;
    text-decoration: none;
    transition: .35s;
}

.btn-primary:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 35px rgba(0,0,0,.18);
}

.btn-outline {
  border: 2px solid rgba(255,255,255,.45);

  color: white;

  padding: 16px 34px;

  border-radius: 60px;

  text-decoration: none;

  transition: .35s;
}

.btn-outline:hover {
  background: white;
  color: #1565ff;
}

/* RIGHT */

.cta-right {
  flex: 1;
  display: flex;
  justify-content: center;
}
.contete {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
}
.person-card {
  position: relative;

  width: 470px;



 




  text-align: center;
}
.person-card img {
    margin-bottom: -4px;
}
.person-image {
  width: 100%;
  max-width: 380px;
}

/* Floating cards */

.floating-card {
  position: absolute;

  background: white;

  border-radius: 18px;

  padding: 16px 22px;

  box-shadow: 0 18px 35px rgba(0,0,0,.12);

  animation: float 4s ease-in-out infinite;
}

.floating-card h4 {
  margin: 0;
  color: #1565ff;
  font-size: 28px;
}

.floating-card span {
  font-size: 13px;
  color: #666;
}

.top {
  top: 35px;
  left: -30px;
}

.bottom {
  bottom: 40px;
  right: -30px;
}

@keyframes float {

  0%{
    transform:translateY(0);
  }

  50%{
    transform:translateY(-10px);
  }

  100%{
    transform:translateY(0);
  }

}

/* Responsive */

@media(max-width:991px){



.cta-left h2{
font-size:40px;
}

.trust-badges{
justify-content:center;
}



.person-card{
width:100%;
max-width:450px;
}

.top{
left:10px;
}

.bottom{
right:10px;
}

}
@media(max-width:768px){
.contete {
display:block
}
    .trust-card{
width:40%;
justify-content:center;
}.bottominfo img {
    width: 75%;
}
    }
@media(max-width:576px){

.cta-section{
padding:70px 0;
}

.cta-left h2{
font-size:32px;
}

.cta-left p{
font-size:16px;
}

.trust-card{
width:40%;
justify-content:center;
}

.btn-primary,
.btn-outline{
width:100%;
text-align:center;
}

.person-card{
padding:25px 15px 0;
}

.floating-card{
position:relative;
display:inline-block;
margin:12px;
left:auto;
right:auto;
top:auto;
bottom:auto;
}

}
.bottominfo img {
    width: 48%;
}
.bottominfo {
    width: max-content;
    width: 100%;
    display: flex;
    float: ali;
    align-items: center;
    gap: 10px;
    margin-top: 6px;
    justify-content: center;
}
   section.cta-section {
    padding-bottom: 0px;
    margin-bottom: -3px;
} `}</style>
 <section className="cta-section">

      <div className="cta-shape shape1"></div>
      <div className="cta-shape shape2"></div>

      <div className="container">
   <div className="contete">
        {/* LEFT */}

        <div className="cta-left">

          <span className="cta-tag">
            🚀 Scale Faster With Citadel Coworkers
          </span>

          <h2>
          Teams Built for Businesses Ready to Grow
          </h2>

          <p>
          Join the businesses already scaling with a dedicated Citadel virtual assistant — onboarded in days, not weeks. 
          </p>

          {/* Trust Badges */}

          <div className="trust-badges">

            <div className="trust-card">
             <svg aria-hidden="true" height="30" viewBox="0 0 92 30" width="92" xmlns="http://www.w3.org/2000/svg"><path d="M10.35 23.1c5.89.06 9.9-3.9 9.9-9.98q0-.75-.14-1.7h-9.8v2.93h6.87c-.36 3.83-3.06 5.82-6.76 5.82-4.15 0-7.33-3.12-7.33-7.66 0-4.47 3.03-7.6 7.33-7.6 2.16 0 3.76.67 5.35 2.3l2.05-2.14c-1.8-2.1-4.4-3.1-7.44-3.1-5.9 0-10.49 4.43-10.49 10.5 0 5.8 4.43 10.58 10.46 10.64" fill="#3186ff"></path><path d="M29.33 23.1c4.41 0 7.6-3.23 7.6-7.72 0-4.4-3.12-7.67-7.6-7.67-4.23 0-7.57 3-7.57 7.67 0 4.45 3.15 7.73 7.57 7.73m0-2.68c-2.68 0-4.56-2.2-4.56-5.04s1.98-4.99 4.56-4.99c2.73 0 4.57 2.2 4.57 5 0 2.87-1.88 5.03-4.57 5.03" fill="#fc413d"></path><path d="M45.76 23.1c4.44 0 7.6-3.24 7.6-7.72 0-4.4-3.12-7.67-7.6-7.67-4.24 0-7.57 3-7.57 7.67 0 4.45 3.15 7.73 7.57 7.73m0-2.68c-2.68 0-4.56-2.2-4.56-5.04s1.98-4.99 4.56-4.99c2.73 0 4.57 2.2 4.57 5 0 2.87-1.88 5.03-4.57 5.03" fill="#ffbe00"></path><path d="M61.77 29.2q7.18 0 7.17-8.22V8.23h-2.93v1.8h-.06c-.92-1.43-2.66-2.23-4.62-2.23-4.24 0-6.82 3.23-6.82 7.54 0 4.3 2.51 7.46 6.93 7.46a5.5 5.5 0 0 0 4.47-2.26h.1v1.31c0 2.9-1.5 4.6-4.29 4.6-1.82 0-3.03-1-3.92-2.68l-2.66 1.17c1.4 2.96 3.4 4.26 6.63 4.26m0-9.2c-2.59 0-4.24-1.9-4.24-4.75 0-2.74 1.64-4.71 4.25-4.71s4.23 1.83 4.23 4.7c0 2.9-1.7 4.76-4.24 4.76" fill="#3186ff"></path><path d="M74.3 2.41h-3.08v20.23h3.08z" fill="#00af57"></path><path d="M83.4 23.08a7.4 7.4 0 0 0 6.34-3.52l-2.3-1.5a4.8 4.8 0 0 1-3.9 2.2 4.6 4.6 0 0 1-3.99-2.4l10.33-4.39a7 7 0 0 0-.28-1.07c-1.23-3.16-3.38-4.6-6.28-4.6-4.42 0-7.43 3.22-7.43 7.68 0 4.56 3.17 7.6 7.5 7.6m-4.51-7.61v-.17c0-2.93 1.68-4.9 4.32-4.9 1.26 0 2.39.57 3.15 1.9z" fill="#fc413d"></path></svg>
               <div className="bottominfo"><img src="/images/startgoogle.webp"></img> <span>4.4/5</span></div>
              <div>
        
             
              </div>
            </div>

            <div className="trust-card">
            <img src="/images/trust (1).webp"></img>
              <div className="bottominfo">
              <img src="./images/star5.webp"></img>
                <span>4.4/5</span>
              </div>
            </div>

           

          </div>

          {/* Buttons */}

          <div className="cta-buttons1">

            <a href="/contact-us" className="btn-primary">
              Schedule a Call →
            </a>

        
          </div>

        </div>

        {/* RIGHT */}

        <div className="cta-right">

         <div className="person-card">
  <Slider {...settings}>
    {teamImages.map((img, index) => (
      <div key={index}>
        <img
          src={img}
          alt={`Team ${index + 1}`}
          className="person-image"
        />
      </div>
    ))}
  </Slider>
     


          </div>

        </div>

      </div></div>

    </section>
  
  </>

  );
}