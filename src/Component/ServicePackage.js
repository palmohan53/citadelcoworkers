import React from "react";

const plans = [
  {
    id: 1,
    package: "Starter Package",
    title: "Foundation",
    price: "$699",
    duration: "/ month",
    popular: false,
    features: [
      "AI-search visibility audit",
      "5 GEO-optimized content pieces/mo",
      "Monthly performance report",
      "Email support",
    ],
  },
  {
    id: 2,
    package: "Growth Package",
    title: "Momentum",
    price: "$1200",
    duration: "/ month",
    popular: true,
    features: [
      "Everything in Foundation",
      "15 GEO-optimized content pieces/mo",
      "Cross-engine citation building",
      "Dedicated strategist",
      "Bi-weekly reporting",
    ],
  },
  {
    id: 3,
    package: "Enterprise Package",
    title: "Scale",
    price: "$1,600",
    duration: "/ month",
    popular: false,
    features: [
      "Everything in Momentum",
      "Unlimited content production",
      "Multi-brand AI tracking",
      "Weekly reporting & reviews",
      "Priority support & SLA",
    ],
  },
];

const CheckIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const ArrowIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 12h14" />
    <path d="M13 5l7 7-7 7" />
  </svg>
);

const PackageTab = ({ handleScrollClick, service }) => {
 const servicePlans =
  Array.isArray(service?.pricing?.plans) &&
  service.pricing.plans.length > 0
    ? service.pricing.plans
    : plans;
  return (
    <div className="managed-services">
      <style>{`
      
        .plans-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 24px;
          align-items: stretch;
        }

        .service-package-card {
          position: relative;
          display: flex;
          flex-direction: column;
          background: #ffffff;
          border: 1px solid #e4e7ec;
          border-radius: 18px;
          box-shadow: 0 8px 30px rgba(16, 24, 40, 0.06);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .service-package-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 18px 40px rgba(16, 24, 40, 0.12);
        }

        .service-package-card.service-package-featured {
          padding: 4px;
          background: linear-gradient(180deg, #204ecf 0%, #00cc83 100%);
          border: 0;
          border-radius: 30px;
          box-shadow: 0 18px 38px rgba(32, 78, 207, 0.18);
        }

        .service-package-card-inner {
          display: flex;
          flex: 1;
          flex-direction: column;
          padding: 32px;
          background: #ffffff;
          border-radius: 17px;
        }

        .service-package-featured .service-package-card-inner {
          margin-top: 32px;
          border-radius: 25px;
        }

        .service-package-popular-badge {
          position: absolute;
          z-index: 1;
          top: 9px;
          left: 50%;
          padding: 0;
          color: #ffffff;
          background: transparent;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          transform: translateX(-50%);
        }

        .package-name {
          color: #204ecf;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .plan-top h3 {
          margin: 10px 0 18px;
          font-size: 28px;
          line-height: 1.2;
        }

        .price { display: flex; align-items: baseline; gap: 6px; }
        .amount { font-size: 36px; font-weight: 800; letter-spacing: -0.04em; }
        .duration { color: #667085; font-size: 14px; }

        .plan-features {
          display: grid;
          gap: 14px;
          margin: 30px 0;
        }

        .feature { display: flex; gap: 10px; align-items: flex-start; color: #475467; font-size: 14px; }
        .check-icon { display: grid; flex: 0 0 22px; width: 22px; height: 22px; place-items: center; color: #204ecf; background: #eef3ff; border-radius: 50%; }
        .feature span { padding-top: 2px; }

        .service-package-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          width: 100%;
          margin-top: auto;
          padding: 13px 18px;
          color: #344054;
          background: #ffffff;
          border: 1px solid #d0d5dd;
          border-radius: 9px;
          cursor: pointer;
          font: inherit;
          font-weight: 700;
          transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease;
        }

        .service-package-btn:hover, .service-package-primary-btn { color: #ffffff; background: #204ecf; border-color: #204ecf; }
        .service-package-btn svg { transition: transform 0.2s ease; }
        .service-package-btn:hover svg { transform: translateX(4px); }

        @media (max-width: 900px) { .plans-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
        @media (max-width: 600px) { .managed-services { padding: 48px 16px; } .plans-grid { grid-template-columns: 1fr; } .service-package-card-inner { padding: 28px 24px; } }
      `}</style>

      <div className="plans-grid">       {servicePlans.map((plan) => (
          <div
            key={plan.id}
            className={`service-package-card ${
              plan.popular ? "service-package-featured" : ""
            }`}
          >
            {plan.popular && (
              <div className="service-package-popular-badge">
                Most Popular
              </div>
            )}

            <div className="service-package-card-inner">
            <div className="plan-top">

              <span className="package-name">
                {plan.package}
              </span>

              <h3>{plan.title}</h3>

              <div className="price">

                <span className="amount">
                  {plan.price}
                </span>

                <span className="duration">
                  {plan.duration}
                </span>

              </div>

            </div>

            <div className="plan-features">

              {plan.features.map((feature, index) => (

                <div
                  className="feature"
                  key={index}
                >

                  <div className="check-icon">
                    <CheckIcon />
                  </div>

                  <span>{feature}</span>

                </div>

              ))}

            </div>

            <button 
                onClick={handleScrollClick} className={`service-package-btn ${
                plan.popular
                  ? "service-package-primary-btn"
                  : ""
              }`}
            >
              <span>
                Get Started
              </span>

              <ArrowIcon />

            </button>
            </div>

          </div>
        ))}</div>

      </div>  
  );
};

export default PackageTab;
