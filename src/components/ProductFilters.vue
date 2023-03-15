<script setup lang="ts">
import { useDebounceFn } from '@vueuse/core';
import type { LocationQueryRaw } from 'vue-router';
import BaseInput from './base/BaseInput.vue';
import type { SellingType } from '@/config/types';

const emit = defineEmits(['filtersChange']);

const router = useRouter();
const route = useRoute();

const state = reactive({
  query: {
    q: route.query.q as string || '',
    sellingType: route.query.sellingType as SellingType || '',
  },
  sellingTypes: [
    {
      id: 0,
      name: 'Все типы',
      query: '',
    },
    {
      id: 1,
      name: 'Прямые продажи',
      query: 'Прямые продажи',
    },
    {
      id: 2,
      name: 'Аукцион',
      query: 'Аукцион',
    },
  ],
});

const currentRouteName = route.name ? route.name : '';

const onChangeFilters = (filterQuery: SellingType | string) => {
  state.query.sellingType = filterQuery as SellingType;
  const query = {} as LocationQueryRaw;

  if (state.query.q)
    query.q = state.query.q;

  if (state.query.sellingType)
    query.sellingType = state.query.sellingType;

  router.push({
    name: currentRouteName,
    query,
  });

  emit('filtersChange', state.query);
};

const onDebouncedInput = useDebounceFn(() => {
  onChangeFilters(state.query.sellingType);
}, 1000);
</script>

<template>
  <div class="product-filters">
    <div class="filter-tabs">
      <div
        v-for="sellingType in state.sellingTypes"
        :key="sellingType.id"
        class="filter-tabs__tab"
        :class="{
          'filter-tabs__tab--active': (route.query.sellingType === sellingType.query)
            || (route.query.sellingType === undefined && sellingType.query === ''),
        }"
        @click="onChangeFilters(sellingType.query)"
      >
        {{ sellingType.name }}
      </div>
    </div>
    <BaseInput
      v-model="state.query.q"
      :with-icon="true"
      class="filter-search"
      @input="onDebouncedInput"
    />
  </div>
</template>

<style scoped>
.product-filters {
  display: flex;
  justify-content: space-between;
  gap: 12px;
}

/* --sm breakpoint */
@media (max-width: 576px) {
  .product-filters {
    flex-direction: column;
    align-items: center;
  }

  .filter-search {
    width: 100%;
  }
}

.filter-tabs {
  display: flex;
  gap: 12px;
  padding: 12px;
  border: 1px solid var(--platinum);
  background: var(--back);
  border-radius: 10px;
  align-items: center;
  font-size: var(--fz-15);
}

.filter-tabs__tab {
  color: var(--manatee);
  cursor: pointer;
}

.filter-tabs__tab--active {
  color: var(--primary);
}
</style>
