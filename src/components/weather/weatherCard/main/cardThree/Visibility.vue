<template>
  <div class="d-flex align-center ga-2">
    <v-icon icon="mdi-eye" size="large"></v-icon>
    <p class="font-weight-bold">{{ currentWeatherData.visibility }}km</p>
  </div>
</template>

<script setup>
const props = defineProps({
  currentWeatherData: {
    type: Object,
  },
});
</script>
