import React, { Component } from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import Home from "../screens/Home/Home";
class layout extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Home/>
        <Footer />
      </div>
    );
  }
}

export default layout;
