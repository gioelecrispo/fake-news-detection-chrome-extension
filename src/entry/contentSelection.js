import Vue from "vue";
import shadow from 'vue-shadow-dom';
import ContentView from "../view/contentSelection";
import Buefy from "buefy";

Vue.use(shadow);
Vue.use(Buefy, {
    defaultIconPack: 'fas'
});
Vue.config.productionTip = false;


let contentAppDOM = document.createElement('div');
//document.body.insertBefore(contentAppDOM, document.body.firstChild);
document.documentElement.appendChild(contentAppDOM);

/*
let shadowElement = document.createElement('div');
shadowaw.attachShadow({mode: 'open'})
shadowaw.shadowRoot.appendChild(contentAppDOM);
document.body.appendChild(shadowaw);
//mounted() { var shadow_css = new CSSStyleSheet; shadow_css.replaceSync(YOUR_CSS) this.$el.shadowRoot.adoptedStyleSheets = [ shadow_css ];
let style = document.createElement("style");

style.textContent = `
.wrapper {
  position: relative;
}
`*/

new Vue({
    el: contentAppDOM,
    render: (h) => h(ContentView)
});
