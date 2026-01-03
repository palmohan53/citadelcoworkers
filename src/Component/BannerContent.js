import React from "react";
import { Link } from 'react-router-dom';

const BannerContent = () => {
    return(
        <>
            <h1 className="banner-title">
                <b>Hire Virtual Employees From India</b>
            </h1>
            <h4 
                className="banner-subtitle"
              
            >
                Work with India's top 3% of remote talent in finance, tech, design, and support. Handpicked experts. No hiring hassle.
            </h4>
            <h5 className="banner-pricing">
                Starts from <span className="greenText">$5 per hour</span> — Start your free trial today.
            </h5>
            <Link to="/contact-us" className="colorBtn wideBtn">
                Hire Remote Talent Now
            </Link>
        </>
    )
}

export default BannerContent;