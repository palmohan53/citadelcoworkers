
import React, {useEffect} from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faCircleCheck} from '@fortawesome/free-solid-svg-icons';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.compat.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ServiceProfile = ({serviceProfile}) => {
    let settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
    };
    
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    // if (status === 'loading') {
    //     return <div className="loaderWrp"><span className="loader"></span></div>
    // }
    return(
       
        <Slider {...settings}>
            {
                serviceProfile?.data?.listing?.map((data, index)=>{
                    return(
                        <React.Fragment key={index}>
                            
                            <ScrollAnimation animateIn="fadeIn">
                                <div className="bannerProfile">
                                    <img src={data.banner !== 'NA' ? data.banner  :'/images/profile-dummy.png'} alt="" className="" />
                                    <div className="bannerProfileDetails">
                                        <h3>{data.post_title}</h3>
                                        <h6><FontAwesomeIcon icon={faCode} /> Product Manager</h6>
                                        <div className="verified"><FontAwesomeIcon icon={faCircleCheck} /> Verified Expert</div>
                                        <p>Expertise</p>
                                        <ul className="listInline tags mb-2">
                                            <li>DevOps</li>
                                            <li>Git</li>
                                            <li>Node.js</li>
                                            <li>Java</li>
                                        </ul>
                                        <button className="colorBtn">Hire Now</button>
                                    </div>
                                </div>
                            </ScrollAnimation>
                        </React.Fragment>
                    )
                })
            }
            
        </Slider>
                   
    )
};

export default ServiceProfile;