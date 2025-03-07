
import { Accordion, AccordionItem } from '@szhsin/react-accordion';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const FaqPage = () => {
    return(
        <HelmetProvider>
            <Helmet>
                <title>FAQ - citadel coworkers</title>
                <meta name="description" content="how can we help you Common Queries Frequently Asked Questions 1. How can Citadel Coworkers help my business grow? CCW offers a large talent pool of professionals from various domains, whom you can hire as a dedicated employee for your business. Unlike a freelancer, CCW resources work exclusively for you, and you have absolute managerial […]" />
            </Helmet>
            <section className="innerBanner">
                {/* <img src="/images/inr-banner.jpg" alt=""/> */}
                <div className="innerBannerContent">
                    <h1>How Can We help you</h1>
                </div>
                <div className="bannerOvelay"></div>
            </section>
            <section className="faqSec bg_light_1">
                <div className="container">
                    <div className="row align-items-center mb-3">
                        <div className="col-md-12 col-12">
                            <div className="sectionHeading text-center">
                                <h3>Common Queries</h3>
                                <h2>Frequently Asked Questions</h2>
                                <p>Dive into our frequently asked questions for instant clarity on our services. This section aims to address your initial inquiries with concise information.</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5">
                        <Accordion>
                            <div className='accordion'>
                                <AccordionItem header="1. How can Citadel Coworkers help my business grow?">
                                    CCW offers a large talent pool of professionals from various domains, whom you can hire as a dedicated employee for your business. Unlike a freelancer, CCW resources work exclusively for you, and you have absolute managerial control over them.
                                    <br/><br/>
                                    <strong>Abundant Talent</strong>
                                    Take your pick from a wide range of triple-vetted resources that suit your domain. From single hiring to team hiring, the choice is entirely yours.
                                    <br/><br/>
                                    <strong>Cost-Effective</strong>
                                    Pay only for the remote employee you hire and nothing else. No overhead cost and no hidden charges. Get a professional resource at bottom dollar and save up to 70% on remote hiring.
                                    <br/><br/>
                                    <strong>Available 24/7</strong>
                                    No matter which timezone you are in, your remote resource is always there for you. He/she comes with the backing of an entire team, which makes your work keep going like clockwork.                      
                                </AccordionItem>
                            </div>
                            <div className='accordion'>
                                <AccordionItem header="2.Are you a freelancing company? Would I hire a freelancer from you?">
                                    No, Citadel Coworkers LLP is not a freelancing company. We are a remote staffing firm that allows clients to hire dedicated resources on a part-time, full-time, or ad-hoc basis. You get to hire resources who work exclusively for you from our supervised offices, unlike freelancers. You will always stay in control of your resources and your project and can monitor their work daily.                     
                                </AccordionItem>
                            </div>
                            <div className='accordion'>
                                <AccordionItem header="3.Does CCW pay well to the employees I hire as per Indian law?">
                                    All employees at CCW are paid remuneration packages at par with the industry norms. These are determined based on their experience and current market trends. All remunerations and facilities provided to the employees are fully compliant with the Indian labor laws.
                                    <br/><br/>
                                    Besides being a CMMI Level 3 and ISO 9000:2008 and 270001: 2013 certified company, CCW also strictly adheres to the Indian labor laws, which explicitly prohibits under-age employment.                     
                                </AccordionItem>
                            </div>
                            <div className='accordion'>
                                <AccordionItem header="4.Does CCW hire third-party services for client requirements?">
                                    At CCW, all the services provided to you are entirely in-house, and the resources are on our payroll. We do not hire freelancers or third-party services.                     
                                </AccordionItem>
                            </div>
                            <div className='accordion'>
                                <AccordionItem header="5. If I am not a technical person, then how will CCW select the right fit for my requirements?">
                                    You do not need to be technically proficient to work with your virtual employees. All our teams are assigned highly experienced and capable tech team leads, who identify the right skill sets of the resources and share relevant profiles post-discussion. We also offer a free trial period for you to assess resources' quality before making an informed decision.                     
                                </AccordionItem>
                            </div>
                            <div className='accordion'>
                                <AccordionItem header="6. How will CCW ensure the completion of my project?">
                                    Unlike freelancers and project management companies, CCW provides you with a dedicated virtual employee who works exclusively for you, just like your in-house employee would. The remote employee isn't only with you for one project but works for you, reports to you, and is your resource, for as long you wish to retain him/her. You can monitor their daily work, will get reports, and communicate directly to ensure the deadlines are met without fail.                     
                                </AccordionItem>
                            </div>
                            <div className='accordion'>
                                <AccordionItem header="7. Can you share some testimonials and case studies links?">
                                    Absolutely! We are proud of the services offered to our clients and their words of praise are a testament to our success and credibility.                    
                                </AccordionItem>
                            </div>
                            <div className='accordion'>
                                <AccordionItem header="8. Why do I have to prepay or pay you in advance?">
                                    As per the CCW model, you do not hire services from us but experts who work as your dedicated employees. The prepay system allows us to bear the administrative and overhead charges, which include but are not limited to providing your employee an office space, transportation, internet, etc., to ensure his work efficiency.                  
                                </AccordionItem>
                            </div>
                            <div className='accordion'>
                                <AccordionItem header="9. What's the point of a notice deposit in a prepaid model?">
                                    The notice period is the number of days, each party needs to give to the other to terminate/discontinue the services. Citadel Coworkers LLP is a pre-paid monthly service, i.e., the client pays one month in advance for each month of service. However, when first starting with Citadel Coworkers LLP, the client also pays in addition to the first month of service, a one-time notice period deposit. The notice period deposit secures the interests of CCW and yours. Here's how:                
                                </AccordionItem>
                            </div>
                            <div className='accordion'>
                                <AccordionItem header="10. What's the point of a notice deposit in a prepaid model?">
                                    The notice period is the number of days, each party needs to give to the other to terminate/discontinue the services. Citadel Coworkers LLP is a pre-paid monthly service, i.e., the client pays one month in advance for each month of service. However, when first starting with Citadel Coworkers LLP, the client also pays in addition to the first month of service, a one-time notice period deposit. The notice period deposit secures the interests of CCW and yours. Here's how:
                                    <br/><br/>
                                    <strong>For CCW (Company):</strong>
                                    The presence of the notice period clause (NP) in our contract states that it is not a Term Contract. The notice period ensures that in case you decide to discontinue with us, we get a buffer period to allocate the resource to a different client or project.
                                    <br/><br/>
                                    Hence the first invoice the client (you) receive when starting with CitadelCoworkers.com is as follows: Charge for 1 month of Service + One Time Notice Period Deposit = Initial/First Invoice. Thereafter, all subsequent invoices shall be for just 1 month of service without any additional costs.
                                    <br/><br/>
                                    <strong>For the Client (You):</strong>
                                    The notice period clause safeguards your work and prevents any hindrance to it. If for some reason your payment gets delayed, this clause ensures that your work does not get hampered during the notice period. This, in turn, provides you with the buffer time to make the payment, without having to worry about any negative effects on your project.
                                    <br/><br/>
                                    <strong>P.S: The notice deposit is refundable and can be adjusted or reimbursed in part/full at the last month of invoicing.</strong>
                                    <br/><br/>
                                    The NP rider also states that you are provided with an instant replacement if a trained employee resigns. The replacement is provided within the employee's notice period duration with a focus on a streamlined and efficient knowledge transfer/transition. This, in turn, ensures that your work always remains unaffected and keeps on going like nothing ever happened.               
                                </AccordionItem>
                            </div>
                            <div className='accordion'>
                                <AccordionItem header="11. How does it work with Citadel Coworkers?">
                                    Unlike conventional outsourcing services, Citadel Coworkers provides you with experienced and talented resources, which we like to refer to as 'remote staffing solutions'. Instead of outsourcing your work to us, we enable you to hire the expertise/resource who works remotely for you just like a local employee. The only difference is that they work from our well-supervised offices in India to give you the cost advantage of hiring someone at a fraction of what you would pay someone back home. It's much like your own offshore office.
                                    <br/><br/>
                                    You can hire resources on a part-time or full-time basis. We run on a prepaid monthly model where you only have to pay after finalizing your resources. You do not have to commit to a time-bound contract as CCW offers monthly rolling contracts, which puts you in the driver's seat with complete control.
                                    <br/><br/>
                                    You can choose to hire a single resource or an entire team, based on your requirements. Once we get you started with your virtual employee/s, they are accountable and answerable only to you, as far as daily work is concerned. Furthermore, you can contact them directly via remote communication tools, such as Skype, e-mail, and phone calls.
                                    <br/><br/>
                                    Think of this as your own office minus the hassles of setting up and maintaining an office (infrastructure/hardware/overheads etc.) CCW takes care of all the overheads, administrative work (insurance, tax, contracts, HR, accounts, etc.), HR/Payroll, and IT/Logistics support.               
                                </AccordionItem>
                            </div>
                            <div className='accordion'>
                                <AccordionItem header="12. Can I hire an employee on a part-time basis and later on hire the same employee on a full-time basis?">
                                    Absolutely. At CCW, the choice is always yours. We will never stipulate which resource to hire and for what duration. You can easily switch between part-time and full-time employees as per your business requirements.               
                                </AccordionItem>
                            </div>
                            <div className='accordion'>
                                <AccordionItem header="13. I require an employee who is proficient in English. Is this possible?">
                                    With a population of 1.3 billion, English is the second most commonly used language in India and is the bedrock of corporate communication across the country and beyond. We take pride in selecting candidates who are not only proficient in the English language (spoken & written), but many of them have nearly mastered the language to perfection. Rest assured, the language barrier does not exist at CCW!              
                                </AccordionItem>
                            </div>
                            <div className='accordion'>
                                <AccordionItem header="14. Can I hire a single employee or a team at a time?">
                                    Based on your business requirements, you can opt to hire one employee or an entire team. Also, you can easily switch between standalone resources and teams at any time. It'd be best to consult with your Relationship Accounts Manager (RAM) for a smooth transition.             
                                </AccordionItem>
                            </div>
                            <div className='accordion'>
                                <AccordionItem header="15. How can I ensure that the right person is hired for the position?">
                                    We will never tell you who to pick and who not to. At CCW, we work on the ethos of 'choice', especially when it comes to the client, i.e., 'you'. Before hiring a resource, you have the authority to test or interview the resource yourself, for complete peace of mind. You also get a free trial to assess the quality of your resources before hiring. Pay only if you are convinced.             
                                </AccordionItem>
                            </div>
                            <div className='accordion'>
                                <AccordionItem header="16. Can I interview the candidates myself over video conferencing and monitor the evaluation test in real time?">
                                    When you decide to hire a resource from CCW, rest assured, you're in control, all the way. Not only do you get to interview the candidate via video conferencing, but you can also monitor the proficiency test in real-time, administered to the candidates.             
                                </AccordionItem>
                            </div>
                            <div className='accordion'>
                                <AccordionItem header="17. Can I visit your office and meet the resource in person, and/or work with him for a few days in your office? ">
                                    We'll be delighted to host you at our premises, where not only can you work on your project but also interact and get to know your virtually hired employees, in person. Besides the rendezvous, feel free to conduct training sessions as well as one-on-one interactions with your offshore employees.             
                                </AccordionItem>
                            </div>
                            <div className='accordion'>
                                <AccordionItem header="18. My requirements are unique and I want to handpick the right talent for my company. Can I do that?">
                                    Browse through the CVs of carefully triple-vetted candidates that we send, pick the right one based on your choice, and we'll align a video/audio interview session accordingly. This will help you evaluate the resource in real time and make an informed decision.          
                                </AccordionItem>
                            </div>
                            <div className='accordion'>
                                <AccordionItem header="19. Would my employee be a dedicated one or shared?">
                                    Browse through the CVs of carefully triple-vetted candidates that we send, pick the right one based on your choice, and we'll align a video/audio interview session accordingly. This will help you evaluate the resource in real time and make an informed decision.         
                                </AccordionItem>
                            </div>
                        </Accordion>
                    </div>
                </div>
            </section>
        </HelmetProvider>
    )
};

export default FaqPage;