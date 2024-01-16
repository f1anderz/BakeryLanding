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
  border-radius: .5em;
  padding: .75em;
  font-size: 140%;
  width: 17.5em;
  height: 10em;

  .statement-name {
    color: $highlight-color;
    font-weight: weight(regular);
    flex-basis: 2em;
  }

  .statement-text {
    color: $image-text-color;
    font-weight: weight(light);
  }
}
</style>