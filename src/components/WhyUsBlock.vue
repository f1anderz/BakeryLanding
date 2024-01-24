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
  background-image: url(@/assets/img/main-2.jpg);
  display: flex;
  flex-direction: column;
  justify-content: center;

  .why-us-container {
    display: flex;
    flex-direction: column;
    justify-content: center;

    .why-us-title {
      color: $image-text-color;
      font-weight: weight(light);
    }
  }
}

@media (max-width: 1200px) {
  .why-us-block {
    height: 100vh;
    align-items: flex-end;

    .why-us-container {
      width: 65%;
      gap: 3em;
      margin-right: 5em;
      align-items: flex-start;

      .why-us-title {
        font-size: 2em;
      }
    }
  }
}

@media (max-width: 1024px) {
  .why-us-block {
    height: 100vh;
    align-items: flex-end;

    .why-us-container {
      width: 65%;
      gap: 3em;
      margin-right: 5em;
      align-items: flex-start;

      .why-us-title {
        font-size: 2em;
      }
    }
  }
}

@media (max-width: 768px) {
  .why-us-block {
    height: 100vh;
    align-items: flex-end;

    .why-us-container {
      width: 65%;
      gap: 3em;
      margin-right: 5em;
      align-items: flex-start;

      .why-us-title {
        font-size: 2em;
      }
    }
  }
}

@media (max-width: 480px) {
  .why-us-block {
    height: 135vh;
    align-items: center;
    justify-content: flex-start;

    .why-us-container {
      width: 90%;
      align-items: center;
      justify-content: flex-start;
      margin-right: 0;
      gap: .5em;

      .why-us-title {
        font-size: 1.2em;
        margin-top: .8em;
        padding: .2em .3em;
        width: 73%;
        background: $back-color-transparent;
      }
    }
  }
}

@media (min-width: 1201px) {
  .why-us-block {
    height: 100vh;
    align-items: flex-end;

    .why-us-container {
      width: 65%;
      gap: 3em;
      margin-right: 5em;
      align-items: flex-start;

      .why-us-title {
        font-size: 2em;
        margin-left: auto;
      }
    }
  }
}
</style>