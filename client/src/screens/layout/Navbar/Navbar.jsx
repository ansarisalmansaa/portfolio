import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Route from "react-router-dom";
import About from "../../AboutMe/About";
function Navbar() {
  

  return (
    <div>
      <div>SA</div>
      <div>
        <a href="/message">Message</a>
        <a href="/">Home</a>
        <a href="/projects">Projects</a>
        <a href="/about">About</a>
        <a href="">Contact</a>
      </div>
      <hr />
    </div>
  );
}

export default Navbar;
