import React,{useEffect} from "react";
import { Helmet, HelmetProvider } from 'react-helmet-async';

const RefundPolicy = () => {
   
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return(
        <React.Fragment>
            <HelmetProvider>
                <Helmet>
                    <title>Refund Policy - citadel coworkers</title>
                    <meta name="description" content="Refund Policy Contract Termination: Both Citadel Coworkers and the client reserve the right to terminate the contract with a 15-day written notice. Should either party require a longer notice period, arrangements can be made provided that both parties agree to the extended timeline. Refund Conditions: Complete Refund: If the performance of your assigned employee is […]" />
                    <link rel="canonical" href={window.location.href} />
                </Helmet>
                <section className="innerBanner">
                    {/* <img src="/images/inr-banner.jpg" alt=""/> */}
                    <div className="innerBannerContent">
                        <h1>Refund Policy</h1>
                    </div>
                    <div className="bannerOvelay"></div>
                </section>
                <section className="contentRich mb-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-12 pr-5">
                                <div className="contentRichContent">
                                    <div className="sectionHeading mb-3 min-width-100">
                                        <h2>Contract Termination:</h2>
                                    </div>
                                    <p className="para">Both Citadel Coworkers and the client reserve the right to terminate the contract with a 15-day written notice. Should either party require a longer notice period, arrangements can be made provided that both parties agree to the extended timeline.</p>
                                    <h3>Refund Conditions:</h3>
                                    <ul className="mb-4">
                                        <li>Complete Refund: If the performance of your assigned employee is deemed wholly inadequate, Citadel Coworkers will issue a full refund.</li>
                                        <li>Pro-rata Charge: If the employee’s performance is satisfactory but does not meet expected standards, charges will be applied on a pro-rata basis for the days worked. Any remaining balance will be refunded.</li>
                                        <li>Employee Replacement: Should you be dissatisfied with the employee, Citadel Coworkers offers the option to replace the employee. Any unused funds from the original arrangement will be credited towards the replacement.</li>
                                    </ul>
                                    <h3>Communication of Dissatisfaction:</h3>
                                    <ul className="mb-4">
                                        <li>To enact any of the above measures, it is crucial that any dissatisfaction is communicated promptly, ideally within the first week of employment. Failure to communicate dissatisfaction after a reasonable period of employment may limit Citadel Coworkers’ ability to question the employee’s performance or to apply the aforementioned measures.</li>
                                    </ul>
                                    <h3>Notice Requirement for Long-Term Employees:</h3>
                                    <ul className="mb-4">
                                        <li>If an employee has been working under the contract for a substantial period without any reported dissatisfaction, terminating our services will require the stipulated notice period (15 days or 1.5 months, depending on the initial agreement).</li>
                                        <li>This policy ensures that our commitment to client satisfaction and service quality is upheld, while also respecting the professional engagement of our employees.</li>
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

export default RefundPolicy;