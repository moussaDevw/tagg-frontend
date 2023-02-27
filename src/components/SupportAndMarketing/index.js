import React, { memo } from "react";
import ProgressBar from "../ProgressBar";

export const SupportAndMarketing = memo(() => {
  return (
    <section className="support-marketing-area py-130 rel z-1">
      <div className="container">
        <div className="row large-gap justify-content-between align-items-center">
          <div className="col-lg-6">
            <div className="support-marketing-progress rmb-65 wow fadeInUp delay-0-4s">
              <div className="section-title mb-35">
                <span className="sub-title style-two mb-15">
                  Support &amp; Marketing
                </span>
                <h2>Marketing to Support Your Web Design</h2>
              </div>
              <p>
                Fortunately, we aren’t just designers and developers here—we are
                writers, strategists, techs and creatives, all working towards
                the same end goal: our client’s success. As a full-service
                digital marketing agency
              </p>
              <div className="circle-counter">
                <div className="circle-progress-item">
                  <ProgressBar value={89} color="#3180fc" />
                  <h5>SEO Service</h5>
                </div>
                <div className="circle-progress-item">
                  <ProgressBar value={76} color="#f1b000" />
                  <h5>Copywriting</h5>
                </div>
                <div className="circle-progress-item">
                  <ProgressBar value={63} color="#16b4f2" />
                  <h5>PPC</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="support-marketing-list wow fadeInUp delay-0-2s">
              <ul className="list-style-one">
                <li>
                  <div className="content">
                    <h5>SEO Services</h5>
                    <p>
                      If {`you're`} looking to command market your online you
                      need comprehensive SEO strategy
                    </p>
                  </div>
                </li>
                <li>
                  <div className="content">
                    <h5>Copywriting</h5>
                    <p>
                      Amplify your brand and control the conversation with a
                      strategic content marketing strategy
                    </p>
                  </div>
                </li>
                <li>
                  <div className="content">
                    <h5>Pay per click</h5>
                    <p>
                      PPC management is all about delivering the right ad to
                      your future customers at the exact
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
