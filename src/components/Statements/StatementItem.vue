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

  .statement-name {
    color: $highlight-color;
    font-weight: weight(regular);
  }

  .statement-text {
    color: $image-text-color;
    font-weight: weight(light);
  }

  &:hover{
    transform: scale(1.1);
  }
}

@media (max-width: 1200px) {
  .statement {
    border-radius: .1em;
    padding: .75em;
    font-size: .7em;
    width: 18em;
    height: 10em;

    .statement-name {
      flex-basis: 2em;
    }
  }
}

@media (max-width: 1024px) {
  .statement {
    border-radius: .1em;
    padding: .75em;
    font-size: 1.2em;
    width: 18em;
    height: 10em;

    .statement-name {
      flex-basis: 2em;
    }
  }
}

@media (max-width: 768px) {
  .statement {
    border-radius: .1em;
    padding: .75em;
    font-size: 1.2em;
    width: 18em;
    height: 10em;

    .statement-name {
      flex-basis: 2em;
    }
  }
}

@media (max-width: 480px) {
  .statement {
    border-radius: .1em;
    //padding: .75em;
    font-size: .9em;
    //width: 16em;
    //height: 12em;
  }
}

@media (min-width: 1201px) {
  .statement {
    border-radius: .1em;
    padding: .75em;
    font-size: 1.2em;
    width: 18em;
    height: 10em;

    .statement-name {
      flex-basis: 2em;
    }
  }
}
</style>