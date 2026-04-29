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

    return () => {
      document.body.classList.remove("case-study-page");
    };
  }, []);

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