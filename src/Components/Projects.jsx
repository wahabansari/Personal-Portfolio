import React from "react";

const Projects = () => {
  return (
    <section className="project-section" id="portfolio">
      <div className="container">
        <div className="row">
          <div className="col">
            <small className="text-muted fs-6 fw-medium mb-3 d-inline-block meeting-text">
              PROJECTS
            </small>
            <h1 className="title fw-bold">Recent completed works</h1>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-xl-6 mb-4">
            <div className="project-placeholder">
              <figure>
                <img
                  src="/assets/images/portfolio-lg.jpg"
                  alt="Portfolio 1"
                  className="img-fluid"
                />
              </figure>
            </div>
          </div>
          <div className="col-xl-6 mb-4">
            <div className="project-placeholder">
              <figure>
                <img
                  src="/assets/images/portfolio-2.jpg"
                  alt="Portfolio 1"
                  className="img-fluid"
                />
              </figure>
            </div>
          </div>
          <div className="col-xl-6 mb-4">
            <div className="project-placeholder">
              <figure>
                <img
                  src="/assets/images/portfolio-3.jpg"
                  alt="Portfolio 1"
                  className="img-fluid"
                />
              </figure>
            </div>
          </div>
          <div className="col-xl-6 mb-4">
            <div className="project-placeholder">
              <figure>
                <img
                  src="/assets/images/portfolio-4.jpg"
                  alt="Portfolio 1"
                  className="img-fluid"
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
