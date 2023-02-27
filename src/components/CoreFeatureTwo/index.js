import React, { memo } from "react";

export const CoreFeatureTwo = memo(() => {
  return (
    <section className="features-area-seven pb-100 rel z-1">
      <div className="container">
        <div className="row row-cols-xl-5 row-cols-md-3 row-cols-sm-2 row-cols-1 justify-content-center">
          <div className="col">
            <div className="feature-item-seven mt-30 wow fadeInUp delay-0-2s">
              <div className="icon">
                <i className="flaticon-idea" />
              </div>
              <h5>Make Strategy</h5>
              <p>
                Define objective brand Plans, keyword research &amp; positioning
                strategy.
              </p>
            </div>
          </div>
          <div className="col">
            <div className="feature-item-seven color-two wow fadeInUp delay-0-2s">
              <div className="icon">
                <i className="flaticon-graphic-design" />
              </div>
              <h5>Website Design</h5>
              <p>
                We settle on some initial design drafts for website &amp; choose
                one concept.
              </p>
            </div>
          </div>
          <div className="col">
            <div className="feature-item-seven color-three mt-40 wow fadeInUp delay-0-2s">
              <div className="icon">
                <i className="flaticon-coding-2" />
              </div>
              <h5>Development</h5>
              <p>
                To make the content, information architecture, visual design all
                work
              </p>
            </div>
          </div>
          <div className="col">
            <div className="feature-item-seven color-four wow fadeInUp delay-0-2s">
              <div className="icon">
                <i className="flaticon-checklist" />
              </div>
              <h5>Project Testing</h5>
              <p>
                Our team of experts are always available for any updates you may
                need.
              </p>
            </div>
          </div>
          <div className="col">
            <div className="feature-item-seven color-five mt-40 wow fadeInUp delay-0-2s">
              <div className="icon">
                <i className="flaticon-goal" />
              </div>
              <h5>Project Lunch</h5>
              <p>
                Sit amet conse adipies elitec eiusmod tempors sncidide sesy
                labore
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
