(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{"4Etb":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Card",{attrs:{header:"小程序微信授权登录"}}),t._v(" "),n("Card",{attrs:{header:"APPID："}},[n("CardRow",{attrs:{description:"填写申请小程序微信授权登陆后，你获得的APPID"},scopedSlots:t._u([{key:"tail",fn:function(){return[n("span",{staticStyle:{color:"#336699"}},[t._v("未申请？点此申请")])]},proxy:!0}])},[n("el-input")],1)],1),t._v(" "),n("Card",{attrs:{header:"App secret："}},[n("CardRow",{attrs:{description:"填写申请小程序微信授权登陆后，你获得的App secret"}},[n("el-input")],1)],1),t._v(" "),n("Card",{staticClass:"footer-btn"},[n("el-button",{attrs:{type:"primary",size:"medium"},on:{"click@click":function(e){return t.$router.push({path:"/admin/worth-mentioning-set"})}}},[t._v("提交")])],1)],1)},i=[];n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return i}))},"5JD9":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a(n("QbLZ"));n("zt69");var i=a(n("773k"));function a(t){return t&&t.__esModule?t:{default:t}}e.default=(0,r.default)({name:"worth-mentioning-config-applets-view"},i.default)},"773k":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a(n("4gYi")),i=a(n("pNQN"));function a(t){return t&&t.__esModule?t:{default:t}}e.default={data:function(){return{loginStatus:"default",tableData:[{name:"H5微信授权登录",type:"h5",description:"用户在电脑网页使用微信扫码登录或微信内的H5、小程序使用微信授权登录",status:!0,icon:"iconH"},{name:"小程序微信授权登录",type:"applets",description:"用户在电脑网页使用微信扫码登录或微信内的H5、小程序使用微信授权登录",status:!1,icon:"iconxiaochengxu"},{name:"PC端微信扫码登录",type:"pc",description:"用户在PC的网页使用微信扫码登录",status:!0,icon:"iconweixin"}]}},methods:{configClick:function(t){console.log(t),this.$router.push({path:"/admin/worth-mentioning/config",type:"h5"})}},components:{Card:r.default,CardRow:i.default}}},UKiJ:function(t,e,n){"use strict";n.r(e);var r=n("4Etb"),i=n("ZK4i");for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);var o=n("KHd+"),u=Object(o.a)(i.default,r.a,r.b,!1,null,null,null);e.default=u.exports},ZK4i:function(t,e,n){"use strict";n.r(e);var r=n("5JD9"),i=n.n(r);for(var a in r)"default"!==a&&function(t){n.d(e,t,(function(){return r[t]}))}(a);e.default=i.a}}]);