(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{"/nBn":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=o(a("QbLZ"));a("llYx");var n=o(a("v+T3"));function o(t){return t&&t.__esModule?t:{default:t}}e.default=(0,r.default)({name:"confirmPayPasswordView"},n.default)},EYEx:function(t,e,a){"use strict";a.r(e);var r=a("/nBn"),n=a.n(r);for(var o in r)"default"!==o&&function(t){a.d(e,t,(function(){return r[t]}))}(o);e.default=n.a},MGWj:function(t,e,a){"use strict";a.r(e);var r=a("Wo5N"),n=a("EYEx");for(var o in n)"default"!==o&&function(t){a.d(e,t,(function(){return n[t]}))}(o);var s=a("KHd+"),u=Object(s.a)(n.default,r.a,r.b,!1,null,null,null);e.default=u.exports},Wo5N:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pay-password-box"},[a("confirmPayPwdHeader",{attrs:{title:"设置支付密码"}}),t._v(" "),t._m(0),t._v(" "),a("van-password-input",{staticClass:"passwordInp",attrs:{value:t.value,focused:t.showKeyboard,"error-info":t.errorInfo},on:{focus:function(e){t.showKeyboard=!0}}}),t._v(" "),a("van-number-keyboard",{attrs:{"safe-area-inset-bottom":"",show:t.showKeyboard},on:{input:t.onInput,delete:t.onDelete,blur:function(e){t.showKeyboard=!1}}}),t._v(" "),a("van-button",{attrs:{type:"primary"},on:{click:t.submitClick}},[t._v("完成")])],1)},n=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"pay-password-box_title"},[e("h1",[this._v("设置支付密码")]),this._v(" "),e("p",[this._v("请再次填写以确认")])])}];a.d(e,"a",(function(){return r})),a.d(e,"b",(function(){return n}))},llYx:function(t,e,a){},"v+T3":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=o(a("JZuw")),n=o(a("VVfg"));function o(t){return t&&t.__esModule?t:{default:t}}e.default={data:function(){return{value:"",confirmValue:"",showKeyboard:!0,errorInfo:"",userId:""}},methods:{onInput:function(t){this.value=(this.value+t).slice(0,6)},onDelete:function(){this.value=this.value.slice(0,this.value.length-1)},submitClick:function(){this.value.length<6?this.errorInfo="密码错误":this.value!==this.confirmValue?this.errorInfo="请保持支付密码一致":(this.errorInfo="",this.editUser(this.userId))},editUser:function(t){var e=this;this.appFetch({url:"users",method:"patch",splice:"/"+t,data:{data:{attributes:{payPassword:this.value,pay_password_confirmation:this.confirmValue,pay_password_token:n.default.getLItem("payPwdToken")?n.default.getLItem("payPwdToken"):""}}}}).then((function(t){t.errors?t.errors[0].detail?e.$toast.fail(t.errors[0].code+"\n"+t.errors[0].detail[0]):e.$toast.fail(t.errors[0].code):(e.$toast.success("设置成功"),n.default.getLItem("payUrl")?e.$router.replace({path:n.default.getLItem("payUrl")}):e.$router.replace({path:"modify-data"}),n.default.setLItem("payUrl",""),n.default.setLItem("payPwdToken",""))})).catch((function(t){}))}},created:function(){this.confirmValue=this.$route.params.value,this.userId=n.default.getLItem("tokenId")},components:{confirmPayPwdHeader:r.default}}}}]);