<template>
  <div class="layout">
    <header-main />
    <main-container :class-container="classContainer">
      <slot />
    </main-container>
    <footer-main />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import HeaderMain from '@/components/layout/Header/HeaderMain.vue';
import MainContainer from '@/components/layout/Main/MainContainer.vue';
import FooterMain from '@/components/layout/Footer/FooterMain.vue';

@Component({
  components: { FooterMain, MainContainer, HeaderMain },
})
export default class ProductDetails extends Vue {
  @Prop({ type: String, required: true })
  private classContainer!: string;
}
</script>

<style lang="scss" scoped>
@import './LayoutMain.scss';
</style>
