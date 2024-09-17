<template>
  <v-col>
    <DirectionWind :weather-date="weatherData" />
    <SpeedWind :weather-date="weatherData" />
    <GustWind :weather-date="weatherData" />
  </v-col>
</template>

<script setup>
// ~ imports
import { useWeatherStore } from "@/stores/app";
import DirectionWind from "./DirectionWind.vue";
import SpeedWind from "./SpeedWind.vue";
import GustWind from "./GustWind.vue";

// ~ stores
const weatherStore = useWeatherStore();
const weatherData = weatherStore.weatherData;
</script>
