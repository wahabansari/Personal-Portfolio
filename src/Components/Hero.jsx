import React from "react";

const Hero = () => {
  return (
    <div className="bg-theme" id="home">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="padding-custom vstack h-fill justify-content-center">
              <div className="intro-title mb-3">
                <div className="fw-bold mb-0 h3">
                  Hi, I'm
                  <span className="text-highlighted ms-2">Wahab A.</span>
                </div>
                <div className="fw-bold mb-0 h2">Passionate Coder</div>
                <div className="fw-bold mb-0 h2">Based in Pakistan</div>
              </div>
              <p className="intro-description fs-5 w-50 mb-0">
                I'm a Pakistan based web designer & front‑end developer with 3+
                years of experience
              </p>
              <div className="actions-buttons d-flex gap-3 mt-5 mb-5">
                <button className="btn-idea">Have an Idea</button>
                <button className="btn-contact">Let's talk</button>
              </div>
              <div className="info mt-5">
                <ul className="list-unstyled mb-0 info-lists">
                  <li>
                    <i className="bi bi-telephone-fill me-2"></i>
                    <a href="tel:+923191664641">+92 3191664641</a>
                  </li>
                  <li>
                    <i className="bi bi-envelope-fill me-2"></i>
                    <a href="mailto:wahab0421690@gmail.com">
                      wahab0421690@gmail.com
                    </a>
                  </li>
                  <li>
                    <i className="bi bi-geo-alt-fill me-2"></i>
                    <a className="href_location" href="#">
                      Lahore, Pakistan
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
