import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <img
          src="/img/footer/footer photo.jpg"
          alt="footer img"
          className="footer__img"
        />

        <div className="footer__content">
          <h3 className="footer__title h3">
            Пора в путешествие вместе с нами!
          </h3>
          <p className="footer__subtitle p-normal">
            Напиши на почту и узнай подробности
            <br />
            на{" "}
            <a href="#" className="link">
              yourtour@gmail.com
            </a>
          </p>
        </div>
      </div>
      <div className="contacts-container">
        <div className="footer__contacts">
          <p className="contacts__title p-normal">Наши социальные сети</p>
          <div className="contacts__socials socials">
            <div className="contacts__item socials__item">
              <img
                className="contacts__icon"
                src="/img/footer/instagram-icon.png"
                alt=""
              />
              <a href="#" className="socials__title p-normal link">
                instagram
              </a>
            </div>

            <div className="contacts__item socials__item">
              <img
                className="contacts__icon"
                src="/img/footer/facebook-icon.png"
                alt=""
              />
              <a href="#" className="socials__title p-normal link">
                facebook
              </a>
            </div>

            <div className="contacts__item socials__item">
              <img
                className="contacts__icon"
                src="/img/footer/vk-icon.png"
                alt=""
              />
              <a href="#" className="socials__title p-normal link">
                vkontakte
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
