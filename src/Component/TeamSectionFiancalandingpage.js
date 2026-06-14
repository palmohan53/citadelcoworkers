import React, { memo, lazy, Suspense } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
const Slider = lazy(() => import("react-slick"));

const Verified = memo(() => (
  <svg
    aria-hidden="true"
    focusable="false"
    data-prefix="fas"
    data-icon="circle-check"
    className="svg-inline--fa fa-circle-check"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
  >
    <path
      fill="currentColor"
      d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
    ></path>
  </svg>
));

const NextArrow = ({ onClick }) => (
  <div className="custom-arrow right-arrow" onClick={onClick}>
    ❯
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div className="custom-arrow left-arrow" onClick={onClick}>
    ❮
  </div>
);

const settingsTeam = {
  dots: true,
  infinite: false,
  speed: 500,
  lazyLoad: "ondemand",
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2500,
  arrows: true,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 992,
      settings: { slidesToShow: 2 },
    },
    {
      breakpoint: 576,
      settings: { slidesToShow: 1 },
    },
  ],
};

const teamData = [
  {
    name: "Priya Malhotra",
    role: "QuickBooks Certified ProAdvisor",
    price: "US 9/hour",
    image:
      "https://virtualassistant24x7.com/wp-content/uploads/2026/06/Priya-Malhotra-1.webp",
    skills: [
      "QuickBooks Setup",
      "Workflow Optimization",
      "QuickBooks Online",
    ],
  },

  {
    name: "Aarav Sharma",
    role: "Senior Bookkeeping Specialist",
    price: "US 9/hour",
    image:
      "https://virtualassistant24x7.com/wp-content/uploads/2026/06/ARAV-1.webp",
    skills: [
      "Xero",
      "QuickBooks Online",
      "Financial Reporting",
    ],
  },

  {
    name: "Ananya Gupta",
    role: "Senior Financial Analyst",
    price: "US 8/hour",
    image:
      "https://virtualassistant24x7.com/wp-content/uploads/2026/06/nAYA.webp",
    skills: [
      "Strategic Planning",
      " M&A analysis",
      "Cost Management",
    ],
  },

  {
    name: "Vivaan Mehta",
    role: "Tax Preparation Specialist",
    price: "US 8/hour",
    image:
      "https://virtualassistant24x7.com/wp-content/uploads/2026/05/HARSH.webp",
    skills: [
      "Proactive Tax Planning",
      "Business Structuring",
      "Wealth Preparation",
    ],
  },

  {
    name: "Arjun Kapoor",
    role: "Accounts Payable Specialist",
    price: "US 7/hour",
    image:
      "https://virtualassistant24x7.com/wp-content/uploads/2026/06/Arjun-Kapoor.webp",
    skills: [
      "Invoice management",
      "Vendor Reconciliation",
      "PO Matching",
    ],
  },
  ,

  {
    name: "Kavya Singh",
    role: "Accounts Receivable Specialist",
    price: "US 7/hour",
    image:
      "https://virtualassistant24x7.com/wp-content/uploads/2026/06/Kavya.webp",
    skills: [
      "Cash Application",
      "DSO Reduction",
      "Invoice Dispute Resolution",
    ],
  },
  
  ,

  {
    name: "Rohan Verma",
    role: "Financial Paraplanner",
    price: "US 7/hour",
    image:
      "https://virtualassistant24x7.com/wp-content/uploads/2026/06/AR-1.webp",
    skills: [
      "Retirement Projections",
      "Superannuation Strategies",
      "SOA Preparation",
    ],
  },
  ,

  {
    name: "Aditi Patel",
    role: "Senior Accountant",
    price: "US 7/hour",
    image:
      "https://virtualassistant24x7.com/wp-content/uploads/2026/06/Aditi-Patel.webp",
    skills: [
      "SAP FICO",
      "NetSuite",
      "Microsoft Dynamics",
    ],
  },

   {
    name: "Anurag Kushwaha",
    role: "Inventory Bookkeeping Specialist ",
    price: "US 7/hour",
    image:
      "https://virtualassistant24x7.com/wp-content/uploads/2026/06/TEaAAm-image-1024-66.webp",
    skills: [
      "Xero  ",
      "  Inventory Reconciliation ",
      " Unleashed",
    ],
  },
   {
    name: "Aditi Sharma",
    role: "AR Reporting & Reconciliation Expert",
    price: "US 7/hour",
    image:
      "https://virtualassistant24x7.com/wp-content/uploads/2026/06/ADI.webp",
    skills: [
      "AR Aging Reports ",
      " Credit Monitoring ",
      " ERP Data Management",
    ],
  },
  {
    name: "Priya Sharma",
    role: "Certified Financial Paraplanner",
    price: "US 7/hour",
    image:
      "https://virtualassistant24x7.com/wp-content/uploads/2025/12/TEam-image-1024-27.webp",
    skills: [
      " Retirement Projections",
      "  Superannuation Strategies",
      " SOA Preparation",
    ],
  },
  
  {
    name: "kunal Khurana",
    role: "Senior Accounts Receivable Specialist",
    price: "US 7/hour",
    image:
      "https://virtualassistant24x7.com/wp-content/uploads/2026/06/KU.webp",
    skills: [
      "Cash Application   ",
      "  DSO Reduction  ",
      " Invoice Dispute Resolution",
    ],
  },
];

const TeamSection = () => {
  const location = useLocation();
  useEffect(() => {
  if (location.hash === "#team") {
    const timer = setTimeout(() => {
      const teamSection = document.getElementById("team");

      if (teamSection) {
        teamSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 1200);

    return () => clearTimeout(timer);
  }
}, [location]);
  return (
    <section className="Teamsection" id="team">
      <div className="container">

        <div className="sectionHeading text-center mb-4">
          <h2>
            Your Extended Team That Protects Your{" "}
            <span className="color-high">
              Financial Accuracy
            </span>
          </h2>

          <div className="para">
            Our specialists can handle everything from bookkeeping
            to strategic finance jobs and take full responsibility
            for their work
          </div>
        </div>

        <div className="Team-slider">

          <Suspense fallback={<div />}>
            <Slider {...settingsTeam} className="pp-slider">

              {teamData.map((member, index) => (
                <div className="talent-card" key={index}>

                  <div className="img-wrap">
                    <span className="Price">
                      {member.price}
                    </span>

                    <img
                      src={member.image}
                      alt={member.name}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>

                  <div className="card-body">

                    <div className="name-expert">
                      <h3>{member.name}</h3>

                      <p className="verified">
                        <Verified />
                        Verified Expert
                      </p>
                    </div>

                    <p className="role">
                      {member.role}
                    </p>

                    <div className="skills">
                      {member.skills.map((skill, i) => (
                        <span key={i}>{skill}</span>
                      ))}
                    </div>

                  </div>
                </div>
              ))}

            </Slider>
          </Suspense>

          <div className="CTA-BTn">
            <a
              className="colorBtn"
              href="/contact-us"
            >
              Get Matched With an Expert
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default memo(TeamSection);