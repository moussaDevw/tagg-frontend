import Link from "next/link";
import React from "react";

export const CtaAreaStart = () => {
  return (
    <section className="call-to-action-area rel z-2">
      <div className="container">
        <div
          className="cta-inner bgs-cover"
          style={{
            backgroundImage: "url(assets/images/background/cta-bg.jpg)",
          }}
        >
          <div className="row">
            <div className="col-xl-6">
              <div className="cta-item wow fadeInLeft delay-0-2s">
                <div className="icon">
                  <i className="flaticon-target" />
                </div>
                <h4>Have any Project On Minds ?</h4>
                <Link href="/contact">
                  <a className="details-btn">
                    <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="cta-item wow fadeInRight delay-0-2s">
                <div className="icon">
                  <i className="flaticon-target" />
                </div>
                <h4>We are to work SEO optimization ?</h4>
                <Link href="/contact">
                  <a className="details-btn">
                    <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
