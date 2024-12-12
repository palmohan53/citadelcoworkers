import React,{useEffect} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import aboutContent from '../Content/about.json';
import Testimonial from "../Component/Testimonial";

const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return(
        <React.Fragment>
            <section className="innerBanner">
                <img src="/images/inr-banner.jpg" alt=""/>
                <div className="innerBannerContent">
                    <h1>About Us</h1>
                    <p>The Toptal Design Blog is a hub for advanced design studies by professional designers in the Toptal network on all facets of digital design, ranging from detailed design tutorials to in-depth coverage of new design trends, techniques, and technologies.</p>
                </div>
                <div className="bannerOvelay"></div>
            </section>
            <section className="aboutUs mb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5">
                            <div className="aboutUsThumb">
                                <img src="/images/about-sample-img-2.png" alt=""/>
                            </div>
                        </div>
                        <div className="col-12 col-md-7 pt-5 pr-5">
                            <div className="aboutUsContent">
                                {
                                    aboutContent.about.map((data, index)=>{
                                        return(
                                            <React.Fragment key={index}>
                                                <div className="sectionHeading mb-3">
                                                    <h3>{data.topTitle}</h3>
                                                    <h2>{data.title}</h2>
                                                </div>
                                                <h4>{data.subTitle}</h4>
                                                <p className="para">{data.body}</p>
                                            </React.Fragment>
                                        )
                                    })
                                }
                                <div className="row about-one-icon-box">
                                    <div className="col-xl-6 col-md-12 col-sm-6 m-t30">
                                        <div className="wt-icon-box-wraper left">
                                            <div className="icon-md inline-icon m-b20">
                                                <span className="icon-cell site-text-primary"><i className="flaticon-worker"></i></span>
                                            </div>
                                            <div className="icon-content">
                                                <h4 className="wt-tilte">Construction Services</h4>
                                                <p>Lorem ipsum dolor sit piscing sed nonmy</p>
                                            </div>
                                        </div>                                         
                                    </div>  
                                                                        
                                    <div className="col-xl-6 col-md-12 col-sm-6 m-t30">
                                        <div className="wt-icon-box-wraper left">
                                            <div className="icon-md inline-icon m-b20">
                                                <span className="icon-cell site-text-primary"><i className="flaticon-design"></i></span>
                                            </div>
                                            <div className="icon-content">
                                                <h4 className="wt-tilte ">Unique Technology</h4>
                                                <p>Lorem ipsum dolor sit piscing sed nonmy</p>
                                            </div>
                                        </div> 
                                    </div>
                                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg_light_1">
                <div className="container">
                  <div className="row">
                     <div className="col-lg-12">
                        <div className="title_all_box style_one text-center dark_color">
                           <div className="title_sections">
                              <div className="before_title">Our Business</div>
                              <h2 className="title">Stand Out From The Rest</h2>
                           </div>
                           
                           <div className="pd_bottom_20"></div>
                           
                        </div>
                     </div>
                  </div>
                  <div className="row">
                     <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                        <div className="simple_image_boxes parallax_cover height_264px">
                              <img src="/images/icon-img-ab-1.jpg" className="simp_img cover-parallax" alt=""/>
                        </div>
                        
                        <div className="pd_bottom_20"></div>
                        
                        <div className="icon_box_all style_three">
                            <div className="icon_content ">
                                <div className="icon">
                                    <img src="/images/our-mission.png" alt="" />
                                </div>
                                <div className="txt_content">
                                    <h3><a href="/" target="_blank" rel="nofollow">Our Mission</a></h3>
                                    <p>Equal blame belongs to those who fail in their duty through weakness of will which
                                        the same as saying.</p>
                                </div>
                            </div>
                        </div>
                     </div>
                     <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-xs-12 mt-4 mt-lg-0 mt-xl-0">
                        <div className="icon_box_all style_three">
                           <div className="icon_content ">
                              <div className="icon">
                                    <img src="/images/core-value.png" alt="" />
                              </div>
                              <div className="txt_content">
                                 <h3><a href="/" target="_blank" rel="nofollow">Our Core Values</a></h3>
                                 <p>Equal blame belongs to those who fail in their duty through weakness of will which
                                    the same as saying.</p>
                                 <ul>
                                    <li>Integrity</li>
                                    <li>Commitment to excellence</li>
                                    <li>Consumer focus</li>
                                    <li>Accountability</li>
                                    <li>Inclusiveness</li>
                                 </ul>
                                 <div className="btn_left pt-4">
                                    <a href="/" target="_blank" rel="nofollow" className="lineBtn">Read More</a>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-xs-12 mt-4 mt-lg-4 mt-xl-0">
                        <div className="icon_box_all style_three">
                           <div className="icon_content ">
                              <div className="icon">
                              <img src="/images/our-vision.png" alt="" />
                              </div>
                              <div className="txt_content">
                                 <h3><a href="/" target="_blank" rel="nofollow">Our Vision</a></h3>
                                 <p>Equal blame belongs to those who fail in their duty through weakness of will which
                                    the same as saying.</p>
                              </div>
                           </div>
                        </div>
                        <div className="pd_bottom_20"></div>
                        <div className="simple_image_boxes parallax_cover height_264px">
                           <img src="/images/icon-img-ab-2.jpg" className="simp_img img-fluid cover-parallax" alt=""/>
                        </div>
                     </div>
                  </div>
                </div>
            </section>
            <section class="team-section">
                <div className="container">
                    <div className="title_all_box style_one text-center dark_color">
                        <div className="title_sections">
                            <div className="before_title">Our Team</div>
                            <h2 className="title">Stand Out From The Rest</h2>
                        </div>
                        <div className="pd_bottom_20"></div>
                    </div>
                    <div class="row">
                        <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                            <div class="team_box style_two">
                                <div class="team_box_outer">
                                <div class="image_box ">
                                    <img src="/images/KJSingh.jpg" alt="team"/>
                                    <div class="overlay ">
                                        <ul>
                                            <li><a href="/"><FontAwesomeIcon icon={faFacebookF} /> </a></li>
                                            <li><a href="/"><FontAwesomeIcon icon={faTwitter} /></a></li>
                                            <li><a href="/"><FontAwesomeIcon icon={faInstagram} /></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="content_box ">
                                    <h2>Kamal Jeet Singh</h2>
                                    <p class="job_details">Co-Founder/Director</p>
                                    <p>Kamal brings a wealth of experience and a futuristic approach to IT solutions. His vision for Citadel Coworkers is not just to adapt to the changing technological landscape but to be the force that drives it.</p>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                            <div class="team_box style_two">
                                <div class="team_box_outer">
                                <div class="image_box ">
                                    <img src="/images/steptodown.com450532-768x531.png" alt="team"/>
                                    <div class="overlay ">
                                        <ul>
                                            <li><a href="/"><FontAwesomeIcon icon={faFacebookF} /> </a></li>
                                            <li><a href="/"><FontAwesomeIcon icon={faTwitter} /></a></li>
                                            <li><a href="/"><FontAwesomeIcon icon={faInstagram} /></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="content_box ">
                                    <h2>Navjot Chadda</h2>
                                    <p class="job_details">Managing Director</p>
                                    <p>With an astute business acumen and a deep understanding of market dynamics, Navjot ensures that every strategy is robust and every execution flawless. He's the keystone of our operational excellence and client satisfaction. </p>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                            <div class="team_box style_two">
                                <div class="team_box_outer">
                                <div class="image_box ">
                                    <img src="/images/Pinka-Sharma-768x569.jpg" alt="team"/>
                                    <div class="overlay ">
                                        <ul>
                                            <li><a href="/"><FontAwesomeIcon icon={faFacebookF} /> </a></li>
                                            <li><a href="/"><FontAwesomeIcon icon={faTwitter} /></a></li>
                                            <li><a href="/"><FontAwesomeIcon icon={faInstagram} /></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="content_box ">
                                    <h2>Pinka Sharma</h2>
                                    <p class="job_details">Content Writer</p>
                                    <p>Pinka Sharma, our dedicated content writer, brings creativity and expertise to our team. Her exceptional writing skills and passion for storytelling enhance our projects, delivering compelling and engaging content every time.</p>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Testimonial />
        </React.Fragment>
    )
};

export default About;