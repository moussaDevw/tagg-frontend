import Link from "next/link";
import React, { memo } from "react";
// bgc-black
export const PopularWebServices = memo(() => {
  return (
    <section className="services-area-four bgc-black pt-130 pb-100">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-10">
            <div className="section-title text-center text-white mb-60 wow fadeInUp delay-0-2s">
              <span className="sub-title style-two mb-20">
                Services
              </span>
              <h2>Les services que nous proposons</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-4 col-md-6">
            <div className="service-item-four wow fadeInUp delay-0-2s">
              <div className="image">
                <img
                  src="assets/images/services/service-four1.png"
                  alt="Service"
                />
              </div>
              <h5>Création de sites web à partir de Figma, XD ou Photoshop</h5>
              {/* <Link href="/service-details">
                <a className="theme-btn style-three">
                  Service Details <i className="fas fa-angle-double-right" />
                </a>
              </Link> */}
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="service-item-four wow fadeInUp delay-0-4s">
              <div className="image">
                <img
                  src="assets/images/services/service-four2.png"
                  alt="Service"
                />
              </div>
              <h5>Développement d'applications mobiles et conception de sites web</h5>
              {/* <Link href="/service-details">
                <a className="theme-btn style-three">
                  Service Details <i className="fas fa-angle-double-right" />
                </a>
              </Link> */}
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="service-item-four wow fadeInUp delay-0-6s">
              <div className="image">
                <img
                  src="assets/images/services/service-four3.png"
                  alt="Service"
                />
              </div>
              <h5>eCommerce<br /></h5>
              {/* <Link href="/service-details">
                <a className="theme-btn style-three">
                  Service Details <i className="fas fa-angle-double-right" />
                </a>
              </Link> */}
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="service-item-four wow fadeInUp delay-0-2s">
              <div className="image">
                <img
                  src="assets/images/services/service-four4.png"
                  alt="Service"
                />
              </div>
              <h5>Ingénierie logicielle</h5>
              {/* <Link href="/service-details">
                <a className="theme-btn style-three">
                  Service Details <i className="fas fa-angle-double-right" />
                </a>
              </Link> */}
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="service-item-four wow fadeInUp delay-0-4s">
              <div className="image">
                <img
                  src="assets/images/services/service-four5.png"
                  alt="Service"
                />
              </div>
              {/* <h5>SEO (Search Engine Optimization)</h5> */}
              <h5>Solution cloud</h5>
              {/* <Link href="/service-details">
                <a className="theme-btn style-three">
                  Service Details <i className="fas fa-angle-double-right" />
                </a>
              </Link> */}
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="service-item-four wow fadeInUp delay-0-6s">
              <div className="image">
                <img
                  src="assets/images/services/service-four6.png"
                  alt="Service"
                />
              </div>
              <h5>Assistant virtuel</h5>
              {/* <Link href="/service-details">
                <a className="theme-btn style-three">
                  Service Details <i className="fas fa-angle-double-right" />
                </a>
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
