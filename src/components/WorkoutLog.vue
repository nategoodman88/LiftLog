<template>
  <div class="popup-container">
    <h1>Workout log for {{ currentDate }}</h1>
    <div class="q-pa-md">
      <q-table
        flat
        bordered
        grid
        title="Exercises"
        :rows="rows"
        :columns="columns"
        row-key="name"
        :filter="filter"
        hide-header
      >
        <template v-slot:top-right>
          <q-input
            borderless
            dense
            debounce="300"
            v-model="filter"
            placeholder="Search"
          >
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
        </template>
      </q-table>
    </div>
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
//for use with bodyweight exercises such as pushups
const userWeight = localStorage.getItem("weight");

const columns = [
  {
    name: "Exercise",
    required: true,
    label: "Exercise",
    align: "left",
    field: (row) => row.name,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: "weight",
    align: "center",
    label: "Weight (in lbs)",
    field: "weight",
    sortable: true,
  },
  { name: "sets", label: "Sets", field: "sets" },
  { name: "reps", label: "Reps", field: "reps" },
];

//mock up use
const rows = [
  {
    name: "Bench Press",
    weight: 135,
    sets: 3,
    reps: 10,
  },
  {
    name: "Pushups",
    weight: userWeight,
    sets: 5,
    reps: 10,
  },
];

export default {
  name: "LogWorkout",
  data() {
    return {
      currentDate,
      filter: ref(""),
      columns,
      rows,
    };
  },
};
</script>
<style scoped>
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
</style>
