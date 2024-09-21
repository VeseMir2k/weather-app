<template>
  <v-card class="mx-auto vcard">
    <v-card-text>
      <Input />
    </v-card-text>
  </v-card>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import Input from "./Input.vue";

// ~ refs
const searchInputRef = ref(null);

// ~ props
const props = defineProps({
  getWeather: {
    type: Function,
    required: true,
  },
});

// ~ handle search
const handleSearch = () => {
  props.getWeather();
  searchInputRef.value.blur();
};

// ~ handle eventListener
const handleEnter = (event) => {
  if (event.key === "Enter") {
    handleSearch();
  }
};

// ~ initAutocomplete
onMounted(() => {
  document.addEventListener("keydown", handleEnter);
});

onUnmounted(() => {
  document.removeEventListener("keydown", handleEnter);
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
