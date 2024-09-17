<template>
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
      <div class="d-flex ga-3">
        <Humidity :weatherData="weatherData" />
        <FeelsLike :weatherData="weatherData" />
      </div>
      <Visibility :weatherData="weatherData" />
      <Pressure :weatherData="weatherData" />
    </v-col>
    <v-col class="d-flex justify-center">
      <Temperature :weatherData="weatherData" />
    </v-col>
    <v-col></v-col>
  </v-row>
</template>

<script setup>
// ~ imports
import { useWeatherStore } from "@/stores/app";
import NameCity from "./NameCity.vue";
import Coord from "./Coord.vue";
import IconWeather from "./IconWeather.vue";
import SunRiseSet from "./SunRiseSet.vue";
import Humidity from "./Humidity.vue";
import FeelsLike from "./FeelsLike.vue";
import Visibility from "./Visibility.vue";
import Pressure from "./Pressure.vue";
import Temperature from "./Temperature.vue";

// ~ store
const weatherStore = useWeatherStore();
const weatherData = weatherStore.weatherData;
</script>
