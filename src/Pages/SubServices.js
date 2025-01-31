import React, {useEffect, useState} from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import API_HOST from "../config/APIHost";
import API_ENDPOINTS from "../config/APIEndPoints";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Testimonial from "../Component/Testimonial";
import { useParams } from 'react-router-dom';
import ServiceProfile from "../Component/ServiceProfile";

import servicesContent from '../Content/services.json';
import RecentBlog from "../Component/RecentBlog";
import ServiceBulkContent from "../Component/ServiceBulkContent";

const SubServices = () => {
    const {subService} = useParams();
    const [servicedata, setServicedata] = useState([]);
    const [serviceProfile, setServiceProfile] = useState([]);
    const [serviceBulkContent, setServiceBulkContent] = useState([]);
    const getServiceList = async () => {
        await axios.get(`${API_HOST}${API_ENDPOINTS.subServiceListing}${subService}`)
        .then((res)=>{
            setServicedata(res);
        })
        .catch((err)=>{
            setServicedata([])
            console.log(err)
        })
    }
    const getProfileList = async () => {
        await axios.get(`${API_HOST}${API_ENDPOINTS.serviceProfile}${subService}`)
        .then((res)=>{
            setServiceProfile(res);
        })
        .catch((err)=>{
            setServiceProfile([])
            console.log(err)
        })
    }
    const getServiceBulkContent = async () => {
        await axios.get(`${API_HOST}${API_ENDPOINTS.serviceBulkcontent}${subService}`)
        .then((res)=>{
            setServiceBulkContent(res);
            console.log(res, 'bulk')
        })
        .catch((err)=>{
            setServiceBulkContent([])
            console.log(err)
        })
    }
    // const getProfileList = async () => {
    //     const response = await axios.get(`${API_HOST}${API_ENDPOINTS.serviceProfile}${subService}`)
    //     const data = await response;
    //     return data;
    // }
    // const { data, status } = useQuery("Profile", getProfileList);
    useEffect(() => {
        window.scrollTo(0, 0);
        if(subService){
            getServiceList();
            getProfileList();
            getServiceBulkContent();
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
                        servicedata?.data?.listing?.map((data, index)=>{
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
        
        <section className="profile">
            <div className="container">
                <div className="row align-items-center mb-3">
                    <div className="col-md-12 col-12">
                        <div className="sectionHeading text-center">
                            <h2>Meet Talent in Our Network</h2>
                            <p>We are the largest, globally-distributed network of top business, design, and technology talent,<br/> ready to tackle your most important initiatives.</p>
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-12">
                        <ServiceProfile serviceProfile={serviceProfile}/>
                    </div>
                </div>
            </div>
        </section>
        <Testimonial />
        <section className="serviceBulkContent">
            <ServiceBulkContent serviceBulkContent={serviceBulkContent}/>
        </section>
        
        <RecentBlog />
    </React.Fragment>
    )
};

export default SubServices;