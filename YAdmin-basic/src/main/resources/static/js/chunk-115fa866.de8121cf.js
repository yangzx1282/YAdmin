(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-115fa866"],{"143d":function(t,e,a){},"33c7":function(t,e,a){"use strict";a("143d")},"8dee":function(t,e,a){"use strict";var s=a("a86f"),r=a("8078"),i=a("201c"),n=a("212e"),l=a("43ec"),c=a("f417"),o=Math.max,d=Math.min,u=Math.floor,f=/\$([$&`']|\d\d?|<[^>]*>)/g,g=/\$([$&`']|\d\d?)/g,p=function(t){return void 0===t?t:String(t)};a("c46f")("replace",2,(function(t,e,a,h){return[function(s,r){var i=t(this),n=void 0==s?void 0:s[e];return void 0!==n?n.call(s,i,r):a.call(String(i),s,r)},function(t,e){var r=h(a,t,this,e);if(r.done)return r.value;var u=s(t),f=String(this),g="function"===typeof e;g||(e=String(e));var m=u.global;if(m){var y=u.unicode;u.lastIndex=0}var x=[];while(1){var b=c(u,f);if(null===b)break;if(x.push(b),!m)break;var _=String(b[0]);""===_&&(u.lastIndex=l(f,i(u.lastIndex),y))}for(var w="",k=0,S=0;S<x.length;S++){b=x[S];for(var C=String(b[0]),$=o(d(n(b.index),f.length),0),L=[],A=1;A<b.length;A++)L.push(p(b[A]));var j=b.groups;if(g){var D=[C].concat(L,$,f);void 0!==j&&D.push(j);var I=String(e.apply(void 0,D))}else I=v(C,f,$,L,j,e);$>=k&&(w+=f.slice(k,$)+I,k=$+C.length)}return w+f.slice(k)}];function v(t,e,s,i,n,l){var c=s+t.length,o=i.length,d=g;return void 0!==n&&(n=r(n),d=f),a.call(l,d,(function(a,r){var l;switch(r.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,s);case"'":return e.slice(c);case"<":l=n[r.slice(1,-1)];break;default:var d=+r;if(0===d)return a;if(d>o){var f=u(d/10);return 0===f?a:f<=o?void 0===i[f-1]?r.charAt(1):i[f-1]+r.charAt(1):a}l=i[d-1]}return void 0===l?"":l}))}}))},bb51:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.isLoading,expression:"isLoading"}],staticClass:"padding-10-h home-page"},[t.user?a("el-row",{attrs:{gutter:10,type:"flex",justify:"space-around"}},[a("el-col",{attrs:{md:12,sm:24}},[a("el-row",{staticClass:"padding-10 home-panel",attrs:{type:"flex",justify:"center",align:"middle",gutter:0}},[a("el-col",{attrs:{md:6,sm:4,xs:6}},[a("img",{staticStyle:{"border-radius":"50%"},attrs:{src:t.$tools.buildAvatar(t.user.avatar),alt:"",width:"90%"}})]),a("el-col",{staticClass:"user-info",attrs:{md:14,sm:16,xs:24}},[a("p",[t._v(t._s(t.hello())),a("br"),t._v(t._s(t.quote))]),a("p",{staticStyle:{margin:"15px 0"}}),a("p",{staticStyle:{"font-size":"14px"}},[t._v("\n            上次登录时间："+t._s(t.user.userLoginTracks.length>0?t.user.userLoginTracks[0].loginIp:"127.0.0.1")+"\n          ")]),a("p",{staticStyle:{"font-size":"14px"}},[t._v("\n            上次登录时间："+t._s(t.user.userLoginTracks.length>0?t.user.userLoginTracks[0].loginTime:"0000-00-00 00:00:00")+"\n          ")])])],1)],1),a("el-col",{attrs:{md:12,sm:24}},[a("el-row",{staticClass:"padding-10 home-panel"},[t._l(t.tags,(function(e){return a("el-tag",{key:e.name,staticStyle:{margin:"0 5px"},attrs:{closable:"",type:e.type}},[t._v(t._s(e.name))])})),a("p",{staticStyle:{"text-indent":"2rem"}},[a("b",[t._v("舔狗日记：")]),t._v("\n          "+t._s(t.diary)+"\n          ")])],2)],1)],1):t._e(),a("el-row",{staticClass:"details",attrs:{type:"flex",gutter:10,justify:"space-around",align:"middle"}},[a("el-col",{attrs:{md:6,sm:12,xs:24}},[a("el-row",{staticClass:"padding-10 home-panel",attrs:{type:"flex",justify:"center",align:"middle"}},[a("i",{staticClass:"fa fa-address-card",staticStyle:{color:"#40c9c6",background:"#e3f8fa"}}),a("span",[a("b",[t._v("注册用户：")]),t._v("\n          100\n        ")])])],1),a("el-col",{attrs:{md:6,sm:12,xs:24}},[a("el-row",{staticClass:"padding-10 home-panel",attrs:{type:"flex",justify:"center",align:"middle"}},[a("i",{staticClass:"fa fa-comments",staticStyle:{color:"#be63f9",background:"#f5e6fe"}}),a("span",[a("b",[t._v("总评论数：")]),t._v("\n          100\n        ")])])],1),a("el-col",{attrs:{md:6,sm:12,xs:24}},[a("el-row",{staticClass:"padding-10 home-panel",attrs:{type:"flex",justify:"center",align:"middle"}},[a("i",{staticClass:"fa fa-paw",staticStyle:{color:"#FF9E3D",background:"#FFEAD6"}}),a("span",[a("b",[t._v("今日访问：")]),t._v("\n          100\n        ")])])],1),a("el-col",{attrs:{md:6,sm:12,xs:24}},[a("el-row",{staticClass:"padding-10 home-panel",attrs:{type:"flex",justify:"center",align:"middle"}},[a("i",{staticClass:"fa fa-heartbeat",staticStyle:{color:"#fc573b",background:"#ffe6e2"}}),a("span",[a("b",[t._v("风险警告：")]),t._v("\n          100\n        ")])])],1)],1),a("el-row",[a("el-col",{attrs:{span:24}},[a("el-card",{ref:"chartCard",staticClass:"box-card",attrs:{"body-style":"{width:100%}"}},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("近期访问趋势")]),a("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{type:"text"},on:{click:function(e){return t.click()}}},[t._v("刷新")])],1),a("div",{staticStyle:{width:"100%",height:"300px"},attrs:{id:"chart"}})])],1)],1)],1)},r=[],i=(a("8dee"),{data:function(){return{isLoading:!0,user:{userLoginTracks:[]},quote:"今天又列了几个任务清单呢😀",diary:"今天我还是照常给你发消息，汇报日常工作，你终于回了我四个字：“嗯嗯，好的”， 你开始愿意敷衍我了，我太感动了受宠若惊。我愿意天天给你发消息。就算你天天骂我，我也不觉得烦。",tags:[{name:"自由",type:"success"},{name:"快乐",type:"danger"},{name:"享受",type:"warning"}]}},methods:{hello:function(){var t=["午夜了，{}","深夜了，{}","凌晨了，{}","太阳升起来了，{}","早上好，{}，记得吃早餐哦","早上好，{}，愉快的一天开始了","中午好，{}，要午睡才能事半功倍呢","下午好，{}，工作一天了，适当放松下","太阳都快下山了，{}，你还没下班吗","晚上好，{}","{}记得早点休息","你可真是熬夜小王子呢，{}"],e=parseInt((new Date).getHours()/2);return t[e].replace("{}",this.user.nickname?this.user.nickname:this.user.username)},getQuote:function(){},getDiary:function(){var t=this;this.$axios.get(this.$api.HUMBLE_DOG_DIARY1).then((function(e){t.diary=e}))}},computed:{},filters:{buildAvatar:function(t){return void 0==t?"":(console.log(this),this.$api.SERVER_UPLOAD+this.$tools.buildAvatar(t))}},mounted:function(){var t=this;this.$chart.homeChart("chart"),this.getQuote(),this.getDiary(),console.log(this.$api);var e=setInterval((function(){t.$store.state.user&&(clearInterval(e),t.user=t.$store.state.user,console.log(t.user),t.isLoading=!1)}),50)}}),n=i,l=(a("33c7"),a("5d22")),c=Object(l["a"])(n,s,r,!1,null,"cd2d405c",null);e["default"]=c.exports}}]);