(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"3Z2c":function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e,a=i("YEIV"),n=(e=a)&&e.__esModule?e:{default:e};s.default={data:function(){var t;return t={isfixNav:!1,isfixHead:!1,isShow:!1,isHeadShow:!1,showHeader:!1,showSidebar:!1,showMask:!1,navShow:!0,sidebarList1:[{name:"我的资料",path:"login",query:{index:1},enentType:""},{name:"我的钱包",path:"wallent",query:{index:2},enentType:""},{name:"我的收藏",path:"collection",query:{index:3},enentType:""}],sidebarList2:[{name:"圈子信息",path:"login",query:{index:1},enentType:""},{name:"圈子管理",path:"login",query:{index:2},enentType:""},{name:"退出登录",path:"",query:{index:3},enentType:1}],sidebarList3:[{name:"邀请朋友",path:"login",query:{index:1},enentType:""}]},(0,n.default)(t,"isfixNav",!1),(0,n.default)(t,"current",0),(0,n.default)(t,"todos",[{text:"选项一111"},{text:"选项二"},{text:"选项三"},{text:"选项四"},{text:"选项五"},{text:"选项六"},{text:"选项七"},{text:"选项八"}]),t},methods:{addClass:function(t,s){this.current=t;s.currentTarget},handleTabFix:function(){this.navShow&&((window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop)>document.querySelector("#testNavBar").offsetTop?(this.showHeader=!0,this.isfixHead=!0,this.isfixNav=!0,console.log(this.isfixNav+"00")):(this.showHeader=!1,this.isfixHead=!1,this.isfixNav=!1,console.log(this.isfixNav+"111")))},searchJump:function(){},backUrl:function(){window.history.go(-1)},bindSidebar:function(){this.showSidebar=!this.showSidebar,this.showMask=!this.showMask},hideSidebar:function(){this.showSidebar=!1,this.showMask=!1},bindEvent:function(t){1==t&&this.LogOut()},LogOut:function(){console.log("测试")}},mounted:function(){window.addEventListener("scroll",this.handleTabFix,!0)},beforeRouteLeave:function(t,s,i){window.removeEventListener("scroll",this.handleTabFix,!0),i()}}},Jgvg:function(t,s,i){"use strict";i.r(s);var e=i("pvnC"),a=i.n(e);for(var n in e)"default"!==n&&function(t){i.d(s,t,(function(){return e[t]}))}(n);s.default=a.a},omtG:function(t,s,i){"use strict";i.r(s);var e=i("t8bp"),a=i("Jgvg");for(var n in a)"default"!==n&&function(t){i.d(s,t,(function(){return a[t]}))}(n);var o=i("KHd+"),r=Object(o.a)(a.default,e.a,e.b,!1,null,null,null);s.default=r.exports},pvnC:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=n(i("QbLZ")),a=n(i("3Z2c"));function n(t){return t&&t.__esModule?t:{default:t}}i("Mdr0"),s.default=(0,e.default)({name:"headerView"},a.default)},t8bp:function(t,s,i){"use strict";var e=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("section",[e("header",[e("div",{class:{bg_blue:t.$route.meta.twoHeader,fixedHead:t.isfixHead}},[t.showHeader?e("div",{staticClass:"hederWrap"},[e("img",{staticClass:"logo headLogo",attrs:{src:i("cbpf")}}),t._v(" "),e("div",{staticClass:"topRight"},[e("span",{staticClass:"icon iconfont icon-search",on:{click:t.searchJump}}),t._v(" "),e("span",{staticClass:"icon iconfont icon-Shape",on:{click:t.bindSidebar}})])]):t._e()])]),t._v(" "),t.showMask?e("div",{staticClass:"mask",on:{click:t.hideSidebar}}):t._e(),t._v(" "),t.showSidebar?e("div",{staticClass:"sidebarWrap"},[t._m(0),t._v(" "),t._l(t.sidebarList1,(function(s,i){return e("div",{key:i,staticClass:"sideCon"},[s.path?e("div",{staticClass:"sideItem",attrs:{to:{path:s.path,query:s.query}}},[e("span",{staticClass:"itemTit"},[t._v(t._s(s.name))]),t._v(" "),e("span",{staticClass:"icon iconfont icon-right-arrow jumpJtr"})]):t._e()])})),t._v(" "),e("div",{staticClass:"itemGap"}),t._v(" "),e("div",{staticClass:"sideConList"},t._l(t.sidebarList2,(function(s,i){return e("div",{key:"list2"+i,staticClass:"sideCon"},[s.path?e("div",{staticClass:"sideItem",attrs:{to:{path:s.path,query:s.query}}},[e("span",{staticClass:"itemTit"},[t._v(t._s(s.name))]),t._v(" "),e("span",{staticClass:"icon iconfont icon-right-arrow jumpJtr"})]):e("div",{staticClass:"sideItem",on:{click:function(i){return t.bindEvent(s.enentType)}}},[e("span",{staticClass:"itemTit"},[t._v(t._s(s.name))]),t._v(" "),e("span",{staticClass:"icon iconfont icon-right-arrow jumpJtr"})])])})),0),t._v(" "),e("div",{staticClass:"itemGap"}),t._v(" "),e("div",{staticClass:"sideConList"},t._l(t.sidebarList3,(function(s,i){return e("div",{key:"list3"+i,staticClass:"sideCon"},[s.path?e("div",{staticClass:"sideItem",attrs:{to:{path:s.path,query:s.query}}},[e("span",{staticClass:"itemTit"},[t._v(t._s(s.name))]),t._v(" "),e("span",{staticClass:"icon iconfont icon-right-arrow jumpJtr"})]):t._e()])})),0)],2):t._e(),t._v(" "),e("div",{staticClass:"headerBox"},[e("div",{staticClass:"headOpe"},[e("span",{staticClass:"icon iconfont icon-search"}),t._v(" "),e("span",{staticClass:"icon iconfont icon-Shape",on:{click:t.bindSidebar}})]),t._v(" "),e("img",{staticClass:"logo",attrs:{src:i("cbpf")}}),t._v(" "),t._m(1)]),t._v(" "),t.navShow?e("div",{staticClass:"navBox",class:{fixedNavBar:t.isfixNav},attrs:{id:"testNavBar"}},[e("div",{staticClass:"navBarBox"},[e("ul",{staticClass:"navBarCon"},t._l(t.todos,(function(s,i){return e("li",{class:{navActi:i==t.current},on:{click:function(s){return t.addClass(i,s)}}},[t._v(t._s(s.text))])})),0)])]):t._e()])},a=[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"sideCon"},[s("div",{staticClass:"sideUserBox"},[s("img",{staticClass:"userHead",attrs:{src:i("JsrF")}}),this._v(" "),s("div",{staticClass:"userDet"},[s("div",{staticClass:"userName"},[this._v("jdhdskhfkdshfkdsh")]),this._v(" "),s("div",{staticClass:"userPhone"},[this._v("183****0522")])]),this._v(" "),s("span",{staticClass:"icon iconfont icon-right-arrow jumpJtr"})])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"circleDet"},[s("span",[this._v("主题：125")]),this._v(" "),s("span",[this._v("成员：125")]),this._v(" "),s("span",[this._v("圈主：我是谁")])])}];i.d(s,"a",(function(){return e})),i.d(s,"b",(function(){return a}))}}]);