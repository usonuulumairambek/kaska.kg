import React from "react";
import "./why.css";
function Why() {
  let datawhy = [
    {
      tittle: "Дизайн проект",
      text: "Может быть полностью ваш или доработан после консультацией наших дизайнеров.",
    },
    {
      tittle: "Гарантия на услугу",
      text: "На все работы мы даем официальную гарантию 1 год.",
    },
    {
      tittle: "Специалисты",
      text: "Над каждым проектом работают специалисты узкого профиля.",
    },
    {
      tittle: "Поэтапная оплата",
      text: "Поэтапная оплата услуги. Прием работ заказчиком и оплата поделены на 2 части.",
    },
  ];
  return (
    <div className="why">
      <div className="app__tittle">
        <h1>Почему мы вам понравимся?</h1>
      </div>
      <div className="why__container">
        {datawhy.map((e, i) => {
          return (
            <div className="why__container-block">
              <div className="why__container-krug">{i+1}</div>
              <div className="why__container-info">
                <h3>{e.tittle}</h3>
                <p>
                 {e.text}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Why;
