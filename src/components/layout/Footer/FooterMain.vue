<template>
  <footer class="footer">
    <p>Created by <strong>Oleksii Riznychenko</strong></p>
    <span>{{ year }}</span>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Footer extends Vue {
  year = new Date().getFullYear();
}
</script>

<style lang="scss">
@import "./FooterMain.scss";
</style>
