import React, { useEffect, useState } from "react";
import fetchWeatherData from "../services/utils";
import SwiperCore, { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";

SwiperCore.use([Pagination, Navigation]);
const ForecastScreen = () => {
  const [hourlyForecast, setHourlyForecast] = useState(null);
  useEffect(() => {
    const apiEndpoint = "forecast";
    const location = "auto:ip";
    fetchWeatherData(apiEndpoint, location)
      .then((data) => {
        setHourlyForecast(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  const getCurrentHourIndex = () => {
    const now = new Date();
    const currentHour = now.getHours();
    return currentHour;
  };

  return (
    <div className="col-span-2 border-t">
      {hourlyForecast && hourlyForecast.forecast && (
        <Swiper
          slidesPerView={6}
          spaceBetween={10}
          initialSlide={getCurrentHourIndex()}
          navigation
          pagination={{ clickable: true }}
        >
          {hourlyForecast.forecast.forecastday[0].hour.map((hour, index) => (
            <SwiperSlide key={hour.time}>
              <div className="flex items-center justify-center flex-col ">
                <img src={hour.condition.icon} alt="Weather Icon" />
                <p className="font-light py-2">
                  {index === getCurrentHourIndex()
                    ? "Now"
                    : hour.time.split(" ")[1]}
                </p>
                <p className="py-2"> {hour.temp_c}°C</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

export default ForecastScreen;
