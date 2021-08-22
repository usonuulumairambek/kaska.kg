import React from 'react';
import "./header.css";
import logokaska from "./images/logokaska.png"
const Header = () => {
    let onMenu = ()=>{
        alert('скоро')
    }
    return (
        <div className="header">
            <div className="header__wrapper">
                <div className="header__logo">
                    <img src={logokaska} alt="" />
                </div>
                <div className="header__menu">
                    <ul className="header__menu-items">
                        <li className="header__menu-item"> <a href="#uslugi">Услуги</a>  </li>
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
      <div className="header__mobile">
          <div className="header__mobile-text">
              <h1>KASKA</h1>
          </div>
          <div onClick={onMenu} className="header__mobile-burgerMenu">
              <span className="span1"> </span>
              <span className="span2"> </span> 
              <span className="span3"> </span>
          </div>
      </div>
        </div>
    );
};

export default Header;