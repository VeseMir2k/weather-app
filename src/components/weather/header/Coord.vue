<template>
  <div class="d-flex align-center ga-2">
    <v-icon icon="mdi-map-marker" size="medium"></v-icon>
    <div class="d-flex ga-2 text-body-2 font-weight-bold">
      <p>Lon: {{ weatherData.coord.lon }}</p>
      <p>Lat: {{ weatherData.coord.lat }}</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  weatherData: {
    type: Object,
  },
});
</script>
