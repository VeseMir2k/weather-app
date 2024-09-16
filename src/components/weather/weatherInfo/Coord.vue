<template>
  <p>
    <v-icon icon="mdi-map-marker" size="large"></v-icon> Lon:
    {{ weatherData.coord.lon }} Lat: {{ weatherData.coord.lat }}
  </p>
</template>

<script setup>
const props = defineProps({
  weatherData: {
    type: Object,
  },
});
</script>
