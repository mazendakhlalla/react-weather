import { useEffect, useState } from "react";
import { Grid, Paper, Typography } from "@mui/material";

const ForecastGrid = ({ forecastData }) => {
  const getDayName = (dateString) => {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const date = new Date(dateString);
    return days[date.getDay()];
  };
  return (
    <div className="m-5">
      <Grid
        container
        spacing={0}
        sx={{
          display: "flex",
          alignItems: "stretch",
          justifyContent: "space-between",
        }}
      >
        {forecastData.map((dayData) => (
          <Grid
            item
            key={dayData.date}
            xs={1}
            sx={{
              flex: "0 0 10%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Paper style={{ padding: "10px", height: "100%" }}>
              <Typography variant="subtitle1">
                {getDayName(dayData.date)}
              </Typography>

              <img src={dayData.day.condition.icon} alt="Weather Icon" />
              <Typography
                variant="body1"
                sx={{ fontWeight: "bold", fontSize: "25px" }}
              >
                {dayData.day.avgtemp_c}°C
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontWeight: "light", fontSize: "10px" }}
              >
                Night: {dayData.day.avgtemp_c}°C
              </Typography>
              <Typography
                variant="h6"
                sx={{ fontWeight: "light", fontSize: "10px" }}
              >
                {dayData.day.condition.text}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

const TenDayForecast = () => {
  const [forecastData, setForecastData] = useState([]);

  useEffect(() => {
    const apiKey = "a0782114d5874cdd84f72402231306";
    const location = "auto:ip";
    fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=10`
    )
      .then((response) => response.json())
      .then((data) => setForecastData(data.forecast.forecastday))
      .catch((error) => console.log("Error fetching forecast data:", error));
  }, []);

  return (
    <div>
      <ForecastGrid forecastData={forecastData} />
    </div>
  );
};

export default TenDayForecast;
