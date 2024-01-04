import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Alert from "@mui/material/Alert";

export const SearchBox = ({ updateInfo }) => {
  const [city, setCity] = useState("");
  const [error, setError] = useState(false);
  const [result, setResult] = useState({});

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const getWeatherData = async () => {
    let res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e25f3bf2e857a4c1069f2cfb4e6e84cb`
    );
    let response = await res.json();
    let result_ = {
      feels_like: response.main.feels_like,
      humidity: response.main.humidity,
      pressure: response.main.pressure,
      temp: response.main.temp,
      temp_max: response.main.temp_max,
      temp_min: response.main.temp_min,
      description: response.weather[0].description,
      name: response.name,
    };
    return result_;
  };

  const citySubmit = async (e) => {
    e.preventDefault();
    console.log(city);
    let res = await getWeatherData();
    updateInfo(res);
    setCity("");
  };

  return (
    <>
      <Alert severity="error" style={{ display: error ? "block" : "none" }}>
        This is an error alert — check it out!
      </Alert>

      <TextField
        id="filled-basic"
        label="Place"
        variant="filled"
        value={city}
        onChange={handleCityChange}
      />
      <br />
      <Button variant="contained" onClick={citySubmit}>
        Search
      </Button>
    </>
  );
};
