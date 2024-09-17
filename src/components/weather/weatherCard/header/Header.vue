<template>
  <v-row>
    <v-col> </v-col>
    <v-col class="d-flex flex-column justify-center align-center">
      <Date />
      <Clock />
    </v-col>
    <v-col class="d-flex justify-end">
      <Coord :weather-data="weatherData" />
    </v-col>
  </v-row>
</template>

<script setup>
// ~ imports
import { useWeatherStore } from "@/stores/app";
import Date from "./Date.vue";
import Clock from "./Clock.vue";
import Coord from "./Coord.vue";

// ~ stores
const weatherStore = useWeatherStore();
const weatherData = weatherStore.weatherData;
</script>
