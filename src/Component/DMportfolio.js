import React, { useState, useRef ,useEffect} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const DMportfolio = () => {

    const settings = {
    arrows: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,

  };

     const data = [

    {
    title: "Social Media Posts",
    portfolio: [
      {
        image: "/images/Portfolio/SocialPost/adinath (4) (1).webp",
        title: "adinath",
        category: "Social Media",
        desc: "Mixed technical tips with light memes for a busbar manufacturer",
        color:"#dce2ff",
      },
      {
        image: "/images/Portfolio/SocialPost/CCW Festive.webp",
        title: "Festive greetings across major global holidays",
        category: "CCW Festive",
        desc: "Created festive greeting posts for a workforce solutions brand",
          color:" #d6a1c9",
      },
      {
        image: "/images/Portfolio/SocialPost/CCW1 (1).webp",
        title: "CCW1 (1)",
        category: "CCW1 (1)",
        desc: "Designed LinkedIn carousels to build credibility for a staffing agency",
         color:"#ceb2b2",
      },
      {
        image: "/images/Portfolio/SocialPost/Cosmo clay dishes.webp",
        title: "Virtual",
        category: "Appetizing food photography for recipes",
        desc: "Shot recipe photography for a BBQ sauce brand",
         color:"#c2ffe2",
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
        image: "/images/Portfolio/SocialPost/kosmos clay OPffer.webp",
        title: "Citadel",
        category: "Social Media",
        desc: "Ran seasonal discount promotions for a BBQ sauce brand",
         color:"#c976a6",
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
        image: "/images/Portfolio/SocialPost/Melanie Wenzel (1).webp",
        title: "Citadel",
        category: "Social Media",
        desc: "Captured calming lifestyle shots for a wellness retreat's promotion",
         color:"#9f1fd1",
      }
      ,
         {
        image: "/images/Portfolio/SocialPost/NG-.webp",
        title: "Citadel",
        category: "Social Media",
        desc: "Delivered patient awareness posts for a vascular health clinic",
         color:"#1fd1d1",
      }
      ,
         {
        image: "/images/Portfolio/SocialPost/residally (2).webp",
        title: "Citadel",
        category: "Social Media",
        desc: "Produced educational carousels explaining benefits for a home-sharing platforms",
         color:"#1fd128",
      }
       ,
         {
        image: "/images/Portfolio/SocialPost/residally.webp",
        title: "Citadel",
        category: "Social Media",
        desc: "Designed lifestyle visuals for a home-sharing platform promoting experience ",
         color:"#d11f1f",
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
        image: "/images/Portfolio/SocialPost/spacevogues Furniture 2 (2).webp",
        title: "Citadel",
        category: "Social Media",
        desc: "Captured luxury interior photography for an interior design firm",
         color:"#1f99d1",
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
    portfolio: [
                  {
  type: "video",
  video: "/images/Portfolio/Videomarkting/dobe.mp4",
  thumbnail: "/images/Portfolio/Videomarkting/dobe.webp",
  title: "Kosmovideo1",
  desc: "Produced a software tutorial video for a creative tools platform",
  color: "#4f8df5"
},
                          {
  type: "video",
  video: "/images/Portfolio/Videomarkting/coral.mp4",
  thumbnail: "/images/Portfolio/Videomarkting/corel.webp",
  title: "Kosmovideo1",
  desc: "Created a tech walkthrough video for a productivity tools brand",
  color: "#4f8df5"
},
                   {
  type: "video",
  video: "/images/Portfolio/Videomarkting/Kosmovideo1.mp4",
  thumbnail: "/images/Portfolio/Videomarkting/kosmo2 (1).webp",
  title: "Kosmovideo1",
  desc: "Filmed a fun recipe video for a BBQ sauce brand",
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
  video: "/images/Portfolio/Videomarkting/kosmovideo.mp4",
  thumbnail: "/images/Portfolio/Videomarkting/kosmo1.webp",
  title: "kosmovideo",
  desc: "Put together a behind-the-scenes reel for a BBQ sauce brand",
  color: "#4f8df5"
},

           {
  type: "video",
  video: "/images/Portfolio/Videomarkting/dobe (1).mp4",
  thumbnail: "/images/Portfolio/Videomarkting/laptop.webp",
  title: "Waliza",
  desc: "Filmed a talking-head video explaining services for a workforce solutions brand",
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
  video: "/images/Portfolio/Videomarkting/adinath .mp4",
  thumbnail: "/images/Portfolio/Videomarkting/adinath .webp",
  title: "Email Marketing Campaign",
  desc: "Produced a Republic Day tribute video for a busbar manufacturer",
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
  video: "/images/Portfolio/Videomarkting/poonamvideo.mp4",
  thumbnail: "/images/Portfolio/Videomarkting/poonam.png",
  title: "Videomarkting",
  desc: "Produced an explainer video for a workforce solutions brand's offerings",
  color: "#4f8df5"
},
     {
  type: "video",
 video: "/images/Portfolio/Videomarkting/youtube-.mp4",
  thumbnail: "/images/Portfolio/Videomarkting/youtube-.webp",
  title: "Email Marketing Campaign",
  desc: "Captured a fun fitness reel for a yoga studio",
  color: "#4f8df5"
},
  {
  type: "video",
  video: "/images/Portfolio/Videomarkting/virtual.mp4",
  thumbnail: "/images/Portfolio/Videomarkting/virtual.webp",
  title: "Videomarkting",
  desc: "Made a short video questioning manual SEO for an SEO service provider",
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
  video: "/images/Portfolio/Videomarkting/ccw.mp4",
  thumbnail: "/images/Portfolio/Videomarkting/ccw.webp",
  title: "Videomarkting",
  desc: "Created a quick-tip reel on social tools for a marketing agency",
  color: "#4f8df5"
},
     {
  type: "video",
  video: "/images/Portfolio/Videomarkting/50hour.mp4",
  thumbnail: "/images/Portfolio/Videomarkting/50hour.webp",
  title: "Videomarkting",
  desc: "Made a relatable reel on admin struggles for an SEO service provider",
  color: "#4f8df5"
},
     {
  type: "video",
  video: "/images/Portfolio/Videomarkting/youtube-c.mp4",
  thumbnail: "/images/Portfolio/Videomarkting/youtube-c.webp",
  title: "Videomarkting",
  desc: "Filmed a guided yoga video for a yoga app",
  color: "#4f8df5"
},   
     {
  type: "video",
  video: "/images/Portfolio/Videomarkting/residally .mp4",
  thumbnail: "/images/Portfolio/Videomarkting/residally .png",
  title: "Videomarkting",
  desc: "Produced a relatable video on homesharing for a home-sharing platform",
  color: "#018d30"
},   
    ]
  },
  {

    
    title: "Content & Marketing",
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
    title: "Email Marketing",
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
    portfolio: [
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
      image: "/images/Portfolio/Imapct/Impact (10 ).webp",
        title: "Case Study Design",
        category: "Content Marketing",
        desc: "Tracked search impression growth for an SEO service provider "
      },  
         {
      image: "/images/Portfolio/Imapct/Impact 11 (1).webp",
        title: "Case Study Design",
        category: "Content Marketing",
        desc: "Reported YouTube channel growth for a vascular health clinic"
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
      image: "/images/Portfolio/Imapct/Impact 5.webp",
        title: "Case Study Design",
        category: "Content Marketing",
        desc: "Tracked AI and organic search traffic "
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
    
];

const [hoveredIndex, setHoveredIndex] = useState(null);
  const slider = useRef(null);
  const [active, setActive] = useState(0);
  const [preview, setPreview] = useState(null);
  const [previewIndex, setPreviewIndex] = useState(null);
const activeImages = data[active].images;
const activePortfolio = data[active]?.portfolio || [];
const currentItem =
  previewIndex !== null ? activePortfolio[previewIndex] : null;
  const [hoveredVideo, setHoveredVideo] = useState(null);
  useEffect(() => {
  const handleKey = (e) => {
    if (e.key === "Escape") {
      setPreviewIndex(null);
    }
  };

  window.addEventListener("keydown", handleKey);

  return () => {
    window.removeEventListener("keydown", handleKey);
  };
}, []);

return (
    <>
       <style>{`   /* ==========================
   OUR WORK SECTION
========================== */
section.work-por .services {
    display: grid;
    grid-template-columns: 300px 1fr;
    gap: 20px;
    align-items: center;
}
section.work-por .left {
    display: flex;
    flex-direction: column;
    gap: 8px;
}
section.work-por .tab.active {
    background: #ffc2c2;
    color: #000;
}
    .mobile-slider {
    display: none;
}
   .DM-service-page  {
    background: #e7ecfb;
    padding-bottom:100p;x
}
    .portfolio-popup{
position:fixed;
left:0;
top:0;
width:100%;
height:100%;
background:rgba(0,0,0,.92);
display:flex;
justify-content:center;
align-items:center;
z-index:999999;
padding:40px;
animation:fadeIn .3s;
}

.popup-content{
max-width:1100px;
width:100%;
position:relative;
}

.popup-content img,
.popup-content video{
width:100%;
max-height:90vh;
object-fit:contain;
border-radius:18px;
display:block;
}

.popup-close{
position:absolute;
top:-45px;
right:0;
width:42px;
height:42px;
border:none;
border-radius:50%;
background:#fff;
cursor:pointer;
font-size:22px;
font-weight:700;
}

@keyframes fadeIn{
from{
opacity:0;
}
to{
opacity:1;
}
}
.DM-service-page  .tab.active .arrow {
    background: #000;
    color: #fff;
}
    .DM-service-page .portfolio-card {
    overflow: hidden;
    margin: 10px;
}
    .DM-service-page .portfolio-card img {
    width: 100%;
}
        .DM-service-page  .portfolio-info p {
        margin-bottom:0px;
       }
    .DM-service-page  .portfolio-info {
    padding: 20px;
    float: left;
    width: 100%;
        padding: 20px;
    margin: 22px 0 0;
    font-size: 15px;
    line-height: 1.6;
     color: #000;
    background: #ffffffc9;);
    border-left: 3px solid #ffc2c2;
    padding: 18px 20px;
    border-radius: 0 12px 12px 0;
}
    .portfolio-video {
    width: 100%;
    float: left;
}
    .portfolio-video  video{
    width: 100%;
    float: left;
}
    .DM-service-page .right img {
    width: 100%;
    border-radius: 22px;
}
    .portfolio-video{
    position:relative;
    overflow:hidden;
    border-radius:18px;
}

.hover-image,
.hover-video{
    width:100%;
    display:block;
    border-radius:18px;
}

.hover-image{
    transition:opacity .3s;
}

.hover-image.hide{
    opacity:0;
}

.hover-video{
    position:absolute;
    inset:0;
    width:100%;
    height:100%;
    object-fit:cover;
    opacity:0;
    transition:.3s;
}

.hover-video.show{
    opacity:1;
}

.mobile-video{
    position:static;
    opacity:1 !important;
    width:100%;
    height:auto;
}

@media(max-width:768px){

.hover-image{
    display:none;
}

.hover-video{
    position:static;
    opacity:1;
}

.play-btn{
    display:none;
}

}
    .portfolio-video img{
    width:100%;
    display:block;
    transition:.35s ease;
}

.portfolio-video:hover img{
    transform:scale(1.03);
}
.DM-service-page  .arrow {
    width: 42px;
    height: 42px;
    border-radius: 50%;
    background: #2a2a2a;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: .3s;
    font-size: 20px;
}
    .DM-service-page  .tab {
    width: 100%;
    height: 60px;
    border: none;
    border-radius: 18px;
    background: #333;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 28px;
    cursor: pointer;
    transition: .35s;
    font-size: 18px;
    font-weight: 600;
}
   .DM-service-page  button.tab {
    text-transform: uppercase;
    font-size: 15px;
    font-family: inherit;
    font-family: "Lexend Deca", sans-serif;
}
    .DM-service-page .right {
    width: 100%;
    min-width: 0;
}
    @media (max-width: 767px) {
    .mobile-slider {
        display: block;
        margin: 20px 0 70px;
    }
        section.work-por .services {
    /* grid-template-columns: revert; */
    display: block;
    margin-top: 40px;
}
            .DM-service-page .right {
        display: none;
    }
            section.work-por .slick-dots li {
        /* margin: 1px; */
        width: 10px;
        height: 10px;
    }
            section.work-por .pp-slider .slick-dots li button {
        width: 0.8pc;
        height: 0.8pc;
    }
            section.work-por ul.slick-dots {
        display: block !important;
    }
}
`}</style>
 
<section class="work-por DM-service-page ">
    <div class="container">
        <div class="title-bar">
            <div class="title-bar__text">
                <h2 class="not-above-fold">OUR <strong>WORK</strong></h2>
            </div>

            
            <div className="services">
<div className="left">
  {data.map((item, index) => (
    <div key={index} className="tab-wrapper">

      <button
        className={active === index ? "tab active" : "tab"}
        onClick={() => setActive(index)}
      >
        <span>{item.title}</span>

        <div className="arrow">→</div>
      </button>

      {/* Mobile Slider */}
      {active === index && (
        <div className="mobile-slider">
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
                <div className="portfolio-card">

                  {portfolioItem.type === "video" ? (

                    <div
                      className="portfolio-video"
                      onMouseEnter={() => setHoveredIndex(i)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      onClick={() => setPreviewIndex(i)}
                    >
                      {hoveredIndex === i ? (
                        <video
                          src={portfolioItem.video}
                          autoPlay
                          muted
                          loop
                          playsInline
                          preload="metadata"
                          className="hover-video"
                        />
                      ) : (
                        <img
                          src={portfolioItem.thumbnail}
                          alt={portfolioItem.title}
                          className="hover-image"
                        />
                      )}

                      <div className="play-btn">▶</div>
                    </div>

                  ) : (

                    <img
                      src={portfolioItem.image}
                      alt={portfolioItem.title}
                      onClick={() => setPreviewIndex(i)}
                      className="portfolio-img"
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
    <div className="portfolio-card">

      {item.type === "video" ? (
        <div
          className="portfolio-video"
          onMouseEnter={(e) => {
            if (window.innerWidth > 768) {
              setHoveredIndex(index);
              e.currentTarget.querySelector("video")?.play();
            }
          }}
          onMouseLeave={(e) => {
            if (window.innerWidth > 768) {
              setHoveredIndex(null);

              const video = e.currentTarget.querySelector("video");
              if (video) {
                video.pause();
                video.currentTime = 0;
              }
            }
          }}
          onClick={() => setPreviewIndex(index)}
        >

          {/* Desktop */}
          {window.innerWidth > 768 && (
            <img
              src={item.thumbnail}
              alt={item.title}
              className={`hover-image ${
                hoveredIndex === index ? "hide" : ""
              }`}
            />
          )}

          <video
            src={item.video}
            poster={item.thumbnail}
            muted
            loop
            playsInline
            preload="metadata"
            autoPlay={window.innerWidth <= 768}
            className={`hover-video ${
              window.innerWidth <= 768 || hoveredIndex === index
                ? "show"
                : ""
            }`}
          />

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

      <div
        className="portfolio-info"
        style={{
          borderLeft: `5px solid ${item.color || "#ffc2c2"}`,
        }}
      >
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
{previewIndex !== null && currentItem && (
  <div
    className="portfolio-popup"
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
        ✕
      </button>

      {currentItem.type === "video" ? (
        <video
          src={currentItem.video}
          controls
          autoPlay
          playsInline
          style={{
            width: "100%",
            maxHeight: "90vh",
            borderRadius: "18px",
          }}
        />
      ) : (
        <img
          src={currentItem.image}
          alt={currentItem.title}
        />
      )}

      <div className="popup-info">
        <h3>{currentItem.title}</h3>
        <p>{currentItem.desc}</p>
      </div>
    </div>
  </div>
)}
 </>
  );
};

export default DMportfolio;