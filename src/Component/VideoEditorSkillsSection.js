import React from "react";

export default function VideoEditorSkillsSection({ skillsetData }) {

  if (!skillsetData) return null;

  return (
    <section className="ve-section">
      <div className="container">

        {/* LEFT SIDE */}
        <div className="ve-left">
          <h2>
            {skillsetData?.main_heading ||
              "Skills That Make Our Experts Stand Out"}
          </h2>

          <p>
            {skillsetData?.main_description ||
              "A blend of technical precision and creative storytelling designed to maximize engagement."}
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="ve-right">

          {skillsetData?.technical_skills && (
            <div
              className="ve-block"
              dangerouslySetInnerHTML={{
                __html: skillsetData.technical_skills || ""
              }}
            />
          )}

          {skillsetData?.professional_skills && (
            
            <div
              className="ve-block"
              dangerouslySetInnerHTML={{
                __html: skillsetData.professional_skills || ""
              }}
            />
          )}

        </div>

      </div>

      <style>{`
.ve-section {
  padding: 80px 80px;
  background: radial-gradient(circle at 20% 20%, #1e3a8a, #020617);
  color: white;
}
.skill-set-div {
    display: flex;
    align-items: center;
    gap: 10px;
}
.ve-container {
  max-width: 1150px;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 60px;
  align-items: center;
}
.ve-check {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: linear-gradient(135deg, #60a5fa, #a78bfa);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: bold;
  flex-shrink: 0;
    margin-bottom: 0px !important;

}
.ve-left h2 {
  font-size: 32px;
  font-weight: 600;
      text-align: center;
  margin-bottom: 20px;
}

.ve-left p {
  color: #cbd5f5;
    text-align: center;
    margin-bottom: 50px;
}

.ve-right {
  display: flex;

  gap: 30px;
}

.ve-block {
  padding: 28px;
  border-radius: 18px;
  background: rgba(255,255,255,0.06);
  backdrop-filter: blur(14px);
  border: 1px solid rgba(255,255,255,0.08);
}

.ve-block h3 {
  font-size: 20px;
  margin-bottom: 18px;
  font-weight: 700;
}

/* ✅ IMPORTANT FIX */
.ve-block * {
  margin-bottom: 10px;
  color: #e2e8f0;
}

      `}</style>

    </section>
  );
}