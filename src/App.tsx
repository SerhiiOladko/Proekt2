import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import History from "./pages/History";
import Header from "./components/Header";
import { WeatherProvider } from "./context/WeatherContext";

const App = () => (
  <WeatherProvider>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </Router>
  </WeatherProvider>
);

export default App;

