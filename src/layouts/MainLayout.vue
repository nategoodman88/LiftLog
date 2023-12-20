<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-tabs align="left">
        <q-route-tab to="/" label="Home" />
        <q-route-tab to="/workouts" label="Past Workouts" />
        <q-route-tab to="/profile" label="Profile" />
      </q-tabs>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer elevated class="bg-primary text-white">
      <div class="footer-content">
        <q-avatar size="128px">
          <img src="src/assets/Lift Log-logos/Lift Log-logos_transparent.png" />
        </q-avatar>
      </div>
    </q-footer>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MainLayout",
  setup() {
    return {};
  },
});
</script>
<style>
.footer-content {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
</style>
