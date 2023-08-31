import React from "react";
import "./SelectTour.css";

const SelectTour = () => {
  return (
    <section className="select-tour">
      <h2 className="select-tour__title h2 title">Выбери свой тур</h2>
      <ul className="select-tour__menu">
        <li className="select-tour-menu__item p-big active">
          <a className="select-tour-menu__link">Популярные</a>
        </li>
        <li className="select-tour-menu__item p-big">
          <a className="select-tour-menu__link">Авторские</a>
        </li>
        <li className="select-tour-menu__item p-big">
          <a className="select-tour-menu__link">Походы</a>
        </li>
        <li className="select-tour-menu__item p-big">
          <a className="select-tour-menu__link">Сплавы</a>
        </li>
        <li className="select-tour-menu__item p-big">
          <a className="select-tour-menu__link">Велопрогулки</a>
        </li>
      </ul>
      <div className="select-tour__options">
        <div className="card-container">
          <div className="card">
            <div className="grad"></div>
            <img
              src="/img/select-tour/cardTourPhoto-1.jpg"
              alt="1"
              className="card-bg"
            />
            <div className="titles-container">
              <h3 className="card__title h3">Путешествие в горы</h3>
              <p className="card__subtitle p-small">от 80 000 руб</p>
            </div>

            <a href="#" className="secondary-btn">
              <p className="secondary-btn__title p-big">Подробнее</p>
              <img
                className="secondary-btn__icon"
                src="/img/select-tour/arrow.svg"
                alt="arrow"
              />
            </a>
          </div>
        </div>

        <div className="card-container">
          <div className="card">
            <div className="grad"></div>
            <img
              src="/img/select-tour/cardTourPhoto-2.jpg"
              alt="1"
              className="card-bg"
            />
            <div className="titles-container">
              <h3 className="card__title h3">Путешествие в горы</h3>
              <p className="card__subtitle p-small">от 80 000 руб</p>
            </div>

            <a href="#" className="secondary-btn">
              <p className="secondary-btn__title p-big">Подробнее</p>
              <img
                className="secondary-btn__icon"
                src="/img/select-tour/arrow.svg"
                alt="arrow"
              />
            </a>
          </div>
        </div>
        <div className="card-container">
          <div className="card">
            <div className="grad"></div>
            <img
              src="/img/select-tour/cardTourPhoto-3.jpg"
              alt="1"
              className="card-bg"
            />
            <div className="titles-container">
              <h3 className="card__title h3">Путешествие в горы</h3>
              <p className="card__subtitle p-small">от 80 000 руб</p>
            </div>

            <a href="#" className="secondary-btn">
              <p className="secondary-btn__title p-big">Подробнее</p>
              <img
                className="secondary-btn__icon"
                src="/img/select-tour/arrow.svg"
                alt="arrow"
              />
            </a>
          </div>
        </div>
        <div className="card-container">
          <div className="card">
            <div className="grad"></div>
            <img
              src="/img/select-tour/cardTourPhoto-4.jpg"
              alt="1"
              className="card-bg"
            />

            <div className="titles-container">
              <h3 className="card__title h3">Путешествие в горы</h3>
              <p className="card__subtitle p-small">от 80 000 руб</p>
            </div>
            <a href="#" className="secondary-btn">
              <p className="secondary-btn__title p-big">Подробнее</p>
              <img
                className="secondary-btn__icon"
                src="/img/select-tour/arrow.svg"
                alt="arrow"
              />
            </a>
          </div>
        </div>
        <div className="card-container">
          <div className="card">
            <div className="grad"></div>
            <img
              src="/img/select-tour/cardTourPhoto-5.jpg"
              alt="1"
              className="card-bg"
            />
            <div className="titles-container">
              <h3 className="card__title h3">Путешествие в горы</h3>
              <p className="card__subtitle p-small">от 80 000 руб</p>
            </div>
            <a href="#" className="secondary-btn">
              <p className="secondary-btn__title p-big">Подробнее</p>
              <img
                className="secondary-btn__icon"
                src="/img/select-tour/arrow.svg"
                alt="arrow"
              />
            </a>
          </div>
        </div>
        <div className="card-container">
          <div className="card">
            <div className="grad"></div>
            <img
              src="/img/select-tour/cardTourPhoto-6.jpg"
              alt="1"
              className="card-bg"
            />
            <div className="titles-container">
              <h3 className="card__title h3">Путешествие в горы</h3>
              <p className="card__subtitle p-small">от 80 000 руб</p>
            </div>
            <a href="#" className="secondary-btn">
              <p className="secondary-btn__title p-big">Подробнее</p>
              <img
                className="secondary-btn__icon"
                src="/img/select-tour/arrow.svg"
                alt="arrow"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SelectTour;
