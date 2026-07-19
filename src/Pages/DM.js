import React, { useState, useRef ,useEffect} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
    const processData  = [
  {
    title: "Discovery",
    content:
      "We understand your business goals, audience, and project requirements before creating the perfect strategy.",
  },
  {
    title: "Design",
    content:
      "Our creative team designs modern user experiences with beautiful interfaces focused on conversion.",
  },
  {
    title: "Development",
    content:
      "Using the latest technologies, we build scalable, fast, and secure digital products.",
  },
  {
    title: "Launch",
    content:
      "After testing and optimization, we launch your project and provide continuous support.",
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
  slidesToShow: 4,
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
    portfolio: [
      {
        image: "/images/Portfolio/SocialPost/adinath (4) (1).webp",
        title: "adinath",
        category: "Social Media",
        desc: "Busbar technical tips served with some memes",
        color:"#dce2ff",
      },
      {
        image: "/images/Portfolio/SocialPost/CCW Festive.webp",
        title: "Festive greetings across major global holidays",
        category: "CCW Festive",
        desc: "Festive greetings across major global holidays",
          color:" #d6a1c9",
      },
      {
        image: "/images/Portfolio/SocialPost/CCW1 (1).webp",
        title: "CCW1 (1)",
        category: "CCW1 (1)",
        desc: "Professional carousels boosting brand credibility",
         color:"#ceb2b2",
      },
      {
        image: "/images/Portfolio/SocialPost/Cosmo clay dishes.webp",
        title: "Virtual",
        category: "Appetizing food photography for recipes",
        desc: "Appetizing food photography for recipes",
         color:"#c2ffe2",
      },

        {
        image: "/images/Portfolio/SocialPost/Dummy den.webp",
        title: "Dummy den",
        category: "Dental service promotions for families",
        desc: "Dental service promotions for families",
         color:"#99acff",
      },
         {
        image: "/images/Portfolio/SocialPost/Dummy.webp",
        title: "nsurance service ads for protection",
        category: "Social Media",
        desc: "Insurance service ads for protection",
         color:"#1f40d1",
      },
         {
        image: "/images/Portfolio/SocialPost/dummyback.webp",
        title: "Citadel",
        category: "Social Media",
        desc: "Health awareness posts on common conditions",
         color:"#87be8e",
      }
      ,
         {
        image: "/images/Portfolio/SocialPost/kamla rocks (1).webp",
        title: "Citadel",
        category: "Social Media",
        desc: "Elegant product photography for lifestyle branding",
         color:"#449cbe",
      }
      ,
         {
        image: "/images/Portfolio/SocialPost/kosmos clay OPffer.webp",
        title: "Citadel",
        category: "Social Media",
        desc: "Sauce promotions with seasonal discount offers",
         color:"#c976a6",
      }
      ,
         {
        image: "/images/Portfolio/SocialPost/kosmos clay.webp",
        title: "Citadel",
        category: "Social Media",
        desc: "Recipe posts featuring signature BBQ products",
         color:"#1f40d1",
      },
         {
        image: "/images/Portfolio/SocialPost/Melanie Wenzel (1).webp",
        title: "Citadel",
        category: "Social Media",
        desc: "Calming lifestyle shots for wellness retreat",
         color:"#9f1fd1",
      }
      ,
         {
        image: "/images/Portfolio/SocialPost/NG-.webp",
        title: "Citadel",
        category: "Social Media",
        desc: "Medical awareness posts creating awareness",
         color:"#1fd1d1",
      }
      ,
         {
        image: "/images/Portfolio/SocialPost/residally (2).webp",
        title: "Citadel",
        category: "Social Media",
        desc: "Educational carousels on home-sharing benefits",
         color:"#1fd128",
      }
       ,
         {
        image: "/images/Portfolio/SocialPost/residally.webp",
        title: "Citadel",
        category: "Social Media",
        desc: "Extended visuals promoting shared housing lifestyle",
         color:"#d11f1f",
      }
       ,
         {
        image: "/images/Portfolio/SocialPost/spacevogues Furniture (1).webp",
        title: "Citadel",
        category: "Social Media",
        desc: "Kitchen designs and furniture trend highlights",
         color:"#1fd196",
      }
      ,
         {
        image: "/images/Portfolio/SocialPost/spacevogues Furniture 2 (2).webp",
        title: "Citadel",
        category: "Social Media",
        desc: "Luxury interior photography for design inspiration",
         color:"#1f99d1",
      }
      ,
         {
        image: "/images/Portfolio/SocialPost/VASEo (1).webp",
        title: "Citadel",
        category: "Social Media",
        desc: "Bold promotional creatives for marketing services",
         color:"#1f7bd1",
      }
    ]
  },
  {

    
    title: "Content Marketing",
    portfolio: [
         {
         image: "/images/Portfolio/ContentMarketing/Ng servies.webp",
        title: "Case Study Design",
        category: "Content Marketing",
        desc: "Educational health condition pages built for patients"
      },
          {
        image: "/images/Portfolio/ContentMarketing/Ng homne.webp",
        title: "Ng homne",
        category: "homne",
        desc: "Homepage blending media buzz created for client"
      },
        {
        image: "/images/Portfolio/ContentMarketing/blog seo.webp",
        title: "Carousel Designd",
        category: "bLOG CALEENDER CCW",
        desc: "Blog calendar with ready SEO metadata",
         color:"#1f40d1",
      },
        {
        image: "/images/Portfolio/ContentMarketing/Interlinking.webp",
        title: "Carousel Designd",
        category: "Social Media",
        desc: "Blog content highlighting internal linking strategy",
         color:"#1f40d1",
      },
       {
        image: "/images/Portfolio/ContentMarketing/Flashhiring (6).webp",
        title: "Carousel Designd",
        category: "Social Media",
        desc: "Product pages explaining an AI platform",
         color:"#1f40d1",
      },
      {
        image: "/images/Portfolio/ContentMarketing/Ng blog page (3).webp",
        title: "Landing Page Copy",
        category: "Content Marketing",
        desc: "Medical blog listing with detailed articles"
      },
        {
        image: "/images/Portfolio/ContentMarketing/adinath blog (2).webp",
        title: "Carousel Designd",
        category: "extra",
        desc: "Technical blog post made reader-friendly",
         color:"#1f40d1",
      },
      {
        image: "/images/Portfolio/ContentMarketing/flashring.webp",
        title: "Case Study Design",
        category: "Content Marketing",
        desc: "Full-year festival calendar tracking with status"
      },
       {
        image: "/images/Portfolio/ContentMarketing/case (2).webp",
        title: "Case Study Design",
        category: "Content Marketing",
        desc: "case (2)"
      },
     {
        image: "/images/Portfolio/ContentMarketing/posting.webp",
        title: "Case Study Design",
        category: "Content Marketing",
        desc: "Monthly Content calendar tracking every social post."
      },
       {
        image: "/images/Portfolio/ContentMarketing/KAMLA ROCKS BLOG (1) (1).webp",
        title: "Carousel Designd",
        category: "Social Media",
        desc: "Personal-toned wellness blog with lead capture",
         color:"#1f40d1",
      },
       {
        image: "/images/Portfolio/ContentMarketing/info.webp",
        title: "Carousel Designd",
        category: "Social Media",
        desc: "info",
         color:"#1f40d1",
      },
        {
        image: "/images/Portfolio/ContentMarketing/caseadi.webp",
        title: "Carousel Designd",
        category: "Social Media",
        desc: "casea study ",
         color:"#1f40d1",
      },
       {
        image: "/images/Portfolio/ContentMarketing/infogr.webp",
        title: "Carousel Designd",
        category: "Social Media",
        desc: "infogr ",
         color:"#bf4feb",
      },
      {
        image: "/images/Portfolio/ContentMarketing/MIDSTART HOME(1).webp",
        title: "Carousel Designd",
        category: "Social Media",
        desc: "Real estate site built around trust",
         color:"#1f40d1",
      },
        {
        image: "/images/Portfolio/ContentMarketing/adcopies.webp",
        title: "Carousel Designd",
        category: "Social Media",
        desc: "Real estate site built around trust",
         color:"#1f40d1",
      },
         {
        image: "/images/Portfolio/ContentMarketing/adinath (5).webp",
        title: "Carousel Designd",
        category: "Social Media",
        desc: "Real estate site built around trust",
         color:"#1f40d1",
      },
      {
        image: "/images/Portfolio/ContentMarketing/tRIGEN (3).webp",
        title: "Carousel Designd",
        category: "Social Media",
        desc: "Logistics site explaining services simply",
         color:"#1f40d1",
      },
      {
        image: "/images/Portfolio/ContentMarketing/adinath content calender.webp",
        title: "Carousel Designd",
        category: "Social Media",
        desc: "Color-coded calendar planning weekly blog topics",
         color:"#1f40d1",
      },
     
      {
        image: "/images/Portfolio/ContentMarketing/VAseo services(1).webp",
        title: "Carousel Designd",
        category: "Social Media",
        desc: "SEO service homepage with team highlights",
         color:"#1f40d1",
      },
      {
        image: "/images/Portfolio/ContentMarketing/Kosmo blog.webp",
        title: "Carousel Designd",
        category: "Social Media",
        desc: "Recipe blog paired with product tie-ins",
         color:"#1f40d1",
      },
      {
        image: "/images/Portfolio/ContentMarketing/Kosmos Q – E-commerce Product.webp",
        title: "Carousel Designd",
        category: "Social Media",
        desc: "Product bundle pages built to convert",
         color:"#1f40d1",
      },
      {
        image: "/images/Portfolio/ContentMarketing/Kosmo home page (3).webp",
        title: "Carousel Designd",
        category: "Social Media",
        desc: "Brand story page building founder trust",
         color:"#1f40d1",
      },
      {
        image: "/images/Portfolio/ContentMarketing/Cita del blog.webp",
        title: "Carousel Designd",
        category: "Social Media",
        desc: "Blog content shaped like case studies",
         color:"#1f40d1",
      },
      {
        image: "/images/Portfolio/ContentMarketing/kamla rocks blogs (1).webp",
        title: "Carousel Designd",
        category: "Social Media",
        desc: "Wellness blog with warm, relatable writing",
         color:"#1f40d1",
      },
      {
        image: "/images/Portfolio/ContentMarketing/c (4) (1).webp",
        title: "Carousel Designd",
        category: "Social Media",
        desc: "Full-year calendar organized by content type",
         color:"#1f40d1",
      },
      {
        image: "/images/Portfolio/ContentMarketing/adinath home.webp",
        title: "Carousel Designd",
        category: "Social Media",
        desc: "Manufacturer homepage showcasing full product range",
         color:"#1f40d1",
      },
      {
        image: "/images/Portfolio/ContentMarketing/Va seo home.webp",
        title: "Carousel Designd",
        category: "Social Media",
        desc: "SEO homepage outlining service packages clearly",
         color:"#1f40d1",
      },
      
     
  
   
      
    ]
  },

  
    {
    title: "Email Marketing",
   portfolio: [
   
   
        {
       image: "/images/Portfolio/EmailMarketing/Email automation brunt orange.webp",
        title: "Carousel Designd",
        category: "Social Media",
        desc: "Welcome email series explaining benefits simply",
         color:"#1f40d1",
      },
      {
       image: "/images/Portfolio/EmailMarketing/Offer citael.webp",
        title: "Carousel Designd",
        category: "Social Media",
        desc: "Promotional email highlighting major hiring savings",
         color:"#1f40d1",
      },
       {
       image: "/images/Portfolio/EmailMarketing/Citadel markting.webp",
        title: "Carousel Designd",
        category: "Social Media",
        desc: "Personalized outreach email for hiring solutions",
         color:"#1f40d1",
      },
      {
     image: "/images/Portfolio/EmailMarketing/Custmore segment.webp",
        title: "Landing Page Copy",
        category: "Content Marketing",
        desc: "Customer data segmented for targeted emails"
      },
      {
        image: "/images/Portfolio/EmailMarketing/Email copy.webp",
        title: "Case Study Design",
        category: "Content Marketing",
        desc: "Email templates crafted for recruitment campaigns"
      }
      ,
      {
     image: "/images/Portfolio/EmailMarketing/Campaign Reports.webp",
        title: "Case Study Design",
        category: "Content Marketing",
        desc: "Campaign dashboard tracking email performance closely"
      },   {
    image: "/images/Portfolio/EmailMarketing/Adinath  Thak you (3).webp",
        title: "Case Study Design",
        category: "Content Marketing",
        desc: "Clean payment confirmation email design"
      }, {
      image: "/images/Portfolio/EmailMarketing/Audience Segmentation (2).webp",
        title: "Case Study Design",
        category: "Content Marketing",
        desc: "Audience segmentation strategy explained visually"
      }
      , {
      image: "/images/Portfolio/EmailMarketing/Email automation for citadel.webp",
        title: "Case Study Design",
        category: "Content Marketing",
        desc: "Automated email journey nurturing leads steadily"
      }
      , {
      image: "/images/Portfolio/EmailMarketing/black friday (1) (1).webp",
        title: "Case Study Design",
        category: "Content Marketing",
        desc: "Bold discount email driving quick action"
      }
      , {
      image: "/images/Portfolio/EmailMarketing/adinath product lanuch.webp",
        title: "Case Study Design",
        category: "Content Marketing",
        desc: "Product launch email showcasing new inventory"
      }
       , {
      image: "/images/Portfolio/EmailMarketing/dummy_ (1) (1).webp",
        title: "Case Study Design",
        category: "Content Marketing",
        desc: "Stylish email template for retail promotions"
      }
       , {
      image: "/images/Portfolio/EmailMarketing/VASeooffer.webp",
        title: "Case Study Design",
        category: "Content Marketing",
        desc: "Exclusive pre-sale email teasing early subscribers"
      }
       , {
      image: "/images/Portfolio/EmailMarketing/Ng rest pass.webp",
        title: "Case Study Design",
        category: "Content Marketing",
        desc: "Simple, secure password reset email"
      }
       , {
      image: "/images/Portfolio/EmailMarketing/Trigen (1).webp",
        title: "Case Study Design",
        category: "Content Marketing",
        desc: "Verification email keeping account setup smooth"
      }
       , {
      image: "/images/Portfolio/EmailMarketing/Dummy booking.webp",
        title: "Case Study Design",
        category: "Content Marketing",
        desc: "Booking confirmation email with full details"
      }
       , {
      image: "/images/Portfolio/EmailMarketing/Ng ves.webp",
        title: "Case Study Design",
        category: "Content Marketing",
        desc: "Welcome email guiding new users onward"
      }
        , {
      image: "/images/Portfolio/EmailMarketing/Flashring m.webp",
        title: "Case Study Design",
        category: "Content Marketing",
        desc: "Account verification email, clean and simple"
      }
    ]
  },
    {
    title: "Video Marketing",
    portfolio: [
                  {
  type: "video",
  video: "/images/Portfolio/Videomarkting/dobe.mp4",
  thumbnail: "/images/Portfolio/Videomarkting/dobe.webp",
  title: "Kosmovideo1",
  desc: "Fun recipe video for a refreshing drink",
  color: "#4f8df5"
},
                          {
  type: "video",
  video: "/images/Portfolio/Videomarkting/coral.mp4",
  thumbnail: "/images/Portfolio/Videomarkting/corel.webp",
  title: "Kosmovideo1",
  desc: "Fun recipe video for a refreshing drink",
  color: "#4f8df5"
},
                   {
  type: "video",
  video: "/images/Portfolio/Videomarkting/Kosmovideo1.mp4",
  thumbnail: "/images/Portfolio/Videomarkting/kosmo2 (1).webp",
  title: "Kosmovideo1",
  desc: "Fun recipe video for a refreshing drink",
  color: "#4f8df5"
},

                  {
  type: "video",
  video: "/images/Portfolio/Videomarkting/spacevoug.mp4",
  thumbnail: "/images/Portfolio/Videomarkting/spacevoug.webp",
  title: "SpaceVoug",
  desc: "Sleek showcase inside a modern kitchen",
  color: "#4f8df5"
},
   
           {
  type: "video",
  video: "/images/Portfolio/Videomarkting/kosmovideo.mp4",
  thumbnail: "/images/Portfolio/Videomarkting/kosmo1.webp",
  title: "kosmovideo",
  desc: "Behind-the-scenes reel of team favorites",
  color: "#4f8df5"
},

           {
  type: "video",
  video: "/images/Portfolio/Videomarkting/dobe (1).mp4",
  thumbnail: "/images/Portfolio/Videomarkting/laptop.webp",
  title: "Waliza",
  desc: "Calming retreat video inviting quiet reflection",
  color: "#4f8df5"
},
           {
  type: "video",
  video: "/images/Portfolio/Videomarkting/tab.mp4",
  thumbnail: "/images/Portfolio/Videomarkting/tab.webp",
  title: "Waliza",
  desc: "Calming retreat video inviting quiet reflection",
  color: "#4f8df5"
},
           {
  type: "video",
  video: "/images/Portfolio/Videomarkting/adinath .mp4",
  thumbnail: "/images/Portfolio/Videomarkting/adinath .webp",
  title: "Email Marketing Campaign",
  desc: "Republic Day tribute video with national pride",
  color: "#4f8df5"
},
          {
  type: "video",
  video: "/images/Portfolio/Videomarkting/space1.mp4",
  thumbnail: "/images/Portfolio/Videomarkting/space1.webp",
  title: "Videomarkting",
  desc: "Bold brand video with striking visual statements",
  color: "#4f8df5"
},
  {
  type: "video",
  video: "/images/Portfolio/Videomarkting/poonamvideo.mp4",
  thumbnail: "/images/Portfolio/Videomarkting/poonam.png",
  title: "Videomarkting",
  desc: "Bold brand video with striking visual statements",
  color: "#4f8df5"
},
     {
  type: "video",
 video: "/images/Portfolio/Videomarkting/youtube-.mp4",
  thumbnail: "/images/Portfolio/Videomarkting/youtube-.webp",
  title: "Email Marketing Campaign",
  desc: "Fitness reel capturing a fun yoga moment",
  color: "#4f8df5"
},
  {
  type: "video",
  video: "/images/Portfolio/Videomarkting/virtual.mp4",
  thumbnail: "/images/Portfolio/Videomarkting/virtual.webp",
  title: "Videomarkting",
  desc: "Short video questioning manual SEO habits",
  color: "#4f8df5"
},
  

   {
  type: "video",
  video: "/images/Portfolio/Videomarkting/kosmooffer.mp4",
  thumbnail: "/images/Portfolio/Videomarkting/kosmooffer.webp",
  title: "Videomarkting",
  desc: "Discount promo video for a retail partner",
  color: "#4f8df5"
},
  
   {
  type: "video",
  video: "/images/Portfolio/Videomarkting/ccw.mp4",
  thumbnail: "/images/Portfolio/Videomarkting/ccw.webp",
  title: "Videomarkting",
  desc: "Quick-tip reel on top social tools",
  color: "#4f8df5"
},
     {
  type: "video",
  video: "/images/Portfolio/Videomarkting/50hour.mp4",
  thumbnail: "/images/Portfolio/Videomarkting/50hour.webp",
  title: "Videomarkting",
  desc: "Relatable reel on admin time struggles",
  color: "#4f8df5"
},
     {
  type: "video",
  video: "/images/Portfolio/Videomarkting/youtube-c.mp4",
  thumbnail: "/images/Portfolio/Videomarkting/youtube-c.webp",
  title: "Videomarkting",
  desc: "Guided yoga video for chakra practice",
  color: "#4f8df5"
},   
     {
  type: "video",
  video: "/images/Portfolio/Videomarkting/residally .mp4",
  thumbnail: "/images/Portfolio/Videomarkting/residally .png",
  title: "Videomarkting",
  desc: "Relatable video about homesharing options",
  color: "#4f8df5"
},   
    ]
  }
];
const capabilities = [
  {
    id: "01",
    title: "SEO",
    image: "https://seo-hacker.net/wp-content/themes/seohacker/assets/images/net-banners-resources/search-engine-optimization-services-philippines.jpg",
    color: "#FFE0AB",
  },
  {
    id: "02",
    title: "Social Media Marketing",
    image: "https://www.beingdigitalz.com/blog/wp-content/uploads/2025/01/types-of-social-media-marketing.png",
    color: "#CFE4FF",
  },
  {
    id: "03",
    title: "Content Marketing",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSri-Cj8NrG_a2VT-LakCALG8QGXeuizW9-eVGvJOywdRaS_L4K8or11qTv&s=10",
    color: "#CFF8EF",
  },
  {
    id: "04",
    title: "PPC Advertising",
    image: "https://landingi.com/wp-content/uploads/2024/06/ppc_what_is_cove_vs2.webp",
    color: "#E6DFF8",
  },
  {
    id: "05",
    title: "Conversion Rate Optimization (CRO)",
    image: "https://landingi.com/wp-content/uploads/2024/06/ppc_what_is_cove_vs2.webp",
    color: "#FFECC8",
  },
   {
    id: "06",
    title: "Lead Generation",
    image: "https://landingi.com/wp-content/uploads/2024/06/ppc_what_is_cove_vs2.webp",
    color: "#CFF8EF",
  },
];
const [openIndex, setOpenIndex] = useState(0);

const handleAccordion = (index) => {
  setOpenIndex(openIndex === index ? null : index);
};


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
    autoplay:true,
    infinite: false,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
  
  };

   const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;

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

@media(max-width:991px){

.services{
grid-template-columns:1fr;
}



}
        section.FEATURED {
    padding-top: 60px;
    padding-bottom: 60px;
}
section.work-por {
    padding-top: 60px;
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

a:not([class]) {
    text-underline-offset: .1em
}

a,button,input,textarea {
    --outline-color: currentColor;
    --outline-offset: 0px;
    --outline-size: max(2px, .08em);
    --outline-style: solid
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
    position:absolute;
    left:50%;
    top:50%;
    transform:translate(-50%,-50%);
    width:80px;
    height:80px;
    border-radius:50%;
    background:rgba(0,0,0,.6);
    color:#fff;
    font-size:34px;
    display:flex;
    align-items:center;
    justify-content:center;
}
.portfolio-info{
padding: 20px;
    float: left;
    width: 100%;
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
    --font-size-xxl: clamp(2.44rem, 3.15vi + 1.31rem, 4.14rem);
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

.hero h1 {
    font-size: var(--font-size-xxl);
    margin-bottom: .5em;
    max-width: unset;
    text-wrap: wrap
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
        font-size: 100px;
        width: 90%;
        text-align:left;
    }

    .hero h1 .fill-text__container {
        --fill-text-captured-length: 100cqi;
        --fill-text-available-space: var(--fill-text-captured-length);
        container-type: inline-size;
        flex-grow: 1
    }

    .hero h1 .fill-text__display {
        --fill-text-captured-length: 100cqi;
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
    max-width: 48ch
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

.brand-section{
    padding:60px 0;
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
    font-size:72px;
    font-weight:800;
    margin-bottom:30px;
    color:#111;
}

.card-image{
    width:100%;
    height:180px;
    border-radius:20px;
    object-fit:cover;
    margin-bottom:35px;
}

.capability-card h3{
    font-size:38px;
    line-height:1.2;
    font-weight:800;
    margin-bottom:18px;
    text-transform:uppercase;
    color:#111;
}

.capability-card p{
    font-size:18px;
    line-height:1.8;
    color:#333;
    margin-bottom:35px;
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

.process-card1:hover{

    transform:translateY(-10px);

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

.process-header {
    width: 100%;
    border: 0;
    background: transparent;
    padding: 28px 0;
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
    color: #222;
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
    background: #20252b;
    color: #fff;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    text-decoration: none;
    transition: .35s;
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
        <h1 class="fill-text is-above-fold">
            <span class="fill-text__container">
                <span class="fill-text__display">CREATIVITY THAT <u>PERFORMS.<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200.161 17.886" preserveAspectRatio="none">
                            <path class="underline" fill="none" fill-rule="evenodd" stroke="#d8ff36" stroke-linecap="round" stroke-width="12" d="M6.002 11.884c6.986-2.542 14.678-3.972 30.5-4.721 40.861-1.935 104.946-1.064 157.66 0"></path>
                        </svg></u><br/>RESULTS THAT <u>ACCELERATE.<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200.161 17.886" preserveAspectRatio="none">
                            <path class="underline" fill="none" fill-rule="evenodd" stroke="#d8ff36" stroke-linecap="round" stroke-width="12" d="M6.002 11.884c6.986-2.542 14.678-3.972 30.5-4.721 40.861-1.935 104.946-1.064 157.66 0"></path>
                        </svg></u></span>
            </span>
            <span class="fill-text__reference" aria-hidden="true">CREATIVITY THAT <u>PERFORMS.</u><br/>RESULTS THAT <u>ACCELERATE</u></span>
        </h1>
        <div class="post-rel">
            <p>STRATUM — CRAFTING USER — CENTERED DIGITAL EXPERIENCES SINCE 2015 WITH INNOVATION!</p>
            <div class="circle1">
                <div class="badge c-black">
                    <a href="tel:09177128496" class="stretched-link">
                        <figure class="badge-svg">
                            <svg xmlns="#www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none">
                                <path d="M30.4361 28.1034C25.0662 33.7536 11.3689 20.1796 16.759 14.507C20.0505 11.0429 16.333 7.08546 14.2747 4.17291C10.4115 -1.28673 1.93389 6.25138 2.18949 11.0473C3.00339 26.1729 19.3644 44.0967 35.2074 42.5317C40.1626 42.0429 45.8577 33.0922 40.1716 29.8209C37.3307 28.1841 33.4272 24.9554 30.4361 28.1012M29.0908 12.359L39.1805 2.26932M39.1805 2.26932H31.333M39.1805 2.26932V10.1169" stroke="#d8ff36" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                        </figure>
                    </a>
                </div>
            </div>
        </div>
        <div class="button-container">
            <a href="/work" class="btn btn--outlined">
                See our latest work

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
    </div>
</section>
<section>
    <div class="container">
        <div class="stats-container">
            <div class="stat-item">
                <h2><img src="https://virtualassistant24x7.com/wp-content/uploads/2026/07/meta-facebook-rebranding-name-news_dezeen_2364_col_hero2.webp"/></h2>
                <span>Ads Partner</span>
            </div>
            <div class="stat-item">
                <h2><img src="https://virtualassistant24x7.com/wp-content/uploads/2026/07/images-20.webp"/></h2> <span>Business Partner</span>

            </div>



            <div class="stat-item">
                <h2><img src="https://virtualassistant24x7.com/wp-content/uploads/2026/07/semrush-seo-marketing.webp"/></h2>
                <span>Agency Partner</span>
            </div>


            <div class="stat-item">
                <h2><img src="https://virtualassistant24x7.com/wp-content/uploads/2026/07/linkedin-logo-png_seeklogo-393965.webp"/></h2>
                <span>Marketing Partner</span>
            </div>


        </div>
    </div>

</section>
 <section className="capabilities-section">
      <div className="container">

        <div className="section-headindg">
          <h2 className="not-above-fold">
            RESULTS-DRIVEN
DIGITAL 
            <br /><strong>MARKETING SERVICES</strong>
            
          </h2>
        </div>

        <Slider {...services} className="pp-slider service-slider">
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
                />

                <h3>{item.title}</h3>

               

              </div>
            </div>
          ))}
        </Slider>

      </div>
    </section>
<section class="FEATURED">
    <div class="container">
        <div class="title-bar">
            <div class="title-bar__text">
                <h2 class="not-above-fold">FEATURED <strong>WORK</strong></h2>
            </div>

        </div>

        <div class="cards-flex">
            <div id="block_10866" data-block-id="10866" data-block-type="App\Blocks\WorkItem\WorkItem" class="block" style={{ opacity: 1 }}>
                <div class="card card--work">
                    <div class="card__img">
                        <img src="https://virtualassistant24x7.com/wp-content/uploads/2026/02/ad-1.webp"/>
                    </div>

                    <div class="card__body">
                        <h3 class="card__body__title is-above-fold">MG Motor UK</h3>

                        <div class="card__body__footer">
                            <p>Brewing Up a Simpler Way to Talk Powertrains</p>

                            <a href="/work/mg-milk-grounds" class="stretched-link">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <g fill="none" fill-rule="evenodd">
                                        <path d="M0 0h24v24H0z"></path>
                                        <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                                            <path d="M17 7 7 17"></path>
                                            <path d="M8 7h9v9"></path>
                                        </g>
                                    </g>
                                </svg> </a>
                        </div>
                    </div>
                </div>





            </div>
            <div id="block_10867" data-block-id="10867" data-block-type="App\Blocks\WorkItem\WorkItem" class="block" style={{ opacity: 1 }}>
                <div class="card card--work">
                    <div class="card__img">
                        <img src="https://virtualassistant24x7.com/wp-content/uploads/2026/07/c-1.webp"/>
                    </div>

                    <div class="card__body">
                        <h3 class="card__body__title is-above-fold">Visit Jersey</h3>

                        <div class="card__body__footer">
                            <p>Bergerac: The Case Reopened</p>

                            <a href="/work/visit-jersey" class="stretched-link">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <g fill="none" fill-rule="evenodd">
                                        <path d="M0 0h24v24H0z"></path>
                                        <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                                            <path d="M17 7 7 17"></path>
                                            <path d="M8 7h9v9"></path>
                                        </g>
                                    </g>
                                </svg> </a>
                        </div>
                    </div>
                </div>





            </div>
            <div id="block_10868" data-block-id="10868" data-block-type="App\Blocks\WorkItem\WorkItem" class="block" style={{ opacity: 1 }}>
                <div class="card card--work">
                    <div class="card__img">
                        <img src="https://virtualassistant24x7.com/wp-content/uploads/2026/07/Untitled-design-2026-07-02T183542.940.png"/>
                    </div>

                    <div class="card__body">
                        <h3 class="card__body__title is-above-fold">Diamond Heaven</h3>

                        <div class="card__body__footer">
                            <p>Driving Footfall for an Award-Winning Jeweller</p>

                            <a href="/work/diamond-heaven" class="stretched-link">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <g fill="none" fill-rule="evenodd">
                                        <path d="M0 0h24v24H0z"></path>
                                        <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                                            <path d="M17 7 7 17"></path>
                                            <path d="M8 7h9v9"></path>
                                        </g>
                                    </g>
                                </svg> </a>
                        </div>
                    </div>
                </div>





            </div>
        </div>
    </div>
</section>
 
<section class="work-por">
    <div class="container">
        <div class="title-bar">
            <div class="title-bar__text">
                <h2 class="not-above-fold">OUR <strong>WORK</strong></h2>
            </div>
            <div className="services">
   <div className="left">

        {data.map((item, index) => (
          <button
            key={index}
            className={active === index ? "tab active" : "tab"}
          onClick={() => {
  setActive(index);
}}
          >
            <span>{item.title}</span>

            <div className="arrow">
              →
            </div>
          </button>
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
      <div className="portfolio-card">

{item.type === "video" ? (

<div
  className="portfolio-video"
  onMouseEnter={() => setHoveredIndex(index)}
  onMouseLeave={() => setHoveredIndex(null)}
onClick={() => setPreviewIndex(index)}
>
  {hoveredIndex === index ? (
    <video
      src={item.video}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      className="hover-video"
    />
  ) : (
    <img
      src={item.thumbnail}
      alt={item.title}
      className="hover-image"
    />
  )}

  <div className="play-btn">▶</div>
</div>
) : (
  <img
    src={item.image}
    alt={item.title}
   onClick={() => setPreviewIndex(index)}
    className="portfolio-img"
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
<section class="brand-section">
  <div class="container">

    <div class="top-content">
      <h2>
        WE HELP BRANDS AND COMPANIES WITH 
        <strong> TAILORED SOLUTIONS.</strong>
      </h2>

      <a href="#" class="cta-btn">
        Get Started
        <span>↗</span>
      </a>
    </div>

    <div class="grid-layout">

     
      <div class="big-image card">
        <img src="https://virtualassistant24x7.com/wp-content/uploads/2026/07/digit.webp" alt=""/>
      </div>

  
      <div class="middle-column">

        <div class="card info-card">
          <h3>
            REAL IMPACT. REAL GROWTH.
            STRATUM DELIVERS
          </h3>

          <div class="avatars">
            <img src="https://stratum-demo.netlify.app/assets/images/testimonial/client-3.png" alt=""/>
            <img src="https://stratum-demo.netlify.app/assets/images/testimonial/client-2.png" alt=""/>
            <img src="https://stratum-demo.netlify.app/assets/images/testimonial/client-4.png" alt=""/>
            <img src="https://stratum-demo.netlify.app/assets/images/testimonial/client-4.png" alt=""/>
            <span class="plus">+</span>
          </div>
        </div>

        <div class="card image-card">
          <h3>
            WHERE STRATEGY, DESIGN,
            MOTION AND DEVELOPMENT MEET
          </h3>
<div class="hjeight-o">
    <img src="https://virtualassistant24x7.com/wp-content/uploads/2026/07/sss-1.webp"></img>
</div>
      
        </div>

      </div>


      <div class="right-column">

        <div class="card stats-card">
          <h3>
            CLIENTS SEE MEANINGFUL DIGITAL
            ENGAGEMENT GROWTH ACROSS
            PLATFORMS AND AUDIENCES.
          </h3>

          <div class="number">
            86<span>%</span>
          </div>

          <p>Retention Rate</p>
        </div>

        <div class="card review-card">

          <h3>
            TRUSTED BY CLIENTS WORLDWIDE
            FOR LASTING RESULTS
          </h3>

          <div class="rating">
            <strong>4.9/5</strong>

            <div class="stars">
              ★★★★★
            </div>
          </div>

        </div>

      </div>

    </div>

  </div>
</section>
<section class="team-section">
    <div class="container">

        <div class="team-top">

            <div class="left-content">

 

                <h2>
                    DESIGN, DEVELOP,
                    <strong>INNOVATE</strong>
                </h2>

                <p>
                   Our team in action driving creative growth forward.
                </p>

           

            </div>

         

        </div>
<div>
      <Slider {...teamSettings} className="pp-slider">

        {teamMembers.map((member, index) => (

            <div className="slide-item" key={index}>

                <div className="team-card">

                    <img src={member.image} alt={member.name} />

                    <div className="overlay"></div>

                    <div className="team-info">

                        <h4>{member.name}</h4>

                        <p>{member.role}</p>

                    </div>

                </div>

            </div>

        ))}

    </Slider>

</div>

  

    </div>
</section>
<section class="process-section reval reval-bottom">

    <div class="container">
    <h2>
                    The Road to 
                    <strong>Success</strong>
                </h2>
        <div class="process-grid">

            <div class="process-card">

                <span class="stepss">STEP 01</span>

                <div class="icon">
                    <img src="https://stratum-demo.netlify.app/assets/images/icons/icon-3.png" alt="Concept Icon"></img>
                </div>

                <h3>Concept</h3>

                <p>
                    We transform ideas into clear concepts by understanding your
                    goals, audience and vision — laying a strong foundation.
                </p>

            </div>

            <div class="process-card">

                <span class="stepss">STEP 02</span>

                <div class="icon">
                <img src="https://stratum-demo.netlify.app/assets/images/icons/icon-4.png" alt="Design Icon"></img>
                </div>

                <h3>Design</h3>

                <p>
                    We create thoughtful, user-centric designs that balance
                    aesthetics and usability to deliver meaningful experiences.
                </p>

            </div>

            <div class="process-card">

                <span class="stepss">STEP 03</span>

                <div class="icon">
                    <img src="https://stratum-demo.netlify.app/assets/images/icons/icon-4.png" alt="Development Icon"></img>
                </div>

                <h3>Development</h3>

                <p>
                    We build fast, scalable and reliable solutions using modern
                    technologies turning designs into powerful products.
                </p>

            </div>

            <div class="process-card">

                <span class="stepss">STEP 04</span>

               <div class="icon">
                    <img src="https://stratum-demo.netlify.app/assets/images/icons/icon-4.png" alt="Development Icon"></img>
                </div>

                <h3>Launch</h3>

                <p>
                    We deploy, test and optimize your product to ensure a smooth
                    launch and long-term performance.
                </p>

            </div>

        </div>

    </div>

</section>
    <section className="work-marquee">

      <div className="marquee">

        <div
          className="marquee-track"
          ref={trackRef}
        >
          {[...items, ...items].map((item, index) => (
            <div className="marquee-card" key={index}>

              {item.type === "image" ? (
                <img src={item.src} alt="" />
              ) : (
                <video
                  src={item.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              )}

            </div>
          ))}

        </div>

      </div>

    </section>
<section className="process-section-content">
      <div className="container">

        <div className="process-content">

          {/* LEFT */}

          <div className="process-left">
<h2>
              NO GUESSWORK,
              <br />
              JUST A CLEAR PATH
              |<strong>
              FROM IDEAS
      
              TO RESULTS. </strong>
            </h2>

            <div className="process-image">

              <img
                src="https://landingi.com/wp-content/uploads/2024/06/ppc_what_is_cove_vs2.webp"
                alt=""
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

                  <svg
                    className="process-arrow"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M6 9l6 6 6-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                </button>

                <div className="process-contentd">

                  <p>{item.content}</p>

                </div>

              </div>

            ))}

            <a href="/contact" className="process-btn">

              Get In Touch

              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
              >
                <path
                  d="M7 17L17 7M17 7H8M17 7V16"
                  fill="none"
                  stroke="white"
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
{previewIndex !== null && (
  <div
    className="image-popup"
    onClick={() => setPreviewIndex(null)}
  >
    <div
      className="popup-content"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        className="popup-close"
        onClick={() => setPreviewIndex(null)}
      >
        ×
      </button>

      <Slider
        initialSlide={previewIndex}
        infinite
        arrows
        dots={false}
        slidesToShow={1}
        slidesToScroll={1}
      >
        {activePortfolio.map((item, i) => (
          <div key={i}>
            {item.type === "video" ? (
              <video
                src={item.video}
                controls
                autoPlay={i === previewIndex}
                playsInline
                style={{
                  width: "100%",
                  maxHeight: "85vh",
                  borderRadius: "18px",
                  background: "#000",
                }}
              />
            ) : (
              <img
                src={item.image}
                alt={item.title}
                style={{
                  width: "100%",
                  maxHeight: "85vh",
                  objectFit: "contain",
                  borderRadius: "18px",
                }}
              />
            )}
          </div>
        ))}
      </Slider>
    </div>
  </div>
)}

    </>
  );
}