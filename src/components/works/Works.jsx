import React, {useEffect} from "react";
import "./works.css";
import Img1 from "./images/img1.jpg";
import Img2 from "./images/img2.jpg";
import Img3 from "./images/img3.jpg";
import Img4 from "./images/img4.jpg";
import Img5 from "./images/img5.jpg";
import Img6 from "./images/img6.jpg";
import Img7 from "./images/img7.jpg";
import Img8 from "./images/img8.jpg";
import arrowpng from "./images/arrow.png";
import logo1 from "./images/avatarImg.webp";
import logo2 from "./images/logo2.webp";
import logo3 from "./images/logo3.webp";
import aos from "aos";
import "aos/dist/aos.css";
function Works() {
  useEffect(() => {
    aos.init({ duration: 2000 });
  }, []);
  let data = [
    { name: Img1 },
    { name: Img2 },
    { name: Img3 },
    { name: Img4 },
    { name: Img5 },
    { name: Img6 },
    { name: Img7 },
    { name: Img8 },
  ];
  let datareview = [{ name: logo1, text: 'Роза эже' }, { name: logo2, text: 'Майрамбек' }, { name: logo3, text: 'Кирилл' }];
  return (
    <div className="works" id="works">
      <div className="app__tittle">
        <h1>Наши работы</h1>
      </div>
      <div className="app__subtittle">
        <p>Примеры выполненных работ, которыми гордится наша команда</p>
      </div>
      <div className="works__container">
        {data.map((e) => {
          return (
            <div data-aos="fade-up" className="works__container-item">
              <img src={e.name} alt="" />
            </div>
          );
        })}
      </div>
      <div className="reviews">
        <div className="app__tittle">
          <h1>Отзывы наших клиентов</h1>
        </div>
        <div className="reviews__container">
          {datareview.map((e) => {
            return (
              <div data-aos="fade-up" className="reviews__container-item">
                <div className="reviews__container-img">
                  <img src={e.name} alt="" />
                  <span>
                    <img src={arrowpng} alt="" />
                  </span>
                </div>
                <div className="reviews__container-text">
                  <h3>{e.text}</h3>
                  <p>
                    Спасибо команде строителей за быструю и чистую работу. Вся
                    работа от начала до конца была сделана в точные сроки. Все
                    условия мы обсудили при первой же встрече, не было никаких
                    подводных камней
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Works;
