<template>
  <div class="d-flex ga-2">
    <v-icon icon="mdi-weather-windy" size="large"></v-icon>
    <p class="font-weight-bold">{{ currentWeatherData.wind.speed }}km/h</p>
  </div>
</template>

<script setup>
const props = defineProps({
  currentWeatherData: {
    type: Object,
  },
});
</script>
