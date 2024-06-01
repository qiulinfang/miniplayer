<!-- HelloWorld.vue -->
<template>
  <div class="container">
    <SplitCard 
      v-for="(card, index) in cards" 
      :key="index"
      :title="card.title"
      :image="card.image"
      :items="card.items"
      @click="showChartsDetail"
    />
  </div>
  <router-view/> 
</template>

<script setup>
import SplitCard from '@/components/SplitCard.vue'; // 路径根据实际情况调整
import { useRouter } from 'vue-router';
const cards = [
  {
    title: 'Card Title 1',
    image: '/src/assets/20240519111322.png',
    items: ['Item 1', 'Item 2', 'Item 3']
  },
  {
    title: 'Card Title 2',
    image: '/src/assets/20240519111322.png',
    items: ['Another Item 1', 'Another Item 2']
  },
  {
    title: 'Card Title 2',
    image: '/src/assets/20240519111322.png',
    items: ['Another Item 1', 'Another Item 2']
  },
  {
    title: 'Card Title 2',
    image: '/src/assets/20240519111322.png',
    items: ['Another Item 1', 'Another Item 2']
  },
  {
    title: 'Card Title 2',
    image: '/src/assets/20240519111322.png',
    items: ['Another Item 1', 'Another Item 2']
  },
  {
    title: 'Card Title 2',
    image: '/src/assets/20240519111322.png',
    items: ['Another Item 1', 'Another Item 2']
  },
  {
    title: 'Card Title 2',
    image: '/src/assets/20240519111322.png',
    items: ['Another Item 1', 'Another Item 2']
  },
  {
    title: 'Card Title 2',
    image: '/src/assets/20240519111322.png',
    items: ['Another Item 1', 'Another Item 2']
  },
  {
    title: 'Card Title 2',
    image: '/src/assets/20240519111322.png',
    items: ['Another Item 1', 'Another Item 2']
  }
];

const router = useRouter();
function showChartsDetail() {
  router.push('/Charts/ChartsDetail')
};

</script>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

/* 根据需要调整响应式布局 */
@media (max-width: 600px) {
  .cards-container {
    grid-template-columns: 1fr;
  }
}
</style>