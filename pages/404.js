import Link from "next/link";

const E404 = () => {
  return (
    <div className="page-wrapper">
      {/* Preloader */}
      <div className="preloader" style={{ display: "none" }} />
      {/* Error Page Area start */}
      <section className="error-page-area py-130 rel z-1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="error-content rmb-75 wow fadeInLeft delay-0-2s animated">
                <div style={{ maxWidth: "200px" }} className="logo mb-40">
                  <Link href="/">
                    <a>
                      <img src="assets/images/logos/logo_dark.png" alt="" />
                    </a>
                  </Link>
                </div>
                <h1>OPPS!</h1>
                <h3>Cette page est introuvable</h3>
                <Link href="/">
                  <a className="theme-btn style-two mt-15 mb-50">
                  Aller à l'accueil <i className="fas fa-angle-double-right" />
                  </a>
                </Link>
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
            <div className="col-lg-7">
              <div className="error-image wow fadeInRight delay-0-2s animated">
                <img src="assets/images/background/404.png" alt="404 Error" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Error Page Area end */}
    </div>
  );
};
export default E404;
