import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import API_HOST from "../config/APIHost";

export default function CaseStudySingle() {
  const { slug } = useParams();

  const [caseItem, setCaseItem] = useState(null);
  const [loading, setLoading] = useState(true);

  /* =====================
     BODY CLASS
  ===================== */
useEffect(() => {
  document.body.classList.add("case-study-page");

  // existing slug class
  if (slug) {
    document.body.classList.add(`case-${slug}`);

    // second extra class
    document.body.classList.add(`${slug}-page`);
  }

  return () => {
    document.body.classList.remove("case-study-page");

    if (slug) {
      document.body.classList.remove(`case-${slug}`);
      document.body.classList.remove(`${slug}-page`);
    }
  };
}, [slug]);

  /* =====================
     FETCH DATA (NEW API)
  ===================== */
const getCaseStudy = async () => {
  try {
    const url = `${API_HOST}/api/getSinglecasestudy.php?slug=${slug}`;
    console.log("API URL:", url);

    const res = await axios.get(url);

    console.log("RESPONSE:", res.data);

    if (res.data.status === "success") {
      setCaseItem(res.data.data);
    } else {
      setCaseItem(null);
    }
  } catch (err) {
    console.log("ERROR:", err);
    setCaseItem(null);
  } finally {
    setLoading(false);
  }
};

  useEffect(() => {
    if (slug) getCaseStudy();
  }, [slug]);

  /* =====================
     SLIDER
  ===================== */
  useEffect(() => {
    if (!caseItem) return;

    const sliders = document.querySelectorAll(".cc-arrow-slider");

    sliders.forEach((slider) => {
      const slides = slider.querySelector(".slides");
      const slideList = slider.querySelectorAll(".slide");
      const next = slider.querySelector(".next");
      const prev = slider.querySelector(".prev");

      if (!slides || !next || !prev) return;

      let index = 0;
      const total = slideList.length;

      const update = () => {
        slides.style.transform = `translateX(-${index * 100}%)`;
      };

      next.onclick = () => {
        index = (index + 1) % total;
        update();
      };

      prev.onclick = () => {
        index = (index - 1 + total) % total;
        update();
      };
    });
  }, [caseItem]);

  /* =====================
     ACCORDION FIX
  ===================== */
  useEffect(() => {
    if (!caseItem) return;

    const items = document.querySelectorAll(".cc-item");

    items.forEach((item) => {
      const header = item.querySelector(".cc-header");

      if (!header) return;

      header.onclick = () => {
        items.forEach((i) => i.classList.remove("active"));
        item.classList.add("active");
      };
    });
  }, [caseItem]);
useEffect(() => {
  if (!caseItem) return;

  // Hero fade-in
  setTimeout(() => {
    document.getElementById("ghost0")?.classList.add("on");

    [
      "hero-d1",
      "hero-d2",
      "hero-d3",
      "hero-d4",
      "hero-d5",
      "hero-card",
    ].forEach((id) => {
      document.getElementById(id)?.classList.add("on");
    });
  }, 80);

  // Counter Animation
  function animateCounter(el) {
    const target = parseInt(el.getAttribute("data-target"), 10);
    const suffix = el.getAttribute("data-suffix") || "";

    if (isNaN(target)) return;

    let current = 0;
    const step = Math.ceil(target / 40) || 1;

    const timer = setInterval(() => {
      current += step;

      if (current >= target) {
        el.textContent = target + suffix;
        clearInterval(timer);
      } else {
        el.textContent = current + suffix;
      }
    }, 28);
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add("on");

        entry.target
          .querySelectorAll(".fu")
          .forEach((el) => el.classList.add("on"));

        if (entry.target.id === "stats-grid") {
          entry.target
            .querySelectorAll(".stat-value")
            .forEach(animateCounter);
        }

        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12 }
  );

  [
    "stats-grid",
    "ch-head",
    "ap-head",
    "tl-head",
    "res-head",
    "testimonial",
  ].forEach((id) => {
    const el = document.getElementById(id);
    if (el) observer.observe(el);
  });

  document
    .querySelectorAll(
      ".challenges-list .fu, .approach-grid .fu, .timeline-list .fu, .results-grid .fu"
    )
    .forEach((el) => observer.observe(el));

  return () => observer.disconnect();
}, [caseItem]);
  /* =====================
     SCROLL REVEAL
  ===================== */
  useEffect(() => {
    if (!caseItem) return;

    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [caseItem]);

  /* =====================
     LOADING
  ===================== */
  if (loading) return <h2>Loading...</h2>;
  if (!caseItem) return <h2>No Case Study Found</h2>;

  /* =====================
     UI
  ===================== */
  return (
    <div className="case-single">
      {caseItem?.post_content && (
        <div
          dangerouslySetInnerHTML={{
            __html: caseItem.post_content,
          }}
        />
      )}
    </div>
  );
}