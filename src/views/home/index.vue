<template>
  <div class="Main">
    <!-- 地图背景 -->
    <div class="backgroundmap">
      <div id="container" style="min-height: 260px;"></div>
      <!-- 绘制浮动日期时间内容 -->
      <div class="drawcontent">
        <van-row>
          <van-col span="16">
            <div class="oc-calendar">
              <p>{{ GetFormatYear() + "年" + GetFormatMonth() + "月" }} {{ GetLunarCalendar() }}</p>
              <div class="text-title">{{ GetFormatDay() }}</div>
              <p>
                <small>{{ GetWeek() }}</small>
                <small class="ml-2 mr-2">|</small>
                <small>{{ GetWeekEnglish() }}</small>
              </p>
            </div>
          </van-col>
          <van-col span="8">
            <div class="oc-clock mt-4">
              <van-circle
                class="clock-circle"
                v-model="clock.progress"
                :rate="clock.progress"
                :speed="100"
                :text="clock.second"
                layer-color="rgba(0,0,155,.15)"
                :color="{'0%': '#3fecff','100%': '#6149f6'}"
                fill="rgba(255,255,255,.35)"
                size="85px"
                :stroke-width="170"
              />
            </div>
          </van-col>
        </van-row>
        <van-collapse v-model="weather.activeNames" :border="false">
          <van-collapse-item name="1" icon="volume-o">
            <template slot="title">
              <span v-if="$store.getters.getCity">{{$store.getters.getCity.city}}</span>
              <span class="ml-1 mr-2">实时天气</span>
              <b class="mr-2">{{weather.lives.weather}}</b>
              <b>{{weather.lives.temperature}}</b>
              <small>°C</small>
              <small class="ml-1">| 湿度{{weather.lives.humidity}}% | 风向{{weather.lives.winddirection + weather.lives.windpower}}级</small>
            </template>
            <div>
              <van-steps :active="0" active-icon="arrow" inactive-icon="arrow">
                <van-step v-for="(item,index) in weather.forecasts" :key="index">
                  <!-- 未来天气预测 -->
                  <div class="mt-4 pt-4 text-center">
                    <p>{{weekToString(index)}}</p>
                    <p>{{item.dayweather}}</p>
                    <p>{{item.nighttemp + "~" +item.daytemp + "°C"}}</p>
                  </div>
                </van-step>
              </van-steps>
            </div>
          </van-collapse-item>
        </van-collapse>
      </div>
      <div class="copywriting">
        <h1>Copywriting</h1>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
/* eslint-disable */
export default {
  name: "home",
  data() {
    return {
      clock: {
        second: "00:00",
        progress: 0
      },
      gradientColor: {
        "0%": "#3fecff",
        "100%": "#6149f6"
      },
      weather: {
        activeNames: ["-1"],
        lives: {},
        forecasts: []
      }
    };
  },
  methods: {
    /* 定时刷新 */
    refreshFlow() {
      setTimeout(() => {
        this.clock.progress = parseInt((this.GetSecond() / 60) * 100);
        this.clock.second =
          this.GetFormatHour() +
          ":" +
          this.GetFormatMinute() +
          ":" +
          this.GetSecond();
        this.refreshFlow(); //调用自身
      }, 1000);
    },
    /* 位置信息 */
    drawIp() {
      this.ipInfo(this, {}, res => {
        if (res.status == 1) {
          this.$store.commit("setCity", res);
          this.drawbaseWeathor(this.$store.getters.getCity.adcode);
        }
      });
    },
    /* 天气信息 */
    drawbaseWeathor(adcode) {
      this.weatherInfo(
        this,
        {
          city: adcode, // 输入城市的adcode，adcode信息可参考城市编码表
          extensions: "base", // 可选值：base/all base:返回实况天气all:返回预报天气
          output: "JSON" // 	可选值：JSON,XML
        },
        res => {
          if (res.status == "1") this.weather.lives = res.lives[0];
        }
      );
      this.weatherInfo(
        this,
        {
          city: adcode,
          extensions: "all",
          output: "JSON"
        },
        res => {
          if (res.status == "1")
            this.weather.forecasts = res.forecasts[0].casts;
        }
      );
    },
    weekToString(int) {
      var array = new Array(
        "今天",
        "明天",
        "后天",
        "之后",
        "之后",
        "之后",
        "之后",
        "之后"
      );
      return array[int];
    }
  },
  created() {
    this.drawIp();
    this.refreshFlow();
  },
  mounted() {
    /* 修改地图高度适应屏幕大小 */
    var div = (document.getElementById("container").style.minHeight =
      window.screen.height - 96 + "px");
    /* 加载地图 */
    var map = new AMap.Map("container", {
      zoom: 11, //级别
      pitch: 35, // 地图俯仰角度，有效范围 0 度- 83 度
      viewMode: "3D", //使用3D视图
      mapStyle: "amap://styles/whitesmoke" //设置地图的显示样式
      //center: [116.397428, 39.90923],//中心点坐标
    });
  }
};
</script>

<style scoped>
.backgroundmap {
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 1;
}
.backgroundmap #container {
  width: 100%;
  background: #f7f7f7;
}
.backgroundmap .drawcontent {
  position: absolute;
  top: 1.7rem;
  left: 0;
  z-index: 99;
}
.backgroundmap .drawcontent {
  width: 40%;
  margin: 0 30%;
  padding: 3%;
  border-radius: 1.5rem;
  background-color: rgba(248, 252, 255, 0.5);
  border: 0px solid rgba(147, 204, 253, 0.95);
  box-shadow: 3px 3px 5px rgba(148, 142, 187, 0.55);
}
.backgroundmap .drawcontent .clock-circle {
  margin: 1rem auto;
}
.backgroundmap .copywriting {
  position:absolute;
  width: 90%;
  margin: 0 5%;
  border-radius: 1.5rem;
  background-color: rgba(248, 252, 255, 0.5);
  border: 0px solid rgba(147, 204, 253, 0.95);
  box-shadow: 1px 1px 3px rgba(148, 142, 187, 0.55);
}
.tips {
  width: 85%;
  padding: 0.5rem;
  margin: 1.5rem auto;
  border-radius: 0rem;
  /* background-color: rgba(248, 252, 255, 0.5);
  border-bottom: 1px solid rgba(147, 204, 253, 0.95);
  box-shadow: 3px 3px 5px rgba(148, 142, 187, 0.35); */
}
</style>