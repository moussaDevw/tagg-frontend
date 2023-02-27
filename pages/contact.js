import Layout from "../src/layout/Layout";
import PageBanner from "../src/layout/PageBanner";
const Contact = () => {
  return (
    <Layout header={2} footer={1}>
      <PageBanner titleHtml={`Contactez<span>-nous</span>`} titleText="Contact" />
      <section className="contact-us-page-area py-130">
        <div className="container">
          <div className="row align-items-end justify-content-between">
            <div className="col-lg-7">
              <div className="contact-content rmb-65 wow fadeInRight delay-0-2s">
                <div className="section-title mb-25">
                  <span className="sub-title style-two mb-15">Nous contacter</span>
                  <h2>
                    Commençons un nouveau projet ou travaillons ensemble !
                  </h2>
                </div>
                <form
                  onSubmit={(e) => e.preventDefault()}
                  id="contactForm"
                  className="contactForm z-1 rel"
                >
                  <div className="row pt-15">
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="name">Prénom & Nom<span className="text-danger">*</span></label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="form-control"
                          defaultValue=""
                          placeholder="Musa Diagne"
                          required
                          data-error="Veuillez saisir votre Prénom et Nom"
                        />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="email">Email<span className="text-danger">*</span></label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="form-control"
                          defaultValue=""
                          placeholder="support@gmail.com"
                          required
                          data-error="Veuillez entrer votre adresse e-mail"
                        />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="object">Objet<span className="text-danger">*</span></label>
                        <input
                          type="text"
                          id="object"
                          name="object"
                          className="form-control"
                          defaultValue=""
                          placeholder="Demande de ..."
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="message">Message<span className="text-danger">*</span></label>
                        <textarea
                          name="message"
                          id="message"
                          className="form-control"
                          rows={4}
                          placeholder="Écrire un message"
                          required
                          data-error="Please enter your Message"
                          defaultValue={""}
                        />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group pt-5 mb-0">
                        <button type="submit" className="theme-btn w-100">
                          Envoyer{" "}
                          <i className="fas fa-angle-double-right" />
                        </button>
                        <div id="msgSubmit" className="hidden" />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-xl-4 col-lg-5">
              <div className="contact-info wow fadeInLeft delay-0-2s">
                <div className="contact-info-item style-two">
                  <div className="icon">
                    <i className="fal fa-map-marker-alt" />
                  </div>
                  <div className="content">
                    <span className="title">Localisation</span>
                    <span className="text">
                      Scat urbam, Grand-yoff, Dakar
                    </span>
                  </div>
                </div>
                <div className="contact-info-item style-two">
                  <div className="icon">
                    <i className="far fa-envelope-open-text" />
                  </div>
                  <div className="content">
                    <span className="title">E-mail</span>
                    <span className="text">
                      <a href="mailto:support@gmail.com">
                        contact@taggue.com
                      </a>
                      <br />
                      {/* <a href="mailto:websitebuilding.net">
                        websitebuilding.net
                      </a> */}
                    </span>
                  </div>
                </div>
                <div className="contact-info-item style-two">
                  <div className="icon">
                    <i className="far fa-phone" />
                  </div>
                  <div className="content">
                    <span className="title">N° de tÉléphone</span>
                    <span className="text">
                      Appelez <a href="calto:+000(123)45688">+221 78 010 54 26</a>
                      {/* <br />
                      Whatsapp : +9632145789 */}
                    </span>
                  </div>
                </div>
                <div className="follow-us">
                  <h4>Suivez-nous</h4>
                  <div className="social-style-two">
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Us Page Area end */}
      {/* Our Location Address Area start */}
      {/* <section className="our-location-address-area rel z-1">
        <div className="container">
          <div className="row medium-gap justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="location-address-item wow fadeInUp delay-0-2s">
                <div className="top-part">
                  <img
                    src="assets/images/contact/location1.png"
                    alt="Location"
                  />
                  <h5>New York</h5>
                </div>
                <div className="bottom-part">
                  <ul>
                    <li>
                      <i className="fal fa-map-marker-alt" /> 55 Main Street,
                      New York
                    </li>
                    <li>
                      <i className="far fa-envelope-open-text" />{" "}
                      support@gmail.com
                    </li>
                    <li>
                      <i className="far fa-phone" /> +000 (123) 456 88
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="location-address-item wow fadeInUp delay-0-4s">
                <div className="top-part">
                  <img
                    src="assets/images/contact/location2.png"
                    alt="Location"
                  />
                  <h5>Australia Capital</h5>
                </div>
                <div className="bottom-part">
                  <ul>
                    <li>
                      <i className="fal fa-map-marker-alt" /> 55 Main Street,
                      New York
                    </li>
                    <li>
                      <i className="far fa-envelope-open-text" />{" "}
                      support@gmail.com
                    </li>
                    <li>
                      <i className="far fa-phone" /> +000 (123) 456 88
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="location-address-item wow fadeInUp delay-0-6s">
                <div className="top-part">
                  <img
                    src="assets/images/contact/location3.png"
                    alt="Location"
                  />
                  <h5>South Africa</h5>
                </div>
                <div className="bottom-part">
                  <ul>
                    <li>
                      <i className="fal fa-map-marker-alt" /> 55 Main Street,
                      New York
                    </li>
                    <li>
                      <i className="far fa-envelope-open-text" />{" "}
                      support@gmail.com
                    </li>
                    <li>
                      <i className="far fa-phone" /> +000 (123) 456 88
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* Our Location Address Area end */}
      {/* Location Map Area Start */}
      {/* <div className="contact-page-map wow fadeInUp delay-0-2s">
        <div className="our-location">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m12!1m10!1m3!1d142190.2862584524!2d-74.01298319978558!3d40.721725351435126!2m1!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sbd!4v1663473911885!5m2!1sen!2sbd"
            style={{ border: 0, width: "100%" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div> */}
      {/* Location Map Area End */}
    </Layout>
  );
};
export default Contact;
