<script>
import ProductSlider from "@/components/Products/ProductSlider.vue";

export default {
  components: {ProductSlider},
  data() {
    return {
      products: [
        {
          id: 0,
          name: "Sourdough Symphony",
          description: "A classic sourdough with a crispy crust and a tangy, flavorful interior.",
          image: "sourdough_symphony"
        },
        {
          id: 1,
          name: "Multigrain Melody",
          description: "A wholesome blend of various grains and seeds for a nutritious and hearty bread.",
          image: "multigrain_melody"
        },
        {
          id: 2,
          name: "French Elegance Baguette",
          description: "A long, slender baguette with a golden crust and soft, airy inside – perfect for traditional French sandwiches.",
          image: "french_elegance_baguette"
        },
        {
          id: 3,
          name: "Ciabatta Crescendo",
          description: "An Italian favorite with a rustic appearance, known for its light texture and open crumb.",
          image: "ciabatta_crescendo"
        },
        {
          id: 4,
          name: "Cinnamon Swirl Sonata",
          description: "A sweet and aromatic bread, swirled with cinnamon and sugar, creating a delightful treat.",
          image: "cinnamon_swirl_sonata"
        },
        {
          id: 5,
          name: "Olive Opera Loaf",
          description: "A savory creation featuring a medley of olives, bringing a burst of Mediterranean flavors.",
          image: "olive_opera_loaf"
        },
        {
          id: 6,
          name: "Pumpernickel Pas de Deux",
          description: "A dark and rich German bread, made with rye flour and often enhanced with molasses or cocoa for a distinctive taste.",
          image: "pumpernickel_pas_de_deux"
        }
      ]
    }
  }
}
</script>

<template>
  <div class="products-block">
    <div class="products-block-title">Check our <span class="highlighted">bestsellers</span></div>
    <product-slider class="products-block-slider" :products="this.products"/>
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

  @include breakpoint(xs) {
    height: 90vh;
    gap: 2em;
  }

  @include breakpoint(s) {
    height: 100vh;
    gap: 1em;
  }

  @include breakpoint(m) {
    height: 80vh;
    gap: 3em;
  }

  @include breakpoint(l) {
    height: 84vh;
    gap: 3.5em;
  }

  @include breakpoint(xl) {
    height: 75vh;
    gap: 3em;
  }

  @include breakpoint(xxl) {
    height: 100vh;
    gap: 5em;
  }

  @include breakpoint(xxxl) {
    height: 85vh;
    gap: 5em;
  }

  &-title {
    color: $image-text-color;
    font-weight: weight(light);

    @include breakpoint(xs) {
      font-size: 1.2em;
    }

    @include breakpoint(s) {
      font-size: 1.2em;
    }

    @include breakpoint(m) {
      font-size: 1.7em;
    }

    @include breakpoint(l) {
      font-size: 1.9em;
    }

    @include breakpoint(xl) {
      font-size: 3em;
    }

    @include breakpoint(xxl) {
      font-size: 3em;
    }

    @include breakpoint(xxxl) {
      font-size: 5em;
    }
  }
}
</style>