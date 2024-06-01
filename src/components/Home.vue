<template>
  <!-- 走马灯 -->
  <div class="block text-center">
    <span class="demonstration">
      Switch when indicator is hovered (default)
    </span>
    <el-carousel height="150px">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3 class="small justify-center" text="2xl">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
  </div>
  <!-- 间距组件 -->
  <el-slider v-model="size" />
  <el-space direction="vertical" :size="size">
    <el-card v-for="i in 10" :key="i" class="box-card" style="width: 250px">
      <template #header>
        <div class="card-header">
          <span>Card name</span>
          <el-button class="button" text>Operation button</el-button>
        </div>
      </template>
      <div v-for="o in 4" :key="o" class="text item">
        {{ 'List item ' + o }}
      </div>
      <p>User Name: {{ user.name }}</p>
      <p>User Age: {{ user.age }}</p>
      <p>User Email: {{ user.email }}</p>
      <button type="button" class="btn btn-primary" @click="showMainPlayer">播放器</button>
    </el-card>
  </el-space>
  <router-view></router-view>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

const size = ref(20)
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
/* 走马灯 */
.demonstration {
  color: var(--el-text-color-secondary);
}

.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

</style>
