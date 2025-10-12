
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
            <div className="row align-items-center">
                <div className="col-md-12 col-12">
                    <div className="sectionHeading text-center mb-3">
                        <h2>{serviceBulkContentUpper?.data?.listing[0]?.post_title}</h2>
                    </div>
                    <div className="bulkContent">
                        <div class="img-space"> <img src={serviceBulkContentUpper?.data?.listing[0]?.banner} alt={serviceBulkContentUpper?.data?.listing[0]?.post_title} className="serviceIco" /></div>
                       
                        <div className="para"  dangerouslySetInnerHTML={{ __html: serviceBulkContentUpper?.data?.listing[0].post_content }}></div>
                    </div>
                </div>
            </div>
        </div>      
    )
};

export default ServiceBulkContentUpper;