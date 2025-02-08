import React, {useEffect, useRef} from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import API_HOST from "../config/APIHost";
import API_ENDPOINTS from "../config/APIEndPoints";
import { useQuery } from "react-query";
import { Helmet, HelmetProvider } from 'react-helmet-async';

// import servicesContent from '../Content/services.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faPlay } from '@fortawesome/free-solid-svg-icons';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.compat.css";
import ContactForm from "../Component/ContactForm";
import Testimonial from "../Component/Testimonial";
import Profile from "../Component/Profile";
import Steps from "../Component/Steps";

const getBlogList = async () => {
    const response = await axios.get(`${API_HOST}${API_ENDPOINTS.blogListing}`)
    const data = await response;
    return data;
}
const getServiceList = async () => {
    const response = await axios.get(`${API_HOST}${API_ENDPOINTS.serviceListing}`)
    const data = await response;
    return data;
}
const getTestimonial = async () => {
    const response = await axios.get(`${API_HOST}${API_ENDPOINTS.testimonial}`)
    const data = await response;
    return data;
}
const Home = () => {
    const { data, status } = useQuery("blog", getBlogList);
    const { data:services } = useQuery("service", getServiceList);
    const { data:serviceTestimonial } = useQuery("testimonial", getTestimonial);
  
    const contactref = useRef(null);
    const handleScrollClick = () => {
        contactref.current?.scrollIntoView({behavior: 'smooth'});
    };

    useEffect(() => {
        // getBlogList()
        window.scrollTo(0, 0)
      }, [])
      if (status === 'loading') {
        return <div className="loaderWrp"><span className="loader"></span></div>
      }
    return(
        <React.Fragment>
            <HelmetProvider>
                <Helmet>
                    <title>Hire Virtual Employees in India Starting US $5 - Citadel Coworkers</title>
                    <meta name="description" content="Citadel Coworkers is the #1 company helping businesses globally by providing innovative solutions tailored to your business across the world." />
                </Helmet>
                <section className="banner">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-12 col-12 text-center">
                                <h1>Hire India's <b>Top 3% ✅</b> Virtual Talent<br/>Effortless, Reliable, Cost-Effective!</h1>
                                <h4>Get access to India's top virtual professionals in Finance, Software, Design, and more.<br/>We provide vetted experts who deliver high-impact solutions—helping your business scale faster.</h4>
                                <Link to="/contact-us" className="colorBtn wideBtn">Schedule a Free Consultation</Link>
                                <p className="mt-3 mb-0">"No upfront cost. Pay only when you hire!"</p>
                            </div>
                            
                        </div>
                    </div>
                    <div className="videoBg">
                        <video loop muted autoPlay playsInline>
                            <source src="images/banner-video.mp4" type="video/mp4"/>
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className="videoOverlay"></div>
                </section>
                <section className="service" id="servicesSec">
                    <div className="container">
                        <div className="row align-items-center mb-3">
                            <div className="col-md-12 col-12">
                                <div className="sectionHeading text-center">
                                    <h2>Hire Remote Professionals for Your Business</h2>
                                    <p>Looking to build a remote team? Get top-tier professionals across 150+ domains, including IT, marketing, design, legal, and more. Hire skilled experts, reduce costs, and scale faster!</p>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-5 borderBox">
                            {
                                services?.data?.listing.map((data, index)=>{
                                    return(
                                        <React.Fragment key={index}>
                                        {index < 6 && <div className="col-lg-4 col-md-6 col-12 sideBorder" key={index}>
                                            <ScrollAnimation animateIn="fadeIn">
                                                <div className="colorBx">
                                                    <React.Fragment>
                                                        <img src={data.banner} alt="" className="serviceIco" />
                                                        <h3>{data.post_title}</h3>
                                                        <p dangerouslySetInnerHTML={{ __html: data.post_content }}></p>
                                                        <div className="text-start">
                                                            <Link to={`/services/${data.post_name}`} className="blueBtn">View More <FontAwesomeIcon icon={faArrowRight} /></Link>
                                                        </div>
                                                    </React.Fragment>
                                                </div>
                                            </ScrollAnimation>
                                        </div>}
                                        </React.Fragment>
                                    )
                                })
                            }
                        </div>
                        <div className="text-center mt-4">
                            <Link to="/services" className="colorBtn wideBtn">View All</Link>
                        </div>
                    </div>
                </section>
                <section className="profile">
                    <div className="container">
                        <div className="row align-items-center mb-3">
                            <div className="col-md-12 col-12">
                                <div className="sectionHeading text-center">
                                    <h2>Connect with Top-Tier Global Talent</h2>
                                    <p>Hire pre-vetted professionals in business, design, and technology—ready to deliver results for your most important projects.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-12">
                                <Profile handleScrollClick={handleScrollClick}/>
                            </div>
                        </div>
                    </div>
                </section>
                <Steps />
                <section className="hiringProcess">
                    <div className="container">
                        <div className="row align-items-center mb-3">
                            <div className="col-md-12 col-12">
                                <div className="sectionHeading text-center">
                                    <h2>🚀 Hire in Just 24 Hours - Quick & Simple</h2>
                                    {/* <p>We are the largest, globally-distributed network of top business, design, and technology talent,<br/> ready to tackle your most important initiatives.</p> */}
                                </div>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-md-4 col-12">
                                <ScrollAnimation animateIn="fadeIn">
                                    <div className="contentBx">
                                        <div className="numWrp">
                                            <div className="hiringNum">1</div>
                                        </div>
                                        <h3>Tell Us What You Need</h3>
                                        <p>📌 Share your job role, required skills, and preferred working hours (full-time/part-time).</p>
                                    </div>
                                </ScrollAnimation>
                            </div>
                            <div className="col-md-4 col-12">
                                <ScrollAnimation animateIn="fadeIn">
                                    <div className="contentBx">
                                        <div className="numWrp">
                                            <div className="hiringNum">2</div>
                                        </div>
                                        <h3>Get Matched Instantly</h3>
                                        <p>📋 We shortlist pre-vetted experts based on your exact needs. Review profiles, conduct quick interviews, and choose the best fit.</p>
                                    </div>
                                </ScrollAnimation>
                            </div>
                            <div className="col-md-4 col-12">
                                <ScrollAnimation animateIn="fadeIn">
                                    <div className="contentBx noArrow">
                                        <div className="numWrp">
                                            <div className="hiringNum">3</div>
                                        </div>
                                        <h3>Start in 24 Hours</h3>
                                        <p>🚀 Once selected, your virtual professional is onboarded and ready to work within 24 hours—no setup hassle, just results!</p>
                                    </div>
                                </ScrollAnimation>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="video">
                    <div className="videoBgImage">
                        <img src="images/areaof-ecp-1.jpg" alt="" />
                    </div>
                    <div className="container">
                        <div className="row">
                        <div className="col-lg-4">
                            <div className="video_box text-center">
                                <a href="/" className="lightbox-image"><FontAwesomeIcon icon={faPlay} /></a>
                            </div>
                        </div>
                        <div className="col-lg-2"></div>
                        <div className="col-lg-6">
                            <div className="title_all_box style_one text-end pb-5 mb-4">
                                <div className="sectionHeading min-width-100">
                                    <h2 className="mainHeading whiteTxt">Seamless Remote Hiring – Build Your Dream Team Today</h2>
                                    <p className="my-4">Find and hire top-tier professionals across various industries. From finance to software development, our experts are ready to integrate into your team and deliver results. Scale your workforce effortlessly, with flexible hiring models designed for your business success.</p>
                                </div>
                                <div className="theme_btn">
                                    <a href="/contact-us" className="colorBtn">Meet Your Next Hire</a>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12 col-12 expertise_box">
                        <div className="step_number">
                            <h3>01.</h3>
                        </div>
                        <h2 className="title">
                            <a href="/">Payroll Management</a>
                        </h2>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 col-12 expertise_box">
                        <div className="step_number">
                            <h3>02.</h3>
                        </div>
                        <h2 className="title">
                            <a href="/">Employee Compensation</a>
                        </h2>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 col-12 expertise_box">
                        <div className="step_number">
                            <h3>03.</h3>
                        </div>
                        <h2 className="title">
                            <a href="/">Benefits Management</a>
                        </h2>
                    </div>
                        </div>
                    </div>
                </section>
                <Testimonial serviceTestimonial={serviceTestimonial}/>
                <section className="blog">
                    <div className="container">
                        <div className="row mb-3">
                            <div className="col-md-12 col-12">
                                <div className="sectionHeading text-center">
                                    <h2>Where Ideas Flourish</h2>
                                    <p>Ensure outsourcing success from the start with key insider tips and trends for over 150 industries, right at your fingertips.</p>
                                </div>
                            </div>
                        </div>
                        <ScrollAnimation animateIn="fadeIn">
                            <div className="row mt-5">
                                <div className="col-md-5 col-12">
                                    <Link to={`/blog/${data?.data?.listing[0]?.post_name}`} className="d-block">
                                        <div className="blogBx blogBig">
                                            <div className="blogImg">
                                                <img src={data?.data?.listing[0]?.banner} alt=""/>
                                                <div className="blogAuthImg">
                                                    {
                                                        data?.data?.listing[0]?.display_name === "Pinka Sharma"
                                                        ?
                                                        <img src="/images/pinka.png" alt=""/>
                                                        :
                                                        <img src="images/suresh.png" alt=""/>
                                                    }
                                                </div>
                                            </div>
                                            <div className="blogContent">
                                                <h3>{data?.data?.listing[0]?.post_title}</h3>
                                                <h5>By <b>{data?.data?.listing[0]?.display_name}</b></h5>
                                                <p>{data?.data?.listing[0]?.post_content}</p>
                                                <div className="d-flex justify-content-between">
                                                    <h6>7 min read</h6>
                                                    <button className="simpleBtn">Continue Read <FontAwesomeIcon icon={faArrowRight}/></button>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-md-7 col-12">
                                    <div className="row">
                                        {
                                            data?.data.listing?.map((blog, index)=>{
                                                return(
                                                    index !== 0 && index < 5 ? 
                                                        <div className="col-md-6 col-12" key={index}>
                                                            <Link to={`/blog/${blog?.post_name}`}  className="d-block">
                                                                <div className="blogBx blogSmall">
                                                                    <div className="blogImg">
                                                                        <img src={blog.banner} alt={blog.post_title}/>
                                                                        <div className="blogAuthImg">
                                                                        {
                                                                            blog?.display_name === "Pinka Sharma"
                                                                            ?
                                                                            <img src="/images/pinka.png" alt=""/>
                                                                            :
                                                                            <img src="images/suresh.png" alt=""/>
                                                                        }
                                                                        </div>
                                                                    </div>
                                                                    <div className="blogContent">
                                                                        <h3>{blog.post_title}</h3>
                                                                        <h5>By <b>{blog.display_name}</b></h5>
                                                                        <p dangerouslySetInnerHTML={{ __html: blog.post_content }}></p>
                                                                        
                                                                        <div className="d-flex justify-content-between">
                                                                            <h6>7 min read</h6>
                                                                            <button href={`/blog/${blog?.post_name}`} className="simpleBtn">Continue Read <FontAwesomeIcon icon={faArrowRight}/></button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </Link>
                                                        </div>
                                                    : null
                                                )
                                            })
                                        }
                                    
                                    </div>
                                </div>
                                <div className="col-12 mt-4">
                                    <div className="text-center">
                                        <Link to="/blog" className="lineBtn">Read More</Link>
                                    </div>
                                </div>
                            </div>
                        </ScrollAnimation>
                    </div>
                </section>
                <div ref={contactref}>
                    <ContactForm />
                </div>
            </HelmetProvider>
        </React.Fragment>
    )
}
export default Home;