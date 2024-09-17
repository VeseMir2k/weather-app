<template>
  <v-card class="vcard text-white">
    <v-container>
      <v-row>
        <v-col>
          <p class="text-center">{{ error }}</p>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script setup>
const props = defineProps({
  error: {
    type: String,
  },
});
</script>

<style scoped lang="scss">
.vcard {
  background: rgba(255, 0, 0, 0.2);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
}
</style>
