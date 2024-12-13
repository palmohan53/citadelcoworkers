import React, {useState, useEffect} from "react";
import { NavLink } from 'react-router-dom';
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
                    <NavLink className="navbar-brand p-0" to="/">
                        <img src="/images/logo-new.png" alt="" className="colorLogo" />
                        <img src="/images/logo2.png" alt="" className="logoWhite" />
                    </NavLink>
                    <button className="navbar-toggler" onClick={openToggle}>
                        <img src="images/toggle.png" alt="" />
                    </button>
                    <div className={activeClass ? "collapse navbar-collapse active" : "collapse navbar-collapse"} id="navbarSupportedContent">
                        <button className="hidden-xs mobile cross-toggler" onClick={openToggle}>
                            <img src="images/close.png" alt="" />
                        </button>
                        <ul className="navbar-nav m-auto">
                            <li className="mobile">
                                <img src="/images/logo2.png" alt="" />
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about-us">About Us</NavLink>
                            </li>
                            <li className="nav-item dropDown">
                                <NavLink className="nav-link" to="/services">Services</NavLink>
                                <FontAwesomeIcon icon={faAngleDown} />
                                <ul>
                                    <li><NavLink className="nav-link" to="/services">Services 1</NavLink></li>
                                    <li><NavLink className="nav-link" to="/services">Services 2</NavLink></li>
                                    <li><NavLink className="nav-link" to="/services">Services 3</NavLink></li>
                                    <li><NavLink className="nav-link" to="/services">Services 4</NavLink></li>
                                    <li><NavLink className="nav-link" to="/services">Services 5</NavLink></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/blog">Blog</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact-us">Contact Us</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="getStarted">
                        <NavLink className="lineBtn" to="/contact-us">Get Started <FontAwesomeIcon icon={faArrowRight} /></NavLink>
                    </div>

                </div>
            </nav>
        </header>
    );
}
export default Header;