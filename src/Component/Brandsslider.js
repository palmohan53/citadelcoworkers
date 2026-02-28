import React from "react";

export default function FeaturedInMarqueeFixedLabel() {
  const logos = [
    { src: "https://virtualassistant24x7.com/wp-content/uploads/2026/01/Business-Insider-Logo.png", alt: "The Economic Times" },
    { src: "https://virtualassistant24x7.com/wp-content/uploads/2026/01/apnew-logo-1.png", alt: "Business Insider" },
    { src: "https://virtualassistant24x7.com/wp-content/uploads/2026/01/Untitled-design-6.png", alt: "Associated Press" },
    { src: "https://virtualassistant24x7.com/wp-content/uploads/2026/01/Deccan_Herald_logo.png", alt: "Deccan Herald" },
    { src: "https://virtualassistant24x7.com/wp-content/uploads/2026/01/1413842518-entrepreneur-logo.jpg", alt: "Digital Journal" },
    { src: "https://virtualassistant24x7.com/wp-content/uploads/2026/01/images.png", alt: "TechBullion" },
    { src: "https://virtualassistant24x7.com/wp-content/uploads/2026/01/Zee_Business_2025.svg_.png", alt: "Vents Magazine" },
    { src: "https://virtualassistant24x7.com/wp-content/uploads/2026/01/2a34d8_e962671bff2c494d90d3da7f4f416f7dmv2.jpg", alt: "Benzinga" },
     { src: "https://virtualassistant24x7.com/wp-content/uploads/2026/01/CNBC_2023.svg_.png", alt: "Benzinga" },
  ];

  return (
    <>
      <style>{`
      

        .fi-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 16px;
        }

        /* Main row */
        .fi-row {
          display: flex;
          align-items: center;
          gap: 24px;
        }

        /* Left fixed label */
        .fi-label {
          flex: 0 0 auto;
          min-width: 140px;            /* label width fix */
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 1px;
          color: #111;
          white-space: nowrap;
        }

        /* Marquee area (only logos move) */
        .fi-marquee {
          flex: 1 1 auto;
          overflow: hidden;
          position: relative;
        }

        .fi-track {
          display: flex;
          align-items: center;
          width: max-content;
          animation: fiMarquee 20s linear infinite;
        }

        .fi-item {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 30px;
   
          box-sizing: border-box;
          white-space: nowrap;
        }

        .fi-logo {
   
          width: 100px;
          max-width: 220px;
          object-fit: contain;
          display: block;
        }

        @keyframes fiMarquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        /* Hover pause */
        .fi-marquee:hover .fi-track {
          animation-play-state: paused;
        }

        /* Mobile */
        @media (max-width: 768px) {
          .fi-label { min-width: 110px; font-size: 13px; }
          .fi-item { padding: 0 18px; height: 56px; }
          .fi-logo { height: 36px; max-width: 180px; }
          .fi-track { animation-duration: 16s; }
        }
      `}</style>

      <div className="fi-strip">
        <div className="fi-container">
          <div className="fi-row">
            {/* ✅ Fixed text (does not move) */}
            <div className="fi-label">FEATURED IN</div>

            {/* ✅ Only logos move */}
            <div className="fi-marquee">
              <div className="fi-track">
                {[...logos, ...logos].map((logo, idx) => (
                  <div className="fi-item" key={idx}>
                    <img className="fi-logo" src={logo.src} alt={logo.alt} />
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
