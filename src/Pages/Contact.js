import React, {useEffect} from "react";
import ContactForm from "../Component/ContactForm";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapLocationDot, faBusinessTime, faHeadset} from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return(
        <React.Fragment>
            <section className="innerBanner">
                <img src="/images/contact-banner.jpg" alt=""/>
                <div className="innerBannerContent">
                    <h1>Contact Us</h1>
                    {/* <p>The Toptal Design Blog is a hub for advanced design studies by professional designers in the Toptal network on all facets of digital design, ranging from detailed design tutorials to in-depth coverage of new design trends, techniques, and technologies.</p> */}
                </div>
                <div className="bannerOvelay"></div>
            </section>
            <ContactForm />
            <section className="contactArea bg_light_1">
                <div className="container">
                    <div className="row align-items-center mb-4">
                        <div className="col-md-12 col-12">
                            <div className="sectionHeading text-center">
                                <h2>Reach out and let's start a conversation!</h2>
                                <p>Forge valuable connections with our team to address your queries, explore customized solutions, or share your thoughts. Reach out today to embark on a journey of success with us.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-12">
                            <div className="contectContent">
                                <h3>Location</h3>
                                <div className="d-flex gap-3">
                                    <FontAwesomeIcon icon={faMapLocationDot} />
                                    <div className="d-block">
                                        <p>Headquarter<br/>HN – 59 Sector -62 Noida 201309</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-12">
                            <div className="contectContent">
                                <h3>Support</h3>
                                <div className="d-flex gap-3">
                                    <FontAwesomeIcon icon={faHeadset} />
                                    <div className="d-block">
                                        <p>Call Us 24×7: <a href="tel:+1 (646) -583-0053">+1 (646) -583-0053</a></p>
                                        <p>Write Us <a href="mailto:sales@citadelcoworkers.com">sales@citadelcoworkers.com</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-12">
                            <div className="contectContent">
                                <h3>Get In Touch</h3>
                                <div className="d-flex gap-3">
                                    <FontAwesomeIcon icon={faBusinessTime} />
                                    <div className="d-block">
                                        <p>Monday-Friday: 8:00 to 6:00<br/>
                                        Close on Saturday, Sunday</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-12">
                            <div className="contectContent">
                                <h3>India</h3>
                                <div className="d-flex gap-3">
                                    <FontAwesomeIcon icon={faMapLocationDot} />
                                    <div className="d-block">
                                        <p>10th Floor, B28, Manaar Tower, <br/>Sector 132, Noida, Uttar Pradesh 201304 🇮🇳</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-12">
                            <div className="contectContent">
                                <h3>USA</h3>
                                <div className="d-flex gap-3">
                                    <FontAwesomeIcon icon={faMapLocationDot} />
                                    <div className="d-block">
                                        <p>USA - 1725 Courtney landing Drive Apt 1207 Charlotte, <br/>NC, 28217 USA 🇺🇸</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
};

export default Contact;