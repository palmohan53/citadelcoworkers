import React, {useEffect} from "react";
import ContactForm from "../Component/ContactForm";

const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return(
        <React.Fragment>
            <section className="innerBanner">
                <img src="images/pexels-picjumbo-com-55570-225232.jpg" alt=""/>
                <h1>Contact Us</h1>
                <div className="bannerOvelay"></div>
            </section>
            <ContactForm />
        
        </React.Fragment>
    )
};

export default Contact;