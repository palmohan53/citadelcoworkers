import React from "react";

const workflowSteps = [
  {
    number: "01",
    title: "Brief & Operational Discovery",
    description:
      "We map your store setup, platform stack, operational gaps and growth priorities, aligning on scope and defining clear deliverables before any work begins.",
  },
  {
    number: "02",
    title: "VA Matching & Team Selection",
    description:
      "We match your requirements against our vetted ecommerce VA pool on platform experience, sector fit and communication style. You review shortlisted profiles and choose before any commitment is made.",
  },
  {
    number: "03",
    title: " E-Commerce Onboarding Support",
    description:
      "Your assistant is onboarded on your SOPs, brand guidelines, escalation protocols and platform access productive from day one, not week three.",
  },
  {
    number: "04",
    title: "Live Operations & Performance Tracking",
    description:
      "Your VA delivers against agreed KPIs, including listing accuracy, response times, and order error rates. Regular performance updates keep you informed without daily involvement. ",
  },
  {
    number: "05",
    title: "Review, Optimisation & Scaling",
    description:
      "Monthly reviews assess performance and surface improvements. As your store grows, we add specialists or expand the scope without any operational disruption.",
  }
];

export default function WorkflowSplitecommarce() {
  return (
    <section className="Workflowdesigner">
      <div className="container">
        {/* Heading */}
        <div className="sectionHeading text-center mb-3">
          <h2 className="text-5xl font-bold tracking-tight text-black">
           From Brief To Live Operations: Our Structured E-Commerce 
            <span className="text-blue-600"> Onboarding Workflow</span>
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