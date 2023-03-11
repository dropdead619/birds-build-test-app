<script setup lang="ts">
import { useMeta } from 'vue-meta';
import { DEFAULT_TITLE } from './config/constants';

useMeta({
  title: DEFAULT_TITLE,
  description: {
    content: 'Test App For BirdsBuild Company',
  },
});
</script>

<template>
  <div>
    <RouterView />
  </div>
</template>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
