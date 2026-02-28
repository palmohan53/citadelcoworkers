import React from "react";

// ✅ props me json pass kar dena: <NewSection data={yourJson} />
const NewSection = ({ data }) => {
  // Safety defaults
  const headingObj = data?.icontextdesignheading?.[0] || {};
  const items = data?.icontextdesign || [];

  const leftItems = items.slice(0, 3);
  const rightItems = items.slice(3, 6);

  const twoDigit = (n) => String(n).padStart(2, "0");

  return (
    <div className="steps-section">
      <style>{`
        .steps-wrap { max-width: 1100px; margin: auto; text-align: center; }
        .steps-wrap h2 { font-size: 36px; margin-bottom: 6px; }
        .steps-wrap p { margin-bottom: 40px; color: #555; }

        .steps-grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          align-items: center;
          gap: 30px;
          margin-top: 54px;
        }

        .center-card {
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 20px;
          margin: auto;
        }

        .center-card img{
          max-width: 100%;
          height: auto;
          display: block;
        }

        .steps-col { display: flex; flex-direction: column; gap: 15px; }

        .card {
          background: white;
          border-radius: 15px;
          margin-bottom: 0px;
          position: relative;
          padding: 15px 20px;
          box-shadow: 0 10px 20px rgba(0,0,0,0.05);
          border: 2px solid #ffffff;
        }

        .ribbon {
          position: absolute;
          left: -15px;
          top: 0px;
          background-color: #1749d5;
          color: white;
          font-weight: bold;
          font-size: 12px;
          padding: 7px 11px;
          border-radius: 10px 10px 10px 0;
          z-index: 1;
        }

        .ribbon::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -10px;
          border-left: 15px solid transparent;
          border-top: 10px solid #1749d5;
        }

        .content {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .icon-box {
          min-width: 60px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .icon-box img{
          width: 46px;
          height: 46px;
          object-fit: contain;
          display: block;
        }

        .card:hover { background: #1749d521; }

        .text-box h3 {
          margin: 0;
          font-size: 15px;
          color: #000;
          font-weight: 600;
          line-height: 1.3;
        }

        .text-box p {
          font-size: 14px;
          font-weight: 300;
          margin-bottom: 0;
          color: #212529;
        }

        @media (max-width: 900px) {
          .steps-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="container">
        <div className="sectionHeading text-center mb-4">
          {/* ✅ JSON heading */}
          <h2>{headingObj?.title || "Section Title"}</h2>
          {headingObj?.body ? <p>{headingObj.body}</p> : null}
        </div>

        <div className="steps-grid">
          {/* LEFT */}
          <div className="steps-col left">
            {leftItems.map((item, idx) => (
              <div className="card" key={`left-${idx}`}>
                <div className="ribbon">{twoDigit(idx + 1)}</div>
                <div className="content">
                  <div className="icon-box">
                    <img src={item.imageUrl} alt={item.body || `icon-${idx + 1}`} />
                  </div>
                  <div className="text-box">
                    <h3>{item.body}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CENTER IMAGE */}
          <div className="center-card">
            <img
              src="https://virtualassistant24x7.com/wp-content/uploads/2026/01/Detect-SERP-volatility-early-2.png"
              alt="Center"
            />
          </div>

          {/* RIGHT */}
          <div className="steps-col right">
            {rightItems.map((item, idx) => {
              const ribbonNumber = idx + 4; // 04,05,06
              return (
                <div className="card" key={`right-${idx}`}>
                  <div className="ribbon">{twoDigit(ribbonNumber)}</div>
                  <div className="content">
                    <div className="icon-box">
                      <img src={item.imageUrl} alt={item.body || `icon-${ribbonNumber}`} />
                    </div>
                    <div className="text-box">
                      <h3>{item.body}</h3>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewSection;
