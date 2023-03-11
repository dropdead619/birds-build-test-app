import type { Component } from 'vue';

export interface ITabItem {
  id: number
  title: string
  url: string
  icon: Component
}

export type SellingType = 'Аукцион' | 'Разовое предложение';

export interface IProductItem {
  id: number
  sellingType: SellingType
  title: string
  location: string
  seller: string
  productType: string
  description: string
  imageUrl: string
  pricePerOne: number
  count: number
  isFavorite: boolean
  isInDeal: boolean
  isPaid: boolean
}
