import React, {useEffect} from "react";


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
        <section>
            <div className="container">
                <div className="row justify-content-center">
                    <div class="contactBx col-lg-8 col-12">
                        <h3 className="text-center mb-4">Get in Touch With Us</h3>
                        <div class="form-group">
                            <input type="text" name="" id="" class="form-control" placeholder="Full Name*" />
                        </div>
                        <div class="form-group">
                            <input type="email" name="" id="" class="form-control" placeholder="Email*" />
                        </div>
                        <div class="form-group">
                            <input type="text" name="" id="" class="form-control" placeholder="Phone*" />
                        </div>
                        {/* <div class="form-group">
                            <input type="text" name="" id="" class="form-control" placeholder="Subject*" />
                        </div> */}
                        <div class="form-group">
                            <textarea name="" id="" class="form-control" placeholder="Your message*" rows="4"></textarea>
                        </div>
                        <div class="form-group">
                            <button class="colorBtn fullWidth justify-content-center">Send Message</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </React.Fragment>
    )
};

export default Contact;