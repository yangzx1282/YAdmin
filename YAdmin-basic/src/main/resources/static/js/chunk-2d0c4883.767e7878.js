(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c4883"],{"3adc":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-card",{staticClass:"box-card"},[a("el-row",[a("el-col",{attrs:{span:10}},[a("el-form",{ref:"modelForm",attrs:{rules:e.formRules,model:e.modelForm,size:"small","label-width":"70px"}},[a("el-form-item",{attrs:{label:"头像"}},[a("el-row",{attrs:{type:"flex",align:"middle"}},[a("el-col",{attrs:{span:10}},[a("el-upload",{staticClass:"avatar-uploader",attrs:{action:e.$api.FILE_UPLOAD,"show-file-list":!1,headers:e.headers,name:"files",data:{type:"avatar"},"on-success":e.handleAvatarSuccess,"on-error":e.handleAvatarError,"before-upload":e.beforeAvatarUpload}},[e.modelForm.avatar?a("el-avatar",{attrs:{size:100,src:e.$tools.buildAvatar(e.modelForm.avatar)}},[a("img",{attrs:{src:"https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"}})]):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"})],1)],1),a("el-col",{attrs:{span:12}})],1)],1),a("el-form-item",{attrs:{label:"用户名"}},[a("el-input",{staticStyle:{display:"none"},attrs:{disabled:!0},model:{value:e.modelForm.id,callback:function(t){e.$set(e.modelForm,"id",t)},expression:"modelForm.id"}}),a("el-input",{attrs:{disabled:!0},model:{value:e.modelForm.username,callback:function(t){e.$set(e.modelForm,"username",t)},expression:"modelForm.username"}})],1),a("el-form-item",{attrs:{label:"昵称",prop:"nickname"}},[a("el-input",{model:{value:e.modelForm.nickname,callback:function(t){e.$set(e.modelForm,"nickname",t)},expression:"modelForm.nickname"}})],1),a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"性别",prop:"gender"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.modelForm.gender,callback:function(t){e.$set(e.modelForm,"gender",t)},expression:"modelForm.gender"}},e._l(e.genderOps,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"年龄",prop:"age"}},[a("el-input",{model:{value:e.modelForm.age,callback:function(t){e.$set(e.modelForm,"age",e._n(t))},expression:"modelForm.age"}})],1)],1)],1),a("el-form-item",{attrs:{label:"邮箱",prop:"email"}},[a("el-input",{attrs:{type:"email"},model:{value:e.modelForm.email,callback:function(t){e.$set(e.modelForm,"email",t)},expression:"modelForm.email"}})],1),a("el-form-item",{staticStyle:{"text-align":"right"}},[a("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("保存")])],1)],1)],1),a("el-col",{attrs:{span:14}},[a("el-timeline",e._l(e.loginTrack,(function(t){return a("el-timeline-item",{key:t.id,attrs:{timestamp:t.loginTime,placement:"top"}},[a("el-card",[a("h4",[e._v("在IP "+e._s(t.loginIp)+" 登录")])])],1)})),1)],1)],1)],1)],1)},r=[],o=(a("32ea"),a("1bc78"),{name:"Mine",data:function(){return{API:this.$api.PROP_API,headers:{Authorization:"Bearer "+this.$store.state.token},loginTrack:[],genderOps:[{value:"",label:"请选择性别"},{value:"男",label:"男"},{value:"女",label:"女"}],modelForm:{id:null,username:"",nickname:"",avatar:"",email:"",age:null,gender:""},formRules:{nickname:[{required:!0,message:"用户昵称不可以为空",trigger:"blur"},{min:4,max:10,message:"长度在4-10个字符之间",trigger:"blur"}]}}},methods:{beforeAvatarUpload:function(){},handleAvatarSuccess:function(e,t,a){console.log(e),200==e.code?(this.$notify({title:e.msg,type:"success"}),this.modelForm.avatar=e.data,console.log(this.modelForm.avatar)):this.$notify({title:e.msg,type:"waring"})},handleAvatarError:function(e){this.$notify({title:"上传失败",type:"error"})},onSubmit:function(){var e=this;this.$refs["modelForm"].validate((function(t){if(!t)return!1;e.$axios.post(e.$api.USER_INFO,e.modelForm).then((function(t){if(200==t.code){var a=e.$store.state.user;a=Object.assign(a,e.modelForm),e.$store.commit("setUser",a)}})).catch((function(e){}))}))},queryUserTrack:function(){var e=this;this.$axios.get(this.$api.USER_TRACK,{size:5},!1).then((function(t){200==t.code&&(e.loginTrack=t.data)})).catch((function(t){e.$notify({title:res.msg,type:"error"})}))}},computed:{buildAvatar:function(){return this.$api.SERVER_UPLOAD+this.$tools.buildAvatar(this.modelForm.avatar)}},mounted:function(){var e=this;this.queryUserTrack();var t=setInterval((function(){e.$store.state.user&&(clearInterval(t),Object.keys(e.modelForm).forEach((function(t){e.modelForm[t]=e.$store.state.user[t]})))}),50)}}),s=o,n=a("5d22"),i=Object(n["a"])(s,l,r,!1,null,null,null);t["default"]=i.exports}}]);