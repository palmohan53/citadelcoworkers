
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faStar} from '@fortawesome/free-solid-svg-icons';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.compat.css";

const Testimonial = () => {
    return(
        <section className="testimonial">
            <div className="container">
                <div className="row align-items-center mb-3">
                    <div className="col-md-12 col-12">
                        <div className="sectionHeading text-center">
                            <p>Trusted by 200+ Clients</p>
                            <h2>Our Clients' Success Stories</h2>
                        </div>
                    </div>
                </div>
                <ScrollAnimation animateIn="fadeIn">
                    <div className="row mt-5">
                        <div className="col-md-4 col-12">
                            <div className="contentBx">
                                <FontAwesomeIcon icon={faQuoteLeft} />
                                <h3>I have been working with Toptal...</h3>
                                <p>I have been working with Toptal engineers for several years now. They have all been exceptionally talented, very professional, highly productive, great team players, good communicators, and willing to go above and beyond. I have relied on them as key team players and they have never felt like “outsiders”. Toptal as an organization has been professional and easy to work with.</p>
                                <ul className="listInline">
                                    <li><FontAwesomeIcon icon={faStar} /></li>
                                    <li><FontAwesomeIcon icon={faStar} /></li>
                                    <li><FontAwesomeIcon icon={faStar} /></li>
                                    <li><FontAwesomeIcon icon={faStar} /></li>
                                    <li><FontAwesomeIcon icon={faStar} /></li>
                                </ul>
                                <h4>Ian Stokes-Rees</h4>
                                <h6>Partner</h6>
                            </div>
                        </div>
                        <div className="col-md-4 col-12">
                            <div className="contentBx">
                                <FontAwesomeIcon icon={faQuoteLeft} />
                                <h3>I have been working with Toptal...</h3>
                                <p>I have been working with Toptal engineers for several years now. They have all been exceptionally talented, very professional, highly productive, great team players, good communicators, and willing to go above and beyond. I have relied on them as key team players and they have never felt like “outsiders”. Toptal as an organization has been professional and easy to work with.</p>
                                <ul className="listInline">
                                    <li><FontAwesomeIcon icon={faStar} /></li>
                                    <li><FontAwesomeIcon icon={faStar} /></li>
                                    <li><FontAwesomeIcon icon={faStar} /></li>
                                    <li><FontAwesomeIcon icon={faStar} /></li>
                                    <li><FontAwesomeIcon icon={faStar} /></li>
                                </ul>
                                <h4>Ian Stokes-Rees</h4>
                                <h6>Partner</h6>
                            </div>
                        </div>
                        <div className="col-md-4 col-12">
                            <div className="contentBx">
                                <FontAwesomeIcon icon={faQuoteLeft} />
                                <h3>I have been working with Toptal...</h3>
                                <p>I have been working with Toptal engineers for several years now. They have all been exceptionally talented, very professional, highly productive, great team players, good communicators, and willing to go above and beyond. I have relied on them as key team players and they have never felt like “outsiders”. Toptal as an organization has been professional and easy to work with.</p>
                                <ul className="listInline">
                                    <li><FontAwesomeIcon icon={faStar} /></li>
                                    <li><FontAwesomeIcon icon={faStar} /></li>
                                    <li><FontAwesomeIcon icon={faStar} /></li>
                                    <li><FontAwesomeIcon icon={faStar} /></li>
                                    <li><FontAwesomeIcon icon={faStar} /></li>
                                </ul>
                                <h4>Ian Stokes-Rees</h4>
                                <h6>Partner</h6>
                            </div>
                        </div>
                    </div>
                </ScrollAnimation>
            </div>
        </section>
    )
};

export default Testimonial;