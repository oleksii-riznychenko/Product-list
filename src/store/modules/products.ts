import { Module } from 'vuex';
import { IProductData } from '@/models/productData';
import { productService } from '@/api/services/productsApiService';

export type ProductListType = IProductData[]

export interface ProductsState {
  products: ProductListType | null;
  currentProduct: IProductData | null;
  filteredProducts: ProductListType | null;
}

export const moduleProducts: Module<ProductsState, ProductsState> = {
  namespaced: true,
  actions: {
    getProducts: async (context) => {
      try {
        const response: ProductListType = await productService.getListProductApi();

        context.commit('updateListProducts', response);
        context.commit('updateCurrentProduct', null);
      } catch (e) {
        console.error('Error fetching products:', e);
      }
    },
    getFilteredProducts: async (context, data: IProductData[]) => {
      try {
        context.commit('updateFilteredProducts', data || null);
      } catch (e) {
        console.error('Error fetching products:', e);
      }
    },
    getProductById: async (context, id: number) => {
      try {
        let response: IProductData | null = context.state.products
          ?.find((product) => product.id === id) || null;

        if (!response) {
          response = await productService.getListProductByIdApi(id);
        }

        context.commit('updateCurrentProduct', response);
      } catch (e) {
        console.error('Error fetching product:', e);
      }
    },
  },
  mutations: {
    updateListProducts: (state: ProductsState, response: ProductListType): void => {
      state.products = response;
    },
    updateCurrentProduct: (state: ProductsState, response: IProductData): void => {
      state.currentProduct = response;
    },
    updateFilteredProducts: (state: ProductsState, response: ProductListType): void => {
      state.filteredProducts = response;
    },
  },
  state: {
    products: null,
    currentProduct: null,
    filteredProducts: null,
  },
  getters: {
    allProducts: (state: ProductsState): ProductListType | null => {
      if (!state.products) {
        return null;
      }

      return state.products;
    },
  },
};
