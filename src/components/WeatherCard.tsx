import React from "react";
import { WeatherData } from "../types/weatherTypes";
import "./WeatherCard.css"; 

const WeatherCard: React.FC<WeatherData> = ({ city, temperature, description, icon }) => (
  <div className="weather-card">
    <h3>{city}</h3>
    <p>{description}</p>
    <p>{temperature}°C</p>
    <img src={`https://openweathermap.org/img/wn/${icon}.png`} alt={description} />
  </div>
);

export default WeatherCard;
;
