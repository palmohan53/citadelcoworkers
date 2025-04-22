import React,{useEffect} from "react";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const AboutCitadelAdvantage = () => {
   
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return(
        <React.Fragment>
            <HelmetProvider>
                <Helmet>
                    <title>About Citadel Advantage - citadel coworkers</title>
                    <meta name="description" content="About Citadel Advantage Cookie List A cookie is a small piece of data (text file) that a website – when visited by a user – asks your browser to store on your device in order to remember information about you, such as your language preference or login information. Those cookies are set by us and called […]" />
                    <link rel="canonical" href={window.location.href} />
                </Helmet>
                <section className="innerBanner">
                    {/* <img src="/images/inr-banner.jpg" alt=""/> */}
                    <div className="innerBannerContent">
                        <h1>About Citadel Advantage</h1>
                        <p>At Citadel, we blend advanced technology with unparalleled expertise to streamline your business operations. Our suite of development tools, including Node.js and Bootstrap, is designed to elevate your enterprise to the forefront of innovation.</p>
                        <div className="text-center mt-3">
                            <Link to="/contact-us" className="colorBtn wideBtn">Share Your Requirement</Link>
                        </div>
                    </div>
                    <div className="bannerOvelay"></div>
                </section>
                <section className="contentRich mb-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-12 pr-5">
                                <div className="contentRichContent">
                                    <div className="sectionHeading mb-5 text-center">
                                        <h2>Discover What Citadel Advantage<br/>
                                        Brings to Your Team</h2>
                                        <p className="para">Unleash productivity with Citadel Advantage. From generating leads to gleaning deep customer insights, our tailored solutions empower your team to excel.</p>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-md-4">
                                <img src="/images/about-citadel-adv.png" alt=""/>
                            </div>
                            <div className="col-12 col-md-8">
                                <div className="row">
                                    <div className="col-12 col-md-6 mb-4">
                                        <div className="bottomServiceContent min-width-100">
                                            <h3>Lead Generation</h3>
                                            <p>Expand your reach with our lead generation mastery. We connect you with the right audience, transforming prospects into profits.</p>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 mb-4">
                                        <div className="bottomServiceContent min-width-100">
                                            <h3>Sale Automation</h3>
                                            <p>Enhance sales dynamics with automation. Our smart systems free your team to excel at closing deals. </p>&nbsp;<br></br>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 mb-4">
                                        <div className="bottomServiceContent min-width-100">
                                            <h3>Marketing Optimization</h3>
                                            <p>Optimize your marketing with our bespoke strategies. Stand out in the marketplace as we fine-tune your campaigns for peak performance.</p>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 mb-4">
                                        <div className="bottomServiceContent min-width-100">
                                            <h3>Customer Insights</h3>
                                            <p>Decode customer behavior with our analytical insights. Our data-driven approach equips you with the knowledge to cater precisely to your audience.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-12 col-md-12">
                                <img src="/images/dont-miss.png" alt=""/>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="contentRich">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-12 pr-5">
                                <div className="contentRichContent">
                                    <div className="sectionHeading mb-5 text-center">
                                        <h2>We help and solve your<br/>
                                        business problem</h2>
                                        <p className="para">Problem-solving is our forte. Partner with Citadel Advantage for enduring solutions that drive your business forward.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row service_box style_three dark_color">
                            <div className="col-md-3 col-12">
                                <div className="service_content p-5 hoverEffect">
                                    <img src="/images/circle-group-2.svg" alt=""/>
                                    <h3>Bespoke Software</h3>
                                    <p>Your vision, our technology.</p>
                                </div>
                            </div>
                            <div className="col-md-3 col-12">
                                <div className="service_content p-5 hoverEffect">
                                    <img src="/images/circle-group-2.svg" alt=""/>
                                    <h3>Process Excellence</h3>
                                    <p>Efficiency redefined.</p>
                                </div>
                            </div>
                            <div className="col-md-3 col-12">
                                <div className="service_content p-5 hoverEffect">
                                    <img src="/images/circle-group-2.svg" alt=""/>
                                    <h3>Strategic Insights</h3>
                                    <p>Data that drives decisions.</p>
                                </div>
                            </div>
                            <div className="col-md-3 col-12">
                                <div className="service_content p-5 hoverEffect">
                                    <img src="/images/circle-group-2.svg" alt=""/>
                                    <h3>Creative Development</h3>
                                    <p>Where innovation meets impact.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="bottomCon">
                    <div className="container">
                        <div className="sectionHeading text-center">
                            <h2 className="mb-4">Boost your business with our innovative outsourcing services. Elevate growth and productivity in a community designed for forward-thinkers. Partner for competitive success.</h2>
                            <Link to='/contact-us' className="colorBtn wideBtn">Send Your Requirement</Link>
                        </div>
                    </div>
                </section>
            </HelmetProvider>
            {/* <Testimonial /> */}
        </React.Fragment>
    )
};

export default AboutCitadelAdvantage;