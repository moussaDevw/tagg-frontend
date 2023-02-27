import Link from "next/link";
import { AboutDigitalSolution } from "../src/components/AboutDigitalSolution";
import CallToAction from "../src/components/CallToAction";
import { PopularWebServices } from "../src/components/PopularWebServices";
import { ServicesTech } from "../src/components/Services";
import { WhyChooseUs } from "../src/components/WhyChooseUs";
import { Workingrocess } from "../src/components/WorkingProcess";
import Layout from "../src/layout/Layout";

const Index = () => {
  return (
    <Layout footer={1} header={2}>
      <section className="hero-area bgc-dark-blue rel z-1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 align-self-center">
              <div className="hero-content text-white my-120 rmb-0 wow fadeInLeft delay-0-2s">
                <span className="sub-title mb-35">
                  3 ans d'expérience dans la conception de solutions web
                </span>
                <h4>
                  Vous voulez multiplier vos ventes en offrant une expérience
                  digitale unique à vos clients.
                </h4>
                <p>
                  Rejoignez les nombreux entrepreneurs à succès qui nous ont
                  déjà fait confiance pour construire leur site web.
                </p>
                <div className="hero-btns pt-10">
                  <Link href="/contact">
                    <a className="theme-btn mt-15">
                      Nous Contacter <i className="fas fa-angle-double-right" />
                    </a>
                  </Link>
                  {/* <a
                    href="https://www.youtube.com/watch?v=9Y7ma241N8k"
                    className="mfp-iframe video-play-text mt-15"
                  >
                    <i className="fas fa-play" /> <span>How IT Works</span>
                  </a> */}
                </div>
              </div>
            </div>
            <div className="col-lg-5 align-self-end">
              <div className="hero-images mt-75 wow fadeInRight delay-0-2s">
                <img src="assets/images/hero/hero-two.png" alt="Hero" />
              </div>
            </div>
          </div>
        </div>
        <div className="wave-shapes">
          <img
            className="shape one"
            src="assets/images/shapes/hero1.png"
            alt="Wave Shape"
          />
          <img
            className="shape two"
            src="assets/images/shapes/hero2.png"
            alt="Wave Shape"
          />
        </div>
      </section>
      {/* Hero Section End */}
      {/* About Area start */}
      <AboutDigitalSolution />
      {/* About Area end */}
      {/* ServicesTech Area start */}
      {/* Services Area start */}
      <PopularWebServices />
      <Workingrocess style={{ marginTop: "150px" }} className="mt-6" />
      {/* Services Area end */}
      <ServicesTech />
      {/* You have a project */}
      <CallToAction
        title="Vous avez un projet ?"
        description=" Assez de défilement, il est temps d'agir. Contactez TÀGG
                      pour booster votre entreprise avec des solutions digitales
                      innovantes."
        textButton="Prendre contact"
      />
      {/* Why Choose Us Area start */}
      <WhyChooseUs />
      {/* Why Choose Us Area end */}
    </Layout>
  );
};
export default Index;
