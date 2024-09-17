<template>
  <p class="text-body-2 font-weight-bold">{{ getDate() }}</p>
</template>

<script setup>
const getDate = () => {
  const date = new Date();

  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");

  return `${day} - ${month} - ${year}`;
};
</script>
