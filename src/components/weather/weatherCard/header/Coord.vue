<template>
  <div class="d-flex align-center ga-2">
    <v-icon icon="mdi-map-marker" size="x-large"></v-icon>
    <div class="d-flex flex-column text-body-2 font-weight-bold">
      <p>Lon: {{ currentWeatherData.coord.lon }}</p>
      <p>Lat: {{ currentWeatherData.coord.lat }}</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  currentWeatherData: {
    type: Object,
  },
});
</script>
