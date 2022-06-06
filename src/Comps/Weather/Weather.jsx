import React, { useState, useEffect } from "react";
import "./Weather.css";
import axios from "axios";
const Weather = () => {
  const [showWeather, setShowWeather] = useState(false);

  const weatherInitialState = {
    icon: "",
    location: "",
    status: "",
    temp: "",
    wind: "",
    feelsLike: "",
    humidity: "",
    sunrise: "",
    sunset: "",
  };
  const [weather, setWeather] = useState(weatherInitialState);

  const API_KEY = "8e1724f6c49204db0db08a7ddcba09de";

  const getAPI = (lat, lon) => {
    let API = "";
    if (lat === undefined || lon === undefined) {
      API = `https://api.openweathermap.org/data/2.5/weather?q=Kolkata&appid=${API_KEY}`;
    } else {
      API = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    }
    return API;
  };

  const fetchWeather = async (lat, lon) => {
    const API = getAPI(lat, lon);

    try {
      const res = await axios.get(API);
      const data = res.data;
      setWeather({
        icon: data.weather[0].icon,
        location: data.name,
        status: data.weather[0].description,
        temp: Math.round(res.data.main.temp - 273.15),
        wind: data.wind.speed,
        feelsLike: Math.round(res.data.main.feels_like - 273.15),
        humidity: data.main.humidity,
        sunrise: data.sys.sunrise,
        sunset: data.sys.sunset,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const success = (loc) => {
    const crd = loc.coords;
    fetchWeather(crd.latitude, crd.longitude);
  };

  const error = (err) => {
    fetchWeather();
  };

  const getGeoLocation = () => {
    navigator.geolocation.getCurrentPosition(success, error);
  };

  useEffect(() => {
    fetchWeather();
    getGeoLocation();
  }, []);

  return (
    <div className="weather__data">
      <span
        className="flex-center"
        onClick={() => setShowWeather((prev) => !prev)}
      >
        <span>
          <img
            alt="weather-icon"
            src={`http://openweathermap.org/img/w/${weather.icon}.png`}
            width="60"
            height="40"
          />
        </span>
        <span>{weather.temp}°</span>
      </span>
      <span className="flex-center">
        <span>{weather.location}</span>
      </span>
    </div>
  );
};

export { Weather };
