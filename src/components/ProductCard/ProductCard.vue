<template>
  <router-link class="product-card" :to="`/product/${product.id}`">
    <div class="product-card__image">
      <img :src="product.image" :alt="product.title" />
    </div>
    <h4 class="product-card__title">{{product.title}}</h4>
    <div class="product-card__details">
      <p class="product-card__price">Price: {{product.price}}</p>
      <p class="product-card__rating">Rating: {{product.rating}}</p>
      <p class="product-card__weight">Weight: {{product.weight}}</p>
    </div>
  </router-link>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { IProductData } from '@/models/productData';

@Component
export default class ProductCard extends Vue {
@Prop({ type: Object as () => IProductData, required: true })
private product!: IProductData;
}
</script>

<style lang="scss">
@import './ProductCard.scss';
</style>
