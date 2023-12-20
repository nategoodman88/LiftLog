<template>
  <header class="header">Profile</header>
  <div class="q-mt-md">
    <q-img
      :src="localStorageProfilePicture"
      spinner-color="white"
      style="height: 140px; max-width: 150px"
    />
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
    const profilePicture = ref("");

    //retrieve data from localStorage on component mount
    onMounted(() => {
      text.value = localStorage.getItem("name") || "";
      date.value = localStorage.getItem("birthday") || "";
      model.value = localStorage.getItem("gender") || "";
      number.value = localStorage.getItem("weight") || "";
      profilePicture.value = localStorage.getItem("profilePicture") || "";
    });

    //export variables for use in the template
    return {
      localStorageName: text,
      localStorageBirthday: date,
      localStorageGender: model,
      localStorageWeight: number,
      localStorageProfilePicture: profilePicture,
    };
  },
};
</script>
<style>
.header {
  font-size: large;
}
</style>
