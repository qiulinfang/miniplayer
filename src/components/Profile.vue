<!-- HelloWorld.vue -->
<template>
  <div class="hello">
    <h1>{{ message }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: '欢迎来到Profile!'
    };
  }
};
</script>

<style scoped>
.hello {
  color: #42b983;
  text-align: center;
}
</style>