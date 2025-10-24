import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClipboardList,
  faPeopleArrows,
  faSitemap,
  faHouseLaptop,
} from "@fortawesome/free-solid-svg-icons";

const Steps = ({ serviceSection }) => {
  return (
    <section className="service-section-two bg_light_1">
      <div className="container pd_zero">
        <div className="row mb-5">
          <div className="col-lg-12">
            <div className="title_all_box style_one text-center dark_color">
              <div className="sectionHeading">
                <h3>STEPS</h3>
                <h2>4 Simple Steps to Build Your Remote Dream Team</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="row gutter_15px">
          {serviceSection?.listing?.map((item, index) => {
            const steps = [
              {
                icon: "/images/clipboard.png",
                title: item.step_1_title,
                description: item.step_1_description,
              },
              {
               icon: "/images/star.png",
                title: item.step_2_title,
                description: item.step_2_description,
              },
              {
                      icon: "/images/sitemap.png",
                title: item.step_3_title,
                description: item.step_3_description,
              },
              {
                icon: "/images/work-from-home.png",
                title: item.step_4_title,
                description: item.step_4_description,
              },
            ];

            return steps.map((step, stepIndex) => (
              <div
                className="col-xl-3 col-lg-6 col-md-12 col-sm-12 col-12 my-4"
                key={`${index}-${stepIndex}`}
              >
                <div className="service_box style_three dark_color">
                  <div className="service_content">
                    <div className="content_inner">
                      <span className="icon-dollar">
                        
                      <img src={step.icon} alt="icon"  />
                      </span>
                      <small className="nom">{`0${stepIndex + 1}`}</small>
                      <h4 className="semiHeading">{step.title}</h4>
                      {step.description}
                    </div>
                  </div>
                </div>
                <div className="mr_bottom_30"></div>
              </div>
            ));
          })}
        </div>
      </div>
    </section>
  );
};

export default Steps;