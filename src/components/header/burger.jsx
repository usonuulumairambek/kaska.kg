import React from "react";
import './header.css'
function Burger(onMenu) {
  return (
    <div>
      <div onClick={onMenu} className="header__mobile-burgerMenu">
        <span className="span1"> </span>
        <span className="span2"> </span>
        <span className="span3"> </span>
      </div>
    </div>
  );
}

export default Burger;
