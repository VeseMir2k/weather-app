<template>
  <v-container class="bg-green-lighten-2">
    <v-row>
      <v-col>
        <NameCity :weatherData="weatherData" />
      </v-col>
      <v-col class="d-flex justify-end align-center">
        <Coord :weatherData="weatherData" />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <IconWeather :weatherData="weatherData" />
        <SunRiseSet :weatherData="weatherData" />
        <div class="d-flex align-center ga-1">
          <v-icon icon="mdi-water-percent" size="large"></v-icon>
          <p class="font-weight-bold">{{ weatherData.main.humidity }}%</p>
        </div>
        <div class="d-flex align-center ga-1">
          <v-icon icon="mdi-thermometer" size="large"></v-icon>
          <p class="font-weight-bold">
            {{ Math.floor(weatherData.main.feels_like) }}&deg;
          </p>
        </div>
      </v-col>
      <v-col class="d-flex justify-center">
        <p class="text-h1 font-weight-bold">
          {{ Math.floor(weatherData.main.temp) }}&deg;
        </p>
      </v-col>
      <v-col></v-col>
    </v-row>
  </v-container>
</template>

<script setup>
// ~ imports
import { useWeatherStore } from "@/stores/app";
import NameCity from "./NameCity.vue";
import Coord from "./Coord.vue";
import IconWeather from "./IconWeather.vue";
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
