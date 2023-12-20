<template>
  <q-page class="flex flex-center">
    <div class="center">
      <q-btn
        outline
        rounded
        color="black"
        label="Begin logging"
        @click="openLog()"
      />
    </div>
  </q-page>
  <component :is="currentComponent" v-if="showWorkoutLog" @close="closeLog" />
</template>

<script>
import { defineComponent } from "vue";
import WorkoutLog from "src/components/WorkoutLog.vue";

export default defineComponent({
  name: "IndexPage",
  components: {
    WorkoutLog,
  },
  data() {
    //load page with false and null so workoutlog component is always hidden when navigating to
    return {
      showWorkoutLog: false,
      currentComponent: null,
    };
  },
  methods: {
    //load values into log for showing it on button click, return values to normal for closing
    openLog() {
      this.showWorkoutLog = true;
      this.currentComponent = WorkoutLog;
    },
    closeLog() {
      this.showWorkoutLog = false;
      this.currentComponent = null;
    },
  },
});
</script>
<style>
.center {
  margin: 0 auto;
  text-align: center;
}
</style>
