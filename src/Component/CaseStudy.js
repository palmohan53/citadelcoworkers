import React, { useMemo, useRef, useState, useCallback, useEffect } from "react";

/**
 * SIMPLE slider only:
 * ✅ No wheel/scroll intercept
 * ✅ Slide change via dots (and autoplay)
 * ✅ Touch swipe works (native horizontal scroll)
 * ✅ Autoplay (pauses on user interaction + hover)
 *
 * ✅ This version shows ONLY:
 * - Logo (optional)
 * - Title
 * - Description
 * - Button
 * - Dots
 */
export default function HeroMarqueeInfoSlider() {
  const trackRef = useRef(null);
  const lastUserActionRef = useRef(Date.now());
  const autoplayRef = useRef(null);

  const slides = useMemo(
    () => [
      {
        id: "s1",
        title: "Driving Global B2B Demand for a UAE-Based Busbar Manufacturer",
        description: "Through an integrated digital marketing strategy, Adinath Enterprises scaled its online visibility beyond regional markets, achieving 450% traffic growth, strong keyword dominance, and consistent international B2B leads from EV and renewable energy sectors.",
        btn: "Read Case Study",
        href: "#",
        images: [
          "https://virtualassistant24x7.com/wp-content/uploads/2026/01/Home-adinathenterprises.com_-scaled.png",
          "https://virtualassistant24x7.com/wp-content/uploads/2026/01/Portfolio-adinathenterprises.com_-scaled.png",
          "https://virtualassistant24x7.com/wp-content/uploads/2026/01/Products-adinathenterprises.com_.png",
          "https://virtualassistant24x7.com/wp-content/uploads/2026/01/Our-Team-adinathenterprises.com_-scaled.webp",
          "https://virtualassistant24x7.com/wp-content/uploads/2026/01/Contact-adinathenterprises.com_.webp",
        ],
        brandColor: "#643a0e",
        logo: "https://virtualassistant24x7.com/wp-content/uploads/2026/01/Adinath-Enterprises-1.png",
      },
      {
        id: "s2",
        title: "Strengthening SEO Delivery with Scalable Virtual Support",
        description:
          "VirtualAssistantSEO.com scaled SEO operations efficiently, supporting ongoing optimization efforts and contributing to sustained improvements in organic reach and discoverability.",
        btn: "View Case Study",
        href: "#",
        images: [
          "https://virtualassistant24x7.com/wp-content/uploads/2026/01/Hire-Virtual-Assistant-SEO-Expert-in-India-1-scaled.webp",
          "https://virtualassistant24x7.com/wp-content/uploads/2026/01/Our-Process-Virtual-Assistant-SEO-scaled.webp",
          "https://virtualassistant24x7.com/wp-content/uploads/2026/01/Hire-Virtual-Assistant-SEO-Expert-in-India-2-scaled.webp",
          "https://virtualassistant24x7.com/wp-content/uploads/2026/01/Hire-Virtual-Assistant-SEO-Expert-in-India-2-scaled.webp",
          "https://virtualassistant24x7.com/wp-content/uploads/2026/01/Contact-Virtual-Assistant-SEO-scaled.webp",
        ],
        brandColor: "#9a57d7",
        logo: "https://virtualassistant24x7.com/wp-content/uploads/2026/01/Click-1.png",
      },
    ],
    []
  );

  const [active, setActive] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const clamp = (n, min, max) => Math.max(min, Math.min(max, n));

  const markUserAction = () => {
    lastUserActionRef.current = Date.now();
  };

  const goTo = useCallback(
    (idx, behavior = "smooth") => {
      const el = trackRef.current;
      if (!el) return;
      const next = clamp(idx, 0, slides.length - 1);
      setActive(next);
      el.scrollTo({ left: next * el.clientWidth, behavior });
    },
    [slides.length]
  );

  // Keep active index synced with scroll position
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    let raf = 0;
    const onScroll = () => {
      markUserAction();
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const w = el.clientWidth || 1;
        const idx = Math.round(el.scrollLeft / w);
        if (idx !== active) setActive(idx);
      });
    };

    const onPointerDown = () => markUserAction();
    const onTouchStart = () => markUserAction();
    const onWheel = () => markUserAction(); // doesn't block wheel; only pauses autoplay

    el.addEventListener("scroll", onScroll, { passive: true });
    el.addEventListener("pointerdown", onPointerDown, { passive: true });
    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("wheel", onWheel, { passive: true });

    return () => {
      el.removeEventListener("scroll", onScroll);
      el.removeEventListener("pointerdown", onPointerDown);
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("wheel", onWheel);
      cancelAnimationFrame(raf);
    };
  }, [active]);

  // Autoplay
  useEffect(() => {
    const AUTOPLAY_MS = 4500;
    const USER_PAUSE_MS = 2500; // wait after user interaction
    const el = trackRef.current;
    if (!el) return;

    const tick = () => {
      // pause on hover OR if tab hidden
      if (isHovering) return;
      if (typeof document !== "undefined" && document.hidden) return;

      // pause shortly after user interaction
      const idleFor = Date.now() - lastUserActionRef.current;
      if (idleFor < USER_PAUSE_MS) return;

      const next = (active + 1) % slides.length;
      goTo(next, "smooth");
    };

    if (autoplayRef.current) clearInterval(autoplayRef.current);
    autoplayRef.current = setInterval(tick, AUTOPLAY_MS);

    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, [active, slides.length, goTo, isHovering]);

  return (
    <>
      <div
        className="hmiHero"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div className="hmiTrack" ref={trackRef}>
          {slides.map((s, i) => {
            const isActive = i === active;
            const loopList = [...s.images, ...s.images];

            return (
              <article
                key={s.id}
                className={`hmiSlide ${isActive ? "isActive" : ""}`}
              >
                <div className="hmiContainer">
                  <div className="hmiGrid">
                    {/* LEFT: moving images */}
                    <div className="hmiLeft" aria-hidden="true">
                      <div className="hmiCols">
                        <div className="hmiCol up">
                          <div className="hmiColTrack">
                            {loopList.map((src, k) => (
                              <div className="hmiImg" key={k}>
                                <img src={src} alt="" loading="lazy" />
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="hmiCol down">
                          <div className="hmiColTrack">
                            {loopList.map((src, k) => (
                              <div className="hmiImg" key={k}>
                                <img src={src} alt="" loading="lazy" />
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* RIGHT: ONLY title + description */}
                    <div className="hmiRight">
                      {s.logo && (
                        <div className="hmiLogoWrap">
                          <img src={s.logo} alt="Brand Logo" />
                        </div>
                      )}

                      <h2 className="hmiTitle">{s.title}</h2>

                      {s.description ? (
                        <p className="hmiDesc">{s.description}</p>
                      ) : null}

                      <div className="hmiActions">
                        <a
                          className="lineBtn"
                          href={s.href}
                          style={{ background: s.brandColor }}
                        >
                          {s.btn}
                        </a>
                      </div>

                      <div className="hmiDots">
                        {slides.map((_, di) => (
                          <button
                            key={di}
                            className={`hmiDot ${di === active ? "on" : ""}`}
                            onClick={() => {
                              markUserAction();
                              goTo(di);
                            }}
                            aria-label={`Go to slide ${di + 1}`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <style>{`
        .hmiHero{
          width: 100%;
          position: relative;
          overflow: hidden;
        }

        /* slider track */
        .hmiTrack{
          height: 100%;
          width: 100%;
          display: flex;
          overflow-x: auto;
          overflow-y: hidden;
          scroll-snap-type: x mandatory;
          scroll-behavior: smooth;
          -webkit-overflow-scrolling: touch;
        }
        .hmiTrack::-webkit-scrollbar{ height: 0; }

        .hmiSlide{
          min-width: 100%;
          height: 100%;
          scroll-snap-align: start;
          scroll-snap-stop: always;
          position: relative;
        }

        .hmiContainer{
          height: 100%;
          width: 100%;
          display: grid;
          place-items: center;
          margin-top: 37px;
        }

        .hmiGrid{
          width: min(1180px, 100%);
          height: 100%;
          display: grid;
          grid-template-columns: 0.95fr 1.05fr;
          gap: clamp(18px, 3.2vw, 46px);
          align-items: center;
        }

        /* LEFT moving images */
        .hmiLeft{
          position: relative;
          height: clamp(420px, 72vh, 760px);
          border-radius: 18px;
          overflow: hidden;
          background: rgba(255,255,255,.5);
          border: 1px solid rgba(0,0,0,.06);
          box-shadow: 0 30px 90px rgba(0,0,0,.10);
        }

        .hmiCols{
          position: absolute;
          inset: 0;
          display: flex;
          gap: 14px;
          padding: 18px;
        }

        .hmiCol{
          flex: 1;
          height: 100%;
          overflow: hidden;
          border-radius: 14px;
        }

        .hmiColTrack{
          display: flex;
          flex-direction: column;
          gap: 14px;
          will-change: transform;
        }

        .hmiImg img{
          width: 100%;
          height: auto;
          display: block;
          border-radius: 14px;
        }

        @keyframes moveUp {
          0%   { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        @keyframes moveDown {
          0%   { transform: translateY(-50%); }
          100% { transform: translateY(0); }
        }
        .hmiCol.up .hmiColTrack{ animation: moveUp 18s linear infinite; }
        .hmiCol.down .hmiColTrack{ animation: moveDown 18s linear infinite; }

        /* RIGHT info */
        .hmiRight{ padding: clamp(6px, 1vw, 16px); }

        /* Underlined title like screenshot */
        .hmiTitle{
          margin: 0 0 16px;
          font-size: 20px;
          font-weight: 800;
          color: rgba(0,0,0,.92);
         
          text-underline-offset: 5px;
          opacity: 0;
          transform: translateY(14px);
          transition: 650ms cubic-bezier(.2,.8,.2,1);
        }

        .hmiDesc{
          margin: 0 0 10px;
          max-width: 620px;
          line-height: 1.7;
          font-size: 13px;
          color: rgba(0,0,0,.72);
          opacity: 0;
          transform: translateY(14px);
          transition: 650ms cubic-bezier(.2,.8,.2,1);
          transition-delay: 70ms;
        }

        .hmiActions{
          display: flex;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
          opacity: 0;
          transform: translateY(14px);
          transition: 650ms cubic-bezier(.2,.8,.2,1);
          transition-delay: 140ms;
        }

        .lineBtn{
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 12px 26px;
          border-radius: 999px;
          text-decoration: none;
          font-weight: 800;
          color: #fff;
        }

        .hmiDots{
          margin-top: 18px;
          display: flex;
          gap: 10px;
          align-items: center;
          opacity: 0;
          transform: translateY(14px);
          transition: 650ms cubic-bezier(.2,.8,.2,1);
          transition-delay: 170ms;
        }
        .hmiDot{
          width: 7px; height: 7px;
          border-radius: 999px;
          border: 0;
          background: rgba(0,0,0,.18);
          cursor: pointer;
        }
        .hmiDot.on{ background: rgba(0,0,0,.62); }

        /* entrance */
        .hmiSlide.isActive .hmiTitle,
        .hmiSlide.isActive .hmiDesc,
        .hmiSlide.isActive .hmiActions,
        .hmiSlide.isActive .hmiDots{
          opacity: 1;
          transform: translateY(0);
        }

        @media (max-width: 980px){
          .hmiGrid{ grid-template-columns: 1fr; gap: 18px; }
          .hmiLeft{ height: 420px; }
          .hmiTitle{ font-size: 26px; }
        }

        .hmiLogoWrap img {
          margin-bottom: 18px;
          max-width: 60%;
          height: auto;
          display: block;
        }
      `}</style>
    </>
  );
}
