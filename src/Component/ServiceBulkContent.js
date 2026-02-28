import React, { useEffect } from "react";

const ServiceBulkContent = ({ serviceBulkContent }) => {
  useEffect(() => window.scrollTo(0, 0), []);

  // ✅ Works for both: response OR axiosResponse
  const listing =
    serviceBulkContent?.listing || serviceBulkContent?.data?.listing;

  if (!Array.isArray(listing) || listing.length === 0) return null;

  const { post_title, post_content, banner } = listing[0] || {};

  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-12 col-12">
          {post_title && (
            <div className="sectionHeading text-center mb-3">
              <h2>{post_title}</h2>
            </div>
          )}

          <div className="bulkContent mt-5">
            {post_content && (
              <div
                className="para"
                dangerouslySetInnerHTML={{ __html: post_content }}
              />
            )}

            {banner && (
              <img
                src={banner}
                alt={post_title || "Service banner"}
                className="serviceIco"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceBulkContent;
