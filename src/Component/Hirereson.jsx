import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// 🧩 Custom Arrows (we’ll position them using CSS)
const NextArrow = (props) => {
  const { onClick } = props;
  return <div className="custom-arrow next" onClick={onClick}>›</div>;
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return <div className="custom-arrow prev" onClick={onClick}>‹</div>;
};

const HireReson = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
  
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="toolslider slider-wrapper">
      <Slider {...settings}>
        {[...Array(8)].map((_, index) => (
          <div key={index}>
            <div className="reson-hire">
              <h3>Free Up Valuable Time</h3>
              The first tenet of smart business management is the effective
              delegation of tasks. By offloading routine administrative duties
              to a virtual assistant, entrepreneurs can reclaim precious hours.
              This newfound time can then be invested in strategic planning and
              growth efforts—areas that directly impact the bottom line.
            </div>
          </div>
        ))}
      </Slider>

      {/* Arrows container at bottom center */}
      <div className="bottom-arrow-container">
        <PrevArrow onClick={() => document.querySelector(".slick-prev").click()} />
        <NextArrow onClick={() => document.querySelector(".slick-next").click()} />
      </div>
    </div>
  );
};

export default HireReson;
