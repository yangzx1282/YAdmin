(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-356f94ae"],{"1d8f":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-card",[n("search-bar",{attrs:{searchForm:e.searchForm,statusShow:!1},on:{"search-click":e.searchHandler}}),n("el-row",[n("data-table",{ref:"dataTable",attrs:{API:e.API,logType:e.logType,searchForm:e.searchForm}})],1)],1)],1)},s=[],a=n("df6c"),o={data:function(){return{searchForm:{word:null,startTime:null,endTime:null,status:null},API:this.$api.LOG_API,logType:"INFO"}},methods:{searchHandler:function(e){null!=e.dateScope?(this.searchForm.startTime=e.dateScope[0],this.searchForm.endTime=e.dateScope[1]):(this.searchForm.startTime=null,this.searchForm.endTime=null),this.$refs.dataTable.queryHandler(1)}},mounted:function(){console.log(this.$slots)},components:{DataTable:a["a"]}},i=o,l=n("5d22"),c=Object(l["a"])(i,r,s,!1,null,null,null);t["default"]=c.exports},"5dc3":function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},"5f98":function(e,t,n){"use strict";n("6031")},6031:function(e,t,n){},8217:function(e,t,n){"use strict";n("d7f9")},d7f9:function(e,t,n){},df6c:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-row",{attrs:{type:"flex",justify:"space-between"}},[n("el-col",{attrs:{span:12}},[n("el-button",{attrs:{type:"danger",icon:"el-icon-delete",size:"small",disabled:0==e.isOperater},on:{click:function(t){return e.removeHandler(void 0)}}},[e._v("删除")]),n("el-button",{attrs:{type:"warning",icon:"el-icon-document-add",size:"small",disabled:0==e.isOperater},on:{click:e.exportHandler}},[e._v("导出")])],1),n("el-col",{attrs:{span:3}},[n("el-button",{attrs:{type:"",plain:"",size:"mini",icon:"el-icon-refresh"},on:{click:function(t){return e.queryHandler()}}}),n("el-button",{attrs:{type:"",plain:"",size:"mini",icon:"el-icon-full-screen"}})],1)],1),n("el-row",{attrs:{type:"flex",justify:"space-around",gutter:20}},[n("el-col",[n("el-card",{staticClass:"box-card",attrs:{shadow:"never"}},[n("div",{staticClass:"clearfix",attrs:{slot:"header","body-style":"{margin:0}"},slot:"header"},[n("span",[n("b")])]),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.table.loading,expression:"table.loading"}],ref:"table",staticStyle:{width:"100%"},attrs:{data:e.pageData.records,"row-key":"id",lazy:!1,"tree-props":{children:"children",hasChildren:"status"}},on:{"selection-change":e.selectionChange,"row-click":e.rowDblClick,select:e.rowSelect}},[n("el-table-column",{attrs:{type:"selection",width:"55"}}),n("el-table-column",{attrs:{type:"expand",label:"详情",fixed:"left"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-form",{attrs:{"label-position":"left"}},[n("el-form-item",{attrs:{label:"请求方法"}},[n("span",{staticStyle:{color:"#333"}},[e._v("\n                    "+e._s(t.row.method)+"\n                  ")])]),n("el-form-item",{attrs:{label:"参数："}},[n("span",{staticStyle:{color:"#f56c6c"}},[e._v("\n                    "+e._s(t.row.content)+"\n                  ")])])],1)]}}])}),n("el-table-column",{attrs:{label:"日志标题",prop:"title",fixed:"left"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(t.row.title))])]}}])}),n("el-table-column",{attrs:{label:"日志类型",prop:"type",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return["INFO"==t.row.type?n("el-tag",{attrs:{type:""}},[e._v("INFO")]):"ERROR"==t.row.type?n("el-tag",{attrs:{type:"warning"}},[e._v("ERROR")]):n("el-tag",{attrs:{type:"info"}},[e._v("按钮")])]}}])}),n("el-table-column",{attrs:{label:"IP",prop:"ip",width:"150"}}),n("el-table-column",{attrs:{label:"调用方法",prop:"method",width:"220"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v("\n                "+e._s(t.row.method)+"\n              ")])]}}])}),n("el-table-column",{attrs:{label:"耗时",prop:"time",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-tag",{attrs:{type:"danger"}},[e._v(e._s(t.row.time)+"ms")])]}}])}),n("el-table-column",{attrs:{label:"记录时间",prop:"createTime",width:"170"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(t.row.createTime))])]}}])}),n("el-table-column",{attrs:{label:"操作",width:"INFO"==e.logType?75:170,fixed:"right"},scopedSlots:e._u([{key:"default",fn:function(t){return["ERROR"==e.logType?n("el-button",{attrs:{size:"mini"},on:{click:function(n){return e.viewError(t.row)}}},[e._v("查看异常")]):e._e(),n("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(n){return e.removeHandler(t.row)}}},[e._v("删除")])]}}])})],1),n("my-pagination",{attrs:{pageData:e.pageData,pageInfo:e.pageInfo},on:{queryHandler:e.queryHandler}})],1)],1)],1),n("el-dialog",{attrs:{title:e.dialog.title,width:"90%",top:"5vh","custom-class":"dialog-log",visible:e.dialog.visible},on:{"update:visible":function(t){return e.$set(e.dialog,"visible",t)}}},[n("div",{staticClass:"error-box",domProps:{innerHTML:e._s(e.dialog.error)}})])],1)},s=[],a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"bgView"},[n("div",{class:["json-view",e.length?"closeable":""],style:"font-size:"+e.fontSize+"px"},[e.length?n("span",{class:["angle",e.innerclosed?"closed":""],on:{click:e.toggleClose}}):e._e(),n("div",{staticClass:"content-wrap"},[n("p",{staticClass:"first-line"},[e.jsonKey?n("span",{staticClass:"json-key"},[e._v('"'+e._s(e.jsonKey)+'": ')]):e._e(),e.length?n("span",[e._v("\n        "+e._s(e.prefix)+"\n        "+e._s(e.innerclosed?"..."+e.subfix:"")+"\n        "),n("span",{staticClass:"json-note"},[e._v("\n         "+e._s(e.innerclosed?" // count: "+e.length:"")+"\n        ")])]):e._e(),e.length?e._e():n("span",[e._v(e._s(e.isArray?"[]":"{}"))])]),!e.innerclosed&&e.length?n("div",{staticClass:"json-body"},[e._l(e.items,(function(t,r){return[t.isJSON?n("json-view",{key:r,attrs:{closed:e.closed,json:t.value,jsonKey:t.key,isLast:r===e.items.length-1}}):n("p",{key:r,staticClass:"json-item"},[n("span",{staticClass:"json-key"},[e._v("\n              "+e._s(e.isArray?"":'"'+t.key+'"')+"\n          ")]),e._v("\n          :\n          "),n("span",{staticClass:"json-value"},[e._v("\n              "+e._s(t.value+(r===e.items.length-1?"":","))+"\n          ")])])]})),n("span",{directives:[{name:"show",rawName:"v-show",value:!e.innerclosed,expression:"!innerclosed"}],staticClass:"body-line"})],2):e._e(),!e.innerclosed&&e.length?n("p",{staticClass:"last-line"},[n("span",[e._v(e._s(e.subfix))])]):e._e()])])])},o=[],i=(n("1bc78"),n("32ea"),n("4057"),n("e680"),{name:"JsonView",props:{json:[Object,Array],jsonKey:{type:String,default:""},closed:{type:Boolean,default:!1},isLast:{type:Boolean,default:!0},fontSize:{type:Number,default:18}},created:function(){var e=this;this.innerclosed=this.closed,this.$watch("closed",(function(){e.innerclosed=e.closed}))},mounted:function(){this.json},data:function(){return{innerclosed:!0}},methods:{isObjectOrArray:function(e){var t=Object.prototype.toString.call(e),n="[object Array]"===t||"[object Object]"===t;return n},toggleClose:function(){this.innerclosed?this.innerclosed=!1:this.innerclosed=!0}},computed:{isArray:function(){return"[object Array]"===Object.prototype.toString.call(this.json)},length:function(){return this.isArray?this.json.length:Object.keys(this.json).length},subfix:function(){return(this.isArray?"]":"}")+(this.isLast?"":",")},prefix:function(){return this.isArray?"[":"{"},items:function(){var e=this;if(this.isArray)return this.json.map((function(t){var n=e.isObjectOrArray(t);return{value:n?t:JSON.stringify(t),isJSON:n,key:""}}));var t=this.json;return Object.keys(t).map((function(n){var r=t[n],s=e.isObjectOrArray(r);return{value:s?r:JSON.stringify(r),isJSON:s,key:n}}))}}}),l=i,c=(n("5f98"),n("5d22")),u=Object(c["a"])(l,a,o,!1,null,null,null),d=u.exports,f={name:"LogTable",components:{JsonView:d},props:{API:String,logType:String,searchForm:Object},data:function(){return{isOperater:0,dialog:{title:"",error:"",visible:!1},table:{loading:!0,rows:[]},pageInfo:{current:1,size:10,total:0,type:this.logType},pageData:{current:1,total:0,records:[]},method:this.$axios.get}},methods:{selectionChange:function(e){this.isOperater=e.length,this.table.rows=e},rowSelect:function(e,t){console.log(e,t)},viewError:function(e){this.dialog.title=e.title,this.dialog.error=null==e.error?"":e.error.trim(),this.dialog.visible=!0},baseRequest:function(e,t){var n=this,r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return console.log(this.API),this.$axios[e](this.API,t,r).then((function(e){return console.log(e),200==e.code&&(n.dialog.visible=!1),e})).catch((function(e){console.log(e,"1111"),Promise.reject(e)}))},queryHandler:function(e){var t=this,n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];e&&(this.pageInfo.current=e),this.table.loading=!0,this.$axios.get(this.API,Object.assign({},this.pageInfo,this.searchForm),n).then((function(e){t.pageData=e.data?e.data:{current:1,total:0,records:[]},t.table.loading=!1})).catch((function(e){t.table.loading=!1}))},removeHandler:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.table.rows;this.$alert("本次操作一经确认将无法撤回，是否继续","日志删除",{distinguishCancelAndClose:!0,confirmButtonText:"删除",cancelButtonText:"取消"}).then((function(){var n=[];n=Array.isArray(t)?t.map((function(e){return e.id})):[t.id],e.$axios.delete(e.API,n).then((function(t){e.queryHandler(null,!1)}))})).catch((function(e){}))},exportHandler:function(){},rowDblClick:function(e){},typeChange:function(e){console.log(e)}},computed:{formatText:function(e){return e.trim()}},mounted:function(){console.log(this.API),this.queryHandler()},watch:{pageInfo:function(){console.log("我变了")}}},p=f,h=(n("8217"),Object(c["a"])(p,r,s,!1,null,null,null));t["a"]=h.exports},e680:function(e,t,n){"use strict";var r=n("0b34"),s=n("4fd4"),a=n("cea2"),o=n("a83a"),i=n("5d10"),l=n("0926"),c=n("21d9").f,u=n("285b").f,d=n("bb8b").f,f=n("eb34").trim,p="Number",h=r[p],g=h,b=h.prototype,y=a(n("7ee3")(b))==p,m="trim"in String.prototype,v=function(e){var t=i(e,!1);if("string"==typeof t&&t.length>2){t=m?t.trim():f(t,3);var n,r,s,a=t.charCodeAt(0);if(43===a||45===a){if(n=t.charCodeAt(2),88===n||120===n)return NaN}else if(48===a){switch(t.charCodeAt(1)){case 66:case 98:r=2,s=49;break;case 79:case 111:r=8,s=55;break;default:return+t}for(var o,l=t.slice(2),c=0,u=l.length;c<u;c++)if(o=l.charCodeAt(c),o<48||o>s)return NaN;return parseInt(l,r)}}return+t};if(!h(" 0o1")||!h("0b1")||h("+0x1")){h=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof h&&(y?l((function(){b.valueOf.call(n)})):a(n)!=p)?o(new g(v(t)),n,h):v(t)};for(var _,w=n("26df")?c(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),j=0;w.length>j;j++)s(g,_=w[j])&&!s(h,_)&&d(h,_,u(g,_));h.prototype=b,b.constructor=h,n("84e8")(r,p,h)}},eb34:function(e,t,n){var r=n("e99b"),s=n("3ab0"),a=n("0926"),o=n("5dc3"),i="["+o+"]",l="​",c=RegExp("^"+i+i+"*"),u=RegExp(i+i+"*$"),d=function(e,t,n){var s={},i=a((function(){return!!o[e]()||l[e]()!=l})),c=s[e]=i?t(f):o[e];n&&(s[n]=c),r(r.P+r.F*i,"String",s)},f=d.trim=function(e,t){return e=String(s(e)),1&t&&(e=e.replace(c,"")),2&t&&(e=e.replace(u,"")),e};e.exports=d}}]);