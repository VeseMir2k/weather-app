<template>
  <div class="weather-info">
    <CityTemp :weatherData="weatherData" />
  </div>
</template>

<script setup>
// ~ imports
import CityTemp from "./CityTemp.vue";
import { useWeatherStore } from "@/stores/app";

// ~ store
const weatherStore = useWeatherStore();
const weatherData = weatherStore.weatherData;
</script>

<style lang="scss">
.weather-info {
  padding: 0 20px 0 20px;
}
</style>
