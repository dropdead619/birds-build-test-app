<script setup lang="ts">
import ThePreloader from './components/ThePreloader.vue';
import { useGlobalLoading } from './composables/useLoading';
const { isLoading } = useGlobalLoading();
</script>

<template>
  <div>
    <RouterView />
    <ThePreloader v-if="isLoading" />
  </div>
</template>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
