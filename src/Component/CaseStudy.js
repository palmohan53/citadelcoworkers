import React from "react";

/**
 * Medical Case Study Hero (CitadelCoworkers color style)
 * ✅ Pure React + CSS (no bootstrap needed)
 * ✅ Replace images/text via props
 */
const CaseStudy = ({
  brandName = "Citadel Coworkers",
  titleTop = "MEDICAL",
  titleBottom = "CASE STUDY",
  subtitle = "Understanding a patient’s condition\nand treatment journey.",
  websiteText = "www.citadelcoworkers.com",
  websiteUrl = "https://citadelcoworkers.com/",
  dateText = "8 May, 2055",
  mainImage = "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=1400&q=80",
  mainImageAlt = "Medical team",
  smallImage = "https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=900&q=80",
  smallImageAlt = "Doctor writing notes",
}) => {
  return (
    <section className="cc-case-hero">
      <div className="cc-case-hero__container">
        {/* Left */}
        <div className="cc-case-hero__left">
          <div className="cc-case-hero__brand">
            <span className="cc-case-hero__logo-dot" aria-hidden="true" />
            <span className="cc-case-hero__brand-name">{brandName}</span>
          </div>

          <h1 className="cc-case-hero__title">
            {titleTop}
            <br />
            {titleBottom}
          </h1>

          <p className="cc-case-hero__subtitle">
            {subtitle.split("\n").map((line, idx) => (
              <React.Fragment key={idx}>
                {line}
                {idx !== subtitle.split("\n").length - 1 && <br />}
              </React.Fragment>
            ))}
          </p>

          <div className="cc-case-hero__meta">
            <a
              className="cc-case-hero__pill cc-case-hero__pill--link"
              href={websiteUrl}
              target="_blank"
              rel="noreferrer"
            >
              {websiteText}
            </a>
            <span className="cc-case-hero__pill cc-case-hero__pill--date">
              {dateText}
            </span>
          </div>
        </div>

        {/* Right */}
        <div className="cc-case-hero__right">
          <div className="cc-case-hero__shape" aria-hidden="true" />

          <figure className="cc-case-hero__card cc-case-hero__card--main">
            <img src={mainImage} alt={mainImageAlt} />
          </figure>

          <figure className="cc-case-hero__card cc-case-hero__card--small">
            <img src={smallImage} alt={smallImageAlt} />
          </figure>

          <div className="cc-case-hero__dots" aria-hidden="true" />
        </div>
      </div>

      {/* ✅ Component CSS */}
      <style>{`
        :root{
          --cc-navy:#00255b;
          --cc-blue:#0b63ce;
          --cc-sky:#e9f3ff;
          --cc-text:#0c1b2a;
          --cc-muted:#5a6b7f;
          --cc-border:rgba(0,37,91,.12);
          --cc-shadow:0 18px 40px rgba(0,37,91,.18);
        }

        .cc-case-hero{
          position:relative;
          padding:64px 0;
          
          overflow:hidden;
        }

        .cc-case-hero__container{
          width:min(1180px, calc(100% - 32px));
          margin:0 auto;
          display:grid;
          grid-template-columns:1.15fr 1fr;
          gap:36px;
          align-items:center;
        }

        .cc-case-hero__brand{
          display:inline-flex;
          align-items:center;
          gap:10px;
          padding:8px 12px;
          border:1px solid var(--cc-border);
          border-radius:999px;
          background:rgba(233,243,255,.55);
          backdrop-filter:blur(6px);
          width:fit-content;
        }

        .cc-case-hero__logo-dot{
          width:22px;height:22px;border-radius:50%;
          background:linear-gradient(135deg,var(--cc-navy),var(--cc-blue));
          box-shadow:0 10px 22px rgba(11,99,206,.25);
          display:inline-block;
        }

        .cc-case-hero__brand-name{
          font:600 14px/1.2 system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;
          color:var(--cc-navy);
          letter-spacing:.2px;
        }

        .cc-case-hero__title{
          margin:18px 0 10px;
          font:800 clamp(38px, 4.2vw, 66px) / .95 system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;
          letter-spacing:1px;
          color:var(--cc-blue);
          text-transform:uppercase;
        }

        .cc-case-hero__subtitle{
          margin:0;
          font:500 16px/1.55 system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;
          color:var(--cc-muted);
          max-width:420px;
        }

        .cc-case-hero__meta{
          margin-top:22px;
          display:flex;
          gap:12px;
          flex-wrap:wrap;
          align-items:center;
        }

        .cc-case-hero__pill{
          display:inline-flex;
          align-items:center;
          justify-content:center;
          padding:10px 16px;
          border-radius:999px;
          border:1px solid rgba(11,99,206,.18);
          background:rgba(233,243,255,.7);
          color:var(--cc-navy);
          font:600 14px/1 system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;
          text-decoration:none;
          transition:transform .15s ease, background .15s ease;
        }

        .cc-case-hero__pill--link:hover{
          transform:translateY(-1px);
          background:rgba(233,243,255,.95);
        }

        .cc-case-hero__pill--date{
          border-color:rgba(0,37,91,.14);
        }

        .cc-case-hero__right{
          position:relative;
          min-height:420px;
          display:grid;
          place-items:center;
        }

        .cc-case-hero__shape{
          position:absolute;
          right:-22px;
          top:-22px;
          width:min(420px, 70%);
          height:min(520px, 92%);
          background:linear-gradient(180deg,var(--cc-blue), #0a56b5);
          border-radius:28px;
          box-shadow:var(--cc-shadow);
        }

        .cc-case-hero__card{
          position:absolute;
          border-radius:26px;
          overflow:hidden;
          border:6px solid rgba(255,255,255,.92);
          box-shadow:0 14px 34px rgba(0,37,91,.22);
          background:#fff;
        }

        .cc-case-hero__card img{
          width:100%;
          height:100%;
          object-fit:cover;
          display:block;
        }

        .cc-case-hero__card--main{
          width:min(420px, 92%);
          height:320px;
          right:26px;
          top:18px;
          border-radius:30px;
        }

        .cc-case-hero__card--small{
          width:250px;
          height:170px;
          right:46px;
          bottom:18px;
          border-radius:22px;
        }

        .cc-case-hero__dots{
          position:absolute;
          left:24px;
          top:10px;
          width:90px;
          height:56px;
          background-image:radial-gradient(rgba(11,99,206,.35) 1.6px, transparent 1.7px);
          background-size:10px 10px;
          border-radius:14px;
          filter:drop-shadow(0 10px 18px rgba(0,37,91,.18));
          opacity:.9;
        }

        .cc-case-hero::after{
          content:"";
          position:absolute;
          left:0; right:0; bottom:-40px;
          height:120px;
          background-image:radial-gradient(rgba(0,37,91,.10) 1.5px, transparent 1.6px);
          background-size:14px 14px;
          opacity:.55;
          pointer-events:none;
        }

        @media (max-width: 992px){
          .cc-case-hero__container{
            grid-template-columns:1fr;
            gap:26px;
          }
          .cc-case-hero__right{
            min-height:420px;
          }
          .cc-case-hero__shape{
            right:0;
            width:100%;
            height:100%;
            border-radius:26px;
          }
          .cc-case-hero__card--main{
            left:18px;
            right:18px;
          }
          .cc-case-hero__card--small{
            right:22px;
          }
        }

        @media (max-width: 520px){
          .cc-case-hero{
            padding:44px 0;
          }
          .cc-case-hero__right{
            min-height:360px;
          }
          .cc-case-hero__card--main{
            height:260px;
          }
          .cc-case-hero__card--small{
            width:220px;
            height:150px;
            right:16px;
            bottom:14px;
          }
        }
      `}</style>
    </section>
  );
};

export default CaseStudy;
