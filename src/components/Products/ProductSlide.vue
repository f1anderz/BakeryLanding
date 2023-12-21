<script>
export default {
  name: "ProductSlide",
  props: {
    product: {
      Type: Object,
      required: true
    }
  }
}
</script>

<template>
  <div class="product-slide-container">
    <img :src="require('@/assets/img/' + this.product.image + '.png')" :alt="this.product.name">
    <div class="shadow">
      <div class="name">{{ this.product.name }}</div>
      <div class="description">{{ this.product.description }}</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/scss/variables";

.product-slide-container {
  position: relative;
  color: $image-text-color;
  width: 400px;
  height: 400px;

  .shadow {
    position: absolute;
    transition: top .75s ease-out;
    top: 400px;
    display: flex;
    padding-top: 3em;
    flex-direction: column;
    gap: 2em;
    width: 400px;
    height: 400px;
    background: rgba(0, 0, 0, .75);
  }

  .name {
    text-align: center;
    font-size: 1.55em;
    font-weight: weight(light);
    padding-top: 4em;
    transition: all 1s ease-out;
  }

  .description {
    @extend .name;
    padding-top: 6em;
    font-size: 1.35em;
  }

  img {
    width: 400px;
    height: 400px;
  }

  &:hover {
    .shadow {
      top: 0;
    }

    .name{
      padding-top: 0;
    }

    .description {
      padding-top: 0;
    }
  }
}
</style>