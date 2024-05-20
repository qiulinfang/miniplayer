import { createRouter, createWebHistory } from 'vue-router';
import FullPlayer from '@/components/FullPlayer.vue';
import Home from '@/components/Home.vue' 
const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/FullPlayer', name: 'FullPlayer', component: FullPlayer },
];


const router = createRouter({
  history: createWebHistory(), // 使用HTML5 History API
  routes, // 简写，等于 routes: routes
});

export default router;