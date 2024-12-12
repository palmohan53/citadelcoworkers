import React, {useEffect} from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import API_HOST from "../config/APIHost";
import API_ENDPOINTS from "../config/APIEndPoints";
import { useQuery } from "react-query";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const getBlogList = async () => {
    const response = await axios.get(`${API_HOST}${API_ENDPOINTS.blogListing}`)
    const data = await response;
    return data;
}
const Blog = ({isRecentBlog}) => {
    const { data, status } = useQuery("users", getBlogList);
    const blogHtml = (blog, index)=> {
        return(
            <div className="col-md-4 col-12" key={index}>
                <Link to={`/blog/${blog?.post_name}`}  className="d-block">
                    <div className="blogBx blogSmall">
                        <div className="blogImg">
                            <img src="/images/blog.png" alt=""/>
                            <div className="blogAuthImg">
                                {
                                    blog.display_name === "Pinka Sharma"
                                    ?
                                    <img src="/images/pinka.png" alt=""/>
                                    :
                                    <img src="/images/suresh.png" alt=""/>
                                }
                            </div>
                        </div>
                        <div className="blogContent">
                            <h3>{blog.post_title}</h3>
                            <h5>By <b>{blog.display_name}</b></h5>
                            <p dangerouslySetInnerHTML={{ __html: blog.post_content }}></p>
                            <div className="d-flex justify-content-between">
                                <h6>7 min read</h6>
                                <button href={`/blog/${blog?.post_name}`} className="simpleBtn">Continue Read <FontAwesomeIcon icon={faArrowRight}/></button>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        )
    }
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    if (status === 'loading') {
        return <div className="loaderWrp"><span class="loader"></span></div>
    }
    return(
        <React.Fragment>
            {!isRecentBlog && <section className="innerBanner">
                <img src="images/pexels-hillaryfox-1595385.jpg" alt=""/>
                <h1>Blog</h1>
                <div className="bannerOvelay"></div>
            </section>}
            <section className="blog" id="BlogDetailsSec">
                <div className="container">
                    <div className="row">
                        {
                            isRecentBlog &&
                            <div className="col-12">
                                <div className="sectionHeading text-center mb-5">
                                    <h2>Recent Blogs</h2>
                                </div>
                            </div>
                        }
                    {
                        data?.data.listing?.map((blog, index)=>{
                            return(
                            <React.Fragment key={index}>
                                {
                                    isRecentBlog
                                    ?
                                    index < 3 &&
                                    blogHtml(blog, index)
                                    :
                                    blogHtml(blog, index)
                                }
                                    
                                </React.Fragment>  
                            )
                        })
                    }
                    
                </div>
                </div>
            </section>
        
        </React.Fragment>
    )
};

export default Blog;