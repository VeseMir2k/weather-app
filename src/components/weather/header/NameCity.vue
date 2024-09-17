<template>
  <h1 class="text-h4 font-weight-bold">
    {{ weatherData.name }}
  </h1>
</template>

<script setup>
import { onMounted } from "vue";

const props = defineProps({
  weatherData: {
    type: Object,
  },
});
</script>
