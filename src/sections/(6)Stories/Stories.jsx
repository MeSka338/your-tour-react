import React from "react";
import "./Stories.css";

const Stories = () => {
  return (
    <section className="stories">
      <h2 className="stories__title title h2">Истории путешествий</h2>
      <p className="stories__subtitle subtitle p-normal">
        Идейные соображения высшего порядка, а также рамки и место обучения
        кадров
      </p>

      <div className="card-container-big">
        <div className="card-big card">
          <img
            src="/img/stories/story photo-1.jpg"
            alt="1"
            className="card-bg"
          />
          <div className="grad-2"></div>

          <div className="card-big__content">
            <h3 className="card-big__title h3">Автостопом в Стамбул</h3>
            <p className="card-big__subtitle p-normal">
              Идейные соображения высшего порядка, а также рамки и место
              обучения кадров обеспечивает широкому кругу (специалистов) участие
              в формировании новых предложений.
            </p>
            <ul className="card-big__subtitle-list">
              <li className="subtitle-list__item p-normal">вкусная еда</li>
              <li className="subtitle-list__item p-normal">
                дешевый транспорт
              </li>
              <li className="subtitle-list__item p-normal">красивый город</li>
            </ul>
            <a href="#" className="secondary-btn stories__btn">
              <p className="secondary-btn__title p-big">Подробнее</p>
              <img
                className="secondary-btn__icon"
                src="/img/stories/arrow.svg"
                alt=""
              />
            </a>
            <div className="socials card__socials">
              <a href="#" className="socials__item p-normal">
                instagram
              </a>
              <a href="#" className="socials__item p-normal">
                facebook
              </a>
              <a href="#" className="socials__item p-normal">
                YouTube
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="card-container-big">
        <div className="card-big card">
          <img
            src="/img/stories/story photo-2.jpg"
            alt="1"
            className="card-bg"
          />
          <div className="grad-2"></div>

          <div className="card-big__content">
            <h3 className="card-big__title h3">Автостопом в Стамбул</h3>
            <p className="card-big__subtitle p-normal">
              Идейные соображения высшего порядка, а также рамки и место
              обучения кадров обеспечивает широкому кругу (специалистов) участие
              в формировании новых предложений.
            </p>

            <a href="#" className="secondary-btn stories__btn">
              <p className="secondary-btn__title p-big">Подробнее</p>
              <img
                className="secondary-btn__icon"
                src="/img/stories/arrow.svg"
                alt=""
              />
            </a>
            <div className="socials card__socials">
              <a href="#" className="socials__item p-normal">
                instagram
              </a>
              <a href="#" className="socials__item p-normal">
                ВКонтакте
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="card-container-big">
        <div className="card-big card">
          <img
            src="/img/stories/story photo-3.jpg"
            alt="1"
            className="card-bg"
          />
          <div className="grad-2"></div>

          <div className="card-big__content">
            <h3 className="card-big__title h3">Автостопом в Стамбул</h3>
            <p className="card-big__subtitle p-normal">
              Идейные соображения высшего порядка, а также рамки и место
              обучения кадров обеспечивает широкому кругу (специалистов) участие
              в формировании новых предложений.
            </p>

            <a href="#" className="secondary-btn stories__btn">
              <p className="secondary-btn__title p-big">Подробнее</p>
              <img
                className="secondary-btn__icon"
                src="/img/stories/arrow.svg"
                alt=""
              />
            </a>
            <div className="socials card__socials">
              <a href="#" className="socials__item p-normal">
                instagram
              </a>
              <a href="#" className="socials__item p-normal">
                facebook
              </a>
              <a href="#" className="socials__item p-normal">
                ВКонтакте
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stories;
