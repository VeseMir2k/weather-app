<template>
  <p class="d-flex flex-column">
    <span
      ><v-icon icon="mdi-weather-sunset-up" size="large"></v-icon>
      {{ convertUnixToTime(weatherData.sys.sunrise) }}</span
    >
    <span>
      <v-icon icon="mdi-weather-sunset-down" size="large"></v-icon>
      {{ convertUnixToTime(weatherData.sys.sunset) }}</span
    >
  </p>
</template>

<script setup>
const props = defineProps({
  weatherData: { type: Object },
});

const convertUnixToTime = (unixTimestamp) => {
  const date = new Date(unixTimestamp * 1000);
  return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
};
</script>
