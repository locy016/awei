<template>
  <div id="app">
    <van-nav-bar title="今日生活" v-if="$route.meta.headshow">
      <template slot="right">
        <span
          v-if="$store.getters.getCity"
          @click="$toast('当前位置信息')"
        >{{$store.getters.getCity.city}}</span>
        <van-icon v-else name="aim" />
      </template>
    </van-nav-bar>
    <router-view />
    <van-tabbar v-model="active">
      <router-link to="/" tag="van-tabbar-item">生活</router-link>
      <router-link to="/toxic" tag="van-tabbar-item">有毒</router-link>
      <router-link to="/dfof" tag="van-tabbar-item">签诗</router-link>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return { active: -1 };
  },
  watch: {
    $route(to, from) {
      switch (to.name) {
        case "main":
          this.active = 0;
          break;
        case "toxic":
          this.active = 1;
          break;
        case "dfof":
          this.active = 2;
          break;
        default:
          this.active = -1;
          break;
      }
    }
  },
  mounted() {
    console.log(this.$route.name);
    // 将所有 Toast 的展示时长设置为 2000 毫秒
    this.$toast.setDefaultOptions({ duration: 500 });
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
}
</style>
