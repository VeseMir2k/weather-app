<template>
  <h1 class="text-h3 font-weight-bold">
    {{ placeData ? city : weatherData.name }}
  </h1>
</template>

<script setup>
// ~ props
const props = defineProps({
  weatherData: {
    type: Object,
  },
  placeData: {
    type: Object,
  },
  city: {
    type: String,
  },
});
</script>
