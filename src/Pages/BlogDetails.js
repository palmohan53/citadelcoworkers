import React, {useEffect, useState} from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";
import API_HOST from "../config/APIHost";
import API_ENDPOINTS from "../config/APIEndPoints";


const BlogDetails = () => {
    const {blog} = useParams()
    const [blogDetails, setBlogDetails] = useState();

    const getBlogDetails = () => {
        axios.get(`${API_HOST}${API_ENDPOINTS.blogDetails}${blog}`)
        .then((response) => {
            console.log(response.data);
            setBlogDetails(response.data.post)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
   useEffect(()=>{
        getBlogDetails()
        //eslint-disable-next-line
   }, [])
    return(
        <React.Fragment>
        <section className="innerBanner">
            <img src="images/pexels-hillaryfox-1595385.jpg" alt=""/>
            <h1>BlogDetails</h1>
            <div className="bannerOvelay"></div>
        </section>
     
        <section className="blogDetails">
            <div className="container">
                {/* <div className="sectionHeading">
                    <h3>Why</h3>
                    <h2>Choose Us</h2>
                </div> */}
                <div className="blogDetailsBx" dangerouslySetInnerHTML={{ __html: blogDetails?.post_content }}></div>
               {/* {blogDetails.post.post_content} */}
            </div>
        </section>
    </React.Fragment>
    )
};

export default BlogDetails;