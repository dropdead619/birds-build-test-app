<script setup lang="ts">
import type { PropType } from 'vue';
import MapPointIcon from './icons/MapPointIcon.vue';
import BaseButton from './base/BaseButton.vue';
import HeartIcon from './icons/HeartIcon.vue';
import type { IProductItem } from '@/config/types';
import { addThousandsSeparator } from '@/config/utilities';

const props = defineProps({
  product: {
    type: Object as PropType<IProductItem>,
    required: true,
  },
});

const fullProductPrice = computed(() => {
  return addThousandsSeparator(props.product.count * props.product.pricePerOne);
});

const addToDeals = (productId: number) => {
  // eslint-disable-next-line no-console
  console.log('Added to deals', productId);
};

const addToFavorites = (productId: number) => {
  // eslint-disable-next-line no-console
  console.log('Added to favorites', productId);
};
</script>

<template>
  <div class="product-card">
    <div class="product-card__info">
      <div class="product-card__image">
        <img :src="product.imageUrl" :alt="product.title">
      </div>
      <div class="product-info">
        <div class="product-info__head">
          <div>
            {{ product.sellingType }}
          </div>
          <h2>
            {{ product.title }}
          </h2>
        </div>
        <div class="product-info__content">
          <div class="content__location">
            <MapPointIcon />
            <div>{{ product.location }}</div>
          </div>
          <div class="content__seller">
            <span>Продавец</span> {{ product.seller }}
          </div>
          <div class="content__product_type">
            <span>Вид товара</span>
            <div>{{ product.productType }}</div>
          </div>
          <div class="content__description">
            {{ product.description }}
          </div>
        </div>
      </div>
    </div>
    <div class="product-card__payment">
      <div class="payment_head">
        <div class="payment_head__price">
          {{ fullProductPrice }} ₽
        </div>
        <div class="payment_head__description">
          <span>Количество</span>
          <div>{{ product.count }} шт.</div>
        </div>
        <div class="payment_head__description">
          <span>Стоимость за штуку</span>
          <div>{{ addThousandsSeparator(product.pricePerOne) }} ₽</div>
        </div>
      </div>
      <div class="payment__btns">
        <BaseButton @click="addToDeals(product.id)">
          Добавить в сделки
        </BaseButton>
        <BaseButton size="icon" @click="addToFavorites(product.id)">
          <HeartIcon />
        </BaseButton>
      </div>
    </div>
  </div>
</template>

<style scoped>
.product-card {
  border: 1px solid var(--platinum);
  border-radius: 20px;
  display: flex;
}

.product-card__info {
  max-width: 853px;
  width: 100%;
  padding: 20px;
  padding-bottom: 30px;
  display: flex;
  gap: 20px;
}

.product-card__image > img {
  width: 256px;
  height: 256px;
  border-radius: 10px;
}

.product-info__head > h2 {
  font-style: normal;
  font-weight: 500;
  font-size: var(--fz-15);
  line-height: 18.75px;
  margin: 0px 0px 35px 0px;
}

.product-info__head > div {
 color: var(--manatee);
 margin-bottom: 15.5px;
}

.product-info__content {
 display: flex;
 flex-direction: column;
 gap: 12px;
}

.content__location {
  width: fit-content;
  padding: 5px 8px;
  background-color: var(--back);
  display: flex;
  align-items: center;
  gap: 4px;
  border-radius: 5px;
  color: var(--light-blue);
  cursor: pointer;
}

.content__seller > span {
  color: var(--manatee);
}

.content__product_type {
  width: fit-content;
  padding: 8px;
  background-color: var(--back);
  border-radius: 10px;
}

.content__product_type > span {
  color: var(--manatee);
  margin-bottom: 6px;
}

.content__description {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 150%;
}

.product-card__payment {
  max-width: 314px;
  width: 100%;
  padding: 20px;
  border-left: 1px solid var(--platinum);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.payment_head__price {
  font-size: var(--fz-20);
  margin-bottom: 14px;
  font-weight: 500;
}

.payment_head__description {
  margin-bottom: 11px;
  display: flex;
  justify-content: space-between;
  gap: 4px;
}

.payment_head__description > span {
  color: var(--manatee);
}

.payment__btns {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
}
</style>
