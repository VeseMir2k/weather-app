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
          :error="error" /></v-col
    ></v-row>
  </v-container>
</template>

<script setup>
// ~ imports
import { ref, computed } from "vue";
import { useWeatherStore } from "@/stores/app";
import { useGoogleAutocomplete } from "./use/useGoogleAutocomplete";
import Search from "./components/search/Search.vue";
import Weather from "./components/weather/Weather.vue";

// ~ stores
const weatherStore = useWeatherStore();

// ~ weather data
const city = ref("");

useGoogleAutocomplete(weatherStore, "autocomplete", {
  types: ["locality"],
});

// ~ getWeather
const getWeather = () => {
  weatherStore.weatherData = null;
  weatherStore.fetchWeatherCoord(
    weatherStore.placeData.geometry.location.lat(),
    weatherStore.placeData.geometry.location.lng()
  );
};

// ~ computed
const weatherData = computed(() => weatherStore.weatherData);
const loading = computed(() => weatherStore.loading);
const error = computed(() => weatherStore.error);
</script>
