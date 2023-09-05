import React from "react";
import "./TourForm.css";
const TourForm = () => {
  return (
    <section className="tour-form">
      <h2 className="tour-form__title h2 title">Собери свой тур</h2>
      <p className="tour-form__subtitle p-normal subtitle">
        Идейные соображения высшего порядка,
        <br />a также рамки и место обучения кадров
      </p>
      <form className="tour-form__form">
        <div className="form-container">
          <div className="form-grid">
            <div className="from-element">
              <p className="form-element__title p-normal">Имя</p>
              <input
                type="text"
                className="from-element__input p-normal"
                placeholder="Введите Ваше имя"
              />
            </div>
            <div className="from-element">
              <p className="form-element__title p-normal">Направление</p>
              <img
                className="arrow"
                src="/img/tour-form/downArrow.svg"
                alt="dr"
              />
              <select
                required
                className="from-element__input p-normal select"
                name="path"
                id="paht"
              >
                <option value="DEFAULT" disabled hidden>
                  Куда хотите ехать
                </option>
                <option value="1">Европа</option>
                <option value="2">Азия</option>
                <option value="3">Африка</option>
                <option value="4">Северная Америка</option>
                <option value="5">Южная Америка</option>
                <option value="6">Австралия</option>
              </select>
            </div>
            <div className="from-element">
              <p className="form-element__title p-normal">Email</p>
              <input
                type="email"
                className="from-element__input p-normal"
                placeholder="example@mail.com"
              />
            </div>
            <div className="from-element">
              <p className="form-element__title p-normal">Телефон</p>
              <input
                type="tel"
                className="from-element__input p-normal"
                placeholder="+ 7 ( _ _ _ ) _ _ _ - _ _ - _ _"
              />
            </div>
            <div className="from-element">
              <p className="form-element__title p-normal">Дата от</p>
              <input
                type="date"
                className="from-element__input p-normal"
                placeholder="ДД.ММ.ГГГГ"
              />
            </div>
            <div className="from-element">
              <p className="form-element__title p-normal">Дата до</p>
              <input
                type="date"
                className="from-element__input p-normal"
                placeholder="ДД.ММ.ГГГГ"
              />
            </div>
          </div>
          <div className="from-element">
            <p className="form-element__title p-normal comment-title">
              Комментарий
            </p>
            <textarea className="from-element__input p-normal comment"></textarea>
          </div>

          <div className="age-check">
            <p className="age-check__title p-normal">Вам есть 18 лет?</p>
            <input
              className="age-check__radio"
              type="radio"
              name="ansuer"
              id="yes"
            />
            <div className="fake-radio-container">
              <label htmlFor="yes" className="fake-radio"></label>
              <label className="radio-label p-normal" htmlFor="yes">
                Да
              </label>
            </div>
            <input className="radio" type="radio" name="ansuer" id="no" />
            <div className="fake-radio-container">
              <label htmlFor="no" className="fake-radio"></label>
              <label className="radio-label p-normal" htmlFor="no">
                Нет
              </label>
            </div>
          </div>
          <div className="license-agreemt">
            <input type="checkbox" id="check" name="licen" />
            <label className="checkbox-label" htmlFor="check"></label>
            <p className="checkbox-title p-small">
              Нажимая кнопку, я принимаю условия
              <a href="/" className="link">
                Лицензионного договора
              </a>
            </p>
          </div>
          <div className="buttons">
            <button className="submit form-btn p-normal" type="submit">
              Найти тур
            </button>
            <button className="reset form-btn p-normal" type="reset">
              Сбросить
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default TourForm;
