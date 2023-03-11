<script setup lang="ts">
import type { PropType } from 'vue';
import type { ITabItem } from '@/config/types';

const props = defineProps({
  tabItem: {
    type: Object as PropType<ITabItem>,
    required: true,
  },
});
</script>

<template>
  <RouterLink
    :to="{
      name: props.tabItem.url,
    }"
    class="tab-item"
  >
    <div class="tab-item__icon">
      <Component :is="props.tabItem.icon" />
    </div>
    <div>{{ props.tabItem.title }}</div>
  </RouterLink>
</template>

<style scoped>
.tab-item {
  width: 86px;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  font-weight: 500;
}

.tab-item__icon {
  width: fit-content;
}

.router-link-exact-active {
  background-color: var(--back);
}
</style>
