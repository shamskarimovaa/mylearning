import { createRouter, createWebHistory } from "vue-router";

import FirstPage from "./pages/FirstPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/firstpage/1/1" },

    { path: "/firstpage", component: FirstPage },

    { path: "/firstpage/:id", component: FirstPage },

    { path: "/firstpage/:id/:detailsId", component: FirstPage },

  ],
});

export default router;
