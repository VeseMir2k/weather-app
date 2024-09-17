<template>
  <h2 class="text-h4 font-weight-bold">{{ getDay() }}</h2>
</template>

<script setup>
const getDay = () => {
  const date = new Date();
  const day = date.getDay();

  const daysOfWeek = [
    "Niedziela",
    "Poniedziałek",
    "Wtorek",
    "Środa",
    "Czwartek",
    "Piątek",
    "Sobota",
  ];

  return daysOfWeek[day];
};
</script>
