import React, { useEffect } from "react";
import styles from "./App.module.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  setSearchText,
  autoCompleteAsync,
  getCurrentCityForecastAsync,
} from "./features/weather/weatherSlice";
import WeatherAppBar from "./WeatherAppBar";
import Home from "./features/weather/components/Home";
import Favorites from "./features/weather/components/Favorites";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSearchText("Tel Aviv"));
    dispatch(autoCompleteAsync("Tel Aviv")).then((res) => {
      dispatch(getCurrentCityForecastAsync());
    });
  }, []);

  return (
    <div className={styles.App}>
      <Router>
        <WeatherAppBar />
        <div className={styles.AppContent}>
          <Routes>
            <Route path="/favorites" element={<Favorites />}></Route>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
