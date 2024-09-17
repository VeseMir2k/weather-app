<template>
  <v-col class="d-flex ga-5 align-center flex-column">
    <Temperature :weather-data="weatherData" />
  </v-col>
</template>

<script setup>
// ~ imports
import { useWeatherStore } from "@/stores/app";
import Temperature from "./Temperature.vue";

// ~ stores
const weatherStore = useWeatherStore();
const weatherData = weatherStore.weatherData;
</script>
