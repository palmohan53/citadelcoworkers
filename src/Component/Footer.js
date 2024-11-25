import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return(
        <React.Fragment>
            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-6 pe-5">
                            <div className="footerLinks">
                                <div className="logo mb-2">
                                    <a href="/">
                                        <img src="images/logo2.png" alt=""/>
                                    </a>
                                </div>
                                <div className="content_in_r mt-4">
                                    <p> Duty the obligations of business will frequently occur that pleasure have too repudiated annoyances  endures accepted.</p>

                                </div>
                            </div>
                        </div>
                        
                        <div className="col">
                            <div className="footerLinks">
                                <h3>Policy</h3>
                                <ul className="unorderList">
                                    <li><a href="/">Home</a></li>
                                    <li><a href="/">About Us</a></li>
                                    <li><a href="/">Contact</a></li>
                                    <li><a href="/">Professionals</a></li>
                                    <li><a href="/">Insights</a></li>
                                    <li><a href="/">HR Solutions</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col">
                            <div className="footerLinks">
                                <h3>Information</h3>
                                <ul className="unorderList">
                                    <li><a href="/">Home</a></li>
                                    <li><a href="/">About Us</a></li>
                                    <li><a href="/">Contact</a></li>
                                    <li><a href="/">Professionals</a></li>
                                    <li><a href="/">Insights</a></li>
                                    <li><a href="/">HR Solutions</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3 col-6 ftTouch">
                            <div className="footerLinks">
                                <h3>Get In Touch</h3>
                                <div className="d-block mb-4">
                                    <h6>Location</h6>
                                    <p>280 Dummy State Drive Suite #200 Lancaster, PA 1760</p>
                                </div>
                                <div className="bottom">
                            <h6> Contact</h6>
                            <div className="con_content">
                                <h5> Phone :</h5>
                                <a href="tel:+98 060 712 34"> +91 98 060 712 34</a>
                            </div>
                            <div className="con_content">
                                <h5> Mail Us :</h5>
                                <a href="tel:sendmail@creote.com"> sendmail@ymail.com</a>
                            </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="copyright">
                <div className="container">
                    <div className="row d-flex justify-content-between">
                    <div className="col-lg-6 col-md-12">
                        <div className="footer_copy_content">
                        Copyright © 2024 Citadel Coworkers. All Rights Reserved.
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