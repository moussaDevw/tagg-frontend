import Link from "next/link";
import React, { memo } from "react";
import Counter from "../Counter";

export const AboutDigitalSolution = memo(() => {
  return (
    <section className="about-area py-130 rel z-1">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-7 col-lg-6">
            <div className="about-image rmb-65 wow fadeInUp delay-0-2s">
              <img src="assets/images/about/mission-visson.png" alt="About" />
              <div
                className="years-fo-experience bgc-primary bgs-cover counter-text-wrap"
                style={{
                  backgroundImage:
                    "url(assets/images/about/years-fo-experience-bg.png)",
                }}
              >
                <Counter end={3} />
                <h4>
                  Des années d'expérience dans la conception de solutions web
                </h4>
              </div>
            </div>
          </div>
          <div className="col-xl-5 col-lg-6">
            <div className="about-content wow fadeInUp delay-0-4s">
              <div className="section-title mb-30">
                <span className="sub-title mb-15">À propos de nous.</span>
                <h5>
                  Nous cultivons des idées intelligentes pour les jeunes
                  entreprises et les acteurs chevronnés.
                </h5>
              </div>
              <ul>
                <h4>1-Notre mission</h4>
                <p>
                  Notre mission est d'aider les entreprises à digitaliser leurs
                  activités avec des solutions innovantes et personnalisées.
                </p>
                <h4>2-Nos objectifs</h4>
                <p>
                  Notre objectif est de fournir à nos clients des solutions
                  numériques efficaces et innovantes pour développer leurs
                  activités en ligne.
                </p>
                <h4>3-Pourquoi nous ?</h4>
                <p>
                  Nous sommes la meilleure option pour aider votre entreprise à
                  réussir dans le monde numérique grâce à notre équipe
                  expérimentée et dynamique.
                </p>
              </ul>

              {/* <div className="client-satisfactions counter-text-wrap pt-10 pb-10">
                <img src="assets/images/about/hands.png" alt="Hands" />

                <Counter end={3658} />
                <span className="heading">Clients Satisfactions</span>
              </div> */}
              {/* <Link href="/about">
                <a className="theme-btn mt-15">
                  Learn More About Us{" "}
                  <i className="fas fa-angle-double-right" />
                </a>
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
