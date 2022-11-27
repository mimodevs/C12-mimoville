import React from "react";

const AboutPage = () => {
  return (
    <main className="container-fluid">
    <div className=" d-flex flex-row mb-3">
      <div className="card">
        <img src="/listings/example.png" className="card-img-top" alt="..." />
  
        <div className="card-body">
          <h5 className="card-title">Name</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
      <div className="card">
      <img src="/listings/example.png" className="card-img-top" alt="..." />

        <div className="card-body">
          <h5 className="card-title">Name</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    </div>
    </main>
  );
};

export default AboutPage;
