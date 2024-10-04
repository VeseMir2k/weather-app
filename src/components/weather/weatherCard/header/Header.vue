<template>
  <v-row>
    <v-col class="d-flex align-center">
      <Day />
    </v-col>
    <v-col class="d-flex flex-column justify-center align-center">
      <Date />
      <Clock />
    </v-col>
    <v-col class="d-flex justify-end">
      <Coord :currentWeatherData="currentWeatherData" />
    </v-col>
  </v-row>
</template>

<script setup>
// ~ imports
import { useWeatherStore } from "@/stores/app";
import Day from "./Day.vue";
import Date from "./Date.vue";
import Clock from "./Clock.vue";
import Coord from "./Coord.vue";

// ~ stores
const weatherStore = useWeatherStore();
const currentWeatherData = weatherStore.currentWeatherData;
</script>
