<script setup lang="ts">
import { useMeta } from 'vue-meta';
import ProductList from '@/components/ProductList.vue';
import type { IProductItem } from '@/config/types';

const products = [
  {
    id: 0,
    sellingType: 'Аукцион',
    title: 'Пиломатериалы брус доска',
    isPaid: false,
    imageUrl: 'https://provalue.ru/wp-content/uploads/2019/09/pilomaterialy-iz-russia-sosna.jpg',
    isFavorite: false,
    isInDeal: false,
    location: 'Санкт-Петербург, Красное Село',
    seller: 'Торговый Дом ГОСТ',
    productType: 'Стройматериалы',
    description: `Пиломатериалы брус доска. Распродажа пиломатериалов в связи закрытием ЛЕСО-БАЗЫ!
Успейте приобрести пиломатериал со скидками до закрытия 01.06.2022 !
Мы стараемся быть не такими как все и даем вам: Доставка в согласованный день, если переносим - доставка бесплатно за наш счет.
Весь материал соответствует гостам. Вы можете проверить пиломатериалы на складе или на адресе. Если материал не соответствует заявленному качеству - бесплатно меняем его.`,
    count: 3,
    pricePerOne: 23000,
  },
  {
    id: 1,
    sellingType: 'Аукцион',
    title: 'Пиломатериалы брус доска',
    isPaid: false,
    imageUrl: 'https://provalue.ru/wp-content/uploads/2019/09/pilomaterialy-iz-russia-sosna.jpg',
    isFavorite: false,
    isInDeal: false,
    location: 'Санкт-Петербург, Красное Село',
    seller: 'Торговый Дом ГОСТ',
    productType: 'Стройматериалы',
    description: `Пиломатериалы брус доска. Распродажа пиломатериалов в связи закрытием ЛЕСО-БАЗЫ!
Успейте приобрести пиломатериал со скидками до закрытия 01.06.2022 !
Мы стараемся быть не такими как все и даем вам: Доставка в согласованный день, если переносим - доставка бесплатно за наш счет.
Весь материал соответствует гостам. Вы можете проверить пиломатериалы на складе или на адресе. Если материал не соответствует заявленному качеству - бесплатно меняем его.`,
    count: 2,
    pricePerOne: 53000,
  },
] as IProductItem[];

useMeta({
  title: 'Warehouses page',
});
</script>

<template>
  <div class="warehouse">
    <ProductList :product-list="products" />
  </div>
</template>

<style scoped>
.warehouse {
  padding: 77px 0px;
}
</style>
