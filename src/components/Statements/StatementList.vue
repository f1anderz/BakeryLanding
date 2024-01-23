<script>
import StatementItem from "@/components/Statements/StatementItem.vue";

export default {
  name: "StatementList",
  components: {StatementItem},
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
  },
};
</script>

<template>
  <div class="statement-list">
    <transition-group name="statement-list">
      <statement-item v-for="statement in this.statements" :key="statement.id" :statement="statement"/>
    </transition-group>
  </div>
</template>

<style lang="scss">
@import "src/assets/scss/variables";

.statement-list {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 2.5em;
  padding: 2em;
  background: $back-color-transparent;
  border-radius: .3em;
}
</style>