import Link from "next/link";
import React, { memo } from "react";

export const OurPopularServices = memo(() => {
  return (
    <section className="services-area pt-130 pb-100 rel z-1">
      <div className="container">
        <div className="section-title text-center mb-55">
          <span className="sub-title mb-15">Our Popular Services</span>
          <h2>Amazing Web Design Service</h2>
        </div>
        <div className="row justify-content-center">
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="service-item wow fadeInUp delay-0-2s">
              <div className="icon">
                <i className="fab fa-react" />
              </div>
              <div className="content">
                <h5>
                  <Link href="/service-details">
                    <a>React js Development</a>
                  </Link>
                </h5>
                <p>Focus provide beautiful layout client look make import</p>
                <Link href="/service-details">
                  <a className="read-more">
                    Read More <i className="fas fa-angle-double-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="service-item wow fadeInUp delay-0-4s">
              <div className="icon">
                <i className="flaticon-data-transfer" />
              </div>
              <div className="content">
                <h5>
                  <Link href="/service-details">
                    <a>React Native Development</a>
                  </Link>
                </h5>
                <p>Focus provide beautiful layout client look make import</p>
                <Link href="/service-details">
                  <a className="read-more">
                    Read More <i className="fas fa-angle-double-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="service-item wow fadeInUp delay-0-6s">
              <div className="icon">
                <i className="flaticon-optimization" />
              </div>
              <div className="content">
                <h5>
                  <Link href="/service-details">Jamstack Development</Link>
                </h5>
                <p>Focus provide beautiful layout client look make import</p>
                <Link href="/service-details">
                  <a className="read-more">
                    Read More <i className="fas fa-angle-double-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="service-item wow fadeInUp delay-0-8s">
              <div className="icon">
                <i className="flaticon-coding" />
              </div>
              <div className="content">
                <h5>
                  <Link href="/service-details">Front-end development</Link>
                </h5>
                <p>Focus provide beautiful layout client look make import</p>
                <Link href="/service-details">
                  <a className="read-more">
                    Read More <i className="fas fa-angle-double-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="service-item wow fadeInUp delay-0-2s">
              <div className="icon">
                <i className="flaticon-carton-box" />
              </div>
              <div className="content">
                <h5>
                  <Link href="/service-details">MVP Development</Link>
                </h5>
                <p>Focus provide beautiful layout client look make import</p>
                <Link href="/service-details">
                  <a className="read-more">
                    Read More <i className="fas fa-angle-double-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="service-item wow fadeInUp delay-0-4s">
              <div className="icon">
                <i className="flaticon-app-development" />
              </div>
              <div className="content">
                <h5>
                  <Link href="/service-details">Web app Development</Link>
                </h5>
                <p>Focus provide beautiful layout client look make import</p>
                <Link href="/service-details">
                  <a className="read-more">
                    Read More <i className="fas fa-angle-double-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="service-item wow fadeInUp delay-0-6s">
              <div className="icon">
                <i className="flaticon-smartphone" />
              </div>
              <div className="content">
                <h5>
                  <Link href="/service-details">Mobile app Development</Link>
                </h5>
                <p>Focus provide beautiful layout client look make import</p>
                <Link href="/service-details">
                  <a className="read-more">
                    Read More <i className="fas fa-angle-double-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="service-item wow fadeInUp delay-0-8s">
              <div className="icon">
                <i className="flaticon-user-experience" />
              </div>
              <div className="content">
                <h5>
                  <Link href="/service-details">Team Agumentation</Link>
                </h5>
                <p>Focus provide beautiful layout client look make import</p>
                <Link href="/service-details">
                  <a className="read-more">
                    Read More <i className="fas fa-angle-double-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
