(window.webpackJsonp=window.webpackJsonp||[]).push([[49,110],{"+1ub":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.autoTextarea=function(t,e,i,n){e=e||0;var o=!!document.getBoxObjectFor||"mozInnerScreenX"in window,a=!!window.opera&&!!window.opera.toString().indexOf("Opera"),s=function(e,i){t.addEventListener?t.addEventListener(e,i,!1):t.attachEvent("on"+e,i)},c=t.currentStyle?function(e){var i=t.currentStyle[e];if("height"===e&&1!==i.search(/px/i)){var n=t.getBoundingClientRect();return n.bottom-n.top-parseFloat(c("paddingTop"))-parseFloat(c("paddingBottom"))+"px"}return i}:function(e){return getComputedStyle(t,null)[e]},r=parseFloat(c("height"));t.style.resize="none";var l=function(){var s,l,d=0,h=t.style;t._length!==t.value.length&&(t._length=t.value.length,o||a||(d=parseInt(c("paddingTop"))+parseInt(c("paddingBottom"))),s=document.body.scrollTop||document.documentElement.scrollTop,t.style.height=r+"px",t.scrollHeight>r&&(i&&t.scrollHeight>i?(l=i-d,h.overflowY="hidden"):(l=t.scrollHeight-d,h.overflowY="hidden"),h.height=l+e+"px",s+=parseInt(h.height)-t.currHeight,document.body.scrollTop=s,document.documentElement.scrollTop=s,t.currHeight=parseInt(h.height),n(parseInt(h.height))))};s("propertychange",l),s("input",l),s("focus",l),l()},e.debounce=function(t,e){var i=void 0;return function(){for(var n=this,o=arguments.length,a=Array(o),s=0;s<o;s++)a[s]=arguments[s];i&&clearTimeout(i),i=setTimeout((function(){t.apply(n,a)}),e||500)}}},"1m/t":function(t,e,i){"use strict";i.r(e);var n=i("9jAL"),o=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e.default=o.a},"1nxv":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n,o=i("+1ub"),a=i("6NK7"),s=(n=a)&&n.__esModule?n:{default:n};var c=parseFloat(document.documentElement.style.fontSize);e.default={data:function(){return{headerTitle:"发布主题",selectSort:"",showPopup:!1,categories:[],categoriesId:[],cateId:"",content:"",showFacePanel:!1,keyboard:!1,keywordsMax:1e4,list:[],footMove:!1,faceData:[],fileList:[],fileListOne:[],uploadShow:!1,enclosureList:[],avatar:"",themeId:"",postsId:"",files:{name:"",type:""},headerImage:null,picValue:null,upImgUrl:"",enclosureShow:!1,isWeixin:!1,isPhone:!1,themeCon:!1,attriAttachment:!1,canUploadImages:"",canUploadAttachments:"",supportImgExt:"",supportImgExtRes:"",supportFileExt:"",supportFileArr:"",limitMaxLength:!0,limitMaxEncLength:!0,fileListOneLen:"",enclosureListLen:"",isiOS:!1,encuploadShow:!1,testingRes:!1,backGo:-2,formdataList:[],viewportWidth:"",viewportHeight:"",nowCate:[]}},computed:{nowCateId:function(){return this.$route.params.cateId}},mounted:function(){var t=this;this.$nextTick((function(){var e=t.$refs.textarea;e.focus();var i=300;e&&(0,o.autoTextarea)(e,5,65535,(function(t){if((t+=20)!==i){i=t}}))})),1!=this.isWeixin&&1!=this.isPhone&&this.limitWidth()},created:function(){this.viewportWidth=window.innerWidth,this.viewportHeight=window.innerHeight,this.isWeixin=s.default.isWeixin().isWeixin,this.isPhone=s.default.isWeixin().isPhone;var t=navigator.userAgent;if(this.isAndroid=t.indexOf("Android")>-1||t.indexOf("Adr")>-1,this.isiOS=!!t.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),this.isiOS&&(this.encuploadShow=!0),this.$route.params.themeId){var e=this.$route.params.themeId,i=this.$route.params.postsId,n=this.$route.params.themeContent;this.themeId=e,this.postsId=i,this.content=n}this.loadCategories(),this.getInfo()},watch:{"fileListOne.length":function(t,e){this.fileListOneLen=t,this.fileListOneLen>=12?this.limitMaxLength=!1:this.limitMaxLength=!0},"enclosureList.length":function(t,e){this.enclosureListLen=t,this.enclosureListLen>=3?this.limitMaxEncLength=!1:this.limitMaxEncLength=!0},showFacePanel:function(t,e){this.showFacePanel=t,this.showFacePanel?document.getElementById("postForm").style.height=this.viewportHeight-240+"px":document.getElementById("postForm").style.height="100%"}},methods:{getInfo:function(){var t=this;this.appFetch({url:"forum",method:"get",data:{include:["users"]}}).then((function(e){if(e.errors)throw t.$toast.fail(e.errors[0].code),new Error(e.error);var i="";if(e.readdata._data.set_attach.support_img_ext){i=e.readdata._data.set_attach.support_img_ext.split(",");for(var n="",o="",a=0;a<i.length;a++)n="."+i[a]+",",o="image/"+i[a]+",",t.supportImgExt+=n,t.supportImgExtRes+=o}else i="*";var s="";if(e.readdata._data.set_attach.support_file_ext){s=e.readdata._data.set_attach.support_file_ext.split(",");var c="";for(a=0;a<s.length;a++)c="."+s[a]+",",t.supportFileExt+=c}else s="*";t.canUploadImages=e.readdata._data.other.can_upload_images,t.canUploadAttachments=e.readdata._data.other.can_upload_attachments}))},detailsLoad:function(){var t=this;if(this.postsId&&this.content){var e="threads/"+this.themeId;this.appFetch({url:e,method:"get",data:{include:["firstPost","firstPost.images","firstPost.attachments","category"]}}).then((function(e){if(e.errors)throw t.$toast.fail(e.errors[0].code),new Error(e.error);var i=e.readdata.category._data.id;t.selectSort=e.readdata.category._data.description,t.cateId!=i&&(t.cateId=i)}))}},publish:function(){var t=this;if(""!=this.content&&null!=this.content)if(0!=this.cateId&&null!=this.cateId)if(this.postsId&&this.content){var e="posts/"+this.postsId;this.appFetch({url:e,method:"patch",data:{data:{type:"posts",attributes:{content:this.content}}}}).then((function(e){e.errors?e.errors[0].detail?t.$toast.fail(e.errors[0].code+"\n"+e.errors[0].detail[0]):t.$toast.fail(e.errors[0].code):(console.log("主题"),t.$router.replace({path:"details/"+t.themeId,query:{backGo:t.backGo},replace:!0}))}))}else{this.attriAttachment=this.fileListOne.concat(this.enclosureList);for(var i=0;i<this.attriAttachment.length;i++)this.attriAttachment[i]={type:"attachments",id:this.attriAttachment[i].id};this.appFetch({url:"threads",method:"post",data:{data:{type:"threads",attributes:{content:this.content},relationships:{category:{data:{type:"categories",id:this.cateId}},attachments:{data:this.attriAttachment}}}}}).then((function(e){if(e.errors)e.errors[0].detail?t.$toast.fail(e.errors[0].code+"\n"+e.errors[0].detail[0]):t.$toast.fail(e.errors[0].code);else{var i=e.readdata._data.id,n=t;console.log("长文"),n.$router.replace({path:"/details/"+i,query:{backGo:t.backGo},replace:!0})}}))}else this.$toast.fail("请选择分类");else this.$toast.fail("内容不能为空")},limitWidth:function(){document.getElementById("post-topic-footer").style.width="640px";var t=window.innerWidth;document.getElementById("post-topic-footer").style.left=(t-640)/2+"px"},deleteEnclosure:function(t,e){this.fileListOne.length<1&&(this.uploadShow=!1),this.appFetch({url:"attachment",method:"delete",splice:"/"+t.id})},deleteEnc:function(t,e){var i=this;this.fileListOne.length<1&&(this.uploadShow=!1),this.appFetch({url:"attachment",method:"delete",splice:"/"+t.id}).then((function(e){var n=i.enclosureList.filter((function(e){return e.id!==t.id}));i.enclosureList=n}))},beforeHandleFile:function(){this.canUploadImages?this.limitMaxLength||this.$toast.fail("已达上传图片上限"):this.$toast.fail("没有上传图片的权限")},beforeHandleEnclosure:function(){this.canUploadAttachments?this.limitMaxEncLength||this.$toast.fail("已达上传附件上限"):this.$toast.fail("没有上传附件的权限")},handleFile:function(t){var e=this,i=[];void 0===t.length?i.push(t):i=t,this.limitMaxLength?i.map((function(t,n){e.isAndroid&&e.isWeixin?(e.testingType(t.file,e.supportImgExt),e.testingRes&&e.compressFile(t.file,15e4,!1,i.length-n)):e.compressFile(t.file,15e4,!1,i.length-n)})):this.$toast.fail("已达上传图片上限")},handleFileUp:function(t){for(var e=t.target.files.length+this.fileListOne.length<=12?t.target.files.length:12-this.fileListOne.length,i=0;i<e;i++){var n=t.target.files[i];this.isAndroid&&this.isWeixin?(this.testingType(n,this.supportImgExt),this.testingRes&&this.compressFile(n,15e4,!0)):this.compressFile(n,15e4,!0)}},handleEnclosure:function(t){if(this.testingType(t.target.files[0],this.supportFileExt),this.testingRes){var e=t.target.files[0],i=new FormData;i.append("file",e),i.append("isGallery",0),this.uploaderEnclosure(i,!1,!1,!0)}},testingType:function(t,e){var i=t.name.substring(t.name.lastIndexOf(".")).toLowerCase();"-1"==e.indexOf(i+",")?(this.$toast.fail("文件格式不正确!"),this.testingRes=!1):this.testingRes=!0},getAllEvens:function(t){},uploaderEnclosure:function(t,e,i,n,o){var a=this;this.appFetch({url:"attachment",method:"post",data:t}).then((function(t){if(t.errors)throw a.$toast.fail(t.errors[0].code),new Error(t.error);i&&(a.fileList.push({url:t.readdata._data.url,id:t.readdata._data.id}),a.fileListOne[a.fileListOne.length-o].id=t.data.attributes.id),e&&(a.fileListOne.push({url:t.readdata._data.url,id:t.readdata._data.id}),a.fileListOne.length>0&&(a.uploadShow=!0)),n&&(a.enclosureShow=!0,a.enclosureList.push({type:t.readdata._data.extension,name:t.readdata._data.fileName,id:t.readdata._data.id})),a.loading=!1}))},compressFile:function(t,e,i,n){var o=t.size||.8*t.length,a=(Math.max(e/o,.8),this);lrz(t,{quality:.8}).then((function(e){var o=new FormData;o.append("file",e.file,t.name),o.append("isGallery",1),a.uploaderEnclosure(o,i,!i,!1,n),a.loading=!1})).catch((function(t){})).always((function(){}))},clearKeywords:function(){this.keywords="",this.list=[];var t=this.$refs.textarea,e=40/c;t.style.height=e+"rem",e=60/c,t.focus()},searchChange:(0,o.debounce)((function(){if(this.keywords&&this.keywords.trim())this.keywords;else this.list=[]})),handleFaceChoose:function(t){var e=this.content,i=this.$refs.textarea,n=i.selectionStart,o=i.selectionEnd,a=e.substring(0,n)+t+e.substring(o,e.length);this.content=a,i.setSelectionRange&&setTimeout((function(){var e=n+t.length;i.setSelectionRange(e,e)}),0)},addExpression:function(){var t=this;this.keyboard=!this.keyboard,this.appFetch({url:"emojis",method:"get",data:{include:""}}).then((function(e){t.faceData=e.readdata})),this.showFacePanel=!this.showFacePanel,this.showFacePanel?document.getElementById("postForm").style.height=this.viewportHeight-240+"px":document.getElementById("postForm").style.height="100%",this.footMove=!this.footMove},backClick:function(){this.$router.go(-1)},dClick:function(){this.showPopup=!0},onConfirm:function(t,e){console.log(t,"====================");var i=t.id;this.cateId=i;t.text;this.showPopup=!1,this.selectSort=t.text},loadCategories:function(){var t=this;this.appFetch({url:"categories",method:"get",data:{include:""}}).then((function(e){if(e.errors)throw t.$toast.fail(e.errors[0].code),new Error(e.error);for(var i=[],n=0,o=(i=e.readdata).length;n<o;n++)t.categories.push({text:i[n]._data.name,id:i[n]._data.id}),t.categoriesId.push(i[n]._data.id);if(0!=t.nowCateId&&null!=t.nowCateId){var a;a=i.find((function(e){if(e._data.id===t.nowCateId)return e})),t.nowCate={id:a._data.id,name:a._data.name},t.cateId=t.nowCate.id,t.selectSort=t.nowCate.name}else t.selectSort="选择分类"}))},onCancel:function(){this.showPopup=!1}}}},"6GI9":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{active:0,faceIndex:0}},props:{faceData:{type:Array}},computed:{faces:function(){for(var t=this.faceData,e=(this.faceIndex,t),i=0,n=[];28*i<e.length;)n.push(e.slice(28*i,28*(i+1))),i+=1;return n},scrollWidth:function(){return this.faces.length*document.body.clientWidth},scrollPosition:function(){return this.active*document.body.clientWidth}},mounted:function(){var t=this,e=this.$refs.faceContent,i=0,n=0;e.ontouchstart=function(t){i=t.targetTouches[0].pageX},e.ontouchend=function(e){(n=e.changedTouches[0].pageX)-i>50?0!==t.active&&t.active--:n-i<-50&&t.active!==t.faces.length-1&&t.active++}},created:function(){},methods:{getUrlCode:function(){var t=this;this.code=this.$utils.getUrlKey("code"),alert(code),this.appFetch({url:"weixin",method:"get",data:{code:this.code}}).then((function(t){alert(65756765)}),(function(e){100004==e.errors[0].status&&t.$router.go(-1)}))},loginWxClick:function(){this.$router.push({path:"/wx-login-bd"})},loginPhoneClick:function(){this.$router.push({path:"/login-phone"})},onFaceClick:function(t){this.$emit("onFaceChoose",t)}}}},"9jAL":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(i("QbLZ")),o=s(i("1nxv")),a=(i("+1ub"),s(i("SDcr")));function s(t){return t&&t.__esModule?t:{default:t}}i("iUmJ"),i("N960"),e.default=(0,n.default)({name:"post-topic",components:{Expression:a.default}},o.default)},FI70:function(t,e,i){"use strict";i.r(e);var n=i("YnDr"),o=i("1m/t");for(var a in o)"default"!==a&&function(t){i.d(e,t,(function(){return o[t]}))}(a);var s=i("KHd+"),c=Object(s.a)(o.default,n.a,n.b,!1,null,null,null);e.default=c.exports},IFzr:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"face-container"},[i("div",{staticClass:"scroll-wrapper"},[i("div",{ref:"faceContent",staticClass:"face-content",style:{width:t.scrollWidth+"px",marginLeft:-t.scrollPosition+"px"},on:{touchmove:function(t){t.preventDefault()}}},t._l(t.faces,(function(e,n){return i("div",{key:n,staticClass:"face-page"},t._l(e,(function(e,n){return i("a",{key:n},[i("img",{staticClass:"emoji",attrs:{src:e._data.url},on:{click:function(i){return t.onFaceClick(" "+e._data.code+" ")}}})])})),0)})),0),t._v(" "),i("div",{staticClass:"page-dot"},t._l(t.faces.length,(function(e){return i("div",{key:e,staticClass:"dot-item",class:e===t.active+1?"active":"",on:{click:function(i){t.active=e-1}}})})),0)])])},o=[];i.d(e,"a",(function(){return n})),i.d(e,"b",(function(){return o}))},SDcr:function(t,e,i){"use strict";i.r(e);var n=i("IFzr"),o=i("uwTP");for(var a in o)"default"!==a&&function(t){i.d(e,t,(function(){return o[t]}))}(a);var s=i("KHd+"),c=Object(s.a)(o.default,n.a,n.b,!1,null,null,null);e.default=c.exports},YnDr:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"post-topic-box"},[i("header",{staticClass:"post-topic-header",style:{overflow:"hidden",width:t.isPhone||t.isWeixin?"100%":"640px",left:t.isPhone||t.isWeixin?"0":(t.viewportWidth-640)/2+"px"}},[i("span",{staticClass:"icon iconfont icon-back post-topic-header-icon",on:{click:t.backClick}}),t._v(" "),i("h2",{staticClass:"postHeadTit"},[t._v(t._s(t.headerTitle))]),t._v(" "),i("van-button",{attrs:{type:"primary",size:"mini"},on:{click:t.publish}},[t._v("发布")])],1),t._v(" "),i("div",{staticClass:"post-topic-form",attrs:{id:"postForm"}},[i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.content,expression:"content"}],ref:"textarea",staticClass:"reply-box",attrs:{id:"post-topic-form-text",name:"post-topic",placeholder:"请输入内容",maxlength:t.keywordsMax},domProps:{value:t.content},on:{change:t.searchChange,focus:function(e){t.showFacePanel=!1,t.footMove=!1,t.keyboard=!1},input:function(e){e.target.composing||(t.content=e.target.value)}}}),t._v(" "),t.isAndroid&&t.isWeixin?i("div",{staticClass:"uploadBox"},[t.uploadShow?i("div",{staticClass:"uploadBox"},[i("van-uploader",{attrs:{"max-count":12,"after-read":t.handleFile,multiple:""},on:{delete:function(e){return t.deleteEnclosure(e,"img")}},model:{value:t.fileListOne,callback:function(e){t.fileListOne=e},expression:"fileListOne"}})],1):t._e()]):i("div",{},[t.uploadShow?i("div",{staticClass:"uploadBox"},[i("van-uploader",{attrs:{"max-count":12,accept:t.supportImgExtRes,multiple:"false","after-read":t.handleFile},on:{delete:function(e){return t.deleteEnclosure(e,"img")}},model:{value:t.fileListOne,callback:function(e){t.fileListOne=e},expression:"fileListOne"}})],1):t._e()]),t._v(" "),t.enclosureShow?i("div",{staticClass:"enclosure"},t._l(t.enclosureList,(function(e,n){return i("div",{key:n,staticClass:"enclosureChi"},["rar"===e.type?i("span",{staticClass:"icon iconfont icon-rar"}):t._e(),t._v(" "),"zip"===e.type?i("span",{staticClass:"icon iconfont icon-rar"}):"docx"===e.type?i("span",{staticClass:"icon iconfont icon-word"}):"doc"===e.type?i("span",{staticClass:"icon iconfont icon-word"}):"pdf"===e.type?i("span",{staticClass:"icon iconfont icon-pdf"}):"jpg"===e.type?i("span",{staticClass:"icon iconfont icon-jpg"}):"mp"===e.type?i("span",{staticClass:"icon iconfont icon-mp3"}):"mp1"===e.type?i("span",{staticClass:"icon iconfont icon-mp4"}):"png"===e.type?i("span",{staticClass:"icon iconfont icon-PNG"}):"ppt"===e.type?i("span",{staticClass:"icon iconfont icon-ppt"}):"swf"===e.type?i("span",{staticClass:"icon iconfont icon-swf"}):"TIFF"===e.type?i("span",{staticClass:"icon iconfont icon-TIFF"}):"txt"===e.type?i("span",{staticClass:"icon iconfont icon-txt"}):"xls"===e.type?i("span",{staticClass:"icon iconfont icon-xls"}):i("span",{staticClass:"icon iconfont icon-doubt"}),t._v(" "),i("span",{staticClass:"encName"},[t._v(t._s(e.name))]),t._v(" "),i("van-icon",{staticClass:"encDelete",attrs:{name:"clear"},on:{click:function(i){return t.deleteEnc(e,"enclosure")}}})],1)})),0):t._e()]),t._v(" "),i("footer",{staticClass:"post-topic-footer",class:{footMove:t.footMove},attrs:{id:"post-topic-footer"}},[i("div",{staticClass:"post-topic-footer-left",class:{width20:t.encuploadShow}},[i("span",{staticClass:"icon iconfont icon-label post-topic-header-icon",class:{"icon-keyboard":t.keyboard},on:{click:t.addExpression}}),t._v(" "),t.canUploadImages&&t.limitMaxLength?i("span",{staticClass:"icon iconfont icon-picture post-topic-header-icon uploadIcon"},[t.isAndroid&&t.isWeixin?i("input",{staticClass:"hiddenInput",attrs:{type:"file"},on:{change:t.handleFileUp}}):i("input",{staticClass:"hiddenInput",attrs:{type:"file",accept:t.supportImgExtRes,multiple:""},on:{change:t.handleFileUp}})]):i("span",{staticClass:"icon iconfont icon-picture post-topic-header-icon uploadIcon",on:{click:t.beforeHandleFile}}),t._v(" "),t.canUploadAttachments&&t.limitMaxEncLength?i("span",{staticClass:"icon iconfont icon-enclosure post-topic-header-icon uploadIcon",class:{hide:t.encuploadShow}},[i("input",{staticClass:"hiddenInput",attrs:{type:"file"},on:{change:t.handleEnclosure}})]):i("span",{staticClass:"icon iconfont icon-enclosure post-topic-header-icon uploadIcon",class:{hide:t.encuploadShow},on:{click:t.beforeHandleEnclosure}})]),t._v(" "),i("div",{staticClass:"post-topic-footer-right",on:{click:t.dClick}},[i("span",{staticClass:"post-topic-footer-right-sort"},[t._v(t._s(t.selectSort))]),t._v(" "),i("span",{staticClass:"icon iconfont icon-down-menu post-topic-header-icon",staticStyle:{color:"#888888"}})])]),t._v(" "),t.showFacePanel?i("Expression",{staticClass:"expressionBox",style:{overflow:"hidden",width:t.isPhone||t.isWeixin?"100%":"640px",left:t.isPhone||t.isWeixin?"0":(t.viewportWidth-640)/2+"px"},attrs:{faceData:t.faceData,id:"showFacePanel"},on:{onFaceChoose:t.handleFaceChoose}}):t._e(),t._v(" "),i("div",{staticClass:"popup"},[i("van-popup",{style:{height:"50%"},attrs:{position:"bottom",round:""},model:{value:t.showPopup,callback:function(e){t.showPopup=e},expression:"showPopup"}},[i("van-picker",{attrs:{columns:t.categories,"show-toolbar":"",title:"选择分类"},on:{cancel:t.onCancel,confirm:t.onConfirm}})],1)],1)],1)},o=[];i.d(e,"a",(function(){return n})),i.d(e,"b",(function(){return o}))},uwTP:function(t,e,i){"use strict";i.r(e);var n=i("yaIx"),o=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e.default=o.a},yaIx:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(i("QbLZ")),o=a(i("6GI9"));function a(t){return t&&t.__esModule?t:{default:t}}e.default=(0,n.default)({name:"expressionView"},o.default)}}]);