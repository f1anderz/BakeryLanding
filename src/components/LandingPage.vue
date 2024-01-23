<script>
import ProductsBlock from "@/components/ProductsBlock.vue";
import WhyUsBlock from "@/components/WhyUsBlock.vue";
import ContactsBlock from "@/components/ContactsBlock.vue";

export default {
  name: "LandingPage",
  components: {WhyUsBlock, ProductsBlock, ContactsBlock}
};
</script>

<template>
  <div class="wrapper">
    <div class="main-block" id="main">
      <div class="title-block"><img src="../assets/img/bread.png" alt="Logo" class="logo">
        <div class="title">
          <span>Broadway</span>
          <span class="highlighted">Boulangerie</span>
        </div>
        <div class="nav">
          <a href="#main" class="link">Home</a>
          <a href="#products" class="link">Products</a>
          <a href="#why-us" class="link">Why Us</a>
          <a href="#contact" class="link">Contact</a>
        </div>
      </div>
      <div class="slogan">
        <span>Broadway Boulangerie:</span>
        <span>Crafting <span class="highlighted">Breads</span>, Creating <span
            class="highlighted">Moments.</span></span></div>
      <div class="description">
        <span>Rise to the Occasion with Broadway Boulangerie —</span>
        <span>Where Every Loaf Tells a Tale of Premium Ingredients and Passionate Craftsmanship!</span>
      </div>
    </div>
    <div class="products-block" id="products">
      <products-block/>
    </div>
    <div class="why-us-block" id="why-us">
      <why-us-block/>
    </div>
    <div class="contacts-block" id="contact">
      <contacts-block/>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/scss/variables";

.wrapper {
  font-family: $font;

  .main-block {
    height: 100vh;
    background-image: url(@/assets/img/main_image.png);
    color: $image-text-color;

    .title-block {
      width: 70%;
      margin: 0 auto;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      gap: .75em;
      padding-top: 1em;

      .logo {
        width: 64px;
        height: 64px;
      }

      .title {
        display: flex;
        flex-direction: column;
        font-size: 1.25em;
        font-weight: weight(regular);
        margin-top: .35em;
      }

      .nav {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 2em;
        margin-left: auto;

        .link {
          display: block;
          color: $image-text-color;
          text-decoration: none;
          font-size: 1.2em;
          font-weight: weight(regular);

          &:hover {
            color: $highlight-color;
          }
        }
      }
    }

    .slogan {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-top: 3em;
      width: 60%;
      margin: 0 auto;
      font-size: 3em;
      font-weight: weight(light);
    }

    .description {
      display: flex;
      flex-direction: column;
      font-size: 1.75em;
      padding-top: 3em;
      width: 50%;
      margin: 0 auto;
      font-weight: weight(light);
    }
  }
}
</style>