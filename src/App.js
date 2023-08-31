import React from "react";

import Header from "./sections/Header/Header";
import SelectTour from "./sections/(2)SelectTour/SelectTour";
import Reviews from "./sections/(4)Reviews/Reviews";
import TourForm from "./sections/(3)TourForm/TourForm";
import TravelPhoto from "./sections/(5)TravelPhoto/TravelPhoto";
import Stories from "./sections/(6)Stories/Stories";
import Footer from "./sections/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <SelectTour />
      <TourForm />
      <Reviews />
      <TravelPhoto />
      <Stories />
      <Footer />
    </>
  );
}

export default App;
