<script>
import StatementItem from "@/components/Statements/StatementItem.vue";

export default {
  name: "StatementList",
  components: {StatementItem},
  props: {
    statements: {
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
  justify-content: flex-end;
  flex-wrap: wrap;

  @include breakpoint(xs) {
    width: 95%;
    gap: .5em;
    padding: 1em;
    flex-direction: column;
    align-items: center;
  }

  @include breakpoint(s) {
    width: 90%;
    gap: .5em;
    padding: .7em;
    flex-direction: column;
    align-items: center;
  }

  @include breakpoint(m) {
    width: 95%;
    gap: .7em;
    padding: 1em;
    flex-direction: column;
    align-items: center;
  }

  @include breakpoint(l) {
    width: 95%;
    gap: 1em;
  }

  @include breakpoint(xl) {
    width: 80%;
    gap: 2.5em;
  }

  @include breakpoint(xxl) {
    width: 80%;
    gap: 2.5em;
  }

  @include breakpoint(xxxl) {
    width: 80%;
    gap: 4em;
  }
}
</style>