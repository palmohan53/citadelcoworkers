import React from "react";
import Slider from "react-slick";

const plainText = (value = "") =>
  String(value)
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const reviewMeta = (header = "") => {
  const strongText = header.match(/<strong[^>]*>([\s\S]*?)<\/strong>/i)?.[1];
  return plainText(strongText || "");
};

export default function WebsiteReviews({ reviewsResponse }) {
  const reviews = reviewsResponse?.data?.listing || reviewsResponse?.listing || [];

  if (!reviews.length) return null;

  const settings = {
    dots: false,
    arrows: true,
    infinite: reviews.length > 3,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: reviews.length > 3,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="website-reviews" aria-labelledby="website-reviews-title">
      <div className="container">
        <div className="website-reviews__heading">
          <span>Website Reviews</span>
          <div class="section-title">     <h2 id="website-reviews-title">Real Feedback, Shared on Our Website</h2> <p>Honest feedback from clients who shared their experience directly with us.</p></div>
     
         
        </div>

        <Slider {...settings} className="website-reviews__slider">
          {reviews.map((review) => {
            const context = reviewMeta(review?.acf?.testiniminal_header || review?.acf?.testimonial_header || "");
            const name = review?.post_title || "Citadel Coworkers Client";

            return (
              <article className="website-review-card" key={review?.ID || review?.post_name || name}>
    
                <div className="website-review-card__stars" aria-label="5 out of 5 stars">★★★★★</div>
                <p className="website-review-card__text">{plainText(review?.post_excerpt || review?.post_content)}</p>

                <div className="website-review-card__person">
                  {review?.banner ? (
                    <img src={review.banner} alt={name} loading="lazy" />
                  ) : (
                    <span className="website-review-card__initial">{name.charAt(0)}</span>
                  )}
                  <div>
                    <h3>{name}</h3>
                    {context && <p>{context}</p>}
                  </div>
                </div>

               
              </article>
            );
          })}
        </Slider>
      </div>
    </section>
  );
}
