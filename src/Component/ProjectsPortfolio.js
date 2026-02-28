import React, { useEffect, useMemo, useState, useCallback } from "react";
import axios from "axios";
import Slider from "react-slick";

// Slick CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import API_HOST from "../config/APIHost";
import API_ENDPOINTS from "../config/APIEndPoints";

export default function ProjectsPortfolio({
  subService = "",
  serviceDetails = "",
  heading = "",
}) {
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");
  const [data, setData] = useState(null);

  // Tabs
  const [activeCat, setActiveCat] = useState("all");

  // Lightbox state
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImg, setLightboxImg] = useState("");
  const [lightboxAlt, setLightboxAlt] = useState("");

  // ----------------------------
  // Helpers
  // ----------------------------
  const getFileUrl = (val) => {
    if (!val) return "";
    if (typeof val === "string") return val;
    return val.file_url || val.url || "";
  };

  const getCardImage = (item, cat) => {
    const itemA = item?.acf || {};
    const catA = cat?.acf || {};

    return (
      getFileUrl(itemA.featured_image_url) ||
      getFileUrl(itemA.featured_image) ||
      (item?.banner && item.banner !== "NA" ? item.banner : "") ||
      getFileUrl(catA.featured_image_url) ||
      getFileUrl(catA.featured_image) ||
      ""
    );
  };

  const getCardDesc = (item) => {
    const a = item?.acf || {};
    return a.descption || a.description || item?.post_excerpt || "";
  };

  // ----------------------------
  // Build API URL
  // ----------------------------
  const apiUrl = useMemo(() => {
    let url = `${API_HOST}${API_ENDPOINTS.Portfolio}${subService}`;
    if (serviceDetails)
      url = `${API_HOST}${API_ENDPOINTS.Portfolio}${serviceDetails}`;
    return url;
  }, [subService, serviceDetails]);

  // ----------------------------
  // Fetch Portfolio
  // ----------------------------
  const getPortfolio = useCallback(async () => {
    try {
      setLoading(true);
      setErr("");

      const res = await axios.get(apiUrl);
      const json = res.data;

      if (!json || json.status !== "success") {
        setErr(json?.message || "Failed to load portfolio");
        setData(null);
        return;
      }

      setData(json);
    } catch (e) {
      console.error("API Error:", e);
      setErr("Network error");
      setData(null);
    } finally {
      setLoading(false);
    }
  }, [apiUrl]);

  useEffect(() => {
    if (apiUrl) getPortfolio();
  }, [apiUrl, getPortfolio]);

  // ----------------------------
  // Categories
  // ----------------------------
  const categories = useMemo(() => {
    return data?.categories || [];
  }, [data]);

  // ----------------------------
  // Filtered Items
  // ----------------------------
  const filteredItems = useMemo(() => {
    const cats = data?.categories || [];
    const merged = [];

    cats.forEach((cat) => {
      if (activeCat === "all" || cat.slug === activeCat) {
        (cat.items || []).forEach((it) => {
          merged.push({
            ...it,
            _img: getCardImage(it, cat),
            _desc: getCardDesc(it),
          });
        });
      }
    });

    const seen = new Set();
    return merged.filter((x) => {
      const key = String(x?.ID ?? "");
      if (!key || seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  }, [data, activeCat]);

  // ----------------------------
  // Lightbox handlers
  // ----------------------------
  const openLightbox = (img, alt = "") => {
    if (!img) return;
    setLightboxImg(img);
    setLightboxAlt(alt);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setLightboxImg("");
    setLightboxAlt("");
  };

  // ----------------------------
  // Hide if needed
  // ----------------------------
  if (loading) return null;
  if (err || !filteredItems.length) return null;

  // ----------------------------
  // Slider settings
  // ----------------------------
  const sliderSettings = {
    dots: true,
    arrows: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    cssEase: "ease-in-out",
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <div className="pp-wrap">
      <div className="container">
        {heading && (
          <div className="pp-head">
            <h2>{heading}</h2>
          </div>
        )}

        {/* Tabs */}
        {categories.length > 1 && (
          <div className="pp-tabs">
            <button
              className={activeCat === "all" ? "active" : ""}
              onClick={() => setActiveCat("all")}
            >
              All
            </button>

            {categories.map((cat) => (
              <button
                key={cat.slug}
                className={activeCat === cat.slug ? "active" : ""}
                onClick={() => setActiveCat(cat.slug)}
              >
                {cat.name}
              </button>
            ))}
          </div>
        )}

        {/* Slider */}
        <div className="pp-slider">
          <Slider {...sliderSettings}>
            {filteredItems.map((item) => (
              <div key={item.ID} className="pp-slide">
                <article className="pp-card">
                  <div className="pp-img">
                    {item._img ? (
                      <img
                        src={item._img}
                        alt={item?.post_title || "Project"}
                        loading="lazy"
                        onClick={() =>
                          openLightbox(
                            item._img,
                            item?.post_title || "Project"
                          )
                        }
                        style={{ cursor: "zoom-in" }}
                      />
                    ) : (
                      <div className="pp-img-placeholder" />
                    )}
                  </div>

                  <div className="pp-body">
                    <h3>{item?.post_title}</h3>
                    {item._desc && (
                      <p className="pp-desc">{item._desc}</p>
                    )}
                  </div>
                </article>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="pp-lightbox" onClick={closeLightbox}>
          <div
            className="pp-lightbox-inner"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="pp-lightbox-close" onClick={closeLightbox}>
              ×
            </button>
            <img src={lightboxImg} alt={lightboxAlt} />
          </div>
        </div>
      )}

      {/* Styles */}
      <style>{`
.pp-tabs {
  display: flex;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 30px;
}

.pp-tabs button {
  padding: 8px 18px;
  border-radius: 999px;
  border: 1.5px solid #2563eb;
  background: #fff;
  color: #2563eb;
  font-weight: 500;
  cursor: pointer;
  transition: 0.3s;
}

.pp-tabs button.active,
.pp-tabs button:hover {
  background: #2563eb;
  color: #fff;
}

.pp-slider {
  position: relative;
  padding-bottom: 60px;
}
`}</style>
    </div>
  );
}
