import React from "react";
import fetchWeatherData from "../services/utils";

const WeatherDisplay = ({ weatherData }) => {
  return (
    <div>
      <h2>Weather Information</h2>
      {weatherData && (
        <div>
          <p>City: {weatherData.location.name}</p>
        </div>
      )}
    </div>
  );
};

export default WeatherDisplay;
