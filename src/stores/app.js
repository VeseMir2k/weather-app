import { defineStore } from "pinia";
import axios from "axios";

export const useWeatherStore = defineStore("weather", {
  state: () => ({
    citiesData: null,
    citiesLoading: false,
    citiesError: null,
    weatherData: null,
    loading: false,
    error: null,
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

    async fetchPlace(city) {
      try {
        const apiKey = import.meta.env.VITE_API_URL_MAPA_GOOGLE;
        const response = await axios.get(
          `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${city}&types=(cities)&key=${apiKey}`
        );
        this.citiesData = response.data;
        console.log(response.data);
      } catch (error) {
        this.citiesError = "Nie udało się pobrać danych";
        console.log(error);
      } finally {
        this.loading = false;
      }
    },
  },
});
