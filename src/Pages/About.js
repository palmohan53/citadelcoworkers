import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
const About = () => {
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
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
  const statsRef = useRef(null);
  const [startCount, setStartCount] = useState(false);

  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  /* =====================
     ⭐ ADD BODY CLASS
  ===================== */
  useEffect(() => {
    document.body.classList.add("aboutpage");
    return () => {
      document.body.classList.remove("aboutpage");
    };
  }, []);

  /* =====================
     ⭐ SCROLL REVEAL (FIXED)
  ===================== */
  useEffect(() => {

    const container = document.querySelector(".bannerfullheight");
    if (!container) return;

    const elements = container.querySelectorAll(".reveal");
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -80px 0px",
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();

  }, []);

  /* =====================
     ⭐ COUNTER TRIGGER
  ===================== */
  useEffect(() => {

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();

  }, []);

  /* =====================
     ⭐ COUNTER LOGIC
  ===================== */
  useEffect(() => {
    if (!startCount) return;

    const animate = (setter, target, duration = 2000) => {
      let start = 0;
      const increment = target / (duration / 16);

      const counter = setInterval(() => {
        start += increment;
        if (start >= target) {
          setter(target);
          clearInterval(counter);
        } else {
          setter(Math.floor(start));
        }
      }, 16);
    };

    animate(setCount1, 98);
    animate(setCount2, 48);
    animate(setCount3, 200);

  }, [startCount]);

  return (
    <div className="bannerfullheight">

      <section className="innerBanner">
        <div className="container">

          <section className="aboutpage">
            <div className="top-content-about">

              <div className="about reveal reveal-bottom">

                <span className="tag">
                 About Citadel Coworkers
                </span>

                <h1 className="title">
                  Empowering Businesses <br />
                  <span className="greenText">
                    With Top Virtual Talent
                  </span>
                </h1>

                <p>
                  Our mission is to help businesses around the world build a 
                  high-performing and professional team. We bridge the talent 
                  gap by connecting you with talented virtual employees in India 
                  who become part of your team to help scale faster, reduce 
                  overhead costs and maintain quality throughout.
                </p>

                <div className="about-button">
                  <a href="/contact-us" className="btn primary">
                      Get Started Today →
                  </a>

                
                </div>

                {/* =====================
                   ⭐ COUNTER SECTION
                ===================== */}

                <div className="stats-section reveal" ref={statsRef}>

                  <div className="stat-box">
                    <h2>{count1}%</h2>
                    <p>Client Satisfaction</p>
                  </div>

                  <div className="stat-box">
                    <h2>{count2}h</h2>
                    <p>Talent Matching</p>
                  </div>

                  <div className="stat-box">
                    <h2>{count3}+</h2>
                    <p>Companies Served</p>
                  </div>

                </div>

              </div>

            </div>
          </section>

        </div>
      </section>
<section className="approach-section-2026">

  <div className="container approach-layout reveal">

    <div className="approach-content">
      <span className="section-label">OUR APPROACH</span>

      <h2>
        Building High-Performance <br />
      <span className="greenText">Remote Teams</span>
      </h2>

      <p>
        We believe that great talent can be found everywhere. We connect you 
        with handpicked candidates and vet them for skills and professionalism 
        so you get the staff that can hit the ground running.
      </p>

      <p>
        From startups to enterprises, we help organizations scale seamlessly.
      </p>
    </div>

  </div>

</section>
<section className="approach-2026-bg">

  {/* decorative background layers */}


  <div className="container approach-wrapper">

    {/* LEFT CONTENT */}
    <div className="approach-left reveal reveal-left">
      <span className="section-label">OUR PROMISE</span>

      <h2>
        The Citadel <span className="greenText">Advantage</span>
      </h2>

      <p>
      We reshape how companies build remote teams, making top talent accessible to everyone, anywhere in the world, without any compromise. 
      </p>

    
    </div>

    {/* RIGHT PROCESS BLOCKS */}
    <div className="approach-right reveal reveal-right">

      <div className="approach-card ">
        <span className="step-no">01</span>
        <h4>Top 3% Experts</h4>
        <p>
         Rigorously screened professionals. Only the best make it through our selection process. 

        </p>
      </div>

      <div className="approach-card ">
        <span className="step-no">02</span>
        <h4>Flexible Models</h4>
        <p>
         Hire hourly, part-time or full-time. Scale based on your project needs. 

        </p>
      </div>

      <div className="approach-card ">
        <span className="step-no">03</span>
        <h4>Cost Effective 
</h4>
        <p>
         Reduce operational costs by up to 60% without compromising quality.

        </p>
      </div>
  <div className="approach-card ">
        <span className="step-no">04</span>
        <h4>End-to-End Support</h4>
        <p>
         We manage hiring, onboarding and payroll so you focus on growth. 
        </p>
      </div>
    </div>

  </div>
  <div className="container">
  <div className="  Advantage-card reveal-bottom  ">
  <div className="cc-impact-content ">
        <p>Discover how The Citadel Advantage helps businesses build high-performing remote teams faster and more cost-effectively.
 </p>
      </div>
	  <div className="">
        <a href="https://www.citadelcoworkers.com/" class="cc-btn">Explore The Citadel Advantage</a>
      </div>
  </div>
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

        
<section className="final-cta-boxed">

  <div className="cta-content">

 

    <h2>
      Ready To Build Your <br />
     <span className="greenText">Dream Team?</span>
    </h2>

    <p>
      Join hundreds of companies that trust Citadel Coworkers
      to scale their operations with elite virtual talent.
    </p>
<div className="about-button"><a href="/contact-us" className="btn primary">  Get Started Today →</a></div>
  

  

  </div>
        
</section>

    </div>
  );
};

export default About;