<template>
  <div class="Dfof">
    <div class="logo">
      <span class="logo-text">签诗</span>
      <label class="ml-2 color-gray">预言命运的打油诗</label>
    </div>
    <div class="dfof m-4">
      <div v-if="Object.keys(dfof).length===0">
        <small>{{ tips }}</small>
      </div>
      <div v-else>
        <div class="color-gold cont">{{dfof.brief}}</div>
        <small class="color-gray">{{dfof.title}} [{{dfof.zg}}]</small>
        <p>
          <b style="font-size:2rem;">{{dfof.content}}</b>
        </p>
        <p>
          <a :href="'https://www.baidu.com/s?wd=' + dfof.content">不懂? 问度娘</a>
        </p>
      </div>
    </div>
    <div class="refresh">
      <van-button
        round
        type="primary"
        class="w-50"
        @click="drawBtn"
        color="linear-gradient(to right, #B8860B, #DAA520)"
      >点一点~</van-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tips: "命里有时终须有,命里无时莫强求",
      dfof: {}
    };
  },
  methods: {
    /* 渲染按钮(抽签功能未完善) */
    drawBtn() {
      this.dfof = {};
      const rand = parseInt(Math.random() * 10000) + 1;
      if (rand <= 100) {
        //随机数满足
        const toast = this.$toast.loading({
          duration: 0, // 持续展示 toast
          forbidClick: true, // 禁用背景点击
          loadingType: "spinner",
          message: "稍等 3 s"
        });
        let second = 3;
        const timer = setInterval(() => {
          second--;
          if (second) {
            toast.message = `稍等 ${second} s`;
          } else {
            clearInterval(timer);
            this.$toast.clear();
            var d = this.DrawPoetryArray(rand);
            this.dfof = {
              show: true,
              title: d.index,
              content: d.content,
              zg: d.zg,
              brief: d.brief
            };
          }
        }, 1000);
      } else {
        //随机数未满足
        this.$toast("时机未到...", { duration: 500 });
      }
    }
  }
};
</script>

<style scoped>
a {
  font-size: 11px;
  color: #a7a7a7;
}
.logo {
  width: auto;
  margin: 1rem 0 2.5rem 1rem;
  text-align: left;
  box-shadow: 1px 1px 1px #777;
}
.logo-text {
  padding: 0.4rem;
  font-size: 1.5rem;
  color: aliceblue;
  background-color: #b8860b;
  text-shadow: 1px 1px 1px #333;
}
.dfof {
  border: 0px solid #f1f1f1;
}
.dfof .cont {
  font-size: 4rem;
  font-weight: 400;
  box-sizing: border-box;
  line-height: 4;
}
.refresh {
  position: absolute;
  bottom: 5rem;
  width: 100%;
}
</style>