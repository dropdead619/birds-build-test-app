<script setup lang="ts">
import ProductFilters from '@/components/ProductFilters.vue';
import ProductList from '@/components/ProductList.vue';
import useProduct from '@/composables/useProduct';

const { state, onChangeFilters, toggleIsFavorite, payForDeal } = useProduct('deal');
</script>

<template>
  <div class="deals">
    <ProductFilters @filters-change="onChangeFilters" />
    <ProductList
      :product-list="state.products"
      @toggle-favorite="toggleIsFavorite"
      @pay-for-deal="payForDeal"
    />
  </div>
</template>

<style scoped>
.deals {
  padding: 77px 0px;
  display: flex;
  flex-direction: column;
  gap: 44px;
}
</style>
