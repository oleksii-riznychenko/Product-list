<template>
  <div>
    <h3>Product list</h3>
    <div class="product-list" v-if="products">
      <product-card v-for="product in products" :key="product.id" :product="product" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ProductCard from '@/components/ProductCard/ProductCard.vue';
import { ProductListType } from '@/store/modules/products';

@Component({
  components: { ProductCard },
})
export default class ProductList extends Vue {
  get products() {
    const data = this.$store.state.products.filteredProducts;

    if (data) {
      return data as ProductListType;
    }

    return this.$store.state.products.products as ProductListType;
  }
}
</script>

<style lang="scss">
@import './ProductList.scss';
</style>
