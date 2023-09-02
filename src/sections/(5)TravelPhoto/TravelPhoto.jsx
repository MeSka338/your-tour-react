import React from "react";
import Arr from "../../utils/array";
import "./TravelPhoto.css";

const TravelPhoto = () => {
  return (
    <section className="travel-photos">
      <h2 className="travel-photos__title title h2">Фотографии путешествий</h2>
      <p className="travel-photos__subtitle subtitle p-normal">
        Идейные соображения высшего порядка, а также рамки и место обучения
        кадров
      </p>
      <div className="gallery">
        {Arr(4, 1).map((item, key) => {
          return (
            <img
              src={`/img/travel-photo/travel photo-${item}.jpg`}
              alt={`${item}`}
              key={key}
              className="photo grid-1"
            />
          );
        })}
      </div>
      <div className="gallery grid-big">
        {Arr(5, 5).map((item, key) => {
          return (
            <img
              src={`/img/travel-photo/travel photo-${item}.jpg`}
              alt={`${item}`}
              key={key}
              className="photo grid-1"
            />
          );
        })}
      </div>
      <div className="gallery">
        {Arr(4, 9).map((item, key) => {
          return (
            <img
              src={`/img/travel-photo/travel photo-${item}.jpg`}
              alt={`${item}`}
              key={key}
              className="photo grid-1"
            />
          );
        })}
      </div>
    </section>
  );
};

export default TravelPhoto;
