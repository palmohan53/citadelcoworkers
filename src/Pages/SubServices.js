import React, {useEffect, useState} from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import API_HOST from "../config/APIHost";
import API_ENDPOINTS from "../config/APIEndPoints";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Testimonial from "../Component/Testimonial";
import { useParams } from 'react-router-dom';

import servicesContent from '../Content/services.json';

const SubServices = () => {
    const {subService} = useParams();
    const [data, setData] = useState([])
    const getServiceList = async () => {
        await axios.get(`${API_HOST}${API_ENDPOINTS.subServiceListing}${subService}`)
        .then((res)=>{
            setData(res);
        })
        .catch((err)=>{
            setData([])
            console.log(err)
        })
    }
    useEffect(() => {
        window.scrollTo(0, 0);
        if(subService){
            getServiceList()
        }
        //eslint-disable-next-line
    }, [subService])

    return(
        <React.Fragment>
        <section className="innerBanner">
            <img src="/images/service-banner.jpg" alt=""/>
            <div className="innerBannerContent">
                <h1>{subService}</h1>
                <p>The Toptal Design Blog is a hub for advanced design studies by professional designers in the Toptal network on all facets of digital design, ranging from detailed design tutorials to in-depth coverage of new design trends, techniques, and technologies.</p>
            </div>
            <div className="bannerOvelay"></div>
        </section>
        <section className="explore" id="servicesSec">
            <div className="container">
                <div className="row align-items-center mb-3">
                    <div className="col-md-6 col-12">
                        <div className="sectionHeading">
                            <h3>Explore</h3>
                            <h2>Our Services</h2>
                        </div>
                    </div>
                    <div className="col-md-6 col-12">
                        <p className="m-0 para">{servicesContent.paragraph[0].body}</p>
                    </div>
                </div>
                <div className="row mt-5 borderBox">
                    {
                        data?.data?.listing?.map((data, index)=>{
                            return(
                                <React.Fragment key={index}>
                                    <div className="col-lg-4 col-md-6 col-12 sideBorder" key={index}>
                                        <div className="colorBx">
                                            <React.Fragment>
                                                <img src={data.banner} alt="" className="serviceIco" />
                                                <h3>{data.post_title}</h3>
                                                <p dangerouslySetInnerHTML={{ __html: data.post_content }}></p>
                                                <div className="text-start">
                                                    <Link to={`/services/${subService}/${data.post_name}`} className="blueBtn">View More <FontAwesomeIcon icon={faArrowRight} /></Link>
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
        <Testimonial />
    </React.Fragment>
    )
};

export default SubServices;