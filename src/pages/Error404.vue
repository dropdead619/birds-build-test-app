<script setup lang="ts">
import { useMeta } from 'vue-meta';

useMeta({
  title: '404',
});
</script>

<template>
  <div class="flex flex-col m-auto text-center w-fit pt-12 items-center">
    <h2 class="text-9xl">
      404
    </h2>
    <h2 class="text-5xl">
      Page not found
    </h2>
    <h3 class="text-3xl">
      Go <RouterLink class="text-blue-500 " :to="{ name: 'Bands' }">
        back?
      </RouterLink>
    </h3>
  </div>
</template>
