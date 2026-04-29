import { useState, useEffect } from "react";
import CookieModal from "./CookieModal";
import "./css/cookie.css";

export default function CookieBanner() {
  const [show, setShow] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const [consent, setConsent] = useState({
    preferences: true,
    statistics: true,
    marketing: true
  });

  useEffect(() => {
    const saved = localStorage.getItem("cookieConsent");
    if (!saved) setShow(true);
  }, []);

  const updateConsent = (data) => {
    window.gtag && window.gtag("consent", "update", {
      analytics_storage: data.statistics ? "granted" : "denied",
      ad_storage: data.marketing ? "granted" : "denied",
      functionality_storage: data.preferences ? "granted" : "denied",
      personalization_storage: data.preferences ? "granted" : "denied"
    });
  };

  const handleAcceptAll = () => {
    const all = { preferences: true, statistics: true, marketing: true };
    localStorage.setItem("cookieConsent", JSON.stringify(all));
    updateConsent(all);
    setShow(false);
  };

  const handleAllowSelection = () => {
    localStorage.setItem("cookieConsent", JSON.stringify(consent));
    updateConsent(consent);
    setShow(false);
  };

  const handleDecline = () => {
    const none = { preferences: false, statistics: false, marketing: false };
    localStorage.setItem("cookieConsent", JSON.stringify(none));
    updateConsent(none);
    setShow(false);
  };

  if (!show) return null;

  return (
    <>
      {/* 🔹 BANNER */}
      <div className="cookie-banner">
        <div className="container">
          <div className="cookie-inner">

            <div className="cookie-left">
              <h4>This website uses cookies</h4>
              <p>
     We use cookies to personalise content and ads, enable social media features, and analyse traffic. We may share limited data with trusted partners to improve services and user experience.
              </p>

              {/* ✅ TOGGLES FIXED */}
              <div className="toggles">

                {/* Necessary */}
                <label className="switch">
                  <input type="checkbox" checked disabled />
                  <span className="slider"></span>
                  <span>Necessary</span>
                </label>

                {/* Preferences */}
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={consent.preferences}
                    onChange={() =>
                      setConsent({ ...consent, preferences: !consent.preferences })
                    }
                  />
                  <span className="slider"></span>
                  <span>Preferences</span>
                </label>

                {/* Statistics */}
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={consent.statistics}
                    onChange={() =>
                      setConsent({ ...consent, statistics: !consent.statistics })
                    }
                  />
                  <span className="slider"></span>
                  <span>Statistics</span>
                </label>

                {/* Marketing */}
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={consent.marketing}
                    onChange={() =>
                      setConsent({ ...consent, marketing: !consent.marketing })
                    }
                  />
                  <span className="slider"></span>
                  <span>Marketing</span>
                </label>

                {/* Show Details */}
                <span
                  className="show-details"
                  onClick={() => setShowDetails(true)}
                >
                  Show details →
                </span>

              </div>
            </div>

            {/* RIGHT */}
            <div className="cookie-right">
              <button className="btn primary" onClick={handleAcceptAll}>
                Allow all
              </button>

              <button className="btn secondary" onClick={handleAllowSelection}>
                Allow selection
              </button>

              <button className="btn primary" onClick={handleDecline}>
                Deny
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* 🔹 MODAL */}
      {showDetails && (
        <CookieModal
          consent={consent}
          setConsent={setConsent}
          onClose={() => setShowDetails(false)}
          onAcceptAll={handleAcceptAll}
          onAllowSelection={handleAllowSelection}
          onDecline={handleDecline}
        />
      )}
    </>
  );
}