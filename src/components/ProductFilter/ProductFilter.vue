<template>
  <div class="product-filter">
    <h3>Filter</h3>
    <form class="product-filter__form" novalidate @submit.prevent="onSubmit">
      <div class="product-filter__item form-input">
        <label for="title">Title</label>
        <input type="text" id="title" name="title" v-model="formData.title"/>
      </div>
      <div class="product-filter__item form-input">
        <label for="price">Price</label>
        <input type="text" id="price" name="price" v-model="formData.price"/>
      </div>
      <div class="product-filter__item form-input">
        <label for="rating">Rating</label>
        <input type="text" id="rating" name="rating" v-model="formData.rating"/>
      </div>
      <div class="product-filter__item">
        <button type="submit" class="button">Submit</button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { ProductListType } from '@/store/modules/products';

@Component
export default class ProductFilter extends Vue {
  formData = {
    title: '',
    price: '',
    rating: '',
  }

  handleFilterProduct() {
    try {
      const { title, price, rating } = this.formData;
      const products = this.$store.state.products.products as ProductListType;

      if (products) {
        const filteredProducts = products.filter((item) => {
          if (title && !item.title.toLowerCase().includes(title.toLowerCase())) return false;
          if (rating && item.rating !== +rating) return false;
          if (price && item.price !== +price) return false;

          return true;
        });

        this.$store.dispatch('products/getFilteredProducts', filteredProducts);
      }
    } catch (e) {
      console.error('Error in filter function:', e);
    }
  }

  fillFormDataFromUrlParams() {
    const params = new URLSearchParams(window.location.search);

    this.formData.title = params.get('title') || '';
    this.formData.price = params.get('price') || '';
    this.formData.rating = params.get('rating') || '';
  }

  updateUrlWithFormData() {
    const params = new URLSearchParams();

    Object.entries(this.formData).forEach(([key, value]) => {
      if (value !== '') {
        params.set(key, value);
      }
    });

    const newUrl = `${window.location.pathname}?${params.toString()}`;

    window.history.replaceState({}, '', newUrl);
  }

  onSubmit() {
    this.updateUrlWithFormData();
    this.handleFilterProduct();
  }

  mounted() {
    if (!this.$store.state.products.products) {
      this.$store.dispatch('products/getProducts').then(() => {
        this.fillFormDataFromUrlParams();
        this.handleFilterProduct();
      });
    }
  }
}
</script>

<style lang="scss">
@import "./ProductFilter.scss";
</style>
