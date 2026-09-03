import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import axios from "axios";
import API_HOST from "../config/APIHost";
import API_ENDPOINTS from "../config/APIEndPoints";
import "slick-carousel/slick/slick-theme.css";
import { useQuery } from "react-query";
import WebsiteReviews from "../Component/WebsiteReviews"

const ChevronLeft = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path
      d="M15 18l-6-6 6-6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const getTestimonial = async () => {
    const response = await axios.get(`${API_HOST}${API_ENDPOINTS.testimonial}`)
    const data = await response;
    return data;
}
const caseStudySlider = {
  dots: true,
  arrows: false,
  infinite: false,
  speed: 600,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3500,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      },
    },
  ],
};
  
 const portfolioResults = [

  {
    id:1,

    category:"LOGISTICS",

    country:"USA",

    flag:"/images/USAFlag.webp",

    image:"https://virtualassistant24x7.com/wp-content/uploads/2026/07/tri.webp",

    title:"Trigen Logistics",

    description:"Long-term logistics operations support with finance reporting and carrier management.",

    stat1:"+5 Years",
    label1:"Continuous Partnership",

    stat2:"3+",
    label2:"Peak Logistics Seasons Navigated Without Disruption",

    link:"https://www.citadelcoworkers.com/case-study/trigen-logistics"
  },

  {
    id:2,

    category:"INSURANCE",

    country:"USA",

    flag:"/images/USAFlag.webp",

    image:"https://virtualassistant24x7.com/wp-content/uploads/2026/07/dobe-21.png",

    title:"Burnt Orange Benefits",

    description:"US sales executive placement handling the complete outbound sales cycle.",

    stat1:"3 Months",
    label1:"To First Closed Deals",

    stat2:"5X",
    label2:"Scope Expanded",

    link:"/case-study/burnt-orange-benefits"
  },

  {
    id:3,

    category:"HEALTHCARE",

    country:"USA",

    flag:"/images/USAFlag.webp",

    image:"https://virtualassistant24x7.com/wp-content/uploads/2026/07/ng-4.webp",

    title:"NG Vascular",

    description:"Insurance verification, billing and collections fully managed by one specialist.",

    stat1:"1+ Yr",
    label1:"Active Partnership",

    stat2:"5",
    label2:"Functions Managed",

    link:"/case-study/ng-vascular"
  },

  {
    id:4,

    category:"RECRUITMENT",

    country:"USA",

    flag:"/images/USAFlag.webp",

    image:"https://virtualassistant24x7.com/wp-content/uploads/2026/07/flash.webp",

    title:"Flash Hiring",

    description:"Complete digital marketing strategy covering SEO, content and social media.",

    stat1:"+220%",
    label1:"Follower Growth",

    stat2:"4.8X",
    label2:"Engagement",

    link:"/case-study/flashiring"
  },

  {
    id:5,

    category:"CPG",

    country:"USA",

    flag:"/images/USAFlag.webp",

    image:"https://virtualassistant24x7.com/wp-content/uploads/2026/07/rhy.webp",

    title:"Rhythm Superfoods",

    description:"Four years of outsourced bookkeeping and finance operations.",

    stat1:"4 Years",
    label1:"Engagement",

    stat2:"100%",
    label2:"Finance Ownership",

    link:"/case-study/rhythm-superfoods"
  },

  {
    id:6,

    category:"MANUFACTURING",

    country:"UAE",

    flag:"https://virtualassistant24x7.com/wp-content/uploads/2026/07/Flag-United-Arab-Emirates.webp",

    image:"https://virtualassistant24x7.com/wp-content/uploads/2026/02/ad-1.webp",

    title:"Adinath Enterprises",

    description:"SEO, content, social media and email marketing driving measurable B2B growth.",

    stat1:"+24.45%",
    label1:"Organic Traffic",

    stat2:"59 → 105",
    label2:"Ranking Keywords",

    link:"https://www.citadelcoworkers.com/case-study/adinathenterprises"
  },



];
const testimonials = [
  {
    name: "Jessica M.",
    role: "CEO, TechFlow",
    quote: "Citadel helped us scale faster than we ever imagined.",
    image: "/images/client-1.jpg",
  },
  {
    name: "Michael T.",
    role: "Founder, GrowthHackers",
    quote: "Our go-to partner for building high-performing remote teams.",
    image: "/images/client-2.jpg",
  },
  {
    name: "Sarah L.",
    role: "Operations Head, BrightStart",
    quote: "The quality of talent and support is exceptional.",
    image: "/images/client-3.jpg",
  },
];

const ChevronRight = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path
      d="M9 6l6 6-6 6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Quote = ({ size = 32, color = "#FF5A3C" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <path d="M9.5 6C6.46 6 4 8.46 4 11.5c0 2.76 2.02 5.04 4.66 5.45-.36 1.3-1.3 2.4-2.66 2.9v1.6c3.06-.5 5.5-3.06 5.5-6.45V11.5C11.5 8.46 9.5 6 9.5 6z" />
    <path d="M18 6c-3.04 0-5.5 2.46-5.5 5.5 0 2.76 2.02 5.04 4.66 5.45-.36 1.3-1.3 2.4-2.66 2.9v1.6c3.06-.5 5.5-3.06 5.5-6.45V11.5C20 8.46 18 6 18 6z" />
  </svg>
);

const Play = ({ size = 12, color = "#fff" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <path d="M8 5v14l11-7z" />
  </svg>
);

const getInitials = (name = "") => {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  return `${parts[0]?.[0] || "C"}${parts.length > 1 ? parts[parts.length - 1][0] : ""}`.toUpperCase();
};

function ClientAvatar({ name, image, color, className = "" }) {
  const [hasImage, setHasImage] = useState(Boolean(image));

  useEffect(() => setHasImage(Boolean(image)), [image]);

  if (hasImage) {
    return <img src={image} className={className} alt={name} onError={() => setHasImage(false)} />;
  }

  return (
    <div
      className={`${className} initials-avatar`}
      style={{ backgroundColor: color || "#204ecf" }}
      role="img"
      aria-label={`${name} initials`}
    >
      {getInitials(name)}
    </div>
  );
}

const GLOBAL_TESTIMONIAL_WAIT_TIME = 7000;
const globalLocations = [
  {
    id: "canada",
    name: "Canada",
    city: "Toronto",
    x: 25,
    y: 34,
    testimonial:
      "The UI/UX designer we hired brought a fresh perspective to our app. Their designs enhanced usability and engagement, making a noticeable difference in user satisfaction. A great experience working with such a talented professional!",
    person: "Adriana Franco",
    role: "D2C Skincare Brand",
  },
{
  id: "new-location",
  name: "Germany",
  city: "Berlin",
  x: 55,
  y: 32,
  testimonial:
    "We were sending generic blasts with low engagement. Citadel Coworkers’ offshore email marketing expert rebuilt our flows with segmentation and personalized recommendations. Within 4 months, our email campaigns attributed revenue growth of 5X.",
  person: "Sarah Patterson",
  role: "E-commerce / D2C Brand",
},
{
  id: "new-location",
  name: "United Kingdom ",

  x: 60,
  y: 40,
  testimonial:
    "We hired a Microsoft Office specialist from Citadel Coworkers to clean up years of Excel chaos and automate reporting. Within weeks, our manual work dropped by more than half. Their level of accuracy, speed and understanding of business workflows honestly felt like working with an in-house analyst. country",
  person: "David Collins",
  role: "Business Consulting",
},
{
  id: "new-location",
  name: "New Zealand",

  x: 70,
  y: 45,
  testimonial:
    " Our social presence was silent and we couldn’t find out why. When Citadel Coworkers’ specialist stepped in and transformed our LinkedIn and newsletter content. They consistently shared value-driven posts that connected with the audience and turned our followers into advocates.",
  person: "Ethan Caldwell",
  role: "D2C / E-commerce Brand",
},
  {
    id: "usa",
    name: "United States",
    city: "New York",
    x: 54,
    y: 54,
    testimonial:
      "Quality content is key to digital success, and the writer we onboarded from Citadel Coworkers exceeded expectations. Their research skills and engaging writing style significantly improved our blog and website traffic.",
    person: "Boris Kapustan",
    role: "Multi-Location Restaurant Group",
  },






  {
    id: "australia",
    name: "Australia",
    city: "Sydney",
    x: 84,
    y: 54,
    testimonial:
      "Our in-house attempts at cold email tanked our domain reputation. Citadel rebuilt our sending infrastructure and sequences from scratch; reply rates on qualified sends turned positive again within weeks.",
    person: "Jacob Carter",
    role: "Manufacturing",
  },
];
const clients = [
  {
    id: 1,
    name: "Laura Katsiotis",
    role: "",
    tag: "HIGHLY RECOMMEND",
    sub: "",
        video: "/images/laura.mp4",
    poster: "/images/laura.webp",
    quote:
      "Laura works in finance and knows better than most how critical accurate bookkeeping is. In this testimonial, she shares why she turned to Citadel Coworkers to bring in the right support and why she hasn't looked back. ",
    title: "How Citadel Coworkers Helped Laura Find the Right Bookkeeping Support for Her Finance Business",
  },
  {
    id: 2,
    name: "Michael Lin",
    role: "",
    tag: "N",
    sub: "",
    quote:
      "When Michael realised his team was missing out on business because of disorganised processes, he knew something had to change. With Citadel Coworkers keeping their CRM on track. Watch how the team got their CRM organised, stopped tasks from piling up, and finally had a system that works.",
    title: "Michael's Story: From Missing Out on Business to a Fully Organized CRM | Citadel Coworkers ",
          video: "/images/mich.mp4",
    poster: "/images/Michael Lin.webp",
  },
  {
    id: 3,
    name: "David Holmes",
    role: "",
    tag: "",
    sub: "",
    quote:
      "What would you do with a few extra hours every week? David was spending hours every week managing his calendar and chasing follow-ups — until he found Citadel Coworkers. In this testimonial, he shares exactly how the platform freed up his time and helped him grow his business.",
    title: "It Completely Changed My Business' – David's Review of Citadel Coworkers ",
          video: "/images/davidtest.mp4",
    poster: "/images/davidholenm.webp",
  },
  {
    id: 4,
    name: "Olivia Thompson",
    role: "",
    tag: "",
    sub: "",
    quote:
   "Olivia didn't think managing clients and scheduling could get easier — until she tried working with a VA from Citadel. In this short testimonial, she shares exactly what changed for her and why she can't imagine working without it.",
    title: "Customer Spotlight: Olivia Shares Her Experience with Citadel Coworkers ",
          video: "/images/olivatestimonial.mp4",
    poster: "/images/Olivia Thompson.webp",
  },
  {
    id: 5,
    name: "Kelsey Yates",
    role: "",
    tag: "",
    sub: "",
    quote:
      "When this furniture ecommerce owner needed reliable remote support, she turned to Citadel Coworkers and her hire has now been with her for over 2 years. Kind, computer-savvy, and always delivering, he's become an integral part of her business. ",
    title: "2+ Years of Trusted Remote Talent – A Furniture Ecommerce Owner's Story | Citadel Coworkers",
        video: "/images/kaytes.mp4",
    poster: "/images/Kelsey Yates.webp",
  },
   
];

const styles = {
  wrap: {
    width: "100%",
    background: "#F7F8FC",
    padding: "64px 24px",

    boxSizing: "border-box",
  },
  inner: { maxWidth: 1000, margin: "0 auto" },
  eyebrowWrap: { display: "flex", justifyContent: "center", marginBottom: 16 },
  eyebrow: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    fontSize: 11,
    letterSpacing: "0.2em",
    fontWeight: 600,
    color: "#FF5A3C",
    textTransform: "uppercase",
  },
  eyebrowDot: {
    width: 6,
    height: 6,
    borderRadius: "50%",
    background: "#FF5A3C",
    display: "inline-block",
  },
  heading: {
    textAlign: "center",
    fontSize: 34,
    fontWeight: 800,
    color: "#0B1B33",
    lineHeight: 1.25,
    margin: 0,
  },
  accent: { color: "#FF5A3C" },
  subtext: {
    textAlign: "center",
    fontSize: 14,
    color: "#5B6478",
    maxWidth: 620,
    margin: "16px auto 0",
    lineHeight: 1.6,
  },
  mainGrid: {
    marginTop: 40,
    display: "grid",
    gridTemplateColumns: "1.4fr 1fr",
    gap: 24,
    alignItems: "stretch",
  },
  videoCard: {
    position: "relative",
    borderRadius: 16,
    overflow: "hidden",
    background: "#0B1B33",
    aspectRatio: "16 / 9",
    cursor: "pointer",
  },
  videoBg: {
    position: "absolute",
    inset: 0,
    opacity: 0.7,
    background:
      "linear-gradient(120deg, #0B1B33 0%, #10263f 45%, #123244 100%)",
  },
  videoBadge: {
    position: "absolute",
    top: 16,
    left: 16,
    display: "flex",
    alignItems: "center",
    gap: 8,
    background: "rgba(0,0,0,0.3)",
    backdropFilter: "blur(4px)",
    borderRadius: 999,
    padding: "6px 12px",
    zIndex: 2,
  },
  videoBadgeIcon: {
    width: 20,
    height: 20,
    borderRadius: "50%",
    background: "rgba(255,255,255,0.9)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  videoBadgeTitle: { color: "#fff", fontSize: 11, fontWeight: 600, margin: 0 },
  videoBadgeSub: { color: "#c5d4ff", fontSize: 10, margin: 0 },
  videoContent: {
    position: "relative",
    height: "100%",
    display: "flex",
    alignItems: "center",
    padding: "0 32px",
    zIndex: 1,
  },
  videoTitle: {
    color: "#fff",
    fontSize: 26,
    fontWeight: 800,
    lineHeight: 1.2,
    margin: 0,
  },
  videoBrandRow: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    marginTop: 4,
  },
  videoBrandIcon: {
    background: "#dc2626",
    borderRadius: 4,
    padding: 4,
    display: "flex",
  },
  videoBrand: {
    color: "#FF5A3C",
    fontSize: 32,
    fontWeight: 900,
    letterSpacing: "-0.02em",
  },
  videoPill: {
    marginTop: 12,
    display: "inline-block",
    background: "#FF5A3C",
    color: "#fff",
    fontSize: 10,
    fontWeight: 700,
    letterSpacing: "0.03em",
    padding: "6px 12px",
    borderRadius: 999,
  },
  videoPerson: { marginTop: 24 },
  videoPersonName: {
    color: "#FF5A3C",
    fontWeight: 700,
    fontSize: 14,
    textTransform: "uppercase",
    margin: 0,
  },
  videoPersonRole: {
    color: "rgba(255,255,255,0.6)",
    fontSize: 10,
    textTransform: "uppercase",
    letterSpacing: "0.03em",
    margin: 0,
  },
  videoControls: {
    position: "absolute",
    bottom: 12,
    left: 16,
    right: 16,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    color: "rgba(255,255,255,0.7)",
    zIndex: 2,
  },
  videoControlsLeft: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    fontSize: 12,
  },
  videoProgress: {
    width: 64,
    height: 2,
    background: "rgba(255,255,255,0.3)",
    borderRadius: 999,
    display: "inline-block",
  },
  videoWatch: {
    fontSize: 10,
    background: "rgba(0,0,0,0.3)",
    padding: "4px 8px",
    borderRadius: 4,
  },
  quoteCard: {
    background: "#fff",
    borderRadius: 16,
    padding: 28,
    display: "flex",
    flexDirection: "column",
    boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
    boxSizing: "border-box",
  },
  quoteTitle: {
    marginTop: 12,
    fontSize: 18,
    fontWeight: 700,
    color: "#0B1B33",
  },
  quoteText: {
    marginTop: 12,
    fontSize: 13,
    lineHeight: 1.7,
    color: "#5B6478",
    flex: 1,
  },
  quoteFooter: {
    marginTop: 16,
    paddingTop: 16,
    borderTop: "1px solid #f0f0f0",
  },
  quoteName: { fontWeight: 700, fontSize: 14, color: "#0B1B33", margin: 0 },
  quoteRole: {
    fontSize: 11,
    color: "#8A93A6",
    textTransform: "uppercase",
    letterSpacing: "0.03em",
    margin: "4px 0 0",
  },
  clientsWrap: { marginTop: 40 },
  clientsHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  clientsTitle: { fontSize: 18, fontWeight: 700, color: "#0B1B33", margin: 0 },
  arrowsRow: { display: "flex", alignItems: "center", gap: 8 },
  arrowBtn: {
    width: 32,
    height: 32,
    borderRadius: 8,
    border: "1px solid #d1d5db",
    background: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#0B1B33",
    cursor: "pointer",
  },
  arrowBtnStrong: {
    width: 32,
    height: 32,
    borderRadius: 8,
    border: "2px solid #0B1B33",
    background: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#0B1B33",
    cursor: "pointer",
  },
  slidePad: { padding: "0 8px", boxSizing: "border-box" },
  clientCardBase: {
    position: "relative",
    width: "100%",
    borderRadius: 12,
    overflow: "hidden",
    aspectRatio: "16 / 9",
    textAlign: "left",
    padding:"10px",
    marginTop: "15px",
    background:"#ccc",
    border: "none",
    padding: 0,
    cursor: "pointer",
    background: "linear-gradient(135deg, #0B1B33 0%, #14293f 100%)",
    boxSizing: "border-box",
  },
  clientTop: {
    position: "absolute",
    top: 8,
    left: 8,
    display: "flex",
    alignItems: "center",
    gap: 4,
  },
  clientDot: {
    width: 12,
    height: 12,
    borderRadius: "50%",
    background: "rgba(255,255,255,0.2)",
  },
  clientBrand: {
    color: "rgba(255,255,255,0.5)",
    fontSize: 7,
    fontWeight: 600,
  },
  clientBottom: { position: "absolute", left: 8, right: 8, bottom: 8 },
  clientTag: {
    color: "#FF5A3C",
    fontSize: 9,
    fontWeight: 700,
    lineHeight: 1.2,
    margin: 0,
  },
  clientSub: {
    color: "#fff",
    fontSize: 12,
    fontWeight: 800,
    lineHeight: 1.2,
    margin: 0,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  clientNameRow: {
    marginTop: 4,
    display: "flex",
    alignItems: "center",
    gap: 4,
  },
  clientNameIcon: {
    width: 12,
    height: 12,
    borderRadius: 2,
    background: "rgba(255,255,255,0.1)",
  },
  clientName: {
    color: "rgba(255,255,255,0.7)",
    fontSize: 7,
    margin: 0,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
};
const testimonialSettings = {
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover: true,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
            },
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
            },
        },
    ],
};
export default function Testimonials() {
    const { data:serviceTestimonial } = useQuery("testimonial", getTestimonial);
  const [active, setActive] = useState(3);
  const [activeIndex, setActiveIndex] = useState(0);
  const [zooming, setZooming] = useState(true);
  const [showCard, setShowCard] = useState(false);
  const sliderRef = useRef(null);
  const testimonial = clients[active];
  const activeLocation = globalLocations[activeIndex];

  useEffect(() => {
    setZooming(true); setShowCard(false);
    const showTimer = window.setTimeout(() => { setZooming(false); setShowCard(true); }, 1400);
    const nextTimer = window.setTimeout(() => setActiveIndex((previous) => (previous + 1) % globalLocations.length), GLOBAL_TESTIMONIAL_WAIT_TIME);
    return () => { window.clearTimeout(showTimer); window.clearTimeout(nextTimer); };
  }, [activeIndex]);

  const settings = {
    infinite: true,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    focusOnSelect: true,
    afterChange: (index) => setActive(index),
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };
  const testimonialSliderSettings = {
  dots: true,
  arrows: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 3500,
  speed: 600,
  slidesToShow: 3,
  slidesToScroll: 1,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};
const reviews = [
  // Optional avatarColor is used for initials when avatar is empty or unavailable.
  // Example: avatarColor: "#6D4AFF"
  {

    name: "RAVEN FOROBLE ALAMBRA",
    role: "Canada",
    smalltext:"Professional Services Firm",
    avatar: "https://virtualassistant24x7.com/wp-content/uploads/2026/09/clinet-1.webp",
    imgreview: "/images/star5.webp",
    title: "It’s helpful alot.",

    experienceDate: "March 17, 2025",
    review:
      "The Software Developer from Citadel Coworkers played a crucial role in optimizing our internal systems. Their problem-solving skills and attention to detail ensured a smooth workflow. Would definitely hire again.",
  },

  {

    name: "Adriana Franco",
    avatarColor: "#cbc3ec",
    role: "Canada",
    avatar: " ",
    imgreview: "/images/star5.webp",
    title: "Heading- UI/UX Designer ",
 smalltext:"D2C Skincare Brand ",
    experienceDate: "March 17, 2025",
    review:
      "The UI/UX designer we hired brought a fresh perspective to our app. Their designs enhanced usability and engagement, making a noticeable difference in user satisfaction. A great experience working with such a talented professional!",
  },
   {

    name: "Boris Kapustan",
    role: "USA",
    avatarColor:"#4caf50",
    imgreview: "/images/star5.webp",
    title: "Quality content is key to digital…",
 smalltext:"Multi-Location Restaurant Group ",
    experienceDate: "March 17, 2025",
    review:
      "Quality content is key to digital success, and the writer we onboarded from Citadel Coworkers exceeded expectations. Their research skills and engaging writing style significantly improved our blog and website traffic.",
  },
   
    {

    name: "Matthew O'Neil",
    role: "USA",
     avatarColor:"#01579b",
    imgreview: "/images/star5.webp",
    title: "Best Accounting Services",
 smalltext:"B2B SaaS Platform ",
    experienceDate: "March 17, 2025",
    review:
      "I recently had the pleasure of working with Citadel Coworkers's QuickBooks accounting services and felt compelled to share my experience. As a small business owner, managing finances can be daunting, but their team made the process seamless and straightforward.",
  },
   {

    name: "Karla Turcott",
    role: "Canada",
    avatarColor:"#5c6bc0",
    imgreview: "/images/star5.webp",
    title: "Mobile App Developer",
 smalltext:"F2P RPG Publisher  ",
    experienceDate: "March 17, 2025",
    review:
      "Our app required a developer who could manage both iOS and Android platforms, and Citadel Coworkers provided the perfect match. The developer’s skill and dedication ensured smooth functionality and timely delivery. Truly commendable!",
  },
   {

    name: "Tracy Wilson",
    role: "USA",
    avatarColor:"#a4b5bc",
    imgreview: "/images/star5.webp",
    title: "Exceptional Real Estate Assistance – A Game Changer!",
 smalltext:"Fintech Startup  ",
    experienceDate: "March 17, 2025",
    review:
      "Hired 3 Virtual assistant from Citadel and we were amazed to see the quality of work delivered by all the team members. Very professional and dedicated employees. Amazing experience. Happy with our working relationship and looking forward to add more in my team from Citadel.",
  },
   {

    name: "Stephen Barral",
    role: "US",
    avatarColor:"#ef6c00",
    
    imgreview: "/images/star5.webp",
    title: "Dedicated Full Stack Developer",
 smalltext:"Indie Game Studio ",
    experienceDate: "March 17, 2025",
    review:
      "Hiring a Dedicated Full Stack Developer from Citadel Coworkers 2 years ago was a game-changer for our operations. Their exceptional skill set and versatility have significantly enhanced our projects, delivering above and beyond expectations. The level of service and support provided has been unparalleled, making this partnership invaluable to our success. Highly recommended!",
  },
     {

    name: "Luisa Campbell",
    role: "Canada",
    avatarColor:"#689f38",
    imgreview: "/images/star5.webp",
    title: "Finally, Customer Support I Don’t Have to Worry About!",
 smalltext:"B2B SaaS Startup  ",
    experienceDate: "March 17, 2025",
    review:
      "I used to spend way too much time dealing with customer support issues—until I got Citadel Coworkers on board. Their team just gets it. They handle emails, calls, and chats like pros, and my customers are actually getting quick, helpful responses without me having to step in all the time. It’s been a huge relief knowing that support is running smoothly while I focus on growing my business. If you’re tired of babysitting your inbox and want a team that actually knows what they’re doing, Citadel Coworkers is the way to go!",
  },{

    name: "Kevin Smith",
    role: "USA",
    avatarColor:"#ff9800",
    imgreview: "/images/star5.webp",
    title: "Exceptional Real Estate Assistance – A Game Changer!",
 smalltext:"Multi-Provider Dental Group ",
    experienceDate: "March 17, 2025",
    review: "I had an incredible experience working with Citadel Coworkers to hire a real estate assistant with U.S. experience. Their professionalism and expertise made the hiring process seamless, and the assistant they provided has been an absolute asset to my business. Thanks to his efficiency in handling transactions, managing clients, and closing deals, I now have the freedom to travel worldwide without worrying about my business operations. His deep understanding of the U.S. real estate market, coupled with Citadel’s commitment to quality, has truly elevated my workflow. If you're looking for top-tier remote professionals, I highly recommend Citadel Coworkers for their outstanding services.",
  },
 {

    name: "Ethan Walker",
    role: "USA",
    avatar: "https://virtualassistant24x7.com/wp-content/uploads/2026/08/New-Project-15.webp",
    imgreview: "/images/star5.webp",
    title: "We had great inbound leads but an empty top of funnel",
 smalltext:"B2B SaaS ",
    experienceDate: "March 17, 2025",
    review:
      "Our sales team was living off inbound demo requests alone and the pipeline was inconsistent quarter to quarter. Citadel's outbound specialist built a targeted ICP list and launched a multi-channel cadence within a quarter; outbound was generating a majority of our new qualified meetings.",
  },{

    name: "Olivia Brooks",
    role: "USA",
    avatar: "https://virtualassistant24x7.com/wp-content/uploads/2026/08/Olivia-Brooks.webp",
    imgreview: "/images/star5.webp",
    title: "Our SDRs were spending more time on data than dialing",
 smalltext:"Professional Services  ",
    experienceDate: "March 17, 2025",
    review:"List building and CRM cleanup were eating most of our reps' week. Citadel's team took over prospecting and list enrichment entirely, and our SDRs went from a handful of calls a day to a full call block.",
  },{

    name: "Jacob Carter",
    role: "Australia",
    avatar: "	https://virtualassistant24x7.com/wp-content/uploads/2026/08/New-Project-16.webp",
    imgreview: "/images/star5.webp",
    title: "Cold email was landing in spam before it reached anyone",
 smalltext:"Manufacturing ",
    experienceDate: "March 17, 2025",
    review:
      "Our in-house attempts at cold email tanked our domain reputation. Citadel rebuilt our sending infrastructure and sequences from scratch; reply rates on qualified sends turned positive again within weeks. ",
  },
];

  // These are existing testimonials from the review section below. Keeping the
  // location in the source data avoids inventing client locations for the map.
  const globeTestimonials = [reviews[3], reviews[1], reviews[11]].map((review) => ({
    ...review,
    avatar: review.avatar?.trim() || "",
  }));
  const [globeIndex, setGlobeIndex] = useState(0);
  const [mapFocused, setMapFocused] = useState(false);
  const globeTestimonial = globeTestimonials[globeIndex];

  useEffect(() => {
    const focusTimer = window.setTimeout(() => setMapFocused(true), 1150);
    const rotationTimer = window.setInterval(() => {
      setGlobeIndex((index) => (index + 1) % globeTestimonials.length);
    }, 6800);

    return () => {
      window.clearTimeout(focusTimer);
      window.clearInterval(rotationTimer);
    };
  }, [globeTestimonials.length]);

  const [visible, setVisible] = useState(6);
  return (
    
    <div >
   

      <section className="global-testimonial-hero" aria-labelledby="global-testimonial-heading">
        <div className="global-testimonial-heading">
          <span className="global-eyebrow"><span className="eyebrow-dot"></span>CLIENT STORIES, WORLDWIDE</span>
          <h1 id="global-testimonial-heading">Real Reviews From Real People<br /></h1>
          <p>Hear directly from businesses around the world that partnered with Citadel Coworkers to achieve outstanding results.</p>
        </div>
        <div className={`global-map-wrapper ${zooming ? "is-zooming" : ""}`}>
          <img src="https://virtualassistant24x7.com/wp-content/uploads/2026/09/56772445-7f3c-4cc0-a35d-171b6203dadb.png" alt="World map" className="global-world-map" />
          <div className="map-route" aria-hidden="true"></div>
          {globalLocations.map((location, index) => <button key={location.id} className={`map-location ${index === activeIndex ? "active" : ""}`} style={{ left: `${location.x}%`, top: `${location.y}%` }} onClick={() => setActiveIndex(index)} aria-label={`Show ${location.name} testimonial`}><span className="pin-ripple"></span><span className="pin-dot"><span></span></span><span className="location-label">{location.name}</span></button>)}
          <div className={`global-testimonial-card ${showCard ? "visible" : ""}`} style={{ left: `${activeLocation.x}%`, top: `calc(${activeLocation.y}% + 55px)` }} aria-live="polite">
            <div className="testimonial-quote-mark">&ldquo;</div><p className="testimonial-text">{activeLocation.testimonial}</p><div className="testimonial-divider"></div>
            <div className="testimonial-person"><div className="person-avatar">{getInitials(activeLocation.person)}</div><div><strong>{activeLocation.person}</strong><span>{activeLocation.role}</span><small>{activeLocation.city}, {activeLocation.name}</small></div></div>
          </div>
        </div>
       
      </section>

      {/* TESTIMONIALS SECTION */}


<section>
      <div  className="container">
        {/* Eyebrow */}
       
<div class="section-title">
        {/* Heading */}
        <h2>
          Take A Look At Our Valuable
          <br />
          Client's Testimonials
        </h2>
</div>
        <p>
          Our client's experiences and feedback are the heartbeat of our work. We
          deliver projects and build relationships with our clients, and their
          testimonials are living proof of the trust and satisfaction we've earned.
        </p>

        {/* Main testimonial grid */}
        <div style={styles.mainGrid} className="wol-main-grid">
          {/* Video card */}
          <div style={styles.videoCard}>
       <video
    key={testimonial.id}
    controls
    preload="metadata"
    poster={testimonial.poster}
    style={{
        width:"100%",
        height:"100%",
        objectFit:"cover",
        borderRadius:"16px"
    }}
>
    <source
        src={testimonial.video}
        type="video/mp4"
    />
</video>
          

            <div style={styles.videoBadge}>
            
              <div>
            
           
              </div>
            </div>

            <div style={styles.videoContent}>
              <div>
                <p style={styles.videoTitle}>
                  Website Upgrade? <span style={styles.accent}>Call</span>
                </p>
                <div style={styles.videoBrandRow}>
                  <span style={styles.videoBrandIcon}>
                    <Play size={12} color="#fff" />
                  </span>
             
                </div>
                <div style={styles.videoPill}>
                  FAST, FLAWLESS, AND FRUSTRATION-FREE.
                </div>
                <div style={styles.videoPerson}>
                  <p style={styles.videoPersonName}>{testimonial.name}</p>
                  <p style={styles.videoPersonRole}>
                    {testimonial.role.split("—")[1] || "Client"}
                  </p>
                </div>
              </div>
            </div>

            <div style={styles.videoControls}>
              <div style={styles.videoControlsLeft}>
                <Play size={14} color="rgba(255,255,255,0.7)" />
                <span style={styles.videoProgress} />
              </div>
          
            </div>
          </div>

          {/* Quote panel */}
          <div style={styles.quoteCard}>
            <Quote size={32} />
            <h3 style={styles.quoteTitle}>{testimonial.title}</h3>
            <p style={styles.quoteText}>{testimonial.quote}</p>
            <div style={styles.quoteFooter}>
              <p style={styles.quoteName}>{testimonial.name}</p>
              <p style={styles.quoteRole}>{testimonial.role}</p>
            </div>
          </div>
        </div>

        {/* Our Clients — Slick Slider */}
        <div style={styles.clientsWrap}>
          <div style={styles.clientsHeader}>
            <h4 style={styles.clientsTitle}>Our Clients</h4>
            <div style={styles.arrowsRow}>
              <button
                onClick={() => sliderRef.current?.slickPrev()}
                aria-label="Previous client"
                style={styles.arrowBtn}
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={() => sliderRef.current?.slickNext()}
                aria-label="Next client"
                style={styles.arrowBtnStrong}
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          <Slider ref={sliderRef} {...settings}>
            {clients.map((c, i) => (
              <div key={c.id} style={styles.slidePad}>
                <button
  onClick={() => {
    setActive(i);
    sliderRef.current?.slickGoTo(i);
  }}
  style={{
    ...styles.clientCardBase,
    boxShadow:
      i === active
        ? "0 0 0 2px #204ecf"
        : "0 0 0 1px transparent",
  }}
>

  <img
    src={c.poster}
    alt={c.name}
    style={{
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block",
    }}
  />





</button>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      </section>

  <section className="testimonial-section-page-sp" id="client-stories">

      <div className="container">

        <div className="testimonial-stories-head">
        <div className="section-title">

          <span>CLIENT STORIES</span>

          <h2>
            Trusted by Businesses
            <br />
            Around the World
          </h2>

          <p>
            Real experiences from companies that scaled with Citadel.
          </p>

        </div>
        <aside className="client-trust-score" aria-label="Client trust score">
          <div className="client-trust-main">
            <strong>4.9</strong>
            <span>Excellent</span>
            <div aria-label="4.9 out of 5 stars" className="client-trust-stars"><div class="stars"><img src="/images/star5.webp" alt=""/></div></div>
            <small>Average client rating</small>
          </div>
          <div className="client-trust-breakdown" aria-label="Rating distribution visual">
            {["5-star", "4-star", "3-star", "2-star", "1-star"].map((label, index) => (
              <div key={label}><span>{label}</span><i><b style={{ width: index === 0 ? "100%" : index === 1 ? "18%" : "4%" }}></b></i></div>
            ))}
          </div>
        </aside>
        </div>
<div className="gird-re">


{reviews.slice(0, visible).map((r, i) => (
    <div key={i} className="card-ne">
      <div className="review-card">

     <div className="review-top">
  <div className="review-user">
    <ClientAvatar name={r.name} image={r.avatar?.trim()} color={r.avatarColor} className="review-avatar" />

    <div>
      <h4>{r.name}</h4>
      <span>{r.role}</span>
    </div>
  </div>


</div>

<div className="stars">
  <img src={r.imgreview} alt="" />
</div>

<h3>{r.title}</h3>

<p>{r.review}</p>



    

      </div>
    </div>
  ))}

       
</div>
<div class="grid-load">
{reviews.length > 6 && (
  <div className="load-more-wrap">
    <button
      className="load-more-btn"
      onClick={() => {
        if (visible >= reviews.length) {
          setVisible(6);
        } else {
          setVisible((prev) => Math.min(prev + 3, reviews.length));
        }
      }}
    >
      {visible >= reviews.length ? "Load Less" : "Load More"}
      <span>→</span>
    </button>
  </div>
)}</div>
      </div>

    </section>
<WebsiteReviews reviewsResponse={serviceTestimonial} />
    <section class="cs-cta-section"><div class="container">
      <h2 class="cs-cta-title">Your Team's Next Chapter Starts Here.</h2><p class="cs-cta-sub">
        Join 500+ companies building leaner, faster, global teams with Citadel Coworkers.</p>
        <button class="cs-btn"><a href="/contact-us">Talk To Our Team →</a></button></div></section>
      {/* Small responsive tweak + slick slide height fix (kept minimal & scoped) */}
      <style>{`
      .section-title h2 {
    font-size: 42px;
    font-weight: bold;
    margin-bottom: 23px;
}
    section.cs-cta-section:before {
    content: "";
    position: absolute;
    inset: 0;
    background: url(https://virtualassistant24x7.com/wp-content/uploads/2026/04/30d8e6f35_generated_0493f725-1.png) center / cover no-repeat;
    opacity: 0.1;
    z-index: 1;
}
    /* =========================
   TESTIMONIAL HERO
========================= */

.testimonials-hero {
  position: relative;
  overflow: hidden;
  padding: 150px 0 90px;
  background:
   #d2d6e2
}

.testimonials-hero::after {
  content: "";
  position: absolute;
  width: 650px;
  height: 650px;
  right: -250px;
  bottom: -400px;
  border-radius: 50%;
  background: rgba(32, 78, 207, 0.06);
  pointer-events: none;
}

.testimonials-container {
  width: min(1400px, 90%);
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 70px;
  align-items: center;
  position: relative;
  z-index: 2;
}


/* =========================
   LEFT SIDE
========================= */

.hero-content {
  max-width: 720px;
}

.wall-love {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  padding: 10px 22px;
  border: 1px solid rgba(32, 78, 207, 0.4);
  border-radius: 50px;
  color: #204ecf;
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.wall-love span {
  font-size: 16px;
}

.hero-content h1 {
  margin: 28px 0 24px;
  color: #17243d;
  font-size: clamp(48px, 4.8vw, 76px);
  line-height: 1.08;
  letter-spacing: -2px;
  font-weight: 700;
}

.hero-content h1 span {
  color: #204ecf;
}

.hero-description {
  max-width: 650px;
  margin: 0;
  color: #647085;
  font-size: 19px;
  line-height: 1.7;
}

.heading-line {
  width: 150px;
  height: 3px;
  margin: 30px 0 42px;
  background: #dce5f8;
  border-radius: 50px;
}

.heading-line span {
  display: block;
  width: 75px;
  height: 100%;
  background: #204ecf;
  border-radius: inherit;
}


/* =========================
   STATS
========================= */

.hero-stats {
  display: flex;
  align-items: center;
  gap: 28px;
}

.stat-box {
  display: flex;
  align-items: center;
  gap: 14px;
  white-space: nowrap;
}

.stat-icon {
  width: 58px;
  height: 58px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(32, 78, 207, 0.08);
  color: #204ecf;
  font-size: 21px;
}

.stat-box h3 {
  margin: 0 0 4px;
  color: #204ecf;
  font-size: 29px;
  line-height: 1;
}

.stat-box p {
  margin: 0;
  color: #334155;
  font-size: 14px;
}

.stat-divider {
  width: 1px;
  height: 55px;
  background: #d9dfeb;
}


/* =========================
   RIGHT TESTIMONIAL AREA
========================= */

.hero-testimonials {
  position: relative;
  text-align:center;

}
.hero-testimonials img {
    width: 70%;
      }
.background-quote {
  position: absolute;
  top: -80px;
  left: 0;
  color: rgba(32, 78, 207, 0.08);
  font-size: 300px;
  font-family: Georgia, serif;
  line-height: 1;
  z-index: 0;
}

.testimonial-path {
  position: absolute;
  left: 85px;
  top: 100px;
  width: 230px;
  height: 390px;
  border-left: 2px solid #204ecf;
  border-bottom: 2px solid #204ecf;
  border-radius: 0 0 0 200px;
  opacity: 0.9;
}


/* =========================
   TESTIMONIAL CARD
========================= */



.testimonial-card-1 {
  top: 25px;
  right: 0;
}

.testimonial-card-2 {
  top: 235px;
  left: 0;
}

.testimonial-card-3 {
  bottom: 15px;
  right: 0;
}

.client-image {
  flex-shrink: 0;
  width: 125px;
  height: 125px;
  padding: 4px;
  border-radius: 50%;
  background: #ffffff;
  box-shadow: 0 12px 30px rgba(20, 35, 70, 0.13);
}

.client-image img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  border-radius: 50%;
}

.testimonial-text {
  padding-top: 3px;
}

.stars {
  margin-bottom: 10px;
  color: #f4aa00;
  letter-spacing: 3px;
  font-size: 17px;
}

.testimonial-text p {
  margin: 0 0 13px;
  color: #1f2d45;
  font-size: 18px;
  line-height: 1.55;
  font-weight: 500;
}

.testimonial-text h4 {
  margin: 0 0 5px;
  color: #204ecf;
  font-size: 16px;
}
article.website-review-card {
    background: #efefef;
    padding: 20px;
    border-radius: 15px;
    margin-top: 40px;
    height: 100%;
}
.testimonial-text span {
  color: #6b778c;
  font-size: 14px;
}

.grid-case .result-image img {
    margin-bottom: 20px;
    border-radius: 13px;
}
/* =========================
   REAL STORIES TEXT
========================= */

.real-stories {
  position: absolute;
  left: -110px;
  bottom: 50px;
  display: flex;
  flex-direction: column;
  color: #204ecf;
  font-family: Georgia, serif;
  font-size: 24px;
  font-style: italic;
  line-height: 1.2;
}

.real-stories b {
  position: absolute;
  right: -55px;
  bottom: -15px;
  font-size: 50px;
  font-family: Arial, sans-serif;
  font-style: normal;
}


/* =========================
   NEXT SECTION
========================= */

.client-testimonials-section {
  padding: 85px 0 100px;
  background: #ffffff;
  text-align: center;
}

.section-container {
  width: min(850px, 90%);
  margin: auto;
}

.section-container h2 {
  margin: 0;
  color: #17243d;
  font-size: clamp(34px, 3vw, 52px);
  line-height: 1.2;
}

.section-line {
  width: 100px;
  height: 3px;
  margin: 22px auto 25px;
  background: #dce5f8;
}

.section-line span {
  display: block;
  width: 55%;
  height: 100%;
  margin: auto;
  background: #204ecf;
}

.section-container p {
  margin: 0 auto;
  max-width: 750px;
  color: #647085;
  font-size: 16px;
  line-height: 1.8;
}

p.case-bottm-content {
    text-align: center;
    margin-top: 50px;
    font-size: 18px;
}
    .case-bottom-cta a {
    background: #00cc83;
    border: solid 1px #00cc83;
    color: #fff !important;
    padding: 20px;
    border-radius: 13px;
    font-size: 20px;
    text-transform: uppercase;
}
/* =========================
   TABLET
========================= */

@media (max-width: 1100px) {
  .testimonials-container {
    grid-template-columns: 1fr;
    gap: 50px;
  }

  .hero-content {
    max-width: 100%;
  }

  .hero-testimonials {
    width: min(700px, 100%);
    margin: auto;
  }

  .real-stories {
    left: 0;
  }
}


/* =========================
   MOBILE
========================= */

@media (max-width: 768px) {
  .testimonials-hero {
    padding: 70px 0;
  }

  .testimonials-container {
    width: min(92%, 1400px);
  }

  .hero-content h1 {
    font-size: 44px;
    letter-spacing: -1px;
  }

  .hero-description {
    font-size: 16px;
  }

  .hero-stats {
    flex-wrap: wrap;
    gap: 20px;
  }

  .stat-divider {
    display: none;
  }

  .stat-box {
    width: calc(50% - 15px);
  }

  .hero-testimonials {
    min-height: auto;
    display: flex;
    flex-direction: column;
    gap: 35px;
  }

  .testimonial-card,
  .testimonial-card-1,
  .testimonial-card-2,
  .testimonial-card-3 {
    position: relative;
    top: auto;
    right: auto;
    left: auto;
    bottom: auto;
    width: 100%;
  }

  .testimonial-path,
  .real-stories {
    display: none;
  }

  .background-quote {
    top: -50px;
    left: 0;
    font-size: 220px;
  }

  .client-image {
    width: 90px;
    height: 90px;
  }

  .testimonial-text p {
    font-size: 16px;
  }

  .client-testimonials-section {
    padding: 65px 0;
  }
}
.case-bottom-cta {
    text-align: center;
    margin-top: 50px;
}

@media (max-width: 480px) {
  .hero-content h1 {
    font-size: 37px;
  }

  .hero-stats {
    flex-direction: column;
    align-items: flex-start;
  }

  .stat-box {
    width: 100%;
  }

  .testimonial-card {
    align-items: flex-start;
    gap: 15px;
  }

  .client-image {
    width: 70px;
    height: 70px;
  }

  .stars {
    font-size: 13px;
    letter-spacing: 1px;
  }
}
    section.cs-cta-section {
    align-items: center;
    background: radial-gradient(circle at 20% 20%, #1e3a8a, #020617);
    display: flex;
    justify-content: center;
    overflow: hidden;
    position: relative;
    text-align: center;
}
.result-stat {
    background: #efefef;
    border: 1px solid rgba(255, 255, 255, .05);
    border-radius: 14px;
    padding: 16px;
}
    .result-stats {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 14px;
    margin-bottom: 24px;
}
   section.text-case .result-content {
    padding: 24px;
    padding-left: 0;
    padding-right: 0;
}
    section.text-cases .Nmae-co {
    display: flex;
    align-items: center;
    gap: 14px;
    justify-content: space-between;
    align-items: center;
}
    .grid-case {
    display: grid;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
    height: 100%;
    margin-top: 50px;
}
section.text-cases .result-country {
    margin-bottom: 12px;
}
section.text-cases .result-country img {
    width: 28px;
    height: 20px;
    border-radius: 3px;
    object-fit: cover;
}
section.text-cases .result-content p {
    font-size: 15px;
}
    section.text-cases  .result-content h4 {
    color: #000;
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 12px;
}
section.text-cases .result-link {
    display: inline-flex;
    align-items: center;
    gap: 10px;
 
    color: #204ecf;
    text-decoration: none;
    font-weight: 700;
    transition: .3s;
}
section.text-cases .result-category {
    position: absolute;
    top: 18px;
    left: 18px;
    z-index: 3;
    padding: 8px 14px;
    border-radius: 50px;
    background: #204ecf;
    color: #fff;
    font-size: 10px;
    font-weight: 700;
    letter-spacing: .08em;
}
    .grid-load button.load-more-btn {
    background: #00cc83;
    border: solid 1px #00cc83;
    color: #fff !important;
    padding: 11px 21px;
    border-radius: 13px;
    font-size: 19px;
    text-transform: uppercase;
}

.grid-load {
    text-align: center;
    margin-top: 50px;
}
section.text-cases .result-image {
    position: relative;
    overflow: hidden;
}
    section.text-cases .result-stat h3 {
    font-size: 20px;
    font-weight: bold;
    color: #204ecf;
}
   section.text-cases.case-slider-Dm .result-card {
    background: #fff;
    overflow: hidden;
    transition: .35s;
    border-radius: 22px;
    padding: 25px;
    border: 3px solid #00cc83;
    margin-top: 24px;
    height:100%;
}
    section.text-cases {
    background: #d2d6e2;
}
    .cs-cta-title {
    font-size: 32px;
    font-weight: 700;
    color: #fff;
    line-height: 1.15;
    margin-bottom: 16px;
    text-transform: capitalize;
}
    .cs-cta-sub {
    color: #fff;
    margin-bottom: 40px;
}
    .stat-icon img {
    width: 40px;
}
    .cs-btn {
    display: inline-block;
    background: #fff;
    color: #0f1117;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    padding: 16px 40px;
    border-radius: 100px;
    border: none;
    cursor: pointer;
    transition: background 0.2s, transform 0.15s;
    text-decoration: none;
    position: relative;
    z-index: 999;
}.review-card {
    background: #fff;
    border: 1px solid #e8e8e8;
    border-radius: 18px;
    padding: 28px;
    transition: .35s;
    height: 100%;
}.review-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    border-bottom: 1px solid #eee;
    padding-bottom: 18px;
}.review-user {
    display: flex;
    align-items: center;
    gap: 14px;
    margin-top: 0;
}.review-avatar {
    width: 58px;
    height: 58px;
    border-radius: 50%;
    object-fit: cover;
}.review-user h4 {
    margin: 0;
    font-size: 18px;
    color: #111;
}.review-user span {
    display: block;
    margin-top: 4px;
    font-size: 14px;
    color: #777;
}.gird-re {
    display: grid;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
    height: 100%;
    margin-top: 50px;
}.stars img {
    width: 120px !important;
}.stars {
    margin: 18px 0 10px;
}.review-card h3 {
    font-size: 18px;
    margin: 5px 0;
    color: #111;
    line-height: 1.3;
}.review-card p {
    white-space: pre-line;
    line-height: 1.8;
    color: #444;
    margin: 0;
}.review-bottom {
    margin-top: 25px;
    padding-top: 18px;
    border-top: 1px solid #ececec;
}.review-bottom span {
    font-size: 14px;
    color: #666;
}.review-bottom span {
    font-size: 12px;
    color: #666;
    background: #e7e7e6;
    padding: 7px;
    border-radius: 7px;
}.review-bottom strong {
    color: #222;
    font-weight: 600;
}

/* Global testimonial map hero */
.testimonials-hero { --hero-blue:#204ecf; isolation:isolate; min-height:690px; padding:132px max(5vw,24px) 62px; background:radial-gradient(circle at 54% 50%,#173e9c 0,#0c245e 28%,#07183d 65%,#05122f 100%); color:#fff; }
.testimonials-hero::before { content:""; position:absolute; inset:0; background:radial-gradient(circle at 25% 10%,rgba(67,139,255,.2),transparent 29%),linear-gradient(105deg,rgba(2,12,39,.75),transparent 60%); pointer-events:none; z-index:-1; }
.testimonials-hero::after { width:34vw; height:34vw; right:-15vw; bottom:-23vw; background:#2670ff; opacity:.12; filter:blur(25px); }
.map-hero-copy { position:relative; z-index:3; width:min(430px,40%); margin-left:clamp(0px,5vw,90px); }.map-hero-eyebrow { display:flex; align-items:center; gap:9px; margin:0 0 20px; color:#aec8ff; font-size:11px; font-weight:700; letter-spacing:.16em; text-transform:uppercase; }.map-hero-eyebrow span,.map-card-pulse { width:7px; height:7px; border-radius:50%; background:#38d6a5; box-shadow:0 0 0 5px rgba(56,214,165,.16),0 0 16px #38d6a5; }.map-hero-copy h1 { margin:0; color:#fff; font-size:clamp(42px,4.35vw,70px); font-weight:700; letter-spacing:-.055em; line-height:.98; }.map-hero-copy h1 em { display:block; color:#9fc3ff; font-style:normal; }.map-hero-copy>p:last-child { max-width:390px; margin:25px 0 0; color:#d6e3ff; font-size:17px; line-height:1.65; }
.world-map-stage { position:absolute; z-index:1; inset:52px -7vw 20px 29vw; overflow:hidden; pointer-events:none; }.world-map-art { position:absolute; width:100%; height:100%; transform:translate3d(0,0,0) scale(1); transform-origin:31% 39%; transition:transform 1800ms cubic-bezier(.22,1,.36,1); will-change:transform; }.world-map-stage.is-focused.is-usa .world-map-art { transform:translate3d(11%,10%,0) scale(1.72); }.world-map-stage.is-focused.is-uk .world-map-art { transform:translate3d(-2%,13%,0) scale(1.55); transform-origin:50% 29%; }.world-map-stage.is-focused.is-australia .world-map-art { transform:translate3d(-24%,-12%,0) scale(1.48); transform-origin:80% 71%; }.world-map-art svg { width:100%; height:100%; overflow:visible; }.world-map-land path { fill:rgba(85,143,255,.2); stroke:rgba(151,198,255,.55); stroke-width:2; vector-effect:non-scaling-stroke; filter:drop-shadow(0 0 13px rgba(42,125,255,.24)); }.world-map-lines path { fill:none; stroke:rgba(142,188,255,.13); stroke-width:1; vector-effect:non-scaling-stroke; }
.map-pin { position:absolute; z-index:2; display:grid; place-items:center; padding:0; border:0; background:transparent; color:#dbe9ff; font:700 10px/1 Arial,sans-serif; letter-spacing:.08em; pointer-events:auto; cursor:pointer; transform:translate(-50%,-50%); }.map-pin i { width:11px; height:11px; border-radius:50%; background:#51dcaf; border:2px solid #d7ffef; box-shadow:0 0 0 7px rgba(81,220,175,.15),0 0 23px #51dcaf; animation:map-pulse 2.5s ease-out infinite; }.map-pin span { margin-top:9px; padding:5px 7px; border:1px solid rgba(153,194,255,.24); border-radius:20px; background:rgba(7,25,67,.72); opacity:.85; }.pin-usa { left:28.2%; top:41.5%; }.pin-uk { left:49.5%; top:29.5%; }.pin-australia { left:80.6%; top:69%; }
.map-testimonial-card { position:absolute; z-index:5; top:50%; left:clamp(31%,39vw,610px); width:min(385px,31vw); padding:23px; border:1px solid rgba(173,208,255,.28); border-radius:18px; background:linear-gradient(135deg,rgba(15,44,105,.91),rgba(5,22,62,.88)); box-shadow:0 22px 65px rgba(0,4,19,.4),inset 0 1px rgba(255,255,255,.12); backdrop-filter:blur(15px); opacity:0; transform:translate3d(30px,-42%,0); transition:opacity 700ms ease 600ms,transform 800ms cubic-bezier(.22,1,.36,1) 600ms; }.map-testimonial-card.is-visible { opacity:1; transform:translate3d(0,-42%,0); }.map-card-topline { display:flex; align-items:center; gap:9px; color:#a9c7ff; font-size:10px; font-weight:700; letter-spacing:.14em; text-transform:uppercase; }.map-card-pulse { width:6px; height:6px; box-shadow:0 0 0 4px rgba(56,214,165,.14); }.map-card-person { display:flex; align-items:center; gap:12px; margin:18px 0 15px; }.map-card-person img { width:45px; height:45px; border:2px solid rgba(183,217,255,.75); border-radius:50%; object-fit:cover; }.map-card-person strong,.map-card-person span { display:block; }.map-card-person strong { color:#fff; font-size:15px; }.map-card-person span { margin-top:3px; color:#b9cef5; font-size:11px; }.map-testimonial-card blockquote { display:-webkit-box; margin:0; overflow:hidden; color:#fff; font-size:14px; line-height:1.65; -webkit-box-orient:vertical; -webkit-line-clamp:4; }.map-video-link { display:inline-flex; align-items:center; gap:7px; margin-top:17px; color:#71e6bd; font-size:12px; font-weight:700; text-decoration:none; }.map-card-progress { height:2px; margin-top:20px; overflow:hidden; border-radius:2px; background:rgba(255,255,255,.18); }.map-card-progress span { display:block; width:100%; height:100%; transform-origin:left; background:#54dcae; animation:card-progress 6.8s linear; }.map-hero-status { position:absolute; z-index:5; right:max(5vw,24px); bottom:38px; color:#a7c3f7; font-size:12px; }.map-hero-status strong { color:#fff; }.map-hero-status span { margin:0 8px; color:#53dbae; }
.hero-trust-score { position:absolute; z-index:6; left:max(5vw,24px); bottom:36px; display:grid; grid-template-columns:106px 1fr; gap:14px 18px; width:330px; padding:17px 19px 14px; border:1px solid rgba(188,216,255,.3); border-radius:15px; background:rgba(7,25,67,.78); box-shadow:0 14px 45px rgba(0,5,22,.28); backdrop-filter:blur(12px); }.hero-trust-main strong { display:block; color:#fff; font-size:42px; letter-spacing:-.07em; line-height:.85; }.hero-trust-main span { display:block; margin-top:7px; color:#e4eeff; font-size:12px; font-weight:700; }.hero-trust-stars { margin-top:5px; color:#38d6a5; font-size:16px; letter-spacing:1px; }.hero-trust-main small { display:block; margin-top:5px; color:#aec5ef; font-size:9px; }.hero-trust-breakdown { display:grid; gap:7px; padding-top:2px; }.hero-trust-breakdown div { display:grid; grid-template-columns:35px 1fr; align-items:center; gap:7px; }.hero-trust-breakdown span { color:#d5e3ff; font-size:9px; }.hero-trust-breakdown i { display:block; height:7px; overflow:hidden; border-radius:7px; background:rgba(255,255,255,.18); }.hero-trust-breakdown b { display:block; height:100%; border-radius:inherit; background:#38d6a5; }.hero-trust-score a { grid-column:1/-1; margin:0 -19px -14px; padding:11px 19px; border-top:1px solid rgba(188,216,255,.22); color:#d8e5ff; font-size:11px; text-align:center; text-decoration:underline; text-underline-offset:3px; }
.client-trust-score { display:grid; grid-template-columns:112px 1fr; gap:16px 22px; width:min(370px,100%); margin:30px auto 42px; padding:20px 22px; border:1px solid #d9dce4; border-radius:16px; background:#fff; box-shadow:0 10px 30px rgba(19,35,67,.08); text-align:left; }.client-trust-main strong { display:block; color:#1d2941; font-size:48px; letter-spacing:-.08em; line-height:.84; }.client-trust-main span { display:block; margin-top:8px; color:#26334d; font-size:13px; font-weight:700; }.client-trust-stars { margin-top:7px; color:#00b67a; font-size:17px; letter-spacing:1px; }.client-trust-main small { display:block; margin-top:7px; color:#65718a; font-size:10px; }.client-trust-breakdown { display:grid; gap:8px; padding-top:3px; }.client-trust-breakdown div { display:grid; grid-template-columns:37px 1fr; align-items:center; gap:8px; }.client-trust-breakdown span { color:#34415a; font-size:10px; }.client-trust-breakdown i { display:block; height:8px; overflow:hidden; border-radius:8px; background:#dfe2e8; }.client-trust-breakdown b { display:block; height:100%; border-radius:inherit; background:#00b67a; }
@keyframes map-pulse { 70%,100% { box-shadow:0 0 0 14px rgba(81,220,175,0),0 0 23px #51dcaf; } } @keyframes card-progress { from { transform:scaleX(0); } to { transform:scaleX(1); } }
.testimonial-stories-head { display:flex; align-items:center; justify-content:space-between; gap:42px; margin:0 auto 45px; }
.testimonial-stories-head .section-title { flex:1; margin:0; text-align:left; }.testimonial-stories-head .section-title h2 { margin-top:10px; }
.testimonial-stories-head .section-title p { max-width:560px; margin-right:0; margin-left:0; }.testimonial-stories-head .client-trust-score { flex:0 0 370px; width:370px; margin:0; }.client-trust-score { box-sizing:border-box; }
.initials-avatar { display:flex; align-items:center; justify-content:center; color:#fff; font-weight:700; letter-spacing:.02em; }.review-avatar.initials-avatar { font-size:18px; }.map-card-person .map-client-avatar { width:50px; height:50px; border:2px solid rgba(183,217,255,.75); border-radius:50%; object-fit:cover; }.map-card-person .map-client-avatar.initials-avatar { flex:0 0 50px; font-size:15px; }
@media (max-width:760px) { .testimonial-stories-head { display:block; margin-bottom:32px; }.testimonial-stories-head .section-title { text-align:center; }.testimonial-stories-head .section-title p { margin-right:auto; margin-left:auto; }.testimonial-stories-head .client-trust-score { width:min(370px,100%); margin:28px auto 0; } }
@media (max-width:900px) { .testimonials-hero { min-height:760px; }.map-hero-copy { width:min(500px,80%); margin:0 auto; text-align:center; }.map-hero-eyebrow { justify-content:center; }.map-hero-copy>p:last-child { margin-right:auto; margin-left:auto; }.world-map-stage { inset:235px -20vw 45px -17vw; }.map-testimonial-card { top:auto; right:5vw; bottom:68px; left:auto; width:min(390px,53vw); transform:translate3d(30px,0,0); }.map-testimonial-card.is-visible { transform:none; }.map-hero-status { left:5vw; right:auto; }.hero-trust-score { left:5vw; bottom:35px; } }
@media (max-width:600px) { .testimonials-hero { min-height:720px; padding-top:100px; }.map-hero-copy { width:100%; }.map-hero-copy h1 { font-size:43px; }.map-hero-copy>p:last-child { font-size:15px; }.world-map-stage { inset:225px -42vw 110px -42vw; }.world-map-stage.is-focused.is-usa .world-map-art { transform:translate3d(10%,7%,0) scale(1.5); }.map-testimonial-card { right:16px; bottom:51px; left:16px; width:auto; padding:18px; }.map-testimonial-card blockquote { font-size:13px; -webkit-line-clamp:3; }.map-hero-status { display:none; }.map-pin span { font-size:8px; }.client-trust-score { grid-template-columns:102px 1fr; gap:14px; margin-bottom:32px; padding:18px; } }
@media (prefers-reduced-motion:reduce) { .world-map-art,.map-testimonial-card { transition:none!important; }.map-pin i,.map-card-progress span { animation:none!important; } }
.map-location:not(.active) .location-label {
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
}

.map-location.active .location-label {
  opacity: 1;
  visibility: visible;
}/* Light global-map hero */
.testimonials-hero-light { min-height:850px; padding:112px 24px 40px; background:radial-gradient(circle at 50% 80%,#e0efff 0,rgba(234,245,255,.75) 31%,#fff 68%); color:#142d5d; }.testimonials-hero-light::before { background:radial-gradient(circle at 9% 13%,rgba(98,174,255,.14),transparent 25%),radial-gradient(circle at 90% 26%,rgba(111,177,255,.11),transparent 24%); z-index:-1; }.testimonials-hero-light::after { display:none; }.testimonials-hero-light .map-hero-copy { width:min(800px,100%); margin:0 auto; padding:0; text-align:center; animation:light-hero-in .8s cubic-bezier(.22,1,.36,1) both; }.testimonials-hero-light .map-hero-eyebrow { justify-content:center; color:#3775d7; font-size:11px; }.testimonials-hero-light .map-hero-eyebrow span { width:6px; height:6px; background:#39b987; box-shadow:0 0 0 5px rgba(57,185,135,.12); }.testimonials-hero-light .map-hero-copy h1 { max-width:760px; margin:auto; color:#122a58; font-size:clamp(42px,5vw,70px); line-height:1.04; letter-spacing:-.055em; }.testimonials-hero-light .map-hero-copy h1 em { display:block; margin-top:5px; color:#3577d8; }.testimonials-hero-light .map-hero-copy>p:last-child { max-width:650px; margin:22px auto 0; color:#607294; font-size:16px; line-height:1.65; }.testimonials-hero-light .map-hero-meta { display:none; }
.testimonials-hero-light .world-map-stage { z-index:1; inset:325px 4vw 30px; overflow:visible; opacity:1; }.testimonials-hero-light .world-map-art { transform:scale(1); transform-origin:50% 50%; transition:transform 1500ms cubic-bezier(.22,1,.36,1); }.testimonials-hero-light .world-map-stage.is-focused.is-usa .world-map-art { transform:translate(-3%,4%) scale(1.08); }.testimonials-hero-light .world-map-stage.is-focused.is-canada .world-map-art { transform:translate(3%,4%) scale(1.06); }.testimonials-hero-light .world-map-stage.is-focused.is-australia .world-map-art { transform:translate(-5%,-3%) scale(1.07); }.testimonials-hero-light .world-map-land path { fill:url(#map-dots); stroke:#b9d9ff; stroke-width:1.5; filter:none; }.testimonials-hero-light .world-map-land { filter:drop-shadow(0 16px 25px rgba(67,130,222,.12)); }.testimonials-hero-light .world-map-lines path { stroke:rgba(75,145,231,.13); }.testimonials-hero-light .world-map-art svg pattern circle { fill:#8fc4ff; }.testimonials-hero-light .map-pin { color:#315e9e; pointer-events:auto; font-size:9px; letter-spacing:.03em; }.testimonials-hero-light .map-pin i { width:10px; height:10px; border:2px solid #fff; background:#25b982; box-shadow:0 0 0 7px rgba(37,185,130,.12),0 4px 13px rgba(17,144,100,.28); animation:location-ripple 2.6s ease-out infinite; }.testimonials-hero-light .map-pin span { margin-top:8px; padding:5px 8px; border:1px solid rgba(91,148,219,.2); background:rgba(255,255,255,.88); box-shadow:0 4px 13px rgba(51,104,181,.08); }.testimonials-hero-light .world-map-stage.is-usa .pin-usa i,.testimonials-hero-light .world-map-stage.is-canada .pin-canada i,.testimonials-hero-light .world-map-stage.is-australia .pin-australia i { width:14px; height:14px; background:#159e6f; box-shadow:0 0 0 10px rgba(37,185,130,.19),0 6px 20px rgba(17,144,100,.35); }.pin-canada { left:25%; top:30%; }.pin-usa { left:28.5%; top:42%; }.pin-uk { left:49.7%; top:29%; }.pin-uae { left:58.5%; top:42%; }.pin-india { left:65.8%; top:48%; }.pin-australia { left:80.5%; top:70%; }
.testimonials-hero-light .world-map-reference { display:block; width:100%; height:100%; object-fit:contain; object-position:center; filter:drop-shadow(0 16px 25px rgba(67,130,222,.1)); }
.testimonials-hero-light .map-testimonial-card { z-index:5; top:505px; right:clamp(28px,9vw,150px); left:auto; width:min(365px,31vw); padding:20px 22px; border:1px solid rgba(92,145,215,.24); border-radius:16px; background:rgba(255,255,255,.93); box-shadow:0 18px 45px rgba(33,84,155,.16); backdrop-filter:blur(12px); transform:translate3d(18px,0,0); transition:opacity 500ms ease,transform 650ms cubic-bezier(.22,1,.36,1); }.testimonials-hero-light .map-testimonial-card.is-visible { transform:none; }.testimonials-hero-light .map-card-topline { color:#4b78b7; }.testimonials-hero-light .map-card-pulse { background:#25b982; box-shadow:0 0 0 4px rgba(37,185,130,.12); }.testimonials-hero-light .map-card-person { margin:14px 0 11px; }.testimonials-hero-light .map-card-person strong { color:#173362; }.testimonials-hero-light .map-card-person span { color:#697c9c; }.testimonials-hero-light .map-testimonial-card blockquote { color:#385372; font-size:13px; line-height:1.58; }.testimonials-hero-light .map-card-progress { margin-top:15px; background:#dfebf8; }.testimonials-hero-light .map-card-progress span { background:#25b982; }.testimonial-connector { position:absolute; z-index:4; top:445px; right:calc(9vw + 280px); width:330px; height:180px; overflow:visible; pointer-events:none; }.testimonial-connector path { fill:none; stroke:#25b982; stroke-width:1.4; stroke-dasharray:5 6; stroke-linecap:round; animation:connector-draw 1.2s ease both 900ms; }.testimonials-hero-light .map-hero-status { right:clamp(28px,9vw,150px); bottom:34px; color:#6e83a2; }.testimonials-hero-light .map-hero-status strong { color:#234879; }.testimonials-hero-light .map-hero-status span { color:#25b982; }
@keyframes light-hero-in { from { opacity:0; transform:translateY(16px); } to { opacity:1; transform:none; } } @keyframes location-ripple { 70%,100% { box-shadow:0 0 0 17px rgba(37,185,130,0),0 4px 13px rgba(17,144,100,.28); } } @keyframes connector-draw { from { stroke-dashoffset:150; opacity:0; } to { stroke-dashoffset:0; opacity:1; } }
@media (max-width:900px) { .testimonials-hero-light { min-height:930px; }.testimonials-hero-light .world-map-stage { inset:335px 0 40px; }.testimonials-hero-light .map-testimonial-card { top:auto; right:5vw; bottom:65px; width:min(390px,53vw); }.testimonial-connector { top:auto; right:calc(5vw + 240px); bottom:155px; } }
@media (max-width:600px) { .testimonials-hero-light { min-height:840px; padding-top:92px; }.testimonials-hero-light .map-hero-copy h1 { font-size:42px; }.testimonials-hero-light .map-hero-copy>p:last-child { font-size:14px; }.testimonials-hero-light .world-map-stage { inset:290px -35vw 190px; }.testimonials-hero-light .map-testimonial-card { right:16px; bottom:33px; left:16px; width:auto; }.testimonial-connector { display:none; }.testimonials-hero-light .map-pin { font-size:8px; }.testimonials-hero-light .map-pin span { padding:4px 6px; }.testimonials-hero-light .map-hero-status { display:none; } }
/* Supplied global testimonial hero */
.global-testimonial-hero {     background: #d2d6e2; position:relative; width:100%; min-height:850px; overflow:hidden; box-sizing:border-box; padding:150px 30px 150px; 
#d2d6e2 !important }.global-testimonial-heading { position:relative; z-index:5;  margin:0 auto 35px; text-align:center; }.global-eyebrow { display:inline-flex; align-items:center; gap:9px; margin-bottom:16px; color:#1261ff; font-size:13px; font-weight:700; letter-spacing:2px; }.eyebrow-dot { width:8px; height:8px; border-radius:50%; background:#1261ff; box-shadow:0 0 0 6px rgba(18,97,255,.1); }.global-testimonial-heading h1 { margin:0; color:#102040; font-size:clamp(42px,5vw,72px); font-weight:800; line-height:1.05; letter-spacing:-2px; }.global-testimonial-heading h1 span { color:#1261ff; }.global-testimonial-heading p { margin:22px auto 0; color:#53627c; font-size:17px; line-height:1.65; }
.global-map-wrapper { position:relative; width:min(1450px,100%); height:520px; margin:0 auto; transform-origin:50% 50%; transition:transform 2.4s cubic-bezier(.22,1,.36,1),opacity 1.4s ease; }.global-map-wrapper.is-zooming { opacity:.84; transform:translateY(8px) scale(1.09); }.global-world-map { position:absolute; width:100%; height:100%; object-fit:contain; object-position:center; user-select:none; pointer-events:none; animation:global-map-drift 10s ease-in-out infinite alternate; }.map-route { position:absolute; left:25%; top:43%; width:255px; height:135px; border-top:1px dashed rgba(18,97,255,.45); border-radius:50%; transform:rotate(-18deg); pointer-events:none; }.map-location { position:absolute; z-index:10; width:24px; height:24px; padding:0; border:0; background:transparent; cursor:pointer; transform:translate(-50%,-50%); }.pin-dot { position:absolute; top:50%; left:50%; width:22px; height:22px; border-radius:50% 50% 50% 0; background:#34ad81; box-shadow:0 8px 22px rgba(18,97,255,.35); transform:translate(-50%,-50%) rotate(-45deg); }.pin-dot span { position:absolute; top:50%; left:50%; width:7px; height:7px; border-radius:50%; background:#fff; transform:translate(-50%,-50%); }.pin-ripple { position:absolute; top:50%; left:50%; width:35px; height:35px; border:1px solid rgba(18,97,255,.4); border-radius:50%; opacity:0; transform:translate(-50%,-50%); }.map-location.active .pin-ripple { animation:global-pin-pulse 3s infinite; }.map-location.active .pin-dot { animation:global-pin-bounce 3s ease-in-out infinite; }.location-label { position:absolute; top:-8px; left:20px; padding:9px 13px; border:1px solid rgba(18,97,255,.1); border-radius:9px; background:rgba(255,255,255,.95); box-shadow:0 10px 30px rgba(24,53,100,.1); color:#17233d; font-size:13px; font-weight:600; white-space:nowrap; opacity:0; transform:translateX(-8px); transition:.55s ease; }.map-location.active .location-label { opacity:1; transform:none; }
.global-testimonial-card { position:absolute; z-index:999; width:370px; max-width:calc(100vw - 40px); padding:25px; border:1px solid rgba(18,97,255,.1); border-radius:20px; background:rgba(255,255,255,.97); box-shadow:0 25px 70px rgba(35,70,120,.16); box-sizing:border-box; opacity:0; visibility:hidden; transform:translate(-50%,20px) scale(.94); transition:opacity .6s ease,transform .7s cubic-bezier(.22,1,.36,1),visibility .6s; }.global-testimonial-card.visible { opacity:1; visibility:visible; transform:translate(-50%,0) scale(1); }.testimonial-quote-mark { color:#1261ff; font-size:55px; font-weight:800; line-height:.7; }.global-testimonial-card .testimonial-text {     margin-top: 0;margin:14px 0 20px; color:#253453; font-size:13px; line-height:1.65; }.testimonial-divider { height:1px; margin-bottom:18px; background:#e5eaf3; }.testimonial-person { display:flex; align-items:center; gap:13px; }.person-avatar { display:flex; flex:0 0 46px; align-items:center; justify-content:center; width:46px; height:46px; border-radius:50%; background:#eaf2ff; color:#1261ff; font-size:16px; font-weight:700; }.testimonial-person strong { display:block; color:#15223b; font-size:14px; }.testimonial-person span { display:block; margin-top:3px; color:#1261ff; font-size:12px; }.testimonial-person small { display:block; margin-top:4px; color:#77839a; font-size:11px; }.testimonial-indicators { position:relative; z-index:30; display:flex; justify-content:center; gap:8px; margin-top:5px; }.testimonial-indicators button { width:8px; height:8px; padding:0; border:0; border-radius:50%; background:#d4ddea; cursor:pointer; transition:.3s ease; }.testimonial-indicators button.active { width:25px; border-radius:10px; background:#1261ff; } @keyframes global-pin-pulse { 0% { transform:translate(-50%,-50%) scale(.7); opacity:.8; } 70% { transform:translate(-50%,-50%) scale(2.3); opacity:0; } 100% { opacity:0; } } @keyframes global-pin-bounce { 0%,100% { transform:translate(-50%,-50%) rotate(-45deg); } 50% { transform:translate(-50%,-57%) rotate(-45deg); } }
@keyframes global-map-drift { from { transform:translate3d(-4px,2px,0); } to { transform:translate3d(4px,-2px,0); } }
@media (max-width:768px) { section#client-stories {
    padding-top: 0;
}.global-testimonial-hero { min-height:auto; padding:50px 18px 35px; }.global-map-wrapper {display:none}
.global-testimonial-heading h1 { font-size:40px; letter-spacing:-1px; }.global-testimonial-heading p { font-size:14px; }.global-map-wrapper { height:470px; }.global-map-wrapper.is-zooming { transform:translateY(5px) scale(1.065); }.global-testimonial-card { width:300px; padding:20px; }.global-testimonial-card .testimonial-text { font-size:13px; }.location-label { padding:7px 9px; font-size:11px; } }
        @media (max-width: 768px) {
          .wol-main-grid { grid-template-columns: 1fr !important; }
     
        .slick-slide { height: auto; }
        .slick-slide > div { height: 100%; }
        .slick-track { display: flex; }
        .grid-case ,.gird-re{
    grid-template-columns: 1fr;
}
    .case-bottom-cta a
    {
        font-size: 15px;    padding: 14px;}
      }
      `}</style>
    </div>
  );
}
