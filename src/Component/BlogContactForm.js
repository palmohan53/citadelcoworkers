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

const BlogContactForm = ({ buttonText = "Start Your Project" }) => {
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
            <section className="getInTouch">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12 col-12">
                            <div className="contactForm">
                                <h2>Share Your Requirement — We’ll Take it From Here</h2>
                            
                               
                            

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
                                            <div className="col-md-12 col-12">
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
                                            <div className="col-md-12 col-12">
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
                                            <div className="col-md-12 col-12">
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
                                            <div className="col-md-12 col-12">
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
                </div>
            </section>


         
        </React.Fragment>
    )
};

export default BlogContactForm;