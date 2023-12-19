<template>
  <div class="q-pa-md">
    <div class="q-gutter-md" style="max-width: 300px">
      <q-input v-model="text" label="Name" />
      <q-input v-model="date" filled type="date" label="Date of Birth" />
      <q-select v-model="model" :options="options" label="Gender" />
    </div>
  </div>
  <div class="center">
    <q-btn outline rounded color="black" label="Create" @click="Creation()" />
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "ProfileCreation",
  methods: {
    //saves all the info to local storage and loads profile page
    Creation() {
      localStorage.setItem("profileCreated", "true");
      localStorage.setItem("name", this.text);
      localStorage.setItem("birthday", this.date);
      localStorage.setItem("gender", this.model);
      this.$router.push("/profile");
    },
  },
  setup() {
    return {
      //return ref so input boxes stay filled/"saved"
      text: ref(""),
      date: ref(""),
      model: ref(""),
      options: ["Male", "Female", "Nonbinary"],
    };
  },
};
</script>
