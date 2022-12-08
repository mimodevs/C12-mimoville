import React from "react";
import Records from "../components/records";

const HomePage = () => {
  return (
    <div>
      <div className="hero">
        <h2>All about Mimoville! </h2>
        <p>See why we’re the best stop for your next weekend getaway</p>
      </div>
      <Records />
    </div>
  );
};

export default HomePage;
