<template>
  <v-col>
    <NameCity :weather-data="weatherData" :place-data="placeData" />
    <IconWeather :weather-data="weatherData" />
    <SunRiseSet :weather-data="weatherData" />
    <div class="d-flex ga-3">
      <Humidity :weather-data="weatherData" />
      <FeelsLike :weather-data="weatherData" />
    </div>
  </v-col>
</template>

<script setup>
// ~ imports
import { useWeatherStore } from "@/stores/app";
import NameCity from "./NameCity.vue";
import IconWeather from "./IconWeather.vue";
import SunRiseSet from "./SunRiseSet.vue";
import Humidity from "./Humidity.vue";
import FeelsLike from "./FeelsLike.vue";

// ~ stores
const weatherStore = useWeatherStore();
const weatherData = weatherStore.weatherData;
const placeData = weatherStore.placeData;
</script>
