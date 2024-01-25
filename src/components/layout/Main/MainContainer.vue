<template>
  <main class="main">
    <div class="main__container" :class="classContainer || ''">
      <slot />
    </div>
  </main>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class ProductDetails extends Vue {
  @Prop({ type: String, required: true })
  private classContainer!: string;
}
</script>

<style lang="scss">
@import "./MainContainer.scss";
</style>
