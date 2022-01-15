import React, { useState } from "react";
import "./calculation.css";
function Calculation() {
  const [name, setname] = useState("");
  console.log(name);
  // let name = 'mairambek'
  return (
    <div id="calc" className="calculation">
      <div className="calculation_bg">
        <div className="calculation__filter">
          <div className="calculation__wrapper">
            <div className="calculation__tittle">
              <h1>Расчет стоимости замера бесплатно</h1>
            </div>
            <div className="calculation__subtittle">
              <p>
                С вами свяжется наш замерщик и приедет в удобное время. <br />{" "}
                Мы составим расчет в течение 24 часов и свяжемся с вами
              </p>
            </div>
          </div>
          <div className="calculation__form">
            {/* <form> */}
            Вы написали текст: {`${name}`}
            <input
              onChange={(e) => {
                setname(e.target.value);
              }}
              value={name}
              className="calculation__form-name"
              type="text"
              placeholder="Имя"
            />
            <input
              className="calculation__form-phone"
              type="phone"
              placeholder="Номер"
            />
            <button className="calculation__form-btn">Отправить заявку</button>
            {/* </form> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculation;
