import React, {useEffect} from "react";
import { Link } from 'react-router-dom';
import servicesContent from '../Content/services.json';
import whyChooseContent from '../Content/whyChoose.json';

const Services = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return(
        <React.Fragment>
        <section className="innerBanner">
            <img src="images/pexels-hillaryfox-1595385.jpg" alt=""/>
            <h1>Services</h1>
            <div className="bannerOvelay"></div>
        </section>
        <section className="explore" id="servicesSec">
            <div className="container">
                <div className="row align-items-center mb-3">
                    <div className="col-md-6 col-12">
                        <div className="sectionHeading">
                            <h3>Explore</h3>
                            <h2>Our Services</h2>
                        </div>
                    </div>
                    <div className="col-md-6 col-12">
                        <p className="m-0 para">{servicesContent.paragraph[0].body}</p>
                    </div>
                </div>
                <div className="row mt-5">
                    {
                        servicesContent.services.map((data, index)=>{
                            return(
                                <div className="col-lg-4 col-md-6 col-12" key={index}>
                                    <div className="colorBx">
                                        <React.Fragment>
                                            <img src={data.imageUrl} alt="" />
                                            <h3>{data.title}</h3>
                                            <p>{data.body}</p>
                                            <div className="text-end">
                                                <Link to="/services" className="colorBtn">Explore </Link>
                                            </div>
                                        </React.Fragment>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
        <section className="whyUs">
            <div className="container">
                {/* <div className="sectionHeading">
                    <h3>Why</h3>
                    <h2>Choose Us</h2>
                </div> */}
                <div className="row align-items-center">
                    <div className="col-md-5 col-12">
                        <img src="images/why-us.png" alt="" className="whyUsThumb"/>
                    </div>
                    <div className="col-md-7 col-12 ps-5">
                        <div className="row">
                            {
                                whyChooseContent.map((data, index)=>{
                                    return(
                                        <div className="col-md-6 col-12 mb-4" key={index}>
                                            <div className="whyUsBx">
                                                <div className="text-end">
                                                    <img src={data.imageUrl} alt=""/>
                                                </div>
                                                <h3>{data.title}</h3>
                                                <p>{data.body}</p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </React.Fragment>
    )
};

export default Services;