const API_ENDPOINTS = {
    blogListing: 'api/getBlogListing.php?post_type=post',
    blogDetails: 'api/getBlogDetails.php?post_name=',
    services: 'api/getBlogListing.php?post_type=page',
    servicesMenuList: 'api/services.php',
    serviceListing: 'api/getServicesListing.php?post_type=home_services&post_name=services',
    subServiceListing: 'api/getServicesListing.php?post_type=home_services&post_name=',
    profile: 'api/getOurTeam.php?post_type=our_team',
    serviceProfile: 'api/getOurTeam.php?post_type=our_team&post_name=',
    serviceBulkcontent: 'api/getBulkContent.php?post_type=bulk_content&post_name=',
    serviceBulkcontentUpper: 'api/getUpperBulkContent.php?post_type=upper_bulk_content&post_name=',
    serviceTestimonial: 'api/getTestimonial.php?post_type=testimonial&post_name=',
    testimonial: 'api/getTestimonial.php?post_type=testimonial',
    contactUs: 'api/contactUsapi.php',
    serviceMenu: 'api/getMenulisting.php',
    serviceSection: 'api/getSection.php?post_type=steps_section&post_name=',
    Toolssection: 'api/getToolSection.php?post_type=tool_section&post_name=',
    Certificationsection: 'api/getCertificationSection.php?post_type=certification&post_name=',
}

export default API_ENDPOINTS;