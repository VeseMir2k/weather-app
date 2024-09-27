import { defineStore } from "pinia";
import { fetchWeatherCityData, fetchWeatherCoordData } from "@/use/useWeather";

export const useWeatherStore = defineStore("weather", {
  state: () => ({
    weatherData: null,
    loading: false,
    error: null,
    placeData: null,
  }),

  actions: {
    async fetchWeatherCoord(lat, lng) {
      this.loading = true;
      this.error = null;
      try {
        this.weatherData = await fetchWeatherCoordData(lat, lng);
      } catch (error) {
        this.error = error.message;
      } finally {
        this.loading = false;
        this.placeData = null;
      }
    },
    async fetchWeatherCity(city) {
      this.loading = true;
      this.error = null;
      try {
        this.weatherData = await fetchWeatherCityData(city);
      } catch (error) {
        this.error = error.message;
      } finally {
        this.loading = false;
        this.placeData = null;
      }
    },
  },
});
