import React, { useState, useEffect, useRef } from "react";

const teamMembers = [
  {
    image: "https://virtualassistant24x7.com/wp-content/uploads/2026/06/team.webp",
    name: "Priya Malhotra",
    role: "QuickBooks Certified ProAdvisor",
    variant: "blue",
  },
  {
    image: "https://virtualassistant24x7.com/wp-content/uploads/2026/06/ARAV-1.webp",
    name: "Aarav Sharma",
    role: "Senior Bookkeeping Specialist",
    variant: "green",
  },
  {
    image: "https://virtualassistant24x7.com/wp-content/uploads/2026/06/AR-1.webp",
    name: "Rohan Verma",
    role: "Financial Paraplanner",
    variant: "gold",
  },
  {
    image: "https://virtualassistant24x7.com/wp-content/uploads/2026/06/Aditi-Patel.webp",
    name: "Aditi Patel",
    role: "Senior Accountant",
    variant: "purple",
  },
  {
    image: "https://virtualassistant24x7.com/wp-content/uploads/2026/06/Kavya.webp",
    name: "Kavya Singh",
    role: "Accounts Receivable Specialist",
    variant: "blue",
  },
  {
    image: "https://virtualassistant24x7.com/wp-content/uploads/2026/05/HARSH.webp",
    name: "Vivaan Mehta",
    role: "Tax Preparation Specialist",
    variant: "green",
  },
  {
    image: "https://virtualassistant24x7.com/wp-content/uploads/2026/06/Arjun-Kapoor.webp",
    name: "Arjun Kapoor",
    role: "Accounts Payable Specialist",
    variant: "purple",
  },
  {
    image: "https://virtualassistant24x7.com/wp-content/uploads/2026/06/nAYA.webp",
    name: "Ananya Gupta",
    role: "Senior Financial Analyst",
    variant: "purple",
  },
];

const slots = ["cardA", "cardB", "cardC", "cardD", "cardE"];

const scrollToForm = () => {
  const element = document.getElementById("Form-scroll");

  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

export default function CitadelHero() {
  const [startIndex, setStartIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(5);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const nextSlide = () => {
    setStartIndex((prev) => (prev + 1) % teamMembers.length);
  };

  const prevSlide = () => {
    setStartIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const distance = touchStartX.current - touchEndX.current;

    if (Math.abs(distance) < 50) return;

    if (distance > 0) {
      nextSlide();
    } else {
      prevSlide();
    }
  };

  useEffect(() => {
    const updateCards = () => {
      if (window.innerWidth <= 540) {
        setVisibleCount(2);
      } else if (window.innerWidth <= 800) {
        setVisibleCount(3);
      } else if (window.innerWidth <= 900) {
        setVisibleCount(4);
      } else if (window.innerWidth <= 1200) {
        setVisibleCount(4);
      } else {
        setVisibleCount(5);
      }
    };

    updateCards();
    window.addEventListener("resize", updateCards);

    return () => window.removeEventListener("resize", updateCards);
  }, []);

  const getSlotClass = (memberIndex) => {
    const relative =
      (memberIndex - startIndex + teamMembers.length) % teamMembers.length;

    if (relative >= visibleCount) return "hiddenCard";

    return slots[relative];
  };

  return (
    <>
      <style>{`
.citadelHero {
  color: #0d1526;
  background: radial-gradient(120% 80% at 50% -8%, #eef0fb 0%, #f7f8fd 42%, #ffffff 100%);

  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
}

.heroStage {
  position: relative;
  max-width: 100%;
  margin: 0 auto;
}

.heroCopy {
  position: relative;
  z-index: 3;
  max-width: 880px;
  margin: 0 auto;
  text-align: center;
  padding-top: 54px;
}

.heroCopy h1 {
  font-size: 62px;
  font-weight: 800;
  margin: 0;
  background: linear-gradient(96deg, #204ecf 0%, #253594 70%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  text-transform: capitalize;
}

.heroCopy p {
  font-size: 16px;
  line-height: 1.5;
  color: #454c5a;
  max-width: 60ch;
  margin: 24px auto 0;
}

.heroCta {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  margin-top: 32px;
  background: #1c46e0;
  color: #fff;
  text-decoration: none;
  font-weight: 700;
  font-size: 17px;
  padding: 18px 38px;
  border-radius: 14px;
  box-shadow: 0 16px 34px -12px rgba(28, 70, 224, 0.65);
}

.heroNote {
  color: #8a8ea0;
  margin-top: 16px;
}

.trustpilot-hero-bar {
  max-width: 680px;
  margin: 24px auto 0;
}

.slider-te {
  position: relative;
  padding-bottom: 100px;
  top: -64px;
  min-height: 430px;
  touch-action: pan-y;
  user-select: none;
  -webkit-user-select: none;
}

.heroWave {
  width: 100%;
  z-index: 0;
  overflow: visible;
}

.specialistCard {
  position: absolute;
  z-index: 2;
  width: 172px;
  text-align: center;
  transition:
    left 0.75s cubic-bezier(.22,.61,.36,1),
    right 0.75s cubic-bezier(.22,.61,.36,1),
    top 0.75s cubic-bezier(.22,.61,.36,1),
    opacity 0.45s ease,
    scale 0.75s cubic-bezier(.22,.61,.36,1);
}

.specialistCardInner {
  animation: floatySmooth 5s ease-in-out infinite;
  will-change: transform;
}

.cardA {
  left: 0%;
  right: auto;
  top: 0;
  opacity: 1;
  scale: 1;
}

.cardB {
  left: 21%;
  right: auto;
  top: 100px;
  opacity: 1;
  scale: 1;
}

.cardC {
  left: 43%;
  right: auto;
  top: 198px;
  opacity: 1;
  scale: 1;
}

.cardD {
  left: 63%;
  right: auto;
  top: 100px;
  opacity: 1;
  scale: 1;
}

.cardE {
  right: 0%;
  top: 0;
  opacity: 1;
  scale: 1;
}

.hiddenCard {
  left: calc(100% + 220px);
  right: auto;
  top: 0;
  opacity: 0;
  pointer-events: none;
  scale: .92;
}

.avatarPanel {
  height: 208px;
  border-radius: 18px;
  border: 1px solid #e6e6f0;
  box-shadow: 0 24px 44px -26px rgba(13, 21, 38, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 10px;
}

.cardB .avatarPanel,
.cardD .avatarPanel {
  height: 200px;
}

.cardC .avatarPanel {
  height: 196px;
  border-color: #ece4d2;
}

.avatarPanel.blue {
  background: linear-gradient(160deg, #e7edfd, #d6e1fb);
}

.avatarPanel.green {
  background: linear-gradient(160deg, #e2f5ea, #cdeeda);
}

.avatarPanel.gold {
  background: linear-gradient(160deg, #f3ede0, #ece2cd);
}

.avatarPanel.purple {
  background: linear-gradient(160deg, #ece8fb, #ddd6f7);
}

.memberImage {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  border-radius: 8px;
  transform: scale(1.02);
  transition: transform .45s ease;
}

.specialistCard:hover .memberImage {
  transform: scale(1.07);
}

.personName {
  font-weight: 700;
  font-size: 15px;
  margin-top: 14px;
  color: #0d1526;
}

.personRole {
  font-size: 13px;
  color: #5a6270;
  margin-top: 2px;
}

.sliderArrows {
  position: absolute;
  left: 50%;
  bottom: 29px;
  transform: translateX(-50%);
  z-index: 8;
  display: flex;
  align-items: center;
  gap: 12px;
}

.sliderArrow {
  width: 42px;
  height: 42px;
  border: 1px solid #dfe3f4;
  background: rgba(255,255,255,.9);
  color: #1c46e0;
  border-radius: 50%;
  cursor: pointer;
  font-size: 22px;
  line-height: 1;
  display: grid;
  place-items: center;
  box-shadow: 0 12px 25px -18px rgba(13, 21, 38, .55);
  transition: transform .25s ease, background .25s ease, color .25s ease;
}

.sliderArrow:hover {
  transform: translateY(-2px);
  background: #1c46e0;
  color: #fff;
}

.sliderDots {
  position: absolute;
  left: 50%;
  bottom: -8px;
  transform: translateX(-50%);
  z-index: 8;
  display: flex;
  align-items: center;
  gap: 9px;
}

.sliderDot {
  width: 8px;
  height: 8px;
  border: 0;
  border-radius: 99px;
  background: #ccd4ef;
  cursor: pointer;
  padding: 0;
  transition: width .25s ease, background .25s ease;
}

.sliderDot.active {
  width: 24px;
  background: #1c46e0;
}

@keyframes floatySmooth {
  0% {
    transform: translate3d(0, -12px, 0);
  }

  50% {
    transform: translate3d(0, 10px, 0);
  }

  100% {
    transform: translate3d(0, -12px, 0);
  }
}

@media (max-width: 1100px) {
  .heroCopy {
    padding: 42px 24px 28px;
  }

  .heroCopy h1 {
    font-size: clamp(38px, 7vw, 62px);
  }

  .slider-te {
    top: 0;
    min-height: 410px;
    padding-bottom: 268px;
  }

  .cardA {
    left: 3%;
    top: 0;
  }

  .cardB {
    left: 24%;
    top: 95px;
  }

  .cardC {
    left: 50%;
    top: 170px;
  }

  .cardD {
    left: auto;
    right: 24%;
    top: 95px;
  }

  .sliderArrows {
    bottom: 58px;
  }

  .sliderDots {
    bottom: 25px;
  }
}

@media (max-width: 1200px) {
  .cardD {
    left: auto !important;
    right: 0% !important;
    top: 0%;
    opacity: 1;
    scale: 1;
  }

  .cardC {
    left: 56%;
    right: auto;
    top: 30%;
    opacity: 1;
    scale: 1;
  }

  .cardB {
    left: 28%;
    top: 30%;
  }
}

@media (max-width: 800px) {
  .cardC {
    left: auto !important;
    right: 0%;
    top: 5%;
    opacity: 1;
    scale: 1;
  }

  .cardB {
    left: 41%;
    top: 15%;
  }
}

@media (max-width: 768px) {
  .specialistCard.cardC {
    right: 0% !important;
    left: auto !important;
    top: 0;
  }

  .cardB {
    left: 39%;
    top: 20%;
  }
}

@media (max-width: 760px) {
  .heroCopy {
    padding-top: 32px;
    padding-left: 0px;
    padding-right: 0px;
  }

  a.heroCta {
    position: relative;
    margin-top: 28px;
    margin-bottom: 20px;
    width: max-content;
  }

  section.citadelHero {
    padding-top: 0;
  }

  .heroCopy h1 {
    font-size: 32px;
  }

  .heroCopy p {
    font-size: 16px;
  }

  .heroCta {
    width: calc(100% - 36px);
    justify-content: center;
    padding: 16px 20px;
  }

  .avatarPanel,
  .cardB .avatarPanel,
  .cardC .avatarPanel,
  .cardD .avatarPanel {
    height: 230px;
  }
}

@media (max-width: 540px) {
  .cardB {
    left: auto;
    top: 0;
    right: 0;
  }
         a.heroCta:before
    {
  
 
    left: calc(100% - 70px) !important;
}
}

@media (max-width: 380px) {
  .cardB {
    left: auto;
    top: 0;
    right: -18px;
  }

  .cardA {
    left: 0%;
    top: 0;
  }

  .specialistCard {
    width: 164px;
  }
}

body.hide-header header,
body.hide-header footer,
body.hide-header .copyright {
  display: none;
}
      `}</style>

      <section className="citadelHero">
        <div className="container">
          <div className="heroStage">
            <div className="heroCopy">
              <h1>
                Hire Top 3% Talent In{" "}
                <span className="word-slider">
                  <span>
                    <b>Accounting </b>
                    <b>Bookkeeping </b>
                    <b>Financial Analysis</b>
                    <b>Taxation </b>
                    <b>Payroll </b>
                    <b>QuickBooks </b>
                    <b>Accounting </b>
                    <b>Bookkeeping </b>
                    <b>Financial Analysis</b>
                    <b>Taxation </b>
                    <b>Payroll </b>
                    <b>QuickBooks </b>
                  </span>
                </span>
              </h1>

              <a
                className="heroCta"
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToForm();
                }}
              >
                Find My Match <span>→</span>
              </a>

              <div className="heroNote">
                Limited Spots Available. From £5/hr after trial
              </div>
            </div>

            <div className="trustpilot-hero-bar">
              <div className="trustpilot-left">
                <span className="trust-star">★</span>
                <strong>Trustpilot</strong>
              </div>
              <div className="trust-divider"></div>
              <div className="trust-rating-boxes">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
              <strong className="trust-score">4.8/5</strong>
              <div className="trust-divider"></div>
              <span className="trust-reviews">100+ businesses</span>
            </div>

            <div
              className="slider-te"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <svg
                className="heroWave"
                viewBox="0 0 1280 460"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d="M0,120 C 300,330 980,330 1280,120"
                  fill="none"
                  stroke="#e3e4f1"
                  strokeWidth="2"
                />
                <path
                  d="M0,150 C 300,360 980,360 1280,150"
                  fill="none"
                  stroke="#edeef7"
                  strokeWidth="2"
                />
              </svg>

              {teamMembers.map((member, index) => (
                <div
                  key={member.name}
                  className={`specialistCard ${getSlotClass(index)}`}
                >
                  <div className="specialistCardInner">
                    <div className={`avatarPanel ${member.variant}`}>
                      <img
                        className="memberImage"
                        src={member.image}
                        alt={member.name}
                      />
                    </div>
                    <div className="personName">{member.name}</div>
                    <div className="personRole">{member.role}</div>
                  </div>
                </div>
              ))}

              <div className="sliderArrows">
                <button
                  type="button"
                  className="sliderArrow"
                  onClick={prevSlide}
                  aria-label="Previous member"
                >
                  ‹
                </button>

                <button
                  type="button"
                  className="sliderArrow"
                  onClick={nextSlide}
                  aria-label="Next member"
                >
                  ›
                </button>
              </div>

              <div className="sliderDots">
                {teamMembers.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    className={`sliderDot ${
                      index === startIndex ? "active" : ""
                    }`}
                    onClick={() => setStartIndex(index)}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}