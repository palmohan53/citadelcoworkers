import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const ToolsSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
     arrows: false, // hide arrows
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4 }},
      { breakpoint: 600,  settings: { slidesToShow: 2 }},
    ]
  };

  return (
    <div className='toolslider'>
      <div class="heading-text ">
        <div class="sectionHeading text-center mb-30"><h2>The Complete Toolkit for Front-End Development</h2></div>
       </div>
    <Slider {...settings}>
      <div><img src="https://www.virtualemployee.com/wp-content/uploads/2023/09/python-logo.jpg"></img></div>
      <div><img src="https://www.virtualemployee.com/wp-content/uploads/2023/09/laravel-logo.png"></img></div>
      <div><img src="https://www.virtualemployee.com/wp-content/uploads/2023/09/django-logo.jpg"></img></div>
      <div><img src="https://www.virtualemployee.com/wp-content/uploads/2023/09/bootstrap-logo.jpg"></img></div>
      <div><img src="https://www.virtualemployee.com/wp-content/uploads/2023/09/angularjs-logo.jpg"></img></div>
      <div><img src="https://www.virtualemployee.com/wp-content/uploads/2023/09/flutter-logo.jpg"></img></div>
       <div><img src="https://www.virtualemployee.com/wp-content/uploads/2023/09/swift-logo.png"></img></div>
         <div><img src="https://www.virtualemployee.com/wp-content/uploads/2023/09/flutter-logo.jpg"></img></div>
       <div><img src="https://www.virtualemployee.com/wp-content/uploads/2023/09/swift-logo.png"></img></div>
    
    </Slider>
    </div>  );
};

export default ToolsSection;
