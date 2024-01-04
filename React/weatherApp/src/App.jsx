import { useState } from "react";
import "./App.css";
import { SearchBox } from "./components/SearchBox/SearchBox";
import { WeatherCard } from "./components/WeatherCard/WeatherCard";

function App() {
  const [weatherInfo, setWeatherInfo] = useState({});
  const updateInfo = (info) => {
    setWeatherInfo(info);
  };
  return (
    <>
      <SearchBox updateInfo={updateInfo} />
      <WeatherCard weatherInfo={weatherInfo} />
    </>
  );
}

export default App;
