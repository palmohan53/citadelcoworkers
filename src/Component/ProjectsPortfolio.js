import React, { useEffect, useMemo, useState, useCallback } from "react";
import axios from "axios";
import Slider from "react-slick";

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

  const [activeCat, setActiveCat] = useState("all");

  // 🔥 LIGHTBOX
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxMedia, setLightboxMedia] = useState("");
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

  const getCardVideo = (item) => {
    const a = item?.acf || {};
    return (
      getFileUrl(a.video_url) ||
      getFileUrl(a.file_name) ||
      ""
    );
  };

  const getCardDesc = (item) => {
    const a = item?.acf || {};
    return a.descption || a.description || item?.post_excerpt || "";
  };

  // ----------------------------
  // API
  // ----------------------------
  const apiUrl = useMemo(() => {
    let url = `${API_HOST}${API_ENDPOINTS.Portfolio}${subService}`;
    if (serviceDetails)
      url = `${API_HOST}${API_ENDPOINTS.Portfolio}${serviceDetails}`;
    return url;
  }, [subService, serviceDetails]);

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
      setErr("Network error");
      setData(null);
    } finally {
      setLoading(false);
    }
  }, [apiUrl]);

  useEffect(() => {
    if (apiUrl) getPortfolio();
  }, [apiUrl, getPortfolio]);

  const categories = useMemo(() => {
    return data?.categories || [];
  }, [data]);

  const filteredItems = useMemo(() => {
    const cats = data?.categories || [];
    const merged = [];

    cats.forEach((cat) => {
      if (activeCat === "all" || cat.slug === activeCat) {
        (cat.items || []).forEach((it) => {
          merged.push({
            ...it,
            _img: getCardImage(it, cat),
            _video: getCardVideo(it),
            _desc: getCardDesc(it),
          });
        });
      }
    });

    return merged;
  }, [data, activeCat]);

  // ----------------------------
  // LIGHTBOX
  // ----------------------------
  const openLightbox = (media, alt = "") => {
    if (!media) return;
    setLightboxMedia(media);
    setLightboxAlt(alt);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setLightboxMedia("");
    setLightboxAlt("");
  };

  // ----------------------------
  // UI STATES
  // ----------------------------
  if (loading) {
    return <div style={{ textAlign: "center" }}>Loading...</div>;
  }

  if (err) {
    return <div style={{ textAlign: "center" }}>Error: {err}</div>;
  }

  const sliderSettings = {
    dots: true,
    arrows: false,
    slidesToShow: 3,
    autoplay: true,
      infinite: false, 
        slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="pp-wrap">
      <div className="container">

        {heading && <h2>{heading}</h2>}

        <div className="pp-slider port">
          <Slider {...sliderSettings}>
            {filteredItems.map((item) => (
              <div key={item.ID} className="pp-slide">
                <article className="pp-card">

                  <div className="pp-img">
                    {item._img ? (
                      <img
                        src={item._img}
                        onClick={() =>
                          openLightbox(item._img, item?.acf?.heading)
                        }
                        style={{ cursor: "pointer" }}
                      />
                    ) : item._video ? (
                      <video
                        src={item._video}
                        autoPlay
                        muted
                        loop
                        onClick={() =>
                          openLightbox(item._video, item?.acf?.heading)
                        }
                        style={{ cursor: "pointer", width: "100%" }}
                      />
                    ) : null}
                  </div>

                  <div className="pp-body">
                    <h3>{item?.acf?.heading}</h3>
                    <p>{item._desc}</p>
                  </div>

                </article>
              </div>
            ))}
          </Slider>
        </div>

      </div>

      {/* 🔥 LIGHTBOX */}
      {lightboxOpen && (
        <div className="pp-lightbox" onClick={closeLightbox}>
          <div onClick={(e) => e.stopPropagation()}>

            {lightboxMedia.includes(".mp4") ? (
              <video
                src={lightboxMedia}
                controls
                autoPlay
                style={{ maxWidth: "90vw", maxHeight: "80vh" }}
              />
            ) : (
              <img
                src={lightboxMedia}
                alt={lightboxAlt}
                style={{ maxWidth: "90vw", maxHeight: "80vh" }}
              />
            )}

          </div>
        </div>
      )}
    </div>
  );
}