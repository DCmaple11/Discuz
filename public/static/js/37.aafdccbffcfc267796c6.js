(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{"1iQ3":function(e,t,o){"use strict";var i=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("footer",{staticClass:"login-user-footer"},["login-user"===e.pageName||"login-phone"===e.pageName?[e.qcloudSms?o("span",{on:{click:e.retrieveClick}},[e._v("忘记密码？找回")]):e._e(),e._v(" "),e.registerClose&&e.qcloudSms?o("i"):e._e(),e._v(" "),e.registerClose?o("span",{on:{click:e.signUpClick}},[e._v("注册")]):e._e()]:"wx-login-bd"===e.pageName?[o("span",{on:{click:e.wxSignUpBdClick}},[e._v("没有账号？注册，绑定微信新账号")])]:"wx-sign-up-bd"===e.pageName?[o("span",{on:{click:e.wxLoginBdClick}},[e._v("已有账号？登录，微信绑定账号")])]:"sign-up"===e.pageName?[o("span",{on:{click:e.loginClick}},[e._v("已有账号立即登录")])]:"bind-phone"===e.pageName?[o("span",{on:{click:e.homeClick}},[e._v(e._s("pay"===e.siteMode?"跳过，进入支付费用":"跳过，进入首页"))])]:(e.pageName,[o("span")])],2)},n=[];o.d(t,"a",(function(){return i})),o.d(t,"b",(function(){return n}))},"3AWV":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=s(o("QbLZ"));o("iUmJ");var n=s(o("zkMY"));function s(e){return e&&e.__esModule?e:{default:e}}t.default=(0,i.default)({name:"login-sign-up-footer"},n.default)},"5JD/":function(e,t,o){"use strict";o.r(t);var i=o("HE2v"),n=o.n(i);for(var s in i)"default"!==s&&function(e){o.d(t,e,(function(){return i[e]}))}(s);t.default=n.a},HE2v:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=s(o("QbLZ"));o("NdMT"),o("iUmJ");var n=s(o("SHGB"));function s(e){return e&&e.__esModule?e:{default:e}}t.default=(0,i.default)({name:"login-view"},n.default)},JtbI:function(e,t,o){"use strict";var i=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"login-user-box"},[o("LoginHeader"),e._v(" "),o("main",{staticClass:"login-user-box-main"},[e._m(0),e._v(" "),o("form",{staticClass:"user-login-form login-module-form"},[o("van-cell-group",[o("van-field",{attrs:{clearable:"",label:"用户名",placeholder:"请输入您的用户名"},model:{value:e.userName,callback:function(t){e.userName=t},expression:"userName"}}),e._v(" "),o("van-field",{attrs:{type:"password",clearable:"",label:"密码",placeholder:"请填写密码"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1)],1),e._v(" "),o("div",{staticClass:"login-user-btn"},[o("van-button",{attrs:{type:"primary",loading:e.btnLoading,"loading-text":"登录中..."},on:{click:e.loginClick}},[e._v("登录")])],1),e._v(" "),o("div",{staticClass:"login-user-method"},[o("div",{staticClass:"login-user-method-box"},[o("van-divider",{directives:[{name:"show",rawName:"v-show",value:e.phoneStatus||e.wxLoginShow,expression:"phoneStatus ||  wxLoginShow"}]},[e._v("其他登录方式")])],1),e._v(" "),o("div",{staticClass:"login-user-method-icon"},[o("div",{staticClass:"login-user-method-icon-box",class:{justifyCenter:e.isOne}},[e.phoneStatus?o("i",{staticClass:"login-user-method-icon-ring iconfont",on:{click:e.loginPhoneClick}},[o("span",{staticClass:"icon iconfont icon-shouji",staticStyle:{color:"rgba(136, 136, 136, 1)"}})]):e._e(),e._v(" "),o("i",{directives:[{name:"show",rawName:"v-show",value:e.wxLoginShow,expression:"wxLoginShow"}],staticClass:"login-user-method-icon-ring iconfont",on:{click:e.loginWxClick}},[o("span",{staticClass:"icon iconfont icon-weixin",staticStyle:{color:"rgba(136, 136, 136, 1)"}})])])])])]),e._v(" "),o("LoginFooter")],1)},n=[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"login-user-title-box login-module-title-box"},[t("p",{staticClass:"login-user-title-p login-module-title"},[this._v("用户名登录")])])}];o.d(t,"a",(function(){return i})),o.d(t,"b",(function(){return n}))},NdMT:function(e,t,o){},SHGB:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=u(o("QbLZ")),n=u(o("JZuw")),s=u(o("UjaL")),a=u(o("VVfg")),r=o("L2JU");function u(e){return e&&e.__esModule?e:{default:e}}t.default={data:function(){return{userName:"",password:"",userId:"2",btnLoading:!1,wxLoginShow:!0,isOne:!1,siteMode:"",phoneStatus:"",wxHref:"",isPC:!1,isCodeState:0,wxStatus:""}},computed:(0,r.mapState)({status:function(e){return e.appSiteModule.status}}),mounted:function(){},methods:(0,i.default)({},(0,r.mapMutations)({setStatus:"appSiteModule/SET_STATUS",setOpenId:"appSiteModule/SET_OPENID"}),{loginClick:function(){var e=this;this.setStatus("啊啦啦啦"),this.appFetch({url:"login",method:"post",data:{data:{attributes:{username:this.userName,password:this.password}}}}).then((function(t){if(console.log(t),t.errors)t.errors[0].detail?e.$toast.fail(t.errors[0].code+"\n"+t.errors[0].detail[0]):e.$toast.fail(t.errors[0].code);else{e.$toast.success("登录成功");var o=t.data.attributes.access_token,i=t.data.id,n=t.data.attributes.refresh_token;a.default.setLItem("Authorization",o),a.default.setLItem("tokenId",i),a.default.setLItem("refreshToken",n),e.getUsers(i).then((function(t){if(t.errors){var o=e.appCommonH.errorHandling(t.errors,!0);e.$toast.fail(o[0].errorDetail)}else t.readdata._data.paid?e.$router.push({path:"/"}):"pay"===e.siteMode?e.$router.push({path:"pay-circle-login"}):"public"===e.siteMode?e.$router.push({path:"/"}):console.log("缺少参数，请刷新页面")}))}})).catch((function(e){console.log(e)}))},loginWxClick:function(){var e=this;this.getWxLogin().then((function(t){t.errors?e.$toast.fail(t.errors[0].code):window.location.href=t.readdata._data.location}))},loginPhoneClick:function(){this.$router.push({path:"/login-phone"})},getForum:function(){var e=this;this.appFetch({url:"forum",method:"get",data:{}}).then((function(t){console.log(t),e.phoneStatus=t.readdata._data.qcloud.qcloud_sms,e.siteMode=t.readdata._data.set_site.site_mode,a.default.setLItem("siteInfo",t.readdata)})).catch((function(e){console.log(e)}))},getUsers:function(e){var t=this;return this.appFetch({url:"users",method:"get",splice:"/"+e,headers:{Authorization:"Bearer "+a.default.getLItem("Authorization")},data:{include:["groups"]}}).then((function(e){if(console.log(e),!e.errors)return e;t.$toast.fail(e.errors[0].code)})).catch((function(e){console.log(e)}))},getWxLogin:function(){return this.appFetch({url:"wxLogin",method:"get",data:{}}).then((function(e){return console.log(e),e})).catch((function(e){console.log(e)}))}}),created:function(){localStorage.clear();var e=this.appCommonH.isWeixin().isWeixin,t=this.appCommonH.isWeixin().isPhone;console.log(this.$router.history),console.log(this.$router.history.current.query.code),console.log(this.$router.history.current.query.state),!0===e?console.log("微信登录"):!0===t?(console.log("手机浏览器登录"),this.wxLoginShow=!1,this.isOne=!0):(console.log("pc登录"),this.isPC=!0),this.getForum()},components:{LoginHeader:n.default,LoginFooter:s.default}}},UjaL:function(e,t,o){"use strict";o.r(t);var i=o("1iQ3"),n=o("pz4+");for(var s in n)"default"!==s&&function(e){o.d(t,e,(function(){return n[e]}))}(s);var a=o("KHd+"),r=Object(a.a)(n.default,i.a,i.b,!1,null,null,null);t.default=r.exports},lEHL:function(e,t,o){"use strict";o.r(t);var i=o("JtbI"),n=o("5JD/");for(var s in n)"default"!==s&&function(e){o.d(t,e,(function(){return n[e]}))}(s);var a=o("KHd+"),r=Object(a.a)(n.default,i.a,i.b,!1,null,null,null);t.default=r.exports},"pz4+":function(e,t,o){"use strict";o.r(t);var i=o("3AWV"),n=o.n(i);for(var s in i)"default"!==s&&function(e){o.d(t,e,(function(){return i[e]}))}(s);t.default=n.a},zkMY:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i,n=o("VVfg"),s=(i=n)&&i.__esModule?i:{default:i};t.default={data:function(){return{pageName:"login",siteMode:"",registerClose:!0,qcloudSms:!0}},methods:{retrieveClick:function(){this.$router.push("retrieve-pwd")},signUpClick:function(){this.$router.push("sign-up")},wxSignUpBdClick:function(){this.$router.push("/wx-sign-up-bd")},wxLoginBdClick:function(){this.$router.push("/wx-login-bd")},loginClick:function(){this.$router.push("/login-user")},homeClick:function(){switch(this.siteMode){case"pay":this.$router.push({path:"pay-the-fee"});break;case"public":this.$router.push({path:"/"});break;default:console.log("参数错误，请重新刷新页面")}},getForum:function(){var e=this;this.appFetch({url:"forum",method:"get",data:{}}).then((function(t){console.log(t),e.siteMode=t.readdata._data.set_site.site_mode,e.registerClose=t.readdata._data.set_reg.register_close,e.qcloudSms=t.readdata._data.qcloud.qcloud_sms,s.default.setLItem("siteInfo",t.readdata)})).catch((function(e){console.log(e)}))}},created:function(){this.pageName=this.$router.history.current.name,this.getForum()}}}}]);