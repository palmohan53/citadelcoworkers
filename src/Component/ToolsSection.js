import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const ToolsSection = ({serviceTools}) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1000,
    slidesToShow: 7,
    slidesToScroll: 1,

    draggable: true,        // 👈 enables mouse dragging
    swipeToSlide: true,     // 👈 smooth drag
    touchMove: true,        // 👈 improves drag responsiveness

    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4 }},
      { breakpoint: 600,  settings: { slidesToShow: 2 }},
    ]
  };

  return (
    <section className='toolslider testimonial'>
      <div className="">
        <div className="heading-text">
          <div className="sectionHeading text-center mb-30">
         <h2>{serviceTools.slider_title}</h2>
          </div>
        </div>
<Slider {...settings}>
  {serviceTools.tools.length > 0 ? (
    serviceTools.tools.map((tool, index) => (
      <div key={index}>
        <img
          src={tool.url}
          alt={tool.title}
          style={{ maxHeight: '235px', margin: '0 auto' }}
        />
      </div>
    ))
  ) : (
    <p>Loading tools...</p>
  )}
</Slider>
      </div>
    </section>
  );
};

export default ToolsSection;
