import React, { useState, useRef ,useEffect,lazy, Suspense} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const TestimonialsTabs = lazy(() =>
  import("../Component/Testimonialstabs")
);

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
const PricingTabs = lazy(() =>
  import("../Component/DMHiringTabs")
);

const ContactFormDM = lazy(() =>
  import("../Component/ContactFormDMlandingpage")
);
export default function Home() {
  const mobileSlider = {
  dots: true,
  arrows: false, 
 
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,

};
     const [visibleItems, setVisibleItems] = useState(3);
const [showMorePoints, setShowMorePoints] = useState(false);

     const processDataa = [
  {
    id: "01",
    title: "Initial Consultation",
    description:
      "Start with a detailed and insightful consultation to fully understand your needs and objectives.",
  },
  {
    id: "02",
    title: "Strategy Development",
    description:
      "Develop a customized strategy aligned with your specific business goals and objectives.",
  },
  {
    id: "03",
    title: "Implementation",
    description:
      "Execute the plan efficiently using advanced tools and cutting-edge techniques.",
  },
  {
    id: "04",
    title: "Optimization",
    description:
      "Monitor campaigns continuously and optimize performance for better results.",
  },
  {
    id: "05",
    title: "Reporting",
    description:
      "Receive transparent reports with key insights, analytics and recommendations.",
  },
];

const PrevArrow = ({ onClick }) => (
  <button
    className="process-arrow prev"
    onClick={onClick}
  >
    ←
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    className="process-arrow next"
    onClick={onClick}
  >
    →
  </button>
);



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

  {
    id:7,

    category:"DIGITAL MARKETING",

    country:"USA",

    flag:"/images/USAFlag.webp",

    image:"https://virtualassistant24x7.com/wp-content/uploads/2026/07/vri.webp",

    title:"Virtual Assistant SEO",

    description:"SEO, PPC and CRO combined into one high-converting growth funnel.",

    stat1:"72K+",
    label1:"Search Impressions",

    stat2:"500+",
    label2:"Organic Clicks",

    link:"https://www.citadelcoworkers.com/case-study/virtualassistantseo"
  }

];
     const guarantees = [
  {
    id: 1,
    color: "pink",

    icon: (
      <svg
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="22" cy="24" r="6" stroke="currentColor" strokeWidth="2"/>
        <circle cx="42" cy="24" r="6" stroke="currentColor" strokeWidth="2"/>
        <circle cx="32" cy="18" r="7" stroke="currentColor" strokeWidth="2"/>

        <path
          d="M12 46c0-6 5-10 10-10s10 4 10 10"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />

        <path
          d="M22 46c0-7 5-12 10-12s10 5 10 12"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />

        <path
          d="M42 36c5 0 10 4 10 10"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),

    title: "One Team For Every Channel.",
image:"/images/THE PROBLEM.mp4",
    description:
      "SEO, paid, content, social, video and AI visibility one strategy, one point of contact, nothing lost in translation between vendors",

    quote:
      "You're juggling five agencies who've never spoken to each other."
  },



  {
    id: 2,

    color: "lime",

    icon: (
      <svg
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="32"
          cy="32"
          r="20"
          stroke="currentColor"
          strokeWidth="2"
        />

        <circle
          cx="32"
          cy="32"
          r="10"
          stroke="currentColor"
          strokeWidth="2"
        />

        <circle
          cx="32"
          cy="32"
          r="3"
          fill="currentColor"
        />

        <path
          d="M32 4v8"
          stroke="currentColor"
          strokeWidth="2"
        />

        <path
          d="M60 32h-8"
          stroke="currentColor"
          strokeWidth="2"
        />

        <path
          d="M32 60v-8"
          stroke="currentColor"
          strokeWidth="2"
        />

        <path
          d="M4 32h8"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    ),

    title: "Guarantee Deliverables, Not Just Hours",
    image:"/images/Problem2.mp4",
    description:
      "You're paying for outcomes. If the work doesn't ship, the invoice doesn't either.",

    quote:
      "You're paying for hours and slide decks, not results."
  },



  {
    id: 3,

    color: "pink",

    icon: (
      <svg
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >

        <rect
          x="18"
          y="10"
          width="26"
          height="40"
          rx="3"
          stroke="currentColor"
          strokeWidth="2"
        />

        <path
          d="M25 20H38"
          stroke="currentColor"
          strokeWidth="2"
        />

        <path
          d="M25 28H38"
          stroke="currentColor"
          strokeWidth="2"
        />

        <path
          d="M25 36H34"
          stroke="currentColor"
          strokeWidth="2"
        />

        <path
          d="M42 42l5 5 10-12"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

      </svg>
    ),

    title: "Cancel Anytime, Zero Lock-In Contracts.",
    image:"/images/Problem3.mp4",
    description:
      "No penalties, no fine print built to trap you backed by a 100% money-back guarantee, full refund, no questions asked.*",

    quote:
      "The last agency locked you into a contract you regretted."
  },{
  id: 4,

  color: "lime",

  icon: (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >

      <rect
        x="10"
        y="15"
        width="34"
        height="24"
        rx="3"
        stroke="currentColor"
        strokeWidth="2"
      />

      <polygon
        points="23,22 34,27 23,33"
        fill="currentColor"
      />

      <rect
        x="46"
        y="18"
        width="8"
        height="20"
        rx="2"
        stroke="currentColor"
        strokeWidth="2"
      />

      <path
        d="M50 14v4"
        stroke="currentColor"
        strokeWidth="2"
      />

      <path
        d="M50 38v4"
        stroke="currentColor"
        strokeWidth="2"
      />

    </svg>
  ),

  title: "Video, Content & Graphics Built In-House",
  image:"/images/Problem4.mp4",
  description:
    "Included in your plan, not billed as extras and never quietly outsourced to a third party.",

  quote:
    "Every piece of content takes a month and still feels generic."
},

{
  id: 5,

  color: "pink",

  icon: (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >

      <path
        d="M10 50H54"
        stroke="currentColor"
        strokeWidth="2"
      />

      <rect
        x="16"
        y="28"
        width="5"
        height="22"
        fill="currentColor"
      />

      <rect
        x="28"
        y="20"
        width="5"
        height="30"
        fill="currentColor"
      />

      <rect
        x="40"
        y="12"
        width="5"
        height="38"
        fill="currentColor"
      />

      <path
        d="M15 18L28 24L40 14L52 8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />

    </svg>
  ),

  title: "One Report, Every Channel, No Black Box",
  image:"/images/Problem5.mp4",
  description:
    "You see exactly what's working, what isn't, and what's next including where AI search now sends your customers.",

  quote:
    "You found out you were losing customers only after they'd already gone."
},

{
  id: 6,

  color: "lime",

  icon: (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >

      <circle
        cx="32"
        cy="24"
        r="10"
        stroke="currentColor"
        strokeWidth="2"
      />

      <path
        d="M24 44L18 56"
        stroke="currentColor"
        strokeWidth="2"
      />

      <path
        d="M40 44L46 56"
        stroke="currentColor"
        strokeWidth="2"
      />

      <path
        d="M24 44H40"
        stroke="currentColor"
        strokeWidth="2"
      />

      <path
        d="M32 18L34 22L39 23L35 27L36 32L32 29L28 32L29 27L25 23L30 22Z"
        fill="currentColor"
      />

    </svg>
  ),

  title: "Certified Coworkers, Guaranteed",
  image:"/images/Problem6.mp4",
  description:
    "Google, Meta & GEO-certified professionals trained for AI search, not just Google lead your account. Not the right fit in the first quarter? We'll replace them at no cost.",

  quote:
    "You're worried a business your size won't get real attention."
}
];

    const processData  = [
  {
    title: "Discovery",
    content:
      "We audit your current marketing across SEO, paid, content and social and yes, what AI already says about you to find out where you're actually losing customers.",
  },
  {
    title: "Strategize",
    content:
      "We build one coordinated plan across every channel that matters for your business, not a patchwork of disconnected tactics.",
  },
  {
    title: "Create & launch",
    content:
      "Our in-house team produces the video, content, graphics, and campaigns to bring the plan to life, nothing outsourced, nothing delayed.",
  },
  {
    title: "Report & optimize",
    content:
      "You get one monthly report across every channel including where you now show up in AI answers and we keep adjusting from there.",
  },
];
    const teamMembers = [
  {
    name: "Taylor Doen",
    role: "Support Leader",
    image: "https://virtualassistant24x7.com/wp-content/uploads/2026/03/Team5.webp",
  },
  {
    name: "John Carter",
    role: "SEO Specialist",
    image: "https://virtualassistant24x7.com/wp-content/uploads/2026/01/TEam-image-1024-1.webp",
  },
  {
    name: "Sophie Moore",
    role: "Content Strategist",
    image: "https://virtualassistant24x7.com/wp-content/uploads/2026/03/Team1.webp",
  },
  {
    name: "Alex Smith",
    role: "PPC Expert",
    image: "https://virtualassistant24x7.com/wp-content/uploads/2026/01/Aditi-Sinha-1.webp",
  },
  {
    name: "Emma Watson",
    role: "Social Media Manager",
    image: "https://virtualassistant24x7.com/wp-content/uploads/2026/01/Aditi-Sinha-1.webp",
  },
  {
    name: "Emma Watson",
    role: "Social Media Manager",
    image: "https://virtualassistant24x7.com/wp-content/uploads/2026/03/team6-1.webp",
  },

  {
    name: "Keshav Kumar",
    role: "Remarketing & Audience Strategist",
    image: "https://virtualassistant24x7.com/wp-content/uploads/2026/01/Keshav-Kumar-1.webp",
  },
];
const teamSettings = {
  dots: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 3000,
  speed: 700,
  slidesToShow: 4, lazyLoad: "ondemand",
  slidesToScroll: 1,
  arrows: false,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 991,
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
const itemss = [
  { text: "SEO" },
 
  { text: "Social Media" },

  { text: "Content Marketing" },
   { text: "PPC" },
  { text: "Email Marketing" },
  { text: "Web Design" },
  { text: "Lead Generation" },
  { text: "Branding" },
];
const isMobile = window.innerWidth <= 767;
        const items = [
  {
    type: "image",
    src: "https://scontent.cdninstagram.com/v/t51.82787-15/672817725_18119116438604176_6048904557042236312_n.jpg?stp=dst-jpg_e35_s640x640_tt6&_nc_cat=102&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=JO4l28-qOpMQ7kNvwFM6wDH&_nc_oc=Adr9RQyIUnXKGpc4KBAB3UUBemFUCQ2OXrHrcyvqJIyCT4kgvMUQqRjzWv0XvgG4eiA&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=A9KNf3Nd1huxdvKVNFNRaQ&_nc_ss=7b689&oh=00_AQBf6zOsi4rAi0IicDp0RGcqNDnEUbIMdYfp5Q8XtpgsrQ&oe=6A52BAB7",
  },
  {
    type: "image",
    src: "https://scontent.cdninstagram.com/v/t51.82787-15/619369510_18119933914564789_1731205953679212680_n.jpg?stp=dst-jpg_e35_s640x640_tt6&_nc_cat=107&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiRkVFRC5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=U5kDWuM617gQ7kNvwENblcN&_nc_oc=Adq2e9y15hWcD3uS_uTuK4goGp9NEvsdaroD9pe5GRdJBRLB5WegJtZIOqn-0mjjhyg&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=A9KNf3Nd1huxdvKVNFNRaQ&_nc_ss=7b689&oh=00_AQDSxCxfApsbEakQpj_2XJwoUEfE9HrlBg1SgMu0-dPNXQ&oe=6A52CD7A",
  },
  {
    type: "image",
    src: "https://scontent.cdninstagram.com/v/t51.82787-15/619262641_18100187149881680_8411765912518656691_n.jpg?stp=dst-jpg_e35_s640x640_tt6&_nc_cat=109&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiRkVFRC5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=fZgMV8nEmeMQ7kNvwEd8PFQ&_nc_oc=Adqm1dtgD2EfJiTcOQSI2VJT3GXGvmZJl9TYghdTvPs_BseevwXRwyOIIcBjip9mJPs&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=A9KNf3Nd1huxdvKVNFNRaQ&_nc_ss=7b689&oh=00_AQA3_1LUE-5XgSU550DThEXYQAe5ixp3eJnmzw1urX7HSA&oe=6A52D14C",
  },
  {
    type: "image",
    src: "https://scontent.cdninstagram.com/v/t39.30808-6/690630639_956145633840142_6546644795056237805_n.jpg?stp=dst-jpg_e35_s640x640_tt6&_nc_cat=100&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiRkVFRC5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=dhZt70T36CYQ7kNvwFUnilG&_nc_oc=AdqsfHAHjXp-PSF343vSy_VOzQJNBhgnOErJFIg1vBif5at-2IgM5dVokypH2n99010&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=UgGK3mn2aQIuz_CmEDxMEg&_nc_ss=7b689&oh=00_AQBYEKlrYoRw-uMRYvbZiiHZQwNGLE6_3ssyt9sF8d4iRQ&oe=6A52CF02",
  },
  {
    type: "image",
    src: "https://scontent.cdninstagram.com/v/t51.82787-15/619843102_18083223874946669_8028347366313117946_n.jpg?stp=dst-jpg_e35_s640x640_tt6&_nc_cat=106&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiRkVFRC5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=ST35eJF-qc8Q7kNvwH02ghC&_nc_oc=AdrRQkHxFUeho0d3YDz1IpxxdzDB_zcT9oCpab6iTo1cwfU_8OM1MzeuvN4oxpjm79o&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=A9KNf3Nd1huxdvKVNFNRaQ&_nc_ss=7b689&oh=00_AQBeKx7EI2V4XzImOu6Ke-paqNP-4OMrs1JKn4Zidj1h4Q&oe=6A52E5A3",
  },
  {
    type: "video",
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    type:"image",
    src: "https://scontent.cdninstagram.com/v/t51.82787-15/671096650_18024267272810678_7599854228424554461_n.jpg?stp=dst-jpg_e35_s640x640_tt6&_nc_cat=106&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=lihhGfP-rwIQ7kNvwEuiclj&_nc_oc=Adp0p3ddsEpKQyAcxzEmELR4bkUgKMr5T74vMEyVE6epRWcjcSh3A6I699Z1_ixjzeg&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=UgGK3mn2aQIuz_CmEDxMEg&_nc_ss=7b689&oh=00_AQDUuGArzoBVjWG_ejgJ-YxV2H9pkNWcbchYI29lSVEESw&oe=6A52CFE7"
  },
];
 
  const data = [

    {
    title: "Social Media Posts",
   icon: (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="5" y="5" width="14" height="14" rx="2"/>
    <path d="M9 9h6"/>
    <path d="M9 13h6"/>
    <path d="M9 17h3"/>
  </svg>
),
    portfolio: [
       {
        image: "/images/Portfolio/SocialPost/Cosmo clay dishes.webp",
        title: "Virtual",
        category: "Appetizing food photography for recipes",
        desc: "Shot recipe photography for a BBQ sauce brand",
         color:"#c2ffe2",
      },
        {
        image: "/images/Portfolio/SocialPost/Melanie Wenzel (1).webp",
        title: "Citadel",
        category: "Social Media",
        desc: "Captured calming lifestyle shots for a wellness retreat's promotion",
         color:"#9f1fd1",
      }

      ,
        {
        image: "/images/Portfolio/SocialPost/spacevogues Furniture 2 (2).webp",
        title: "Citadel",
        category: "Social Media",
        desc: "Captured luxury interior photography for an interior design firm",
         color:"#1f99d1",
      }
       ,
         {
        image: "/images/Portfolio/SocialPost/kosmos clay OPffer.webp",
        title: "Citadel",
        category: "Social Media",
        desc: "Ran seasonal discount promotions for a BBQ sauce brand",
         color:"#c976a6",
      },
        {
        image: "/images/Portfolio/SocialPost/CCW Festive.webp",
        title: "Festive greetings across major global holidays",
        category: "CCW Festive",
        desc: "Created festive greeting posts for a workforce solutions brand",
          color:" #d6a1c9",
      },
      ,
      {
        image: "/images/Portfolio/SocialPost/adinath (4) (1).webp",
        title: "adinath",
        category: "Social Media",
        desc: "Mixed technical tips with light memes for a busbar manufacturer",
        color:"#dce2ff",
      },
    
      {
        image: "/images/Portfolio/SocialPost/CCW1 (1).webp",
        title: "CCW1 (1)",
        category: "CCW1 (1)",
        desc: "Designed LinkedIn carousels to build credibility for a staffing agency",
         color:"#ceb2b2",
      },
     

        {
        image: "/images/Portfolio/SocialPost/Dummy den.webp",
        title: "Dummy den",
        category: "Dental service promotions for families",
        desc: "Built promotional posts for a dental clinic's family services",
         color:"#99acff",
      },
         {
        image: "/images/Portfolio/SocialPost/Dummy.webp",
        title: "nsurance service ads for protection",
        category: "Social Media",
        desc: "Put together ad creatives for an insurance provider's protection plans",
         color:"#1f40d1",
      },
         {
        image: "/images/Portfolio/SocialPost/dummyback.webp",
        title: "Citadel",
        category: "Social Media",
        desc: "Crafted awareness posts on common conditions for a health & wellness brand",
         color:"#87be8e",
      }
      ,
         {
        image: "/images/Portfolio/SocialPost/kamla rocks (1).webp",
        title: "Citadel",
        category: "Social Media",
        desc: "Styled product photography for a jewelry brand's lifestyle campaign",
         color:"#449cbe",
      }
     
      ,
         {
        image: "/images/Portfolio/SocialPost/kosmos clay.webp",
        title: "Citadel",
        category: "Social Media",
        desc: "Developed recipe posts featuring products for a BBQ sauce brand",
         color:"#1f40d1",
      },
       
         {
        image: "/images/Portfolio/SocialPost/NG-.webp",
        title: "Citadel",
        category: "Social Media",
        desc: "Delivered patient awareness posts for a vascular health clinic",
         color:"#1fd1d1",
      }
      
      
    
       ,
         {
        image: "/images/Portfolio/SocialPost/spacevogues Furniture (1).webp",
        title: "Citadel",
        category: "Social Media",
        desc: "Highlighted kitchen designs and trends for a furniture brand",
         color:"#1fd196",
      }
      ,
       
         {
        image: "/images/Portfolio/SocialPost/VASEo (1).webp",
        title: "Citadel",
        category: "Social Media",
        desc: "Rolled out bold self-promotional ads for a digital marketing agency",
         color:"#1f7bd1",
      }
    ]
  },
  {
    title: "Reels & Videos",
icon: (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="5" width="20" height="14" rx="3"/>
    <polygon points="10 9 16 12 10 15 10 9"/>
  </svg>
),
    portfolio: [
                {
  type: "video",
  video: "/images/Portfolio/Videomarkting/dobe (3).mp4",
  thumbnail: "/images/Portfolio/Videomarkting/laptop.webp",
  title: "Waliza",
  desc: "Filmed a talking-head video explaining services for a workforce solutions brand",
  color: "#4f8df5"
},
                  {

  type: "video",
  video: "/images/Portfolio/Videomarkting/dobe-new.mp4",
  thumbnail: "/images/Portfolio/Videomarkting/dobe-new.webp",
  title: "Kosmovideo1",
  desc: "Produced a software tutorial video for a creative tools platform",
  color: "#4f8df5"
},
       {
  type: "video",
  video: "/images/Portfolio/Videomarkting/50hour.mp4",
  thumbnail: "/images/Portfolio/Videomarkting/50hour.webp",
  title: "Videomarkting",
  desc: "Made a relatable reel on admin struggles for an SEO service provider",
  color: "#4f8df5"
},                       {
  type: "video",
  video: "/images/Portfolio/Videomarkting/coral.mp4",
  thumbnail: "/images/Portfolio/Videomarkting/corel.webp",
  title: "Kosmovideo1",
  desc: "Created a tech walkthrough video for a productivity tools brand",
  color: "#4f8df5"
},
      {
  type: "video",
  video: "/images/Portfolio/Videomarkting/poonamvideo.mp4",
  thumbnail: "/images/Portfolio/Videomarkting/poonam.webp",
  title: "Videomarkting",
  desc: "Produced an explainer video for a workforce solutions brand's offerings",
  color: "#4f8df5"
},               {
  type: "video",
  video: "/images/Portfolio/Videomarkting/Kosmovideo1.mp4",
  thumbnail: "/images/Portfolio/Videomarkting/Kosmovideo1.webp",
  title: "Kosmovideo1",
  desc: "Filmed a fun recipe video for a BBQ sauce brand",
  color: "#4f8df5"
},
       {
  type: "video",
  video: "/images/Portfolio/Videomarkting/tab.mp4",
  thumbnail: "/images/Portfolio/Videomarkting/tab.webp",
  title: "ccw",
  desc: "Created a calming retreat video for a wellness retreat",
  color: "#4f8df5"
},
                  {
  type: "video",
  video: "/images/Portfolio/Videomarkting/spacevoug.mp4",
  thumbnail: "/images/Portfolio/Videomarkting/spacevoug.webp",
  title: "SpaceVoug",
  desc: "Showcased sleek appliances inside a modern kitchen for a home appliance brand",
  color: "#4f8df5"
},
   
           {
  type: "video",
  video: "/images/Portfolio/Videomarkting/kosmovideobrown.mp4",
  thumbnail: "/images/Portfolio/Videomarkting/kosmo1.webp",
  title: "kosmovideo",
  desc: "Put together a behind-the-scenes reel for a BBQ sauce brand",
  color: "#4f8df5"
},


   {
  type: "video",
  video: "/images/Portfolio/Videomarkting/kosmooffer.mp4",
  thumbnail: "/images/Portfolio/Videomarkting/kosmooffer.webp",
  title: "Videomarkting",
  desc: "Filmed a discount promo video for a BBQ sauce brand's retail partner",
  color: "#4f8df5"
},
          {
  type: "video",
  video: "/images/Portfolio/Videomarkting/space1.mp4",
  thumbnail: "/images/Portfolio/Videomarkting/space1.webp",
  title: "Videomarkting",
  desc: "Captured an interior walkthrough video for a hospitality business",
  color: "#4f8df5"
},

     {
  type: "video",
 video: "/images/Portfolio/Videomarkting/youtube-c (2).mp4",
  thumbnail: "/images/Portfolio/Videomarkting/youtube-.webp",
  title: "Email Marketing Campaign",
  desc: "Captured a fun fitness reel for a yoga studio",
  color: "#4f8df5"
},
  {
  type: "video",
  video: "/images/Portfolio/Videomarkting/virtual (2).mp4",
  thumbnail: "/images/Portfolio/Videomarkting/virtual (1).webp",
  title: "Videomarkting",
  desc: "Made a short video questioning manual SEO for an SEO service provider",
  color: "#4f8df5"
},
  


  
   {
  type: "video",
  video: "/images/Portfolio/Videomarkting/ccw (2).mp4",
  thumbnail: "/images/Portfolio/Videomarkting/ccw.webp",
  title: "Videomarkting",
  desc: "Created a quick-tip reel on social tools for a marketing agency",
  color: "#4f8df5"
},
 
     {
  type: "video",
  video: "/images/Portfolio/Videomarkting/yogaapp.mp4",
  thumbnail: "/images/Portfolio/Videomarkting/yogaapp.webp",
  title: "Videomarkting",
  desc: "Filmed a guided yoga video for a yoga app",
  color: "#4f8df5"
},   
     {
  type: "video",
  video: "/images/Portfolio/Videomarkting/residally (2).mp4",
  thumbnail: "/images/Portfolio/Videomarkting/residally.webp",
  title: "Videomarkting",
  desc: "Produced a relatable video on homesharing for a home-sharing platform",
  color: "#018d30"
},   
    ]
  },
  {

    
    title: "Content & Marketing",icon: (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 11v2"/>
    <path d="M6 10v4"/>
    <path d="M9 8l10-3v14l-10-3z"/>
    <path d="M6 14l2 5"/>
  </svg>
),
    portfolio: [
         {
         image: "/images/Portfolio/ContentMarketing/Ng servies.webp",
        title: "Case Study Design",
        category: "Content Marketing",
        desc: "Built educational health condition pages for a vascular health clinic"
      },
          {
        image: "/images/Portfolio/ContentMarketing/Ng homne.webp",
        title: "Ng homne",
        category: "homne",
        desc: "Designed a homepage blending media features for a vascular health clinic"
      },
        {
        image: "/images/Portfolio/ContentMarketing/blog seo (1).webp",
        title: "Carousel Designd",
        category: "bLOG CALEENDER CCW",
        desc: "Organized a blog calendar with ready SEO metadata for a workforce solutions brand",
         color:"#1f40d1",
      },
        {
        image: "/images/Portfolio/ContentMarketing/Interlinking.webp",
        title: "Carousel Designd",
        category: "Social Media",
        desc: "Strengthened internal linking across blog content for a workforce solutions brand",
         color:"#1f40d1",
      },
       {
        image: "/images/Portfolio/ContentMarketing/Flashhiring (6).webp",
        title: "Carousel Designd",
        category: "Social Media",
        desc: "Wrote product pages explaining the platform for an AI hiring startup",
         color:"#1f40d1",
      },
      {
        image: "/images/Portfolio/ContentMarketing/Ng blog page (3).webp",
        title: "Landing Page Copy",
        category: "Content Marketing",
        desc: "Put together a medical blog with detailed patient articles for a vascular health clinic"
      },
        {
        image: "/images/Portfolio/ContentMarketing/adinath blog (2).webp",
        title: "Carousel Designd",
        category: "extra",
        desc: "Simplified a technical blog post for a busbar manufacturer",
         color:"#1f40d1",
      },
      {
        image: "/images/Portfolio/ContentMarketing/flashring.webp",
        title: "Case Study Design",
        category: "Content Marketing",
        desc: "Tracked a full-year festival calendar with live status for an AI hiring startup"
      },
       {
        image: "/images/Portfolio/ContentMarketing/case (2).webp",
        title: "Case Study Design",
        category: "Content Marketing",
        desc: "Outlined a 12-month case study on outsourced billing"
      },
     {
        image: "/images/Portfolio/ContentMarketing/posting.webp",
        title: "Case Study Design",
        category: "Content Marketing",
        desc: "Managed a monthly content calendar for a staffing agency's social posts"
      },
       {
        image: "/images/Portfolio/ContentMarketing/KAMLA ROCKS BLOG (1) (1).webp",
        title: "Carousel Designd",
        category: "Social Media",
        desc: "Ran a personal-toned wellness blog with lead capture for a wellness brand",
         color:"#1f40d1",
      },
       {
        image: "/images/Portfolio/ContentMarketing/info.webp",
        title: "Carousel Designd",
        category: "Social Media",
        desc: "Built an AI vs traditional hiring comparison graphic for an AI hiring platform",
         color:"#1f40d1",
      },
        {
        image: "/images/Portfolio/ContentMarketing/caseadi.webp",
        title: "Carousel Designd",
        category: "Social Media",
        desc: "Created an SEO growth case study for a busbar manufacturer ",
         color:"#1f40d1",
      },
       {
        image: "/images/Portfolio/ContentMarketing/infogr.webp",
        title: "Carousel Designd",
        category: "Social Media",
        desc: "Rolled out social media ad creatives for an SEO service provider",
         color:"#bf4feb",
      },
      {
        image: "/images/Portfolio/ContentMarketing/MIDSTART HOME(1).webp",
        title: "Carousel Designd",
        category: "Social Media",
        desc: "Built a trust-focused website for a real estate company",
         color:"#1f40d1",
      },
        {
        image: "/images/Portfolio/ContentMarketing/adcopies.webp",
        title: "Carousel Designd",
        category: "Social Media",
        desc: "Designed a set of paid ad creatives for an SEO service provider",
         color:"#1f40d1",
      },
         {
        image: "/images/Portfolio/ContentMarketing/adinath (5).webp",
        title: "Carousel Designd",
        category: "Social Media",
        desc: "Ran a set of social media ad creatives for a busbar manufacturer",
         color:"#1f40d1",
      },
      {
        image: "/images/Portfolio/ContentMarketing/tRIGEN (3).webp",
        title: "Carousel Designd",
        category: "Social Media",
        desc: "Simplified service explanations on a website for a logistics company",
         color:"#1f40d1",
      },
      {
        image: "/images/Portfolio/ContentMarketing/adinath content calender.webp",
        title: "Carousel Designd",
        category: "Social Media",
        desc: "Planned a color-coded weekly blog calendar for a busbar manufacturer",
         color:"#1f40d1",
      },
     
      {
        image: "/images/Portfolio/ContentMarketing/VAseo services(1).webp",
        title: "Carousel Designd",
        category: "Social Media",
        desc: "Highlighted the team on an SEO service provider's homepage",
         color:"#1f40d1",
      },
      {
        image: "/images/Portfolio/ContentMarketing/Kosmo blog.webp",
        title: "Carousel Designd",
        category: "Social Media",
        desc: "Paired recipe content with product tie-ins for a BBQ sauce brand",
         color:"#1f40d1",
      },
      {
        image: "/images/Portfolio/ContentMarketing/Kosmos Q – E-commerce Product.webp",
        title: "Carousel Designd",
        category: "Social Media",
        desc: "Built product bundle pages to drive conversions for a BBQ sauce brand",
         color:"#1f40d1",
      },
      {
        image: "/images/Portfolio/ContentMarketing/Kosmo home page (3).webp",
        title: "Carousel Designd",
        category: "Social Media",
        desc: "Crafted a founder-focused brand story page for a BBQ sauce brand",
         color:"#1f40d1",
      },
      {
        image: "/images/Portfolio/ContentMarketing/Cita del blog.webp",
        title: "Carousel Designd",
        category: "Social Media",
        desc: "Shaped blog content like case studies for a staffing agency",
         color:"#1f40d1",
      },
      {
        image: "/images/Portfolio/ContentMarketing/kamla rocks blogs (1).webp",
        title: "Carousel Designd",
        category: "Social Media",
        desc: "Wrote warm, relatable blog content for a wellness brand",
         color:"#1f40d1",
      },
      {
        image: "/images/Portfolio/ContentMarketing/c (4) (1).webp",
        title: "Carousel Designd",
        category: "Social Media",
        desc: "Organized a full-year content calendar by category for a workforce solutions brand",
         color:"#1f40d1",
      },
      {
        image: "/images/Portfolio/ContentMarketing/adinath home.webp",
        title: "Carousel Designd",
        category: "Social Media",
        desc: "Designed a homepage showcasing the full product range for a busbar manufacturer",
         color:"#1f40d1",
      },
      {
        image: "/images/Portfolio/ContentMarketing/Va seo home.webp",
        title: "Carousel Designd",
        category: "Social Media",
        desc: "Outlined service packages clearly on an SEO provider's homepage",
         color:"#1f40d1",
      },
      
     
  
   
      
    ]
  },

  
    {
    title: "Email Marketing",icon: (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 2L11 13"/>
    <path d="M22 2L15 22l-4-9-9-4 20-7z"/>
  </svg>
),
   portfolio: [
   
   
        {
       image: "/images/Portfolio/EmailMarketing/Email automation brunt orange.webp",
        title: "Carousel Designd",
        category: "Social Media",
        desc: "Designed a welcome email series for an HR & benefits company",
         color:"#1f40d1",
      },
      {
       image: "/images/Portfolio/EmailMarketing/Offer citael.webp",
        title: "Carousel Designd",
        category: "Social Media",
        desc: "Wrote a hiring-savings promo email for a workforce solutions agency",
         color:"#1f40d1",
      },
       {
       image: "/images/Portfolio/EmailMarketing/Citadel markting.webp",
        title: "Carousel Designd",
        category: "Social Media",
        desc: "Crafted a personalized outreach email for a workforce solutions agency",
         color:"#1f40d1",
      },
      {
     image: "/images/Portfolio/EmailMarketing/Custmore segment.webp",
        title: "Landing Page Copy",
        category: "Content Marketing",
        desc: "Segmented customer data for targeted emails for a staffing agency"
      },
      {
        image: "/images/Portfolio/EmailMarketing/Email copy.webp",
        title: "Case Study Design",
        category: "Content Marketing",
        desc: "Built email templates for recruitment campaigns for an AI hiring platform"
      }
      ,
      {
     image: "/images/Portfolio/EmailMarketing/Campaign Reports.webp",
        title: "Case Study Design",
        category: "Content Marketing",
        desc: "Tracked email campaign performance on a dashboard for an AI hiring platform"
      },   {
    image: "/images/Portfolio/EmailMarketing/Adinath  Thak you (3).webp",
        title: "Case Study Design",
        category: "Content Marketing",
        desc: "Designed a clean payment confirmation email for a busbar manufacturer"
      }, {
      image: "/images/Portfolio/EmailMarketing/Audience Segmentation (2).webp",
        title: "Case Study Design",
        category: "Content Marketing",
        desc: "Explained audience segmentation visually for an SEO service provider"
      }
      , {
      image: "/images/Portfolio/EmailMarketing/Email automation for citadel.webp",
        title: "Case Study Design",
        category: "Content Marketing",
        desc: "Mapped an automated lead-nurturing email journey for a staffing agency"
      }
      , {
      image: "/images/Portfolio/EmailMarketing/black friday (1) (1).webp",
        title: "Case Study Design",
        category: "Content Marketing",
        desc: "Created a bold discount email for an SEO service provider"
      }
      , {
      image: "/images/Portfolio/EmailMarketing/adinath product lanuch.webp",
        title: "Case Study Design",
        category: "Content Marketing",
        desc: "Announced a product launch email for a busbar manufacturer"
      }
       , {
      image: "/images/Portfolio/EmailMarketing/dummy_ (1) (1).webp",
        title: "Case Study Design",
        category: "Content Marketing",
        desc: "Designed a stylish promotional email template for a jewelry brand"
      }
       , {
      image: "/images/Portfolio/EmailMarketing/VASeooffer.webp",
        title: "Case Study Design",
        category: "Content Marketing",
        desc: "Teased an exclusive pre-sale email for an SEO service provider"
      }
       , {
      image: "/images/Portfolio/EmailMarketing/Ng rest pass.webp",
        title: "Case Study Design",
        category: "Content Marketing",
        desc: "Designed a simple password reset email for a vascular health clinic"
      }
       , {
      image: "/images/Portfolio/EmailMarketing/Trigen (1).webp",
        title: "Case Study Design",
        category: "Content Marketing",
        desc: "Built a smooth verification email for a logistics company"
      }
       , {
      image: "/images/Portfolio/EmailMarketing/Dummy booking.webp",
        title: "Case Study Design",
        category: "Content Marketing",
        desc: "Detailed a booking confirmation email for a travel booking platform"
      }
       , {
      image: "/images/Portfolio/EmailMarketing/Ng ves.webp",
        title: "Case Study Design",
        category: "Content Marketing",
        desc: "Wrote a welcome email for new users for a vascular health clinic"
      }
        , {
      image: "/images/Portfolio/EmailMarketing/Flashring m.webp",
        title: "Case Study Design",
        category: "Content Marketing",
        desc: "Designed a clean account verification email for an AI hiring platform             "
      }
    ]
  },

  {
    title: "Impact",
    icon: (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="9"/>
    <circle cx="12" cy="12" r="5"/>
    <circle cx="12" cy="12" r="1"/>
  </svg>
),
    portfolio: [
       {
      image: "/images/Portfolio/Imapct/Impact 11 (1).webp",
        title: "Case Study Design",
        category: "Content Marketing",
        desc: "Reported YouTube channel growth for a vascular health clinic"
      },
      {
      image: "/images/Portfolio/Imapct/Impact (10 ).webp",
        title: "Case Study Design",
        category: "Content Marketing",
        desc: "Tracked search impression growth for an SEO service provider "
      },  
       {
      image: "/images/Portfolio/Imapct/Impact 5.webp",
        title: "Case Study Design",
        category: "Content Marketing",
        desc: "Tracked AI and organic search traffic "
      },
{
      image: "/images/Portfolio/Imapct/Impact1.webp",
        title: "Case Study Design",
        category: "Content Marketing",
        desc: "Tracked full domain SEO growth for an SEO service provider"
      },
       {
      image: "/images/Portfolio/Imapct/Follower Activity (1).webp",
        title: "Case Study Design",
        category: "Content Marketing",
        desc: "Mapped follower activity patterns by time of day"
      },
      {
      image: "/images/Portfolio/Imapct/Follower Activity (2).webp",
        title: "Case Study Design",
        category: "Content Marketing",
        desc: "Reported LinkedIn page analytics for a workforce solution brand"
      },
           {
      image: "/images/Portfolio/Imapct/Impact1 (1).webp",
        title: "Case Study Design",
        category: "Content Marketing",
        desc: "Tracked Reel performance and reach for a BBQ sauce brand "
      },      
         {
      image: "/images/Portfolio/Imapct/Impact1 (2).webp",
        title: "Case Study Design",
        category: "Content Marketing",
        desc: "Reported YouTube channel growth for an SEO service provider"
      },  
         {
      image: "/images/Portfolio/Imapct/Impact1 (3).webp",
        title: "Case Study Design",
        category: "Content Marketing",
        desc: "Tracked Instagram reach and engagement for a BBQ sauce brand"
      },  
         {
      image: "/images/Portfolio/Imapct/Impact1 (5).webp",
        title: "Case Study Design",
        category: "Content Marketing",
        desc: "Measured video engagement metrics for a busbar manufacturer"
      },    
        {
      image: "/images/Portfolio/Imapct/Impact1 (6).webp",
        title: "Case Study Design",
        category: "Content Marketing",
        desc: "Highlighted industry-wide email marketing revenue growth trends"
      },   
        {
      image: "/images/Portfolio/Imapct/Impact1 (7).webp",
        title: "Case Study Design",
        category: "Content Marketing",
        desc: "Tracked follower growth and daily fluctuations over a month"
      },     
        {
      image: "/images/Portfolio/Imapct/Impact1 (4).webp",
        title: "Case Study Design",
        category: "Content Marketing",
        desc: "Tracked Instagram reach and engagement for a busbar manufacturer"
      },       
        {
      image: "/images/Portfolio/Imapct/Impact1 (8).webp",
        title: "Case Study Design",
        category: "Content Marketing",
        desc: "Reported account views and content performance for a staffing agency"
      },    
        {
      image: "/images/Portfolio/Imapct/Impact1 (9).webp",
        title: "Case Study Design",
        category: "Content Marketing",
        desc: "Measured video engagement metrics for a BBQ sauce brand"
      },   
         
          
         {
      image: "/images/Portfolio/Imapct/Impact 11 (2).webp",
        title: "Case Study Design",
        category: "Content Marketing",
        desc: "Reported YouTube channel growth for a workforce solution brand "
      },  
         {
      image: "/images/Portfolio/Imapct/Impact 11 (3).webp",
        title: "Case Study Design",
        category: "Content Marketing",
        desc: "Reported search console performance for an SEO service provider"
      },  
         
     
         {
      image: "/images/Portfolio/Imapct/Impact 11 (5).webp",
        title: "Case Study Design",
        category: "Content Marketing",
        desc: "Backlink profile growth for a busbar manufacturer "
      },  
         {
      image: "/images/Portfolio/Imapct/Impact 2.webp",
        title: "Case Study Design",
        category: "Content Marketing",
        desc: "Tracked domain authority growth for a busbar manufacturer"
      },
         {
      image: "/images/Portfolio/Imapct/impact.webp",
        title: "Case Study Design",
        category: "Content Marketing",
        desc: "AI search visibility for a busbar manufacturer"
      },
         {
      image: "/images/Portfolio/Imapct/Impact 3.webp",
        title: "Case Study Design",
        category: "Content Marketing",
        desc: "Reported organic keyword growth for a busbar manufacturer"
      },
         {
      image: "/images/Portfolio/Imapct/Impact 3 (1).webp",
        title: "Case Study Design",
        category: "Content Marketing",
        desc: "Mapped keyword ranking positions for a busbar manufacturer"
      },
         {
      image: "/images/Portfolio/Imapct/Impact 21.webp",
        title: "Case Study Design",
        category: "Content Marketing",
        desc: "Tracked AI search traffic across regions"
      },
          {
      image: "/images/Portfolio/Imapct/Lead Generation Analytics (2).webp",
        title: "Case Study Design",
        category: "Content Marketing",
        desc: "Mapped lead generation traffic by channel "
      },
          
         {
      image: "/images/Portfolio/Imapct/SEO Performance Overview (1).webp",
        title: "Case Study Design",
        category: "Content Marketing",
        desc: "Reported organic search performance across top pages"
      },
         {
      image: "/images/Portfolio/Imapct/Organic Keyword Insights (1).webp",
        title: "Case Study Design",
        category: "Content Marketing",
        desc: "Tracked top organic keywords for a workforce solutions brand"
      },
         {
      image: "/images/Portfolio/Imapct/Organic Traffic Growth1 (2) (1).webp",
        title: "Case Study Design",
        category: "Content Marketing",
        desc: "Reported backlink profile growth for a workforce solutions brand"
      },
         {
      image: "/images/Portfolio/Imapct/impact6.webp",
        title: "Case Study Design",
        category: "Content Marketing",
        desc: "Tracked multi-channel traffic trends"
      },
    ]
  }
    
];const stats = [
  {
       icon: "/images/icon-dm.webp",
    end: 150,
    suffix: "+",
    title: "Projects Delivered Across DM",
  },

  {
           icon: "/images/icon2dm.webp",
    end: 50,
    suffix: "+",
    title: "Industries Served",
  },

  {
    icon: "/images/icon3dm.webp",
    end: "Visibility Across AI Tools",
    suffix: "X",
    title: "Gemini, ChatGPT, Claude, etc",
  },

  {
       icon: "/images/trustpilot.webp",
    end: "Trustpilot Rating",
    suffix: "",
    title: "4.9/5",
  },
];
const capabilities = [
  {
    id: "01",
    title: "GEO",
    image: "/images/GEO (5).webp",
	des:"Get named in ChatGPT, Gemini and AI Overviews not just Google.",
    color: "#ffc2c2",
  },
  {
    id: "02",
    title: "SEO",
    image: "/images/SEO ser.webp",
	des:"Rank where your customers are still searching the old-fashioned way.",
  color: "#dce3fe",
  },
  {
    id: "03",
    title: "Social Media Marketing",
    image: "/images/Sm.webp",
des:"Build a following that becomes one of your best sales channels.",
  color: "#c2ddff",
  },
  {
    id: "04",
    title: "Content Marketing",
    image: "/images/CC (2).webp",
  des:"Blogs, guides, and pages written to convert not just fill space.",
  color: "#dde4ff",
  },
  {
    id: "05",
    title: "PPC Advertising",
    image: "/images/PPCad.webp",
    color: "#FFECC8",
	des:"Paid campaigns across Google and Meta built to pay for themselves.",
  },
   {
    id: "06",
    title: "Conversion Rate Optimization",
    image: "/images/CRo (2).webp",
    color: "#CFF8EF",
	des:"Turn more of the traffic you already have into actual leads.",
  },
   {
    id: "07",
    title: "Lead Generation",
    image: "/images/lead.webp",
    color: "#fee6c1",
	des:"Full-funnel campaigns built to fill your pipeline, not just your inbox.",
  },
   {
    id: "08",
    title: "Email Marketing",
    image: "/images/Email (3).webp",
    color: "#c2ddff",
	des:"Nurture sequences that turn cold leads into booked calls.",
  },
   {
    id: "09",
    title: "Video Marketing",
    image: "/images/youtube.webp",
    color: "#b59f80",
	des:"Scroll-stopping video, shot, edited and produced in-house.",
  },
   {
    id: "10",
    title: "Influencer Marketing",
    image: "/images/infk.webp",
    color: "#e9d0f6",
	des:"Partnerships that put your brand in front of ready-to-buy audiences.",
  },
];
const [openIndex, setOpenIndex] = useState(0);
const formRef = useRef(null);
const handleScrollClick = () => {
  formRef.current?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};
const handleAccordion = (index) => {
  setOpenIndex(openIndex === index ? null : index);
};

function Counter({ end, suffix = "" }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      {
        threshold: 0.4,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;

    let current = 0;
    const duration = 2000;
    const step = end / (duration / 16);

    const timer = setInterval(() => {
      current += step;

      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [started, end]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}
const [hoveredIndex, setHoveredIndex] = useState(null);
  const slider = useRef(null);
  const [active, setActive] = useState(0);
  const [preview, setPreview] = useState(null);
  const [previewIndex, setPreviewIndex] = useState(null);
const activeImages = data[active].images;
const activePortfolio = data[active]?.portfolio || [];
    const settings = {
    arrows: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,

  };


    const services = {
  dots: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2500,
  infinite: true,
  speed: 1000, lazyLoad: "ondemand",
  slidesToShow: 4,
  slidesToScroll: 1,

  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
      },
    },
  ],
};

  
  const trackRef1 = useRef(null);

  useEffect(() => {
    const track = trackRef1.current;

    let animation;

    let x = 0;

    const speed = 0.6;

    const animate = () => {
      x -= speed;

      const halfWidth = track.scrollWidth / 2;

      if (Math.abs(x) >= halfWidth) {
        x = 0;
      }

      track.style.transform = `translate3d(${x}px,0,0)`;

      animation = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animation);
  }, []);
  return (
    
    <>
    
      <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Phudu:wght@300..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
.work-marquee{
     padding: 80px 0;
    background: #1c1c1c;
    overflow: hidden;
}
.search-reality-section {

    background: #1c1c1c;
    color: #fff;
    --search-blue: #4d8dff;
    --search-violet: #9b6dff;
    --search-cyan: #69dbff;
}
.search-reality-intro {
    margin-bottom: 41px;
    text-align:center;
}span.icon-name-tab {
    display: flex;
    align-items: center;
    gap: 10px;
}
.search-reality-eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 9px;
    margin: 0 0 16px;
      color: #d8ff36;
    font: 600 11px/1 "Poppins", sans-serif;
    letter-spacing: .18em;
    text-transform: uppercase;
}
.search-reality-eyebrow:before,
.search-reality-eyebrow:after {
    content: "";
    width: 22px;
    height: 1px;
    background: currentColor;
}
.search-reality-intro h2 {
    margin: 0 0 15px;
    color: #fff;
    font: 500 clamp(32px, 4.4vw, 64px)/.98 "Phudu", sans-serif;
    letter-spacing: -.035em;
    text-transform: uppercase;
}
.search-reality-intro h2 strong { color: #d8ff36; font-weight: inherit; }
.search-reality-intro p {
    max-width: 720px;
    margin: auto;
    color: #bcbcbc;
    font: 400 15px/1.7 "Poppins", sans-serif;
}
.search-reality-panel {
    position: relative;
    overflow: hidden;
    max-width: 1050px;
    margin: 0 auto;
    padding: 1px;
    background: linear-gradient(120deg, var(--search-blue), rgba(255,255,255,.17) 36%, var(--search-violet));
    box-shadow: 0 24px 70px rgba(77,141,255,.12), 0 22px 55px rgba(155,109,255,.1);
    clip-path: polygon(0 24px, 24px 0, calc(50% - 70px) 0, calc(50% - 55px) 14px, calc(50% + 55px) 14px, calc(50% + 70px) 0, 100% 0, 100% calc(100% - 24px), calc(100% - 24px) 100%, 0 100%);
}
.search-reality-panel:before {
    content: "SEARCH SHIFT";
    position: absolute;
    z-index: 2;
    top: 2px;
    left: 50%;
    transform: translateX(-50%);
    color: #edf4ff;
    font: 700 9px/12px "Poppins", sans-serif;
    letter-spacing: .14em;
}
.search-reality-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    background: linear-gradient(125deg, #202330, #202027);
    clip-path: inherit;
}
.search-reality-column {
    padding: 40px clamp(24px, 4vw, 56px) 42px;
}
.search-reality-column + .search-reality-column {
    background: linear-gradient(135deg, #29233d, #202027 74%);
    border-left: 1px solid rgba(255,255,255,.13);
}
.search-reality-label {
    display: flex;
    align-items: center;
    gap: 12px;
    margin: 0 0 29px;
    font: 500 22px/1 "Phudu", sans-serif;
    letter-spacing: -.01em;
    text-transform: uppercase;
}
.search-reality-label i {
    display: grid;
    place-items: center;
    width: 30px;
    height: 30px;
    border: 1px solid currentColor;
    border-radius: 50%;
    color: var(--search-blue);
    font: 700 16px/1 Arial, sans-serif;
    font-style: normal;
}
.search-reality-points { margin: 0; padding: 0; list-style: none; }
.search-reality-points li {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    padding: 15px 0;
    color: #dfdfdf;
    border-top: 1px solid rgba(255,255,255,.11);
    font: 400 15px/1.45 "Poppins", sans-serif;
}
.search-reality-points li:before {
    content: "↗";
    color: #d8ff36;
    font-size: 17px;
    line-height: 1.25;
}
.search-reality-column:last-child .search-reality-points li:before { content: "✦"; }
.search-reality-column:last-child .search-reality-label i,
.search-reality-column:last-child .search-reality-points li:before { color: var(--search-violet); }
@media (max-width: 650px) {
    .search-reality-section { padding: 68px 0 30px; }
    .search-reality-intro { margin-bottom: 30px; }
    .search-reality-panel { clip-path: polygon(0 18px, 18px 0, calc(50% - 55px) 0, calc(50% - 42px) 12px, calc(50% + 42px) 12px, calc(50% + 55px) 0, 100% 0, 100% calc(100% - 18px), calc(100% - 18px) 100%, 0 100%); }
    .search-reality-grid { grid-template-columns: 1fr; }
    .search-reality-column { padding: 36px 25px 25px; }
    .search-reality-column + .search-reality-column { padding-top: 28px; border-left: 0; border-top: 1px solid rgba(255,255,255,.13); }
}
    .animated.-arrow {
    position: absolute;
    right: 0;
    top: 0;
       animation: arrowBounce 1.5s infinite;
}
       .App.dm-landing footer {
    display: none;
}

.App.dm-landing .copyright {
    display: none;
}
@keyframes arrowBounce {
  0%, 100% {
    transform: translateY(0);
  }

  25% {
    transform: translateY(6px);
  }

  50% {
    transform: translateY(12px);
  }

  75% {
    transform: translateY(6px);
  }
}
.content-left-grid {
    position: relative;
}
.search-reality-comparison {
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0;
    max-width: 1050px;
    margin: 0 auto;
}
.search-reality-card {
    overflow: hidden;
    min-height: 286px;
    border: 1px solid rgba(255,255,255,.25);
    border-radius: 24px;
    background: linear-gradient(135deg, #151515, #1e1e1e);
    box-shadow: inset 0 1px 0 rgba(255,255,255,.06);
}
    
.search-reality-card:first-child { margin-right: 17px; }
.search-reality-card:last-child { margin-left: 17px; }
.search-reality-card__head {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 13px;
    min-height: 88px;
    padding: 20px;
    border-bottom: 1px solid rgba(255,255,255,.12);
}
.search-reality-card__head h3 {
    margin: 0;
    color: #fff;
    font: 600 25px/1 "Poppins", sans-serif;
    letter-spacing: -.04em;
}
.google-wordmark span:nth-child(1), .google-wordmark span:nth-child(4) { color: #4285f4; }
.google-wordmark span:nth-child(2), .google-wordmark span:nth-child(6) { color: #ea4335; }
.google-wordmark span:nth-child(3) { color: #fbbc05; }
.google-wordmark span:nth-child(5) { color: #34a853; }
.search-reality-brand-icon {
    width: 37px;
    height: 37px;
    object-fit: contain;
}
.search-reality-card__body { padding: 5px 38px 18px; }
.search-reality-card .search-reality-points li {
    gap: 15px;
    padding: 16px 0;
    text-align:left;
    color: #ececec;
    font-size: 15px;
}
.search-reality-card .search-reality-points li:before {
    content: "✓";
    display: grid;
    flex: 0 0 26px;
    place-items: center;
    width: 26px;
    height: 26px;
    border: 2px solid #d8ff36;
    border-radius: 50%;
    color: #d8ff36;
    font: 700 15px/1 Arial, sans-serif;
}
.search-reality-vs {
    position: absolute;
    z-index: 2;
    top: 50%;
    left: 50%;
    display: grid;
    place-items: center;
    width: 66px;
    height: 66px;
    transform: translate(-50%, -50%);
    border: 6px solid #1c1c1c;
    border-radius: 50%;
    background: #d8ff36;
    color: #171717;
    font: 700 22px/1 "Phudu", sans-serif;
}
@media (max-width: 650px) {
    .search-reality-comparison { grid-template-columns: 1fr; gap: 18px; }
    .search-reality-card:first-child, .search-reality-card:last-child { margin: 0; }
    .search-reality-card__body { padding: 5px 24px 15px; }
    .search-reality-vs { position: relative; top: auto; left: auto; justify-self: center; order: 1; transform: none; margin: -9px 0; }
    .search-reality-card:last-child { order: 2; }
}
span.fill-text__display {
    font-family: "Phudu", sans-serif;
}
.marquee{
    overflow:hidden;
    width:100%;
}
.gallery-item {
    border-radius: 22px;
    padding: 35px;
    border: 2px solid #fff !important;
}
.marquee-track{

    display:flex;
    width:max-content;
    will-change:transform;

}
.marquee-card1{

    flex:none;

min-width:200px;

 color:#000;

    margin-right:22px;

    border-radius:22px;

  gap:20px;
display:flex;
font-weight:bold;
    transition:.35s;
    font-family: "Phudu", sans-serif;
}
.marquee-card{

    flex:none;

    width:280px;

    height:380px;

    margin-right:22px;

    border-radius:22px;

    overflow:hidden;

    background:#222;

    transition:.35s;

}

.marquee-card:hover{

transform:translateY(-10px);

}

.marquee-card img,
.marquee-card video{

width:100%;

height:100%;

object-fit:cover;

display:block;

}
      .services{
    display:grid;
    grid-template-columns:380px 1fr;
    gap:40px;
    align-items:center;
    
}
.portfolio-info p {
    color: #fff;
    /* line-height: 1.6; */
    margin-bottom: 0;
}
.left{
    display:flex;
    flex-direction:column;
    gap:18px;
}
.right{
    width:100%;
    min-width:0;
}

.right .slick-slide{
    padding:10px;
}

.portfolio-card{
    margin:0;
}
    .portfolio-info {
    padding: 20px;
    margin: 22px 0 0;
    font-size: 15px;
    line-height: 1.6;
    color: #cfcfcf;
    background: rgba(255, 255, 255, .04);
    border-left: 3px solid #ffc2c2;
    padding: 18px 20px;
    border-radius: 0 12px 12px 0;
}
.tab{
    width:100%;
    height:78px;
    border:none;
    border-radius:18px;
    background:#333;
    color:#fff;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:0 28px;
    cursor:pointer;
    transition:.35s;
    font-size:18px;
    font-weight:600;
}

.tab:hover{
    background:#2b2b2b;
}
button.tab {
    text-transform: uppercase;
    font-size: 15px;
    font-family: inherit;
    font-family: "Lexend Deca", sans-serif;
}

.tab.active {
    background: #ffc2c2;
    color: #000;
}
.arrow{
    width:42px;
    height:42px;
    border-radius:50%;
    background:#2a2a2a;
    display:flex;
    justify-content:center;
    align-items:center;
    transition:.3s;
    font-size:20px;
}

.tab.active .arrow{
    background:#000;
    color:#fff;
}

.right .slick-slide{
    padding:0;
}

.right img{
    width:100%;
  
    border-radius:22px;
}

.slick-track{
    display:flex;
}

.slick-slide>div{
    display:block;
}


        section.FEATURED {
    padding-top: 60px;
    padding-bottom: 60px;
}
    section.work-por .pp-slider li button:after{
    background: #d8ff36 !important;
}
    section.work-por .pp-slider .slick-dots li button 
    { border-color: #d8ff36 !important;
    }
section.work-por {
    padding-top: 0px;
    padding-bottom: 60px;
    background: #1c1c1c;
}
section.FEATURED {
    padding-top: 60px;
    padding-bottom: 60px;
    background: #1c1c1c;
}section.FEATURED h2{
    color: #fff;
	}
    .team-card img {
    border-radius: 11px;
}
.team-card {
    border-radius: 22px;
    padding: 15px;
    border: 2px solid #fff;
}
.card:has(.stretched-link) {
    transition: box-shadow var(--transition-duration) var(--transition-easing);
}
.card:has(.stretched-link):hover:before, .card:has(.stretched-link):hover:after {
    opacity: 1 !important;
}
.card:has(.stretched-link):before, .card:after {
    animation: 6s rotate linear infinite;
    background: conic-gradient(from var(--gradient-angle), var(--gradient-glow-color-1), var(--gradient-glow-color-2), var(--gradient-glow-color-3), var(--gradient-glow-color-2), var(--gradient-glow-color-1));
    border-radius: inherit;
    content: "";
    opacity: 0;
    position: absolute;
    top: -2px;
    right: -2px;
    bottom: -2px;
    left: -2px;
    transition: opacity var(--transition-duration) var(--transition-easing);
    transform: translateZ(0);
    will-change: transform;
    z-index: -1;
}
    body {
    margin: 0;
    background: #1c1c1c;
}
    section.hero {
    padding-bottom: 0;
}
    button.search-more-btn {
    background: #d8ff36;
    border: none;
    border-radius: 5px;
    font-family: 'Phudu';
    font-weight: bold;
    margin-top: 10px;
    margin-top:20px;
}
.stats-container {
       display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 00;
    background: #fff;
    padding: 20px;
    border-radius: 13px;
}
.circle1 {
    transform: translate(20px, -20px);
        width: 50%;
}
:host {
    position: relative;
    display: block;
    margin-left: auto;
    margin-right: auto;
    z-index: 1
}
    .feature span {
    padding-top: 2px;
    font-family: 'Poppins';
}
.post-rel {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.stat-item img {
    width: 100px;
    margin: 0 auto;
	
}
.stat-item span {
    color: #000 !important;
    font-family: "Poppins", sans-serif;
    margin-top: 12px;
    display: inline;
    display: inline-block;
    text-transform: uppercase;
}
.stat-item h2 {
    margin: 0;
    font-size: 52px;
    font-weight: 700;
    color: #fff;
    line-height: 1;
}
.stat-item {
    flex: 1;
    text-align: center;
}
    span.stat-end {
    font-size: 24px;
}
.badge {

    --badge-size: 200px;
    background: url(https://virtualassistant24x7.com/wp-content/uploads/2026/07/consult-logo-1.webp) no-repeat center center / contain;
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--badge-size);
    height: var(--badge-size);
    border-radius: 100%;
    animation: identifier 20s linear infinite !important
  
}.hero-trust{
    display:flex;
    align-items:center;
    flex-wrap:wrap;
    gap:0px;
    margin-top:30px;
}

.trust-item{
    display:flex;
    align-items:center;
    gap:10px;
    color:#fff;
    font-size:14px;
    font-weight:500;    font-family: 'Poppins';
}

.trust-icon{
    flex-shrink:0;
}

.trust-item:not(:last-child)::after{
    content:"";
    width:1px;
    height:20px;
    background:rgba(255,255,255,.25);
    margin-left:20px;
}
  @keyframes identifier{
0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
}
100% {
    -webkit-transform: rotate(1turn);
    transform: rotate(1turn);
}
}

@keyframes swiper-preloader-spin {
    0% {
        transform: rotate(0)
    }

    to {
        transform: rotate(360deg)
    }
}



*,*:before,*:after {
    box-sizing: border-box
}



html {
    scroll-behavior: smooth;
    -moz-text-size-adjust: none;
    -webkit-text-size-adjust: none;
    text-size-adjust: none
}
.portfolio-img{
    cursor:pointer;
    transition:.35s;
}
.stats-section{
    display:grid;
    grid-template-columns:repeat(4,1fr);
    border:1px solid rgba(255,255,255,.1);

    overflow:hidden;
    margin-top:70px;
}

.stat-card{
    display:flex;
    align-items:center;
    gap:20px;
    padding:35px;
}

.stat-card:not(:last-child){
    border-right:1px solid rgba(255,255,255,.08);
}

.stat-icon{
    width:70px;
    height:70px;
    border-radius:50%;

    color:#000;
    display:flex;
    align-items:center;
    justify-content:center;
}

.stat-icon img{
    width:60px;
}

.stat-card h2{
    font-size:48px;
    color:#fff;
    margin:0;
}
.case-slider-Dm {
    height: 100%;
   
}



.case-slider-Dm .result-card {
    height: 100%;
}
.stat-card p{
    color:#aaa;
    margin-top:8px;
}

.portfolio-video img{
    width:100%;
    display:block;
    transition:.35s ease;
}

.portfolio-video:hover img{
    transform:scale(1.03);
}
.image-popup{
    position:fixed;
    inset:0;
    background:rgba(0,0,0,.85);
    display:flex;
    justify-content:center;
    align-items:center;
    z-index:99999;
    padding:40px;
}
.left-gif video {
    width: 100%;
    border-radius: 10px;
}
.popup-content{
    position:relative;
    max-width:1000px;
    width:100%;
}

.popup-content img{
    width:100%;
    max-height:85vh;
    object-fit:contain;
    border-radius:18px;
}
.portfolio-video {
    width: 100%;
    float: left;
}
    .portfolio-video  video{
    width: 100%;
    float: left;
}
    
.popup-close{
    position:absolute;
    top:-18px;
    right:-18px;
    width:42px;
    height:42px;
    border:none;
    border-radius:50%;
    background:#fff;
    color:#000;
    font-size:24px;
    cursor:pointer;
}/* ================================
   GUARANTEE STACKING SCROLL
================================ */

@media (min-width: 768px) {

.desktop-Grid {
    display: block;
    margin-top: 70px;
  }

  .guarantee-grid.desktop-Grid .guarantee-card {
    position: sticky;
    top: 90px;

    width: 100%;
    min-height: 520px;

    margin-bottom: 80px;

    /* remove normal grid behavior */
    display: grid;
    
    transition:
      transform .4s ease,
      box-shadow .4s ease;

    /* important for stacking */
    z-index: 1;
  }

  /* Each next card comes above the previous one */
  .guarantee-grid.desktop-Grid .guarantee-card:nth-child(1) {
    z-index: 1;
  }

  .guarantee-grid.desktop-Grid .guarantee-card:nth-child(2) {
    z-index: 2;
  }

  .guarantee-grid.desktop-Grid .guarantee-card:nth-child(3) {
    z-index: 3;
  }

  .guarantee-grid.desktop-Grid .guarantee-card:nth-child(4) {
    z-index: 4;
  }

  .guarantee-grid.desktop-Grid .guarantee-card:nth-child(5) {
    z-index: 5;
  }

  .guarantee-grid.desktop-Grid .guarantee-card:nth-child(6) {
    z-index: 6;
  }

  /* Don't lift the card when mouse is over it */
  .guarantee-grid.desktop-Grid .guarantee-card:hover {
    transform: none;
  }

}
.why-choose-section {
  position: relative;
  padding: 120px 0;
  background: #070707;
  overflow: visible;
}

.guarantee-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 28px;
  margin-top: 70px;
}

.guarantee-card {
  position: relative;
  background: #101010;
  border: 1px solid rgba(255,255,255,.08);
  border-radius: 24px;
  padding: 30px;
    display: grid;
    grid-template-columns: 1 1;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    gap: 60px;
  flex-direction: column;
  transition: .35s ease;
  overflow: hidden;
}
.left-gif img {
    border-radius: 26px;
}
.guarantee-card::before{
  content:"";
  position:absolute;
  inset:0;
  background:linear-gradient(180deg,rgba(255,255,255,.03),transparent);
  opacity:0;
  transition:.35s;
}

.guarantee-card:hover{
  transform:translateY(-10px);
  border-color:#d8ff36;
}

.guarantee-card:hover::before{
  opacity:1;
}

.card-top{
  display:flex;
  align-items:center;
  justify-content:space-between;
  margin-bottom:28px;
}

.guarantee-icon{
  position:relative;
  width:82px;
  height:82px;
  display:flex;
  align-items:center;
  justify-content:center;
}

.icon-bg{
  position:absolute;
  inset:0;
  border-radius:22px;
  background:#171717;
}

.guarantee-card.lime .icon-bg{
  background:rgba(216,255,54,.12);
}

.guarantee-card.pink .icon-bg{
  background:rgba(255,60,120,.12);
}

.icon-svg-card{
  position:relative;
  z-index:2;
  width:42px;
  height:42px;
  color:#d8ff36;
}

.guarantee-card.pink .icon-svg{
  color:#ff4f8b;
}

.icon-svg-card svg{
  width:100%;
  height:100%;
}

.card-number{
    display: block;
    font-size: 19px;
    font-weight: 800;
    margin-bottom: 21px;
    color: #111;
    font-family: "Phudu", sans-serif;
}
.trust-strip{
    margin-top:60px;
    display:flex;
    align-items:center;
    background:#0e0e0e;
    border:1px solid rgba(216,255,54,.25);
    border-radius:20px;
    overflow:hidden;
    box-shadow:0 0 40px rgba(216,255,54,.06);
}

.trust-left{
    flex:1.3;
    display:flex;
    align-items:center;
    gap:20px;
    padding:28px 32px;
}

.trust-shield{
    width:72px;
    height:72px;
    display:flex;
    align-items:center;
    justify-content:center;
    color:#d8ff36;
}

.trust-shield svg{
    width:60px;
    height:60px;
}

.trust-left h4{
    color:#fff;
    font-size:28px;
    font-weight:700;
    margin:0;
    line-height:1.2;
}

.trust-left p{
    margin-top:6px;
    color:#d2d2d2;
    font-size:22px;
}
  .test-Dmpage .ts-tabs button.active {
    background: #d8ff36;
    color: #000;
    font-family: "Phudu", sans-serif;
}
     .test-Dmpage .ts-heading.sectionHeading.text-center {
    display: none;
}
.test-Dmpage .ts-tabs button {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 14px 26px;
    border: 0;
    border-radius: 999px;
    background: #ffd6d6;
    color: #000;
    cursor: pointer;
    font-weight: 600;
    font-size: 21px;
    letter-spacing: 1px;
    font-family: "Phudu", sans-serif;
}
.trust-left span{
    color:#d8ff36;
    font-weight:700;
}

.trust-divider{
    width:1px;
    height:70px;
    background:rgba(255,255,255,.12);
}

.trust-brand{
    flex:1;
    display:flex;
    align-items:center;
    justify-content:center;
    gap:16px;
    padding:25px;
}

.trust-brand img{
    width:55px;
    height:55px;
    object-fit:contain;
}

.trust-brand h5{
    color:#fff;
    font-size:24px;
    margin:0;
    line-height:1.2;
}

.trust-brand span{
    color:#cfcfcf;
    font-size:18px;
}

@media(max-width:991px){

.trust-strip{
    flex-direction:column;
}

.trust-divider{
    width:100%;
    height:1px;
}

.trust-left,
.trust-brand{
    width:100%;
    justify-content:flex-start;
}

}.Botom-form-pointer .pointers-form ul li span {
    background: #d8ff36;
    width: 25px;
    height: 25px;
    display: inline-block;
    line-height: 18px;
    color: #000;
    text-align: center;
    border-radius: 100px;
    font-weight: bold;
    margin-right: 10px;
    align-items: c;
    justify-content: c;
}
.card-content h3{
  color:#fff;
  font-size:24px;
  font-weight:700;
  line-height:1.35;
  margin:0;
}

.title-line{
  display:block;
  width:70px;
  height:3px;
  background:#d8ff36;
  border-radius:50px;
  margin:18px 0;
}

.guarantee-card.pink .title-line{
  background:#ff4f8b;
}

.card-content p{
  color:#bdbdbd;
  font-size:16px;
  line-height:1.8;
  margin:0;
}
.quote-box p {
    font-family: "Phudu", sans-serif;
    letter-spacing: 2px;
    font-size: 20px;
    font-weight: bold;
        text-transform: capitalize;
}
.quote-box{
    margin-bottom: 30px;
  padding:18px;
  border-radius:18px;
  background:#171717;
  border:1px solid rgba(255,255,255,.06);
}

.quote-mark{
  width:36px;
  height:36px;
  display:flex;
  align-items:center;
  justify-content:center;
  color:#d8ff36;
  margin-bottom:12px;
}

.guarantee-card.pink .quote-mark{
  color:#ff4f8b;
}

.quote-mark svg{
  width:22px;
  height:22px;
}

.quote-box p{
  margin:0;
  color:#fff;


}
.portfolio-media {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.portfolio-media .hover-image,
.portfolio-media .hover-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.portfolio-media .hover-video {
  position: absolute;
  inset: 0;
  opacity: 0;
  visibility: hidden;
}

.portfolio-media .hover-video.show {
  opacity: 1;
  visibility: visible;
}

.portfolio-media .hover-image.hide {
  opacity: 0;
}
@media (max-width:991px){

.guarantee-grid{
grid-template-columns:repeat(2,1fr);
}

}
.mobile-port.ppslider {
    display: none;
}
@media (max-width:767px){
.desktop-Grid {
    display: none !important;
}.quote-mark {
    margin-bottom: 0;
    font-size: 15px;
}
    .stat-card {
    padding-top: 0px;
    padding-bottom: 0px;
}

    .hero-trust
      {
    gap:10px;}
    .mobile-port.ppslider {
    display: block;
}
.result-content {
    padding: 0 !important;
    margin-top: 19px;
}.result-card {
    padding: 10px !important;
}section.test-Dmpage .ts-tabs button {
    font-size: 14px !important;
}.result-image img {
    border-radius: 5px;
}.review-card p {
    font-size: 11px;
}.Form-dm-gridf {
    grid-template-columns: repeat(1, 1fr) !important;
}.animated.-arrow {
    bottom: -126px !important;
    top: auto !important;
    z-index: 99;
}.container.pd_zero,.service-slider .slide-item {
    padding: 0 !important;
}

.why-choose-section{
padding:80px 0;
}.stats-section {
    margin-top: 0;
}.stats-section {
    grid-template-columns: repeat(1, 1fr);
}
.trust-item
{
        font-size: 14px;
        padding-left:0px !important
        }
.guarantee-grid{
grid-template-columns:1fr;
gap:20px;
margin-top:50px;
}

.guarantee-card{
padding:24px;
}

.guarantee-icon{
width:70px;
height:70px;
}

.icon-svg-card{
width:36px;
height:36px;
}

.card-content h3{
font-size:21px;
}

.card-number{
font-size:34px;
}

}
.popup-info{
    margin-top:20px;
    color:#fff;
}

.popup-info h3{
    margin-bottom:10px;
}

.popup-info p{
    color:#ddd;
}
body {
    line-height: 1.5;
    min-height: 100svh;
    text-rendering: optimizeSpeed;
    -webkit-font-smoothing: antialiased
}

:where(ul,ol):where([role=list]) {
    list-style: none;
    margin: 0;
    padding: 0
}

h1,h2,h3,h4,button,input,label {
    line-height: 1.15
}

h1,h2,h3,h4 {
    text-wrap: balance
}

img,picture,svg {
    display: block;
    max-width: 100%
}

img[width] {
    height: auto
}

button,input,select,textarea {
    font-family: inherit
}

textarea:not([rows]) {
    min-height: 10em
}

@media (prefers-reduced-motion: reduce) {
    *,*:before,*:after {
        animation-duration: .01ms!important;
        animation-iteration-count: 1!important;
        transition-duration: .01ms!important;
        scroll-behavior: auto!important
    }
}
.load-more-wrap {
  text-align: center;
  margin-top: 40px;
}

.load-more-btn {
  background: #d8ff36;
  color: #000;
  border: none;
  padding: 14px 34px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;    text-transform: uppercase;
    font-family: "Phudu", sans-serif;
  transition: .3s ease;
}

.load-more-btn:hover {
  background: #ffd7df;
  transform: translateY(-2px);
}
a:not([class]) {
    text-underline-offset: .1em
}

a,button,input,textarea {
    --outline-color: currentColor;
    --outline-offset: 0px;
    --outline-size: max(2px, .08em);
    --outline-style: solid
}
section.hero a.btn.btn--outlined {
    background: #d8ff36;
    color: #000;
    font-size: 18px;
    font-family: 'Poppins';
}
a:focus,a:focus-visible,button:focus,button:focus-visible,input:focus,input:focus-visible,textarea:focus,textarea:focus-visible {
    outline: var(--outline-size) var(--outline-style) var(--outline-color);
    outline-offset: var(--outline-offset)
}

a:focus:not(:focus-visible),button:focus:not(:focus-visible),input:focus:not(:focus-visible),textarea:focus:not(:focus-visible) {
    outline: none
}

:target {
    scroll-margin-block-start: 2rem
}

:focus {
    scroll-margin-block-end: 8vh
}

hr {
    box-sizing: content-box;
    height: 0;
    overflow: visible
}

pre,code,kbd,samp {
    font-family: monospace,monospace;
    font-size: 1em
}

abbr[title] {
    border-bottom: none;
    text-decoration: underline;
    text-decoration: underline dotted
}

b,strong {
    font-weight: bolder
}

.results-grid{
    display:grid;
    grid-template-columns:repeat(3,1fr);
    gap:30px;
    margin-top:70px;
}

.result-card{
    background:#111;
    border:1px solid rgba(255,255,255,.08);
    border-radius:22px;
    overflow:hidden;
    transition:.35s;
    border-radius: 22px;
    padding: 25px;
    border: 3px solid #fff;
}
.popup-content img,
.popup-content video {
  width: 100%;
  max-height: 80vh;
  object-fit: contain;
  border-radius: 16px;
  display: block;
}

.popup-nav {
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  z-index: 100000;
  width: 38px;
  height: 38px;
  border: none;
  border-radius: 50%;
  background: #d8ff36;
  color: #111;
  font-size: 38px;
  line-height: 1;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.popup-prev {
  left: 25px;
}

.popup-next {
  right: 25px;
}

.popup-info {
  margin-top: 15px;
  color: #fff;
}

.popup-info h3 {
  margin: 0 0 5px;
}

.popup-info p {
  margin: 0;
  color: #ccc;
}
.result-card:hover{
    transform:translateY(-10px);
    border-color:#d8ff36;
    box-shadow:0 25px 60px rgba(216,255,54,.08);
}

.result-image{
    position:relative;

    overflow:hidden;
}

.result-image img{
    width:100%;
    height:100%;
    object-fit:cover;
    transition:.5s;
    border-radius:25px;
}




.result-category{
    position:absolute;
    top:18px;
    left:18px;
    z-index:3;
    padding:8px 14px;
    border-radius:50px;
    background:#d8ff36;
    color:#111;
    font-size:12px;
    font-weight:700;
    letter-spacing:.08em;
}

.Nmae-co {
    display: flex;
    align-items: center;
    gap: 14px;
    justify-content: space-between;
    align-items: center;
}

.result-country {
    margin-bottom: 12px;
}

.result-country img{
    width:28px;
    height:20px;
    border-radius:3px;
    object-fit:cover;
}

.result-country span{
    color:#fff;
    font-size:14px;
    font-weight:600;
}

.result-content{
    padding:24px;
}

.result-stats{
    display:grid;
    grid-template-columns:repeat(2,1fr);
    gap:14px;
    margin-bottom:24px;
}

.result-stat{
    background:#181818;
    border:1px solid rgba(255,255,255,.05);
    border-radius:14px;
    padding:16px;
}

.result-stat h3{
    margin:0;
    color:#d8ff36;
    font-size:30px;
    font-weight:800;
    line-height:1;
}

.result-stat span{
    display:block;
    margin-top:8px;
    color:#bdbdbd;    font-family: 'Poppins';
    font-size:13px;
    line-height:1.4;
}

.result-content h4{
    color:#fff;
    font-size:24px;
    font-weight:700;
    margin-bottom:12px;
}

.result-content p{
  font-size:15px;
}
section.test-Dmpage section.ts-wrap .container {
    padding: 0;
}
.result-link{
    display:inline-flex;
    align-items:center;
    gap:10px;    font-family: "Phudu", sans-serif;
    color:#d8ff36;
    text-decoration:none;
    font-weight:700;
    transition:.3s;
}

.result-link svg{
    width:18px;
    height:18px;
}

.result-card:hover .result-link{
    gap:16px;
}

@media(max-width:991px){

.results-grid{
    grid-template-columns:repeat(2,1fr);
}

}

@media(max-width:767px){

.results-grid{
    grid-template-columns:1fr;
    gap:22px;
}

.result-image{
    height:220px;
}

.result-content{
    padding:20px;
}

.result-content h4{
    font-size:21px;
}

.result-stat h3{
    font-size:24px;
}

}section.process-section-content {
    padding-top: 0;
}
.portfolio-card{
    overflow:hidden;
  

    margin:10px;
}

.portfolio-card img{
    width:100%;


}
.portfolio-video{
    position:relative;
    cursor:pointer;
    overflow:hidden;
    border-radius:20px;
}

.portfolio-video img{
    width:100%;
    display:block;
}

.play-btn{
       position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 58px;
    height: 58px;
    border-radius: 50%;
    background: rgb(0 0 0 / 39%);
    color: #fff;
    font-size: 34px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
}
.portfolio-info{
padding: 20px;
    float: left;
    width: 100%;
}
    .Pricing-section-landing .pricing-heading.sectionHeading {
    display: none;
}
    .Pricing-section-landing {}

.Pricing-section-landing .pricing-heading.sectionHeading {
    display: none;
}
section.search-reality-section {
    text-align: center;
}
.Pricing-section-landing section.pricing-section {
    background: none;
    padding-top: 0;
    padding-bottom: 0;
}.Pricing-section-landing {
    color: #000;
    font-family: 'Poppins';
}
.Pricing-section-landing button.pricing-tab {
    font-family: "Phudu", sans-serif;
    font-size: 22px;
}
    .Pricing-section-landing .plan-top h3, .Pricing-section-landing .service-package-popular-badge
    {
    color:#000;}
    .Pricing-section-landing  .service-package-card.service-package-featured {
    background: #d8ff36;
    color: #000;
}
   .Pricing-section-landing  .pricing-tab.active svg
    {
    color:#000 !important;}
    .Pricing-section-landing button.pricing-tab.active {
  
    background: #d8ff36;
    color: #000;
}
.Pricing-section-landing .pricing-bg-circle.circle-one {
    display: none;
}

.Pricing-section-landing .pricing-bg-circle.circle-two {
    display: none;
}
.portfolio-video video {
    width: 100%;
    float: left;
    border-radius: 20px;
}
.portfolio-info span{
    color:#ffc107;
    font-size:13px;
    text-transform:uppercase;
    letter-spacing:1px;
}

.portfolio-info h3{
    margin:10px 0;
    color:#fff;
    font-size:22px;
}

.portfolio-info p{
    color:#bbb;
    line-height:1.6;
}

img {
    border-style: none
}

button,input,optgroup,select,textarea {
    font: inherit;
    font-size: 100%;
    margin: 0
}

button,input {
    overflow: visible
}

button,select {
    text-transform: none
}

button,[type=button],[type=reset],[type=submit] {
    -moz-appearance: button;
    appearance: button;
    -webkit-appearance: button
}



table th,table td {
    padding: .25rem .5rem
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 24px;
      column-gap: 0 !important;
}

@media (max-width: 991px) {
  .services-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 576px) {
  .services-grid {
    grid-template-columns: 1fr;
  }
}
:root {
    --font-primary: "M3", sans-serif;
    --color-white: #F5F5F2;
    --color-black: #1C1C1C;
    --color-blue: #241FFF;
    --color-grey: #71717B;
    --color-blue-light: #55C5FF;
    --color-coral: #FF7F5F;
    --color-green: #59F38A;
    --color-mink: #D2B2AC;
    --color-pink: #FFA2BF;
    --color-yellow: #FFE100;
    --font-size-sm: clamp(.8rem, .34vi + .68rem, .98rem);
    --font-size-base: clamp(1rem, .58vi + .79rem, 1.31rem);
    --font-size-md: clamp(1.25rem, .93vi + .92rem, 1.75rem);
    --font-size-lg: clamp(1.56rem, 1.43vi + 1.05rem, 2.33rem);
    --font-size-xl: clamp(1.95rem, 2.14vi + 1.18rem, 3.11rem);
    --font-size-xxl: clamp(1.44rem, 1.15vi + 1.31rem, 2.14rem);
    --font-size-xxxl: clamp(3.05rem, 4.58vi + 1.4rem, 5.52rem);
    --font-weight-light: 100;
    --font-weight-extralight: 200;
    --font-weight-book: 300;
    --font-weight-normal: 400;
    --font-weight-medium: 500;
    --font-weight-semibold: 600;
    --font-weight-bold: 700;
    --font-weight-extrabold: 800;
    --line-height-heading: 1.125;
    --line-height-body: 1.625;
    --line-height-body-small: 1.375;
    --list-marker-color: var(--color-green);
    --text-color-primary: var(--color-white);
    --text-color-link: var(--color-white);
    --button-height: 3rem;
    --button-solid-bg: var(--color-white);
    --button-solid-text-color: var(--color-black);
    --button-solid-bg-hover: var(--color-blue);
    --button-solid-text-color-hover: var(--color-white);
    --button-outlined-border-color: var(--color-white);
    --button-outlined-text-color: var(--color-white);
    --button-outlined-bg-hover: var(--color-white);
    --button-outlined-text-color-hover: var(--color-black);
    --site-gutter: clamp(1.5rem, .451rem + 2.91vw, 3rem);
    --spacer: clamp(1rem, .301rem + 1.94vw, 2rem);
    --spacer-sm: calc(var(--spacer) / 2);
    --spacer-md: calc(var(--spacer) * 1.5);
    --spacer-lg: calc(var(--spacer) * 2);
    --section-padding-block: clamp(4rem, .308rem + 10.26vw, 8rem);
    --section-padding-block-sm: calc(var(--section-padding-block) / 2);
    --section-padding-block-lg: calc(var(--section-padding-block) * 1.5);
    --min-card-size: 30ch;
    --border-radius: 20px;
    --border-radius-lg: 40px;
    --border-radius-md: 12px;
    --border-radius-sm: 5px;
    --transition-duration: .3s;
    --transition-duration-fast: .15s;
    --transition-easing: ease-in-out;
    --gradient-glow-color-1: var(--color-green);
    --gradient-glow-color-2: var(--color-blue);
    --gradient-glow-color-3: var(--color-blue-light)
}

.container {
    margin-inline:auto;max-width: calc(2400px + var(--site-gutter) * 2);
    padding-inline:var(--site-gutter);width: 100%
}

.container--full {
    width: 100%
}

.container--lg {
    max-width: calc(1248px + var(--site-gutter) * 2)
}

.container--md {
    max-width: calc(60ch + var(--site-gutter) * 2)
}

.container--sm {
    max-width: calc(40ch + var(--site-gutter) * 2)
}

.text-center {
    text-align: center
}

h1,.h1,h2,.h2,h3,.h3,h4,.h4,h5,.h5,h6,.h6 {
    color: var(--text-color-primary);
    font-weight: var(--font-weight-bold);
    -webkit-hyphens: auto;
    hyphens: auto;
    letter-spacing: -.025em;
    line-height: var(--line-height-heading);
    margin-bottom: max(.75em,1.5rem);
    min-width: 0;
    overflow-wrap: break-word;
    text-wrap: balance
}

h1 strong,.h1 strong,h2 strong,.h2 strong,h3 strong,.h3 strong,h4 strong,.h4 strong,h5 strong,.h5 strong,h6 strong,.h6 strong {
    color:#d8ff36;
    font-weight: var(--font-weight-bold)
}
h1,.h1 {
    font-size: var(--font-size-xxxl)
}

h2,.h2 {
    font-size: var(--font-size-xxl)
}

h3,.h3 {
    font-size: var(--font-size-xl)
}

h4,.h4 {
    font-size: var(--font-size-lg)
}

h5,.h5 {
    font-size: var(--font-size-md)
}

h6,.h6 {
    font-size: var(--font-size-base)
}






html {
    accent-color: var(--color-green);
    color-scheme: light
}

body {

    color: var(--text-color-primary);
    font-family: var(--font-primary);
    font-size: var(--font-size-base);
    font-weight: var(--font-weight-book);
    line-height: var(--line-height-body, 1.5);
    position: relative
}

body.preview.live {
    overscroll-behavior-y: contain
}

@media screen and (max-width: 767px) {
    .cards-grid--two.cards-grid--offices {
        grid-template-columns:1fr
    }
        .services{
grid-template-columns:1fr;
display:block;
}
section.work-por ul.slick-dots {
    display: block !important;
}
   section.work-por  .slick-dots li {
    /* margin: 1px; */
    width: 10px;
    height: 10px;
}
    .portfolio-info p {
    color: #fff;
    line-height: 1.6;
    font-size: 12px;
}
     
    .portfolio-info
    {
    padding:12px;}
}






.btn {
    align-items: center;
    align-self: start;
    background-color: var(--button-bg, transparent);
    border-radius: calc(var(--button-height) / 2);
    box-shadow: inset 0 0 0 2px var(--button-outlined-border-color);
    color: var(--button-text-color);
    display: inline-flex;
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-medium);
    gap: 1.25em;
    justify-content: center;
    letter-spacing: .025em;
    line-height: 1;
    min-block-size: var(--button-height);
    min-inline-size: 12ch;
    padding: .5rem 1.5rem;
    text-align: left;
    text-decoration: none;
    text-transform: uppercase;
    transition-property: var(--button-transition);
    transition-duration: var(--transition-duration);
    transition-timing-function: var(--transition-easing);
    will-change: var(--button-transition)
}
.team-card{
    position:relative;
    overflow:hidden;
    border-radius:22px;
    cursor:pointer;
}

.team-card img{
    width:100%;
    display:block;
    height:420px;
    object-fit:cover;
    transition:.5s;
}

/* Blur Image */

.team-card:hover img{
    transform:scale(1.08);
    filter:blur(4px);
}

/* White Card */
.process-contentd {
    color: #000;
    font-size: 14px;
}
.team-info{
    position:absolute;
    left:15px;
    right:15px;
    bottom:-120px;
    background:#fff;
    padding:18px 20px;
    transition: all 0.3s;
    border-radius:18px;
    transition:.45s ease;
    box-shadow:0 15px 40px rgba(0,0,0,.15);
}

.team-card:hover .team-info{
    bottom:15px;
}
.team-card{
    position:relative;
    overflow:hidden;
    border-radius:22px;
    cursor:pointer;
}

.team-card img{
    width:100%;
    height:420px;
    object-fit:cover;
    display:block;

    transition:
    transform .8s cubic-bezier(.22,1,.36,1),
    filter .8s;
}

/* Overlay */

.overlay{
    position:absolute;
    inset:0;
    background:linear-gradient(
        to top,
        rgba(0,0,0,.55),
        rgba(0,0,0,.05)
    );

    opacity:0;
    transition:.5s;
}
.search-reality-intro p b {
    color: #d8ff36;
}
/* Info Card */

.team-info{

    position:absolute;
    left:18px;
    right:18px;
    bottom:18px;

    background:#fff;

    padding:20px;

    border-radius:18px;

    transform:
    translateY(120px)
    scale(.9);

    opacity:0;

    transition:
    transform .7s cubic-bezier(.22,1,.36,1),
    opacity .5s;

    box-shadow:
    0 25px 60px rgba(0,0,0,.18);

}

.team-info h4{

margin: 0;
    font-size: 18px;
    font-weight: 800;
    color: #111;
    text-transform: uppercase;
    font-family: "Phudu", sans-serif;
    letter-spacing: 2px
}

.team-info p {
    font-family: 'Poppins';
    margin-top: 8px;
    color: #777;
    font-size: 14px;
    margin-bottom: 0px !important;
}

/* Hover */

.team-card:hover img{

    transform:scale(1.12);

    filter:blur(3px);

}

.team-card:hover .overlay{

    opacity:1;

}
    .App.dm-landing .pricing-content-wrapper
    {    border: 3px solid #d8ff36;
    }
.App.dm-landing button.colorBtn.justify-content-center {
    background: #ffd6d6;
    color: #000 !important;
    font-family: 'Phudu';
    font-weight: bold;
}
.team-card:hover .team-info{

    opacity:1;

    transform:
    translateY(0)
    scale(1);

}
.team-info h4{
    margin:0;
    font-size:30px;
    font-weight:800;
    color:#111;
    text-transform:uppercase;
}

.team-info span{
    display:block;
    margin-top:8px;
    font-size:18px;
    color:#666;
}
.btn:has(.icon) {
    padding-right: .5rem
}

.btn>.icon {
    align-items: center;
    aspect-ratio: 1;
    background-color: var(--color-black);
    border-radius: 50%;
    color: var(--color-white);
    display: flex;
    flex: 0 0 calc(var(--button-height) - 1rem);
    justify-content: center;
    overflow: clip;
    position: relative;
    transition: background-color,color;
    transition-duration: var(--transition-duration);
    transition-timing-function: var(--transition-easing);
    width: calc(var(--button-height) - 1rem);
    height: calc(var(--button-height) - 1rem)
}

.btn>.icon svg {
    --size: 24px;
    transition-property: color;
    transition-duration: var(--transition-duration);
    transition-timing-function: var(--transition-easing);
    width: var(--size);
    height: var(--size)
}

.btn:hover>.icon {
    background-color: var(--color-white)
}

.btn:hover>.icon svg {
    color: var(--color-black)
}
.conclusion-section {
  width: 100%;
  padding: 80px 20px;
  background: #171717;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
}



/* LABEL */

.conclusion-label-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 18px;
}

.conclusion-line {
  width: 150px;
  height: 1px;
  background: #666;
}

.conclusion-label {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 11px 28px;
  border-radius: 30px;
  background: #c8ff00;
  color: #111;
  font-size: 17px;
  font-weight: 800;
  letter-spacing: .5px;
}

.conclusion-label svg {
  width: 20px;
  height: 20px;
}


/* HEADING */

.conclusion-heading {
  max-width: 1100px;
  margin: 38px auto 0;
  text-align: center;
}

.conclusion-heading h2 {
  margin: 0;
  font-size: clamp(42px, 5vw, 72px);
  line-height: 1.05;
  font-weight: 800;
  letter-spacing: -2px;
}

.conclusion-heading h2 span {
  display: block;
  color: #c8ff00;
}

.conclusion-heading p {
  max-width: 850px;
  margin: 28px auto 0;
  color: #d0d0d0;
  font-size: 18px;
  line-height: 1.65;
  font-family:poppins
}


/* TARGET DIVIDER */

.target-divider {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  margin: 30px 0;
}

.target-divider span {
  height: 1px;
  flex: 1;
  background: #353535;
}

.target-divider svg {
  width: 55px;
  height: 55px;
  color: #c8ff00;
  fill: none;
  stroke: currentColor;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
}


/* BENEFITS */

.benefits-box {
  display: grid;
  grid-template-columns: 1fr auto 1fr auto 1fr auto 1fr;
  align-items: center;
  border: 1px solid #3d3d3d;
  border-radius: 18px;
  padding: 24px 30px;
  background: rgba(255,255,255,.015);
}

.benefit-item {
  display: flex;
  align-items: center;
  gap: 18px;
}

.benefit-icon {
  width: 58px;
  height: 58px;
  flex: 0 0 58px;
  border-radius: 50%;
  background: #1c1c1c;
  display: flex;
  align-items: center;
  justify-content: center;
}

.benefit-icon svg {
  width: 32px;
  height: 32px;
  fill: none;
  stroke: currentColor;
  stroke-width: 2.3;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.blue-icon {
  color: #00cfff;
}

.purple-icon {
  color: #a855f7;
}

.orange-icon {
  color: #ff8b00;
}

.green-icon {
  color: #00e0b0;
}

.benefit-item strong {
  display: block;
  font-size: 17px;
  margin-bottom: 5px;
}

.benefit-item small {
  display: block;
  color: #aaa;
  font-size: 15px;
}

.benefit-divider {
  height: 55px;
  width: 1px;
  background: #444;
  margin: 0 20px;
}


/* CTA */

.cta-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin: 35px auto 0;
}

.growth-btn {
  position: relative;
  min-width: 580px;
  height: 92px;
  padding: 0 22px 0 45px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  color: #111;
  background: #c8ff00;
  font-size: 23px;
  font-weight: 800;
  box-shadow: 0 0 35px rgba(200,255,0,.25);
  transition: .3s ease;
}

.growth-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 0 45px rgba(200,255,0,.4);
}

.growth-arrow {
  width: 55px;
  height: 55px;
  border-radius: 50%;
  background: #111;
  color: #c8ff00;
  display: flex;
  align-items: center;
  justify-content: center;
}

.growth-arrow svg {
  width: 27px;
  height: 27px;
  fill: none;
  stroke: currentColor;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.cta-arrow-left {
  width: 145px;
  color: #c8ff00;
}

.cta-arrow-right {
  width: 60px;
  color: #c8ff00;
  fill: none;
  stroke: currentColor;
  stroke-width: 3;
  stroke-linecap: round;
  stroke-linejoin: round;
}


/* BOTTOM */

.bottom-tagline {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: 38px;
}

.bottom-tagline > span {
  flex: 1;
  height: 1px;
  background: #555;
}

.bottom-tagline > div {
  display: flex;
  align-items: center;
  gap: 18px;
  color: #ddd;
  font-size: 17px;
}

.bottom-tagline svg {
  width: 23px;
  height: 23px;
  fill: none;
  stroke: #c8ff00;
  stroke-width: 2;
}


/* MOBILE */

@media (max-width: 900px) {

  .conclusion-inner {
    padding: 35px 20px;
  }

  .conclusion-heading h2 {
    font-size: 42px;
  }

  .benefits-box {
    grid-template-columns: 1fr 1fr;
    gap: 25px;
  }

  .benefit-divider {
    display: none;
  }

  .growth-btn {
    min-width: 0;
    width: 100%;
    font-size: 17px;
    height: 72px;
    padding-left: 25px;
  }

  .cta-arrow-left,
  .cta-arrow-right {
    display: none;
  }
}


@media (max-width: 600px) {

  .conclusion-section {
    padding: 45px 12px;
  }

  .conclusion-inner {
    padding: 30px 15px;
    border-radius: 18px;
  }

  .conclusion-line {
    width: 50px;
  }

  .conclusion-label {
    font-size: 14px;
    padding: 9px 18px;
  }

  .conclusion-heading {
    margin-top: 30px;
  }

  .conclusion-heading h2 {
    font-size: 34px;
    letter-spacing: -1px;
  }

  .conclusion-heading p {
    font-size: 15px;
  }

  .benefits-box {
    grid-template-columns: 1fr;
    padding: 20px;
  }

  .benefit-item {
    padding: 8px 0;
  }

  .growth-btn {
    font-size: 14px;
    height: 65px;
  }

  .growth-arrow {
    width: 44px;
    height: 44px;
  }

  .bottom-tagline > span {
    display: none;
  }

  .bottom-tagline > div {
    width: 100%;
    justify-content: center;
    text-align: center;
    font-size: 13px;
  }
}
.btn:not(.btn--menu):not(.btn--social)>.icon svg {
    transition-property: transform,color
}

.btn:not(.btn--menu):not(.btn--social)>.icon svg:last-child {
    position: absolute;
    transform: translate(calc(var(--size) * -1),var(--size))
}

.btn:not(.btn--menu):not(.btn--social):hover>.icon svg:first-child {
    transform: translate(var(--size),calc(var(--size) * -1))
}

.btn:not(.btn--menu):not(.btn--social):hover>.icon svg:last-child {
    transform: translate(0)
}

.btn:is(button) {
    border: none;
    cursor: pointer;
    font-family: inherit
}

.btn--solid {
    --button-bg: var(--button-solid-bg);
    --button-text-color: var(--button-solid-text-color);
    --button-transition: background-color, color
}

.btn--solid:hover {
    --button-bg: var(--color-black);
    --button-text-color: var(--button-outlined-text-color)
}

.btn--solid[disabled] {
    opacity: .5
}

.btn--outlined {
    --button-text-color: var(--button-outlined-text-color);
    --button-transition: background-color, box-shadow, color
}

.btn--outlined>.icon {
    box-shadow: inset 0 0 0 2px var(--button-outlined-border-color)
}

.btn--outlined[disabled] {
    cursor: not-allowed;
    opacity: .5
}

.btn:focus-visible {
    --outline-offset: -.35em;
    --outline-style: dashed
}

.btn--social {
    --button-transition: background-color, box-shadow, color
}

.btn--social:hover {
    --button-bg: var(--color-white);
    --button-text-color: var(--color-black)
}

.btn--social:hover>.icon {
    background-color: var(--color-black)
}

.btn--social:hover>.icon svg {
    color: var(--color-white)
}

.btn--social.btn--linkedin>.icon,.btn--social.btn--facebook>.icon,.btn--social.btn--x>.icon {
    border: 2px solid var(--button-outlined-border-color)
}

.btn--social.btn--linkedin>.icon svg,.btn--social.btn--facebook>.icon svg,.btn--social.btn--x>.icon svg {
    --size: 12px
}

section.hero a.btn.btn--outlined span.icon {
    margin-bottom: 0px !important;
}

.section {
    margin-trim: block
}

.section.spacing--block {
    padding-block:var(--section-padding-block)}

.section.spacing--top {
    padding-top: var(--section-padding-block)
}

.section.spacing--btm {
    padding-bottom: var(--section-padding-block)
}

.section .title-bar {
    display: flex;
    flex-wrap: wrap;
    gap: var(--spacer);
    justify-content: space-between;
    margin-bottom: var(--spacer-md)
}

.section .title-bar__text h1,.section .title-bar__text .h1,.section .title-bar__text h2,.section .title-bar__text .h2,.section .title-bar__text h3,.section .title-bar__text .h3,.section .title-bar__text h4,.section .title-bar__text .h4,.section .title-bar__text h5,.section .title-bar__text .h5,.section .title-bar__text h6,.section .title-bar__text .h6 {
    margin-bottom: 0
}
.cards-grid {
    display: grid;
    gap: var(--spacer-md)
}.cards-grid--two {
    grid-template-columns: repeat(2,1fr)
}
.mobile-port.pp-slider {
    display: none;
}
@media screen and (min-width: 576px) {
    .cards-grid--three {
        grid-template-columns:repeat(2,1fr)
    }
}

@media screen and (min-width: 576px) and (max-width: 991px) {
    .cards-grid--three>.block:nth-child(3):last-child {
        display:none
    }
}

@media screen and (min-width: 992px) {
    .cards-grid--three {
        grid-template-columns:repeat(3,1fr)
    }
}

@media screen and (min-width: 576px) {
    .cards-grid--four {
        grid-template-columns:repeat(2,1fr)
    }
}

@media screen and (min-width: 992px) {
    .cards-grid--four {
        grid-template-columns:repeat(3,1fr)
    }
}

@media screen and (min-width: 992px) and (max-width: 1439px) {
    .cards-grid--four>.block:nth-child(4):last-child {
        display:none
    }
}

@media screen and (min-width: 1440px) {
    .cards-grid--four {
        grid-template-columns:repeat(4,1fr)
    }
}

.cards-grid>.block {
    height: 100%
}

.cards-flex {
    display: flex;
    flex-wrap: wrap;
    gap: var(--spacer-md)
}

.cards-flex>.card,.cards-flex>.block {
    container: card-item/inline-size;
    flex: 1 1 var(--min-card-size)
}

.card {
    background-color: var(--color-black);
    border-radius: var(--border-radius);
    box-shadow: 0 0 0 2px var(--color-white);
    display: flex;
    flex-direction: column;
    height: 100%;
    position: relative
}

.card:has(.stretched-link) {
    transition: box-shadow var(--transition-duration) var(--transition-easing)
}

.card:has(.stretched-link):before,.card:has(.stretched-link):after {
    animation: 6s rotate linear infinite;
    background: conic-gradient(from var(--gradient-angle),var(--gradient-glow-color-1),var(--gradient-glow-color-2),var(--gradient-glow-color-3),var(--gradient-glow-color-2),var(--gradient-glow-color-1));
    border-radius: inherit;
    content: "";
    opacity: 0;
    position: absolute;
    top: -2px;
    right: -2px;
    bottom: -2px;
    left: -2px;
    transition: opacity var(--transition-duration) var(--transition-easing);
    transform: translateZ(0);
    will-change: transform;
    z-index: -1
}

@supports (hanging-punctuation: first) and (font: -apple-system-body) and (-webkit-appearance: none) {
    .card:has(.stretched-link):before,.card:has(.stretched-link):after {
        animation:none
    }
}

.card:has(.stretched-link):after {
    filter: blur(8px)
}

@keyframes rotate {
    0% {
        --gradient-angle: 0deg
    }

    to {
        --gradient-angle: 360deg
    }
}
.search-reality-intro.left-sided {
    text-align: left;
}
    .search-reality-intro.left-sided p {
    text-align: left;
    margin: 0;
}
.Form-dm-gridf {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 70px;
    align-items: center;
}
.card:has(.stretched-link):hover:before,.card:has(.stretched-link):hover:after {
    opacity: 1
}

.card__img img {

    width: 100%;
    height: auto
}

.card__body__title {
    font-size: var(--font-size-md);
    margin-bottom: var(--spacer)
}

.card__body__footer {
    border-top: 2px solid var(--color-white);
    padding-top: var(--spacer)
}

.card__body__footer .stretched-link:after {
    content: "";
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    position: absolute;
    z-index: 1
}
.mobile-slider {
  display: none;
}

@media (max-width: 767px) {

  .mobile-slider {
    display: block;
    margin: 20px 0 70px;
  }
    .mobile-port.pp-slider {
    display: block !important;
}
section.work-por .pp-slider .slick-dots li button
      {
width:0.8pc;
height:0.8pc;
}
  .right {
    display: none;
  }

}
.card--icon {
    padding: var(--spacer-md)
}

.card--icon>svg {
    --size: clamp(3.75rem, 1.442rem + 6.41vw, 6.25rem);
    color: var(--accent);
    margin-bottom: var(--spacer);
    width: var(--size);
    height: var(--size)
}

.card--icon p:last-of-type {
    margin-bottom: 0
}

.card--stat {
    padding: var(--spacer-md) var(--spacer) var(--spacer)
}

.card--stat>svg {
    --size: clamp(3rem, 1.154rem + 5.13vw, 5rem);
    margin-bottom: var(--spacer-sm)
}
section.test-Dmpage section.ts-wrap {
    padding-top: 20px;    padding-bottom: 0;
}
.card--stat .stat-no {
    font-size: var(--font-size-xl);
    font-weight: var(--font-weight-extrabold);
    line-height: var(--line-height-heading);
    visibility: hidden;
    will-change: filter
}

.card--stat .stat-text {
    margin-top: var(--spacer-sm)
}

.card--work {
    --img-aspect-ratio: 3/4;
    gap: var(--spacer);
    padding: var(--spacer)
}

.card--work .card__img img {
    border-radius: var(--border-radius-md);
    max-height: 500px
}

.card--work .card__body__text {
    display: none
}

.card--work .card__body__footer {
    display: flex;
    gap: var(--spacer-sm);
    justify-content: space-between;
    line-height: var(--line-height-body-small)
}

.card--work .card__body__footer p {
    margin-bottom: 0
}

.card--work .card__body__footer a {
    color: var(--color-white);
    flex: 0 0 80px;
    text-decoration: none;
    width: 80px
}

.card--work .card__body__footer a svg {
    transform: translate(16px);
    transition: transform var(--transition-duration) var(--transition-easing);
    width: 80px
}

.card--work .card__body__footer a svg g g {
    stroke-width: 1px
}

@container card-item (inline-size > 80ch) {
    .card--work {
        flex-direction: row
    }

    .card--work .card__img {
        flex-grow: 1
    }

    .card--work .card__body {
        display: flex;
        flex: 0 0 25ch;
        flex-direction: column;
        height: 100%
    }

    .card--work .card__body__footer {
        border-top: none;
        flex-direction: column;
        flex-grow: 1;
        justify-content: space-between;
        padding-top: 0
    }

    .card--work .card__body__footer p {
        border-bottom: 2px solid var(--color-white);
        flex-grow: 1
    }

    .card--work .card__body__footer a {
        align-self: end
    }
}

.card--work:hover .card__body__footer a svg {
    transform: translate(20px,-10px)
}

.card--news {
    --img-aspect-ratio: 13/9
}
.Botom-form-pointer ul li {
    display: flex;
    align-items: center;
}
.card--news .card__body {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    padding: var(--spacer)
}

.card--news .card__body__title {
    flex-grow: 1
}

.card--news .card__body__text {
    display: none
}

.card--news .card__body__footer {
    display: flex;
    gap: var(--spacer-sm);
    justify-content: space-between
}

.card--news .card__body__footer .author {
    align-items: center;
    display: flex;
    flex-grow: 1;
    gap: 1rem
}

.card--news .card__body__footer .author img {
    border-radius: 24px
}

.card--news .card__body__footer a {
    color: var(--color-white);
    flex: 0 0 48px;
    text-decoration: none;
    width: 48px
}

.card--news .card__body__footer a svg {
    transform: translate(12px);
    transition: transform var(--transition-duration) var(--transition-easing);
    width: 48px
}

.card--news .card__body__footer a svg g g {
    stroke-width: 1px
}

.card--news .card__img {
    border-bottom-left-radius: inherit;
    border-bottom-right-radius: inherit;
    overflow: hidden
}

.card--news:hover .card__body__footer a svg {
    transform: translate(20px,-8px)
}
section.text-marquee {
    background: #d8ff36;
    margin-top: 60px;
        padding-top: 30px;
    padding-bottom: 30px;
}

@property --gradient-angle {
    syntax: "<angle>";
    initial-value: 0deg;
    inherits: false;
}

.hero {
    min-height: calc(100vh - var(--header-height) + 1px);
    padding-block:var(--section-padding-block);overflow-x: clip;
    position: relative;
	    background-color: var(--color-black);
}

@media screen and (max-width: 991px) {
    .hero {
        align-items:end;
        display: flex
    }
}

.hero:before {
    aspect-ratio: 1;
    background: radial-gradient(circle,var(--color-blue),var(--color-black) 70%);
    content: "";
    display: block;
    opacity: .35;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: auto;
    z-index: -1
}

@media screen and (max-width: 991px) {
    .hero:before {
        height:100dvw
    }
}

@media screen and (min-width: 992px) {
    .hero:before {
        height:100%
    }
}

.hero lottie-player {
    aspect-ratio: 2233/1920;
    position: absolute;
    z-index: -1
}

@media screen and (max-width: 991px) {
    .hero lottie-player {
        top:0;
        left: 50%;
        transform: translate(-50%);
        width: min(100%,480px);
        height: auto
    }
}

@media screen and (min-width: 992px) {
    .hero lottie-player {
        top:-2dvw;
        right: -5dvw;
        width: auto;
        height: min(50dvw,680px)
    }
}



.hero h1 u {
    display: inline-block;
    padding-bottom: .25em;
    position: relative;
    text-decoration: none

}

.hero h1 u svg {
    position: absolute;
    left: 0;
    right: 0;
    bottom: .125em;
    width: 100%;
    height: .175em
}

@media (prefers-reduced-motion: no-preference) {
    .hero h1 .fill-text__display {
        visibility: hidden
    }
}

@media screen and (max-width: 991px) {
    .hero h1 .fill-text__reference {
        display:none
    }
}
.App.dm-landing header {
    display: none;
}
@media screen and (min-width: 992px) {
    .hero h1 {
        --fill-text-captured-length: initial;
        container-type: inline-size;
        display: flex;
        font-size: 80px;
        width: 90%;
        text-align:left;
        margin-bottom:20px;
    }

    .hero h1 .fill-text__container {
        --fill-text-captured-length: 100cqi;
        --fill-text-available-space: var(--fill-text-captured-length);
        container-type: inline-size;
        flex-grow: 1
    }

    .hero h1 .fill-text__display {
        --fill-text-captured-length: 70cqi;
        --fill-text-ratio: tan(atan2( var(--fill-text-available-space), var(--fill-text-available-space) - var(--fill-text-captured-length) ));
        display: block;
        font-size: var(--font-size-xl);
        font-size: calc(clamp(var(--font-size-xxl),1em * var(--fill-text-ratio),infinity * 1px) - 4px);
        inline-size: var(--fill-text-available-space)
    }

    .hero h1 .fill-text__reference {
        visibility: hidden
    }
}
    .right:before {
    display:none;
}
    h1,h2,h3{
    font-family: "Phudu", sans-serif;
    letter-spacing: 2px;
      }
.hero p {
      text-align: left;
          font-family: "poppins", sans-serif;
              width: 50%;
  
}
.button-container {
    text-align: left;
    margin-top: 32px;
}
@property --fill-text-captured-length {
    syntax: "<length>";
    initial-value: 0px;
    inherits: true;
}
body {
    margin: 0;
}

.brand-section{
    padding:90px 0;
}



.top-content{
    display:flex;
    justify-content:space-between;
    align-items:flex-start;
    margin-bottom:50px;
    gap:30px;
}

.top-content h2{
    font-size:58px;
    font-weight:900;
    line-height:1.05;
    max-width:850px;
}

.top-content h2 span{
    display:block;
}

.cta-btn{
    background:#1d2128;
    color:#fff;
    padding:18px 35px;
    border-radius:16px;
    text-decoration:none;
    display:flex;
    align-items:center;
    gap:10px;
    transition:.3s;
}

.cta-btn:hover{
    background:#000;
}

.grid-layout{
    display:grid;
    grid-template-columns:1.1fr 1.1fr 1.1fr;
    gap:24px;
}

.middle-column,
.right-column{
    display:grid;
    gap:24px;
}

.card{
    background:#f2f2f2;
    border-radius:22px;
    padding:35px;
}

.big-image{
    padding:0;
    overflow:hidden;
}

.big-image img{
    width:100%;
    height:100%;
    object-fit:cover;
    display:block;
}

.info-card h3,
.image-card h3,
.stats-card h3,
.review-card h3{
    font-size:28px;
    font-weight:800;
    line-height:1.2;
    margin-bottom:35px;
	color:#000;
}

.avatars{
    display:flex;
    align-items:center;
}

.avatars img{
    width:56px;
    height:56px;
    border-radius:50%;
    object-fit:cover;
    border:3px solid #fff;
    margin-right:-14px;
}

.plus{
    width:56px;
    height:56px;
    border-radius:50%;
       background: #000;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:32px;
    margin-left:10px;
}

.image-card img{
    width:100%;
    border-radius:18px;
    display:block;
}

.number,.rating strong {
    font-size: 95px;
    font-weight: 900;
    line-height: 1;
    color: #000;
    font-family: "Phudu", sans-serif;
}

.number span{
    font-size:55px;
}

.stats-card p{
    margin-top:10px;
    color:#666;
    font-size:20px;
}

.rating strong{
    display:block;
    font-size:44px;
    margin-bottom:10px;
}
section.FEATURED .card.card--work {
    background: transparent !important;
}
.stars{
    color:#ffc107;
    font-size:26px;
}

.big-image{
    min-height:700px;
}

.info-card{
    min-height:250px;
}

.image-card{
    min-height:420px;
}

.stats-card{
    min-height:470px;
}

.review-card{
    min-height:230px;
}

/* ========== Tablet ========== */

@media(max-width:1100px){

.grid-layout{
    grid-template-columns:1fr 1fr;
}

.big-image{
    grid-column:span 2;
    min-height:450px;
}

}

/* ========== Mobile ========== */

@media(max-width:768px){

.guarantee-card {
    display: block;
}
    .quote-box {
    padding: 10px;
}    .card-top {
        margin-top: 0px !important;
        margin-bottom: 0px;
    }
.App.dm-landing .pricing-tabs {
    margin-bottom: 0px;
}.hero h1
{
fonts-size:50px;}
    .App.dm-landing .managed-services {
    padding: 0;
}
.brand-section{
    padding:60px 0;
}.vt-section.pp-slider {
    padding: 0;
}
section.hero {
    padding-top: 0;
}.hero p {
    font-size: 12px;
    width:100%;
}.button-container {
    margin-top: 5px;
}
.top-content{
    flex-direction:column;
}

.top-content h2{
    font-size:38px;
}

.grid-layout{
    grid-template-columns:1fr;
}

.big-image{
    grid-column:auto;
    min-height:350px;
}

.middle-column,
.right-column{
    display:flex;
    flex-direction:column;
}

.info-card,
.image-card,
.stats-card,
.review-card{
    min-height:auto;
}

.info-card h3,
.image-card h3,
.stats-card h3,
.review-card h3{
    font-size:22px;
}

.number{
    font-size:70px;
}

.rating strong{
    font-size:34px;
}

}





.section-heading{
    text-align:center;
    margin-bottom:60px;
    color:#fff
}



.slide-item{
    padding:0 12px;
}

.capability-card{
    border-radius:28px;
    padding:35px;
    min-height:100%;
    transition:.35s;
}

.capability-card:hover{
    transform:translateY(-8px);
}

.card-number{
    display:block;
    font-size:20px;
    font-weight:800;
    margin-bottom:30px;
    color:#111;
}

.card-image{
    width:100%;
  
    border-radius:20px;
    object-fit:cover;
    margin-bottom:35px;
}

.capability-card h3{
font-size: 22px;
    line-height: 1.2;
    font-weight: 800;
    margin-bottom: 10px;
    text-transform: uppercase;
    color: #111;
}

.capability-card p{
    font-size:14px !important;  
      font-family: 'Poppins';
    line-height:1.8;
    color:#333;
    margin-bottom:0px;
}

.capability-card a{
    display:inline-flex;
    align-items:center;
    gap:10px;
    text-decoration:none;
    color:#111;
    font-size:20px;
    font-weight:700;
    border-bottom:2px solid #111;
    padding-bottom:6px;
}

.capability-card a span{
    font-size:24px;
}

.slick-dots{
    bottom:-55px;
}

.slick-dots li button:before{
    font-size:12px;
    color:#d0d0d0;
    opacity:1;
}

.slick-dots li.slick-active button:before{
    color:#ff5a2a;
}

@media(max-width:992px){

.section-heading h2{
    font-size:42px;
}

.capability-card{
    min-height:auto;
}

.card-number{
    font-size:58px;
}

.capability-card h3{
    font-size:30px;
}

}

@media(max-width:576px){

.capabilities-section{
    padding:70px 0;
}

.section-heading h2{
    font-size:30px;
}

.capability-card{
    padding:25px;
}

.card-image{
    height:160px;
}

.card-number{
    font-size:46px;
}

.capability-card h3{
    font-size:24px;
}

.capability-card p{
    font-size:16px;
}

}
.service-slider .slide-item {
    padding: 0 12px;
    height: stretch;
}



/*========================*/

.team-top{
    display:flex;
    justify-content:space-between;
    align-items:flex-start;
    gap:60px;
    margin-bottom:40px;
}

.left-content{
    flex:1;
}

.dot{
    width:10px;
    height:10px;
    background:#ff5a26;
    border-radius:50%;
    display:block;
    margin-bottom:18px;
}


.left-content h2 span{
    display:block;
}

.left-content p{
   
    color:#fff;
    text-transform:capitalize;
   
}

.team-btn{
    display:inline-flex;
    align-items:center;
    gap:15px;
    padding:18px 34px;
    background:#ff5a26;
    color:#fff;
    text-decoration:none;
    border-radius:50px;
    font-weight:600;
}

.team-btn span{
    width:30px;
    height:30px;
    background:#fff;
    color:#111;
    border-radius:50%;
    display:flex;
    justify-content:center;
    align-items:center;
}

.team-image{
    width:260px;
}

.team-image img{
    width:100%;
    border-radius:18px;
    display:block;
}

/*========================*/

.team-gallery{
    display:grid;
    grid-template-columns:repeat(4,1fr);
    gap:18px;
    margin-bottom:70px;
}

.gallery-item img{
    width:100%;
    display:block;
    border-radius:18px;
    transition:.35s;
}

.gallery-item img:hover{
    transform:translateY(-8px);
}
.process-card1 {
    background: #f2f2f2;
    border-radius: 22px;
    padding: 35px;
}
/*========================*/
.process-card img {
    margin: 0 auto;
    margin-bottom: 10px;
}
.counter-section{
    display:grid;
    grid-template-columns:repeat(4,1fr);
    gap:30px;
    text-align:center;
}

.counter-box h3{
    font-size:72px;
    font-weight:900;
    color:#111;
    line-height:1;
}

.counter-box p{
    margin-top:12px;
    font-size:20px;
    color:#444;
}

/*========================*/

@media(max-width:991px){

.team-top{
    flex-direction:column;
}

.team-image{
    width:100%;
}

.team-gallery{
    grid-template-columns:repeat(2,1fr);
}

.counter-section{
    grid-template-columns:repeat(2,1fr);
}

.left-content h2{
    font-size:48px;
}
section.team-section {
    padding-top: 0;
}
.left-content p{
    font-size:22px;
}

}

@media(max-width:576px){

.team-section{
    padding:70px 0;
}

.team-gallery{
    grid-template-columns:1fr;
}

.counter-section{
    grid-template-columns:1fr;
    gap:40px;
}

.left-content h2{
    font-size:34px;
}

.left-content p{
    font-size:18px;
}

.counter-box h3{
    font-size:52px;
}

}




.process-grid{

    display:grid;
    grid-template-columns:repeat(4,1fr);
    gap:45px;

}

.process-card{

    text-align:center;
    color:#fff;

}

.stepss{

    display:inline-block;

    background:#d8ff36;
    color:#000;

    padding:10px 22px;

    border-radius:30px;

    font-size:14px;
    font-weight:700;
    letter-spacing:1px;

    margin-bottom:45px;

}

.icon{

    font-size:60px;
    color:#d8ff36;

    margin-bottom:30px;

}

.process-card h3{

    font-size:42px;
    text-transform:uppercase;
    margin-bottom:22px;

    color:#fff;

}

.process-card p{

    font-size:15px;
    line-height:1.8;
    color:#d7d7d7;

}

/* Hover */

.process-card1{

    transition:.4s;

}



.process-card1:hover .icon{

    transform:scale(1.15) rotate(10deg);

    transition:.35s;

}

/* Tablet */

@media(max-width:991px){

.process-grid{

grid-template-columns:repeat(2,1fr);

}

}

/* Mobile */

@media(max-width:576px){

.process-grid{

grid-template-columns:1fr;

}

.process-card h3{

font-size:30px;

}

.process-card p{

font-size:16px;

}

}

.accordion-item {
  border-bottom: 1px solid #e7e7e7;
}

.accordion-header {
  width: 100%;
  border: 0;
  background: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 28px 0;
  cursor: pointer;
}

.accordion-title {
  display: flex;
  align-items: center;
  gap: 18px;
}



.accordion-title h3 {
  font-size: 32px;
  font-weight: 700;
}

.accordion-arrow {
  transition: .35s ease;
}

.accordion-content {
  max-height: 0;
  overflow: hidden;
  transition: max-height .35s ease, padding .35s ease;
}

.accordion-content p {
  padding-left: 65px;
  color: #666;
  line-height: 1.8;
}

.accordion-item.is-open .accordion-arrow {
  transform: rotate(180deg);
}

.accordion-item.is-open .accordion-content {
  max-height: 250px;
  padding-bottom: 25px;
}



.process-content {
    display: grid;
     grid-template-columns: repeat(2, 1fr);
    gap: 70px;
    align-items: center;
}

/* LEFT */

.process-left {
    width: 100%;
}



.process-left h2 {

    color: #fff;
   
}

.process-image {
    overflow: hidden;
    border-radius: 22px;
}

.process-image img {
    width: 100%;
    display: block;
    border-radius: 22px;
    object-fit: cover;
}

/* RIGHT */

.process-accordion-card {
    background: #fafafa;
    border: 1px solid #ececec;
    border-radius: 26px;
    padding: 50px;
}

.process-item {
    border-bottom: 1px solid #e7e7e7;
}

.process-item:last-child {
    border-bottom: 0;
}
.process-contentd p {
    font-family: 'Poppins';
}
.process-header {
    width: 100%;
    border: 0;
    background: transparent;
    padding: 18px 0;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.process-title {
    display: flex;
    align-items: center;
    gap: 20px;
}

.process-number {
    font-size: 34px;
    font-weight: 700;
    color: #222;
}

.process-title h3 {
    margin: 0;
    font-size: 36px;
    font-weight: 700;
    text-transform: uppercase;
    color: #222;text-align: left;
}

.process-arrow {
    width: 22px;
    height: 22px;
    transition: .35s;
}

.process-item.is-open .process-arrow {
    transform: rotate(180deg);
}

.process-body {
    max-height: 0;
    overflow: hidden;
    transition: .4s ease;
}

.process-item.is-open .process-body {
    max-height: 220px;
    padding-bottom: 25px;
}

.process-body p {
    padding-left: 70px;
    color: #666;
    font-size: 17px;
    line-height: 1.8;
    margin: 0;
}

.process-btn {
  margin-top: 40px;
    width: 240px;
    height: 58px;
    border-radius: 16px;
    background: #d8ff36;
    color: #fff;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    text-decoration: none;
    transition: .35s;
    color: #000;
    font-family: "Phudu", sans-serif;
    font-weight: bold;
}

.process-btn:hover {
    background: #ff6434;
}

/* Responsive */

@media (max-width:1200px){

.process-left h2{
    font-size:58px;
}

.process-title h3{
    font-size:30px;
}

.process-number{
    font-size:30px;
}

}

@media (max-width:991px){

.process-section-content{
    padding:80px 0;
}

.process-content{
    grid-template-columns:1fr;
    gap:50px;
}

.process-left h2{
    font-size:48px;
    max-width:100%;
}

.process-accordion-card{
    padding:35px;
}

}

@media (max-width:767px){

.process-left h2{
    font-size:36px;
    line-height:1;
}

.process-accordion-card{
    padding:25px;
    border-radius:18px;
}

.process-header{
    padding:22px 0;
}

.process-title{
    gap:12px;
}

.process-title h3{
    font-size:22px;
}

.process-number{
    font-size:22px;
}

.process-body p{
    padding-left:0;
    font-size:15px;
}

.process-btn{
    width:100%;
    margin-top:30px;
}

}
      `}</style>

      
<section class="hero">
    <div class="container">
        <h1 class="heaidng-hero-dm">
            <span class="fill-text__container">
            You Rank #1 On <span className="google-wordmark" aria-label="Google"><span>G</span><span>o</span><span>o</span><span>g</span><span>l</span><span>e</span></span><br/>But Where  <u> Are the Leads?<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200.161 17.886" preserveAspectRatio="none">
                            <path class="underline" fill="none" fill-rule="evenodd" stroke="#d8ff36" stroke-linecap="round" stroke-width="12" d="M6.002 11.884c6.986-2.542 14.678-3.972 30.5-4.721 40.861-1.935 104.946-1.064 157.66 0"></path>
                        </svg></u></span>
          
           
        </h1>
        <div class="post-rel">
            <p>We close the gap between ranking #1 and actually getting found — across
               ChatGPT, Gemini, Claude and everywhere else your buyers look.

</p>
            {/* <div class="circle1">
                <div class="badge c-black">
                    <a href="tel:09177128496" class="stretched-link">
                        <figure class="badge-svg">
                            <svg xmlns="#www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none">
                                <path d="M30.4361 28.1034C25.0662 33.7536 11.3689 20.1796 16.759 14.507C20.0505 11.0429 16.333 7.08546 14.2747 4.17291C10.4115 -1.28673 1.93389 6.25138 2.18949 11.0473C3.00339 26.1729 19.3644 44.0967 35.2074 42.5317C40.1626 42.0429 45.8577 33.0922 40.1716 29.8209C37.3307 28.1841 33.4272 24.9554 30.4361 28.1012M29.0908 12.359L39.1805 2.26932M39.1805 2.26932H31.333M39.1805 2.26932V10.1169" stroke="#d8ff36" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                        </figure>
                    </a>
                </div>
            </div> */}
        </div>
  
        <div class="button-container">
            <a  class="btn btn--outlined"  onClick={() =>
      formRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }>
             SCHEDULE YOUR FREE CALL TODAY



                <span class="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g fill="none" fill-rule="evenodd">
                            <path d="M0 0h24v24H0z"></path>
                            <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                                <path d="M17 7 7 17"></path>
                                <path d="M8 7h9v9"></path>
                            </g>
                        </g>
                    </svg> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g fill="none" fill-rule="evenodd">
                            <path d="M0 0h24v24H0z"></path>
                            <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                                <path d="M17 7 7 17"></path>
                                <path d="M8 7h9v9"></path>
                            </g>
                        </g>
                    </svg> </span>
            </a>
        </div>
        <div className="hero-trust">

  <div className="trust-item">
    <svg
      className="trust-icon"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="9" stroke="#D8FF3F" strokeWidth="2"/>
      <path
        d="M8 12.5L10.8 15.3L16.5 9.7"
        stroke="#D8FF3F"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>

    <span>50+ businesses recommended by AI</span>
  </div>

  <div className="trust-item">
    <svg
      className="trust-icon"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="9" stroke="#D8FF3F" strokeWidth="2"/>
      <path
        d="M8 12.5L10.8 15.3L16.5 9.7"
        stroke="#D8FF3F"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>

    <span>Free AI visibility report worth $399
</span>
  </div>

  <div className="trust-item">
    <svg
      className="trust-icon"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="9" stroke="#D8FF3F" strokeWidth="2"/>
      <path
        d="M8 12.5L10.8 15.3L16.5 9.7"
        stroke="#D8FF3F"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>

    <span>100% Money-Back Guarantee*
</span>
  </div>

</div>
    </div>
</section>
{/* SECTION 2 */}
<section className="text-marquee">
  <div className="marquee">
    <div className="marquee-track" ref={trackRef1}>
      {[...itemss, ...itemss].map((item, index) => (
        <div className="marquee-card1" key={index}>
              <img
        src="https://demo.awaikenthemes.com/artistics/wp-content/uploads/2024/11/asterisk-icon.svg"
        alt=""
        className="marquee-icon"  loading="lazy"
  decoding="async"
      />
          {item.text}
        </div>
      ))}
    </div>
  </div>
</section>
<section className="search-reality-section">
    <div className="container">
        <div className="search-reality-intro">
            <span className="search-reality-eyebrow">The New Search Reality</span>
            <h2>Ranking And <strong>Recognition</strong> Are Not The Same Thing.</h2>
            <p>Google ranks pages. AI recommends brands it already recognizes. You can dominate page one and still get skipped the moment someone asks ChatGPT instead.</p>
        </div>

        <div className="search-reality-comparison">
            <article className="search-reality-card">
                <div className="search-reality-card__head">
                    <img className="search-reality-brand-icon" src="/images/GoogleDm.webp" alt="Google"  loading="lazy"
  decoding="async" />
                    <h3 className="d" aria-label="Google">Google Search</h3>
                </div>
                <div className="search-reality-card__body">
                <ul className="search-reality-points">
  <li>Ranks pages</li>
  <li>Rewards keywords &amp; backlinks</li>
  <li>You compete for position</li>

  {showMorePoints  && (
    <>
      <li>Sends direct traffic</li>
      <li>You control the message</li>
      <li>Fully measurable</li>
      <li>Rewards backlinks &amp; authority</li>
    </>
  )}
</ul>


        
                </div>
                
          </article>

            <span className="search-reality-vs">VS</span>

            <article className="search-reality-card">
                <div className="search-reality-card__head">
                    <img className="search-reality-brand-icon" src="/images/Ai logo.webp" alt="OpenAI"  loading="lazy"
  decoding="async" />
                    <h3>AI Search</h3>
                </div>
                <div className="search-reality-card__body">
                <ul className="search-reality-points">
  <li>Recommends brands</li>
  <li>Rewards verified info &amp; reviews</li>
  <li>You compete for recognition</li>

  {showMorePoints  && (
    <>
      <li>Gives final answers, no click</li>
      <li>AI controls the narrative</li>
      <li>Hard to measure</li>
      <li>Rewards reviews &amp; mentions</li>
    </>
  )}
</ul>


                </div>

            </article>
      
        </div>
              <button
  className="search-more-btn"
  onClick={() => setShowMorePoints(!showMorePoints)}
>
  {showMorePoints ? "See Less ↑" : "See More ↓"}
</button>
    </div>
</section>
{/* Work Section */}
<section class="work-por">
    <div class="container">
        <div class="title-bar">
            <div class="search-reality-intro">
                <span class="search-reality-eyebrow">Our work portfolio</span>
                <h2 class="">WHAT WORKING <strong>WITH US LOOKS LIKE</strong></h2>
                
            </div>

            
            <div className="services">
<div className="left">
  {data.map((item, index) => (
    <div key={index} className="tab-wrapper">

      <button
        className={active === index ? "tab active" : "tab"}
        onClick={() => setActive(index)}
      >
        
        <span className="icon-name-tab">{item.icon}{item.title}</span>

        <div className="arrow">→</div>
      </button>

      {/* Mobile Slider */}
      {active === index && (
        <div className="mobile-slider g">
          <Slider
            key={index}
            dots={true}
            arrows={false}
            infinite={false}
            slidesToShow={1}
            slidesToScroll={1}
            className="pp-slider"
          >
            {item.portfolio.map((portfolioItem, i) => (
              <div key={i}>
                <div className="portfolio-card ">

                  {portfolioItem.type === "video" ? (

                    <div
                      className="portfolio-video gfgggg"
                      onMouseEnter={() => setHoveredIndex(i)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      onClick={() => setPreviewIndex(i)}
                    >
                      
                 <div className="portfolio-media">
  <img
    src={portfolioItem.thumbnail}
    alt={item.title}
    className={`hover-image ${hoveredIndex === index ? "hide" : ""}`}
    loading="lazy"
    decoding="async"
  />

  <video
    src={portfolioItem.video}
    autoPlay
    muted
    loop
    playsInline
    preload="metadata"
    className={`hover-video ${hoveredIndex === index ? "show" : ""}`}
  />
</div>

                      <div className="play-btn">▶</div>
                    </div>

                  ) : (

                    <img
                      src={portfolioItem.image}
                      alt={portfolioItem.title}
                      onClick={() => setPreviewIndex(i)}
                      className="portfolio-img"
                      loading="lazy"
                      decoding="async"
                    />

                  )}

                  <div
                    className="portfolio-info"
                    style={{
                      borderLeft: `5px solid ${
                        portfolioItem.color || "#ffc2c2"
                      }`,
                    }}
                  >
                    <p>{portfolioItem.desc}</p>
                  </div>

                </div>
              </div>
            ))}
          </Slider>
        </div>
      )}

    </div>
  ))}
</div>

      <div className="right">

<Slider
   key={active}
  dots={true}
  arrows={false}
  infinite={false}
   slidesToShow={2}
  slidesToScroll={1}
className="pp-slider"
  responsive={[
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
      },
    },
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
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,

      },
    },
  ]}

>
  {activePortfolio.map((item, index) => (
    <div key={index}>
      <div className="portfolio-card ">

{item.type === "video" ? (

<div
  className="portfolio-video ffff"
  onMouseEnter={() => setHoveredIndex(index)}
  onMouseLeave={() => setHoveredIndex(null)}
onClick={() => setPreviewIndex(index)}
>
<div className="portfolio-media">
  <img
    src={item.thumbnail}
    alt={item.title}
    className={`hover-image ${hoveredIndex === index ? "hide" : ""}`}
    loading="lazy"
    decoding="async"
  />

  <video
    src={item.video}
    autoPlay
    muted
    loop
    playsInline
    preload="metadata"
    className={`hover-video ${hoveredIndex === index ? "show" : ""}`}
  />
</div>

  <div className="play-btn">▶</div>
</div>
) : (
  <img
    src={item.image}
    alt={item.title}
   onClick={() => setPreviewIndex(index)}
    className="portfolio-img"
    loading="lazy"
    decoding="async"
  />
)}
        <div className="portfolio-info"   style={{
    borderLeft: `5px solid ${item.color || "#ffc2c2"}`
  }}>
        

    
          <p>{item.desc}</p>
        </div>

      </div>
    </div>
  ))}
</Slider>
</div>
      </div>
        </div>
    </div>
</section>
{/* end work section */}
{/* stats section */}

{previewIndex !== null && activePortfolio[previewIndex] && (
  <div
    className="image-popup"
    onClick={() => setPreviewIndex(null)}
  >
    <button
      className="popup-close"
      onClick={() => setPreviewIndex(null)}
    >
      ×
    </button>

    {/* PREVIOUS */}
    <button
      className="popup-nav popup-prev"
      onClick={(e) => {
        e.stopPropagation();

        setPreviewIndex(
          previewIndex === 0
            ? activePortfolio.length - 1
            : previewIndex - 1
        );
      }}
    >
      ‹
    </button>

    <div
      className="popup-content"
      onClick={(e) => e.stopPropagation()}
    >
      {activePortfolio[previewIndex].type === "video" ? (
        <video
          src={activePortfolio[previewIndex].video}
          autoPlay
          muted
          loop
          playsInline
          controls
        />
      ) : (
        <img
          src={activePortfolio[previewIndex].image}
          alt={activePortfolio[previewIndex].title}
        />
      )}

      <div className="popup-info">
   
        <p>{activePortfolio[previewIndex].desc}</p>
      </div>
    </div>

    {/* NEXT */}
    <button
      className="popup-nav popup-next"
      onClick={(e) => {
        e.stopPropagation();

        setPreviewIndex(
          previewIndex === activePortfolio.length - 1
            ? 0
            : previewIndex + 1
        );
      }}
    >
      ›
    </button>
  </div>
)}
{/* why choose us section */}
<section>
    <div className="container">
    <div class="search-reality-intro">
        <span class="search-reality-eyebrow">
          The Citadel Coworkers Difference
</span><h2>One Team. Every Channel. 
     <strong> Real Guarantees.</strong> </h2><p>Built on <b>15+ years</b>  of combined digital 
     marketing experience and backed by promises most agencies won't put in writing.</p></div>
     <div className="guarantee-grid desktop-Grid">

  {guarantees.map((item) => (

    <div
      key={item.id}
      className={`guarantee-card ${item.color}`}
    >
<div className="left-gif"><video  autoPlay
    loop
    muted
    playsInline src={item.image} alt="Guarantee" /></div>
<div className="right-solution">
      <div className="card-top">

        <div className="guarantee-icon">

          <div className="icon-bg"></div>

          <div className="icon-svg-card">
            {item.icon}
          </div>

        </div>

        <span className="card-number">
          {String(item.id).padStart(2, "0")}
        </span>

      </div>
  <div className="quote-box">

        <div className="quote-mark">

          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M9.5 11H6.5c.2-2 1.1-3.4 2.8-4.4L8.5 4C5.5 5.5 4 8.1 4 12v7h7v-8H8.2c.1-.8.6-1.5 1.3-2zm10 0h-3c.2-2 1.1-3.4 2.8-4.4L18.5 4C15.5 5.5 14 8.1 14 12v7h7v-8h-2.8c.1-.8.6-1.5 1.3-2z"/>
          </svg>

        </div>

        <p>{item.quote}</p>

      </div>
      <div className="card-content">

        <h3>{item.title}</h3>

        <span className="title-line"></span>

        <p>{item.description}</p>

      </div>
</div>
    

    </div>

  ))}

</div>
<div className="mobile-port pp-slider">
  <Slider {...mobileSlider} className="">
    {guarantees.map((item) => (
      <div key={item.id}>
      
    <div
      key={item.id}
      className={`guarantee-card ${item.color}`}
    >
<div className="left-gif"><video  autoPlay
    loop
    muted
    playsInline src={item.image} alt="Guarantee" /></div>
<div className="right-solution">
      <div className="card-top">

        <div className="guarantee-icon">

          <div className="icon-bg"></div>

          <div className="icon-svg-card">
            {item.icon}
          </div>

        </div>

        <span className="card-number">
          {String(item.id).padStart(2, "0")}
        </span>

      </div>
  <div className="quote-box">

        <div className="quote-mark">

          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M9.5 11H6.5c.2-2 1.1-3.4 2.8-4.4L8.5 4C5.5 5.5 4 8.1 4 12v7h7v-8H8.2c.1-.8.6-1.5 1.3-2zm10 0h-3c.2-2 1.1-3.4 2.8-4.4L18.5 4C15.5 5.5 14 8.1 14 12v7h7v-8h-2.8c.1-.8.6-1.5 1.3-2z"/>
          </svg>

        </div>

        <p>{item.quote}</p>

      </div>
      <div className="card-content">

        <h3>{item.title}</h3>

        <span className="title-line"></span>

        <p>{item.description}</p>

      </div>
</div>
    

    </div>
      </div>
    ))}
  </Slider>
</div>
<div className="trust-strip">

  <div className="trust-left">

    <div className="trust-shield">

      <svg
        viewBox="0 0 64 64"
        fill="none"
      >
        <path
          d="M32 8L50 15V30C50 42 42 52 32 57C22 52 14 42 14 30V15L32 8Z"
          stroke="currentColor"
          strokeWidth="2.5"
        />

        <path
          d="M24 31L30 37L41 25"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

    </div>

    <div>

      <h4>
        We stand behind our work
      </h4>

      <p>
        with <span>real guarantees.</span>
      </p>

    </div>

  </div>

  <div className="trust-divider"></div>

  <div className="trust-brand">

    <img
      src="/images/GoogleDm.webp"
      alt="Google"  loading="lazy"
  decoding="async"
    />

    <div>

      <h5>Google</h5>

      <span>Certified</span>

    </div>

  </div>

  <div className="trust-divider"></div>

  <div className="trust-brand">

    <img
      src="/images/meta (1).webp"
      alt="Meta"
      loading="lazy"
      decoding="async"
    />

    <div>

      <h5>Meta</h5>

      <span>Business Partner</span>

    </div>

  </div>

  <div className="trust-divider"></div>

  <div className="trust-brand">

    <img
      src="/images/hub (1).webp"
      alt="Semrush"
      loading="lazy"
      decoding="async"
    />

    <div>

      <h5>HubSpot</h5>

      <span>Agency Partner</span>

    </div>

  </div>

</div>
</div>
</section>

{/* case study */}

<section className="">
  <div className="container">
    <div class="search-reality-intro"><span class="search-reality-eyebrow">Case Studies
</span><h2>Results We 
<strong> Hold Ourselves To</strong> </h2></div>
<Slider {...caseStudySlider} className="case-study-slider pp-slider">

  {portfolioResults.map((item) => (
    <div className="case-slide" key={item.id} className="case-slider-Dm">

      <div className="result-card">

        {/* Image */}
        <div className="result-image">
          <img
            src={item.image}
            alt={item.title}
            loading="lazy"
            decoding="async"
          />

          <span className="result-category">
            {item.category}
          </span>
        </div>

        {/* Content */}
        <div className="result-content">

          <div className="Nmae-co">
            <h4>{item.title}</h4>

            <div className="result-country">
              <img
                src={item.flag}
                alt={item.country}
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          <p>{item.description}</p>

          <div className="result-stats">

            <div className="result-stat">
              <h3>{item.stat1}</h3>
              <span>{item.label1}</span>
            </div>

            <div className="result-stat">
              <h3>{item.stat2}</h3>
              <span>{item.label2}</span>
            </div>

          </div>

          <a
            href={item.link}
            className="result-link"
          >
            View Case Study

            <svg viewBox="0 0 24 24" fill="none">
              <path
                d="M7 17L17 7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M8 7H17V16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>

        </div>

      </div>

    </div>
  ))}

</Slider>
</div>
</section>

<section>
   <div className="container">
      <div class="search-reality-intro"><span class="search-reality-eyebrow">What We Do

</span><h2> Marketing Services That Actually 

<strong> Talk To Each Other</strong> </h2>
<p>One team runs every channel, so nothing works in isolation. Every service ships with the video, content and graphics it takes to run it plus print-ready marketing collateral. 
  Nothing here is an upsell.</p></div>

<div className="services-grid ">
  {capabilities.map((item) => (
    <div key={item.id} className="slide-item">
      <div
        className="capability-card"
        style={{ background: item.color }}
      >
        <span className="card-number">{item.id}</span>

        <img
          src={item.image}
          alt={item.title}
          className="card-image"
          loading="lazy"
          decoding="async"
        />

        <h3>{item.title}</h3>
        <p>{item.des}</p>
      </div>
    </div>
  ))}
</div>
  
   </div>
</section>
<section className="test-Dmpage">
  <div className="container">
  
    <div class="search-reality-intro"><span class="search-reality-eyebrow">Client Love

</span><h2> Real Voices,    

 <strong>  Real Results</strong> </h2>
<p>Hear directly from clients who partnered with Citadel Coworkers.</p></div>
<Suspense fallback={<div>Loading...</div>}>
  <TestimonialsTabs />
</Suspense></div></section>

{/* Process Section */}
<section className="process-section-content">
      <div className="container">
<div class="search-reality-intro"><span class="search-reality-eyebrow"> How It Works
</span><h2> One Process For 
<strong> Every Channel</strong> </h2>
<p>Hear directly from clients who partnered with Citadel Coworkers.</p></div>
        <div className="process-content">

          {/* LEFT */}

          <div className="process-left">

       

            <div className="process-image">

              <img
                src="/images/Processdata.webp"
                alt=""
                loading="lazy"
                decoding="async"
              />

            </div>

          </div>

          {/* RIGHT */}

          <div className="process-card1 ">

            {processData.map((item, index) => (

              <div
               className={`process-item ${
  openIndex === index ? "is-open" : ""
}`}

onClick={() =>
  setOpenIndex(openIndex === index ? null : index)
}
              >
                <button
                  className="process-header"
                  onClick={() =>
                    setOpenIndex(openIndex  === index ? null : index)
                  }
                >
                  <div className="process-title">

                    <span className="process-number">
                      {(index + 1).toString().padStart(2, "0")}.
                    </span>

                    <h3>{item.title}</h3>

                  </div>

              

                </button>

                <div className="process-contentd">

                  <p>{item.content}</p>

                </div>

              </div>

            ))}

            <a className="process-btn" onClick={() =>
      formRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }>

              Get In Touch

              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
              >
                <path
                  d="M7 17L17 7M17 7H8M17 7V16"
                  fill="none"
                  stroke="#000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

            </a>

          </div>

        </div>

      </div>
    </section>

    {/* End Process Section */}

{/* Pricing tabs here */}
<div class="Pricing-section-landing">
  <div class="search-reality-intro"><span class="search-reality-eyebrow"> Flexible Pricing</span>
  <h2> Choose the Right Plan<strong> for Your Business</strong> </h2>
  <p>Hire dedicated professionals or choose fully managed monthly service packages tailored for your business.</p></div>


<Suspense fallback={<div>Loading...</div>}>
<PricingTabs
  handleScrollClick={handleScrollClick}

/>
</Suspense>
</div>


{/* End Pricing SEction */}


{/* Contact Section */}
<section id="form-section-dm" ref={formRef}>
  <div className="container">
<div className="Form-dm-gridf">
<div class="content-left-grid">
<div class="search-reality-intro left-sided"><span class="search-reality-eyebrow">Small heading</span>
  <h2> Let's Build The Marketing .
That Actually <strong>Works For You</strong> </h2>
  <p>Every professional screened, tested, and matched to fit your team's exact needs</p></div>
<div class="animated -arrow"><img src="/images/Paper-Plane-1.webp"  loading="lazy"
  decoding="async"></img></div>
<div class="Botom-form-pointer">
<div class="pointers-form"><ul>
  <li><span><svg width="23" height="23" viewBox="0 0 24 24" fill="none">
    <path d="M20 6L9 17L4 12" stroke="currentColor" stroke-width="2"></path></svg></span> 100% Money-Back Guarantee*
</li>
<li><span><svg width="23" height="23" viewBox="0 0 24 24" fill="none">
  <path d="M20 6L9 17L4 12" stroke="currentColor" stroke-width="2"></path></svg></span> Cancel Anytime, Zero Lock-In*
</li>
<li><span><svg width="23" height="23" viewBox="0 0 24 24" fill="none">
  <path d="M20 6L9 17L4 12" stroke="currentColor" stroke-width="2"></path></svg></span> 
  Google, Meta & GEO  Certified</li><li><span><svg width="23" height="23" viewBox="0 0 24 24" fill="none">
  <path d="M20 6L9 17L4 12" stroke="currentColor" stroke-width="2"></path></svg></span> Time-Zone Aligned Coworkers</li></ul>
  </div>
</div></div><div className="content-right-grid">
<Suspense fallback={<div>Loading...</div>}>
  <ContactFormDM />
</Suspense>

</div>
</div>

  </div>
</section>
<section class="conclusion-section">
  <div class="conclusion-inner">

  
    <div class="conclusion-label-wrap">
      <span class="conclusion-line"></span>

      <div class="conclusion-label">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2.8l2.7 5.5 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1-4.4-4.3 6.1-.9L12 2.8z"
            fill="none"
            stroke="currentColor"
            stroke-width="1.8"
            stroke-linejoin="round"/>
        </svg>
        CONCLUSION
      </div>

      <span class="conclusion-line"></span>
    </div>


  
    <div class="conclusion-heading">
      <h2>
      RANKING #1 MEANS NOTHING 
        <span>IF IT DOESN'T MEAN MORE LEADS</span>
      </h2>

      <p>
        Get a free, no-pressure look at why your rankings aren't converting — and a plan to close the gap.
      </p>
    </div>


  
   






  
    <div class="cta-wrap">


      <svg class="cta-arrow-left" viewBox="0 0 180 90">
        <path
          d="M10 18
             C35 62, 80 70, 120 48
             C140 37, 151 29, 166 17"
          fill="none"
          stroke="currentColor"
          stroke-width="4"
          stroke-linecap="round"/>

        <path
          d="M150 12L168 17L157 32"
          fill="none"
          stroke="currentColor"
          stroke-width="4"
          stroke-linecap="round"
          stroke-linejoin="round"/>
      </svg>


      <a class="growth-btn"  onClick={() =>
      formRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }>
        <span>GET ON A CALL WITH OUR TEAM</span>

        <span class="growth-arrow">
          <svg viewBox="0 0 24 24">
            <path d="M5 12h13"></path>
            <path d="M13 6l6 6-6 6"></path>
          </svg>
        </span>
      </a>



      <svg class="cta-arrow-right" viewBox="0 0 70 60">
        <path d="M8 30h42"></path>
        <path d="M40 17l13 13-13 13"></path>
        <path d="M58 12l6-5"></path>
        <path d="M58 48l6 5"></path>
      </svg>

    </div>



    <div class="bottom-tagline">
      <span></span>

      <div>
        <svg viewBox="0 0 24 24">
          <path d="M12 20s-7-4.5-9-8.5C1.5 8.2 3.5 5 7 5c2 0 3.5 1.2 5 3 1.5-1.8 3-3 5-3 3.5 0 5.5 3.2 4 6.5-2 4-9 8.5-9 8.5z"></path>
        </svg>

        <span>One team. Every channel. Real guarantees.</span>

        <svg viewBox="0 0 24 24">
          <path d="M12 20s-7-4.5-9-8.5C1.5 8.2 3.5 5 7 5c2 0 3.5 1.2 5 3 1.5-1.8 3-3 5-3 3.5 0 5.5 3.2 4 6.5-2 4-9 8.5-9 8.5z"></path>
        </svg>
      </div>

      <span></span>
    </div>

  </div>
</section>

{/* end contact */}



   
  



    </>
  );
}
