const apiKey = "5N1aWnstEsgS8zOpcvsQGajjVwR86Cyj";
const API_BASE_URL = "https://dataservice.accuweather.com/";
const autoCompleteUrl = "locations/v1/cities/autocomplete";
const getFiveDaysForecastUrl = "forecasts/v1/daily/5day/";
const getCurrentWeatherUrl = "currentconditions/v1/";

export function autoComplete(q = "") {
  return fetch(
    encodeURI(`${API_BASE_URL}${autoCompleteUrl}?apikey=${apiKey}&q=${q}`)
  ).then(async (res) => await res.json());
}

export function getFiveDaysForecast(cityCode) {
  return fetch(
    encodeURI(
      `${API_BASE_URL}${getFiveDaysForecastUrl}${cityCode}?apikey=${apiKey}`
    )
  ).then(async (res) => await res.json());
}

export function getCityWeather(cityCode) {
  return fetch(
    encodeURI(
      `${API_BASE_URL}${getCurrentWeatherUrl}${cityCode}?apikey=${apiKey}`
    )
  ).then(async (res) => await res.json());
}

export function fetchCount() {}

/**
 * [{"Version":1,"Key":"215854","Type":"City","Rank":31,"LocalizedName":"Tel Aviv","Country":{"ID":"IL","LocalizedName":"Israel"},"AdministrativeArea":{"ID":"TA","LocalizedName":"Tel Aviv"}}]
 *
 */

/*
 [{
    "LocalObservationDateTime": "2021-11-13T15:16:00+02:00",
    "EpochTime": 1636809360,
    "WeatherText": "Cloudy",
    "WeatherIcon": 7,
    "HasPrecipitation": false,
    "PrecipitationType": null,
    "IsDayTime": true,
    "Temperature": {
        "Metric": {
            "Value": 30,
            "Unit": "C",
            "UnitType": 17
        },
        "Imperial": {
            "Value": 86,
            "Unit": "F",
            "UnitType": 18
        }
    },
    "MobileLink": "http://www.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us",
    "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us"
}]
 */
