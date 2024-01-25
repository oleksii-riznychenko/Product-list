<template>
  <layout-main class-container="product-page-container">
    <router-link class="breadcrumbs" to="/">Back to product list</router-link>
    <product-details v-if="product" :product="product" />
  </layout-main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import LayoutMain from '@/components/layout/LayoutMain/LayoutMain.vue';
import ProductDetails from '@/components/ProductDetails/ProductDetails.vue';
import { IProductData } from '@/models/productData';

@Component({
  components: {
    ProductDetails,
    LayoutMain,
  },
})
export default class ProductView extends Vue {
  get product() {
    return this.$store.state.products.currentProduct as IProductData;
  }

  mounted() {
    const { id } = this.$route.params;

    this.$store.dispatch('products/getProductById', +id);
  }
}
</script>

<style lang="scss">
@import 'ProductView.scss';
</style>
