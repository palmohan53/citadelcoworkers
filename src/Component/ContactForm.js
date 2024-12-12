import React, {useEffect} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faTrophy } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const ContactForm = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return(
        <React.Fragment>
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
};

export default ContactForm;