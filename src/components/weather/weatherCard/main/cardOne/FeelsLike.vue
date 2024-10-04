<template>
  <div class="d-flex align-center ga-1">
    <v-icon icon="mdi-thermometer" size="large"></v-icon>
    <p class="font-weight-bold">
      {{ Math.floor(currentWeatherData.main.feels_like) }}&deg;
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
