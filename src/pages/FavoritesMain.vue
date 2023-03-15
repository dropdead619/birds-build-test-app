<script setup lang="ts">
import ProductFilters from '@/components/ProductFilters.vue';
import ProductList from '@/components/ProductList.vue';
import useProduct from '@/composables/useProduct';

const { state, onChangeFilters, toggleIsFavorite, addToDeal } = useProduct('favorite');
</script>

<template>
  <div class="favorites">
    <ProductFilters @filters-change="onChangeFilters" />
    <ProductList
      :product-list="state.products"
      @toggle-favorite="toggleIsFavorite"
      @deals-add="addToDeal"
    />
  </div>
</template>

<style scoped>
.favorites {
  padding: 77px 0px;
  display: flex;
  flex-direction: column;
  gap: 44px;
}
</style>
