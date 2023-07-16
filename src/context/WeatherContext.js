import React, { useState, useEffect } from "react";

const API_KEY = process.env.REACT_APP_API_KEY;

const WeatherContext = React.createContext({
  submitFormHandler: () => {},
  firstRenderDone: false,
  currWeatherData: {},
  forecastData: {},
});

export const WeatherContextProvider = (props) => {
  const [firstRenderDone, setFirstRenderDone] = useState(false);
  const [city, setCity] = useState("");
  const [currWeatherData, setCurrWeatherData] = useState(null);
  const [fetchComplete, setFetchComplete] = useState(false);
  const [error, setError] = useState("");
  const [forecastData, setForecastData] = useState(null);

  const submitFormHandler = (cityName) => {
    setFirstRenderDone(true);
    setCity(cityName);
  };

  useEffect(() => {
    if (firstRenderDone) {
      try {
        const fetchWeather = async () => {
          const response = await fetch(
            `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=4&aqi=no&alerts=no`
          );
          const fetchWeatherData = await response.json();
          if (response.ok) {
            setFetchComplete(true);
            setCurrWeatherData({
              location: fetchWeatherData.location,
              currWeather: fetchWeatherData.current,
            });
            setForecastData({
              day1: fetchWeatherData.forecast.forecastday[1],
              day2: fetchWeatherData.forecast.forecastday[2],
              day3: fetchWeatherData.forecast.forecastday[3],
            });
          } else {
            setFetchComplete(false);
            setError("We couldn't find your location. Please try again");
          }
        };
        fetchWeather();
      } catch (error) {
        throw new Error(error);
      }
    }
  }, [city]);

  return (
    <WeatherContext.Provider
      value={{
        submitFormHandler,
        currWeatherData,
        forecastData,
        firstRenderDone,
        fetchComplete,
        error,
      }}>
      {props.children}
    </WeatherContext.Provider>
  );
};

export default WeatherContext;
