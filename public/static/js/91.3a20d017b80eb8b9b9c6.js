(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{Gj3Q:function(t,e,s){"use strict";s.r(e);var a=s("UFHo"),n=s("cn2k");for(var r in n)"default"!==r&&function(t){s.d(e,t,(function(){return n[t]}))}(r);var o=s("KHd+"),i=Object(o.a)(n.default,a.a,a.b,!1,null,null,null);e.default=i.exports},UFHo:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home-box"},[s("Card",{staticClass:"home-card-box",attrs:{header:"待处理事项",intercept:"true"}},[s("p",{staticClass:"pending-p"},[t._v("\n      等待审核的主题数\n      "),s("router-link",{staticStyle:{color:"#336699"},attrs:{to:"/admin/cont-review"}},[t._v("( "+t._s(t.siteInfo.unapprovedThreads)+" )")])],1),t._v(" "),s("p",{staticClass:"pending-p"},[t._v("\n      等待审核的回复数\n      "),s("router-link",{staticStyle:{color:"#336699"},attrs:{to:"/admin/reply-review"}},[t._v("( "+t._s(t.siteInfo.unapprovedPosts)+" )")])],1),t._v(" "),s("p",{staticClass:"pending-p"},[t._v("\n      等待审核的提现数\n      "),s("router-link",{staticStyle:{color:"#336699"},attrs:{to:"/admin/withdrawal-application"}},[t._v("( "+t._s(t.siteInfo.unapprovedMoneys)+" )")])],1)]),t._v(" "),s("Card",{staticClass:"home-card-box",attrs:{header:"系统信息",intercept:"true"}},[s("p",{staticClass:"section"},[s("span",[t._v("Discuz!程序版本")]),t._v(" "),s("span",[t._v(t._s(t.siteInfo.version))])]),t._v(" "),s("p",{staticClass:"section"},[s("span",[t._v("服务器系统及PHP")]),t._v(" "),s("span",[t._v(t._s(t.siteInfo.php_version))])]),t._v(" "),s("p",{staticClass:"section"},[s("span",[t._v("服务器软件")]),t._v(" "),s("span",[t._v(t._s(t.siteInfo.server_software))])]),t._v(" "),s("p",{staticClass:"section"},[s("span",[t._v("服务器MySQL版本")]),t._v(" "),s("span",[t._v(t._s(t.siteInfo.db))])]),t._v(" "),s("p",{staticClass:"section"},[s("span",[t._v("上传许可")]),t._v(" "),s("span",[t._v(t._s(t.siteInfo.upload_size))])]),t._v(" "),s("p",{staticClass:"section"},[s("span",[t._v("当前数据库尺寸")]),t._v(" "),s("span",[t._v(t._s(t.siteInfo.db_size))])])]),t._v(" "),s("Card",{staticClass:"home-card-box home-card__footer",attrs:{header:"相关链接"}},[s("a",{attrs:{href:"https://www.discuz.net/",target:"_blank"}},[t._v("Discuz! 支持论坛")]),t._v(" "),s("a",{attrs:{href:"https://cloud.tencent.com/",target:"_blank"}},[t._v("腾讯云")]),t._v(" "),s("a",{attrs:{href:"http://www.dnspod.cn/",target:"_blank"}},[t._v("DNSPod")])])],1)},n=[];s.d(e,"a",(function(){return a})),s.d(e,"b",(function(){return n}))},c1W9:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a,n=s("4gYi"),r=(a=n)&&a.__esModule?a:{default:a};e.default={data:function(){return{siteInfo:{}}},created:function(){var t=this;this.appFetch({url:"siteinfo",method:"get",data:{}}).then((function(e){e.errors?t.$message.error(e.errors[0].code):t.siteInfo=e.data.attributes}))},components:{Card:r.default}}},cn2k:function(t,e,s){"use strict";s.r(e);var a=s("ul1k"),n=s.n(a);for(var r in a)"default"!==r&&function(t){s.d(e,t,(function(){return a[t]}))}(r);e.default=n.a},ul1k:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=r(s("QbLZ"));s("lpfh");var n=r(s("c1W9"));function r(t){return t&&t.__esModule?t:{default:t}}e.default=(0,a.default)({name:"home-view"},n.default)}}]);