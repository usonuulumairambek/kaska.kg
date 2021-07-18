import React from 'react';
import "./header.css";
import logokaska from "./images/logokaska.png"
const Header = () => {
    return (
        <div className="header">
            <div className="header__wrapper">
                <div className="header__logo">
                    <img src={logokaska} alt="" />
                </div>
                <div className="header__menu">
                    <ul className="header__menu-items">
                        <li className="header__menu-item"> <a href="№">Услуги</a>  </li>
                        <li className="header__menu-item"> <a href="№">Работы</a> </li>
                        <li className="header__menu-item"> <a href="№">Контакты</a> </li>
                        <li className="header__menu-item"> <a href="№">Новости</a> </li>
                    </ul>
                </div>
                <div className="header__phone">
                    <p>+996 700 44 16 44 <br />
                        +996 706 12 11 22 <br />
                        Пн.–Сб. 9:00–19:00</p>
                </div>
            </div>
        </div>
    );
};

export default Header;