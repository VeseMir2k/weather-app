<template>
  <div class="d-flex align-center ga-2">
    <v-icon icon="mdi-gauge" size="large"></v-icon>
    <p class="font-weight-bold">{{ weatherData.main.pressure }}hPa</p>
  </div>
</template>

<script setup>
const props = defineProps({
  weatherData: {
    type: Object,
  },
});
</script>
