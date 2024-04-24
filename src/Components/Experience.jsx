import React from "react";

const Experience = () => {
  return (
    <div className="experience-section" id="experience">
      <div className="container">
        <div className="row">
          <div className="col">
            <small className="text-muted fs-6 fw-medium mb-3 d-inline-block meeting-text">
              EXPERIENCE
            </small>
            <h1 className="title">Everything about me!</h1>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-lg-6 mb-3 mb-lg-0">
            <div className="card">
              <div className="card-body">
                <div className="hstack justify-content-between">
                  <span className="text-yellow fw-semibold">
                    2021 - Present
                  </span>
                  <span className="text-dark fw-semibold">Sunhub</span>
                </div>
                <div className="fw-bold h5 my-3">Frontend Developer | React</div>
                <p>
                  Website development is the process of building, programming,
                  coding and maintaining websites and web applications.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mb-3 mb-lg-0">
            <div className="card">
              <div className="card-body">
                <div className="hstack justify-content-between">
                  <span className="text-yellow fw-semibold">2020 - 2021</span>
                  <span className="text-dark fw-semibold">
                    Elite High School
                  </span>
                </div>
                <div className="fw-bold h5 my-3">User Interface Designer</div>
                <p>
                  Website development is the process of building, programming,
                  coding and maintaining websites and web applications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
