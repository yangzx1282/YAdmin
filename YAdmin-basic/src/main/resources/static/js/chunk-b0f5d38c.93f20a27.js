(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b0f5d38c"],{1799:function(e,n,t){"use strict";t.r(n);var a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"box"},[t("el-pagination",{attrs:{background:"","current-page":e.pageData.current,"page-sizes":[5,10,25,50,100],"page-size":10,layout:"prev, pager, next, sizes",total:e.pageData.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(n){return e.$set(e.pageData,"current",n)},"update:current-page":function(n){return e.$set(e.pageData,"current",n)}}})],1)},r=[],c={name:"Pagination",data:function(){return{}},methods:{handleSizeChange:function(e){console.log("每页 ".concat(e," 条")),this.pageInfo.size=e,this.$emit("queryHandler")},handleCurrentChange:function(e){console.log("当前页: ".concat(e)),this.pageInfo.current=e,this.$emit("queryHandler")}},props:{pageData:Object,pageInfo:Object}},u=c,o=(t("6ccd"),t("5d22")),i=Object(o["a"])(u,a,r,!1,null,null,null);n["default"]=i.exports},"6ccd":function(e,n,t){"use strict";t("9893")},9893:function(e,n,t){}}]);