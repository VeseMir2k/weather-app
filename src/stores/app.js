// src/stores/weatherStore.js
import { defineStore } from "pinia";
import axios from "axios";

export const useWeatherStore = defineStore("weather", {
  state: () => ({
    weatherData: null,
    loading: false,
    error: null,
    forecastWeatherData: null,
    forecastLoading: false,
    forecastError: null,
  }),

  actions: {
    async fetchWeather(city) {
      this.loading = true;
      this.error = null;
      try {
        const apiKey = import.meta.env.VITE_API_URL_OPENWEATHER;
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=pl`
        );
        this.weatherData = response.data;
      } catch (error) {
        this.error = "Nie udało się pobrać danych o pogodzie";
      } finally {
        this.loading = false;
      }
    },
    async fetchForecastWeather(city) {
      this.forecastLoading = true;
      this.forecastError = null;
      try {
        const apiKey = import.meta.env.VITE_API_URL_OPENWEATHER;
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric&lang=pl`
        );
        this.forecastWeatherData = response.data;
      } catch (error) {
        this.forecastError = "Nie udało się pobrać danych o pogodzie";
      } finally {
        this.forecastLoading = false;
      }
    },
  },
});
