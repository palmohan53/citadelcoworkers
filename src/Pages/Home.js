import React, {useEffect, useRef} from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import API_HOST from "../config/APIHost";
import API_ENDPOINTS from "../config/APIEndPoints";
import { useQuery } from "react-query";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Slider from "react-slick";
// import servicesContent from '../Content/services.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faPlay, faCircleCheck, faCode } from '@fortawesome/free-solid-svg-icons';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.compat.css";
import ContactForm from "../Component/ContactForm";
import Testimonial from "../Component/Testimonial";
// import Profile from "../Component/Profile";
// import Steps from "../Component/Steps";

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
const getProfileList = async () => {
    const response = await axios.get(`${API_HOST}${API_ENDPOINTS.profile}`)
    const data = await response;
    return data;
}

const Home = () => {
    const { data, status } = useQuery("blog", getBlogList);
    const { data:services } = useQuery("service", getServiceList);
    const { data:serviceTestimonial } = useQuery("testimonial", getTestimonial);
    const { data:profile } = useQuery("Profile", getProfileList);
  
    const contactref = useRef(null);
    const handleScrollClick = () => {
        contactref.current?.scrollIntoView({behavior: 'smooth'});
    };
    let bannerSettings = {
        dots: false,
        arrows:false,
        infinite: true,
        fade: true,
        autoplay: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
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
                    <div className="row align-items-end">
                        <div className="col-md-5 col-12 pb-5">
                            <h1>Hire Virtual Employees from India — Pre-Vetted & Ready</h1>
                            <h4>Work with India’s top 3% of remote talent in finance, tech, design, and support. Handpicked experts. No hiring hassle.</h4>
                            <h5>Starts from <span className="greenText">$777/month</span> — Start your free trial today.</h5>
                            <Link to="/contact-us" className="colorBtn wideBtn">Start Your Free Trial Today</Link>
                        </div>
                        <div className="col-md-7 col-12">
                            <div className="sliderWrp">
                                <Slider {...bannerSettings}>
                                    <div className="bannerProfile">
                                        <img src="/images/Gagandeep_Singh_Pic.png" alt="" />
                                        <div className="bannerProfileDetails">
                                            <h3>Aarav Mehta</h3>
                                            <h6><FontAwesomeIcon icon={faCode} /> Full Stack Developer</h6>
                                            <div className="verified"><FontAwesomeIcon icon={faCircleCheck} /> Verified Expert</div>
                                            <p>Skill Set</p>
                                            <ul className="listInline tags mt-3">
                                                <li>React</li>
                                                <li>Node.js</li>
                                                <li>MongoDB</li>
                                                <li>JavaScript</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="bannerProfile">
                                        <img src="/images/Harshita_Dagral_Pic.png"  alt="" />
                                        <div className="bannerProfileDetails">
                                            <h3>Isha Verma</h3>
                                            <h6><FontAwesomeIcon icon={faCode} /> Graphic Designer</h6>
                                            <div className="verified"><FontAwesomeIcon icon={faCircleCheck} /> Verified Expert</div>
                                                <p>Skill Set</p>
                                                <ul className="listInline tags mt-3">
                                                    <li>Adobe</li>
                                                    <li>Photoshop</li>
                                                    <li>Illustrator</li>
                                                    <li>Figma</li>
                                                    <li>Canva  </li>
                                                </ul>
                                        </div>
                                    </div>
                                    <div className="bannerProfile">
                                        <img src="/images/Garvdeep_Singh_Pic.png" alt="" />
                                        <div className="bannerProfileDetails">
                                            <h3>Rohit Nair</h3>
                                            <h6><FontAwesomeIcon icon={faCode} /> Virtual Assistant</h6>
                                            <div className="verified"><FontAwesomeIcon icon={faCircleCheck} /> Verified Expert</div>
                                                <p>Skill Set</p>
                                                <ul className="listInline tags mt-3">
                                                    <li>Google Workspace</li>
                                                    <li>Asana</li>
                                                    <li>Calendar Management</li>
                                                    <li>Data Entry </li>
                                                </ul>
                                        </div>
                                    </div>

                                    <div className="bannerProfile">
                                        <img src="/images/Josephine_Vincent_Pic.png"  alt="" />
                                        <div className="bannerProfileDetails">
                                            <h3>Kavita Sharma</h3>
                                            <h6><FontAwesomeIcon icon={faCode} /> Accountant</h6>
                                            <div className="verified"><FontAwesomeIcon icon={faCircleCheck} /> Verified Expert</div>
                                                <p>Skill Set</p>
                                                <ul className="listInline tags mt-3">
                                                    <li>QuickBooks</li>
                                                    <li>Xero</li>
                                                    <li>GST Filing</li>
                                                    <li>Bank Reconciliation</li>
                                                </ul>
                                        </div>
                                    </div>
                                    <div className="bannerProfile">
                                        <img src="/images/Rohit_Kumar_Pic.png" alt="" />
                                        <div className="bannerProfileDetails">
                                            <h3>Arjun Kapoor</h3>
                                            <h6><FontAwesomeIcon icon={faCode} /> Legal Assistant</h6>
                                            <div className="verified"><FontAwesomeIcon icon={faCircleCheck} /> Verified Expert</div>
                                                <p>Skill Set</p>
                                                <ul className="listInline tags mt-3">
                                                    <li>Contract Drafting</li>
                                                    <li>Legal Research</li>
                                                    <li>LPO  MS Word</li>
                                                </ul>
                                        </div>
                                    </div>
                                    <div className="bannerProfile">
                                        <img src="/images/Roma_Roy_Pic.png" alt="" />
                                        <div className="bannerProfileDetails">
                                            <h3>Neha Joshi</h3>
                                            <h6><FontAwesomeIcon icon={faCode} /> Content Writer</h6>
                                            <div className="verified"><FontAwesomeIcon icon={faCircleCheck} /> Verified Expert</div>
                                                <p>Skill Set</p>
                                                <ul className="listInline tags mt-3">
                                                    <li>SEO Writing</li>
                                                    <li>Blogs</li>
                                                    <li>Copywriting</li>
                                                    <li>Grammarly</li>
                                                </ul>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="videoBg">
                    <img src="/images/home-banner-2.png" alt=""/>
                </div>
                <div className="videoOverlay"></div> */}
            </section>
                <section className="service" id="servicesSec">
                    <div className="container">
                        <div className="row align-items-center mb-3">
                            <div className="col-md-12 col-12">
                                <div className="sectionHeading text-center">
                                    <h2>Comprehensive Virtual Staffing – Hire in Any Domain  </h2>
                                    <p>Get flexible, cost-effective staffing solutions—hire top virtual professionals in any industry.   </p>
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
                                                        <div className="servicesIcon">
                                                            <img src={data.banner} alt="" className="serviceIco" />
                                                            <img src={data.hover_image} alt="" className="serviceIco serviceHoverIco" />
                                                        </div>
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
                <section className="threebox bg_light_1">
                    <div className="container">
                        <div className="row align-items-center mb-3">
                            <div className="col-md-12 col-12">
                                <div className="sectionHeading text-center">
                                    <h2>Unlock the Power of a Remote Workforce</h2>
                                    <p className="mb-3">Save up to 72% on hiring costs while building a flexible, high-performing team that keeps your business running seamlessly.</p>
                                    <h4>3 Key Benefits of Hiring Remote Professionals</h4>
                                </div>
                            </div>
                        </div>
                        <div className="row gutter_15px mt-5">
                            <div className="col-md-4 col-12">
                                <div className="service_box style_three dark_color">
                                    <div className="service_content">
                                        <div className="content_inner">
                                            <img src="/images/expert-ico.png" alt=""/>
                                            <h2 className="semiHeading">Top Experts, On-Demand</h2>
                                            <p>Hire skilled professionals in hours—ready to deliver from day one.</p>
                                        </div>
                                    </div>
                                </div>                        
                                <div className="mr_bottom_30"></div>                        
                            </div>
                            <div className="col-md-4 col-12">
                                <div className="service_box style_three dark_color">
                                    <div className="service_content">
                                        <div className="content_inner">
                                            <img src="/images/profit-ico.png" alt=""/>
                                            <h2 className="semiHeading">Lower Costs, Higher Profits</h2>
                                            <p>Cut office, payroll, and operational expenses while maximizing efficiency.</p>
                                        </div>
                                    </div>
                                </div>                        
                                <div className="mr_bottom_30"></div>                        
                            </div>
                            <div className="col-md-4 col-12">
                                <div className="service_box style_three dark_color">
                                    <div className="service_content">
                                        <div className="content_inner">
                                            <img src="/images/world-wide-ico.png" alt=""/>
                                            <h2 className="semiHeading">24/7 Business Continuity</h2>
                                            <p>Leverage global talent across time zones for uninterrupted growth.</p>
                                        </div>
                                    </div>
                                </div>                            
                            </div>
                            
                        </div>
                    </div>
                </section>
                <section className="process">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-7 col-12">
                                <div className="row mb-3">
                                    <div className="col-md-12 col-12">
                                        <div className="sectionHeading min-width-100">
                                            <h2>Build High-Performing Teams,<br />On Demand</h2>
                                            <p>Quickly assemble the virtual employees you need, exactly when you need them.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-5">
                                    <div className="col-md-6 col-12">
                                        <ScrollAnimation animateIn="fadeIn">
                                            <div className="contentBx">
                                                <img src='/images/hire-quickly.png' alt="" />
                                                <h3>Hire Quickly</h3>
                                                <p>Hire in under 24 hours. Scale up or down, no strings attached. We offer flexible engagements from hourly to full-time.</p>
                                            </div>
                                        </ScrollAnimation>
                                    </div>
                                    <div className="col-md-6 col-12">
                                        <ScrollAnimation animateIn="fadeIn">
                                            <div className="contentBx">
                                                <img src='/images/top-3.png' alt="" />
                                                <h3>The Top 3%</h3>
                                                <p>Every applicant to the Citadel network is rigorously tested and vetted. Our highly selective process leads to a 98% trial-to-hire success rate.</p>
                                            </div>
                                        </ScrollAnimation>
                                    </div>
                                    <div className="col-md-6 col-12">
                                        <ScrollAnimation animateIn="fadeIn">
                                            <div className="contentBx">
                                                <img src='/images/future-innovation.png' alt="" />
                                                <h3>Leading the Future of Work</h3>
                                                <p>Our network is ready for tomorrow’s business challenges by embracing advanced and specialized skills, including blockchain and AI.</p>
                                            </div>
                                        </ScrollAnimation>
                                    </div>
                                    <div className="col-md-6 col-12">
                                        <ScrollAnimation animateIn="fadeIn">
                                            <div className="contentBx">
                                                <img src='/images/level-up.png' alt="" />
                                                <h3>A Level Above</h3>
                                                <p>Every single Virtual Employee in our global network embodies the highest levels of integrity, professionalism, and communication.</p>
                                            </div>
                                        </ScrollAnimation>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-5 col-12">
                                <div className="profileBxBx">
                                    {/* <Profile handleScrollClick={handleScrollClick} /> */}
                                    {
                                        profile?.data?.listing?.map((data, index)=>{
                                            let skillSet = data.Expertise.split(',');
                                            return(
                                                <React.Fragment key={index}>
                                                { index < 3 &&
                                                    
                                                        <div className="bannerProfile">
                                                            <div className="profileImg">
                                                                <img src={data.banner !== 'NA' ? data.banner  :'/images/profile-dummy.png'} alt="" className="" />
                                                                <button className="colorBtn" onClick={handleScrollClick}>Hire Me</button>
                                                            </div>
                                                            <div className="bannerProfileDetails">
                                                                <h3>{data.post_title}</h3>
                                                                <h6>{data.Designation}</h6>
                                                                <div className="verified"><FontAwesomeIcon icon={faCircleCheck} /> Verified Expert</div>
                                                                <p>Skill Set</p>
                                                                {/* <span className="Expertise">{data.post_content}</span> */}
                                                                <ul className="listInline tags mb-2">
                                                                    {
                                                                        skillSet.map((skill, index) => {
                                                                            return(
                                                                                <li key={index}>{skill}</li>
                                                                            )
                                                                        })
                                                                    }
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    }
                                                </React.Fragment>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
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
                        <img src="/images/home-banner.png" alt="" />
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
                                                        <img src="/images/suresh.png" alt=""/>
                                                    }
                                                </div>
                                            </div>
                                            <div className="blogContent">
                                                <h3>{data?.data?.listing[0]?.post_title}</h3>
                                                <h5>By <b>{data?.data?.listing[0]?.display_name}</b></h5>
                                                <p>{data?.data?.listing[0]?.post_content}</p>
                                                <div className="d-flex justify-content-between">
                                                    <h6>7 min read</h6>
                                                    <button className="simpleBtn">Read More <FontAwesomeIcon icon={faArrowRight}/></button>
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
                                                                            <img src="/images/suresh.png" alt=""/>
                                                                        }
                                                                        </div>
                                                                    </div>
                                                                    <div className="blogContent">
                                                                        <h3>{blog.post_title}</h3>
                                                                        <h5>By <b>{blog.display_name}</b></h5>
                                                                        <p dangerouslySetInnerHTML={{ __html: blog.post_content }}></p>
                                                                        
                                                                        <div className="d-flex justify-content-between">
                                                                            <h6>7 min read</h6>
                                                                            <button href={`/blog/${blog?.post_name}`} className="simpleBtn">Read More <FontAwesomeIcon icon={faArrowRight}/></button>
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