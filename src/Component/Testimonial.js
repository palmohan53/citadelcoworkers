import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial = ({ serviceTestimonial }) => {
  // ✅ OLD slider settings
  const settings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const listing = serviceTestimonial?.data?.listing || [];

  // ✅ FIRST ITEM ACF
  const firstItem = listing?.[0] || {};
  const acf = firstItem?.acf || {};

  // ✅ IF TITLE EXISTS => SHOW ACF DESIGN
  const hasAcfTitle =
    acf?.testiniminal_header ||
    acf?.testimonial_header ||
    acf?.testimonials_header;

  return (
    <>
      {hasAcfTitle ? (
        <TestimonialAcfSlider listing={listing} />
      ) : (
        <section className="testimonial testimonialSliderWrap">
          <div className="container">
            <div className="row align-items-center mb-3">
              <div className="col-md-12 col-12">
                <div className="sectionHeading text-center">
                  <p>Trusted by 200+ Clients</p>
                  <h2>Our Clients&apos; Success Stories</h2>
                </div>
              </div>
            </div>

            <div className="mt-3">
              <Slider {...settings}>
                {listing?.slice(0, 7).map((data, index) => (
                  <div key={index}>
                    <div className="contentBx">
                      <img
                        src="/images/quote.webp"
                        alt=""
                        className="quoteImg"
                        width="26"
                        height="19"
                      />

                      <div
                        className="testimonialText"
                        dangerouslySetInnerHTML={{
                          __html: data?.post_content || "",
                        }}
                      />

                      <ul className="listInline">
                        <li>
                          <img
                            src="/images/stars.webp"
                            alt=""
                            width="100"
                            height="14"
                            className="stars"
                          />
                        </li>
                      </ul>

                      <h4>
                        <img
                          src={data?.banner}
                          alt={data?.post_title || "Client"}
                          className="testimonialImg"
                        />{" "}
                        {data?.post_title}
                      </h4>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>

          <style>{sliderWidthFixCss}</style>
        </section>
      )}
    </>
  );
};

export default Testimonial;

/* =========================
   ✅ ACF DESIGN
========================= */
const TestimonialAcfSlider = ({ listing }) => {
  const acfSliderSettings = {
    dots: true,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  const acfSlides = (listing || []).slice(0, 7);

  return (
    <section className="testimonial testimonialAcfWrap">
      <div className="container">
        <div className="row align-items-center mb-3">
          <div className="col-md-12 col-12">
            <div className="sectionHeading text-center">
              <p>Trusted by 200+ Clients</p>
              <h2>Our Clients&apos; Success Stories</h2>
            </div>
          </div>
        </div>

        <div className="mt-3 pp-slider">
          <Slider {...acfSliderSettings}>
            {acfSlides.map((data, index) => {
              const acf = data?.acf || {};

              const header =
                acf?.testiniminal_header ||
                acf?.testimonial_header ||
                acf?.testimonials_header ||
                "";

              const quoteHtml =
                data?.post_excerpt || data?.post_content || "";

              const clientName = data?.post_title || "Client Name";
              const clientImage = data?.banner || "";

              const clientRole =
                acf?.client_designation ||
                acf?.designation ||
                acf?.company ||
                "";

              const keyOutcomesRaw = [
                acf?.key_outcomes_1,
                acf?.key_outcomes_2,
                acf?.key_outcomes_3,
                acf?.key_outcomes_4,
              ].filter(Boolean);

              const keyOutcomes = keyOutcomesRaw
                .slice(0, 3)
                .map((text) => {
                  const str = String(text).trim();

                  const match = str.match(
                    /^((?:\d+(?:\.\d+)?\s*[KMB]?)\s*(?:to|–|-|→|➡️|->)\s*(?:\d+(?:\.\d+)?\s*[KMB]?)|\d+%|\d+(?:\.\d+)?\s*(?:hrs|hours|days|x|X))\s*(.*)$/i
                  );

                  return {
                    value: match?.[1] || "",
                    label: (match?.[2] || str).trim(),
                  };
                });

              return (
                <div key={index}>
                  <div className="acfCard">
                    {header ? (
                      <h2
                        className="acfMainTitle"
                        dangerouslySetInnerHTML={{
                          __html: header,
                        }}
                      />
                    ) : null}

                    <div
                      className="acfQuote"
                      dangerouslySetInnerHTML={{
                        __html: quoteHtml,
                      }}
                    />

                    <h4 className="acfClientSliderLine">
                      {clientImage ? (
                        <img
                          src={clientImage}
                          alt={clientName}
                          className="testimonialImg"
                        />
                      ) : null}

                      {clientName}
                    </h4>

                    {clientRole ? (
                      <div className="acfClientRole">
                        {clientRole}
                      </div>
                    ) : null}

                    {keyOutcomes.length > 0 && (
                      <>
                        <div className="acfKeyLabel">
                          Key Outcomes
                        </div>

                        <div className="acfOutcomeGrid">
                          {keyOutcomes.map((o, idx) => (
                            <div
                              className="acfOutcomeBox"
                              key={idx}
                            >
                              <div className="acfOutcomeText">
                                <span>{o.value}</span>{" "}
                                {o.label}
                              </div>
                            </div>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>

      <style>{sliderWidthFixCss}</style>
      <style>{acfCss}</style>
    </section>
  );
};

/* =========================
   ✅ Width Fix CSS
========================= */
const sliderWidthFixCss = `
.testimonial .slick-slider{
  max-width:100%;
}
.testimonial .slick-list{
  overflow:hidden;
}
.testimonial .slick-track{
  display:flex;
}
.testimonial .slick-slide > div{
  padding:0 12px;
  box-sizing:border-box;
}
.testimonial img{
  max-width:100%;
}
`;

/* =========================
   ✅ ACF CSS
========================= */
const acfCss = `
.testimonialAcfWrap{
  padding:70px 0;
  background:#fff;
}

.testimonialAcfWrap .slick-initialized .slick-slide div{
  height:auto;
}

.testimonialAcfWrap .slick-initialized .slick-slide{
  display:block !important;
}

.acfCard{
  max-width:980px;
  margin:0 auto;
  text-align:center;
}

.acfMainTitle{
  font-size:26px;
  font-weight:800;
  color:#1749d6;
  margin-bottom:4px;
}

.acfQuote{
  max-width:820px;
  margin:0 auto 18px;
  line-height:1.9;
  color:#111827;
}

.acfClientSliderLine{
  margin:16px 0 4px;
  font-size:16px;
  font-weight:800;
  color:#111827;
  display:flex;
  align-items:center;
  justify-content:center;
  gap:10px;
}

.acfClientSliderLine .testimonialImg{
  width:46px;
  height:46px;
  border-radius:50%;
  object-fit:cover;
}

.acfClientRole{
  font-size:13px;
  color:#6b7280;
  margin-bottom:22px;
}

.acfKeyLabel{
  margin:5px 0 14px;
  font-size:18px;
  font-weight:800;
  color:#1749d5;
}

.acfOutcomeGrid{
  display:flex;
  justify-content:center;
  gap:22px;
  flex-wrap:wrap;
}

.acfOutcomeBox{
  flex:1;
  border:1.6px dashed #2551d5;
  border-radius:14px;
  padding:18px 14px;
  background:#fff;
  display:flex;
  align-items:center;
  justify-content:center;
}

.acfOutcomeText{
  font-size:14px;
  line-height:1.25;
  color:#111827;
}

.acfOutcomeText span{
  font-weight:800;
  color:#1749d6;
}

@media(max-width:768px){

  .acfMainTitle{
    font-size:22px;
  }

  .acfClientSliderLine{
    flex-direction:column;
    gap:8px;
  }

  .acfOutcomeBox{
    width:min(260px,92vw);
  }
}
`;