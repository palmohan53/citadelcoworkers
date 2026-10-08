import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import API_HOST from "../config/APIHost";
import API_ENDPOINTS from "../config/APIEndPoints";
import { useQuery } from "react-query";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Helmet, HelmetProvider } from "react-helmet-async";

const getBlogList = async () => {
  const response = await axios.get(
    `${API_HOST}${API_ENDPOINTS.blogListing}`
  );

  return response.data;
};

const Blog = ({ isRecentBlog = false }) => {
  // ==========================================
  // STATES
  // ==========================================

  const postsPerLoad = 10;

  const [visiblePosts, setVisiblePosts] = useState(postsPerLoad);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortOrder, setSortOrder] = useState("latest");

  const { data, status } = useQuery("blogList", getBlogList);

  const allBlogs = data?.listing || [];

  // ==========================================
  // CATEGORY MAP
  // ==========================================

  const categoryMap = {
    "finance-and-accounting": [
      "finance-and-accounting",
      "bookkeeper",
      "comprehensive-accounting-services",
      "tax-preparation-services",
      "quickbooks-setup",
    ],

    "digital-marketing": [
      "digital-marketing",
      "seo",
      "hire-content-marketing-experts",
      "hire-influencer-marketing-expert",
      "hire-content-writers",
    ],

    "mobile-app-development": [
      "mobile-app-development",
      "android-development",
      "ios-app",
      "flutter",
      "react-native",
    ],

    "graphic-web-design": ["graphic-web-design"],

    "legal-process-outsourcing": ["legal-process-outsourcing"],

    "outsource-staff-augmentation": [
      "outsource-staff-augmentation",
    ],

    "virtual-assistant": [
      "virtual-assistant",
      "data-entry",
      "administrative-support",
    ],
  };

  // ==========================================
  // URL SLUGS
  // ==========================================

  const pathSlugs = window.location.pathname
    .split("/")
    .filter(Boolean);

  const lastSlug =
    pathSlugs[pathSlugs.length - 1] || "";

  const parentSlug =
    pathSlugs[pathSlugs.length - 2] || "";

  // ==========================================
  // SAFE SLUG MATCHER
  // ==========================================

  const hasSlug = (categorySlug, slug = "") => {
    if (!slug || !categorySlug) return false;

    if (Array.isArray(categorySlug)) {
      return categorySlug
        .map((s) => String(s).trim())
        .includes(slug);
    }

    if (typeof categorySlug === "string") {
      return categorySlug
        .split(",")
        .map((s) => s.trim())
        .includes(slug);
    }

    return false;
  };

  // ==========================================
  // SORT LOGIC
  // ==========================================

  const sortedBlogs = [...allBlogs].sort((a, b) => {
    if (sortOrder === "latest") {
      return (
        new Date(b.post_date) -
        new Date(a.post_date)
      );
    }

    return (
      new Date(a.post_date) -
      new Date(b.post_date)
    );
  });

  // ==========================================
  // CATEGORY FILTER
  // ==========================================

  const filteredBlogs =
    selectedCategory && !isRecentBlog
      ? sortedBlogs.filter((blog) => {
          const allowed =
            categoryMap[selectedCategory] ||
            [selectedCategory];

          return blog.category_slug?.some((cat) =>
            allowed.includes(cat)
          );
        })
      : sortedBlogs;

  // ==========================================
  // FILTER BY LAST SLUG
  // ==========================================

  const blogsByLastSlug = allBlogs.filter((blog) =>
    hasSlug(blog?.category_slug, lastSlug)
  );

  // ==========================================
  // FILTER BY PARENT SLUG
  // ==========================================

  const blogsByParentSlug = allBlogs
    .filter((blog) =>
      hasSlug(blog?.category_slug, parentSlug)
    )
    .filter(
      (parentBlog) =>
        !blogsByLastSlug.some(
          (lastBlog) =>
            lastBlog.ID === parentBlog.ID
        )
    );

  // ==========================================
  // BLOGS TO RENDER
  // ==========================================

  const blogsToRender = !isRecentBlog
    ? filteredBlogs
    : [
        ...blogsByLastSlug,
        ...blogsByParentSlug,
        ...sortedBlogs.filter(
          (b) =>
            !blogsByLastSlug.some(
              (x) => x.ID === b.ID
            ) &&
            !blogsByParentSlug.some(
              (x) => x.ID === b.ID
            )
        ),
      ].slice(0, 3);

  // ==========================================
  // RESET VISIBLE POSTS
  // WHEN FILTER / SORT CHANGES
  // ==========================================

  useEffect(() => {
    setVisiblePosts(postsPerLoad);
    window.scrollTo(0, 0);
  }, [selectedCategory, sortOrder]);

  // ==========================================
  // INFINITE SCROLL
  // ==========================================

  useEffect(() => {
    if (isRecentBlog) return;

    const handleScroll = () => {
      const scrollPosition =
        window.innerHeight + window.scrollY;

      const pageHeight =
        document.documentElement.scrollHeight;

      // Start loading before user reaches bottom
      if (scrollPosition >= pageHeight - 500) {
        setVisiblePosts((prev) => {
          if (prev >= blogsToRender.length) {
            return prev;
          }

          return Math.min(
            prev + postsPerLoad,
            blogsToRender.length
          );
        });
      }
    };

    window.addEventListener(
      "scroll",
      handleScroll,
      { passive: true }
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, [
    isRecentBlog,
    blogsToRender.length,
  ]);

  // ==========================================
  // CURRENT POSTS
  // ==========================================

  const currentPosts = !isRecentBlog
    ? blogsToRender.slice(0, visiblePosts)
    : blogsToRender;

  // ==========================================
  // BLOG CARD
  // ==========================================

  const blogHtml = (blog, index) => (
    <div
      className={`${
        !isRecentBlog
          ? "blogPageBx col-md-6 col-12"
          : "col-md-4 col-12"
      }`}
      key={blog.ID || index}
    >
      <Link
        to={`/blog/${blog?.post_name}`}
        className="d-block"
      >
        <div className="blogBx blogSmall ghh">

          {/* BLOG IMAGE */}
          <div className="blogImg">
            <img
              src={blog.banner}
              alt={blog.post_title}
              loading="lazy"
              decoding="async"
            />

            {/* AUTHOR IMAGE */}
            <div className="blogAuthImg">

              {blog.display_name ===
              "Pinka Sharma" ? (
                <img
                  src="/images/pinka.webp"
                  alt="Pinka Sharma"
                  loading="lazy"
                  decoding="async"
                />
              ) : blog.display_name ===
                "Kumari Santosh" ? (
                <img
                  src="/images/Santosh.webp"
                  alt="Kumari Santosh"
                  loading="lazy"
                  decoding="async"
                />
              ) : (
                <img
                  src="/images/suresh.webp"
                  alt="Suresh Sharma"
                  loading="lazy"
                  decoding="async"
                />
              )}

            </div>
          </div>

          {/* BLOG CONTENT */}
          <div className="blogContent">

            <h3>
              {blog.post_title}
            </h3>

            <h5>
              By <b>{blog.display_name}</b>
            </h5>

            <p
              className="top-html-blog"
              dangerouslySetInnerHTML={{
                __html:
                  blog.post_content?.slice(
                    0,
                    120
                  ) + "...",
              }}
            />

            <div className="d-flex justify-content-between">

              <h6>7 min read</h6>

              <button
                className="simpleBtn"
                type="button"
              >
                Read More{" "}
                <FontAwesomeIcon
                  icon={faArrowRight}
                />
              </button>

            </div>

          </div>

        </div>
      </Link>
    </div>
  );

  // ==========================================
  // LOADING
  // ==========================================

  if (status === "loading") {
    return (
      <div className="loaderWrp">
        <span className="loader" />
      </div>
    );
  }

  // ==========================================
  // MAIN RETURN
  // ==========================================

  return (
    <>
      <HelmetProvider>

        <Helmet />

        {/* ======================================
            HERO
        ====================================== */}

        {!isRecentBlog && (
          <section className="innerBanner heroSectionblog">

            <div className="heroOverlay"></div>

            <div className="innerBannerContent">

              <h1>Blog</h1>

              <p>
                Not just blogs — the insights you
                need to outthink, outpace and
                outperform.
              </p>

            </div>

          </section>
        )}

        {/* ======================================
            BLOG SECTION
        ====================================== */}

        <section
          className="blog"
          id="BlogDetailsSec"
        >

          <div className="container">

            {/* ==================================
                FILTER + SORT BAR
            ================================== */}

            {!isRecentBlog && (
              <div className="blogFilterBar mb-4">

                <div className="d-flex flex-wrap justify-content-between align-items-center gap-3">

                  {/* FILTER */}

                  <div className="align-items-center gap-2">

                    <span className="fw-bold">
                      Filter By:
                    </span>

                    <select
                      className="form-select customSelect"
                      value={selectedCategory}
                      onChange={(e) =>
                        setSelectedCategory(
                          e.target.value
                        )
                      }
                    >

                      <option value="">
                        All Categories
                      </option>

                      <option value="virtual-assistant">
                        Virtual Assistant
                      </option>

                      <option value="finance-and-accounting">
                        Finance & Accounting
                      </option>

                      <option value="graphic-web-design">
                        Graphic & Web Design
                      </option>

                      <option value="digital-marketing">
                        Digital Marketing
                      </option>

                      <option value="legal-process-outsourcing">
                        Legal Process Outsourcing
                      </option>

                      <option value="mobile-app-development">
                        Mobile App Development
                      </option>

                      <option value="outsource-staff-augmentation">
                        Staff Augmentation
                      </option>

                      <option value="hire-content-writers">
                        Content Writing
                      </option>

                      <option value="development">
                        Development & IT
                      </option>

                      <option value="engineering-and-architecture">
                        Engineering & Architecture
                      </option>

                    </select>

                  </div>

                  {/* SORT */}

                  <div className="align-items-center gap-2 flex-dd">

                    <span className="fw-bold">
                      Sort By:
                    </span>

                    <select
                      className="form-select customSelect"
                      value={sortOrder}
                      onChange={(e) =>
                        setSortOrder(
                          e.target.value
                        )
                      }
                    >

                      <option value="latest">
                        Recent
                      </option>

                      <option value="oldest">
                        Oldest
                      </option>

                    </select>

                  </div>

                </div>

              </div>
            )}

            {/* ==================================
                BLOG GRID
            ================================== */}

            <div className="row">

              {/* RECENT BLOG HEADING */}

              {isRecentBlog && (
                <div className="col-12">

                  <div className="sectionHeading text-center mb-4">

                    <h2>
                      From Our Blog
                    </h2>

                    <p>
                      Ensure outsourcing success
                      from the start with key
                      insider tips and trends for{" "}
                      <b>
                        over 150 industries
                      </b>
                      , right at your fingertips.
                    </p>

                  </div>

                </div>
              )}

              {/* BLOGS */}

              {currentPosts.map(
                (blog, index) =>
                  blogHtml(blog, index)
              )}

              {/* ==================================
                  VIEW ALL BLOGS
              ================================== */}

              {isRecentBlog && (
                <div className="text-center mt-4">

                  <Link
                    to="/blog"
                    className="colorBtn wideBtn"
                  >
                    View All Blogs{" "}
                    <FontAwesomeIcon
                      icon={faArrowRight}
                    />
                  </Link>

                </div>
              )}

            </div>

            {/* ==================================
                LOADING INDICATOR
            ================================== */}

            {!isRecentBlog &&
              visiblePosts <
                blogsToRender.length && (
                <div className="text-center py-4">

                  <div className="blogLoading">
                    Loading more blogs...
                  </div>

                </div>
              )}

          </div>

        </section>

      </HelmetProvider>
    </>
  );
};

export default Blog;