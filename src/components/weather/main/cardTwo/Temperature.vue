<template>
  <p class="text-h1 font-weight-bold">
    {{ Math.floor(weatherData.main.temp) }}&deg;
  </p>
</template>

<script setup>
const props = defineProps({
  weatherData: {
    type: Object,
  },
});
</script>
