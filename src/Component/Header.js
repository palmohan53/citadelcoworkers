import React, {useState, useEffect} from "react";
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { useQuery } from "react-query";
import axios from "axios";
import API_HOST from "../config/APIHost";
import API_ENDPOINTS from "../config/APIEndPoints";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Header = () => {
    const [activeClass, setActiveClass] = useState(false);
    const [scrolltopdata, setscrolltopdata] = useState('');
    const [subMenuClass, setSubMenuClass] = useState(false);
    const openToggle = () => {
        setActiveClass(!activeClass);
        setSubMenuClass(false);
    }
    const subMenuToggle = () => {
        setSubMenuClass(!subMenuClass);
    };
    const getServiceList = async () => {
        const response = await axios.get(`${API_HOST}${API_ENDPOINTS.serviceListing}`)
        const data = await response.data?.listing?.reverse();
        return data;
    }
    const { data:serviceMenu } = useQuery("serviceMenu", getServiceList);

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
                    <div className="navbar-brand p-0 gap-3 d-flex">
                        <button className="navbar-toggler" onClick={openToggle}>
                            <img src="/images/toggle.png" alt="" />
                        </button>
                        <NavLink to="/">
                            <img src="/images/logo-new-black.png" alt="" className="colorLogo" />
                        </NavLink>
                    </div>
                    
                    <div className={activeClass ? "collapse navbar-collapse active" : "collapse navbar-collapse"} id="navbarSupportedContent">
                        <button className="hidden-xs mobile cross-toggler" onClick={openToggle}>
                            <img src="/images/close.png" alt="" />
                        </button>
                        <ul className="navbar-nav m-auto">
                            <li className="mobile">
                                <img src="/images/logo-new-black.png" alt="" className="mobile-logo" />
                            </li>
                            <li className="nav-item" onClick={openToggle}>
                                <NavLink className="nav-link" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item" onClick={openToggle}>
                                <NavLink className="nav-link" to="/about-us">About Us</NavLink>
                            </li>
                            <li className="nav-item dropDown">
                                <NavLink className="nav-link" to="/services" onClick={openToggle}>Services</NavLink>
                                <FontAwesomeIcon icon={faAngleDown}  className="mobile" onClick={subMenuToggle}/>
                                <FontAwesomeIcon icon={faAngleDown}  className="desktop"/>
                                <ul className={subMenuClass ? "active" : ""}>
                                    {
                                        serviceMenu && serviceMenu?.map((menu, index)=>{
                                            return(
                                                <li key={index} onClick={()=>openToggle()}><NavLink className="nav-link" to={`/services/${menu.post_name}`}>{menu.post_title}</NavLink></li>
                                            )
                                        })
                                    }
                                </ul>
                            </li>
                            <li className="nav-item" onClick={openToggle}>
                                <NavLink className="nav-link" to="/blog">Blog</NavLink>
                            </li>
                            <li className="nav-item" onClick={openToggle}>
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