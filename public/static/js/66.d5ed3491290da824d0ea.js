(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{Hj4u:function(a,t,e){"use strict";e.r(t);var i=e("SP8B"),n=e.n(i);for(var r in i)"default"!==r&&function(a){e.d(t,a,(function(){return i[a]}))}(r);t.default=n.a},IJOe:function(a,t,e){"use strict";var i=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"modify-data-box"},[e("ModifyHeader",{attrs:{title:"我的资料"}}),a._v(" "),e("main",{staticClass:"modify-data-main content"},[e("div",{staticClass:"modify-data-avatar"},[e("input",{staticClass:"hiddenInput",attrs:{type:"file",accept:"image/*"},on:{change:a.handleFile}}),a._v(" "),a._m(0),a._v(" "),e("div",{staticClass:"modify-data-avatar-img"},[a.headPortrait?e("img",{attrs:{src:a.headPortrait,alt:"我的头像"}}):e("img",{staticClass:"resUserHead",attrs:{src:a.appConfig.staticBaseUrl+"/images/noavatar.gif"}})]),a._v(" "),a._m(1)]),a._v(" "),a.modifyPhone?e("van-cell",{attrs:{title:"手机号","is-link":"",value:a.modifyPhone},on:{click:function(t){return a.myModify("modify-phone")}}}):e("van-cell",{attrs:{title:"手机号","is-link":"",value:"去绑定"},on:{click:function(t){return a.$router.push({path:"/bind-new-phone"})}}}),a._v(" "),e("van-cell",{attrs:{title:"登录密码","is-link":"",value:"********"},on:{click:function(t){return a.myModify("change-pwd")}}}),a._v(" "),e("van-cell",{attrs:{title:"钱包密码","is-link":"",value:a.canWalletPay?"********":"设置密码"},on:{click:function(t){return a.myModify("change-pay-pwd")}}}),a._v(" "),a.wechatNickname?e("van-cell",{attrs:{title:"微信","is-link":"",value:a.wechatNickname},on:{click:a.myModifyWechat}}):e("van-cell",{attrs:{title:"微信","is-link":"",value:"去绑定"},on:{click:a.wechatBind}}),a._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:a.realNameShow,expression:"realNameShow"}]},[a.realName?e("van-cell",{directives:[{name:"show",rawName:"v-show",value:a.realNameShow,expression:"realNameShow"}],attrs:{title:"实名认证","is-link":"",value:a.realName}}):e("van-cell",{attrs:{title:"实名认证","is-link":"",value:"认证"},on:{click:function(t){return a.$router.push({path:"/real-name"})}}})],1)],1)],1)},n=[function(){var a=this.$createElement,t=this._self._c||a;return t("div",{staticClass:"modify-data-avatar-title m-site-cell-access-bd"},[t("p",{staticClass:"modify-data-avatar-title-img"},[this._v("头像")])])},function(){var a=this.$createElement,t=this._self._c||a;return t("i",{staticClass:"modify-data-avatar-right"},[t("span",{staticClass:"icon iconfont icon-right m-site-cell-access-ft-icon",staticStyle:{color:"#e5e5e5"}})])}];e.d(t,"a",(function(){return i})),e.d(t,"b",(function(){return n}))},SP8B:function(a,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r(e("QbLZ"));e("iUmJ"),e("llYx");var n=r(e("Xbky"));function r(a){return a&&a.__esModule?a:{default:a}}t.default=(0,i.default)({name:"modify-data-view"},n.default)},Xbky:function(a,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r(e("JZuw")),n=r(e("VVfg"));function r(a){return a&&a.__esModule?a:{default:a}}t.default={data:function(){return{headPortrait:"",modifyPhone:"",changePwd:"",bindType:"",wechatId:"",wechatNickname:"",tipWx:"",isWeixin:"",realName:"",canWalletPay:"",realNameShow:"true"}},components:{ModifyHeader:i.default},created:function(){this.modifyData(),this.wechat(),this.isWeixin=this.appCommonH.isWeixin().isWeixin,this.isWeixin?this.tipWx="确认解绑微信及退出登录":this.tipWx="确认解绑微信",0==n.default.getLItem("siteInfo")._data.qcloud.qcloud_faceid&&(this.realNameShow=!1)},methods:{myModify:function(a){switch(a){case"modify-phone":this.$router.push("/modify-phone");break;case"change-pwd":this.$router.push("/change-pwd");break;case"bind-new-phone":this.$router.push("/bind-new-phone");break;case"bind-new-phone":this.$router.push("/real-name");break;case"change-pay-pwd":this.canWalletPay?this.$router.push({path:"verify-pay-pwd"}):this.$router.push({path:"setup-pay-pwd"});break;default:this.$router.push("/")}},modifyData:function(){var a=this,t=n.default.getLItem("tokenId");this.appFetch({url:"users",method:"get",splice:"/"+t,data:{include:"wechat"}}).then((function(t){t.errors?a.$toast.fail(t.errors[0].code):(a.modifyPhone=t.readdata._data.mobile,a.headPortrait=t.readdata._data.avatarUrl,a.wechatId=t.readdata._data.id,a.canWalletPay=t.readdata._data.canWalletPay,t.readdata.wechat?a.wechatNickname=t.readdata.wechat._data.nickname:a.wechatNickname=!1,""!==t.readdata.realName?a.realName=t.readdata._data.realName:a.realName=!1)}))},handleFile:function(a){var t=this,e=a.target.files[0],i=new FormData;i.append("avatar",e);var r=n.default.getLItem("tokenId");this.appFetch({url:"upload",method:"post",splice:r+"/avatar",data:i}).then((function(a){a.errors?t.$toast.fail(a.errors[0].code):(t.headPortrait=a.data.attributes.avatarUrl,t.modifyData())}))},myModifyWechat:function(){var a=this;this.$dialog.confirm({title:this.tipWx}).then((function(t){t.errors?a.$toast.fail(t.errors[0].code):a.wechat(a.wechatId)}))},wechat:function(a){var t=this;""!=a&&null!=a&&this.appFetch({url:"wechatDelete",method:"delete",splice:this.wechatId+"/wechat",data:{}}).then((function(a){a.errors?t.$toast.fail(a.errors[0].code):t.appCommonH.isWeixin().isWeixin?(localStorage.clear(),t.$router.push({path:"/wx-login-bd"})):t.modifyData()}))},wechatBind:function(){var a=this;this.appFetch({url:"wechatBind",method:"get",data:{}}).then((function(t){t.errors?a.$toast.fail(t.errors[0].code):window.location.href=t.readdata._data.location}))}}}},hpG4:function(a,t,e){"use strict";e.r(t);var i=e("IJOe"),n=e("Hj4u");for(var r in n)"default"!==r&&function(a){e.d(t,a,(function(){return n[a]}))}(r);var o=e("KHd+"),s=Object(o.a)(n.default,i.a,i.b,!1,null,"013551bf",null);t.default=s.exports},llYx:function(a,t,e){}}]);