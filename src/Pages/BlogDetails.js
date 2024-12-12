import React, {useEffect} from "react";
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
        return <div className="loaderWrp"><span class="loader"></span></div>
    }
    return(
        <React.Fragment>
        <section className="innerBanner text-center">
            <img src="images/pexels-hillaryfox-1595385.jpg" alt=""/>
            <h1>{data?.post?.post_title}</h1>
            <div className="bannerOvelay"></div>
        </section>
     
        <section className="blogDetails pb-0">
            <div className="container">
                <div className="blogDetailsBx" dangerouslySetInnerHTML={{ __html: data?.post?.post_content }}></div>
            </div>
        </section>
        <RecentBlog/>
    </React.Fragment>
    )
};

export default BlogDetails;