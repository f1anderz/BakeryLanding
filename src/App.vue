<script>
export default {
  name: "App"
};
</script>

<template>
  <landing-page/>
</template>

<style lang="scss">
@import "@/assets/scss/variables";

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html{
  scroll-behavior: smooth;
}

.highlighted {
  color: $highlight-color;
}
</style>
