(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{"1iQ3":function(e,t,r){"use strict";var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("footer",{staticClass:"login-user-footer"},["login-user"===e.pageName||"login-phone"===e.pageName?[e.qcloudSms?r("span",{on:{click:e.retrieveClick}},[e._v("忘记密码？找回")]):e._e(),e._v(" "),e.registerClose&&e.qcloudSms?r("i"):e._e(),e._v(" "),e.registerClose?r("span",{on:{click:e.signUpClick}},[e._v("注册")]):e._e()]:"wx-login-bd"===e.pageName?[r("span",{on:{click:e.wxSignUpBdClick}},[e._v("没有账号？注册，绑定微信新账号")])]:"wx-sign-up-bd"===e.pageName?[r("span",{on:{click:e.wxLoginBdClick}},[e._v("已有账号？登录，微信绑定账号")])]:"sign-up"===e.pageName?[r("span",{on:{click:e.loginClick}},[e._v("已有账号立即登录")])]:"bind-phone"===e.pageName?[r("span",{on:{click:e.homeClick}},[e._v(e._s("pay"===e.siteMode?"跳过，进入支付费用":"跳过，进入首页"))])]:(e.pageName,[r("span")])],2)},o=[];r.d(t,"a",(function(){return a})),r.d(t,"b",(function(){return o}))},"3AWV":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(r("QbLZ"));r("iUmJ");var o=n(r("zkMY"));function n(e){return e&&e.__esModule?e:{default:e}}t.default=(0,a.default)({name:"login-sign-up-footer"},o.default)},J4oq:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(r("QbLZ"));r("NdMT");var o=n(r("wwLr"));function n(e){return e&&e.__esModule?e:{default:e}}t.default=(0,a.default)({name:"sign-up-view"},o.default)},NdMT:function(e,t,r){},UjaL:function(e,t,r){"use strict";r.r(t);var a=r("1iQ3"),o=r("pz4+");for(var n in o)"default"!==n&&function(e){r.d(t,e,(function(){return o[e]}))}(n);var s=r("KHd+"),i=Object(s.a)(o.default,a.a,a.b,!1,null,null,null);t.default=i.exports},arwB:function(e,t,r){"use strict";var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"sign-up-box"},[r("SignUpHeader"),e._v(" "),r("main",{staticClass:"sign-up-main"},[e._m(0),e._v(" "),r("form",{staticClass:"login-module-form"},[r("van-cell-group",[r("van-field",{attrs:{clearable:"",label:"用户名",placeholder:"请输入您的用户名"},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}}),e._v(" "),r("van-field",{attrs:{clearable:"",type:"password",label:"密码",placeholder:"请填写密码",error:e.error,"error-message":e.errorMessage},on:{clear:function(t){return e.clearError("clear")},focus:function(t){return e.clearError("focus")},input:function(t){return e.clearError("input")},blur:function(t){return e.clearError("blur")}},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1)],1),e._v(" "),r("div",{staticClass:"sign-up-btn"},[r("van-button",{attrs:{loading:e.btnLoading,type:"primary"},on:{click:e.signUpClick}},[e._v("注册")])],1)]),e._v(" "),r("SignUpFooter")],1)},o=[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"login-module-title-box"},[t("p",{staticClass:"login-module-title"},[this._v("注册")])])}];r.d(t,"a",(function(){return a})),r.d(t,"b",(function(){return o}))},fb1Y:function(e,t,r){"use strict";r.r(t);var a=r("arwB"),o=r("vMx2");for(var n in o)"default"!==n&&function(e){r.d(t,e,(function(){return o[e]}))}(n);var s=r("KHd+"),i=Object(s.a)(o.default,a.a,a.b,!1,null,null,null);t.default=i.exports},"pz4+":function(e,t,r){"use strict";r.r(t);var a=r("3AWV"),o=r.n(a);for(var n in a)"default"!==n&&function(e){r.d(t,e,(function(){return a[e]}))}(n);t.default=o.a},vMx2:function(e,t,r){"use strict";r.r(t);var a=r("J4oq"),o=r.n(a);for(var n in a)"default"!==n&&function(e){r.d(t,e,(function(){return a[e]}))}(n);t.default=o.a},wwLr:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s(r("JZuw")),o=s(r("UjaL"));r("E2jd");var n=s(r("VVfg"));s(r("6NK7"));function s(e){return e&&e.__esModule?e:{default:e}}t.default={data:function(){return{username:"",password:"",btnLoading:!1,error:!1,errorMessage:"",phoneStatus:"",siteMode:""}},components:{SignUpHeader:a.default,SignUpFooter:o.default},methods:{signUpClick:function(){var e=this;this.appFetch({url:"register",method:"post",data:{data:{type:"users",attributes:{username:this.username,password:this.password}}}}).then((function(t){console.log(t),e.getForum().then((function(){if(t.errors)t.errors[0].detail?e.$toast.fail(t.errors[0].code+"\n"+t.errors[0].detail[0]):e.$toast.fail(t.errors[0].code);else{e.$toast.success("注册成功");var r=t.data.attributes.access_token,a=t.data.id,o=t.data.attributes.refresh_token;n.default.setLItem("Authorization",r),n.default.setLItem("tokenId",a),n.default.setLItem("refreshToken",o),e.phoneStatus?e.$router.push({path:"bind-phone"}):"pay"===e.siteMode?e.$router.push({path:"pay-the-fee"}):"public"===e.siteMode?e.$router.push({path:"/"}):console.log("缺少参数，请刷新页面")}}))})).catch((function(e){console.log(e)}))},clearError:function(e){switch(e){case"clear":this.error=!1,this.errorMessage="";break;case"blur":""!==this.password&&(this.error=!0);break;default:this.error=!1}},getForum:function(){var e=this;return this.appFetch({url:"forum",method:"get",data:{}}).then((function(t){console.log(t),t.errors?t.errors[0].detail?e.$toast.fail(t.errors[0].code+"\n"+t.errors[0].detail[0]):e.$toast.fail(t.errors[0].code):(e.phoneStatus=t.readdata._data.qcloud.qcloud_sms,e.siteMode=t.readdata._data.set_site.site_mode,n.default.setLItem("siteInfo",t.readdata))})).catch((function(e){console.log(e)}))}},created:function(){this.getForum()}}},zkMY:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,o=r("VVfg"),n=(a=o)&&a.__esModule?a:{default:a};t.default={data:function(){return{pageName:"login",siteMode:"",registerClose:!0,qcloudSms:!0}},methods:{retrieveClick:function(){this.$router.push("retrieve-pwd")},signUpClick:function(){this.$router.push("sign-up")},wxSignUpBdClick:function(){this.$router.push("/wx-sign-up-bd")},wxLoginBdClick:function(){this.$router.push("/wx-login-bd")},loginClick:function(){this.$router.push("/login-user")},homeClick:function(){switch(this.siteMode){case"pay":this.$router.push({path:"pay-the-fee"});break;case"public":this.$router.push({path:"/"});break;default:console.log("参数错误，请重新刷新页面")}},getForum:function(){var e=this;this.appFetch({url:"forum",method:"get",data:{}}).then((function(t){console.log(t),e.siteMode=t.readdata._data.set_site.site_mode,e.registerClose=t.readdata._data.set_reg.register_close,e.qcloudSms=t.readdata._data.qcloud.qcloud_sms,n.default.setLItem("siteInfo",t.readdata)})).catch((function(e){console.log(e)}))}},created:function(){this.pageName=this.$router.history.current.name,this.getForum()}}}}]);