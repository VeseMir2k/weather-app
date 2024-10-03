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

// ~ getTime
const getTime = (dt) => {
  const date = new Date(dt * 1000);
  const hour = date.getHours();
  const minute = date.getMinutes();
  return `${hour}:${minute}`;
};

// ~ getForecastDayData
const getWeatherForecastDayData = () => {
  const hours = [];
  const temps = [];

  weatherStore.weatherForecastDayData.forEach((item) => {
    hours.push(getTime(item.dt));
    temps.push(item.main.temp);
  });

  weatherStore.hours = [...hours];
  weatherStore.temps = [...temps];
};

// ~ getWeatherForecastDay
const getWeatherForecastDay = (dt) => {
  const forecastDate = [];
  weatherStore.weatherForecastData.list.forEach((item) => {
    if (dt === timestampToDate(item.dt)) forecastDate.push(item);
  });
  weatherStore.weatherForecastDayData = forecastDate;
};

// ~ handleButton
const handleButton = (dt) => {
  getWeatherForecastDay(dt);
  getWeatherForecastDayData();
};

onMounted(() => {
  getWeatherForecastDay(dates.value[0]);
  getWeatherForecastDayData();
});
</script>
