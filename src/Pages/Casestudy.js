import React from "react";

const CaseStudiesPage = () => {
    const caseStudies = [
  {
    id: 2,
    title: "Building an Undetectable Offshore Sales Team for a US Insurance Brokerage",
    category: "Healthcare",
    description:
      " From a single outbound hire to a fully owned sales cycle in just three months with zero red flags raised.",
    image: "https://virtualassistant24x7.com/wp-content/uploads/2026/07/dobe-21.png",
    color: "#F4F2FF",
    accent: "#1749d5",
    url:"citadelcoworkers.com/case-study/burnt-orange-benefits",
  },
  {
    id: 3,
    title: "Rebuilding a Specialty Practice's Entire Insurance Workflow",
    category: "Healthcare",
    description:
      "From a front desk stretched thin to a fully managed insurance function, front-to-back handled entirely by one embedded specialist.",
    image: "https://virtualassistant24x7.com/wp-content/uploads/2026/07/ng-4.webp",
    color: "#F4F2FF",
    accent: "#1749d5",
     url:"citadelcoworkers.com/case-study/ng-vascular",
  },
  {
    id: 4,
    title: " Launching an AI-First Hiring Platform From the Ground Up",
    category: "Business",
    description:
      "Created a ground-up brand and website build for an AI-powered candidate-assessment platform, positioning it as a faster, more accurate alternative to resume screening.",
    image: "https://virtualassistant24x7.com/wp-content/uploads/2026/07/flash.webp",
    color: "#F4F2FF",
    accent: "#1749d5",
     url:"https://www.citadelcoworkers.com/case-study/flashiring",
  },
  {
    id: 5,
    title: "Building a Digital Front Door for a Virtual-Staffing Brand",
    category: "Remote Teams",
    description:
      "Built a conversion-focused website and mobile experience built to turn virtual-assistant searches into booked discovery calls.",
    image: "https://virtualassistant24x7.com/wp-content/uploads/2026/07/vri.webp",
    color: "#F4F2FF",
    accent: "#1749d5",
     url:"https://www.citadelcoworkers.com/case-study/virtualassistantseo",
  },
  {
    id: 6,
    title: " Bringing Financial Clarity to a 50+ Year Logistics Business",
    category: "Logistics",
    description:
      "Embedded finance and accounting support for a long-established warehousing and logistics provider, keeping the books as reliable as the operation itself.",
    image: "https://virtualassistant24x7.com/wp-content/uploads/2026/07/tri.webp",
    color: "#F4F2FF",
    accent: "#1749d5",
     url:"citadelcoworkers.com/case-study/trigen-logistics",
  },
  {
    id: 7,
    title: "Turning the Books Into a Growth Advantage",
    category: "Business",
    description:
      "Dedicated finance and accounting support built around the pace of a growing brand, so the founders could focus on product instead of paperwork.",
    image: "https://virtualassistant24x7.com/wp-content/uploads/2026/07/rhy.webp",
    color: "#F4F2FF",
    accent: "#1749d5",
     url:"citadelcoworkers.com/case-study/rhythm-superfoods",
  },
];
   
  const previews = [
    {
      id: 1,
      title: "Adinath Enterprise",
      image:
        "https://virtualassistant24x7.com/wp-content/uploads/2026/02/ad-1.webp",
      className: "preview previewOne",
    },
    {
      id: 2,
      title: "Burnt Orange Benefits",
      image:
        "https://virtualassistant24x7.com/wp-content/uploads/2026/07/dobe-21.png",
      className: "preview previewTwo",
    },
    {
      id: 3,
      title: "NG Vascular",
      image:
        "https://virtualassistant24x7.com/wp-content/uploads/2026/07/ng-4.webp",
      className: "preview previewThree",
    },
  ];

  return (
      <>
      <style>{`
      /*==========================
CASE HERO
===========================*/

.caseHero{
    position:relative;
    overflow:hidden;
    background:
    radial-gradient(circle at 85% 35%,rgba(37,99,235,.28),transparent 45%),
    radial-gradient(circle at 70% 65%,rgba(37,99,235,.18),transparent 35%),
    linear-gradient(135deg,#06162F 0%,#0A204A 55%,#081832 100%);
    padding:110px 0 90px;
}
.caseStudiesSection{

    background:#efefef;
}

.caseStudiesSection .container{
    max-width:1380px;
    margin:auto;
    padding:0 20px;
}

/*==========================================
HEADING
==========================================*/

.sectionHeading{
    text-align:center;
    max-width:760px;
    margin:0 auto 70px;
}

.sectionHeading span{
    display:inline-block;
    padding:8px 18px;
    background:#EEF4FF;
    color:#2563EB;
    border-radius:40px;
    font-size:13px;
    font-weight:700;
    letter-spacing:.12em;
    margin-bottom:20px;
}

.sectionHeading h2{
    font-size:52px;
    line-height:1.1;
    font-weight:800;
    color:#0F172A;
    margin-bottom:18px;
}

.sectionHeading p{
  
    line-height:32px;
    color:#64748B;
}

/*==========================================
GRID
==========================================*/

.caseGrid{

    display:grid;

    grid-template-columns:repeat(2,1fr);

    gap:28px;

}

/*==========================================
CARD
==========================================*/

.caseCard{

    position:relative;

    border-radius:34px;

    overflow:hidden;

    display:grid;

    grid-template-columns:42% 58%;

    align-items:center;

    min-height:310px;

    padding:38px;

    transition:.45s;

    border:1px solid rgba(15,23,42,.05);

}

.caseCard:hover{

    transform:translateY(-10px);

    box-shadow:
    0 35px 80px rgba(15,23,42,.10);

}

/* Featured Cards */

.caseCard.featured{

    grid-column:span 2;

    grid-template-columns:38% 62%;

    min-height:360px;

}

/*==========================================
LEFT
==========================================*/

.cardContent{

    position:relative;
    z-index:2;

}

.caseNo {
    font-size: 12px;
    font-weight: 700;
    display: block;
    margin-bottom: 18px;
    width: 30px;
    height: 30px;
    background: #1749d5;
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
}

.cardContent h3{

     font-size: 24px;
    line-height: 1.15;
    color: #0F172A;
    margin-bottom: 5px;

}

.cardContent p{



    line-height:28px;

    color:#64748B;

    margin-bottom:28px;

}

.cardContent a{

    text-decoration:none;

    font-weight:700;

    transition:.3s;

}

.cardContent a:hover{

    letter-spacing:.04em;

}

/*==========================================
RIGHT
==========================================*/

.cardImage{

    display:flex;

    justify-content:center;

    align-items:center;

}

.cardImage img{

    width:100%;
    border-radius: 28px;
    max-width:460px;

    transition:.5s;

}

.caseCard:hover img{

    transform:scale(1.05);

}
.caseHero::before{
content:"";
position:absolute;
inset:0;
background-image:
radial-gradient(rgba(255,255,255,.07) 1px,transparent 1px);
background-size:26px 26px;
opacity:.45;
pointer-events:none;
}

.container{
max-width:1400px;
margin:auto;
padding:0 20px;
position:relative;
z-index:2;
}
.floatingStat.statTwo {
    width: 150px;
    background: #fff;
    padding: 6px;
    border-radius: 8px;
    z-index: 9;
}
    @media (max-width:768px){

.previewTwo,
.previewThree,
.statOne,
.statTwo,
.statThree,
.statFour,
.circleTwo{
    display:none;
}

.previewOne{
    position:relative;
    top:0;
    right:0;
    left:0;
    width:100%;
    max-width:340px;
    margin:0 auto;
}

.heroRight{
    height:auto !important;
    transform:none;
}
.previewOne
      {
        position: inherit !important;
         width: 100% !important;
}
}
.heroGrid{
display:grid;
grid-template-columns:48% 52%;
align-items:center;
gap:90px;
}

.heroLeft{
position:relative;
z-index:2;
}

.heroBadge{
display:inline-flex;
align-items:center;
gap:10px;
padding:10px 20px;
border-radius:100px;
background:rgba(255,255,255,.08);
border:1px solid rgba(255,255,255,.08);
color:#fff;
font-size:13px;
letter-spacing:.14em;
font-weight:600;
margin-bottom:30px;
}

.heroLeft h1{
font-size:82px;
color:#fff;

font-weight:800;
margin-bottom:30px;
}

.heroLeft h1 span{
color:#2F6DFF;
}

.heroLeft p{

color:rgba(255,255,255,.75);

}

.heroBtn{
display:inline-flex;
align-items:center;
gap:15px;
padding:18px 34px;
background:#2563EB;
color:#fff;
text-decoration:none;
border-radius:100px;
font-weight:600;
transition:.35s;
}

.heroBtn:hover{
background:#1D4ED8;
transform:translateY(-4px);
box-shadow:0 18px 45px rgba(37,99,235,.35);
}

.heroStats{
margin-top:65px;
display:grid;
grid-template-columns:repeat(4,1fr);
gap:28px;
}

.statItem{
border-left:1px solid rgba(255,255,255,.12);
padding-left:22px;
}

.statItem h3{
font-size:40px;
font-weight:700;
color:#fff;
margin-bottom:10px;
}

.statItem p{
font-size:15px;
line-height:24px;
color:rgba(255,255,255,.65);
margin:0;
}

/*==========================
RIGHT SIDE
===========================*/

.heroRight{
position:relative;
height:820px;
}

.circleOne{
position:absolute;
right:40px;
top:10px;
width:520px;
height:520px;
border-radius:50%;
background:radial-gradient(circle,#2563EB 0%,transparent 70%);
filter:blur(70px);
opacity:.45;
}

.circleTwo{
position:absolute;
right:120px;
top:120px;
width:360px;
height:360px;
border:1px solid rgba(255,255,255,.08);
border-radius:50%;
}

/*==========================
PREVIEW CARDS
===========================*/

.preview{
position:absolute;
background:#fff;
border-radius:28px;
padding:18px;
box-shadow:0 40px 90px rgba(0,0,0,.18);
overflow:hidden;
transition:.4s;
}

.preview:hover{
transform:translateY(-8px);
}

.preview img{
width:100%;
display:block;
border-radius:16px;
}

.previewHeader{
display:flex;
align-items:center;
gap:12px;
margin-bottom:16px;
}

.previewNumber{
width:34px;
height:34px;
display:flex;
align-items:center;
justify-content:center;
background:#2563EB;
color:#fff;
border-radius:50%;
font-size:13px;
font-weight:700;
}

.previewHeader h4{
font-size:18px;
font-weight:700;
color:#111827;
margin:0;
}
.grid{
display:grid;
grid-template-columns:repeat(3,1fr);
gap:35px;
}

.card{
background:#fff;
border-radius:28px;
overflow:hidden;
border:1px solid #edf2f7;
transition:.4s;
}

.card:hover{
transform:translateY(-10px);
box-shadow:0 30px 70px rgba(0,0,0,.12);
}

.image{
overflow:hidden;
aspect-ratio:16/10;
}

.image img{
width:100%;
height:100%;
object-fit:cover;
transition:.6s;
}

.card:hover img{
transform:scale(1.08);
}

.content{
padding:30px;
}

.top{
display:flex;
justify-content:space-between;
align-items:center;
margin-bottom:18px;
}

.number{
font-size:14px;
font-weight:700;
color:#1565ff;
letter-spacing:.18em;
}

.category{
background:#eef4ff;
padding:6px 12px;
border-radius:100px;
font-size:12px;
font-weight:600;
color:#1565ff;
}

h3{
font-size:30px;
margin-bottom:18px;
color:#111827;
}

.desc{
color:#6b7280;
line-height:30px;
margin-bottom:28px;
}

.footer{
display:flex;
justify-content:space-between;
align-items:center;
padding-top:20px;
border-top:1px solid #eee;
}

.read{
display:flex;
align-items:center;
gap:12px;
font-weight:700;
text-decoration:none;
color:#1565ff;
}

.arrow{
width:44px;
height:44px;
background:#1565ff;
border-radius:50%;
display:flex;
align-items:center;
justify-content:center;
color:#fff;
transition:.3s;
}

.card:hover .arrow{
transform:translateX(5px);
}

@media(max-width:1100px){

.grid{
grid-template-columns:repeat(2,1fr);
}

.hero h1{
font-size:48px;
}

}

@media(max-width:768px){

.grid{
grid-template-columns:1fr;
}

.hero h1{
font-size:36px;
}

.hero p{
font-size:17px;
line-height:30px;
}

}
/*==========================
CARD POSITIONS
===========================*/

.previewOne{
width:360px;
right:70px;
top:10px;
    animation: float 6s ease-in-out infinite;
z-index:5;
}

.previewTwo{
width:380px;
    animation: float 6s ease-in-out infinite;
left:0;
top:260px;
z-index:4;
}

.previewThree{
width:360px;
right:0;
    animation: float 6s ease-in-out infinite;
bottom:40px;
z-index:5;
}

/*==========================
FLOATING STATS
===========================*/

.floatingStat{
position:absolute;

padding:18px 24px;
border-radius:22px;
display:flex;
align-items:center;
gap:14px;

font-size:14px;
font-weight:600;
color:#111827;
animation:float 6s ease-in-out infinite;
}

.floatingStat strong{
padding:14px 18px;
border-radius:18px;
min-width:180px;
gap:10px;
}

.floatingStat span{
display:block;
font-size:13px;
color:#6B7280;
}

.statOne{
left:-20px;
top:50px;
}
.floatingStat.statOne {
    width: 200px;
}
.statTwo{
right:-40px;
top:110px;
}

.statThree{
left:80px;
bottom:90px;
}

.statFour{
right:-70px;
bottom:140px;
}

@keyframes float{

0%{
transform:translateY(0);
}

50%{
transform:translateY(-12px);
}

100%{
transform:translateY(0);
}

}

/*==========================
BACKGROUND BLUR
===========================*/

.heroBlur{
position:absolute;
width:450px;
height:450px;
background:#2563EB;
border-radius:50%;
filter:blur(160px);
opacity:.15;
left:-150px;
top:-120px;
}

.heroBlur2{
right:-120px;
left:auto;
bottom:-180px;
top:auto;
opacity:.12;
}

/*==========================
RESPONSIVE
===========================*/

@media(max-width:1100px){

.heroGrid{
grid-template-columns:1fr;
gap:20px;
}

.heroRight{
height:760px;
margin-top:60px;
}

.heroStats{
grid-template-columns:repeat(2,1fr);
}

.heroLeft h1{
font-size:58px;
}

}

@media(max-width:768px){

.caseHero{
padding:70px 0;
}

.heroLeft h1{
font-size:42px;
}

.heroLeft p{
font-size:17px;
line-height:30px;
}

.heroStats{
grid-template-columns:1fr;
}

.heroRight{
height:700px;
transform:scale(.75);
transform-origin:top center;
}

}

/*==============================
FEATURED CASE STUDY
==============================*/

.featuredCase{
    position:relative;

    background:
    linear-gradient(180deg,#F8FAFC 0%,#FFFFFF 100%);
    overflow:hidden;
}
    .deviceWrap img {
    border-radius: 10px;
    border: 2px solid #00cc8357;
}

.featuredContainer{

   
    background: #eeeffd;
    padding: 40px;
    border-radius: 40px;
    display:grid;
    grid-template-columns:1fr 1fr;

    gap:80px;

    align-items:center;

  

}

/*==============================
LEFT
==============================*/

.featuredContent{

position:relative;
z-index:5;

}

.featuredLabel{

display:inline-flex;

align-items:center;

padding:10px 18px;

background:#EEF4FF;

border-radius:100px;

font-size:13px;

font-weight:700;

letter-spacing:.14em;

color:#1D4ED8;

margin-bottom:28px;

}

.featuredContent h2{

    font-size: 30px;



font-weight:800;



color:#0F172A;

margin-bottom:8px;

}



/*==============================
STATS
==============================*/

.featuredStats{

display:flex;

align-items:center;

gap:30px;

margin-bottom:60px;

}

.stat{

display:flex;

flex-direction:column;

}

.stat h3{

font-size:32px;

font-weight:800;

    color: #1749d5;

margin-bottom:10px;

}

.stat span{

font-size:15px;

color:#64748B;

line-height:24px;

}

.divider{

width:1px;

height:60px;

background:#E2E8F0;

}

/*==============================
BUTTON
==============================*/

.featuredBtn{

display:inline-flex;

align-items:center;

gap:18px;

padding:20px 34px;

    background: #1749d5;

color:#fff;

text-decoration:none;

font-weight:600;

border-radius:100px;

transition:.35s;

}

.featuredBtn span{

transition:.35s;

}

.featuredBtn:hover{

transform:translateY(-5px);

box-shadow:

0 30px 70px rgba(15,23,42,.18);

}

.featuredBtn:hover span{

transform:translateX(6px);

}
      `}</style>
    <section className="caseHero">

      <div className="heroBlur"></div>
      <div className="heroBlur heroBlur2"></div>

      <div className="container">

        <div className="heroGrid">

          {/* LEFT */}

          <div className="heroLeft">

            <span className="heroBadge">
              ● CASE STUDIES
            </span>

            <h1>
              Work Behind Every 
              <br />
              <span>Client's Growth</span>
            </h1>

            <p>
             Explore how we've helped businesses across industries solve complex challenges, streamline operations, and achieve measurable growth.
            </p>

         

      

          </div>

          {/* RIGHT */}

          <div className="heroRight">

            <div className="circleOne"></div>
            <div className="circleTwo"></div>

            <div className="floatingStat statOne">
            <img src="https://virtualassistant24x7.com/wp-content/uploads/2026/07/ranking-1-1.webp"></img>
            </div>

            <div className="floatingStat statTwo">
           <img src="https://virtualassistant24x7.com/wp-content/uploads/2026/07/trust.webp"></img>
            </div>

            <div className="floatingStat statThree">
         
            </div>

          

            {previews.map((item) => (
              <div
                className={item.className}
                key={item.id}
              >
             

                <img
                  src={item.image}
                  alt={item.title}
                />

              </div>
            ))}

          </div>

        </div>

      </div>

    </section>

    <section className="featuredCase">
<div className="container">
      <div className="featuredContainer">

        {/* LEFT */}

        <div className="featuredContent">

          <span className="featuredLabel">
            FEATURED CASE STUDY
          </span>

          <h2>
             Invisible to In-Demand: Building a Digital Presence for a B2B Manufacturer
          </h2>

          <p>
           A complete digital overhaul that turned a hidden manufacturer into a searchable industry name.
          </p>

          <div className="featuredStats">

            <div className="stat">

              <h3>+187%</h3>

              <span>
                Organic Traffic
              </span>

            </div>

            <div className="divider"></div>

            <div className="stat">

              <h3>+143%</h3>

              <span>
                Keyword Rankings
              </span>

            </div>

            <div className="divider"></div>

            <div className="stat">

              <h3>Top 3</h3>

              <span>
                Google Rankings
              </span>

            </div>

          </div>

          <a
            href="/case-study/adinathenterprises"
            className="featuredBtn"
          >
            View Full Case Study
            <span>→</span>
          </a>

        </div>

        {/* RIGHT */}

        <div className="featuredVisual">

          {/* Background Glow */}

    


          {/* Main Laptop */}

          <div className="deviceWrap">

            <img
              src="https://virtualassistant24x7.com/wp-content/uploads/2026/02/ad-1.webp"
              alt="Adinath Enterprise"
            />

          </div>

         

          {/* SEO Badge */}

     

        </div>

      </div>
</div>
    </section>

<section className="caseStudiesSection">

  <div className="container">

    <div className="sectionHeading">

      <span>MORE CASE STUDIES</span>

      <h2>Explore More Success Stories</h2>

      <p>
        Every project reflects a different challenge, strategy, and measurable business outcome.
      </p>

    </div>

    <div className="caseGrid">

      {caseStudies.map((item) => (

        <article
          key={item.id}
          className={`caseCard ${item.featured ? "featured" : ""}`}
    style={{ background: item.color }}
        >

          <div className="cardContent">

            <span
              className="caseNo bg"
             
            >
              {String(item.id).padStart(2, "0")}
            </span>

            <h3>{item.title}</h3>

            <p>{item.description}</p>

            <a
              href={item.url}
              style={{ color: item.accent }}
            >
              View Case Study →
            </a>

          </div>

          <div className="cardImage">

            <img
              src={item.image}
              alt={item.title}
            />

          </div>

        </article>

      ))}

    </div>

  </div>

</section>

      </>
  );
};

export default CaseStudiesPage;