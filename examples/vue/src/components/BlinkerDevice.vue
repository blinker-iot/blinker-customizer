<template>
  <div class="device-box">
    <div class="device-bg"></div>
    <!-- <div>实时状态</div> -->
    <div class="state-box">
      <div class="item block">
        <div class="title">设备连接数</div>
        <div class="number">7</div>
      </div>
      <div class="item block">
        <div class="title">消息发送条数</div>
        <div class="number">45</div>
      </div>
      <div class="item block">
        <div class="title">服务运行时间</div>
        <div class="number">05:13:57</div>
      </div>
      <div class="item">
        <div class="gauge-box gauge-container" id="gauge1">
          <div class="label">负载</div>
          <div class="label2">%</div>
        </div>
      </div>
      <div class="item">
        <div class="gauge-box gauge-container" id="gauge2">
          <div class="label">CPU</div>
          <div class="label2">%</div>
        </div>
      </div>
      <div class="item">
        <div class="gauge-box gauge-container" id="gauge3">
          <div class="label">内存</div>
          <div class="label2">%</div>
        </div>
      </div>
    </div>
    <div class="img-box">
      <img class="device-img" src="../assets/nuc.png" />
    </div>
    <!-- <div class="chart-box">
      <div>
        <div>
          <div>CPU使用率</div>
        </div>
        <div>内存使用率</div>
        <div>CPU使用率</div>
        <div>消息发送条数</div>
      </div>
    </div>-->
    <div class="switch" v-on:click="clickSwitch">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path
          d="M388.5 46.3C457.9 90.3 504 167.8 504 256c0 136.8-110.8 247.7-247.5 248C120 504.3 8.2 393 8 256.4 7.9 168 54 90.3 123.5 46.3c5.8-3.7 13.5-1.8 16.9 4.2l3.9 7c3.1 5.6 1.3 12.6-4.1 16C79.9 112 40 179.6 40 256c0 119.9 97.3 216 216 216 119.9 0 216-97.3 216-216 0-77-40.1-144.2-100.3-182.4-5.4-3.4-7.2-10.5-4.1-16l3.9-7c3.4-6.1 11.2-7.9 17-4.3zM272 276V12c0-6.6-5.4-12-12-12h-8c-6.6 0-12 5.4-12 12v264c0 6.6 5.4 12 12 12h8c6.6 0 12-5.4 12-12z"
        />
      </svg>
    </div>
  </div>
</template>

<script>
// import Vue from 'vue';
import { blinker, send2Device } from "../blinker";
var Gauge = require("svg-gauge");
export default {
  name: "BlinkerDevice",
  props: {
    deviceId: String
  },
  // data(){
  //   // return{
  //   //   headerHeight:this.BlinkerHeaderHeight
  //   // }
  // },
  mounted: function() {
    Gauge(document.getElementById("gauge1"), {
      max: 100,
      value: 20,
      valueClass: "value-lable",
      color: value => {
        if (value < 25) {
          return "#5ee432";
        } else if (value < 50) {
          return "#fffa50";
        } else if (value < 75) {
          return "#f7aa38";
        } else {
          return "#ef4655";
        }
      }
    });
    Gauge(document.getElementById("gauge2"), {
      max: 100,
      value: 45,
      valueClass: "value-lable",
      color: value => {
        if (value < 25) {
          return "#5ee432";
        } else if (value < 50) {
          return "#fffa50";
        } else if (value < 75) {
          return "#f7aa38";
        } else {
          return "#ef4655";
        }
      }
    });
    Gauge(document.getElementById("gauge3"), {
      max: 100,
      value: 80,
      valueClass: "value-lable",
      color: value => {
        if (value < 25) {
          return "#5ee432";
        } else if (value < 50) {
          return "#fffa50";
        } else if (value < 75) {
          return "#f7aa38";
        } else {
          return "#ef4655";
        }
      }
    });
  },
  methods: {
    clickSwitch: function(event) {
      send2Device({"switch":"on"});
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.device-box {
  color: #fff;
}
.device-bg {
  margin: 0;
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: radial-gradient(
    circle,
    rgb(107, 107, 107),
    rgb(42, 51, 58),
    rgb(4, 9, 14)
  );
}
.img-box {
  margin-top: 100px;
}
.device-img {
  width: 60vw;
}
.state-box {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  font-size: 12px;
  color: #999999;
  .item {
    margin-top: 50px;
    width: 28vw;
    height: 8vh;
    display: flex;
    justify-content: center;
    align-items: center;
    // border: 1px solid #ccc;
    flex-direction: column;
    .gauge-box {
      width: 100%;
      position: relative;
      .label {
        font-size: 12px;
        font-weight: 100;
        width: 100%;
        text-align: center;
        position: absolute;
        top: 22%;
        color: rgb(153, 153, 153);
        display: inline-block;
      }
      .label2 {
        font-size: 18px;
        font-weight: 100;
        width: 100%;
        text-align: center;
        position: absolute;
        bottom: 23%;
        color: #fff;
        display: inline-block;
      }
    }
    .gauge-container {
      svg.gauge {
        path.dial {
          stroke: #676e75;
          stroke-width: 5;
        }
      }
    }
    .gauge-container {
      .gauge .value {
        stroke: #f8774b;
        stroke-dasharray: 18 1;
        stroke-width: 5;
      }
    }
    .gauge-container {
      .gauge .value-lable {
        fill: #fff;
        font-size: 1.5em;
      }
    }
  }
}

.value-lable {
  font-size: 20px;
  // font-weight: bold;
  color: #fff;
  margin-top: 5px;
}

.block {
  height: 18vh;
  margin-top: 0 !important;
  .title {
    border-bottom: 1px solid rgb(155, 155, 155);
    padding-bottom: 6px;
  }
  .number {
    margin-top: 5px;
    font-size: 20px;
    color: #fff;
  }
}

.chart-box {
  display: flex;
}

.switch {
  position: absolute;
  left: calc(50% - 14vw);
  bottom: 50px;
  border-radius: 50%;
  border: 1px solid rgb(77, 77, 77);
  width: 14vw;
  height: 14vw;
  padding: 5vw;
  box-shadow: 0 0 10px rgb(194, 194, 194);
  svg {
    fill: #fff;
  }
}
</style>