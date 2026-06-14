import React from "react";
import "../Component/css/Systemlandingpage.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
const SystemlandingPage = () => {

    const settings2 = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
	arrows: false,
    responsive: [
      {
        breakpoint: 992,
        settings: { slidesToShow: 1}
      },
      {
        breakpoint: 576,
        settings: { slidesToShow: 1 }
      }
    ]
  };

 let settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
    };
  return (
    <>
      <style>{`


/* =========================
   MOBILE RESPONSIVE FIXES
========================= */

@media (max-width: 991px){

  .hero-title{
    font-size:52px;
    line-height:1.15;
  }



  .systems-grid,
  .chaos-top{
    grid-template-columns:1fr;
    gap:50px;
  }

  .chaos-grid-3{
    grid-template-columns:1fr 1fr;
  }

  .process-grid{
    grid-template-columns:1fr 1fr;
  }

  .benefits-grid{
    grid-template-columns:1fr;
  }

  .comparison-header,
  .comparison-row{
    grid-template-columns:1fr;
  }

  .comparison-center,
  .middle-divider{
    display:none;
  }

  .comparison-cell{
    border-bottom:1px solid #d6cfbf;
  }

  .comparison-row{
    border-bottom:8px solid #ece7dc;
  }

}


@media (max-width: 768px){
.chaos-card {
    padding-left: 0 !important;
    padding-right: 0 !important;;
}
    .chaos-grid-3 {
    margin-top: 0px;
}
  body{
    overflow-x:hidden;
  }

 

  /* HERO */

  section.hero-section{
    padding:70px 0;
  }

  .hero-title{
    font-size:38px;
    line-height:1.2;
    margin-bottom:20px;
  }

  .hero-desc{
    font-size:16px;
    line-height:1.8;
  }

  .mini-text{
    font-size:10px;
    letter-spacing:1.5px;
    padding:8px 14px;
  }

  .hero-btns{
    display:flex;
    flex-direction:column;
    gap:14px;
  }

  .hero-btn,
  a.btn-outline{
    width:100%;
    justify-content:center;
    text-align:center;
    margin-left:0;
  }

  .stats-wrapper{

    gap:18px;
    margin-top:40px;
  }

  .stat-item{
    width:100%;
  }

  .stat-number{
    font-size:38px;
  }

  /* SECTION SPACING */

  .chaos-section,
  .systems-section,
  .process-section,
  .systems-results-section,
  section.citadel-testimonial,
  section.last-sec{
    padding-top:70px;
    padding-bottom:70px;
  }

  /* HEADINGS */

  .chaos-title,
  .process-heading,
  .main-heading{
    font-size:38px;
    line-height:1.2;
  }

  /* CHAOS SECTION */

  .chaos-grid,
  .chaos-grid-3{
    grid-template-columns:1fr;
    margin-top:40px;
  }



  .card-number{
    font-size:38px;
  }

  .card-title{
    font-size:22px;
  }





  .cta-box{
    flex-direction:column;
    align-items:flex-start;
    padding:22px;
  }

  /* SHIFT SECTION */

  .systems-grid{
    grid-template-columns:1fr;
    gap:40px;
    margin-top:35px;
  }

  .lead-text,
  .muted-text,
  .bold-text{
    font-size:16px;
    line-height:1.9;
  }

  .comparison-box{
    padding:18px;
  }

  .comparison-row{
    flex-direction:column;
    align-items:flex-start;
    gap:8px;
    background:#fff;
  }

  /* PROCESS */


  .timeline-line{
    display:none;
  }

  .step-title{
    font-size:22px;
  }

  /* RESULTS TABLE */

  .comparison-wrapper{
    margin-top:40px;
  }

  .comparison-header div{
    font-size:10px;
    letter-spacing:2px;
    padding:14px 16px;
  }

  .comparison-cell{
    font-size:14px;
    line-height:1.7;
    padding:16px;
  }

  .arrow-circle{
    width:24px;
    height:24px;
    font-size:13px;
  }

  /* BENEFITS */

  .benefits-grid{
    grid-template-columns:1fr;
    gap:20px;
  }

  .benefit-card{
    padding:24px 20px;
  }

  .benefit-title{
    font-size:21px;
  }

  /* TESTIMONIALS */

  .testimonial-card{
    padding:28px 20px;
  }

  .client-img{
    width:55px;
    height:55px;
  }

  .quote{
    width:40px;
    height:40px;
    left:15px;
  }

  /* INDUSTRIES */

  .industryBoxInr{
    padding:22px 18px;
  }

  .chaos-card-3 {
    padding-left: 0 !important;
    padding-right: 0 !important;;
}
      .systems-section{
        padding:70px 18px 60px;
      }

      .main-heading{
        font-size:42px;
        letter-spacing:-1px;
        line-height:1.1;
        margin-bottom:50px;
      }

      .lead-text{
        font-size:18px;
        line-height:1.8;
      }

      .muted-text{
        font-size:16px;
        line-height:1.9;
      }

      .bold-text{
        font-size:18px;
      }

      .comparison-box{
        padding:18px;
      }

      .comparison-row{
        flex-direction:column;
        align-items:flex-start;
        gap:10px;
      }

      .comparison-title{
        min-width:auto;
      }

      .comparison-text{
        font-size:13px;
      }

      .final-line{
        font-size:20px;
      }
	  
	  
 .comparison-wrapper.for-mobile {
    display: block !important;
}
    .comparison-wrapper.for-desk {
    display: none;
}
    .stats-strip {
    display: inline-block;
}
    .chaos-card {
    padding-left: 0;
    padding-right: 0;
}
.chaos-top,.chaos-grid
      {
margin-bottom:0px !important}
.chaos-grid
      {
margin-top:0px !important}
.stat-text {
    color: #000;
    font-size: 12px !important;
    line-height: 1.7;
    text-align: center;
}
     .hero-content {
    float: left;
    width: 100%;
}
a.btn-outline {
    margin: 0 !important;
}
    .chaos-card:nth-child(3),.chaos-card-3:nth-child(4), .chaos-card-3:nth-child(5){
    border-bottom: 1px solid #d8d1c7 !important;
}

    .chaos-grid-3 {
    grid-template-columns: 1fr !important;
            margin-top: 0;
}
      .problem-grid{
        grid-template-columns:1fr;
      }

      .problem-card{
        border-right:none !important;
        border-bottom:1px solid rgba(214,181,88,0.35);
        padding:30px 22px;
        min-height:auto;
      }

      .problem-card:last-child{
        border-bottom:none;
      }

      .problem-number{
        font-size:42px;
      }

      .problem-title{
        font-size:24px;
        margin-bottom:16px;
      }

      .problem-text{
        font-size:16px;
        line-height:1.8;
      }

      .bottom-box{
        margin-top:24px;
        padding:28px 22px;
      }

      .bottom-box p{
        font-size:18px;
        line-height:1.9;
      }
	  
	   .chaos-section{
        padding:70px 18px 50px;
      }

      .chaos-title{
              font-size: 35px !important;
        line-height: 53px !important;
      }
    .process-grid {
        grid-template-columns: 1fr !important;
    }
      .chaos-right p{
        font-size:16px;
        line-height:1.9;
      }

   

      .card-number{
        font-size:42px;
      }

      .card-title,.step-title{
        font-size:20px;
    
      }
   .systems-results-section{
        padding:20px 16px 60px;
      }

   body{
   padding-top:0px;}

      .comparison-header div{
        padding:16px 18px;
        font-size:10px;
        letter-spacing:3px;
      }

      .benefit-title{
        font-size:20px;
      }

}


       .process-section{
     width: 100%;
    padding: 90px 20px 100px;
    background: #f5f7fb;
    }

    
 .quote {
    align-items: center;
    background: #00cc83;
    border-radius: 50%;
    display: flex;
    height: 45px;
    justify-content: center;
    left: 20px;
    position: absolute;
    top: -15px;
    width: 45px;
}
    section.citadel-testimonial .slick-list {
    padding-top: 40px;
}
     .client-info {
    align-items: center;
    color: #000;
    display: flex;
    gap: 12px;
    margin-top: 15px;
}
     .client-img {
    border: 2px solid #3b82f6;
    border-radius: 50%;
    height: 65px;
    object-fit: cover;
    width: 65px;
}
.testimonial-card {
    background: #f5f7fb;
    border: 1px solid #ffffff26;
    border-left: 5px solid #00cc83;
    border-radius: 16px;
    padding: 40px;
    padding-bottom: 10px !important;
    position: relative;
    text-align: left;
}
    .process-container{
      max-width:1180px;
      margin:auto;
    }

    /* top label */

    .section-label{
      display:flex;
      align-items:center;
      gap:16px;
      margin-bottom:55px;
    }

    .section-label .line{
      width:32px;
      height:1px;
      background:#b7862d;
    }

    .section-label p{
      font-size:11px;
      letter-spacing:4px;
      text-transform:uppercase;
      color:#b7862d;
      font-weight:500;
    }

    /* heading */

    .process-heading{
      font-family:Georgia, serif;
      font-size:72px;
      line-height:1.15;
      font-weight:400;
      margin-bottom:80px;
      color:#111;
    }

    .process-heading em{
      color:#b7862d;
      font-style:italic;
      font-weight:400;
    }

    /* timeline */

    .timeline-wrapper{
      position:relative;
      padding-top:30px;
          margin-top: 25px;
    }

    .timeline-line{
      position:absolute;
      top:52px;
      left:50px;
      right:50px;
      height:1px;
      background:#e2d7bf;
      z-index:1;
    }

    .process-grid{
      display:grid;
      grid-template-columns:repeat(4,1fr);
      gap:55px;
      position:relative;
      z-index:2;
    }

    .process-card{
      position:relative;
    }

    /* number box */

    .step-box{
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

    /* title */

    .step-title{
      font-size:22px;
      font-weight:500;
      margin-bottom:15px;
      color:#111;
    }

    /* text */

    .step-text{
      
      line-height:1.9;
      color:#000;
 
    }

    /* responsive */

    @media(max-width:1100px){

      .process-grid{
        grid-template-columns:repeat(2,1fr);
      }

      .timeline-line{
        display:none;
      }
    }
.comparison-wrapper.for-mobile {
    display: none ;
}
  
      .process-section{
        padding:70px 18px 70px;
      }
     

      .process-heading{
        font-size:44px;
        margin-bottom:50px;
      }


      .step-title{
        font-size:24px;
      }
        section.hero-section .container {
    position: relative;
}
section.last-sec {
    background: background: #f5f7fb;
    background: #f5f7fb;
}


      .step-box{
        width:42px;
        height:42px;
        font-size:20px;
      }
    }
     .hero-section{
  
      display:grid;
   
 
    }
     .chaos-card-3:nth-child(3n) {
    border-right: none;
}
    .chaos-card-3:nth-child(4), .chaos-card-3:nth-child(5), .chaos-card-3:nth-child(6){
     border-bottom: none;
    }

      .svg-card-3 svg {
    align-items: center;
    background: #c5e2dd;
    border-radius: 10px;
    display: flex;
    height: 50px;
    justify-content: center;
    padding: 10px;
    width: 50px;
    margin-bottom: 20px;
}
.chaos-card-3 {
    padding: 55px 36px 50px;
    border-right: 1px solid #d8d1c7;
    border-bottom: 1px solid #d8d1c7;
}
    .chaos-grid-3 {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    border-left: 1px solid transparent;
    margin-top: 64px;
}

          .problem-grid{
      display:grid;
      grid-template-columns:repeat(4,1fr);
    border: 1px solid rgb(0 204 131);
    }
p.problem-text {
    margin-bottom: 0px !important;
}
    .problem-card{
      padding:42px 32px;
      border-right:1px solid rgba(214,181,88,0.35);
  
      position:relative;
    }

    .problem-card:last-child{
      border-right:none;
    }

    .problem-number{
     font-size: 42px;
    font-weight: 500;
    color: rgb(23 73 213 / 6%);
    margin-bottom: 8px;
    line-height: 1;
    }

    .problem-title{
      font-size: 19px;
    color: #1749d5;
    margin-bottom: 8px;
    font-weight: 500;
    letter-spacing: 0.2px;
    }


    .bottom-box{
      margin-top:48px;
      border:1px solid rgba(214,181,88,0.35);
      padding:48px 42px;
      background:rgba(255,255,255,0.01);
    }

    .bottom-box p{
      font-size:26px;
      line-height:2;
      color:rgba(255,255,255,0.92);
    }

  

    /* Tablet */
    @media(max-width:1200px){
      .problem-grid{
        grid-template-columns:repeat(2,1fr);
      }

      .problem-card:nth-child(2){
        border-right:none;
      }

      .problem-card{
        border-bottom:1px solid rgba(214,181,88,0.35);
      }

      .problem-card:nth-child(3),
      .problem-card:nth-child(4){
        border-bottom:none;
      }
    }

  
      section.hero-section {
    background: #fdfbf7;
        position: relative;
}
.stats-wrapper {
    display: flex;
    gap: 40px;
    margin-top: 26px;
}
    /* LEFT SIDE */


      .systems-section{
      position:relative;
      z-index:2;
      padding:90px 20px 80px;
    }

    .systems-container{
      max-width:1240px;
      margin:auto;
    }

    /* heading */

    .main-heading{
      font-size:84px;
      line-height:1.05;
      font-weight:300;
      letter-spacing:-2px;
      margin-bottom:90px;
      color:#f5f5f5;
    }

    .main-heading .blue{
      color:#3d5afe;
      display:block;
    }

    /* content */

    .systems-grid{
      display:grid;
      grid-template-columns:1fr 1fr;
      gap:90px;
      align-items:flex-start;
	      margin-top: 50px;
    }

    /* label */

    .section-label{
      display:flex;
      align-items:center;
      gap:14px;
      margin-bottom:40px;
    }

    .section-label .line{
      width:32px;
      height:1px;
      background:#3d5afe;
    }

    .section-label p{
      font-size:11px;
      letter-spacing:4px;
      text-transform:uppercase;
      color:#3d5afe;
      font-weight:500;
    }

    /* text */

    .lead-text{
      font-size:23px;
      line-height:1.75;
      color:#ffffff;
      margin-bottom:42px;
      font-weight:300;
    }

    .muted-text{
      font-size:19px;
      line-height:1.95;
      color:rgba(255,255,255,0.48);
      margin-bottom:42px;
      font-weight:300;
    }

    .bold-text{
      font-size:21px;
      line-height:1.8;
      color:#ffffff;
      font-weight:400;
    }

    /* right side */

    .italic{
      font-style:italic;
      color:rgba(255,255,255,0.6);
    }

    .highlight{
      color:#3d5afe;
    }

    /* comparison box */

    .comparison-box{
      border:1px solid rgba(255,255,255,0.08);
      margin:40px 0 42px;
      padding:22px 26px;
      background:rgba(255,255,255,0.01);
    }

    .comparison-row{
      display:flex;
      align-items:center;
      gap:18px;
      padding:18px 0;
      border-bottom:1px solid rgba(255,255,255,0.08);
    }

    .comparison-row:last-child{
      border-bottom:none;
    }

    .comparison-title{
      min-width:110px;
      font-size:14px;
      letter-spacing:1px;
    }

    .comparison-title.red{
      color:#ff4b4b;
    }

    .comparison-title.blue{
      color:#3d5afe;
    }

    .arrow{
      color:rgba(255,255,255,0.4);
      font-size:20px;
    }

    .comparison-text{
      color:rgba(255,255,255,0.75);
      font-size:15px;
      line-height:1.8;
      font-family: monospace;
    }

    /* final line */

    .final-line{
      font-size:24px;
      line-height:1.8;
      color:#ffffff;
      font-weight:300;
    }

    /* responsive */

    @media(max-width:991px){

      .main-heading{
        font-size:58px;
        margin-bottom:70px;
      }

      .systems-grid{
        grid-template-columns:1fr;
        gap:30px;
      }
        
    }

   

    .mini-text{
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
        align-items: center;
    gap: 10px;
    }

    .mini-text span.line{
      width:32px;
      height:1px;
      background:#183f2f;
      display:block;
    }
span.colredtext {
    color: #1749d5;
  
    font-weight: 700;
}
    .hero-title{
   
      font-size:70px;
  
      font-weight:500;
      
      margin-bottom:32px;
    }

    .hero-title .highlight{
      color:#b17a18;
      font-style:italic;
    }

    .hero-desc{
    
      line-height:1.9;
      color:#000;
    
      margin-bottom:42px;
    }
section.hero-section:before {
    content: "";
    position: absolute;
    inset: 0;
    background-image: linear-gradient(rgba(177, 122, 24, 0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(177, 122, 24, 0.10) 1px, transparent 1px);
    background-size: 40px 40px;
    opacity: 0.3;
}
    .hero-btn{
        transition: 0.3s ease;
    align-items: center;
    background: #00cc83;
    border: 1px solid #0000;
    border-radius: 0px;
    color: #fff !important;
    display: inline-flex;
    gap: 10px;
       padding: 1rem 2.5rem;
    position: relative;
    text-transform: uppercase;
    white-space: nowrap;
    z-index: 1;
    }

    .hero-btn:hover{
      transform:translateY(-2px);
    }

    /* RIGHT SIDE */

    .hero-right{
      position:relative;
      background:#13100c;
      overflow:hidden;
      display:flex;
      align-items:center;
      justify-content:center;
    }

    /* GRID BG */



    .stats-card{
      position:relative;
      width:430px;
      border:1px solid rgba(177,122,24,0.28);
      padding:42px;
      background:rgba(255,255,255,0.02);
      backdrop-filter:blur(3px);
      z-index:2;
    }

    .stats-title{
      font-size:12px;
      letter-spacing:3px;
      text-transform:uppercase;
      color:#b17a18;
      line-height:1.8;
      margin-bottom:40px;
    }

    .stat-item{
      padding:20px 0;
  
    }

    .stat-item:last-child{
      border-bottom:none;
      padding-bottom:0;
    }

    .stat-number{
   
      font-size: 52px;
    color: #f4f0ea;
    margin-bottom: 8px;
    font-weight: 500;
    color: #1749d5;
    font-weight: 700;
    }

    .stat-text{
      color:#000;
      font-size:16px;
      line-height:1.7;
    }

    /* RESPONSIVE */

    @media(max-width:1100px){

      .hero-section{
        grid-template-columns:1fr;
      }

      .hero-left{
        padding:80px 30px;
      }

      .hero-right{
        min-height:700px;
        padding:50px 25px;
      }

      .hero-title{
        font-size:58px;
      }

      .stats-card{
        width:100%;
        max-width:450px;
      }

    }

    @media(max-width:600px){

      .hero-title{
        font-size:48px;
      }

      .hero-desc{
        font-size:17px;
      }

      .hero-btn{
        width:100%;
        justify-content:center;
      }

      .stats-card{
        padding:28px;
      }

      .stat-number{
        font-size:30px;
        text-aliign:center;
      }
        .stat-item {
    text-align: center;
}

    }

    a.btn-outline {
    display: inline-block;
    background: transparent;
    font-weight: 500;
    padding: 1rem 2.5rem;
    text-decoration: none;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    border: 1px solid #00cc83;
    margin-left: 1rem;
    transition: border-color 0.2s, color 0.2s;
    cursor: pointer;
    color: #00cc83;
}
  .chaos-section{
      width:100%;
      padding:100px 20px 80px;
    }

    .chaos-container{
      max-width:1150px;
      margin:auto;
    }

    /* top section */

    .chaos-top{
      display:grid;
      grid-template-columns:1fr 
      gap:120px;
      align-items:center;
          width: 100%;
    float: left;
      margin-bottom:90px;
    }

    .mini-heading{
      display:flex;
      align-items:center;
      gap:14px;
      margin-bottom:35px;
    }

    .mini-heading span.line{
      width:32px;
      height:1px;
      background:#b98b2e;
      display:block;
    }

    .mini-heading p{
      font-size:11px;
      letter-spacing:4px;
      text-transform:uppercase;
      color:#b98b2e;
      font-weight:500;
    }
.chaos-card:nth-child(4), .chaos-card:nth-child(3) {
    border-bottom: navajowhite;
}
    .chaos-title{
   
      font-size:60px;
      line-height:1.1;
      font-weight:400;
      color:#111;
    }

    .chaos-title em{
    color: #1749d5;
    font-style: italic;
    font-weight: bold;
    }

    .chaos-right p{
  
      line-height:2;
      color:#222;
      margin-bottom:0px;
      font-weight:300;
    }

    /* cards */

    .chaos-grid{
      display:grid;
      grid-template-columns:1fr 1fr;

      border-left:1px solid transparent;
          margin-top: 64px;
    }

    .chaos-card{
      padding:55px 36px 50px;
      border-right:1px solid #d8d1c7;
      border-bottom:1px solid #d8d1c7;
    }

    .chaos-card:nth-child(2n){
      border-right:none;
    }

    .card-number{
  
      font-size:56px;
         color: #1749d53d;
      margin-bottom:18px;
      line-height:1;
      font-weight:400;
    }

    .card-title{
      font-size: 20px;
    margin-bottom: 5px;
    font-weight: bold;
    color: #111;

    }

    .card-text{
    
      line-height:2;
      color:#000;
      font-weight:300;
    }

    /* responsive */

    @media(max-width:991px){

      .chaos-top{
        grid-template-columns:1fr;
        gap:50px;
      }

      .chaos-title{
        font-size:56px;
      }

      .chaos-grid{
        grid-template-columns:1fr;
      }

      .chaos-card{
        border-right:none !important;
      }
    }

  
.cta-box {
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 30px;
    border-radius: 16px;
    background: #f5f7fb;
    margin-top: 40px;
    border-left: 4px solid #2563eb;
}
    section.shift-section {
    background: #fdfbf7;
    position: relative;
}

.mini-text-heading {
    color: #1749d5;
    display: inline-flex;
    font-size: 17px;
    letter-spacing: 2px;
    margin-bottom: 30px;
    padding: 10px 18px;
    text-transform: uppercase;
    align-items: center;
    gap: 10px;
}
.mini-text-heading .line {
    width: 32px;
    height: 1px;
    background: #1749d5;
    display: block;
}

    .systems-results-section{
      width:100%;
      padding:40px 20px 90px;
    }

    .systems-results-container{
      max-width:1600px;
      margin:auto;
    }

    /* comparison table */
section.Results {
    background: #fdfbf7;
    position: relative;
}
    .comparison-wrapper{
      border:1px solid #d6cfbf;
      overflow:hidden;
      background:#f7f3ea;
          margin-top: 64px;
    }

    .comparison-header{
      display:grid;
      grid-template-columns:1fr 30px 1fr;
      background:#f1ede4;
      border-bottom:1px solid #d6cfbf;
    }

    .comparison-header div{
      padding:18px 28px;
      font-size:11px;
      letter-spacing:4px;
      text-transform:uppercase;
    }

    .before-heading{
      color:#6c6c6c;
    }

.after-heading {
    color: #fff;
    background: #1749d5;
}

    .middle-divider{
      background:#d7d1c4;
    }

    /* rows */

    .comparison-row{
      display:grid;
      grid-template-columns:1fr 30px 1fr;
   padding-left:10px;
   padding-right:10px;
      border-bottom:1px solid #d6cfbf;
          padding-top: .0;
    padding-bottom: 0;
    }

    .comparison-row:last-child{
      border-bottom:none;
    }

    .comparison-cell{
    
      display:flex;
      align-items:center;
      font-size:15px;
      line-height:1.7;
      color:#1f1f1f;
  
    }

    .comparison-center{
 background: #d7d1c4;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    height: 100%;
    }

    .arrow-circle{
      width:28px;
      height:28px;
      border-radius:50%;
       color: #1749d5;
      display:flex;
          background: #fff;
      align-items:center;
      justify-content:center;
  
      font-size:16px;
      font-weight:600;
      box-shadow:0 0 0 1px rgba(0,0,0,0.03);
    }
      .comparison-cell:nth-child(even){
    background:red;
}
   .comparison-cell{
      display: flex;
    align-items: center;
    line-height: 1.7;
    color: #1f1f1f;
    padding-top: 15px;
    padding-bottom: 15px;
      }
    /* bottom cards */

    .benefits-grid{
      display:grid;
      grid-template-columns:repeat(3,1fr);
      gap:32px;
      margin-top:20px;
    }
h3.key-out {
    font-size: 23px;
    margin-top: 39px;
    text-transform: capitalize;
    color: #1749d5;
}
    .benefit-card{
         border-top: 2px solid #183f2f;
    background: #efefef;
    border-radius: 10px;
    padding: 30px;
    }
.benefit-card svg {
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
    .benefit-title{
         font-size: 22px;
    font-weight: 500;
    margin-bottom: 15px;
    color: #111;
    }

 

    /* responsive */

    @media(max-width:1100px){

      .benefits-grid{
        grid-template-columns:1fr;
      }
    }

    @media(max-width:900px){

      .comparison-header,
      .comparison-row{
        grid-template-columns:1fr;
      }

      .middle-divider,
      .comparison-center{
        display:none;
      }

      .comparison-cell{
        border-bottom:1px solid #d6cfbf;
      }

      .comparison-row .comparison-cell:last-child{
        border-bottom:none;
      }

     
    }

   
      section.citadel-testimonial {
    padding-bottom: 100px;
}

.ba-table {
    margin-top: 3rem;
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    gap: 0;
    background:#d8d2c4;
    border: 1px solid #d8d2c4;
    border-radius: 3px;
    overflow: hidden;
}
    .ba-arrow {
    width: 28px;
    height: 28px;
    background: #FFFFFF;
    border: 1px solid #D8D2C4;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 6px 0;
    flex-shrink: 0;
}
.ba-arrow svg {
    width: 12px;
    height: 12px;
    color: ;
}
    .ba-header {
    padding: 1rem 1.75rem;
    font-size: 0.7rem;
    font-weight: 500;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    border-bottom: 1px solid #d8d2c4;
}
.ba-col {
    background: #fff;
    padding: 0;
}

.ba-header.before {
    color: #9A9488;
    background: #F8F6F2;
}

.ba-header.after {
       color: #fff;
    background: #1749d5;
}

.ba-item {
    padding: 1rem 1.75rem;
    font-size: 0.875rem;
    color: #000;
    border-bottom: 1px solid #d8d2c4;
    line-height: 1.6;
}
.ba-divider {
    background: #D8D2C4;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 1px;
    gap: 0;
}

.ccgrid {
    display: flex;
    flex-direction: column;
    gap: 2px;
}
.col-heads {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2px;
    margin-bottom: 2px;
}
.ccgrid .row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2px;
}
.ccgrid .cell-b {
    background: #F7F6F3;
}

.ch-a {
    background: #085041;
    color: #9FE1CB;
}
.cell-a {
    background: #0F6E56;
}
.ch-b {
    background: #E8E6E0;
    color: #5F5E5A;
}
.ch {
      padding: 24px 24px;
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.1em;
    text-transform: uppercase;
}
.ccgrid .cell {
    padding: 22px 24px;
}
      `}</style>

      <div className="Systemlandingpage">

<section class="hero-section">

<div class="container">

  <div class="hero-left1">

    <div class="hero-content">

      <div class="mini-text">
     
        OPERATIONAL SYSTEMS FOR GROWING BUSINESSES
                    </div>
                    
      <h1 class="hero-title">
        Strong Systems Build <br/>
         <span class="colredtext">Strong Businesses</span> 
        
      </h1>

      <p class="hero-desc">
        From chaos in your head to systems that scale effortlessly — 
        so your business runs smoothly without you running everything.
      </p>
<div class ="hero-btns">


      <a href="/contact-us" class="hero-btn">
        BOOK A FREE DISCOVERY CALL
        <span>➜</span>
      </a>

    </div>
</div>
  </div>

</div>



                </section>
                

<section class="chaos-section">

  <div class="container">

  

    <div class="chaos-top">

      <div class="chaos-left">

        <div class="mini-text">
      
          The Real Problem
                                    </div>
                                    
<h2 class="chaos-title">
          Chaos <em>Behind</em>  <br></br>The Scenes
        </h2>
  <p>
          You’re working harder. But your business isn’t growing. It’s not a lack of talent or market. It’s what is falling through the cracks while you’re busy keeping everything else together. 

        </p>
                                </div>

    

                            </div>


    <div class="chaos-grid">

      <div class="chaos-card">

        <div class="card-number">01</div>

        <h3 class="card-title">Dropped Leads</h3>

        <p class="card-text">
          A warm enquiry comes in on a busy day. You mean to reply but get pulled away. Three days later they've gone with someone else — and you never knew you lost them. That's not carelessness. That's a missing system.
        </p>

                        </div>
                        
      <div class="chaos-card">

        <div class="card-number">02</div>

        <h3 class="card-title">Missed Follow-Ups</h3>

        <p class="card-text">
          The proposal was out, the relationship was strong. But the week happened and that critical check-in kept getting postponed. The client didn't just feel abandoned — they felt forgotten. That's the difference between closing and losing.
        </p>

                                </div>

      <div class="chaos-card">

        <div class="card-number">03</div>

        <h3 class="card-title">Chaotic Operations</h3>

        <p class="card-text">
          There's no process — there's you and a team that asks before doing almost anything. Every delegation becomes a briefing. Every handoff becomes a follow-up. The bottleneck is structural, not personal.
        </p>

                            </div>

      <div class="chaos-card">

        <div class="card-number">04</div>

        <h3 class="card-title">Owner Dependency</h3>

        <p class="card-text">
          You've hit the ceiling — not because of the market, but because you personally can't carry any more. Every new client adds weight. Every new hire adds coordination. You're scaling effort, not building leverage.
        </p>

                                </div>

                            </div>
<div class="cta-box"><div class="content">
  <p>Most owners try to solve this by hiring more people, working longer hours or switching to the next productivity tool. It doesn’t hold. You end up with a bigger payroll, less sleep and the same structural gaps but at higher price. The chaos didn’t come from a lack of effort, it comes from building without a foundation. 
</p></div></div>
                                </div>

</section>

    <section className="industriesServed about-us">
                    <div className="SingleSliderContainer a">
                        <div className="sectionHeading">
                            
                            <h2>Industries We Serve</h2>
                            </div>
<Slider {...settings}>
                            <div className="industryBox">
                                <div className="industryBoxInr">
                                                                        <h3>IT & Software Development</h3>
                                    <p>Web & app developers, software engineers, QA testers.</p>
                                    <Link to='/services' className="lineBtn">View More</Link>
                                </div>
                            </div>
<div className="industryBox">
                                <div className="industryBoxInr">
                                    <h3>Finance & Accounting </h3>
                                    <p>CPAs, bookkeepers, financial analysts.</p>
                                    <Link to='/services' className="lineBtn">View More</Link>
                                </div>
                            </div>
                            <div className="industryBox">
                                <div className="industryBoxInr">
                                    <h3>Marketing & Branding </h3>
                                    <p>SEO experts, digital marketers, and content writers.</p>
                                    <Link to='/services' className="lineBtn">View More</Link>
                                </div>
                            </div>
                            <div className="industryBox">
                                <div className="industryBoxInr">
                                    <h3>Graphic & UI/UX Design </h3>
                                    <p>Web designers, motion graphic artists, and branding experts.</p>
                                    <Link to='/services' className="lineBtn">View More</Link>
                                </div>
                            </div>
                            <div className="industryBox">
                                <div className="industryBoxInr">
                                    <h3>Legal Process Outsourcing </h3>
                                    <p>Paralegals, legal researchers, case managers.</p>
                                    <Link to='/services' className="lineBtn">View More</Link>
                                </div>
                            </div>
                            <div className="industryBox">
                                <div className="industryBoxInr">
                                    <h3>Customer Support & Virtual Assistance </h3>
                                    <p>Admin support, sales support, help desk professionals.</p>
                                    <Link to='/services' className="lineBtn">View More</Link>
                                </div>
                            </div>
                        </Slider>
                        <div className="bgImg">
                            <img src="/images/sky-bg.png" alt="Industries We Serve"/>
                        </div>
                    </div>
                </section>

                <section className="shift-section">
                    <div className="container">
                        <div className="mini-text">
  
          The shift
                                </div>
<h2 class="chaos-title">The Shift From More Effort To <br></br><em>Better Systems </em>
</h2>

 <div class="systems-grid">
  <div class="systems-left">
<div class="mini-text-heading"> <span class="line"></span> What Systems Actually Replace
                            </div>
                            <p>An operational system replaces you as the person everything depends on. Not your vision, not your decisions but just your constant presence in the operational details that should actually have been running without you.  
</p>
<p>The emails still go out, all your leads still get followed up, and the numbers are still tracked. You just stop being the reason those things happen and start being free to do the things that only you can do for your business. 

</p>
<p>Having operational systems in place doesn’t make businesses impersonal but rather they make them reliable. And reliability is what clients trust, teams follow and growth actually needs. 
</p>

                            </div>
<div class="systems-right">
<div class="mini-text-heading"> <span class="line"></span> The Mindset That Changes Everything
</div>
<p>The owners who break through the ceiling stop asking “how do I get more done?” and start asking “how does this happen without me?” It might sound small, but it rewrites the whole business. 

</p>
<p>More effort can sometimes feel like a treadmill. You can run faster all you want but the floor stays the same. Systems are like a strong foundation. You can build up from them instead of running in place. 
</p>
<p>The business that runs when you step back isn’t luxury, it’s the only version of a business worth building. 
</p>

   </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="container">
                        <div className="mini-text">
                            
          What we build
                        </div>
                        
		<h2 class="chaos-title">What Citadel Coworkers Actually <br></br><em>Build For You</em></h2>
                            <p>
		We don’t just add a resource in your team. We build the systems first, the processes, the workflows and the structure and after that we put a trained VA inside it to ensure accurate execution. 

		</p>
                                <div class="chaos-grid-3">
  
  <div class="chaos-card-3">
                                    <div class="svg-card-3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-message-square w-5 h-5 text-primary mb-6 group-hover:scale-110 transition-transform"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg></div>
  <h3 class="card-title">Client Communication</h3>
  <p>Your responses, follow-ups and all client facing updates go out consistently. You no longer have to draft them, approve them or chase them. Your clients experience a business that’s always on. </p>
  
                                </div>

  
    <div class="chaos-card-3">
  <div class="svg-card-3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-target w-5 h-5 text-primary mb-6 group-hover:scale-110 transition-transform"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg></div>
  <h3 class="card-title">Lead Follow-Up</h3>
  <p>Every lead, every warm prospect, every paused conversion gets the right touchpoint at the right time. Not because someone remembered, but because the system ensures it happens. 

 </p>
  
                            </div>
  
  

  
  
    <div class="chaos-card-3">
  <div class="svg-card-3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-settings2 w-5 h-5 text-primary mb-6 group-hover:scale-110 transition-transform"><path d="M20 7h-9"></path><path d="M14 17H5"></path><circle cx="17" cy="17" r="3"></circle><circle cx="7" cy="7" r="3"></circle></svg></div>
  <h3 class="card-title">Internal Operations</h3>
  <p>Scheduling, task tracking, team coordination, the internal machinery that keeps things moving. It runs through documented processes and not through whoever’s standing closest. 
</p>
  
                                </div>
  
    <div class="chaos-card-3">
  <div class="svg-card-3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chart-column w-5 h-5 text-primary mb-6 group-hover:scale-110 transition-transform"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg></div>
  <h3 class="card-title">Finance & Reporting</h3>
  <p>Bookkeeping, financial tracking and reporting stay up to date continuously. This ensures that month end is a review and not a scramble and the decisions are mode based on real numbers not guesses. 
</p>
  
                            </div>

                            <div class="chaos-card-3">
                                <div class="svg-card-3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eye w-5 h-5 text-primary mb-6 group-hover:scale-110 transition-transform"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg></div>
  <h3 class="card-title">Owner Visibility</h3>
  <p>Clear adn structured reporting gives you full visibility into what’s happening, what’s performing and what needs attention. You are not the one who is required to ensure it runs. 
</p>
  
                                </div>

   <div class="chaos-card-3">
  <div class="svg-card-3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shield-check w-5 h-5 text-primary mb-6 group-hover:scale-110 transition-transform"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg></div>
  <h3 class="card-title">Quality Control</h3>
  <p>Client interaction, internal updates, recurring tasks every output meets the same bar regardless of who executes it or what week it is. Consistency becomes an in-built feature of your team. 

</p>
  
                            </div>
                            

                                </div>

                            </div>
</section>


<section class="process-section" id="process-section">

  <div class="process-container">



    <div class="mini-text">
    
    How It Works
                                </div>

  

    <h2 class="chaos-title">
      From Chaos to a <br></br>
      <em>Running System</em>
    </h2>


    <div class="timeline-wrapper">

      <div class="timeline-line"></div>

      <div class="process-grid">


        <div class="process-card">

          <div class="step-box">I</div>

          <h3 class="step-title">Discovery Call</h3>

          <p class="step-text">
            We map the current state — where leads fall, where operations depend on memory. No audit forms. Just a real conversation about where you're doing the work the business should be doing.
          </p>

                            </div>
                            


        <div class="process-card">

          <div class="step-box">II</div>

          <h3 class="step-title">System Design</h3>

          <p class="step-text">
            We build the proper architecture for your business — workflows, process documentation, tool configuration — before a single person touches execution. The system comes before the team.
          </p>

                                </div>

      

        <div class="process-card">

          <div class="step-box">III</div>

          <h3 class="step-title">Team Deployment</h3>

          <p class="step-text">
            A virtual team trained on your system steps in. Minimal setup time needed from you. They're built to execute the process — not to ask you how things should be done.
          </p>

                            </div>

                            

        <div class="process-card">

          <div class="step-box">IV</div>

          <h3 class="step-title">Ongoing Operations</h3>

          <p class="step-text">
            The system runs. You receive structured reports to stay informed without being involved — and get your attention back for the decisions that actually move the business forward.
          </p>

                                </div>

                            </div>
                            
                                </div>

                            </div>

</section>

<section class="Results">
                            <div className="container">
                                <div class="mini-text">
                                    <span class="line"></span>
   Results 
                                </div>

  

    <h2 class="chaos-title">
      What Life Looks Like After the 
 <br></br>
      <em>CCW Systems </em>are In Place.
    </h2>


<div class="systems-results-container">

 <div class="ccgrid">
    <div class="col-heads">
      <div class="ch ch-b">Before — Running On Extreme Effort</div>
      <div class="ch ch-a">After — Running On CCW Systems</div>
                            </div>

    <div class="row">
      <div class="cell cell-b">
         <div class="icon">	<svg xmlns="http://www.w3.org/2000/svg" 
     width="24" 
     height="24" 
     viewBox="0 0 24 24" 
     fill="none" 
     stroke="currentColor" 
     stroke-width="2" 
     stroke-linecap="round" 
     stroke-linejoin="round">
  <circle cx="12" cy="12" r="9"/>
  <line x1="12" y1="8" x2="12" y2="12"/>
  <line x1="12" y1="16" x2="12.01" y2="16"/>
</svg></div>
        <div class="txt">Leads fall through between a busy week and good intentions</div>
                        </div>
<div class="cell cell-a">
        <div class="icon">	<svg xmlns="http://www.w3.org/2000/svg" 
     width="24" 
     height="24" 
     viewBox="0 0 24 24" 
     fill="none" 
     stroke="currentColor" 
     stroke-width="2" 
     stroke-linecap="round" 
     stroke-linejoin="round">
  <circle cx="12" cy="12" r="9"/>
  <line x1="12" y1="8" x2="12" y2="12"/>
  <line x1="12" y1="16" x2="12.01" y2="16"/>
</svg></div>
        <div class="txt">Every lead caught, tracked and followed up automatically</div>
                    </div>
</div>

    <div class="row">
      <div class="cell cell-b">
        <div class="icon"><i class="ti ti-clock-off" aria-hidden="true"></i></div>
        <div class="txt">Follow-ups happen when you remember — which isn't always</div>
      </div>
      <div class="cell cell-a">
        <div class="icon"><i class="ti ti-clock-check" aria-hidden="true"></i></div>
        <div class="txt">Touchpoints go out on time because the system sends them</div>
      </div>
    </div>

    <div class="row">
      <div class="cell cell-b">
        <div class="icon"><i class="ti ti-user-exclamation" aria-hidden="true"></i></div>
        <div class="txt">Operations run because you personally hold them together</div>
      </div>
      <div class="cell cell-a">
        <div class="icon"><i class="ti ti-settings-automation" aria-hidden="true"></i></div>
        <div class="txt">Operations run through the process — not through your presence</div>
      </div>
    </div>

    <div class="row">
      <div class="cell cell-b">
        <div class="icon"><i class="ti ti-report-money" aria-hidden="true"></i></div>
        <div class="txt">Financials pulled together under pressure at month-end</div>
      </div>
      <div class="cell cell-a">
        <div class="icon"><i class="ti ti-chart-line" aria-hidden="true"></i></div>
        <div class="txt">Numbers are current every week — not just at month-end panic</div>
      </div>
    </div>

    <div class="row">
      <div class="cell cell-b">
        <div class="icon"><i class="ti ti-eye-off" aria-hidden="true"></i></div>
        <div class="txt">Visibility means staying constantly involved</div>
      </div>
      <div class="cell cell-a">
        <div class="icon"><i class="ti ti-eye" aria-hidden="true"></i></div>
        <div class="txt">Clear reports give full visibility without daily involvement</div>
      </div>
    </div>

    <div class="row">
      <div class="cell cell-b">
        <div class="icon"><i class="ti ti-lock" aria-hidden="true"></i></div>
        <div class="txt">Growth capped by how much you can personally carry</div>
      </div>
      <div class="cell cell-a">
        <div class="icon"><i class="ti ti-trending-up" aria-hidden="true"></i></div>
        <div class="txt">The business grows because the floor can hold the weight</div>
      </div>
    </div>

 

  </div>

    <div class="comparison-wrapper for-desk">

 

      <div class="comparison-header">

        <div class="before-heading">
          Before — Running On Extreme Effort
        </div>

        <div class="middle-divider"></div>

        <div class="after-heading">
          After — Running On CCW Systems
        </div>

      </div>



      <div class="comparison-row">

        <div class="comparison-cell">
          Leads fall through between a busy week and good intentions
        </div>

        <div class="comparison-center">
          <div class="arrow-circle">➜</div>
        </div>

        <div class="comparison-cell">
          Every lead is caught, tracked and followed up automatically
        </div>

      </div>

  

      <div class="comparison-row">

        <div class="comparison-cell">
          Follow-ups happen when you remember — which isn't always
        </div>

        <div class="comparison-center">
          <div class="arrow-circle">➜</div>
        </div>

        <div class="comparison-cell">
          Touchpoints go out on time because the system sends them
        </div>

      </div>

  

      <div class="comparison-row">

        <div class="comparison-cell">
          Operations run because you personally hold them together
        </div>

        <div class="comparison-center">
          <div class="arrow-circle">➜</div>
        </div>

        <div class="comparison-cell">
          Operations run through process, not through your presence
        </div>

      </div>



      <div class="comparison-row">

        <div class="comparison-cell">
          Financials pulled together under pressure at month-end
        </div>

        <div class="comparison-center">
          <div class="arrow-circle">➜</div>
        </div>

        <div class="comparison-cell">
          Numbers are current every week — not just at month-end panic
        </div>

      </div>

      

      <div class="comparison-row">

        <div class="comparison-cell">
          Visibility means staying constantly involved
        </div>

        <div class="comparison-center">
          <div class="arrow-circle">➜</div>
        </div>

        <div class="comparison-cell">
          Clear reports give full visibility without daily involvement
        </div>

      </div>

 

      <div class="comparison-row">

        <div class="comparison-cell">
          Growth is capped by how much you can personally carry
        </div>

        <div class="comparison-center">
          <div class="arrow-circle">➜</div>
        </div>

        <div class="comparison-cell">
          The business grows because the floor can hold the weight
        </div>

      </div>

    </div>
	
	
	
	
	
	  <div class="comparison-wrapper for-mobile">

 

      <div class="comparison-header">

        <div class="before-heading">
          Before — Running On Extreme Effort
        </div>

     </div>



      <div class="comparison-row">

        <div class="comparison-cell">
          Leads fall through between a busy week and good intentions
        </div>

       
        

      </div>

  

      <div class="comparison-row">

        <div class="comparison-cell">
          Follow-ups happen when you remember — which isn't always
        </div>

       

       
     

      </div>

  

      <div class="comparison-row">

        <div class="comparison-cell">
          Operations run because you personally hold them together
        </div>

    

   </div>



      <div class="comparison-row">

        <div class="comparison-cell">
          Financials pulled together under pressure at month-end
        </div>

       

      </div>

      

      <div class="comparison-row">

        <div class="comparison-cell">
          Visibility means staying constantly involved
        </div>

       

      </div>

 

      <div class="comparison-row">

        <div class="comparison-cell">
          Growth is capped by how much you can personally carry
        </div>

       

      </div>

  
	
	 <div class="comparison-header">

     

     

        <div class="after-heading">
          After — Running On CCW Systems
        </div>   </div>
		<div class="comparison-row">
	<div class="comparison-cell">Every lead is caught, tracked and followed up automatically</div></div>


		<div class="comparison-row">
	<div class="comparison-cell">Touchpoints go out on time because the system sends them</div></div>
	
	
	
	
		<div class="comparison-row">
	<div class="comparison-cell">Operations run through process, not through your presence</div></div>
	
	
	
		<div class="comparison-row">
	<div class="comparison-cell">Numbers are current every week — not just at month-end panic</div></div>
	
		<div class="comparison-row">
	<div class="comparison-cell">Clear reports give full visibility without daily involvement</div></div>
	
		<div class="comparison-row">
	<div class="comparison-cell">The business grows because the floor can hold the weight</div></div>
      </div>
  </div>
  <h3 class="key-out">Key outcomes</h3>

    <div class="benefits-grid">



      <div class="benefit-card">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-layers w-6 h-6 text-primary mb-6"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
        <h3 class="benefit-title">Less Chaos</h3>

        <p class="benefit-text">
          Operations move through documented process, not through whoever’s available. Predictability replaces firefighting.
        </p>

      </div>

  

      <div class="benefit-card">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trending-up w-6 h-6 text-primary mb-6"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
        <h3 class="benefit-title">Revenue Recovered</h3>

        <p class="benefit-text">
          Dropped leads and cold relationships are silent revenue losses. When the system catches them, you recover income you didn’t know you were losing.
        </p>

      </div>

  

      <div class="benefit-card">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-blocks w-6 h-6 text-primary mb-6"><rect width="7" height="7" x="14" y="3" rx="1"></rect><path d="M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3"></path></svg>
        <h3 class="benefit-title">Scalable Foundation</h3>

        <p class="benefit-text">
          The operation keeps moving when you’re not driving it. That’s not just efficiency — it’s the foundation every growth decision is actually built on.
        </p>

      </div>

    </div>

  </div>



                </section>

                <section class="citadel-testimonial">
                    <div class="container">
                        <div class="mini-text">
                                    Success Stories 
                                </div>
<h2 class="chaos-title">Client <em>Success Stories</em></h2>


      <div className="testmonial-slider">
 <Slider {...settings2} className="pp-slider">

                {/* CARD 1 */}
                <div>
                  <div className="testimonial-card">
                    <div className="quote"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-quote h-6 w-6 text-white" aria-hidden="true"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg></div>

                    <p className="text">
                      "We've been hiring Citadel Coworkers for finance and accounting outsourcing services ever since! They have done a great job to help us optimize our financial processes itself and even saved us the costs for doing that. It really has been a game changer."
                    </p>


                    <div className="footer">
                      <div className="client-info">

                        <img
                          src="https://citadelcoworkers.com/wp-content/uploads/2025/02/emily_s-2.png"
                          alt="client"
                          className="client-img" />

                        <div>
                          <strong>Emily Thompson</strong>

                            </div>
                            
                            </div>
                        </div>
                        

                            </div>
                                                            </div>

                {/* CARD 2 */}
                <div>
                  <div className="testimonial-card ">
                    <div className="quote"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-quote h-6 w-6 text-white" aria-hidden="true"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg></div>

                    <p className="text">
                      "The service forms an integral part of our financial management and is a testament to the professionalism on show from Citadel Coworkers . They were able to scale our business without needing us in the day-to-day operations, because of their team expertly taking care."
                    </p>


                    <div className="footer">
                      <div className="client-info">

                        <img
                          src="https://www.citadelcoworkers.com/wp-content/uploads/2025/02/brianh-1.png"
                          alt="client"
                          className="client-img" />

                        <div>
                          <strong>Benjamin Reed</strong>

                            </div>
                            
                        </div>
                    </div>

                  </div>
                </div>

                {/* CARD 3 */}
                <div>
                  <div className="testimonial-card">
                    <div className="quote"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-quote h-6 w-6 text-white" aria-hidden="true"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg></div>

                    <p className="text">
                      " Their virtual assistants are not only an extension of the team, but also an integral part to growing our business! They have contributed heavily to our business enhancement due to their timely and exact performance. They have become my number one."
                    </p>


                    <div className="footer">
                      <div className="client-info">

                        <img
                          src="https://virtualassistant24x7.com/wp-content/uploads/2025/02/Rachel-Johnson-1.webp"
                          alt="client"
                          className="client-img" />

                        <div>
                          <strong>Rachel Johnson</strong>

                        </div>

                      </div>
                    </div>

                  </div>
                </div>
				
				
				
				
				
				
				
				
				
				
			
				
		
			
				
				
					
				
				
				
</Slider>
              </div>
</div>


                </section>

 
				
                <section class="last-sec">
                    <div class="container">
                        <div class="mini-text">The Next Step</div>
                            <h2 class="chaos-title">Stop Being The System.<br></br>
<em> Start Building One. Success Stories</em></h2>
<p>One conversation is enough to see where your operations have gaps and what it looks like when those gaps are closed. No pitch deck. No pressure. Just clarity on where you actually stand and what's possible from here.</p>

<a href="/contact-us" class="hero-btn">BOOK A FREE DISCOVERY CALL<span>➜</span></a>
                        </div>
</section>

                    </div>
                </>
    );
};

export default SystemlandingPage;