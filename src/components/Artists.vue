<template>
  <dl v-for="n in 10" :key="n">
    <dt>A</dt>
    <dd v-for="n in 10" :key="n" style="text-align: center; position: relative;" @click="showArtistsDetail">
      <div
        style="position: absolute; left: 0; border-radius: 50%; width: 40px; height: 40px; background-color: aliceblue; ">
      </div>
      Apparat
    </dd>
  </dl>
  <router-view></router-view>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();

const showArtistsDetail = function () {
  router.push('/Artists/ArtistsDetail');
  console.log('router.push')
};
</script>

<style scoped>
#one {
  position: sticky;
  top: 10px;
}

* {
  box-sizing: border-box;
}

dl {
  margin: 0;
  padding: 24px 0 0 0;
}

dt {
  background: #b8c1c8;
  border-bottom: 1px solid #989ea4;
  border-top: 1px solid #717d85;
  color: #fff;
  font:
    bold 18px/21px Helvetica,
    Arial,
    sans-serif;
  margin: 0;
  padding: 2px 0 0 12px;
  position: -webkit-sticky;
  position: sticky;
  z-index: 1;
  top: -1px;
}

dd {
  font:
    bold 20px/45px Helvetica,
    Arial,
    sans-serif;
  margin: 0;
  padding: 0 0 0 12px;
  white-space: nowrap;
}

dd+dd {
  border-top: 1px solid #ccc;
}
</style>