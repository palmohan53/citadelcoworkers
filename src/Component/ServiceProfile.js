
import React, {useEffect} from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck} from '@fortawesome/free-solid-svg-icons';
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const ServiceProfile = ({serviceProfile, handleScrollClick}) => {
    let settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
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
                    let skillSet = data.Expertise.split(',');
                    return(
                        <React.Fragment key={index}>
                            
                                <div className="bannerProfile serviceProfile">
                                    <div className="profileImg">
                                        <img src={data.banner !== 'NA' ? data.banner  :'/images/profile-dummy.png'} alt={data.post_title} className="" />
                                        <button className="colorBtn" onClick={handleScrollClick}>Hire Me</button>
                                    </div>
                                    <div className="bannerProfileDetails">
                                        <h3>{data.post_title}</h3>
                                        <h6 className="my-2">{data.Designation}</h6>
                                        <div className="verified"><FontAwesomeIcon icon={faCircleCheck} /> Verified Expert</div>
                                        <p className="my-3">{data.post_content}</p>
                                        <p><b>Skill Set</b></p>
                                        {/* <span className="Expertise">{data.post_content}</span> */}
                                        <ul className="listInline tags mb-3">
                                            {
                                                skillSet.map((skill, index) => {
                                                    return(
                                                        <li key={index}>{skill}</li>
                                                    )
                                                })
                                            }
                                        </ul>
                                        <button className="colorBtn wideBtn" onClick={handleScrollClick}>Hire Me</button>
                                    </div>
                                </div>
                        </React.Fragment>
                    )
                })
            }
            
        </Slider>
                   
    )
};

export default ServiceProfile;