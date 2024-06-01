<template>
  <div class="mini-player" @click="showMainPlayer" @touchstart="ontouchstart" @touchend="ontouchend">
    <button @click.stop="togglePlay">
      {{ isPlaying ? 'Play' : 'Pause' }}
    </button>
    <button @click.stop="playPrevious">上一首</button>
    <button @click.stop="playNext">下一首</button>
    <!-- 环形进度条 -->
    <el-progress type="circle" :percentage="0" width="45"/>

  </div>
</template>

<script>
export default {
  props: {
    isPlaying: Boolean,
    currentSongIndex: Number,
    audioList: Array,
    playMode: String,
  },
  data() {
    return {
      startX: 0,
      endX: 0,
    };
  },
  methods: {
    playPrevious() {
      this.$emit('play-previous'); // 发送事件到父组件，播放上一首
    },
    playNext() {
      this.$emit('play-next'); // 发送事件到父组件，播放下一首
    },
    togglePlay() {
      this.$emit('toggle-play'); // 发送事件到父组件，切换播放状态
    },
    showMainPlayer() {
      this.$emit('show-main-player'); // 发送事件到父组件，显示主播放器
    },
    ontouchstart(e) {
      this.startX = e.touches[0].clientX;
    },
    ontouchend(e) {
      this.endX = e.changedTouches[0].clientX;
      // 判断滑动方向并切换歌曲
      if (Math.abs(this.startX - this.endX) > 20) { // 阈值可以调整
        if (this.startX < this.endX) {
          this.$emit('next-song'); // 向右滑动，播放下一首
        } else {
          this.$emit('prev-song'); // 向左滑动，播放上一首
        }
      }
      this.startX = null;
      this.endX = null;

    },
  },
};
</script>

<style scoped>
/* 添加过渡样式 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter,
.fade-leave-to

/* .fade-leave-active below version 2.1.8 */
  {
  opacity: 0;
}

/* 保持原有样式不变 */
.mini-player {
  width: 100%;
  height: 50px;
  background-color: #65ef7c;
  text-align: center;
  padding: 10px;
  border: 1px solid #ccc;
}

/* 环形进度条 */
.el-progress--circle {
  margin-right: 15px;
}
</style>