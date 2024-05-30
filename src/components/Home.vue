<template>
  <div class="flex-segment">段落1
    <button type="button" class="btn btn-primary" @click="showMainPlayer">播放器</button>
  </div>
  <div class="flex-segment">段落2</div>
  <router-view></router-view>
</template>

<script>

export default {
  name: "Home",

  methods: {
    showMainPlayer() {
      this.$router.push('/FullPlayer');
    },
  }
}
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
