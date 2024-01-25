<script>
import StatementItem from "@/components/Statements/StatementItem.vue";

export default {
  name: "StatementList",
  components: {StatementItem},
  props:{
    statements:{
      type: Array,
      required: true
    }
  }
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
  justify-content: center;
  flex-wrap: wrap;
  background: $back-color-transparent;

  @include breakpoint(xs) {
    gap: .5em;
    padding: 1em;
    border-radius: .3em;
    flex-direction: column;
    align-items: center;
    background: none;
  }

  @include breakpoint(xxl) {
    gap: 2.5em;
    padding: 2em;
    border-radius: .3em;
    flex-direction: row;
    align-items: flex-start;
  }
}
</style>