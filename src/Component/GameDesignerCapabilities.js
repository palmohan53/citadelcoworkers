import React from "react";


const GameDesignerCapabilities = () => {

  const industries = [
    {
      icon:(
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-layers w-6 h-6 text-primary"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
    ),
      title: " System Architecture",
      description:
        "The ability of our professionals to design interconnected game mechanics, which include combat loops, crafting systems, social features and progression trees which helps remain balanced and engaging as players advance to new levels in the game. ",
    },
    {
      icon:(
 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-brain w-6 h-6 text-primary"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"></path><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"></path><path d="M17.599 6.5a3 3 0 0 0 .399-1.375"></path><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path><path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path><path d="M19.938 10.5a4 4 0 0 1 .585.396"></path><path d="M6 18a4 4 0 0 1-1.967-.516"></path><path d="M19.967 17.484A4 4 0 0 1 18 18"></path></svg>
    ),
      title: "Player Psychology & Behavioural Design",
      description:
        "Professional game designers study how players form habits, respond to reward schedules and process failure. They apply variable ratio reinforcement, progress indicators and social comparison mechanics deliberately and not just intuitively.",
    },
    {
      icon:(
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-monitor w-6 h-6 text-primary"><rect width="20" height="14" x="2" y="3" rx="2"></rect><line x1="8" x2="16" y1="21" y2="21"></line><line x1="12" x2="12" y1="17" y2="21"></line></svg>
    ),
      title: "UI/UX For Interactive Environments ",
      description:
        "In-game interfaces are designed to communicate live system state without pulling the player out of the gaming experience. Game UX designs must account for input methods (touch, controller, keyboard, mouse). They should understand the information hierarchy under pressure and the cognitive load of players.  ",
    },
    {
    icon:(
     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users w-6 h-6 text-primary"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
    ),
      title: "Narrative & Level Design Integration ",
      description:
        "Game designers collaborate with writers and level artists to ensure that spatial design, encounter pacing and story beats are aligned. A game’s stated difficulty curve or its unintended shortcuts are a design failure regardless of how good it looks visually. ",
    },
    {
      icon:(
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trending-up w-6 h-6 text-primary"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
    ),
      title: "Data Literacy & Live-Ops Design ",
      description:
        "Modern game design is a continuous discipline, not a pre-launch one. Professional game designers analyse retention data, monetisation funnels and feature adoption rates to design updates and balance patches that maintain player engagement post-launch. ",
    },
    
  ];

  return (
    <section className="product-designer-industry ">

      <div className="container">

        <div className="sectionHeading text-center mb-3">

          <h2>
           5 Core Competencies Of A Professional Game Designer </h2>

          <p>
            Product design directly impacts business outcomes. Our designers
            bring industry-specific knowledge to every engagement.
          </p>

        </div>

        <div className="product-designer-industry-grid game-des">

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

export default GameDesignerCapabilities;