import React from "react";

const IndustriesSection = () => {
  return (
    <section style={{ background: "radial-gradient(circle at 20% 20%, #1e3a8a, #020617)", color: "#fff", padding: "60px 60px" }}>
       <div className="container">
         <div className="sectionHeading text-center mb-4"><h2 style={{ textAlign: "center",color:"#fff"}}>
       Transforming Industries Through 3D Animation Assets</h2><div className="para">3D animation assets have become a necessity for industries that need visualization and emotional storytelling with precision. From demonstrations for medical devices to creating walkthroughs for real estate businesses, 3D animation has made it easier for brands to connect with their audience through simplified concepts driving in higher consumer engagement than ever. 
</div></div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)", // ✅ FIXED 3 PER ROW
        gap: "20px"
      }}>

        {/* Box 1 */}
        <div style={boxStyle} className="box-card-3d">
           <div className="icon-svg">    {/* SVG */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg></div>
          <h3>E-Commerce</h3>
          <p> Interactive 3D product viewers have helped customers explore products 360° with attention to detail on texture. This builds confidence and reduces returns and shows an overall increase in add-to-cart conversions.</p>
        </div>

        {/* Box 2 */}
        <div style={boxStyle } className="box-card-3d">
          <div className="icon-svg">   
   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-building2 w-6 h-6 text-primary"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path><path d="M10 6h4"></path><path d="M10 10h4"></path><path d="M10 14h4"></path><path d="M10 18h4"></path></svg></div>
          <h3>Real Estate</h3>
          <p>Photorealistic 3D walkthroughs have changed how customers see the floor plans. This brings the property to life before the construction even begins. 
</p>
        </div>

        {/* Box 3 */}
        <div style={boxStyle} className="box-card-3d">
      <div className="icon-svg">   
   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart-pulse w-6 h-6 text-primary"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path><path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"></path></svg></div>
          <h3>Healthcare</h3>
          <p>Our 3D animation specialists help visualize a complex procedure or a medical concept while maintaining high anatomical accuracy. These visuals are helpful in training professionals and educating patients more effectively.
</p>
        </div>

        {/* Box 4 */}
        <div style={boxStyle} className="box-card-3d">
      <div className="icon-svg">    {/* SVG */}
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-factory w-6 h-6 text-primary"><path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path><path d="M17 18h1"></path><path d="M12 18h1"></path><path d="M7 18h1"></path></svg></div>
          <h3>Manufacturing</h3>
          <p>3D animation helps in showcasing how the machinery works through detailed views. This makes it easier to highlight technical features and safety mechanisms. 
</p>
        </div>

        {/* Box 5 */}
        <div style={boxStyle} className="box-card-3d">
     <div className="icon-svg">    {/* SVG */}
   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plane w-6 h-6 text-primary"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"></path></svg></div>
          <h3>Automotive & Aerospace</h3>
          <p>Digital twin usages have made it easier to virtually test and have a realistic product visualization. Brands can now easily showcase performance, design and ergonomics with the benefits of high-end visuals. 
</p>
        </div>

        {/* Box 6 */}
        <div style={boxStyle} className="box-card-3d">
     <div className="icon-svg">    {/* SVG */}
 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-graduation-cap w-6 h-6 text-primary"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path><path d="M22 10v6"></path><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path></svg></div>
          <h3>Edtech</h3>
          <p>Interactive 3D simulations have made learning more immersive for users. Utilizing 3D for educational assets has helped in improving retention and offers a safe way to train on complex or high-risk systems. 
.</p>
        </div>

      </div>
      </div>
    </section>
  );
};

const boxStyle = {
 
  border: "1px solid rgba(34,211,238,0.2)",
  borderRadius: "12px",
  padding: "20px"
};

const Icon = () => (
  <div style={{ marginBottom: "10px" }}>
    <svg width="24" height="24" stroke="#22d3ee" fill="none" strokeWidth="2">
      <circle cx="12" cy="12" r="8" />
    </svg>
  </div>
);

export default IndustriesSection;