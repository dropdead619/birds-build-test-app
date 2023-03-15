<script setup lang="ts">
import BaseBackdrop from './base/BaseBackdrop.vue';
</script>

<template>
  <BaseBackdrop>
    <img
      src="../assets/preloader.gif"
      class="preloader"
    >
  </BaseBackdrop>
</template>

<style scoped>
.preloader {
  margin: 0 auto;
  width: 36px;
}
</style>
