import React,{useEffect} from "react";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faUsers, faWandMagicSparkles, faMoneyBillTrendUp, faHeadset} from '@fortawesome/free-solid-svg-icons';
import Slider from "react-slick";

const About = () => {
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
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return(
        <React.Fragment>
            <HelmetProvider>
                <Helmet>
                    <title>About Us - Citadel CoWorkers™</title>
                    <meta name="description" content="We&#039;re a leader in IT and virtual assistant solutions tailored to enhance your business operations. Partner with Citadel to elevate your business with cost-effective and exceptional customer service." />
                </Helmet>
                <section className="innerBanner">
                    {/* <img src="/images/inr-banner.jpg" alt=""/> */}
                    <div className="innerBannerContent">
                        <h1>About Us</h1>
                    </div>
                    <div className="bannerOvelay"></div>
                </section>
                <section className="aboutUs mb-5">
                    <div className="container">
                        <div className="row align-items-center">
                            
                            <div className="col-12 col-md-6 pr-5">
                                <div className="aboutUsContent">
                                    <div className="sectionHeading mb-3 min-width-100">
                                        <h3>About Citadel Coworkers</h3>
                                        <h2>Empowering Businesses with Top Virtual Talent</h2>
                                    </div>
                                    <p className="para">At <b>Citadel Coworkers</b>, we specialize in connecting businesses with <b>highly skilled virtual professionals</b> across various industries. Our mission is to <b>bridge the talent gap</b>, offering cost-effective, efficient, and dedicated remote teams tailored to your business needs.</p>
                                    <p className="para">From <b>startups to enterprises</b>, we help organizations scale seamlessly with our <b>pre-vetted experts in IT, marketing, finance, design, legal support, and more.</b></p>

                                    <div className="row about-one-icon-box mb-4">
                                        <div className="col-md-6 col-12">
                                            <div className="wt-icon-box-wraper left">
                                                <div className="icon-md inline-icon m-b20">
                                                    <span className="icon-cell site-text-primary"><FontAwesomeIcon icon={faUsers} /></span>
                                                </div>
                                                <div className="icon-content">
                                                    <h4 className="wt-tilte">Top 3% Virtual Experts </h4>
                                                    <p>We rigorously screen and select only the best professionals.</p>
                                                </div>
                                            </div>                                         
                                        </div>  
                                                                            
                                        <div className="col-md-6 col-12">
                                            <div className="wt-icon-box-wraper left">
                                                <div className="icon-md inline-icon m-b20">
                                                    <span className="icon-cell site-text-primary"><FontAwesomeIcon icon={faWandMagicSparkles} /></span>
                                                </div>
                                                <div className="icon-content">
                                                    <h4 className="wt-tilte ">Flexible Hiring Models </h4>
                                                    <p>Hire hourly, part-time, or full-time.</p>
                                                </div>
                                            </div> 
                                        </div>
                                        <div className="col-md-6 col-12">
                                            <div className="wt-icon-box-wraper left">
                                                <div className="icon-md inline-icon m-b20">
                                                    <span className="icon-cell site-text-primary"><FontAwesomeIcon icon={faMoneyBillTrendUp} /></span>
                                                </div>
                                                <div className="icon-content">
                                                    <h4 className="wt-tilte ">Cost-Effective Solutions </h4>
                                                    <p>Reduce operational costs without compromising on quality.</p>
                                                </div>
                                            </div> 
                                        </div>
                                        {/* <div className="col-md-6 col-12">
                                            <div className="wt-icon-box-wraper left">
                                                <div className="icon-md inline-icon m-b20">
                                                    <span className="icon-cell site-text-primary"><FontAwesomeIcon icon={faTruckFast} /></span>
                                                </div>
                                                <div className="icon-content">
                                                    <h4 className="wt-tilte ">Quick Turnaround </h4>
                                                    <p>Get access to talent within 24 hours.</p>
                                                </div>
                                            </div> 
                                        </div> */}
                                        <div className="col-md-6 col-12">
                                            <div className="wt-icon-box-wraper left">
                                                <div className="icon-md inline-icon m-b20">
                                                    <span className="icon-cell site-text-primary"><FontAwesomeIcon icon={faHeadset} /></span>
                                                </div>
                                                <div className="icon-content">
                                                    <h4 className="wt-tilte ">End-to-End Support </h4>
                                                    <p>We manage hiring, onboarding, and payroll so that you can focus on growth. </p>
                                                </div>
                                            </div> 
                                        </div>
                                                        
                                    </div>
                                    <div className="d-flex gap-3">
                                        {/* <Link to='/services' className="lineBtn">View More</Link> */}
                                        <Link to='/contact-us' className="colorBtn wideBtn">Contact Us</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 pt-5">
                                {/* <div className="aboutUsThumb">
                                    <img src="/images/about-sample-img-2.png" alt=""/>
                                </div> */}
                                <div className="about2-images">
                                    <div className="image1">
                                        <img src="/images/about2-img1.png" alt=""/>
                                    </div>
                                    <div className="image2">
                                        <img src="/images/about2-img2.png" alt=""/>
                                    </div>
                                    <div className="image3">
                                        <img src="/images/about2-img3.png" alt=""/>
                                    </div>
                                    <div className="counter-box">
                                        <h3>05</h3>
                                        <p>Years Of <br/> Experience</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="industriesServed">
                    <div className="SingleSliderContainer">
                        <div className="sectionHeading">
                            <h2>Industries We Serve</h2>
                        </div>
                        <Slider {...settings}>
                            <div className="industryBox">
                                <div className="industryBoxInr">
                                    <h3>IT & Software Development</h3>
                                    <p>Web & app developers, software engineers, QA testers.</p>
                                    <Link to='/services' className="lineBtn">View More</Link>
                                </div>
                            </div>
                            <div className="industryBox">
                                <div className="industryBoxInr">
                                    <h3>Finance & Accounting </h3>
                                    <p>CPAs, bookkeepers, financial analysts.</p>
                                    <Link to='/services' className="lineBtn">View More</Link>
                                </div>
                            </div>
                            <div className="industryBox">
                                <div className="industryBoxInr">
                                    <h3>Marketing & Branding </h3>
                                    <p>SEO experts, digital marketers, and content writers.</p>
                                    <Link to='/services' className="lineBtn">View More</Link>
                                </div>
                            </div>
                            <div className="industryBox">
                                <div className="industryBoxInr">
                                    <h3>Graphic & UI/UX Design </h3>
                                    <p>Web designers, motion graphic artists, and branding experts.</p>
                                    <Link to='/services' className="lineBtn">View More</Link>
                                </div>
                            </div>
                            <div className="industryBox">
                                <div className="industryBoxInr">
                                    <h3>Legal Process Outsourcing </h3>
                                    <p>Paralegals, legal researchers, case managers.</p>
                                    <Link to='/services' className="lineBtn">View More</Link>
                                </div>
                            </div>
                            <div className="industryBox">
                                <div className="industryBoxInr">
                                    <h3>Customer Support & Virtual Assistance </h3>
                                    <p>Admin support, sales support, help desk professionals.</p>
                                    <Link to='/services' className="lineBtn">View More</Link>
                                </div>
                            </div>
                        </Slider>
                        <div className="bgImg">
                            <img src="/images/sky-bg.png" alt=""/>
                        </div>
                    </div>
                </section>
                <section className="team-section">
                    <div className="container">
                        <div className="sectionHeading text-center mb-5">
                            <h2>Meet Our Leadership Team</h2>
                            <p>We are the largest, globally-distributed network of top business, design, and technology talent,<br/> ready to tackle your most important initiatives.</p>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                                <div className="team_box style_two">
                                    <div className="team_box_outer">
                                        <div className="image_box ">
                                            <img src="/images/amit-gupta-2.png" alt="team"/>
                                            <div className="overlay ">
                                                <ul>
                                                    <li><a href="/"><FontAwesomeIcon icon={faLinkedinIn} /> </a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="content_box ">
                                            <h2>Amit Gupta </h2>
                                            <p className="job_details">Founder</p>
                                            <p>Visionary leader with IT and Legal expertise, driving innovation and excellence in global remote staffing.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                                <div className="team_box style_two">
                                    <div className="team_box_outer">
                                        <div className="image_box ">
                                            <img src="/images/Suresh-Sharma.jpg" alt="team"/>
                                            <div className="overlay ">
                                                <ul>
                                                    <li><a href="/"><FontAwesomeIcon icon={faLinkedinIn} /> </a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="content_box ">
                                            <h2>Suresh Sharma </h2>
                                            <p className="job_details">Co-founder</p>
                                            <p>Visionary leader driving Citadel Coworkers towards innovation and excellence in virtual staffing.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                                <div className="team_box style_two">
                                    <div className="team_box_outer">
                                        <div className="image_box ">
                                            <img src="/images/KJSingh.jpg" alt="team"/>
                                            <div className="overlay ">
                                                <ul>
                                                    <li><a href="/"><FontAwesomeIcon icon={faLinkedinIn} /> </a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="content_box ">
                                            <h2>Kamaljeet Singh  </h2>
                                            <p className="job_details">Director</p>
                                            <p>Overseeing strategic growth and business expansion initiatives.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                                <div className="team_box style_two">
                                    <div className="team_box_outer">
                                        <div className="image_box ">
                                            <img src="/images/Anil.png" alt="team"/>
                                            <div className="overlay ">
                                                <ul>
                                                    <li><a href="/"><FontAwesomeIcon icon={faLinkedinIn} /> </a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="content_box ">
                                            <h2>Anil Aggarwal </h2>
                                            <p className="job_details">Director</p>
                                            <p>Finance expert leading Citadel Coworkers with precision and trust in virtual accounting and financial services.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                                <div className="team_box style_two">
                                    <div className="team_box_outer">
                                    <div className="image_box ">
                                        <img src="/images/Akansha.png" alt="team"/>
                                        <div className="overlay ">
                                            <ul>
                                                <li><a href="/"><FontAwesomeIcon icon={faLinkedinIn} /> </a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="content_box ">
                                        <h2>Akansha Sharma</h2>
                                        <p className="job_details">Senior Manager Digital Marketing.</p>
                                        <p>Spearheaded brand visibility and digital marketing strategies for global reach.</p>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                                <div className="team_box style_two">
                                    <div className="team_box_outer">
                                        <div className="image_box ">
                                            <img src="/images/Meenu-Singh.png" alt="team"/>
                                            <div className="overlay ">
                                                <ul>
                                                    <li><a href="/"><FontAwesomeIcon icon={faLinkedinIn} /> </a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="content_box ">
                                            <h2>Meenu Singh </h2>
                                            <p className="job_details">HR Generalist & Talent Acquisition Head</p>
                                            <p>Building a high-performing workforce through expert talent acquisition.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                                <div className="team_box style_two">
                                    <div className="team_box_outer">
                                        <div className="image_box ">
                                            <img src="/images/Bhawana.png" alt="team"/>
                                            <div className="overlay ">
                                                <ul>
                                                    <li><a href="/"><FontAwesomeIcon icon={faLinkedinIn} /> </a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="content_box ">
                                            <h2>Bhawna</h2>
                                            <p className="job_details">Senior Manager, Recruitment Team</p>
                                            <p>Leading recruitment efforts to match businesses with top-tier professionals.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                                <div className="team_box style_two">
                                    <div className="team_box_outer">
                                        <div className="image_box ">
                                            <img src="/images/Akshat.png" alt="team"/>
                                            <div className="overlay ">
                                                <ul>
                                                    <li><a href="/"><FontAwesomeIcon icon={faLinkedinIn} /> </a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="content_box ">
                                            <h2>Akshat Varshney </h2>
                                            <p className="job_details">Vice President, Finance Department</p>
                                            <p>Leading financial strategies to optimize business growth and efficiency.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            
                            
                            {/* <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                                <div className="team_box style_two">
                                    <div className="team_box_outer">
                                        <div className="image_box ">
                                            <img src="/images/KJSingh.jpg" alt="team"/>
                                            <div className="overlay ">
                                                <ul>
                                                    <li><a href="/"><FontAwesomeIcon icon={faLinkedinIn} /> </a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="content_box ">
                                            <h2>Vinod Kumar </h2>
                                            <p className="job_details">Senior Manager Accounts</p>
                                            <p>Overseeing IT infrastructure, security, and technology-driven solutions.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                                <div className="team_box style_two">
                                    <div className="team_box_outer">
                                        <div className="image_box ">
                                            <img src="/images/KJSingh.jpg" alt="team"/>
                                            <div className="overlay ">
                                                <ul>
                                                    <li><a href="/"><FontAwesomeIcon icon={faLinkedinIn} /> </a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="content_box ">
                                            <h2>Mohan Paul </h2>
                                            <p className="job_details">Senior Manager, Software Development</p>
                                            <p>Driving the development of innovative software solutions.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                                <div className="team_box style_two">
                                    <div className="team_box_outer">
                                        <div className="image_box ">
                                            <img src="/images/KJSingh.jpg" alt="team"/>
                                            <div className="overlay ">
                                                <ul>
                                                    <li><a href="/"><FontAwesomeIcon icon={faLinkedinIn} /> </a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="content_box ">
                                            <h2>Ankit Khatri </h2>
                                            <p className="job_details">Senior Manager – Accounts</p>
                                            <p>Managing financial operations and ensuring compliance with industry standards.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                                <div className="team_box style_two">
                                    <div className="team_box_outer">
                                        <div className="image_box ">
                                            <img src="/images/KJSingh.jpg" alt="team"/>
                                            <div className="overlay ">
                                                <ul>
                                                    <li><a href="/"><FontAwesomeIcon icon={faLinkedinIn} /> </a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="content_box ">
                                            <h2>Praveen Kumar </h2>
                                            <p className="job_details">Senior Manager – Accounts</p>
                                            <p>Ensuring smooth administrative functions and operational efficiency.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                                <div className="team_box style_two">
                                    <div className="team_box_outer">
                                        <div className="image_box ">
                                            <img src="/images/Pinka-Sharma-768x569.jpg" alt="team"/>
                                            <div className="overlay ">
                                                <ul>
                                                    <li><a href="/"><FontAwesomeIcon icon={faLinkedinIn} /> </a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="content_box ">
                                            <h2>Pooja Tyagi </h2>
                                            <p className="job_details">Senior Manager – Content Writer</p>
                                            <p>Developing impactful content strategies to enhance brand visibility and audience engagement across multiple digital platforms.</p>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                        <div className="text-center mt-5 bottomTeam">
                            <div className="sectionHeading">
                                <h2>Join Hands with Citadel Coworkers</h2>
                            </div>
                            <p>We believe in building long-term partnerships with businesses by providing the right people, at the right time, for the right roles.<br/>Whether you're looking for a single expert or a full team, Citadel Coworkers has you covered.</p>
                            <h4>🚀 Let's Build Your Dream Team </h4>
                            <Link to='/contact-us' className="colorBtn wideBtn">Contact Us Today!</Link>
                        </div>
                    </div>
                </section>
            </HelmetProvider>
            {/* <Testimonial /> */}
        </React.Fragment>
    )
};

export default About;