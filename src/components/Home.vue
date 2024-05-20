<template>
  <button @click="showMainPlayer">播放器</button>
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