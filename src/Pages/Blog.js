import React, {useEffect, useState} from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import API_HOST from "../config/APIHost";
import API_ENDPOINTS from "../config/APIEndPoints";
import { useQuery } from "react-query";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
// import Testimonial from "../Component/Testimonial";
import Pagination from "../Component/Pagination";

const getBlogList = async () => {
    const response = await axios.get(`${API_HOST}${API_ENDPOINTS.blogListing}`)
    const data = await response;
    return data;
}
const Blog = ({isRecentBlog}) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);
    const { data, status } = useQuery("users", getBlogList);
    
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = data?.data.listing.slice(indexOfFirstPost, indexOfLastPost);
    const paginate = (pageNumber, e) => {
        e.preventDefault();
        window.scrollTo(0, 320)
        setCurrentPage(pageNumber);
    };

    const blogHtml = (blog, index)=> {
        return(
            <div className={`${!isRecentBlog ? 'blogPageBx col-md-6 col-12' : 'col-md-4 col-12'}`} key={index}>
                <Link to={`/blog/${blog?.post_name}`}  className="d-block">
                    <div className="blogBx blogSmall">
                        <div className="blogImg">
                            <img src={blog.banner} alt={blog.post_title}/>
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
        return <div className="loaderWrp"><span className="loader"></span></div>
    }
    return(
        <React.Fragment>
            {!isRecentBlog && <section className="innerBanner">
                <img src="/images/blog-banner.jpg" alt=""/>
                <div className="innerBannerContent">
                    <h1>Blog</h1>
                    {/* <p>The Toptal Design Blog is a hub for advanced design studies by professional designers in the Toptal network on all facets of digital design, ranging from detailed design tutorials to in-depth coverage of new design trends, techniques, and technologies.</p> */}
                </div>
                <div className="bannerOvelay"></div>
            </section>}
            <section className="blog" id="BlogDetailsSec">
                <div className="container">
                    <div className="row">
                        {
                            isRecentBlog &&
                            <div className="col-12">
                                <div className="sectionHeading text-center mb-4">
                                    <h2>From our blog</h2>
                                    <p>Ensure outsourcing success from the start with key insider tips and trends for <b>over 150 industries</b>, right at your fingertips.</p>
                                </div>
                            </div>
                        }
                        {
                            currentPosts?.map((blog, index)=>{
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
                {!isRecentBlog && <Pagination
                    postsPerPage={postsPerPage}
                    totalPosts={data?.data.listing.length}
                    paginate={paginate}
                    currentPage={currentPage}
                />}
            </section>
            
            {/* {!isRecentBlog && <Testimonial />} */}
        </React.Fragment>
    )
};

export default Blog;