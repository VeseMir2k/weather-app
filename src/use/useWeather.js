// ~ imports
import axios from "axios";

// ~ fetchWeatherCoordData
export const fetchWeatherCoordData = async (lat, lng) => {
  try {
    const apiKey = import.meta.env.VITE_API_URL_OPENWEATHER;
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${apiKey}&lang=pl&units=metric`
    );
    return response.data;
  } catch (error) {
    throw new Error("Nie udało się pobrać danych o pogodzie");
  }
};

// ~ fetchWeatherCityData
export const fetchWeatherCityData = async (city) => {
  try {
    const apiKey = import.meta.env.VITE_API_URL_OPENWEATHER;
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?&q=${city}&appid=${apiKey}&lang=pl&units=metric`
    );
    return response.data;
  } catch (error) {
    throw new Error("Nie udało się pobrać danych o pogodzie");
  }
};
