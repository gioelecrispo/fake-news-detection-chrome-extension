(function(e){function t(t){for(var s,o,r=t[0],l=t[1],c=t[2],d=0,h=[];d<r.length;d++)o=r[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&h.push(a[o][0]),a[o]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(e[s]=l[s]);u&&u(t);while(h.length)h.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],s=!0,r=1;r<n.length;r++){var l=n[r];0!==a[l]&&(s=!1)}s&&(i.splice(t--,1),e=o(o.s=n[0]))}return e}var s={},a={app:0},i=[];function o(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=s,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)o.d(n,s,function(t){return e[t]}.bind(null,s));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/fake-news-detection-in-browser/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=t,r=r.slice();for(var c=0;c<r.length;c++)t(r[c]);var u=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1:function(e,t){},2:function(e,t){},"249b":function(e,t,n){},2959:function(e,t,n){},3:function(e,t){},"3b4e":function(e,t,n){const{InferenceSession:s}=n("f1d4");async function a(e){const t=await s.create(e,{executionProviders:["wasm"]});return t}t.loadModel=a},4:function(e,t){},5:function(e,t){},"56d7":function(e,t,n){"use strict";n.r(t);var s=n("2b0e"),a=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},i=[],o={name:"App",components:{},methods:{}},r=o,l=n("2877"),c=Object(l["a"])(r,a,i,!1,null,null,null),u=c.exports,d=n("289d"),h=(n("5abe"),n("8c4f")),p=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("Banner",{attrs:{title:"Fake News Detector",subtitle:"Completely in-browser Fake News detection through neural networks."}}),t("Body"),t("Playground"),t("Footer")],1)},f=[],m=function(){var e=this,t=e._self._c;return t("section",{staticClass:"hero is-primary"},[t("div",{staticClass:"hero-head"},[t("nav",{staticClass:"navbar"},[t("div",{staticClass:"container"},[t("div",{staticClass:"navbar-brand"},[e._m(0),t("div",{staticClass:"navbar-burger",class:{"is-active":e.showNav},on:{click:function(t){e.showNav=!e.showNav}}},[e._m(1),e._m(2),e._m(3)])]),t("div",{staticClass:"navbar-menu",class:{"is-active":e.showNav}},[e._m(4)])])])]),t("div",{staticClass:"hero-body mt-6"},[t("div",{staticClass:"container has-text-centered content is-large"},[t("h2",{staticClass:"title"},[e._v(" "+e._s(e.title)+" ")]),t("p",{staticClass:"subtitle",domProps:{innerHTML:e._s(e.subtitle)}})]),e.showStore?t("div",{staticClass:"columns mt-6"},[t("div",{staticClass:"column is-half-desktop is-offset-one-quarter-desktop"},[t("div",{staticClass:"card has-background-primary-dark p-5"},[t("div",{staticClass:"media"},[t("div",{staticClass:"media-left"},[t("figure",{staticClass:"image is-96x96"},[t("img",{attrs:{src:n("5fa0"),alt:"Logo image"}})])]),e._m(5)])])])]):e._e()])])},b=[function(){var e=this,t=e._self._c;return t("a",{staticClass:"navbar-item"},[t("p",{staticClass:"title"},[t("a",{attrs:{href:"https://gioelecrispo.github.io/",target:"_blank"}},[e._v("Gioele Crispo")])])])},function(){var e=this,t=e._self._c;return t("span",[t("b")])},function(){var e=this,t=e._self._c;return t("span",[t("b")])},function(){var e=this,t=e._self._c;return t("span",[t("b")])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"navbar-end"},[t("a",{staticClass:"navbar-item",attrs:{href:"https://gioelecrispo.github.io/"}},[e._v(" Home ")]),t("a",{staticClass:"navbar-item",attrs:{href:"https://gioelecrispo.github.io/projects"}},[e._v(" Other Projects ")]),t("span",{staticClass:"navbar-item"},[t("a",{staticClass:"button is-primary is-inverted",attrs:{href:"https://github.com/gioelecrispo/fake-news-detection-in-browser"}},[t("span",{staticClass:"icon"},[t("i",{staticClass:"fab fa-github"})]),t("span",[e._v("Github")])])])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"media-content"},[t("p",{staticClass:"subtitle pt-2 mb-2"},[e._v(" Download the "),t("strong",[t("a",[e._v("Chrome Extension!")])])]),t("div",{staticClass:"content has-text-white"},[e._v(" This extension allows you to check if the news you are reading is a fake one or not, directly in "),t("b",[e._v("Google Chrome")]),e._v(" and completely free. ")])])}],v={name:"Banner",props:{title:{type:String,required:!0},subtitle:{type:String,required:!0},showStore:{type:Boolean,default:!0}},data(){return{showNav:!1}},computed:{},async created(){},methods:{}},g=v,y=(n("fce7"),Object(l["a"])(g,m,b,!1,null,"2bd131ac",null)),_=y.exports,w=function(){var e=this,t=e._self._c;return t("section",{staticClass:"hero has-background-primary-light"},[t("div",{staticClass:"hero-body"},[t("div",{staticClass:"columns"},[t("div",{staticClass:"column is-half-widescreen is-offset-one-quarter-widescreen"},[e._m(0),t("div",{staticClass:"mt-2"},[t("b-taglist",[t("b-taglist",{attrs:{attached:""}},[t("b-tag",{attrs:{type:"is-success"}},[e._v("Accuracy")]),t("b-tag",[e._v("98%")])],1),t("b-taglist",{staticClass:"ml-2",attrs:{attached:""}},[t("b-tag",{attrs:{type:"is-success"}},[e._v("Precision")]),t("b-tag",[e._v("98%")])],1),t("b-taglist",{staticClass:"ml-2",attrs:{attached:""}},[t("b-tag",{attrs:{type:"is-success"}},[e._v("Recall")]),t("b-tag",[e._v("98%")])],1),t("b-taglist",{staticClass:"ml-2",attrs:{attached:""}},[t("b-tag",{attrs:{type:"is-success"}},[e._v("F-Score")]),t("b-tag",[e._v("98%")])],1)],1)],1)])])])])},k=[function(){var e=this,t=e._self._c;return t("div",[t("p",{staticClass:"subtitle"},[e._v(" Or try it in the "),t("strong",[e._v("Playground!")])]),t("p",[e._v(" The classifier is based on "),t("strong",[e._v("MobileBERT")]),e._v(" and trained on "),t("a",[e._v("Kaggle Real Fake Dataset")]),e._v(". "),t("strong",[e._v("Onnx.js")]),e._v(" on WASM is used to boost performance and allow real time inference. ")]),t("p",[e._v(" Only English is supported at the moment. ")])])}],C={name:"Body",props:{},data(){return{}},computed:{},async created(){},methods:{}},x=C,S=Object(l["a"])(x,w,k,!1,null,"6f8c9f28",null),E=S.exports,R=function(){var e=this,t=e._self._c;return t("section",{staticClass:"hero"},[t("div",{staticClass:"hero-body"},[t("div",{staticClass:"columns"},[t("div",{staticClass:"column is-half-widescreen is-offset-one-quarter-widescreen"},[e.isModelLoading?t("div",[t("p",{staticClass:"subtitle"},[e._v(" Model is loading... ")]),t("b-progress",{attrs:{type:"is-primary"}})],1):t("div",[t("b-field",[t("b-select",{attrs:{placeholder:"Example news",expanded:""},on:{input:e.setExample},model:{value:e.exampleId,callback:function(t){e.exampleId=t},expression:"exampleId"}},[t("option",{attrs:{value:"custom"}},[e._v("Custom")]),t("option",{attrs:{value:"exampleFake"}},[e._v("Example Fake")]),t("option",{attrs:{value:"exampleReal"}},[e._v("Example Real")])])],1),t("b-field",{attrs:{label:"Title"}},[t("b-input",{attrs:{disabled:e.isModelPredicting},model:{value:e.title,callback:function(t){e.title=t},expression:"title"}})],1),t("b-field",{attrs:{label:"Body"}},[t("b-input",{attrs:{disabled:e.isModelPredicting,maxlength:"1600",type:"textarea"},model:{value:e.body,callback:function(t){e.body=t},expression:"body"}})],1),t("b-button",{staticClass:"is-primary is-fullwidth",class:""+(e.isModelPredicting?"is-loading":""),attrs:{disabled:e.isModelPredicting},on:{click:e.predict}},[e._v("Check news ")]),void 0===e.result||e.isModelPredicting?e._e():t("b-message",{staticClass:"mt-4",class:"is-"+e.messageColor},[e._v(e._s(e.message)+" ")])],1)])])])])},N=[],T=n("caab"),O=n("3b4e"),I=n("c75a");const F="/models/mobilebert-fakenews-model.onnx";var P={name:"Playground",props:{},data(){return{isModelLoading:!0,isModelPredicting:!1,session:void 0,model:void 0,title:"",body:"",result:void 0,exampleId:void 0}},computed:{message(){return 1===this.result?"The news is real":"The news is fake"},messageColor(){return 1===this.result?"success":"danger"}},async created(){this.isModelLoading=!0;const e=await fetch(F,{headers:{"Content-Type":"application/octet-stream"}}),t=await e.arrayBuffer();this.model=await Object(O["loadModel"])(t),this.isModelLoading=!1},methods:{async predict(){this.isModelPredicting=!0;let e="<TITLE> "+this.title+" --- <BODY>:"+this.body;this.result=await Object(I["execute"])(this.model,e),this.isModelPredicting=!1},setExample(){void 0===this.exampleId||"custom"===this.exampleId?(this.title="",this.body=""):"exampleFake"!==this.exampleId&&"exampleReal"!==this.exampleId||(this.title=T[this.exampleId].title,this.body=T[this.exampleId].body)}}},D=P,L=Object(l["a"])(D,R,N,!1,null,"015b9a92",null),j=L.exports,M=function(){var e=this,t=e._self._c;return t("footer",{staticClass:"footer"},[t("div",{staticClass:"content has-text-centered"},[e._m(0),t("p",[e._v(" The source code is licensed "),t("a",{attrs:{href:"http://opensource.org/licenses/mit-license.php"}},[e._v("MIT")]),e._v(". The website content is licensed "),t("a",{attrs:{href:"http://creativecommons.org/licenses/by-nc-sa/4.0/"}},[e._v("CC BY NC SA 4.0")]),e._v(". "),t("br"),e._v(" Icons and resources from FlatIcon.com. "),t("a",{on:{click:e.openDisclaimer}},[e._v(" See more here. "),e._m(1)])])])])},A=[function(){var e=this,t=e._self._c;return t("p",[t("strong",[e._v("Fake News Detector (Playground)")]),e._v(" and "),t("strong",[e._v("Fake News Detector (Chrome Extension)")]),e._v(" by "),t("a",{attrs:{href:"https://gioelecrispo.github.io"}},[e._v("Gioele Crispo")]),e._v(". ")])},function(){var e=this,t=e._self._c;return t("span",{staticClass:"icon is-small"},[t("i",{staticClass:"fas fa-info-circle"})])}],B={name:"Footer",props:{},data(){return{}},computed:{},async created(){},methods:{openDisclaimer(){this.$buefy.dialog.alert({title:"Licences",message:'<a href="https://www.flaticon.com/free-icons/fake-news" title="fake-news icons">Fake-news icons created by Freepik - Flaticon</a>\n',type:"is-primary",hasIcon:!0,icon:"times-circle",iconPack:"fa",ariaRole:"alertdialog",ariaModal:!0})}}},K=B,z=Object(l["a"])(K,M,A,!1,null,"7994984f",null),W=z.exports,H={name:"App",components:{Footer:W,Body:E,Banner:_,Playground:j},methods:{}},J=H,U=(n("a78d"),Object(l["a"])(J,p,f,!1,null,null,null)),X=U.exports,q=function(){var e=this,t=e._self._c;return t("div",[t("Banner",{attrs:{title:"Thank you",subtitle:"for using <b>Fake News Detector Chrome Extension</b>",showStore:!1}}),t("UninstallFeedback"),t("Footer")],1)},G=[],$=function(){var e=this,t=e._self._c;return t("section",{staticClass:"hero has-background-primary-light"},[t("div",{staticClass:"hero-body"},[t("div",{staticClass:"columns"},[t("div",{staticClass:"column is-half-widescreen is-offset-one-quarter-widescreen"},[e._m(0),t("p",{staticClass:"pb-3"},[e._v("If not, please compile this form and help us to understand how to improve.")]),t("hr",{staticClass:"solid"}),t("div",{staticClass:"pt-3"},[e._m(1),t("b-rate",{attrs:{size:"is-large"},model:{value:e.rate,callback:function(t){e.rate=t},expression:"rate"}}),e._m(2),t("b-field",[t("b-radio",{attrs:{"native-value":"DON'T_NEED"},model:{value:e.uninstallReason,callback:function(t){e.uninstallReason=t},expression:"uninstallReason"}},[e._v(" I don't need it, I check the veracity of the news manually ")])],1),t("b-field",[t("b-radio",{attrs:{"native-value":"DOESN'T_WORK"},model:{value:e.uninstallReason,callback:function(t){e.uninstallReason=t},expression:"uninstallReason"}},[e._v(" It does not work well ")])],1),t("b-field",[t("b-radio",{attrs:{"native-value":"SLOW_DOWN"},model:{value:e.uninstallReason,callback:function(t){e.uninstallReason=t},expression:"uninstallReason"}},[e._v(" It slows down my web navigation ")])],1),t("b-field",[t("b-radio",{attrs:{"native-value":"OTHER_REASONS"},model:{value:e.uninstallReason,callback:function(t){e.uninstallReason=t},expression:"uninstallReason"}},[e._v(" Other reasons (write them in the comment section below) ")])],1),e._m(3),t("b-field",[t("b-input",{attrs:{maxlength:"1600",type:"textarea"},model:{value:e.comment,callback:function(t){e.comment=t},expression:"comment"}})],1),t("b-button",{staticClass:"is-primary is-fullwidth",attrs:{disabled:!e.isFormValid},on:{click:e.submitFeedback}},[e._v("Submit feedback")])],1)])]),t("b-modal",{attrs:{width:400,scroll:"keep","can-cancel":"false"},model:{value:e.openEmailResultDialog,callback:function(t){e.openEmailResultDialog=t},expression:"openEmailResultDialog"}},[t("div",{staticClass:"card p-4"},[t("div",{staticClass:"columns"},[t("div",{staticClass:"column"},[t("p",{staticClass:"subtitle py-2 mb-1"},[t("b",[e._v(e._s(e.emailSendResultTitle))])]),t("p",{},[e._v(" "+e._s(e.emailSendResultBody))])]),t("div",{staticClass:"column is-2"},["loading"!==e.emailSendResult?t("b-icon",{attrs:{type:e.emailSendColor,size:"is-large",pack:"fas",icon:e.emailSendIcon}}):e._e()],1)]),"loading"===e.emailSendResult?t("b-progress",{staticClass:"py-2",attrs:{type:e.emailSendColor,size:"is-medium",indeterminate:""}}):e._e()],1)])],1)])},V=[function(){var e=this,t=e._self._c;return t("p",{staticClass:"subtitle"},[e._v("We hope you liked "),t("b",[e._v("Fake News Detector Chrome Extension")]),e._v(".")])},function(){var e=this,t=e._self._c;return t("p",[t("b",[e._v("How much did you like Fake News Detector Chrome Extension?")])])},function(){var e=this,t=e._self._c;return t("p",{staticClass:"pt-1 pb-2"},[t("b",[e._v("Why are you uninstalling Fake News Detector Chrome Extension?")])])},function(){var e=this,t=e._self._c;return t("p",{staticClass:"pt-2 pb-2"},[t("b",[e._v("Would you like to add a comment to tell us what to improve?")])])}],Y=n("cee4"),Q={name:"UninstallFeedback",props:{},data(){return{rate:void 0,uninstallReason:void 0,comment:"",openEmailResultDialog:!1,emailSendResult:"loading"}},computed:{isFormValid(){return void 0!==this.rate&&void 0!==this.uninstallReason},emailSendColor(){return"loading"===this.emailSendResult?"is-primary":"success"===this.emailSendResult?"is-success":"is-danger"},emailSendIcon(){return"loading"===this.emailSendResult?"":"success"===this.emailSendResult?"check-circle":"times-circle"},emailSendResultTitle(){return"loading"===this.emailSendResult?"I'm sending":"success"===this.emailSendResult?"Thank you":"Oh no!"},emailSendResultBody(){return"loading"===this.emailSendResult?"Aligning the gears...":"success"===this.emailSendResult?"Email sent correctly":"An error has occurred. Try later, please"}},async created(){},methods:{submitFeedback(){let e="RATE: "+this.rate+"; REASON: "+this.uninstallReason+"; COMMENT: "+this.comment,t={from_address:"chrome_extension_feedback",to_address:"crispogioele@gmail.com",subject:"FEEDBACK - Fake News Detector Chrome Extension",body:e},n=this;n.openEmailResultDialog=!0,n.emailSendResult="loading",Object(Y["a"])({url:"https://93u9s5.deta.dev/send",method:"post",data:t}).then(e=>{n.emailSendResult="success",n.rate=void 0,n.uninstallReason=void 0,n.comment=""}).catch(e=>{console.error(e),n.emailSendResult="error"}).then(()=>{setTimeout((function(){n.openEmailResultDialog=!1}),4e3)})}}},Z=Q,ee=(n("ca8a"),Object(l["a"])(Z,$,V,!1,null,"73f2258c",null)),te=ee.exports,ne={name:"Uninstall",components:{Banner:_,UninstallFeedback:te,Footer:W},methods:{}},se=ne,ae=Object(l["a"])(se,q,G,!1,null,null,null),ie=ae.exports;const oe=[{path:"/",name:"home",component:X},{path:"/uninstall",name:"uninstall",component:ie}];var re=oe;const le=new h["a"]({routes:re,mode:"history",base:"/fake-news-detection-in-browser/",linkExactActiveClass:"nav-item active"});s["a"].use(h["a"]);var ce=le;s["a"].use(d["a"],{defaultIconPack:"fas"}),s["a"].config.productionTip=!1,new s["a"]({router:ce,render:e=>e(u)}).$mount("#app")},"5fa0":function(e,t,n){e.exports=n.p+"img/chrome-store.7788c0e3.png"},6:function(e,t){},a78d:function(e,t,n){"use strict";n("249b")},c75a:function(e,t,n){const s=n("e040"),a=n("f1d4"),i=a.Tensor;function o(e){if(0===e.length)return-1;let t=e[0],n=0;for(let s=1;s<e.length;s++)e[s]>t&&(n=s,t=e[s]);return n}function r(e){for(let t in e)e[t]=BigInt(e[t]);return new BigInt64Array(e)}async function l(e,t){const n=await s.loadTokenizer(),a=n.encodeText(t);a.inputIds=a.inputIds.slice(0,512),a.inputMask=a.inputMask.slice(0,512),a.segmentIds=a.segmentIds.slice(0,512);const l=a.inputIds.length,c=new i("int64",new BigInt64Array(r(a.inputIds)),dims=[1,l]),u=new i("int64",new BigInt64Array(r(a.inputMask)),dims=[1,l]),d=new i("int64",new BigInt64Array(r(a.segmentIds)),dims=[1,l]),h={input_ids:c,attention_mask:u,token_type_ids:d};console.log(h);const p=await e.run(h,["logits"]);return o(p.logits.data)}t.execute=l},ca8a:function(e,t,n){"use strict";n("2959")},caab:function(e){e.exports=JSON.parse('{"exampleFake":{"title":"Papa John Attacks The NFL And First Amendment After His Sh*tty Pizza Loses Him A Small Fortune","body":"Rather than take personal responsibility for the losses, CEO John Schnatter is making excuses.NFL players, both black and white, have been taking a knee during the national anthem to protest police brutality and racial injustice. Conservatives lost their shit and decided to boycott the NFL. However, while viewership is slightly down, it s not enough to affect the corporate profits of businesses who are partnered with the league.But Schnatter blamed the NFL and the protests anyway after a quarterly report caused investors to dump their Papa John s stock, which caused Schnatter to lose $70 million from his personal fortune Leadership starts at the top, and this is an example of poor leadership,  Schnatter whined.  We are totally disappointed that the NFL and its leadership did not resolve the ongoing situation to the satisfaction of all parties long ago. This should have been nipped in the bud a year and a half ago. The controversy is polarizing the customer, polarizing the country. In other words, Schnatter thinks the NFL should have banned players from kneeling during the national anthem, a move that would have violated their constitutional rights.Let s not forget that NFL players were not kneeling en masse until Donald Trump, whom Schnatter supports, attacked Colin Kaepernick and the NFL in the first place. It was Trump s attacks that caused players to join the protest.So if Schnatter should blame anyone, he should blame Trump.Let s also not forget that Schnatter repeatedly attacked President Obama over the Affordable Care Act, even going so far as to raise the price of pizza and cut his employees  hours so he wouldn t have to provide health insurance to them. Papa John s has also been guilty of stealing wages.All of this caused Americans to boycott Papa John s, which could have caused the chain to lose money as well.Schnatter s claims are also full of shit because Pizza Hut executives say their sales have not been affected by the protests. We re not seeing impact on any of that on our business,  CEO Greg Creed said.Of course, Schnatter really doesn t have anything to bitch about. After all, he is still worth over $800 million and owns a sprawling 40,000 square foot castle in Kentucky, which includes a pool, a golf course, a 22 car garage, and a drawbridge along with two other homes in Florida and Utah.Schnatter is a greedy prick who should really only blame himself for the financial losses his company has suffered. And frankly, the NFL should cut ties with Papa John s in retaliation for this unfair attack. Then he ll really have something to bitch about.Featured Image: YouTube"},"exampleReal":{"title":"Republican Senator Lee undecided on tax bill, seeks child credit changes: aide","body":"WASHINGTON (Reuters) - U.S. Republican Senator Mike Lee has not decided whether to support a Republican tax bill and wants changes to the child tax credit, an aide to the lawmaker said on Thursday. Both Lee and Republican Senator Marco Rubio want more of the proposed child tax credit to be refundable, Conn Carroll, Lee’s communications director said, adding Lee is “undecided on the tax bill as currently written.” The sweeping tax bill needs a simple majority to pass in the Senate, in which Republicans hold 52 of the 100 seats and no Democrats are expected to support it."}}')},e040:function(e,t,n){"use strict";n("d9e2"),n("14d9"),n("3c65");let s=this&&this.__awaiter||function(e,t,n,s){function a(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,i){function o(e){try{l(s.next(e))}catch(t){i(t)}}function r(e){try{l(s["throw"](e))}catch(t){i(t)}}function l(e){e.done?n(e.value):a(e.value).then(o,r)}l((s=s.apply(e,t||[])).next())}))},a=this&&this.__generator||function(e,t){let n,s,a,i,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return i={next:r(0),throw:r(1),return:r(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function r(e){return function(t){return l([e,t])}}function l(i){if(n)throw new TypeError("Generator is already executing.");while(o)try{if(n=1,s&&(a=2&i[0]?s["return"]:i[0]?s["throw"]||((a=s["return"])&&a.call(s),0):s.next)&&!(a=a.call(s,i[1])).done)return a;switch(s=0,a&&(i=[2&i[0],a.value]),i[0]){case 0:case 1:a=i;break;case 4:return o.label++,{value:i[1],done:!1};case 5:o.label++,s=i[1],i=[0];continue;case 7:i=o.ops.pop(),o.trys.pop();continue;default:if(a=o.trys,!(a=a.length>0&&a[a.length-1])&&(6===i[0]||2===i[0])){o=0;continue}if(3===i[0]&&(!a||i[1]>a[0]&&i[1]<a[3])){o.label=i[1];break}if(6===i[0]&&o.label<a[1]){o.label=a[1],a=i;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(i);break}a[2]&&o.ops.pop(),o.trys.pop();continue}i=t.call(e,o)}catch(r){i=[6,r],s=0}finally{n=a=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}};Object.defineProperty(t,"__esModule",{value:!0}),t.loadTokenizer=t.BertTokenizer=t.NFKC_TOKEN=t.SEP_TOKEN=t.SEP_INDEX=t.CLS_TOKEN=t.CLS_INDEX=t.UNK_INDEX=void 0;let i=n("ce1a"),o="▁";t.UNK_INDEX=100,t.CLS_INDEX=101,t.CLS_TOKEN="[CLS]",t.SEP_INDEX=102,t.SEP_TOKEN="[SEP]",t.NFKC_TOKEN="NFKC";let r="https://tfhub.dev/tensorflow/tfjs-model/mobilebert/1/",l=r+"processed_vocab.json?tfjs-format=file",c=function(){function e(e){this.key=e,this.children={},this.end=!1}return e.prototype.getWord=function(){let e=[],t=this;while(null!=t)null!=t.key&&e.unshift(t.key),t=t.parent;return[e,this.score,this.index]},e}(),u=function(){function e(){this.root=new c(null)}return e.prototype.insert=function(e,t,n){let s=this.root,a=[];for(let i=0,o=e;i<o.length;i++){let e=o[i];a.push(e)}for(let i=0;i<a.length;i++)null==s.children[a[i]]&&(s.children[a[i]]=new c(a[i]),s.children[a[i]].parent=s),s=s.children[a[i]],i===a.length-1&&(s.end=!0,s.score=t,s.index=n)},e.prototype.find=function(e){let t=this.root,n=0;while(n<e.length&&null!=t)t=t.children[e[n]],n++;return t},e}();function d(e){return/\s/.test(e)}function h(e){return 0===e.charCodeAt(0)||65533===e.charCodeAt(0)}let p="[~`!@#$%^&*(){}[];:\"'<,.>?/\\|-_+=";function f(e){return-1!==p.indexOf(e)}let m=function(){function e(){}return e.prototype.load=function(){return s(this,void 0,void 0,(function(){let e,t,n;return a(this,(function(s){switch(s.label){case 0:return e=this,[4,this.loadVocab()];case 1:for(e.vocab=s.sent(),this.trie=new u,t=999;t<this.vocab.length;t++)n=this.vocab[t],this.trie.insert(n,1,t);return[2]}}))}))},e.prototype.encodeText=function(e,n){e=e.toString(),e=e.replace(/\?/g,""),e=e.trim();let s=this.tokenize(e),a=[],i=[];a.push(t.CLS_INDEX),i.push(0);for(let t=0;t<s.length;t++){let e=s[t];a.push(e),i.push(0)}a.push(t.SEP_INDEX),i.push(0);let o=a,r=o.map((function(){return 1}));while(o.length<n)o.push(0),r.push(0),i.push(0);return{inputIds:o,inputMask:r,segmentIds:i}},e.prototype.loadVocab=function(){return s(this,void 0,Promise,(function(){return a(this,(function(e){return[2,i.util.fetch(l).then((function(e){return e.json()}))]}))}))},e.prototype.processInput=function(e){let t=this,n=[],s=this.cleanText(e,n),a=s.split(" "),i=0,o=a.map((function(e){e=e.toLowerCase();let s=t.runSplitOnPunc(e,i,n);return i+=e.length+1,s}));for(var r=[],l=0;l<o.length;l++)r=r.concat(o[l]);return r},e.prototype.cleanText=function(e,t){let n=[],s=0,a=0;for(let i=0,o=e;i<o.length;i++){let e=o[i];if(h(e))s+=e.length;else{if(d(e)){if(!(n.length>0&&" "!==n[n.length-1])){s+=e.length;continue}n.push(" "),t[a]=s,s+=e.length}else n.push(e),t[a]=s,s+=e.length;a++}}return n.join("")},e.prototype.runSplitOnPunc=function(e,t,n){let s=[],a=!0;for(let i=0,o=e;i<o.length;i++){let e=o[i];f(e)?(s.push({text:e,index:n[t]}),t+=e.length,a=!0):(a&&(s.push({text:"",index:n[t]}),a=!1),s[s.length-1].text+=e,t+=e.length)}return s},e.prototype.tokenize=function(e){let n=[],s=this.processInput(e);s.forEach((function(e){e.text!==t.CLS_TOKEN&&e.text!==t.SEP_TOKEN&&(e.text="".concat(o).concat(e.text.normalize(t.NFKC_TOKEN)))}));for(let a=0;a<s.length;a++){let e=[];for(let t=0,n=s[a].text;t<n.length;t++){let s=n[t];e.push(s)}let i=!1,o=0,r=[],l=e.length;while(o<l){let t=l,n=void 0;while(o<t){let s=e.slice(o,t).join(""),a=this.trie.find(s);if(null!=a&&null!=a.end){n=a.getWord()[2];break}t-=1}if(null==n){i=!0;break}r.push(n),o=t}i?n.push(t.UNK_INDEX):n=n.concat(r)}return n},e}();function b(){return s(this,void 0,Promise,(function(){let e;return a(this,(function(t){switch(t.label){case 0:return e=new m,[4,e.load()];case 1:return t.sent(),[2,e]}}))}))}t.BertTokenizer=m,t.loadTokenizer=b},e7db:function(e,t,n){},fce7:function(e,t,n){"use strict";n("e7db")}});
//# sourceMappingURL=app.39c386bf.js.map