import React,{useEffect} from "react";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const HowDoesCitadelWorks = () => {
   
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return(
        <React.Fragment>
            <HelmetProvider>
                <Helmet>
                    <title>How Does Citadel - citadel coworkers</title>
                    <meta name="description" content="How Does Citadel Cookie List A cookie is a small piece of data (text file) that a website – when visited by a user – asks your browser to store on your device in order to remember information about you, such as your language preference or login information. Those cookies are set by us and called […]" />
                </Helmet>
                <section className="innerBanner">
                    {/* <img src="/images/inr-banner.jpg" alt=""/> */}
                    <div className="innerBannerContent">
                        <h1>How Does Citadel</h1>
                    </div>
                    <div className="bannerOvelay"></div>
                </section>
                <section className="contentRich mb-5">
                    <div className="container">
                        <div className="row align-items-center mb-5">
                            <div className="col-md-4 col-12">
                                <img src="/images/outsourcing-model.png" alt=""/>
                            </div>
                            <div className="col-md-8 col-12 ps-4">
                                <div className="sectionHeading min-width-100">
                                    <h2>Our Unique Outsourcing Model</h2>
                                    <h3>Outsource Any Office Work in Any Field or Profession:</h3>
                                    <p>At Citadel Coworkers LLP, we empower businesses around the globe, especially SMEs, to outsource a wide array of office tasks, without being restricted by the field or profession. We have revolutionized the traditional outsourcing model, enabling our clients to hire full-time dedicated virtual employees who work exclusively for them from our state-of-the-art office in India. Our innovative approach allows for the outsourcing of tasks ranging from complex technical processes to basic back-office jobs. Our most popular outsourcing services include software programming, engineering, law, accounting, graphic design, SEO, data entry, bookkeeping, content writing, transcription, and recruitment.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row service_box style_three dark_color ms-0">
                            <div className="col-md-12 col-12 mb-4">
                                <div className="sectionHeading min-width-100 text-center">
                                    <h2>How does Citadel Work</h2>
                                </div>
                            </div>
                            <div className="col-md-3 col-12 mb-4">
                                <div className="service_content p-5 hoverEffect">
                                    <img src="/images/circle-group-2.svg" alt=""/>
                                    <h3>Brief Us</h3>
                                    <p>Start by sending us your job
                                    requirements.</p>
                                    &nbsp;<br/>
                                    &nbsp;<br/>
                                    &nbsp;<br/>
                                </div>
                            </div>
                            <div className="col-md-3 col-12 mb-4">
                                <div className="service_content p-5 hoverEffect">
                                    <img src="/images/circle-group-2.svg" alt=""/>
                                    <h3>Kick Start</h3>
                                    <p>Once satisfied, hire them directly and commence your projects.</p>
                                    &nbsp;<br/>
                                    &nbsp;<br/>
                                    &nbsp;<br/>
                                </div>
                            </div>
                            <div className="col-md-3 col-12 mb-4">
                                <div className="service_content p-5 hoverEffect">
                                    <img src="/images/circle-group-2.svg" alt=""/>
                                    <h3>Choose Your Team:</h3>
                                    <p>Conduct interviews with your chosen candidates through phone or video conferencing. Feel free to assign them tests to gauge their capabilities.</p>
                                </div>
                            </div>
                            <div className="col-md-3 col-12 mb-4">
                                <div className="service_content p-5 hoverEffect">
                                    <img src="/images/circle-group-2.svg" alt=""/>
                                    <h3>Pick the Best Resumes</h3>
                                    <p>We will provide you with resumes of candidates
                                    who have been screened and shortlisted based on your needs.</p>
                                    &nbsp;<br/>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="contentRich timelineSec">
                    <div className="container">
                        <div className="sectionHeading text-center mb-4">
                            <h2>What Do We Offer?</h2>
                        </div>
                        <div class="timeline">
                            <div class="timelineContainer left">
                                <div class="timelineContent bg_light_1">
                                    <h3>Dedicated Employee Model</h3>
                                    <p>With CCW, outsourcing means hiring your very own dedicated employee in India, mirroring the process of hiring a local employee in your country. We pioneered the Dedicated Employee Model in the outsourcing industry, focusing on a direct, one-to-one relationship between you and your virtual employee. This model ensures:</p>
                                </div>
                            </div>
                            <div class="timelineContainer right">
                                <div class="timelineContent bg_light_1">
                                    <h3>Direct assignment of tasks to your employee.</h3>
                                    <p>Your employee working under your guidance, adhering to your instructions and deadlines.<br/>
                                    Supervision and monitoring of your employee’s work remotely, with the ability to provide any necessary training.<br/>
                                    Advanced communication technology facilitating high levels of collaboration.
                                    Your virtual employee working in sync with your specified deadlines, just like an in-house employee.</p>
                                </div>
                            </div>
                            <div class="timelineContainer left">
                                <div class="timelineContent bg_light_1">
                                    <h3>Team Model</h3>
                                    <p>Our Team Model is designed specifically for clients outsourcing IT and software development projects, including PHP, .Net, and Web Designing. It features:</p>
                                    <ul>
                                        <li>A Technical Team Leader (TTL) at the helm, followed by a Senior Software Engineer (SSE).</li>
                                        <li>Flexible hours with the entire team contributing to meet your required number of hours per day.</li>
                                        <li>Easy scalability, allowing you to adjust the team size or hours as per your project’s needs.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="contentRich bg_light_1">
                    <div className="container">
                        <div className="sectionHeading min-width-100">
                            <h2 className="mb-3">Citadel Coworkers LLP's Role</h2>
                        </div>
                        <p>We facilitate your outsourcing endeavors without interfering in the work process. Our support includes:</p>
                        <ul>
                            <li><b>Hardware and Software: </b>Provision of new Dell or HP laptops/PCs, along with essential peripherals and software.</li>
                            <li><b>Telecommunications:</b> Availability of a local number from your home country for easy communication with your virtual employee.</li>
                            <li><b>Professional Office Environment: </b>Our office in New Delhi NCR is fully equipped with fast internet, uninterrupted power supply, and modern amenities to ensure a productive working environment for your employee.</li>
                            <li><b>Legal and Administrative Support:</b> We handle employment taxes, insurance, and labor laws, freeing you from these responsibilities.</li>
                            <li><b>Supervised and Professional Work Environment:</b> Continuous monitoring and supervision by our HR executives and managers ensure that your outsourcing process is seamless and successful.</li>
                            <li><b>Technical and Customer Support:</b> Our IT and customer support departments are available 24/7 to assist with any issues or queries.</li>
                        </ul>
                    </div>
                </section>
                <section className="bottomCon">
                    <div className="container">
                        <div className="sectionHeading text-center">
                            <h2 className="mb-4">Send your requirement to boost your business with our dedicated and team models, providing direct access and high collaboration.</h2>
                            <Link to='/contact-us' className="colorBtn wideBtn">Send Your Requirement</Link>
                        </div>
                    </div>
                </section>
            </HelmetProvider>
            {/* <Testimonial /> */}
        </React.Fragment>
    )
};

export default HowDoesCitadelWorks;