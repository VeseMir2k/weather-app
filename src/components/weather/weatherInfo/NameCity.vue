<template>
  <h1 class="text-h3 font-weight-bold">
    {{ weatherData.name }}
  </h1>
</template>

<script setup>
const props = defineProps({
  weatherData: {
    type: Object,
  },
});
</script>
