<script setup lang="ts">
import type { PropType } from 'vue';
import ProductCard from './ProductCard.vue';
import type { IProductItem } from '@/config/types';

const props = defineProps({
  productList: {
    type: Object as PropType<IProductItem[]>,
    required: true,
  },
});
</script>

<template>
  <div class="product-list">
    <ProductCard
      v-for="product in props.productList"
      :key="product.id"
      :product="product"
    />
  </div>
</template>

<style scoped>
.product-list {
  display: flex;
  flex-direction: column;
  gap: 40px;
}
</style>
