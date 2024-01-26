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

  @include breakpoint(s) {
    padding: .75em;
    border-radius: .1em;
    font-size: .8em;
  }

  @include breakpoint(m) {
    padding: .75em;
    border-radius: .1em;
    font-size: 1.1em;
  }

  @include breakpoint(l) {
    padding: .75em;
    border-radius: .1em;
    font-size: 1.2em;
    width: 22em;
    height: 10em;
  }

  @include breakpoint(xl) {
    padding: .75em;
    border-radius: .1em;
    font-size: 1.3em;
    width: 18em;
    height: 10em;
  }

  @include breakpoint(xxl) {
    padding: .75em;
    border-radius: .1em;
    font-size: 1.2em;
    width: 18em;
    height: 10em;
  }

  @include breakpoint(xxxl) {
    padding: .75em;
    border-radius: .1em;
    font-size: 2em;
    width: 18em;
    height: 10em;
  }

  &-name {
    color: $highlight-color;
    font-weight: weight(regular);

    @include breakpoint(l) {
      flex-basis: 1.5em;
    }

    @include breakpoint(xl) {
      flex-basis: 2em;
    }

    @include breakpoint(xxl) {
      flex-basis: 2em;
    }

    @include breakpoint(xxxl) {
      flex-basis: 2.5em;
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

  @include breakpoint(xxxl) {
    &:hover {
      transform: scale(1.1);
    }
  }
}
</style>