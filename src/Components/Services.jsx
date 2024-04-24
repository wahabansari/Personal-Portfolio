import React from "react";
import { DesigningIcon, DevelopmentIcon, WordPressIcon } from "./Icons";

const Services = () => {
  return (
    <section className="services-section" id="services">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="position-relative">
              <small className="text-muted fs-6 fw-medium mb-3 d-inline-block meeting-text">
                SERVICES
              </small>
              <h1 className="title hstack justify-content-between fw-bold">
                My Services
              </h1>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-lg-4 mb-lg-0 mb-3">
            <div className="card h-100">
              <div className="card-body">
                <div className="icon">
                  <DesigningIcon />
                </div>

                <h5 className="card-title fw-bolder mb-3">UI UX Design</h5>
                <p>
                  I specialize in crafting intuitive and engaging user
                  experiences. With a focus on user-centric design, I create
                  interfaces that are both functional and visually compelling.
                  Leveraging industry best practices, I transform ideas into
                  impactful digital solutions.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mb-lg-0 mb-3">
            <div className="card h-100">
              <div className="card-body">
                <div className="icon">
                  <DevelopmentIcon />
                </div>

                <h5 className="card-title fw-bolder mb-3">Web Development</h5>
                <p>
                  I excel in developing robust and responsive web applications
                  tailored to client needs. Using HTML, CSS, JavaScript, and
                  modern frameworks, I build efficient and scalable solutions.
                  Committed to quality and innovation, I turn visions into
                  functional websites.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mb-lg-0 mb-3">
            <div className="card h-100">
              <div className="card-body">
                <div className="icon">
                  <WordPressIcon />
                </div>
                <h5 className="card-title fw-bolder mb-3">
                  Wordpress Development
                </h5>
                <p>
                  As a WordPress developer, I specialize in creating customized
                  and user-friendly websites. Leveraging WordPress CMS and PHP,
                  I build scalable and efficient solutions. Dedicated to quality
                  and client satisfaction, I bring ideas to life with seamless
                  WordPress integration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
