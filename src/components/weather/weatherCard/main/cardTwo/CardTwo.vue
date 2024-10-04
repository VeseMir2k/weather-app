<template>
  <v-col class="d-flex justify-center align-center">
    <Temperature :currentWeatherData="currentWeatherData" />
  </v-col>
</template>

<script setup>
// ~ imports
import { useWeatherStore } from "@/stores/app";
import Temperature from "./Temperature.vue";

// ~ stores
const weatherStore = useWeatherStore();
const currentWeatherData = weatherStore.currentWeatherData;
</script>
