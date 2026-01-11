import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BrandSlider = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    speed: 600,

    fade: true,             // ✅ fade instead of slide
    speed: 1000,            // fade animation speed
    cssEase: "linear",

    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    pauseOnFocus: false,    // important so hover remove pe autoplay chale
  };

  return (
    <div className="fade-slider-wrapper">
        <div className="slider-brands-slider">
            <div className="heading-brnads">Trusted by leading brands and startups</div>

        <div className="slider-images-brnads">
      <Slider {...settings}>
        <div className="slide">
            <div className="five-images">
     <img src="https://d233vxkpujhe36.cloudfront.net/images/home/color-logo/Hackerrank-logo.png">
        </img>
           <img src="https://d233vxkpujhe36.cloudfront.net/images/home/color-logo/Gitlab-logo.png">
        </img>
          
             <img src="https://d233vxkpujhe36.cloudfront.net/images/home/color-logo/airbnb-logo.png">
        </img>
           <img src="https://d233vxkpujhe36.cloudfront.net/images/home/color-logo/Gitlab-logo.png">
        </img>
          <img src="https://d233vxkpujhe36.cloudfront.net/images/home/color-logo/Hackerrank-logo.png">
        </img>
        </div>
        </div>
        <div className="slide">
              <div className="five-images">
     <img src="https://d233vxkpujhe36.cloudfront.net/images/home/color-logo/Hackerrank-logo.png">
        </img>
           <img src="https://d233vxkpujhe36.cloudfront.net/images/home/color-logo/Gitlab-logo.png">
        </img>
          
             <img src="https://d233vxkpujhe36.cloudfront.net/images/home/color-logo/airbnb-logo.png">
        </img>
           <img src="https://d233vxkpujhe36.cloudfront.net/images/home/color-logo/Gitlab-logo.png">
        </img>
          <img src="https://d233vxkpujhe36.cloudfront.net/images/home/color-logo/Hackerrank-logo.png">
        </img>
        </div>
        </div>
        <div className="slide">
           <div className="five-images">
     <img src="https://d233vxkpujhe36.cloudfront.net/images/home/color-logo/Hackerrank-logo.png">
        </img>
           <img src="https://d233vxkpujhe36.cloudfront.net/images/home/color-logo/Gitlab-logo.png">
        </img>
          
             <img src="https://d233vxkpujhe36.cloudfront.net/images/home/color-logo/airbnb-logo.png">
        </img>
           <img src="https://d233vxkpujhe36.cloudfront.net/images/home/color-logo/Gitlab-logo.png">
        </img>
          <img src="https://d233vxkpujhe36.cloudfront.net/images/home/color-logo/Hackerrank-logo.png">
        </img>
        </div>
        </div>
         <div className="slide">
      <div className="five-images">
     <img src="https://d233vxkpujhe36.cloudfront.net/images/home/color-logo/Hackerrank-logo.png">
        </img>
           <img src="https://d233vxkpujhe36.cloudfront.net/images/home/color-logo/Gitlab-logo.png">
        </img>
          
             <img src="https://d233vxkpujhe36.cloudfront.net/images/home/color-logo/airbnb-logo.png">
        </img>
           <img src="https://d233vxkpujhe36.cloudfront.net/images/home/color-logo/Gitlab-logo.png">
        </img>
          <img src="https://d233vxkpujhe36.cloudfront.net/images/home/color-logo/Hackerrank-logo.png">
        </img>
        </div>
        </div>
         <div className="slide">
           <div className="five-images">
     <img src="https://d233vxkpujhe36.cloudfront.net/images/home/color-logo/Hackerrank-logo.png">
        </img>
           <img src="https://d233vxkpujhe36.cloudfront.net/images/home/color-logo/Gitlab-logo.png">
        </img>
          
             <img src="https://d233vxkpujhe36.cloudfront.net/images/home/color-logo/airbnb-logo.png">
        </img>
           <img src="https://d233vxkpujhe36.cloudfront.net/images/home/color-logo/Gitlab-logo.png">
        </img>
          <img src="https://d233vxkpujhe36.cloudfront.net/images/home/color-logo/Hackerrank-logo.png">
        </img>
        </div>
        </div>
       
       
      </Slider>
       </div>
       </div>
    </div>
  );
};

export default BrandSlider;
