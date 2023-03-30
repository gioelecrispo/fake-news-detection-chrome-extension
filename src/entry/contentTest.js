import Vue from "vue";

//import VueCustomElement from "vue-custom-element";
import styleText from "../assets/content.css";

import shadow from "vue-shadow-dom";
import Buefy from "buefy";

/*
function createStyleLink(node, css, url) {
    const link = document.createElement('link');
    link.href = url;
    link.textContent = css;
    link.type = 'text/css';
    link.rel = 'stylesheet';
    node.appendChild(link);
}*/


const sheet = new CSSStyleSheet();
sheet.replaceSync(styleText);


Vue.use(shadow);
Vue.use(Buefy, {
    defaultIconPack: 'fas'
});
Vue.config.productionTip = false;

/*
Vue.customElement('widget-vue', ContentPageView, {
    shadow: true,
    beforeCreateVueInstance(root) {
        const rootNode = root.el.getRootNode();

        if (rootNode instanceof ShadowRoot) {
            root.shadowRoot = rootNode;
        } else {
            root.shadowRoot = document.head;
        }
        return root;
    },
})*/

//let contentAppDOM = document.createElement('div');
//document.documentElement.appendChild(contentAppDOM);

let contentAppDOM = document.createElement('div');
let shadowElement = document.createElement('div');
shadowElement.attachShadow({mode: 'open'})
shadowElement.shadowRoot.appendChild(contentAppDOM);
//createStyleLink(shadowElement, styleText,`/content.css`);
document.documentElement.appendChild(shadowElement);
shadowElement.shadowRoot.adoptedStyleSheets = [sheet];
//mounted() { var shadow_css = new CSSStyleSheet; shadow_css.replaceSync(YOUR_CSS) this.$el.shadowRoot.adoptedStyleSheets = [ shadow_css ];
//let style = document.createElement("style");


//Vue.customElement("div", ContentPageView, {shadow: false});
//document.documentElement.appendChild(contentAppDOM);

let View = Vue.compile('<h1>PROVA {{msg}}</h1>')

new Vue({
    el: contentAppDOM, // holder
    data: {
        msg: 'hello'
    },
    render: (h) => h(View)
});
