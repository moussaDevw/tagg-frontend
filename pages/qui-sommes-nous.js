import Head from "next/head";
import Layout from "../src/layout/Layout";
import PageBanner from "../src/layout/PageBanner";

const About = () => {
  return (
    <Layout header={2} footer={1}>
      <Head>
        <title>Qui sommes-nous</title>
      </Head>
      <PageBanner
        titleHtml={`À<span> propos</span>`}
        titleText="Qui sommes-nous"
      />
      <section className="ww-do-two-area py-130 rel z-1">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-xl-5 col-lg-6">
              <div className="ww-do-two-content rmb-65 wow fadeInUp delay-0-2s">
                <div className="section-title mb-30">
                  <span className="sub-title style-two mb-15">Que faisons-nous ?</span>
                  <h2>Nous sommes une équipe numérique professionnelle</h2>
                </div>
                <p>
                  Nous sommes une entreprise spécialisée dans les solutions IT,
                  le développement web et l'assistance virtuelle pour les
                  entreprises et les particuliers.
                </p>
                Nous proposons une large gamme de services informatiques, tels
                que le développement de logiciels sur mesure, la création de
                sites web professionnels et responsives, la mise en place de
                solutions cloud, la maintenance et l'assistance informatique, et
                bien plus encore.
                <p>
                  Nous sommes également fiers d'offrir une assistance virtuelle
                  professionnelle pour vous aider dans vos tâches
                  administratives et organisationnelles.
                </p>
                Notre équipe d'assistants virtuels expérimentés peut vous aider
                à gérer vos emails, à planifier vos réunions, à coordonner vos
                projets et à gérer vos tâches quotidiennes pour que vous
                puissiez vous concentrer sur ce qui compte le plus.
                <p>
                  Notre objectif est de vous fournir des solutions IT innovantes
                  et efficaces qui répondent à vos besoins uniques.
                </p>
                Nous travaillons en étroite collaboration avec vous pour
                comprendre vos besoins spécifiques et vous offrir des solutions
                personnalisées qui améliorent votre efficacité, votre
                productivité et votre rentabilité.
                <p>
                  Nous sommes convaincus que notre expertise, notre expérience
                  et notre engagement envers l'excellence nous permettent de
                  fournir des solutions informatiques de qualité supérieure à
                  des prix compétitifs. Contactez-nous dès aujourd'hui pour en
                  savoir plus sur nos services et pour discuter de vos besoins
                  informatiques.
                </p>
                {/* <div className="row pt-15">
                  <div className="col-sm-6">
                    <div className="feature-item-two border-right pe-sm-3">
                      <div className="icon">
                        <i className="fas fa-check" />
                      </div>
                      <h5>Customize Website</h5>
                      <p>
                        Pick a template customize anything answer or question
                        website design just you.
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="feature-item-two color-two">
                      <div className="icon">
                        <i className="fas fa-check" />
                      </div>
                      <h5>Premium Design</h5>
                      <p>
                        Start your own blog, add an online store and accept
                        bookings online always.
                      </p>
                    </div>
                  </div>
                </div> */}
                {/* <div className="ww-do-btns">
                  <Link href="/about">
                    <a className="theme-btn mt-15">
                      Create Your Website{" "}
                      <i className="fas fa-angle-double-right" />
                    </a>
                  </Link>
                  <a
                    href="https://www.youtube.com/watch?v=9Y7ma241N8k"
                    className="mfp-iframe video-play-text mt-15"
                  >
                    <i className="fas fa-play" /> <span>Watch Videos</span>
                  </a>
                </div> */}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="ww-do-two-images rel">
                <div className="row">
                  <div className="col-sm-7 offset-1">
                    <img
                      className="image-one wow fadeInUp delay-0-4s"
                      src="assets/images/about/cta.png"
                      alt="What We Do"
                    />
                  </div>
                  <div className="col-sm-4">
                    <img
                      className="image-two wow fadeInUp delay-0-6s"
                      src="assets/images/about/what-we-offer.png"
                      alt="What We Do"
                    />
                    <img
                      className="image-three wow fadeInUp delay-0-8s"
                      src="assets/images/about/mission-visson.png"
                      alt="What We Do"
                    />
                  </div>
                </div>
                <div className="year-of-experience wow zoomIn delay-0-6s">
                  <span className="number">3</span>
                  Des années d'expérience.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default About;
