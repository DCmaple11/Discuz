(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{Jgvg:function(e,t,a){"use strict";a.r(t);var o=a("pvnC"),i=a.n(o);for(var s in o)"default"!==s&&function(e){a.d(t,e,(function(){return o[e]}))}(s);t.default=i.a},QiNT:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,i=r(a("YEIV")),s=(a("ULRk"),r(a("VVfg"))),n=r(a("6NK7"));function r(e){return e&&e.__esModule?e:{default:e}}t.default={data:function(){var e;return e={headBackShow:!1,oneHeader:!1,twoHeader:!1,threeHeader:!1,fourHeader:!1,isfixNav:!1,isShow:!1,isHeadShow:!1,showHeader:!1,showMask:!1,title:"",navActi:0,perDet:{themeNum:"1222",memberNum:"1222",circleLeader:"站长名称"},avatarUrl:"",mobile:""},(0,i.default)(e,"isfixNav",!1),(0,i.default)(e,"popupShow",!1),(0,i.default)(e,"current",0),(0,i.default)(e,"userDet",[]),(0,i.default)(e,"categories",[]),(0,i.default)(e,"siteInfo",!1),(0,i.default)(e,"username",""),(0,i.default)(e,"isPayVal",""),(0,i.default)(e,"isWeixin",!1),(0,i.default)(e,"isPhone",!1),(0,i.default)(e,"firstCategoriesId",""),(0,i.default)(e,"logo",!1),(0,i.default)(e,"viewportWidth",""),(0,i.default)(e,"userId",""),(0,i.default)(e,"followDet",""),(0,i.default)(e,"followFlag",""),(0,i.default)(e,"intiFollowVal","0"),(0,i.default)(e,"noticeSum",0),e},props:{userInfoAvatarUrl:{type:String},userInfoName:{type:String},headFixed:{headFixed:!1},invitePerDet:{invitePerDet:!1},searchIconShow:{searchIconShow:!1},menuIconShow:{menuIconShow:!1},navShow:{navShow:!1},invitationShow:{invitationShow:!1},perDetShow:{perDet:!1},logoShow:{logoShow:!1},followShow:{logoShow:!1}},computed:{personUserId:function(){return this.$route.params.userId}},created:function(){this.userId=s.default.getLItem("tokenId"),console.log(this.userId,"登录用户id"),console.log(this.personUserId,"用户主页获取到的参数id"),this.viewportWidth=window.innerWidth,this.isWeixin=n.default.isWeixin().isWeixin,this.isPhone=n.default.isWeixin().isPhone,this.loadCategories(),this.followShow&&this.loadUserInfo(),this.loadUserInfo()},watch:{isfixNav:function(e,t){this.isfixNav=e}},methods:(o={limitWidth:function(){document.getElementById("testNavBar").style.width="640px";var e=window.innerWidth;document.getElementById("testNavBar").style.marginLeft=(e-640)/2+"px"},loadCategories:function(){var e=this;this.appFetch({url:"forum",method:"get",data:{include:["users"]}}).then((function(t){console.log(t.readdata._data.other),console.log("-------------------"),e.siteInfo=t.readdata,t.readdata._data.set_site.site_logo&&(e.logo=t.readdata._data.set_site.site_logo),e.isPayVal=t.readdata._data.set_site.site_mode})),this.appFetch({url:"categories",method:"get",data:{include:[]}}).then((function(t){console.log("2222"),console.log(t),e.categories=t.readdata,e.firstCategoriesId=t.readdata[0]._data.id,console.log(e.firstCategoriesId),e.$emit("update",e.firstCategoriesId),console.log("3456")}))},loadUserInfo:function(){var e=this;this.appFetch({url:"users",method:"get",splice:"/"+this.userId,data:{}}).then((function(t){console.log(t,"00000000000&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&——————————————————————————————————————————"),console.log(t.readdata),t.data.attributes.typeUnreadNotifications.liked||(t.data.attributes.typeUnreadNotifications.liked=0),t.data.attributes.typeUnreadNotifications.replied||(t.data.attributes.typeUnreadNotifications.replied=0),t.data.attributes.typeUnreadNotifications.rewarded||(t.data.attributes.typeUnreadNotifications.rewarded=0),t.data.attributes.typeUnreadNotifications.system||(t.data.attributes.typeUnreadNotifications.system=0),e.noticeSum=t.data.attributes.typeUnreadNotifications.liked+t.data.attributes.typeUnreadNotifications.replied+t.data.attributes.typeUnreadNotifications.rewarded+t.data.attributes.typeUnreadNotifications.system,console.log(t.data.attributes.typeUnreadNotifications.liked,t.data.attributes.typeUnreadNotifications.replied,t.data.attributes.typeUnreadNotifications.rewarded,t.data.attributes.typeUnreadNotifications.system,"和"),e.followDet=t.readdata,"1"==t.readdata._data.follow?e.followFlag="已关注":"0"==t.readdata._data.follow&&(e.followFlag="关注TA")}))},followCli:function(e){console.log("参数",e);var t=new Object,a="";"0"==e?(console.log("未关注"),t.to_user_id=this.personUserId,a="post",this.intiFollowVal="1",console.log(this.intiFollowVal,"修改")):(console.log("已关注"),t.from_user_id=this.userId,t.to_user_id=this.personUserId,a="delete",this.intiFollowVal="0"),console.log(t,"33333333-----"),this.followRequest(a,t)},followRequest:function(e,t){var a=this;this.appFetch({url:"follow",method:e,data:{data:{type:"user_follow",attributes:t}}}).then((function(t){if(console.log(t,"987654"),t.errors)throw a.$toast.fail(t.errors[0].code),new Error(t.error);a.followFlag="delete"==e?"关注TA":"已关注"}))},backUrl:function(){window.history.go(-1)},showPopup:function(){this.popupShow=!0},categoriesCho:function(e){this.$emit("categoriesChoice",e)},searchJump:function(){this.$router.push({path:"/search"})},handleTabFix:function(){if(this.headFixed)if((window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop)>document.querySelector("#testNavBar").offsetTop)this.showHeader=!0,this.isfixNav=!0,1!=this.isWeixin&&1!=this.isPhone&&this.limitWidth();else{this.showHeader=!1,this.isfixNav=!1;window.innerWidth;document.getElementById("testNavBar").style.marginLeft="0px"}}},(0,i.default)(o,"backUrl",(function(){window.history.go(-1)})),(0,i.default)(o,"LogOut",(function(){console.log("测试")})),(0,i.default)(o,"bindEvent",(function(e){1==e&&this.LogOut()})),o),mounted:function(){window.addEventListener("scroll",this.handleTabFix,!0)},beforeDestroy:function(){window.removeEventListener("scroll",this.handleTabFix,!0)},destroyed:function(){window.removeEventListener("scroll",this.handleTabFix,!0)},beforeRouteLeave:function(e,t,a){window.removeEventListener("scroll",this.handleTabFix,!0),a()}}},RIP2:function(e,t,a){"use strict";var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",[a("van-popup",{staticClass:"sidebarWrap",style:{height:"100%",right:e.isPhone||e.isWeixin?"0":(e.viewportWidth-640)/2+"px"},attrs:{position:"right"},model:{value:e.popupShow,callback:function(t){e.popupShow=t},expression:"popupShow"}},[a("sidebar",{attrs:{isPayVal:e.isPayVal}})],1),e._v(" "),e.$route.meta.oneHeader?a("div",{staticClass:"headerBox"},[a("div",{directives:[{name:"show",rawName:"v-show",value:e.invitePerDet,expression:"invitePerDet"}],staticClass:"invitePerDet aaa"},[e.userInfoAvatarUrl?a("img",{staticClass:"inviteHead",attrs:{src:e.userInfoAvatarUrl,alt:""}}):a("img",{staticClass:"inviteHead",attrs:{src:e.appConfig.staticBaseUrl+"/images/noavatar.gif",alt:"ssss"}}),e._v(" "),e.invitePerDet&&e.userInfoName?a("div",{staticClass:"inviteName",model:{value:e.userInfoName,callback:function(t){e.userInfoName=t},expression:"userInfoName"}},[e._v(e._s(e.userInfoName))]):a("div",{staticClass:"inviteName"},[e._v("该用户已被删除")]),e._v(" "),a("p",{directives:[{name:"show",rawName:"v-show",value:e.invitationShow,expression:"invitationShow"}],staticClass:"inviteWo"},[e._v("邀请您加入")]),e._v(" "),e.followShow?a("div",{staticClass:"followBox"},[a("span",[e._v("关注："+e._s(e.followDet._data.followCount))]),e._v(" "),a("span",[e._v("被关注："+e._s(e.followDet._data.fansCount))]),e._v(" "),e.userId!=e.personUserId?a("a",{staticClass:"followOne",attrs:{href:"javascript:;",id:"followCli"},on:{click:function(t){return e.followCli(e.intiFollowVal)}}},[e._v(e._s(e.followFlag))]):e._e()]):e._e()]),e._v(" "),e.searchIconShow||e.menuIconShow?e._e():a("div",{staticClass:"headeGap"}),e._v(" "),e.searchIconShow||e.menuIconShow?a("div",{staticClass:"headOpe"},[a("span",{directives:[{name:"show",rawName:"v-show",value:e.searchIconShow,expression:"searchIconShow"}],staticClass:"icon iconfont icon-search",on:{click:e.searchJump}}),e._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:e.menuIconShow,expression:"menuIconShow"}],staticClass:"icon iconfont icon-Shape relative",attrs:{"is-link":""},on:{click:e.showPopup}},[e.noticeSum>0?a("i",{staticClass:"noticeNew"}):e._e()])]):e._e(),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:e.logoShow,expression:"logoShow"}],staticClass:"logoBox"},[e.logo?a("img",{staticClass:"logo",attrs:{src:e.logo}}):a("img",{staticClass:"logo",attrs:{src:e.appConfig.staticBaseUrl+"/images/logo.png"}})]),e._v(" "),e.siteInfo?a("div",{directives:[{name:"show",rawName:"v-show",value:e.perDetShow,expression:"perDetShow"}],staticClass:"circleDet"},[a("span",[e._v("主题："+e._s(e.siteInfo._data.other.count_threads))]),e._v(" "),a("span",[e._v("成员："+e._s(e.siteInfo._data.other.count_users))]),e._v(" "),e.siteInfo._data.set_site.site_author?a("span",[e._v("站长："+e._s(e.siteInfo._data.set_site.site_author.username))]):a("span",[e._v("站长：无")])]):e._e(),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:e.navShow,expression:"navShow"}],staticClass:"navBox",class:{fixedNavBar:e.isfixNav},attrs:{id:"testNavBar"}},[a("van-tabs",{model:{value:e.navActi,callback:function(t){e.navActi=t},expression:"navActi"}},[a("van-tab",[a("span",{attrs:{slot:"title"},on:{click:function(t){return e.categoriesCho(0)}},slot:"title"},[e._v("\n              全部\n          ")])]),e._v(" "),e._l(e.categories,(function(t,o){return a("van-tab",{key:o},[a("span",{attrs:{slot:"title"},on:{click:function(a){return e.categoriesCho(t._data.id)}},slot:"title"},[e._v("\n              "+e._s(t._data.name)+"\n          ")])])}))],2)],1)]):e._e()],1)},i=[];a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return i}))},omtG:function(e,t,a){"use strict";a.r(t);var o=a("RIP2"),i=a("Jgvg");for(var s in i)"default"!==s&&function(e){a.d(t,e,(function(){return i[e]}))}(s);var n=a("KHd+"),r=Object(n.a)(i.default,o.a,o.b,!1,null,null,null);t.default=r.exports},pvnC:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(a("QbLZ")),i=n(a("QiNT")),s=n(a("IsPG"));function n(e){return e&&e.__esModule?e:{default:e}}a("iUmJ"),t.default=(0,o.default)({name:"headerView",components:{Sidebar:s.default}},i.default)}}]);