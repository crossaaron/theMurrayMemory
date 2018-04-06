import React from "react";
import "./Navbar.css";

// Navbar component
const Navbar = props => (
  <nav className="navbar fixed-top navbar-dark">
    <span className="navbar-brand">The Murray Memory Shuffle</span>
    <span className="navbar-text text-white">
      Score: {props.score}, Hi Score: {props.hiScore}
    </span>
  </nav>
);

export default Navbar;
