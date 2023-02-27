import Link from "next/link";
import React, { memo } from "react";

export const OurPricingPackage = memo(() => {
  return (
    <section className="pricing-area-two bgc-lighter pt-240 pb-100 rel z-1">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="section-title text-center mb-55 wow fadeInUp delay-0-2s">
              <span className="sub-title mb-15">Our Pricing Package</span>
              <h2>Website Design Packages</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="pricing-item-two wow fadeInUp delay-0-2s">
              <h4 className="title">Basic Plan</h4>
              <span className="badge">popular package</span>
              <div className="pricing-inner">
                <ul className="list-style-two">
                  <li>Landing page design (10 pages)</li>
                  <li>HTML+CSS design (12 pages)</li>
                  <li>Social Media Marketing</li>
                  <li>Domin hosting provider</li>
                  <li>Online support (24/7)</li>
                </ul>
                <div className="price-and-btn">
                  <div className="content">
                    <span className="price">248</span>
                    <span className="save">
                      Save<span> 25%</span>
                    </span>
                    <Link href="/pricing">
                      <a className="theme-btn style-three">
                        Choose Package{" "}
                        <i className="fas fa-angle-double-right" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="pricing-item-two wow fadeInUp delay-0-4s">
              <h4 className="title">Standard plan</h4>
              <span className="badge">popular package</span>
              <div className="pricing-inner">
                <ul className="list-style-two">
                  <li>Landing page design (10 pages)</li>
                  <li>HTML+CSS design (12 pages)</li>
                  <li>Social Media Marketing</li>
                  <li>Domin hosting provider</li>
                  <li>Online support (24/7)</li>
                </ul>
                <div className="price-and-btn">
                  <div className="content">
                    <span className="price">352</span>
                    <span className="save">
                      Save<span> 25%</span>
                    </span>
                    <Link href="/pricing">
                      <a className="theme-btn style-three">
                        Choose Package{" "}
                        <i className="fas fa-angle-double-right" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="pricing-item-two wow fadeInUp delay-0-2s">
              <h4 className="title">golder Plan</h4>
              <span className="badge">popular package</span>
              <div className="pricing-inner">
                <ul className="list-style-two">
                  <li>Landing page design (10 pages)</li>
                  <li>HTML+CSS design (12 pages)</li>
                  <li>Social Media Marketing</li>
                  <li>Domin hosting provider</li>
                  <li>Online support (24/7)</li>
                </ul>
                <div className="price-and-btn">
                  <div className="content">
                    <span className="price">583</span>
                    <span className="save">
                      Save<span> 25%</span>
                    </span>
                    <Link href="/pricing">
                      <a className="theme-btn style-three">
                        Choose Package{" "}
                        <i className="fas fa-angle-double-right" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="pricing-item-two wow fadeInUp delay-0-4s">
              <h4 className="title">platinum Plan</h4>
              <span className="badge">popular package</span>
              <div className="pricing-inner">
                <ul className="list-style-two">
                  <li>Landing page design (10 pages)</li>
                  <li>HTML+CSS design (12 pages)</li>
                  <li>Social Media Marketing</li>
                  <li>Domin hosting provider</li>
                  <li>Online support (24/7)</li>
                </ul>
                <div className="price-and-btn">
                  <div className="content">
                    <span className="price">834</span>
                    <span className="save">
                      Save<span> 25%</span>
                    </span>
                    <Link href="/pricing">
                      <a className="theme-btn style-three">
                        Choose Package{" "}
                        <i className="fas fa-angle-double-right" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pricing-shapes">
        <img
          className="shape dots"
          src="assets/images/shapes/pricing-bg-dots.png"
          alt="Shape"
        />
        <img
          className="shape wave"
          src="assets/images/shapes/pricing-wave-line.png"
          alt="Shape"
        />
      </div>
    </section>
  );
});
