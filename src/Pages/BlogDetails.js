import React, {useEffect} from "react";
import { Link } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { useQuery } from "react-query";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faXTwitter, faLinkedinIn, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';
import axios from "axios";
import API_HOST from "../config/APIHost";
import API_ENDPOINTS from "../config/APIEndPoints";
import RecentBlog from "../Component/RecentBlog";



const BlogDetails = () => {
    const {blog} = useParams();
    
    const getBlogDetails = async () => {
        window.scrollTo(0, 0)
        const response = await axios.get(`${API_HOST}${API_ENDPOINTS.blogDetails}${blog}`)
        const data = await response.data;
        return data;
    }
    const { data, status } = useQuery(["user", blog], getBlogDetails);
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const month = months[date.getMonth()];
        const day = date.getDate().toString().padStart(2, '0');
        const year = date.getFullYear();
        
        return `${month} ${day}, ${year}`;
    };
   useEffect(()=>{
    window.scrollTo(0, 0)
    //eslint-disable-next-line
   }, [])
   
    if (status === 'loading') {
        return <div className="loaderWrp"><span className="loader"></span></div>
    }
    return(
        <React.Fragment>
            <HelmetProvider>
            <Helmet>
  <title>{data?.seo?.meta_title || data?.post?.post_title}</title>

  <meta
    name="description"
    content={data?.seo?.meta_description || data?.post?.post_excerpt || data?.post?.post_title}
  />

  <link rel="canonical" href={window.location.href} />
</Helmet>
        <section className="innerBanner blogDetailsSec">
            
            <div className="container pt-4">
                <div className="row">
                    <div className="col-md-6">
                        <div className="">
                            <ul className="breadcrumb">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/blog">Blog</Link></li>
                                <li><Link to="/" onClick={(e)=>e.preventDefault()}>{data?.post?.post_title}</Link></li>
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
                                <li>Share: </li>
                                <li><Link to={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebookF} /></Link></li>
                                <li><Link to={`https://twitter.com/intent/tweet?text=${data?.post?.post_title}&url=${window.location.href}`} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faXTwitter} /></Link></li>
                                <li><Link to={`https://www.linkedin.com/sharing/share-offsite/?url=${window.location.href}`} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedinIn} /></Link></li>
                                <li><Link to="https://www.youtube.com/@CitadelCoworkers" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faYoutube} /></Link></li>
                                <li><Link to="https://www.instagram.com/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} /></Link></li>
                            </ul>
                        </div>
                        
                    </div>
                    <div className="col-md-6 col-12">
                        <div className="blogDetailsBanner">
                            <img src={data.banner} alt={data?.post?.post_title} className="sss"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bannerOvelay"></div>
        </section>
     
        <section className="blogDetails">
            <div className="container">
                <div className="blogDetailsBx" dangerouslySetInnerHTML={{ __html: data?.post?.post_content }}></div>
            </div>
        </section>
        <div className="liteGreyBg">
            <RecentBlog/>
        </div>
        </HelmetProvider>
    </React.Fragment>
    )
};

export default BlogDetails;