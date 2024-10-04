<template>
  <div class="d-flex ga-2">
    <v-icon icon="mdi-weather-dust" size="large"></v-icon>
    <p class="font-weight-bold">{{ currentWeatherData.wind.gust }}km/h</p>
  </div>
</template>

<script setup>
const props = defineProps({
  currentWeatherData: {
    type: Object,
  },
});
</script>
