import React from "react";
import Hero from "./Hero";
import About from "./About";
import Experience from "./Experience";

const Sections = () => {
  return (
    <div className="layout-wrapper__content h-fill">
      <Hero />
      <About />
      <Experience />
    </div>
  );
};

export default Sections;
