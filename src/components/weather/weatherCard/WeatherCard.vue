<template>
  <v-card class="vcard text-white">
    <v-container>
      <Header />
      <Map />
      <Main />
    </v-container>
  </v-card>
</template>

<style scoped lang="scss">
.vcard {
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
}
</style>
