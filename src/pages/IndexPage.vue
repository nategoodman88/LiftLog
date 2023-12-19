<template>
  <q-page class="flex flex-center">
    <img
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 200px"
    />
  </q-page>
  <div class="center">
    <q-btn outline rounded color="black" label="Begin logging" />
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "IndexPage",
});
</script>
<style>
.center {
  margin: 0 auto;
  text-align: center;
}
</style>
