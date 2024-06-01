<template>
  <div class="immersive-view">
    <button @click="backToArtaists"> 返回 </button>
    <h1>immersive-view</h1>
  </div>
</template>


<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
function backToArtaists() {
  router.back();
}

</script>

<style scoped>
.immersive-view {
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
  /* 添加渐变等其他样式 */
}
</style>