import React,{useEffect} from "react";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const DataSecurity = () => {
   
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return(
        <React.Fragment>
            <HelmetProvider>
                <Helmet>
                    <title>Data Security: - citadel coworkers</title>
                    <meta name="description" content="Data Security: Cookie List A cookie is a small piece of data (text file) that a website – when visited by a user – asks your browser to store on your device in order to remember information about you, such as your language preference or login information. Those cookies are set by us and called […]" />
                    <link rel="canonical" href={window.location.href} />
                </Helmet>
                <section className="innerBanner">
                    {/* <img src="/images/inr-banner.jpg" alt=""/> */}
                    <div className="innerBannerContent">
                        <h1>Iron-clad Data Security:</h1>
                        <p>Your Peace of Mind with Citadel Coworkers LLP
                        When Privacy is Paramount</p>
                    </div>
                    <div className="bannerOvelay"></div>
                </section>
                <section className="contentRich mb-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-12 pr-5">
                                <div className="contentRichContent">
                                    <div className="sectionHeading mb-5 text-center">
                                        <h2>Iron-clad Data Security:</h2>
                                        <p className="para">In the landscape of modern business, data security transcends mere necessity—it’s your silent guardian. Citadel Coworkers LLP (CCW) understands the gravity of data privacy and protection, which is why our iron-clad data security policies are designed to shield your business from vulnerabilities, ensuring peace of mind in an era where certainty is a luxury.</p>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="row service_box style_three dark_color ms-0">
                            <div className="col-md-6 col-12 mb-4">
                                <div className="service_content p-5 hoverEffect">
                                    <img src="/images/circle-group-2.svg" alt=""/>
                                    <h3>Ensuring Correct Data Reach Over Data Breach</h3>
                                    <p>Data breaches are not just breaches of security; they're breaches of trust. At CCW, we prioritize maintaining this trust by enforcing stringent data security measures that keep your sensitive information protected at all times.</p>
                                </div>
                            </div>
                            <div className="col-md-6 col-12 mb-4">
                                <div className="service_content p-5 hoverEffect">
                                    <img src="/images/circle-group-2.svg" alt=""/>
                                    <h3>Blocked Access to Websites</h3>
                                    <p>Your data's integrity is paramount. Any third-party sites you deem a risk will be kept at bay, as per your directive. Our proactive approach ensures your data stays secure, and your peace of mind, intact.</p>
                                </div>
                            </div>
                            <div className="col-md-6 col-12 mb-4">
                                <div className="service_content p-5 hoverEffect">
                                    <img src="/images/circle-group-2.svg" alt=""/>
                                    <h3>Backed by Laws and Policies</h3>
                                    <p>Our commitment to data protection is reinforced by robust internal policies and the backing of the Indian Information Technology Act. This legal framework provides an additional layer of security, safeguarding your data against potential threats.</p>
                                </div>
                            </div>
                            <div className="col-md-6 col-12 mb-4">
                                <div className="service_content p-5 hoverEffect">
                                    <img src="/images/circle-group-2.svg" alt=""/>
                                    <h3>No External Storage Devices</h3>
                                    <p>To minimize risks, external storage devices are barred from our network. Our vigilant IT and legal teams work tirelessly to monitor and regulate what enters our digital environment, ensuring your data remains uncompromised.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="bg_light_1 p-0">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-12 col-md-6">
                                <div className="sectionHeading min-width-100">
                                    <h2>Screen Monitoring</h2>
                                    <p>Transparency is key to trust. Monitor your virtual employees’ screens whenever necessary, facilitating real-time communication and oversight, ensuring your team remains aligned with your business goals.</p>
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <img src="/images/screen-monitoring-1024x683.webp" alt=""/>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="contentRich timelineSec">
                    <div className="container">
                        <div className="sectionHeading text-center mb-4">
                            <h2>Data Security Fundamentals:</h2>
                            <p>Our Accredited Measures</p>
                        </div>
                        <div class="timeline">
                            <div class="timelineContainer left">
                                <div class="timelineContent bg_light_1">
                                    <h3>ISO 27001:2013 Certification:</h3>
                                    <p>Our unwavering commitment to data security is epitomized by our ISO 27001:2013 certification, emphasizing our dedication to the continual improvement of data security measures.</p>
                                </div>
                            </div>
                            <div class="timelineContainer right">
                                <div class="timelineContent bg_light_1">
                                    <h3>CERT-in Guidelines Compliance:</h3>
                                    <p>While we strive to prevent data breaches, our readiness to respond as per CERT-in guidelines ensures rapid redressal and minimal impact, should the improbable occur.</p>
                                </div>
                            </div>
                            <div class="timelineContainer left">
                                <div class="timelineContent bg_light_1">
                                    <h3>The Retro Guard</h3>
                                    <p>Physical and Virtual Vigilance Sometimes, traditional methods provide the best security. CCW combines virtual monitoring with physical oversight within our state-of-the-art facilities, equipped with the latest security technologies and operational protocols.</p>
                                </div>
                            </div>
                            <div class="timelineContainer right">
                                <div class="timelineContent bg_light_1">
                                    <h3>Certified Expertise</h3>
                                    <p>Over 50 resources certified in Cisco, Linux, and Microsoft, ensuring your data is handled by experts.</p>
                                </div>
                            </div>

                            <div class="timelineContainer left">
                                <div class="timelineContent bg_light_1">
                                    <h3>Remote Access Control</h3>
                                    <p>Seamless and secure remote access to your employee's system, offering control and flexibility.</p>
                                </div>
                            </div>
                            <div class="timelineContainer right">
                                <div class="timelineContent bg_light_1">
                                    <h3>Advanced Anti-virus and Firewall Protection</h3>
                                    <p>Every system at CCW is fortified with the latest anti-virus and anti-spam software, complemented by SonicWALL firewall network security.</p>
                                </div>
                            </div>

                            <div class="timelineContainer left">
                                <div class="timelineContent bg_light_1">
                                    <h3>Comprehensive Surveillance</h3>
                                    <p>Enhanced office security with CCTVs strategically placed on each floor, providing round-the-clock monitoring.</p>
                                </div>
                            </div>
                            <div class="timelineContainer right">
                                <div class="timelineContent bg_light_1">
                                    <h3>Employee Sensitization</h3>
                                    <p>Regular training and mandatory courses keep our team aware and vigilant, supplemented by surprise security checks.</p>
                                </div>
                            </div>
                            <div class="timelineContainer left">
                                <div class="timelineContent bg_light_1">
                                    <h3>Legal Vigilance</h3>
                                    <p>Under the expert guidance of Cyber Law specialists, our legal team remains at the forefront of data protection laws and practices.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="contentRich">
                    <div className="container">
                        <div className="row service_box style_three dark_color mb-4">
                            <div className="col-md-7 col-12">
                                <div className="service_content p-5 hoverEffect text-start">
                                    <h3>24/7 IT Support:</h3>
                                    <p>Our dedicated IT team ensures that all network and system administration protocols are up to date and fully complied with.<br/>
                                    Partnering with the Law: Zero Tolerance for Breaches
                                    Our impeccable record of zero breaches since our establishment is a testament to our commitment. Our alliance with the Indian Information Technology Act reinforces our resolve to maintain this standard, ensuring legal recourse in the unlikely event of a breach</p>
                                    &nbsp;<br/>
                                    &nbsp;<br/>
                                </div>
                            </div>
                            <div className="col-md-5 col-12">
                                <img src="/images/24_7-IT-support-1024x616.jpg" alt=""/>
                            </div>
                        </div>
                        <div className="row service_box style_three dark_color ms-0">
                            <div className="col-md-5 col-12">
                                <img src="/images/your-data-Our-responsibbility-1024x683.jpg" alt=""/>
                            </div>
                            <div className="col-md-7 col-12">
                                <div className="service_content p-5 hoverEffect text-start">
                                    <h3>Your Data, Our Responsibility</h3>
                                    <p>At CCW, we consider your data as sacrosanct as you do. With a proven track record of over 3500+ satisfied clients worldwide and no data breaches, our data security and protection mechanisms stand unchallenged. Trust us to be your cyber guardians, safeguarding your data with the diligence it deserves.</p>
                                    &nbsp;<br/>
                                    &nbsp;<br/>
                                    &nbsp;<br/>
                                    &nbsp;<br/>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </section>
                <section className="bottomCon">
                    <div className="container">
                        <div className="sectionHeading text-center">
                            <h2 className="mb-4">Ensure the security of your data with Citadel's stringent measures and compliance with international standards. Secure your business with our advanced data management solution</h2>
                            <Link to='/contact-us' className="colorBtn wideBtn">Send Your Requirement</Link>
                        </div>
                    </div>
                </section>
            </HelmetProvider>
            {/* <Testimonial /> */}
        </React.Fragment>
    )
};

export default DataSecurity;