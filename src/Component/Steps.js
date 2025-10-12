import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboardList, faPeopleArrows, faSitemap, faHouseLaptop } from '@fortawesome/free-solid-svg-icons';
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
                                    <h2>4 Simple Steps to Build Your Remote Dream Team</h2>
                                </div>
                            </div>
                        </div>                                            
                    </div>
                    <div className="row gutter_15px custome-row">
                        <div className="col-xl-3 col-lg-6 col-md-12 col-sm-12 col-12 my-4 col-custome">
                            <div className="service_box style_three dark_color">
                                <div className="service_content">
                                    <div className="content_inner">
                                        <span className="icon-dollar">
                                            <img src="/images/clipboard.png" alt="Talent"></img>
                                          
                                            <i></i>
                                        </span>
                                        <small className="nom">01</small>
                                        <h4 className="semiHeading">Tell Us What You Need</h4>
                                      Let us know the skills and expertise you require—whether it's accounting, software development, customer support, or digital marketing. We match you with top-tier professionals in your domain.
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
                                        <span className="icon-pharmacy icon-dollar">  <img src="/images/star.png" alt="Talent"></img><i></i></span>
                                        <small className="nom">02</small>
                                        <h4 className="semiHeading">Get Pre-Vetted Talent Options</h4>
                                      We shortlist highly skilled and experienced virtual professionals tailored to your needs. Review profiles, interview candidates, and select the best fit for your business.
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
                                        <span className="icon-service icon-dollar"><img src="/images/sitemap.png" alt="sitemap"></img><i></i></span>
                                        <small className="nom">03</small>
                                        <h4 className="semiHeading">Onboard & Customize Your Team</h4>
                                       Once you've selected your remote staff, we ensure a seamless onboarding process with role-specific training, workflow integration, and reporting setup—making remote collaboration effortless.
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
                                        <span className=" icon-dollar "><img src="/images/work-from-home.png" alt="work-from-home"></img><i></i></span>
                                        <small className="nom">04</small>
                                        <h4 className="semiHeading">Scale & Optimize with Ease</h4>
                                Your dedicated remote team works as an extension of your business. Need more hands on deck? Easily scale up while we handle compliance, payroll, and HR, so you can focus on growth.
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