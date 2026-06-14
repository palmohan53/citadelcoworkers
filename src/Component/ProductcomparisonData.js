import React from "react";


const ProductDesignerComparison = () => {

  const comparisonData = [
    {
      factor: "Cost",
      inHouse: "High — salary, benefits + tools",
      offshore: "Pay only for work done, starting at $8/hr",
    },
    {
      factor: "Hiring Time",
      inHouse: "30–60 days average",
      offshore: "24–48 hours to match vetted designers",
    },
    {
      factor: "Flexibility",
      inHouse: "Fixed hours & fixed scope",
      offshore: "Scale up or down based on project needs",
    },
    {
      factor: "Scalability",
      inHouse: "Rehiring for every growth phase",
      offshore: "On-demand team expansion, no overhead",
    },
    {
      factor: "Design System Expertise",
      inHouse: "Depends on individual hire",
      offshore: "Certified professionals with documented delivery",
    },
    {
      factor: "Accessibility",
      inHouse: "Often deprioritised",
      offshore: "WCAG 2.1 AA standard on every project",
    },
  ];

  return (


   
    <section className="comparison-section">

      <div className="container">
<div class="sectionHeading text-center mb-5"><h2>In-House Vs Offshore Product Designers:  The Smarter Choice?</h2><p>When evaluating how to scale product design, businesses typically choose between building an in-house team or partnering with an offshore product design specialist. 
</p></div>
     <div class="comparison-table">


      <div class="table-row table-head">
        <div class="table-cell factor">Factor</div>
        <div class="table-cell">In-House Designer</div>
        <div class="table-cell active">Citadel Coworkers</div>
      </div>

        <div class="table-row">
        <div class="table-cell factor-title">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
  <path d="M12 2V22" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
  <path d="M17 5H9.5C8.1 5 7 6.1 7 7.5C7 8.9 8.1 10 9.5 10H14.5C15.9 10 17 11.1 17 12.5C17 13.9 15.9 15 14.5 15H7" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
</svg>  <span>Cost</span>
        </div>

        <div class="table-cell">
          High — salary, benefits + tools
        </div>

        <div class="table-cell active-text">
          <svg xmlns="http://www.w3.org/2000/svg"
     width="22"
     height="22"
     viewBox="0 0 24 24"
     fill="none"
     stroke="currentColor"
     stroke-width="2.8"
     stroke-linecap="round"
     stroke-linejoin="round">

  <path d="M5 12.5L10 17L19 8"/>

</svg>  Pay only for work done, starting at $8/hr
        </div>
      </div>


      <div class="table-row">
        <div class="table-cell factor-title">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
  <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2"/>
  <path d="M12 7V12L15 15" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
</svg> <span>Hiring Time</span>
        </div>

        <div class="table-cell">
          30–60 days average
        </div>

        <div class="table-cell active-text">
         <svg xmlns="http://www.w3.org/2000/svg"
     width="22"
     height="22"
     viewBox="0 0 24 24"
     fill="none"
     stroke="currentColor"
     stroke-width="2.8"
     stroke-linecap="round"
     stroke-linejoin="round">

  <path d="M5 12.5L10 17L19 8"/>

</svg>  24–48 hours to match vetted designers
        </div>
      </div>

    
      <div class="table-row">
        <div class="table-cell factor-title">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
  <path d="M4 7H20" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
  <path d="M4 12H20" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
  <path d="M4 17H20" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
  <circle cx="8" cy="7" r="2" fill="currentColor"/>
  <circle cx="16" cy="12" r="2" fill="currentColor"/>
  <circle cx="11" cy="17" r="2" fill="currentColor"/>
</svg>
 <span>Flexibility</span>
        </div>

        <div class="table-cell">
          Fixed hours & fixed scope
        </div>

        <div class="table-cell active-text">
          <svg xmlns="http://www.w3.org/2000/svg"
     width="22"
     height="22"
     viewBox="0 0 24 24"
     fill="none"
     stroke="currentColor"
     stroke-width="2.8"
     stroke-linecap="round"
     stroke-linejoin="round">

  <path d="M5 12.5L10 17L19 8"/>

</svg>  Scale up or down based on project needs
        </div>
      </div>

   
      <div class="table-row">
        <div class="table-cell factor-title">

<svg width="22" height="22" viewBox="0 0 24 24" fill="none">
  <path d="M4 20H20" stroke="currentColor" stroke-width="2"/>
  <path d="M7 16V11" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
  <path d="M12 16V7" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
  <path d="M17 16V4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
</svg> <span>Scalability</span>
        </div>

        <div class="table-cell">
          Rehiring for every growth phase
        </div>

        <div class="table-cell active-text">
          <svg xmlns="http://www.w3.org/2000/svg"
     width="22"
     height="22"
     viewBox="0 0 24 24"
     fill="none"
     stroke="currentColor"
     stroke-width="2.8"
     stroke-linecap="round"
     stroke-linejoin="round">

  <path d="M5 12.5L10 17L19 8"/>

</svg>  On-demand team expansion, no overhead
        </div>
      </div>

   
      <div class="table-row">
        <div class="table-cell factor-title">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
  <path d="M12 2L14.9 8.3L22 9.2L17 14L18.2 21L12 17.7L5.8 21L7 14L2 9.2L9.1 8.3L12 2Z"
        stroke="currentColor"
        stroke-width="2"
        stroke-linejoin="round"/>
</svg>  <span>Design Expertise</span>
        </div>

        <div class="table-cell">
          Depends on individual hire
        </div>

        <div class="table-cell active-text">
         <svg xmlns="http://www.w3.org/2000/svg"
     width="22"
     height="22"
     viewBox="0 0 24 24"
     fill="none"
     stroke="currentColor"
     stroke-width="2.8"
     stroke-linecap="round"
     stroke-linejoin="round">

  <path d="M5 12.5L10 17L19 8"/>

</svg>  Certified professionals with documented delivery
        </div>
      </div>


      <div class="table-row">
        <div class="table-cell factor-title">
       <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
  <circle cx="12" cy="5" r="2" fill="currentColor"/>
  <path d="M12 7V13" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
  <path d="M8 10H16" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
  <path d="M10 22L12 16L14 22" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
</svg>  <span>Accessibility</span>
        </div>

        <div class="table-cell">
          Often deprioritised
        </div>

        <div class="table-cell active-text">
       <svg xmlns="http://www.w3.org/2000/svg"
     width="22"
     height="22"
     viewBox="0 0 24 24"
     fill="none"
     stroke="currentColor"
     stroke-width="2.8"
     stroke-linecap="round"
     stroke-linejoin="round">

  <path d="M5 12.5L10 17L19 8"/>

</svg> WCAG 2.1 AA standard on every project
        </div>
      </div>

    </div>

       

      </div>

    </section>
  );
};

export default ProductDesignerComparison;