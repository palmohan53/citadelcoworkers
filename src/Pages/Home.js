import React, {useEffect, useState} from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import API_HOST from "../config/APIHost";
import API_ENDPOINTS from "../config/APIEndPoints";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import servicesContent from '../Content/services.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faQuoteLeft, faStar, faPhone, faEnvelope, faTrophy, faCode, faCircleCheck, faPlay } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.compat.css";


const Home = () => {
    const [blogList, setBlogList] = useState([])

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
    let settings = {
        dots: false,
        infinite: true,
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
    const getBlogList = async () => {
        await axios.get(`${API_HOST}${API_ENDPOINTS.blogListing}`)
        .then((response) => {
            console.log(response.data);
            setBlogList(response.data.listing)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    useEffect(() => {
        getBlogList()
        window.scrollTo(0, 0)
      }, [])

    return(
        <React.Fragment>
            <section className="banner">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-5 col-12 pb-5">
                            <h1>Hire the <span className="greenText">Top 3%</span> of Freelance Talent®</h1>
                            <h4>Toptal is an exclusive network of the top freelance software developers, designers, marketing experts, finance experts, product managers, and project managers in the world. Top companies hire Toptal freelancers for their most important projects.</h4>
                            <a href="/" className="colorBtn wideBtn">Hire Top Talent</a>
                        </div>
                        <div className="col-md-7 col-12">
                            <div className="sliderWrp">
                                <Slider {...bannerSettings}>
                                    <div className="bannerProfile">
                                        <img src="images/profile.png" alt="" />
                                        <div className="bannerProfileDetails">
                                            <h3>Jhon Doe</h3>
                                            <h6><FontAwesomeIcon icon={faCode} /> Product Manager</h6>
                                            <div className="verified"><FontAwesomeIcon icon={faCircleCheck} /> Verified Expert</div>
                                            <p>Expertise</p>
                                            <ul className="listInline tags mt-3">
                                                <li>DevOps</li>
                                                <li>Git</li>
                                                <li>Node.js</li>
                                                <li>Java</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="bannerProfile">
                                        <img src="images/profile2.png" alt="" />
                                        <div className="bannerProfileDetails">
                                            <h3>Jhon Doe 2</h3>
                                            <h6><FontAwesomeIcon icon={faCode} /> Product Manager</h6>
                                            <div className="verified"><FontAwesomeIcon icon={faCircleCheck} /> Verified Expert</div>
                                                <p>Expertise</p>
                                                <ul className="listInline tags mt-3">
                                                <li>DevOps</li>
                                                <li>Git</li>
                                                <li>Node.js</li>
                                                <li>Java</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="bannerProfile">
                                        <img src="images/profile3.png" alt="" />
                                        <div className="bannerProfileDetails">
                                            <h3>Jhon Doe 3</h3>
                                            <h6><FontAwesomeIcon icon={faCode} /> Product Manager</h6>
                                            <div className="verified"><FontAwesomeIcon icon={faCircleCheck} /> Verified Expert</div>
                                                <p>Expertise</p>
                                                <ul className="listInline tags mt-3">
                                                <li>DevOps</li>
                                                <li>Git</li>
                                                <li>Node.js</li>
                                                <li>Java</li>
                                            </ul>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
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
                                <h2>Leverage World-Class Talent</h2>
                                <p>We are the largest, globally-distributed network of top business, design, and technology talent,<br/> ready to tackle your most important initiatives.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5 borderBox">
                        
                        {
                            servicesContent.services.map((data, index)=>{
                                return(
                                    <div className="col-lg-4 col-md-6 col-12 sideBorder" key={index}>
                                        <ScrollAnimation animateIn="fadeIn" delay={index * 100}>
                                            <div className="colorBx">
                                                <React.Fragment>
                                                    <img src={data.imageUrl} alt="" />
                                                    <h3>{data.title}</h3>
                                                    <p>{data.body}</p>
                                                    <div className="text-start">
                                                        <Link to="/services" className="blueBtn">View More <FontAwesomeIcon icon={faArrowRight} /></Link>
                                                    </div>
                                                </React.Fragment>
                                            </div>
                                        </ScrollAnimation>
                                    </div>
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
                            <Slider {...settings}>
                                <ScrollAnimation animateIn="fadeIn">
                                    <div className="bannerProfile">
                                        <img src="images/pro.png" alt="" />
                                        <div className="bannerProfileDetails">
                                            <h3>Jhon Doe</h3>
                                            <h6><FontAwesomeIcon icon={faCode} /> Product Manager</h6>
                                            <div className="verified"><FontAwesomeIcon icon={faCircleCheck} /> Verified Expert</div>
                                            <p>Expertise</p>
                                            <ul className="listInline tags">
                                                <li>DevOps</li>
                                                <li>Git</li>
                                                <li>Node.js</li>
                                                <li>Java</li>
                                            </ul>
                                        </div>
                                    </div>
                                </ScrollAnimation>
                                <ScrollAnimation animateIn="fadeIn">
                                    <div className="bannerProfile">
                                        <img src="images/pro.png" alt="" />
                                        <div className="bannerProfileDetails">
                                            <h3>Jhon Doe</h3>
                                            <h6><FontAwesomeIcon icon={faCode} /> Product Manager</h6>
                                            <div className="verified"><FontAwesomeIcon icon={faCircleCheck} /> Verified Expert</div>
                                            <p>Expertise</p>
                                            <ul className="listInline tags">
                                                <li>DevOps</li>
                                                <li>Git</li>
                                                <li>Node.js</li>
                                                <li>Java</li>
                                            </ul>
                                        </div>
                                    </div>
                                </ScrollAnimation>
                                <ScrollAnimation animateIn="fadeIn">
                                    <div className="bannerProfile">
                                        <img src="images/pro.png" alt="" />
                                        <div className="bannerProfileDetails">
                                            <h3>Jhon Doe</h3>
                                            <h6><FontAwesomeIcon icon={faCode} /> Product Manager</h6>
                                            <div className="verified"><FontAwesomeIcon icon={faCircleCheck} /> Verified Expert</div>
                                            <p>Expertise</p>
                                            <ul className="listInline tags">
                                                <li>DevOps</li>
                                                <li>Git</li>
                                                <li>Node.js</li>
                                                <li>Java</li>
                                            </ul>
                                        </div>
                                    </div>
                                </ScrollAnimation>
                                <ScrollAnimation animateIn="fadeIn">
                                    <div className="bannerProfile">
                                        <img src="images/pro.png" alt="" />
                                        <div className="bannerProfileDetails">
                                            <h3>Jhon Doe</h3>
                                            <h6><FontAwesomeIcon icon={faCode} /> Product Manager</h6>
                                            <div className="verified"><FontAwesomeIcon icon={faCircleCheck} /> Verified Expert</div>
                                            <p>Expertise</p>
                                            <ul className="listInline tags">
                                                <li>DevOps</li>
                                                <li>Git</li>
                                                <li>Node.js</li>
                                                <li>Java</li>
                                            </ul>
                                        </div>
                                    </div>
                                </ScrollAnimation>
                                <ScrollAnimation animateIn="fadeIn">
                                    <div className="bannerProfile">
                                        <img src="images/pro.png" alt="" />
                                        <div className="bannerProfileDetails">
                                            <h3>Jhon Doe</h3>
                                            <h6><FontAwesomeIcon icon={faCode} /> Product Manager</h6>
                                            <div className="verified"><FontAwesomeIcon icon={faCircleCheck} /> Verified Expert</div>
                                            <p>Expertise</p>
                                            <ul className="listInline tags">
                                                <li>DevOps</li>
                                                <li>Git</li>
                                                <li>Node.js</li>
                                                <li>Java</li>
                                            </ul>
                                        </div>
                                    </div>
                                </ScrollAnimation>
                                <ScrollAnimation animateIn="fadeIn">
                                    <div className="bannerProfile">
                                        <img src="images/pro.png" alt="" />
                                        <div className="bannerProfileDetails">
                                            <h3>Jhon Doe</h3>
                                            <h6><FontAwesomeIcon icon={faCode} /> Product Manager</h6>
                                            <div className="verified"><FontAwesomeIcon icon={faCircleCheck} /> Verified Expert</div>
                                            <p>Expertise</p>
                                            <ul className="listInline tags">
                                                <li>DevOps</li>
                                                <li>Git</li>
                                                <li>Node.js</li>
                                                <li>Java</li>
                                            </ul>
                                        </div>
                                    </div>
                                </ScrollAnimation>
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>
            <section className="process">
                <div className="container">
                    <div className="row mb-3">
                        <div className="col-md-12 col-12">
                            <div className="sectionHeading">
                                <h2>Build Amazing Teams,<br />On Demand</h2>
                                <p>Quickly assemble the teams you need, exactly when you need them.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-4 col-12">
                            <ScrollAnimation animateIn="fadeIn">
                                <div className="contentBx">
                                    <img src='images/aggregate-color.png' alt="" />
                                    <h3>Hire Quickly</h3>
                                    <p>Hire in under 48 hours. Scale up or down, no strings attached. We offer flexible engagements from hourly to full-time.</p>
                                </div>
                            </ScrollAnimation>
                        </div>
                        <div className="col-md-4 col-12">
                            <ScrollAnimation animateIn="fadeIn">
                                <div className="contentBx">
                                    <img src='images/aggregate-color.png' alt="" />
                                    <h3>Hire Quickly</h3>
                                    <p>Hire in under 48 hours. Scale up or down, no strings attached. We offer flexible engagements from hourly to full-time.</p>
                                </div>
                            </ScrollAnimation>
                        </div>
                        <div className="col-md-4 col-12">
                            <ScrollAnimation animateIn="fadeIn">
                                <div className="contentBx">
                                    <img src='images/aggregate-color.png' alt="" />
                                    <h3>Hire Quickly</h3>
                                    <p>Hire in under 48 hours. Scale up or down, no strings attached. We offer flexible engagements from hourly to full-time.</p>
                                </div>
                            </ScrollAnimation>
                        </div>
                        <div className="col-md-4 col-12">
                            <ScrollAnimation animateIn="fadeIn">
                                <div className="contentBx">
                                    <img src='images/aggregate-color.png' alt="" />
                                    <h3>Hire Quickly</h3>
                                    <p>Hire in under 48 hours. Scale up or down, no strings attached. We offer flexible engagements from hourly to full-time.</p>
                                </div>
                            </ScrollAnimation>
                        </div>
                        <div className="col-md-4 col-12">
                            <ScrollAnimation animateIn="fadeIn">
                                <div className="contentBx">
                                    <img src='images/aggregate-color.png' alt="" />
                                    <h3>Hire Quickly</h3>
                                    <p>Hire in under 48 hours. Scale up or down, no strings attached. We offer flexible engagements from hourly to full-time.</p>
                                </div>
                            </ScrollAnimation>
                        </div>
                        <div className="col-md-4 col-12">
                            <ScrollAnimation animateIn="fadeIn">
                                <div className="contentBx">
                                    <img src='images/aggregate-color.png' alt="" />
                                    <h3>Hire Quickly</h3>
                                    <p>Hire in under 48 hours. Scale up or down, no strings attached. We offer flexible engagements from hourly to full-time.</p>
                                </div>
                            </ScrollAnimation>
                        </div>
                    </div>
                </div>
            </section>
            <section className="hiringProcess">
                <div className="container">
                    <div className="row align-items-center mb-3">
                        <div className="col-md-12 col-12">
                            <div className="sectionHeading text-center">
                                <h2>Hiring Made Easy</h2>
                                <p>We are the largest, globally-distributed network of top business, design, and technology talent,<br/> ready to tackle your most important initiatives.</p>
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
                                    <h3>Talk to One of Our Industry Experts</h3>
                                    <p>Hire in under 48 hours. Scale up or down, no strings attached. We offer flexible engagements from hourly to full-time.</p>
                                </div>
                            </ScrollAnimation>
                        </div>
                        <div className="col-md-4 col-12">
                            <ScrollAnimation animateIn="fadeIn">
                                <div className="contentBx">
                                    <div className="numWrp">
                                        <div className="hiringNum">2</div>
                                    </div>
                                    <h3>Talk to One of Our Industry Experts</h3>
                                    <p>Hire in under 48 hours. Scale up or down, no strings attached. We offer flexible engagements from hourly to full-time.</p>
                                </div>
                            </ScrollAnimation>
                        </div>
                        <div className="col-md-4 col-12">
                            <ScrollAnimation animateIn="fadeIn">
                                <div className="contentBx noArrow">
                                    <div className="numWrp">
                                        <div className="hiringNum">3</div>
                                    </div>
                                    <h3>Talk to One of Our Industry Experts</h3>
                                    <p>Hire in under 48 hours. Scale up or down, no strings attached. We offer flexible engagements from hourly to full-time.</p>
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
                            <div className="sectionHeading">
                                <h2 className="mainHeading whiteTxt">Create Meaningful Experiences for employees</h2>
                                <p className="my-4">Focus  people by understanding employees’ emotions and<br/>  perspectives at  all touch points, so you can take action and focus<br/> experiences on what matters to the people.</p>
                            </div>
                            <div className="theme_btn">
                                <a href="/" className="colorBtn">Read more</a>
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
            <section className="testimonial">
                <div className="container">
                    <div className="row align-items-center mb-3">
                        <div className="col-md-12 col-12">
                            <div className="sectionHeading text-center">
                                <h2>Our Clients’ Satisfaction is Our Top Priority</h2>
                                <p>We have a reputation for helping clients around the world find success on their most important projects</p>
                            </div>
                        </div>
                    </div>
                    <ScrollAnimation animateIn="fadeIn">
                        <div className="row mt-5">
                            <div className="col-md-4 col-12">
                                <div className="contentBx">
                                    <FontAwesomeIcon icon={faQuoteLeft} />
                                    <h3>I have been working with Toptal...</h3>
                                    <p>I have been working with Toptal engineers for several years now. They have all been exceptionally talented, very professional, highly productive, great team players, good communicators, and willing to go above and beyond. I have relied on them as key team players and they have never felt like “outsiders”. Toptal as an organization has been professional and easy to work with.</p>
                                    <ul className="listInline">
                                        <li><FontAwesomeIcon icon={faStar} /></li>
                                        <li><FontAwesomeIcon icon={faStar} /></li>
                                        <li><FontAwesomeIcon icon={faStar} /></li>
                                        <li><FontAwesomeIcon icon={faStar} /></li>
                                        <li><FontAwesomeIcon icon={faStar} /></li>
                                    </ul>
                                    <h4>Ian Stokes-Rees</h4>
                                    <h6>Partner</h6>
                                </div>
                            </div>
                            <div className="col-md-4 col-12">
                                <div className="contentBx">
                                    <FontAwesomeIcon icon={faQuoteLeft} />
                                    <h3>I have been working with Toptal...</h3>
                                    <p>I have been working with Toptal engineers for several years now. They have all been exceptionally talented, very professional, highly productive, great team players, good communicators, and willing to go above and beyond. I have relied on them as key team players and they have never felt like “outsiders”. Toptal as an organization has been professional and easy to work with.</p>
                                    <ul className="listInline">
                                        <li><FontAwesomeIcon icon={faStar} /></li>
                                        <li><FontAwesomeIcon icon={faStar} /></li>
                                        <li><FontAwesomeIcon icon={faStar} /></li>
                                        <li><FontAwesomeIcon icon={faStar} /></li>
                                        <li><FontAwesomeIcon icon={faStar} /></li>
                                    </ul>
                                    <h4>Ian Stokes-Rees</h4>
                                    <h6>Partner</h6>
                                </div>
                            </div>
                            <div className="col-md-4 col-12">
                                <div className="contentBx">
                                    <FontAwesomeIcon icon={faQuoteLeft} />
                                    <h3>I have been working with Toptal...</h3>
                                    <p>I have been working with Toptal engineers for several years now. They have all been exceptionally talented, very professional, highly productive, great team players, good communicators, and willing to go above and beyond. I have relied on them as key team players and they have never felt like “outsiders”. Toptal as an organization has been professional and easy to work with.</p>
                                    <ul className="listInline">
                                        <li><FontAwesomeIcon icon={faStar} /></li>
                                        <li><FontAwesomeIcon icon={faStar} /></li>
                                        <li><FontAwesomeIcon icon={faStar} /></li>
                                        <li><FontAwesomeIcon icon={faStar} /></li>
                                        <li><FontAwesomeIcon icon={faStar} /></li>
                                    </ul>
                                    <h4>Ian Stokes-Rees</h4>
                                    <h6>Partner</h6>
                                </div>
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>
            </section>
            <section className="blog">
                <div className="container">
                    <div className="row mb-3">
                        <div className="col-md-12 col-12">
                            <div className="sectionHeading text-center">
                                <h2>Explore Trending Toptal Publications</h2>
                                <p>We have a reputation for helping clients around the world find success on their most important projects</p>
                            </div>
                        </div>
                    </div>
                    <ScrollAnimation animateIn="fadeIn">
                        <div className="row mt-5">
                            <div className="col-md-5 col-12">
                                <div className="blogBx blogBig">
                                    <div className="blogImg">
                                        <img src="images/blog.png" alt=""/>
                                        <div className="blogAuthImg">
                                            <img src="images/user.jpeg" alt=""/>
                                        </div>
                                    </div>
                                    {/* {console.log(blogList.listing[0].post_title)} */}
                                    <div className="blogContent">
                                        <h3>{blogList[0]?.post_title}</h3>
                                        <h5>By <b>{blogList[0]?.display_name}</b></h5>
                                        <p>{blogList[0]?.post_content}</p>
                                        <div className="d-flex justify-content-between">
                                            <h6>7 min read</h6>
                                            <a href={`/blog/${blogList[0]?.post_name}`} className="simpleBtn">Continue Read <FontAwesomeIcon icon={faArrowRight}/></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-7 col-12">
                                <div className="row">
                                    {
                                        blogList.map((blog, index)=>{
                                            return(
                                                index !== 0 && index < 5 ? 
                                                    <div className="col-md-6 col-12" key={index}>
                                                        <Link to={`/blog/${blog?.post_name}`}>
                                                            <div className="blogBx blogSmall">
                                                                <div className="blogImg">
                                                                    <img src="images/blog.png" alt=""/>
                                                                    <div className="blogAuthImg">
                                                                        <img src="images/user.jpeg" alt=""/>
                                                                    </div>
                                                                </div>
                                                                <div className="blogContent">
                                                                    <h3>{blog.post_title}</h3>
                                                                    <h5>By <b>{blog.display_name}</b></h5>
                                                                    <p>{blog.post_content}</p>
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
                                    <a href="/" className="lineBtn">Read More</a>
                                </div>
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>
            </section>
            <section className="getInTouch">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-7 col-12">
                            <div className="contactForm">
                                <h2>Get In Touch</h2>
                                <p>Our team will get back to you within 8 business hours or less.</p>
                                <ul className="listInline">
                                    <li>
                                        <a href="/"><FontAwesomeIcon icon={faPhone} /> Book a Call</a>
                                    </li>
                                    <li>
                                        <a href="/"><FontAwesomeIcon icon={faEnvelope} /> Email Us</a>
                                    </li>
                                    <li>
                                        <a href="/"><FontAwesomeIcon icon={faWhatsapp} /> Whatsapp</a>
                                    </li>
                                </ul>
                                <div className="formInr">
                                    <div className="row">
                                        <div className="col-md-6 col-12">
                                            <div className="form-group">
                                                <label>Full Name *</label>
                                                <input type="text" name="name" className="form-control" id=""/> 
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-12">
                                            <div className="form-group">
                                                <label>Email *</label>
                                                <input type="email" name="email" className="form-control" id=""/> 
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 col-12">
                                            <div className="form-group">
                                                <label>Country *</label>
                                                <input type="text" name="Country" className="form-control" id=""/> 
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-12">
                                            <div className="form-group">
                                                <label>Phone Number (Optional)</label>
                                                <input type="number" name="number" className="form-control" id=""/> 
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12 col-12">
                                            <div className="form-group">
                                                <label>Select your service *</label>
                                                <input type="text" name="service" className="form-control" id=""/> 
                                            </div>
                                        </div>
                                        <div className="col-md-12 col-12">
                                            <div className="form-group">
                                                <label>How can we help?*</label>
                                                <textarea name="" className="form-control" rows={5}></textarea>
                                            </div>
                                        </div>
                                        <div className="d-flex mt-3">
                                            <button className="colorBtn wideBtn">Send Your Query</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5 col-12 ps-5">
                            <div className="contentContent">
                                <h3>Trusted by startups and Fortune 500 companies</h3>
                                <div className="detWrp">
                                    <div className="detIco"><FontAwesomeIcon icon={faTrophy} /></div>
                                    <div className="detName">
                                        <h4>20+ years of experience</h4>
                                        <p>We can handle projects of all complexities.</p>
                                    </div>
                                </div>
                                <div className="detWrp">
                                    <div className="detIco"><FontAwesomeIcon icon={faTrophy} /></div>
                                    <div className="detName">
                                        <h4>20+ years of experience</h4>
                                        <p>We can handle projects of all complexities.</p>
                                    </div>
                                </div>
                                <div className="detWrp">
                                    <div className="detIco"><FontAwesomeIcon icon={faTrophy} /></div>
                                    <div className="detName">
                                        <h4>20+ years of experience</h4>
                                        <p>We can handle projects of all complexities.</p>
                                    </div>
                                </div>
                                <div className="clients">
                                    <img src="images/cont-cl01.svg" alt="" />
                                    <img src="images/cont-cl01.svg" alt="" />
                                    <img src="images/cont-cl01.svg" alt="" />
                                    <img src="images/cont-cl01.svg" alt="" />
                                    <img src="images/cont-cl01.svg" alt="" />
                                    <img src="images/cont-cl01.svg" alt="" />
                                    <img src="images/cont-cl01.svg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}
export default Home;