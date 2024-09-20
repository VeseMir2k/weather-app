import { defineStore } from "pinia";
import { fetchWeatherData } from "@/use/useWeather"; // Import funkcji z folderu 'use'

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
        this.weatherData = await fetchWeatherData(lat, lng);
      } catch (error) {
        this.error = error.message;
      } finally {
        this.loading = false;
      }
    },
  },
});
