(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{"2lyB":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"modify-phone-box"},[n("ModifyHeader",{attrs:{title:"修改手机号"}}),t._v(" "),n("main",{staticClass:"modify-phone-main content"},[n("div",{staticClass:"modify-phone-form my-info-form"},[n("van-cell-group",[n("van-field",{attrs:{clearable:"",label:"设置新手机",placeholder:"请输入新手机号"},model:{value:t.newphone,callback:function(e){t.newphone=e},expression:"newphone"}}),t._v(" "),n("van-field",{attrs:{clearable:"",label:"验证码",placeholder:"请输入验证码"},model:{value:t.sms,callback:function(e){t.sms=e},expression:"sms"}},[n("van-button",{attrs:{slot:"button",size:"small",type:"default"},on:{click:t.sendSmsCodePhone},slot:"button"},[t._v(t._s(t.btnContent))])],1)],1)],1),t._v(" "),n("div",{staticClass:"modify-phone-operating"},[n("van-button",{attrs:{type:"primary"},on:{click:t.bindNewPhone}},[t._v("提交")])],1)])],1)},o=[];n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return o}))},ImTI:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s(n("QbLZ"));n("llYx"),n("iUmJ");var o=s(n("jBBc"));function s(t){return t&&t.__esModule?t:{default:t}}e.default=(0,i.default)({name:"modify-phone-view"},o.default)},WRhM:function(t,e,n){"use strict";n.r(e);var i=n("ImTI"),o=n.n(i);for(var s in i)"default"!==s&&function(t){n.d(e,t,(function(){return i[t]}))}(s);e.default=o.a},aZsQ:function(t,e,n){"use strict";n.r(e);var i=n("2lyB"),o=n("WRhM");for(var s in o)"default"!==s&&function(t){n.d(e,t,(function(){return o[t]}))}(s);var a=n("KHd+"),r=Object(a.a)(o.default,i.a,i.b,!1,null,null,null);e.default=r.exports},jBBc:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=o(n("JZuw"));o(n("VVfg"));function o(t){return t&&t.__esModule?t:{default:t}}e.default={data:function(){return{sms:"",newphone:"",bind:"bind",time:1,insterVal:"",isGray:!1,btnContent:"发送验证码",mobileConfirmed:"",backGo:1}},components:{ModifyHeader:i.default},mounted:function(){},methods:{sendSmsCodePhone:function(){var t=this,e=this.newphone;console.log(e,"999999999999"),e?(/^((13|14|15|17|18)[0-9]{1}\d{8})$/.test(e)||this.$toast("您输入的手机号码不合法，请重新输入"),this.appFetch({url:"sendSms",method:"post",data:{data:{attributes:{mobile:this.newphone,type:"bind"}}}}).then((function(e){if(e.errors)throw t.$toast.fail(e.errors[0].code+"\n"+e.errors[0].detail),new Error(e.error);console.log(e),t.insterVal=e.data.attributes.interval,t.time=t.insterVal,t.timer()}))):this.$toast("请输入手机号码")},timer:function(){if(this.time>1){this.time--,this.btnContent=this.time+"s后重新获取",this.disabled=!0;var t=setTimeout(this.timer,1e3);this.isGray=!0}else 1==this.time&&(this.btnContent="获取验证码",clearTimeout(t),this.disabled=!1,this.isGray=!1)},bindNewPhone:function(){var t=this;""!==this.newphone?""!==this.sms?this.appFetch({url:"smsVerify",method:"post",data:{data:{attributes:{mobile:this.newphone,code:this.sms,type:this.bind}}}}).then((function(e){if(e.errors)throw t.$toast.fail(e.errors[0].code),new Error(e.error);t.mobileConfirmed=e.readdata._data.mobileConfirmed,1==t.mobileConfirmed&&(t.$toast("手机号绑定成功"),t.$router.push({path:"/modify-data",query:{backGo:t.backGo}}))})).catch((function(e){t.$toast("手机号绑定失败，请重试")})):this.$toast("验证码不能为空"):this.$toast("手机号码不能为空，请重新输入")}},timer:function(){if(this.time>1){this.time--,this.btnContent=this.time+"s后重新获取",this.disabled=!0;var t=setTimeout(this.timer,1e3);this.isGray=!0}else 1==this.time&&(this.btnContent="获取验证码",clearTimeout(t),this.disabled=!1,this.isGray=!1)},beforeRouteEnter:function(t,e,n){console.log(e.name),n((function(t){"modify-phone"===e.name?t.backGo=-4:t.backGo=-3}))}}},llYx:function(t,e,n){}}]);