<!-- App.vue -->
<template>
  <header>
    <Home></Home>
  </header>
  <main>
    <router-view></router-view> <!-- 路由内容将在这里展示 -->
  </main>
</template>

<script>
import Home from '@/components/Home.vue';
export default {
  components: {
    Home,
  },
};
</script>

<style>
</style>