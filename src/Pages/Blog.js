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
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortOrder, setSortOrder] = useState("latest"); // ✅ NEW
  const { data, status } = useQuery("blogList", getBlogList);

  const allBlogs = data?.listing || [];
// ✅ CATEGORY MAP
  const categoryMap = {
    "finance-and-accounting": [
      "finance-and-accounting",
      "bookkeeper",
      "comprehensive-accounting-services",
      "tax-preparation-services",
      "quickbooks-setup"
    ],
    "digital-marketing": [
      "digital-marketing",
      "seo",
      "hire-content-marketing-experts",
      "hire-influencer-marketing-expert",
      "hire-content-writers"
    ],
    "mobile-app-development": [
      "mobile-app-development",
      "android-development",
      "ios-app",
      "flutter",
      "react-native"
    ],
    "graphic-web-design": ["graphic-web-design"],
    "legal-process-outsourcing": ["legal-process-outsourcing"],
    "outsource-staff-augmentation": ["outsource-staff-augmentation"],
    "virtual-assistant": [
      "virtual-assistant",
      "data-entry",
      "administrative-support"
    ]
  };
  
  
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

  // ✅ SORT LOGIC
  const sortedBlogs = [...allBlogs].sort((a, b) => {
    if (sortOrder === "latest") {
      return new Date(b.post_date) - new Date(a.post_date);
    } else {
      return new Date(a.post_date) - new Date(b.post_date);
    }
  });

  // ✅ FILTER
  const filteredBlogs =
    selectedCategory && !isRecentBlog
      ? sortedBlogs.filter(blog => {
          const allowed = categoryMap[selectedCategory] || [selectedCategory];
          return blog.category_slug?.some(cat => allowed.includes(cat));
        })
      : sortedBlogs;
  // ✅ Filter by slug
  const blogsByLastSlug = allBlogs.filter(blog =>
    hasSlug(blog?.category_slug, lastSlug)
  );

  const blogsByParentSlug = allBlogs
    .filter(blog => hasSlug(blog?.category_slug, parentSlug))
    .filter(parentBlog =>
      !blogsByLastSlug.some(lastBlog => lastBlog.ID === parentBlog.ID)
    );

 

  const blogsToRender = !isRecentBlog
    ? filteredBlogs
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
            <section className="innerBanner heroSectionblog">
		  <div class="heroOverlay"></div>
            <div className="innerBannerContent">
              <h1>Blog</h1>
			  <p>Not just blogs — the insights you need to outthink, outpace and outperform.</p>
            </div>
          </section>
        )}

        <section className="blog" id="BlogDetailsSec">
          <div className="container">
		  
		    {/* 🔥 FILTER + SORT BAR */}
            {!isRecentBlog && (
              <div className="blogFilterBar mb-4">
                <div className="d-flex flex-wrap justify-content-between align-items-center gap-3">

                  <div className="align-items-center gap-2 ">
                    <span className="fw-bold">Filter By:</span>

                    <select
                      className="form-select customSelect"
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                      <option value="">All Categories</option>
                      <option value="virtual-assistant">Virtual Assistant</option>
                      <option value="finance-and-accounting">Finance & Accounting</option>
                      <option value="graphic-web-design">Graphic & Web Design</option>
                      <option value="digital-marketing">Digital Marketing</option>
                      <option value="legal-process-outsourcing">Legal Process Outsourcing</option>
                      <option value="mobile-app-development">Mobile App Development</option>
                      <option value="outsource-staff-augmentation">Staff Augmentation</option>
                      <option value="hire-content-writers">Content Writing</option>
                      <option value="development">Development & IT</option>
                      <option value="engineering-and-architecture">Engineering & Architecture</option>
                    </select>
                  </div>

                  <div className="align-items-center gap-2 flex-dd">
                    <span className="fw-bold">Sort By:</span>

                    <select
                      className="form-select customSelect"
                      value={sortOrder}
                      onChange={(e) => setSortOrder(e.target.value)}
                    >
                      <option value="latest">Recent </option>
                      <option value="oldest">Oldest</option>
                    </select>
                  </div>

                </div>
              </div>
            )}
			
			
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