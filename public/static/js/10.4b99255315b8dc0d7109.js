(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"0VOr":function(t,a,e){"use strict";e.r(a);var n=e("WDuq"),i=e.n(n);for(var s in n)"default"!==s&&function(t){e.d(a,t,(function(){return n[t]}))}(s);a.default=i.a},"2qD6":function(t,a,e){"use strict";e.r(a);var n=e("r2XW"),i=e("mNuq");for(var s in i)"default"!==s&&function(t){e.d(a,t,(function(){return i[t]}))}(s);var o=e("Yj/X"),c=Object(o.a)(i.default,n.a,n.b,!1,null,null,null);a.default=c.exports},"3XTc":function(t,a,e){"use strict";e.r(a);var n=e("bNLU"),i=e("0VOr");for(var s in i)"default"!==s&&function(t){e.d(a,t,(function(){return i[t]}))}(s);var o=e("Yj/X"),c=Object(o.a)(i.default,n.a,n.b,!1,null,null,null);a.default=c.exports},RKEP:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n,i=e("VVfg"),s=(n=i)&&n.__esModule?n:{default:n};a.default={data:function(){return{paySelectShow:!1,payImmediatelyShow:!1,radio:0,descriptionShow:!1,showKeyboard:!1}},props:{value:{type:Boolean,default:!1},money:{type:String,default:"0.00"},balance:{type:String,default:"0.00"},data:{type:Array,default:[{name:"钱包",icon:""}]},error:{type:String},walletStatus:{type:Boolean,default:!1},payUrl:{type:String},pwdValue:{type:String,default:""}},methods:{onInput:function(t){this.$emit("oninput",t)},onDelete:function(){this.$emit("delete")},onClose:function(){this.$emit("close")},payImmediatelyClick:function(){this.showKeyboard=!0,"钱包"===this.data[this.radio].name&&(this.paySelectShow=!this.paySelectShow,this.payImmediatelyShow=!this.payImmediatelyShow),this.$emit("payImmediatelyClick",this.data[this.radio])},payStatusClick:function(){this.payUrl&&(this.$router.push({path:"/"+this.payUrl}),s.default.setLItem("payUrl",this.$route.fullPath))},clickOverlay:function(){this.$emit("input",!1),this.$emit("clickOverlay"),this.radio=0,this.paySelectBox=!1,this.payImmediatelyShow=!1}},watch:{value:function(t){this.paySelectShow=t,this.descriptionShow=parseFloat(this.money)>parseFloat(this.balance),t||(this.paySelectBox=!1,this.payImmediatelyShow=!1,this.showKeyboard=!1)},payImmediatelyShow:function(t){}}}},WDuq:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=s(e("bS4n")),i=s(e("RKEP"));function s(t){return t&&t.__esModule?t:{default:t}}e("iUmJ"),a.default=(0,n.default)({name:"paymentMethodView"},i.default)},bNLU:function(t,a,e){"use strict";e.d(a,"a",(function(){return n})),e.d(a,"b",(function(){return i}));var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"payment-method-box"},[e("van-popup",{staticClass:"way-to-choose-box",attrs:{round:"","safe-area-inset-bottom":"","get-container":"body"},on:{close:t.onClose,"click-overlay":t.clickOverlay},model:{value:t.paySelectShow,callback:function(a){t.paySelectShow=a},expression:"paySelectShow"}},[e("div",{staticClass:"way-to-choose-main"},[e("van-icon",{staticClass:"icon-close",attrs:{name:"cross",size:"20"},on:{click:t.clickOverlay}}),t._v(" "),e("div",{staticClass:"manner-title"},[e("h1",[t._v("立即支付")]),t._v(" "),e("p",[e("span",[t._v("￥")]),t._v(t._s(t.money))]),t._v(" "),e("i",{staticClass:"manner-title_grid"})]),t._v(" "),e("div",{staticClass:"way-to-choose_cont"},[e("p",{staticClass:"way-to-choose_cont-title"},[t._v("支付方式")]),t._v(" "),e("div",{staticClass:"way-to-choose_cont-select"},[e("van-radio-group",{model:{value:t.radio,callback:function(a){t.radio=a},expression:"radio"}},t._l(t.data,(function(a,n){return e("div",{staticClass:"way-to-choose_cont-select_cell",on:{click:function(a){!t.descriptionShow&&t.walletStatus&&(t.radio=n)}}},[e("div",{staticClass:"way-to-choose_cont-select_cell-left"},[e("span",{staticClass:"icon iconfont",class:a.icon}),t._v(" "),e("div",{staticClass:"way-to-choose_cont-select_cell-left-title"},[e("span",[t._v(t._s(a.name))]),t._v(" "),t.walletStatus||"钱包"!==a.name?t.descriptionShow&&"钱包"===a.name?e("p",{staticClass:"way-to-choose_cont-select_cell-left-title_description"},[t._v("钱包余额不足，剩余"+t._s(t.balance)+"元")]):t._e():e("p",{staticClass:"way-to-choose_cont-select_cell-left-title_description",on:{click:t.payStatusClick}},[t._v("请设置钱包支付密码")])])]),t._v(" "),e("van-radio",{attrs:{slot:"right-icon",disabled:(t.descriptionShow||!t.walletStatus)&&"钱包"===a.name,name:n},slot:"right-icon"})],1)})),0)],1)]),t._v(" "),e("div",{staticClass:"way-to-choose_footer"},[e("van-button",{attrs:{type:"primary"},on:{click:t.payImmediatelyClick}},[t._v("立即支付")])],1)],1)]),t._v(" "),e("van-popup",{staticClass:"pay-immediately-box",class:t.error?"pay-immediately-box-err":"",attrs:{round:"","safe-area-inset-bottom":"","close-icon-position":"top-right","get-container":"body"},on:{close:t.onClose,"click-overlay":t.clickOverlay},model:{value:t.payImmediatelyShow,callback:function(a){t.payImmediatelyShow=a},expression:"payImmediatelyShow"}},[e("div",{staticClass:"pay-immediately-main"},[e("van-icon",{staticClass:"icon-close",attrs:{name:"cross",size:"20"},on:{click:t.clickOverlay}}),t._v(" "),e("div",{staticClass:"manner-title"},[e("h1",[t._v("立即支付")]),t._v(" "),e("p",[e("span",[t._v("￥")]),t._v(t._s(t.money))]),t._v(" "),e("i",{staticClass:"manner-title_grid"})]),t._v(" "),e("div",{staticClass:"pay-immediately-main_cont"},[e("van-cell",{attrs:{title:"支付方式","is-link":""},on:{click:function(a){t.paySelectShow=!t.paySelectShow,t.payImmediatelyShow=!t.payImmediatelyShow}}},[e("template",{slot:"default"},[e("span",{staticClass:"icon iconfont",class:t.data[t.radio].icon}),t._v(" "),e("span",{staticClass:"custom-title"},[t._v(t._s(t.data[t.radio].name))])])],2)],1),t._v(" "),e("van-password-input",{staticClass:"passwordInp",attrs:{value:t.pwdValue,focused:t.showKeyboard,"error-info":t.error},on:{focus:function(a){t.showKeyboard=!0}}})],1)]),t._v(" "),e("van-number-keyboard",{attrs:{"safe-area-inset-bottom":"","z-index":2100,show:t.showKeyboard},on:{input:t.onInput,delete:t.onDelete,blur:function(a){t.showKeyboard=!1}}})],1)},i=[]},"jn+w":function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=o(e("bS4n")),i=o(e("zGyv")),s=o(e("3XTc"));function o(t){return t&&t.__esModule?t:{default:t}}e("iUmJ"),e("N960"),a.default=(0,n.default)({name:"longTextDetailsView",components:{PayMethod:s.default}},i.default)},mNuq:function(t,a,e){"use strict";e.r(a);var n=e("jn+w"),i=e.n(n);for(var s in n)"default"!==s&&function(t){e.d(a,t,(function(){return n[t]}))}(s);a.default=i.a},r2XW:function(t,a,e){"use strict";e.d(a,"a",(function(){return n})),e.d(a,"b",(function(){return i}));var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{model:{value:t.themeCon,callback:function(a){t.themeCon=a},expression:"themeCon"}},[e("div",{staticClass:"postTop"},[e("div",{staticClass:"postPer"},[t.themeCon.user&&t.themeCon.user._data.avatarUrl?e("img",{staticClass:"postHead",attrs:{src:t.themeCon.user._data.avatarUrl,alt:""},on:{click:function(a){return t.jumpPerDet(t.themeCon.user._data.id)}}}):e("img",{staticClass:"postHead",attrs:{src:t.appConfig.staticBaseUrl+"/images/noavatar.gif"},on:{click:function(a){return t.jumpPerDet(t.themeCon.user._data.id)}}}),t._v(" "),e("div",{staticClass:"perDet"},[t.themeCon.user?e("div",{staticClass:"perName",on:{click:function(a){return t.jumpPerDet(t.themeCon.user._data.id)}}},[t._v(t._s(t.themeCon.user._data.username))]):e("div",{staticClass:"perName"},[t._v("该用户已被删除")]),t._v(" "),e("div",{staticClass:"postTime"},[t._v(t._s(t.$moment(t.themeCon._data.createdAt).format("YYYY-MM-DD HH:mm")))])])]),t._v(" "),e("div",{staticClass:"postOpera"},[t.themeCon._data.isSticky?e("span",{staticClass:"icon iconfont icon-top"}):t._e()])]),t._v(" "),e("div",{staticClass:"postTitle"},[t._v(t._s(t.themeCon._data.title))]),t._v(" "),e("div",{staticClass:"longTextContent",domProps:{innerHTML:t._s(t.themeCon.firstPost._data.contentHtml)}}),t._v(" "),!t.themeCon._data.paid&&t.themeCon._data.price>0?e("div",{staticClass:"payTipBox"},[e("p",{staticClass:"tipPrice"},[t._v("\n      本内容需向作者支付 \n      "),e("span",[t._v(t._s(t.themeCon._data.price))]),t._v(" 元 才能浏览\n    ")]),t._v(" "),e("a",{staticClass:"buyBtn",attrs:{href:"javascript:;"},on:{click:t.buyTheme}},[t._v("购买内容")])]):t._e(),t._v(" "),t.firstpostImageListProp.length>0?e("div",{staticClass:"postImgBox"},[e("div",{staticClass:"postImgList"},[t.isWeixin||t.isPhone?e("div",t._l(t.firstpostImageListProp,(function(a,n){return e("van-image",{key:n,attrs:{"lazy-load":"",key:"index",src:a},on:{click:function(a){return t.imageSwiper(n,"detailImg")}}})})),1):e("div",t._l(t.firstpostImageListProp,(function(t,a){return e("van-image",{key:a,attrs:{"lazy-load":"",key:"index",src:t}})})),1)])]):t._e(),t._v(" "),t.isiOS&&t.themeCon.firstPost.attachments.length>0?e("div",{staticClass:"uploadFileList"},t._l(t.themeCon.firstPost.attachments,(function(a,n){return e("a",{key:n,staticClass:"fileChi",on:{click:function(e){return t.downAttachment(a._data.url)}}},["rar"===a._data.extension?e("span",{staticClass:"icon iconfont icon-rar"}):t._e(),t._v(" "),"zip"===a._data.extension?e("span",{staticClass:"icon iconfont icon-rar"}):"doc"===a._data.extension||"docx"===a._data.extension?e("span",{staticClass:"icon iconfont icon-word"}):"pdf"===a._data.extension?e("span",{staticClass:"icon iconfont icon-pdf"}):"jpg"===a._data.extension?e("span",{staticClass:"icon iconfont icon-jpg"}):"mp"===a._data.extension?e("span",{staticClass:"icon iconfont icon-mp3"}):"mp1"===a._data.extension?e("span",{staticClass:"icon iconfont icon-mp4"}):"png"===a._data.extension?e("span",{staticClass:"icon iconfont icon-PNG"}):"ppt"===a._data.extension?e("span",{staticClass:"icon iconfont icon-ppt"}):"swf"===a._data.extension?e("span",{staticClass:"icon iconfont icon-swf"}):"TIFF"===a._data.extension?e("span",{staticClass:"icon iconfont icon-TIFF"}):"txt"===a._data.extension?e("span",{staticClass:"icon iconfont icon-txt"}):"xls"===a._data.extension?e("span",{staticClass:"icon iconfont icon-xls"}):e("span",{staticClass:"icon iconfont icon-doubt"}),t._v(" "),e("span",{staticClass:"fileName"},[t._v(t._s(a._data.fileName))])])})),0):t._e(),t._v(" "),t.themeCon.firstPost.attachments.length>0?e("div",{staticClass:"uploadFileList"},t._l(t.themeCon.firstPost.attachments,(function(a,n){return e("a",{key:n,staticClass:"fileChi",attrs:{href:a._data.url,download:""}},["rar"===a._data.extension?e("span",{staticClass:"icon iconfont icon-rar"}):t._e(),t._v(" "),"zip"===a._data.extension?e("span",{staticClass:"icon iconfont icon-rar"}):"doc"===a._data.extension||"docx"===a._data.extension?e("span",{staticClass:"icon iconfont icon-word"}):"pdf"===a._data.extension?e("span",{staticClass:"icon iconfont icon-pdf"}):"jpg"===a._data.extension?e("span",{staticClass:"icon iconfont icon-jpg"}):"mp"===a._data.extension?e("span",{staticClass:"icon iconfont icon-mp3"}):"mp1"===a._data.extension?e("span",{staticClass:"icon iconfont icon-mp4"}):"png"===a._data.extension?e("span",{staticClass:"icon iconfont icon-PNG"}):"ppt"===a._data.extension?e("span",{staticClass:"icon iconfont icon-ppt"}):"swf"===a._data.extension?e("span",{staticClass:"icon iconfont icon-swf"}):"TIFF"===a._data.extension?e("span",{staticClass:"icon iconfont icon-TIFF"}):"txt"===a._data.extension?e("span",{staticClass:"icon iconfont icon-txt"}):"xls"===a._data.extension?e("span",{staticClass:"icon iconfont icon-xls"}):e("span",{staticClass:"icon iconfont icon-doubt"}),t._v(" "),e("span",{staticClass:"fileName"},[t._v(t._s(a._data.fileName))])])})),0):t._e(),t._v(" "),e("van-popup",{staticClass:"qrCodeBox",attrs:{round:"","close-icon-position":"top-right",closeable:"","get-container":"body"},model:{value:t.qrcodeShow,callback:function(a){t.qrcodeShow=a},expression:"qrcodeShow"}},[e("span",{staticClass:"popupTit"},[t._v("立即支付")]),t._v(" "),e("div",{staticClass:"payNum"},[t._v("\n      ￥\n      "),e("span",[t._v(t._s(t.themeCon._data.price))])]),t._v(" "),e("div",{staticClass:"payType"},[e("span",{staticClass:"typeLeft"},[t._v("支付方式")]),t._v(" "),e("span",{staticClass:"typeRight"},[e("i",{staticClass:"icon iconfont icon-wepay"}),t._v("微信支付\n      ")])]),t._v(" "),e("img",{staticClass:"qrCode",attrs:{src:t.codeUrl,alt:"微信支付二维码"}}),t._v(" "),e("p",{staticClass:"payTip"},[t._v("微信识别二维码支付")])]),t._v(" "),t.payLoading?e("div",{staticClass:"loadFix"},[e("div",{staticClass:"loadMask"}),t._v(" "),e("van-loading",{staticClass:"loadIcon",attrs:{color:"#f7f7f7",type:"spinner"}})],1):t._e(),t._v(" "),t.userDet?e("PayMethod",{attrs:{data:t.payList,money:t.themeCon._data.price,balance:t.walletBalance,walletStatus:t.userDet._data.canWalletPay,payUrl:"setup-pay-pwd",error:t.errorInfo},on:{oninput:t.onInput,delete:t.onDelete,close:t.onClose,payImmediatelyClick:t.payImmediatelyClick},model:{value:t.show,callback:function(a){t.show=a},expression:"show"}}):t._e()],1)},i=[]},zGyv:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=o(e("D1tn")),i=o(e("6NK7")),s=o(e("VVfg"));e("a2Oh");function o(t){return t&&t.__esModule?t:{default:t}}a.default={data:function(){return{show:!1,payList:[{name:"钱包",icon:"icon-wallet"}],qrcodeShow:!1,walletBalance:"",errorInfo:"",value:"",userId:"",codeUrl:"",payLoading:!1}},props:{themeCon:{type:Object},firstpostImageListProp:{type:Array},userDet:{type:Object}},created:function(){var t=this,a=navigator.userAgent;this.isAndroid=a.indexOf("Android")>-1||a.indexOf("Adr")>-1,this.isiOS=!!a.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),this.isWeixin=i.default.isWeixin().isWeixin,this.isPhone=i.default.isWeixin().isPhone,this.userId=s.default.getLItem("tokenId"),this.loadUserInfo(),this.getForum(),this.userId&&this.getUsers(s.default.getLItem("tokenId")).then((function(a){t.getAuthority(a.readdata.groups[0]._data.id),t.walletBalance=a.readdata._data.walletBalance}))},computed:{themeId:function(){return this.$route.params.themeId}},methods:{downAttachment:function(t){this.isiOS&&this.$message("因iphone系统限制，您的手机无法下载文件。请使用安卓手机或电脑访问下载")},jumpPerDet:function(t){this.$router.push({path:"/home-page/"+t})},loadUserInfo:function(){var t=this;if(!this.userId)return!1;this.appFetch({url:"users",method:"get",splice:"/"+this.userId,data:{}}).then((function(a){t.walletBalance=a.readdata._data.walletBalance}))},getForum:function(){var t=this;this.appFetch({url:"forum",method:"get",data:{}}).then((function(a){if(a.errors)t.$toast.fail(a.errors[0].code);else{t.sitePrice=a.readdata._data.set_site.site_price;var e=a.readdata._data.set_site.site_expire;switch(e){case"":case"0":t.siteExpire="永久有效";break;default:t.siteExpire="有效期自加入起"+e+"天"}"1"===a.readdata._data.paycenter.wxpay_close&&t.payList.unshift({name:"微信支付",icon:"icon-wxpay"})}})).catch((function(t){}))},buyTheme:function(){this.show=!this.show},payImmediatelyClick:function(t){var a=this,e=this.appCommonH.isWeixin().isWeixin,n=this.appCommonH.isWeixin().isPhone;"微信支付"===t.name&&(this.show=!1,e?this.getOrderSn().then((function(){a.orderPay(12).then((function(t){"undefined"==typeof WeixinJSBridge?document.addEventListener?document.addEventListener("WeixinJSBridgeReady",a.onBridgeReady(t),!1):document.attachEvent&&(document.attachEvent("WeixinJSBridgeReady",a.onBridgeReady(t)),document.attachEvent("onWeixinJSBridgeReady",a.onBridgeReady(t))):a.onBridgeReady(t)}))})):n?this.getOrderSn().then((function(){a.orderPay(11).then((function(t){a.wxPayHref=t.readdata._data.wechat_h5_link,window.location.href=a.wxPayHref;var e=setInterval((function(){a.payStatus&&a.payStatusNum>10&&clearInterval(e),a.getOrderStatus()}),3e3)}))})):this.getOrderSn().then((function(){a.orderPay(10).then((function(t){a.codeUrl=t.readdata._data.wechat_qrcode,a.qrcodeShow=!0;var e=setInterval((function(){a.payStatus&&a.payStatusNum>10&&clearInterval(e),a.getOrderStatus()}),3e3)}))})))},onInput:function(t){var a=this;this.value=this.value+t,6===this.value.length&&(this.errorInfo="",this.getOrderSn().then((function(){a.orderPay(20,a.value).then((function(t){var e=setInterval((function(){a.payStatus&&a.payStatusNum>10&&clearInterval(e),a.getOrderStatus()}),3e3)}))})))},onDelete:function(){this.value=this.value.slice(0,this.value.length-1)},onClose:function(){this.value="",this.errorInfo="",this.payLoading=!1},onBridgeReady:function(t){var a=this;WeixinJSBridge.invoke("getBrandWCPayRequest",{appId:t.data.attributes.wechat_js.appId,timeStamp:t.data.attributes.wechat_js.timeStamp,nonceStr:t.data.attributes.wechat_js.nonceStr,package:t.data.attributes.wechat_js.package,signType:"MD5",paySign:t.data.attributes.wechat_js.paySign},(function(t){}));var e=setInterval((function(){"1"==a.payStatus||a.payStatusNum>10?clearInterval(e):a.getOrderStatus()}),3e3)},getOrderSn:function(){var t=this;return this.appFetch({url:"orderList",method:"post",data:{type:3,thread_id:this.themeId}}).then((function(a){a.errors?t.$toast.fail(a.errors[0].code):t.orderSn=a.readdata._data.order_sn})).catch((function(t){}))},orderPay:function(t,a){var e=this;return this.appFetch({url:"orderPay",method:"post",splice:"/"+this.orderSn,data:{payment_type:t,pay_password:a}}).then((function(t){if(!t.errors)return e.payLoading=!0,t;e.value="",t.errors[0].detail?e.$toast.fail(t.errors[0].code+"\n"+t.errors[0].detail[0]):e.$toast.fail(t.errors[0].code)})).catch((function(t){}))},getUsersInfo:function(){},getOrderStatus:function(){var t=this;return this.appFetch({url:"order",method:"get",splice:"/"+this.orderSn,data:{}}).then((function(a){if(a.errors){if(!a.errors[0].detail)throw t.$toast.fail(a.errors[0].code),new Error(a.error);t.$toast.fail(a.errors[0].code+"\n"+a.errors[0].detail[0])}else t.payStatus=a.readdata._data.status,t.payStatusNum++,("1"==t.payStatus||t.payStatusNum>10)&&("1"==t.payStatus&&(location.reload(),t.sendMsgToParent(),t.payLoading=!1),t.rewardShow=!1,t.qrcodeShow=!1,t.payStatusNum=11)}))},sendMsgToParent:function(){this.$emit("listenToChildEvent",!0)},getUsers:function(t){var a=this;return this.appFetch({url:"users",method:"get",splice:"/"+t,headers:{Authorization:"Bearer "+s.default.getLItem("Authorization")},data:{include:["groups"]}}).then((function(t){if(!t.errors)return t;a.$toast.fail(t.errors[0].code)})).catch((function(t){}))},getAuthority:function(t){var a=this;return this.appFetch({url:"authority",method:"get",splice:"/"+t,data:{include:["permission"]}}).then((function(t){if(!t.errors)return t;a.$toast.fail(t.errors[0].code)})).catch((function(t){}))},imageSwiper:function(t,a,e){(0,n.default)({images:this.firstpostImageListProp,startPosition:t,showIndex:!0,showIndicators:!0,loop:!0})}},mounted:function(){},beforeRouteLeave:function(t,a,e){e()}}}}]);