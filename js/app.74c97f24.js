(function(t){function e(e){for(var a,c,s=e[0],r=e[1],u=e[2],d=0,p=[];d<s.length;d++)c=s[d],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&p.push(o[c][0]),o[c]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a]);l&&l(e);while(p.length)p.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,s=1;s<n.length;s++){var r=n[s];0!==o[r]&&(a=!1)}a&&(i.splice(e--,1),t=c(c.s=n[0]))}return t}var a={},o={app:0},i=[];function c(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=a,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],r=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=r;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"1d45":function(t,e,n){"use strict";var a=n("26f6"),o=n.n(a);o.a},"26f6":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("c3a6");var a=n("ad06"),o=(n("66b9"),n("b650")),i=(n("4056"),n("44bf")),c=(n("66cf"),n("343b")),s=(n("5246"),n("6b41")),r=(n("537a"),n("ac28")),u=(n("a52c"),n("2ed4")),l=(n("7844"),n("5596")),d=(n("4b0a"),n("2bb1")),p=(n("5d17"),n("f9bd")),f=(n("342a"),n("1437")),v=(n("0cc8"),n("3104")),m=(n("da3c"),n("0b33")),h=(n("bda7"),n("5e46")),g=(n("9cb7"),n("66fd")),b=(n("8a58"),n("e41f")),w=(n("38d5"),n("772a")),_=(n("be7f"),n("565f")),y=(n("c194"),n("7744")),k=(n("0653"),n("34e9")),P=(n("a44c"),n("e27c")),x=(n("4ddd"),n("9f14")),$=(n("e930"),n("8f80")),L=(n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("2b0e")),C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("van-sticky",[n("van-nav-bar",{staticClass:"title",attrs:{title:"恒新实木铝业"}},["detail"==this.$route.name?n("van-icon",{attrs:{slot:"left",name:"arrow-left",size:"20"},on:{click:function(e){return t.getBack()}},slot:"left"}):t._e()],1)],1),n("div",{staticClass:"main-view"},[n("router-view")],1),n("div",{staticClass:"footer"},[n("van-tabbar",{attrs:{route:""},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[n("van-tabbar-item",{attrs:{icon:"wap-home",to:"/",exact:""}},[t._v("首页")]),n("van-tabbar-item",{attrs:{icon:"shop",to:"/product"}},[t._v("产品列表")]),n("van-tabbar-item",{attrs:{icon:"manager",to:"/manage"}},[t._v("管理页")])],1)],1)],1)},N=[],S={data:function(){return{active:0,show:!1}},methods:{getBack:function(){this.$router.go(-1)},showPopup:function(){this.show=!0}},mounted:function(){var t=this;this.$axios.get("/getnotice.html").then((function(e){console.log(e.data),t.$store.state.noticeList=e.data})).catch((function(t){console.log(t)})),this.$axios.get("/getproduct.html").then((function(e){console.log(e.data),t.$store.state.productList=e.data})).catch((function(t){console.log(t)}))}},D=S,O=n("2877"),z=Object(O["a"])(D,C,N,!1,null,null,null),j=z.exports,T=n("8c4f"),I=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("van-swipe",{staticClass:"my-swipe",attrs:{autoplay:3e3,"indicator-color":"white"}},t._l(t.swiperList,(function(t,e){return n("van-swipe-item",{key:e},[n("van-image",{attrs:{src:t.imgSrc,"lazy-load":"",fit:"contain"}})],1)})),1),n("van-collapse",{model:{value:t.activeNames,callback:function(e){t.activeNames=e},expression:"activeNames"}},[n("van-collapse-item",{attrs:{title:"最新公告",size:"large",name:"1"}},t._l(t.noticeList,(function(e,a){return n("p",{key:a,staticClass:"notice-view"},[t._v(t._s(a+1)+"."+t._s(e.content))])})),0),n("van-collapse-item",{attrs:{title:"产品中心",icon:"hot-sale-o",size:"large",name:"2"}},[n("div",{staticClass:"product-view"},t._l(t.productList,(function(e,a){return n("router-link",{key:a,staticClass:"product-message",attrs:{to:{name:"detail",params:{id:e._id,item:e}}}},[n("van-image",{attrs:{src:e.productImg[0],"lazy-load":"",fit:"cover"}}),n("div",{staticClass:"product-title"},[t._v(t._s(e.title))]),n("div",{staticClass:"product-price"},[t._v(t._s(e.price))])],1)})),1)]),n("van-collapse-item",{staticClass:"about-us",attrs:{title:"联系我们",size:"large",name:"3"}},[n("div",{staticClass:"contact-us"},[n("p",[t._v("联系人：许先生")]),n("p",[t._v("联系电话："),n("a",{attrs:{href:"tel://13690996886"}},[t._v("13690996886")])]),n("p",[t._v("公司地址：河源市源城区丰源新村")])])])],1)],1)},M=[],B={data:function(){return{activeNames:["2"],swiperList:[{imgSrc:"/images/index-logo.png"}]}},computed:{noticeList:function(){return this.$store.state.noticeList},productList:function(){return this.$store.state.productList}}},E=B,R=(n("8b71"),Object(O["a"])(E,I,M,!1,null,null,null)),q=R.exports,J=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("van-tabs",{model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[n("van-tab",{attrs:{title:"楼梯扶手"}},t._l(t.handrailList,(function(e,a){return n("van-card",{key:a,attrs:{thumb:e.productImg[1],title:e.title,price:e.price},on:{click:function(n){return t.getoDetail(e)}},scopedSlots:t._u([{key:"footer",fn:function(){return[n("van-button",{directives:[{name:"show",rawName:"v-show",value:t.ifManager,expression:"ifManager"}],attrs:{size:"mini"},on:{click:function(n){return n.stopPropagation(),t.delproduct(e)}}},[t._v("删除")]),n("van-button",{attrs:{size:"mini"},on:{click:function(e){return e.stopPropagation(),t.callPhone(13690996886)}}},[t._v("联系客服")])]},proxy:!0}],null,!0)})})),1),n("van-tab",{attrs:{title:"大门"}},t._l(t.gateList,(function(e,a){return n("van-card",{key:a,attrs:{thumb:e.productImg[1],title:e.title,price:e.price},on:{click:function(n){return t.getoDetail(e)}},scopedSlots:t._u([{key:"footer",fn:function(){return[n("van-button",{directives:[{name:"show",rawName:"v-show",value:t.ifManager,expression:"ifManager"}],attrs:{size:"mini"},on:{click:function(n){return n.stopPropagation(),t.delproduct(e)}}},[t._v("删除")]),n("van-button",{attrs:{size:"mini"},on:{click:function(e){return e.stopPropagation(),t.callPhone(13690996886)}}},[t._v("联系客服")])]},proxy:!0}],null,!0)})})),1)],1)],1)},U=[],A=(n("4160"),n("a434"),n("159b"),n("e17f"),n("2241")),F={data:function(){return{active:"0"}},computed:{ifManager:function(){return"123456"==this.$store.state.manageCode},gateList:function(){return this.$store.getters.productSolt.gateList},handrailList:function(){return this.$store.getters.productSolt.handrailList}},methods:{getoDetail:function(t){console.log(t),this.$router.push({name:"detail",params:{id:t._id,item:t}})},callPhone:function(t){window.location.href="tel://"+t},delproduct:function(t){var e=this;console.log(t),A["a"].confirm({title:"提示",message:"是否删除“"+t.title+"”这件商品?"}).then((function(){e.deltoDB(t._id),e.deltoStore(t._id)})).catch((function(){}))},deltoDB:function(t){this.$axios({method:"get",url:"/delproduct.html",params:{id:t}}).then((function(t){console.log(t)})).catch((function(t){console.log(t)}))},deltoStore:function(t){var e=this.$store.state.productList;e.forEach((function(n,a){n._id==t&&e.splice(a,1)}))}}},G=F,H=(n("7767"),Object(O["a"])(G,J,U,!1,null,null,null)),K=H.exports,Q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("van-popup",{attrs:{round:""},on:{"click-overlay":t.showPoint},model:{value:t.showPopup,callback:function(e){t.showPopup=e},expression:"showPopup"}},[n("van-cell-group",[n("van-field",{attrs:{type:"password",label:"请输入密码"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),n("van-button",{attrs:{type:"primary",block:""},on:{click:t.checkRoot}},[t._v("提交验证")])],1)],1),n("van-collapse",{model:{value:t.activeNames,callback:function(e){t.activeNames=e},expression:"activeNames"}},[n("van-collapse-item",{attrs:{title:"公告管理",size:"large",name:"1"}},[n("div",{staticClass:"blank"},[t._v("最新公告")]),n("ul",t._l(t.noticeList,(function(e,a){return n("li",{key:a,staticClass:"notice-list",on:{click:function(n){return t.deleteNotice(e,a)}}},[t._v(" "+t._s(a+1)+"."+t._s(e.content)+" "),n("br"),t._v(" 发布时间:"+t._s(e.allowTime)+" ")])})),0),n("div",{staticClass:"blank"},[t._v("新增公告")]),n("van-cell-group",[n("van-field",{attrs:{type:"textarea",placeholder:"请输入新公告"},model:{value:t.newNotice,callback:function(e){t.newNotice=e},expression:"newNotice"}}),n("van-button",{attrs:{type:"primary",size:"small"},on:{click:t.addNotice}},[t._v("立即发布")])],1)],1),n("van-collapse-item",{attrs:{title:"发布产品",size:"large",name:"2"}},[n("van-form",{on:{submit:t.onSubmit}},[n("van-field",{attrs:{name:"produtcType",label:"产品类别"},scopedSlots:t._u([{key:"input",fn:function(){return[n("van-radio-group",{attrs:{direction:"horizontal"},model:{value:t.newProduct.produtcType,callback:function(e){t.$set(t.newProduct,"produtcType",e)},expression:"newProduct.produtcType"}},[n("van-radio",{attrs:{name:"handrail"}},[t._v("楼梯扶手")]),n("van-radio",{attrs:{name:"gate"}},[t._v("大门")])],1)]},proxy:!0}])}),n("van-field",{attrs:{required:"",name:"title",label:"产品标题"},model:{value:t.newProduct.title,callback:function(e){t.$set(t.newProduct,"title",e)},expression:"newProduct.title"}}),n("van-field",{attrs:{required:"",type:"number",name:"price",label:"价格"},model:{value:t.newProduct.price,callback:function(e){t.$set(t.newProduct,"price",e)},expression:"newProduct.price"}}),n("van-field",{attrs:{type:"textarea",autosize:"",name:"productDes",label:"产品描述"},model:{value:t.newProduct.productDes,callback:function(e){t.$set(t.newProduct,"productDes",e)},expression:"newProduct.productDes"}}),n("van-uploader",{attrs:{"max-count":"9",multiple:""},model:{value:t.productImg,callback:function(e){t.productImg=e},expression:"productImg"}}),n("div",{staticStyle:{margin:"16px"}},[n("van-button",{attrs:{round:"",block:"",type:"info","native-type":"submit"}},[t._v("提交")])],1)],1)],1)],1)],1)},V=[],W={data:function(){return{showPopup:"",password:"",activeNames:["0"],newNotice:"",newProduct:{title:"",price:"",produtcType:"handrail",productDes:""},productImg:[]}},computed:{noticeList:function(){return this.$store.state.noticeList}},methods:{showPoint:function(){var t=this;A["a"].confirm({title:"提示",message:"是否离开管理页？"}).then((function(){t.$router.go(-1)})).catch((function(){t.showPopup=!0}))},checkRoot:function(){"123456"==this.password?(this.showPopup=!1,this.$store.state.manageCode="123456"):A["a"].alert({message:"密码错误！"})},addNotice:function(){var t=this,e=this.$store.state.noticeList,n=(new Date).toLocaleString("chinese",{hour12:!1}),a={content:this.newNotice,allowTime:n};""==this.newNotice?A["a"].alert({message:"不能发布空白公告！"}).then((function(){})):A["a"].confirm({title:"提示",message:"是否发布“"+this.newNotice+"”这条公告?"}).then((function(){t.addToDB(a),e.push(a),t.newNotice=""})).catch((function(){}))},deleteNotice:function(t,e){var n=this,a=this.$store.state.noticeList;A["a"].confirm({title:"提示",message:"是否删除“"+t.content+"”这条公告?"}).then((function(){n.delToDB(t._id),a.splice(e,1)})).catch((function(){}))},addToDB:function(t){this.$axios({method:"post",url:"/addnotice.html",data:t}).then((function(t){console.log(t)})).catch((function(t){console.log(t)}))},delToDB:function(t){this.$axios({method:"get",url:"/delnotice.html",params:{id:t}}).then((function(t){console.log(t)})).catch((function(t){console.log(t)}))},onSubmit:function(t){var e=this;""!=t.title&&""!=t.price||A["a"].alert({message:"产品名称和价格不能为空！"});var n=[];this.productImg.forEach((function(t){n.push(t.content)})),t.productImg=n,console.log(t),A["a"].confirm({title:"提示",message:"是否发布“"+t.title+"”这件商品?"}).then((function(){e.addProduct(t),e.newProduct.title="",e.newProduct.price="",e.newProduct.productDes="",e.productImg=[]})).catch((function(){}))},addProduct:function(t){var e=this;this.$axios({method:"post",url:"/addproduct.html",data:t}).then((function(t){console.log(t),e.freshProduct()})).catch((function(t){console.log(t)}))},freshProduct:function(){var t=this;this.$axios.get("/getproduct.html").then((function(e){console.log(e.data),t.$store.state.productList=e.data})).catch((function(t){console.log(t)}))}},created:function(){var t=this.$store.state.manageCode;this.showPopup="123456"!=t}},X=W,Y=(n("a390"),Object(O["a"])(X,Q,V,!1,null,null,null)),Z=Y.exports,tt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("van-swipe",{staticClass:"detail-view",attrs:{autoplay:3e3}},t._l(t.item.productImg,(function(e,a){return n("van-swipe-item",{key:a},[n("van-image",{attrs:{src:e,"lazy-load":"",fit:"contain"},on:{click:function(e){return t.showImg(a)}}})],1)})),1),n("div",{staticClass:"detail-card"},[n("p",{staticClass:"card-price"},[t._v("￥"+t._s(t.item.price))]),n("p",{staticClass:"card-title"},[t._v(t._s(t.item.title))]),n("p",{staticClass:"blank"},[t._v("规格参数")]),n("p",{staticClass:"card-des"},[t._v(t._s(t.item.productDes))])])],1)},et=[],nt=(n("4662"),n("28a2")),at={data:function(){return{item:this.$route.params.item}},methods:{showParams:function(){console.log(this.$route)},showImg:function(t){Object(nt["a"])({images:this.item.imgSrc,startPosition:t})}}},ot=at,it=(n("1d45"),Object(O["a"])(ot,tt,et,!1,null,null,null)),ct=it.exports;L["a"].use(T["a"]);var st=[{path:"/",component:q},{path:"/product",component:K},{path:"/manage",component:Z},{path:"/detail/:id",name:"detail",component:ct},{path:"*",redirect:"/"}],rt=new T["a"]({mode:"history",routes:st});rt.push("/");var ut=rt,lt=n("82ae"),dt=n.n(lt),pt=(n("157a"),n("2f62"));L["a"].use(pt["a"]);var ft=new pt["a"].Store({state:{noticeList:[],productList:[],manageCode:""},getters:{productSolt:function(t){var e=t.productList,n=[],a=[];return e.forEach((function(t){"gate"==t.produtcType?n.push(t):a.push(t)})),{gateList:n,handrailList:a}}},mutations:{},actions:{},modules:{}});L["a"].use(a["a"]).use(o["a"]).use(i["a"]).use(c["a"]).use(s["a"]).use(r["a"]).use(u["a"]).use(l["a"]).use(d["a"]).use(p["a"]).use(f["a"]).use(v["a"]).use(m["a"]).use(h["a"]).use(g["a"]).use(b["a"]).use(w["a"]).use(_["a"]).use(y["a"]).use(k["a"]).use(P["a"]).use(x["a"]).use($["a"]),L["a"].config.productionTip=!1,dt.a.defaults.baseURL="http://121.37.228.228:80/",L["a"].prototype.$axios=dt.a,new L["a"]({router:ut,store:ft,render:function(t){return t(j)}}).$mount("#app")},7767:function(t,e,n){"use strict";var a=n("fdfe"),o=n.n(a);o.a},"88d7":function(t,e,n){},"8b71":function(t,e,n){"use strict";var a=n("88d7"),o=n.n(a);o.a},"97c3":function(t,e,n){},a390:function(t,e,n){"use strict";var a=n("97c3"),o=n.n(a);o.a},fdfe:function(t,e,n){}});
//# sourceMappingURL=app.74c97f24.js.map