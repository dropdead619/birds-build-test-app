import type { IProductItem, IProductParams } from '@/config/types';
import { useProductStore } from '@/stores/products.store';

type OperationType = 'warehouse' | 'favorite' | 'deal';

export default function useProduct(operationType: OperationType) {
  const state = reactive({
    products: [] as IProductItem[],
  });

  const productStore = useProductStore();
  const router = useRouter();
  const route = useRoute();

  const fetchProducts = async (params?: IProductParams) => {
    if (operationType === 'warehouse')
      state.products = await productStore.fetchWarehouses(params) as IProductItem[];
    else if (operationType === 'favorite')
      state.products = await productStore.fetchFavorites(params) as IProductItem[];
    else
      state.products = await productStore.fetchDeals(params) as IProductItem[];
  };

  const onChangeFilters = async (productParams: IProductParams) => {
    const params = {} as IProductParams;
    if (productParams.sellingType)
      params.sellingType = productParams.sellingType;

    if (productParams.q)
      params.q = productParams.q;

    fetchProducts(params);
  };

  const toggleIsFavorite = (productId: number) => {
    productStore.toggleIsFavorite(productId).then(() => {
      fetchProducts();
    });
  };

  const addToDeal = (product: IProductItem) => {
    productStore.createDeal(product).then(() => {
      router.push({
        name: 'Deals.Main',
      });
    });
  };

  const payForDeal = (productId: number) => {
    productStore.payForDeal(productId).then(() => {
      fetchProducts();
    });
  };

  onMounted(async () => {
    // initial update of products
    await onChangeFilters(route.query);
  });

  return {
    state, onChangeFilters, toggleIsFavorite, addToDeal, payForDeal,
  };
}
