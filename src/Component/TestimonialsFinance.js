import React, { memo, lazy, Suspense } from "react";

const Slider = lazy(() => import("react-slick"));

const FiveStars = memo(() => (
  <svg
    width="140"
    height="24"
    viewBox="0 0 140 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 1.5L15.09 8.26L22.5 9.27L17 14.14L18.18 21.5L12 17.77L5.82 21.5L7 14.14L1.5 9.27L8.91 8.26L12 1.5Z" fill="#F5B544"/>
    <path d="M40 1.5L43.09 8.26L50.5 9.27L45 14.14L46.18 21.5L40 17.77L33.82 21.5L35 14.14L29.5 9.27L36.91 8.26L40 1.5Z" fill="#F5B544"/>
    <path d="M68 1.5L71.09 8.26L78.5 9.27L73 14.14L74.18 21.5L68 17.77L61.82 21.5L63 14.14L57.5 9.27L64.91 8.26L68 1.5Z" fill="#F5B544"/>
    <path d="M96 1.5L99.09 8.26L106.5 9.27L101 14.14L102.18 21.5L96 17.77L89.82 21.5L91 14.14L85.5 9.27L92.91 8.26L96 1.5Z" fill="#F5B544"/>
    <path d="M124 1.5L127.09 8.26L134.5 9.27L129 14.14L130.18 21.5L124 17.77L117.82 21.5L119 14.14L113.5 9.27L120.91 8.26L124 1.5Z" fill="#F5B544"/>
  </svg>
));

const Testclinetlogo = memo(() => (
  <svg
    width="120"
    height="120"
    viewBox="0 0 120 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="60" cy="60" r="60" fill="#2563EB"/>
    <circle cx="60" cy="45" r="22" fill="#ffffff"/>
    <path d="M30 98C30 80 43 68 60 68C77 68 90 80 90 98" fill="#ffffff"/>
  </svg>
));

  const settings2 = {
    dots: true,
    infinite: true,
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

const TestimonialsFinance = () => {
  return (
 <section className="citadel-testimonial ">
            <div className="container">
<div className="mini-badge">Client Success Stories</div>
              <h2>Results From Teams Who Trust Us With <span className="color-high">Their Books</span></h2>
   <div className="nda-badge">
      🔒 Most clients anonymized under NDA
    </div>
              <div className="testmonial-slider">
                <Suspense fallback={<div />}>
 <Slider {...settings2} className="pp-slider">

                {/* CARD 1 */}
                <div>
				
				
				
				
                  <div className="testimonial-card">
				  
				  
				    <div className="company-row">

        <div className="logo logo-whitouy-bg">
        <img src="/images/Rhythm-Logo.webp" alt="Rhythm Superfoods" />
        </div>

        <div className="company-info">

          <h3>Rhythm Superfoods</h3>

          <div className="meta">

            <div className="featured">
              ★ FEATURED
            </div>

            <span>Food & Beverage</span>

            <span>•</span>

           <span className="country-color">Austin, TX • USA</span>

          </div>

        </div>

      </div>

      <div className="text">
        Citadel built a finance function we never had to think about — clean monthly closes,
        real-time dashboards, and a team that genuinely cares about the numbers.
        They feel like an extension of our company, not a vendor.
      </div>

      <div className="bottom-row">

        <div className="stat-box">
          <h4>4 yrs</h4>
          <p>PARTNERSHIP</p>
        </div>

        <div className="stat-box">
          <h4>100%</h4>
          <p>ON-TIME</p>
        </div>

        <div className="stars">
          <FiveStars />
        </div>

      </div>
	  
                    

                


                   

                  </div>
                </div>

                {/* CARD 2 */}
                    <div>
				
				
				
				
                  <div className="testimonial-card">
				  
				  
				    <div className="company-row">

        <div className="logo">
         <Testclinetlogo></Testclinetlogo>
        </div>

        <div className="company-info">

          <h3>Co-founder & CEO</h3>

          <div className="meta">

            <div className="featured">
              NDA
            </div>

          <span>•</span>

            <span>B2B SaaS • FinTech •<span className="country-color"> London • UK</span></span>

          </div>

        </div>

      </div>

      <div className="text">
        Citadel cleaned up two years of messy QuickBooks data ahead of our Series A. Within a month they reclassified everything, rebuilt revenue schedules and produced board-ready financials. Our diligence call lasted twenty minutes.
      </div>

      <div className="bottom-row">

        <div className="stat-box">
          <h4>20 min</h4>
          <p>DILIGENCE</p>
        </div>

        <div className="stat-box">
          <h4>Series A</h4>
          <p>CLOSED</p>
        </div>

        <div className="stars">
            <FiveStars />
        </div>

      </div>
	  
                    

                


                   

                  </div>
                </div>


                {/* CARD 3 */}
             <div>
				
				
				
				
                  <div className="testimonial-card">
				  
				  
				    <div className="company-row">

        <div className="logo">
          <Testclinetlogo></Testclinetlogo>
        </div>

        <div className="company-info">

          <h3>Practice Owner & Principal</h3>

          <div className="meta">

            <div className="featured">
            HIPAA
            </div>

           <span>•</span>

            <span>Multi-site Healthcare •<span className="country-color">  Melbourne • Australia</span></span>

          </div>

        </div>

      </div>

      <div className="text">
        Running a multi-location practice, payroll and compliance used to swallow my entire week. Citadel took it over end-to-end Xero migration, payroll runs, BAS lodgements, the lot. I got my evenings back, and the books are the cleanest they've ever been.
      </div>

      <div className="bottom-row">

        <div className="stat-box">
          <h4>3 Sites</h4>
          <p>CONSOLIDATED</p>
        </div>

        <div className="stat-box">
          <h4>40+</h4>
          <p>ON PAYROLL</p>
        </div>

        <div className="stars">
             <FiveStars />
        </div>

      </div>
	  
                    

                


                   

                  </div>
                </div>
				
				
				
				
				
			
				
				
				
				
</Slider>
</Suspense>
              </div>

            </div>
          </section>
  );
};

export default memo(TestimonialsFinance);