
import React, {useEffect} from "react";


const ServiceBulkContent = ({serviceBulkContent}) => {
    
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
                        <h2>{serviceBulkContent?.data?.listing[0]?.post_title}</h2>
                    </div>
                    <div className="bulkContent mt-5">
                        <div className="para"  dangerouslySetInnerHTML={{ __html: serviceBulkContent?.data?.listing[0].post_content }}></div>
                    <img src={serviceBulkContent?.data?.listing[0]?.banner} alt={serviceBulkContent?.data?.listing[0]?.post_title} className="serviceIco" />
                    </div>
                </div>
            </div>
        </div>       
    )
};

export default ServiceBulkContent;