import { useState } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


/* =========================================================
   UK WRITTEN REVIEWS
   UK REVIEWS FIRST
========================================================= */

const reviews = [
  {
    name: "Charlotte Bennett",
    role: "UK",
    avatar:
      "https://virtualassistant24x7.com/wp-content/uploads/2026/07/New-Project-14.webp",
    imgreview: "/images/star5.webp",
    title:
      "AI Overviews Was Not Mentioning Us While Answering Questions",
    smalltext: "D2C Skincare Brand",
    experienceDate: "March 17, 2025",
    review:
      "Google's AI Overviews covered our category's biggest questions while citing publishers, not brands. After schema implementation and question-led restructuring of our education hub, our pages began earning Overview citations on our highest-intent queries.",
  },



  {
    name: "Michael Torres",
    role: "UK",
    avatar:
      "https://virtualassistant24x7.com/wp-content/uploads/2026/06/New-Project-12.webp",
    imgreview: "/images/star5.webp",
    title:
      "The Logo Was Built, But The Animation Strategy Wasn’t",
    smalltext: "Fintech Startup",
    experienceDate: "March 17, 2025",
    review:
      "Our founding team had invested in a strong static identity but had no motion design capability and no brief for how the logo should behave across YouTube, social and pitch decks. CCW designed the animated logo, built the YouTube intro sequence and delivered the full social animation package. Giving the brand the motion language it needed before launch day.",
  },

  {
    name: "Daniel Mitchell",
    role: "Australia",
    smalltext: "Professional Services Firm",
    avatar:
      "https://virtualassistant24x7.com/wp-content/uploads/2026/07/s-19.webp",
    imgreview: "/images/star5.webp",
    title:
      "Perplexity Was Describing Our Firm With Outdated Facts",
    experienceDate: "March 17, 2025",
    review:
      "AI assistants were citing a years-old version of our service line and pricing. CCW's team corrected our entity footprint across the web, refreshed our cornerstone pages with dated, sourced facts, and now monitors how every major platform describes us month to month.",
  },

  {
    name: "Daniel Forsyth",
    role: "Australia",
    avatar:
      "https://virtualassistant24x7.com/wp-content/uploads/2026/04/Matthew-Brooks.webp",
    imgreview: "/images/star5.webp",
    title:
      "Great Concept But Incomplete Player Experience.",
    smalltext: "Indie Game Studio",
    experienceDate: "March 17, 2025",
    review:
      "With no dedicated game designer on the team, the studio faced launch without a GDD, a designed onboarding flow or a cohesive UI system. CCW embedded a game designer and UI designer from pre-production through to ship. They launched on schedule and players specifically called out the polish in their reviews.",
  },

  {
    name: "Ethan Brooks",
    role: "USA",
    avatar:
      "https://virtualassistant24x7.com/wp-content/uploads/2026/07/New-Project-13.webp",
    imgreview: "/images/star5.webp",
    title:
      "ChatGPT Was Recommending Every Competitor Except Us",
    smalltext: "B2B SaaS Platform",
    experienceDate: "March 17, 2025",
    review:
      "Vendor-comparison prompts named three rivals and never us, even though we outranked them on Google. CCW's GEO specialist rebuilt our comparison pages answer-first, fixed our entity data and grew our review footprint and within a quarter we were appearing in the majority of our tracked shortlist prompts.",
  },
];


/* =========================================================
   UK VIDEO TESTIMONIALS
   UK VIDEOS FIRST
========================================================= */

const testimonials = [
  {
    img: "/images/Michael Lin.webp",
    name: "Michael Lin",
    role: "Legal Advisor",
    video: "/images/mich.mp4",
  },

  {
    img: "/images/Olivia Thompson.webp",
    name: "Olivia",
    role: "Business Owner",
    video: "/images/olivatestimonial.mp4",
  },

  {
    img: "/images/laura.webp",
    name: "Laura",
    role: "Gastroenterology Consultant",
    video: "/images/laura.mp4",
  },

  {
    img: "/images/davidholenm.webp",
    name: "david",
    role: "Kings Homes and Associates",
    video: "/images/davidtest.mp4",
  },

  {
    img: "/images/Kelsey Yates.webp",
    name: "Kelsey",
    role: "Business Owner",
    video: "/images/kaytes.mp4",
  },

  {
    img: "/images/Tracy  and Keira Hao.webp",
    name: "Tracy and Keira Hao",
    role: "Business Owner",
    video: "/images/Tracy  and Keira Hao.mp4",
  },
];


export default function UKTestimonials() {

  const [tab, setTab] = useState("videos");
  const [activeVideo, setActiveVideo] = useState(null);


  /* =========================================================
     REVIEW SLIDER
  ========================================================= */

  const reviewSlider = {
    dots: true,
    arrows: false,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },

      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };


  /* =========================================================
     VIDEO SLIDER
  ========================================================= */

  const videoSlider = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };


  return (
    <>
      <style>{`

        /* =====================================================
           MAIN
        ===================================================== */

        .ts-heading {
          text-align: center;
          margin-bottom: 30px;
        }


        /* =====================================================
           TABS
        ===================================================== */

        .ts-tabs {
          display: flex;
          justify-content: center;
          gap: 16px;
          margin-bottom: 40px;
          flex-wrap: wrap;
        }


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


        .ts-tabs button.active {
          background: #1749d5;
          color: #fff;
        }


        /* =====================================================
           REVIEW CARD
        ===================================================== */

        .review-card {
          background: #fff;
          border: 1px solid #e8e8e8;
          border-radius: 18px;
          padding: 28px;
          transition: 0.35s;
          height: 100%;
        }


        .review-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.08);
        }


        .review-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
          border-bottom: 1px solid #eee;
          padding-bottom: 18px;
        }


        .review-user {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-top: 0;
        }


        .review-avatar {
          width: 58px;
          height: 58px;
          border-radius: 50%;
          object-fit: cover;
        }


        .review-user h4 {
          margin: 0;
          font-size: 18px;
          color: #111;
        }


        .review-user span {
          display: block;
          margin-top: 4px;
          font-size: 14px;
          color: #777;
        }


        .stars {
          margin: 18px 0 10px;
        }


        .stars img {
          width: 120px !important;
        }


        .review-card h3 {
          font-size: 18px;
          margin: 5px 0;
          color: #111;
          line-height: 1.3;
        }


        .review-card p {
          white-space: pre-line;
          line-height: 1.8;
          color: #444;
          margin: 0;
        }


        .review-bottom {
          margin-top: 25px;
          padding-top: 18px;
          border-top: 1px solid #ececec;
        }


        .review-bottom span {
          font-size: 14px;
          color: #666;
          background: #e7e7e6;
          padding: 7px;
          border-radius: 7px;
        }


        .review-bottom strong {
          color: #222;
          font-weight: 600;
        }


        .card-ne {
          height: 100%;
        }


        /* =====================================================
           VIDEO SECTION
        ===================================================== */

        .vt-section {
          padding-top: 0;
        }


        .vtt-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }


        .vt-card {
          position: relative;
          overflow: hidden;
          border-radius: 18px;
          cursor: pointer;
        }


        .vt-card img {
          width: 100%;
          display: block;
          border-radius: 18px;
        }


        .playBtntest {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 70px;
          height: 70px;
          border-radius: 50%;
          background: rgba(23, 73, 213, 0.9);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: 0.3s;
        }


        .vt-card:hover .playBtntest {
          transform: translate(-50%, -50%) scale(1.1);
        }


        .for-mobile-only {
          display: none;
        }


        /* =====================================================
           POPUP
        ===================================================== */

        .vt-popup {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 99999;
          padding: 20px;
        }


        .vt-popup-content {
          width: min(900px, 95%);
          position: relative;
        }


        .vt-popup-content video {
          width: 100%;
          max-height: 80vh;
          display: block;
          border-radius: 12px;
          background: #000;
        }


        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 767px) {

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


          .vtt-grid {
            display: none;
          }


          .for-mobile-only {
            display: block;
          }


          .review-card {
            padding: 22px;
          }


          .ts-wrap {
            padding: 60px 0;
          }

        }

      `}</style>


      <section className="ts-wrap">

        <div className="container">


          {/* =================================================
              HEADING
          ================================================= */}

      


          {/* =================================================
              TABS
          ================================================= */}

          <div className="ts-tabs">

            <button
              className={tab === "videos" ? "active" : ""}
              onClick={() => setTab("videos")}
            >

              <svg
                viewBox="0 0 24 24"
                width="18"
                height="18"
              >

                <path
                  fill="currentColor"
                  d="M8 5v14l11-7z"
                />

              </svg>

              <span>
                Client Stories
              </span>

            </button>


            <button
              className={tab === "reviews" ? "active" : ""}
              onClick={() => setTab("reviews")}
            >

              <svg
                viewBox="0 0 24 24"
                width="18"
                height="18"
              >

                <path
                  fill="currentColor"
                  d="M4 4h16v12H7l-3 3z"
                />

              </svg>

              <span>
                Client Reviews
              </span>

            </button>

          </div>


          {/* =================================================
              CLIENT REVIEWS
          ================================================= */}

          {tab === "reviews" && (

            <Slider
              {...reviewSlider}
              className="review-slider pp-slider"
            >

              {reviews.map((r, i) => (

                <div
                  key={i}
                  className="card-ne"
                >

                  <div className="review-card">


                    <div className="review-top">

                      <div className="review-user">

                        <img
                          src={r.avatar}
                          className="review-avatar"
                          alt={r.name}
                        />

                        <div>

                          <h4>
                            {r.name}
                          </h4>

                          <span>
                            {r.role}
                          </span>

                        </div>

                      </div>

                    </div>


                    <div className="stars">

                      <img
                        src={r.imgreview}
                        alt=""
                      />

                    </div>


                    <h3>
                      {r.title}
                    </h3>


                    <p>
                      {r.review}
                    </p>


                    <div className="review-bottom">

                      <span>

                        <strong>
                          {r.smalltext}
                        </strong>

                      </span>

                    </div>


                  </div>

                </div>

              ))}

            </Slider>

          )}


          {/* =================================================
              CLIENT STORIES / VIDEOS
          ================================================= */}

          {tab === "videos" && (

            <div className="vt-section pp-slider">

        


              {/* DESKTOP */}

              <div className="vtt-grid desktop-section">

                {testimonials.map((item, index) => (

                  <div key={index}>

                    <div
                      className="vt-card"
                      onClick={() =>
                        setActiveVideo(item.video)
                      }
                    >

                      <img
                        src={item.img}
                        alt={item.name}
                      />


                      <div className="playBtntest">

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="50"
                          height="50"
                          viewBox="0 0 24 24"
                          fill="white"
                        >

                          <path d="M8 5v14l11-7z" />

                        </svg>

                      </div>

                    </div>

                  </div>

                ))}

              </div>


              {/* MOBILE */}

              <Slider
                {...videoSlider}
                className="for-mobile-only"
              >

                {testimonials.map((item, index) => (

                  <div key={index}>

                    <div
                      className="vt-card"
                      onClick={() =>
                        setActiveVideo(item.video)
                      }
                    >

                      <img
                        src={item.img}
                        alt={item.name}
                      />


                      <div className="playBtntest">

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="50"
                          height="50"
                          viewBox="0 0 24 24"
                          fill="white"
                        >

                          <path d="M8 5v14l11-7z" />

                        </svg>

                      </div>

                    </div>

                  </div>

                ))}

              </Slider>

            </div>

          )}

        </div>

      </section>


      {/* =====================================================
          VIDEO POPUP
      ===================================================== */}

      {activeVideo && (

        <div
          className="vt-popup"
          onClick={() => setActiveVideo(null)}
        >

          <div
            className="vt-popup-content"
            onClick={(e) =>
              e.stopPropagation()
            }
          >

            <video
              src={activeVideo}
              controls
              autoPlay
            />

          </div>

        </div>

      )}

    </>
  );
}