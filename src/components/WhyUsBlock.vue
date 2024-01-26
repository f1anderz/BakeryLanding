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
    <div class="why-us-container">
      <div class="why-us-title">Our <span class="highlighted">superiorities</span></div>
      <StatementList class="why-us-statements" :statements="this.statements"/>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/scss/variables";

.why-us-block {
  background-image: url(@/assets/img/main-2.webp);
  display: flex;
  flex-direction: column;
  justify-content: center;
  @include breakpoint(xs) {
    height: 135vh;
    align-items: center;
    justify-content: flex-start;
  }

  @include breakpoint(xxl) {
    height: 100vh;
    align-items: flex-end;
  }

  .why-us-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    @include breakpoint(xs) {
      width: 90%;
      align-items: center;
      justify-content: flex-start;
      margin-right: 0;
      gap: .5em;
    }

    @include breakpoint(xxl) {
      width: 65%;
      gap: 3em;
      margin-right: 5em;
      align-items: flex-start;
    }

    .why-us-title {
      color: $image-text-color;
      font-weight: weight(light);
      @include breakpoint(xs) {
        font-size: 1.2em;
        margin-top: .8em;
        padding: .2em .3em;
        width: 73%;
        border-radius: .1em;
        background: $back-color-transparent;
      }

      @include breakpoint(xxl) {
        font-size: 2em;
        margin-left: auto;
      }
    }
  }
}
</style>