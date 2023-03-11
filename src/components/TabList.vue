<script setup lang="ts">
import type { PropType } from 'vue';
import TabItem from './TabItem.vue';
import type { ITabItem } from '@/config/types';

const props = defineProps({
  tabList: {
    type: Object as PropType<ITabItem[]>,
    required: true,
  },
});
</script>

<template>
  <div class="tab-list">
    <TabItem
      v-for="tabItem in props.tabList"
      :key="tabItem.id"
      :tab-item="tabItem"
    />
  </div>
</template>

<style scoped>
  .tab-list {
    display: flex;
    gap: 7px;
  }
</style>
