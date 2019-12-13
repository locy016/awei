<template>
  <div class="Toxic">
    <div class="logo">
      <span class="logo-text">毒鸡汤</span>
      <label class="ml-2 color-gray">真正的猛士,每天干一碗毒鸡汤!</label>
    </div>
    <div class="tips m-4">
      <small>{{ tips }}</small>
    </div>
    <div class="refresh">
      <van-button
        round
        type="primary"
        class="w-50"
        @click="drawText"
        color="linear-gradient(to right, #07c160, #07c160)"
      >再来一碗！</van-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tips: "壮士可要来一碗!"
    };
  },
  methods: {
    drawText() {
      //随机数满足
      const toast = this.$toast.loading({
        duration: 0, // 持续展示 toast
        forbidClick: true, // 禁用背景点击
        loadingType: "spinner",
        message: "满上~稍等2秒"
      });
      let second = 2;
      const timer = setInterval(() => {
        second--;
        if (second) {
          toast.message = `满上~稍等${second}秒`;
        } else {
          clearInterval(timer);
          this.$toast.clear();
          this.getText();
        }
      }, 1000);
    },
    getText() {
      this.tips = this.GetWeekNetworkExtend();
    }
  },
  created() {
    this.getText();
  }
};
</script>

<style scoped>
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
  background-color: #07c160;
  text-shadow: 1px 1px 1px #333;
}
.tips {
  font-size: 1.7rem;
  box-sizing: border-box;
  text-align: left !important;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
}
.refresh {
  position: absolute;
  bottom: 5rem;
  width: 100%;
}
</style>