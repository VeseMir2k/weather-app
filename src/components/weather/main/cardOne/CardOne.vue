<template>
  <v-col>
    <IconWeather :weather-data="weatherData" />
    <SunRiseSet :weather-data="weatherData" />
    <div class="d-flex ga-3">
      <Humidity :weather-data="weatherData" />
      <FeelsLike :weather-data="weatherData" />
    </div>
    <Visibility :weather-data="weatherData" />
    <Pressure :weather-data="weatherData" />
  </v-col>
</template>

<script setup>
// ~ imports
import { useWeatherStore } from "@/stores/app";
import IconWeather from "./IconWeather.vue";
import SunRiseSet from "./SunRiseSet.vue";
import Humidity from "./Humidity.vue";
import FeelsLike from "./FeelsLike.vue";
import Visibility from "./Visibility.vue";
import Pressure from "./Pressure.vue";

// ~ stores
const weatherStore = useWeatherStore();
const weatherData = weatherStore.weatherData;
</script>
