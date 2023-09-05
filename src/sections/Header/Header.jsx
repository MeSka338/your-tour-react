import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [isFixed, setIsFixed] = useState(false);

  const FixingNav = () => {
    if (window.scrollY >= 450) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  };

  window.addEventListener("scroll", FixingNav);

  return (
    <header className="header">
      <div
        className={
          isFixed ? "header__nav-wrapper fixed" : " header__nav-wrapper"
        }
      >
        <nav className="header__nav">
          <div className="logo">
            <a href="/" className="logo__href">
              <img
                src={
                  isFixed
                    ? "/img/header/YourTour-black.svg"
                    : "/img/header/YourTour-white.svg"
                }
                alt="main_logo"
                className="logo__img"
              />
            </a>
          </div>
          <ul className="menu">
            <li className="menu__item p-normal">
              <a href="/" className="menu__link">
                Туры
              </a>
            </li>
            <li className="menu__item p-normal">
              <a href="/" className="menu__link">
                Создать тур
              </a>
            </li>
            <li className="menu__item p-normal">
              <a href="/" className="menu__link">
                Отзывы
              </a>
            </li>
            <li className="menu__item p-normal">
              <a href="/" className="menu__link">
                Истории
              </a>
            </li>
          </ul>

          <p className="contact p-normal">+7 999 999 99 99</p>
        </nav>
      </div>

      <div className="hero hreader__hero">
        <h1 className="hero__title h1">Идеальные путешествия существуют</h1>
        <p className="hero__subtitle p-normal">
          Идейные соображения высшего порядка, a также рамки и место обучения
          кадров
        </p>
        <a href="/" className="main-btn p-small" id="herobtn">
          Найти тур
        </a>
      </div>
    </header>
  );
};

export default Header;
