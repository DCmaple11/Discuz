(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{"1a3u":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=i(n("QbLZ"));n("zt69");var a=i(n("773k"));function i(t){return t&&t.__esModule?t:{default:t}}e.default=(0,r.default)({name:"worth-mentioning-config-pc-wx-view"},a.default)},"773k":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=i(n("4gYi")),a=i(n("pNQN"));function i(t){return t&&t.__esModule?t:{default:t}}e.default={data:function(){return{loginStatus:"default",tableData:[{name:"H5微信授权登录",type:"h5",description:"用户在电脑网页使用微信扫码登录或微信内的H5、小程序使用微信授权登录",status:!0,icon:"iconH"},{name:"小程序微信授权登录",type:"applets",description:"用户在电脑网页使用微信扫码登录或微信内的H5、小程序使用微信授权登录",status:!1,icon:"iconxiaochengxu"},{name:"PC端微信扫码登录",type:"pc",description:"用户在PC的网页使用微信扫码登录",status:!0,icon:"iconweixin"}]}},methods:{configClick:function(t){console.log(t),this.$router.push({path:"/admin/worth-mentioning/config",type:"h5"})}},components:{Card:r.default,CardRow:a.default}}},OWNh:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Card",{attrs:{header:"PC端微信授权登录"}}),t._v(" "),n("Card",{attrs:{header:"APPID："}},[n("CardRow",{attrs:{description:"填写申请PC端微信授权登陆后，你获得的APPID"},scopedSlots:t._u([{key:"tail",fn:function(){return[n("span",{staticStyle:{color:"#336699"}},[t._v("未申请？点此申请")])]},proxy:!0}])},[n("el-input")],1)],1),t._v(" "),n("Card",{attrs:{header:"App secret："}},[n("CardRow",{attrs:{description:"填写申请PC端微信授权登陆后，你获得的App secret"}},[n("el-input")],1)],1),t._v(" "),n("Card",{staticClass:"footer-btn"},[n("el-button",{attrs:{type:"primary",size:"medium"},on:{click:function(e){return t.$router.push({path:"/admin/worth-mentioning-set"})}}},[t._v("提交")])],1)],1)},a=[];n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return a}))},YdTU:function(t,e,n){"use strict";n.r(e);var r=n("OWNh"),a=n("ww6h");for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);var o=n("KHd+"),u=Object(o.a)(a.default,r.a,r.b,!1,null,null,null);e.default=u.exports},ww6h:function(t,e,n){"use strict";n.r(e);var r=n("1a3u"),a=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);e.default=a.a}}]);