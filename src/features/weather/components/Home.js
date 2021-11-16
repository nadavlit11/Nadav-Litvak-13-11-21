import React from "react";
import { useSelector, useDispatch } from "react-redux";
import FiveDaysForecast from "./FiveDaysForecast";
import {
  selectSearchText,
  setSearchText,
  autoCompleteAsync,
  getCurrentCityForecastAsync,
} from "../weatherSlice";

export default function Home() {
  const searchTxt = useSelector(selectSearchText);
  const dispatch = useDispatch();

  function searchTxtChange(e) {
    dispatch(setSearchText(e.target.value));
    dispatch(autoCompleteAsync(e.target.value)).then((res) => {
      dispatch(getCurrentCityForecastAsync());
    });
  }

  return (
    <div>
      <input type="text" value={searchTxt} onChange={searchTxtChange} />
      <FiveDaysForecast />
    </div>
  );
}
