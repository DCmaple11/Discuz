(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{Lomd:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=o(a("QbLZ"));a("zt69");var s=o(a("vx/2"));function o(e){return e&&e.__esModule?e:{default:e}}t.default=(0,i.default)({name:"site-set-view"},s.default)},PUmH:function(e,t,a){"use strict";a.r(t);var i=a("Xtna"),s=a("xoSE");for(var o in s)"default"!==o&&function(e){a.d(t,e,(function(){return s[e]}))}(o);a("z1HU");var r=a("KHd+"),l=Object(r.a)(s.default,i.a,i.b,!1,null,null,null);t.default=l.exports},Xtna:function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"site-set-box"},[a("Card",{attrs:{header:"站点名称："}},[a("CardRow",{attrs:{description:"你的Discuz!Q 站点的名称"}},[a("el-input",{attrs:{placeholder:"站点名称"},model:{value:e.siteName,callback:function(t){e.siteName=t},expression:"siteName"}})],1)],1),e._v(" "),a("Card",{attrs:{header:"站点介绍："}},[a("CardRow",{attrs:{description:"你的Discuz!Q 站点的介绍"}},[a("el-input",{attrs:{type:"textarea",autosize:{minRows:4,maxRows:4},placeholder:"站点介绍"},model:{value:e.siteIntroduction,callback:function(t){e.siteIntroduction=t},expression:"siteIntroduction"}})],1)],1),e._v(" "),a("Card",{attrs:{header:"站点LOGO："}},[a("CardRow",{attrs:{description:"你的Discuz!Q 站点的LOGO"}},[a("el-upload",{attrs:{action:"","http-request":e.uploaderLogo,"list-type":"picture-card",limit:1,"on-error":e.errorFile,"file-list":e.fileList,"on-preview":e.handlePictureCardPreview,"before-upload":e.beforeAvatarUpload,"on-remove":e.handleRemove}},[a("i",{staticClass:"el-icon-plus"})]),e._v(" "),a("el-dialog",{attrs:{visible:e.dialogVisible,size:"tiny"},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("img",{attrs:{width:"100%",src:e.dialogImageUrl,alt:""}})])],1)],1),e._v(" "),a("Card",{attrs:{header:"站点模式："}},[a("CardRow",{attrs:{description:"你的Discuz!Q 站点的运行模式"}},[a("el-radio",{attrs:{label:"1"},on:{change:function(t){return e.radioChange("public")}},model:{value:e.radio,callback:function(t){e.radio=t},expression:"radio"}},[e._v("公开模式")]),e._v(" "),a("el-radio",{attrs:{label:"2"},on:{change:function(t){return e.radioChange("pay")}},model:{value:e.radio,callback:function(t){e.radio=t},expression:"radio"}},[e._v("付费模式")])],1)],1),e._v(" "),a("el-collapse-transition",[a("div",{directives:[{name:"show",rawName:"v-show",value:"2"===e.radio,expression:"radio === '2'"}]},[a("Card",{attrs:{header:"加入价格（元）："}},[a("CardRow",{attrs:{description:"付费模式下，付费成为站点默认角色，需支付的金额"}},[a("el-input",{attrs:{placeholder:"加入价格"},model:{value:e.sitePrice,callback:function(t){e.sitePrice=t},expression:"sitePrice"}})],1)],1),e._v(" "),a("Card",{attrs:{header:"到期时间："}},[a("CardRow",{attrs:{description:"付费模式下，付费成为站点默认角色，可维持的时间,不填或为0时不限制"}},[e._v("\n           加入起\n              "),a("el-input",{staticStyle:{height:"36PX",width:"80PX"},attrs:{clearable:"",placeholder:"天数"},model:{value:e.siteExpire,callback:function(t){e.siteExpire=t},expression:"siteExpire"}}),e._v("\n              天后\n\n        ")],1)],1)],1)]),e._v(" "),a("Card",{attrs:{header:"主题打赏金额分成比例："}},[a("CardRow",{attrs:{description:"主题打赏的分成比例设置，两者加起来必须为10，不填时默认为作者10、平台0"}},[a("div",{staticClass:"proportion-box"},[a("span",[e._v("作者")]),e._v(" "),a("el-input",{attrs:{size:"small"},nativeOn:{"!blur":function(t){return e.onblurFun(t)}},model:{value:e.siteAuthorScale,callback:function(t){e.siteAuthorScale=t},expression:"siteAuthorScale"}})],1),e._v(" "),a("div",{staticClass:"proportion-box"},[a("span",[e._v("平台(站长)")]),e._v(" "),a("el-input",{attrs:{size:"small"},nativeOn:{"!blur":function(t){return e.onblurFun(t)}},model:{value:e.siteMasterScale,callback:function(t){e.siteMasterScale=t},expression:"siteMasterScale"}})],1)])],1),e._v(" "),a("Card",{attrs:{header:"网站备案信息："}},[a("CardRow",{attrs:{description:"你的Discuz!Q 站点的 ICP 备案编号"}},[a("el-input",{model:{value:e.siteRecord,callback:function(t){e.siteRecord=t},expression:"siteRecord"}})],1)],1),e._v(" "),a("Card",{attrs:{header:"第三方统计："}},[a("CardRow",{attrs:{description:"你的Discuz!Q 网站的第三方统计代码"}},[a("el-input",{attrs:{type:"textarea",autosize:{minRows:4,maxRows:4}},model:{value:e.siteStat,callback:function(t){e.siteStat=t},expression:"siteStat"}})],1)],1),e._v(" "),a("Card",{attrs:{header:"关闭站点："}},[a("CardRow",{attrs:{description:"暂时将网站关闭，其他人无法访问，但不影响管理员访问"}},[a("el-radio",{attrs:{label:"1"},on:{change:function(t){return e.radioChangeClose("1")}},model:{value:e.radio2,callback:function(t){e.radio2=t},expression:"radio2"}},[e._v("是")]),e._v(" "),a("el-radio",{attrs:{label:"2"},on:{change:function(t){return e.radioChangeClose("2")}},model:{value:e.radio2,callback:function(t){e.radio2=t},expression:"radio2"}},[e._v("否")])],1)],1),e._v(" "),a("el-collapse-transition",[a("div",{directives:[{name:"show",rawName:"v-show",value:"1"===e.radio2,expression:"radio2 === '1'"}]},[a("Card",{attrs:{header:"关闭提示信息："}},[a("CardRow",{attrs:{description:"站点关闭时出现的提示信息"}},[a("el-input",{model:{value:e.siteCloseMsg,callback:function(t){e.siteCloseMsg=t},expression:"siteCloseMsg"}})],1)],1)],1)]),e._v(" "),a("Card",{staticClass:"footer-btn"},[a("el-button",{attrs:{type:"primary",size:"medium"},on:{click:e.siteSetPost}},[e._v("提交")])],1)],1)},s=[];a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return s}))},"vx/2":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r(a("YEIV")),s=r(a("4gYi")),o=r(a("pNQN"));function r(e){return e&&e.__esModule?e:{default:e}}t.default={data:function(){var e;return e={radio:"1",radio2:"2",imageUrl:"",loading:!0,fullscreenLoading:!1,siteName:"",siteIntroduction:"",siteMode:"1",sitePrice:"",siteExpire:"",siteAuthorScale:"",siteMasterScale:"",siteClose:"1",siteLogoFile:{}},(0,i.default)(e,"siteLogoFile",[]),(0,i.default)(e,"siteRecord",""),(0,i.default)(e,"siteStat",""),(0,i.default)(e,"siteCloseMsg",""),(0,i.default)(e,"dialogImageUrl",""),(0,i.default)(e,"dialogVisible",!1),(0,i.default)(e,"fileList",[]),e},created:function(){this.loadStatus()},computed:{},methods:{loadStatus:function(){var e=this;this.appFetch({url:"forum",method:"get",data:{}}).then((function(t){console.log(t),console.log("123"),e.siteName=t.readdata._data.siteName,e.siteIntroduction=t.readdata._data.siteIntroduction,e.siteMode=t.readdata._data.siteMode,"pay"==e.siteMode?e.radio="2":e.radio="1",e.sitePrice=t.readdata._data.sitePrice,e.siteExpire=t.readdata._data.siteExpire,e.siteAuthorScale=t.readdata._data.siteAuthorScale,e.siteMasterScale=t.readdata._data.siteMasterScale,e.siteLogoFile=t.readdata._data.siteLogoFile,e.siteRecord=t.readdata._data.siteRecord,e.siteStat=t.readdata._data.siteStat,e.siteClose=t.readdata._data.siteClose,t.readdata._data.logo&&e.fileList.push({url:t.readdata._data.logo}),1==e.siteClose?e.radio2="1":e.radio2="2",e.siteCloseMsg=t.readdata._data.siteCloseMsg})).catch((function(e){}))},handleRemove:function(e,t){var a=this,i=new FormData;i.append("logo",e.raw),this.appFetch({url:"logo",method:"delete",data:i}).then((function(e){a.$message("删除成功")})).catch((function(e){console.log("上传失败")}))},handlePictureCardPreview:function(e){this.dialogImageUrl=e.url,this.dialogVisible=!0},radioChange:function(e){this.siteMode=e},radioChangeClose:function(e){this.siteClose="1"==e},beforeAvatarUpload:function(e){var t="image/jpeg"==e.type||"image/png"==e.type||"image/gif"==e.type,a=e.size/1024/1024<2;return t?a?(this.multfileImg=e,t&&a):(this.$message.warning("上传头像图片大小不能超过 2MB!"),a):(this.$message.warning("上传头像图片只能是 JPG/PNG/GIF 格式!"),t)},uploaderLogo:function(e){console.log(e);var t=new FormData;t.append("logo",e.file),console.log(t),this.appFetch({url:"logo",method:"post",data:t}).then((function(e){})).catch((function(e){console.log("上传失败")}))},errorFile:function(){console.log(this.fileList)},siteSetPost:function(){var e=this;this.appFetch({url:"settings",method:"post",data:{data:[{attributes:{key:"site_name",value:this.siteName,tag:"default"}},{attributes:{key:"site_introduction",value:this.siteIntroduction,tag:"default"}},{attributes:{key:"site_mode",value:this.siteMode,tag:"default"}},{attributes:{key:"site_price",value:this.sitePrice,tag:"default"}},{attributes:{key:"site_expire",value:this.siteExpire,tag:"default"}},{attributes:{key:"site_author_scale",value:this.siteAuthorScale,tag:"default"}},{attributes:{key:"site_master_scale",value:this.siteMasterScale,tag:"default"}},{attributes:{key:"site_record",value:this.siteRecord,tag:"default"}},{attributes:{key:"site_stat",value:this.siteStat,tag:"default"}},{attributes:{key:"site_close",value:this.siteClose,tag:"default"}},{attributes:{key:"site_close_msg",value:this.siteCloseMsg,tag:"default"}}]}}).then((function(t){console.log(t),e.$message({message:"提交成功",type:"success"})})).catch((function(e){console.log("失败")}))},onblurFun:function(){null!=this.siteAuthorScale&&""!=this.siteAuthorScale||(this.siteAuthorScale=0),null!=this.siteMasterScale&&""!=this.siteMasterScale||(this.siteMasterScale=0),10!=parseFloat(this.siteAuthorScale)+parseFloat(this.siteMasterScale)&&this.$message({message:"比例相加必须为10",type:"error"})}},components:{Card:s.default,CardRow:o.default}}},x47F:function(e,t,a){},xoSE:function(e,t,a){"use strict";a.r(t);var i=a("Lomd"),s=a.n(i);for(var o in i)"default"!==o&&function(e){a.d(t,e,(function(){return i[e]}))}(o);t.default=s.a},z1HU:function(e,t,a){"use strict";var i=a("x47F");a.n(i).a}}]);