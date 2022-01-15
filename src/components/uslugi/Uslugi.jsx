import React, { useEffect } from "react";
import img1 from "./images/img1.jpg";
import img2 from "./images/img2.webp";
import img3 from "./images/img3.webp";
import img4 from "./images/img4.jpg";
import "./uslugi.css";
import "./../../App.css";
import aos from "aos";
import "aos/dist/aos.css";
function Uslugi() {
  useEffect(() => {
    aos.init({ duration: 2000 });
  }, []);
  return (
    <div id="#uslugi" className="onMenu" style={{ textAlign: "center" }}>
      <div className="app__tittle" id="uslugi">
        <h1>Наши услуги</h1>
      </div>
      <div className="app__subtittle">
        <p>
          Наружная реклама, Интерьерная реклама, Сварочные работы, <br /> Мебель
          под заказ, Декоративные решетки и др.
        </p>
      </div>
      <div className="uslugi__container">
        <div className="uslugi__container-items">
          <div data-aos="fade-up" className="uslugi__container-item">
            <img src={img1} alt="" />
            <h2 className="uslugi__container-titte">Обьемные буквы</h2>
            <h3 className="uslugi__container-subtitte">от 500сом</h3>
            <p className="uslugi__container-text">
              Сметчик выезжает на замеры, расчитывает работу и материалы. В этот
              же день мы обговариваем сроки выполнения работ.
            </p>
            <a href="#calc">
              {" "}
              <button href="#calc" className="uslugi__container-btn">
                Рассчитать стоимость{" "}
              </button>
            </a>
          </div>
          <div data-aos="fade-down" className="uslugi__container-item">
            <img src={img2} alt="" />
            <h2 className="uslugi__container-titte">Обьемные буквы</h2>
            <h3 className="uslugi__container-subtitte">от 500сом</h3>
            <p className="uslugi__container-text">
              Сметчик выезжает на замеры, расчитывает работу и материалы. В этот
              же день мы обговариваем сроки выполнения работ.
            </p>
            <a href="#calc">
              {" "}
              <button href="#calc" className="uslugi__container-btn">
                Рассчитать стоимость{" "}
              </button>
            </a>
          </div>
          <div data-aos="fade-up" className="uslugi__container-item">
            <img src={img3} alt="" />
            <h2 className="uslugi__container-titte">Обьемные буквы</h2>
            <h3 className="uslugi__container-subtitte">от 500сом</h3>
            <p className="uslugi__container-text">
              Сметчик выезжает на замеры, расчитывает работу и материалы. В этот
              же день мы обговариваем сроки выполнения работ.
            </p>
            <a href="#calc">
              {" "}
              <button href="#calc" className="uslugi__container-btn">
                Рассчитать стоимость{" "}
              </button>
            </a>
          </div>
          <div data-aos="fade-down" className="uslugi__container-item">
            <img src={img4} alt="" />
            <h2 className="uslugi__container-titte">Обьемные буквы</h2>
            <h3 className="uslugi__container-subtitte">от 500сом</h3>
            <p className="uslugi__container-text">
              Сметчик выезжает на замеры, расчитывает работу и материалы. В этот
              же день мы обговариваем сроки выполнения работ.
            </p>
            <a href="#calc">
              {" "}
              <button href="#calc" className="uslugi__container-btn">
                Рассчитать стоимость{" "}
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Uslugi;
