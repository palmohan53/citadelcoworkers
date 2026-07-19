import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ChevronLeft = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path
      d="M15 18l-6-6 6-6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ChevronRight = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path
      d="M9 6l6 6-6 6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Quote = ({ size = 32, color = "#FF5A3C" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <path d="M9.5 6C6.46 6 4 8.46 4 11.5c0 2.76 2.02 5.04 4.66 5.45-.36 1.3-1.3 2.4-2.66 2.9v1.6c3.06-.5 5.5-3.06 5.5-6.45V11.5C11.5 8.46 9.5 6 9.5 6z" />
    <path d="M18 6c-3.04 0-5.5 2.46-5.5 5.5 0 2.76 2.02 5.04 4.66 5.45-.36 1.3-1.3 2.4-2.66 2.9v1.6c3.06-.5 5.5-3.06 5.5-6.45V11.5C20 8.46 18 6 18 6z" />
  </svg>
);

const Play = ({ size = 12, color = "#fff" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <path d="M8 5v14l11-7z" />
  </svg>
);

const clients = [
  {
    id: 1,
    name: "Laura Katsiotis",
    role: "",
    tag: "HIGHLY RECOMMEND",
    sub: "",
        video: "/images/laura.mp4",
    poster: "/images/laura.webp",
    quote:
      "Laura works in finance and knows better than most how critical accurate bookkeeping is. In this testimonial, she shares why she turned to Citadel Coworkers to bring in the right support and why she hasn't looked back. ",
    title: "How Citadel Coworkers Helped Laura Find the Right Bookkeeping Support for Her Finance Business",
  },
  {
    id: 2,
    name: "Michael Lin",
    role: "",
    tag: "N",
    sub: "",
    quote:
      "When Michael realised his team was missing out on business because of disorganised processes, he knew something had to change. With Citadel Coworkers keeping their CRM on track. Watch how the team got their CRM organised, stopped tasks from piling up, and finally had a system that works.",
    title: "Michael's Story: From Missing Out on Business to a Fully Organized CRM | Citadel Coworkers ",
          video: "/images/mich.mp4",
    poster: "/images/Michael Lin.webp",
  },
  {
    id: 3,
    name: "David Holmes",
    role: "",
    tag: "",
    sub: "",
    quote:
      "What would you do with a few extra hours every week? David was spending hours every week managing his calendar and chasing follow-ups — until he found Citadel Coworkers. In this testimonial, he shares exactly how the platform freed up his time and helped him grow his business.",
    title: "It Completely Changed My Business' – David's Review of Citadel Coworkers ",
          video: "/images/davidtest.mp4",
    poster: "/images/davidholenm.webp",
  },
  {
    id: 4,
    name: "Olivia Thompson",
    role: "",
    tag: "",
    sub: "",
    quote:
   "Olivia didn't think managing clients and scheduling could get easier — until she tried working with a VA from Citadel. In this short testimonial, she shares exactly what changed for her and why she can't imagine working without it.",
    title: "Customer Spotlight: Olivia Shares Her Experience with Citadel Coworkers ",
          video: "/images/olivatestimonial.mp4",
    poster: "/images/Olivia Thompson.webp",
  },
  {
    id: 5,
    name: "Kelsey Yates",
    role: "",
    tag: "",
    sub: "",
    quote:
      "When this furniture ecommerce owner needed reliable remote support, she turned to Citadel Coworkers and her hire has now been with her for over 2 years. Kind, computer-savvy, and always delivering, he's become an integral part of her business. ",
    title: "2+ Years of Trusted Remote Talent – A Furniture Ecommerce Owner's Story | Citadel Coworkers",
        video: "/images/kaytes.mp4",
    poster: "/images/Kelsey Yates.webp",
  },
   
];

const styles = {
  wrap: {
    width: "100%",
    background: "#F7F8FC",
    padding: "64px 24px",

    boxSizing: "border-box",
  },
  inner: { maxWidth: 1000, margin: "0 auto" },
  eyebrowWrap: { display: "flex", justifyContent: "center", marginBottom: 16 },
  eyebrow: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    fontSize: 11,
    letterSpacing: "0.2em",
    fontWeight: 600,
    color: "#FF5A3C",
    textTransform: "uppercase",
  },
  eyebrowDot: {
    width: 6,
    height: 6,
    borderRadius: "50%",
    background: "#FF5A3C",
    display: "inline-block",
  },
  heading: {
    textAlign: "center",
    fontSize: 34,
    fontWeight: 800,
    color: "#0B1B33",
    lineHeight: 1.25,
    margin: 0,
  },
  accent: { color: "#FF5A3C" },
  subtext: {
    textAlign: "center",
    fontSize: 14,
    color: "#5B6478",
    maxWidth: 620,
    margin: "16px auto 0",
    lineHeight: 1.6,
  },
  mainGrid: {
    marginTop: 40,
    display: "grid",
    gridTemplateColumns: "1.4fr 1fr",
    gap: 24,
    alignItems: "stretch",
  },
  videoCard: {
    position: "relative",
    borderRadius: 16,
    overflow: "hidden",
    background: "#0B1B33",
    aspectRatio: "16 / 9",
    cursor: "pointer",
  },
  videoBg: {
    position: "absolute",
    inset: 0,
    opacity: 0.7,
    background:
      "linear-gradient(120deg, #0B1B33 0%, #10263f 45%, #123244 100%)",
  },
  videoBadge: {
    position: "absolute",
    top: 16,
    left: 16,
    display: "flex",
    alignItems: "center",
    gap: 8,
    background: "rgba(0,0,0,0.3)",
    backdropFilter: "blur(4px)",
    borderRadius: 999,
    padding: "6px 12px",
    zIndex: 2,
  },
  videoBadgeIcon: {
    width: 20,
    height: 20,
    borderRadius: "50%",
    background: "rgba(255,255,255,0.9)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  videoBadgeTitle: { color: "#fff", fontSize: 11, fontWeight: 600, margin: 0 },
  videoBadgeSub: { color: "#c5d4ff", fontSize: 10, margin: 0 },
  videoContent: {
    position: "relative",
    height: "100%",
    display: "flex",
    alignItems: "center",
    padding: "0 32px",
    zIndex: 1,
  },
  videoTitle: {
    color: "#fff",
    fontSize: 26,
    fontWeight: 800,
    lineHeight: 1.2,
    margin: 0,
  },
  videoBrandRow: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    marginTop: 4,
  },
  videoBrandIcon: {
    background: "#dc2626",
    borderRadius: 4,
    padding: 4,
    display: "flex",
  },
  videoBrand: {
    color: "#FF5A3C",
    fontSize: 32,
    fontWeight: 900,
    letterSpacing: "-0.02em",
  },
  videoPill: {
    marginTop: 12,
    display: "inline-block",
    background: "#FF5A3C",
    color: "#fff",
    fontSize: 10,
    fontWeight: 700,
    letterSpacing: "0.03em",
    padding: "6px 12px",
    borderRadius: 999,
  },
  videoPerson: { marginTop: 24 },
  videoPersonName: {
    color: "#FF5A3C",
    fontWeight: 700,
    fontSize: 14,
    textTransform: "uppercase",
    margin: 0,
  },
  videoPersonRole: {
    color: "rgba(255,255,255,0.6)",
    fontSize: 10,
    textTransform: "uppercase",
    letterSpacing: "0.03em",
    margin: 0,
  },
  videoControls: {
    position: "absolute",
    bottom: 12,
    left: 16,
    right: 16,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    color: "rgba(255,255,255,0.7)",
    zIndex: 2,
  },
  videoControlsLeft: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    fontSize: 12,
  },
  videoProgress: {
    width: 64,
    height: 2,
    background: "rgba(255,255,255,0.3)",
    borderRadius: 999,
    display: "inline-block",
  },
  videoWatch: {
    fontSize: 10,
    background: "rgba(0,0,0,0.3)",
    padding: "4px 8px",
    borderRadius: 4,
  },
  quoteCard: {
    background: "#fff",
    borderRadius: 16,
    padding: 28,
    display: "flex",
    flexDirection: "column",
    boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
    boxSizing: "border-box",
  },
  quoteTitle: {
    marginTop: 12,
    fontSize: 18,
    fontWeight: 700,
    color: "#0B1B33",
  },
  quoteText: {
    marginTop: 12,
    fontSize: 13,
    lineHeight: 1.7,
    color: "#5B6478",
    flex: 1,
  },
  quoteFooter: {
    marginTop: 16,
    paddingTop: 16,
    borderTop: "1px solid #f0f0f0",
  },
  quoteName: { fontWeight: 700, fontSize: 14, color: "#0B1B33", margin: 0 },
  quoteRole: {
    fontSize: 11,
    color: "#8A93A6",
    textTransform: "uppercase",
    letterSpacing: "0.03em",
    margin: "4px 0 0",
  },
  clientsWrap: { marginTop: 40 },
  clientsHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  clientsTitle: { fontSize: 18, fontWeight: 700, color: "#0B1B33", margin: 0 },
  arrowsRow: { display: "flex", alignItems: "center", gap: 8 },
  arrowBtn: {
    width: 32,
    height: 32,
    borderRadius: 8,
    border: "1px solid #d1d5db",
    background: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#0B1B33",
    cursor: "pointer",
  },
  arrowBtnStrong: {
    width: 32,
    height: 32,
    borderRadius: 8,
    border: "2px solid #0B1B33",
    background: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#0B1B33",
    cursor: "pointer",
  },
  slidePad: { padding: "0 8px", boxSizing: "border-box" },
  clientCardBase: {
    position: "relative",
    width: "100%",
    borderRadius: 12,
    overflow: "hidden",
    aspectRatio: "16 / 9",
    textAlign: "left",
    padding:"10px",
    marginTop: "15px",
    background:"#ccc",
    border: "none",
    padding: 0,
    cursor: "pointer",
    background: "linear-gradient(135deg, #0B1B33 0%, #14293f 100%)",
    boxSizing: "border-box",
  },
  clientTop: {
    position: "absolute",
    top: 8,
    left: 8,
    display: "flex",
    alignItems: "center",
    gap: 4,
  },
  clientDot: {
    width: 12,
    height: 12,
    borderRadius: "50%",
    background: "rgba(255,255,255,0.2)",
  },
  clientBrand: {
    color: "rgba(255,255,255,0.5)",
    fontSize: 7,
    fontWeight: 600,
  },
  clientBottom: { position: "absolute", left: 8, right: 8, bottom: 8 },
  clientTag: {
    color: "#FF5A3C",
    fontSize: 9,
    fontWeight: 700,
    lineHeight: 1.2,
    margin: 0,
  },
  clientSub: {
    color: "#fff",
    fontSize: 12,
    fontWeight: 800,
    lineHeight: 1.2,
    margin: 0,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  clientNameRow: {
    marginTop: 4,
    display: "flex",
    alignItems: "center",
    gap: 4,
  },
  clientNameIcon: {
    width: 12,
    height: 12,
    borderRadius: 2,
    background: "rgba(255,255,255,0.1)",
  },
  clientName: {
    color: "rgba(255,255,255,0.7)",
    fontSize: 7,
    margin: 0,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
};
const testimonialSettings = {
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover: true,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
            },
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
            },
        },
    ],
};
export default function Testimonials() {
  const [active, setActive] = useState(3);
  const sliderRef = useRef(null);
  const testimonial = clients[active];

  const settings = {
    infinite: true,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    focusOnSelect: true,
    afterChange: (index) => setActive(index),
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 640, settings: { slidesToShow: 2 } },
    ],
  };
  const testimonialSliderSettings = {
  dots: true,
  arrows: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 3500,
  speed: 600,
  slidesToShow: 3,
  slidesToScroll: 1,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};
const testimonialData = [
  {
    id: 1,
    text: "The virtual assistant services from Citadel Coworkers have been invaluable to our operations. Their VAs are highly skilled, professional, and adaptable, handling a variety of tasks with ease. This service has allowed us to streamline our processes and focus on our core business activities.",
    name: "Sarah J",
  

    color: "#3B82F6",
    img:"https://www.citadelcoworkers.com/wp-content/uploads/2025/01/sarahj-1.png",
  },
  {
    id: 2,
    text: "The virtual assistant we hired from Citadel Coworkers has been a game-changer for our business. She seamlessly manages our administrative tasks, freeing up our time to focus on growing the company. Her professionalism, communication skills, and proactive approach have made a significant impact on our daily operations.",
    name: "Lisa M",
  
    img:"https://citadelcoworkers.com/wp-content/uploads/2025/01/lisam-1.png",
    color: "#D6A54A",
  },
  {
    id: 3,
    text: "The graphic design team at Citadel Coworkers brought our brand to life with their innovative designs. They perfectly captured our vision and produced stunning visuals that have significantly boosted our marketing efforts. Their creativity and professionalism are unmatched.",
    name: "Laura K",
    img:"https://citadelcoworkers.com/wp-content/uploads/2025/02/laura_k-1.png",
    color: "#182C57",
  },
  {
    id: 4,
    text: "Citadel Coworkers' graphic designers are true artists. They provided exceptional designs for our website and marketing materials that have helped elevate our brand image. Their attention to detail and commitment to delivering high-quality work made the entire process smooth and enjoyable.",
    name: "John P",
    img:"https://citadelcoworkers.com/wp-content/uploads/2025/02/john_p-1.png",
  
    color: "#666",
  },
  {
    id: 5,
    text: "The team at Citadel demonstrated real expertise in legal process outsourcing. From day one, they took ownership of their tasks and helped us optimize our internal processes. Communication was always timely, and the overall experience felt highly dependable and stress-free.",
    name: "Lily T",
    img:"https://citadelcoworkers.com/wp-content/uploads/2025/03/lily_t-1.png",
   
    color: "#3B82F6",
  },
  {
    id: 6,
    text: "We partnered with Citadel Coworkers for legal process outsourcing and it’s been an excellent experience. Their proactive efforts and attention to detail helped us enhance performance, reduce downtime, and maintain consistent quality. I'd gladly recommend them to anyone seeking reliable support in this space.",
  
      name: "Jack R",
    img:"https://citadelcoworkers.com/wp-content/uploads/2025/03/jack_r-1.png",
    color: "#10B981",
  },
  {
    id: 7,
    text: "The website development services from Citadel Coworkers were outstanding. They took our ideas and turned them into a fully functional and visually appealing website. Their attention to detail, technical expertise, and dedication to meeting deadlines made the project a success.",
    name: "Rachel B",
    img: "https://citadelcoworkers.com/wp-content/uploads/2025/01/rachel-1.png",
    initials: "JM",
    color: "#F97316",
  },
  {
    id: 8,
    text: "Citadel Coworkers’ digital illustrator redesigned our app icons and marketing graphics. Their usage of a consistent new style made users more interested and lowered the bounce rate on our landing pages. ",
    name: "Olivia Bennett",
    img: "https://virtualassistant24x7.com/wp-content/uploads/2026/01/New-Emma.webp",
    initials: "ES",
    color: "#8B5CF6",
  },

    {
    id: 9,
    text: "Our SaaS funnel was easily understood by the Citadel Coworkers' offshore PPC expert. They got better at targeting keywords, built great remarketing sequences and improved their landing sites.",
    name: "Daniel Roberts",
    img: "https://virtualassistant24x7.com/wp-content/uploads/2026/01/daniele.webp",
    initials: "ES",
    color: "#8B5CF6",
  },


    {
    id: 10,
    text: "Outsourcing Photoshop work felt risky at first. What surprised us was how well Citadel’s Adobe Photoshop expert understood our brand guidelines better than some local agencies we’ve used. ",
    name: "Emma Collins",
    img: "https://virtualassistant24x7.com/wp-content/uploads/2026/01/emma.webp",
    initials: "ES",
    color: "#8B5CF6",
  },
];
  const [visible, setVisible] = useState(6);
  return (
    
    <div >
	<section class="hero-section-test">

    <div class="container">

        <div class="hero-grid">

            <div class="hero-content">

                <span class="hero-tag">
                    Wall of Love
                </span>

                <h1>
                   Teams That  

                    <span> Scale </span>
                   With Citadel Don't Go Back.
                </h1>

                <p>
                   Hear from the operators, founders, and engineering leaders who built world-class virtual teams with our vetted remote coworkers.

                </p>

               

            </div>

            <div class="hero-image">

                <img
                    src="/images/testimonmial.webp"
                    alt="Happy Client"
              /  >

            </div>

        </div>

    </div>

</section>
<section>
      <div  className="container">
        {/* Eyebrow */}
       
<div class="section-title">
        {/* Heading */}
        <h2>
          Take A Look At Our Valuable
          <br />
          Client's Testimonials
        </h2>
</div>
        <p>
          Our client's experiences and feedback are the heartbeat of our work. We
          deliver projects and build relationships with our clients, and their
          testimonials are living proof of the trust and satisfaction we've earned.
        </p>

        {/* Main testimonial grid */}
        <div style={styles.mainGrid} className="wol-main-grid">
          {/* Video card */}
          <div style={styles.videoCard}>
       <video
    key={testimonial.id}
    controls
    preload="metadata"
    poster={testimonial.poster}
    style={{
        width:"100%",
        height:"100%",
        objectFit:"cover",
        borderRadius:"16px"
    }}
>
    <source
        src={testimonial.video}
        type="video/mp4"
    />
</video>
          

            <div style={styles.videoBadge}>
            
              <div>
            
           
              </div>
            </div>

            <div style={styles.videoContent}>
              <div>
                <p style={styles.videoTitle}>
                  Website Upgrade? <span style={styles.accent}>Call</span>
                </p>
                <div style={styles.videoBrandRow}>
                  <span style={styles.videoBrandIcon}>
                    <Play size={12} color="#fff" />
                  </span>
             
                </div>
                <div style={styles.videoPill}>
                  FAST, FLAWLESS, AND FRUSTRATION-FREE.
                </div>
                <div style={styles.videoPerson}>
                  <p style={styles.videoPersonName}>{testimonial.name}</p>
                  <p style={styles.videoPersonRole}>
                    {testimonial.role.split("—")[1] || "Client"}
                  </p>
                </div>
              </div>
            </div>

            <div style={styles.videoControls}>
              <div style={styles.videoControlsLeft}>
                <Play size={14} color="rgba(255,255,255,0.7)" />
                <span style={styles.videoProgress} />
              </div>
          
            </div>
          </div>

          {/* Quote panel */}
          <div style={styles.quoteCard}>
            <Quote size={32} />
            <h3 style={styles.quoteTitle}>{testimonial.title}</h3>
            <p style={styles.quoteText}>{testimonial.quote}</p>
            <div style={styles.quoteFooter}>
              <p style={styles.quoteName}>{testimonial.name}</p>
              <p style={styles.quoteRole}>{testimonial.role}</p>
            </div>
          </div>
        </div>

        {/* Our Clients — Slick Slider */}
        <div style={styles.clientsWrap}>
          <div style={styles.clientsHeader}>
            <h4 style={styles.clientsTitle}>Our Clients</h4>
            <div style={styles.arrowsRow}>
              <button
                onClick={() => sliderRef.current?.slickPrev()}
                aria-label="Previous client"
                style={styles.arrowBtn}
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={() => sliderRef.current?.slickNext()}
                aria-label="Next client"
                style={styles.arrowBtnStrong}
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          <Slider ref={sliderRef} {...settings}>
            {clients.map((c, i) => (
              <div key={c.id} style={styles.slidePad}>
                <button
  onClick={() => {
    setActive(i);
    sliderRef.current?.slickGoTo(i);
  }}
  style={{
    ...styles.clientCardBase,
    boxShadow:
      i === active
        ? "0 0 0 2px #204ecf"
        : "0 0 0 1px transparent",
  }}
>

  <img
    src={c.poster}
    alt={c.name}
    style={{
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block",
    }}
  />





</button>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      </section>
  <section className="testimonial-section-page-sp">

      <div className="container">

        <div className="section-title">

          <span>CLIENT STORIES</span>

          <h2>
            Trusted by Businesses
            <br />
            Around the World
          </h2>

          <p>
            Real experiences from companies that scaled with Citadel.
          </p>

        </div>
<Slider
  {...testimonialSliderSettings}
  className="testimonial-slider pp-slider"
>
  {testimonialData.map((item) => (
    <div key={item.id} className="slider-test-page">
      <div className="testimonial-card">

        <div className="quote-icon">
          ❝
        </div>

        <p className="testimonial-text">
          {item.text}
        </p>

        <div className="testimonial-user">
          <img
            src={item.img}
            alt={item.name}
            className="testimonial-avatar"
          />

          <div>
            <h4>{item.name}</h4>
            <span>{item.role}</span>
          </div>
        </div>

      </div>
    </div>
  ))}
</Slider>
       


      </div>

    </section>

    <section class="cs-cta-section"><div class="container">
      <h2 class="cs-cta-title">Your Team's Next Chapter Starts Here.</h2><p class="cs-cta-sub">
        Join 500+ companies building leaner, faster, global teams with Citadel Coworkers.</p>
        <button class="cs-btn"><a href="/contact-us">Talk To Our Team →</a></button></div></section>
      {/* Small responsive tweak + slick slide height fix (kept minimal & scoped) */}
      <style>{`
      .section-title h2 {
    font-size: 42px;
    font-weight: bold;
    margin-bottom: 23px;
}
    section.cs-cta-section:before {
    content: "";
    position: absolute;
    inset: 0;
    background: url(https://virtualassistant24x7.com/wp-content/uploads/2026/04/30d8e6f35_generated_0493f725-1.png) center / cover no-repeat;
    opacity: 0.1;
    z-index: 1;
}
    section.cs-cta-section {
    align-items: center;
    background: radial-gradient(circle at 20% 20%, #1e3a8a, #020617);
    display: flex;
    justify-content: center;
    overflow: hidden;
    position: relative;
    text-align: center;
}
    .cs-cta-title {
    font-size: 32px;
    font-weight: 700;
    color: #fff;
    line-height: 1.15;
    margin-bottom: 16px;
    text-transform: capitalize;
}
    .cs-cta-sub {
    color: #fff;
    margin-bottom: 40px;
}
    .cs-btn {
    display: inline-block;
    background: #fff;
    color: #0f1117;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    padding: 16px 40px;
    border-radius: 100px;
    border: none;
    cursor: pointer;
    transition: background 0.2s, transform 0.15s;
    text-decoration: none;
    position: relative;
    z-index: 999;
}
        @media (max-width: 768px) {
          .wol-main-grid { grid-template-columns: 1fr !important; }
        }
        .slick-slide { height: auto; }
        .slick-slide > div { height: 100%; }
        .slick-track { display: flex; }
      `}</style>
    </div>
  );
}
