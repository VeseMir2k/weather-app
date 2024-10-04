import { defineStore } from "pinia";
import {
  fetchCurrentWeatherData,
  fetchForecastWeatherData,
} from "@/use/useWeather";
import { getTime } from "@/use/useDate";

export const useWeatherStore = defineStore("weather", {
  state: () => ({
    // ~ searchInputValue
    searchInputValue: "",
    // ~ autocompletePlaceData
    autocompletePlaceData: null,
    cityName: "",
    // ~ current weather
    currentWeatherData: null,
    isLoadingCurrentWeather: false,
    currentWeatherError: null,
    // ~ forecast weather
    forecastWeatherData: null,
    isLoadingForecastWeather: false,
    forecastWeatherError: null,
    // ~ daily forecast weather
    dailyForecastWeatherData: [],
    forecastWeatherTemperatures: [],
    forecastWeatherHours: [],
    // ~ forecast weather dates
    forecastWeatherDates: null,
  }),

  actions: {
    // ~ fetchCurrentWeather
    async fetchCurrentWeather(coord, city) {
      this.isLoadingCurrentWeather = true;
      this.currentWeatherError = null;
      try {
        this.currentWeatherData = await fetchCurrentWeatherData(coord, city);
      } catch (error) {
        this.currentWeatherError = error.message;
      } finally {
        this.isLoadingCurrentWeather = false;
      }
    },
    // ~ fetchForecastWeather
    async fetchForecastWeather(coord, city) {
      this.isLoadingForecastWeather = true;
      this.forecastWeatherError = null;
      try {
        this.forecastWeatherData = await fetchForecastWeatherData(coord, city);
      } catch (error) {
        this.forecastWeatherError = error.message;
      } finally {
        this.isLoadingForecastWeather = false;
      }
    },
    // ~ extractDailyWeatherForecast
    extractDailyForecastWeather() {
      const hours = [];
      const temps = [];

      this.dailyForecastWeatherData.forEach((item) => {
        hours.push(getTime(item.dt));
        temps.push(item.main.temp);
      });

      this.forecastWeatherHours = [...hours];
      this.forecastWeatherTemperatures = [...temps];
    },
    // ~ getDailyWeatherForecast
    getDailyForecastWeather(dt) {
      const forecastWeatherDates = [];
      this.forecastWeatherData.list.forEach((item) => {
        if (dt === timestampToDate(item.dt)) forecastWeatherDates.push(item);
      });
      this.forecastWeatherDates = forecastWeatherDates;
    },
  },
});
