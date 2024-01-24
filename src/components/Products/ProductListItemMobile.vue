<script>
import {defineComponent} from "vue";

export default defineComponent({
  name: "ProductListItemMobile",
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  methods: {
    itemClick(event) {
      event.target.parentNode.children[0].classList.toggle('shadow-slide')
    },
    itemTextClick(event) {
      event.target.parentNode.classList.toggle('shadow-slide')
    }
  }
})
</script>

<template>
  <div class="product-list-item" @click="this.itemClick">
    <div class="shadow">
      <div class="product-name" @click="this.itemTextClick">{{ this.product.name }}</div>
      <div class="product-description" @click="this.itemTextClick">{{ this.product.description }}</div>
    </div>
    <img :src="require('@/assets/img/' + this.product.image + '.png')" :alt="this.product.name">
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/scss/variables";

.product-list-item {
  position: relative;
  overflow: hidden;

  img {
    width: 18em;
    height: 18em;
    border-radius: .2em;
  }

  .shadow {
    position: absolute;
    background: $back-color-transparent;
    font-size: 1.1em;
    z-index: 2;
    height: 18em;
    padding: .3em;
    margin-top: 18em;
    transition: margin-top .5s ease;

    .product-name {
      color: $highlight-color;
      text-align: center;
      transition: margin-top .7s ease;
      margin-top: 5em;
      width: 100%;
    }

    .product-description {
      @extend .product-name;
      color: $image-text-color;
    }
  }

  .shadow-slide {
    margin-top: 9em;

    .product-name {
      margin-top: 0;
    }

    .product-description {
      @extend .product-name;
    }
  }
}
</style>