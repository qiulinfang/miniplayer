<!-- App.vue -->
<template>
  <div class="flex-container">
    <header>页头</header>
    <main class="content">
      <router-view></router-view>
    </main>

    <footer class="bottom-navigation">
      <router-link to="/">首页</router-link>
      <router-link to="/Artists">歌手</router-link>
      <router-link to="/Charts">排行榜</router-link>
      <router-link to="/Profile">个人主页</router-link>
    </footer>
  </div>
</template>

<script>
export default {

};
</script>

<style>
/* Flexbox容器样式 */
.flex-container {
  display: flex;
  flex-direction: column;
  /* 设置为列方向布局 */
  min-height: 100%;
  /* 保证至少占据整个视口高度 */
}

/* 各个部分的样式 */
header {
  background-color: #f1f1f1;
  padding: 20px;
  text-align: center;
}

.bottom-navigation {
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #f8f9fa;
  height: 60px;
}

.nav-item {
  text-decoration: none;
  color: #333;
  font-size: 18px;
  padding: 10px;
}

.content {
  display: flex;
  /* 启用 Flexbox 布局 */
  justify-content: space-between;
  /* 水平间距均匀分布 */
}



/* 可选：响应式调整，例如在窄屏幕上堆叠分段 */
@media (max-width: 600px) {
  .content {
    flex-direction: column;
    /* 改变为垂直堆叠 */
  }

  .flex-segment {
    margin-bottom: 20px;
    /* 添加底部外边距以分隔段落 */
  }
}
</style>