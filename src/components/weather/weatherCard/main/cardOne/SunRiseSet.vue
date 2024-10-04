<template>
  <div class="d-flex ga-3 text-body-1 font-weight-bold">
    <p>
      <v-icon icon="mdi-weather-sunset-up" size="large"></v-icon>
      {{ convertUnixToTime(currentWeatherData.sys.sunrise) }}
    </p>
    <p>
      <v-icon icon="mdi-weather-sunset-down" size="large"></v-icon>
      {{ convertUnixToTime(currentWeatherData.sys.sunset) }}
    </p>
  </div>
</template>

<script setup>
const props = defineProps({
  currentWeatherData: { type: Object },
});

const convertUnixToTime = (unixTimestamp) => {
  const date = new Date(unixTimestamp * 1000);
  return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
};
</script>
