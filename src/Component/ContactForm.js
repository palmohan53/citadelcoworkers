import React, {useEffect} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faWandMagicSparkles, faHourglass, faHeadset, faUsersViewfinder } from '@fortawesome/free-solid-svg-icons';
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
                                                <input type="text" name="name" className="form-control" id="" placeholder="Name" /> 
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-12">
                                            <div className="form-group">
                                                <input type="email" name="email" className="form-control" id="" placeholder="Email"/> 
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 col-12">
                                            <div className="form-group">
                                                <input type="number" name="number" className="form-control" id="" placeholder="Phone Number"/> 
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-12">
                                            <div className="form-group">
                                                <input type="text" name="Country" className="form-control" id="" placeholder="Website"/> 
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 col-12">
                                            <div className="form-group">
                                                <select name="duration" className="form-control" id="">
                                                    <option value="Project Duration">Project Duration</option>
                                                    <option value="Less then one month">Less then one month</option>
                                                    <option value="1 to 3 months">1 to 3 months</option>
                                                    <option value="3 to 6 months">3 to 6 months</option>
                                                    <option value="6 to 12 months">6 to 12 months</option>
                                                    <option value="more then 1 year">more then 1 year</option>
                                                    <option value="Not sure">Not sure</option>
                                                </select> 
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-12">
                                            <div className="form-group">
                                                <input type="text" name="Country" className="form-control" id="" placeholder="Company Name"/> 
                                            </div>
                                        </div>
                                        <div className="col-md-12 col-12">
                                            <div className="form-group">
                                                <textarea name="" className="form-control" rows={5} placeholder="Share your requirement"></textarea>
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
                                <h3>Why Choose Us</h3>
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
                                {/* <div className="clients">
                                    <img src="images/cont-cl01.svg" alt="" />
                                    <img src="images/cont-cl01.svg" alt="" />
                                    <img src="images/cont-cl01.svg" alt="" />
                                    <img src="images/cont-cl01.svg" alt="" />
                                    <img src="images/cont-cl01.svg" alt="" />
                                    <img src="images/cont-cl01.svg" alt="" />
                                    <img src="images/cont-cl01.svg" alt="" />
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
};

export default ContactForm;