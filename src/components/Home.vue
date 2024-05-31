<template>
  <div class="flex-segment">段落1
    <div>
      <p>User Name: {{ user.name }}</p>
      <p>User Age: {{ user.age }}</p>
      <p>User Email: {{ user.email }}</p>
    </div>
  </div>
  <div class="flex-segment">段落2
    <button type="button" class="btn btn-primary" @click="showMainPlayer">播放器</button>
  </div>
  <router-view></router-view>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

const router = useRouter();
const user = ref({});

onMounted(async () => {
  try {
    const response = await axios.get('/api/user');
    user.value = response.data.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
});

const showMainPlayer = function () {
  router.push('/FullPlayer');
};
</script>

<style>
.flex-segment {
  flex: 1;
  /* 让每个段落自动填充可用空间 */
  padding: 20px;
  /* 内边距，让内容更舒适 */
  box-sizing: border-box;
  /* 包含内边距和边框在宽度计算中 */
  text-align: center;
  /* 文本居中 */
}
</style>
