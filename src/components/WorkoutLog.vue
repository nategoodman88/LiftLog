<template>
  <div class="popup-container">
    <header class="header">Workout log for {{ currentDate }}</header>
    <div class="q-pa-md">
      <div class="parent">
        <div class="child">Exercise</div>
        <div class="child">Weight</div>
        <div class="child">Sets</div>
        <div class="child">Reps</div>
      </div>

      <div v-for="(exercise, index) in rows" :key="index">
        <div class="exercise-item">
          <div>{{ exercise.name }}</div>
          <div>{{ exercise.weight }}</div>
          <div>{{ exercise.sets }}</div>
          <div>{{ exercise.reps }}</div>
        </div>
        <q-separator />
      </div>
      <q-btn
        outline
        rounded
        color="black"
        label="+"
        @click="showModal = true"
      />
    </div>

    <!-- Add new excersie -->
    <q-dialog v-model="showModal">
      <q-card>
        <q-card-section>
          <q-input v-model="newExercise.name" label="Exercise" dense />
          <q-input v-model="newExercise.weight" label="Weight (in lbs)" dense />
          <q-input v-model="newExercise.sets" label="Sets" dense />
          <q-input v-model="newExercise.reps" label="Reps" dense />
        </q-card-section>
        <q-card-actions align="right">
          <q-btn label="Save" color="primary" @click="saveExercise" />
          <q-btn label="Cancel" color="negative" @click="showModal = false" />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <q-btn
      outline
      rounded
      color="black"
      label="Save workout"
      @click="$emit('close')"
    />
  </div>
</template>

<script>
import { ref } from "vue";

const currentDate = new Date().toDateString();
const userWeight = localStorage.getItem("weight");

export default {
  name: "LogWorkout",
  data() {
    return {
      currentDate,
      rows: [],
      showModal: false,
      newExercise: {
        name: "",
        weight: "",
        sets: "",
        reps: "",
      },
    };
  },
  methods: {
    addExercise(exercise) {
      this.rows.push(exercise);
    },
    saveExercise() {
      if (
        this.newExercise.weight.toLowerCase() === "bw" ||
        this.newExercise.weight.toUpperCase() === "BW"
      ) {
        this.newExercise.weight = userWeight;
      }
      this.addExercise({ ...this.newExercise });
      this.showModal = false;
      // Clear the input fields
      this.newExercise = {
        name: "",
        weight: "",
        sets: "",
        reps: "",
      };
    },
  },
};
</script>

<style scoped>
.header {
  font-size: large;
}
.popup-container {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
}
.parent {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}
.child {
  flex: 1; /* Each child div takes equal space */
  padding: 0 10px;
}
.exercise-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}
</style>
