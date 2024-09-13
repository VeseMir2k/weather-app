<template>
  <v-card class="mx-auto" color="surface-light" width="400">
    <v-card-text>
      <v-text-field
        append-inner-icon="mdi-magnify"
        density="compact"
        label="Wpisz nazwę miasta"
        variant="solo"
        hide-details
        single-line
        :value="modelValue"
        v-model="inputValue"
        @click:append-inner="handleSearch"
        ref="searchInputRef"
      ></v-text-field>
    </v-card-text>
  </v-card>
</template>

<script setup>
// ~ inputs
import { onMounted, onUnmounted, ref } from "vue";

// ~ ref
const searchInputRef = ref(null);
const inputValue = ref("");

// ~ props
const props = defineProps({
  modelValue: {
    type: String,
  },
  getWeather: {
    type: Function,
    required: true,
  },
});

// ~ emits
const emit = defineEmits(["update:modelValue"]);
watch(inputValue, (newValue) => {
  emit("update:modelValue", newValue);
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

onMounted(() => {
  document.addEventListener("keydown", handleEnter);
});

onUnmounted(() => {
  document.removeEventListener("keydown", handleEnter);
});
</script>
