<script>
import StatementList from "@/components/Statements/StatementList.vue";

export default {
  name: "WhyUsBlock",
  components: {StatementList},
  data() {
    return {
      statements: [
        {
          id: 0,
          name: "Premium Ingredients, Exceptional Taste",
          text: "We use only the finest and freshest ingredients, ensuring that each bite of our bread is a flavorful and memorable experience"
        },
        {
          id: 1,
          name: "Artisanal Craftsmanship",
          text: "Every loaf is handcrafted with precision and passion by our skilled bakers, resulting in bread that reflects the artistry of our craft"
        },
        {
          id: 2,
          name: "Local Charm on Broadway",
          text: "Located on Broadway in the heart of New York, Broadway Boulangerie brings a touch of local charm to your daily bread, making it a truly unique experience"
        },
        {
          id: 3,
          name: "Diverse Bread Selection",
          text: "From the classic Sourdough Symphony to the sweet Cinnamon Swirl Sonata, our diverse selection of breads caters to every taste and preference"
        },
        {
          id: 4,
          name: "Commitment to Wholesome Nutrition",
          text: "Our Multigrain Melody and other wholesome options are crafted to not only delight your taste buds but also contribute to a healthy and nutritious lifestyle"
        },
        {
          id: 5,
          name: "Memorable Moments in Every Bite",
          text: "Broadway Boulangerie is not just a bakery; it's a place where each loaf tells a story. Choose us for the joy of creating memorable moments with our delectable bread varieties"
        },
      ]
    }
  }
}
</script>

<template>
  <div class="why-us-block" id="why-us">
    <div class="why-us-block-title">Our <span class="highlighted">superiorities</span></div>
    <StatementList class="why-us-block-statements" :statements="this.statements"/>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/scss/variables";

.why-us-block {
  background-image: url(@/assets/img/main-2.webp);
  background-size: cover;
  display: flex;
  flex-direction: column;

  @include breakpoint(xs) {
    height: 135vh;
    align-items: center;
    justify-content: center;
    margin-right: 0;
    gap: .5em;
  }

  @include breakpoint(s) {
    height: 135vh;
    align-items: center;
    justify-content: center;
    margin-right: 0;
  }

  @include breakpoint(m) {
    height: 90vh;
    gap: .7em;
    align-items: center;
    justify-content: flex-start;
  }

  @include breakpoint(l) {
    height: 100vh;
    align-items: flex-end;
    justify-content: center;
    gap: 1.5em;
    padding-right: 5em;
  }

  @include breakpoint(xl) {
    height: 110vh;
    align-items: flex-end;
    justify-content: center;
    gap: 3em;
    padding-right: 5em;
  }

  @include breakpoint(xxl) {
    height: 100vh;
    align-items: flex-end;
    justify-content: center;
    gap: 3em;
    padding-right: 5em;
  }

  @include breakpoint(xxxl) {
    height: 100vh;
    align-items: flex-end;
    justify-content: center;
    gap: 3em;
    padding-right: 5em;
  }

  &-title {
    color: $image-text-color;
    font-weight: weight(light);

    @include breakpoint(xs) {
      font-size: 1.2em;
      margin-top: .8em;
      padding: .2em .5em;
      border-radius: .1em;
      background: $back-color-transparent;
    }

    @include breakpoint(s) {
      font-size: 1.2em;
      margin-top: .2em;
      padding: .1em .5em;
      border-radius: .1em;
      background: $back-color-transparent;
    }

    @include breakpoint(m) {
      font-size: 1.3em;
      margin-top: 2em;
      padding: .2em .5em;
      border-radius: .1em;
      background: $back-color-transparent;
    }

    @include breakpoint(l) {
      font-size: 1.5em;
    }

    @include breakpoint(xl) {
      font-size: 2em;
    }

    @include breakpoint(xxl) {
      font-size: 2em;
    }

    @include breakpoint(xxxl) {
      font-size: 5em;
    }
  }
}
</style>