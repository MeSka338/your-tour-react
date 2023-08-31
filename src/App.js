import React from "react";

import Header from "./sections/Header/Header";
import SelectTour from "./sections/(2)SelectTour/SelectTour";
import Reviews from "./sections/(4)Reviews/Reviews";
import TourForm from "./sections/(3)TourForm/TourForm";

function App() {
  return (
    <>
      <Header />
      <SelectTour />
      <TourForm />
      <Reviews />
    </>
  );
}

export default App;
