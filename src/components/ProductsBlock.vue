<script>
import {defineComponent} from "vue";
import ProductSlider from "@/components/Products/ProductSlider.vue";
import ProductListMobile from "@/components/Products/ProductListMobile.vue";

export default defineComponent({
  components: {ProductListMobile, ProductSlider}
})
</script>

<template>
  <div class="products-block">
    <div class="products-title">Check our <span class="highlight">bestsellers</span></div>
    <product-slider class="product-slider-container"/>
    <product-list-mobile class="product-list-container"/>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/scss/variables";

.products-block {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: $back-color;

  .products-title {
    color: $image-text-color;
    font-weight: weight(light);

    .highlight {
      color: $highlight-color;
    }
  }
}

@media (max-width: 1200px) {
  .products-block {
    height: 100vh;
    gap: 5em;

    .products-title {
      font-size: 3em;
    }

    .product-slider-container {
      display: block;
    }

    .product-list-container {
      display: none;
    }
  }
}

@media (max-width: 1024px) {
  .products-block {
    height: 100vh;
    gap: 5em;

    .products-title {
      font-size: 3em;
    }

    .product-slider-container {
      display: block;
    }

    .product-list-container {
      display: none;
    }
  }
}

@media (max-width: 768px) {
  .products-block {
    height: 100vh;
    gap: 5em;

    .products-title {
      font-size: 3em;
    }

    .product-slider-container {
      display: block;
    }

    .product-list-container {
      display: none;
    }
  }
}

@media (max-width: 480px) {
  .products-block {
    height: 300vh;
    gap: 2em;

    .products-title {
      font-size: 1.2em;
    }

    .product-slider-container {
      display: none;
    }

    .product-list-container {
      display: block;
    }
  }
}

@media (min-width: 1201px) {
  .products-block {
    height: 100vh;
    gap: 5em;

    .products-title {
      font-size: 3em;
    }

    .product-slider-container {
      display: block;
    }

    .product-list-container {
      display: none;
    }
  }
}
</style>