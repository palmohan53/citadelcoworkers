import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPeopleRoof } from '@fortawesome/free-solid-svg-icons';
const Steps = () => {
    return(
        <React.Fragment>
            <section className="service-section-two bg_light_1">
                            <div className="container pd_zero">
                                <div className="row mb-5">
                                    <div className="col-lg-12">
                                        <div className="title_all_box style_one text-center  dark_color">
                                            <div className="sectionHeading">
                                                <h3>STEPS</h3>
                                                <h2>4 Simple Steps to Streamline Success</h2>
                                            </div>
                                        </div>
                                    </div>                                            
                                </div>
                                <div className="row gutter_15px">
                                    <div className="col-xl-3 col-lg-6 col-md-12 col-sm-12 col-12 my-4">
                                        <div className="service_box style_three dark_color">
                                            <div className="service_content">
                                                <div className="content_inner">
                                                    <span className="icon-dollar">
                                                        <FontAwesomeIcon icon={faPeopleRoof} />
                                                        <i></i>
                                                    </span>
                                                    <small className="nom">01</small>
                                                    <h2 className="semiHeading">Define Your Needs</h2>
                                                    <p>Detail the administrative or creative tasks you’re looking to outsource. From data entry to digital marketing needs, start your journey to operational efficiency.</p>
                                                    {/* <a href="/" className="read_more">Read more <FontAwesomeIcon icon={faArrowRight} /></a> */}
                                                </div>
                                            </div>
                                        </div>                        
                                        <div className="mr_bottom_30"></div>                        
                                    </div>
                                    <div className="col-xl-3 col-lg-6 col-md-12 col-sm-12 col-12 my-4">
                                        <div className="service_box style_three dark_color">
                                            <div className="service_content">
                                                <div className="content_inner">
                                                    <span className="icon-pharmacy"><FontAwesomeIcon icon={faPeopleRoof} /><i></i></span>
                                                    <small className="nom">02</small>
                                                    <h2 className="semiHeading">Choose Your Assistant</h2>
                                                    <p>Connect with a seasoned personal assistant or administrative assistant. Our experts are skilled in Microsoft Excel, email management, and more to tailor our services to your unique needs.</p>
                                                    {/* <a href="/" className="read_more">Read more <FontAwesomeIcon icon={faArrowRight} /></a> */}
                                                </div>
                                            </div>
                                        </div>                        
                                        <div className="mr_bottom_30"></div>                        
                                    </div>
                                    <div className="col-xl-3 col-lg-6 col-md-12 col-sm-12 col-12 my-4">
                                        <div className="service_box style_three dark_color">
                                            <div className="service_content">
                                                <div className="content_inner">
                                                    <span className="icon-service"><FontAwesomeIcon icon={faPeopleRoof} /><i></i></span>
                                                    <small className="nom">03</small>
                                                    <h2 className="semiHeading">Customize Your Service</h2>
                                                    <p>Plan your assistance down to the last detail – from bookkeeping & accounting to travel research. Our virtual assistants are versatile, adaptable, and ready to support your business endeavors.</p>
                                                    {/* <a href="/" className="read_more">Read more <FontAwesomeIcon icon={faArrowRight} /></a> */}
                                                </div>
                                            </div>
                                        </div>                        
                                        <div className="mr_bottom_30"></div>                        
                                    </div>
                                    <div className="col-xl-3 col-lg-6 col-md-12 col-sm-12 col-12 my-4">
                                        <div className="service_box style_three dark_color">
                                            <div className="service_content">
                                                <div className="content_inner">
                                                    <span className=" icon-dollar"><FontAwesomeIcon icon={faPeopleRoof} /><i></i></span>
                                                    <small className="nom">04</small>
                                                    <h2 className="semiHeading">Start Collaborating</h2>
                                                    <p>Engage with your virtual assistant and witness the transformation in your productivity. Let our experts handle everything from social media management to content writing, so you can focus on growing your business.</p>
                                                    {/* <a href="/" className="read_more">Read more <FontAwesomeIcon icon={faArrowRight} /></a> */}
                                                </div>
                                            </div>
                                        </div>                            
                                    </div>
                                    
                                </div>
                            </div>
                        </section>
        </React.Fragment>
    )
}

export default Steps;