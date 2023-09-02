import React, { useRef, useEffect } from "react";
import Arr from "../../utils/array";
import "./SelectTour.css";

const menuArr = ["Популярные", "Авторские", "Походы", "Сплавы", "Велопрогулки"];

const SelectTour = () => {
  const menu = useRef();

  const Change = (key) => {
    const children = menu.current.children;
    for (let i = 0; i < children.length; i++) {
      children[i].classList.remove("active");
    }
    children[key].classList.add("active");
  };

  useEffect(() => {
    menu.current.children[0].classList.add("active");
  }, []);

  return (
    <section className="select-tour">
      <h2 className="select-tour__title h2 title">Выбери свой тур</h2>
      <ul className="select-tour__menu" ref={menu}>
        {menuArr.map((item, key) => {
          return (
            <li
              className={"select-tour-menu__item p-big"}
              key={key}
              onClick={() => Change(key)}
            >
              <a className="select-tour-menu__link">{item}</a>
            </li>
          );
        })}
      </ul>
      <div className="select-tour__options">
        {Arr(6, 1).map((item, key) => {
          return (
            <div className="card-container" key={key}>
              <div className="card">
                <div className="grad"></div>
                <img
                  src={`/img/select-tour/cardTourPhoto-${item}.jpg`}
                  alt={`${item}`}
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
          );
        })}
      </div>
    </section>
  );
};

export default SelectTour;
