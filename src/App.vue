<template>
  <div id="app">
    <template v-if="$route.meta.headerShow">
      <van-nav-bar :title="systemInfo().title">
        <template slot="right">
          <span
            v-if="$store.getters.getCity"
            @click="$toast('当前位置信息')"
          >{{$store.getters.getCity.city}}</span>
          <van-icon v-else name="aim" />
        </template>
      </van-nav-bar>
    </template>
    <template>
      <router-view />
    </template>
    <template v-if="$route.meta.footerShow">
      <van-tabbar v-model="active">
        <router-link
          :to="item.to"
          tag="van-tabbar-item"
          v-for="(item, index) in navigationBar().data"
          :key="index"
        >{{item.text}}</router-link>
      </van-tabbar>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: -1,
      nav: []
    };
  },
  watch: {
    //eslint-disable-next-line
    $route(to, from, next) {
      //判断所请求页面是否需要验证'to.mate.accessToken'数据
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
    //eslint-disable-next-line
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
