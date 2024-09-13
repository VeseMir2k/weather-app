<template>
  <div class="forecast-button">
    <v-btn
      color="primary"
      variant="tonal"
      @click="checkDate(day)"
      v-for="day in sixDateDays"
    >
      {{ day }}
    </v-btn>
  </div>
</template>

<script setup>
  const props = defineProps({
    checkDate: {
      type: Function,
    },
    sixDateDays: {
      type: Array,
    },
  })
</script>
