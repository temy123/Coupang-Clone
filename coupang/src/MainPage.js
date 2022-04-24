import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";

export default class MainPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}
