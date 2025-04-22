import React,{useEffect} from "react";
import { Helmet, HelmetProvider } from 'react-helmet-async';

const UserAgreement = () => {
   
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return(
        <React.Fragment>
            <HelmetProvider>
                <Helmet>
                    <title>Citadel Coworkers User Agreemenaat - citadel coworkers</title>
                    <meta name="description" content="Citadel Coworkers User Agreement Acceptance of Terms: Citadel Coworkers, also known as Citadel Coworkers Private Limited, provides outsourcing services globally, with offices in India, the UK, and the US. By using our website, you agree to comply with and be bound by the following terms and conditions of use. Those not in agreement with these […]" />
                    <link rel="canonical" href={window.location.href} />
                </Helmet>
                <section className="innerBanner">
                    {/* <img src="/images/inr-banner.jpg" alt=""/> */}
                    <div className="innerBannerContent">
                        <h1>Citadel Coworkers User Agreement</h1>
                    </div>
                    <div className="bannerOvelay"></div>
                </section>
                <section className="contentRich mb-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-12 pr-5">
                                <div className="contentRichContent">
                                    <div className="sectionHeading mb-3 min-width-100">
                                        <h2>Acceptance of Terms:</h2>
                                    </div>
                                    <p className="para">Citadel Coworkers, also known as Citadel Coworkers Private Limited, provides outsourcing services globally, with offices in India, the UK, and the US. By using our website, you agree to comply with and be bound by the following terms and conditions of use. Those not in agreement with these terms are advised not to use our website.</p>
                                    <h3>Modifications to Terms: </h3>
                                    <ul className="mb-4">
                                        <li>Citadel Coworkers reserves the right to modify these terms and conditions at any time without prior notice. Changes may include, but are not limited to, updates to the information regarding services, website content, and associated documents. Continuous use of the site following any changes indicates your acceptance of the new terms.</li>
                                    </ul>
                                    <h3>Copyright and Usage of Content:</h3>
                                    <ul className="mb-4">
                                        <li>All content on the Citadel Coworkers website, including texts, documents, audio, video, graphics, icons, and images, is protected under intellectual property laws and is the sole property of Citadel Coworkers Private Limited. Unauthorized use, reproduction, transmission, publication, modification, or distribution of any content is strictly prohibited unless explicitly permitted in writing by Citadel Coworkers. However, users may download and print content for non-commercial and personal use only.</li>
                                    </ul>
                                    <h3>User Conduct:</h3>
                                    <ul className="mb-4">
                                        <li>Users are encouraged to provide feedback through our website interface. It is the responsibility of the users to ensure that the content they post is not malicious, obscene, or defamatory. Users posting such content will indemnify Citadel Coworkers against all liabilities and costs arising from such actions.</li>
                                    </ul>
                                    <h3>Third-Party Links:</h3>
                                    <ul className="mb-4">
                                        <li>Our website may contain links to third-party websites, including social networks, which are governed by their own terms and conditions. Citadel Coworkers is not responsible for the content, accuracy, or practices of these third-party sites.</li>
                                    </ul>
                                    <h3>Privacy and Information Submission:</h3>
                                    <ul className="mb-4">
                                        <li>Citadel Coworkers values user privacy and generally does not seek to collect personal information. However, any information submitted through our “Get Started” interface or other means becomes the property of Citadel Coworkers and may be used, reproduced, and distributed without the prior consent of the submitter, except where such use includes personal identifiers.</li>
                                    </ul>

                                    <h3>Disclaimer:</h3>
                                    <ul className="mb-4">
                                        <li>While Citadel Coworkers strives to provide accurate and up-to-date information, we do not guarantee the correctness or reliability of the content. The website and all its content are provided on an “AS IS” and “AS AVAILABLE” basis without any warranties.</li>
                                    </ul>
                                    <h3>Limitation of Liability:</h3>
                                    <ul className="mb-4">
                                        <li>Citadel Coworkers will not be liable for any damages arising from the use of our website or from any information, content, or services provided through the website. This includes damages from the use of links to third-party sites.</li>
                                        <li>By using the Citadel Coworkers website, you acknowledge that you have read, understood, and agreed to these terms and conditions.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </HelmetProvider>
            {/* <Testimonial /> */}
        </React.Fragment>
    )
};

export default UserAgreement;