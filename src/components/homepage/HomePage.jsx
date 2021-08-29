import React from "react";
import "./homepage.css";
const HomePage = () => {
  return (
    <div className="homepage">
      <div className="homepage__container">
        <h1 className="homepage__container-tittle title">Наружная реклама</h1>
        <p className="homepage__container-subtittle">
          Объёмные буквы, лайтбоксы, штендеры, стеллы, оформление фасадов.|
        </p>
        <a href="section4">
          <button>расчитать стоимость Услуги</button>
        </a>
        <a href="section1">
          {" "}
          <button>Услуги</button>
        </a>
      </div>
    </div>
  );
};

export default HomePage;
