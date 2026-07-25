import React from "react";

const PortfolioStack = () => {
  const cards = [
    {
      id: 1,
      number: "01",
      title: "Invisible to In-Demand Building a Digital Presence for a B2B Manufacturer",
description:
        "A complete digital overhaul that turned a hidden manufacturer into a searchable industry name.",
      image:
        "https://virtualassistant24x7.com/wp-content/uploads/2026/02/ad-1.webp",
        url:"https://www.citadelcoworkers.com/case-study/adinathenterprises"
    },
    {
      id: 2,
      number: "02",
      title: "Building an Undetectable Offshore Sales Team for a US Insurance Brokerage",
      description:
        "From a single outbound hire to a fully owned sales cycle in just three months with zero red flags raised.",
      image:
        "https://virtualassistant24x7.com/wp-content/uploads/2026/07/dobe-21.png",
        url:"https://www.citadelcoworkers.com/case-study/burnt-orange-benefits"
    },
    {
      id: 3,
      number: "03",
      title: "Rebuilding a Specialty Practice's Entire Insurance Workflow",
      description:
        "From a front desk stretched thin to a fully managed insurance function, front-to-back handled entirely by one embedded specialist.",
      image:
        "https://virtualassistant24x7.com/wp-content/uploads/2026/07/ng-4.webp",
        url:"https://www.citadelcoworkers.com/case-study/ng-vascular"
    },
  ];

  return (
    <>
      <style>{`
        *{
          margin:0;
          padding:0;
          box-sizing:border-box;
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
    justify-content: space-between;
}
.ss a svg {
    fill: #fff;
    color: #fff;
    width: 50px;
    height: 50px;
    background: #172c67;
    border-radius: 100px;
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

           {cards.map((card, index) => (

<div
    className="stackItem"
    key={card.id}
style={{
    zIndex: index + 1
}}
>

    <div className="card1">
<div className="cardNumber">
                {card.number}
            </div>
        <img
            src={card.image}
            alt={card.title}
        />

        <div className="cardContent">

            

            <h3 className="cardTitle">
                {card.title}
            </h3>
<div className="ss">
            <p className="cardText">
                {card.description}
            </p>

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

        </div>
</div>
      </section>
    </>
  );
};

export default PortfolioStack;