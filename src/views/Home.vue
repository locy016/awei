<template>
  <div class="home">
    <HelloWorld msg="光阴" />
    <div class="datetime">
      <div>
        <b style="letter-spacing:1px;text-shadow:3px 3px 3px #CCC;">{{ data.Gregoriancalendar }}</b>
        <p>
          <small>{{ data.week }}</small>
          <small>({{ data.weekenglish }})</small>
        </p>
      </div>
      <div class="oc-clock">
        <van-circle
          class="clock-circle"
          v-model="clock.progress"
          :rate="clock.progress"
          :speed="100"
          :text="clock.second"
          layer-color="rgba(0,0,155,.15)"
          :color="{'0%': '#3fecff','100%': '#6149f6'}"
          fill="rgba(255,255,255,1)"
          size="110px"
          :stroke-width="170"
        />
      </div>
      <div>
        <small>{{ data.lunarcalendar }}</small>
      </div>
    </div>
    <div class="tips">
      <small>{{data.weeknetworkextend}}</small>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  data() {
    return {
      clock: {
        second: "00:00",
        progress: 0
      },
      data: {
        Gregoriancalendar: "--",
        lunarcalendar: "--",
        week: "星期",
        weekenglish: "--",
        weeknetworkextend: "--"
      },
      gradientColor: {
        "0%": "#3fecff",
        "100%": "#6149f6"
      }
    };
  },
  components: {
    HelloWorld
  },
  methods: {
    refreshFlow() {
      setTimeout(() => {
        this.clock.progress = parseInt((this.GetSecond() / 60) * 100);
        this.clock.second =
          this.GetFormatHour() +
          ":" +
          this.GetFormatMinute() +
          ":" +
          this.GetSecond();
        this.data = {
          Gregoriancalendar: this.GetFormatDate(),
          lunarcalendar:
            this.GetLunarCalendar() + " " + "(" + this.GetLunarHour() + ")",
          week: this.GetWeek(),
          weekenglish: this.GetWeekEnglish(),
          weeknetworkextend: this.data.weeknetworkextend
        };
        this.refreshFlow(); //调用自身
      }, 1000);
    },
    drawBtn() {
      const rand = parseInt(Math.random() * 10000) + 1;
      if (rand <= 100) {
        //随机数满足
        const toast = this.$toast.loading({
          duration: 0, // 持续展示 toast
          forbidClick: true, // 禁用背景点击
          loadingType: "spinner",
          message: "稍稍等 3 s"
        });
        let second = 3;
        const timer = setInterval(() => {
          second--;
          if (second) {
            toast.message = `稍稍等 ${second} s`;
          } else {
            clearInterval(timer);
            this.$toast.clear();
            var d = this.DrawPoetryArray(rand);
            this.draw = {
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
      }
    }
  },
  created() {
    this.refreshFlow();
    this.data.weeknetworkextend = this.GetWeekNetworkExtend();
  }
};
</script>

<style scoped>
.datetime {
  width: 65%;
  padding: 1rem;
  margin: 1.5rem auto;
  border-radius: 1.5rem;
  background-color: rgba(248, 252, 255, 0.5);
  border: 5px solid rgba(147, 204, 253, 0.95);
  box-shadow: 3px 3px 5px rgba(148, 142, 187, 0.35);
}
.clock-circle {
  margin: 1rem auto;
}
.tips {
  width: 85%;
  padding: .5rem;
  margin: 1.5rem auto;
  border-radius: 0rem;
  /* background-color: rgba(248, 252, 255, 0.5);
  border-bottom: 1px solid rgba(147, 204, 253, 0.95);
  box-shadow: 3px 3px 5px rgba(148, 142, 187, 0.35); */
}
</style>