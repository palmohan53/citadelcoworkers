import React, { useMemo } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const safe = (v) => (v && v !== "NA" ? v : "");

// Safe HTML renderer
const renderHTML = (html) => ({
  __html: html || "",
});

// Normalize brand color
const normalizeColor = (c) => {
  const v = safe(c).trim();
  if (!v) return "#2563eb";
  if (v.startsWith("#") || v.startsWith("rgb") || v.startsWith("hsl")) return v;
  if (/^[0-9a-fA-F]{3}$/.test(v) || /^[0-9a-fA-F]{6}$/.test(v)) return `#${v}`;
  return "#2563eb";
};

// Split stat into number + label
const splitStat = (val, fallbackLabel) => {
  const clean = safe(val);

  if (!clean) {
    return {
      number: "",
      label: fallbackLabel,
    };
  }

  const parts = clean.trim().split(" ");
  const number = parts.shift();
  const label = parts.join(" ") || fallbackLabel;

  return { number, label };
};

export default function CaseHeroSlider({ casestudyData }) {
  const listing = useMemo(() => {
    if (Array.isArray(casestudyData)) return casestudyData;
    if (Array.isArray(casestudyData?.listing)) return casestudyData.listing;
    if (Array.isArray(casestudyData?.data)) return casestudyData.data;
    if (Array.isArray(casestudyData?.items)) return casestudyData.items;
    if (Array.isArray(casestudyData?.results)) return casestudyData.results;
    return [];
  }, [casestudyData]);

  const slides = useMemo(() => {
    return listing.map((item, idx) => {
      const brandColor = normalizeColor(item?.brandcolor);

      const stat1 = splitStat(item?.stat1, "Conversions");
      const stat2 = splitStat(item?.stat2, "ROI");
      const stat3 = splitStat(item?.stat3, "Traffic");

      return {
        id: item?.ID || idx + 1,
        brandColor,
        image: safe(item?.banner) || safe(item?.image),
        logo: safe(item?.company_logo),
        countryImg: safe(item?.country),

        company_overview:
          safe(item?.company_overview) || "3X Revenue Growth in 6 Months",
        intro: safe(item?.intro_text),
        introheading: safe(item?.company_overview),

        challengeHeading: safe(item?.sub_intro_des_1),
        outcomeHeading: safe(item?.sub_intro_des1),

        challengeHeadingtext: safe(item?.sub_intro_heading_1),
        outcomeHeadingtext: safe(item?.sub_intro_heading_2),

        stats: [
          { value: stat1.number, label: stat1.label },
          { value: stat2.number, label: stat2.label },
          { value: stat3.number, label: stat3.label },
        ],

        btnText: "View Full Case Study",
        link: `/case-studies/${casestudyData?.parent?.slug}/${item?.slug}`,
      };
    });
  }, [listing, casestudyData]);

  const settings = useMemo(
    () => ({
      dots: true,
      arrows: false,
      infinite: slides.length > 1,
      speed: 600,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: slides.length > 1,
      autoplaySpeed: 7000,
      pauseOnHover: true,
      adaptiveHeight: true,
    }),
    [slides.length]
  );

  if (!slides.length) return null;

  return (
    <div className="case-hero">
      <div className="case-inner pp-slider">
        <Slider {...settings} className="case-slider">
          {slides.map((s) => (
            <div key={s.id} className="case-slide">
              <div className="case-card">

                {/* LEFT IMAGE SIDE */}
                <div className="case-image">
                  <div className="logo-row">
                    {s.logo && (
                      <img
                        src={s.logo}
                        alt="Client Logo"
                        className="client-logo"
                      />
                    )}
                    {s.countryImg && (
                      <div className="country">
                        <img src={s.countryImg} alt="Country" />
                      </div>
                    )}
                  </div>

                  {s.image && (
                    <img
                      src={s.image}
                      alt="Case Study"
                      className="main-img"
                    />
                  )}

                
                </div>

                {/* RIGHT CONTENT SIDE */}
                <div className="case-content">
                  {s.intro && (
                    <div className="info-box">
                      <h4>{s.introheading}</h4>
                      <p>{s.intro}</p>
                    </div>
                  )}

                  {s.challengeHeading && (
                    <div className="info-box">
                      <h4>{s.challengeHeadingtext}</h4>
                      <div
                        dangerouslySetInnerHTML={renderHTML(
                          s.challengeHeading
                        )}
                      />
                    </div>
                  )}

                  {s.outcomeHeading && (
                    <div className="info-box">
                      <h4>{s.outcomeHeadingtext}</h4>
                      <div
                        dangerouslySetInnerHTML={renderHTML(
                          s.outcomeHeading
                        )}
                      />
                    </div>
                  )}

                  <Link
                    to={s.link}
                    className="btn"
                    style={{ backgroundColor: s.brandColor }}
                  >
                    {s.btnText}
                  </Link>
                </div>

              </div>
            </div>
          ))}
        </Slider>
      </div>

      <style>{`
.case-hero {
  padding: 100px 20px;
}

.case-inner {
  max-width: 1100px;
  margin: auto;
}

.case-card {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 50px;
  background: #fff;
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.07);
  align-items: center;
}

.case-image {
  border-radius: 20px;
  overflow: hidden;
}

.logo-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.client-logo {
  height: 48px;
}

.country img {
  width: 24px;
}

.main-img {
  width: 100%;
  border-radius: 16px;
}

.stats {
  display: flex;
  justify-content: space-between;
  margin-top: 25px;
  padding: 15px 0;
  border-top: 1px solid #e5e7eb;
}

.stat {
  text-align: center;
  min-width: 80px;
}

.stat h4 {
  font-size: 28px;
  color: #2563eb;
  font-weight: 700;
  margin: 0;
  line-height: 1.1;
}

.stat span {
  display: block;
  font-size: 12px;
  color: #9ca3af;
  margin-top: 4px;
  font-weight: 500;
}

.info-box {
  border: 1.5px solid #3b82f6;
  border-radius: 14px;
  padding: 5px 10px;
  margin-bottom: 7px;
}

.info-box h4 {
  color: #2563eb;
  font-weight: 700;
  font-size: 13px;
  text-transform: uppercase;
  margin-bottom: 6px;
}

/* LIST STYLING FIX */
.info-box ul {
  padding-left: 18px;
  margin: 6px 0 0;
  list-style: disc;
}

.info-box li {
  font-size: 13px;
  color: #374151;
  margin-bottom: 3px;
  line-height: 1.6;
}
  .info-box p {
    font-size: 13px;
  }
ul.challenge {
    list-style: none;
    padding-left: 0;
}

ul.challenge li {
    display: flex;
    align-items: center;
}

ul.challenge li img {
    width: 14px;
    margin-right: 5px;
}
.btn {
  display: inline-block;
  margin-top: 25px;
  background-color: #2563eb;
  color: white;
  padding: 14px 32px;
  font-weight: 700;
  border-radius: 40px;
  text-decoration: none;
}

@media (max-width: 992px) {
  .case-card {
    grid-template-columns: 1fr;
  }
}
`}</style>
    </div>
  );
}
