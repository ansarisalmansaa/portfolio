import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Route from "react-router-dom";
import About from "../../AboutMe/About";
function Navbar() {
  // const loginOption = (
  //     // this will route to messages page
  //     <Route/>
  // )

  return (
    <div>
      <div>SA</div>
      <div>
        <a href="/">Home</a>
        <a href="/projects">Projects</a>
        <a href="/about">About</a>
        <a href="">Contact</a>
        {/* <a href="">Messages</a> */}
      </div>
      <hr />
    </div>
  );
}

export default Navbar;
