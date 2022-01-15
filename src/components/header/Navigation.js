import React from "react";
import "./navigation.css";
function Navigation() {
  return (
    <div className="header__menu">
      <ul className="header__menu-items">
        <li className="header__menu-item">
          {" "}
          <a href="#uslugi">Услуги</a>
        </li>
        <li className="header__menu-item">
          {" "}
          <a href="#works">Работы</a>{" "}
        </li>
        <li className="header__menu-item">
          {" "}
          <a href="#contact">Контакты</a>{" "}
        </li>
        <li className="header__menu-item">
          {" "}
          <a href="">Новости</a>{" "}
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
