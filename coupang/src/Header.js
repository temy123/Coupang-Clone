import React, { Component } from "react";
import Ads from "./Ads";
import BigLogo from "./BigLogo";
import Category from "./Category";
import MenuBar from "./MenuBar";
import SearchBox from "./SearchBox";

export default class Header extends Component {
  render() {
    return (
      <div>
        <Ads
          src="https://static.coupangcdn.com/ea/cmg_paperboy/image/1646271114206/C0-Left_basic.jpg"
          href="/"
        ></Ads>
        <div className="header">
          <div className="top">
            <Category />
            <BigLogo />
            <SearchBox />
            <div>
              <img></img>
              <p>마이쿠팡</p>
            </div>
            <div>
              <img src=""></img>
              <p>장바구니</p>
            </div>
          </div>
          <div className="bottom">
            <MenuBar />
          </div>
        </div>
      </div>
    );
  }
}
