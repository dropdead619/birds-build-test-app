<script setup lang="ts">
import TabList from './TabList.vue';
import type { ITabItem } from '@/config/types';
import StockIcon from '@/components/icons/StockIcon.vue';
import HeartIcon from '@/components/icons/HeartIcon.vue';
import BagIcon from '@/components/icons/BagIcon.vue';

const tabList = [
  {
    id: 0,
    title: 'Избранное',
    url: 'Favorites.Main',
    icon: HeartIcon,
  },
  {
    id: 1,
    title: 'Склад',
    url: 'Warehouses.Main',
    icon: StockIcon,
  },
  {
    id: 2,
    title: 'Сделки',
    url: 'Deals.Main',
    icon: BagIcon,
  },
] as ITabItem[];
</script>

<template>
  <div class="header">
    <TabList :tab-list="tabList" />
  </div>
</template>

<style scoped>
  .header {
    display: flex;
    justify-content: flex-end;
  }
</style>
