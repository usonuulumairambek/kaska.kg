import React from "react";
import "./stiomost.css";
import imgsvg from "./img.svg";
function Stiomost() {
  return (
    <div className="stiomost">
      <div className="stiomost__container">
        <div className="app__tittle">
          <h1>Рассчитайте стоимость ремонта</h1>
        </div>
        <div className="stiomost__container-subtittle">
          <p>
            Мы свяжемся с вами, сделаем замеры, расчеты работ и <br /> отправим
            вам документы на подпись в течение 1-2х дней
          </p>
        </div>
        <div className="stiomost__container-button">
          <img className="stiomost__container-img" src={imgsvg} alt="" />
          <button className="stiomost__container-btn">Отправить заявку</button>
        </div>
      </div>
    </div>
  );
}

export default Stiomost;
