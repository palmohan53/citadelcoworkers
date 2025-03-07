
import { Accordion, AccordionItem } from '@szhsin/react-accordion';
import { Link } from 'react-router-dom';

const Faq = ({faqData}) => {
    return(
        <section className="faqSec bg_light_1">
            <div className="container">
                <div className="row align-items-center mb-3">
                    <div className="col-md-12 col-12">
                        <div className="sectionHeading text-center">
                            {/* <h3>FAQ</h3> */}
                            <h2>Your Queries Answered</h2>
                            <p>Dive into our frequently asked questions for instant clarity on our services. This section aims to address your initial inquiries with concise information.</p>
                        </div>
                    </div>
                </div>
                <div className="mt-5">
                    
                    <Accordion>
                        
                        {faqData?.map((data, index)=>{
                        return(
                            <div className="accordion" key={index}>
                                <AccordionItem header={data.title}>
                                    {data.body}
                                </AccordionItem>
                            </div>
                        )
                    })}
                    </Accordion>
                    <div className='text-center mt-5'>
                        <Link to="/faq" className="colorBtn wideBtn">View All</Link>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Faq;