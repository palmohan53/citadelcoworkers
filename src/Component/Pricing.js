import React from "react";

const Pricing = ({handleScrollClick}) => {
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
                        <div className="col-md-4 col-12">
                            <div className="pricing-content-wrapper">
                                <div className="pricing-plan-wrapper">
                                    <img src="/images/basic-icon.svg" alt="" className="pricing-plan-icon"/>
                                    <div className="pricing-plan-name">Business Plan</div>
                                </div>
                                <div className="pricing-price-wrapper">
                                    <div className="pricing-price">Full-time</div>
                                    {/* <div className="pricing-month">/Month</div> */}
                                </div>
                                {/* <div className="pricing-summary-wrap">
                                    <div>for individual entrepreneurs</div>
                                </div> */}
                                <div className="pricing-feature-list-wrapper">
                                    <div className="pricing-item-wrapper">
                                        <img src="/images/tick-02.svg" alt="" className="pricing-checkmark-icon"/>
                                        <div className="pricing-item-text"> 8 hours a day</div>
                                    </div>
                                    <div className="pricing-item-wrapper">
                                        <img src="/images/tick-02.svg" alt="" className="pricing-checkmark-icon"/>
                                        <div className="pricing-item-text">5 days a week</div>
                                    </div>
                                    <div className="pricing-item-wrapper">
                                        <img src="/images/tick-02.svg" alt="" className="pricing-checkmark-icon"/>
                                        <div className="pricing-item-text">Dedicated resource</div>
                                    </div>
                                    
                                </div>
                                <button onClick={handleScrollClick} className="colorBtn justify-content-center">Get Started</button>
                            </div>
                        </div>
                        <div className="col-md-4 col-12">
                            <div className="pricing-content-wrapper">
                                <div className="pricing-plan-wrapper">
                                    <img src="/images/premium-icon.svg" alt="" className="pricing-plan-icon"/>
                                    <div className="pricing-plan-name">Pro Plan</div>
                                </div>
                                <div className="pricing-price-wrapper">
                                    <div className="pricing-price">Part-time</div>
                                    {/* <div className="pricing-month">/Month</div> */}
                                </div>
                                {/* <div className="pricing-summary-wrap">
                                    <div>Growing businesses and teams</div>
                                </div> */}
                                <div className="pricing-feature-list-wrapper">
                                    <div className="pricing-item-wrapper">
                                        <img src="/images/tick-02.svg" alt="" className="pricing-checkmark-icon"/>
                                        <div className="pricing-item-text">4 hours a day</div>
                                    </div>
                                    <div className="pricing-item-wrapper">
                                        <img src="/images/tick-02.svg" alt="" className="pricing-checkmark-icon"/>
                                        <div className="pricing-item-text">5 days a week</div>
                                    </div>
                                    <div className="pricing-item-wrapper">
                                        <img src="/images/tick-02.svg" alt="" className="pricing-checkmark-icon"/>
                                        <div className="pricing-item-text">Dedicated resource</div>
                                    </div>
                                </div>
                                <button onClick={handleScrollClick} className="colorBtn justify-content-center">Get Started</button>
                            </div>
                        </div>
                        <div className="col-md-4 col-12">
                            <div className="pricing-content-wrapper">
                                <div className="pricing-plan-wrapper">
                                    <img src="/images/standard-icon.svg" alt="" className="pricing-plan-icon"/>
                                    <div className="pricing-plan-name"> Basic Plan</div>
                                </div>
                                <div className="pricing-price-wrapper">
                                    <div className="pricing-price">Hourly</div>
                                    {/* <div className="pricing-month">/Month</div> */}
                                </div>
                                {/* <div className="pricing-summary-wrap">
                                    <div>Medium to large enterprises </div>
                                </div> */}
                                <div className="pricing-feature-list-wrapper">
                                    <div className="pricing-item-wrapper">
                                        <img src="/images/tick-02.svg" alt="" className="pricing-checkmark-icon"/>
                                        <div className="pricing-item-text">60 hours a month</div>
                                    </div>
                                    <div className="pricing-item-wrapper">
                                        <img src="/images/tick-02.svg" alt="" className="pricing-checkmark-icon"/>
                                        <div className="pricing-item-text">Pay-as-you-consume</div>
                                    </div>
                                    <div className="pricing-item-wrapper">
                                        <img src="/images/tick-02.svg" alt="" className="pricing-checkmark-icon"/>
                                        <div className="pricing-item-text">Ideal for low volume work</div>
                                    </div>
                                
                                </div>
                                <button onClick={handleScrollClick} className="colorBtn justify-content-center">Get Started</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Pricing;