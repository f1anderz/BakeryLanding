<script>
import ProductSlide from "@/components/Products/ProductSlide.vue";

export default {
  name: "ProductSlider",
  components: {ProductSlide},
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
      ],
      paddings: {
        left: 0,
        right: 0
      }
    }
  },
  methods: {
    handleClick(event) {
      switch (event.target.classList[0]) {
        case "back":
          this.moveBack();
          break;
        case "next":
          this.moveNext();
          break;
      }
    },
    checkSet() {
      let slider = document.querySelector('.product-slider');
      slider.style.paddingRight = this.paddings.right + "px";
      slider.style.paddingLeft = this.paddings.left + "px";
    },
    moveBack() {
      if (this.paddings.left < 1000) {
        this.paddings.left += 400;
        this.paddings.right -= 400;
      } else if (this.paddings.left > 1000) {
        this.paddings.left = 1400;
        this.paddings.right = 0;
      }
      this.checkSet();
    },
    moveNext() {
      if (this.paddings.right < 1000) {
        this.paddings.left -= 400;
        this.paddings.right += 400;
      } else if (this.paddings.right > 1000) {
        this.paddings.right = 1400;
        this.paddings.left = 0;
      }
      this.checkSet();
    }
  }
};
</script>

<template>
  <div class="product-slider-container">
    <div class="product-slider">
      <transition-group name="product-slider">
        <ProductSlide v-for="product in this.products" :key="product.id" :product="product"/>
      </transition-group>
    </div>
    <div class="arrows">
      <img @click="this.handleClick" src="../../assets/img/back.png" alt="Back" class="back">
      <img @click="this.handleClick" src="../../assets/img/next.png" alt="Next" class="next">
    </div>
  </div>
</template>

<style scoped lang="scss">
.product-slider-container {
  display: flex;
  flex-direction: row;
  position: relative;
  width: 1400px;
  margin: 0 auto;

  .product-slider {
    position: relative;
    display: flex;
    flex-direction: row;
    transition: all 0.5s ease;
    justify-content: center;
    overflow: hidden;
    padding-left: 0;
    padding-right: 0;
    z-index: 2;
    border-radius: .15em;
  }

  .arrows {
    width: 100%;
    position: absolute;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 25em;
    margin-top: -25em;
    z-index: 1;

    .back {
      width: 8em;
      height: 8em;
      margin-left: -8em;
      opacity: .6;
      transition: transform .3s ease;

      &:hover {
        transform: scale(1.1);
      }
    }

    .next {
      @extend .back;
      margin-right: -8em;
    }

    &:hover {
      cursor: pointer;
    }
  }
}
</style>