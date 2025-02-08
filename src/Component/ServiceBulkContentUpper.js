
import React, {useEffect} from "react";


const ServiceBulkContentUpper = ({serviceBulkContentUpper}) => {
    
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    // if (status === 'loading') {
    //     return <div className="loaderWrp"><span className="loader"></span></div>
    // }
    return(
       
            <div className="container">
                {console.log(serviceBulkContentUpper)}
                <div className="row align-items-center">
                    <div className="col-md-12 col-12 mb-3">
                        <div className="sectionHeading text-center">
                            <h2>{serviceBulkContentUpper?.data?.listing[0].post_title}</h2>
                        </div>
                    </div>
                    <div className="col-12">
                        <p className="para" dangerouslySetInnerHTML={{ __html: serviceBulkContentUpper?.data?.listing[0].post_content }}></p>
                    </div>
                </div>
            </div>       
    )
};

export default ServiceBulkContentUpper;