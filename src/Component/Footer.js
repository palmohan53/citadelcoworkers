import React,{useEffect, useState} from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faXTwitter, faLinkedinIn, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const [footerHide, setFooterHide] = useState('d-none');
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY < 300) {
                setFooterHide('');
            } else {
                setFooterHide('');
            }
        });
    }, [])
    return (
        <React.Fragment>
            <footer className={`footer ${footerHide}`}>
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-md-4 col-12">
                            <div className="footerLinks footerLogoBx">
                                <div className="logo-wrapper">
                                    <img 
                                        src="/images/logo-new-white.png" 
                                        alt="Citadel Coworkers Logo" 
                                        width="180"
                                        height="60"
                                        className="logo-img"
                                        loading="eager"
                                        decoding="async"
                                    />
                                </div>
                                <div className="content-wrapper">
                                    <p>Boost your business with our innovative outsourcing services. Elevate growth and productivity in a community designed for forward-thinkers.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-2 col-12">
                            <div className="footerLinks mb-4">
                                <div className="footerHeading">Why Citadel Coworkers</div>
                                <ul className="unorderList">
                                    <li><Link to="/about-citadel-advantage">Citadel Advantage</Link></li>
                                    <li><Link to="/how-does-citadel-works">How Does Citadel Works</Link></li>
                                    <li><Link to="/offshore">Your Offshore Office in India</Link></li>
                                    <li><Link to="/data-security">Data Security at Citadel</Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-md-2 col-12">
                            <div className="footerLinks mb-4">
                                <div className="footerHeading">Policy</div>
                                <ul className="unorderList">
                                    <li><Link to="/refund-policy">Refund Policy</Link></li>
                                    <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                                    <li><Link to="/cookie-policy">Cookie Policy</Link></li>
                                    <li><Link to="/citadel-coworkers-user-agreement">User Agreement</Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-md-3 col-12 ftTouch">
                            <div className="footerLinks">
                                <div className="footerHeading">Get In Touch</div>
                                <div className="d-block mb-4">
                                    <div className="footerSmlHeading">Location</div>
                                    <p>HN – 59 Sector -62 Noida 201309</p>
                                </div>
                                <div className="bottom">
                                    <div className="footerSmlHeading">Contact</div>
                                    <div className="con_content">
                                        <div className="spt">Phone:</div>
                                        <a href="tel:+16465830053">+1 (646) -583-0053</a>
                                    </div>
                                    <div className="con_content">
                                        <div className="spt">Mail Us:</div>
                                        <a href="mailto:sales@citadelcoworkers.com">sales@citadelcoworkers.com</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            <div className={`copyright ${footerHide}`}>
                <div className="container">
                    <div className="row d-flex justify-content-between align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="footer_copy_content">
                                Copyright © 2009-2025. All Rights Reserved |
                                All content on this website belongs to Citadel Coworkers LLP & Virtual Assistant 24x7 LLC USA and is copyright protected.
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="footer_copy_content_right">
                                <div className="social_media_v_one">
                                    <ul className="listInline justify-content-end">
                                        <li>
                                            <a href="https://www.facebook.com/citadelcoworkers" target="_blank" rel="noreferrer">
                                                <FontAwesomeIcon icon={faFacebookF} size="lg" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://twitter.com/citadelcoworker" target="_blank" rel="noreferrer">
                                                <FontAwesomeIcon icon={faXTwitter} size="lg" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.linkedin.com/company/96461265/admin/feed/posts/" target="_blank" rel="noreferrer">
                                                <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.youtube.com/@CitadelCoworkers" target="_blank" rel="noreferrer">
                                                <FontAwesomeIcon icon={faYoutube} size="lg" />
                                            </a>
                                        </li>
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