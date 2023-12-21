<script>
import {defineComponent} from "vue";

export default defineComponent({

})
</script>

<template>
  <div class="why-us-block" id="why-us">
    <div class="why-us-container">
      <div class="why-us-title">Our <span class="highlighted">superiorities</span></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/scss/variables";

.why-us-block {
  height: 100vh;
  background-image: url(@/assets/img/crois.png);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  .why-us-container {
    width: 60%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 10em;
    justify-content: center;
    align-items: flex-start;


    .why-us-title {
      color: $image-text-color;
      font-size: 2em;
      font-weight: weight(light);
    }
  }
}
</style>