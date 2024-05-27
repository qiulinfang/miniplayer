<template>
  <button type="button" class="btn btn-primary" @click="showMainPlayer">播放器</button>
  <el-button>我是 ElButton</el-button>
</template>

<script>
import { ElButton } from 'element-plus'

export default {
  name: "Home",
  components: { ElButton },

  methods: {
    showMainPlayer() {
      this.$router.push('/FullPlayer');
    },
  }
}
</script>