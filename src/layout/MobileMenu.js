import Link from "next/link";
import { useState } from "react";
import { Accordion } from "react-bootstrap";
const MobileMenu = ({ logo }) => {
  const [activeMenu, setActiveMenu] = useState("");
  const [multiMenu, setMultiMenu] = useState("");
  const activeMenuSet = (value) =>
      setActiveMenu(activeMenu === value ? "" : value),
    activeLi = (value) =>
      value === activeMenu ? { display: "block" } : { display: "none" };
  const multiMenuSet = (value) =>
      setMultiMenu(multiMenu === value ? "" : value),
    multiMenuActiveLi = (value) =>
      value === multiMenu ? { display: "block" } : { display: "none" };
  return (
    <nav className="main-menu navbar-expand-lg d-block d-lg-none mobile-header">
      <Accordion>
        <div className="navbar-header">
          <div style={{maxWidth:"30%"}} className="mobile-logo my-15 ">
            <Link href="/">
              <a>
                <img
                  src={logo ? logo : "assets/images/logos/logo.png"}
                  alt="Logo"
                  title="Logo"
                />
              </a>
            </Link>
          </div>
          {/* Toggle Button */}
          <Accordion.Toggle
            eventKey="nav"
            as="button"
            className="navbar-toggle"
          >
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </Accordion.Toggle>
        </div>
        <Accordion.Collapse eventKey="nav" className="navbar-collapse clearfix">
          <ul className="navigation clearfix">
            <li className="dropdown">
              <Link href="/">Acceuil</Link>
            </li>
            <li className="dropdown">
              <Link href="/services">services</Link>
            </li>
            <li className="dropdown">
              <Link href="/qui-sommes-nous">Qui sommes-nous</Link>
            </li>
            <li className="dropdown">
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </Accordion.Collapse>
      </Accordion>
    </nav>
  );
};
export default MobileMenu;
