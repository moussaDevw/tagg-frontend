import Layout from "../src/layout/Layout";
import PageBanner from "../src/layout/PageBanner";
const Services = () => {
  return (
    <Layout header={2} footer={1}>
      <PageBanner
        titleHtml={`Nos<span> Services</span>`}
        titleText="Services"
      />
      <section className="project-creative-area py-130 rel z-1">
        <div className="container">
          <div className="project-creative-item">
            <div className="image wow fadeInLeft delay-0-2s">
              <img
                src="assets/images/projects/project-three1.jpg"
                alt="Project Creative"
              />
            </div>
            <div className="content wow fadeInRight delay-0-2s">
              <div className="section-title">
                <span className="sub-title style-two mb-15">01</span>
                <h2>Création de sites web</h2>
              </div>
              <hr />
              <p>
                Nous travaillons en étroite collaboration avec chaque client
                pour comprendre ses objectifs et créer un site web unique qui
                reflète sa marque et sa personnalité. Notre équipe de designers
                et de développeurs expérimentés utilise les dernières
                technologies pour garantir que votre site web est à la pointe de
                l'innovation et de la performance.
              </p>
            </div>
          </div>
          <div className="project-creative-item">
            <div className="content wow fadeInRight delay-0-2s">
              <div className="section-title">
                <span className="sub-title style-two mb-15">02</span>
                <h2>Développement d'applications mobiles et application web</h2>
              </div>
              <hr />
              <p>
                Notre équipe spécialisée dans le développement d'applications
                mobiles et web peut concevoir des solutions personnalisées pour
                répondre à vos besoins spécifiques et améliorer l'expérience
                utilisateur.
              </p>
            </div>
            <div className="image wow fadeInLeft delay-0-2s">
              <img
                src="assets/images/projects/project-creative2.jpg"
                alt="Project Creative"
              />
            </div>
          </div>
          <div className="project-creative-item">
            <div className="image wow fadeInLeft delay-0-2s">
              <img
                src="assets/images/shop/preview1.jpg"
                alt="Project Creative"
              />
            </div>
            <div className="content wow fadeInRight delay-0-2s">
              <div className="section-title">
                <span className="sub-title style-two mb-15">03</span>
                <h2>eCommerce</h2>
              </div>
              <hr />
              <p>
                Nous aidons les entreprises à lancer leur boutique en ligne et à
                atteindre de nouveaux clients grâce à notre service eCommerce.
                Nous offrons des solutions personnalisées pour répondre à vos
                besoins spécifiques, des paiements sécurisés à la gestion des
                stocks.
              </p>
            </div>
          </div>
          <div className="project-creative-item">
            <div className="content wow fadeInRight delay-0-2s">
              <div className="section-title">
                <span className="sub-title style-two mb-15">04</span>
                <h2>Ingénierie logicielle</h2>
              </div>
              <hr />
              <p>
                Notre service d'ingénierie logicielle offre des solutions
                innovantes et personnalisées pour répondre à vos besoins
                informatiques. Nous travaillons avec les dernières technologies
                pour développer des applications et des systèmes évolutifs,
                sécurisés et conviviaux.
              </p>
            </div>
            <div className="image wow fadeInLeft delay-0-2s">
              <img
                src="assets/images/projects/project-three2.jpg"
                alt="Project Creative"
              />
            </div>
          </div>
          <div className="project-creative-item">
            <div className="image wow fadeInLeft delay-0-2s">
              <img
                src="assets/images/projects/project-creative5.jpg"
                alt="Project Creative"
              />
            </div>
            <div className="content wow fadeInRight delay-0-2s">
              <div className="section-title">
                <span className="sub-title style-two mb-15">05</span>
                <h2>Solution cloud</h2>
              </div>
              <hr />
              <p>
                Chez <strong>TÀGG</strong>, nous sommes heureux de proposer une
                solution cloud innovante pour aider votre entreprise à réussir.
                Nous avons conçu une plateforme cloud de pointe pour vous offrir
                des fonctionnalités avancées de stockage, de partage et de
                collaboration de fichiers en ligne.
              </p>
            </div>
          </div>
          <div className="project-creative-item">
            <div className="content wow fadeInRight delay-0-2s">
              <div className="section-title">
                <span className="sub-title style-two mb-15">06</span>
                <h2>Assistant virtuel</h2>
              </div>
              <hr />
              <p>
                Chez <strong>TÀGG</strong>, nous proposons un service
                d'assistants virtuels professionnels pour vous aider à maximiser
                votre temps et à vous concentrer sur les aspects les plus
                importants de votre entreprise. Nous avons une équipe
                expérimentée qui peut gérer efficacement vos emails, votre
                calendrier, vos projets et vos tâches quotidiennes pour vous
                permettre de rester productif et organisé. Nous sommes fiers de
                proposer un service personnalisé pour répondre à vos besoins
                spécifiques, et notre équipe est disponible 24/7 pour vous aider
                à résoudre tout problème éventuel.
              </p>
            </div>
            <div className="image wow fadeInLeft delay-0-2s">
              <img
                src="assets/images/services/service-four6.png"
                alt="Project Creative"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Project Creative Area end */}
    </Layout>
  );
};
export default Services;
