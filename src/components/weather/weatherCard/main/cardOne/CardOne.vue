<template>
  <v-col>
    <NameCity
      :currentWeatherData="currentWeatherData"
      :autocompletePlaceData="autocompletePlaceData"
    />
    <IconWeather :currentWeatherData="currentWeatherData" />
    <SunRiseSet :currentWeatherData="currentWeatherData" />
    <div class="d-flex ga-3">
      <Humidity :currentWeatherData="currentWeatherData" />
      <FeelsLike :currentWeatherData="currentWeatherData" />
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
const currentWeatherData = weatherStore.currentWeatherData;
const autocompletePlaceData = weatherStore.autocompletePlaceData;
</script>
