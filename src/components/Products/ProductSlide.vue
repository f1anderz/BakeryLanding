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
    <img :src="require('@/assets/img/' + this.product.image + '.webp')" :alt="this.product.name">
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

  @include breakpoint(s) {
    width: 18.75em;
    height: 18.75em;
  }

  @include breakpoint(m) {
    width: 20em;
    height: 20em;
  }

  @include breakpoint(l) {
    width: 25em;
    height: 25em;
  }

  @include breakpoint(xl) {
    width: 25em;
    height: 25em;
  }

  @include breakpoint(xxl) {
    width: 25em;
    height: 25em;
  }

  @include breakpoint(xxxl) {
    width: 40em;
    height: 40em;
  }

  &-shadow {
    position: absolute;
    z-index: 2;
    transition: bottom .7s ease-out;
    background: rgba(0, 0, 0, .75);

    @include breakpoint(xs) {
      width: 18.75em;
      bottom: -15em;
    }

    @include breakpoint(s) {
      width: 18.75em;
      bottom: -15em;
    }

    @include breakpoint(m) {
      width: 20em;
      bottom: -15em;
    }

    @include breakpoint(l) {
      width: 25em;
      bottom: -15em;
    }

    @include breakpoint(xl) {
      width: 25em;
      bottom: -15em;
    }

    @include breakpoint(xxl) {
      width: 25em;
      bottom: -15em;
    }

    @include breakpoint(xxxl) {
      width: 40em;
      bottom: -20em;
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

      @include breakpoint(s) {
        padding: .3em;
        font-size: 1.1em;
      }

      @include breakpoint(m) {
        padding: .4em;
        font-size: 1.2em;
      }

      @include breakpoint(l) {
        padding: .3em;
        font-size: 1.3em;
      }

      @include breakpoint(xl) {
        padding: .4em .3em .1em .3em;
        font-size: 1.5em;
      }

      @include breakpoint(xxl) {
        padding: .4em .3em .1em .3em;
        font-size: 1.5em;
      }

      @include breakpoint(xxxl) {
        padding: .4em .3em .1em .3em;
        font-size: 3em;
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

      @include breakpoint(s) {
        padding: .3em;
        font-size: 1em;
      }

      @include breakpoint(m) {
        padding: .4em;
        font-size: 1.1em;
      }

      @include breakpoint(l) {
        padding: .4em .6em;
        font-size: 1.2em;
      }

      @include breakpoint(xl) {
        padding: .2em .3em .2em .3em;
        font-size: 1.4em;
      }

      @include breakpoint(xxl) {
        padding: .2em .3em .2em .3em;
        font-size: 1.4em;
      }

      @include breakpoint(xxxl) {
        padding: .2em .3em .2em .3em;
        font-size: 2.5em;
      }
    }
  }

  & img {
    pointer-events: none;
    user-select: none;

    @include breakpoint(xs) {
      width: 18.75em;
      height: 18.75em;
    }

    @include breakpoint(s) {
      width: 18.75em;
      height: 18.75em;
    }

    @include breakpoint(m) {
      width: 20em;
      height: 20em;
    }

    @include breakpoint(l) {
      width: 25em;
      height: 25em;
    }

    @include breakpoint(xl) {
      width: 25em;
      height: 25em;
    }

    @include breakpoint(xxl) {
      width: 25em;
      height: 25em;
    }

    @include breakpoint(xxxl) {
      width: 40em;
      height: 40em;
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

  @include breakpoint(s) {
    .animation {
      bottom: 0;

      .product-slide-shadow-name, .product-slide-shadow-description {
        transform: scale(1);
      }
    }
  }

  @include breakpoint(m) {
    .animation {
      bottom: 0;

      .product-slide-shadow-name, .product-slide-shadow-description {
        transform: scale(1);
      }
    }
  }

  @include breakpoint(l) {
    .animation {
      bottom: 0;

      .product-slide-shadow-name, .product-slide-shadow-description {
        transform: scale(1);
      }
    }
  }

  @include breakpoint(xl) {
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

  @include breakpoint(xxxl) {
    &:hover .product-slide-shadow {
      bottom: 0;

      .product-slide-shadow-name, .product-slide-shadow-description {
        transform: scale(1);
      }
    }
  }
}
</style>