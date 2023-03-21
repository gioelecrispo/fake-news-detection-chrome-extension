import Vue from "vue";
import shadow from 'vue-shadow-dom';
import ContentPageView from "../view/contentPage";
import Buefy from "buefy";


/*import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(fas);
Vue.component('font-awesome-icon', FontAwesomeIcon)*/


/* add font awesome icon component */
Vue.use(shadow);
Vue.use(Buefy, {
    defaultIconPack: 'fas'
});
Vue.config.productionTip = false;


let contentAppDOM = document.createElement('div');
//document.documentElement.appendChild(contentAppDOM);
document.body.insertBefore(contentAppDOM, document.body.firstChild);

new Vue({
    el: contentAppDOM,
    render: (h) => h(ContentPageView)
});
