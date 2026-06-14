import { useState } from "react";
import Slider from "react-slick";

// slick CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    img: "/images/laura.webp",
    name: "Laura",
    role: "Gastroenterology Consultant",
    video: "/images/laura.mp4",
  },
  {
    img: "/images/Michael Lin.webp",
    name: "Michael Lin",
    role: "Legal Advisor",
    video: "/images/mich.mp4",
  },
  {
    img: "/images/davidholenm.webp",
    name: "david",
    role: "Kings Homes and Associates",
    video: "/images/davidtest.mp4",
  },
  {
    img: "/images/Olivia Thompson.webp",
    name: "Olivia",
    role: "Business Owner",
    video: "/images/olivatestimonial.mp4",
  },

  {
    img: "/images/Kelsey Yates.webp",
    name: "Kelsey",
    role: "Business Owner",
    video: "/images/kaytes.mp4",
  },
  
  {
    img: "/images/Tracy  and Keira Hao.webp",
    name: "Tracy  and Keira Hao",
    role: "Business Owner",
    video: "/images/Tracy  and Keira Hao.mp4",
  },
];

export default function VideoTestimonial() {
  const [activeVideo, setActiveVideo] = useState(null);

  // 🔥 slick settings
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 992,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <>
      <div className="vt-section pp-slider">
        <div className="sectionHeading text-center">
          <h2>Real Voices, Real Results</h2>
        </div>

        <div className="container">
       <div class="vtt-grid desktop-section">
            {testimonials.map((item, index) => (
              <div key={index}>
                <div
                  className="vt-card"
                  onClick={() => setActiveVideo(item.video)}
                >
                  <img src={item.img} alt={item.name} />

                  {/* PLAY BUTTON */}
                  <div className="playBtntest"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="white"><path d="M8 5v14l11-7z"></path></svg></div>
                </div>
              </div>
            ))}
    
        </div>
		
		  <Slider {...settings} className="for-mobile-only">
		    {testimonials.map((item, index) => (
              <div key={index}>
                <div
                  className="vt-card"
                  onClick={() => setActiveVideo(item.video)}
                >
                  <img src={item.img} alt={item.name} />

                  {/* PLAY BUTTON */}
                  <div className="playBtntest"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="white"><path d="M8 5v14l11-7z"></path></svg></div>
                </div>
              </div>
            ))}
		        </Slider>
      </div>
</div>




      {/* POPUP */}
      {activeVideo && (
        <div className="vt-popup" onClick={() => setActiveVideo(null)}>
          <div
            className="vt-popup-content"
            onClick={(e) => e.stopPropagation()}
          >
            <video src={activeVideo} controls autoPlay />
          </div>
        </div>
      )}
    </>
  );
}