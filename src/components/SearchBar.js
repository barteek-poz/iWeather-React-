import { useRef, useContext } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import styles from "./SearchBar.module.css";
import WeatherContext from "../context/WeatherContext";

const SearchBar = () => {
 const ctx = useContext(WeatherContext)
 const cityName = useRef()

 const submitFormHandler = (e) => {
    e.preventDefault();
    ctx.submitFormHandler(cityName.current.value)
    e.target.reset();
  };

  return (
    <form onSubmit={submitFormHandler} className={styles["search-bar"]}>
      <input
        type="text"
        placeholder="Type your location..."
        className={styles.input}
        ref={cityName}></input>
      <button className={styles.button}>
        <AiOutlineSearch />
      </button>
    </form>
  );
};

export default SearchBar;
