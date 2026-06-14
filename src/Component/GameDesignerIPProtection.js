import React from "react";

const workflowSteps = [
  {
    number: "01",
    icon: (
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
        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      </svg>
    ),
    title: "NDA & IP Assignment ",
    description:
      " Every designer and game artist from our team signs a mutual NDA and full IP assignment agreement before the first brief is shared. All GDDs, concept art, Ui design, level blueprints and system documentation created under engagement are wholly owned by you upon delivery. ",
  },

  {
    number: "02",
    icon: (
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
        <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
      </svg>
    ),
    title: " Secure Asset Handling",
    description:
      "All design files, game reference material and production documentation are handled on encrypted, password-protected workstations. We do not use personal cloud accounts or unsecured file-sharing platforms for any client game asset. ",
  },

  {
    number: "03",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-globe w-5 h-5 text-primary"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
    ),
    title: " Timezone Alignment",
    description:
      "Our game designers operate on extended overlap windows covering the US and UK time zones. Sprint reviews, design crits and milestone handoffs run on your schedule and not around offshore time zone gaps. ",
  },

  {
    number: "04",
    icon: (
     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-check w-5 h-5 text-primary"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><polyline points="16 11 18 13 22 9"></polyline></svg>
    ),
    title: " Dedicated Account Manager ",
    description:
      "You have a single dedicated account manager who owns your engagement from onboarding through delivery. They coordinate your designer, manage revision cycles and escalate production issues directly. ",
  },

  
];

export default function GameDesignerIPProtection() {
  return (
    <section className="Workflowdesigner py-16">
      <div className="container">

        {/* Heading */}
        <div className="sectionHeading text-center mb-12">
          <h2 className="text-5xl font-bold tracking-tight text-black">
           End-To-End Protection For Your Game’s IP and Assets

          </h2>
        </div>

        {/* Cards */}
        <div className="grid new-grid-game">

          {workflowSteps.map((step, index) => (
            <div
              key={index}
              className="grid-col-game"
            >

              {/* Icon */}
              <div className="icon-game-ip">
                {step.icon}
              </div>

              {/* Number */}
              <span className="number-game">
                {step.number}
              </span>

              {/* Title */}
              <h3 className="text-[24px] leading-snug font-semibold text-black mb-2">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-[15px] leading-relaxed">
                {step.description}
              </p>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}