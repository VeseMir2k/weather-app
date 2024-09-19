import { defineStore } from "pinia";
import axios from "axios";

export const useWeatherStore = defineStore("weather", {
  state: () => ({
    weatherData: null,
    loading: false,
    error: null,
    placeData: null,
  }),

  actions: {
    async fetchWeather(lat, lng) {
      this.loading = true;
      this.error = null;
      try {
        const apiKey = import.meta.env.VITE_API_URL_OPENWEATHER;
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${apiKey}`
        );
        this.weatherData = response.data;
      } catch (error) {
        this.error = "Nie udało się pobrać danych o pogodzie";
      } finally {
        this.loading = false;
      }
    },
  },
});
