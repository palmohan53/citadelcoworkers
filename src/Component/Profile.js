
import React, {useEffect} from "react";
import axios from "axios";
import API_HOST from "../config/APIHost";
import API_ENDPOINTS from "../config/APIEndPoints";
import { useQuery } from "react-query";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faCircleCheck} from '@fortawesome/free-solid-svg-icons';
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const Profile = ({handleScrollClick}) => {
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
    const getProfileList = async () => {
        const response = await axios.get(`${API_HOST}${API_ENDPOINTS.profile}`)
        const data = await response;
        return data;
    }
    const { data, status } = useQuery("Profile", getProfileList);
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    if (status === 'loading') {
        return <div className="loaderWrp"><span className="loader"></span></div>
    }
    return(
       
        <Slider {...settings}>
            {
                data?.data?.listing?.map((data, index)=>{
                    return(
                        <React.Fragment key={index}>
                            
                                <div className="bannerProfile">
                                    <div className="profileImg">
                                        <img src={data.banner !== 'NA' ? data.banner  :'/images/profile-dummy.png'} alt={data.post_title} className="" />
                                        <button className="colorBtn" onClick={handleScrollClick}>Hire Me</button>
                                    </div>
                                    <div className="bannerProfileDetails">
                                        <h3>{data.post_title}</h3>
                                        <h6><FontAwesomeIcon icon={faCode} /> Product Manager</h6>
                                        <div className="verified"><FontAwesomeIcon icon={faCircleCheck} /> Verified Expert</div>
                                        <p>Expertise</p>
                                        {/* <span className="Expertise">{data.post_content}</span> */}
                                        <ul className="listInline tags mb-2">
                                            <li>DevOps</li>
                                            <li>Git</li>
                                            <li>Node.js</li>
                                            <li>Java</li>
                                        </ul>
                                    </div>
                                </div>
                        </React.Fragment>
                    )
                })
            }
            
        </Slider>
                   
    )
};

export default Profile;