import { useState } from "react";

export default function CookieModal({
  consent,
  setConsent,
  onClose,
  onAcceptAll,
  onAllowSelection,
  onDecline
}) {
  const [tab, setTab] = useState("details");

  return (
    <div className="cookie-modal">
      <div className="modal-box">

        {/* HEADER */}
        <div className="modal-header">
          <div className="tabs">
            <span className={tab==="consent"?"active":""} onClick={() => setTab("consent")}>Consent</span>
            <span className={tab==="details"?"active":""} onClick={() => setTab("details")}>Details</span>
            <span className={tab==="about"?"active":""} onClick={() => setTab("about")}>About</span>
          </div>
        </div>

        {/* BODY */}
        <div className="modal-body">

          {tab === "details" && (
            <>
              <Row
                title="Necessary"
                desc="Necessary cookies help make a website usable by enabling basic functions like page navigation and access to secure areas."
                disabled
              />

              <Row
                title="Preferences"
                desc="Preference cookies enable a website to remember information that changes the way the website behaves or looks."
                checked={consent.preferences}
                onChange={() =>
                  setConsent({ ...consent, preferences: !consent.preferences })
                }
              />

              <Row
                title="Statistics"
                desc="Statistic cookies help website owners to understand how visitors interact with websites."
                checked={consent.statistics}
                onChange={() =>
                  setConsent({ ...consent, statistics: !consent.statistics })
                }
              />

              <Row
                title="Marketing"
                desc="Marketing cookies are used to track visitors across websites."
                checked={consent.marketing}
                onChange={() =>
                  setConsent({ ...consent, marketing: !consent.marketing })
                }
              />
            </>
          )}

          {tab === "about" && (
            <div className="about-text">
              <p>Cookies are small text files that can be used by websites to make a user's experience more efficient.</p>
              <p>The law states that we can store cookies on your device if they are strictly necessary.</p>
              <p>This site uses different types of cookies.</p>
              <p>You can at any time change or withdraw your consent.</p>
            </div>
          )}

          {tab === "consent" && (
            <p>You can manage your cookie preferences here.</p>
          )}

        </div>

        {/* FOOTER */}
        <div className="modal-footer">
          <button className="btn primary" onClick={onDecline}>Deny</button>
          <button className="btn primary" onClick={onAllowSelection}>Allow selection</button>
          <button className="btn primary" onClick={onAcceptAll}>Allow all</button>
        </div>

        <span className="close" onClick={onClose}>✕</span>
      </div>
    </div>
  );
}

/* ROW */
function Row({ title, desc, checked, onChange, disabled }) {
  return (
    <div className="row">
      <div className="row-left">
        <h4>{title}</h4>
        <p>{desc}</p>
      </div>

      <div className="row-right">
        <label className="switch">
          <input type="checkbox" checked={checked} onChange={onChange} disabled={disabled} />
          <span className="slider"></span>
        </label>
      </div>
    </div>
  );
}