import React,{useEffect} from "react";
import aboutContent from '../Content/about.json';

const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return(
        <React.Fragment>
            <section className="innerBanner">
                <img src="/images/inr-banner.jpg" alt=""/>
                <div className="innerBannerContent">
                    <h1>About Us</h1>
                    <p>The Toptal Design Blog is a hub for advanced design studies by professional designers in the Toptal network on all facets of digital design, ranging from detailed design tutorials to in-depth coverage of new design trends, techniques, and technologies.</p>
                </div>
                <div className="bannerOvelay"></div>
            </section>
            <section className="aboutUs mb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5">
                            <div className="aboutUsThumb">
                                <img src="images/about-thumb.png" alt=""/>
                            </div>
                        </div>
                        <div className="col-12 col-md-7 pt-5 pr-5">
                            <div className="aboutUsContent">
                                {
                                    aboutContent.about.map((data, index)=>{
                                        return(
                                            <React.Fragment key={index}>
                                                <div className="sectionHeading mb-3">
                                                    <h3>{data.topTitle}</h3>
                                                    <h2>{data.title}</h2>
                                                </div>
                                                <p className="para">{data.body}</p>
                                            </React.Fragment>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-12">
                            <div className="sectionHeading">
                                <h2 className="text-center mx-4">Our Journey</h2>
                            </div>
                            <p>{aboutContent.paragraph[0].body}</p>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
};

export default About;