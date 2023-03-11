import type { RouteRecordRaw } from 'vue-router';

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: {
      name: 'Warehouses.Main',
    },
    component: () => import('../layouts/DefaultLayout.vue'),
    children: [
      {
        path: '',
        name: 'Warehouses.Main',
        component: () => import('../pages/WarehousesMain.vue'),
      },
      {
        path: '/deals',
        name: 'Deals.Main',
        component: () => import('../pages/DealsMain.vue'),
      },
      {
        path: '/favorites',
        name: 'Favorites.Main',
        component: () => import('../pages/FavoritesMain.vue'),
      },

    ],
  },

  {
    path: '/:pathMatch(.*)*',
    name: 'Error404',
    meta: {
      title: 'Error 404 | Page not found',
    },
    component: () => import('../pages/Error404.vue'),
  },
];
