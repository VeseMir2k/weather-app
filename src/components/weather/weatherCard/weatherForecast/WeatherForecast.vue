<template>
  <div>
    <h1>Forecast Weather</h1>
    <div class="d-flex justify-space-between">
      <v-btn @click="handleButton(item)" v-for="item in dates">{{
        item
      }}</v-btn>
    </div>
  </div>
</template>

<script setup>
// ~ imports
import { useWeatherStore } from "@/stores/app";
import { computed } from "vue";
import { timestampToDate } from "@/use/useDate";

// ~ stores
const weatherStore = useWeatherStore();

// ~ computed
const dates = computed(() => weatherStore.dates);

const handleButton = (dt) => {
  const forecastDate = [];
  weatherStore.weatherForecastData.list.forEach((item) => {
    if (dt === timestampToDate(item.dt)) forecastDate.push(item);
  });
  console.log(forecastDate);
};
</script>
