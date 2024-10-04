<template>
  <p class="text-h1 font-weight-bold">
    {{ Math.floor(currentWeatherData.main.temp) }}&deg;
  </p>
</template>

<script setup>
const props = defineProps({
  currentWeatherData: {
    type: Object,
  },
});
</script>
