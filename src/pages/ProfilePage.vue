<template>
  <h1>Profile</h1>
  <div class="q-mt-md">
    <p>Name: {{ localStorageName }}</p>
    <p>Date: {{ localStorageDate }}</p>
    <p>Gender: {{ localStorageGender }}</p>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";

export default {
  name: "ProfilePage",
  setup() {
    const text = ref("");
    const date = ref("");
    const model = ref("");

    //retrieve data from localStorage on component mount
    onMounted(() => {
      text.value = localStorage.getItem("name") || "";
      date.value = localStorage.getItem("birthday") || "";
      model.value = localStorage.getItem("gender") || "";
    });

    //export variables for use in the template
    return {
      localStorageName: text,
      localStorageDate: date,
      localStorageGender: model,
    };
  },
};
</script>
