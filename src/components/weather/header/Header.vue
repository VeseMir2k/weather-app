<template>
  <v-row>
    <v-col>
      <NameCity :weather-data="weatherData" />
    </v-col>
    <v-col>
      <Clock />
    </v-col>
    <v-col>
      <Coord :weather-data="weatherData" />
    </v-col>
  </v-row>
</template>

<script setup>
// ~ imports
import { useWeatherStore } from "@/stores/app";
import NameCity from "./NameCity.vue";
import Clock from "./Clock.vue";
import Coord from "./Coord.vue";

// ~ stores
const weatherStore = useWeatherStore();
const weatherData = weatherStore.weatherData;
</script>
