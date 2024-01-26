<script>

export default {
  name: "WelcomeBlock",
}
</script>

<template>
  <div class="welcome-block">
    <div class="welcome-block-header">
      <img src="../assets/img/bread.svg" alt="Logo" class="welcome-block-header-logo">
      <div class="welcome-block-header-title">
        <span>Broadway</span>
        <span class="highlighted">Boulangerie</span>
      </div>
      <div class="welcome-block-header-nav">
        <a href="#products" class="welcome-block-header-nav-link">Products</a>
        <a href="#why-us" class="welcome-block-header-nav-link">Why Us</a>
        <a href="#contact" class="welcome-block-header-nav-link">Contact</a>
      </div>
    </div>
    <div class="welcome-block-slogan">
      <span>Broadway Boulangerie:</span>
      <span>Crafting <span class="highlighted">Breads</span>, Creating <span
          class="highlighted">Moments.</span></span></div>
    <div class="welcome-block-description">
      <span>Rise to the Occasion with Broadway Boulangerie —</span>
      <span>Where Every Loaf Tells a Tale of Premium Ingredients and Passionate Craftsmanship!</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/scss/variables";

.welcome-block {
  height: 100vh;
  background-image: url(@/assets/img/main_image.webp);
  color: $image-text-color;

  &-header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    @include breakpoint(xs) {
      width: 90%;
      margin: 0 auto;
      gap: .75em;
      padding-top: .2em;
    }

    @include breakpoint(xxl) {
      width: 70%;
      margin: 0 auto;
      gap: .75em;
      padding-top: 1em;
    }

    &-logo {
      @include breakpoint(xs) {
        width: 40px;
        height: 40px;
      }

      @include breakpoint(xxl) {
        width: 64px;
        height: 64px;
      }
    }

    &-title {
      display: flex;
      flex-direction: column;
      font-weight: weight(regular);
      @include breakpoint(xs) {
        font-size: .9em;
        margin-top: .35em;
      }

      @include breakpoint(xxl) {
        font-size: 1.25em;
        margin-top: .35em;
      }
    }

    &-nav {
      display: flex;
      flex-direction: row;
      align-items: center;
      @include breakpoint(xs) {
        gap: 1em;
        margin-left: auto;
      }

      @include breakpoint(xxl) {
        gap: 2em;
        margin-left: auto;
      }

      &-link {
        display: block;
        color: $image-text-color;
        text-decoration: none;
        font-weight: weight(regular);
        transition: transform .3s ease;
        @include breakpoint(xs) {
          font-size: .8em;
        }

        @include breakpoint(xxl) {
          font-size: 1.2em;
        }

        &:hover {
          color: $highlight-color;
          transform: scale(1.1);
        }
      }
    }
  }

  &-slogan {
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-weight: weight(light);
    @include breakpoint(xs) {
      padding-top: 5em;
      width: 80%;
      margin: 0 auto;
      font-size: 1.75em;
    }

    @include breakpoint(xxl) {
      padding-top: 3em;
      width: 60%;
      margin: 0 auto;
      font-size: 3em;
    }
  }

  &-description {
    display: flex;
    flex-direction: column;
    font-weight: weight(light);
    @include breakpoint(xs) {
      font-size: 1.25em;
      padding-top: 5em;
      width: 90%;
      margin: 0 auto;
    }

    @include breakpoint(xxl) {
      font-size: 1.75em;
      padding-top: 3em;
      width: 50%;
      margin: 0 auto;
    }
  }
}
</style>