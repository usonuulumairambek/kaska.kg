import React from "react";
import "./etapy.css";
function Etapy() {
  return (
    <div className="etapy">
      <div className="etapy__container">
        <div className="app__tittle">
          <h1>Из каких этапов состоит ремонт?</h1>
        </div>
        <div className="etapy__containers">
          <div className="etapy__container-box">
            <div className="etapy__container-circle"><p>1</p></div>
            <h3 className="etapy__container-tittle">Заявка</h3>
            <p className="etapy__container-text">
              Вы оставляете заявку на расчет стоимости услуги и встречаетесь с
              замерщиком
            </p>
          </div>
          <div className="etapy__container-box">
            <div className="etapy__container-circle"><p>2</p></div>
            <h3 className="etapy__container-tittle">Заявка</h3>
            <p className="etapy__container-text">
              Вы оставляете заявку на расчет стоимости услуги и встречаетесь с
              замерщиком
            </p>
          </div>
          <div className="etapy__container-box">
            <div className="etapy__container-circle"><p>3</p></div>
            <h3 className="etapy__container-tittle">Заявка</h3>
            <p className="etapy__container-text">
              Вы оставляете заявку на расчет стоимости услуги и встречаетесь с
              замерщиком
            </p>
          </div>
          <div className="etapy__container-box">
            <div className="etapy__container-circlee"><p>4</p></div>
            <h3 className="etapy__container-tittle">Заявка</h3>
            <p className="etapy__container-text">
              Вы оставляете заявку на расчет стоимости услуги и встречаетесь с
              замерщиком
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Etapy;
