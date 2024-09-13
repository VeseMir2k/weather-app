<template>
  <div class="city-temp">
    <h1 class="city-temp__city">{{ weatherData.name }}</h1>
    <h2 class="city-temp__temp">
      {{ Math.floor(weatherData.main.temp) }}&#8451;
    </h2>
    <img
      :src="`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`"
      alt=""
    />
  </div>
</template>

<script setup>
  // ~ props
  const props = defineProps({
    weatherData: {
      type: Object,
    },
  })
</script>

<style lang="scss">
  .city-temp {
    display: flex;
    background-color: rgba(0, 0, 0, 0.5);
    margin-bottom: 20px;
    color: rgb(233, 233, 233);
    &__city {
      padding: 10px;
    }
    &__temp {
      font-size: 60px;
      font-weight: 700;
    }
  }
</style>
