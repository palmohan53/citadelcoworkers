import React, {useEffect, useState, useRef, Suspense} from "react";
import { useLocation } from "react-router-dom";

import { Link } from 'react-router-dom';
 import CountUp from 'react-countup';
import axios from "axios";
import API_HOST from "../config/APIHost";
import API_ENDPOINTS from "../config/APIEndPoints";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
// import Testimonial from "../Component/Testimonial";
import { useParams } from 'react-router-dom';
// import ServiceProfile from "../Component/ServiceProfile";
//import NewSection from "../Component/NewSection";
import servicesContent from '../Content/services.json';
import RecentBlog from "../Component/RecentBlog";
import ServiceBulkContent from "../Component/ServiceBulkContent";
import ToolsSection from "../Component/ToolsSection"
import CertificateSection from "../Component/CertificationSection";
//import Steps from "../Component/Steps";
import Pricing from "../Component/Pricing";
import ServiceBulkContentUpper from "../Component/ServiceBulkContentUpper";
import Faq from "../Component/Faq";
import ContactForm from "../Component/ContactForm";
import HeroMarqueeInfoSlider from "../Component/CaseStudy";
import CaseHeroSlider from "../Component/CaseStudyDesigin";
import FeaturedInMarquee  from '../Component/Brandsslider';
import ProjectsPortfolio from"../Component/ProjectsPortfolio";
import VideoEditorSkillsSection from "../Component/VideoEditorSkillsSection";
import IndustriesSection from "../Component/3DIndustriesSection";
import WorkflowSplit from "../Component/process3DAnimation";
import BrandAssets from "../Component/Brand AssetsPrinkpackingpage";
const Steps = React.lazy(() => import('../Component/Steps'));
const Testimonial = React.lazy(() => import('../Component/Testimonial'));
const ServiceProfile = React.lazy(() => import('../Component/ServiceProfile'));


const SubServices = () => {
      const location = useLocation();
    const navigate = useNavigate();
    console.log("Location Pathname:", location.pathname);
    const {subService, serviceDetails} = useParams();
    const [servicedata, setServicedata] = useState([]);
    const [parentCTA, setParentCTA] = useState(""); // ✅ NEW STATE
const [serviceProfile, setServiceProfile] = useState(null); // full response
const [profileHeading, setProfileHeading] = useState({
    heading: "",
    subheading: ""
});
    const [serviceBulkContent, setServiceBulkContent] = useState([]);
    const [serviceBulkContentUpper, setServiceBulkContentUpper] = useState([]);
    const [serviceTestimonial, setServiceTestimonial] = useState([]);
    const [serviceContent, setServiceContent] = useState([])
    const [serviceSection,setServiceSection] = useState([]);
const [serviceTools, setServiceTools] = useState({
  slider_title: "",
  tools: []
});
const [portfolioData, setPortfolioData] = useState(null);
const [portfolioTabs, setPortfolioTabs] = useState([{ term_id: 0, name: "Show All", slug: "show-all" }]);
const [portfolioItems, setPortfolioItems] = useState([]);
const [activePortfolioTab, setActivePortfolioTab] = useState("show-all");
const [portfolioLoading, setPortfolioLoading] = useState(false);
const [portfolioError, setPortfolioError] = useState("");
const [visibleCount, setVisibleCount] = useState(3);
const [skillsetData, setSkillsetData] = useState(null);
const [skillsetLoading, setSkillsetLoading] = useState(false);
const [skillsetError, setSkillsetError] = useState("");
const [certificationData, setCertificationData] = useState({
  heading: "",
  subheading: "",
  certifications: []
});
const [casestudyData , setCasestudyData] = useState({
  parent: {},
  listing: []
});
const concluding = serviceContent?.[0]?.Concludingtext?.[0] || {};
const concludingText = (concluding?.text || "").trim();
const concludingBtnText = (concluding?.buttontext || "").trim();
const shouldShowServiceBulkContent =
  serviceBulkContent?.status === "success" &&
  Array.isArray(serviceBulkContent?.listing) &&
  serviceBulkContent.listing.length > 0 &&
  (serviceBulkContent.listing[0]?.post_content || "").trim() !== "";
const shouldShowConcluding = concludingText !== "" || concludingBtnText !== "";
    const contactref = useRef(null);
 const handleScrollClick = () => {
  const element = contactref.current;
  const offset = 100; // 👈 navbar height (adjust karo 80–120)

  const y =
    element.getBoundingClientRect().top +
    window.pageYOffset -
    offset;

  window.scrollTo({ top: y, behavior: "smooth" });
};
/* =====================================================
   GET SERVICE LIST + PARENT CTA
===================================================== */
useEffect(() => {
  const scrollToHash = () => {
    const hash = window.location.hash;
    if (!hash) return;

    const element = document.querySelector(hash);
    if (!element) return;

    const header = document.querySelector("header");
    const offset = header ? header.offsetHeight : 100;

    const y =
      element.getBoundingClientRect().top +
      window.pageYOffset -
      offset - 10;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });

    // 🔥 HASH REMOVE (IMPORTANT)
  setTimeout(() => {
  window.history.replaceState(null, null, window.location.pathname);
}, 50);
  };

  scrollToHash();

  window.addEventListener("hashchange", scrollToHash);

  return () => {
    window.removeEventListener("hashchange", scrollToHash);
  };
}, []);
const getServiceList = async () => {

    let apiUrl = `${API_HOST}${API_ENDPOINTS.subServiceListing}${subService}`;
    if(serviceDetails){
        apiUrl = `${API_HOST}${API_ENDPOINTS.subServiceListing}${serviceDetails}`;
    }

    try{
        const res = await axios.get(apiUrl);

        if(res.data.status === "fail"){
            navigate('/not-found');
        }else{
            const reverseList = res?.data?.listing?.reverse();
            setServicedata(reverseList);

            // ✅ Parent CTA store
            setParentCTA(res.data.parent_cta_button || "");
        }

    }catch(err){
        console.log(err);
        setServicedata([]);
        setParentCTA("");
    }
};

/* =====================================================
   USE EFFECT
===================================================== */

useEffect(() => {
    window.scrollTo(0, 0);
    if(subService || serviceDetails){
        getServiceList();
    }
}, [subService, serviceDetails]);

    const getPortfolio = async () => {
  try {
    setPortfolioLoading(true);
    setPortfolioError("");

    let apiUrl = `${API_HOST}${API_ENDPOINTS.Portfolio}${subService}`;
    if (serviceDetails) {
      apiUrl = `${API_HOST}${API_ENDPOINTS.Portfolio}${serviceDetails}`;
    }

    const res = await axios.get(apiUrl);
    const json = res.data;

    console.log("Full API Response:", json);

    if (!json || json.status !== "success") {
      setPortfolioError(json?.message || "Portfolio not found");
      setPortfolioData(null);
      setPortfolioTabs([{ term_id: 0, name: "Show All", slug: "show-all" }]);
      setPortfolioItems([]);
      return;
    }

    setPortfolioData(json);

    // ✅ Tabs from API categories
    const cats = json.categories || [];
    const tabs = [
      { term_id: 0, name: "Show All", slug: "show-all" },
      ...cats.map((c) => ({ term_id: c.term_id, name: c.name, slug: c.slug })),
    ];
    setPortfolioTabs(tabs);

    // ✅ Merge all items for Show All
    const merged = [];
    cats.forEach((cat) => {
      (cat.items || []).forEach((it) => {
        merged.push({
          ...it,
          _catName: cat.name,
          _catSlug: cat.slug,
          _img:
            it.banner && it.banner !== "NA"
              ? it.banner
              : cat?.acf?.featured_image_url || "",
        });
      });
    });

    // ✅ unique by ID
    const seen = new Set();
    const uniqueMerged = merged.filter((x) => {
      const k = String(x.ID);
      if (seen.has(k)) return false;
      seen.add(k);
      return true;
    });

    setActivePortfolioTab("show-all");
    setVisibleCount(3);
    setPortfolioItems(uniqueMerged);

  } catch (err) {
    console.error("API Error:", err);
    setPortfolioError("Network error");
    setPortfolioData(null);
    setPortfolioTabs([{ term_id: 0, name: "Show All", slug: "show-all" }]);
    setPortfolioItems([]);
  } finally {
    setPortfolioLoading(false);
  }
};

   const getProfileList = async () => {
    let apiUrl = `${API_HOST}${API_ENDPOINTS.serviceProfile}${subService}`;
    if (serviceDetails) {
        apiUrl = `${API_HOST}${API_ENDPOINTS.serviceProfile}${serviceDetails}`;
    }

    try {
        const res = await axios.get(apiUrl);

        // ✅ PURANA STRUCTURE SAFE
        setServiceProfile(res);

        // ✅ Heading alag se
        setProfileHeading({
            heading: res.data?.parent?.Heading,
            subheading: res.data?.parent?.Subheading
        });

        console.log("Full res", res);
        console.log("Heading", res.data.parent.Heading);
    } catch (err) {
        setServiceProfile(null);
        console.log(err);
    }
};

    const getServiceBulkContent = async () => {
        // await axios.get(`${API_HOST}${API_ENDPOINTS.serviceBulkcontent}${subService}`)
        let apiUrl = `${API_HOST}${API_ENDPOINTS.serviceBulkcontent}${subService}`;
        if(serviceDetails){
            apiUrl = `${API_HOST}${API_ENDPOINTS.serviceBulkcontent}${serviceDetails}`;
        }
        await axios.get(apiUrl)
        .then((res)=>{
            setServiceBulkContent(res.data);
        })
        .catch((err)=>{
            setServiceBulkContent([])
            console.log(err)
        })
    }
    const getServiceBulkContentUpper = async () => {
        // await axios.get(`${API_HOST}${API_ENDPOINTS.serviceBulkcontentUpper}${subService}`)
        let apiUrl = `${API_HOST}${API_ENDPOINTS.serviceBulkcontentUpper}${subService}`;
        if(serviceDetails){
            apiUrl = `${API_HOST}${API_ENDPOINTS.serviceBulkcontentUpper}${serviceDetails}`;
        }
        await axios.get(apiUrl)
        .then((res)=>{
            setServiceBulkContentUpper(res);
        })
        .catch((err)=>{
            setServiceBulkContentUpper([])
            console.log(err)
        })
    }
    const getServiceTestimonial = async () => {
        // await axios.get(`${API_HOST}${API_ENDPOINTS.serviceTestimonial}${subService}`)
        let apiUrl = `${API_HOST}${API_ENDPOINTS.serviceTestimonial}${subService}`;
        if(serviceDetails){
            apiUrl = `${API_HOST}${API_ENDPOINTS.serviceTestimonial}${serviceDetails}`;
        }
        await axios.get(apiUrl)
        .then((res)=>{
            setServiceTestimonial(res);
        })
        .catch((err)=>{
            setServiceTestimonial([])
            console.log(err)
        })
    };
 
const getCertificationSection = async () => {
  try {
    let apiUrl = `${API_HOST}${API_ENDPOINTS.Certificationsection}${subService}`;
    if (serviceDetails) {
      apiUrl = `${API_HOST}${API_ENDPOINTS.Certificationsection}${serviceDetails}`;
    }

    const res = await axios.get(apiUrl);
    console.log("Full Certification API Response:", res.data);

    const listing = res.data?.listing?.[0];
console.log("PARENT certificationData:", certificationData);
    // Safety fallback
    if (!listing) {
      setCertificationData({
        heading: "",
        subheading: "",
        certifications: []
      });
      return;
    }

    // ✅ certifications array mapping
    const certificationsArray =
      (listing.certifications || [])
        .filter((item) => item?.image?.file_url) // only valid images
        .map((item) => ({
          index: item.index,
          name: item.name || "",
          imageUrl: item.image.file_url,
          imageAlt: item.image.alt_text || item.name || "Certification"
        }));

    // ✅ FINAL STRUCTURE
    setCertificationData({
      heading: listing.heading || "",
      subheading: listing.subheading || "",
      certifications: certificationsArray
    });

    console.log("Certifications loaded:", certificationsArray);
  } catch (err) {
    console.error("Certification API Error:", err);

    setCertificationData({
      heading: "",
      subheading: "",
      certifications: []
    });
  }
};
const sc0 = serviceContent?.[0] || {};
const bottomServicesRaw = Array.isArray(sc0.bottomServices) ? sc0.bottomServices : [];
const iconHeadingArr = Array.isArray(sc0?.icontextdesignheading) ? sc0.icontextdesignheading : [];
const iconItems = Array.isArray(sc0?.icontextdesign) ? sc0.icontextdesign : [];
const centerImageUrl = iconHeadingArr?.[0]?.centerImageUrl || "";
// ✅ show condition
const shouldShowIconSection = iconItems.length > 0 || iconHeadingArr.length > 0;
const bottomServices = bottomServicesRaw.filter((item) => {
  const title = (item?.title || "").trim();
  const body = (item?.body || "").trim();
  return title !== "" || body !== ""; // koi bhi field me content ho
});

const heading = sc0?.bottomServicesHeading?.[0] || {};
const headingTitle = (heading?.title || "").trim();
const headingBody  = (heading?.body || "").trim();

const shouldShowBottomServices =
  bottomServices.length > 0 && (headingTitle !== "" || headingBody !== "");

const getServiceTools = async () => {
  try {
    let apiUrl = `${API_HOST}${API_ENDPOINTS.Toolssection}${subService}`;
    if (serviceDetails) {
      apiUrl = `${API_HOST}${API_ENDPOINTS.Toolssection}${serviceDetails}`;
    }

    const res = await axios.get(apiUrl);
    console.log("Full API Response:", res.data);

    const listing = res.data.listing[0];

    // Collect tool images
    const toolsArray = [];
    for (let i = 1; i <= 10; i++) {
      const key = i === 1 ? "tool_icon_1" : `tool_icon${i}`;
      if (listing[key] && listing[key].file_url) {
        toolsArray.push({
          url: listing[key].file_url,
          title: listing[key].title || `Tool ${i}`
        });
      }
    }

    // ✅ FINAL STRUCTURE (title + tools)
    setServiceTools({
      slider_title: listing.slider_title,
      tools: toolsArray
    });

    console.log("Tools loaded:", toolsArray);

  } catch (err) {
    console.error("API Error:", err);

    setServiceTools({
      slider_title: "",
      tools: []
    });
  }
};



   const getServiceSection = async () => {
  try {
    let apiUrl = `${API_HOST}${API_ENDPOINTS.serviceSection}${subService}`;
    if (serviceDetails) {
      apiUrl = `${API_HOST}${API_ENDPOINTS.serviceSection}${serviceDetails}`;
    }

    const res = await axios.get(apiUrl);
     console.log("API Response:", res.data);
    setServiceSection(res.data || []); // ✅ सिर्फ data को set करो

  } catch (err) {
    console.error(err);
    setServiceSection([]);
  }
};
const getCaseStudy = async () => {
  let apiUrl = `${API_HOST}${API_ENDPOINTS.CaseStudy}${subService}`;
  if (serviceDetails) {
    apiUrl = `${API_HOST}${API_ENDPOINTS.CaseStudy}${serviceDetails}`;
  }

  try {
    const res = await axios.get(apiUrl);
    const json = res.data;
    // json.parent.slug = subService;

    console.log("CaseStudy JSON:", json);

    if (!json || json.status !== "success") {
      setCasestudyData({ parent: {}, listing: [] });
      return;
    }

    // ✅ store full response (parent + listing)
    setCasestudyData({
      parent: json.parent || {},
      listing: json.listing || [],
      status: json.status,
      message: json.message
    });

  } catch (err) {
    console.log(err);
    setCasestudyData({ parent: {}, listing: [] });
  }
};
const getSkillset = async () => {
  try {
    setSkillsetLoading(true);

    let apiUrl = `${API_HOST}${API_ENDPOINTS.Skillset}${subService}`;
    if (serviceDetails) {
      apiUrl = `${API_HOST}${API_ENDPOINTS.Skillset}${serviceDetails}`;
    }

    const res = await axios.get(apiUrl);
    const json = res.data;

    console.log("FULL API:", json); // 👈 DEBUG

    if (!json || json.status !== "success") {
      setSkillsetData(null);
      return;
    }

    const parent = json.parent || {};
    const item = json.listing?.[0] || {};

    console.log("ITEM DATA:", item); // 👈 IMPORTANT

    setSkillsetData({
      main_heading: parent.main_heading || "",
      main_description: parent.main_description || "",
      technical_skills: item.technical_skills || "",
      professional_skills: item.professional_skills || "",
    });

  } catch (err) {
    console.error(err);
    setSkillsetData(null);
  } finally {
    setSkillsetLoading(false);
  }
};
console.log("Service Section Data:", subService, '---------', serviceDetails, serviceSection) ;

   
    const filterServiceJson = () => {
        let filterContent = servicesContent.services.filter(item=> item.categoryUrl === (subService));
        if(serviceDetails){
            filterContent = servicesContent.services.filter(item=> item.categoryUrl === (serviceDetails));
        }
        setServiceContent(filterContent);
    }
    
    const faqData = serviceContent[0]?.faq;
    useEffect(() => {
        window.scrollTo(0, 0);
        if(subService || serviceDetails){
            getServiceList();
            getProfileList();
            getServiceBulkContent();
            getServiceBulkContentUpper();
            getServiceTestimonial();
            filterServiceJson();
            getServiceSection();
            getServiceTools();
            getCertificationSection();
              getPortfolio();
			  getCaseStudy();
        getSkillset()
        }
        //eslint-disable-next-line
    }, [subService, serviceDetails])

    
useEffect(() => {
  const timeout = setTimeout(() => {
    const elements = document.querySelectorAll(".reveal");
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries, observer) => {
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

  }, 300); // 👈 delay important

  return () => clearTimeout(timeout);
}, [
  serviceContent,
  servicedata,
  certificationData,
  portfolioItems,
  casestudyData
]);


const currentService = serviceContent[0];
const isDynamic = currentService?.useDynamicSections;


const sectionsOrder = currentService?.sectionsOrder || [
"hero",
"number",
"Services",
"TeamSection",
"ToolsSection",
"ServiceBulkContentUpper",
"Testimonial",
"Steps",
"pricing",
"ServiceBulkContent",
"faq",
"ContactForm",
"Blogs",
"BottomServices",
"FeaturedInMarquee",
"ConcludingSec",
"certifications",
"industries3DImpact",
"CasestudyData",
"portfolioItems",
"WorkflowSplit",
"IndustriesSection",
"BrandAssets",
"SkillsSection",
"Icondesign",
];
const sectionMap = {
  hero: (
    <section className="innerBanner">
      <div className="innerBannerContent">
        <h1>{serviceContent[0]?.banner?.[0]?.title}</h1>
        <p>{serviceContent[0]?.banner?.[0]?.body}</p>

        <div className="text-center mt-3">
          <button onClick={handleScrollClick} className="colorBtn wideBtn">
            {serviceContent[0]?.banner?.[0]?.buttonText || "Hire Now"}
          </button>
        </div>
      </div>
      <div className="bannerOvelay"></div>
    </section>
  ),

  number: (
      <section className="explore">
                <div className="container">
                    <div className="row align-items-center mb-3">
                        <div className="col-md-12 col-12 text-center">
                            <div className="sectionHeading">
                                <h2>{serviceContent[0]?.clientsNumberHeading[0]?.title}</h2>
                                   <h4>{serviceContent[0]?.clientsNumberHeading[0]?.body}</h4>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="clientNum">
                                
                     {serviceContent[0]?.clientsNumber.map((data, index) => {

  const isFlip = !!data.flipcontent;

  const match = data.body?.match(/^([^0-9]*)([\d,.]+)(.*)$/);

  const prefix = match ? match[1] : "";
  const numberOnly = match
    ? parseFloat(match[2].replace(/,/g, ""))
    : 0;
  const suffix = match ? match[3] : "";

  const hasDecimal = String(numberOnly).includes(".");

  return (
    <div className={`clientBx ${isFlip ? "flip-card" : ""}`} key={index}>

      {isFlip ? (
        // ✅ FLIP DESIGN
        <div className="flip-inner">

          {/* FRONT */}
          <div className="flip-front">
            <div className="client-icon">
              <img src={data.imageUrl} alt={data.title} />
            </div>

            <p><span>{data.body}</span></p>

            <h3>{data.title}</h3>
          </div>

          {/* BACK */}
          <div className="flip-back">
            <p>{data.flipcontent}</p>
          </div>

        </div>
      ) : (
        // ✅ NORMAL COUNT DESIGN
        <>
          <div className="client-icon">
            <img src={data.imageUrl} alt={data.title} />
          </div>

          <p>
            {prefix}
            <CountUp
              start={0}
              end={numberOnly}
              duration={1}
              separator=","
              decimals={hasDecimal ? 1 : 0}
            />
            {suffix}
          </p>

          <h3>{data.title}</h3>
        </>
      )}

    </div>
  );
})}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
  ),

  Services: (
    <section className="explore" id="servicesSec">
                <div className="container">
                    <div className="row align-items-center mb-3">
                        <div className="col-md-12 col-12 text-center">
                            <div className="sectionHeading">
                                <h2>{serviceContent[0]?.serviceHeading[0]?.title}</h2>
                                <h4>{serviceContent[0]?.serviceHeading[0]?.body}</h4>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5 borderBox">
                        {
                            servicedata?.map((data, index)=>{
                                return(
                                    <React.Fragment key={index}>
                                        <div className="col-lg-4 col-md-6 col-12 sideBorder" key={index}>
                                            <div className="colorBx">
                                                <React.Fragment>
                                                    <div className="servicesIcon sub-ser">
                                                        <img src={data.banner} alt={data.post_title} className="serviceIco" width="64" height="64"/>
                                                        <img src={data.hover_image} alt={data.post_title} className="serviceIco serviceHoverIco" width="64" height="64" />
       
    </div>
                                                    <h3>{data.post_title}</h3>
                                                    <p dangerouslySetInnerHTML={{ __html: data.post_content }}></p>
                                                                                                {data.top_menu === "Yes" && (
   <div className="text-start"><Link to={`/services/${subService}/${data.post_name}` }  className="blueBtn">
     
                                          View More <FontAwesomeIcon icon={faArrowRight} />         
                                             
  </Link>  </div>
)}                                         {/* <div className="text-start">
                                                        <Link to={`/services/${subService}/${data.post_name}`} className="blueBtn">View More <FontAwesomeIcon icon={faArrowRight} /></Link>
                                                    </div> */}
                                                </React.Fragment>
                                            </div>
                                        </div>
                                    </React.Fragment>
                                )
                            })
                        }
                    </div>
                </div>
                {parentCTA && parentCTA !== "NA" && (
  <div class="text-center mt-5">        <div dangerouslySetInnerHTML={{ __html: parentCTA }} /></div>


)}
            </section>
  ),

  TeamSection: (
   <Suspense fallback={<div className="h-[400px] w-full" />}>
         <section className={`profile ${serviceDetails || subService || ''}`}>
                <div className="container">
                    <div className="row align-items-center mb-3">
                        <div className="col-md-12 col-12">
                            <div className="sectionHeading text-center">
                                 <h2>
        {profileHeading.heading && profileHeading.heading !== "NA"
            ? profileHeading.heading
            : "Our Expert Team"}
    </h2>

    <p>
        {profileHeading.subheading && profileHeading.subheading !== "NA"
            ? profileHeading.subheading
            : "Meet our diverse team of skilled professionals dedicated to delivering excellence across a spectrum of services,ensuring tailored solutions for your business needs."}
    </p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-12">
                        
                            <ServiceProfile serviceProfile={serviceProfile} handleScrollClick={handleScrollClick}/>
                            
                        </div>
                    </div>
                </div>
            </section>
            </Suspense>
  ),

certifications: ( <section className=" reveal">
      <CertificateSection certificationData={certificationData} />
    </section>),


CasestudyData: () => {
  if (!casestudyData?.listing?.length) return null;

  return (
    <section className="bg_light_1">
      <div className="sectionHeading text-center">
        <p>Case Study</p>
        <h2>We Build With Intent & It Shows In The Results</h2>
      </div>

      <CaseHeroSlider
        casestudyData={casestudyData}
        parentSlug={subService}
      />
    </section>
  );
},


  portfolioItems:  <section className="bg_light_1">
      <div className="sectionHeading text-center">
        <h2>Work We’re Proud Of</h2>
        <p>
          Showcasing Impactful Designs Created to Help Brands Grow and Stand Out
        </p>
      </div>

      <ProjectsPortfolio
        subService={subService}
        serviceDetails={serviceDetails}
      />
    </section>,
  ToolsSection: (
  <Suspense fallback={<div className="h-[400px] w-full" />}>
            <ToolsSection serviceTools={serviceTools} />
            </Suspense>
  ),
ServiceBulkContentUpper:(   <section className="serviceBulkContent">
                <ServiceBulkContentUpper serviceBulkContentUpper={serviceBulkContentUpper}/>
            </section>)

,
Testimonial:(<Suspense fallback={<div className="h-[400px] w-full" />}>
                <Testimonial serviceTestimonial={serviceTestimonial} />
            </Suspense>),

serviceSection:(  <Suspense fallback={<div className="h-[400px] w-full" />}>
                <Steps serviceSection={serviceSection} />
            </Suspense>),

  BrandAssets: <BrandAssets />,
  industries3DImpact: <IndustriesSection />,
  WorkflowSplit: <WorkflowSplit />,
Serviceconent:(    <Suspense fallback={<div className="h-[400px] w-full" />}>
                <Steps serviceSection={serviceSection} />
            </Suspense>),
  process: (
    <Suspense fallback={<div>Loading...</div>}>
      <Steps serviceSection={serviceSection} />
    </Suspense>
  ),
SkillsSection: () => {
  if (!skillsetData) return null;

  return (
    <section className="serviceBulkContent no-padding">
      <VideoEditorSkillsSection skillsetData={skillsetData} />
    </section>
  );
},

  faq:      <Faq faqData={faqData}/>,

  ContactForm: ( <section ref={contactref} id="contactFormSection">
              <ContactForm buttonText={serviceContent[0]?.Contacttext?.[0]?.text} />
            </section>),
            Blogs:<RecentBlog />,
 pricing:   <Pricing handleScrollClick={handleScrollClick}/>,
ServiceBulkContent:
  shouldShowServiceBulkContent ? (
    <section className="serviceBulkContent fff">
      <ServiceBulkContent serviceBulkContent={serviceBulkContent} />
    </section>
  ) : null,
  FeaturedInMarquee:
   <section className="serviceb bg-dark" id=""><div className="container"><FeaturedInMarquee /></div></section>,
 BottomServices:
  shouldShowBottomServices ? (
    <section className="bottomServices bg_light_1">
      <div className="container">
        <div className="sectionHeading text-center mb-5">
          {headingTitle && <h2>{headingTitle}</h2>}
          {headingBody && <p>{headingBody}</p>}
        </div>

        <div className="bottomServicesWrp mt-3">
          {bottomServices.map((data, index) => (
            <div className="bottomServiceContent" key={index}>
              {data?.title?.trim() && <h3>{data.title}</h3>}
              {data?.body?.trim() && <p>{data.body}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  ) : null,
  Icondesign: shouldShowIconSection ? (
  (() => {
    const mid = Math.ceil(iconItems.length / 2);
    const leftItems = iconItems.slice(0, mid);
    const rightItems = iconItems.slice(mid);

    const renderCard = (item, index, startIndex = 0) => {
      const ribbonNum = String(startIndex + index + 1).padStart(2, "0");

      return (
        <div className="card" key={`${ribbonNum}-${index}`}>
          <div className="ribbon">{ribbonNum}</div>
          <div className="content">
            {item?.imageUrl && (
              <div className="icon-box">
                <img src={item.imageUrl} alt={item?.body || ""} />
              </div>
            )}
            {item?.body?.trim() && (
              <div className="text-box">
                <h3 dangerouslySetInnerHTML={{ __html: item.body }}></h3>
              </div>
            )}
          </div>
        </div>
      );
      
    };

    return (
      <section className="bottomServices bg_light_1 icontextdesign">
        <div className="container">
          
          {iconHeadingArr.map((data, index) => (
            <div className="sectionHeading text-center mb-4" key={index}>
              {data?.title?.trim() && <h2>{data.title}</h2>}
              {data?.body?.trim() && <p>{data.body}</p>}
            </div>
          ))}

          <div className="steps-grid">
            
            {/* LEFT */}
            <div className="steps-col reveal reveal-left">
              {leftItems.map((item, index) => renderCard(item, index, 0))}
            </div>

            {/* CENTER */}
            <div className="center-card">
              {centerImageUrl && <img src={centerImageUrl} alt="Center" />}
            </div>

            {/* RIGHT */}
            <div className="steps-col reveal reveal-right">
              {rightItems.map((item, index) =>
                renderCard(item, index, leftItems.length)
              )}
            </div>

          </div>
        </div>
      </section>
    );
  })()
) : null,
ConcludingSec:(  <section className="bottomCon">
  <div className="container">
    <div className="sectionHeading text-center">
      {shouldShowConcluding ? (
        <>
          <h2 className="mb-4">
            <b>{concludingText || "Hire Now"}</b>
          </h2>

        <button onClick={handleScrollClick} className="colorBtn wideBtn">
  {concludingBtnText || "Send Your Requirement"}
</button>
        </>
      ) : (
        <>
          <h2 className="mb-4">
            <b>
              1600+ Clients in 18 Countries
            </b>{" "}
            Have Accelerated Their Business Growth With Citadel Co-Workers. You Could Be Next!
          </h2>

          <Link to="/contact-us" className="colorBtn wideBtn">
            Send Your Requirement
          </Link>
        </>
      )}
    </div>
  </div>
</section>),    
};
    return(
        <React.Fragment>
            <HelmetProvider>
                <Helmet>
                    <title>{serviceContent[0]?.pageMetaTitle}</title>
                    <meta name="description" content={serviceContent[0]?.pageMetaContent} />
                    <link rel="canonical" href={window.location.href} />
                </Helmet>
             {!isDynamic && (
  <> 
            <section className="innerBanner">
                {/* <img src="/images/service-banner.jpg" alt=""/> */}
                <div className="innerBannerContent">
                    <h1>{serviceContent[0]?.banner[0]?.title}</h1>
                    <p>{serviceContent[0]?.banner[0]?.body}</p>
                  <div className="text-center mt-3">
   <button onClick={handleScrollClick} className="colorBtn wideBtn">
  {serviceContent[0]?.banner[0]?.buttonText || "Hire Now"}
</button>
</div>
                </div>
                <div className="bannerOvelay"></div>
            </section>
            <section className="explore">
                <div className="container">
                    <div className="row align-items-center mb-3">
                        <div className="col-md-12 col-12 text-center">
                            <div className="sectionHeading">
                                <h2>{serviceContent[0]?.clientsNumberHeading[0]?.title}</h2>
                                   <h4>{serviceContent[0]?.clientsNumberHeading[0]?.body}</h4>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="clientNum">
                                
                     {serviceContent[0]?.clientsNumber.map((data, index) => {

  // ✅ Extract prefix ($, ₹ etc.), number, suffix (M, K, +, % etc.)
  const match = data.body?.match(/^([^0-9]*)([\d,.]+)(.*)$/);

  const prefix = match ? match[1] : "";
  const numberOnly = match
    ? parseFloat(match[2].replace(/,/g, ""))
    : 0;
  const suffix = match ? match[3] : "";

  const hasDecimal = String(numberOnly).includes(".");

  return (
    <div className="clientBx" key={index}>
      <div className="client-icon">
        <img src={data.imageUrl} alt={data.title} />
      </div>

      <p>
        {prefix}
        <CountUp
          start={0}
          end={numberOnly}
          duration={1}
          separator=","
          decimals={hasDecimal ? 1 : 0}
        />
        {suffix}
      </p>

      <h3>{data.title}</h3>
    </div>
  );
})}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
     
            <section className="explore" id="servicesSec">
                <div className="container">
                    <div className="row align-items-center mb-3">
                        <div className="col-md-12 col-12 text-center">
                            <div className="sectionHeading">
                                <h2>{serviceContent[0]?.serviceHeading[0]?.title}</h2>
                                <h4>{serviceContent[0]?.serviceHeading[0]?.body}</h4>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5 borderBox">
                        {
                            servicedata?.map((data, index)=>{
                                return(
                                    <React.Fragment key={index}>
                                        <div className="col-lg-4 col-md-6 col-12 sideBorder" key={index}>
                                            <div className="colorBx">
                                                <React.Fragment>
                                                    <div className="servicesIcon sub-ser">
                                                        <img src={data.banner} alt={data.post_title} className="serviceIco" width="64" height="64"/>
                                                        <img src={data.hover_image} alt={data.post_title} className="serviceIco serviceHoverIco" width="64" height="64" />
       
    </div>
                                                    <h3>{data.post_title}</h3>
                                                    <p dangerouslySetInnerHTML={{ __html: data.post_content }}></p>
                                                                                                {data.top_menu === "Yes" && (
   <div className="text-start"><Link to={`/services/${subService}/${data.post_name}` }  className="blueBtn">
     
                                          View More <FontAwesomeIcon icon={faArrowRight} />         
                                             
  </Link>  </div>
)}                                         {/* <div className="text-start">
                                                        <Link to={`/services/${subService}/${data.post_name}`} className="blueBtn">View More <FontAwesomeIcon icon={faArrowRight} /></Link>
                                                    </div> */}
                                                </React.Fragment>
                                            </div>
                                        </div>
                                    </React.Fragment>
                                )
                            })
                        }
                    </div>
                </div>
                {parentCTA && parentCTA !== "NA" && (
  <div class="text-center mt-5">        <div dangerouslySetInnerHTML={{ __html: parentCTA }} /></div>


)}
            </section>

            <Suspense fallback={<div className="h-[400px] w-full" />}>
         <section className={`profile ${serviceDetails || subService || ''}`}>
                <div className="container">
                    <div className="row align-items-center mb-3">
                        <div className="col-md-12 col-12">
                            <div className="sectionHeading text-center">
                                 <h2>
        {profileHeading.heading && profileHeading.heading !== "NA"
            ? profileHeading.heading
            : "Our Expert Team"}
    </h2>

    <p>
        {profileHeading.subheading && profileHeading.subheading !== "NA"
            ? profileHeading.subheading
            : "Meet our diverse team of skilled professionals dedicated to delivering excellence across a spectrum of services,ensuring tailored solutions for your business needs."}
    </p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-12">
                        
                            <ServiceProfile serviceProfile={serviceProfile} handleScrollClick={handleScrollClick}/>
                            
                        </div>
                    </div>
                </div>
            </section>
            </Suspense>

{certificationData?.certifications?.length > 0 && (
  <section className="pt-0 reveal">
    <CertificateSection certificationData={certificationData} />
  </section>
)}            {casestudyData?.listing?.length > 0 && (
  <section className="bg_light_1">
    <div className="sectionHeading text-center">
      <p>Case Study</p>
      <h2>We Build With Intent & It Shows In The Results</h2>
    </div>
 <CaseHeroSlider
  casestudyData={casestudyData}
  parentSlug={subService}
/>
  </section>
)}
{portfolioItems?.length > 0 && (
  <section className="bg_light_1">
    <div className="sectionHeading text-center">
         <h2>Work We’re Proud Of</h2>
      <p>Showcasing Impactful Designs Created to Help Brands Grow and Stand Out</p>
   
    </div>

    <ProjectsPortfolio 
      subService={subService} 
      serviceDetails={serviceDetails} 
    />
  </section>
)}
            <Suspense fallback={<div className="h-[400px] w-full" />}>
            <ToolsSection serviceTools={serviceTools} />
            </Suspense>
         
            <section className="serviceBulkContent">
                <ServiceBulkContentUpper serviceBulkContentUpper={serviceBulkContentUpper}/>
            </section>
            
          
            <Suspense fallback={<div className="h-[400px] w-full" />}>
                <Testimonial serviceTestimonial={serviceTestimonial} />
            </Suspense>
            
 

           <Suspense fallback={<div className="h-[400px] w-full" />}>
                <Steps serviceSection={serviceSection} />
            </Suspense>

            <Pricing handleScrollClick={handleScrollClick}/>
    <div>
      
    </div>
 
{skillsetData && (
  <section className="serviceBulkContent no-padding">
    <VideoEditorSkillsSection skillsetData={skillsetData} />
  </section>
)}

{shouldShowServiceBulkContent && (
  <section className="serviceBulkContent fff">
    <ServiceBulkContent serviceBulkContent={serviceBulkContent} />
  </section>
)}
             
            <Faq faqData={faqData}/>
            <section ref={contactref} id="contactFormSection">
              <ContactForm buttonText={serviceContent[0]?.Contacttext?.[0]?.text} />
            </section>
           
            <RecentBlog />
         {shouldShowBottomServices && (
        <section className="bottomServices bg_light_1">
          <div className="container">
            <div className="sectionHeading text-center mb-5">
              {headingTitle && <h2>{headingTitle}</h2>}
              {headingBody && <p>{headingBody}</p>}
            </div>

            <div className="bottomServicesWrp mt-3">
              {bottomServices.map((data, index) => (
                <div className="bottomServiceContent" key={index}>
                  {data?.title?.trim() && <h3>{data.title}</h3>}
                  {data?.body?.trim() && <p>{data.body}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
{shouldShowIconSection && (() => {
  const mid = Math.ceil(iconItems.length / 2);
  const leftItems = iconItems.slice(0, mid);
  const rightItems = iconItems.slice(mid);

  // ✅ agar center image JSON me nahi hai to yaha direct de do


  const renderCard = (item, index, startIndex = 0) => {
    const ribbonNum = String(startIndex + index + 1).padStart(2, "0");

    return (
      <div className="card" key={`${ribbonNum}-${index}`}>
        <div className="ribbon">{ribbonNum}</div>
        <div className="content">
          {item?.imageUrl && (
            <div className="icon-box">
              <img src={item.imageUrl} alt={item?.body || ""} />
            </div>
          )}
          {item?.body?.trim() && (
            <div className="text-box">
           <h3 dangerouslySetInnerHTML={{ __html: item.body }}></h3>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <section className="bottomServices bg_light_1 icontextdesign">
     <div className="container">
        {iconHeadingArr.map((data, index) => (
          <div className="sectionHeading text-center mb-4" key={index}>
            {data?.title?.trim() && <h2>{data.title}</h2>}
            {data?.body?.trim() && <p>{data.body}</p>}
          </div>
        ))}

        <div className="steps-grid">
          {/* LEFT */}
          <div className="steps-col  reveal  reveal-left">
            {leftItems.map((item, index) => renderCard(item, index, 0))}
          </div>

          {/* CENTER IMAGE */}
          <div className="center-card">
            {centerImageUrl ? <img src={centerImageUrl} alt="Center" /> : null}
          </div>

          {/* RIGHT */}
          <div className="steps-col  reveal  reveal-right">
            {rightItems.map((item, index) =>
              renderCard(item, index, leftItems.length)
            )}
          </div>
        </div>
      </div>
    </section>
  );
})()}

 <section className="serviceb bg-dark" id=""><div className="container"><FeaturedInMarquee /></div></section>

         <section className="bottomCon">
  <div className="container">
    <div className="sectionHeading text-center">
      {shouldShowConcluding ? (
        <>
          <h2 className="mb-4">
            <b>{concludingText || "Hire Now"}</b>
          </h2>

        <button onClick={handleScrollClick} className="colorBtn wideBtn">
  {concludingBtnText || "Send Your Requirement"}
</button>
        </>
      ) : (
        <>
          <h2 className="mb-4">
            <b>
              1600+ Clients in 18 Countries
            </b>{" "}
            Have Accelerated Their Business Growth With Citadel Co-Workers. You Could Be Next!
          </h2>

          <Link to="/contact-us" className="colorBtn wideBtn">
            Send Your Requirement
          </Link>
        </>
      )}
    </div>
  </div>
</section>
 </>
)}
{isDynamic && (
  <>
    {/* NEW SYSTEM */}
    {sectionsOrder.map((section) => sectionMap[section])}
  </>
)}

        </HelmetProvider>
    </React.Fragment>
    )
};
  
export default SubServices;