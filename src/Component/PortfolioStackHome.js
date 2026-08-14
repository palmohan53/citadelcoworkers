import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const PortfolioStack = () => {
  const mobileSlider = {
  dots: true,
  arrows: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 3500,
  speed: 600,
  slidesToShow: 1,
  slidesToScroll: 1,
};
  const cards = [

     {
      id: 1,
      number: "01",
       country: "USA",

    industry: "Freight & Supply Chain · Engagement ongoing since 2021 ",

    countryflag: "/images/USAFlag.webp",
     title:
      "Trigen Logistics",
description:
        "Embedded finance and accounting support for a long-established warehousing and logistics provider, keeping the books as reliable as the operation itself.",
      image:
        "https://virtualassistant24x7.com/wp-content/uploads/2026/07/tri.webp",
        url:"https://citadelcoworkers.com/case-study/trigen-logistics",
        services: [
  {
    title: "Virtual Assistant Services",
    icon: "/images/sales-icon.webp",
  },
 {
    title: "Back Office Services",
    icon: "/images/sales-icon.webp",
  },
 
   {
    title: " Finance & Accounting Services",
    icon: "/images/sales-icon.webp",
  },
],


    stats: [
      {
        number: "5+",
        label: " Yrs Continuous Engagement ",
      },
      {
        number: "3+",
        label: "Peak logistics seasons navigated without disruption",
      },
     
    ],
    },
    {
      id: 2,
      number: "02",
       country: "USA",

    industry: " Better-for-you CPG Snacks",

    countryflag: "/images/USAFlag.webp",
      title: "Rhythm Superfoods",
description:
        "",
      image:
        "https://virtualassistant24x7.com/wp-content/uploads/2026/07/rhy.webp",
        url:"https://citadelcoworkers.com/case-study/rhythm-superfoods",
           services: [
  {
    title: "Web Designing",
    icon: "/images/sales-icon.webp",
  },
 {
    title: "SEO",
    icon: "/images/sales-icon.webp",
  },
 
   {
    title: "Social",
    icon: "/images/sales-icon.webp",
  },{
    title: "Content",
    icon: "/images/sales-icon.webp",
  },
],


    stats: [
      {
        number: "4",
        label: " Yrs Continuous Engagement (2021–2025) ",
      },
      {
        number: "100%",
        label: "Full-Cycle Bookkeeping Owned",
      },
     
    ],
    },
    {
      id: 3,
      number: "03",
 
       country: "USA",

    industry: " Insurance Brokerage",

    countryflag: "/images/USAFlag.webp",
      title: "Burnt Orange Benefits",
      description:
        "From a single outbound hire to a fully owned sales cycle in just three months with zero red flags raised.",
      image:
        "https://virtualassistant24x7.com/wp-content/uploads/2026/07/dobe-21.png",
        url:"https://www.citadelcoworkers.com/case-study/burnt-orange-benefits",   services: [
  {
    title: "Sales Executive",
    icon: "/images/sales-icon.webp",
  },

 

],


    stats: [
      {
        number: "3 Months",
        label: " To First Closed Deals ",
      },
      {
        number: "5X",
        label: "Scope Expanded",
      },
     
    ],
    },
      {
      id: 4,
      number: "04",
 
       country: "USA",

    industry: "Specialty Vascular Medical Practice",

    countryflag: "/images/USAFlag.webp",
      title: "NG Vascular",
      description:
        "From a single outbound hire to a fully owned sales cycle in just three months with zero red flags raised.",
      image:
        "https://virtualassistant24x7.com/wp-content/uploads/2026/07/ng-4.webp",
        url:"/case-study/ng-vascular",   services: [
  {
    title: "Sales Executive",
    icon: "/images/sales-icon.webp",
  },
  {
    title: "Cold Calling",
    icon: "/images/call.webp",
  },
  {
    title: "Appointment Setting",
    icon: "/images/calendar.webp",
  },
  {
    title: "CRM Management",
    icon: "/images/crm.webp",
  }

 

],


    stats: [
       {
        number: "1+",
        label: "Yrs Active Partnership ",
      },
      {
        number: "5",
        label: "Core Functions Owned",
      }
     
    ],
    },
     {
      id: 5,
      number: "05",
 
       country: "USA",

    industry: " Recruitment & HR Technology",

    countryflag: "/images/USAFlag.webp",
      title: "Flash Hiring",
      description:
        "From a single outbound hire to a fully owned sales cycle in just three months with zero red flags raised.",
      image:
        "https://virtualassistant24x7.com/wp-content/uploads/2026/07/flash.webp",
        url:"/case-study/flashiring",   services: [
{
    title: "Web Designing",
    icon: "/images/sales-icon.webp",
  },
  {
    title: "SEO",
    icon: "/images/call.webp",
  },
  {
    title: "Social",
    icon: "/images/calendar.webp",
  },
  {
    title: "Content",
    icon: "/images/crm.webp",
  }

 

],


    stats: [
      {
        number: "+220%",
        label: "Social Follower Growth ",
      },
      {
        number: "4.8X ",
        label: "Engagement Rate Growth",
      },
     
    ],
    },
      {
      id: 7,
      number: "07",
 
       country: "USA",

    industry: "White Label Digital Marketing Services",

    countryflag: "/images/USAFlag.webp",
      title: "Virtual Assistant SEO",
      description:
        "From a single outbound hire to a fully owned sales cycle in just three months with zero red flags raised.",
      image:
        "https://virtualassistant24x7.com/wp-content/uploads/2026/07/vri.webp",
        url:"https://www.citadelcoworkers.com/case-study/virtualassistantseo",   services: [
  {
    title: "PPC",
    icon: "/images/sales-icon.webp",
  },
  {
    title: "CRO",
    icon: "/images/call.webp",
  },
  {
    title: "Content",
    icon: "/images/calendar.webp",
  },
  {
    title: "SEO",
    icon: "/images/crm.webp",
  }

 

],


    stats: [
         {
        number: "72K+",
        label: " Search Impressions ",
      },
      {
        number: "500+",
        label: "Organic Clicks",
      },
     
    ],
    },    
  ];

  return (
    <>
      <style>{`
      section.portfolioStack .stats-bar {
    display: flex;
    margin-bottom: 20px;
}section.portfolioStack .stat {
    flex: 1;
    text-align: left                                                               ;
    border-right: 1px solid rgba(255, 255, 255, .12);
}section.portfolioStack .stat h2 {
    font-size: 30px;
    font-weight: 700;
    color: #204ecf;
    margin-bottom: 10px;
}.stat span {
    font-size: 13px;
    color: #000;
    line-height: 1.6;
    display: block;
}
   section.portfolioStack .service-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    margin-bottom: 35px;
}section.portfolioStack .service-card {
    width: max-content;
    background: #fff;
    border: 1px solid #e7ecff;
    border-radius: 10px;
    padding: 10px;
    display: flex;
    align-items: center;
    gap: 12px;
    transition: .3s;
    box-shadow: 0 8px 25px rgba(0, 0, 0, .05);
}section.portfolioStack .service-card span {
    font-size: 13px;
    font-weight: 600;
    color: #0f172a;
    line-height: 22px;
}
          a.stretched-link {
    text-transform: capitalize;
    color: #1565ff;
    font-size: 16px;
}
.stackWrapper button a {
    color: #fff;
}

a.stretched-link svg {
    width: 34px;
}
.stackItem{
    position:sticky;
  
    border-radius: 30px;
    background:#fff;
    padding:40px;
    display:flex;
    align-items:center;
}
        .portfolioStack{
           color: #fff;
    background: radial-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px), linear-gradient(135deg, #0f1c3f, #1e3a8a);
    background-size: 25px 25px, cover;
        }

        .stackWrapper{
          display:flex;
          gap:70px;
          align-items:flex-start;
        }

        .leftContent{
          width:45%;
          position:sticky;
          top:120px;
        }
          .ss {
    display: flex;
    align-items: center;
   gap:20px;
}
.ss a svg {
    fill: #fff;
    color: #fff;
    width: 50px;
    height: 50px;
    background: #172c67;
    border-radius: 100px;
}.case-top {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 30px;
    border: 1px solid #efefef;
    border-radius: 5px;
    padding: 5px 10px;
    width: max-content;
}.case-number {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #2458ff;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-weight: 700;
}.country {
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 15px;
    font-weight: 600;
    color: #0f172a;
}.country img {
    width: 34px !important;
    height: 20px !important;
    border-radius: 3px !important;
}.cardText {
    margin-bottom: 0;
    color: #6b7280;
    line-height: 28px;

    border-top: 1px solid #efefef;
    width: 100%;
    border-bottom: 1px solid #efefef;
    padding-top: 15px;
    padding-bottom: 15px;
}
        .smallTitle{
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
.desktop-portrait,.mobile-portrait{
    width: 100%;
    float: left;
}
    .mobile-portrait
    {
    display:none;}
        .mainTitle{
          font-size:52px;
          line-height:1.1;
          font-weight:700;
          color:#fff;
          margin-bottom:25px;
        }

        .description{
        
          line-height:30px;
          color:#fff;
          margin-bottom:35px;
        }

        .btn{
          background:#2563eb;
          color:#fff;
          border:none;
          padding:16px 34px;
          border-radius:50px;
          cursor:pointer;
          font-size:16px;
          transition:.3s;
        }

        .btn:hover{
          background:#1d4ed8;
        }
.stackItem{
    position:sticky;
    top:90px;
margin-bottom:40px;    display:flex;
    align-items:center;
}
        .rightCards{
         width:65%;
    position:relative;
        }

       .card1{

    width:100%;
    height:100%;



  

    overflow:hidden;



    transition:
        transform .45s ease,
        opacity .45s ease,
        filter .45s ease;

}
        .card1 img{
          width: 100%;
    /* height: 420px; */
    object-fit: cover;
    display: block;
    border-radius: 40px;
        }


        .cardNumber{
          font-size:15px;
          color:#2563eb;
          font-weight:700;
          margin-bottom:15px;
        }

        .cardTitle{
         font-size: 24px;
    font-weight: 700;
    color: #111827;
    margin-bottom: 15px;
    margin-top: 25px;
        }

        .cardText{
            margin-bottom: 0;
          color:#6b7280;
          line-height:28px;
       
        }

        @media(max-width:991px){

          .stackWrapper{
            flex-direction:column;
          }

          .leftContent,
          .rightCards{
            width:100%;
          }

          .leftContent{
            position:relative;
            top:0;
            margin-bottom:60px;
          }

          .mainTitle{
            font-size:40px;
          }

          .card img{
            height:300px;
          }

        }
                @media(max-width:768px){
.Outerstacks {
    height: 100%;
}    section.portfolioStack .stackItem {
        padding: 10px;
        height: 100%;
    }
section.portfolioStack .stackItem {
    padding: 10px;
}
    .desktop-portrait{
    display:none;
}section.portfolioStack {
    padding-bottom: 100px;
}
    .stackItem
    {
    margin-bottom:0px !important;}
    .mobile-portrait
    {
      display:block;
  }
   section.portfolioStack .ss {
    display: flex;
    align-items: center;
    gap: 10px;
  flex-wrap: wrap;
}
 section.portfolioStack .country span {
    font-size: 11px;
}
      .case-top {
        width: auto;
        flex-direction: column;
    }
  .stackWrapper
  {
  gap:0px;}
    section.portfolioStack .card1 img{
    border-radius:10px;}
      }
      `}</style>

      <section className="portfolioStack">
<div className="container">
        <div className="stackWrapper">

          {/* LEFT */}

          <div className="leftContent">

            <p className="smallTitle">
              OUR WORK
            </p>

            <h2 className="mainTitle">
              Measurable Outcomes Delivered Across Every Industry We Work With

            </h2>

            <p className="description">
            No two challenges are the same, but the results speak for themselves. Take a look at how we've delivered for businesses like yours.

            </p>

            <button className="btn">
          <a href="/case-study">View Portfolio →</a>
            </button>

          </div>

          {/* RIGHT */}

          <div className="rightCards">
<div class="desktop-portrait">
           {cards.map((card, index) => (

<div
    className="stackItem"
    key={card.id}
style={{
    zIndex: index + 1
}}
>

    <div className="card1">
       <div className="case-top">


               <div className="case-number">
           {card.number}
          </div>

          <div className="country">

            <img src={card.countryflag} alt={card.country} />

            <span>{card.country}</span>

    

            <span>{card.industry}</span>

          </div>
            </div>
        <img
            src={card.image}
            alt={card.title}
        />

        <div className="cardContent">

            

            <h3 className="cardTitle">
                {card.title}
            </h3>


             <div className="stats-bar">

          {card.stats.map((stat, index) => (

            <div className="stat" key={index}>

              <h2>{stat.number}</h2>

              <span>{stat.label}</span>

            </div>

          ))}

        </div>
<div className="ss">
      
  {card.services.map((service, index) => (

    <div className="service-card" key={index}>

  

      <span>{service.title}</span>

    </div>

  ))}
     </div>
     <div class="btn-next">
      <a href={card.url} class="stretched-link">read Full Case study <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="28" cy="28" r="28" fill="#1565FF"/>
  <path
    d="M20 28H36"
    stroke="white"
    stroke-width="2.8"
    stroke-linecap="round"/>
  <path
    d="M30 22L36 28L30 34"
    stroke="white"
    stroke-width="2.8"
    stroke-linecap="round"
    stroke-linejoin="round"/>
</svg> </a>
      </div>
     
     
     </div>

    </div>

</div>

))}
</div>
<div class="mobile-portrait pp-slider">

 <Slider {...mobileSlider} ClassName="pp-slider">
      {cards.map((card) => (
        <div key={card.id} className="Outerstacks">

 <div
    className="stackItem"
    key={card.id}

>

    <div className="card1">
       <div className="case-top">


               <div className="case-number">
           {card.number}
          </div>

          <div className="country">

            <img src={card.countryflag} alt={card.country} />

            <span>{card.country}</span>

    

            <span>{card.industry}</span>

          </div>
            </div>
        <img
            src={card.image}
            alt={card.title}
        />

        <div className="cardContent">

            

            <h3 className="cardTitle">
                {card.title}
            </h3>


             <div className="stats-bar">

          {card.stats.map((stat, index) => (

            <div className="stat" key={index}>

              <h2>{stat.number}</h2>

              <span>{stat.label}</span>

            </div>

          ))}

        </div>
<div className="ss">
      
  {card.services.map((service, index) => (

    <div className="service-card" key={index}>

  

      <span>{service.title}</span>

    </div>

  ))}
     </div>
     <div class="btn-next">
      <a href={card.url} class="stretched-link">read Full Case study <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="28" cy="28" r="28" fill="#1565FF"/>
  <path
    d="M20 28H36"
    stroke="white"
    stroke-width="2.8"
    stroke-linecap="round"/>
  <path
    d="M30 22L36 28L30 34"
    stroke="white"
    stroke-width="2.8"
    stroke-linecap="round"
    stroke-linejoin="round"/>
</svg> </a>
      </div>
     
     
     </div>

    </div>

</div>

        </div>
      ))}
    </Slider>
</div>

          </div>

        </div>
</div>
      </section>
    </>
  );
};

export default PortfolioStack;