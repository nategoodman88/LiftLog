<template>
  <h1>Profile</h1>
  <div class="q-mt-md">
    <p>Name: {{ localStorageName }}</p>
    <p>Date: {{ localStorageBirthday }}</p>
    <p>Gender: {{ localStorageGender }}</p>
    <p>Weight: {{ localStorageWeight }}</p>
    <q-btn outline rounded color="black" label="Edit" @click="editProfile()" />
  </div>
</template>

<script>
import { ref, onMounted } from "vue";

export default {
  name: "ProfilePage",
  methods: {
    editProfile() {
      this.$router.push("/create");
    },
  },
  setup() {
    const text = ref("");
    const date = ref("");
    const model = ref("");
    const number = ref("");

    //retrieve data from localStorage on component mount
    onMounted(() => {
      text.value = localStorage.getItem("name") || "";
      date.value = localStorage.getItem("birthday") || "";
      model.value = localStorage.getItem("gender") || "";
      number.value = localStorage.getItem("weight") || "";
    });

    //export variables for use in the template
    return {
      localStorageName: text,
      localStorageBirthday: date,
      localStorageGender: model,
      localStorageWeight: number,
    };
  },
};
</script>
