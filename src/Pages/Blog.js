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

  const {data,status} = useQuery("blogList", getBlogList);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  // ✅ URL Slugs
  const pathSlugs = window.location.pathname.split("/").filter(Boolean);
  const lastSlug = pathSlugs[pathSlugs.length - 1] || "";
  const parentSlug = pathSlugs[pathSlugs.length - 2] || "";

  const allBlogs = data?.data?.listing || [];

  // ✅ SAFE slug matcher (string / array / null safe)
  const hasSlug = (categorySlug, slug = "") => {
    if (!slug || !categorySlug) return false;

    // case 1: array
    if (Array.isArray(categorySlug)) {
      return categorySlug
        .map(s => String(s).trim())
        .includes(slug);
    }

    // case 2: string
    if (typeof categorySlug === "string") {
      return categorySlug
        .split(",")
        .map(s => s.trim())
        .includes(slug);
    }

    return false;
  };

  // ✅ lastSlug blogs
  const blogsByLastSlug = allBlogs.filter(blog =>
    hasSlug(blog?.category_slug, lastSlug)
  );

  // ✅ parentSlug blogs (no duplicates)
  const blogsByParentSlug = allBlogs
    .filter(blog => hasSlug(blog?.category_slug, parentSlug))
    .filter(parentBlog =>
      !blogsByLastSlug.some(lastBlog => lastBlog.ID === parentBlog.ID)
    );

  // ✅ Final blogs list
  const blogsToRender = !isRecentBlog
    ? allBlogs
    : [
        ...blogsByLastSlug,
        ...blogsByParentSlug,
        ...allBlogs.filter(b =>
          !blogsByLastSlug.some(x => x.ID === b.ID) &&
          !blogsByParentSlug.some(x => x.ID === b.ID)
        )
      ].slice(0, 3);

  const currentPosts = !isRecentBlog
    ? blogsToRender.slice(indexOfFirstPost, indexOfLastPost)
    : blogsToRender;

  const paginate = (pageNumber,e) => {
    e.preventDefault();
    window.scrollTo(0,320);
    setCurrentPage(pageNumber);
  };

  const blogHtml = (blog,index) => (
    <div
      className={`${!isRecentBlog ? "blogPageBx col-md-6 col-12" : "col-md-4 col-12"}`}
      key={index}
    >
      <Link to={`/blog/${blog?.post_name}`} className="d-block">
        <div className="blogBx blogSmall">
          <div className="blogImg">
            <img src={blog.banner} alt={blog.post_title} />
            <div className="blogAuthImg">
              {blog.display_name === "Pinka Sharma" ? (
                <img src="/images/pinka.webp" alt="Pinka Sharma" />
              ) : blog.display_name === "Kumari Santosh" ? (
                <img src="/images/Santosh.webp" alt="Kumari Santosh" />
              ) : (
                <img src="/images/suresh.webp" alt="Suresh Sharma" />
              )}
            </div>
          </div>

          <div className="blogContent">
            <h3>{blog.post_title}</h3>
            <h5>By <b>{blog.display_name}</b></h5>
            <p dangerouslySetInnerHTML={{__html: blog.post_content}} />
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

  useEffect(() => {
    window.scrollTo(0,0);
  }, []);

  if(status === "loading"){
    return <div className="loaderWrp"><span className="loader"/></div>;
  }

  return(
    <React.Fragment>
      <HelmetProvider>
        <Helmet />

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

              {currentPosts.map((blog,index) => blogHtml(blog,index))}

            </div>
          </div>

          {!isRecentBlog && (
            <Pagination
              postsPerPage={postsPerPage}
              totalPosts={blogsToRender.length}
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
