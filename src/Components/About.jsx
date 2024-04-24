import React from "react";

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <small className="text-muted fs-6 fw-medium mb-3 d-inline-block meeting-text">
              - NICE TO MEET YOU!
            </small>
            <h1 className="title">Wahab Ansari</h1>
            <h6 className="role">Web designer & Developer</h6>
            <button className="btn-idea mt-4">Got a Project!</button>
          </div>
          <div className="col-lg-7 mt-3 mt-lg-0">
            <p className="lh-lg">
              Hello there! My name is
              <span className="text-yellow"> Muhammad Wahab Ansari</span>. I am
              a web designer & developer, and I'm very passionate and dedicated
              to my work.
            </p>
            <p className="lh-lg">
              With 3+ years experience as a professional a web developer &
              designer, I have acquired the skills and knowledge necessary to
              make your project a success. I enjoy every step of the design
              process, from discussion and collaboration.
            </p>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-lg-4">
            <div className="card shadow-sm mb-lg-0 mb-3">
              <div className="card-body">
                <h3>3+</h3>
                <p>Years Of Experience</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card shadow-sm mb-lg-0 mb-3">
              <div className="card-body">
                <h3>50</h3>
                <p>Projecs Completed</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card shadow-sm mb-lg-0 mb-3">
              <div className="card-body">
                <h3>30+</h3>
                <p>Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
