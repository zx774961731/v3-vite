import {
  createRouter,
  createWebHistory,
  createWebHashHistory
} from 'vue-router';
import Home from '@/views/home.vue';
const files = import.meta.globEager('../views/**/*.js');
let configRouters = [];
for (const key in files) {
  configRouters = configRouters.concat(files[key].default);
}
const routes = [
  {
    name: '',
    path: '/',
    redirect: '/a'
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes: [...routes, ...configRouters]
});

console.log(router);
export default router;
