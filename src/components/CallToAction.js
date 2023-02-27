import Link from "next/link";

const CallToAction = ({title = "Title", description = "Description", textButton = "Text button"}) => {
  return (
    <section className="call-to-action-area bgc-black pt-80 pb-50">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-xl-7 col-lg-9">
            <div className="section-title text-white mb-25 wow fadeInUp delay-0-2s">
              <h2>{title}</h2>
              <p>
                {description}
              </p>
            </div>
          </div>
          <div className="col-lg-3 text-lg-end">
            <Link href="/contact">
              <a className="theme-btn style-two mb-30 wow fadeInUp delay-0-4s">
                {textButton} <i className="fas fa-angle-double-right" />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CallToAction;
