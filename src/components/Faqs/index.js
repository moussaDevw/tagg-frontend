import React, { memo, useState } from "react";
import { Accordion } from "react-bootstrap";
import OxencyAccordion from "../OxencyAccordion";

export const Faqs = memo(({ faqsData }) => {
  const [active, setActive] = useState(`collapse0`);
  const onClick = (value) => {
    setActive(value === active ? "" : value);
  };
  return (
    <section className="faqs-area pb-130 rel z-1">
      <div className="container">
        <div className="row large-gap justify-content-between align-items-center">
          <div className="col-lg-6">
            <div className="faq-images rmb-65 rel">
              <div className="row">
                <div className="col-6 col-small">
                  <img
                    className="image-one wow fadeInUp delay-0-2s"
                    src="assets/images/faqs/faq1.jpg"
                    alt="FAQs"
                  />
                  <img
                    className="image-two wow fadeInUp delay-0-4s"
                    src="assets/images/faqs/faq2.jpg"
                    alt="FAQs"
                  />
                </div>
                <div className="col-6 col-small">
                  <img
                    className="image-three mt-95 wow fadeInUp delay-0-6s"
                    src="assets/images/faqs/faq3.jpg"
                    alt="FAQs"
                  />
                  <div className="year-of-experience wow zoomIn delay-0-6s">
                    <span className="number">25</span>
                    Years Of Web Experience
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="faq-content wow fadeInRight delay-0-2s">
              <div className="section-title mb-40">
                <span className="sub-title style-two mb-15">Faqs</span>
                <h2>Asked Questions about Website Design</h2>
              </div>
              <Accordion
                defaultActiveKey="collapse0"
                className="accordion"
                id="faq-accordion"
              >
                {faqsData.map((faq, i) => (
                  <OxencyAccordion
                    dec={faq.dec}
                    event={`collapse${i}`}
                    key={i}
                    title={faq.title}
                    onClick={() => onClick(`collapse${i}`)}
                    active={active}
                  />
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
