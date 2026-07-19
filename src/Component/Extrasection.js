import React, { useEffect, useState } from "react";
import axios from "axios";
import API_HOST from "../config/APIHost";

export default function ExtraSection({ slug }) {
  const [section, setSection] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;

    const fetchSection = async () => {
      try {
        const response = await axios.get(
          `${API_HOST}/api/getExtraSection.php?post_name=${slug}`
        );
console.log("Slug:", slug);
console.log("Response:", response.data);
        if (response.data.status === "success") {
          setSection(response.data.data);
        } else {
          setSection(null);
        }
      } catch (error) {
        console.error("Extra Section Error:", error);
        setSection(null);
      } finally {
        setLoading(false);
      }
    };

    fetchSection();
  }, [slug]);

  if (loading) return null;

  if (!section) return null;

  return (
    <div className="extra-section">
      <div
        dangerouslySetInnerHTML={{
          __html: section.post_content,
        }}
      />
    </div>
  );
}