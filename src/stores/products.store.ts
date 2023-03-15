import { defineStore } from 'pinia';
import { GET, POST, PUT } from '@/api/requests';
import type { IProductItem, IProductParams } from '@/config/types';

export const useProductStore = defineStore('products', {
  state: () => (
    { }
  ),
  actions: {
    async fetchWarehouses(params?: IProductParams) {
      const query = new URLSearchParams(params as any);

      return await GET(`products?${query}`).then((res) => {
        return res.data;
      });
    },
    async fetchDeals(params?: IProductParams) {
      const query = new URLSearchParams(params as any);

      return await GET(`deals?${query}`).then((res) => {
        return res.data;
      });
    },
    async fetchFavorites(params?: IProductParams) {
      const query = new URLSearchParams(params as any);

      return await GET(`products?isFavorite=true&${query}`).then((res) => {
        return res.data;
      });
    },
    async createDeal(data: IProductItem) {
      return await POST('deals/add', data, {
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((res) => {
        return res.data;
      });
    },
    async toggleIsFavorite(productId: number) {
      return await PUT(`products/update/${productId}`, {}, {});
    },
    async payForDeal(productId: number) {
      return await PUT(`deals/pay/${productId}`, {}, {});
    },
  },
  persist: true,
},
);
