import React, { useEffect, useRef } from "react";
import { Link, useParams } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useQuery } from "react-query";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faXTwitter, faLinkedinIn, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';
import axios from "axios";
import API_HOST from "../config/APIHost";
import API_ENDPOINTS from "../config/APIEndPoints";
import RecentBlog from "../Component/RecentBlog";
import BlogContactForm from "../Component/BlogContactForm";

const BlogDetails = () => {

  const { blog } = useParams();
  const contactref = useRef(null);

  const handleScrollClick = () => {
    contactref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const getBlogDetails = async () => {
    window.scrollTo(0, 0);
    const response = await axios.get(`${API_HOST}${API_ENDPOINTS.blogDetails}${blog}`);
    return response.data;
  };

  const { data, status } = useQuery(["user", blog], getBlogDetails);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${months[date.getMonth()]} ${date.getDate().toString().padStart(2, '0')}, ${date.getFullYear()}`;
  };

  // Scroll Top on Load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // 🔥 Reveal Animation Effect
  useEffect(() => {

    if (!data?.post?.post_content) return;

    const initReveal = () => {
      const container = document.querySelector(".blogDetailsBx");
      if (!container) return;

      const elements = container.querySelectorAll(".reveal");
      if (!elements.length) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("active");
              observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.15,
          rootMargin: "0px 0px -80px 0px",
        }
      );

      elements.forEach((el) => observer.observe(el));
    };

    const t1 = setTimeout(initReveal, 300);
    const t2 = setTimeout(initReveal, 900);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };

  }, [data]);

  if (status === 'loading') {
    return (
      <div className="loaderWrp">
        <span className="loader"></span>
      </div>
    );
  }

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>{data?.seo?.meta_title || data?.post?.post_title}</title>
          <meta
            name="description"
            content={data?.seo?.meta_description || data?.post?.post_excerpt || data?.post?.post_title}
          />
          <link rel="canonical" href={window.location.href} />
        </Helmet>

      <section
  className="innerBanner blogDetailsSec singleblog"
  style={{
    backgroundImage: `url(${data?.banner})`
  }}
>
          <div className="container pt-4">
            <div className="row">
              <div className="col-md-7 new-design-rel">
                <ul className="breadcrumb">
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/blog">Blog</Link></li>
                  <li>
                    <Link to="/" onClick={(e) => e.preventDefault()}>
                      {data?.post?.post_title}
                    </Link>
                  </li>
                </ul>

                <h1>{data?.post?.post_title}</h1>

            

                <div className="blogAuth">
                  {
                    data.post.author_name === "Pinka Sharma" ? (
                      <img src="/images/pinka.webp" alt="Pinka Sharma" />
                    ) : data.post.author_name === "Kumari Santosh" ? (
                      <img src="/images/Santosh.webp" alt="Kumari Santosh" />
                    ) : (
                      <img src="/images/suresh.webp" alt="Suresh Sharma" />
                    )
                  }

                  <h5>{data.post.author_name}</h5>
                  <h6>{formatDate(data.post.post_date)}</h6>
                </div>

                <ul className="listInline socialShare">
                  <li>Share:</li>
                  <li>
                    <Link to={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`} target="_blank" rel="noreferrer">
                      <FontAwesomeIcon icon={faFacebookF} />
                    </Link>
                  </li>
                  <li>
                    <Link to={`https://twitter.com/intent/tweet?text=${data?.post?.post_title}&url=${window.location.href}`} target="_blank" rel="noreferrer">
                      <FontAwesomeIcon icon={faXTwitter} />
                    </Link>
                  </li>
                  <li>
                    <Link to={`https://www.linkedin.com/sharing/share-offsite/?url=${window.location.href}`} target="_blank" rel="noreferrer">
                      <FontAwesomeIcon icon={faLinkedinIn} />
                    </Link>
                  </li>
                  <li>
                    <Link to="https://www.youtube.com/@CitadelCoworkers" target="_blank" rel="noreferrer">
                      <FontAwesomeIcon icon={faYoutube} />
                    </Link>
                  </li>
                  <li>
                    <Link to="https://www.instagram.com/" target="_blank" rel="noreferrer">
                      <FontAwesomeIcon icon={faInstagram} />
                    </Link>
                  </li>
                </ul>
              
              </div>
   
            </div>
          </div>
          <div className="bannerOvelay"></div>
        </section>

        <section className="blogDetails">
          <div className="container">
            <div className="blog-design">
              <div className="left-blo-det">
                <div
                  className="blogDetailsBx"
                  dangerouslySetInnerHTML={{ __html: data?.post?.post_content }}
                ></div>
              </div>

              <div className="left-right-formblog-det ">
                <div ref={contactref}>
                  <BlogContactForm />
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="liteGreyBg">
          <RecentBlog />
        </div>

      </HelmetProvider>
    </>
  );
};

export default BlogDetails;