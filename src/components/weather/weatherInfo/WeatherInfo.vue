<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>{{ weatherData.name }}</h1></v-col
      >
      <v-col class="d-flex align-center">
        <Coord :weatherData="weatherData" />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <SunRiseSet :weatherData="weatherData" />
      </v-col>
      <v-col></v-col>
      <v-col></v-col>
    </v-row>
  </v-container>
</template>

<script setup>
// ~ imports
import { useWeatherStore } from "@/stores/app";
import Coord from "./Coord.vue";
import SunRiseSet from "./SunRiseSet.vue";

// ~ store
const weatherStore = useWeatherStore();
const weatherData = weatherStore.weatherData;
</script>

<style lang="scss">
.weather-info {
  padding: 0 20px 0 20px;
}
</style>
