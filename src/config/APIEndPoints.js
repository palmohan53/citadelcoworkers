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
}

export default API_ENDPOINTS;