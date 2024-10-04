<template>
  <div>
    <h1>Forecast Weather</h1>
    <div class="d-flex justify-space-between my-3">
      <v-btn @click="handleButton(item)" v-for="item in forecastWeatherDates">
        {{ item }}
      </v-btn>
    </div>
    <Chart v-if="weatherStore.dailyForecastWeatherData.length" />
  </div>
</template>

<script setup>
// ~ imports
import { useWeatherStore } from "@/stores/app";
import { computed, onMounted } from "vue";
import Chart from "./Chart/Chart.vue";

// ~ stores
const weatherStore = useWeatherStore();

// ~ computed
const forecastWeatherDates = computed(() => weatherStore.forecastWeatherDates);

// ~ handleButton
const handleButton = (dt) => {
  weatherStore.getDailyForecastWeather(dt);
  weatherStore.extractDailyForecastWeather();
};

onMounted(() => {
  weatherStore.getDailyForecastWeather(forecastWeatherDates.value[0]);
  weatherStore.extractDailyForecastWeather();
});
</script>
