import React from "react";

export default function VideoEditorSkillsSection() {
  const technical = [
    "Premiere Pro, After Effects, DaVinci Resolve & CapCut mastery",
    "Advanced motion graphics, VFX and cinematic grading",
    "Precise audio sync, sound design and mixing",
    "Platform optimization for YouTube, TikTok and Instagram",
    "AI-powered editing workflows",
    "Multi-format exports with accessibility compliance",
  ];

  const professional = [
    "Creative storytelling with trend awareness",
    "Strict brand consistency and visual precision",
    "24-hour offshore delivery workflow",
    "Seamless collaboration with your team",
    "Data-driven engagement improvements",
    "Unlimited revisions with full ownership handover",
  ];

  return (
    <section className="ve-section">
      <div className="ve-container">
        {/* LEFT SIDE */}
        <div className="ve-left">
          <h2>
            Skills that make our
            <br />
            <span>video editors stand out</span>
          </h2>
          <p>
            A blend of technical precision and creative storytelling designed
            to maximize engagement, retention, and brand impact.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="ve-right">
          <SkillBlock
            title="Technical Excellence"
            items={technical}
          />
          <SkillBlock
            title="Performance-Driven Mindset"
            items={professional}
          />
        </div>
      </div>

      <style>{`
.ve-section {
  padding: 80px 80px;
  background: radial-gradient(circle at 20% 20%, #1e3a8a, #020617);
  color: white;
  position: relative;
  overflow: hidden;
}

.ve-container {
  max-width: 1150px;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 60px;
  align-items: center;
}

.ve-left h2 {
    font-size: 32px;
    color: #05164d;
    font-weight: 600;
    margin-bottom: 20px;
    color: #fff;
}



.ve-left p {
 
  color: #cbd5f5;
  max-width: 420px;
}

.ve-right {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.ve-block {
  padding: 28px;
  border-radius: 18px;
  background: rgba(255,255,255,0.06);
  backdrop-filter: blur(14px);
  border: 1px solid rgba(255,255,255,0.08);
  transition: 0.35s ease;
}

.ve-block:hover {
  transform: translateY(-6px);
  background: rgba(255,255,255,0.1);
}

.ve-block h3 {
  font-size: 20px;
  margin-bottom: 18px;
  font-weight: 700;
}

.ve-list {
  display: grid;
  gap: 12px;
}

.ve-item {
  display: flex;
  gap: 12px;
  align-items: flex-start;
  font-size: 15px;
  color: #e2e8f0;
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
}

/* responsive */
@media (max-width: 900px) {
  .ve-container {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .ve-left h2 {
    font-size: 36px;
  }
}
      `}</style>
    </section>
  );
}

function SkillBlock({ title, items }) {
  return (
    <div className="ve-block">
      <h3>{title}</h3>
      <div className="ve-list">
        {items.map((item, i) => (
          <div className="ve-item" key={i}>
            <div className="ve-check">✓</div>
            <div>{item}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
