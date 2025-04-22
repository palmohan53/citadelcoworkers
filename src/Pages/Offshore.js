import React,{useEffect} from "react";
import { Link } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faChalkboardUser, faMapLocationDot, faUsersViewfinder } from '@fortawesome/free-solid-svg-icons';
const Offshore = () => {
   
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return(
        <React.Fragment>
            <HelmetProvider>
                <Helmet>
                    <title>Offshore - citadel coworkers</title>
                    <meta name="description" content="Understanding Offshore team Understanding an offshore team means embracing a global perspective where expertise knows no bounds. At Citadel Co-workers, we connect you with a pool of 250 specialized professionals, each dedicated to your business’s growth. With seven years of experience and two offices spanning continents, our collaboration has led to the satisfaction of 650 […]" />
                    <link rel="canonical" href={window.location.href} />
                </Helmet>
                <section className="innerBanner">
                    {/* <img src="/images/inr-banner.jpg" alt=""/> */}
                    <div className="innerBannerContent">
                        <h1>Understanding Offshore team</h1>
                    </div>
                    <div className="bannerOvelay"></div>
                </section>
                <section className="contentRich fontMed">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-12">
                                <div className="bg_light_1 p-5 text-center">
                                    <p className="para m-0">Understanding an offshore team means embracing a global perspective where expertise knows no bounds. At Citadel Co-workers, we connect you with a pool of 250 specialized professionals, each dedicated to your business’s growth. With seven years of experience and two offices spanning continents, our collaboration has led to the satisfaction of 650 clients. Trust in our ability to extend your team’s capabilities beyond borders, offering seamless integration with your local operations. Let’s redefine possibilities together.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="contentRich fontMed mb-0 p-0 minHeightBanner">
                    <img src="/images/offshore.webp" alt="" className="w-100" />
                </section>
                <section className="contentRich fontMed">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-12 pr-5">
                                <div className="p-4 text-center">
                                    <p className="para mb-4">Your Offshore Office in India is your strategic extension, where 250 dedicated specialists collaborate to propel your business forward. With Citadel Co-workers, you gain a partner with seven years of experience and a proven track record of 650 satisfied clients. Our dual offices are not just spaces—they are innovation hubs where your offshore team seamlessly integrates with your operations, ensuring efficiency and excellence. Discover how our Indian office becomes your competitive edge in the global market.
                                    </p>
                                    <Link class="colorBtn wideBtn" to="/contact-us" data-discover="true">Send Your Requirement</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="newSecBottom pt-0">
                    <div class="container">
                        <div class="row service_box style_three dark_color">
                            <div class="col-12 col-md-3">
                                <div class="service_content p-5">
                                    <FontAwesomeIcon icon={faBriefcase} />
                                    <h3>YEARS FIELD EXPERIENCE</h3>
                                </div>
                            </div>
                            <div class="col-12 col-md-3">
                                <div class="service_content p-5">
                                    <FontAwesomeIcon icon={faChalkboardUser} />
                                    <h3>EXPERT INSTRUCTOR</h3>
                                </div>
                            </div>

                            <div class="col-12 col-md-3">
                                <div class="service_content p-5">
                                    <FontAwesomeIcon icon={faMapLocationDot} />
                                    <h3>BRANCHES GLOBALLY</h3>
                                </div>
                            </div>
                            <div class="col-12 col-md-3">
                                <div class="service_content p-5">
                                    <FontAwesomeIcon icon={faUsersViewfinder} />
                                    <h3>SATISFIED CLIENTS</h3>
                                </div>
                            </div>
                        </div>
                        <div class="sectionHeading text-center mt-5 min-width-100">
                            <h2 class="mb-4">Unlock the potential of offshore outsourcing with our skilled professionals, cost-effective solutions, and flexible engagement models. Partner with Citadel for excellence and confidentiality.
                            </h2>
                            <Link class="colorBtn wideBtn" to="/contact-us" data-discover="true">Send Your Requirement</Link>
                        </div>
                    </div>
                </section>

            </HelmetProvider>
            {/* <Testimonial /> */}
        </React.Fragment>
    )
};

export default Offshore;