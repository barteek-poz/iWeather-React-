import useIcon from "../hooks/useIcon";
import { BsCloudRainHeavy } from "react-icons/bs";
import styles from "./FutureWeatherData.module.css";

const FutureWeatherData = (props) => {

  const dayName = new Date(props.weatherData.date).toLocaleDateString("en-us", {
    weekday: "short",
  });
  const weatherIcon = useIcon(props.weatherData.day.condition.code, 1);
  const temp = props.weatherData.day.avgtemp_c.toFixed(0);
  return (
    <section className={styles.wrapper}>
      <h3>{dayName}</h3>
      <div className={styles.icon}>
        {weatherIcon}
      </div>
      <p className={styles.temp}>{temp}&deg;C</p>
    </section>
  );
};

export default FutureWeatherData;
