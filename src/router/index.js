import { createRouter, createWebHistory } from 'vue-router';
import FullPlayer from '@/components/FullPlayer.vue';
import Home from '@/components/Home.vue'
import Artists from '@/components/Artists.vue'
import Charts from '@/components/Charts.vue'
import Profile from '@/components/Profile.vue'


const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/FullPlayer', name: 'FullPlayer', component: FullPlayer },
  { path: '/Artists', name: 'Artists', component: Artists },
  { path: '/Charts', name: 'Charts', component: Charts },
  { path: '/Profile', name: 'Profile', component: Profile },
];


const router = createRouter({
  history: createWebHistory(), // 使用HTML5 History API
  routes, // 简写，等于 routes: routes
});

export default router;