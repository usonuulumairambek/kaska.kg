import React from "react";
import "./homepage.css";

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="homepage__container">
        <h1 className="homepage__container-tittle title">Наружная <br /> реклама</h1>
        <p className="homepage__container-subtittle">
          Объёмные буквы, лайтбоксы, штендеры, стеллы, оформление фасадов.|
        </p>
        <a href="#calc">
          <button>расчитать стоимость Услуги</button>
        </a>
        <a href="#uslugi">
          {" "}
          <button>Услуги</button>
        </a>
      </div>
    </div>
  );
};

export default HomePage;
