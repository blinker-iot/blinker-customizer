<template>
  <div id="app">
    <div v-bind:style="{marginTop:headerHeight+'px'}">
      <BlinkerDevice v-if="headerHeight!=0" />
    </div>
  </div>
</template>

<script>
import "./blinker";
import BlinkerDevice from "./components/BlinkerDevice";
import { blinker } from './blinker';

export default {
  name: "App",
  components: {
    BlinkerDevice
  },
  data() {
    return {
      headerHeight: "0"
    };
  },
  mounted: function() {
    setTimeout(() => {
      console.log("BlinkerHeaderHeight", blinker.headerHeight);
      this.headerHeight = blinker.headerHeight;
    }, 100);
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
