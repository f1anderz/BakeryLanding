<script>
export default {
  name: "ProductSlide",
  props: {
    product: {
      Type: Object,
      required: true
    }
  },
  methods: {
    handleClick(event) {
      if (event.target.classList[0].split('-').includes('name') ||
          event.target.classList[0].split('-').includes('description')) return;
      event.target.children[0].classList.toggle('animation');
    },
    handleShadowClick(event) {
      console.log(event.target)
      event.target.parentNode.classList.toggle('animation');
    }
  }
}
</script>

<template>
  <div class="product-slide" @click="this.handleClick">
    <div class="product-slide-shadow">
      <div class="product-slide-shadow-name" @click="this.handleShadowClick">{{ this.product.name }}</div>
      <div class="product-slide-shadow-description" @click="this.handleShadowClick">{{ this.product.description }}</div>
    </div>
    <img :src="require('@/assets/img/' + this.product.image + '.png')" :alt="this.product.name">
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/scss/variables";

.product-slide {
  color: $image-text-color;
  position: relative;
  @include breakpoint(xs) {
    width: 18.75em;
    height: 18.75em;
  }

  @include breakpoint(xxl) {
    width: 25em;
    height: 25em;
  }

  &-shadow {
    position: absolute;
    bottom: -15em;
    z-index: 2;
    transition: bottom .7s ease-out;
    background: rgba(0, 0, 0, .75);

    @include breakpoint(xs) {
      width: 18.75em;
    }

    @include breakpoint(xxl) {
      width: 25em;
    }

    &-name {
      text-align: center;
      font-weight: weight(light);
      transform: scale(1.3);
      transition: transform .75s ease;
      @include breakpoint(xs) {
        padding: .3em;
        font-size: 1.1em;
      }

      @include breakpoint(xxl) {
        padding: .4em .3em .1em .3em;
        font-size: 1.5em;
      }
    }

    &-description {
      text-align: center;
      font-weight: weight(light);
      transform: scale(1.3);
      transition: transform .75s ease;
      @include breakpoint(xs) {
        padding: .3em;
        font-size: 1em;
      }

      @include breakpoint(xxl) {
        padding: .2em .3em .2em .3em;
        font-size: 1.4em;
      }
    }
  }

  img {
    pointer-events: none;
    user-select: none;

    @include breakpoint(xs) {
      width: 18.75em;
      height: 18.75em;
    }

    @include breakpoint(xxl) {
      width: 25em;
      height: 25em;
    }
  }

  @include breakpoint(xs) {
    .animation {
      bottom: 0;

      .product-slide-shadow-name, .product-slide-shadow-description {
        transform: scale(1);
      }
    }
  }

  @include breakpoint(xxl) {
    &:hover .product-slide-shadow {
      bottom: 0;

      .product-slide-shadow-name, .product-slide-shadow-description {
        transform: scale(1);
      }
    }
  }
}
</style>