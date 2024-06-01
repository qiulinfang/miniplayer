import { createRouter, createWebHistory } from 'vue-router';
import FullPlayer from '@/components/FullPlayer.vue';
import Home from '@/components/Home.vue'
import Artists from '@/components/Artists.vue'
import Charts from '@/components/Charts.vue'
import Profile from '@/components/Profile.vue'
import ArtistsDetail from '@/components/ArtistsDetail.vue'
import ChartsDetail from '@/components/ChartsDetail.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    components: {
      default: Home,
    }
  },
  {
    path: '/FullPlayer',
    name: 'FullPlayer',
    component: FullPlayer
  },
  {
    path: '/Artists',
    name: 'Artists',
    component: Artists,
    children: [
      {
        path: 'ArtistsDetail',
        name: 'ArtistsDetail',
        component: ArtistsDetail
      }
    ]
  },
  {
    path: '/Charts',
    name: 'Charts',
    component: Charts,
    children: [
      {
        path: 'ChartsDetail',
        name: 'ChartsDetail',
        component: ChartsDetail
      }
    ]
  },
  {
    path: '/Profile',
    name: 'Profile',
    component: Profile
  },
];


const router = createRouter({
  history: createWebHistory(), // 使用HTML5 History API
  routes, // 简写，等于 routes: routes
});

export default router;