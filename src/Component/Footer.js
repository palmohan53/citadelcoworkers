import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return(
        <React.Fragment>
            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-12 pe-5">
                            <div className="footerLinks mb-4">
                                <div className="logo mb-2">
                                    <a href="/">
                                        <img src="/images/logo-new-white.png" alt=""/>
                                    </a>
                                </div>
                                <div className="content_in_r mt-4">
                                    <p> Boost your business with our innovative outsourcing services. Elevate growth and productivity in a community designed for forward-thinkers. Partner for competitive success.</p>

                                </div>
                            </div>
                        </div>
                        
                        <div className="col">
                            <div className="footerLinks mb-4">
                                <h3>Why Citadel Coworkers</h3>
                                <ul className="unorderList">
                                    <li><a href="/">Citadel Advantage</a></li>
                                    <li><a href="/">How Does Citadel Works</a></li>
                                    <li><a href="/">Your Offshore Office in India</a></li>
                                    <li><a href="/">Data Security at Citadel</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col">
                            <div className="footerLinks mb-4">
                                <h3>Policy</h3>
                                <ul className="unorderList">
                                    <li><a href="/">Refund Policy</a></li>
                                    <li><a href="/">Privacy Policy</a></li>
                                    <li><a href="/">Cookie Policy</a></li>
                                    <li><a href="/">User Agreement</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3 col-12 ftTouch">
                            <div className="footerLinks">
                                <h3>Get In Touch</h3>
                                <div className="d-block mb-4">
                                    <h6>Location</h6>
                                    <p>HN – 59 Sector -62 Noida 201309</p>
                                </div>
                                <div className="bottom">
                            <h6> Contact</h6>
                            <div className="con_content">
                                <h5> Phone :</h5>
                                <a href="tel:+1 (646) -583-0053"> +1 (646) -583-0053</a>
                            </div>
                            <div className="con_content">
                                <h5> Mail Us :</h5>
                                <a href="tel:sales@citadelcoworkers.com"> sales@citadelcoworkers.com</a>
                            </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="copyright">
                <div className="container">
                    <div className="row d-flex justify-content-between align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="footer_copy_content">
                        Copyright © 2009-2025. All Rights Reserved | All content on this website belongs to Citadel Coworkers LLP & Virtual Assistant 24x7 LLC USA and is copyright protected. All client agreements shall be through Citadel Coworkers LLP, India / Virtual Assistant 24x7 LLC, USA.'
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="footer_copy_content_right">
                            <div className="social_media_v_one">
                                <ul className="listInline justify-content-end">
                                    <li><a href="/"><FontAwesomeIcon icon={faFacebookF} /></a></li>
                                    <li><a href="/"><FontAwesomeIcon icon={faTwitter} /></a></li>
                                    <li><a href="/"><FontAwesomeIcon icon={faInstagram} /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Footer;