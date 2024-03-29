import Vue from "vue";
import ContentPageView from "../view/contentPage";
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



let contentAppDOM = document.createElement('div');
document.documentElement.appendChild(contentAppDOM);


new Vue({
    el: contentAppDOM, // holder
    render: (h) => h(ContentPageView)
});
