import React,{useEffect} from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faUmbrella, faMountainSun } from '@fortawesome/free-solid-svg-icons';
import aboutContent from '../Content/about.json';
// import Testimonial from "../Component/Testimonial";

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
                    {/* <p>The Toptal Design Blog is a hub for advanced design studies by professional designers in the Toptal network on all facets of digital design, ranging from detailed design tutorials to in-depth coverage of new design trends, techniques, and technologies.</p> */}
                </div>
                <div className="bannerOvelay"></div>
            </section>
            <section className="aboutUs mb-5">
                <div className="container">
                    <div className="row">
                        
                        <div className="col-12 col-md-6 pr-5">
                            <div className="aboutUsContent">
                                {
                                    aboutContent.about.map((data, index)=>{
                                        return(
                                            <React.Fragment key={index}>
                                                <div className="sectionHeading mb-3 min-width-100">
                                                    <h3>{data.topTitle}</h3>
                                                    <h2>{data.title}</h2>
                                                </div>
                                                <h4>{data.subTitle}</h4>
                                                <p className="para">Dummy Content Lorem ipsum {data.body}</p>
                                            </React.Fragment>
                                        )
                                    })
                                }
                                <div className="row about-one-icon-box mb-4">
                                    <div className="col-xl-6 col-md-12 col-sm-6 m-t30">
                                        <div className="wt-icon-box-wraper left">
                                            <div className="icon-md inline-icon m-b20">
                                                <span className="icon-cell site-text-primary"><FontAwesomeIcon icon={faUmbrella} /></span>
                                            </div>
                                            <div className="icon-content">
                                                <h4 className="wt-tilte">Construction Services</h4>
                                                <p>Lorem ipsum dolor sit piscing sed nonmy Lorem ipsum dolor sit piscing sed Lorem ipsum dolor sit piscing sed nonmy.</p>
                                            </div>
                                        </div>                                         
                                    </div>  
                                                                        
                                    <div className="col-xl-6 col-md-12 col-sm-6 m-t30">
                                        <div className="wt-icon-box-wraper left">
                                            <div className="icon-md inline-icon m-b20">
                                                <span className="icon-cell site-text-primary"><FontAwesomeIcon icon={faMountainSun} /></span>
                                            </div>
                                            <div className="icon-content">
                                                <h4 className="wt-tilte ">Unique Technology</h4>
                                                <p>Lorem ipsum dolor sit piscing sed nonmy Lorem ipsum dolor sit piscing sed Lorem ipsum dolor sit piscing sed nonmy.</p>
                                            </div>
                                        </div> 
                                    </div>
                                                    
                                </div>
                                <div className="d-flex gap-3">
                                    <Link to='/services' className="lineBtn">View More</Link>
                                    <Link to='/contact-us' className="colorBtn">Contact Us</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 pt-5">
                            {/* <div className="aboutUsThumb">
                                <img src="/images/about-sample-img-2.png" alt=""/>
                            </div> */}
                            <div class="about2-images">
                                <div class="image1">
                                    <img src="/images/about2-img1.png" alt=""/>
                                </div>
                                <div class="image2">
                                    <img src="/images/about2-img2.png" alt=""/>
                                </div>
                                <div class="image3">
                                    <img src="/images/about2-img3.png" alt=""/>
                                </div>
                                <div class="counter-box">
                                    <h3>05</h3>
                                    <p>Years Of <br/> Experience</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="about-tabs bg_light_1">
                <div className="container">
                    <div class="row align-items-center">
                        <div class="col-lg-6">
                            <div class="tab-content-box">
                                <div class="heading1">
                                    <h5>2017 - A Legacy of Innovation</h5>
                                    <div class="space24"></div>
                                    <p><span class="text">Early Years:</span> In the early years, Steve Jobs recognized the growing importance of technology in business and set out to create a company that could help organizations leverage the power of digital innovation. With a small team of passionate individuals.</p>
                                    <div class="space16"></div>
                                    <p><span class="text">Expansion &amp; Innovation:</span> As technology continued to evolve, so did [Company Name]. We expanded our service offerings to include a wide range of solutions, from cybersecurity and cloud computing to data analytics and artificial intelligence.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="image">
                                <img src="/images/about-tab-img.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg_light_1">
                <div className="container">
                  <div className="row">
                     <div className="col-lg-12">
                        <div className="sectionHeading text-center mb-5">
                            <h2>Leverage World-Class Talent</h2>
                            <p>We are the largest, globally-distributed network of top business, design, and technology talent,<br/> ready to tackle your most important initiatives.</p>
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
                     <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-xs-12">
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
                     <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-xs-12">
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
            <section className="team-section">
                <div className="container">
                    <div className="sectionHeading text-center mb-5">
                        <h2>Our Team</h2>
                        <p>We are the largest, globally-distributed network of top business, design, and technology talent,<br/> ready to tackle your most important initiatives.</p>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                            <div className="team_box style_two">
                                <div className="team_box_outer">
                                <div className="image_box ">
                                    <img src="/images/KJSingh.jpg" alt="team"/>
                                    <div className="overlay ">
                                        <ul>
                                            <li><a href="/"><FontAwesomeIcon icon={faFacebookF} /> </a></li>
                                            <li><a href="/"><FontAwesomeIcon icon={faTwitter} /></a></li>
                                            <li><a href="/"><FontAwesomeIcon icon={faInstagram} /></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="content_box ">
                                    <h2>Kamal Jeet Singh</h2>
                                    <p className="job_details">Co-Founder/Director</p>
                                    <p>Kamal brings a wealth of experience and a futuristic approach to IT solutions. His vision for Citadel Coworkers is not just to adapt to the changing technological landscape but to be the force that drives it.</p>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                            <div className="team_box style_two">
                                <div className="team_box_outer">
                                <div className="image_box ">
                                    <img src="/images/steptodown.com450532-768x531.png" alt="team"/>
                                    <div className="overlay ">
                                        <ul>
                                            <li><a href="/"><FontAwesomeIcon icon={faFacebookF} /> </a></li>
                                            <li><a href="/"><FontAwesomeIcon icon={faTwitter} /></a></li>
                                            <li><a href="/"><FontAwesomeIcon icon={faInstagram} /></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="content_box ">
                                    <h2>Navjot Chadda</h2>
                                    <p className="job_details">Managing Director</p>
                                    <p>With an astute business acumen and a deep understanding of market dynamics, Navjot ensures that every strategy is robust and every execution flawless. He's the keystone of our operational excellence and client satisfaction. </p>
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
                                            <li><a href="/"><FontAwesomeIcon icon={faFacebookF} /> </a></li>
                                            <li><a href="/"><FontAwesomeIcon icon={faTwitter} /></a></li>
                                            <li><a href="/"><FontAwesomeIcon icon={faInstagram} /></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="content_box ">
                                    <h2>Pinka Sharma</h2>
                                    <p className="job_details">Content Writer</p>
                                    <p>Pinka Sharma, our dedicated content writer, brings creativity and expertise to our team. Her exceptional writing skills and passion for storytelling enhance our projects, delivering compelling and engaging content every time.</p>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <Testimonial /> */}
        </React.Fragment>
    )
};

export default About;