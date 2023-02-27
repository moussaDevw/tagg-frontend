import Link from "next/link";
import { useState } from "react";
import { CoreFeatureTwo } from "../src/components/CoreFeatureTwo";
import { Faqs } from "../src/components/Faqs";
import ProgressBar from "../src/components/ProgressBar";
import { SupportAndMarketing } from "../src/components/SupportAndMarketing";
import Layout from "../src/layout/Layout";
import PageBanner from "../src/layout/PageBanner";
const faqsData = [
  {
    title: "Will you  provide website layout about design ?",
    dec: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam aperiam eaquey quae abillo inventore",
  },
  {
    title: "How much does cost to design website ?",
    dec: "Fortunately, we aren’t just designers and developers here we are writer strategists, techs and creatives working towards the same end goal our client’s success. As a full-service digital marketing agency",
  },
  {
    title: "How many revisions can i make the  design ?",
    dec: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam aperiam eaquey quae abillo inventore",
  },
  {
    title: "Can i uplode this  design in my personal work?",
    dec: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam aperiam eaquey quae abillo inventore",
  },
];
const ServicesDetails = () => {
  return (
    <Layout>
      <PageBanner
        titleHtml={`Web Design &amp; Develop<span>ment</span>`}
        titleText="Web Design & Development"
      />
      <section className="what-we-offer my-130 rel z-1">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-xl-5 col-lg-6">
              <div className="what-we-offer-left mb-30 rmb-65 wow fadeInRight delay-0-2s">
                <div className="section-title mb-25">
                  <span className="sub-title style-two mb-15">
                    What We Offer
                  </span>
                  <h2>
                    We are Affordable Website Design and Development agency
                  </h2>
                </div>
                <p>
                  25 Years Of Experience In Website Design &amp; Development
                </p>
                <Link href="/about">
                  <a className="theme-btn mt-15">
                    Learn More <i className="fas fa-angle-double-right" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6">
              <div className="what-we-offer-right wow fadeInLeft delay-0-2s">
                <p>
                  Web Design with your customer in mind. Modern web design is
                  more involved than creating an attractive website.
                  Consideration of user experience, search engine optimization,
                  ease of use, and technical details are just a few elements
                  that are involve.
                </p>
                <ul className="list-style-four pt-5">
                  <li>Responsive Website Design</li>
                  <li>User Experience Design</li>
                  <li>CMS and e-Commerce Integration</li>
                  <li>Website Content Strategy</li>
                  <li>Cross Browser and Platform Testing</li>
                  <li>Usability and Competition Analysis</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* What We Offer Area end */}
      {/* Features Area start */}
      <CoreFeatureTwo />
      {/* Features Area end */}
      {/* What We Offer Two Area start */}
      <section className="what-we-offer-two mb-130 rel z-1">
        <div className="container">
          <div className="row large-gap align-items-center">
            <div className="col-lg-6">
              <div className="what-we-offer-image rmb-65 wow fadeInRight delay-0-2s">
                <img
                  src="assets/images/about/what-we-offer.png"
                  alt="What We Offer"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="what-we-offer-content wow fadeInLeft delay-0-2s">
                <div className="section-title mb-25">
                  <span className="sub-title style-two mb-15">
                    What We Offer
                  </span>
                  <h2>HTML, CSS &amp; WordPress Development</h2>
                </div>
                <p>
                  The easy-to-use, search engine friendly, flexible development
                  platform is currently used on over 35% of all websites.
                  WordPress provides a user friendly content mana gement system
                  (CMS), that allows you to easily make changes on the fly
                </p>
                <ul className="list-style-four pt-5 pb-30">
                  <li>Easy to edit &amp; Search engine friendly</li>
                  <li>Highly customizable</li>
                  <li>Most popular CMS in the world</li>
                </ul>
                <Link href="/about">
                  <a className="theme-btn mt-15">
                    Learn More <i className="fas fa-angle-double-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* What We Offer Two Area end */}
      {/* Responsive Design Area start */}
      <section className="responsive-design-area mb-130 rel z-1">
        <div className="container">
          <div className="row large-gap align-items-center">
            <div className="col-lg-6">
              <div className="responsive-design-content rmb-65 wow fadeInLeft delay-0-2s">
                <div className="section-title mb-25">
                  <span className="sub-title style-two mb-15">
                    Responsive Design
                  </span>
                  <h2>Design For Any Device Responsive Web Design</h2>
                </div>
                <p>
                  Responsive web design allows your website to adapt to and
                  provide an optimal experience on any device it’s being viewed
                  from. This means that your website will look great and
                  function flawlessly for a user on a desktop computer, laptop,
                  tablet, or smartphone
                </p>
                <ul className="list-style-four pt-5 pb-30">
                  <li>Mobile-friendly</li>
                  <li>Design for every device</li>
                  <li>Positive UX &amp; Helps SEO</li>
                </ul>
                <Link href="/about">
                  <a className="theme-btn style-two mt-15">
                    Learn More <i className="fas fa-angle-double-right" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="responsive-design-image wow fadeInRight delay-0-2s">
                <img
                  src="assets/images/about/statistics-five.png"
                  alt="Responsive Design"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Responsive Design Area end */}
      {/* CTA Two Area start */}
      <section
        className="cta-two bgc-primary bgs-cover text-white py-75 rel z-1"
        style={{ backgroundImage: "url(assets/images/background/cta-two.png)" }}
      >
        <div className="container">
          <div className="row large-gap align-items-center">
            <div className="col-lg-5">
              <div className="cta-two-image rmb-65 wow fadeInRight delay-0-2s">
                <img src="assets/images/about/cta.png" alt="CTA" />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="cta-two-content-two wow fadeInLeft delay-0-2s">
                <div className="section-title mb-25">
                  <h2>Very Much 91.50% Increase in Organic Traffic</h2>
                </div>
                <p>
                  This lumber supplier started with wanting a new website. After
                  working with our team, {`they’ve`} now expanded their strategy
                  with us into several facets of digital marketing and have seen
                  optimal growth.
                </p>
                <Link href="/contact">
                  <a className="theme-btn style-three white-btn mt-15">
                    Create Your Website{" "}
                    <i className="fas fa-angle-double-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Two Area end */}
      {/* Support & Marketing Area start */}
      <SupportAndMarketing />
      {/* Support & Marketing Area start */}
      {/* FAQs Area start */}
      <Faqs faqsData={faqsData} />
      {/* FAQs Area end */}
    </Layout>
  );
};
export default ServicesDetails;
