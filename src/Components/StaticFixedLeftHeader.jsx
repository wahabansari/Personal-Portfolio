import React from "react";

const StaticFixedLeftHeader = () => {
  return (
    <div className="fixed-header__wrapper position-fixed top-0 bottom-0 h-100 h-fill d-flex justify-content-between align-items-align-items-stretch flex-column text-center">
      <div className="logo position-relative p-3">
        <span className="text-italic fs-large">Muhammad.</span>
        <span className="d-block text-overlay position-absolute start-0 end-0 top-50">
          <strong>Wahab Ansari</strong>
        </span>
      </div>
      <nav className="menu__lists p-3">
        <ul className="list-unstyled d-flex flex-column gap-3 justify-content-center">
          <li>
            <a href="#home" className="text-decoration-none">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="text-decoration-none">
              About
            </a>
          </li>
          <li>
            <a href="#experience" className="text-decoration-none">
              Experience
            </a>
          </li>
          <li>
            <a href="#services" className="text-decoration-none">
              Services
            </a>
          </li>
          <li>
            <a href="#portfolio" className="text-decoration-none">
              Portfolio
            </a>
          </li>
          <li>
            <a href="#contact" className="text-decoration-none">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <footer className="footer p-3">
        <div className="social-links">
          <ul className="list-inline">
            <li className="list-inline-item">
              <a className="btn btn-round btn-light" href="#" type="button">
                <i className="bi bi-linkedin"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a className="btn btn-round btn-light" href="#" type="button">
                <i className="bi bi-github"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a className="btn btn-round btn-light" href="#" type="button">
                <i className="bi bi-behance"></i>
              </a>
            </li>
          </ul>
          <div className="rights-text fs-6 fw-medium">All Rights Reserved</div>
        </div>
      </footer>
    </div>
  );
};

export default StaticFixedLeftHeader;
