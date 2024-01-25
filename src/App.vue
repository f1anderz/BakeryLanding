<script>
import WhyUsBlock from "@/components/WhyUsBlock.vue";
import ContactsBlock from "@/components/ContactsBlock.vue";
import ProductsBlock from "@/components/ProductsBlock.vue";
import WelcomeBlock from "@/components/WelcomeBlock.vue";

export default {
  name: "App",
  components: {WelcomeBlock, ProductsBlock, ContactsBlock, WhyUsBlock,}
}
</script>

<template>
  <div class="wrapper">
    <div class="welcome-block" id="welcome">
      <welcome-block/>
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

<style lang="scss">
@import "@/assets/scss/variables";

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html{
  scroll-behavior: smooth;
  font-family: $font;
}

.highlighted {
  color: $highlight-color;
}
</style>
