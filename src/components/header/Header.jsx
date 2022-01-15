import React from "react";
import "./header.css";
import logokaska from "./images/logokaska.png";
import Navbar from "./Navbar";
const Header = () => {
  return (
    <div className="header">
      <div className="header__wrapper">
        <div className="header__logo">
          <img src={logokaska} alt="" />
        </div>
        <Navbar />
        <div className="header__phone">
          <p>
            <a href="tel:+996700441644"> +996 700 44 16 44</a> <br />
            <a href="tel:+996706121122"> +996 706 12 11 22</a> <br />
            Пн.–Сб. 9:00–19:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
