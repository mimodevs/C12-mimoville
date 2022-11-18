import React from "react";

const HomePage = () => {
  return (
    <main className="main-container px-4 py-5">
      <div className="top-container">
        <div className="search-box">
          <h5>Find your next getaway in Mimoville!</h5>
          <p>LOCATION</p>
          <input className="location p-1 rounded bg-light" type="text" placeholder="Mimoville"></input>
          <p>CHECK IN</p>
          <input className="check-in p-1 rounded bg-light" type="text" placeholder="Add Date"></input>
          <p>CHECK OUT</p>
          <input className="check-out p-1 rounded bg-light" type="text" placeholder="Add Date"></input>
        </div>
        <div className="img-container">
          <img src=""/>
        </div>
      </div>
      <div className="about-container">
        <div className="card-body px-4 py-2 text-left">
          <h2 className="card-title">All about Mimoville</h2>
          <p className="card-text">
            See why we're the best stop for your next weekend getaway.
          </p>
          <p className="card-bottomtext">
            For more information on <a href="#">Mimoville</a> find out why we're
            the best!
          </p>
        </div>
      </div>
      <div className="others">
        <h2 className="others-title px-4 py-2 text-left">
          Other local rentals available in Mimoville
        </h2>
        <div className="card-container text-center">
          <div className="card1 mr-10">
          <img src=""/>
            <a className="link1" href="#">Brick House</a>
            <p>Mimo campgrounds</p>
            <p>
              <b>$94 night</b>
            </p>
          </div>
          <div className="card2 mr-10">
            <img src=""/>
            <a className="link2" href="#">Small Cottage</a>
            <p>Lake side shacks</p>
            <p>
              <b>$70 night</b>
            </p>
          </div>
          <div className="card3 m-10">
          <img src=""/>
            <a className="link3" href="#">Wooden Tree Villa</a>
            <p>Campgrounds Vip Housing</p>
            <p>
              <b>$120 night</b>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
