import Link from "next/link";
import React, { memo } from "react";

export const SupportFeatures = memo(() => {
  return (
    <section
      className="support-features-area bgs-cover bgc-lighter pt-130 pb-100 rel z-1"
      style={{
        backgroundImage: "url(assets/images/features/support-features-bg.png)",
      }}
    >
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-xl-6 col-lg-7">
            <div className="support-features-wrap rmb-65 wow fadeInUp delay-0-2s">
              <div className="row">
                <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6">
                  <div className="service-item style-two">
                    <div className="icon">
                      <i className="flaticon-responsive" />
                    </div>
                    <h5>
                      <Link href="/service-details">
                        <a>Responsive design</a>
                      </Link>
                    </h5>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6">
                  <div className="service-item style-two">
                    <div className="icon">
                      <i className="flaticon-feature" />
                    </div>
                    <h5>
                      <Link href="/service-details">
                        Powerful Customization
                      </Link>
                    </h5>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6">
                  <div className="service-item style-two">
                    <div className="icon">
                      <i className="flaticon-aim" />
                    </div>
                    <h5>
                      <Link href="/service-details">
                        Cool &amp; modern animations
                      </Link>
                    </h5>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6">
                  <div className="service-item style-two">
                    <div className="icon">
                      <i className="flaticon-seo" />
                    </div>
                    <h5>
                      <Link href="/service-details">
                        <a>SEO Friendly Coding</a>
                      </Link>
                    </h5>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6">
                  <div className="service-item style-two">
                    <div className="icon">
                      <i className="flaticon-search-location" />
                    </div>
                    <h5>
                      <Link href="/service-details">
                        Best Technical supports
                      </Link>
                    </h5>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6">
                  <div className="service-item style-two">
                    <div className="icon">
                      <i className="flaticon-settings" />
                    </div>
                    <h5>
                      <Link href="/service-details">
                        Varied Layouts &amp; parallax
                      </Link>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="support-features-content mb-30 wow fadeInUp delay-0-4s">
              <div className="section-title mb-30">
                <span className="sub-title mb-15">Support &amp; Features</span>
                <h2>Amazing web design development features</h2>
              </div>
              <p>
                Sit amet consectetur adipiscing eiusmod tempor incididunt labore
                et dolore magna aliquae suspendisse ultrices gravida. Risus
                commodo viverra maecenas accumsan
              </p>
              <Link href="/about">
                <a className="theme-btn mt-25">
                  Learn More About Us{" "}
                  <i className="fas fa-angle-double-right" />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
