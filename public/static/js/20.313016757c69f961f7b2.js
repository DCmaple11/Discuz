(window.webpackJsonp=window.webpackJsonp||[]).push([[20,102],{"/jdu":function(e,t,a){"use strict";var i=a("7O3A");a.n(i).a},"7O3A":function(e,t,a){},DrXK:function(e,t,a){"use strict";a.r(t);var i=a("Yoo9"),o=a.n(i);for(var s in i)"default"!==s&&function(e){a.d(t,e,(function(){return i[e]}))}(s);t.default=o.a},Ey7k:function(e,t,a){"use strict";a.r(t);var i=a("SDoi"),o=a("DrXK");for(var s in o)"default"!==s&&function(e){a.d(t,e,(function(){return o[e]}))}(s);a("/jdu");var n=a("KHd+"),r=Object(n.a)(o.default,i.a,i.b,!1,null,"710771e5",null);t.default=r.exports},FYko:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i,o=d(a("FyfS")),s=d(a("14Xm")),n=d(a("D3Ub")),r=d(a("JZuw")),c=d(a("y0A3")),l=d(a("6NK7"));function d(e){return e&&e.__esModule?e:{default:e}}t.default={data:function(){return{inviteList:[],choiceShow:!1,checkOperaStatus:!1,choList:[],getGroupNameById:{},choiceRes:{attributes:{name:"选择操作"}},loading:!1,finished:!1,isLoading:!1,pageIndex:1,offset:100,query:{},pageLimit:15,isWeixin:!1,isPhone:!1,viewportWidth:""}},components:{myInviteJoinHeader:r.default},created:(i=(0,n.default)(s.default.mark((function e(){return s.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.viewportWidth=window.innerWidth,this.isWeixin=l.default.isWeixin().isWeixin,this.isPhone=l.default.isWeixin().isPhone,e.next=5,this.getOperaType();case 5:this.query=this.$route.query,this.getInviteList();case 7:case"end":return e.stop()}}),e,this)}))),function(){return i.apply(this,arguments)}),methods:{toggle:function(e){this.$refs.checkboxes[e].toggle()},showChoice:function(){this.choiceShow=!this.choiceShow},setSelectVal:function(e){this.choiceShow=!1,this.checkOperaStatus=!0,this.choiceRes=e},getOperaType:function(){var e=this;return(0,n.default)(s.default.mark((function t(){var a,i,n,r,c,l,d;return s.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.appFetch({url:"groups",method:"get"});case 3:if(!(a=t.sent).errors){t.next=9;break}throw e.$toast.fail(a.errors[0].code),new Error(a.error);case 9:for(e.choList=a.data,i=!0,n=!1,r=void 0,t.prev=13,c=(0,o.default)(e.choList);!(i=(l=c.next()).done);i=!0)d=l.value,e.getGroupNameById[d.id]=d.attributes.name;t.next=21;break;case 17:t.prev=17,t.t0=t.catch(13),n=!0,r=t.t0;case 21:t.prev=21,t.prev=22,!i&&c.return&&c.return();case 24:if(t.prev=24,!n){t.next=27;break}throw r;case 27:return t.finish(24);case 28:return t.finish(21);case 29:t.next=34;break;case 31:t.prev=31,t.t1=t.catch(0),e.$toast("邀请码类型获取失败，请刷新重试");case 34:case"end":return t.stop()}}),t,e,[[0,31],[13,17,21,29],[22,,24,28]])})))()},getInviteList:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return(0,n.default)(s.default.mark((function a(){return s.default.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,e.appFetch({url:"invite",method:"get",data:{"page[number]":e.pageIndex,"page[limit]":e.pageLimit}}).then((function(a){if(a.errors)throw e.$toast.fail(a.errors[0].code),new Error(a.error);e.finished=a.readdata.length<e.pageLimit,t&&(e.inviteList=[]),console.log(e.pageIndex,"少时诵诗书"),e.loading=!1,e.inviteList=e.inviteList.concat(a.readdata)}));case 3:a.next=10;break;case 5:a.prev=5,a.t0=a.catch(0),console.error(a.t0,"邀请码列表获取失败"),e.$toast("邀请列表获取失败"),e.loading&&1!==e.pageIndex&&e.pageIndex--;case 10:case"end":return a.stop()}}),a,e,[[0,5]])})))()},checkSubmit:function(){var e=this;return(0,n.default)(s.default.mark((function t(){return s.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.checkOperaStatus){t.next=2;break}return t.abrupt("return");case 2:return t.prev=2,t.next=5,e.appFetch({url:"invite",method:"post",data:{data:{type:"invite",attributes:{group_id:parseInt(e.choiceRes.id)}}}});case 5:e.pageIndex=1,e.getInviteList(!0),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(2),console.error(t.t0,"checkSubmit");case 12:case"end":return t.stop()}}),t,e,[[2,9]])})))()},copyToClipBoard:function(e){if(0!==e._data.status){var t=document.createElement("textarea");t.style.position="absolute",t.style.opacity="0",t.style.height="0",t.textContent=c.default.baseUrl+"?code="+e._data.code+"&group_id="+e._data.group_id,this.$toast.success("邀请链接已复制成功"),document.body.appendChild(t),t.select(t,"链接链接");try{return document.execCommand("copy")}finally{document.body.removeChild(t)}}},resetDelete:function(e){var t=this;return(0,n.default)(s.default.mark((function a(){var i;return s.default.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(0!==e._data.status){a.next=2;break}return a.abrupt("return");case 2:return i=e._data.id,a.prev=3,a.next=6,t.appFetch({url:"invite",method:"delete",splice:"/"+i});case 6:if(!res.errors){a.next=11;break}throw t.$toast.fail(res.errors[0].code),new Error(res.error);case 11:t.checkSubmit();case 12:a.next=17;break;case 14:a.prev=14,a.t0=a.catch(3),t.$toast("邀请码操作失败！");case 17:case"end":return a.stop()}}),a,t,[[3,14]])})))()},onLoad:function(){this.loading=!0,this.pageIndex++,this.getInviteList()},onRefresh:function(){var e=this;this.pageIndex=1,this.getInviteList(!0).then((function(t){e.$toast("刷新成功"),e.isLoading=!1,e.finished=!1})).catch((function(t){e.$toast("刷新失败"),e.isLoading=!1}))}},mounted:function(){},beforeRouteLeave:function(e,t,a){a()}}},FyfS:function(e,t,a){e.exports={default:a("Rp86"),__esModule:!0}},Fzl4:function(e,t,a){},Jgvg:function(e,t,a){"use strict";a.r(t);var i=a("pvnC"),o=a.n(i);for(var s in i)"default"!==s&&function(e){a.d(t,e,(function(){return i[e]}))}(s);t.default=o.a},QiNT:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i,o=r(a("YEIV")),s=(a("ULRk"),r(a("VVfg"))),n=r(a("6NK7"));function r(e){return e&&e.__esModule?e:{default:e}}t.default={data:function(){var e;return e={headBackShow:!1,oneHeader:!1,twoHeader:!1,threeHeader:!1,fourHeader:!1,isfixNav:!1,isShow:!1,isHeadShow:!1,showHeader:!1,showMask:!1,title:"",navActi:0,perDet:{themeNum:"1222",memberNum:"1222",circleLeader:"站长名称"},avatarUrl:"",mobile:""},(0,o.default)(e,"isfixNav",!1),(0,o.default)(e,"popupShow",!1),(0,o.default)(e,"current",0),(0,o.default)(e,"userDet",[]),(0,o.default)(e,"categories",[]),(0,o.default)(e,"siteInfo",!1),(0,o.default)(e,"username",""),(0,o.default)(e,"isPayVal",""),(0,o.default)(e,"isWeixin",!1),(0,o.default)(e,"isPhone",!1),(0,o.default)(e,"firstCategoriesId",""),(0,o.default)(e,"logo",!1),(0,o.default)(e,"viewportWidth",""),(0,o.default)(e,"userId",""),(0,o.default)(e,"followDet",""),(0,o.default)(e,"followFlag",""),(0,o.default)(e,"intiFollowVal","0"),(0,o.default)(e,"noticeSum",0),e},props:{userInfoAvatarUrl:{type:String},userInfoName:{type:String},headFixed:{headFixed:!1},invitePerDet:{invitePerDet:!1},searchIconShow:{searchIconShow:!1},menuIconShow:{menuIconShow:!1},navShow:{navShow:!1},invitationShow:{invitationShow:!1},perDetShow:{perDet:!1},logoShow:{logoShow:!1},followShow:{logoShow:!1}},computed:{personUserId:function(){return this.$route.params.userId}},created:function(){this.userId=s.default.getLItem("tokenId"),console.log(this.userId,"登录用户id"),console.log(this.personUserId,"用户主页获取到的参数id"),this.viewportWidth=window.innerWidth,this.isWeixin=n.default.isWeixin().isWeixin,this.isPhone=n.default.isWeixin().isPhone,this.loadCategories(),this.followShow&&this.loadUserFollowInfo(),this.loadUserInfo()},watch:{isfixNav:function(e,t){this.isfixNav=e}},methods:(i={limitWidth:function(){document.getElementById("testNavBar").style.width="640px";var e=window.innerWidth;document.getElementById("testNavBar").style.marginLeft=(e-640)/2+"px"},loadCategories:function(){var e=this;this.appFetch({url:"forum",method:"get",data:{include:["users"]}}).then((function(t){console.log(t.readdata._data.other),console.log("-------------------"),e.siteInfo=t.readdata,t.readdata._data.set_site.site_logo&&(e.logo=t.readdata._data.set_site.site_logo),e.isPayVal=t.readdata._data.set_site.site_mode})),this.appFetch({url:"categories",method:"get",data:{include:[]}}).then((function(t){console.log("2222"),console.log(t),e.categories=t.readdata,e.firstCategoriesId=t.readdata[0]._data.id,console.log(e.firstCategoriesId),e.$emit("update",e.firstCategoriesId),console.log("3456")}))},loadUserFollowInfo:function(){var e=this;this.appFetch({url:"users",method:"get",splice:"/"+this.personUserId,data:{}}).then((function(t){console.log(t.readdata._data.follow,"00000000000&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&——————————————————————————————————————————"),e.followDet=t.readdata,console.log(e.followDet,"结果数据·······"),"1"==t.readdata._data.follow?(console.log("已关注"),e.followFlag="已关注"):"0"==t.readdata._data.follow&&(console.log("关注TA"),e.followFlag="关注TA")}))},loadUserInfo:function(){var e=this;console.log(this.personUserId,"访问Id"),this.appFetch({url:"users",method:"get",splice:"/"+this.userId,data:{}}).then((function(t){console.log(t,"00000000000&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&——————————————————————————————————————————"),t.data.attributes.typeUnreadNotifications.liked||(t.data.attributes.typeUnreadNotifications.liked=0),t.data.attributes.typeUnreadNotifications.replied||(t.data.attributes.typeUnreadNotifications.replied=0),t.data.attributes.typeUnreadNotifications.rewarded||(t.data.attributes.typeUnreadNotifications.rewarded=0),t.data.attributes.typeUnreadNotifications.system||(t.data.attributes.typeUnreadNotifications.system=0),e.noticeSum=t.data.attributes.typeUnreadNotifications.liked+t.data.attributes.typeUnreadNotifications.replied+t.data.attributes.typeUnreadNotifications.rewarded+t.data.attributes.typeUnreadNotifications.system,console.log(t.data.attributes.typeUnreadNotifications.liked,t.data.attributes.typeUnreadNotifications.replied,t.data.attributes.typeUnreadNotifications.rewarded,t.data.attributes.typeUnreadNotifications.system,"和")}))},followCli:function(e){console.log("参数",e);var t=new Object,a="";"0"==e?(console.log("未关注"),t.to_user_id=this.personUserId,a="post",this.intiFollowVal="1",console.log(this.intiFollowVal,"修改")):(console.log("已关注"),t.from_user_id=this.userId,t.to_user_id=this.personUserId,a="delete",this.intiFollowVal="0"),console.log(t,"33333333-----"),this.followRequest(a,t)},followRequest:function(e,t){var a=this;this.appFetch({url:"follow",method:e,data:{data:{type:"user_follow",attributes:t}}}).then((function(t){if(console.log(t,"987654"),t.errors)throw a.$toast.fail(t.errors[0].code),new Error(t.error);a.followFlag="delete"==e?"关注TA":"已关注"}))},backUrl:function(){window.history.go(-1)},showPopup:function(){this.popupShow=!0},categoriesCho:function(e){this.$emit("categoriesChoice",e)},searchJump:function(){this.$router.push({path:"/search"})},handleTabFix:function(){if(this.headFixed)if((window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop)>document.querySelector("#testNavBar").offsetTop)this.showHeader=!0,this.isfixNav=!0,1!=this.isWeixin&&1!=this.isPhone&&this.limitWidth();else{this.showHeader=!1,this.isfixNav=!1;window.innerWidth;document.getElementById("testNavBar").style.marginLeft="0px"}}},(0,o.default)(i,"backUrl",(function(){window.history.go(-1)})),(0,o.default)(i,"LogOut",(function(){console.log("测试")})),(0,o.default)(i,"bindEvent",(function(e){1==e&&this.LogOut()})),i),mounted:function(){window.addEventListener("scroll",this.handleTabFix,!0)},beforeDestroy:function(){window.removeEventListener("scroll",this.handleTabFix,!0)},destroyed:function(){window.removeEventListener("scroll",this.handleTabFix,!0)},beforeRouteLeave:function(e,t,a){window.removeEventListener("scroll",this.handleTabFix,!0),a()}}},RIP2:function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",[a("van-popup",{staticClass:"sidebarWrap",style:{height:"100%",right:e.isPhone||e.isWeixin?"0":(e.viewportWidth-640)/2+"px"},attrs:{position:"right"},model:{value:e.popupShow,callback:function(t){e.popupShow=t},expression:"popupShow"}},[a("sidebar",{attrs:{isPayVal:e.isPayVal}})],1),e._v(" "),e.$route.meta.oneHeader?a("div",{staticClass:"headerBox"},[a("div",{directives:[{name:"show",rawName:"v-show",value:e.invitePerDet,expression:"invitePerDet"}],staticClass:"invitePerDet aaa"},[e.userInfoAvatarUrl?a("img",{staticClass:"inviteHead",attrs:{src:e.userInfoAvatarUrl,alt:""}}):a("img",{staticClass:"inviteHead",attrs:{src:e.appConfig.staticBaseUrl+"/images/noavatar.gif",alt:"ssss"}}),e._v(" "),e.invitePerDet&&e.userInfoName?a("div",{staticClass:"inviteName",model:{value:e.userInfoName,callback:function(t){e.userInfoName=t},expression:"userInfoName"}},[e._v(e._s(e.userInfoName))]):a("div",{staticClass:"inviteName"},[e._v("该用户已被删除")]),e._v(" "),a("p",{directives:[{name:"show",rawName:"v-show",value:e.invitationShow,expression:"invitationShow"}],staticClass:"inviteWo"},[e._v("邀请您加入")]),e._v(" "),e.followShow?a("div",{staticClass:"followBox"},[a("span",[e._v("关注："+e._s(e.followDet._data.followCount))]),e._v(" "),a("span",[e._v("被关注："+e._s(e.followDet._data.fansCount))]),e._v(" "),e.userId!=e.personUserId?a("a",{staticClass:"followOne",attrs:{href:"javascript:;",id:"followCli"},on:{click:function(t){return e.followCli(e.intiFollowVal)}}},[e._v(e._s(e.followFlag))]):e._e()]):e._e()]),e._v(" "),e.searchIconShow||e.menuIconShow?e._e():a("div",{staticClass:"headeGap"}),e._v(" "),e.searchIconShow||e.menuIconShow?a("div",{staticClass:"headOpe"},[a("span",{directives:[{name:"show",rawName:"v-show",value:e.searchIconShow,expression:"searchIconShow"}],staticClass:"icon iconfont icon-search",on:{click:e.searchJump}}),e._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:e.menuIconShow,expression:"menuIconShow"}],staticClass:"icon iconfont icon-Shape relative",attrs:{"is-link":""},on:{click:e.showPopup}},[e.noticeSum>0?a("i",{staticClass:"noticeNew"}):e._e()])]):e._e(),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:e.logoShow,expression:"logoShow"}],staticClass:"logoBox"},[e.logo?a("img",{staticClass:"logo",attrs:{src:e.logo}}):a("img",{staticClass:"logo",attrs:{src:e.appConfig.staticBaseUrl+"/images/logo.png"}})]),e._v(" "),e.siteInfo?a("div",{directives:[{name:"show",rawName:"v-show",value:e.perDetShow,expression:"perDetShow"}],staticClass:"circleDet"},[a("span",[e._v("主题："+e._s(e.siteInfo._data.other.count_threads))]),e._v(" "),a("span",[e._v("成员："+e._s(e.siteInfo._data.other.count_users))]),e._v(" "),e.siteInfo._data.set_site.site_author?a("span",[e._v("站长："+e._s(e.siteInfo._data.set_site.site_author.username))]):a("span",[e._v("站长：无")])]):e._e(),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:e.navShow,expression:"navShow"}],staticClass:"navBox",class:{fixedNavBar:e.isfixNav},attrs:{id:"testNavBar"}},[a("van-tabs",{model:{value:e.navActi,callback:function(t){e.navActi=t},expression:"navActi"}},[a("van-tab",[a("span",{attrs:{slot:"title"},on:{click:function(t){return e.categoriesCho(0)}},slot:"title"},[e._v("\n              全部\n          ")])]),e._v(" "),e._l(e.categories,(function(t,i){return a("van-tab",{key:i},[a("span",{attrs:{slot:"title"},on:{click:function(a){return e.categoriesCho(t._data.id)}},slot:"title"},[e._v("\n              "+e._s(t._data.name)+"\n          ")])])}))],2)],1)]):e._e()],1)},o=[];a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return o}))},Rp86:function(e,t,a){a("bBy9"),a("FlQf"),e.exports=a("fXsU")},SDoi:function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("myInviteJoinHeader",{attrs:{title:"邀请加入"}}),e._v(" "),a("div",{staticClass:"content"},[a("van-list",{attrs:{finished:e.finished,offset:e.offset,"finished-text":"没有更多了","immediate-check":!1},on:{load:e.onLoad},model:{value:e.loading,callback:function(t){e.loading=t},expression:"loading"}},[a("van-pull-refresh",{on:{refresh:e.onRefresh},model:{value:e.isLoading,callback:function(t){e.isLoading=t},expression:"isLoading"}},[a("div",{staticClass:"inviteBox"},[a("table",{staticClass:"inviteTable"},[a("tr",[a("th",[e._v("编号")]),e._v(" "),a("th",[e._v("邀请为")]),e._v(" "),a("th",[e._v("链接状态")]),e._v(" "),a("th",[e._v("链接操作")])]),e._v(" "),e._l(e.inviteList,(function(t,i){return a("tr",{key:i},[a("td",[e._v(e._s(t._data.id))]),e._v(" "),a("td",[e._v(e._s(e.getGroupNameById[t._data.group_id]))]),e._v(" "),a("td",[e._v(e._s(0===t._data.status?"已失效":"使用中"))]),e._v(" "),a("td",[a("a",{class:["copyA",0===t._data.status&&"font9"],attrs:{href:"javascript:;"},on:{click:function(a){return e.copyToClipBoard(t)}}},[e._v("复制")]),e._v(" "),a("a",{class:["invalidA",0===t._data.status&&"font9"],attrs:{href:"javascript:;"},on:{click:function(a){return e.resetDelete(t)}}},[e._v("置为无效")])])])}))],2)])])],1)],1),e._v(" "),a("div",{staticClass:"manageFootFixed",style:{width:e.isPhone||e.isWeixin?"100%":"640px",left:e.isPhone||e.isWeixin?"0":(e.viewportWidth-640)/2+"px"}},[a("div",{staticClass:"operaCho"},[a("div",{staticClass:"operaWo",on:{click:e.showChoice}},[a("span",[e._v(e._s(e.checkOperaStatus?e.choiceRes.attributes.name+" 邀请链接":e.choiceRes.attributes.name))]),e._v(" "),a("i",{staticClass:"icon iconfont icon-choice-item"})]),e._v(" "),e.choiceShow?a("ul",{staticClass:"operaChoList"},e._l(e.choList,(function(t,i){return a("li",{key:i,staticClass:"operaChoLi",on:{click:function(a){return a.stopPropagation(),e.setSelectVal(t)}}},[e._v(e._s(t.attributes.name)+" 邀请链接")])})),0):e._e()]),e._v(" "),a("button",{staticClass:"checkSubmit",on:{click:e.checkSubmit}},[e._v("生成")])])],1)},o=[];a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return o}))},Yoo9:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r(a("QbLZ")),o=r(a("omtG")),s=r(a("QiNT")),n=r(a("FYko"));function r(e){return e&&e.__esModule?e:{default:e}}a("iUmJ"),a("Fzl4"),t.default=(0,i.default)({name:"managementCirclesView",components:{Header:o.default}},s.default,n.default)},fXsU:function(e,t,a){var i=a("5K7Z"),o=a("fNZA");e.exports=a("WEpk").getIterator=function(e){var t=o(e);if("function"!=typeof t)throw TypeError(e+" is not iterable!");return i(t.call(e))}},omtG:function(e,t,a){"use strict";a.r(t);var i=a("RIP2"),o=a("Jgvg");for(var s in o)"default"!==s&&function(e){a.d(t,e,(function(){return o[e]}))}(s);var n=a("KHd+"),r=Object(n.a)(o.default,i.a,i.b,!1,null,null,null);t.default=r.exports},pvnC:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(a("QbLZ")),o=n(a("QiNT")),s=n(a("IsPG"));function n(e){return e&&e.__esModule?e:{default:e}}a("iUmJ"),t.default=(0,i.default)({name:"headerView",components:{Sidebar:s.default}},o.default)}}]);