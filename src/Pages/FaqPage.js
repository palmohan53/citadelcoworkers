
import { Accordion, AccordionItem } from '@szhsin/react-accordion';
import { Link } from 'react-router-dom';

const FaqPage = () => {
    return(
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
                    </Accordion>
                    <div className='text-center mt-5'>
                        <Link to="/" className="colorBtn wideBtn">View All</Link>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default FaqPage;