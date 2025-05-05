import React, {useEffect} from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import API_HOST from "../config/APIHost";
import API_ENDPOINTS from "../config/APIEndPoints";
import { useQuery } from "react-query";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
// import Testimonial from "../Component/Testimonial";

// import servicesContent from '../Content/services.json';

const Services = () => {
    const getServiceList = async () => {
        const response = await axios.get(`${API_HOST}${API_ENDPOINTS.serviceListing}`)
        const data = await response;
        return data;
    }
    const { data, status } = useQuery("service", getServiceList);
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    if (status === 'loading') {
        return <div className="loaderWrp"><span className="loader"></span></div>
    }
    return(
        <React.Fragment>
        <section className="innerBanner">
            {/* <img src="/images/service-banner.jpg" alt=""/> */}
            <div className="innerBannerContent">
                <h1>Services</h1>
            </div>
            <div className="bannerOvelay"></div>
        </section>
        <section className="explore" id="servicesSec">
            <div className="container">
                <div className="row mt-5 borderBox">
                    {
                        data?.data?.listing.map((data, index)=>{
                            return(
                                <React.Fragment key={index}>
                                    <div className="col-lg-4 col-md-6 col-12 sideBorder" key={index}>
                                        <div className="colorBx">
                                            <React.Fragment>
                                                <div className="servicesIcon">
                                                    <img src={data.banner} alt={data.post_title} className="serviceIco" />
                                                    <img src={data.hover_image} alt={data.post_title} className="serviceIco serviceHoverIco" />
                                                </div>
                                                <h3>{data.post_title}</h3>
                                                <p dangerouslySetInnerHTML={{ __html: data.post_content }}></p>
                                                <div className="text-start">
                                                    <Link to={`/services/${data.post_name}`} className="blueBtn">View More <FontAwesomeIcon icon={faArrowRight} /></Link>
                                                </div>
                                            </React.Fragment>
                                        </div>
                                    </div>
                                </React.Fragment>
                            )
                        })
                    }
                </div>
            </div>
        </section>
        {/* <Testimonial /> */}
    </React.Fragment>
    )
};

export default Services;