<template>
  <Line
    ref="chartRef"
    class="chart-line"
    :data="chartData"
    :options="options"
  />
</template>

<script setup>
// ~ imports
import { ref, watch } from "vue";
import { useWeatherStore } from "@/stores/app";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "vue-chartjs";

// ~ chartjs register
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// ~ stores
const weatherStore = useWeatherStore();

// ~ refs
const chartRef = ref(null);

// ~ charData
const chartData = ref({
  labels: weatherStore.forecastWeatherHours,
  datasets: [
    {
      label: "Temperatury",
      backgroundColor: "#f87979",
      borderColor: "rgba(75, 192, 192, 1)",
      data: weatherStore.forecastWeatherTemperatures,
    },
  ],
});

// ~ options chart
const options = ref({
  responsive: false,
  maintainAspectRatio: false,
});

// ~ chart data update
watch(
  [
    () => weatherStore.forecastWeatherHours,
    () => weatherStore.forecastWeatherTemperatures,
  ],
  ([newForecastWeatherHours, newForecastWeatherTemperatures]) => {
    if (chartRef.value?.chart) {
      chartRef.value.chart.data.labels = newForecastWeatherHours;
      chartRef.value.chart.data.datasets[0].data =
        newForecastWeatherTemperatures;
      chartRef.value.chart.update();
    }
  }
);
</script>

<style scoped>
.chart-line {
  max-width: 100%;
  height: 400px;
  background-color: white;
}
</style>
