import { defineStore } from "pinia";
import { fetchWeatherData, fetchWeatherForecastData } from "@/use/useWeather";

export const useWeatherStore = defineStore("weather", {
  state: () => ({
    // ~ input value
    inputValue: "",
    // ~ autocomplete place
    placeData: null,
    cityName: "",
    // ~ weather
    weatherData: null,
    loading: false,
    error: null,
    // ~ weather forecast
    weatherForecastData: null,
    loadingForecast: false,
    errorForecast: null,
  }),

  actions: {
    async fetchWeather(coord, city) {
      this.loading = true;
      this.error = null;
      try {
        this.weatherData = await fetchWeatherData(coord, city);
      } catch (error) {
        this.error = error.message;
      } finally {
        this.loading = false;
      }
    },

    async fetchWeatherForecast(coord, city) {
      this.loadingForecast = true;
      this.errorForecast = null;
      try {
        this.weatherForecastData = await fetchWeatherForecastData(coord, city);
      } catch (error) {
        this.errorForecast = error.message;
      } finally {
        this.loadingForecast = false;
      }
    },
  },
});
