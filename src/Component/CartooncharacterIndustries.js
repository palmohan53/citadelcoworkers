import React from "react";


const CharacteranimationIndesurty = () => {

  const industries = [
    {
      icon:(
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-gamepad2 text-[#2563eb]" data-source-location="components/case-study/IndustriesSection:34:16" data-dynamic-content="false" data-arr-index="0" data-arr-variable-name="industries"><line x1="6" x2="10" y1="11" y2="11"></line><line x1="8" x2="8" y1="9" y2="13"></line><line x1="15" x2="15.01" y1="12" y2="12"></line><line x1="18" x2="18.01" y1="10" y2="10"></line><path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z"></path></svg>
    ),
      title: " Gaming & Interactive Entertainment",
      description:
        "Our game developers with character design pipelines account for gameplay mechanics, animation state machines and engine-specific constraints. From indie mobile titles to AAA console productions, we create cartoon animated characters and realistic 3D character designs that feel native to their game world.",
    },
    {
      icon:(
 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-megaphone text-[#2563eb]" data-source-location="components/case-study/IndustriesSection:34:16" data-dynamic-content="false" data-arr-index="1" data-arr-variable-name="industries"><path d="m3 11 18-5v12L3 14v-3z"></path><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"></path></svg>
    ),
      title: "Advertising & Brand Marketing",
      description:
        "Our character cartoon specialists create branded characters that become recognisable assets for businesses. From animated talking characters in TVC spots to 2D character animation online content for social media, our work helps brands build emotional connection and drive recall at scale.",
    },
    {
      icon:(
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-graduation-cap text-[#2563eb]" data-source-location="components/case-study/IndustriesSection:34:16" data-dynamic-content="false" data-arr-index="2" data-arr-variable-name="industries"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path><path d="M22 10v6"></path><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path></svg>
    ),
      title: "E-Learning & Corporate Training",
      description:
        "Animated characters in e-learning consistently improve learner engagement and knowledge retention. Our 2D and 3D character animation services produce instructor characters, scenario-based characters and animated guides that make complex content feel approachable and keep learners on task.",
    },
	{
	icon:(
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sparkles text-[#2563eb]" data-source-location="components/case-study/IndustriesSection:34:16" data-dynamic-content="false" data-arr-index="3" data-arr-variable-name="industries"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path><path d="M20 3v4"></path><path d="M22 5h-4"></path><path d="M4 17v2"></path><path d="M5 18H3"></path></svg>
    ),
      title: "Children's Entertainment & Animation:",
      description:
        "Our character animation experts have direct experience in children's content, understanding the visual language, pacing and character personality traits that resonate with young audiences across age groups.",
    },
	
	
	 {
      icon:(
   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sparkles text-[#2563eb]" data-source-location="components/case-study/IndustriesSection:34:16" data-dynamic-content="false" data-arr-index="3" data-arr-variable-name="industries"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path><path d="M20 3v4"></path><path d="M22 5h-4"></path><path d="M4 17v2"></path><path d="M5 18H3"></path></svg>
    ),
	
      title: "Film, TV & Short-Form Content",
      description:
        "3D character animation and 2D animation character design team support independent filmmakers, production companies and streaming content creators with character production that meets broadcast quality standards on timelines and budgets that match independent and mid-size productions.",
    },
	 {
      icon:(
   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart-pulse text-[#2563eb]" data-source-location="components/case-study/IndustriesSection:34:16" data-dynamic-content="false" data-arr-index="5" data-arr-variable-name="industries"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path><path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"></path></svg>
    ),
	
      title: "Healthcare & MedTech",
      description:
        "Animated characters simplify complex medical procedures, treatment pathways and health communication for patients and professionals alike. Our character animation services team creates empathetic, clearly designed characters that help healthcare organisations communicate with authority and accessibility.",
    },
	 {
      icon:(
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-boxes text-[#2563eb]" data-source-location="components/case-study/IndustriesSection:34:16" data-dynamic-content="false" data-arr-index="6" data-arr-variable-name="industries"><path d="M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z"></path><path d="m7 16.5-4.74-2.85"></path><path d="m7 16.5 5-3"></path><path d="M7 16.5v5.17"></path><path d="M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z"></path><path d="m17 16.5-5-3"></path><path d="m17 16.5 4.74-2.85"></path><path d="M17 16.5v5.17"></path><path d="M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z"></path><path d="M12 8 7.26 5.15"></path><path d="m12 8 4.74-2.85"></path><path d="M12 13.5V8"></path></svg>
    ),
      title: "NFT, Web3 & Metaverse",
      description:
        "Our cartoon character designer team supports Web3 projects with scalable generative character systems, 3D avatar design and animated character assets built for immersive digital environments, NFT collections, and metaverse platforms.",
    },
  
 
    
  ];

  return (
    <section className="product-designer-industry ">

      <div className="container">

        <div className="sectionHeading text-center mb-3">

          <h2>
          Industries Bringing Characters To Life With Expert Animation
 </h2>

          <p>
            Character animation is a high-impact creative tool across virtually every industry that communicates, educates or entertains. Our cartoon character designers bring industry-specific knowledge to every project, understanding the conventions, audience expectations and platform requirements that make characters work in each context.

          </p>

        </div>

        <div className="product-designer-industry-grid cartoon-cha">

          {industries.map((item, index) => (
            <div className="industry-card" key={index}>

              <div className="icon-box">
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              <p>{item.description}</p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default CharacteranimationIndesurty;