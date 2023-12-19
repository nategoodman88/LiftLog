<template>
  <router-view />
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  //Check if user has already created a profile or not and direct them as necessary
  created() {
    const profileChecker = localStorage.getItem("profileCreated");
    if (profileChecker === "true") {
      this.$router.push("/");
    } else {
      this.$router.push("/create");
    }
  },
});
</script>
