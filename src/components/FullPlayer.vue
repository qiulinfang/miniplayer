<template>
  <transition name="fade">

    <div class="full-player" v-show="isFullPlayerVisible">
      全屏播放器
      <audio ref="audioPlayer" @timeupdate="updateProgress"></audio>
      <div class="cd-player" ref="cdPlayerRef">
        <div class="cd" ref="cdRef"></div>
      </div>

      <button @click="toggleFullScreen">返回迷你播放器</button>
      <input type="range" min="0" max="100" value="0" ref="progressBarRef" @input="onProgressChange"
        class="progress-bar" id="progressBar">
      <span id="currentTime">{{ currentTime }}</span> / <span id="duration">{{ duration }}</span>

      <button @click="changePlayMode">{{ playMode }}</button>
      <button @click="playPrevious">上一首</button>
      <div class="controls">
        <button @click="togglePlay">
          {{ isPlaying ? 'Play' : 'Pause' }}
        </button>
      </div>
      <button @click="playNext">下一首</button>

    </div>
  </transition>
  <transition name="fade">
    <div v-show="!isFullPlayerVisible" class="mini-player-ui">
      <MiniPlayer @show-main-player="showMainPlayer" @toggle-play="togglePlay" @play-previous="playPrevious"
        @play-next="playNext" @next-song="playNext" @prev-song="playPrevious" />
    </div>
  </transition>
</template>

<script>

import audioSrc1 from '@/assets/fushishanxia.mp3';
import audioSrc2 from '@/assets/M500004JWieT4ajgNo.mp3';
import audioSrc3 from '@/assets/M500004NdzO53WMDKP.mp3';
import MiniPlayer from './MiniPlayer.vue';
const PLAY_MODES = {
  RAMDOM: 'random',
  LOOP: 'loop',
  SINGLE: 'single',
};

export default {
  components: {
    MiniPlayer,
  },
  data() {
    return {
      isPlaying: false, // 初始播放状态设为false，即暂停状态
      audioList: [audioSrc1, audioSrc2, audioSrc3,],
      currentSongIndex: 0,
      playMode: PLAY_MODES.LOOP, // 添加播放模式，默认为顺序播放
      modeIndex: 0,
      currentTime: 0,
      duration: 0, // 获取音频时长
      isFullPlayerVisible: false, // 初始状态下显示
    };
  },
  methods: {
    showMainPlayer() {
      this.isFullPlayerVisible = true;
    },
    togglePlay() {
      if (this.isPlaying) {
        this.$refs.audioPlayer.pause();
        this.$refs.cdPlayerRef.classList.add('paused'); // 添加类以暂停旋转
        this.$refs.cdRef.classList.add('paused'); // 添加类以暂停旋转
      } else {
        this.$refs.audioPlayer.play();
        this.$refs.cdPlayerRef.classList.remove('paused'); // 移除类以恢复旋转
        this.$refs.cdRef.classList.remove('paused'); // 移除类以恢复旋转
      }
      this.isPlaying = !this.isPlaying;
    },

    playPrevious() {
      switch (this.playMode) {
        case PLAY_MODES.LOOP:
          this.currentSongIndex = (this.currentSongIndex - 1 + this.audioList.length) % this.audioList.length;
          break;
        case PLAY_MODES.SINGLE:
          this.$refs.audioPlayer.currentTime = 0; // 跳转到歌曲开头
          break; // 单曲循环不需要改变索引
        case PLAY_MODES.RAMDOM:
          do {
            // 注意：这里向下取整可能导致索引为负数，需要调整以循环到列表末尾
            this.currentSongIndex = Math.floor(Math.random() * this.audioList.length);
          } while (this.currentSongIndex === this.currentSongIndex); // 确保不重复播放当前歌曲
          this.currentSongIndex = this.currentSongIndex;
          break;
      }
      this.$refs.audioPlayer.src = this.audioList[this.currentSongIndex];
      this.$refs.audioPlayer.play();
      this.isPlaying = true;
    },
    playNext() {
      switch (this.playMode) {
        case PLAY_MODES.LOOP:
          this.currentSongIndex = (this.currentSongIndex + 1) % this.audioList.length;
          break;
        case PLAY_MODES.SINGLE:
          this.$refs.audioPlayer.currentTime = 0; // 跳转到歌曲开头
          break; // 单曲循环不需要改变索引
        case PLAY_MODES.RAMDOM:
          do {
            // 注意：这里向下取整可能导致索引为负数，需要调整以循环到列表末尾
            this.currentSongIndex = Math.floor(Math.random() * this.audioList.length);
          } while (this.currentSongIndex === this.currentSongIndex); // 确保不重复播放当前歌曲
          this.currentSongIndex = this.currentSongIndex;
          break;
      }
      this.$refs.audioPlayer.src = this.audioList[this.currentSongIndex];
      this.$refs.audioPlayer.play();
      this.isPlaying = true;
    },
    changePlayMode() {
      this.modeIndex = (this.modeIndex + 1) % 3; // 循环切换模式
      switch (this.modeIndex) {
        case 0:
          this.playMode = PLAY_MODES.LOOP;
          break;
        case 1:
          this.playMode = PLAY_MODES.SINGLE;
          break;
        case 2:
          this.playMode = PLAY_MODES.RAMDOM;
          break;
      }
    },
    // ...其他方法...
    toggleFullScreen() {
      this.isFullPlayerVisible = !this.isFullPlayerVisible;
    },
    updateProgress() {
      if (this.$refs.audioPlayer.currentTime > 0) {
        const progressPercent = (this.$refs.audioPlayer.currentTime / this.$refs.audioPlayer.duration) * 100;
        this.$refs.progressBarRef.value = progressPercent;
        this.currentTime = this.formatTime(this.$refs.audioPlayer.currentTime);
        this.duration = this.formatTime(this.$refs.audioPlayer.duration);
      }
    },

    formatTime(seconds) {
      const minutes = Math.floor(seconds / 60);
      const remainderSeconds = Math.floor(seconds % 60);
      return `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
    },

    onProgressChange() {
      const seekTime = this.$refs.audioPlayer.duration * (this.$refs.progressBarRef.value / 100);
      this.$refs.audioPlayer.currentTime = seekTime;
    },

    mounted() {
      this.$refs.audioPlayer.src = this.audioList[this.currentSongIndex];
      alert('FullPlayer组件加载完成')
      console.log('FullPlayer组件加载完成')
    },
  }
}
</script>

<style scoped>
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

.full-player {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #45c5e4;
}

.cd-player {
  display: flex;
  justify-content: center;
  /* 水平居中 */
  align-items: center;
  /* 垂直居中 */
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
  background-color: aliceblue;

  /* 让 .cd-player 旋转 */
  animation: rotateElement 10s linear infinite;
  animation-play-state: running;
  /* 初始状态为暂停 */
}

.cd {
  width: 70%;
  height: 70%;
  background-image: url('@/assets/20240519111322.png');
  /* 替换为你的CD图片URL */
  background-size: cover;
  /* 确保图片填满CD形状 */
  border-radius: 50%;

  /* CD 图像也应用相同的旋转动画 */
  animation: rotateElement 60s linear infinite;
}

.paused {
  animation-play-state: paused;
}

/* 定义旋转动画 */
@keyframes rotateElement {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

@keyframes pauseElement {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(0deg);
  }
}

.progress-bar {
  width: 100%;
  height: 10px;
}

#currentTime,
#duration {
  display: inline-block;
  width: 50px;
}
</style>