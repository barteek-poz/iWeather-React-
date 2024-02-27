import { useContext, useEffect } from "react";
import { SiRainmeter } from "react-icons/si";
import { MdLocationOn } from "react-icons/md";
import { FiWind } from "react-icons/fi";
import FutureWeatherData from "./FutureWeatherData";
import styles from "./CurrentWeatherData.module.css";
import WeatherContext from "../context/WeatherContext";
import useIcon from "../hooks/useIcon";

const CurrentWeatherData = () => {
  const ctx = useContext(WeatherContext);
  const isDay = ctx.currWeatherData.currWeather.is_day;
  const iconCode = ctx.currWeatherData.currWeather.condition.code;
  const weatherIcon = useIcon(iconCode, isDay);

  useEffect(() => {
    if (isDay) {
      document.documentElement.style.setProperty(
        "--background-color",
        "#1770af"
      );
      document.documentElement.style.setProperty("--app-color", "#e1e8f0");
      document.documentElement.style.setProperty("--app-font", "black");
    } else {
      document.documentElement.style.setProperty(
        "--background-color",
        "#272c37"
      );
      document.documentElement.style.setProperty("--app-color", "#5a5f6a");
      document.documentElement.style.setProperty("--app-font", "white");
    }
  }, [isDay]);

  return (
    <section className={styles.wrapper}>
      <h2>
        <MdLocationOn className={styles["location-icon"]} />
        {ctx.currWeatherData.location.name}
      </h2>
      <div className={styles["current-weather-icon"]}>{weatherIcon}</div>
      <p className={styles["current-weather-temp"]}>
        {ctx.currWeatherData.currWeather.temp_c}&deg;C
      </p>
      <p className={styles["current-weather-code"]}>
        {ctx.currWeatherData.currWeather.condition.text}
      </p>
      <div className={styles["current-weather-others"]}>
        <p className={styles["current-weather-wind"]}>
          <FiWind /> {ctx.currWeatherData.currWeather.wind_kph}km/h
        </p>
        <p className={styles["current-weather-humidity"]}>
          <SiRainmeter /> {ctx.currWeatherData.currWeather.precip_mm}%
        </p>
      </div>
      <section className={styles["future-weather-section"]}>
        <FutureWeatherData weatherData={ctx.forecastData.day1} />
        <FutureWeatherData weatherData={ctx.forecastData.day2} />
<FutureWeatherData weatherData={ctx.forecastData.day3} />
    
      </section>
    </section>
  );
};

export default CurrentWeatherData;
