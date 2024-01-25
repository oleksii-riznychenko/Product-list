<template>
  <div class="product-details">
    <div class="product-details__image">
      <img :src="product.image" :alt="product.title" />
    </div>
    <div class="product-details__info">
      <h1 class="product-details__title">{{ product.title }}</h1>
      <p class="product-details__description">{{ product.description }}</p>
      <p class="product-details__price"><strong>Price:</strong> {{ product.price }}</p>
      <p class="product-details__price"><strong>Category:</strong> {{ product.category }}</p>
      <p class="product-details__price"><strong>Rating:</strong> {{ product.rating }}</p>
      <p class="product-details__price"><strong>Weight:</strong> {{ product.weight }}</p>
      <p class="product-details__price"><strong>Id:</strong> {{ product.id }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { IProductData } from '@/models/productData';

@Component
export default class ProductDetails extends Vue {
  @Prop({ type: Object as () => IProductData, required: true })
  private product!: IProductData;
}
</script>

<style lang="scss">
@import './ProductDetails.scss';
</style>
