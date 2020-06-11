export let blinker = function () { };

blinker.prototype.headerHeight = '0';
blinker.prototype.appData = {};

export function send2Device(data) {
    console.log(data);
    window.parent.postMessage(data, "*");
}

window.addEventListener("message", receiveMessage, false);
window.parent.postMessage({}, "*");
function receiveMessage(e) {
    // console.log(JSON.stringify(e.data));
    if (e.data == 'undefined' || e.data == null || JSON.stringify(e.data).indexOf('{}') > -1 || JSON.stringify(e.data).indexOf('webpack') > -1) return
    if (typeof e.data.headerHeight != "undefined") {
        blinker.headerHeight = e.data.headerHeight;
    } else {
        Object.assign(blinker.appData, e.data);
    }
}