<script>
import ProductSlide from "@/components/Products/ProductSlide.vue";

export default {
  name: "ProductSlider",
  components: {ProductSlide},
  data() {
    return {
      slider: Object,
      isMouseDown: false,
      startXPosition: 0,
      initialScrollLeft: 0,
      isDragging: false,
      positionDifference: 0
    }
  },
  props: {
    products: {
      Type: Array,
      required: true
    }
  },
  methods: {
    arrowClick(event) {
      let arrowDirection = event.target.classList[0].split('-')[3];
      switch (arrowDirection) {
        case "back":
          this.slider.scrollLeft -= event.pointerType === "mouse" ? 400 : 300;
          break;
        case "forward":
          this.slider.scrollLeft += event.pointerType === "mouse" ? 400 : 300;
          break;
      }
    },
    mouseDown(event) {
      this.isMouseDown = true;
      this.startXPosition = event.pageX || event.touches[0].pageX;
      this.initialScrollLeft = this.slider.scrollLeft;
    },
    dragging(event) {
      if (!this.isMouseDown) return;
      event.preventDefault();
      this.isDragging = true;
      this.positionDifference = (event.pageX || event.touches[0].pageX) - this.startXPosition;
      this.slider.scrollLeft = this.initialScrollLeft - this.positionDifference;
    },
    mouseUp() {
      this.isDragging = false;
      this.isMouseDown = false;
    }
  },
  mounted() {
    this.slider = document.querySelector('.products-block-slider-content');
    this.initialScrollLeft = window.screen.width < 576 ? 900 : 800;
    this.slider.scrollLeft = this.initialScrollLeft;

    this.slider.addEventListener("touchstart", this.mouseDown);

    document.addEventListener("mousemove", this.dragging);
    this.slider.addEventListener("touchmove", this.dragging);

    document.addEventListener("mouseup", this.mouseUp);
    this.slider.addEventListener("touchend", this.mouseUp);
  }
};
</script>

<template>
  <div class="products-block-slider">
    <img @click="this.arrowClick" src="../../assets/img/back.svg" alt="Back"
         class="products-block-slider-back">
    <div class="products-block-slider-content" @mousedown="this.mouseDown"
         @mouseleave="this.isMouseDown = false; this.isDragging=false;" :class="{dragging: isDragging}">
      <transition-group name="product-slider">
        <ProductSlide v-for="product in this.products" :key="product.id" :product="product"/>
      </transition-group>
    </div>
    <img @click="this.arrowClick" src="../../assets/img/back.svg" alt="Forward"
         class="products-block-slider-forward">
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/scss/variables";

.products-block-slider {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @include breakpoint(xs) {
    width: 23.75em;
    gap: .5em;
  }

  @include breakpoint(s) {
    width: 43.4em;
    gap: .7em;
  }

  @include breakpoint(m) {
    width: 47.4em;
    gap: .7em;
  }

  @include breakpoint(l) {
    width: 58.8em;
    gap: .9em;
  }

  @include breakpoint(xl) {
    width: 80em;
    gap: 1em;
  }

  @include breakpoint(xxl) {
    width: 93em;
    gap: 1em;
  }

  @include breakpoint(xxxl) {
    width: 150em;
    gap: 3em;
  }

  &-content {
    position: relative;
    display: flex;
    flex-direction: row;
    scroll-behavior: smooth;
    overflow: hidden;
    border-radius: .15em;

    @include breakpoint(xs) {
      width: 18.75em;
    }

    @include breakpoint(s) {
      width: 36em;
    }

    @include breakpoint(m) {
      width: 40em;
    }

    @include breakpoint(l) {
      width: 50em;
    }

    @include breakpoint(xl) {
      width: 68em;
    }

    @include breakpoint(xxl) {
      width: 75em;
    }

    @include breakpoint(xxxl) {
      width: 120em;
    }
  }


  &-back, &-forward {
    display: block;
    opacity: .6;
    transition: transform .3s ease;

    @include breakpoint(xs) {
      width: 2em;
      height: 2em;
    }

    @include breakpoint(s) {
      width: 3em;
      height: 3em;
    }

    @include breakpoint(m) {
      width: 3em;
      height: 3em;
    }

    @include breakpoint(l) {
      width: 3.5em;
      height: 3.5em;
    }

    @include breakpoint(xl) {
      width: 5em;
      height: 5em;
    }

    @include breakpoint(xxl) {
      width: 8em;
      height: 8em;

      &:hover {
        transform: scale(1.1);
      }
    }

    @include breakpoint(xxxl) {
      width: 12em;
      height: 12em;

      &:hover {
        transform: scale(1.1);
      }
    }
  }

  &-forward {
    transform: rotate(180deg);

    &:hover {
      transform: rotate(180deg);
    }
  }

  @include breakpoint(xxl) {
    &:hover {
      cursor: pointer;
    }
  }

  @include breakpoint(xxxl) {
    &:hover {
      cursor: pointer;
    }
  }
}

.dragging {
  cursor: grab;
  scroll-behavior: auto;
}
</style>