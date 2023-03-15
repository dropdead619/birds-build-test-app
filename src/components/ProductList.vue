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

const emit = defineEmits(['toggleFavorite', 'dealsAdd', 'payForDeal']);

const onAddDeal = (product: IProductItem) => {
  emit('dealsAdd', product);
};

const onFavoriteToggle = (productId: number) => {
  emit('toggleFavorite', productId);
};

const payForDeal = (productId: number) => {
  emit('payForDeal', productId);
};
</script>

<template>
  <div class="product-list">
    <ProductCard
      v-for="product in props.productList"
      :key="product.id"
      :product="product"
      @toggle-favorite="onFavoriteToggle"
      @deals-add="onAddDeal"
      @pay-for-deal="payForDeal"
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
