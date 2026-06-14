import React from "react";

const workflowSteps = [
  {
    number: "01",
    title: "Discovery & Goal Alignment",
    description:
      "We begin by clarifying product vision, business goals, target users and pain points. We ensure that the design aligns with your scope and success metrics to avoid guesswork and ensure that the decisions are grounded in real user needs and market context. ",
  },
  {
    number: "02",
    title: "Research & Competitive Analysis",
    description:
      "Our product designers perform user interviews, competitor analyses and analytics review to identify opportunity gaps. This research phase helps make sure that all the design decisions are grounded in real user needs and market context. ",
  },
  {
    number: "03",
    title: "Information Architecture & User Flows",
    description:
      "Our designers map out the product’s structure, navigation logic and key user journeys before designing individual screens. Designers plan the product’s structure and map the primary user journey. ",
  },
  {
    number: "04",
    title: "Wireframing & Prototyping",
    description:
      "Our product designers create low and mid-fidelity wireframes that validate layout, interaction logic and feature prioritisation. Interactive prototypes are built for usability testing so that we can refine the experience before investing in a polished UI. ",
  },
  {
    number: "05",
    title: "UI Design & Design System Build",
    description:
      " We craft high-fidelity screens with a fully documented design system, components, tokens, typography and colour. Every element is designed for consistency, scalability and alignment with your brand identity. ",
  },
  {
    number: "06",
    title: "Usability Testing & Iteration",
    description:
      " We test the prototype with real users, collect structured feedback and iterate on the design. This validation loop ensures you can launch with confidence and gain strong early adoption.",
  },
  {
    number: "07",
    title: "Developer Handoff & Launch Support",
    description:
      "Our designers provide your developers with annotated specs and asset libraries. We’re available throughout the build to answer questions and review implementations. ",
  },
];

export default function WorkflowSection() {
  return (
    <section className="Workflowdesigner">
      <div className="container">
        {/* Heading */}
        <div className="sectionHeading text-center mb-3">
          <h2 className="text-5xl font-bold tracking-tight text-black">
            From Brief To Final Frames —
            <span className="text-blue-600"> Our Workflow</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[18px] top-0 h-full w-[1px] bg-gray-300" />

          <div className="flex flex-col gap-8">
            {workflowSteps.map((step, index) => (
              <div key={index} className="relative flex items-start gap-8">
                {/* Circle */}
                <div className="relative z-10 flex items-center justify-center min-w-[38px] h-[38px] rounded-full bg-blue-600 text-white text-sm font-semibold shadow-md">
                  {step.number}
                </div>

                {/* Card */}
                <div className="w-full bg-white border border-gray-200 rounded-2xl px-8 py-6 shadow-sm hover:shadow-md transition-all duration-300">
                  <h3 className="text-[22px] font-semibold text-black mb-2">
                    {step.title}
                  </h3>

                  <p className="text-gray-500 text-[15px] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}