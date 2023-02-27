import React, { memo } from "react";

export const TechnologyFeatures = memo(() => {
  return (
    <section className="features-area pb-100 rel z-1">
      <div className="container">
        <div className="section-title text-center mb-50">
          <span className="sub-title mb-15">Technology Features</span>
          <h2>Full Potential Modern Features</h2>
        </div>
        <div className="row row-cols-xl-7 row-cols-lg-5 row-cols-md-4 row-cols-sm-3 row-cols-2 justify-content-center">
          <div className="col">
            <div className="feature-item wow fadeInUp delay-0-2s">
              <div className="image">
                <img src="assets/images/features/logo1.png" alt="Logo" />
              </div>
              <h5>Bootstrap</h5>
            </div>
          </div>
          <div className="col">
            <div className="feature-item wow fadeInDown delay-0-2s">
              <div className="image">
                <img src="assets/images/features/logo2.png" alt="Logo" />
              </div>
              <h5>HTML</h5>
            </div>
          </div>
          <div className="col">
            <div className="feature-item wow fadeInUp delay-0-2s">
              <div className="image">
                <img src="assets/images/features/logo3.png" alt="Logo" />
              </div>
              <h5>CSS</h5>
            </div>
          </div>
          <div className="col">
            <div className="feature-item wow fadeInDown delay-0-2s">
              <div className="image">
                <img src="assets/images/features/logo4.png" alt="Logo" />
              </div>
              <h5>JS</h5>
            </div>
          </div>
          <div className="col">
            <div className="feature-item wow fadeInUp delay-0-2s">
              <div className="image">
                <img src="assets/images/features/logo5.png" alt="Logo" />
              </div>
              <h5>Angular</h5>
            </div>
          </div>
          <div className="col">
            <div className="feature-item wow fadeInDown delay-0-2s">
              <div className="image">
                <img src="assets/images/features/logo6.png" alt="Logo" />
              </div>
              <h5>React JS</h5>
            </div>
          </div>
          <div className="col">
            <div className="feature-item wow fadeInUp delay-0-2s">
              <div className="image">
                <img src="assets/images/features/logo7.png" alt="Logo" />
              </div>
              <h5>Gulp.js</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
