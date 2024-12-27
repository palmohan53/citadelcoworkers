import React, {useEffect} from "react";
import ContactForm from "../Component/ContactForm";

const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return(
        <React.Fragment>
            <section className="innerBanner">
                <img src="/images/contact-banner.jpg" alt=""/>
                <div className="innerBannerContent">
                    <h1>Contact Us</h1>
                    <p>The Toptal Design Blog is a hub for advanced design studies by professional designers in the Toptal network on all facets of digital design, ranging from detailed design tutorials to in-depth coverage of new design trends, techniques, and technologies.</p>
                </div>
                <div className="bannerOvelay"></div>
            </section>
            <ContactForm />
        
        </React.Fragment>
    )
};

export default Contact;