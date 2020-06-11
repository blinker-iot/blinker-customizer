
window.addEventListener("message", receiveMessage, false);
Vue.prototype.appData = {}
Vue.prototype.BlinkerHeaderHeight = '0px'
Vue.prototype.send2Device = function (data) {
  window.parent.postMessage(data, "*");
}
window.parent.postMessage({}, "*");

function receiveMessage(e) {
  // console.log(JSON.stringify(e.data));
  if (e.data == 'undefined' || e.data == null || JSON.stringify(e.data).indexOf('{}') > -1 || JSON.stringify(e.data).indexOf('webpack') > -1) return
  if (typeof e.data.headerHeight != "undefined") {
    Vue.BlinkerHeaderHeight = e.data.headerHeight + "px";
    console.log(Vue.BlinkerHeaderHeight);
  } else {
    console.log(e.data);
    Object.assign(Vue.appData, e.data);
  }
}
