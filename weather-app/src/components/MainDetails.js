import React, { useEffect, useState } from "react";
import { MapPinIcon } from "@heroicons/react/24/outline";
import fetchWeatherData from "../services/utils";
import { Card } from "@mui/material";
import ForecastScreen from "./ForecastScreen";
const MainDetails = () => {
  const [weatherData, setWeatherData] = useState(null);
  useEffect(() => {
    const apiEndpoint = "current";
    const location = "auto:ip";
    fetchWeatherData(apiEndpoint, location)
      .then((data) => {
        setWeatherData(data);
      })
      .catch((error) => {
        console.error("Error", error);
      });
  }, []);
  if (!weatherData) {
    return <p>Loading...</p>;
  }
  const { location, current } = weatherData;
  const currentDate = new Date(location.localtime).toLocaleString("en-US", {
    timeZone: "Europe/Berlin",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  const convertedDay = new Date().toLocaleString("en-US", {
    weekday: "short",
    timeZone: "Europe/Berlin",
  });

  return (
    <div>
      {weatherData && weatherData.location && (
        <Card className="grid grid-cols-2 w-1/3 mx-auto">
          <div className="p-3">
            <p className="text-lg font-light">
              {convertedDay}, {currentDate}
            </p>
            <div className="flex ">
              <p className="pr-3 font-medium text-xl">{location.name} </p>
              <MapPinIcon className=" mr-1 h-5 w-5" />
            </div>

            <div className="flex">
              <p className="text-7xl font-semibold">{current.temp_c}</p>
              <span className="font-bold text-xl">°C</span>
            </div>
            <p>
              {current.condition.text}, Feels Like {current.feelslike_c}
            </p>
          </div>
          {weatherData.current.condition && (
            <div className="flex items-center justify-center ">
              <img
                className="w-28"
                src={current.condition.icon}
                alt="Weather Icon"
              />
            </div>
          )}
          <ForecastScreen />
        </Card>
      )}
    </div>
  );
};

export default MainDetails;
