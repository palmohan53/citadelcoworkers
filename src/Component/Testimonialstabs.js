// Testimonials.jsx
// NOTE: This is a starter component generated for your project.
// Replace the WrittenReviews array with your own reviews if needed.

import { useState } from "react";
import Slider from "react-slick";

import VideoTestimonial from "./VideoTestimonial";

const reviews = [
  {

    name: "Daniel Mitchell",
    role: "Australia",
    smalltext:"Professional Services Firm",
    avatar: "https://virtualassistant24x7.com/wp-content/uploads/2026/07/s-19.webp",
    imgreview: "/images/star5.webp",
    title: "Perplexity Was Describing Our Firm With Outdated Facts",

    experienceDate: "March 17, 2025",
    review:
      "AI assistants were citing a years-old version of our service line and pricing. CCW's team corrected our entity footprint across the web, refreshed our cornerstone pages with dated, sourced facts, and now monitors how every major platform describes us month to month.",
  },

  {

    name: "Charlotte Bennett",
    role: "UK",
    avatar: "	https://virtualassistant24x7.com/wp-content/uploads/2026/07/New-Project-14.webp",
    imgreview: "/images/star5.webp",
    title: "AI Overviews Was Not Mentioning Us While Answering Questions ",
 smalltext:"D2C Skincare Brand ",
    experienceDate: "March 17, 2025",
    review:
      "Google's AI Overviews covered our category's biggest questions while citing publishers, not brands. After schema implementation and question-led restructuring of our education hub, our pages began earning Overview citations on our highest-intent queries.",
  },
    {

    name: "Daniel Forsyth",
    role: "Australia",
    avatar: "https://virtualassistant24x7.com/wp-content/uploads/2026/04/Matthew-Brooks.webp",
    imgreview: "/images/star5.webp",
    title: "Great Concept But Incomplete Player Experience.",
 smalltext:"Indie Game Studio ",
    experienceDate: "March 17, 2025",
    review:
      "With no dedicated game designer on the team, the studio faced launch without a GDD, a designed onboarding flow or a cohesive UI system. CCW embedded a game designer and UI designer from pre-production through to ship. They launched on schedule and players specifically called out the polish in their reviews.",
  },
    {

    name: "Ethan Brooks",
    role: "USA",
    avatar: "	https://virtualassistant24x7.com/wp-content/uploads/2026/07/New-Project-13.webp",
    imgreview: "/images/star5.webp",
    title: "ChatGPT Was Recommending Every Competitor Except Us",
 smalltext:"B2B SaaS Platform ",
    experienceDate: "March 17, 2025",
    review:
      "Vendor-comparison prompts named three rivals and never us, even though we outranked them on Google. CCW's GEO specialist rebuilt our comparison pages answer-first, fixed our entity data and grew our review footprint and within a quarter we were appearing in the majority of our tracked shortlist prompts.",
  },
   {

    name: "Brendan  Thomas",
    role: "UK",
    avatar: "	https://virtualassistant24x7.com/wp-content/uploads/2026/05/TEST-2.webp",
    imgreview: "/images/star5.webp",
    title: "Strong Acquisition With Weak Conversion",
 smalltext:"F2P RPG Publisher  ",
    experienceDate: "March 17, 2025",
    review:
      "Misaligned soft/hard currency split and a poorly timed IAP store were killing conversion but the publisher had no F2P economy designer to see it. CCW restructured the currency architecture, redesigned the store UI and built a battle pass aligned to their player segments. Revenue per user improved within the first live-ops cycle.",
  },
   {

    name: "Michael Torres",
    role: "UK",
    avatar: "		https://virtualassistant24x7.com/wp-content/uploads/2026/06/New-Project-12.webp",
    imgreview: "/images/star5.webp",
    title: "The Logo Was Built, But The Animation Strategy Wasn’t",
 smalltext:"Fintech Startup  ",
    experienceDate: "March 17, 2025",
    review:
      "Our founding team had invested in a strong static identity but had no motion design capability and no brief for how the logo should behave across YouTube, social and pitch decks. CCW designed the animated logo, built the YouTube intro sequence and delivered the full social animation package. Giving the brand the motion language it needed before launch day. ",
  },
];

export default function TestimonialsTabs() {
  const [tab, setTab] = useState("videos");

  const reviewSlider = {
    dots: true,
    arrows: false,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } }
    ]
  };

  return (
       <>
       <style>{`
       /* Testimonials.css */

.ts-heading{text-align:center;margin-bottom:30px}
.ts-tabs button {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 14px 26px;
    border: 0;
    border-radius: 999px;
    background: #b9caf9;
    color: #000;
    cursor: pointer;
    font-weight: 600;
    font-size: 14px;
    letter-spacing: 1px;
}
.ts-tabs .stars img {
    width: 40%;
}
.ts-tabs{display:flex;justify-content:center;gap:16px;margin-bottom:40px;flex-wrap:wrap}
section.ts-wrap .vt-section.pp-slider .sectionHeading.text-center {
    display: none;
}
section.ts-wrap .vt-section.pp-slider {
    padding-top: 0;
}
.ts-tabs button.active{background:#1749d5;color:#fff}
.desktop-review-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px}
.review-card{background:#fff;border-radius:18px;padding:24px}
.stars{color:#f5b301;font-size:20px;margin-bottom:10px}
.review-user{display:flex;gap:12px;align-items:center;margin-top:18px}
.avatar{width:48px;height:48px;border-radius:50%;background:#111;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700}
.review-user h4{margin:0}
.review-user span{font-size:13px;color:#666}
.mobile-review-slider{display:none}
@media(max-width:767px){
.ts-tabs {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4px;
    margin-bottom: 21px;
}

.ts-tabs button {
    font-size: 12px;
    padding: 11px;
}
.desktop-review-grid{display:none}
.mobile-review-slider{display:block}
.ts-wrap{padding:60px 0}
}
.review-card{

background:#fff;

border:1px solid #e8e8e8;

border-radius:18px;

padding:28px;

transition:.35s;

height:100%;

}

.review-card:hover{

transform:translateY(-8px);

box-shadow:0 20px 50px rgba(0,0,0,.08);

}

.review-top{

display:flex;

justify-content:space-between;

align-items:center;

margin-bottom:20px;

border-bottom:1px solid #eee;

padding-bottom:18px;

}

.review-user{

display:flex;

align-items:center;

gap:14px;

margin-top:0;

}

.review-avatar{

width:58px;

height:58px;

border-radius:50%;

object-fit:cover;

}

.review-user h4{

margin:0;

font-size:18px;

color:#111;

}

.review-user span{

display:block;

margin-top:4px;

font-size:14px;

color:#777;

}

.review-top small{

color:#777;

font-size:13px;

}

.stars{

margin:18px 0 10px;

}

.stars img{

width:120px !important;

}
.review-bottom span {
    font-size: 12px;
    color: #666;
    background: #e7e7e6;
    padding: 7px;
    border-radius: 7px;
}
.review-card h3{

font-size:18px;

margin:5px 0;

color:#111;

line-height:1.3;

}

.review-card p{

white-space:pre-line;



line-height:1.8;

color:#444;

margin:0;

}.review-bottom{
    margin-top:25px;
    padding-top:18px;
    border-top:1px solid #ececec;
}

.review-bottom span{
    font-size:14px;
    color:#666;
}

.review-bottom strong{
    color:#222;
    font-weight:600;
}.card-ne {
    height: 100%;
}
       `}</style>
 
    <section className="ts-wrap ">
      <div className="container">
        <div className="ts-heading sectionHeading text-center">
          <h2>Real Voices, Real Results</h2>
          <p>Hear directly from clients who partnered with Citadel Coworkers.</p>
        </div>

        <div className="ts-tabs ">
          <button
            className={tab==="videos" ? "active":""}
            onClick={()=>setTab("videos")}
          >
            <svg viewBox="0 0 24 24" width="18" height="18"><path fill="currentColor" d="M8 5v14l11-7z"/></svg>
            <span>Client Stories</span>
          </button>
          <button
            className={tab==="reviews" ? "active":""}
            onClick={()=>setTab("reviews")}
          >
            <svg viewBox="0 0 24 24" width="18" height="18"><path fill="currentColor" d="M4 4h16v12H7l-3 3z"/></svg>
            <span>Client Reviews</span>
          </button>

          
        </div>

        {tab==="reviews" && (
          <>
           <Slider {...reviewSlider} className="review-slider pp-slider">
  {reviews.map((r, i) => (
    <div key={i} className="card-ne">
      <div className="review-card">

     <div className="review-top">
  <div className="review-user">
    <img src={r.avatar} className="review-avatar" alt={r.name} />

    <div>
      <h4>{r.name}</h4>
      <span>{r.role}</span>
    </div>
  </div>


</div>

<div className="stars">
  <img src={r.imgreview} alt="" />
</div>

<h3>{r.title}</h3>

<p>{r.review}</p>

<div className="review-bottom">
  <span>
   <strong>{r.smalltext}</strong>
  </span>
</div>

    

      </div>
    </div>
  ))}
</Slider>

  
          </>
        )}

        {tab==="videos" && <VideoTestimonial />}
      </div>
    </section>
     </>
  );
}
