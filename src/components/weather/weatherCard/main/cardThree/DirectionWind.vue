<template>
  <div class="d-flex ga-2">
    <v-icon icon="mdi-windsock" size="large"></v-icon>
    <p class="font-weight-bold">
      {{ windDeg }} - {{ currentWeatherData.wind.deg }}&deg;
    </p>
  </div>
</template>

<script setup>
import { onMounted } from "vue";

const windDeg = ref("");

const props = defineProps({
  currentWeatherData: {
    type: Object,
  },
});

const getWindDirection = (deg) => {
  if (deg >= 337.5 || deg < 22.5) return "Północ (N)";
  if (deg >= 22.5 && deg < 67.5) return "Północny wschód (NE)";
  if (deg >= 67.5 && deg < 112.5) return "Wschód (E)";
  if (deg >= 112.5 && deg < 157.5) return "Południowy wschód (SE)";
  if (deg >= 157.5 && deg < 202.5) return "Południe (S)";
  if (deg >= 202.5 && deg < 247.5) return "Południowy zachód (SW)";
  if (deg >= 247.5 && deg < 292.5) return "Zachód (W)";
  if (deg >= 292.5 && deg < 337.5) return "Północny zachód (NW)";
};

onMounted(() => {
  windDeg.value = getWindDirection(props.currentWeatherData.wind.deg);
});
</script>
