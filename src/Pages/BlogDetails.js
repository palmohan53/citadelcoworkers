import React, {useEffect} from "react";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { useQuery } from "react-query";
import axios from "axios";
import API_HOST from "../config/APIHost";
import API_ENDPOINTS from "../config/APIEndPoints";
import RecentBlog from "../Component/RecentBlog";



const BlogDetails = () => {
    const {blog} = useParams()
    const getBlogDetails = async () => {
        window.scrollTo(0, 0)
        const response = await axios.get(`${API_HOST}${API_ENDPOINTS.blogDetails}${blog}`)
        const data = await response.data;
        return data;
    }
    const { data, status } = useQuery(["user", blog], getBlogDetails);
  
   useEffect(()=>{
    window.scrollTo(0, 0)
    //eslint-disable-next-line
   }, [])
   
    if (status === 'loading') {
        return <div className="loaderWrp"><span className="loader"></span></div>
    }
    return(
        <React.Fragment>
            <HelmetProvider>
            <Helmet>
                <title>{data?.post?.post_title}</title>
                <meta name="description" content="Nested component" />
            </Helmet>
        <section className="innerBanner text-center">
            <img src={data.banner} alt=""/>
            <div className="innerBannerContent">
                <h1>{data?.post?.post_title}</h1>
                <div className="blogAuth">
                    {
                        data.post.auther_name === "Pinka Sharma"
                        ?
                        <img src="/images/pinka.png" alt=""/>
                        :
                        <img src="/images/suresh.png" alt=""/>
                    }
                    <h5>{data.post.auther_name}</h5>
                    <h5>{data.post.post_modified}</h5>
                </div>
            </div>
            <div className="bannerOvelay"></div>
        </section>
     
        <section className="blogDetails">
            <div className="container">
                <div className="blogDetailsBx" dangerouslySetInnerHTML={{ __html: data?.post?.post_content }}></div>
            </div>
        </section>
        <div className="liteGreyBg">
            <RecentBlog/>
        </div>
        </HelmetProvider>
    </React.Fragment>
    )
};

export default BlogDetails;