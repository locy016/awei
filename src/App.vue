<template>
  <div id="app">
    <van-nav-bar title="光阴" @click-right="onClickRight">
      <van-icon name="like-o" slot="right" />
    </van-nav-bar>
    <div id="content">
      <router-view/>
    </div>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o">
        <router-link to="/" tag="div">
          首页
        </router-link>
      </van-tabbar-item>
      <van-tabbar-item icon="more-o">
        <router-link to="About" tag="div">
          关于
        </router-link>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
export default {
  name: 'app',
  data(){
    return{
      active: 0
    }
  },
  components: {
    HelloWorld
  },
  methods:{
    onClickRight(){
      this.$toast('软件开发中,更多功能会尽快为您呈现')
    }
  }
}
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
