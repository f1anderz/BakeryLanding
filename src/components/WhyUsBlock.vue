<script>
import {defineComponent} from "vue";
import StatementList from "@/components/Statements/StatementList.vue";

export default defineComponent({
  name: "WhyUsBlock",
  components: {StatementList}
})
</script>

<template>
  <div class="why-us-block" id="why-us">
    <div class="why-us-container">
      <div class="why-us-title">Our <span class="highlighted">superiorities</span></div>
      <StatementList class="why-us-statements"/>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/scss/variables";

.why-us-block {
  height: 100vh;
  background-image: url(@/assets/img/main-2.jpg);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;

  .why-us-container {
    width: 65%;
    display: flex;
    flex-direction: column;
    gap: 3em;
    margin-right: 5em;
    justify-content: center;
    align-items: flex-start;

    .why-us-title {
      color: $image-text-color;
      font-size: 2em;
      margin-left: auto;
      font-weight: weight(light);
    }
  }
}
</style>