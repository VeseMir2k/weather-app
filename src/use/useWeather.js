// ~ imports
import axios from "axios";

// ~ fetchWeatherData

export const fetchWeather = async (url) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error("Nie udało się pobrać danych o pogodzie");
  }
};

// ~ fetchWeatherForecastData
export const fetchWeatherData = async (coord, city) => {
  const apiKey = import.meta.env.VITE_API_URL_OPENWEATHER;
  let url = "";
  if (coord && city) {
    throw new Error("Podaj albo koordynaty, albo miasto, nie oba.");
  } else if (coord) {
    url = `https://api.openweathermap.org/data/2.5/weather?lat=${coord.lat}&lon=${coord.lng}&appid=${apiKey}&lang=pl&units=metric`;
  } else if (city) {
    url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&lang=pl&units=metric`;
  } else {
    throw new Error("Musisz podać koordynaty lub miasto.");
  }

  return await fetchWeather(url);
};

// ~ fetchWeatherForecastData
export const fetchWeatherForecastData = async (coord, city) => {
  const apiKey = import.meta.env.VITE_API_URL_OPENWEATHER;
  let url = "";
  if (coord && city) {
    throw new Error("Podaj albo koordynaty, albo miasto, nie oba.");
  } else if (coord) {
    url = `https://api.openweathermap.org/data/2.5/forecast?lat=${coord.lat}&lon=${coord.lng}&appid=${apiKey}&lang=pl&units=metric`;
  } else if (city) {
    url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&lang=pl&units=metric`;
  } else {
    throw new Error("Musisz podać koordynaty lub miasto.");
  }

  return await fetchWeather(url);
};
