(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{CkCR:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home-box"},[n("Card",{staticClass:"home-card-box",attrs:{header:"待处理事项",intercept:"true"}},[n("p",{staticClass:"pending-p"},[t._v("\n      等待审核的主题数\n      "),n("router-link",{staticStyle:{color:"#336699"},attrs:{to:"/admin/cont-review"}},[t._v("( "+t._s(t.siteInfo.unapprovedThreads)+" )")])],1),t._v(" "),n("p",{staticClass:"pending-p"},[t._v("\n      等待审核的回复数\n      "),n("router-link",{staticStyle:{color:"#336699"},attrs:{to:"/admin/reply-review"}},[t._v("( "+t._s(t.siteInfo.unapprovedPosts)+" )")])],1),t._v(" "),n("p",{staticClass:"pending-p"},[t._v("\n      等待审核的提现数\n      "),n("router-link",{staticStyle:{color:"#336699"},attrs:{to:"/admin/withdrawal-application"}},[t._v("( "+t._s(t.siteInfo.unapprovedMoneys)+" )")])],1)]),t._v(" "),n("Card",{staticClass:"home-card-box",attrs:{header:"系统信息",intercept:"true"}},[n("p",{staticClass:"section"},[n("span",[t._v("Discuz!程序版本")]),t._v(" "),n("span",[t._v(t._s(t.siteInfo.version))])]),t._v(" "),n("p",{staticClass:"section"},[n("span",[t._v("服务器系统及PHP")]),t._v(" "),n("span",[t._v(t._s(t.siteInfo.php_version))])]),t._v(" "),n("p",{staticClass:"section"},[n("span",[t._v("服务器软件")]),t._v(" "),n("span",[t._v(t._s(t.siteInfo.server_software))])]),t._v(" "),n("p",{staticClass:"section"},[n("span",[t._v("服务器MySQL版本")]),t._v(" "),n("span",[t._v(t._s(t.siteInfo.db))])]),t._v(" "),n("p",{staticClass:"section"},[n("span",[t._v("上传许可")]),t._v(" "),n("span",[t._v(t._s(t.siteInfo.upload_size))])]),t._v(" "),n("p",{staticClass:"section"},[n("span",[t._v("当前数据库尺寸")]),t._v(" "),n("span",[t._v(t._s(t.siteInfo.db_size))])])]),t._v(" "),n("Card",{staticClass:"home-card-box home-card__footer",attrs:{header:"相关链接"}},[n("a",{attrs:{href:"https://www.discuz.net/",target:"_blank"}},[t._v("Discuz! 支持论坛")]),t._v(" "),n("a",{attrs:{href:"https://cloud.tencent.com/",target:"_blank"}},[t._v("腾讯云")]),t._v(" "),n("a",{attrs:{href:"http://www.dnspod.cn/",target:"_blank"}},[t._v("DNSPod")])])],1)},s=[];n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return s}))},Gj3Q:function(t,e,n){"use strict";n.r(e);var a=n("CkCR"),s=n("cn2k");for(var i in s)"default"!==i&&function(t){n.d(e,t,(function(){return s[t]}))}(i);var r=n("KHd+"),o=Object(r.a)(s.default,a.a,a.b,!1,null,null,null);e.default=o.exports},c1W9:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a,s=n("4gYi"),i=(a=s)&&a.__esModule?a:{default:a};e.default={data:function(){return{siteInfo:{}}},methods:{onBridgeReady:function(){WeixinJSBridge.invoke("getBrandWCPayRequest",{appId:"wx2421b1c4370ec43b",timeStamp:"1395712654",nonceStr:"e61463f8efa94090b1f366cccfbbb444",package:"prepay_id=u802345jgfjsdfgsdg888",signType:"MD5",paySign:"70EA570631E4BB79628FBCA90534C63FF7FADD89"},(function(t){t.err_msg}))}},created:function(){var t=this;this.appFetch({url:"siteinfo",method:"get",data:{}}).then((function(e){t.siteInfo=e.data.attributes})),this.onBridgeReady(),"undefined"==typeof WeixinJSBridge?document.addEventListener?document.addEventListener("WeixinJSBridgeReady",this.onBridgeReady,!1):document.attachEvent&&(document.attachEvent("WeixinJSBridgeReady",this.onBridgeReady),document.attachEvent("onWeixinJSBridgeReady",this.onBridgeReady)):this.onBridgeReady()},components:{Card:i.default}}},cn2k:function(t,e,n){"use strict";n.r(e);var a=n("ul1k"),s=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);e.default=s.a},ul1k:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i(n("QbLZ"));n("zt69");var s=i(n("c1W9"));function i(t){return t&&t.__esModule?t:{default:t}}e.default=(0,a.default)({name:"home-view"},s.default)}}]);