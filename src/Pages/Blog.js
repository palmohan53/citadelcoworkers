import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import API_HOST from "../config/APIHost";
import API_ENDPOINTS from "../config/APIEndPoints";
import { useQuery } from "react-query";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Pagination from "../Component/Pagination";

const getBlogList = async () => {
  const response = await axios.get(`${API_HOST}${API_ENDPOINTS.blogListing}`);
  return response.data;
};

const Blog = ({ isRecentBlog = false }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  const { data, status } = useQuery("blogList", getBlogList);

  const allBlogs = data?.listing || [];

  // ✅ Get URL Slugs
  const pathSlugs = window.location.pathname.split("/").filter(Boolean);
  const lastSlug = pathSlugs[pathSlugs.length - 1] || "";
  const parentSlug = pathSlugs[pathSlugs.length - 2] || "";

  // ✅ Safe slug matcher
  const hasSlug = (categorySlug, slug = "") => {
    if (!slug || !categorySlug) return false;

    if (Array.isArray(categorySlug)) {
      return categorySlug.map(s => String(s).trim()).includes(slug);
    }

    if (typeof categorySlug === "string") {
      return categorySlug
        .split(",")
        .map(s => s.trim())
        .includes(slug);
    }

    return false;
  };

  // ✅ Filter by slug
  const blogsByLastSlug = allBlogs.filter(blog =>
    hasSlug(blog?.category_slug, lastSlug)
  );

  const blogsByParentSlug = allBlogs
    .filter(blog => hasSlug(blog?.category_slug, parentSlug))
    .filter(parentBlog =>
      !blogsByLastSlug.some(lastBlog => lastBlog.ID === parentBlog.ID)
    );

  // ✅ FINAL BLOG LIST (with latest sorting)
  const sortedBlogs = [...allBlogs].sort(
    (a, b) => new Date(b.post_date) - new Date(a.post_date)
  );

  const blogsToRender = !isRecentBlog
    ? sortedBlogs
    : [
        ...blogsByLastSlug,
        ...blogsByParentSlug,
        ...sortedBlogs.filter(
          b =>
            !blogsByLastSlug.some(x => x.ID === b.ID) &&
            !blogsByParentSlug.some(x => x.ID === b.ID)
        )
      ].slice(0, 3);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  const currentPosts = !isRecentBlog
    ? blogsToRender.slice(indexOfFirstPost, indexOfLastPost)
    : blogsToRender;

  const paginate = (pageNumber, e) => {
    e.preventDefault();
    window.scrollTo(0, 320);
    setCurrentPage(pageNumber);
  };

  const blogHtml = (blog, index) => (
    <div
      className={`${
        !isRecentBlog ? "blogPageBx col-md-6 col-12" : "col-md-4 col-12"
      }`}
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
            <h5>
              By <b>{blog.display_name}</b>
            </h5>

            <p>
              {blog.post_content
                ?.replace(/<[^>]+>/g, "")
                .slice(0, 120)}
              ...
            </p>

            <div className="d-flex justify-content-between">
              <h6>7 min read</h6>
              <button className="simpleBtn">
                Read More <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (status === "loading") {
    return (
      <div className="loaderWrp">
        <span className="loader" />
      </div>
    );
  }

  return (
    <>
      <HelmetProvider>
        <Helmet />

        {!isRecentBlog && (
          <section className="innerBanner">
            <div className="innerBannerContent">
              <h1>Blog</h1>
            </div>
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
                      Ensure outsourcing success from the start with key insider
                      tips and trends for <b>over 150 industries</b>, right at
                      your fingertips.
                    </p>
                  </div>
                </div>
              )}

              {currentPosts.map((blog, index) => blogHtml(blog, index))}

              {isRecentBlog && (
                <div className="text-center mt-4">
                  <Link to="/blog" className="colorBtn wideBtn">
                    View All Blogs{" "}
                    <FontAwesomeIcon icon={faArrowRight} />
                  </Link>
                </div>
              )}
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
    </>
  );
};

export default Blog;