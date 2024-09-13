<template>
  <p class="error">{{ error }}</p>
</template>

<script setup>
  // ~ props
  const props = defineProps({
    error: {
      type: String,
    },
  })
</script>

<style lang="scss">
  .error {
    width: 100%;
    background-color: red;
    text-align: center;
    padding: 20px;
  }
</style>
