import { createRouter, createWebHashHistory } from 'vue-router';
const routerHashHistory = createWebHashHistory();
const routes = [
  {
    path: '/',
    name: 'home',
    component: import('../views/Home.vue')
  }
];
const router = createRouter({
  history: routerHashHistory,
  routes
});
export default router;
