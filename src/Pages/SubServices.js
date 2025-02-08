import React, {useEffect, useState, useRef} from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import API_HOST from "../config/APIHost";
import API_ENDPOINTS from "../config/APIEndPoints";

import Testimonial from "../Component/Testimonial";
import { useParams } from 'react-router-dom';
import ServiceProfile from "../Component/ServiceProfile";

import servicesContent from '../Content/services.json';
import RecentBlog from "../Component/RecentBlog";
import ServiceBulkContent from "../Component/ServiceBulkContent";
import Steps from "../Component/Steps";
import Pricing from "../Component/Pricing";
import ServiceBulkContentUpper from "../Component/ServiceBulkContentUpper";
import Faq from "../Component/Faq";
import ContactForm from "../Component/ContactForm";

const SubServices = () => {
    const {subService} = useParams();
    const [servicedata, setServicedata] = useState([]);
    const [serviceProfile, setServiceProfile] = useState([]);
    const [serviceBulkContent, setServiceBulkContent] = useState([]);
    const [serviceBulkContentUpper, setServiceBulkContentUpper] = useState([]);
    const [serviceTestimonial, setServiceTestimonial] = useState([]);
    const [serviceContent, setServiceContent] = useState([])

    const contactref = useRef(null);
    const handleScrollClick = () => {
        contactref.current?.scrollIntoView({behavior: 'smooth'});
    };

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
        })
        .catch((err)=>{
            setServiceBulkContent([])
            console.log(err)
        })
    }
    const getServiceBulkContentUpper = async () => {
        await axios.get(`${API_HOST}${API_ENDPOINTS.serviceBulkcontentUpper}${subService}`)
        .then((res)=>{
            setServiceBulkContentUpper(res);
        })
        .catch((err)=>{
            setServiceBulkContentUpper([])
            console.log(err)
        })
    }
    const getServiceTestimonial = async () => {
        await axios.get(`${API_HOST}${API_ENDPOINTS.serviceTestimonial}${subService}`)
        .then((res)=>{
            setServiceTestimonial(res);
        })
        .catch((err)=>{
            setServiceTestimonial([])
            console.log(err)
        })
    }
    // const getProfileList = async () => {
    //     const response = await axios.get(`${API_HOST}${API_ENDPOINTS.serviceProfile}${subService}`)
    //     const data = await response;
    //     return data;
    // }
    // const { data, status } = useQuery("Profile", getProfileList);
    const filterServiceJson = () => {
        const filterContent = servicesContent.services.filter(item=> item.categoryUrl === subService);
        setServiceContent(filterContent);
    }
    const faqData = serviceContent[0]?.faq;
    useEffect(() => {
        window.scrollTo(0, 0);
        if(subService){
            getServiceList();
            getProfileList();
            getServiceBulkContent();
            getServiceBulkContentUpper();
            getServiceTestimonial();
            filterServiceJson();
        }
        //eslint-disable-next-line
    }, [subService])

    return(
        <React.Fragment>
        <section className="innerBanner">
            <img src="/images/service-banner.jpg" alt=""/>
            <div className="innerBannerContent">
                <h1>{serviceContent[0]?.banner[0]?.title}</h1>
                <p>{serviceContent[0]?.banner[0]?.body}</p>
                <div className="text-center mt-3">
                    <Link to="/contact-us" className="colorBtn wideBtn">Hire {serviceContent[0]?.categoryName} Now</Link>
                </div>
            </div>
            <div className="bannerOvelay"></div>
        </section>
        
        <section className="explore" id="servicesSec">
            <div className="container">
                <div className="row align-items-center mb-3">
                    <div className="col-md-12 col-12 text-center">
                        <div className="sectionHeading">
                            <h2>{serviceContent[0]?.serviceHeading[0]?.title}</h2>
                            <h4>{serviceContent[0]?.serviceHeading[0]?.body}</h4>
                        </div>
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
                                                {/* <div className="text-start">
                                                    <Link to={`/services/${subService}/${data.post_name}`} className="blueBtn">View More <FontAwesomeIcon icon={faArrowRight} /></Link>
                                                </div> */}
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
        <section className="explore" id="servicesSec">
            <div className="container">
                <div className="row align-items-center mb-3">
                    <div className="col-md-12 col-12 text-center">
                        <div className="sectionHeading">
                            <h2>{serviceContent[0]?.clientsNumberHeading[0]?.title}</h2>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="clientNum">
                            
                            {serviceContent[0]?.clientsNumber.map((data, index)=>{
                                return(
                                    <div className="clientBx" key={index}>
                                        {/* <img src={data.imageUrl} alt={data.title} /> */}
                                        <p>{data.body}</p>
                                        <h3>{data.title}</h3>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="profile">
            <div className="container">
                <div className="row align-items-center mb-3">
                    <div className="col-md-12 col-12">
                        <div className="sectionHeading text-center">
                            <h2>Our Expert Team</h2>
                            <p>Meet our diverse team of skilled professionals dedicated to delivering excellence across a spectrum of services,<br/>ensuring tailored solutions for your business needs.</p>
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-12">
                        <ServiceProfile serviceProfile={serviceProfile} handleScrollClick={handleScrollClick}/>
                    </div>
                </div>
            </div>
        </section>
        <section className="serviceBulkContent">
            <ServiceBulkContentUpper serviceBulkContentUpper={serviceBulkContentUpper}/>
        </section>
        
        <Testimonial serviceTestimonial={serviceTestimonial} />
        <Steps />
        <Pricing handleScrollClick={handleScrollClick}/>
        <section className="serviceBulkContent">
            <ServiceBulkContent serviceBulkContent={serviceBulkContent}/>
        </section>
        <Faq faqData={faqData}/>
        <div ref={contactref}>
            <ContactForm />
        </div>
        <RecentBlog />
        <section className="bottomCon pt-0">
            <div className="container">
                <div className="sectionHeading text-center">
                    <h2 className="mb-4"><b>1600+ Clients in 18 Countries</b> Have Accelerated Their Business Growth With Citadel Co-Workers. You Could Be Next!"</h2>
                    <Link to='/contact-us' className="colorBtn wideBtn">Send Your Requirement</Link>
                </div>
            </div>
        </section>
    </React.Fragment>
    )
};

export default SubServices;