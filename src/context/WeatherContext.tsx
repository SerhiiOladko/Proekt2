import React, { createContext, useState, useContext } from "react";
import { WeatherData } from "../types/weatherTypes";

interface WeatherContextProps {
  history: WeatherData[];
  addToHistory: (data: WeatherData) => void;
  clearHistory: () => void;
}

const WeatherContext = createContext<WeatherContextProps | null>(null);

export const WeatherProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [history, setHistory] = useState<WeatherData[]>([]);

  const addToHistory = (data: WeatherData) => setHistory((prev) => [data, ...prev]);
  const clearHistory = () => setHistory([]);

  return (
    <WeatherContext.Provider value={{ history, addToHistory, clearHistory }}>
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeather = () => {
  const context = useContext(WeatherContext);
  if (!context) throw new Error("useWeather must be used within a WeatherProvider");
  return context;
};