import React from "react";


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
    `}</style>

    <section className="conclusion">
      <div className="container">

        {/* LEFT SIDE */}
        <div className="left">

          <span className="tag">
            BUILD YOUR REMOTE TEAM
          </span>

          <h2>
          Every System Still Needs a Team Behind It.
          </h2>

      

          <a href="/contact" className="btn">
        Let's Build Yours

            <span>
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14" />
                <path d="M13 5l7 7-7 7" />
              </svg>
            </span>
          </a>

        </div>

        {/* RIGHT SIDE */}

        <div className="right">
         <img src="https://virtualassistant24x7.com/wp-content/uploads/2026/07/globe.webp"></img>
        </div>

      </div>
    </section>
  </>

  );
}