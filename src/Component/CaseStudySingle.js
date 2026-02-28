import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import API_HOST from "../config/APIHost";
import API_ENDPOINTS from "../config/APIEndPoints";

export default function CaseStudySingle() {
  const { parent, slug } = useParams();

  const [casestudyData, setCasestudyData] = useState({
    parent: {},
    listing: [],
  });

  const [loading, setLoading] = useState(true);

  /* =====================
     Body Class Add/Remove
  ===================== */
  useEffect(() => {
    document.body.classList.add("case-study-page");

    if (parent) {
      document.body.classList.add(`case-${parent}`);
    }

    return () => {
      document.body.classList.remove("case-study-page");
      if (parent) {
        document.body.classList.remove(`case-${parent}`);
      }
    };
  }, [parent]);

  /* =====================
     Fetch Case Study
  ===================== */
  const getCaseStudy = async () => {
    let apiUrl = `${API_HOST}${API_ENDPOINTS.CaseStudy}${parent}`;

    try {
      const res = await axios.get(apiUrl);
      const json = res.data;

      if (!json || json.status !== "success") {
        setCasestudyData({ parent: {}, listing: [] });
        setLoading(false);
        return;
      }

      setCasestudyData({
        parent: json.parent || {},
        listing: json.listing || [],
      });
    } catch (err) {
      console.log(err);
      setCasestudyData({ parent: {}, listing: [] });
    }

    setLoading(false);
  };

  /* =====================
     Fetch effect
  ===================== */
  useEffect(() => {
    if (parent) getCaseStudy();
  }, [parent]);

  /* =====================
     Get case item safely
  ===================== */
  const caseItem =
    casestudyData.listing.find((item) => item.slug === slug) ||
    casestudyData.listing[0];

  /* =====================
     Auto Slider Effect
  ===================== */
  useEffect(() => {
    if (!caseItem) return;

    const sliders = document.querySelectorAll(".auto-slider");

    sliders.forEach((slider) => {
      const slides = slider.querySelector(".slides");
      const slideList = slider.querySelectorAll(".slide");
      const next = slider.querySelector(".next");
      const prev = slider.querySelector(".prev");

      if (!slides || !next || !prev) return;

      let index = 0;
      const total = slideList.length;

      function update() {
        slides.style.transform = `translateX(-${index * 100}%)`;
      }

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
     Strategy Tabs Effect
  ===================== */
  useEffect(() => {
    if (!caseItem) return;

    const initTabs = () => {
      const tabs = document.querySelectorAll(".st-tab");
      const preview = document.getElementById("strategyPreview");
      const contentBox = document.querySelector(".st-content");

      if (!tabs.length || !contentBox) return;

      tabs.forEach((tab) => {
        tab.onclick = () => {
          tabs.forEach((t) => t.classList.remove("active"));
          tab.classList.add("active");

          const img = tab.dataset.img;
          if (img && preview) preview.src = img;

          const text = tab.dataset.content;
          if (text) contentBox.innerHTML = text;
        };
      });
    };

    const t1 = setTimeout(initTabs, 300);
    const t2 = setTimeout(initTabs, 800);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [caseItem]);

  /* =====================
     RESULTS ACCORDION
  ===================== */
  useEffect(() => {
    if (!caseItem) return;

    const initResults = () => {
      const container = document.querySelector(".cc-smart-results");
      if (!container) return;

      const items = container.querySelectorAll(".cc-acc-item");
      const preview = container.querySelector("#cc-proof-img");

      if (!items.length) return;

      if (!container.dataset.initialized) {
        container.dataset.initialized = "true";
        items[0]?.classList.add("active");
      }

      items.forEach((item) => {
        if (item.dataset.bound === "true") return;
        item.dataset.bound = "true";

        const btn = item.querySelector(".cc-acc-btn");
        if (!btn) return;

        btn.addEventListener("click", function (e) {
          e.preventDefault();
          e.stopPropagation();

          items.forEach((i) => i.classList.remove("active"));
          item.classList.add("active");

          const img = item.getAttribute("data-img");
          if (preview && img) preview.src = img;
        });
      });
    };

    const t1 = setTimeout(initResults, 400);
    const t2 = setTimeout(initResults, 1200);

    const observer = new MutationObserver(initResults);
    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      observer.disconnect();
    };
  }, [caseItem]);

  /* =====================
     ⭐ SCROLL REVEAL (NEW)
  ===================== */
  useEffect(() => {
    if (!caseItem) return;

    const initReveal = () => {
      const container = document.querySelector(".case-single");
      if (!container) return;

      const elements = container.querySelectorAll(".reveal");
      if (!elements.length) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("active");
              observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.15,
          rootMargin: "0px 0px -80px 0px",
        }
      );

      elements.forEach((el) => observer.observe(el));
    };

    const t1 = setTimeout(initReveal, 300);
    const t2 = setTimeout(initReveal, 900);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [caseItem]);

  /* =====================
     Loading
  ===================== */
  if (loading) return <h2>Loading...</h2>;
  if (!casestudyData.listing.length)
    return <h2>No Case Study Found</h2>;

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