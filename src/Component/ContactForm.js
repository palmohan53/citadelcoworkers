import React, {useEffect, useState} from "react";
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
// import { Carousel } from 'react-responsive-carousel';
import API_HOST from "../config/APIHost";
import API_ENDPOINTS from "../config/APIEndPoints";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useNavigate } from "react-router-dom";

const ContactForm = ({ buttonText = "Start Your Project" }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone_number: '',
        website: '',
        company_name: '',
        description: ''
    });
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [videoPopup, setVideoPopup] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    const handleVideoPopup = () => {
        setVideoPopup(!videoPopup);
    };
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage('');

        try {
            const response = await axios.post(`${API_HOST}${API_ENDPOINTS.contactUs}`, formData);
               // ✅ Redirect only after successful API response
  navigate("/thank-you", { state: { fromForm: true } });
            setMessage('Thank you for your submission!');
            // Reset form
            setFormData({
                name: '',
                email: '',
                phone_number: '',
                website: '',
                company_name: '',
                description: ''
            });
            console.log('Response:', response);
        } catch (error) {
            setMessage('Something went wrong. Please try again.');
            console.error('Error:', error);
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return(
        <React.Fragment>
<section className="Form-section-new">
  <div className="container">
<div className="form-flex-d">
    <div className="hero-left">
      <span className="hero-tag"> 1 WEEK FREE TRIAL</span>

      <h1>
        Build Your Team With
        <span class="word-slider">
          <span>
              <b>Virtual Assistants</b>
            <b>Consultants</b>
            <b>Designers</b>
            <b>Developers</b>
            <b>Marketers</b>
            <b>Sales Experts</b>


              <b>Virtual Assistants</b>
            <b>Consultants</b>
            <b>Designers</b>
            <b>Developers</b>
            <b>Marketers</b>
            <b>Sales Experts</b>
          </span>
        </span>
      </h1>

      <p>
Every professional screened, tested, and matched to fit your team's exact needs
      </p>
<div className="pointers-form">
    <ul>
        <li>
            <span><svg width="14" height="14" viewBox="0 0 24 24" fill="none">
  <path d="M20 6L9 17L4 12" stroke="currentColor" stroke-width="2"/>
</svg></span> 120+ Industry Domains Served
        </li>

         <li>
            <span><svg width="14" height="14" viewBox="0 0 24 24" fill="none">
  <path d="M20 6L9 17L4 12" stroke="currentColor" stroke-width="2"/>
</svg></span> Free Replacement Guarantee
        </li>


         <li>
            <span><svg width="14" height="14" viewBox="0 0 24 24" fill="none">
  <path d="M20 6L9 17L4 12" stroke="currentColor" stroke-width="2"/>
</svg></span> 24/7 Real-Time Monitoring
        </li>

         <li>
            <span><svg width="14" height="14" viewBox="0 0 24 24" fill="none">
  <path d="M20 6L9 17L4 12" stroke="currentColor" stroke-width="2"/>
</svg></span> Time-Zone Aligned Coworkers
        </li>
    </ul>
</div>
   <div class="benefits-box"><div class="benefit-item">
    <span class="check-icon">
      <img src="./images/nda1.webp"></img>
            </span><div><h4>  <b>NDA-Signed</b><br></br>
    <span>From Day One</span> </h4></div></div>
	
	<div class="benefit-item">
			<span class="check-icon"><img src="./images/badge.webp"></img></span><div><h4><b>ISO 27001</b><br></br>
    <span>Certified</span></h4></div></div>
			
			
			<div class="benefit-item"><span class="check-icon"><img src="./images/star.webp"></img></span><div><h4><b>Trustpilot 4.8/5</b><br></br> <span> 100+ Businesses</span></h4></div></div>

			
			
			</div>
    </div>

    <div class="hero-right">
      <div class="form-cardn">
             <div className="contactForm">
                                <h2>Share Your Requirement — We’ll Take it From Here</h2>
                                <p>Send us the details and our team will get back with the best strategy to move forward.
</p>
                               
                                <ul className="listInline">
                                    <li>
                                        <a href="tel:+19294707990"><FontAwesomeIcon icon={faPhone} /> Book a Call</a>
                                    </li>
                                    <li>
                                        <a href="mailto:sales@citadelcoworkers.com"><FontAwesomeIcon icon={faEnvelope} /> Email Us</a>
                                    </li>
                                    <li>
                                        <a href="https://wa.me/9891548011" style={{'color':'#5dcd84', 'borderColor': '#5dcd84'}}><FontAwesomeIcon icon={faWhatsapp} /> Whatsapp</a>
                                    </li>
                                </ul>

                                <div className="formInr">
                                    <form onSubmit={handleSubmit}>
                                        
                                        <div className="row">
                                            {message && (
                                                <div className="col-12">
                                                    <div className={`alert ${message.includes('error') ? 'alert-danger' : 'alert-success'}`}>
                                                        {message}
                                                    </div>
                                                </div>
                                            )}
                                            <div className="col-md-6 col-12">
                                                <div className="form-group">
                                                    <input 
                                                        type="text" 
                                                        name="name" 
                                                        className="form-control" 
                                                        placeholder="Name"
                                                        value={formData.name}
                                                        onChange={handleChange}
                                                        required 
                                                    /> 
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-12">
                                                <div className="form-group">
                                                    <input 
                                                        type="email" 
                                                        name="email" 
                                                        className="form-control" 
                                                        placeholder="Email"
                                                        value={formData.email}
                                                        onChange={handleChange}
                                                        required
                                                    /> 
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-12">
                                                <div className="form-group">
                                                    <input 
                                                        type="tel" 
                                                        name="phone_number" 
                                                        className="form-control" 
                                                        placeholder="Phone Number"
                                                        value={formData.phone_number}
                                                        onChange={handleChange}
                                                        required
                                                    /> 
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-12">
                                                <div className="form-group">
                                                    <input 
                                                        type="text" 
                                                        name="company_name" 
                                                        className="form-control" 
                                                        placeholder="Company Name"
                                                        value={formData.company_name}
                                                        onChange={handleChange}
                                                        required
                                                    /> 
                                                </div>
                                            </div>
                                            <div className="col-md-12 col-12">
                                                <div className="form-group">
                                                    <textarea 
                                                        name="description" 
                                                        className="form-control" 
                                                        rows={5} 
                                                        placeholder="Share your requirement"
                                                        value={formData.description}
                                                        onChange={handleChange}
                                                        required
                                                    ></textarea>
                                                </div>
                                            </div>
                                            
                                            <div className="d-flex mt-3 justify-content-center">
                                                <button 
                                                    type="submit" 
                                                    className="colorBtn wideBtn"
                                                    disabled={loading}
                                                >
                                                      {loading ? "Submitting..." : buttonText}
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>

      </div>
    </div>

  </div>  </div>
</section>




            {videoPopup && <div className="popup">
                <div className="popupContent">
                    <div className="popupClose" onClick={handleVideoPopup}>
                        <img src="/images/close.png" alt="close" />
                    </div>
                    <div className="popupContentInr">
                        <iframe width="100%" height="315" src="/images/clinet.mp4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                </div>
            </div>}
        </React.Fragment>
    )
};

export default ContactForm;