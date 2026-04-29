import { useState } from "react";
import "./css/WorkflowSplit.css";

const steps = [
  {
    title: "Concept Alignment",
    desc: "We start by understanding the goals, use case and creative direction that is to be followed. At this stage, our focus lies in defining the scope that creates a pathway to avoid revisions at later stages and ensure that the outputs are in alignment with your engagement.",
    icon: "/images/Concept Alignment.webp",
  },
  {
    title: "Storyboarding",
    desc: "Our team maps out the visual flow, key scenes and transitions. This is helpful in visualizing the final output at an early stage and helps in giving a clear direction for production. We do scene planning which helps reduce guesswork and ensure smoother execution.",
    icon: "/images/Storyboarding.webp"
  },
  {
    title: "Asset Development",
    desc: "Using PBR workflows, we apply realistic textures and materials that help enhance the visual quality. Our team ensures that surfaces react naturally to lighting and consistency across all scenes.",
    icon: "/images/Asset Development.webp",
  },
  {
    title: "Texturing & Material Setup",
    desc: "Using PBR workflows, we apply realistic textures and materials that help enhance the visual quality. Our team ensures that surfaces react naturally to lighting and consistency across all scenes.",
    icon: "/images/text (1).webp",
  },
  {
    title: "Rigging & Animation Execution",
    desc: "Our team rig characters and objects for smooth movement and animate them with a focus on realism and storytelling. The goal is to create motion that feels natural and keeps the viewers engaged.",
    icon: "/images/Rigging (1).webp",
  },
  {
    title: "Lighting & Effects",
    desc: "We apply cinematic lighting and optimize rendering settings to achieve high-quality output. Visual effects are added where required to enhance realism and bring depth to the final visuals.",
    icon: "/images/Lighting.webp",
  },
  {
    title: "Review & Final Delivery",
    desc: "Our team shares drafts for feedback and refines the output based on your inputs. Once approved then the final files are delivered in the required formats that are ready to use.",
    icon: "/images/review.webp"
  },
];

export default function WorkflowSplit() {
  const [active, setActive] = useState(null); // ✅ no default open

  return (
    <section className="workflow-split serviceBulkContent">
      <div className="container">
        
        <div className="sectionHeading text-center mb-4">
          <h2>Our Workflow for Structured 3D Animation Results</h2>
          <p>
            Discover our systematic approach to delivering high-quality 3D animation projects.
          </p>
        </div>

        <div className="bulkContent mt-5">
          
          {/* LEFT ACCORDION */}
          <div className="para">
            {steps.map((item, index) => (
              <div
                key={index}
                className={`accordion ${active === index ? "active" : ""}`}
                onClick={() =>
                  setActive(active === index ? null : index)
                }
              >
                <div className="accordion-header">
                  <span className="icon">
                    <img src={item.icon} alt={item.title} />
                  </span>
                  <h4>{item.title}</h4>
                </div>

                {active === index && (
                  <div className="accordion-body">
                    <p>{item.desc}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* RIGHT IMAGE */}
         
            <img src="/images/worf.webp" className="workflow-image" />
  

        </div>
      </div>
    </section>
  );
}