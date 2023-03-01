import Vue from 'vue'
import App from '../view/popup.vue'
import Buefy from "buefy"
import 'buefy/dist/buefy.css'

// insert content script, that run wasm
// eslint-disable-next-line no-unused-vars
/*function wasm() {
  var importObject = { imports: { imported_func: arg => console.log(arg) } };
  WebAssembly.instantiateStreaming(fetch(chrome.runtime.getURL('ort-wasm-simd.wasm')), importObject)
      .then(obj => obj.instance.exports.exported_func());
}
// eslint-disable-next-line no-unused-vars
async function inject(e) {
  const tabId = (await chrome.tabs.query({active: true}))[0].id;
  chrome.scripting.executeScript({
    target: {tabId},
    func: wasm
  });
}*/


Vue.use(Buefy, {
  defaultIconPack: 'fas'
});


Vue.config.productionTip = false

new Vue({
  render: (h) => h(App)
}).$mount('#app')
