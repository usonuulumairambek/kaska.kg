import React from "react";
import "./footer.css";
import ins from "./ins.svg";
import fb from "./fb.svg";
import logofooter from "./logo.png";
function Footer() {
  return (
    <div className="footer" id="contact">
      <div className="footer__container">
        <div className="footer__container-info">
          <div className="footer__container-tittle">
            {" "}
            <h1>Контакты</h1>
          </div>
          <div className="footer__container-phone">
            <a rel="noreferrer" href="tel:+996700441644">
              {" "}
              +996 700 44 16 44{" "}
            </a>{" "}
            <br />
            <a rel="noreferrer" href="tel:+996706121122">
              +996 706 12 11 22{" "}
            </a>{" "}
            <br />
            <a rel="noreferrer" href="email:kaskakg18@gmail.com">
              kaskakg18@gmail.com
            </a>
          </div>
          <div>
            Адрес нашего офиса: <br /> Бишкек, ул. Эркин Тоо 1я-1.
          </div>
          <div>
            <a
              rel="noreferrer"
              href="https://www.instagram.com/kaska.kg/"
              target="_blank"
            >
              <img src={ins} alt="" />
            </a>
            <a
              rel="noreferrer"
              href="https://www.facebook.com/kaskakg1/?pageid=2348607225378277&ftentidentifier=2413175175588148&padding=0"
              target="_blank"
            >
              <img src={fb} alt="" />
            </a>
          </div>
        </div>
        <div className="footer__container-map">
          <iframe
            title="myFrame"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2923.0564271097132!2d74.58191111500163!3d42.89275620928707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec806573bd0ad%3A0x50f15d0abf5a93c9!2zMTQ2INGD0LsuINCa0LDRgdGL0LzQsNC70Ysg0JHQsNGP0LvQuNC90L7QstCwLCDQkdC40YjQutC10Lo!5e0!3m2!1sru!2skg!4v1629642128720!5m2!1sru!2skg"
            style={{ border: "none" }}
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <div className="footer2">
        <div className="footer2__container">
          <div className="footer2__container-nav">
            <ul className="footer2__container-ul">
              <li className="footer2__container-li">
                <a rel="noreferrer" href="/das">
                  Главная
                </a>
              </li>{" "}
              <li className="footer2__container-li">
                <a rel="noreferrer" href="sas">
                  Услуги{" "}
                </a>
              </li>{" "}
              <li className="footer2__container-li">
                <a rel="noreferrer" href="sas">
                  Отзывы
                </a>
              </li>{" "}
              <li className="footer2__container-li">
                <a rel="noreferrer" href="sas">
                  Партнеры{" "}
                </a>
              </li>{" "}
              <li className="footer2__container-li">
                <a rel="noreferrer" href="sas">
                  Контакты
                </a>
              </li>
            </ul>
          </div>
          <div className="footer2__container-logo">
            <img src={logofooter} alt="" />
          </div>
          <div className="footer2__container-osoo">
            <p>
              ОсОО "КАСКА" <br /> ИНН 213121554512
            </p>
            <p>
              <a
                rel="noreferrer"
                style={{ color: "black", fontWeight: "bold" }}
                target="_blank"
                href="https://www.instagram.com/favorit.studio/"
              >
                Developed by Favorit Studio 2020
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
