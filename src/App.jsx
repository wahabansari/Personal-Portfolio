import React from "react";
import StaticFixedLeftHeader from "./Components/StaticFixedLeftHeader";
import MainLayout from "./Components/MainLayout";

const App = () => {
  return (
    <>
      <div className="layout-wrapper position-relative bg-white">
        <StaticFixedLeftHeader />
        <MainLayout />
      </div>
    </>
  );
};

export default App;
