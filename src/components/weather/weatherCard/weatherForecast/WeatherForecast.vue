<template>
  <div>
    <h1>Forecast Weather</h1>
    <div class="d-flex justify-space-around">
      <v-btn v-for="item in weatherStore.dates">{{ item }}</v-btn>
    </div>
  </div>
</template>

<script setup>
// ~ imports
import { useWeatherStore } from "@/stores/app";

// ~ stores
const weatherStore = useWeatherStore();
</script>
