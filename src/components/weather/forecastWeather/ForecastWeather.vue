<template>
  <ForecastButtons :checkDate="checkDate" :sixDateDays="sixDateDays" />
  <Chart />
</template>

<script setup>
// ~ imports
import { onMounted, ref } from "vue";
import { useWeatherStore } from "@/stores/app";
import ForecastButtons from "./ForecastButtons.vue";
import Chart from "./Chart.vue";

// ~ ref
const forecastWeather = ref([]);
const sixDateDays = ref([]);

// ~ stores
const weatherStore = useWeatherStore();
const forecastWeatherData = weatherStore.forecastWeatherData;

// ~ get six date days
const getSixDateDays = () => {
  const sixDateForecast = [];
  const today = new Date();

  for (let i = 0; i < 6; i++) {
    const nextDate = new Date(today);
    nextDate.setDate(today.getDate() + i);
    sixDateForecast.push(formattedDate(nextDate));
  }

  sixDateDays.value = sixDateForecast;
};

onMounted(() => {
  getSixDateDays();
});

// ~ get date
const getDate = (inputDate) => {
  const date = new Date(inputDate);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return { day, month, year };
};

// ~ get formatted date
const formattedDate = (inputDate) => {
  const date = getDate(inputDate);

  const formattedMonth = date.month < 10 ? `0${date.month}` : date.month;
  const formattedDay = date.day < 10 ? `0${date.day}` : date.day;

  return `${date.year}-${formattedMonth}-${formattedDay}`;
};

// ~ check date
const checkDate = (inputDate) => {
  const forecastWeatherToday = forecastWeatherData.list.filter(
    (item) => formattedDate(item.dt_txt) === formattedDate(inputDate)
  );

  forecastWeather.value = forecastWeatherToday;
  console.log(forecastWeatherToday);
};
</script>

<style lang="scss">
.forecast-button {
  display: flex;
  justify-content: space-between;
  button {
    padding: 5px;
  }
}
</style>
