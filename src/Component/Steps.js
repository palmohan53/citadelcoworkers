import React from "react";

const Steps = ({ serviceSection }) => {
  return (
    <section className="service-section-two bg_light_1 inner-services">
      <div className="container pd_zero">

        {/* Heading */}
          <div className="row mb-5">
          <div className="col-lg-12">
            <div className="title_all_box style_one text-center dark_color">
              <div className="sectionHeading">
                {/* <h3>STEPS</h3>  */}
                <h2>4 Simple Steps to Build Your Remote Dream Team</h2>
              </div>
            </div>
          </div>
        </div>

        {/* Steps */}
        <div className="row mt-5">

          {serviceSection?.listing?.map((item, index) => {
            const steps = [
              {
                number: "1",
                title: item.step_1_title,
                description: item.step_1_description,
              },
              {
                number: "2",
                title: item.step_2_title,
                description: item.step_2_description,
              },
              {
                number: "3",
                title: item.step_3_title,
                description: item.step_3_description,
              },
			 { number: "4",
                icon: "/images/work-from-home.png",
                title: item.step_4_title,
                description: item.step_4_description,
              },
            ];

            return steps.map((step, stepIndex) => (
              <div
                className="col-md-3 col-12"
                key={`${index}-${stepIndex}`}
              >
                <div
                  className={`contentBx ${
                    stepIndex === 4 ? "noArrow" : ""
                  }`}
                >

               <div className="numWrp">

  {/* Left Arrow - only first */}
  {stepIndex === 0 && (
    <div className="arrow-light">
      <svg
        viewBox="0 0 15 29"
        height="15"
        width="29"
        className="_3K4Dh5HC"
      >
        <path
          d="m.707.707 13.678 13.678-13.678 13.677"
          fill="none"
          stroke="currentColor"
        />
      </svg>
    </div>
  )}

  <div className="hiringNum">
    {step.number}
  </div>

  {/* Arrow between Step 1 → 2 → 3 → 4 */}
  {stepIndex < 3 && (
    <div className="arrow-for">
      <svg
        viewBox="0 0 15 29"
        height="15"
        width="29"
        className="_3K4Dh5HC"
      >
        <path
          d="m.707.707 13.678 13.678-13.678 13.677"
          fill="none"
          stroke="currentColor"
        />
      </svg>
    </div>
  )}

  {/* Light arrow after Step 4 */}
  {stepIndex === 3 && (
    <div className="arrow-light last-div">
      <svg
        viewBox="0 0 15 29"
        height="15"
        width="29"
        className="_3K4Dh5HC"
      >
        <path
          d="m.707.707 13.678 13.678-13.678 13.677"
          fill="none"
          stroke="currentColor"
        />
      </svg>
    </div>
  )}

</div>

                  <h3>{step.title}</h3>
                  <p>{step.description}</p>

                </div>
              </div>
            ));
          })}

        </div>
      </div>
    </section>
  );
};

export default Steps;