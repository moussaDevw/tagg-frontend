import Link from "next/link";
import React, { memo } from "react";

export const PricingPlan = memo(({ isDark }) => {
  return isDark ? (
    <section className="pricing-area bgc-dark-blue text-white py-130 rel z-1">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-10">
            <div className="section-title text-center mb-55 wow fadeInUp delay-0-2s">
              <span className="sub-title mb-20">Pricing Plan</span>
              <h2>Best Pricing Package</h2>
            </div>
          </div>
        </div>
        <div className="pricing-plan-item wow fadeInUp delay-0-2s">
          <div className="price-features">
            <h4>Basic Plan</h4>
            <ul className="list-style-two">
              <li>Landing page design (10 pages)</li>
              <li>Domin hosting provider</li>
              <li>HTML+CSS design (12 pages)</li>
              <li>Online support (24/7)</li>
              <li>Social Media Marketing</li>
              <li>WordPres development</li>
            </ul>
            <span className="badge">popular</span>
          </div>
          <div className="price-and-btn">
            <div className="content">
              <span className="price">248</span>
              <span className="save">
                Save<span> 25%</span>
              </span>
              <Link href="/pricing">
                <a className="theme-btn style-three">
                  Choose Package <i className="fas fa-angle-double-right" />
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="pricing-plan-item wow fadeInUp delay-0-2s">
          <div className="price-features">
            <h4>Standard Plan</h4>
            <ul className="list-style-two">
              <li>Landing page design (10 pages)</li>
              <li>Domin hosting provider</li>
              <li>HTML+CSS design (12 pages)</li>
              <li>Online support (24/7)</li>
              <li>Social Media Marketing</li>
              <li>WordPres development</li>
            </ul>
            <span className="badge">popular</span>
          </div>
          <div className="price-and-btn">
            <div className="content">
              <span className="price">452</span>
              <span className="save">
                Save<span> 43%</span>
              </span>
              <Link href="/pricing">
                <a className="theme-btn style-three">
                  Choose Package <i className="fas fa-angle-double-right" />
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="pricing-plan-item wow fadeInUp delay-0-2s">
          <div className="price-features">
            <h4>Premium Plan</h4>
            <ul className="list-style-two">
              <li>Landing page design (10 pages)</li>
              <li>Domin hosting provider</li>
              <li>HTML+CSS design (12 pages)</li>
              <li>Online support (24/7)</li>
              <li>Social Media Marketing</li>
              <li>WordPres development</li>
            </ul>
            <span className="badge">popular</span>
          </div>
          <div className="price-and-btn">
            <div className="content">
              <span className="price">683</span>
              <span className="save">
                Save<span> 66%</span>
              </span>
              <Link href="/pricing">
                <a className="theme-btn style-three">
                  Choose Package <i className="fas fa-angle-double-right" />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="wave-shapes">
        <img
          className="shape one"
          src="assets/images/shapes/pricing1.png"
          alt="Wave Shape"
        />
        <img
          className="shape two"
          src="assets/images/shapes/pricing2.png"
          alt="Wave Shape"
        />
      </div>
    </section>
  ) : (
    <section className="pricing-area py-130 rel z-1">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-10">
            <div className="section-title text-center mb-55 wow fadeInUp delay-0-2s">
              <span className="sub-title style-two mb-20">Pricing Plan</span>
              <h2>Best Pricing Package</h2>
            </div>
          </div>
        </div>
        <div className="pricing-plan-item wow fadeInUp delay-0-2s">
          <div className="price-features">
            <h4>Basic Plan</h4>
            <ul className="list-style-two">
              <li>Landing page design (10 pages)</li>
              <li>Domin hosting provider</li>
              <li>HTML+CSS design (12 pages)</li>
              <li>Online support (24/7)</li>
              <li>Social Media Marketing</li>
              <li>WordPres development</li>
            </ul>
            <span className="badge">popular</span>
          </div>
          <div className="price-and-btn">
            <div className="content">
              <span className="price">248</span>
              <span className="save">
                Save<span> 25%</span>
              </span>
              <Link href="/pricing">
                <a className="theme-btn style-three">
                  Choose Package <i className="fas fa-angle-double-right" />
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="pricing-plan-item wow fadeInUp delay-0-2s">
          <div className="price-features">
            <h4>Standard Plan</h4>
            <ul className="list-style-two">
              <li>Landing page design (10 pages)</li>
              <li>Domin hosting provider</li>
              <li>HTML+CSS design (12 pages)</li>
              <li>Online support (24/7)</li>
              <li>Social Media Marketing</li>
              <li>WordPres development</li>
            </ul>
            <span className="badge">popular</span>
          </div>
          <div className="price-and-btn">
            <div className="content">
              <span className="price">452</span>
              <span className="save">
                Save<span> 43%</span>
              </span>
              <Link href="/pricing">
                <a className="theme-btn style-three">
                  Choose Package <i className="fas fa-angle-double-right" />
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="pricing-plan-item wow fadeInUp delay-0-2s">
          <div className="price-features">
            <h4>Premium Plan</h4>
            <ul className="list-style-two">
              <li>Landing page design (10 pages)</li>
              <li>Domin hosting provider</li>
              <li>HTML+CSS design (12 pages)</li>
              <li>Online support (24/7)</li>
              <li>Social Media Marketing</li>
              <li>WordPres development</li>
            </ul>
            <span className="badge">popular</span>
          </div>
          <div className="price-and-btn">
            <div className="content">
              <span className="price">683</span>
              <span className="save">
                Save<span> 66%</span>
              </span>
              <Link href="/pricing">
                <a className="theme-btn style-three">
                  Choose Package <i className="fas fa-angle-double-right" />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="wave-shapes">
        <img
          className="shape one"
          src="assets/images/shapes/pricing-light1.png"
          alt="Wave Shape"
        />
        <img
          className="shape two"
          src="assets/images/shapes/pricing-light2.png"
          alt="Wave Shape"
        />
      </div>
    </section>
  );
});
