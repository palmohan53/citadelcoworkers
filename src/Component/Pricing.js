import React from "react";
import { Link } from 'react-router-dom';

const Pricing = () => {
    return(
        <React.Fragment>
            <section className="pricing">
                <div className="container pd_zero">
                    <div className="row mb-5">
                        <div className="col-lg-12">
                            <div className="title_all_box style_one text-center  dark_color">
                                <div className="sectionHeading">
                                    <h2>Switch Seamlessly Between These Hiring Models</h2>
                                </div>
                            </div>
                        </div>                                            
                    </div>
                    <div className="row">
                        <div class="col-md-4 col-12">
                            <div class="pricing-content-wrapper">
                                <div class="pricing-plan-wrapper">
                                    <img src="/images/basic-icon.svg" alt="" class="pricing-plan-icon"/>
                                    <div class="pricing-plan-name">Business Plan</div>
                                </div>
                                <div class="pricing-price-wrapper">
                                    <div class="pricing-price">Full-time</div>
                                    {/* <div class="pricing-month">/Month</div> */}
                                </div>
                                {/* <div class="pricing-summary-wrap">
                                    <div>for individual entrepreneurs</div>
                                </div> */}
                                <div class="pricing-feature-list-wrapper">
                                    <div class="pricing-item-wrapper">
                                        <img src="/images/tick-02.svg" alt="" class="pricing-checkmark-icon"/>
                                        <div class="pricing-item-text"> 8 hours a day</div>
                                    </div>
                                    <div class="pricing-item-wrapper">
                                        <img src="/images/tick-02.svg" alt="" class="pricing-checkmark-icon"/>
                                        <div class="pricing-item-text">5 days a week</div>
                                    </div>
                                    <div class="pricing-item-wrapper">
                                        <img src="/images/tick-02.svg" alt="" class="pricing-checkmark-icon"/>
                                        <div class="pricing-item-text">Dedicated resource</div>
                                    </div>
                                    
                                </div>
                                <Link to="/contact-us" class="colorBtn justify-content-center">Get Started</Link>
                            </div>
                        </div>
                        <div class="col-md-4 col-12">
                            <div class="pricing-content-wrapper">
                                <div class="pricing-plan-wrapper">
                                    <img src="/images/premium-icon.svg" alt="" class="pricing-plan-icon"/>
                                    <div class="pricing-plan-name">Pro Plan</div>
                                </div>
                                <div class="pricing-price-wrapper">
                                    <div class="pricing-price">Part-time</div>
                                    {/* <div class="pricing-month">/Month</div> */}
                                </div>
                                {/* <div class="pricing-summary-wrap">
                                    <div>Growing businesses and teams</div>
                                </div> */}
                                <div class="pricing-feature-list-wrapper">
                                    <div class="pricing-item-wrapper">
                                        <img src="/images/tick-02.svg" alt="" class="pricing-checkmark-icon"/>
                                        <div class="pricing-item-text">4 hours a day</div>
                                    </div>
                                    <div class="pricing-item-wrapper">
                                        <img src="/images/tick-02.svg" alt="" class="pricing-checkmark-icon"/>
                                        <div class="pricing-item-text">5 days a week</div>
                                    </div>
                                    <div class="pricing-item-wrapper">
                                        <img src="/images/tick-02.svg" alt="" class="pricing-checkmark-icon"/>
                                        <div class="pricing-item-text">Dedicated resource</div>
                                    </div>
                                </div>
                                <Link to="/contact-us" class="colorBtn justify-content-center">Get Started</Link>
                            </div>
                        </div>
                        <div class="col-md-4 col-12">
                            <div class="pricing-content-wrapper">
                                <div class="pricing-plan-wrapper">
                                    <img src="/images/standard-icon.svg" alt="" class="pricing-plan-icon"/>
                                    <div class="pricing-plan-name"> Basic Plan</div>
                                </div>
                                <div class="pricing-price-wrapper">
                                    <div class="pricing-price">Hourly</div>
                                    {/* <div class="pricing-month">/Month</div> */}
                                </div>
                                {/* <div class="pricing-summary-wrap">
                                    <div>Medium to large enterprises </div>
                                </div> */}
                                <div class="pricing-feature-list-wrapper">
                                    <div class="pricing-item-wrapper">
                                        <img src="/images/tick-02.svg" alt="" class="pricing-checkmark-icon"/>
                                        <div class="pricing-item-text">60 hours a month</div>
                                    </div>
                                    <div class="pricing-item-wrapper">
                                        <img src="/images/tick-02.svg" alt="" class="pricing-checkmark-icon"/>
                                        <div class="pricing-item-text">Pay-as-you-consume</div>
                                    </div>
                                    <div class="pricing-item-wrapper">
                                        <img src="/images/tick-02.svg" alt="" class="pricing-checkmark-icon"/>
                                        <div class="pricing-item-text">Ideal for low volume work</div>
                                    </div>
                                
                                </div>
                                <Link to="/contact-us" class="colorBtn justify-content-center">Get Started</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Pricing;