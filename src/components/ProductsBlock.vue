<script>

import {defineComponent} from "vue";
import ProductSlider from "@/components/Products/ProductSlider.vue";

export default defineComponent({
  components: {ProductSlider}
})
</script>

<template>
  <div class="products-block">
    <div class="products-title">Check our bestsellers</div>
    <product-slider/>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/scss/variables";

.products-block {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5em;
  background: $back-color;

  .products-title {
    color: $image-text-color;
    font-size: 3em;
    font-weight: weight(light);
  }
}
</style>