<template>
  <v-container width="900px">
    <v-row justify="center">
      <v-col cols="10">
        <Search :getWeather="getWeather" v-model="city" />
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="10">
        <Weather
          :weatherData="weatherData"
          :loading="loading"
          :error="error"
          :forecastWeatherData="forecastWeatherData"
          :forecastLoading="forecastLoading"
          :forecastError="forecastError" /></v-col
    ></v-row>
  </v-container>
</template>

<script setup>
// ~ imports
import { ref, computed } from "vue";
import { useWeatherStore } from "@/stores/app";
import Search from "./components/search/Search.vue";
import Weather from "./components/weather/Weather.vue";

// ~ stores
const weatherStore = useWeatherStore();

// ~ weather data
const city = ref("wieluń");

const getWeather = () => {
  if (city.value) {
    weatherStore.weatherData = null;
    weatherStore.forecastWeatherData = null;
    weatherStore.fetchWeather(city.value);
    weatherStore.fetchForecastWeather(city.value);
  }
};

// ~ computed
const weatherData = computed(() => weatherStore.weatherData);
const loading = computed(() => weatherStore.loading);
const error = computed(() => weatherStore.error);

const forecastWeatherData = computed(() => weatherStore.forecastWeatherData);
const forecastLoading = computed(() => weatherStore.forecastLoading);
const forecastError = computed(() => weatherStore.forecastError);
</script>
