import React from "react";
import "./Reviews.css";
const Reviews = () => {
  return (
    <section className="reviwes">
      <h2 className="reviwes__title title h2">
        Отзывы наших
        <br />
        путешественников
      </h2>
      <p className="reviwes__subtitle subtitle p-normal">
        Идейные соображения высшего порядка, а также рамки и место обучения
        кадров
      </p>

      <div className="review-wrapper">
        <div className="review">
          <p className="review__textblock p-big">
            Идейные соображения высшего порядка, а также рамки и место обучения
            кадров обеспечивает широкому кругу (специалистов) участие в
            формировании новых предложений. Идейные соображения высшего порядка,
            а также начало повседневной работы по формированию позиции позволяет
            оценить значение модели развития.
          </p>

          <div className="profile">
            <div className="profile__title">
              <h3 className="profile__name h3">Мария</h3>
              <div className="profile__tour p-small">Тур: Вдали от дома</div>
            </div>
            <img
              src="/img/reviews/mari.png"
              alt="mari"
              className="profile__img"
            />
          </div>
        </div>

        <div className="review">
          <p className="review__textblock p-big">
            Равным образом постоянный количественный рост и сфера нашей
            активности играет важную роль в формировании системы обучения
            кадров, соответствует насущным потребностям.
            <br />
            <br />
            Значимость этих проблем настолько очевидна, что дальнейшее развитие
            различных форм деятельности обеспечивает широкому кругу
            (специалистов) участие в формировании новых предложений.
            Повседневная практика показывает, что реализация намеченных плановых
            заданий в значительной степени обуславливает создание модели
            развития.
          </p>

          <div className="profile">
            <div className="profile__title">
              <h3 className="profile__name h3">Павел</h3>
              <div className="profile__tour p-small">
                Тур: Путешествие в горы
              </div>
            </div>
            <img
              src="/img/reviews/pavel.png"
              alt="mari"
              className="profile__img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
