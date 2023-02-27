import Link from "next/link";
import React, { memo } from "react";
import Counter from "../Counter";

export const CompanyStatistics2 = memo(() => {
  return (
    <section className="statistics-area bgc-dark-blue text-white pb-130 rel z-1">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-10">
            <div className="section-title text-center mb-50 wow fadeInUp delay-0-2s">
              <span className="sub-title mb-20">Company Statistics</span>
              <h2>
                {`We're`} the best web development agency much more achievement
              </h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-xl-3 col-lg-4 col-6 col-small">
            <div className="counter-item counter-text-wrap wow fadeInUp delay-0-2s">
              <i className="flaticon-startup" />

              <Counter end={2365} />
              <span className="counter-title">Projects complete</span>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-6 col-small">
            <div className="counter-item counter-text-wrap wow fadeInUp delay-0-4s">
              <i className="flaticon-global" />

              <Counter end={9632} />
              <span className="counter-title">Trusted Global Clients</span>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-6 col-small">
            <div className="counter-item counter-text-wrap wow fadeInUp delay-0-6s">
              <i className="flaticon-rating" />

              <Counter end={8504} />
              <span className="counter-title">Expert Team Member</span>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-6 col-small">
            <div className="counter-item counter-text-wrap wow fadeInUp delay-0-8s">
              <i className="flaticon-trophy" />

              <Counter end={6763} />
              <span className="counter-title">Projects complete</span>
            </div>
          </div>
        </div>
        <div className="counter-cta mt-65 wow fadeInUp delay-0-2s">
          <h4>Interested ! Let’s work together</h4>
          <Link href="/contact">
            <a className="theme-btn style-three white-btn">
              Get Started Now <i className="fas fa-angle-double-right" />
            </a>
          </Link>
        </div>
      </div>
      <div className="wave-shapes">
        <img
          className="shape one"
          src="assets/images/shapes/counter1.png"
          alt="Wave Shape"
        />
        <img
          className="shape two"
          src="assets/images/shapes/counter2.png"
          alt="Wave Shape"
        />
      </div>
    </section>
  );
});
