<template>
  <layout-main class-container="home-page-container"
  >
    <product-filter />
    <product-list />
  </layout-main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import LayoutMain from '@/components/layout/LayoutMain/LayoutMain.vue';
import ProductList from '@/components/ProductList/ProductList.vue';
import ProductFilter from '@/components/ProductFilter/ProductFilter.vue';

@Component({
  components: {
    ProductFilter,
    ProductList,
    LayoutMain,
  },
})
export default class HomeView extends Vue {}
</script>

<style lang="scss">
@import './HomeView.scss';
</style>
