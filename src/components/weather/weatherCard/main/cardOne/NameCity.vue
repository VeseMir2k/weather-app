<template>
  <h1 class="text-h3 font-weight-bold">
    {{ currentWeatherData.name }}
  </h1>
</template>

<script setup>
// ~ props
const props = defineProps({
  currentWeatherData: {
    type: Object,
  },
  autocompletePlaceData: {
    type: Object,
  },
});
</script>
