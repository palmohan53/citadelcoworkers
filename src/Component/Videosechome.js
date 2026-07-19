import React, { useRef, useState, useEffect } from "react";

const Videosection = () => {
  const videoRef = useRef(null);
  const sectionRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mobile = window.innerWidth <= 768;
    setIsMobile(mobile);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoadVideo(true);
          observer.disconnect();
        }
      },
      {
        root: null,
        threshold: 0.25,
        rootMargin: "100px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <section className="ctaVideoSection" ref={sectionRef}>
      <div className="container">
        <div className="row align-items-center">

          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className="videoBox">

              {!shouldLoadVideo || isMobile ? (
                <img
                  src={isMobile ? "/images/mobile-thumb.webp" : "/images/video-thumb.webp"}
                  alt="Virtual staffing video"
                  className="videoPoster"
                  loading="lazy"
                  decoding="async"
                />
              ) : (
                <video
                  ref={videoRef}
                  muted
                  loop
                  playsInline
                  preload="none"
                  poster="/images/mobile-thumb.webp"
                  controls={isPlaying}
                  className="w-100"
                >
                  <source src="/images/homevideo.mp4" type="video/mp4" />
                </video>
              )}

              {shouldLoadVideo && !isMobile && !isPlaying && (
                <button className="playBtn" onClick={handlePlay} aria-label="Play video">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    viewBox="0 0 24 24"
                    fill="white"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              )}

            </div>
          </div>

          <div className="col-lg-6">
            <div className="contentBox">
              <span className="subTitle">Virtual Staffing Solutions</span>

              <h2>
                Hire Top 3% Remote Talent from India,
                <br />
                Save 70% on Hiring Costs
              </h2>

              <p>
                Hire dedicated virtual employees for accounting,
                customer support, marketing, development, and more —
                without the overhead of local hiring.
              </p>

              <a href="/contact-us" className="colorBtn">
                Meet Your Next Hire
              </a>
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        .ctaVideoSection {
          padding: 80px 0;
          background: #efefef;
          overflow: hidden;
        }

        .videoBox {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0,0,0,0.3);
          background: #000;
          aspect-ratio: 16 / 9;
        }

        .videoBox video,
        .videoPoster {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          background: #000;
        }

        .playBtn {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 90px;
          height: 90px;
          border: none;
          border-radius: 50%;
          background: rgba(255,255,255,0.2);
          backdrop-filter: blur(10px);
          cursor: pointer;
          transition: 0.3s;
          z-index: 2;
        }

        .playBtn:hover {
          transform: translate(-50%, -50%) scale(1.1);
        }

        .contentBox {
          padding-left: 40px;
        }

        .subTitle {
          margin-bottom: 14px !important;
          display: inline-block;
          background: rgb(29 143 122 / 26%);
          border: 1px solid rgb(29 143 122 / 26%);
          color: #000;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 6px 14px;
          border-radius: 100px;
          width: fit-content;
        }

        .contentBox h2 {
          font-size: 32px;
          line-height: 1.2;
          font-weight: 700;
          margin-bottom: 20px;
        }

        .contentBox p {
          line-height: 1.8;
          margin-bottom: 30px;
        }

        @media(max-width:991px) {
          .contentBox {
            padding-left: 0;
            text-align: center;
            margin-top: 30px;
          }

          .contentBox h2 {
            font-size: 28px;
          }

          .playBtn {
            width: 70px;
            height: 70px;
            background: none !important;
            backdrop-filter: unset !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Videosection;