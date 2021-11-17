import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Card } from "@mui/material";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import {
  selectCurrentCity,
  selectFiveDaysForecast,
  selectCurrentWeather,
  selectFavorites,
  toggleFavorite,
} from "../weatherSlice";
import styles from "./FiveDaysForecast.module.css";

export default function FiveDaysForecast() {
  const dispatch = useDispatch();
  const currentCity = useSelector(selectCurrentCity);
  const currentWeather = useSelector(selectCurrentWeather);
  const forecast = useSelector(selectFiveDaysForecast);
  const favorites = useSelector(selectFavorites);
  const FavIcon = favorites?.[currentCity?.Key] ? Favorite : FavoriteBorder;
  const daysOfTheWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  function getDayOfTheWeek(dateStr) {
    return daysOfTheWeek[new Date(Date.parse(dateStr)).getDay()];
  }

  function onFavoriteClick() {
    dispatch(toggleFavorite(currentCity.Key));
  }

  return (
    <Container className={styles.ForecastContainer}>
      <div className={styles.ForecastTop}>
        <div className={styles.ForecastTopLeft}>
          <div>{currentCity?.LocalizedName}</div>
          <div>{currentWeather?.Temperature.Metric.Value}</div>
        </div>
        <div className={styles.ForecastTopRight}>
          <FavIcon onClick={onFavoriteClick}></FavIcon>
        </div>
      </div>
      <div className={styles.ForecastMiddle}>{currentWeather?.WeatherText}</div>
      <div className={styles.ForecastBottom}>
        <Card className={styles.ForecastCard}>
          <div>{getDayOfTheWeek(forecast?.DailyForecasts[0].Date)}</div>
          <div>{forecast?.DailyForecasts[0].Temperature.Maximum.Value}</div>
        </Card>
        <Card className={styles.ForecastCard}>
          <div>{getDayOfTheWeek(forecast?.DailyForecasts[1].Date)}</div>
          <div>{forecast?.DailyForecasts[1].Temperature.Maximum.Value}</div>
        </Card>
        <Card className={styles.ForecastCard}>
          <div>{getDayOfTheWeek(forecast?.DailyForecasts[2].Date)}</div>
          <div>{forecast?.DailyForecasts[2].Temperature.Maximum.Value}</div>
        </Card>
        <Card className={styles.ForecastCard}>
          <div>{getDayOfTheWeek(forecast?.DailyForecasts[3].Date)}</div>
          <div>{forecast?.DailyForecasts[3].Temperature.Maximum.Value}</div>
        </Card>
        <Card className={styles.ForecastCard}>
          <div>{getDayOfTheWeek(forecast?.DailyForecasts[4].Date)}</div>
          <div>{forecast?.DailyForecasts[4].Temperature.Maximum.Value}</div>
        </Card>
      </div>
    </Container>
  );
}
/*
{
    "Headline": {
        "EffectiveDate": "2021-11-18T01:00:00+09:00",
        "EffectiveEpochDate": 1637164800,
        "Severity": 5,
        "Text": "Expect showery weather late Wednesday night through Thursday afternoon",
        "Category": "rain",
        "EndDate": "2021-11-18T19:00:00+09:00",
        "EndEpochDate": 1637229600,
        "MobileLink": "http://www.accuweather.com/en/jp/tokyo/226396/daily-weather-forecast/226396?lang=en-us",
        "Link": "http://www.accuweather.com/en/jp/tokyo/226396/daily-weather-forecast/226396?lang=en-us"
    },
    "DailyForecasts": [
        {
            "Date": "2021-11-13T07:00:00+09:00",
            "EpochDate": 1636754400,
            "Temperature": {
                "Minimum": {
                    "Value": 52,
                    "Unit": "F",
                    "UnitType": 18
                },
                "Maximum": {
                    "Value": 61,
                    "Unit": "F",
                    "UnitType": 18
                }
            },
            "Day": {
                "Icon": 1,
                "IconPhrase": "Sunny",
                "HasPrecipitation": false
            },
            "Night": {
                "Icon": 38,
                "IconPhrase": "Mostly cloudy",
                "HasPrecipitation": false
            },
            "Sources": [
                "AccuWeather"
            ],
            "MobileLink": "http://www.accuweather.com/en/jp/tokyo/226396/daily-weather-forecast/226396?lang=en-us",
            "Link": "http://www.accuweather.com/en/jp/tokyo/226396/daily-weather-forecast/226396?lang=en-us"
        },
        {
            "Date": "2021-11-14T07:00:00+09:00",
            "EpochDate": 1636840800,
            "Temperature": {
                "Minimum": {
                    "Value": 51,
                    "Unit": "F",
                    "UnitType": 18
                },
                "Maximum": {
                    "Value": 66,
                    "Unit": "F",
                    "UnitType": 18
                }
            },
            "Day": {
                "Icon": 3,
                "IconPhrase": "Partly sunny",
                "HasPrecipitation": false
            },
            "Night": {
                "Icon": 33,
                "IconPhrase": "Clear",
                "HasPrecipitation": false
            },
            "Sources": [
                "AccuWeather"
            ],
            "MobileLink": "http://www.accuweather.com/en/jp/tokyo/226396/daily-weather-forecast/226396?day=1&lang=en-us",
            "Link": "http://www.accuweather.com/en/jp/tokyo/226396/daily-weather-forecast/226396?day=1&lang=en-us"
        },
        {
            "Date": "2021-11-15T07:00:00+09:00",
            "EpochDate": 1636927200,
            "Temperature": {
                "Minimum": {
                    "Value": 53,
                    "Unit": "F",
                    "UnitType": 18
                },
                "Maximum": {
                    "Value": 66,
                    "Unit": "F",
                    "UnitType": 18
                }
            },
            "Day": {
                "Icon": 1,
                "IconPhrase": "Sunny",
                "HasPrecipitation": false
            },
            "Night": {
                "Icon": 36,
                "IconPhrase": "Intermittent clouds",
                "HasPrecipitation": false
            },
            "Sources": [
                "AccuWeather"
            ],
            "MobileLink": "http://www.accuweather.com/en/jp/tokyo/226396/daily-weather-forecast/226396?day=2&lang=en-us",
            "Link": "http://www.accuweather.com/en/jp/tokyo/226396/daily-weather-forecast/226396?day=2&lang=en-us"
        },
        {
            "Date": "2021-11-16T07:00:00+09:00",
            "EpochDate": 1637013600,
            "Temperature": {
                "Minimum": {
                    "Value": 52,
                    "Unit": "F",
                    "UnitType": 18
                },
                "Maximum": {
                    "Value": 64,
                    "Unit": "F",
                    "UnitType": 18
                }
            },
            "Day": {
                "Icon": 6,
                "IconPhrase": "Mostly cloudy",
                "HasPrecipitation": false
            },
            "Night": {
                "Icon": 38,
                "IconPhrase": "Mostly cloudy",
                "HasPrecipitation": false
            },
            "Sources": [
                "AccuWeather"
            ],
            "MobileLink": "http://www.accuweather.com/en/jp/tokyo/226396/daily-weather-forecast/226396?day=3&lang=en-us",
            "Link": "http://www.accuweather.com/en/jp/tokyo/226396/daily-weather-forecast/226396?day=3&lang=en-us"
        },
        {
            "Date": "2021-11-17T07:00:00+09:00",
            "EpochDate": 1637100000,
            "Temperature": {
                "Minimum": {
                    "Value": 52,
                    "Unit": "F",
                    "UnitType": 18
                },
                "Maximum": {
                    "Value": 64,
                    "Unit": "F",
                    "UnitType": 18
                }
            },
            "Day": {
                "Icon": 2,
                "IconPhrase": "Mostly sunny",
                "HasPrecipitation": false
            },
            "Night": {
                "Icon": 34,
                "IconPhrase": "Mostly clear",
                "HasPrecipitation": true,
                "PrecipitationType": "Rain",
                "PrecipitationIntensity": "Light"
            },
            "Sources": [
                "AccuWeather"
            ],
            "MobileLink": "http://www.accuweather.com/en/jp/tokyo/226396/daily-weather-forecast/226396?day=4&lang=en-us",
            "Link": "http://www.accuweather.com/en/jp/tokyo/226396/daily-weather-forecast/226396?day=4&lang=en-us"
        }
    ]
}
*/
