const fetchWeatherData = (apiEndpoint, location) => {
  const apiKey = "a0782114d5874cdd84f72402231306";
  const apiUrl = `https://api.weatherapi.com/v1/${apiEndpoint}.json?key=${apiKey}&q=${encodeURIComponent(
    location
  )}`;

  return fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

export default fetchWeatherData;
