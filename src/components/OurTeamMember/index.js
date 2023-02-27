import Link from "next/link";
import React, { memo } from "react";

export const OurTeamMember = memo(() => {
  return (
    <section className="team-area pt-130 pb-35 rel z-1">
      <div className="container">
        <div className="section-title text-center mb-50">
          <span className="sub-title mb-15">Our Team Member</span>
          <h2>Exclusive Team Member</h2>
        </div>
        <div className="row justify-content-center">
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="team-member wow fadeInUp delay-0-2s">
              <div className="image">
                <img src="assets/images/team/member1.jpg" alt="Member" />
              </div>
              <div className="content">
                <h5>
                  <Link href="/team-profile">Richard C. Harrison</Link>
                </h5>
                <span className="designation">Senior Manager</span>
                <div className="social-style-one">
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="#">
                    <i className="fab fa-linkedin-in" />
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="team-member wow fadeInUp delay-0-4s">
              <div className="image">
                <img src="assets/images/team/member2.jpg" alt="Member" />
              </div>
              <div className="content">
                <h5>
                  <Link href="/team-profile">Richard C. Harrison</Link>
                </h5>
                <span className="designation">Web Developer</span>
                <div className="social-style-one">
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="#">
                    <i className="fab fa-linkedin-in" />
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="team-member wow fadeInUp delay-0-6s">
              <div className="image">
                <img src="assets/images/team/member3.jpg" alt="Member" />
              </div>
              <div className="content">
                <h5>
                  <Link href="/team-profile">Michael D. Jackson</Link>
                </h5>
                <span className="designation">Business Developer</span>
                <div className="social-style-one">
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="#">
                    <i className="fab fa-linkedin-in" />
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="team-member wow fadeInUp delay-0-8s">
              <div className="image">
                <img src="assets/images/team/member4.jpg" alt="Member" />
              </div>
              <div className="content">
                <h5>
                  <Link href="/team-profile">Damian S. Madison</Link>
                </h5>
                <span className="designation">Product Designer</span>
                <div className="social-style-one">
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="#">
                    <i className="fab fa-linkedin-in" />
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
