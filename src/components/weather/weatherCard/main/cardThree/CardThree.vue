<template>
  <v-col>
    <DirectionWind :weather-date="weatherData" />
    <SpeedWind :weather-date="weatherData" />
    <GustWind :weather-date="weatherData" />
    <Visibility :weather-data="weatherData" />
    <Pressure :weather-data="weatherData" />
  </v-col>
</template>

<script setup>
// ~ imports
import { useWeatherStore } from "@/stores/app";
import DirectionWind from "./DirectionWind.vue";
import SpeedWind from "./SpeedWind.vue";
import GustWind from "./GustWind.vue";
import Visibility from "./Visibility.vue";
import Pressure from "./Pressure.vue";

// ~ stores
const weatherStore = useWeatherStore();
const weatherData = weatherStore.weatherData;
</script>
