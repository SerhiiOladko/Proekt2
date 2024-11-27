import React, { useState } from "react";
import { fetchWeather } from "../api/weatherApi";
import { useWeather } from "../context/WeatherContext";
import WeatherCard from "../components/WeatherCard";

const Home = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const { addToHistory } = useWeather();

  const handleSearch = () => {
    if (!city) {
      alert("Please enter a city name");
      return;
    }

    setError(null);
    fetchWeather(city)
      .then((data) => {
        const weatherData = {
          id: data.id,
          city: data.name,
          temperature: data.main.temp,
          description: data.weather[0].description,
          icon: data.weather[0].icon,
        };
        setWeather(weatherData);
        addToHistory(weatherData);
      })
      .catch((err) => setError(err.message));
  };

  return (
    <div className="home">
      <h1>Weather App</h1>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
      />
      <button onClick={handleSearch}>Search</button>
      {error && <p className="error">{error}</p>}
      {weather && <WeatherCard {...weather} />}
    </div>
  );
};

export default Home;

