import React from "react";
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
        <img
          src="/img/travel-photo/travel photo-1.jpg"
          alt=""
          className="photo grid-1"
        />
        <img
          src="/img/travel-photo/travel photo-2.jpg"
          alt=""
          className="photo grid-1"
        />
        <img
          src="/img/travel-photo/travel photo-3.jpg"
          alt=""
          className="photo grid-1"
        />
        <img
          src="/img/travel-photo/travel photo-4.jpg"
          alt=""
          className="photo grid-1"
        />
      </div>
      <div className="gallery grid-big">
        <img
          src="/img/travel-photo/travel photo-5.jpg"
          alt=""
          className="photo-small"
        />
        <img
          src="/img/travel-photo/travel photo-6.jpg"
          alt=""
          className="photo-small"
        />
        <img
          src="/img/travel-photo/travel photo-7.jpg"
          alt=""
          className="photo-small"
        />
        <img
          src="/img/travel-photo/travel photo-8.jpg"
          alt=""
          className="photo-small"
        />
        <img
          src="/img/travel-photo/travel photo-13.jpg"
          alt=""
          className="photo-small"
        />
      </div>
      <div className="gallery">
        <img
          src="/img/travel-photo/travel photo-9.jpg"
          alt=""
          className="photo grid-3"
        />
        <img
          src="/img/travel-photo/travel photo-10.jpg"
          alt=""
          className="photo grid-3"
        />
        <img
          src="/img/travel-photo/travel photo-11.jpg"
          alt=""
          className="photo grid-3"
        />
        <img
          src="/img/travel-photo/travel photo-12.jpg"
          alt=""
          className="photo grid-3"
        />
      </div>
    </section>
  );
};

export default TravelPhoto;
