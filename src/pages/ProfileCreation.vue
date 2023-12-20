<template>
  <div class="q-pa-md">
    <div class="q-gutter-md" style="max-width: 300px">
      <label for="profile-picture" class="q-btn push color-teal cursor-pointer">
        Change profile picture
      </label>
      <input
        type="file"
        id="profile-picture"
        @change="uploadNewPic($event)"
        style="display: none"
      />
      <q-img
        :src="newProfilePicture || url"
        spinner-color="white"
        style="height: 140px; max-width: 150px"
      />
      <q-input v-model="text" label="Name" />
      <q-input v-model="date" filled type="date" label="Date of Birth" />
      <q-select v-model="model" :options="options" label="Gender" />
      <q-input
        v-model="number"
        type="number"
        filled
        label="Weight"
        style="max-width: 200px"
      />
    </div>
  </div>
  <div class="center">
    <q-btn outline rounded color="black" label="Save" @click="Creation()" />
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
      localStorage.setItem("weight", this.number);
      localStorage.setItem(
        "profilePicture",
        "/src/assets/blank-profile-picture-973460_640.png"
      );
      //check if a new profile picture was selected
      if (this.newProfilePicture) {
        localStorage.setItem("profilePicture", this.newProfilePicture);
      }
      this.$router.push("/profile");
    },
    uploadNewPic(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          this.newProfilePicture = reader.result;
        };
        reader.readAsDataURL(file);
      }
    },
  },
  setup() {
    const url = ref("/src/assets/blank-profile-picture-973460_640.png"); //default profile picture
    const newProfilePicture = ref(localStorage.getItem("profilePicture") || ""); //variable to store the new profile picture and check for it on future loads
    //set others to current value if it exists
    const text = ref(localStorage.getItem("name") || "");
    const date = ref(localStorage.getItem("birthday") || "");
    const model = ref(localStorage.getItem("gender") || "");
    const number = ref(localStorage.getItem("weight") || "");
    return {
      //return ref so input boxes stay filled/"saved"
      url,
      newProfilePicture,
      text,
      date,
      model,
      number,
      options: ["Male", "Female", "Nonbinary"],
    };
  },
};
</script>
