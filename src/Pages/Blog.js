import React,{useEffect,useState} from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import API_HOST from "../config/APIHost";
import API_ENDPOINTS from "../config/APIEndPoints";
import {useQuery} from "react-query";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import {Helmet,HelmetProvider} from "react-helmet-async";
import Pagination from "../Component/Pagination";

const getBlogList = async () => {
  const response = await axios.get(`${API_HOST}${API_ENDPOINTS.blogListing}`);
  return response;
};

const Blog = ({isRecentBlog}) => {
  const [currentPage,setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const {data,status} = useQuery("users", getBlogList);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  // ✅ URL Slugs (supports /virtual-assistant/data-entry)
  const pathSlugs = window.location.pathname.split("/").filter(Boolean);
  const lastSlug = pathSlugs[pathSlugs.length - 1] || "";
  const parentSlug = pathSlugs[pathSlugs.length - 2] || "";

  const allBlogs = data?.data?.listing || [];

  // ✅ First try: match last slug (data-entry)
  const blogsByLastSlug = allBlogs.filter((blog) => {
    return blog?.category_slug && blog.category_slug.includes(lastSlug);
  });

  // ✅ Fallback: if last slug no match, match parent slug (virtual-assistant)
  const blogsByParentSlug = allBlogs.filter((blog) => {
    return blog?.category_slug && blog.category_slug.includes(parentSlug);
  });

  // ✅ Final list for recent blog section
  const blogsToRender = !isRecentBlog
    ? allBlogs
    : blogsByLastSlug.length > 0
      ? blogsByLastSlug
      : blogsByParentSlug.length > 0
        ? blogsByParentSlug
        : allBlogs;

  const currentPosts = blogsToRender.slice(indexOfFirstPost,indexOfLastPost);

  const paginate = (pageNumber,e) => {
    e.preventDefault();
    window.scrollTo(0,320);
    setCurrentPage(pageNumber);
  };

  const blogHtml = (blog,index) => (
    <div className={`${!isRecentBlog ? "blogPageBx col-md-6 col-12" : "col-md-4 col-12"}`} key={index}>
      <Link to={`/blog/${blog?.post_name}`} className="d-block">
        <div className="blogBx blogSmall">
          <div className="blogImg">
            <img src={blog.banner} alt={blog.post_title}/>
            <div className="blogAuthImg">
               {
                                    blog.display_name === "Pinka Sharma" ? (
                                        <img src="/images/pinka.webp" alt="Pinka Sharma" />
                                    ) : blog.display_name === "Kumari Santosh" ? (
                                        <img src="/images/Santosh.webp" alt="Kumari Santosh" />
                                    ) : (
                                        <img src="/images/suresh.webp" alt="Suresh Sharma" />
                                    )
                                }
            </div>
          </div>
          <div className="blogContent">
            <h3>{blog.post_title}</h3>
            <h5>By <b>{blog.display_name}</b></h5>
            <p dangerouslySetInnerHTML={{__html:blog.post_content}}/>
            <div className="d-flex justify-content-between">
              <h6>7 min read</h6>
              <button className="simpleBtn">
                Read More <FontAwesomeIcon icon={faArrowRight}/>
              </button>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );

  useEffect(() => { window.scrollTo(0,0) }, []);

  if(status === "loading"){
    return <div className="loaderWrp"><span className="loader"/></div>;
  }

  return(
    <React.Fragment>
      <HelmetProvider>
        <Helmet/>
        {!isRecentBlog && (
          <section className="innerBanner">
            <div className="innerBannerContent">
              <h1>Blog</h1>
            </div>
            <div className="bannerOvelay"/>
          </section>
        )}

        <section className="blog" id="BlogDetailsSec">
          <div className="container">
            <div className="row">
              {isRecentBlog && (
                <div className="col-12">
                  <div className="sectionHeading text-center mb-4">
                    <h2>From Our Blog</h2>
                    <p>
                      Ensure outsourcing success from the start with key insider tips and trends for <b>over 150 industries</b>, right at your fingertips.
                    </p>
                  </div>
                </div>
              )}

              {currentPosts
                ?.slice(0, isRecentBlog ? 3 : currentPosts.length)
                .map((blog,index) => blogHtml(blog,index))
              }
            </div>
          </div>

          {!isRecentBlog && (
            <Pagination
              postsPerPage={postsPerPage}
              totalPosts={data?.data?.listing?.length}
              paginate={paginate}
              currentPage={currentPage}
            />
          )}
        </section>
      </HelmetProvider>
    </React.Fragment>
  );
};

export default Blog;
