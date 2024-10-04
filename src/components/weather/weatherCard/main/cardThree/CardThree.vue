<template>
  <v-col>
    <DirectionWind :currentWeatherData="currentWeatherData" />
    <SpeedWind :currentWeatherData="currentWeatherData" />
    <GustWind :currentWeatherData="currentWeatherData" />
    <Visibility :currentWeatherData="currentWeatherData" />
    <Pressure :currentWeatherData="currentWeatherData" />
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
const currentWeatherData = weatherStore.currentWeatherData;
</script>
