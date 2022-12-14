import React from "react";
import Records from "../components/records";

const HomePage = () => {
  return (
    <div>
      <div className="hero">
        <h2>Welcome to Mimoville! </h2>
        <p>See why we’re the best stop for your next weekend getaway</p>
        <img src="/assets/logo.png" alt="logo" />
      </div>
      <Records />
    </div>
  );
};

export default HomePage;
