import React from "react";

const team = [
  {
    id: 1,
    name: "Ishita Rao",
    role: "Senior GEO Strategist",
    image: "https://virtualassistant24x7.com/wp-content/uploads/2026/07/TEAM-11.webp",
     price: "$12/hr",
  },
    {
    id: 2,
    name: "Ronak Singh",
    role: "Rendering & VFX Specialist",
    image: "https://virtualassistant24x7.com/wp-content/uploads/2026/04/team-1.webp",
     price: "$8/hr",
  },
    {
    id: 3,
    name: "Kabir Malhotra",
    role: "Digital PR & AI Citations Specialist",
    image: "	https://virtualassistant24x7.com/wp-content/uploads/2026/07/Kabir-Malhotra.webp",
     price: "$10/hr",
  },
  {
    id: 4,
    name: "Aditi Gupta",
    role: "Lead Outreach Specialist  ",
    image: "https://virtualassistant24x7.com/wp-content/uploads/2026/03/aDITI.webp",
     price: "$8/hr",
  },
  {
    id: 5,
    name: "Amit Raghavan",
    role: "Performance Marketing Expert",
    image: "https://virtualassistant24x7.com/wp-content/uploads/2026/03/Team2-2.webp",
     price: "$5/hr",
  },
  {
    id: 6,
    name: "Rahul Singh",
    role: "Influencer Outreach Specialist",
    image: "https://virtualassistant24x7.com/wp-content/uploads/2026/02/TEAM2.webp",
     price: "$7/hr",
  },
  {
    id: 7,
    name: "Keshav Kumar",
    role: "Remarketing & Audience Strategist",
    image: "https://virtualassistant24x7.com/wp-content/uploads/2026/01/Keshav-Kumar-1.webp",
     price: "$8/hr",
  },
  {
    id: 8,
    name: "Aditi Sinha",
    role: "Ad Copy & Creative Expert",
    image: "https://virtualassistant24x7.com/wp-content/uploads/2026/01/Aditi-Sinha-1.webp",
     price: "$7/hr",
  },
  {
    id: 9,
    name: "Amit Patel",
    role: "Google Ads Campaign Specialist",
    image: "	https://virtualassistant24x7.com/wp-content/uploads/2026/01/TEam-image-1024-51.webp",
     price: "$8/hr",
  },
  {
    id: 10,
    name: "Kritika Nair",
    role: "Content Strategy & SEO Specialist",
    image: "	https://virtualassistant24x7.com/wp-content/uploads/2026/03/Team1.webp",
     price: "$7/hr",
  },
    {
    id: 11,
    name: "Rishi Pathak",
    role: "Social Media & Email Content Expert",
    image: "https://virtualassistant24x7.com/wp-content/uploads/2026/03/team6-1.webp",
     price: "$8/hr",
  },
   {
    id: 12,
    name: "Aarav Mehta",
    role: "Senior Game Designer ",
    image: "https://virtualassistant24x7.com/wp-content/uploads/2026/05/Arav.webp",
     price: "$8/hr",
  },
    {
    id: 13,
    name: "Nisha Gupta",
    role: "Virtual Financial Controller ",
    image: "https://virtualassistant24x7.com/wp-content/uploads/2026/07/d-18.webp",
     price: "$8/hr",
  },{
    id: 14,
    name: "Rohan Deshmukh",
    role: "GEO Content & Schema Specialist ",
    image: "	https://virtualassistant24x7.com/wp-content/uploads/2026/07/Rohan-Deshmukh.webp",
     price: "$9/hr",
  },
];

const leftColumn = [...team, ...team, ...team];
const rightColumn = [...team].reverse();
const rightCards = [...rightColumn, ...rightColumn, ...rightColumn];

export default function VerticalTeamSlider({ profiles = [] }) {
    
  return (
    <>
      <style>{`
       *{
  margin:0;
  padding:0;
  box-sizing:border-box;
}
.price-badge{
    position: absolute;
    top: 16px;
    left: 16px;
    background: linear-gradient(135deg,#1565ff,#4f8cff);
    color: #fff;
    padding: 8px 14px;
    border-radius: 999px;
    font-size: 14px;
    font-weight: 700;
    line-height: 1;
    z-index: 10;
    box-shadow: 0 10px 25px rgba(21,101,255,.35);
    letter-spacing: .3px;
    transition: .3s ease;
  
}

.team-card:hover .price-badge{
    transform: translateY(-2px) scale(1.05);
    box-shadow: 0 16px 35px rgba(21,101,255,.45);
}
.team-wrapper{
  position:relative;
  width:100%;
  height:850px;
  overflow:hidden;

  padding:20px;
}

.team-grid{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:24px;
  height:100%;
}

.column{
  position:relative;
  overflow:hidden;
  height:100%;
}

.track{
  display:flex;
  flex-direction:column;
  gap:20px;
}

.track.up{
  animation:moveUp 60s linear infinite;
}

.track.down{
  animation:moveDown 60s linear infinite;
}

.column:hover .track{
  animation-play-state:paused;
}

.team-card{
    background: #fff;
    border-radius: 8px;
    text-align: center;
    transition: .35s;
    border: 1px solid #efefef;
}

.team-card:hover{
  transform:translateY(-6px);
  box-shadow:0 20px 50px rgba(0,0,0,.15);
}

.column:nth-child(2){
    padding-top:120px;
}
.team-card{
    position:relative;
    background:#fff;
    border-radius:20px;
    padding:2px;
}

.team-card::before{
    content:"";
    position:absolute;
    inset:0;
    border-radius:20px;
    padding:1px;
    background:linear-gradient(135deg,#1565ff,#4f8cff,#9cc3ff);
    -webkit-mask:
        linear-gradient(#fff 0 0) content-box,
        linear-gradient(#fff 0 0);
    -webkit-mask-composite:xor;
    mask-composite:exclude;
    pointer-events:none;
}
.team-card h3{
    font-size: 17px;
    color: #111827;
    margin-bottom: 8px;
    margin-top: 20px;
}

.team-card p {
    color: #0036ca;
    font-size: 13px;
    margin-top:5px
}

.fade-top{
  position:absolute;
  left:0;
  top:0;
  width:100%;
  height:120px;
  z-index:5;
  pointer-events:none;
  
}

.fade-bottom{
  position:absolute;
  left:0;
  bottom:0;
  width:100%;
  height:120px;
  z-index:5;
  pointer-events:none;
  background:linear-gradient(rgba(247,248,252,0),#f7f8fc);
}

@keyframes moveUp{

  from{
    transform:translateY(0);
  }

  to{
    transform:translateY(-50%);
  }

}

@keyframes moveDown{

  from{
    transform:translateY(-50%);
  }

  to{
    transform:translateY(0);
  }

}

@media(max-width:768px){

.team-wrapper{
height:650px;
}

.team-grid{
gap:14px;
}

.team-card{
padding:18px;
border-radius:18px;
}

.team-card img{
width:70px;
height:70px;
}

.team-card h3{
font-size:16px;
}

.team-card p{
font-size:13px;
}

}
.team-card img {
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
}@media (max-width:768px){

.team-wrapper{
    height:auto;
    overflow:hidden;
    padding:20px 0;
}

.team-grid{
    display:block;
}

.column:nth-child(2){
    display:none;
}

.column{
    overflow:hidden;
}

.track.up{
    display:flex;
    flex-direction:row;
    gap:16px;
    width:max-content;
    animation:scrollLeft 30s linear infinite;
}

.team-card{
    min-width:260px;
    max-width:260px;
    flex-shrink:0;
}
.track.down .price-badge {
    right: 16px !important;
    left: auto;
}
.team-card img{
    width:100%;
    height:240px;
    object-fit:cover;
}

@keyframes scrollLeft{
    from{
        transform:translateX(0);
    }
    to{
        transform:translateX(-50%);
    }
}

}
      `}</style>

      <section className="team-wrapper">

        <div className="fade-top"></div>
        <div className="fade-bottom"></div>

        <div className="team-grid">

          {/* LEFT COLUMN */}
          <div className="column">

            <div className="track up">

              {leftColumn.map((item, index) => (
                <div className="team-card" key={index}>
 <div className="price-badge">
  {item.price}
</div>
                  <img src={item.image} alt={item.name} />

                  <h3>{item.name}</h3>

                  <p>{item.role}</p>

                </div>
              ))}

            </div>

          </div>

          {/* RIGHT COLUMN */}
          <div className="column">

            <div className="track down">

              {rightCards.map((item, index) => (
                <div className="team-card" key={index}>
<div className="price-badge">
  {item.price}
</div>
                  <img src={item.image} alt={item.name} />

                  <h3>{item.name}</h3>

                  <p>{item.role}</p>

                </div>
              ))}

            </div>

          </div>

        </div>

      </section>
    </>
  );
}