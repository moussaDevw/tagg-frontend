import React, { memo } from "react";

export const Workingrocess = memo(({ className, style }) => {
  return (
    <section style={style} className={`work-process-area pb-95 rel z-1 ${className}`}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="section-title text-center mb-55 wow fadeInUp delay-0-2s">
              <span className="sub-title mb-15">Processus de travail</span>
              <h2>Comment fonctionne-t-on ?</h2>
            </div>
          </div>
        </div>
        <div className="work-process-wrap rel z-1">
          <div className="row justify-content-between">
            <div className="col-xl-3 col-lg-5 col-sm-6">
              <div className="work-process-item mt-30 wow fadeInUp delay-0-2s">
                <div className="icon">
                  <span className="number">01</span>
                  <i className="flaticon-optimization" />
                </div>
                <h4>Collecte d'informations</h4>
                {/* <p>Sit amet consectetur adipiscing elit sed eiusmod tempor</p> */}
              </div>
            </div>
            <div className="col-xl-3 col-lg-5 col-sm-6">
              <div className="work-process-item wow fadeInUp delay-0-4s">
                <div className="icon">
                  <span className="number">02</span>
                  <i className="flaticon-link" />
                </div>
                <h4>Planification des idées</h4>
                {/* <p>Sit amet consectetur adipiscing elit sed eiusmod tempor</p> */}
              </div>
            </div>
            <div className="col-xl-3 col-lg-5 col-sm-6">
              <div className="work-process-item mt-55 wow fadeInUp delay-0-6s">
                <div className="icon">
                  <span className="number">03</span>
                  <i className="flaticon-data" />
                </div>
                <h4>Analyse de la conception</h4>
                {/* <p>Sit amet consectetur adipiscing elit sed eiusmod tempor</p> */}
              </div>
            </div>
            <div className="col-xl-3 col-lg-5 col-sm-6">
              <div className="work-process-item mt-45 wow fadeInUp delay-0-8s">
                <div className="icon">
                  <span className="number">04</span>
                  <i className="flaticon-star" />
                </div>
                <h4>Développement</h4>
                {/* <p>Sit amet consectetur adipiscing elit sed eiusmod tempor</p> */}
              </div>
            </div>
          </div>
          <div className="work-process-shape">
            <img src="assets/images/shapes/worp-process-step.png" alt="Shape" />
          </div>
        </div>
      </div>
    </section>
  );
});
