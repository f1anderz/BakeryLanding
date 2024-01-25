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

  @include breakpoint(xxl) {
    width: 93em;
    gap: 1em;
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

    @include breakpoint(xxl) {
      width: 75em;
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
    @include breakpoint(xxl) {
      width: 8em;
      height: 8em;
    }

    &:hover {
      transform: scale(1.1);
    }
  }

  &-forward {
    transform: rotate(180deg);

    &:hover {
      transform: rotate(180deg);
    }
  }

  &:hover {
    cursor: pointer;
  }
}

.dragging {
  cursor: grab;
  scroll-behavior: auto;
}
</style>