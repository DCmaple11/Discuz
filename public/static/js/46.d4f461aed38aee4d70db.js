(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{"14Xm":function(t,e,r){t.exports=r("u938")},"1GR3":function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=c(r("14Xm")),o=c(r("D3Ub")),a=c(r("4gYi")),i=c(r("pNQN"));function c(t){return t&&t.__esModule?t:{default:t}}e.default={data:function(){return{secretId:"",secretKey:"",appId:"",type:""}},created:function(){this.tencentCloudList();var t=this.$route.query.type;this.type=t},methods:{configClick:function(t){},tencentCloudList:function(){var t=this;this.appFetch({url:"forum",method:"get",data:{}}).then((function(e){console.log(e),t.appId=e.readdata._data.qcloud.qcloud_app_id,t.secretId=e.readdata._data.qcloud.qcloud_secret_id,t.secretKey=e.readdata._data.qcloud.qcloud_secret_key}))},Submission:function(){var t=this;return(0,o.default)(n.default.mark((function e(){return n.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.appFetch({url:"settings",method:"post",data:{data:[{attributes:{key:"qcloud_app_id",value:t.appId,tag:"qcloud"}},{attributes:{key:"qcloud_secret_id",value:t.secretId,tag:"qcloud"}},{attributes:{key:"qcloud_secret_key",value:t.secretKey,tag:"qcloud"}}]}}).then((function(e){if(e.errors)throw new Error(e.errors[0].code);t.$message({message:"提交成功",type:"success"})}));case 3:e.next=9;break;case 5:e.prev=5,e.t0=e.catch(0),console.log(e.t0),t.$message({showClose:!0,message:"提交失败！"});case 9:case"end":return e.stop()}}),e,t,[[0,5]])})))()}},components:{Card:a.default,CardRow:i.default}}},C8go:function(t,e,r){"use strict";r.r(e);var n=r("Y8LI"),o=r("NrPb");for(var a in o)"default"!==a&&function(t){r.d(e,t,(function(){return o[t]}))}(a);var i=r("KHd+"),c=Object(i.a)(o.default,n.a,n.b,!1,null,null,null);e.default=c.exports},D3Ub:function(t,e,r){"use strict";e.__esModule=!0;var n,o=r("4d7F"),a=(n=o)&&n.__esModule?n:{default:n};e.default=function(t){return function(){var e=t.apply(this,arguments);return new a.default((function(t,r){return function n(o,i){try{var c=e[o](i),u=c.value}catch(t){return void r(t)}if(!c.done)return a.default.resolve(u).then((function(t){n("next",t)}),(function(t){n("throw",t)}));t(u)}("next")}))}}},NrPb:function(t,e,r){"use strict";r.r(e);var n=r("xoPs"),o=r.n(n);for(var a in n)"default"!==a&&function(t){r.d(e,t,(function(){return n[t]}))}(a);e.default=o.a},Y8LI:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("Card",{attrs:{header:"云api配置"}}),t._v(" "),r("Card",{attrs:{header:"APPID："}},[r("CardRow",{attrs:{description:"腾讯云账户 - 访问管理 - 访问密钥 - API密钥的appid。若使用子账号，权限需覆盖所使用\n的服务"}},[r("el-input",{attrs:{clearable:""},model:{value:t.appId,callback:function(e){t.appId=e},expression:"appId"}})],1)],1),t._v(" "),r("Card",{attrs:{header:"Secretid："}},[r("CardRow",{attrs:{description:"腾讯云账户 - 访问管理 - 访问密钥 - API密钥的SecretId"}},[r("el-input",{attrs:{clearable:""},model:{value:t.secretId,callback:function(e){t.secretId=e},expression:"secretId"}})],1)],1),t._v(" "),r("Card",{attrs:{header:"SecretKey："}},[r("CardRow",{attrs:{description:"腾讯云账户 - 访问管理 - 访问密钥 - API密钥的SecretKey"}},[r("el-input",{attrs:{clearable:""},model:{value:t.secretKey,callback:function(e){t.secretKey=e},expression:"secretKey"}})],1)],1),t._v(" "),r("Card",{staticClass:"footer-btn"},[r("el-button",{attrs:{type:"primary",size:"medium"},on:{click:t.Submission}},[t._v("提交")])],1)],1)},o=[];r.d(e,"a",(function(){return n})),r.d(e,"b",(function(){return o}))},ls82:function(t,e){!function(e){"use strict";var r,n=Object.prototype,o=n.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag",s="object"==typeof t,l=e.regeneratorRuntime;if(l)s&&(t.exports=l);else{(l=e.regeneratorRuntime=s?t.exports:{}).wrap=_;var f="suspendedStart",d="suspendedYield",h="executing",p="completed",v={},y={};y[i]=function(){return this};var g=Object.getPrototypeOf,m=g&&g(g(R([])));m&&m!==n&&o.call(m,i)&&(y=m);var w=E.prototype=x.prototype=Object.create(y);L.prototype=w.constructor=E,E.constructor=L,E[u]=L.displayName="GeneratorFunction",l.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===L||"GeneratorFunction"===(e.displayName||e.name))},l.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,E):(t.__proto__=E,u in t||(t[u]="GeneratorFunction")),t.prototype=Object.create(w),t},l.awrap=function(t){return{__await:t}},k(I.prototype),I.prototype[c]=function(){return this},l.AsyncIterator=I,l.async=function(t,e,r,n){var o=new I(_(t,e,r,n));return l.isGeneratorFunction(e)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},k(w),w[u]="Generator",w[i]=function(){return this},w.toString=function(){return"[object Generator]"},l.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},l.values=R,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(C),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var u=o.call(i,"catchLoc"),s=o.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var a=n;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,v):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),C(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;C(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:R(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),v}}}function _(t,e,r,n){var o=e&&e.prototype instanceof x?e:x,a=Object.create(o.prototype),i=new j(n||[]);return a._invoke=function(t,e,r){var n=f;return function(o,a){if(n===h)throw new Error("Generator is already running");if(n===p){if("throw"===o)throw a;return q()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=P(i,r);if(c){if(c===v)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var u=b(t,e,r);if("normal"===u.type){if(n=r.done?p:d,u.arg===v)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=p,r.method="throw",r.arg=u.arg)}}}(t,r,i),a}function b(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}function x(){}function L(){}function E(){}function k(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function I(t){var e;this._invoke=function(r,n){function a(){return new Promise((function(e,a){!function e(r,n,a,i){var c=b(t[r],t,n);if("throw"!==c.type){var u=c.arg,s=u.value;return s&&"object"==typeof s&&o.call(s,"__await")?Promise.resolve(s.__await).then((function(t){e("next",t,a,i)}),(function(t){e("throw",t,a,i)})):Promise.resolve(s).then((function(t){u.value=t,a(u)}),i)}i(c.arg)}(r,n,e,a)}))}return e=e?e.then(a,a):a()}}function P(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,P(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=b(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,v;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,v):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function C(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function R(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){for(;++n<t.length;)if(o.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=r,e.done=!0,e};return a.next=a}}return{next:q}}function q(){return{value:r,done:!0}}}(function(){return this}()||Function("return this")())},u938:function(t,e,r){var n=function(){return this}()||Function("return this")(),o=n.regeneratorRuntime&&Object.getOwnPropertyNames(n).indexOf("regeneratorRuntime")>=0,a=o&&n.regeneratorRuntime;if(n.regeneratorRuntime=void 0,t.exports=r("ls82"),o)n.regeneratorRuntime=a;else try{delete n.regeneratorRuntime}catch(t){n.regeneratorRuntime=void 0}},xoPs:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(r("QbLZ"));r("zt69");var o=a(r("1GR3"));function a(t){return t&&t.__esModule?t:{default:t}}e.default=(0,n.default)({name:"tencent-cloud-config-cloud-view"},o.default)}}]);