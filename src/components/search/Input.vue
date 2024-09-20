<template>
  <div class="search-input">
    <input class="search-input__input" type="text" />
    <span class="search-input__button"
      ><v-icon icon="mdi-magnify" size="x-large"></v-icon
    ></span>
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
.search-input {
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 4px;
  position: relative;
  &__input {
    width: 100%;
    padding: 8px;
    font-size: 16px;
    border-radius: inherit;
    &:focus {
      outline: 2px solid rgba(255, 255, 255, 0.6);
    }
  }
  &__button {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    align-items: center;
    height: 100%;
    padding: 5px;
    cursor: pointer;
  }
}
</style>
