import React from "react";

const AboutPage = () => {
  return (
    <main>
      <div className="card px-4 py-2 text-center">
        <div className="card-header">About Mimoville</div>
        <div className="card-body">
          <h5 className="card-title">Mimoville</h5>
          <p className="card-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <a href="#" className="btn btn-primary">
            Meet our team!
          </a>
        </div>
      </div>
    </main>
  );
};

export default AboutPage;