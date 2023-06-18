import React from "react";
import MainDetails from "./components/MainDetails";
import NavBar from "./components/NavBar";
import TenDaysForecast from "./components/TenDaysForecast";
import ThreeDayForecast from "./components/ThreeDayForecast";

function App() {
  return (
    <div>
      <NavBar />
      <MainDetails />
      <TenDaysForecast />
      <ThreeDayForecast />
    </div>
  );
}

export default App;
