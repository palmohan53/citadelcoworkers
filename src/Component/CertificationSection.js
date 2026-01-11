import React, { useEffect, useRef, useState, useMemo } from "react";

const CertificateSection = ({ certificationData }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef(null);
  const intervalTime = 3000;

  // ✅ Now use imageUrl / imageAlt directly
  const certificates = useMemo(() => {
    const list = certificationData?.certifications || [];
    return list
      .filter((item) => item?.imageUrl)
      .map((item) => ({
        title: item?.name || "Certification",
        img: item?.imageUrl,
        alt: item?.imageAlt || item?.name || "Certification",
      }));
  }, [certificationData?.certifications]);

  const stopAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const startAutoSlide = () => {
    stopAutoSlide();
    if (!certificates.length) return;

    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % certificates.length);
    }, intervalTime);
  };

  useEffect(() => {
    setActiveIndex(0);
    startAutoSlide();
    return () => stopAutoSlide();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [certificates.length]);

  const handleClick = (index) => {
    setActiveIndex(index);
    startAutoSlide();
  };

  if (!certificates.length) return null;

  return (
    <div className="cert-section" id="certification">
      <div className="container">
        <div className="heading-text">
            <div className="sectionHeading text-center mb-30">
               <h2>{certificationData?.heading || "Certifications"}</h2>
                  <p>
            {certificationData?.subheading || ""}
          </p>
                </div>
               
        </div>
      

        <div className="cert-grid">
          <div className="cert-list" role="list">
            {certificates.map((item, index) => (
              <button
                key={index}
                type="button"
                className={`cert-item ${activeIndex === index ? "active" : ""}`}
                onClick={() => handleClick(index)}
                aria-selected={activeIndex === index}
              >
                {item.title}
              </button>
            ))}
          </div>

          <div className="cert-preview">
            <div className="cert-image-wrap">
              <img
                src={certificates[activeIndex]?.img}
                alt={certificates[activeIndex]?.alt}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .cert-section{ padding:00px 16px; background:#fff; }
        .cert-container{ max-width:1100px; margin:0 auto; }
        .cert-header{ text-align:center; margin-bottom:24px; }
        .cert-title{ font-size:32px; line-height:1.2; margin:0 0 8px; color:#0f172a; font-weight:700; }
        .cert-subtitle{ margin:0 auto; max-width:720px; color:#475569; font-size:16px; line-height:1.6; }
        .cert-grid{align-items: center;   width: 80%;
    margin: 0 auto;display:grid; grid-template-columns:1fr 1.4fr; gap:20px; align-items:center; margin-top:20px; }
     
        .cert-item{ width:100%; display:flex; align-items:center; justify-content:flex-start; padding:12px; margin:8px 0; border-radius:12px; border:1px solid transparent; background:#f8fafc; font-size:15px; text-align:left; cursor:pointer; color:#0f172a; transition:all .2s ease; }
        .cert-item:hover{    background: #1749d521;
    border-color: #1749d521; }
        .cert-item.active{ background:#1749d521; border-color:#1749d521; font-weight:600; }
        .cert-preview{ border-radius:14px; overflow:hidden; border: 1px solid #efefef;}
        .cert-image-wrap{  overflow:hidden; height:300px}
        .cert-image-wrap img{ width:100%; display:block;     height: 100%;
    object-fit: contain;}
        @media (max-width:900px){
          .cert-grid{ grid-template-columns:1fr; }
          .cert-image-wrap img{ height:300px; }
         .cert-grid
         {
         width:100% !important}
        }
      `}</style>
    </div>
  );
};

export default CertificateSection;
