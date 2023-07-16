import { useContext } from "react";
import styles from "./App.module.css";
import SearchBar from "./components/SearchBar";
import CurrentWeatherData from "./components/CurrentWeatherData";
import WeatherContext from "./context/WeatherContext";

function App() {
  const ctx = useContext(WeatherContext);

  return (
    <main className={styles["app-wrapper"]}>
      <h1 className={styles.h1}>iWeather</h1>
      <SearchBar />
      {ctx.fetchComplete ? (
        <CurrentWeatherData />
      ) : (
        <p className={styles.error}>{ctx.error}</p>
      )}
      <footer className={styles.footer}>Data provided by WeatherAPI</footer>
    </main>
  );
}

export default App;
