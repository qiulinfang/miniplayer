<!-- App.vue -->
<template>
  <div class="sidebar" :class="{ 'slide-in': isSidebarOpen }" style='position: fixed;  z-index: 999;'>
    <!-- 侧边栏内容 -->
    <el-menu default-active="2" class="el-menu-vertical-demo" :collapse="isCollapse" @open="handleOpen"
      @close="handleClose" collapse-transition=true close-on-click-outside=true>
      <el-sub-menu index="1">
        <template #title>
          <el-icon>
            <location />
          </el-icon>
          <span>Navigator One</span>
        </template>
        <el-menu-item-group>
          <template #title><span>Group One</span></template>
          <el-menu-item index="1-1">item one</el-menu-item>
          <el-menu-item index="1-2">item two</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="Group Two">
          <el-menu-item index="1-3">item three</el-menu-item>
        </el-menu-item-group>
        <el-sub-menu index="1-4">
          <template #title><span>item four</span></template>
          <el-menu-item index="1-4-1">item one</el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
      <el-menu-item index="2">
        <el-icon><icon-menu /></el-icon>
        <template #title>Navigator Two</template>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <el-icon>
          <document />
        </el-icon>
        <template #title>Navigator Three</template>
      </el-menu-item>
      <el-menu-item index="4">
        <el-icon>
          <setting />
        </el-icon>
        <template #title>Navigator Four</template>
      </el-menu-item>
    </el-menu>
  </div>

  <header>

    <el-select v-model="value" placeholder="Select" style="width: 240px">
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"
        :disabled="item.disabled" size='small' />
    </el-select>
    <button @click="toggleSidebar">Toggle Sidebar</button>

  </header>
  <div class="main-content">
    <router-view></router-view>
  </div>
  <footer class="bottom-navigation">
    <router-link to="/">首页</router-link>
    <router-link to="/Artists">歌手</router-link>
    <router-link to="/Charts">排行榜</router-link>
    <router-link to="/Profile">个人主页</router-link>
  </footer>

</template>

<script setup>
import { ref } from 'vue'
const value = ref('')
const options = [
  {
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
    disabled: true,
  },
  {
    value: 'Option3',
    label: 'Option3',
  },
  {
    value: 'Option4',
    label: 'Option4',
  },
  {
    value: 'Option5',
    label: 'Option5',
  },
]
const isSidebarOpen = ref(false);

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
};
</script>

<style>
/* 各个部分的样式 */
header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  background-color: #f1f1f1;
  padding: 20px;
  text-align: left;
}

.main-content {
  position: fixed;
  top: 60px;
  bottom: 60px;
  left: 0;
  right: 0;
  overflow-y: auto;
  /* 当内容超出时启用滚动条 */
  display: flex;
  z-index: 1;
  flex-direction: column;
  justify-content: space-around;

}

.bottom-navigation {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #f8f9fa;
  height: 60px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}

/* 侧边栏 */
.app-container {
  display: flex;
}

.sidebar {
  width: 200px;
  background-color: #f0f0f0;
  transition: transform 0.3s ease;
  transform: translateX(-100%);
}

.slide-in {
  transform: translateX(0);
}

.main-content {
  flex-grow: 1;
}

/* 可选：响应式调整，例如在窄屏幕上堆叠分段 */
@media (max-width: 600px) {
  .content {
    flex-direction: column;
    /* 改变为垂直堆叠 */
  }
}
</style>