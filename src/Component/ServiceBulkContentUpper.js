
import React, {useEffect} from "react";


const ServiceBulkContentUpper = ({serviceBulkContent}) => {
    
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    // if (status === 'loading') {
    //     return <div className="loaderWrp"><span className="loader"></span></div>
    // }
    return(
       
            <div className="container">
                <div className="row align-items-center mb-3">
                    <div className="col-md-12 col-12">
                        <div className="sectionHeading text-center">
                            <h2>{serviceBulkContent?.data?.listing[0].post_title}</h2>
                        </div>
                        <p className="para">{serviceBulkContent?.data?.listing[0].post_content}</p>
                    </div>
                </div>
            </div>       
    )
};

export default ServiceBulkContentUpper;