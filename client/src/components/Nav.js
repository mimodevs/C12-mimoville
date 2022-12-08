import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <header className="container-fluid">
      <h1 className="logo">
        <NavLink to="/">
          <img src="/assets/logo.png" alt="logo" />
        </NavLink>
      </h1>
      <nav>
        <NavLink to="/about">About</NavLink>
      </nav>
    </header>
  );
}
