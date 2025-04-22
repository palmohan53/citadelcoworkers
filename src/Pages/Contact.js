import React, {useEffect} from "react";
import ContactForm from "../Component/ContactForm";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { faMapLocationDot, faBusinessTime, faHeadset, faWandMagicSparkles, faHourglass, faUsersViewfinder} from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return(
        <React.Fragment>
            <HelmetProvider>
                <Helmet>
                    <title>Contact Us - Citadel CoWorkers™</title>
                    <meta name="description" content="We&#039;re a leader in IT and virtual assistant solutions tailored to enhance your business operations. Partner with Citadel to elevate your business with cost-effective and exceptional customer service." />
                    <link rel="canonical" href={window.location.href} />
                </Helmet>
            <section className="innerBanner">
                {/* <img src="/images/contact-banner.jpg" alt=""/> */}
                <div className="innerBannerContent">
                    <h1>Contact Us</h1>
                </div>
                <div className="bannerOvelay"></div>
            </section>
            <ContactForm />
            <section className="contactArea">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-7 col-12">
                            <div className="contentContent">
                                <div className="sectionHeading min-width-100 mb-4">
                                    <h2>Why Choose Us</h2>
                                </div>
                                <div className="detWrp">
                                    <div className="detIco"><FontAwesomeIcon icon={faHeadset} /></div>
                                    <div className="detName">
                                        <h4>Personalized Virtual Assistance</h4>
                                        <p>Discover tailored support from experienced virtual assistants. Enhance productivity and focus on your business growth.</p>
                                    </div>
                                </div>
                                <div className="detWrp">
                                    <div className="detIco"><FontAwesomeIcon icon={faWandMagicSparkles} /></div>
                                    <div className="detName">
                                        <h4>Flexible Service Options</h4>
                                        <p>With our adaptable service plans, including month-to-month contracts, you get the help you need without long-term commitments.</p>
                                    </div>
                                </div>
                                <div className="detWrp">
                                    <div className="detIco"><FontAwesomeIcon icon={faUsersViewfinder} /></div>
                                    <div className="detName">
                                        <h4>Diverse Skill Set</h4>
                                        <p>Whether it's administrative tasks, customer support, or digital marketing, our assistants have the expertise you seek.</p>
                                    </div>
                                </div>
                                <div className="detWrp">
                                    <div className="detIco"><FontAwesomeIcon icon={faHourglass} /></div>
                                    <div className="detName">
                                        <h4>Reliable Support Across Time Zones</h4>
                                        <p>Our Indian virtual assistants are available round the clock, ensuring that your business receives uninterrupted assistance.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 col-12 bg_light_1 contactPageContent">
                            <div className="contectContent">
                                <div className="d-flex gap-4">
                                    <FontAwesomeIcon icon={faMapLocationDot} />
                                    <div className="d-block">
                                        <h3>Location</h3>
                                        <p>Headquarter<br/>HN – 59 Sector -62 Noida 201309</p>
                                    </div>
                                </div>
                            </div>
                            <div className="contectContent">
                                <div className="d-flex gap-4">
                                    <FontAwesomeIcon icon={faHeadset} />
                                    <div className="d-block">
                                        <h3>Chat with Team</h3>
                                        <p>Call Us 24×7: <a href="tel:+1 (646) -583-0053">+1 (646) -583-0053</a></p>
                                        <p>Write Us <a href="mailto:sales@citadelcoworkers.com">sales@citadelcoworkers.com</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="contectContent">
                                <div className="d-flex gap-4">
                                    <FontAwesomeIcon icon={faBusinessTime} />
                                    <div className="d-block">
                                        <h3>Get In Touch</h3>
                                        <p>Monday-Friday: 8:00 to 6:00<br/>
                                        Close on Saturday, Sunday</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className="col-lg-4 col-12">
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
                        </div>*/}
                    </div>
                    <div className="row mt-5">
                        <div className="col-lg-7 col-12">
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
                            <div className="col-lg-5 col-12">
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
            </HelmetProvider>
        </React.Fragment>
    )
};

export default Contact;