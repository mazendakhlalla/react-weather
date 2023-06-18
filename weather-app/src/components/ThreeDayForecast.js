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
    <>
      {forecastData.map((dayData) => (
        <Grid container spacing={0} key={dayData.date}>
          <Grid item xs={12}>
            <Paper
              sx={{
                textAlign: "center",
                padding: "20px",
                marginBottom: "20px",
              }}
            >
              <Typography variant="h6">{getDayName(dayData.date)}</Typography>
              <Typography variant="subtitle1">{dayData.date}</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper sx={{ padding: "20px", marginBottom: "20px" }}>
              <Grid container spacing={2}>
                <Grid item xs={3}>
                  <Typography variant="body1">Morning</Typography>
                  <Typography variant="body2">
                    Pressure: {dayData.day.mintemp_c} hPa
                  </Typography>
                  <Typography variant="body2">
                    Humidity: {dayData.day.avghumidity}%
                  </Typography>
                  <Typography variant="body2">
                    Wind Speed: {dayData.day.maxwind_kph} km/h
                  </Typography>
                  <Typography variant="body2">
                    Feels Like: {dayData.day.avgtemp_c}°C
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography variant="body1">Day</Typography>
                  <Typography variant="body2">
                    Pressure: {dayData.day.mintemp_c} hPa
                  </Typography>
                  <Typography variant="body2">
                    Humidity: {dayData.day.avghumidity}%
                  </Typography>
                  <Typography variant="body2">
                    Wind Speed: {dayData.day.maxwind_kph} km/h
                  </Typography>
                  <Typography variant="body2">
                    Feels Like: {dayData.day.avgtemp_c}°C
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography variant="body1">Evening</Typography>
                  <Typography variant="body2">
                    Pressure: {dayData.day.mintemp_c} hPa
                  </Typography>
                  <Typography variant="body2">
                    Humidity: {dayData.day.avghumidity}%
                  </Typography>
                  <Typography variant="body2">
                    Wind Speed: {dayData.day.maxwind_kph} km/h
                  </Typography>
                  <Typography variant="body2">
                    Feels Like: {dayData.day.avgtemp_c}°C
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography variant="body1">Night</Typography>
                  <Typography variant="body2">
                    Pressure: {dayData.day.mintemp_c} hPa
                  </Typography>
                  <Typography variant="body2">
                    Humidity: {dayData.day.avghumidity}%
                  </Typography>
                  <Typography variant="body2">
                    Wind Speed: {dayData.day.maxwind_kph} km/h
                  </Typography>
                  <Typography variant="body2">
                    Feels Like: {dayData.day.avgtemp_c}°C
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      ))}
    </>
  );
};

const ThreeDayForecast = () => {
  const [forecastData, setForecastData] = useState([]);

  useEffect(() => {
    const apiKey = "a0782114d5874cdd84f72402231306";
    const location = "YOUR_LOCATION";
    fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=3`
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

export default ThreeDayForecast;
