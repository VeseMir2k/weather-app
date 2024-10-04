<template>
  <div class="d-flex align-center ga-1">
    <v-icon icon="mdi-water-percent" size="large"></v-icon>
    <p class="font-weight-bold">{{ currentWeatherData.main.humidity }}%</p>
  </div>
</template>

<script setup>
const props = defineProps({
  currentWeatherData: {
    type: Object,
  },
});
</script>
