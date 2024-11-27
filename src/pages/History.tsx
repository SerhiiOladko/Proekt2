import React from "react";
import { useWeather } from "../context/WeatherContext";
import WeatherCard from "../components/WeatherCard";

const History = () => {
  const { history, clearHistory } = useWeather();

  return (
    <div>
      <h1>History</h1>
      {history.length > 0 ? (
        <>
          <button onClick={clearHistory}>Delete all cards</button>
          {history.map((data) => (
            <WeatherCard key={data.id} {...data} />
          ))}
        </>
      ) : (
        <p>No history available</p>
      )}
    </div>
  );
};

export default History;

