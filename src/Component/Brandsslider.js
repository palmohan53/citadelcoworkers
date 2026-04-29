import React, { useState } from "react";

export default function FeaturedInMarqueeFixedLabel() {
  const [activePopup, setActivePopup] = useState(null);

  const logos = [
       {
      src: "https://virtualassistant24x7.com/wp-content/uploads/2026/01/apnew-logo-1.png",
      alt: "Associated Press",
      Image: "https://virtualassistant24x7.com/wp-content/uploads/2026/03/New-ap-1-scaled.webp"
    },
    {
      src: "https://virtualassistant24x7.com/wp-content/uploads/2026/03/The-Chronicle-Journal.webp",
      alt: "The Chronicle Journal",
      Image: "https://virtualassistant24x7.com/wp-content/uploads/2026/03/The-Chronicle-Journal-1-scaled.webp"
    },
     {
      src: "https://virtualassistant24x7.com/wp-content/uploads/2026/03/bc-logo-1.webp",
      alt: "Barchart",
      Image: "https://virtualassistant24x7.com/wp-content/uploads/2026/03/bar-scaled.webp"
    },
     {
      src: "https://virtualassistant24x7.com/wp-content/uploads/2026/03/openpr-logo-slogan.webp",
      alt: "Open PR",
      Image: "https://virtualassistant24x7.com/wp-content/uploads/2026/03/Open-PR-scaled.webp"
    },

    
     {
      src: "https://virtualassistant24x7.com/wp-content/uploads/2026/03/Am-news.webp",
      alt: "Morning News",
      Image: "https://virtualassistant24x7.com/wp-content/uploads/2026/03/Am-news-1-scaled.webp"
    },

     {
      src: "https://virtualassistant24x7.com/wp-content/uploads/2026/03/fin-1.webp",
      alt: "Financial content ",
      Image: "https://virtualassistant24x7.com/wp-content/uploads/2026/03/Financial-content-1-scaled.webp"
    },
	
	
 
	
	{
      src: "https://virtualassistant24x7.com/wp-content/uploads/2026/03/getnews.webp",
      alt: "Get news",
      Image: "https://virtualassistant24x7.com/wp-content/uploads/2026/03/Get-scaled.webp"
    },
	
	{
      src: "https://virtualassistant24x7.com/wp-content/uploads/2026/03/xpr.webp",
      alt: "XPR media",
      Image: "https://virtualassistant24x7.com/wp-content/uploads/2026/03/xpr-2-scaled.webp"
    },
	{
      src: "https://virtualassistant24x7.com/wp-content/uploads/2026/03/business-insurance-logo.webp",
      alt: "Business Insurance",
      Image: "https://virtualassistant24x7.com/wp-content/uploads/2026/03/bus-scaled.webp"
    },
	
	
	
	
	{
      src: "https://virtualassistant24x7.com/wp-content/uploads/2026/03/news.atlantanews-online.com_.webp",
      alt: "Altana news",
      Image: "https://virtualassistant24x7.com/wp-content/uploads/2026/03/lta-scaled.webp"
    },
    	{
      src: "https://virtualassistant24x7.com/wp-content/uploads/2026/04/evaluation-tech-1-e1595253356825.webp",
      alt: "evaluation tech",
      Image: "https://virtualassistant24x7.com/wp-content/uploads/2026/04/ti-scaled.webp"
    },

    	{
      src: "https://virtualassistant24x7.com/wp-content/uploads/2026/04/Aologo.webp",
      alt: "Ai",
      Image: "https://virtualassistant24x7.com/wp-content/uploads/2026/04/Tech-scaled.webp"
    },
    {
      src: "https://virtualassistant24x7.com/wp-content/uploads/2026/04/tech-vts.webp",
      alt: "Ai",
      Image: "https://virtualassistant24x7.com/wp-content/uploads/2026/04/tecf-scaled.webp"
    },
    
    {
      src: "https://virtualassistant24x7.com/wp-content/uploads/2026/04/Tech-Gadget-X.webp",
      alt: "tech",
      Image: "https://virtualassistant24x7.com/wp-content/uploads/2026/04/tech-1-scaled.webp"
    },
  ];

  return (
    <>
      <style>{`
        .fi-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 16px;
        }

        .fi-row {
          display: flex;
          align-items: center;
          gap: 24px;
        }

        .fi-label {
          min-width: 140px;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 1px;
        }

        .fi-marquee {
          flex: 1;
          overflow: hidden;
        }

        .fi-track {
          display: flex;
          width: max-content;
          align-items: center;
          animation: scroll 30s linear infinite;
        }

        .fi-item {
          padding: 0 30px;
          cursor: pointer;
        }

        .fi-logo {
          width: 150px;
          object-fit: contain;
        }

        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .fi-marquee:hover .fi-track {
          animation-play-state: paused;
        }

        /* MODAL */
        .fi-modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0,0,0,0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
        }

        .fi-modal-content {
          background: #fff;
          width: 80%;
          max-width: 900px;
          max-height: 80vh;
          overflow-y: auto;
          border-radius: 8px;
          padding: 20px;
          position: relative;
        }

        .fi-close {
          position: absolute;
          top: 10px;
          right: 15px;
          font-size: 20px;
          cursor: pointer;
        }

        @media (max-width: 768px) {
          .fi-modal-content {
            width: 95%;
          }
        }
      `}</style>

      <div className="fi-container">
        <div className="fi-row">
          <div className="fi-label">FEATURED IN</div>

          <div className="fi-marquee">
            <div className="fi-track">
              {[...logos, ...logos].map((logo, idx) => (
                <div
                  className="fi-item"
                  key={idx}
                  onClick={() => setActivePopup(logo)}
                >
                  <img src={logo.src} className="fi-logo" alt={logo.alt} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* POPUP */}
      {activePopup && (
        <div className="fi-modal" onClick={() => setActivePopup(null)}>
          <div
            className="fi-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="fi-close" onClick={() => setActivePopup(null)}>
              ✕
            </div>

        
<img
  src={activePopup.Image}
  alt=""
  style={{
    width: "100%",
    height: "auto",
    borderRadius: "6px",
    marginTop: "30px",
  }}
/>
        
          </div>
        </div>
      )}
    </>
  );
}