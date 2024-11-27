import axios from "axios";

const API_URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "fa1e7919e273c5569bef84a400d0e16e";

export const fetchWeather = (city: string) => {
  return axios
    .get(API_URL, {
      params: {
        q: city,
        appid: 'fa1e7919e273c5569bef84a400d0e16e',
        units: "metric",
      },
    })
    .then((response) => response.data)
    .catch((error) => {
      throw new Error("City not found. Please try again.");
    });
};
