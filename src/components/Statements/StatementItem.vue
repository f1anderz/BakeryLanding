<script>
export default {
  name: "StatementItem",
  props: {
    statement: {
      Type: Object,
      required: true
    }
  }
}
</script>

<template>
  <div class="statement">
    <div class="statement-name">{{ this.statement.name }}</div>
    <div class="statement-text">{{ this.statement.text }}</div>
  </div>
</template>

<style lang="scss">
@import "@/assets/scss/variables";

.statement {
  display: flex;
  flex-direction: column;
  background: $back-color-transparent;
  transition: transform .3s ease;
  @include breakpoint(xs) {
    padding: .75em;
    border-radius: .1em;
    font-size: .9em;
  }

  @include breakpoint(xxl) {
    border-radius: .1em;
    padding: .75em;
    font-size: 1.2em;
    width: 18em;
    height: 10em;
  }

  &-name {
    color: $highlight-color;
    font-weight: weight(regular);
    @include breakpoint(xxl) {
      flex-basis: 2em;
    }
  }

  &-text {
    color: $image-text-color;
    font-weight: weight(light);
  }

  @include breakpoint(xxl) {
    &:hover {
      transform: scale(1.1);
    }
  }
}
</style>