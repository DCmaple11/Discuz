(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{RK12:function(t,n,i){"use strict";i.r(n);var o=i("sqWz"),e=i("ewB2");for(var s in e)"default"!==s&&function(t){i.d(n,t,(function(){return e[t]}))}(s);var a=i("KHd+"),c=Object(a.a)(e.default,o.a,o.b,!1,null,null,null);n.default=c.exports},ewB2:function(t,n,i){"use strict";i.r(n);var o=i("utrI"),e=i.n(o);for(var s in o)"default"!==s&&function(t){i.d(n,t,(function(){return o[t]}))}(s);n.default=e.a},i4TU:function(t,n,i){},"qjp+":function(t,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={data:function(){return{code:""}},created:function(){},methods:{getUrlCode:function(){var t=this;this.code=this.$utils.getUrlKey("code"),alert(code),this.appFetch({url:"weixin",method:"get",data:{code:this.code}}).then((function(t){alert(65756765)}),(function(n){100004==n.errors[0].status&&t.$router.go(-1)}))},loginWxClick:function(){this.$router.push({path:"/wx-login-bd"})},loginPhoneClick:function(){this.$router.push({path:"/login-phone"})}}}},sqWz:function(t,n,i){"use strict";var o=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"login-user-box"},[i("comHeader"),t._v(" "),i("main",{staticClass:"login-user-box-main"},[i("img",{staticClass:"logo weLogo",attrs:{src:t.appConfig.staticBaseUrl+"/images/logo.png"}}),t._v(" "),i("van-button",{staticClass:"weAuthorizeBtn",attrs:{type:"primary","loading-text":"授权中..."},on:{click:t.getUrlCode}},[t._v("去微信授权")]),t._v(" "),i("div",{staticClass:"login-user-method"},[i("div",{staticClass:"login-user-method-box"},[i("van-divider",[t._v("其他登录方式")])],1),t._v(" "),i("div",{staticClass:"login-user-method-icon"},[i("div",{staticClass:"login-user-method-icon-box"},[i("i",{staticClass:"login-user-method-icon-ring iconfont",on:{click:t.loginPhoneClick}},[i("span",{staticClass:"icon iconfont icon-shouji",staticStyle:{color:"rgba(136, 136, 136, 1)"}})]),t._v(" "),i("i",{staticClass:"login-user-method-icon-ring iconfont",on:{click:t.loginWxClick}},[i("span",{staticClass:"icon iconfont icon-weixin",staticStyle:{color:"rgba(136, 136, 136, 1)"}})])])])])],1)],1)},e=[];i.d(n,"a",(function(){return o})),i.d(n,"b",(function(){return e}))},utrI:function(t,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=a(i("QbLZ")),e=a(i("qjp+")),s=a(i("JZuw"));function a(t){return t&&t.__esModule?t:{default:t}}i("i4TU"),i("E2jd"),n.default=(0,o.default)({name:"wechat",components:{comHeader:s.default}},e.default)}}]);