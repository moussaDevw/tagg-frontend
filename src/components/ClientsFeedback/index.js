import React, { memo } from "react";
import Slider from "react-slick";
import { feedbackActive } from "../../sliderProps"

export const ClientsFeedback = memo(() => {
  return (
    <section className="feedback-area py-130 rel z-1">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-8">
            <div className="section-title text-center mb-40 wow fadeInUp delay-0-2s">
              <span className="sub-title mb-20">Clents Feedback</span>
              <h2>3,000+ Positive reviews by our satisfied clients</h2>
            </div>
          </div>
        </div>
        <Slider {...feedbackActive} className="feedback-active">
          <div className="feedback-item wow fadeInUp delay-0-2s">
            <div className="author-logo">
              <i className="far fa-quote-right" />
              <img src="assets/images/feedback/logo1.png" alt="Logo" />
            </div>
            <h4>On the other hand denounes with indignwy</h4>
            <p>
              Sed ut perspiciatis unde omnis natus error voluptatem accusantium
              dolore laudantuce totam rem aperiam eaque inventore
            </p>
            <div className="feedback-author">
              <img src="assets/images/feedback/author1.jpg" alt="Author" />
              <div className="content">
                <h5>Jonathan B. Bohnert</h5>
                <span>CEO &amp; Founder</span>
              </div>
            </div>
          </div>
          <div className="feedback-item wow fadeInUp delay-0-4s">
            <div className="author-logo">
              <i className="far fa-quote-right" />
              <img src="assets/images/feedback/logo2.png" alt="Logo" />
            </div>
            <h4>Custom programming fores most complex functions</h4>
            <p>
              Sed ut perspiciatis unde omnis natus error voluptatem accusantium
              dolore laudantuce totam rem aperiam eaque inventore
            </p>
            <div className="feedback-author">
              <img src="assets/images/feedback/author2.jpg" alt="Author" />
              <div className="content">
                <h5>Nicholas R. Gomez</h5>
                <span>Medical Officers</span>
              </div>
            </div>
          </div>
          <div className="feedback-item wow fadeInUp delay-0-6s">
            <div className="author-logo">
              <i className="far fa-quote-right" />
              <img src="assets/images/feedback/logo3.png" alt="Logo" />
            </div>
            <h4>We use strategic marketing tactics be proven work.</h4>
            <p>
              Sed ut perspiciatis unde omnis natus error voluptatem accusantium
              dolore laudantuce totam rem aperiam eaque inventore
            </p>
            <div className="feedback-author">
              <img src="assets/images/feedback/author3.jpg" alt="Author" />
              <div className="content">
                <h5>James R. Lawrence</h5>
                <span>Junior Manager</span>
              </div>
            </div>
          </div>
          <div className="feedback-item wow fadeInUp delay-0-2s">
            <div className="author-logo">
              <i className="far fa-quote-right" />
              <img src="assets/images/feedback/logo1.png" alt="Logo" />
            </div>
            <h4>On the other hand denounes with indignwy</h4>
            <p>
              Sed ut perspiciatis unde omnis natus error voluptatem accusantium
              dolore laudantuce totam rem aperiam eaque inventore
            </p>
            <div className="feedback-author">
              <img src="assets/images/feedback/author1.jpg" alt="Author" />
              <div className="content">
                <h5>Jonathan B. Bohnert</h5>
                <span>CEO &amp; Founder</span>
              </div>
            </div>
          </div>
          <div className="feedback-item wow fadeInUp delay-0-2s">
            <div className="author-logo">
              <i className="far fa-quote-right" />
              <img src="assets/images/feedback/logo2.png" alt="Logo" />
            </div>
            <h4>Custom programming fores most complex functions</h4>
            <p>
              Sed ut perspiciatis unde omnis natus error voluptatem accusantium
              dolore laudantuce totam rem aperiam eaque inventore
            </p>
            <div className="feedback-author">
              <img src="assets/images/feedback/author2.jpg" alt="Author" />
              <div className="content">
                <h5>Nicholas R. Gomez</h5>
                <span>Medical Officers</span>
              </div>
            </div>
          </div>
          <div className="feedback-item wow fadeInUp delay-0-2s">
            <div className="author-logo">
              <i className="far fa-quote-right" />
              <img src="assets/images/feedback/logo3.png" alt="Logo" />
            </div>
            <h4>We use strategic marketing tactics be proven work.</h4>
            <p>
              Sed ut perspiciatis unde omnis natus error voluptatem accusantium
              dolore laudantuce totam rem aperiam eaque inventore
            </p>
            <div className="feedback-author">
              <img src="assets/images/feedback/author3.jpg" alt="Author" />
              <div className="content">
                <h5>James R. Lawrence</h5>
                <span>Junior Manager</span>
              </div>
            </div>
          </div>
        </Slider>
      </div>
      <div className="feedback-shape one">
        <img src="assets/images/feedback/man1.jpg" alt="Man Shape" />
      </div>
      <div className="feedback-shape two">
        <img src="assets/images/feedback/man2.jpg" alt="Man Shape" />
      </div>
    </section>
  );
});
