import Link from "next/link";
import React, { memo } from "react";

export const LatestNewBlog = memo(() => {
  return (
    <section className="news-blog-area pt-130 pb-75 rel z-1">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
              <span className="sub-title mb-15">Get Every Updates</span>
              <h2>Read Latest News &amp; Blog</h2>
            </div>
          </div>
        </div>
        <div className="row large-gap">
          <div className="col-lg-6">
            <div className="blog-item wow fadeInUp delay-0-2s">
              <div className="image">
                <img src="assets/images/blog/blog1.jpg" alt="Blog" />
              </div>
              <div className="content">
                <span className="date">
                  <i className="far fa-calendar-alt" /> 25 March 2022
                </span>
                <h4>
                  <Link href="/blog-details">
                    <a>Easy Ways to Incorporate Customer Feedback</a>
                  </Link>
                </h4>
                <div className="author">
                  <img src="assets/images/blog/author1.jpg" alt="Author" />
                  <div className="post-by">
                    <span>Post by</span>
                    <a href="#">Douglas B. Dickens</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="blog-item wow fadeInUp delay-0-4s">
              <div className="image">
                <img src="assets/images/blog/blog2.jpg" alt="Blog" />
              </div>
              <div className="content">
                <span className="date">
                  <i className="far fa-calendar-alt" /> 27 March 2022
                </span>
                <h4>
                  <Link href="/blog-details">
                    <a>How to create modern web site for your business?</a>
                  </Link>
                </h4>
                <div className="author">
                  <img src="assets/images/blog/author2.jpg" alt="Author" />
                  <div className="post-by">
                    <span>Post by</span>
                    <a href="#">Carson C. Rhodes</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="blog-item wow fadeInUp delay-0-2s">
              <div className="image">
                <img src="assets/images/blog/blog3.jpg" alt="Blog" />
              </div>
              <div className="content">
                <span className="date">
                  <i className="far fa-calendar-alt" /> 25 March 2022
                </span>
                <h4>
                  <Link href="/blog-details">
                    <a>How to digital marketing work social networking?</a>
                  </Link>
                </h4>
                <div className="author">
                  <img src="assets/images/blog/author3.jpg" alt="Author" />
                  <div className="post-by">
                    <span>Post by</span>
                    <a href="#">Robert T. Evans</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="blog-item wow fadeInUp delay-0-4s">
              <div className="image">
                <img src="assets/images/blog/blog4.jpg" alt="Blog" />
              </div>
              <div className="content">
                <span className="date">
                  <i className="far fa-calendar-alt" /> 25 March 2022
                </span>
                <h4>
                  <Link href="/blog-details">
                    <a>Easy Ways to Incorporate Customer Feedback</a>
                  </Link>
                </h4>
                <div className="author">
                  <img src="assets/images/blog/author4.jpg" alt="Author" />
                  <div className="post-by">
                    <span>Post by</span>
                    <a href="#">Stanley J. Contreras</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
