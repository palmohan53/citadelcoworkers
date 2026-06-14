import React, { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import API_HOST from "../config/APIHost";
import API_ENDPOINTS from "../config/APIEndPoints";
import { useNavigate } from "react-router-dom";

const ContactFiance = ({ buttonText = "Claim Your Free Trial" }) => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company_name: "",
    description: ""
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [videoPopup, setVideoPopup] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleVideoPopup = () => {
    setVideoPopup(!videoPopup);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setMessage("");

    try {

      const response = await axios.post(
        `${API_HOST}${API_ENDPOINTS.contactUs}`,
        formData
      );

      navigate("/thank-you", {
        state: { fromForm: true }
      });

      setMessage("Thank you for your submission!");

      setFormData({
        name: "",
        email: "",
        company_name: "",
        description: ""
      });

      console.log("Response:", response);

    } catch (error) {

      setMessage("Something went wrong. Please try again.");
      console.error("Error:", error);

    } finally {

      setLoading(false);

    }
  };

  return (
    <React.Fragment>

      <div className="getInTouch">

        <div className="container">

          <div className="row align-items-center">

            <div className="col-lg-12 col-12">

              <div className="contactForm">
<div className="left-side-heading">
                <h2>
                  Build Your Finance Team
                </h2>

                <p>
                  Send us the details and our team will get back with the best strategy to move forward.
                </p>
</div>
                {/* Contact Buttons */}

             

                {/* Form */}

                <div className="formInr">

                  <form onSubmit={handleSubmit}>

                    <div className="row">

                      {message && (
                        <div className="col-12">
                          <div
                            className={`alert ${
                              message.includes("error")
                                ? "alert-danger"
                                : "alert-success"
                            }`}
                          >
                            {message}
                          </div>
                        </div>
                      )}

                      {/* Name */}

                      <div className="col-md-6 col-12">

                        <div className="form-group">

                          <input
                            type="text"
                            name="name"
                            className="form-control"
                            placeholder="Name *"
                            value={formData.name}
                            onChange={handleChange}
                            required
                          />

                        </div>

                      </div>

                      {/* Email */}

                      <div className="col-md-6 col-12">

                        <div className="form-group">

                          <input
                            type="email"
                            name="email"
                            className="form-control"
                            placeholder="Email *"
                            value={formData.email}
                            onChange={handleChange}
                            required
                          />

                        </div>

                      </div>

                      {/* Company */}

                      <div className="col-md-12 col-12">

                        <div className="form-group">

                          <input
                            type="text"
                            name="company_name"
                            className="form-control"
                            placeholder="Company (Optional)"
                            value={formData.company_name}
                            onChange={handleChange}
                          />

                        </div>

                      </div>

                      {/* Description */}

                      <div className="col-md-12 col-12">

                        <div className="form-group">

                          <textarea
                            name="description"
                            className="form-control"
                            rows={1}
                            placeholder="How can we help? *"
                            value={formData.description}
                            onChange={handleChange}
                            required
                          ></textarea>

                        </div>

                      </div>

                      {/* Submit Button */}

                      <div className="d-flex mt-3 justify-content-center">

                        <button
                          type="submit"
                          className="colorBtn "
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

      </div>

      {/* Video Popup */}

      {videoPopup && (

        <div className="popup">

          <div className="popupContent">

            <div
              className="popupClose"
              onClick={handleVideoPopup}
            >
              <img
                src="/images/close.png"
                alt="close"
              />
            </div>

            <div className="popupContentInr">

              <iframe
                width="100%"
                height="315"
                src="/images/clinet.mp4"
                title="Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>

            </div>

          </div>

        </div>

      )}

    </React.Fragment>
  );
};

export default ContactFiance;