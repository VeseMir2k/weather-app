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
import { ref, computed, onMounted } from "vue";
import { useWeatherStore } from "@/stores/app";
import Search from "./components/search/Search.vue";
import Weather from "./components/weather/Weather.vue";
import { initAutocomplete } from "./use/useAutocomplete";

// ~ stores
const weatherStore = useWeatherStore();

onMounted(() => {
  const script = document.createElement("script");
  script.src = `https://maps.googleapis.com/maps/api/js?key=${
    import.meta.env.VITE_API_URL_MAPA_GOOGLE
  }&libraries=places`;
  script.async = true;
  script.defer = true;
  script.onload = () => {
    initAutocomplete("search-input__input", weatherStore);
  };
  document.head.appendChild(script);
});

// ~ weather data
const city = ref("");

const getWeather = () => {
  weatherStore.weatherData = null;
  weatherStore.fetchWeather(
    weatherStore.placeData.geometry.location.lat(),
    weatherStore.placeData.geometry.location.lng()
  );
};

// ~ computed
const weatherData = computed(() => weatherStore.weatherData);
const loading = computed(() => weatherStore.loading);
const error = computed(() => weatherStore.error);
</script>
