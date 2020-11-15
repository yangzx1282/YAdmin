(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0dd451"],{8157:function(e,t,o){"use strict";o.r(t);var l=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("el-row",{attrs:{type:"flex",justify:"space-between"}},[o("el-col",{attrs:{span:12}},[o("el-button",{attrs:{type:"primary",icon:"el-icon-circle-plus-outline",size:"small"},on:{click:e.addHandler}},[e._v("新增")]),o("el-button",{attrs:{type:"success",icon:"el-icon-edit",size:"small",disabled:1!=e.isOperater},on:{click:function(t){return e.modifyHandler(void 0)}}},[e._v("修改")]),o("el-button",{attrs:{type:"danger",icon:"el-icon-delete",size:"small",disabled:0==e.isOperater},on:{click:function(t){return e.removeHandler(void 0)}}},[e._v("删除")]),o("el-button",{attrs:{type:"warning",icon:"el-icon-document-add",size:"small",disabled:0==e.isOperater},on:{click:e.exportHandler}},[e._v("导出")])],1),o("el-col",{attrs:{span:3}},[o("el-button",{attrs:{type:"",plain:"",size:"mini",icon:"el-icon-refresh"},on:{click:function(t){return e.queryHandler()}}}),o("el-button",{attrs:{type:"",plain:"",size:"mini",icon:"el-icon-full-screen"}})],1)],1),o("el-row",{attrs:{type:"flex",justify:"space-around",gutter:20}},[o("el-col",[o("el-card",{staticClass:"box-card",attrs:{shadow:"never"}},[o("div",{staticClass:"clearfix",attrs:{slot:"header","body-style":"{margin:0}"},slot:"header"},[o("span",[o("b")])]),o("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.table.loading,expression:"table.loading"}],ref:"table",staticStyle:{width:"100%"},attrs:{data:e.pageData.records,"row-key":"id",lazy:!0,load:e.tableLoad,"tree-props":{children:"children",hasChildren:"status"}},on:{"selection-change":e.selectionChange,"row-click":e.rowDblClick,select:e.rowSelect}},[o("el-table-column",{attrs:{type:"selection",width:"55"}}),o("el-table-column",{attrs:{label:"菜单名称",prop:"name",fixed:"left"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("i",{class:t.row.icon,staticStyle:{"margin-right":"5px"}}),o("span",[e._v(e._s(t.row.name))])]}}])}),o("el-table-column",{attrs:{label:"组件路径",prop:"path",width:"120"}}),o("el-table-column",{attrs:{label:"组件名称",prop:"component",width:"120"}}),o("el-table-column",{attrs:{label:"排序",prop:"order",width:"70"}}),o("el-table-column",{attrs:{label:"类型",prop:"type",width:"70"},scopedSlots:e._u([{key:"default",fn:function(t){return[1==t.row.type?o("el-tag",{attrs:{type:"danger"}},[e._v("目录")]):2==t.row.type?o("el-tag",{attrs:{type:"warning"}},[e._v("菜单")]):3==t.row.type?o("el-tag",{attrs:{type:"info"}},[e._v("按钮")]):e._e()]}}])}),o("el-table-column",{attrs:{label:"状态",prop:"status",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("el-switch",{attrs:{"active-value":1,"active-color":"#13ce66","inactive-value":t.row.status>1,"inactive-color":"#ff4949"},nativeOn:{click:function(o){return e.statusChange(t.row)}},model:{value:t.row.status,callback:function(o){e.$set(t.row,"status",o)},expression:"scope.row.status"}})]}}])}),o("el-table-column",{attrs:{label:"操作",width:"150",fixed:"right"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("el-button",{attrs:{size:"mini"},on:{click:function(o){return e.modifyHandler(t.row)}}},[e._v("编辑")]),o("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(o){return e.removeHandler(t.row)}}},[e._v("删除")])]}}])})],1),o("my-pagination",{attrs:{pageData:e.pageData,pageInfo:e.pageInfo},on:{queryHandler:e.queryHandler}})],1)],1)],1),o("el-dialog",{attrs:{title:e.dialog.title+"菜单",visible:e.dialog.visible,"close-on-click-modal":!1,width:"50%"},on:{"update:visible":function(t){return e.$set(e.dialog,"visible",t)}}},[o("el-form",{ref:"modelForm",attrs:{model:e.modelForm,rules:e.form.formRules,"status-icon":"","label-position":"right",size:"small","label-width":"80px"}},[o("el-row",{attrs:{type:"flex",justify:"space-between"}},[o("el-col",{attrs:{span:24}},[o("el-form-item",{attrs:{label:"类型"}},[o("el-radio-group",{attrs:{size:"small"},model:{value:e.modelForm.type,callback:function(t){e.$set(e.modelForm,"type",t)},expression:"modelForm.type"}},[o("el-radio-button",{attrs:{disabled:null!=e.modelForm.id&&1!=e.modelForm.type?"disabled":null,label:1}},[e._v("目录")]),o("el-radio-button",{attrs:{disabled:null!=e.modelForm.id&&2!=e.modelForm.type?"disabled":null,label:2}},[e._v("菜单")]),o("el-radio-button",{attrs:{disabled:null!=e.modelForm.id&&3!=e.modelForm.type?"disabled":null,label:3}},[e._v("按钮")])],1)],1)],1),o("el-col",{staticStyle:{display:"none"},attrs:{span:24}},[o("el-form-item",{attrs:{label:"id"}},[o("el-input",{model:{value:e.modelForm.id,callback:function(t){e.$set(e.modelForm,"id",t)},expression:"modelForm.id"}})],1)],1),o("el-col",{attrs:{span:12}},[o("el-form-item",{attrs:{label:e.form.lable[e.modelForm.type]+"名称",prop:"name"}},[o("el-input",{model:{value:e.modelForm.name,callback:function(t){e.$set(e.modelForm,"name",t)},expression:"modelForm.name"}})],1)],1),3!=e.modelForm.type?o("el-col",{attrs:{span:12}},[o("el-form-item",{attrs:{label:e.form.lable[e.modelForm.type]+"路径",prop:"path"}},[o("el-input",{attrs:{placeholder:"请输入"+e.form.lable[e.modelForm.type]+"路径"},model:{value:e.modelForm.path,callback:function(t){e.$set(e.modelForm,"path",t)},expression:"modelForm.path"}})],1)],1):e._e(),2==e.modelForm.type?o("el-col",{attrs:{span:12}},[o("el-form-item",{attrs:{label:"组件名称",prop:"component"}},[o("el-input",{attrs:{placeholder:"请输入组件名称"},model:{value:e.modelForm.component,callback:function(t){e.$set(e.modelForm,"component",t)},expression:"modelForm.component"}})],1)],1):e._e(),3==e.modelForm.type?o("el-col",{attrs:{span:12}},[o("el-form-item",{attrs:{label:"权限标识",prop:"permission"}},[o("el-input",{attrs:{placeholder:"请输入权限标识"},model:{value:e.modelForm.permission,callback:function(t){e.$set(e.modelForm,"permission",t)},expression:"modelForm.permission"}})],1)],1):e._e(),3!=e.modelForm.type?o("el-col",{attrs:{span:12}},[o("el-form-item",{attrs:{label:"图标"}},[o("el-input",{attrs:{"prefix-icon":e.modelForm.icon},model:{value:e.modelForm.icon,callback:function(t){e.$set(e.modelForm,"icon",t)},expression:"modelForm.icon"}})],1)],1):e._e(),o("el-col",{attrs:{span:12}},[o("el-form-item",{attrs:{label:"排序"}},[o("el-input-number",{staticStyle:{width:"100%"},attrs:{min:1,max:100,label:"排序"},model:{value:e.modelForm.order,callback:function(t){e.$set(e.modelForm,"order",t)},expression:"modelForm.order"}})],1)],1),o("el-col",{attrs:{span:1==e.modelForm.type?7:12}},[o("el-form-item",{attrs:{label:"状态"}},[o("el-select",{attrs:{placeholder:"默认状态为启用"},model:{value:e.modelForm.status,callback:function(t){e.$set(e.modelForm,"status",t)},expression:"modelForm.status"}},[o("el-option",{attrs:{label:"启用",value:1}}),o("el-option",{attrs:{label:"禁用",value:2}})],1)],1)],1),o("el-col",{attrs:{span:1==e.modelForm.type?16:24}},[o("el-form-item",{attrs:{label:3==e.modelForm.type?"上级菜单":"上级目录",prop:"parentMenu"}},[o("el-cascader",{staticStyle:{width:"100%"},attrs:{options:e.form.menuTree,props:{checkStrictly:!0,value:"id",label:"name",lazy:!1,emitPath:!1}},scopedSlots:e._u([{key:"default",fn:function(t){var l=t.node,a=t.data;return[o("span",[e._v(e._s(a.name))]),l.isLeaf?e._e():o("span",[e._v(" ("+e._s(0==a.children.length?a.children=null:a.children.length)+") ")])]}}]),model:{value:e.modelForm.parentMenu,callback:function(t){e.$set(e.modelForm,"parentMenu",t)},expression:"modelForm.parentMenu"}})],1)],1)],1)],1),o("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{attrs:{size:"medium"},on:{click:function(t){e.dialog.visible=!1}}},[e._v("取 消")]),o("el-button",{attrs:{type:"primary",size:"medium"},on:{click:function(t){return e.submitHandler(0)}}},[e._v(e._s(e.dialog.submitText))])],1)],1)],1)},a=[],n=(o("e10e"),o("6d57"),o("cc57"),{name:"MenuTable",data:function(){var e=this,t=function(t,o,l){if(3!=e.modelForm.type&&!o)return l(new Error("路径不能为空"));l()},o=function(t,o,l){if(2==e.modelForm.type&&!o)return l(new Error("组件名称不能为空"));l()},l=function(t,o,l){if(3==e.modelForm.type&&!o)return l(new Error("权限标识不能为空"));l()};return{isOperater:0,table:{loading:!0,rows:[]},dialog:{visible:!1,title:"",submitText:"提交"},pageInfo:{current:1,size:10,total:0,parentMenu:0},modelForm:{name:"",type:1,parent_menu:null,icon:null,order:9,path:null,component:null,permission:null,status:1},form:{lable:["","目录","菜单","按钮"],type:1,menuTree:[{id:"0",name:"根目录"}],formRules:{name:[{required:!0,message:"名称不可以为空",trigger:"blur"},{min:4,max:8,message:"长度在3-5个字符之间",trigger:"blur"}],path:[{required:!0,validator:t,trigger:"blur"}],component:[{required:!0,validator:o,trigger:"blur"},{min:2,max:20,message:"长度在2-20个字符之间"}],permission:[{required:!0,validator:l,trigger:"blur"},{min:5,max:20,message:"长度在5-20个字符之间"}],parentMenu:[{required:!0,message:"请选择上级菜单或目录",trigger:"blur"}]}},pageData:{current:1,total:0,records:[]},method:this.$axios.get}},methods:{statusChange:function(e){var t=this;1!=e.status&&this.$alert("是否将当前"+e.name+"设置为禁用状态，这将会影响其所有子菜单","禁用菜单",{distinguishCancelAndClose:!0,confirmButtonText:"禁用",cancelButtonText:"取消"}).then((function(){t.$axios.post(t.API,{id:e.id,status:0},!1).then((function(e){console.log(e),200==e.code&&t.$notify({title:"修改状态成功",type:"success"})})).catch((function(e){t.$notify({title:"修改错误",type:"error"})}))})).catch((function(t){e.status=1}))},tableLoad:function(e,t,o){var l={current:1,size:100,parentMenu:e.id};this.$axios.get(this.API,l).then((function(e){200==e.code&&(console.log(e.data),o(e.data.records))}))},selectionChange:function(e){this.isOperater=e.length,this.table.rows=e},rowSelect:function(e,t){console.log(e,t)},baseRequest:function(e){var t=this;return console.log(this.API),this.method(this.API,e).then((function(e){return console.log(e),200==e.code&&(t.dialog.visible=!1),e})).catch((function(e){console.log(e,"1111"),Promise.reject(e)}))},queryHandler:function(){var e=this;this.table.loading=!0,this.$axios.get(this.API,this.pageInfo).then((function(t){e.pageData=t.data?t.data:{current:1,total:0,records:[]},e.table.loading=!1})).catch((function(t){e.table.loading=!1}))},clearForm:function(e){Object.keys(e).forEach((function(t){e[t]=null}))},addHandler:function(){this.modelForm={type:1,order:3,status:1},this.dialog.title="新增",this.dialog.submitText="新增",this.dialog.visible=!0,this.method=this.$axios.put},modifyHandler:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.table.rows.slice(-1)[0];e.parentMenu=0==e.parentMenu?"0":e.parentMenu,this.modelForm=e,this.dialog.title="修改",this.dialog.submitText="更新",this.dialog.visible=!0,this.method=this.$axios.post},removeHandler:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.table.rows;this.$alert("本次操作一经确认将无法撤回，是否继续","角色删除",{distinguishCancelAndClose:!0,confirmButtonText:"删除",cancelButtonText:"取消"}).then((function(){e.method=e.$axios.delete,console.log("删除了"),console.log(t),Array.isArray(t)?e.baseRequest(t.map((function(e){return e.id}))):e.baseRequest([t.id])})).catch((function(e){}))},exportHandler:function(){},submitHandler:function(e){var t=this;console.log(this.modelForm),this.$refs["modelForm"].validate((function(e){if(!e)return!1;t.baseRequest(t.modelForm)}))},rowDblClick:function(e){},typeChange:function(e){console.log(e)},queryMenuTree:function(){var e=this;this.$axios.get(this.$api.MENU_API,{showType:"tree"},!1).then((function(t){console.log(e.form.menuTree),e.form.menuTree=e.form.menuTree.concat(t.data)}))}},mounted:function(){console.log(this.API),this.queryHandler(),this.queryMenuTree()},watch:{pageInfo:function(){console.log("我变了")}},props:{API:String}}),r=n,i=o("9ca4"),s=Object(i["a"])(r,l,a,!1,null,null,null);t["default"]=s.exports}}]);