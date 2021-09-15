import React from "react";
import "./partners.css";
import NN from "./images/NN.webp";
import bilim from "./images/bilim.webp";

function Partners() {
  return (
    <div className="partners">
      <div className="partners__container">
        <div className="app__tittle">
          <h1>Наши партнеры</h1>
        </div>
        <div className="partners__container-subtittle">
          <p>
            Для достижения успеха в любом деле, <br /> партнеры играют важную
            роль...
          </p>
        </div>
        <div className="partners__container-logos">
          <a href="http://norma.kg/" target="_blank" rel="noreferrer">
            <img src={NN} alt="" />
          </a>
          <a href="https://bilim.kg/" target="_blank" rel="noreferrer" >
            <img src={bilim} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Partners;
