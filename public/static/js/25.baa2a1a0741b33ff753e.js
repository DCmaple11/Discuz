(window.webpackJsonp=window.webpackJsonp||[]).push([[25,111],{"+4qJ":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=l(a("bS4n")),s=l(a("+d9Z")),o=l(a("QiNT")),n=l(a("omtG")),r=l(a("3XTc"));function l(t){return t&&t.__esModule?t:{default:t}}a("iUmJ"),a("N960"),e.default=(0,i.default)({name:"payCircleView",components:{Header:n.default,PayMethod:r.default}},o.default,s.default)},"+d9Z":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=o(a("/umX")),s=o(a("VVfg"));function o(t){return t&&t.__esModule?t:{default:t}}e.default={data:function(){var t;return t={thread:{},sitePrice:"",loading:!1,finished:!1,isLoading:!1,pageIndex:1,pageLimit:20,offset:100},(0,i.default)(t,"thread",!1),(0,i.default)(t,"themeCon",[]),(0,i.default)(t,"limitList",""),(0,i.default)(t,"allowRegister",""),(0,i.default)(t,"token",""),(0,i.default)(t,"alreadyLogin",""),(0,i.default)(t,"loginName",""),(0,i.default)(t,"amountNum",""),(0,i.default)(t,"codeUrl",""),(0,i.default)(t,"qrcodeShow",!1),(0,i.default)(t,"payList",[{name:"钱包",icon:"icon-wallet"}]),(0,i.default)(t,"show",!1),(0,i.default)(t,"errorInfo",""),(0,i.default)(t,"value",""),(0,i.default)(t,"walletBalance",""),(0,i.default)(t,"userDet",""),(0,i.default)(t,"payLoading",!1),t},computed:{themeId:function(){return this.$route.params.themeId},groupId:function(){return this.$route.params.groupId}},created:function(){var t=this;s.default.getLItem("tokenId")&&this.getUsers(s.default.getLItem("tokenId")).then((function(e){t.walletBalance=e.readdata._data.walletBalance})),this.tokenId=s.default.getLItem("tokenId"),this.amountNum=s.default.getLItem("siteInfo")._data.set_site.site_price,this.token=s.default.getLItem("Authorization"),this.loginName=s.default.getLItem("foregroundUser"),this.token?this.alreadyLogin=!0:this.alreadyLogin=!1,this.myThread(),this.getInfo(),this.getUsersInfo()},methods:{getInfo:function(){var t=this;this.appFetch({url:"forum",method:"get",data:{include:["users"]}}).then((function(e){if(e.errors)throw t.$toast.fail(e.errors[0].code),new Error(e.error);t.siteInfo=e.readdata,e.readdata._data.set_site.site_author?t.siteUsername=e.readdata._data.set_site.site_author.username:t.siteUsername="暂无站长信息","1"===e.readdata._data.paycenter.wxpay_close&&t.payList.unshift({name:"微信支付",icon:"icon-wxpay"}),t.sitePrice=e.readdata._data.set_site.site_price,t.allowRegister=e.readdata._data.set_reg.register_close})),this.appFetch({url:"groups",method:"get",data:{"filter[isDefault]":"1",include:["permission"]}}).then((function(e){if(e.errors)throw t.$toast.fail(e.errors[0].code),new Error(e.error);if(e.errors)throw t.$toast.fail(e.errors[0].code),new Error(e.error);t.limitList=e.readdata[0]}))},myThread:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.appFetch({url:"shareThreads",method:"get",splice:"/"+this.themeId,data:{}}).then((function(a){if(a.errors)throw t.$toast.fail(a.errors[0].code),new Error(a.error);e&&(t.thread=[]),t.thread=a.readdata}))},loginJump:function(){this.$router.push({path:"/login-user"})},registerJump:function(){this.$router.push({path:"/sign-up"})},onRefresh:function(){var t=this;this.pageIndex=1,this.myThread(!0).then((function(){t.$toast("刷新成功"),t.finished=!1,t.isLoading=!1})).catch((function(e){t.$toast("刷新失败"),t.isLoading=!1}))},signOut:function(){s.default.removeLItem("tokenId"),s.default.removeLItem("Authorization"),this.alreadyLogin=!1},getOrderSn:function(){var t=this;return this.appFetch({url:"orderList",method:"post",data:{type:1}}).then((function(e){e.errors?t.$toast.fail(e.errors[0].code):t.orderSn=e.readdata._data.order_sn})).catch((function(t){}))},orderPay:function(t,e){var a=this;return this.appFetch({url:"orderPay",method:"post",splice:"/"+this.orderSn,data:{payment_type:t,pay_password:e}}).then((function(t){if(!t.errors)return a.payLoading=!0,t;a.value="",a.$toast.fail(t.errors[0].code)})).catch((function(t){}))},getUsersInfo:function(){var t=this;if(!s.default.getLItem("tokenId"))return!1;this.appFetch({url:"users",method:"get",splice:"/"+s.default.getLItem("tokenId"),data:{include:["groups"]}}).then((function(e){e.errors?t.$toast.fail(e.errors[0].code):(t.payStatus=e.readdata._data.paid,t.userDet=e.readdata,t.payStatusNum=1,t.payStatus&&(t.payLoading=!1,t.qrcodeShow=!1,t.$router.push({path:"/details/"+t.themeId}),t.payStatusNum=11))})).catch((function(t){}))},getUsers:function(t){var e=this;return this.appFetch({url:"users",method:"get",splice:"/"+t,headers:{Authorization:"Bearer "+s.default.getLItem("Authorization")},data:{include:["groups"]}}).then((function(t){if(!t.errors)return t;e.$toast.fail(t.errors[0].code)})).catch((function(t){}))},onBridgeReady:function(t){var e=this,a=this;WeixinJSBridge.invoke("getBrandWCPayRequest",{appId:t.data.attributes.wechat_js.appId,timeStamp:t.data.attributes.wechat_js.timeStamp,nonceStr:t.data.attributes.wechat_js.nonceStr,package:t.data.attributes.wechat_js.package,signType:"MD5",paySign:t.data.attributes.wechat_js.paySign},(function(t){})),setTimeout((function(){var t=a.$toast.loading({duration:0,forbidClick:!0,message:"支付状态查询中..."}),i=5,o=setInterval((function(){i--,e.getUsers(a.tokenId).then((function(a){if(a.errors)clearInterval(o),t.message="支付失败，请重新支付！",setTimeout((function(){t.clear()}),2e3);else if(i>0||!a.readdata._data.paid)t.message="正在查询订单...";else if(a.readdata._data.paid){clearInterval(o),s.default.setLItem("foregroundUser",a.data.attributes.username),t.message="支付成功，正在跳转首页...",t.clear();var n=s.default.getSItem("beforeVisiting");n?e.$router.push({path:n}):e.$router.push({path:"/"})}else clearInterval(o),t.message="支付失败，请重新支付！",t.clear()}))}),1e3)}),3e3)},payImmediatelyClick:function(t){var e=this,a=this.appCommonH.isWeixin().isWeixin,i=this.appCommonH.isWeixin().isPhone;"微信支付"===t.name&&(this.show=!1,a?this.getOrderSn().then((function(){e.orderPay(12).then((function(t){"undefined"==typeof WeixinJSBridge?document.addEventListener?document.addEventListener("WeixinJSBridgeReady",e.onBridgeReady(t),!1):document.attachEvent&&(document.attachEvent("WeixinJSBridgeReady",e.onBridgeReady(t)),document.attachEvent("onWeixinJSBridgeReady",e.onBridgeReady(t))):e.onBridgeReady(t)}))})):i?this.getOrderSn().then((function(){e.orderPay(11).then((function(t){e.wxPayHref=t.readdata._data.wechat_h5_link,window.location.href=e.wxPayHref;var a=setInterval((function(){e.payStatus&&e.payStatusNum>10&&clearInterval(a),e.getUsersInfo()}),3e3)}))})):this.getOrderSn().then((function(){e.orderPay(10).then((function(t){e.codeUrl=t.readdata._data.wechat_qrcode,e.qrcodeShow=!0;var a=setInterval((function(){e.payStatus&&e.payStatusNum>10&&clearInterval(a),e.getUsersInfo()}),3e3)}))})))},onInput:function(t){var e=this;this.value=this.value+t,6===this.value.length&&(this.errorInfo="",this.getOrderSn().then((function(){e.orderPay(20,e.value).then((function(t){var a=setInterval((function(){e.payStatus&&e.payStatusNum>10&&clearInterval(a),e.getUsersInfo()}),3e3)}))})))},onDelete:function(){},onClose:function(){this.value="",this.errorInfo="",this.payLoading=!1},payClick:function(){this.show=!this.show}},mounted:function(){window.addEventListener("scroll",this.handleTabFix,!0)},beforeRouteLeave:function(t,e,a){window.removeEventListener("scroll",this.handleTabFix,!0),a()}}},"/PCG":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(a("bS4n")),s=n(a("QiNT")),o=n(a("IsPG"));function n(t){return t&&t.__esModule?t:{default:t}}a("iUmJ"),e.default=(0,i.default)({name:"headerView",components:{Sidebar:o.default}},s.default)},"0VOr":function(t,e,a){"use strict";a.r(e);var i=a("WDuq"),s=a.n(i);for(var o in i)"default"!==o&&function(t){a.d(e,t,(function(){return i[t]}))}(o);e.default=s.a},"0lAM":function(t,e,a){"use strict";a.d(e,"a",(function(){return i})),a.d(e,"b",(function(){return s}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"circleCon"},[a("van-pull-refresh",{on:{refresh:t.onRefresh},model:{value:t.isLoading,callback:function(e){t.isLoading=e},expression:"isLoading"}},[a("Header"),t._v(" "),t.thread?a("div",{staticClass:"circleCon"},[a("Header",{attrs:{logoShow:!0,perDetShow:!0,invitePerDet:!1,invitationShow:!1}}),t._v(" "),a("div",{staticClass:"gap"}),t._v(" "),a("div",{staticClass:"cirPostCon"},[a("div",{staticClass:"postTop"},[a("div",{staticClass:"postPer"},[t.thread.user&&t.thread.user._data.avatarUrl?a("img",{staticClass:"postHead",attrs:{src:t.thread.user._data.avatarUrl,alt:""}}):a("img",{staticClass:"postHead",attrs:{src:t.appConfig.staticBaseUrl+"/images/noavatar.gif"}}),t._v(" "),a("div",{staticClass:"perDet"},[t.thread.user?a("div",{staticClass:"perName"},[t._v(t._s(t.thread.user._data.username))]):a("div",{staticClass:"perName"},[t._v("该用户已被删除")]),t._v(" "),t.thread._data.createdAt?a("div",{staticClass:"postTime"},[t._v(t._s(t.thread._data.createdAt))]):t._e()])])]),t._v(" "),a("div",{staticClass:"postContent"},[t.thread.firstPost._data.content?a("a",{attrs:{href:"javascript:;"},domProps:{innerHTML:t._s(t.thread.firstPost._data.content)}}):t._e()])]),t._v(" "),a("div",{staticClass:"gap"}),t._v(" "),t.alreadyLogin?a("div",{staticClass:"loginOpera"},[a("p",{staticClass:"welcomeUser"},[t._v("欢迎您，"+t._s(t.loginName)),a("a",{staticClass:"signOut",attrs:{href:"javascript:;"},on:{click:t.signOut}},[t._v("退出")])]),t._v(" "),a("a",{staticClass:"regiJoin",attrs:{href:"javascript:;"},on:{click:function(e){return t.payClick(t.sitePrice)}}},[t._v("付费，获得成员权限")]),t._v(" "),a("p",{staticClass:"payMoney"},[t._v("￥"+t._s(t.sitePrice)+" / 永久有效")])]):a("div",{staticClass:"loginOpera"},[a("a",{staticClass:"mustLogin",attrs:{href:"javascript:;"},on:{click:t.loginJump}},[t._v("已注册，登录")]),t._v(" "),t.allowRegister?a("a",{staticClass:"regiJoin",attrs:{href:"javascript:;"},on:{click:t.registerJump}},[t._v("立即注册并加入")]):t._e(),t._v(" "),a("p",{staticClass:"payMoney"},[t._v("￥"+t._s(t.sitePrice)+" / 永久有效")])]),t._v(" "),a("div",{staticClass:"gap"}),t._v(" "),t.limitList?a("div",{staticClass:"powerListBox"},[a("div",{staticClass:"powerTit"},[t._v("作为"+t._s(t.limitList._data.name)+"，您将获得以下权限")]),t._v(" "),a("div",{staticClass:"powerList"},[a("div",{staticClass:"powerClassify"},[t._v("权限列表")]),t._v(" "),t._l(t.limitList.permission,(function(e,i){return a("div",{key:i},[e._data.permission&&"viewThreads"==e._data.permission?a("p",{staticClass:"powerChi"},[t._v("查看主题列表")]):t._e(),t._v(" "),e._data.permission&&"thread.viewPosts"==e._data.permission?a("p",{staticClass:"powerChi"},[t._v("查看主题")]):t._e(),t._v(" "),e._data.permission&&"createThread"==e._data.permission?a("p",{staticClass:"powerChi"},[t._v("发表主题")]):t._e(),t._v(" "),e._data.permission&&"thread.reply"==e._data.permission?a("p",{staticClass:"powerChi"},[t._v("回复主题")]):t._e(),t._v(" "),e._data.permission&&"attachment.create.0"==e._data.permission?a("p",{staticClass:"powerChi"},[t._v("上传附件")]):t._e(),t._v(" "),e._data.permission&&"attachment.create.1"==e._data.permission?a("p",{staticClass:"powerChi"},[t._v("上传图片")]):t._e(),t._v(" "),e._data.permission&&"attachment.view.0"==e._data.permission?a("p",{staticClass:"powerChi"},[t._v("查看附件")]):t._e(),t._v(" "),e._data.permission&&"attachment.view.1"==e._data.permission?a("p",{staticClass:"powerChi"},[t._v("查看图片")]):t._e(),t._v(" "),e._data.permission&&"viewUserList"==e._data.permission?a("p",{staticClass:"powerChi"},[t._v("站点会员列表")]):t._e(),t._v(" "),e._data.permission&&"attachment.delete"==e._data.permission?a("p",{staticClass:"powerChi"},[t._v("删除附件")]):t._e(),t._v(" "),e._data.permission&&"cash.create"==e._data.permission?a("p",{staticClass:"powerChi"},[t._v("申请提现")]):t._e(),t._v(" "),e._data.permission&&"order.create"==e._data.permission?a("p",{staticClass:"powerChi"},[t._v("创建订单")]):t._e(),t._v(" "),e._data.permission&&"thread.hide"==e._data.permission?a("p",{staticClass:"powerChi"},[t._v("删除主题")]):t._e(),t._v(" "),e._data.permission&&"thread.hidePosts"==e._data.permission?a("p",{staticClass:"powerChi"},[t._v("删除回复")]):t._e(),t._v(" "),e._data.permission&&"thread.favorite"==e._data.permission?a("p",{staticClass:"powerChi"},[t._v("帖子收藏")]):t._e(),t._v(" "),e._data.permission&&"thread.likePosts"==e._data.permission?a("p",{staticClass:"powerChi"},[t._v("帖子点赞")]):t._e(),t._v(" "),e._data.permission&&"user.view"==e._data.permission?a("p",{staticClass:"powerChi"},[t._v("查看某个用户信息权限")]):t._e(),t._v(" "),e._data.permission&&"viewSiteInfo"==e._data.permission?a("p",{staticClass:"powerChi"},[t._v("站点信息")]):t._e(),t._v(" "),e._data.permission&&"user.edit"==e._data.permission?a("p",{staticClass:"powerChi"},[t._v("编辑用户状态")]):t._e(),t._v(" "),e._data.permission&&"group.edit"==e._data.permission?a("p",{staticClass:"powerChi"},[t._v("编辑用户组")]):t._e(),t._v(" "),e._data.permission&&"createInvite"==e._data.permission?a("p",{staticClass:"powerChi"},[t._v("管理-邀请加入")]):t._e(),t._v(" "),e._data.permission&&"thread.batchEdit"==e._data.permission?a("p",{staticClass:"powerChi"},[t._v("批量管理主题")]):t._e(),t._v(" "),e._data.permission&&"thread.editPosts"==e._data.permission?a("p",{staticClass:"powerChi"},[t._v("编辑")]):t._e(),t._v(" "),e._data.permission&&"thread.essence"==e._data.permission?a("p",{staticClass:"powerChi"},[t._v("加精")]):t._e(),t._v(" "),e._data.permission&&"thread.sticky"==e._data.permission?a("p",{staticClass:"powerChi"},[t._v("置顶")]):t._e()])}))],2)]):t._e()],1):t._e()],1),t._v(" "),a("van-popup",{staticClass:"qrCodeBox",attrs:{round:"","close-icon-position":"top-right",closeable:"","get-container":"body"},model:{value:t.qrcodeShow,callback:function(e){t.qrcodeShow=e},expression:"qrcodeShow"}},[a("span",{staticClass:"popupTit"},[t._v("立即支付")]),t._v(" "),a("div",{staticClass:"payNum"},[t._v("￥"),a("span",[t._v(t._s(t.amountNum))])]),t._v(" "),a("div",{staticClass:"payType"},[a("span",{staticClass:"typeLeft"},[t._v("支付方式")]),t._v(" "),a("span",{staticClass:"typeRight"},[a("i",{staticClass:"icon iconfont icon-wepay"}),t._v("微信支付")])]),t._v(" "),a("img",{staticClass:"qrCode",attrs:{src:t.codeUrl,alt:"微信支付二维码"}}),t._v(" "),a("p",{staticClass:"payTip"},[t._v("微信识别二维码支付")])]),t._v(" "),t.userDet?a("PayMethod",{attrs:{data:t.payList,money:t.sitePrice,balance:t.walletBalance,walletStatus:t.userDet._data.canWalletPay,payUrl:"setup-pay-pwd",error:t.errorInfo},on:{oninput:t.onInput,delete:t.onDelete,close:t.onClose,payImmediatelyClick:t.payImmediatelyClick},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}}):t._e(),t._v(" "),t.payLoading?a("div",{staticClass:"loadFix"},[a("div",{staticClass:"loadMask"}),t._v(" "),a("van-loading",{staticClass:"loadIcon",attrs:{color:"#f7f7f7",type:"spinner"}})],1):t._e()],1)},s=[]},"3Umv":function(t,e,a){"use strict";a.r(e);var i=a("+4qJ"),s=a.n(i);for(var o in i)"default"!==o&&function(t){a.d(e,t,(function(){return i[t]}))}(o);e.default=s.a},"3XTc":function(t,e,a){"use strict";a.r(e);var i=a("bNLU"),s=a("0VOr");for(var o in s)"default"!==o&&function(t){a.d(e,t,(function(){return s[t]}))}(o);var n=a("Yj/X"),r=Object(n.a)(s.default,i.a,i.b,!1,null,null,null);e.default=r.exports},JY4G:function(t,e,a){"use strict";a.d(e,"a",(function(){return i})),a.d(e,"b",(function(){return s}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("van-popup",{staticClass:"sidebarWrap",style:{height:"100%",right:t.isPhone||t.isWeixin?"0":(t.viewportWidth-640)/2+"px"},attrs:{position:"right"},model:{value:t.popupShow,callback:function(e){t.popupShow=e},expression:"popupShow"}},[a("sidebar",{attrs:{isPayVal:t.isPayVal}})],1),t._v(" "),t.$route.meta.oneHeader?a("div",{staticClass:"headerBox"},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.invitePerDet,expression:"invitePerDet"}],staticClass:"invitePerDet aaa"},[t.userInfoAvatarUrl?a("img",{staticClass:"inviteHead",attrs:{src:t.userInfoAvatarUrl,alt:""}}):a("img",{staticClass:"inviteHead",attrs:{src:t.appConfig.staticBaseUrl+"/images/noavatar.gif",alt:""}}),t._v(" "),t.invitePerDet&&t.userInfoName?a("div",{staticClass:"inviteName",model:{value:t.userInfoName,callback:function(e){t.userInfoName=e},expression:"userInfoName"}},[t._v(t._s(t.userInfoName))]):t._e(),t._v(" "),a("p",{directives:[{name:"show",rawName:"v-show",value:t.invitationShow,expression:"invitationShow"}],staticClass:"inviteWo"},[t._v("邀请您加入")]),t._v(" "),t.followShow&&t.followDet?a("div",{staticClass:"followBox"},[a("span",[t._v("关注："+t._s(t.followDet._data.followCount))]),t._v(" "),a("span",[t._v("被关注："+t._s(t.followDet._data.fansCount))]),t._v(" "),t.equalId?t._e():a("div",{staticClass:"followStatus",attrs:{href:"javascript:;"}},["0"==t.intiFollowVal?a("a",{attrs:{href:"javascript:;"},on:{click:function(e){return t.followCli(t.intiFollowVal)}}},[t._v("关注TA")]):"2"==t.intiFollowVal?a("a",{attrs:{href:"javascript:;"},on:{click:function(e){return t.followCli(t.intiFollowVal)}}},[t._v("相互关注")]):"1"==t.intiFollowVal?a("a",{attrs:{href:"javascript:;"},on:{click:function(e){return t.followCli(t.intiFollowVal)}}},[t._v("已关注")]):t._e()])]):t._e()]),t._v(" "),t.searchIconShow||t.menuIconShow?t._e():a("div",{staticClass:"headeGap"}),t._v(" "),t.searchIconShow||t.menuIconShow?a("div",{staticClass:"headOpe"},[a("span",{directives:[{name:"show",rawName:"v-show",value:t.searchIconShow,expression:"searchIconShow"}],staticClass:"icon iconfont icon-search",on:{click:t.searchJump}}),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:t.menuIconShow,expression:"menuIconShow"}],staticClass:"icon iconfont icon-Shape relative",attrs:{"is-link":""},on:{click:t.showPopup}},[t.noticeSum>0?a("i",{staticClass:"noticeNew"}):t._e()])]):t._e(),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.logoShow,expression:"logoShow"}],staticClass:"logoBox"},[t.logo?a("img",{staticClass:"logo",attrs:{src:t.logo}}):a("img",{staticClass:"logo",attrs:{src:t.appConfig.staticBaseUrl+"/images/logo.png"}})]),t._v(" "),t.siteInfo?a("div",{directives:[{name:"show",rawName:"v-show",value:t.perDetShow,expression:"perDetShow"}],staticClass:"circleDet"},[a("span",[t._v("主题："+t._s(t.siteInfo._data.other.count_threads))]),t._v(" "),a("span",[t._v("成员："+t._s(t.siteInfo._data.other.count_users))]),t._v(" "),t.siteInfo._data.set_site.site_author?a("span",[t._v("站长："+t._s(t.siteInfo._data.set_site.site_author.username))]):a("span",[t._v("站长：无")])]):t._e(),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.navShow,expression:"navShow"}],staticClass:"navBox",class:{fixedNavBar:t.isfixNav},attrs:{id:"testNavBar"}},[a("van-tabs",{model:{value:t.navActi,callback:function(e){t.navActi=e},expression:"navActi"}},[a("van-tab",[a("span",{attrs:{slot:"title"},on:{click:function(e){return t.categoriesCho(0)}},slot:"title"},[t._v("\n              全部\n          ")])]),t._v(" "),t._l(t.categories,(function(e,i){return a("van-tab",{key:i},[a("span",{attrs:{slot:"title"},on:{click:function(a){return t.categoriesCho(e._data.id)}},slot:"title"},[t._v("\n              "+t._s(e._data.name)+"\n          ")])])}))],2)],1)]):t._e()],1)},s=[]},Jgvg:function(t,e,a){"use strict";a.r(e);var i=a("/PCG"),s=a.n(i);for(var o in i)"default"!==o&&function(t){a.d(e,t,(function(){return i[t]}))}(o);e.default=s.a},QiNT:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,s=r(a("/umX")),o=(a("ULRk"),r(a("VVfg"))),n=r(a("6NK7"));function r(t){return t&&t.__esModule?t:{default:t}}e.default={data:function(){var t;return t={headBackShow:!1,oneHeader:!1,twoHeader:!1,threeHeader:!1,fourHeader:!1,isfixNav:!1,isShow:!1,isHeadShow:!1,showHeader:!1,showMask:!1,title:"",navActi:0,perDet:{themeNum:"1222",memberNum:"1222",circleLeader:"站长名称"},avatarUrl:"",mobile:""},(0,s.default)(t,"isfixNav",!1),(0,s.default)(t,"popupShow",!1),(0,s.default)(t,"current",0),(0,s.default)(t,"userDet",[]),(0,s.default)(t,"categories",[]),(0,s.default)(t,"siteInfo",!1),(0,s.default)(t,"username",""),(0,s.default)(t,"isPayVal",""),(0,s.default)(t,"isWeixin",!1),(0,s.default)(t,"isPhone",!1),(0,s.default)(t,"firstCategoriesId",""),(0,s.default)(t,"logo",!1),(0,s.default)(t,"viewportWidth",""),(0,s.default)(t,"userId",""),(0,s.default)(t,"followDet",""),(0,s.default)(t,"followFlag",""),(0,s.default)(t,"intiFollowVal","0"),(0,s.default)(t,"noticeSum",0),(0,s.default)(t,"intiFollowChangeVal","0"),(0,s.default)(t,"oldFollow",!1),(0,s.default)(t,"equalId",!1),(0,s.default)(t,"clickStatus",!0),t},props:{userInfoAvatarUrl:{type:String},userInfoName:{type:String},headFixed:{headFixed:!1},invitePerDet:{invitePerDet:!1},searchIconShow:{searchIconShow:!1},menuIconShow:{menuIconShow:!1},navShow:{navShow:!1},invitationShow:{invitationShow:!1},perDetShow:{perDet:!1},logoShow:{logoShow:!1},followShow:{followShow:!1}},computed:{personUserId:function(){return this.$route.params.userId}},created:function(){this.userId=o.default.getLItem("tokenId"),this.userId==this.personUserId?this.equalId=!0:this.equalId=!1,this.viewportWidth=window.innerWidth,this.isWeixin=n.default.isWeixin().isWeixin,this.isPhone=n.default.isWeixin().isPhone,this.loadCategories(),this.followShow&&this.loadUserFollowInfo(),this.userId&&this.loadUserInfo()},watch:{isfixNav:function(t,e){this.isfixNav=t}},methods:(i={limitWidth:function(){document.getElementById("testNavBar").style.width="640px";var t=window.innerWidth;document.getElementById("testNavBar").style.marginLeft=(t-640)/2+"px"},loadCategories:function(){var t=this;this.appFetch({url:"forum",method:"get",data:{include:["users"]}}).then((function(e){t.siteInfo=e.readdata,e.readdata._data.set_site.site_logo&&(t.logo=e.readdata._data.set_site.site_logo),t.isPayVal=e.readdata._data.set_site.site_mode})),this.navShow&&this.appFetch({url:"categories",method:"get",data:{include:[]}}).then((function(e){t.categories=e.readdata,t.firstCategoriesId=e.readdata[0]._data.id,t.$emit("update",t.firstCategoriesId)}))},loadUserFollowInfo:function(){var t=this;this.appFetch({url:"users",method:"get",splice:"/"+this.personUserId,data:{}}).then((function(e){t.followDet=e.readdata,"1"==e.readdata._data.follow?t.followFlag="已关注":"0"==e.readdata._data.follow?t.followFlag="关注TA":t.followFlag="相互关注",t.intiFollowVal=e.readdata._data.follow}))},loadUserInfo:function(){var t=this;if(!this.userId)return!1;this.appFetch({url:"users",method:"get",splice:"/"+this.userId,data:{}}).then((function(e){e.data.attributes.typeUnreadNotifications.liked||(e.data.attributes.typeUnreadNotifications.liked=0),e.data.attributes.typeUnreadNotifications.replied||(e.data.attributes.typeUnreadNotifications.replied=0),e.data.attributes.typeUnreadNotifications.rewarded||(e.data.attributes.typeUnreadNotifications.rewarded=0),e.data.attributes.typeUnreadNotifications.system||(e.data.attributes.typeUnreadNotifications.system=0),t.noticeSum=e.data.attributes.typeUnreadNotifications.liked+e.data.attributes.typeUnreadNotifications.replied+e.data.attributes.typeUnreadNotifications.rewarded+e.data.attributes.typeUnreadNotifications.system}))},followCli:function(t){if(o.default.getLItem("Authorization")){if(!this.clickStatus)return!1;this.clickStatus=!1;var e=new Object,a="";"1"==t||"2"==t?(e.to_user_id=this.personUserId,a="delete",this.oldFollow=t):(e.to_user_id=this.personUserId,a="post"),this.followRequest(a,e,t)}else o.default.setSItem("beforeVisiting",this.$route.path),this.$router.push({path:"/login-user"})},followRequest:function(t,e,a){var i=this;this.appFetch({url:"follow",method:t,data:{data:{type:"user_follow",attributes:e}}}).then((function(e){if(e.errors)throw i.$toast.fail(e.errors[0].code),new Error(e.error);"delete"==t?(i.intiFollowVal="0",i.followDet._data.fansCount=i.followDet._data.fansCount-1):"1"==i.oldFollow||"0"==i.oldFollow?(i.followDet._data.fansCount=i.followDet._data.fansCount+1,i.intiFollowVal="1"):(i.followDet._data.fansCount=i.followDet._data.fansCount+1,i.intiFollowVal="2"),i.clickStatus=!0}))},backUrl:function(){window.history.go(-1)},showPopup:function(){this.popupShow=!0},categoriesCho:function(t){this.$emit("categoriesChoice",t)},searchJump:function(){this.$router.push({path:"/search"})},handleTabFix:function(){if(this.headFixed)if((window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop)>document.querySelector("#testNavBar").offsetTop)this.showHeader=!0,this.isfixNav=!0,1!=this.isWeixin&&1!=this.isPhone&&this.limitWidth();else{this.showHeader=!1,this.isfixNav=!1;window.innerWidth;document.getElementById("testNavBar").style.marginLeft="0px"}}},(0,s.default)(i,"backUrl",(function(){window.history.go(-1)})),(0,s.default)(i,"LogOut",(function(){})),(0,s.default)(i,"bindEvent",(function(t){1==t&&this.LogOut()})),i),mounted:function(){window.addEventListener("scroll",this.handleTabFix,!0)},beforeDestroy:function(){window.removeEventListener("scroll",this.handleTabFix)},destroyed:function(){window.removeEventListener("scroll",this.handleTabFix)},beforeRouteLeave:function(t,e,a){window.removeEventListener("scroll",this.handleTabFix),a()}}},RKEP:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,s=a("VVfg"),o=(i=s)&&i.__esModule?i:{default:i};e.default={data:function(){return{paySelectShow:!1,payImmediatelyShow:!1,radio:0,descriptionShow:!1,showKeyboard:!1}},props:{value:{type:Boolean,default:!1},money:{type:String,default:"0.00"},balance:{type:String,default:"0.00"},data:{type:Array,default:[{name:"钱包",icon:""}]},error:{type:String},walletStatus:{type:Boolean,default:!1},payUrl:{type:String},pwdValue:{type:String,default:""}},methods:{onInput:function(t){this.$emit("oninput",t)},onDelete:function(){this.$emit("delete")},onClose:function(){this.$emit("close")},payImmediatelyClick:function(){this.showKeyboard=!0,"钱包"===this.data[this.radio].name&&(this.paySelectShow=!this.paySelectShow,this.payImmediatelyShow=!this.payImmediatelyShow),this.$emit("payImmediatelyClick",this.data[this.radio])},payStatusClick:function(){this.payUrl&&(this.$router.push({path:"/"+this.payUrl}),o.default.setLItem("payUrl",this.$route.fullPath))},clickOverlay:function(){this.$emit("input",!1),this.$emit("clickOverlay"),this.radio=0,this.paySelectBox=!1,this.payImmediatelyShow=!1}},watch:{value:function(t){this.paySelectShow=t,this.descriptionShow=parseFloat(this.money)>parseFloat(this.balance),t||(this.paySelectBox=!1,this.payImmediatelyShow=!1,this.showKeyboard=!1)},payImmediatelyShow:function(t){}}}},WDuq:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=o(a("bS4n")),s=o(a("RKEP"));function o(t){return t&&t.__esModule?t:{default:t}}a("iUmJ"),e.default=(0,i.default)({name:"paymentMethodView"},s.default)},bNLU:function(t,e,a){"use strict";a.d(e,"a",(function(){return i})),a.d(e,"b",(function(){return s}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"payment-method-box"},[a("van-popup",{staticClass:"way-to-choose-box",attrs:{round:"","safe-area-inset-bottom":"","get-container":"body"},on:{close:t.onClose,"click-overlay":t.clickOverlay},model:{value:t.paySelectShow,callback:function(e){t.paySelectShow=e},expression:"paySelectShow"}},[a("div",{staticClass:"way-to-choose-main"},[a("van-icon",{staticClass:"icon-close",attrs:{name:"cross",size:"20"},on:{click:t.clickOverlay}}),t._v(" "),a("div",{staticClass:"manner-title"},[a("h1",[t._v("立即支付")]),t._v(" "),a("p",[a("span",[t._v("￥")]),t._v(t._s(t.money))]),t._v(" "),a("i",{staticClass:"manner-title_grid"})]),t._v(" "),a("div",{staticClass:"way-to-choose_cont"},[a("p",{staticClass:"way-to-choose_cont-title"},[t._v("支付方式")]),t._v(" "),a("div",{staticClass:"way-to-choose_cont-select"},[a("van-radio-group",{model:{value:t.radio,callback:function(e){t.radio=e},expression:"radio"}},t._l(t.data,(function(e,i){return a("div",{staticClass:"way-to-choose_cont-select_cell",on:{click:function(e){!t.descriptionShow&&t.walletStatus&&(t.radio=i)}}},[a("div",{staticClass:"way-to-choose_cont-select_cell-left"},[a("span",{staticClass:"icon iconfont",class:e.icon}),t._v(" "),a("div",{staticClass:"way-to-choose_cont-select_cell-left-title"},[a("span",[t._v(t._s(e.name))]),t._v(" "),t.walletStatus||"钱包"!==e.name?t.descriptionShow&&"钱包"===e.name?a("p",{staticClass:"way-to-choose_cont-select_cell-left-title_description"},[t._v("钱包余额不足，剩余"+t._s(t.balance)+"元")]):t._e():a("p",{staticClass:"way-to-choose_cont-select_cell-left-title_description",on:{click:t.payStatusClick}},[t._v("请设置钱包支付密码")])])]),t._v(" "),a("van-radio",{attrs:{slot:"right-icon",disabled:(t.descriptionShow||!t.walletStatus)&&"钱包"===e.name,name:i},slot:"right-icon"})],1)})),0)],1)]),t._v(" "),a("div",{staticClass:"way-to-choose_footer"},[a("van-button",{attrs:{type:"primary"},on:{click:t.payImmediatelyClick}},[t._v("立即支付")])],1)],1)]),t._v(" "),a("van-popup",{staticClass:"pay-immediately-box",class:t.error?"pay-immediately-box-err":"",attrs:{round:"","safe-area-inset-bottom":"","close-icon-position":"top-right","get-container":"body"},on:{close:t.onClose,"click-overlay":t.clickOverlay},model:{value:t.payImmediatelyShow,callback:function(e){t.payImmediatelyShow=e},expression:"payImmediatelyShow"}},[a("div",{staticClass:"pay-immediately-main"},[a("van-icon",{staticClass:"icon-close",attrs:{name:"cross",size:"20"},on:{click:t.clickOverlay}}),t._v(" "),a("div",{staticClass:"manner-title"},[a("h1",[t._v("立即支付")]),t._v(" "),a("p",[a("span",[t._v("￥")]),t._v(t._s(t.money))]),t._v(" "),a("i",{staticClass:"manner-title_grid"})]),t._v(" "),a("div",{staticClass:"pay-immediately-main_cont"},[a("van-cell",{attrs:{title:"支付方式","is-link":""},on:{click:function(e){t.paySelectShow=!t.paySelectShow,t.payImmediatelyShow=!t.payImmediatelyShow}}},[a("template",{slot:"default"},[a("span",{staticClass:"icon iconfont",class:t.data[t.radio].icon}),t._v(" "),a("span",{staticClass:"custom-title"},[t._v(t._s(t.data[t.radio].name))])])],2)],1),t._v(" "),a("van-password-input",{staticClass:"passwordInp",attrs:{value:t.pwdValue,focused:t.showKeyboard,"error-info":t.error},on:{focus:function(e){t.showKeyboard=!0}}})],1)]),t._v(" "),a("van-number-keyboard",{attrs:{"safe-area-inset-bottom":"","z-index":2100,show:t.showKeyboard},on:{input:t.onInput,delete:t.onDelete,blur:function(e){t.showKeyboard=!1}}})],1)},s=[]},lifp:function(t,e,a){"use strict";a.r(e);var i=a("0lAM"),s=a("3Umv");for(var o in s)"default"!==o&&function(t){a.d(e,t,(function(){return s[t]}))}(o);var n=a("Yj/X"),r=Object(n.a)(s.default,i.a,i.b,!1,null,null,null);e.default=r.exports},omtG:function(t,e,a){"use strict";a.r(e);var i=a("JY4G"),s=a("Jgvg");for(var o in s)"default"!==o&&function(t){a.d(e,t,(function(){return s[t]}))}(o);var n=a("Yj/X"),r=Object(n.a)(s.default,i.a,i.b,!1,null,null,null);e.default=r.exports}}]);