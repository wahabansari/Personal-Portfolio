import React from "react";
import Hero from "./Hero";
import About from "./About";
import Experience from "./Experience";
import Services from "./Services";
import Projects from "./Projects";

const Sections = () => {
  return (
    <div className="layout-wrapper__content h-fill">
      <Hero />
      <About />
      <Experience />
      <Services />
      <Projects />
    </div>
  );
};

export default Sections;
