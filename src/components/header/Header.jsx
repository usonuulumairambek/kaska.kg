import React from "react";
import Burger from "./burger";
import "./header.css";
import logokaska from "./images/logokaska.png";
const Header = () => {
  let onMenu = () => {};
  let Ok = () => {
    console.log("sds");
  };
  return (
    <div className="header">
      <div className="header__wrapper">
        <div className="header__logo">
          <img src={logokaska} alt="" />
        </div>
        <div className="header__menu">
          <ul className="header__menu-items">
            <li className="header__menu-item">
              {" "}
              <a href="#uslugi">Услуги</a>{" "}
            </li>
            <li className="header__menu-item">
              {" "}
              <a href="№">Работы</a>{" "}
            </li>
            <li className="header__menu-item">
              {" "}
              <a href="№">Контакты</a>{" "}
            </li>
            <li className="header__menu-item">
              {" "}
              <a href="№">Новости</a>{" "}
            </li>
          </ul>
        </div>
        <div className="header__phone">
          <p>
            <a href="tel:+996700441644"> +996 700 44 16 44</a> <br />
            <a href="tel:+996706121122"> +996 706 12 11 22</a> <br />
            Пн.–Сб. 9:00–19:00
          </p>
        </div>
      </div>
      <div className="header__mobile">
        <div className="header__mobile-text">
          <h1>KASKA</h1>
        </div>
        <Burger onClick={Ok} onMenu={onMenu} />
      </div>
    </div>
  );
};

export default Header;
