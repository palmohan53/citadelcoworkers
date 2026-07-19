import React from "react";

const PortfolioStack = () => {
  const cards = [
    {
      id: 1,
      number: "01",
      title: "Invisible to In-Demand Building a Digital Presence for a B2B Manufacturer from the Ground Up",
description:
        "ddddd",
      image:
        "https://virtualassistant24x7.com/wp-content/uploads/2026/02/ad-1.webp",
    },
    {
      id: 2,
      number: "02",
      title: "Brand Identity",
      description:
        "Creative branding solution with consistent visual identity for businesses.",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&q=80",
    },
    {
      id: 3,
      number: "03",
      title: "Digital Marketing",
      description:
        "Performance-driven campaigns that generate leads and improve online presence.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
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
}
        .smallTitle{
          color:#4F46E5;
          font-size:14px;
          font-weight:600;
          letter-spacing:2px;
          text-transform:uppercase;
          margin-bottom:20px;
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
          font-size:17px;
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
              We Build Digital Experiences That Grow Brands
            </h2>

            <p className="description">
              From branding to websites and marketing, we help companies create
              premium digital experiences that convert visitors into customers.
            </p>

            <button className="btn">
              View Portfolio
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
<a href="/work/mg-milk-grounds" class="stretched-link"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z"></path><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M17 7 7 17"></path><path d="M8 7h9v9"></path></g></g></svg> </a>
     </div>   </div>

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