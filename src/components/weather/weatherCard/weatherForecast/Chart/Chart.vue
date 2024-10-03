<template>
  <Line
    ref="chartRef"
    class="chart-line"
    :data="chartData"
    :options="options"
  />
</template>

<script setup>
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const weatherStore = useWeatherStore();
const chartRef = ref(null);

// Dane wykresu jako ref (dynamiczne)
const chartData = ref({
  labels: weatherStore.hours,
  datasets: [
    {
      label: "Temperatury",
      backgroundColor: "#f87979",
      borderColor: "rgba(75, 192, 192, 1)",
      data: weatherStore.temps,
    },
  ],
});

// Opcje wykresu
const options = ref({
  responsive: false,
  maintainAspectRatio: false,
});

// Aktualizuj dane wykresu, gdy zmieniają się wartości w store
watch(
  [() => weatherStore.hours, () => weatherStore.temps],
  ([newHours, newTemps]) => {
    if (chartRef.value?.chart) {
      chartRef.value.chart.data.labels = newHours;
      chartRef.value.chart.data.datasets[0].data = newTemps;
      chartRef.value.chart.update(); // Aktualizacja wykresu
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
