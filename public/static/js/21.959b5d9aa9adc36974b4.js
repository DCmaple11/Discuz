(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"1I2T":function(t,a,e){"use strict";e.r(a);var n=e("GiR7"),i=e("lS4L");for(var s in i)"default"!==s&&function(t){e.d(a,t,(function(){return i[t]}))}(s);var r=e("KHd+"),l=Object(r.a)(i.default,n.a,n.b,!1,null,null,null);a.default=l.exports},BW42:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=s(e("QbLZ"));e("Cpqr");var i=s(e("vnXE"));function s(t){return t&&t.__esModule?t:{default:t}}e("M+Jb"),a.default=(0,n.default)({name:"withdraw-view"},i.default)},Cpqr:function(t,a,e){},GiR7:function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"withdraw-box"},[e("WithdrawHeader",{attrs:{title:"提现"}}),t._v(" "),e("main",{staticClass:"withdraw-main"},[e("div",{staticClass:"withdraw-form my-info-form"},[e("van-cell-group",[e("van-field",{attrs:{label:"收款人 ",placeholder:"请输入收款人",readonly:""},model:{value:t.payee,callback:function(a){t.payee=a},expression:"payee"}}),t._v(" "),e("van-field",{attrs:{label:"可提现金额 ",placeholder:"可提现金额",readonly:""},model:{value:t.canWithdraw,callback:function(a){t.canWithdraw=a},expression:"canWithdraw"}}),t._v(" "),e("van-field",{attrs:{clearable:"",label:"提现金额 ",placeholder:"请输入提现金额"},nativeOn:{touchstart:function(a){a.stopPropagation(),t.show=!0}},model:{value:t.withdrawalAmount,callback:function(a){t.withdrawalAmount=a},expression:"withdrawalAmount"}}),t._v(" "),e("van-number-keyboard",{attrs:{show:t.show,theme:"custom",title:"站点金额键盘","extra-key":".","close-button-text":"完成"},on:{blur:function(a){t.show=!1},input:t.onInput,delete:t.onDelete},model:{value:t.withdrawalAmount,callback:function(a){t.withdrawalAmount=a},expression:"withdrawalAmount"}}),t._v(" "),e("van-field",{attrs:{label:"手续费",placeholder:"手续费",readonly:""},model:{value:t.lingFee,callback:function(a){t.lingFee=a},expression:"lingFee"}}),t._v(" "),e("van-field",{attrs:{label:"实际提现金额",placeholder:"实际提现金额"},model:{value:t.actualCashWithdrawal,callback:function(a){t.actualCashWithdrawal=a},expression:"actualCashWithdrawal"}}),t._v(" "),e("van-field",{attrs:{label:"手机号",placeholder:"手机号",readonly:""},model:{value:t.phone,callback:function(a){t.phone=a},expression:"phone"}}),t._v(" "),e("van-field",{attrs:{clearable:"",label:"验证码 ",placeholder:"请输入验证码"},model:{value:t.sms,callback:function(a){t.sms=a},expression:"sms"}},[e("van-button",{attrs:{slot:"button",size:"small",type:"default",sendStatus:t.sendStatus},on:{click:t.sendVerificationCode},slot:"button"},[t._v(t._s(t.btnContent))])],1)],1)],1),t._v(" "),e("div",{staticClass:"withdraw-operating"},[e("van-button",{attrs:{type:"primary"},on:{click:t.withdraw}},[t._v("提交")])],1)])],1)},i=[];e.d(a,"a",(function(){return n})),e.d(a,"b",(function(){return i}))},H68H:function(t,a,e){"use strict";e.r(a);var n=e("fxab"),i=e("VIDA");for(var s in i)"default"!==s&&function(t){e.d(a,t,(function(){return i[t]}))}(s);var r=e("KHd+"),l=Object(r.a)(i.default,n.a,n.b,!1,null,null,null);a.default=l.exports},"M+Jb":function(t,a,e){},Nxk6:function(t,a,e){e("dbV7"),t.exports=9007199254740991},VIDA:function(t,a,e){"use strict";e.r(a);var n=e("cOC8"),i=e.n(n);for(var s in n)"default"!==s&&function(t){e.d(a,t,(function(){return n[t]}))}(s);a.default=i.a},cOC8:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=s(e("QbLZ")),i=s(e("tNAK"));function s(t){return t&&t.__esModule?t:{default:t}}e("ykRa"),a.default=(0,n.default)({name:"panel"},i.default)},dbV7:function(t,a,e){var n=e("Y7ZC");n(n.S,"Number",{MAX_SAFE_INTEGER:9007199254740991})},fxab:function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"panel-box"},[e("div",{staticClass:"panel-header"},[e("div",{staticClass:"panel-header-lf"},[e("span",[t._v(t._s(t.titles))])]),t._v(" "),e("div",{staticClass:"panel-header-rh"},[e("span",{class:parseInt(this.nums)>0?"add-orange":""},[t._v(t._s(t.nums))])])]),t._v(" "),e("div",{staticClass:"panel-bottom"},[t._t("label")],2)])},i=[];e.d(a,"a",(function(){return n})),e.d(a,"b",(function(){return i}))},lS4L:function(t,a,e){"use strict";e.r(a);var n=e("BW42"),i=e.n(n);for(var s in n)"default"!==s&&function(t){e.d(a,t,(function(){return n[t]}))}(s);a.default=i.a},tNAK:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={data:function(){return{titles:this.title,nums:this.num}},props:{title:{default:"标题",type:String},num:{default:"0.00",type:String}},methods:{},mounted:function(){}}},vnXE:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=l(e("z/5e")),i=l(e("JZuw")),s=l(e("H68H")),r=l(e("VVfg"));function l(t){return t&&t.__esModule?t:{default:t}}a.default={data:function(){return{payee:"",canWithdraw:"",withdrawalAmount:"",handlingFee:"",phone:"",bind:"verify",sms:"",show:!1,sendStatus:!0,time:1,insterVal:"",isGray:!1,btnContent:"发送验证码",wechatNickname:"",mobileConfirmed:"",handlingFee1:""}},components:{WithdrawHeader:i.default,Panenl:s.default},created:function(){this.withdrawUser()},computed:{lingFee:function(){return this.handlingFee1*this.withdrawalAmount+"元 （"+this.handlingFee+"）"},actualCashWithdrawal:function(){return""===this.withdrawalAmount?"":this.withdrawalAmount-this.handlingFee1*this.withdrawalAmount}},methods:{withdrawInput:function(t){this.handleReg()},onInput:function(t){this.withdrawalAmount=this.withdrawalAmount+""+t,this.handleReg()},handleReg:function(){var t=parseFloat(this.withdrawalAmount),a=Number(this.withdrawalAmount),e=this.withdrawalAmount.split(".");switch(!0){case"."===this.withdrawalAmount:this.withdrawalAmount="0.";break;case isNaN(t):case a>n.default:this.withdrawalAmount="";break;case e.length>2:this.withdrawalAmount=e[0].replace(/[^0-9\.]/g,"")+"."+e[1].replace(/[^0-9\.]/g,"");break;default:this.withdrawalAmount=this.withdrawalAmount.replace(/[^0-9\.]/g,"")}"."===this.withdrawalAmount[0]&&(this.withdrawalAmount="0"+this.withdrawalAmount)},onDelete:function(){this.withdrawalAmount=this.withdrawalAmount.slice(0,-1)},withdrawUser:function(){var t=this,a=r.default.getLItem("tokenId");this.appFetch({url:"users",method:"get",splice:"/"+a,data:{include:"wechat"}}).then((function(a){a.errors?t.$toast.fail(a.errors[0].code):(console.log(a),t.payee=a.data.attributes.username,t.phone=a.data.attributes.mobile,a.readdata.wechat&&(console.log(a.readdata.wechat,"999999"),t.wechatNickname=a.readdata.wechat._data.nickname))})),this.appFetch({url:"wallet",method:"get",splice:a,data:{include:""}}).then((function(a){a.errors?t.$toast.fail(a.errors[0].code):(t.canWithdraw=a.data.attributes.available_amount,t.handlingFee=a.data.attributes.cash_tax_ratio+"%",t.handlingFee1=a.data.attributes.cash_tax_ratio/100)}))},sendVerificationCode:function(){var t=this;(0!=this.canWithdraw&&""!=this.phone||(this.sendStatus=!1),this.wechatNickname)?this.phone?this.appFetch({url:"sendSms",method:"post",data:{data:{attributes:{type:this.bind}}}}).then((function(a){a.errors?t.$toast.fail(a.errors[0].code):(console.log(a),t.insterVal=a.data.attributes.interval,t.time=t.insterVal,t.timer())})):this.$toast("请先绑定手机号"):this.$toast("请绑定微信")},timer:function(){if(this.time>1){this.time--,this.btnContent=this.time+"s后重新获取",this.disabled=!0;var t=setTimeout(this.timer,1e3);this.isGray=!0}else 1==this.time&&(this.btnContent="获取验证码",clearTimeout(t),this.disabled=!1,this.isGray=!1)},withdraw:function(){var t=this,a=this.withdrawalAmount,e=this.sms,n=this.canWithdraw;a?e?0!=n?(this.appFetch({url:"smsVerify",method:"post",data:{data:{attributes:{mobile:this.phone,code:this.sms,type:this.bind}}}}).then((function(a){a.errors?t.$toast.fail(a.errors[0].code):(t.mobileConfirmed=a.readdata._data.mobileConfirmed,1==t.mobileConfirmed&&t.$toast("提现申请已提交，请等待审核"))})),this.phone?this.wechatNickname?this.appFetch({url:"cash",method:"post",data:{cash_apply_amount:this.withdrawalAmount}}).then((function(a){a.errors?t.$toast.fail(a.errors[0].code):(t.canWithdraw=a.data.attributes.cash_apply_amount,t.handlingFee=a.data.attributes.cash_charge,console.log(a.data.attributes.cash_charge,"手续费"))})):this.$toast("请绑定微信"):this.$toast("请先绑定手机号")):this.$toast("可提现金额不足"):this.$toast("请输入验证码"):this.$toast("请输入提现金额")}}}},ykRa:function(t,a,e){},"z/5e":function(t,a,e){t.exports={default:e("Nxk6"),__esModule:!0}}}]);