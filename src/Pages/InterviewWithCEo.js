import React from "react";

const interviewData = [
  {
    number: "01",
    title:
      "What was broken in the way SMEs used to hire, and what did Citadel actually fix?",
    desc: `Most businesses hire reactively. When pressure increases, decisions become rushed and hiring quality drops. Traditional hiring is slow, expensive and limited by geography.`,
    quote:
      "The best hires are proactive systems, not last-minute reactions.",
  },
  {
    number: "02",
    title:
      "Why Coworkers, and not just another outsourcing company?",
    desc: `Outsourcing often creates distance between the business and the resource. We wanted dedicated remote team members who integrate directly into internal workflows.`,
    quote:
      "Remote staffing works best when people feel ownership, not isolation.",
  },
  {
    number: "03",
    title:
      "Walk me through what a placement actually looks like, end to end.",
    desc: `We understand the role, shortlist candidates, assess communication and skills, then support onboarding and integration.`,
    highlight: ["48 hrs", "Pre-vetted", "Dedicated"],
  },
  {
    number: "04",
    title:
      "Where does the cost advantage actually come from?",
    desc: `The advantage comes from operational efficiency and geographical differences, not lower quality.`,
    quote:
      "Great talent exists everywhere. Systems decide accessibility.",
  },
  {
    number: "05",
    title:
      "What do SMEs get wrong about remote hiring?",
    desc: `Many businesses treat remote hiring like freelancing. Long-term success requires communication, structure and clarity.`,
    quote:
      "Remote teams fail when businesses hire without direction first.",
  },
  {
    number: "06",
    title:
      "What does a Citadel Coworker do that a freelancer cannot?",
    desc: `Freelancers are task-focused. Dedicated coworkers become part of the long-term growth structure.`,
  },
  {
    number: "07",
    title:
      "How is AI changing the value of a remote hire?",
    desc: `AI increases efficiency, but businesses still need professionals who know how to use modern tools effectively.`,
    quote:
      "AI rewards skilled professionals, not average processes.",
  },
  {
    number: "08",
    title:
      "What is the one hard truth about hiring nobody wants to say out loud?",
    desc: `Hiring the wrong person is often more expensive than not hiring at all.`,
  },
  {
    number: "09",
    title:
      "What does the next five years look like for Citadel?",
    desc: `The focus is simplifying global hiring and helping businesses scale without geographical limitations.`,
    quote:
      "The future belongs to businesses that can build globally.",
  },
];
const scrollToSection = (id) => {
  const element = document.getElementById(id);

  if (element) {

    const offset = 120;

    const top =
      element.getBoundingClientRect().top +
      window.pageYOffset -
      offset;

    window.scrollTo({
      top,
      behavior: "smooth",
    });

    // remove hash without eslint error
    window.history.replaceState(
      null,
      "",
      window.location.pathname
    );
  }
};
export default function FounderInterviewPage() {
  return (
    <div>
    <section class="hero-interview">

    <div class="hero-interview-grid">



        <div class="hero-interview-content">

            <div class="hero-interview-tag">
                INTERVIEW WITH CO-FOUNDER
            </div>

            <h2>
                Hiring should not
                slow your growth.<br></br>
                <span>
                    It should accelerate it.
                </span>
            </h2>

            <p>
                Citadel Coworkers is built on a system that helps businesses
                hire virtual employees and scale faster without usual delays,
                high costs and hiring challenges.
            </p>

        </div>

  

    </div>

</section>

<section class="interview-intro-section">
  <div className="container">

 

    <div class="interview-intro-grid">

             
        <div class="interview-intro-left">

            <div class="interview-intro-heading">

           

                <h3>Introduction</h3>

            </div>

            <p>
                Most businesses do not fail because of bad ideas. They struggle because they cannot hire the right people at the right time. 

            </p>

            <p>
               Traditional hiring often turns out to be slow, expensive and limited by location. Freelancing platforms often lack consistency and long-term reliability. Citadel Coworkers is built to solve this problem by offering offshore staffing solutions that allow businesses to hire remote employees from India who work as a dedicated extension of their team. 

            </p>
<h3>In this interview with the co-founder, <b>Suresh Sharma</b>, we discussed 
</h3>
<div class="dissused-card">
  <div class="diss1">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-triangle-alert w-5 h-5 text-primary mt-0.5 shrink-0" aria-hidden="true" data-replit-metadata="artifacts/citadel-coworkers/src/pages/home.tsx:130:16" data-component-name="Icon"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path><path d="M12 9v4"></path><path d="M12 17h.01"></path></svg>
What is broken in traditional hiring?  

  </div>

  <div class="diss1">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users w-5 h-5 text-primary mt-0.5 shrink-0" aria-hidden="true" data-replit-metadata="artifacts/citadel-coworkers/src/pages/home.tsx:130:16" data-component-name="Icon"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
How does virtual staffing actually work? 


  </div>
    <div class="diss1">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-target w-5 h-5 text-primary mt-0.5 shrink-0" aria-hidden="true" data-replit-metadata="artifacts/citadel-coworkers/src/pages/home.tsx:130:16" data-component-name="Icon"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
What businesses should know before they hire remote teams?

  </div>
    <div class="diss1">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-rocket w-5 h-5 text-primary mt-0.5 shrink-0" aria-hidden="true" data-replit-metadata="artifacts/citadel-coworkers/src/pages/home.tsx:130:16" data-component-name="Icon"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
What’s the future of remote staffing services and global teams?

  </div>
</div>
        </div>



        <div class="interview-intro-right">

        <div class="hero-interview-card">
          <div class="hero-interview-quote">❝</div>
          <div class="hero-interview-content"><span>IN CONVERSATION</span><h3>Suresh Sharma</h3>
          <p>Co-founder, Citadel Coworkers</p><a href="https://www.linkedin.com/in/suresh-sharma-082769266/?isSelfProfile=false" className="link-su"><img src="./images/linkedin-sur.webp"></img></a></div><div class="hero-interview-dots"></div>
          
          <img src="https://virtualassistant24x7.com/wp-content/uploads/2026/05/suresh-1.webp" alt="" class="hero-interview-image"   loading="eager"
  fetchpriority="high"
  decoding="async"
  width="400"
  height="450"
  alt="Suresh Sharma"/>
          
          
          </div>

        </div>

    </div>
 </div>
</section>

<section class="issue-section">

  <div className="container">

    <div class="issue-top">

        <div class="issue-label">
            IN THIS ISSUE
        </div>

        <div class="issue-list-grid">
<div class="issue-grid-left">
            <div class="issue-item">
                <span>01</span>
                <p>  <a
  href="/"
  onClick={(e) => {
    e.preventDefault();
    scrollToSection("Ques1");
  }}
>What was broken in the way businesses used to hire and how does CCW fix it?</a></p>
            </div>
			  <div class="issue-item">
                <span>02</span>
                <p><a href="/"
  onClick={(e) => {
    e.preventDefault();
    scrollToSection("Ques2");
  }}
>Why “Coworkers” and Not Outsourcing?</a></p>
            </div>
			
			
			
			
			
			
			 <div class="issue-item">
                <span>03</span>
                <p><a href="/"
  onClick={(e) => {
    e.preventDefault();
    scrollToSection("Ques3");
  }}
>How does the hiring process work?</a></p>
            </div>
			
			
			
			
			
			  <div class="issue-item">
                <span>04</span>
                <p><a href="/"
  onClick={(e) => {
    e.preventDefault();
    scrollToSection("Ques4");
  }}
>What is the real reason behind the cost advantage?</a></p>
            </div>
			
			
            <div class="issue-item">
                <span>05</span>
                <p><a href="/"
  onClick={(e) => {
    e.preventDefault();
    scrollToSection("Ques5");
  }}
>What do businesses get wrong about remote hiring?</a></p>
            </div>

</div>
<div class="issue-grid-right">

			

            <div class="issue-item">
                <span>06</span>
                <p><a href="/"
  onClick={(e) => {
    e.preventDefault();
    scrollToSection("Ques6");
  }}
>What makes Citadel Coworkers different from freelancers?</a></p>
            </div>

          

            <div class="issue-item">
                <span>07</span>
                <p><a href="/"
  onClick={(e) => {
    e.preventDefault();
    scrollToSection("Ques7");
  }}
>How is AI impacting remote hiring?</a></p>
            </div>

           

            <div class="issue-item">
                <span>08</span>
                <p><a href="/"
  onClick={(e) => {
    e.preventDefault();
    scrollToSection("Ques8");
  }}
>What is the one hard truth about hiring that everyone should know about?</a></p>
            </div>

          

            <div class="issue-item">
                <span>09</span>
                <p><a href="/"
  onClick={(e) => {
    e.preventDefault();
    scrollToSection("Ques9");
  }}
>What does the future hold for Citadel Coworkers?</a></p>
            </div>  </div>

        </div>

    </div>



    <div class="issue-question-block " id="Ques1">

   

        <div class="issue-number-side">

            <h2>01</h2>

            <span>THE PROBLEM</span>

        </div>

     

        <div class="issue-content-side">

            <h3>
              What Was Broken in the Way Businesses Used to Hire and How Does CCW Fix It?

            </h3>

            <div class="issue-line"></div>

          <p> Most of the businesses have been approaching hiring reactively. They hire when there is pressure, which often ends up being a rushed decision that comes attached with poor outcomes. </p>

  <p>Traditional hiring also comes with high costs and geographical limitations. What we have built at Citadel is a structured hiring system where businesses can hire <a href="https://www.citadelcoworkers.com/services/virtual-assistant">virtual employees.</a> The experts are thoroughly pre-vetted, trained and are ready to contribute from day one. This approach has reduced the hiring time and helped businesses scale efficiently. </p>


        </div>

    </div>
	
	
	 <div class="issue-question-block " id="Ques2">

   

        <div class="issue-number-side">

            <h2>02</h2>

            <span>The Model</span>

        </div>

     

        <div class="issue-content-side">

            <h3>
               Why “Coworkers” and Not Outsourcing?


            </h3>

            <div class="issue-line"></div>

          <p> The term outsourcing often tends to create a disconnect between the client and the resource. Our thought process behind choosing the term “Coworkers” is to provide dedicated remote team members who can seamlessly integrate into your workflows and work as part of your internal team. We also had it in mind that this would help improve communication, accountability and long-term performance.  </p>




        </div>

    </div>
	
	
		 <div class="issue-question-block" id="Ques3">

   

        <div class="issue-number-side">

            <h2>03</h2>

            <span>The Process</span>

        </div>

     

        <div class="issue-content-side">

            <h3>
              How Does the Hiring Process Work?



            </h3>

            <div class="issue-line"></div>

          <p> Our process is designed to make remote hiring simple, fast and effective and AI plays a big part in that speed.
 </p>
<ul>
<li>Understand the client’s role requirement and expectations</li>
<li>Use AI-powered sourcing tools to instantly filter and shortlist candidates from a much larger talent pool than manual screening would allow</li>
<li>Run AI-assisted skill assessments and communication evaluations to test candidates objectively, not just on paper credentials</li>
<li>Use automated scheduling and workflow tools to cut down coordination time between shortlisting, interviews and offer rollout</li>
<li>Present only qualified candidates to the client, backed by data from these assessments</li>
<li>Support onboarding and integration using structured checklists and tools that get the new hire productive from day one</li>

</ul>
Clients do not have to go through hundreds of profiles. AI handles the heavy lifting of filtering and evaluation, so clients get access to a filtered pool of candidates ready to work much faster than a traditional hiring cycle.



        </div>

    </div>
	
	
		 <div class="issue-question-block" id="Ques4">

   

        <div class="issue-number-side">

            <h2>04</h2>

            <span>The Economics</span>

        </div>

     

        <div class="issue-content-side">

            <h3>
             What Is the Real Reason Behind the Cost Advantage?



            </h3>

            <div class="issue-line"></div>

          <p> The cost advantage comes from the geographical difference and operational efficiency. The businesses that outsource to India and gain access to highly skilled professionals at a significantly lower cost when compared to hiring locally in the US or UK. This allows the companies to optimize their budgets without having to compromise on quality. 
  </p>




        </div>

    </div>
	
	
	 <div class="issue-question-block" id="Ques5">

   

        <div class="issue-number-side">

            <h2>05</h2>

            <span>From The Floor</span>

        </div>

     

        <div class="issue-content-side">

            <h3>
           What Do Businesses Get Wrong About Remote Hiring?




            </h3>

            <div class="issue-line"></div>

          <p> Many businesses treat remote hiring like freelance hiring, which leads to inconsistent results. They place someone, expect instant output, and skip the things that actually make a remote hire successful over time.
<br></br>
To build a successful remote team, businesses need:

<div class="role-mod"><li>Clear role definitions</li>
<li>Structured communication</li>
<li>Real team model
 </li><li>Long-term planning </li><li>Continuous learning
 </li><li>Trust and ownership
</li>
</div>
When done correctly, remote staffing services can be more effective than traditional hiring.


  </p>




        </div>

    </div>
	
	
	
	 <div class="issue-question-block" id="Ques6">

   

        <div class="issue-number-side">

            <h2>06</h2>

            <span>VERSUS Freelancers</span>

        </div>

     

        <div class="issue-content-side">

            <h3>
            What Makes Citadel Coworkers Different from Freelancers? 





            </h3>

            <div class="issue-line"></div>

          <p> Freelancers are suitable for short-term tasks, but lack in 
            consistency and long-term commitment. Citadel Coworkers provides dedicated remote employees who: 



<div class="role-mod"><li>Work exclusively with the client</li>
<li>Follow structured processes </li>
<li>Contribute to long-term business growth</li>
</div>
This helps make it easier for businesses to build stable and scalable teams. 


  </p>




        </div>

    </div>
	
	
	
	 <div class="issue-question-block" id="Ques7">

   

        <div class="issue-number-side">

            <h2>07</h2>

            <span>ON AI</span>

        </div>

     

        <div class="issue-content-side">

            <h3>
             How is AI Impacting Remote Hiring? 





            </h3>

            <div class="issue-line"></div>

          <p>AI is transforming the way tasks are performed. At the same time, AI is also increasing the demand for skilled professionals who can use these tools effectively. At CCW, we have adapted AI by 


<div class="role-mod"><li>Aligning talent with modern business needs </li>
<li>Focusing on efficiency and productivity </li>
<li>Preparing professionals to work alongside AI tools
 </li>
</div>
When hiring is done correctly, the remote staffing services can be more effective than traditional hiring. 

  </p>




        </div>

    </div>
	
	
	 <div class="issue-question-block"id="Ques8">

   

        <div class="issue-number-side">

            <h2>08</h2>

            <span>The Hard Truth</span>

        </div>

     

        <div class="issue-content-side">

            <h3>
What is one hard truth about hiring?





            </h3>

            <div class="issue-line"></div>

          <p>Hiring the wrong person is more expensive than not hiring at all. Businesses often underestimate the cost of poor hiring decisions, including lost time, reduced productivity, and rehiring expenses.<br></br>
Here is a hard truth that is becoming more relevant every year: AI and agentic AI are not a substitute for hiring well; they raise the bar for it. Agentic AI tools can now execute multi-step tasks on their own, but someone still has to direct them, set guardrails, check their output and make judgment calls the AI cannot make. <br></br>
Hire the wrong person to sit in that seat and mistakes do not just happen slower like before; they get automated and scaled before anyone notices. The businesses getting the most value from AI right now are not the ones with the most tools. They are the ones who hired the right people to run them.



  </p>




        </div>

    </div>
	
	
	 <div class="issue-question-block" id="Ques9">

   

        <div class="issue-number-side">

            <h2>09</h2>

            <span>What's Next</span>

        </div>

     

        <div class="issue-content-side">

            <h3>
            What Does the Future Hold for Citadel Coworkers?





            </h3>

            <div class="issue-line"></div>

          <p> Our aim is to become a leading virtual staffing company that enables businesses to build global teams without limitation. Our focus is on simplifying hiring, improving quality and enabling scalable growth. 



  </p>




        </div>

    </div>
	
</div>
</section>



<section class="cs-cta-interview">
  <div class="container">
<h2 class="cs-cta-title">Hiring Does not Have to Be Complicated
</h2><p class="cs-cta-sub">If you are looking to hire virtual employees, build a dedicated remote team, and scale your business efficiently, Citadel Coworkers provides a structured and <br></br>reliable solution. The best way to know if this fits your business is to talk it through directly. 

</p>  <a href="/contact-us" class="final-cta-btn">
      <span class="calendar-icon">
        <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
          <rect x="3" y="4" width="18" height="17" rx="3" stroke="currentColor" stroke-width="2"/>
          <path d="M8 2v4M16 2v4M3 9h18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          <path d="M9.5 14.5l2 2 4-4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </span>
      Schedule a free consultation with our Co-founder
      <span class="arrow">→</span>
    </a></div></section>
</div>
  );
}