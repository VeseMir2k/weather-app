<template>
  <div class="d-flex ga-2">
    <v-icon icon="mdi-weather-dust" size="large"></v-icon>
    <p class="font-weight-bold">{{ weatherDate.wind.gust }}km/h</p>
  </div>
</template>

<script setup>
const props = defineProps({
  weatherDate: {
    type: Object,
  },
});
</script>
