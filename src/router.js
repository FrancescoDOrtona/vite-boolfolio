import { createRouter, createWebHistory } from "vue-router";
import Homepage from './pages/Homepage.vue';
import PageIndex from './pages/projects/index.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: Homepage,
    },
    {
      path: "/projects",
      name: "projects",
      component: PageIndex,
    },
  ],
});
export { router };
