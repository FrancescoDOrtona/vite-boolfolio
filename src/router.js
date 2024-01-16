import { createRouter, createWebHistory } from "vue-router";
import Homepage from './pages/Homepage.vue';
import PageIndex from './pages/projects/index.vue'
import ContactPage from './pages/Contacts.vue'
import ShowPage from './pages/projects/Show.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Homepage,
    },
    {
      path: '/projects',
      name: 'projects',
      component: PageIndex,
    },
    {
        path: '/contacts',
        name: 'contacts',
        component: ContactPage
    },
    {
        path: '/project/:slug',
        name: 'project.show',
        props: true,
        component: ShowPage
    }
  ],
});
export { router };
