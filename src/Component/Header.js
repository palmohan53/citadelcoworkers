import React, {useState, useEffect} from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faAngleDown } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    const [activeClass, setActiveClass] = useState(false);
    const openToggle = () => setActiveClass(!activeClass);
    const [scrolltopdata, setscrolltopdata] = useState('');

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY < 115) {
                setscrolltopdata('');
            } else {
                setscrolltopdata('scrolled');
            }
        });
    }, [])
    
    return(
        <header className={`mainHeader ${scrolltopdata}`}>
            <nav className="navbar navbar-expand-lg navbar-light" id="mainNav">
                <div className="container">
                    <a className="navbar-brand p-0" href="/">
                        <img src="images/logo.png" alt="" className="colorLogo" />
                        <img src="images/logo2.png" alt="" className="logoWhite" />
                    </a>
                    <button className="navbar-toggler" onClick={openToggle}>
                        <img src="images/toggle.png" alt="" />
                    </button>
                    <div className={activeClass ? "collapse navbar-collapse active" : "collapse navbar-collapse"} id="navbarSupportedContent">
                        <button className="hidden-xs mobile cross-toggler" onClick={openToggle}>
                            <img src="images/close.png" alt="" />
                        </button>
                        <ul className="navbar-nav m-auto">
                            <li className="mobile">
                                <img src="images/logo2.png" alt="" />
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about-us">About Us</Link>
                            </li>
                            <li className="nav-item dropDown">
                                <Link className="nav-link" to="/services">Services</Link>
                                <FontAwesomeIcon icon={faAngleDown} />
                                <ul>
                                    <li><Link className="nav-link" to="/services">Services 1</Link></li>
                                    <li><Link className="nav-link" to="/services">Services 2</Link></li>
                                    <li><Link className="nav-link" to="/services">Services 3</Link></li>
                                    <li><Link className="nav-link" to="/services">Services 4</Link></li>
                                    <li><Link className="nav-link" to="/services">Services 5</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/services">Blog</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact-us">Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="getStarted">
                        <Link className="lineBtn" to="/contact-us">Get Started <FontAwesomeIcon icon={faArrowRight} /></Link>
                    </div>

                </div>
            </nav>
        </header>
    );
}
export default Header;