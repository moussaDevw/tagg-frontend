import Link from "next/link";
import React, { memo } from "react";

export const ProjectDeliver = memo(() => {
  return (
    <section className="project-area pb-100 rel z-1">
      <div className="container-fluid gap-wide">
        <div className="row justify-content-center">
          <div className="col-xl-4 col-md-6">
            <div className="project-item wow fadeInUp delay-0-2s">
              <div className="project-iamge">
                <img src="assets/images/projects/project1.jpg" alt="Project" />
                <div className="project-over">
                  <Link href="/project-details">
                    <a className="details-btn">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                  <h3>Dashboard Design</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="project-item wow fadeInUp delay-0-4s">
              <div className="project-iamge">
                <img src="assets/images/projects/project2.jpg" alt="Project" />
                <div className="project-over">
                  <Link href="/project-details">
                    <a className="details-btn">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                  <h3>Dashboard Design</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="project-item wow fadeInUp delay-0-6s">
              <div className="project-iamge">
                <img src="assets/images/projects/project3.jpg" alt="Project" />
                <div className="project-over">
                  <Link href="/project-details">
                    <a className="details-btn">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                  <h3>Dashboard Design</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="project-item wow fadeInUp delay-0-2s">
              <div className="project-iamge">
                <img src="assets/images/projects/project4.jpg" alt="Project" />
                <div className="project-over">
                  <Link href="/project-details">
                    <a className="details-btn">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                  <h3>Dashboard Design</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="project-item wow fadeInUp delay-0-4s">
              <div className="project-iamge">
                <img src="assets/images/projects/project5.jpg" alt="Project" />
                <div className="project-over">
                  <Link href="/project-details">
                    <a className="details-btn">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                  <h3>Dashboard Design</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="project-item wow fadeInUp delay-0-6s">
              <div className="project-iamge">
                <img src="assets/images/projects/project6.jpg" alt="Project" />
                <div className="project-over">
                  <Link href="/project-details">
                    <a className="details-btn">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                  <h3>Dashboard Design</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
