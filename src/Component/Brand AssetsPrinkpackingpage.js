import React from "react";

const BrandAssets = () => {
  return (
    <section className="BrandAssetS" style={{ background: "radial-gradient(circle at 20% 20%, #1e3a8a, #020617)", color: "#fff"}}>
       <div className="container">
         <div className="sectionHeading text-center mb-4"><h2 style={{ textAlign: "center",color:"#fff"}}>
  Your Brand Assets Are Protected From Brief to Print
</h2></div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)", // ✅ FIXED 2 PER ROW
        gap: "20px"
      }}>

        {/* Box 1 */}
        <div style={boxStyle} className="box-card-3d">
           <div className="icon-svg">    {/* SVG */}
   <svg xmlns="http://www.w3.org/2000/svg" 
  width="40" height="24" 
  viewBox="0 0 24 24" 
  fill="none" 
  stroke="currentColor" 
  stroke-width="1" 
  stroke-linecap="round" 
  stroke-linejoin="round" 
  class="lucide w-6 h-6 text-primary">


  <path d="M14 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7z"/>
  <path d="M14 2v5h5"/>

  <rect x="9" y="13" width="6" height="5" rx="1"/>
  <path d="M10 13v-1a2 2 0 0 1 4 0v1"/>

</svg></div>
          <h3> NDA & IP Protection</h3>
          <p> Every designer signs a mutual NDA before the first brief is shared. Your brand assets, dielines, packaging strategy and campaign files are never shared, reused or retained after the project closes. 
</p>
        </div>

        {/* Box 2 */}
        <div style={boxStyle } className="box-card-3d">
          <div className="icon-svg">   
<svg xmlns="http://www.w3.org/2000/svg" 
  width="40" height="40" 
  viewBox="0 0 24 24" 
  fill="none" 
  stroke="currentColor" 
  stroke-width="1" 
  stroke-linecap="round" 
  stroke-linejoin="round" 
  class="lucide w-6 h-6 text-primary">


  <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"/>


  <rect x="9" y="11" width="6" height="5" rx="1"/>
  <path d="M10 11v-1a2 2 0 0 1 4 0v1"/>

</svg>

</div>
          <h3>Data & File Security 
</h3>
          <p>All project files, brand guidelines and artwork are handled on password-protected and encrypted workstations. We do not use personal devices or unsecured cloud storage for any client print or packaging assets. 

</p>
        </div>

        {/* Box 3 */}
        <div style={boxStyle} className="box-card-3d">
      <div className="icon-svg">   
<svg xmlns="http://www.w3.org/2000/svg" 
  width="40" height="40" 
  viewBox="0 0 24 24" 
  fill="none" 
  stroke="currentColor" 
  stroke-width="1" 
  stroke-linecap="round" 
  stroke-linejoin="round" 
  class="lucide w-6 h-6 text-primary">


  <circle cx="12" cy="12" r="9"/>
  <path d="M12 7v5l3 2"/>


  <path d="M4 12a8 8 0 0 1 3-6"/>
  <path d="M20 12a8 8 0 0 1-3 6"/>

</svg></div>
          <h3>Timezone Alignment 
</h3>
          <p>Our designers operate on extended overlap windows covering US EST, CST, PST & UK GMT. Print deadlines, pre-press reviews and approval cycles which runs without the lag you experience with typical offshore vendors. 

</p>
        </div>

        {/* Box 4 */}
        <div style={boxStyle} className="box-card-3d">
      <div className="icon-svg">    {/* SVG */}

<svg xmlns="http://www.w3.org/2000/svg" 
  width="40" height="40" 
  viewBox="0 0 24 24" 
  fill="none" 
  stroke="currentColor" 
  stroke-width="1" 
  stroke-linecap="round" 
  stroke-linejoin="round" 
  class="lucide w-6 h-6 text-primary">

  
  <circle cx="12" cy="8" r="4"/>
  <path d="M4 20a8 8 0 0 1 16 0"/>


  <path d="M12 14l1.5 3 3.5.5-2.5 2.5.6 3.5-3.1-1.7-3.1 1.7.6-3.5L7 17.5l3.5-.5Z"/>

</svg>

 </div>
          <h3>Dedicated Account Manager 
</h3>
          <p>You are never passed between teams or ticket queues. A single dedicated account manager owns your project from onboarding through delivery. We coordinate the designer, managing revisions and escalating pre-press issues on your behalf. 
</p>
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

export default BrandAssets;