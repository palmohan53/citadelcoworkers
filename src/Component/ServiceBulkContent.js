import React, { useEffect } from "react";

const ServiceBulkContent = ({ serviceBulkContent }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Support both response formats
  const listing =
    serviceBulkContent?.listing ||
    serviceBulkContent?.data?.listing ||
    [];

  if (!listing.length) return null;

  const item = listing[0];

  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-12 col-12">
          {item?.post_title && (
            <div className="sectionHeading text-center mb-3">
              <h2>{item.post_title}</h2>
            </div>
          )}

          <div className="bulkContent mt-5">
            {item?.post_content && (
              <div
                className="para"
                dangerouslySetInnerHTML={{
                  __html: item.post_content,
                }}
              />
            )}

            {item?.banner && (
              <img
                src={item.banner}
                alt={item.post_title}
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