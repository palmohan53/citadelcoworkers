
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faStar} from '@fortawesome/free-solid-svg-icons';
import "animate.css/animate.compat.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial = ({serviceTestimonial}) => {
    let settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 900,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
    };
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
                <div className="mt-3">
                    <Slider {...settings}>
                        {serviceTestimonial?.data?.listing?.map((data, index)=>{
                            return(
                                <div className="px-3" key={index}>
                                    <div className="contentBx">
                                        <FontAwesomeIcon icon={faQuoteLeft} />
                                        {/* <h3>I have been working with Toptal...</h3> */}
                                        <p>{data.post_content}</p>
                                        <ul className="listInline">
                                            <li><FontAwesomeIcon icon={faStar} /></li>
                                            <li><FontAwesomeIcon icon={faStar} /></li>
                                            <li><FontAwesomeIcon icon={faStar} /></li>
                                            <li><FontAwesomeIcon icon={faStar} /></li>
                                            <li><FontAwesomeIcon icon={faStar} /></li>
                                        </ul>
                                        <h4><img src={data.banner} alt={data.banner} className='testimonialImg'/> {data.post_title}</h4>
                                        {/* <h6>Partner</h6> */}
                                    </div>
                                </div>
                            )
                        })}
                    </Slider>
                    {/* <div className="col-md-4 col-12">
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
                    </div> */}
                </div>
            </div>
        </section>
    )
};

export default Testimonial;