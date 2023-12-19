const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      { path: "profile", component: () => import("pages/ProfilePage.vue") },
      { path: "workouts", component: () => import("pages/WorkoutPage.vue") },
      { path: "create", component: () => import("pages/ProfileCreation.vue") },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
