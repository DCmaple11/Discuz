(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"57Wb":function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r(s("QbLZ"));s("cajz");var i=r(s("EhDv"));function r(e){return e&&e.__esModule?e:{default:e}}t.default=(0,a.default)({name:"reply-review-view"},i.default)},"7qpD":function(e,t,s){"use strict";s.r(t);var a=s("KDxI"),i=s("EFx4");for(var r in i)"default"!==r&&function(e){s.d(t,e,(function(){return i[e]}))}(r);s("Um0X");var n=s("KHd+"),o=Object(n.a)(i.default,a.a,a.b,!1,null,"3a12bab8",null);t.default=o.exports},CKnL:function(e,t,s){"use strict";s.r(t);var a=s("oCYn");const i=a.default.prototype.$isServer,r=(i||Number(document.documentMode),!i&&document.addEventListener?function(e,t,s){e&&t&&s&&e.addEventListener(t,s,!1)}:function(e,t,s){e&&t&&s&&e.attachEvent("on"+t,s)}),n=!i&&document.removeEventListener?function(e,t,s){e&&t&&e.removeEventListener(t,s,!1)}:function(e,t,s){e&&t&&e.detachEvent("on"+t,s)};Object.prototype.hasOwnProperty;function o(e){let t=!1;return function(...s){t||(t=!0,window.requestAnimationFrame(a=>{e.apply(this,s),t=!1}))}}const l={CONTAIN:{name:"contain",icon:"el-icon-full-screen"},ORIGINAL:{name:"original",icon:"el-icon-c-scale-to-original"}},c=!a.default.prototype.$isServer&&window.navigator.userAgent.match(/firefox/i)?"DOMMouseScroll":"mousewheel";var u={name:"elImageViewer",props:{urlList:{type:Array,default:()=>[]},zIndex:{type:Number,default:2e3},onSwitch:{type:Function,default:()=>{}},onClose:{type:Function,default:()=>{}}},data:()=>({index:0,isShow:!1,infinite:!0,loading:!1,mode:l.CONTAIN,transform:{scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}}),computed:{isSingle(){return this.urlList.length<=1},isFirst(){return 0===this.index},isLast(){return this.index===this.urlList.length-1},currentImg(){return this.urlList[this.index]},imgStyle(){const{scale:e,deg:t,offsetX:s,offsetY:a,enableTransition:i}=this.transform,r={transform:`scale(${e}) rotate(${t}deg)`,transition:i?"transform .3s":"","margin-left":`${s}px`,"margin-top":`${a}px`};return this.mode===l.CONTAIN&&(r.maxWidth=r.maxHeight="100%"),r}},watch:{index:{handler:function(e){this.reset(),this.onSwitch(e)}},currentImg(e){this.$nextTick(e=>{this.$refs.img[0].complete||(this.loading=!0)})}},methods:{hide(){this.deviceSupportUninstall(),this.onClose()},deviceSupportInstall(){this._keyDownHandler=o(e=>{switch(e.keyCode){case 27:this.hide();break;case 32:this.toggleMode();break;case 37:this.prev();break;case 38:this.handleActions("zoomIn");break;case 39:this.next();break;case 40:this.handleActions("zoomOut")}}),this._mouseWheelHandler=o(e=>{(e.wheelDelta?e.wheelDelta:-e.detail)>0?this.handleActions("zoomIn",{zoomRate:.015,enableTransition:!1}):this.handleActions("zoomOut",{zoomRate:.015,enableTransition:!1})}),r(document,"keydown",this._keyDownHandler),r(document,c,this._mouseWheelHandler)},deviceSupportUninstall(){n(document,"keydown",this._keyDownHandler),n(document,c,this._mouseWheelHandler),this._keyDownHandler=null,this._mouseWheelHandler=null},handleImgLoad(e){this.loading=!1},handleImgError(e){this.loading=!1,e.target.alt="加载失败"},handleMouseDown(e){if(this.loading||0!==e.button)return;const{offsetX:t,offsetY:s}=this.transform,a=e.pageX,i=e.pageY;this._dragHandler=o(e=>{this.transform.offsetX=t+e.pageX-a,this.transform.offsetY=s+e.pageY-i}),r(document,"mousemove",this._dragHandler),r(document,"mouseup",e=>{n(document,"mousemove",this._dragHandler)}),e.preventDefault()},reset(){this.transform={scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}},toggleMode(){if(this.loading)return;const e=Object.keys(l),t=(Object.values(l).indexOf(this.mode)+1)%e.length;this.mode=l[e[t]],this.reset()},prev(){if(this.isFirst&&!this.infinite)return;const e=this.urlList.length;this.index=(this.index-1+e)%e},next(){if(this.isLast&&!this.infinite)return;const e=this.urlList.length;this.index=(this.index+1)%e},handleActions(e,t={}){if(this.loading)return;const{zoomRate:s,rotateDeg:a,enableTransition:i}={zoomRate:.2,rotateDeg:90,enableTransition:!0,...t},{transform:r}=this;switch(e){case"zoomOut":r.scale>.2&&(r.scale=parseFloat((r.scale-s).toFixed(3)));break;case"zoomIn":r.scale=parseFloat((r.scale+s).toFixed(3));break;case"clocelise":r.deg+=a;break;case"anticlocelise":r.deg-=a}r.enableTransition=i}},mounted(){this.deviceSupportInstall()}},d=s("KHd+"),h=Object(d.a)(u,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("transition",{attrs:{name:"viewer-fade"}},[s("div",{staticClass:"el-image-viewer__wrapper",style:{"z-index":e.zIndex}},[s("div",{staticClass:"el-image-viewer__mask"}),e._v(" "),s("span",{staticClass:"el-image-viewer__btn el-image-viewer__close",on:{click:e.hide}},[s("i",{staticClass:"el-icon-circle-close"})]),e._v(" "),e.isSingle?e._e():[s("span",{staticClass:"el-image-viewer__btn el-image-viewer__prev",class:{"is-disabled":!e.infinite&&e.isFirst},on:{click:e.prev}},[s("i",{staticClass:"el-icon-arrow-left"})]),e._v(" "),s("span",{staticClass:"el-image-viewer__btn el-image-viewer__next",class:{"is-disabled":!e.infinite&&e.isLast},on:{click:e.next}},[s("i",{staticClass:"el-icon-arrow-right"})])],e._v(" "),s("div",{staticClass:"el-image-viewer__btn el-image-viewer__actions"},[s("div",{staticClass:"el-image-viewer__actions__inner"},[s("i",{staticClass:"el-icon-zoom-out",on:{click:function(t){return e.handleActions("zoomOut")}}}),e._v(" "),s("i",{staticClass:"el-icon-zoom-in",on:{click:function(t){return e.handleActions("zoomIn")}}}),e._v(" "),s("i",{staticClass:"el-image-viewer__actions__divider"}),e._v(" "),s("i",{class:e.mode.icon,on:{click:e.toggleMode}}),e._v(" "),s("i",{staticClass:"el-image-viewer__actions__divider"}),e._v(" "),s("i",{staticClass:"el-icon-refresh-left",on:{click:function(t){return e.handleActions("anticlocelise")}}}),e._v(" "),s("i",{staticClass:"el-icon-refresh-right",on:{click:function(t){return e.handleActions("clocelise")}}})])]),e._v(" "),s("div",{staticClass:"el-image-viewer__canvas"},e._l(e.urlList,(function(t,a){return a===e.index?s("img",{key:t,ref:"img",refInFor:!0,staticClass:"el-image-viewer__img",style:e.imgStyle,attrs:{src:e.currentImg},on:{load:e.handleImgLoad,error:e.handleImgError,mousedown:e.handleMouseDown}}):e._e()})),0)],2)])}),[],!1,null,null,null);t.default=h.exports},Dt3C:function(e,t,s){"use strict";s.r(t);var a=s("EPfE"),i=s("aoOm");for(var r in i)"default"!==r&&function(e){s.d(t,e,(function(){return i[e]}))}(r);var n=s("KHd+"),o=Object(n.a)(i.default,a.a,a.b,!1,null,null,null);t.default=o.exports},EFx4:function(e,t,s){"use strict";s.r(t);var a=s("d4tr"),i=s.n(a);for(var r in a)"default"!==r&&function(e){s.d(t,e,(function(){return a[e]}))}(r);t.default=i.a},EPfE:function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"cont-arrange-box"},[s("div",{staticClass:"cont-arrange-main"},[s("div",{staticClass:"cont-arrange__lf-side"},[e._t("side")],2),e._v(" "),s("main",{staticClass:"cont-arrange__rt-main"},[s("div",{staticClass:"cont-arrange__rt-main-header"},[s("div",{staticClass:"cont-arrange__rt-main-header__release"},[e.$attrs.author?s("p",{ref:"userName"},[s("a",{staticStyle:{color:"#333333"},attrs:{href:"/home-page/"+e.$attrs.userId,target:"_blank"}},[e._v("\n              "+e._s(e.$attrs.author)+"\n            ")])]):e._e(),e._v(" "),e.$attrs.replyBy?s("p",{ref:"userName"},[s("a",{staticStyle:{color:"#333333"},attrs:{href:"/home-page/"+e.$attrs.userId,target:"_blank"}},[e._v("\n              "+e._s(e.$attrs.replyBy)+"\n            ")])]):e._e(),e._v(" "),e.$attrs.author?s("span",[e._v("发布于")]):e._e(),e._v(" "),e.$attrs.replyBy?s("span",[e._v("回复主题")]):e._e(),e._v(" "),e.$attrs.theme?s("p",[e._v(e._s(e.$attrs.theme))]):e._e(),e._v(" "),e.$attrs.themeName?s("p",{ref:"themeName",class:e.$attrs.themeName?"themeName":"",style:e.themeNameStyle},[e._v("123"+e._s(e.$attrs.themeName))]):e._e()]),e._v(" "),e.$attrs.prply>=0&&e.$attrs.browse>=0?s("div",{staticClass:"cont-arrange__rt-main-header__reply-view rt-box"},[s("span",[e._v("回复/查看：")]),e._v(" "),s("span",[e._v(e._s(e.$attrs.prply)+"/"+e._s(e.$attrs.browse))])]):e._e(),e._v(" "),e.$attrs.last?s("div",{staticClass:"cont-arrange__rt-main-header__last-reply rt-box"},[s("span",[e._v("最后回复：")]),e._v(" "),s("span",[e._v(e._s(e.$attrs.last))])]):e._e(),e._v(" "),e.$attrs.ip?s("div",{staticClass:" rt-box"},[s("span",[e._v("IP：")]),e._v(" "),s("span",[e._v(e._s(e.$attrs.ip))])]):e._e(),e._v(" "),e.$attrs.releaseTime?s("div",{staticClass:"cont-arrange__rt-main-header__release-time rt-box"},[s("span",[e._v("发布时间：")]),e._v(" "),s("span",[e._v(e._s(e.$attrs.releaseTime))])]):e._e(),e._v(" "),e.$attrs.finalPost?s("div",{staticClass:"cont-arrange__rt-main-header__release-time rt-box"},[s("span",[e._v("更新时间：")]),e._v(" "),s("span",[e._v(e._s(e.$attrs.finalPost))])]):e._e(),e._v(" "),e.$attrs.deleTime?s("div",{staticClass:" rt-box"},[s("span",[e._v("删除时间：")]),e._v(" "),s("span",[e._v(e._s(e.$attrs.deleTime))])]):e._e(),e._v(" "),e._t("header")],2),e._v(" "),s("div",{ref:"contMain",staticClass:"cont-arrange__rt-main-box",style:{height:e.showContStatus?e.mainHeight+30+"px":e.mainHeight>78?"78PX":""}},[e._t("main")],2),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:e.mainHeight>78,expression:"mainHeight > 78"}],ref:"contControl",staticClass:"cont-block-control",class:e.showBottomStatus?"is-bottom-out":"",on:{click:e.showCont}},[s("p",[s("span",{staticClass:"iconfont icondown-menu",class:e.showContStatus?"show-down":""}),e._v("\n          "+e._s(e.showContStatus?"收起详情":"展开详情")+"\n        ")])]),e._v(" "),e.$slots.footer?s("div",{staticClass:"cont-arrange__rt-main-footer"},[e._t("footer")],2):e._e()])])])},i=[];s.d(t,"a",(function(){return a})),s.d(t,"b",(function(){return i}))},EhDv:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=u(s("4gYi")),i=u(s("Dt3C")),r=u(s("rWG0")),n=u(s("7qpD")),o=u(s("VVfg")),l=u(s("wd/R")),c=u(s("CKnL"));function u(e){return e&&e.__esModule?e:{default:e}}t.default={data:function(){return{searchUserName:"",keyWords:"",showSensitiveWords:!1,pageOptions:[{value:10,label:"每页显示10条"},{value:20,label:"每页显示20条"},{value:30,label:"每页显示30条"}],pageSelect:10,searchReview:[{value:0,label:"未审核"},{value:2,label:"已忽略"}],searchReviewSelect:0,categoriesList:[],categoriesListSelect:"",searchTime:[{value:1,label:"全部"},{value:2,label:"最近一周"},{value:3,label:"最近一个月"},{value:4,label:"最近三个月"}],searchTimeSelect:1,relativeTime:["",""],reasonForOperation:[{value:"无",label:"无"},{value:"广告/SPAM",label:"广告/SPAM"},{value:"恶意灌水",label:"恶意灌水"},{value:"违规内容",label:"违规内容"},{value:"文不对题",label:"文不对题"},{value:"重复发帖",label:"重复发帖"},{value:"我很赞同",label:"我很赞同"},{value:"精品文章",label:"精品文章"},{value:"原创内容",label:"原创内容"},{value:"其他",label:"其他"}],reasonForOperationSelect:1,appleAll:!1,themeList:[],currentPaga:1,total:0,pageCount:1,ignoreStatus:!0,submitForm:[],showViewer:!1,url:[]}},methods:{imgShowClick:function(e,t){var s=this;console.log(e),this.url=[];var a=[];e.forEach((function(e){a.push(e._data.url)})),this.url.push(a[t]),a.forEach((function(e,a){a>t&&s.url.push(e)})),a.forEach((function(e,a){a<t&&s.url.push(e)})),this.showViewer=!0},closeViewer:function(){this.showViewer=!1},handleSelectionChange:function(e){this.multipleSelection=e,this.multipleSelection.length>=1?this.deleteStatus=!1:this.deleteStatus=!0},reasonForOperationChange:function(e,t){this.submitForm[t].attributes.message=e},handleCurrentChange:function(e){console.log(e),document.getElementsByClassName("index-main-con__main")[0].scrollTop=0,o.default.setLItem("currentPag",e),this.currentPaga=e,this.getPostsList(e)},postSearch:function(){this.ignoreStatus=2!==this.searchReviewSelect,this.currentPaga=1,this.getPostsList()},searchTimeChange:function(e){var t=new Date,s=new Date;switch(this.relativeTime=[],e){case 1:this.relativeTime.push("","");break;case 2:s.setTime(s.getTime()-6048e5),this.relativeTime.push(this.formatDate(t),this.formatDate(s));break;case 3:s.setTime(s.getTime()-2592e6),this.relativeTime.push(this.formatDate(t),this.formatDate(s));break;case 4:s.setTime(s.getTime()-7776e6),this.relativeTime.push(this.formatDate(t),this.formatDate(s));break;default:this.$message.error("搜索日期选择错误，请重新选择！或 刷新页面（F5）")}console.log("相对时间："+this.relativeTime)},submitClick:function(){console.log(this.submitForm),this.patchPostsBatch(this.submitForm)},radioChange:function(e,t){switch(e){case 0:this.submitForm[t].attributes.isApproved=1;break;case 1:this.submitForm[t].attributes.isDeleted=!0;break;case 2:this.submitForm[t].attributes.isApproved=2}},allOperationsSubmit:function(e){var t=this;switch(e){case 1:this.submitForm.forEach((function(e,s){t.submitForm[s].attributes.isApproved=1}));break;case 2:this.submitForm.forEach((function(e,s){t.submitForm[s].attributes.isDeleted=!0}));break;case 3:this.submitForm.forEach((function(e,s){t.submitForm[s].attributes.isApproved=2}))}this.patchPostsBatch(this.submitForm)},singleOperationSubmit:function(e,t,s,a){var i={type:"posts",attributes:{isApproved:0,isDeleted:!1}};switch(e){case 1:i.attributes.isApproved=1,this.patchPosts(i,s);break;case 2:i.attributes.isDeleted=!0,i.attributes.message=this.submitForm[a].attributes.message,this.patchPosts(i,s);break;case 3:i.attributes.isApproved=2,this.patchPosts(i,s);break;default:console.log("系统错误，请刷新页面")}console.log(i)},viewClick:function(e){var t=this.$router.resolve({path:"/details/"+e});window.open(t.href,"_blank")},editClick:function(e,t){console.log(e);var s=this.$router.resolve({name:"reply-to-topic",query:{themeId:e,replyId:t}});window.open(s.href,"_blank")},formatDate:function(e){return(0,l.default)(e).format("YYYY-MM-DD HH:mm")},getPostsList:function(e){var t=this;this.appFetch({url:"posts",method:"get",data:{include:["user","thread","thread.category","thread.firstPost","images"],"filter[isDeleted]":"no","filter[username]":this.searchUserName,"page[number]":e,"page[size]":this.pageSelect,"filter[q]":this.keyWords,"filter[isApproved]":this.searchReviewSelect,"filter[createdAtBegin]":this.relativeTime[1],"filter[createdAtEnd]":this.relativeTime[0],"filter[categoryId]":this.categoriesListSelect,"filter[highlight]":this.showSensitiveWords?"yes":"no",sort:"-updatedAt"}}).then((function(e){console.log(e),e.errors?t.$message.error(e.errors[0].code):(t.themeList=[],t.submitForm=[],t.themeList=e.readdata,t.total=e.meta.postCount,t.pageCount=e.meta.pageCount,t.themeList.forEach((function(e,s){t.submitForm.push({Select:"无",radio:"",type:"posts",id:e._data.id,attributes:{isApproved:0,isDeleted:!1,message:""}})})))})).catch((function(e){console.log(e)}))},getCategories:function(){var e=this;this.appFetch({url:"categories",method:"get",data:{}}).then((function(t){t.errors?e.$message.error(t.errors[0].code):(e.categoriesList=[],t.data.forEach((function(t,s){e.categoriesList.push({name:t.attributes.name,id:t.id})})))})).catch((function(e){console.log(e)}))},patchPostsBatch:function(e){var t=this;this.appFetch({url:"postsBatch",method:"patch",data:{data:e}}).then((function(e){e.errors?t.$message.error(e.errors[0].code):e.meta&&e.data?t.$message.error("操作失败！"):(t.getPostsList(Number(o.default.getLItem("currentPag"))||1),t.$message({message:"操作成功",type:"success"})),console.log(e)})).catch((function(e){}))},patchPosts:function(e,t){var s=this;this.appFetch({url:"posts",method:"patch",splice:"/"+t,data:{data:e}}).then((function(e){e.errors?s.$message.error(e.errors[0].code):(s.getPostsList(Number(o.default.getLItem("currentPag"))||1),s.$message({message:"操作成功",type:"success"}))})).catch((function(e){console.log(e)}))}},created:function(){this.getCategories(),this.getPostsList(Number(o.default.getLItem("currentPag"))||1)},components:{Card:a.default,ContArrange:i.default,Page:r.default,tableNoList:n.default,ElImageViewer:c.default}}},FCu8:function(e,t,s){"use strict";s.r(t);var a=s("57Wb"),i=s.n(a);for(var r in a)"default"!==r&&function(e){s.d(t,e,(function(){return a[e]}))}(r);t.default=i.a},Jvef:function(e,t,s){},KDxI:function(e,t,s){"use strict";var a=function(){var e=this.$createElement;this._self._c;return this._m(0)},i=[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"table-no-list"},[t("p",[this._v("暂无数据")])])}];s.d(t,"a",(function(){return a})),s.d(t,"b",(function(){return i}))},Q86h:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r(s("QbLZ"));s("uwep");var i=r(s("u8Dz"));function r(e){return e&&e.__esModule?e:{default:e}}t.default=(0,a.default)({name:"cont-arrange-view"},i.default)},QCer:function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"reply-review-box"},[s("div",{staticClass:"cont-review-header"},[s("div",{staticClass:"cont-review-header__lf"},[s("div",[s("span",{staticClass:"cont-review-header__lf-title"},[e._v("用户名：")]),e._v(" "),s("el-input",{attrs:{size:"medium",placeholder:"搜索用户名",clearable:""},model:{value:e.searchUserName,callback:function(t){e.searchUserName=t},expression:"searchUserName"}})],1),e._v(" "),s("div",[s("span",{staticClass:"cont-review-header__lf-title"},[e._v("每页显示：")]),e._v(" "),s("el-select",{attrs:{size:"medium",placeholder:"选择每页显示"},model:{value:e.pageSelect,callback:function(t){e.pageSelect=t},expression:"pageSelect"}},e._l(e.pageOptions,(function(e){return s("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)]),e._v(" "),s("div",{staticClass:"cont-review-header__rt"},[s("div",[s("span",{staticClass:"cont-review-header__lf-title"},[e._v("内容包含：")]),e._v(" "),s("el-input",{staticClass:"content-contains-input",attrs:{size:"medium",clearable:"",placeholder:"搜索关键词"},model:{value:e.keyWords,callback:function(t){e.keyWords=t},expression:"keyWords"}}),e._v(" "),s("el-checkbox",{model:{value:e.showSensitiveWords,callback:function(t){e.showSensitiveWords=t},expression:"showSensitiveWords"}},[e._v("显示敏感词")])],1),e._v(" "),s("div",{staticClass:"cont-review-header__rt-search"},[s("span",{staticClass:"cont-review-header__lf-title"},[e._v("搜索范围：")]),e._v(" "),s("el-select",{attrs:{size:"medium",placeholder:"选择审核状态"},model:{value:e.searchReviewSelect,callback:function(t){e.searchReviewSelect=t},expression:"searchReviewSelect"}},e._l(e.searchReview,(function(e){return s("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1),e._v(" "),s("el-select",{attrs:{size:"medium",clearable:"",placeholder:"选择搜索分类"},model:{value:e.categoriesListSelect,callback:function(t){e.categoriesListSelect=t},expression:"categoriesListSelect"}},e._l(e.categoriesList,(function(e){return s("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1),e._v(" "),s("el-select",{attrs:{size:"medium",placeholder:"选择搜索时间"},on:{change:e.searchTimeChange},model:{value:e.searchTimeSelect,callback:function(t){e.searchTimeSelect=t},expression:"searchTimeSelect"}},e._l(e.searchTime,(function(e){return s("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1),e._v(" "),s("el-button",{attrs:{size:"small",type:"primary"},on:{click:e.postSearch}},[e._v("搜索")])],1)])]),e._v(" "),s("div",{staticClass:"cont-review-table"},[e._l(e.themeList,(function(t,a){return s("ContArrange",{key:t._data.id,attrs:{replyBy:t.user?t.user._data.username:"该用户被删除",themeName:t.thread.firstPost._data.content,finalPost:e.formatDate(t._data.updatedAt),ip:t._data.ip,userId:t.user?t.user._data.id:"该用户被删除"}},[s("div",{staticClass:"cont-review-table__side",attrs:{slot:"side"},slot:"side"},[s("el-radio-group",{on:{change:function(t){return e.radioChange(t,a)}},model:{value:e.submitForm[a].radio,callback:function(t){e.$set(e.submitForm[a],"radio",t)},expression:"submitForm[index].radio"}},[s("el-radio",{attrs:{label:0}},[e._v("通过")]),e._v(" "),s("el-radio",{attrs:{label:1}},[e._v("删除")]),e._v(" "),2!==t._data.isApproved?s("el-radio",{attrs:{label:2,disabled:2===t._data.isApproved}},[e._v("忽略")]):e._e()],1)],1),e._v(" "),s("div",{staticClass:"cont-review-table__main",attrs:{slot:"main"},slot:"main"},[s("a",{staticClass:"cont-review-table__main__cont-text",attrs:{href:"/details/"+t._data.id,target:"_blank"},domProps:{innerHTML:e._s(t._data.contentHtml)}}),e._v(" "),s("div",{staticClass:"cont-review-table__main__cont-imgs"},e._l(t.images,(function(a,i){return s("p",{key:i,staticClass:"cont-review-table__main__cont-imgs-p"},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:a._data.thumbUrl,expression:"item._data.thumbUrl"}],attrs:{alt:a._data.fileName},on:{click:function(s){return e.imgShowClick(t.images,i)}}})])})),0)]),e._v(" "),s("div",{staticClass:"cont-review-table__footer",attrs:{slot:"footer"},slot:"footer"},[s("div",{staticClass:"cont-review-table__footer__lf"},[s("el-button",{attrs:{type:"text"},on:{click:function(s){return e.singleOperationSubmit(1,t.thread.category._data.id,t._data.id)}}},[e._v("通过")]),e._v(" "),s("i"),e._v(" "),s("el-button",{attrs:{type:"text"},on:{click:function(s){return e.singleOperationSubmit(2,t.thread.category._data.id,t._data.id,a)}}},[e._v("删除")]),e._v(" "),s("i"),e._v(" "),2!==t._data.isApproved?s("el-button",{attrs:{type:"text"},on:{click:function(s){return e.singleOperationSubmit(3,t.thread.category._data.id,t._data.id)}}},[e._v("忽略")]):e._e()],1),e._v(" "),s("div",{staticClass:"cont-review-table__footer__rt"},[s("span",[e._v("操作理由：")]),e._v(" "),s("el-input",{attrs:{size:"medium",clearable:""},model:{value:e.submitForm[a].attributes.message,callback:function(t){e.$set(e.submitForm[a].attributes,"message",t)},expression:"submitForm[index].attributes.message"}}),e._v(" "),s("el-select",{attrs:{size:"medium",placeholder:"选择操作理由"},on:{change:function(t){return e.reasonForOperationChange(t,a)}},model:{value:e.submitForm[a].Select,callback:function(t){e.$set(e.submitForm[a],"Select",t)},expression:"submitForm[index].Select"}},e._l(e.reasonForOperation,(function(e){return s("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),e._v(" "),s("div",{staticClass:"cont-review-table__footer__bottom"},[s("el-button",{attrs:{type:"text"},on:{click:function(s){return e.viewClick(t.thread._data.id)}}},[e._v("查看")]),e._v(" "),s("el-button",{attrs:{type:"text"},on:{click:function(s){return e.editClick(t.thread._data.id,t._data.id)}}},[e._v("编辑")])],1)])])})),e._v(" "),e.showViewer?s("el-image-viewer",{attrs:{"on-close":e.closeViewer,"url-list":e.url}}):e._e(),e._v(" "),s("tableNoList",{directives:[{name:"show",rawName:"v-show",value:e.themeList.length<1,expression:"themeList.length < 1"}]}),e._v(" "),e.pageCount>1?s("Page",{attrs:{"current-page":e.currentPaga,"page-size":e.pageSelect,total:e.total},on:{"current-change":e.handleCurrentChange}}):e._e()],2),e._v(" "),s("div",{staticClass:"cont-review-footer footer-btn"},[s("el-button",{attrs:{size:"small",type:"primary"},on:{click:e.submitClick}},[e._v("提交")]),e._v(" "),s("el-button",{attrs:{type:"text"},on:{click:function(t){return e.allOperationsSubmit(1)}}},[e._v("全部通过")]),e._v(" "),s("el-button",{attrs:{type:"text"},on:{click:function(t){return e.allOperationsSubmit(2)}}},[e._v("全部删除")]),e._v(" "),s("el-button",{directives:[{name:"show",rawName:"v-show",value:e.ignoreStatus,expression:"ignoreStatus"}],attrs:{type:"text"},on:{click:function(t){return e.allOperationsSubmit(3)}}},[e._v("全部忽略")])],1)])},i=[];s.d(t,"a",(function(){return a})),s.d(t,"b",(function(){return i}))},Skey:function(e,t,s){"use strict";s.r(t);var a=s("QCer"),i=s("FCu8");for(var r in i)"default"!==r&&function(e){s.d(t,e,(function(){return i[e]}))}(r);var n=s("KHd+"),o=Object(n.a)(i.default,a.a,a.b,!1,null,null,null);t.default=o.exports},Um0X:function(e,t,s){"use strict";var a=s("Jvef");s.n(a).a},aoOm:function(e,t,s){"use strict";s.r(t);var a=s("Q86h"),i=s.n(a);for(var r in a)"default"!==r&&function(e){s.d(t,e,(function(){return a[e]}))}(r);t.default=i.a},d4tr:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"table-no-list"}},u8Dz:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{showContStatus:!1,showBottomStatus:!1,mainHeight:0,windowWidth:0,themeNameLeft:70,themeNameStyle:{left:"70",width:"calc(100% - "},styleobj:{color:"red",background:"red"}}},props:{},methods:{showCont:function(){this.mainHeight=this.$slots.main[0].elm.offsetHeight,this.showContStatus=!this.showContStatus;var e=this.$slots.main[0].elm.getBoundingClientRect().width;this.$slots.main[0].elm.offsetHeight+this.$slots.main[0].elm.getBoundingClientRect().top>window.innerHeight&&(this.showBottomStatus=!0,this.$refs.contControl.style.width=e+40+"PX"),this.showContStatus||(this.showBottomStatus=!1,this.$refs.contControl.style.width="100%")},handleScroll:function(){this.$refs.contControl&&(this.$refs.contControl.style.width=this.$slots.main[0].elm.getBoundingClientRect().width+40+"PX"),this.$slots.main[0].elm.offsetHeight+this.$slots.main[0].elm.getBoundingClientRect().top<window.innerHeight?this.showBottomStatus=!1:this.showContStatus&&(this.showBottomStatus=!0)},browserSize:function(){if(this.$refs.contControl){var e=this.$slots.main[0].elm.getBoundingClientRect(),t=e.width,s=e.top,a=this.$refs.contControl.style;this.showContStatus?(this.$slots.main[0].elm.offsetHeight+s>window.innerHeight?a.width=t+40+"PX":a.width="100%",this.$refs.contMain.style.height=this.$slots.main[0].elm.offsetHeight+30+"PX"):a.width="100%"}},removeScrollHandler:function(){window.removeEventListener("scroll",this.handleScroll,!0),window.removeEventListener("resize",this.browserSize,!0)},themeStyle:function(){this.themeNameStyle.left="70",this.themeNameStyle.width="calc(100% - ",this.themeNameStyle.left=70+this.$refs.userName.clientWidth+"px",this.themeNameStyle.width=this.themeNameStyle.width+(100+this.$refs.userName.clientWidth)+"px)"}},mounted:function(){this.mainHeight=this.$slots.main[0].elm.offsetHeight,window.addEventListener("scroll",this.handleScroll,!0),window.addEventListener("resize",this.browserSize,!0),this.windowWidth=window.innerWidth,this.themeStyle()},beforeDestroy:function(){this.removeScrollHandler()}}},uwep:function(e,t,s){}}]);