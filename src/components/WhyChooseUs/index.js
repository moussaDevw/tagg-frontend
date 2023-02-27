import React, { memo } from "react";

export const WhyChooseUs = memo(() => {
  return (
    <section className="why-choose-area py-120 rpb-130 rel z-1 overflow-hidden">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-xl-5 col-lg-6">
            <div className="why-choose-content pt-10 rmb-65 wow fadeInUp delay-0-2s">
              <div className="section-title mb-35">
                <span className="sub-title mb-15">Pourquoi nous choisir ?</span>
                <h4>Une société de conception de sites web en qui vous pouvez avoir confiance</h4>
              </div>
              <ul className="list-style-one">
                <li>
                  <div className="content">
                    <h5>Tarifs compétitifs</h5>
                    <p>
                      Nous utilisons des tactiques de marketing stratégique dont
                      la programmation a fait ses preuves pour la plupart des
                      fonctions complexes.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="content">
                    <h5>Premium Development</h5>
                    <p>
                      L'accent est mis sur un design d'avant-garde et une
                      convivialité moderne. des normes de tactiques de marketing
                      stratégique éprouvées.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="content">
                    <h5>Aucun contrat n'est nécessaire</h5>
                    <p>
                      Vous pouvez augmenter, interrompre ou arrêter nos services à tout moment, ce qui vous permet de disposer de budgets de commercialisation complets.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="why-choose-image wow fadeInUp delay-0-4s">
              <img
                src="assets/images/about/why-choose-us.png"
                alt="why choose us"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="circle-shapes">
        <span className="shape one wow slideInDown delay-0-2s" />
        <span className="shape two wow slideInDown delay-0-4s" />
        <span className="shape three wow slideInDown delay-0-6s" />
        <span className="shape four wow slideInDown delay-0-8s" />
      </div>
    </section>
  );
});
