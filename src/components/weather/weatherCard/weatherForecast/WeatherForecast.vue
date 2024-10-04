<template>
  <div>
    <h1>Forecast Weather</h1>
    <div class="d-flex justify-space-between my-3">
      <v-btn @click="handleButton(item)" v-for="item in dates">
        {{ item }}
      </v-btn>
    </div>
    <Chart v-if="weatherStore.weatherForecastDayData.length" />
  </div>
</template>

<script setup>
// ~ imports
import { useWeatherStore } from "@/stores/app";
import { computed, onMounted } from "vue";
import { timestampToDate } from "@/use/useDate";
import Chart from "./Chart/Chart.vue";

// ~ stores
const weatherStore = useWeatherStore();

// ~ computed
const dates = computed(() => weatherStore.dates);

// ~ handleButton
const handleButton = (dt) => {
  getWeatherForecastDay(dt);
  weatherStore.extractWeatherForecastDayData();
};

onMounted(() => {
  getWeatherForecastDay(dates.value[0]);
  weatherStore.extractWeatherForecastDayData();
});
</script>
