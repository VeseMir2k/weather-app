<template>
  <div class="d-flex align-center">
    <img
      :src="`https://openweathermap.org/img/wn/${currentWeatherData.weather[0].icon}.png`"
      alt="icon weather"
    />
    <p class="font-weight-bold text-uppercase text-body-2">
      {{ currentWeatherData.weather[0].description }}
    </p>
  </div>
</template>

<script setup>
const props = defineProps({
  currentWeatherData: {
    type: Object,
  },
});
</script>
