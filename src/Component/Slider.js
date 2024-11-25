import React from "react";
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import sliderContent from '../Content/slider.json';

const Slider = () => {
    return(
        <div className="sliderWrp">
            <Carousel autoPlay infiniteLoop preventMovementUntilSwipeScrollTolerance={true}>
                {
                    sliderContent.map((data, index)=>{
                        return(
                            <div className="sliderDiv" key={index}>
                                <div className="sliderOverlay"></div>
                                <img src={data.imageUrl} alt=""/>
                                <div className="container">
                                    <h1>{data.title}</h1>
                                    <h3>{data.body}</h3>
                                    <ul className="listInline">
                                        <li>
                                            <a href="tel:+1 (646) -583-0053" className="lineBtn">EXPLORE</a>
                                        </li>
                                        <li>
                                            <Link to="/contact-us" className="colorBtn">CONTACT US</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        )
                    })
                }
            </Carousel>
        </div>
    )
}

export default Slider;