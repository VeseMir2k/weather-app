<template>
  <v-card class="mx-auto vcard">
    <v-card-text>
      <Input :get-weather="getWeather" />
    </v-card-text>
  </v-card>
</template>

<script setup>
// ~ imports
import Input from "./Input.vue";

// ~ props
const props = defineProps({
  getWeather: {
    type: Function,
    required: true,
  },
});
</script>

<style scoped lang="scss">
.vcard {
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
}
</style>
