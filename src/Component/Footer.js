import React from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faXTwitter, faLinkedinIn, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <>
            <footer className="footer py-5">
                <div className="container">
                    <div className="row gy-4 justify-content-between">
                        {/* Logo and Description */}
                        <div className="col-md-4 col-12">
                            <div className="footerLinks footerLogoBx">
                                <div className="logo-wrapper" style={{ width: '180px', height: '60px', overflow: 'hidden' }}>
                                    <Link to="/">
                                        <img 
                                            src="/images/logo-new-white.png" 
                                            alt="Citadel Coworkers Logo" 
                                            width="180" 
                                            height="60" 
                                            style={{ display: 'block', width: '100%', height: 'auto' }}
                                            loading="eager"
                                            decoding="async"
                                        />
                                    </Link>
                                </div>
                                <div className="content-wrapper mt-3">
                                    <p>
                                        Boost your business with our innovative outsourcing services. 
                                        Elevate growth and productivity in a community designed for forward-thinkers.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Why Citadel */}
                        <div className="col-md-2 col-6">
                            <div className="footerLinks mb-4">
                                <h5 className="footerHeading">Why Citadel Coworkers</h5>
                                <ul className="unorderList">
                                    <li><Link to="/about-citadel-advantage">Citadel Advantage</Link></li>
                                    <li><Link to="/how-does-citadel-works">How Does Citadel Works</Link></li>
                                    <li><Link to="/offshore">Your Offshore Office in India</Link></li>
                                    <li><Link to="/data-security">Data Security at Citadel</Link></li>
                                </ul>
                            </div>
                        </div>

                        {/* Policies */}
                        <div className="col-md-2 col-6">
                            <div className="footerLinks mb-4">
                                <h5 className="footerHeading">Policy</h5>
                                <ul className="unorderList">
                                    <li><Link to="/refund-policy">Refund Policy</Link></li>
                                    <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                                    <li><Link to="/cookie-policy">Cookie Policy</Link></li>
                                    <li><Link to="/citadel-coworkers-user-agreement">User Agreement</Link></li>
                                </ul>
                            </div>
                        </div>

                        {/* Contact */}
                        <div className="col-md-3 col-12">
                            <div className="footerLinks">
                                <h5 className="footerHeading">Get In Touch</h5>
                                <div className="mb-3">
                                    <small className="footerSmlHeading">Location</small>
                                    <p className="mb-1">HN – 59 Sector -62 Noida 201309</p>
                                </div>
                                <div className="mb-2">
                                    <small className="footerSmlHeading">Phone</small><br/>
                                    <a href="tel:+16465830053">+1 (646) -583-0053</a>
                                </div>
                                <div>
                                    <small className="footerSmlHeading">Mail Us</small><br/>
                                    <a href="mailto:sales@citadelcoworkers.com">sales@citadelcoworkers.com</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            {/* Copyright */}
            <div className="copyright py-3 border-top">
                <div className="container">
                    <div className="row align-items-center gy-2">
                        <div className="col-lg-6 text-center text-lg-start">
                            <small>
                                Copyright © 2009-2025. All Rights Reserved |
                                Content belongs to Citadel Coworkers LLP & Virtual Assistant 24x7 LLC USA.
                            </small>
                        </div>
                        <div className="col-lg-6">
                            <ul className="listInline d-flex justify-content-center justify-content-lg-end gap-3 m-0 p-0">
                                <li style={{ width: 32, height: 32 }}>
                                    <a href="https://www.facebook.com/citadelcoworkers" target="_blank" rel="noreferrer">
                                        <FontAwesomeIcon icon={faFacebookF} size="lg" />
                                    </a>
                                </li>
                                <li style={{ width: 32, height: 32 }}>
                                    <a href="https://twitter.com/citadelcoworker" target="_blank" rel="noreferrer">
                                        <FontAwesomeIcon icon={faXTwitter} size="lg" />
                                    </a>
                                </li>
                                <li style={{ width: 32, height: 32 }}>
                                    <a href="https://www.linkedin.com/company/96461265/admin/feed/posts/" target="_blank" rel="noreferrer">
                                        <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
                                    </a>
                                </li>
                                <li style={{ width: 32, height: 32 }}>
                                    <a href="https://www.youtube.com/@CitadelCoworkers" target="_blank" rel="noreferrer">
                                        <FontAwesomeIcon icon={faYoutube} size="lg" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;