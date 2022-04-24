import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Map from "./Map";

export default class MapPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <Map />
        <Footer />
      </div>
    );
  }
}
