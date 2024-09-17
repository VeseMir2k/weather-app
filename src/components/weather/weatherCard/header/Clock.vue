<template>
  <p class="text-h4 font-weight-bold">{{ clock }}</p>
</template>

<script setup>
import { ref } from "vue";

const clock = ref("");

const getClock = () => {
  const date = new Date();

  const hour = date.getHours().toString().padStart(2, "0");
  const minute = date.getMinutes().toString().padStart(2, "0");
  const second = date.getSeconds().toString().padStart(2, "0");

  const clockDate = `${hour}:${minute}:${second}`;
  clock.value = clockDate;
};

setInterval(getClock, 1000);
</script>
