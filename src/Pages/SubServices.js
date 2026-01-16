import React, {useEffect, useState, useRef, Suspense} from "react";
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

const Steps = React.lazy(() => import('../Component/Steps'));
const Testimonial = React.lazy(() => import('../Component/Testimonial'));
const ServiceProfile = React.lazy(() => import('../Component/ServiceProfile'));



const SubServices = () => {
    
    const navigate = useNavigate();
    
    const {subService, serviceDetails} = useParams();
    const [servicedata, setServicedata] = useState([]);
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
const [certificationData, setCertificationData] = useState({
  heading: "",
  subheading: "",
  certifications: []
});
const concluding = serviceContent?.[0]?.Concludingtext?.[0] || {};
const concludingText = (concluding?.text || "").trim();
const concludingBtnText = (concluding?.buttontext || "").trim();

const shouldShowConcluding = concludingText !== "" || concludingBtnText !== "";
    const contactref = useRef(null);
    const handleScrollClick = () => {
        contactref.current?.scrollIntoView({behavior: 'smooth'});
    };

    const getServiceList = async () => {
        // await axios.get(`${API_HOST}${API_ENDPOINTS.subServiceListing}${subService}`)
        let apiUrl = `${API_HOST}${API_ENDPOINTS.subServiceListing}${subService}`;
        if(serviceDetails){
            apiUrl = `${API_HOST}${API_ENDPOINTS.subServiceListing}${serviceDetails}`;
        }
        await axios.get(apiUrl)
        .then((res)=>{
            if(res.data.status === "fail"){
                navigate('/not-found');
            }else{
                const revesrseList = res?.data?.listing?.reverse();
                setServicedata(revesrseList);
            }
        })
        .catch((err)=>{
            setServicedata([])
            console.log(err)
        })
    }
    
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
            setServiceBulkContent(res);
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


    // const getProfileList = async () => {
    //     const response = await axios.get(`${API_HOST}${API_ENDPOINTS.serviceProfile}${subService}`)
    //     const data = await response;
    //     return data;
    // }
    // const { data, status } = useQuery("Profile", getProfileList);
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
        }
        //eslint-disable-next-line
    }, [subService, serviceDetails])

    return(
        <React.Fragment>
            <HelmetProvider>
                <Helmet>
                    <title>{serviceContent[0]?.pageMetaTitle}</title>
                    <meta name="description" content={serviceContent[0]?.pageMetaContent} />
                    <link rel="canonical" href={window.location.href} />
                </Helmet>
            <section className="innerBanner">
                {/* <img src="/images/service-banner.jpg" alt=""/> */}
                <div className="innerBannerContent">
                    <h1>{serviceContent[0]?.banner[0]?.title}</h1>
                    <p>{serviceContent[0]?.banner[0]?.body}</p>
                  <div className="text-center mt-3">
    <Link to="/contact-us" className="colorBtn wideBtn">
        {serviceContent[0]?.banner[0]?.buttonText || "Hire Now"}
    </Link>
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
                                
                                {serviceContent[0]?.clientsNumber.map((data, index)=>{
                                      const numberOnly = parseInt(data.body.replace(/\D/g, ""));
                                      const hasPlus = data.body.includes("+");
    const hasPercent = data.body.includes("%");
  const hasMillion = data.body.toLowerCase().includes("m"); // 100M, 5M, etc.
                                    return(
                                        <div className="clientBx" key={index}>
                                      <div className="client-icon"> <img src={data.imageUrl} alt={data.title}></img></div>
        <p>
          <CountUp
            start={0}
            end={numberOnly}
            duration={1}
            separator=","
          />
            {hasMillion && "M"}
       {hasPlus && "+"}
          {hasPercent && "%"}
            
        </p>

        <h3>{data.title}</h3>
                                        </div>
                                    )
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
            <Suspense fallback={<div className="h-[400px] w-full" />}>
            <ToolsSection serviceTools={serviceTools} />
            </Suspense>
            <section className="serviceBulkContent">
                <ServiceBulkContentUpper serviceBulkContentUpper={serviceBulkContentUpper}/>
            </section>
            
          
            <Suspense fallback={<div className="h-[400px] w-full" />}>
                <Testimonial serviceTestimonial={serviceTestimonial} />
            </Suspense>
            
 {certificationData?.certifications?.length > 0 && (
  <section>
    <CertificateSection certificationData={certificationData} />
  </section>
)}
           <Suspense fallback={<div className="h-[400px] w-full" />}>
                <Steps serviceSection={serviceSection} />
            </Suspense>

            <Pricing handleScrollClick={handleScrollClick}/>
            <section className="serviceBulkContent fff">
                <ServiceBulkContent serviceBulkContent={serviceBulkContent}/>
            </section>
            <Faq faqData={faqData}/>
            <div ref={contactref}>
<ContactForm buttonText={serviceContent[0]?.Contacttext?.[0]?.text} />
            </div>
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
              <h3>{item.body}</h3>
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
          <div className="steps-col left">
            {leftItems.map((item, index) => renderCard(item, index, 0))}
          </div>

          {/* CENTER IMAGE */}
          <div className="center-card">
            {centerImageUrl ? <img src={centerImageUrl} alt="Center" /> : null}
          </div>

          {/* RIGHT */}
          <div className="steps-col right">
            {rightItems.map((item, index) =>
              renderCard(item, index, leftItems.length)
            )}
          </div>
        </div>
      </div>
    </section>
  );
})()}
 
        
          <section className="bottomCon">
  <div className="container">
    <div className="sectionHeading text-center">
      {shouldShowConcluding ? (
        <>
          <h2 className="mb-4">
            <b>{concludingText || "Hire Now"}</b>
          </h2>

          <Link to="/contact-us" className="colorBtn wideBtn">
            {concludingBtnText || "Send Your Requirement"}
          </Link>
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
        </HelmetProvider>
    </React.Fragment>
    )
};

export default SubServices;