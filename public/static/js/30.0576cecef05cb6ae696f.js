(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{"57Wb":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=r(a("QbLZ"));a("cajz");var i=r(a("EhDv"));function r(t){return t&&t.__esModule?t:{default:t}}e.default=(0,s.default)({name:"reply-review-view"},i.default)},"5W5W":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"cont-arrange-box"},[a("div",{staticClass:"cont-arrange-main"},[a("div",{staticClass:"cont-arrange__lf-side"},[t._t("side")],2),t._v(" "),a("main",{staticClass:"cont-arrange__rt-main"},[a("div",{staticClass:"cont-arrange__rt-main-header"},[a("div",{staticClass:"cont-arrange__rt-main-header__release"},[t.$attrs.author?a("p",{ref:"userName"},[t._v(t._s(t.$attrs.author))]):t._e(),t._v(" "),t.$attrs.replyBy?a("p",{ref:"userName"},[t._v(t._s(t.$attrs.replyBy))]):t._e(),t._v(" "),t.$attrs.author?a("span",[t._v("发布于")]):t._e(),t._v(" "),t.$attrs.replyBy?a("span",[t._v("回复主题")]):t._e(),t._v(" "),t.$attrs.theme?a("p",[t._v(t._s(t.$attrs.theme))]):t._e(),t._v(" "),t.$attrs.themeName?a("p",{ref:"themeName",class:t.$attrs.themeName?"themeName":"",style:t.themeNameStyle},[t._v("123"+t._s(t.$attrs.themeName))]):t._e()]),t._v(" "),t.$attrs.prply>=0&&t.$attrs.browse>=0?a("div",{staticClass:"cont-arrange__rt-main-header__reply-view rt-box"},[a("span",[t._v("回复/查看：")]),t._v(" "),a("span",[t._v(t._s(t.$attrs.prply)+"/"+t._s(t.$attrs.browse))])]):t._e(),t._v(" "),t.$attrs.last?a("div",{staticClass:"cont-arrange__rt-main-header__last-reply rt-box"},[a("span",[t._v("最后回复：")]),t._v(" "),a("span",[t._v(t._s(t.$attrs.last))])]):t._e(),t._v(" "),t.$attrs.ip?a("div",{staticClass:" rt-box"},[a("span",[t._v("IP：")]),t._v(" "),a("span",[t._v(t._s(t.$attrs.ip))])]):t._e(),t._v(" "),t.$attrs.finalPost?a("div",{staticClass:"cont-arrange__rt-main-header__release-time rt-box"},[a("span",[t._v("发布时间：")]),t._v(" "),a("span",[t._v(t._s(t.$attrs.finalPost))])]):t._e(),t._v(" "),t.$attrs.deleTime?a("div",{staticClass:" rt-box"},[a("span",[t._v("删除时间：")]),t._v(" "),a("span",[t._v(t._s(t.$attrs.deleTime))])]):t._e(),t._v(" "),t._t("header")],2),t._v(" "),a("div",{ref:"contMain",staticClass:"cont-arrange__rt-main-box",style:{height:t.showContStatus?t.mainHeight+30+"px":t.mainHeight>78?"78PX":""}},[t._t("main")],2),t._v(" "),t.mainHeight>78?a("div",{ref:"contControl",staticClass:"cont-block-control",class:t.showBottomStatus?"is-bottom-out":"",on:{click:t.showCont}},[a("p",[a("span",{staticClass:"iconfont icondown-menu",class:t.showContStatus?"show-down":""}),t._v("\n          "+t._s(t.showContStatus?"收起详情":"展开详情")+"\n        ")])]):t._e(),t._v(" "),t.$slots.footer?a("div",{staticClass:"cont-arrange__rt-main-footer"},[t._t("footer")],2):t._e()])])])},i=[];a.d(e,"a",(function(){return s})),a.d(e,"b",(function(){return i}))},Dt3C:function(t,e,a){"use strict";a.r(e);var s=a("5W5W"),i=a("aoOm");for(var r in i)"default"!==r&&function(t){a.d(e,t,(function(){return i[t]}))}(r);var o=a("KHd+"),n=Object(o.a)(i.default,s.a,s.b,!1,null,null,null);e.default=n.exports},EhDv:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=l(a("4gYi")),i=l(a("Dt3C")),r=l(a("rWG0")),o=l(a("VVfg")),n=l(a("wd/R"));function l(t){return t&&t.__esModule?t:{default:t}}e.default={data:function(){return{searchUserName:"",keyWords:"",showSensitiveWords:!1,pageOptions:[{value:10,label:"每页显示10条"},{value:20,label:"每页显示20条"},{value:30,label:"每页显示30条"}],pageSelect:10,searchReview:[{value:0,label:"未审核"},{value:2,label:"已忽略"}],searchReviewSelect:0,categoriesList:[],categoriesListSelect:"",searchTime:[{value:1,label:"全部"},{value:2,label:"最近一周"},{value:3,label:"最近一个月"},{value:4,label:"最近三个月"}],searchTimeSelect:1,relativeTime:["",""],reasonForOperation:[{value:"无",label:"无"},{value:"广告/SPAM",label:"广告/SPAM"},{value:"恶意灌水",label:"恶意灌水"},{value:"违规内容",label:"违规内容"},{value:"文不对题",label:"文不对题"},{value:"重复发帖",label:"重复发帖"},{value:"我很赞同",label:"我很赞同"},{value:"精品文章",label:"精品文章"},{value:"原创内容",label:"原创内容"},{value:"其他",label:"其他"}],reasonForOperationSelect:1,appleAll:!1,themeList:[],currentPaga:1,total:0,pageCount:1,ignoreStatus:!0,submitForm:[]}},methods:{handleSelectionChange:function(t){this.multipleSelection=t,this.multipleSelection.length>=1?this.deleteStatus=!1:this.deleteStatus=!0},reasonForOperationChange:function(t,e){this.submitForm[e].attributes.message=t},handleCurrentChange:function(t){console.log(t),this.getPostsList(t)},postSearch:function(){this.ignoreStatus=2!==this.searchReviewSelect,this.getPostsList()},searchTimeChange:function(t){var e=new Date,a=new Date;switch(this.relativeTime=[],t){case 1:this.relativeTime.push("","");break;case 2:a.setTime(a.getTime()-6048e5),this.relativeTime.push(this.formatDate(e),this.formatDate(a));break;case 3:a.setTime(a.getTime()-2592e6),this.relativeTime.push(this.formatDate(e),this.formatDate(a));break;case 4:a.setTime(a.getTime()-7776e6),this.relativeTime.push(this.formatDate(e),this.formatDate(a));break;default:this.$message.error("搜索日期选择错误，请重新选择！或 刷新页面（F5）")}console.log("相对时间："+this.relativeTime)},submitClick:function(){console.log(this.submitForm),this.patchPostsBatch(this.submitForm)},radioChange:function(t,e){switch(t){case 0:this.submitForm[e].attributes.isApproved=1;break;case 1:this.submitForm[e].attributes.isDeleted=!0;break;case 2:this.submitForm[e].attributes.isApproved=2}},allOperationsSubmit:function(t){var e=this;switch(t){case 1:this.submitForm.forEach((function(t,a){e.submitForm[a].attributes.isApproved=1}));break;case 2:this.submitForm.forEach((function(t,a){e.submitForm[a].attributes.isDeleted=!0}));break;case 3:this.submitForm.forEach((function(t,a){e.submitForm[a].attributes.isApproved=2}))}this.patchPostsBatch(this.submitForm)},singleOperationSubmit:function(t,e,a,s){var i={type:"posts",attributes:{isApproved:0,isDeleted:!1}};switch(t){case 1:i.attributes.isApproved=1,this.patchPosts(i,a);break;case 2:i.attributes.isDeleted=!0,i.attributes.message=this.submitForm[s].attributes.message,this.patchPosts(i,a);break;case 3:i.attributes.isApproved=2,this.patchPosts(i,a);break;default:console.log("系统错误，请刷新页面")}console.log(i)},viewClick:function(t){var e=this.$router.resolve({path:"/details/"+t});window.open(e.href,"_blank")},editClick:function(t,e){console.log(t);var a=this.$router.resolve({name:"reply-to-topic",query:{themeId:t,replyId:e}});window.open(a.href,"_blank")},formatDate:function(t){return(0,n.default)(t).format("YYYY-MM-DD HH:mm")},getPostsList:function(t){var e=this;this.appFetch({url:"posts",method:"get",data:{include:["user","thread","thread.category","thread.firstPost"],"filter[isDeleted]":"no","filter[username]":this.searchUserName,"page[number]":t,"page[size]":this.pageSelect,"filter[q]":this.keyWords,"filter[isApproved]":this.searchReviewSelect,"filter[createdAtBegin]":this.relativeTime[1],"filter[createdAtEnd]":this.relativeTime[0],"filter[categoryId]":this.categoriesListSelect}}).then((function(t){console.log(t),e.themeList=[],e.submitForm=[],e.themeList=t.readdata,e.total=t.meta.postCount,e.pageCount=t.meta.pageCount,e.themeList.forEach((function(t,a){e.submitForm.push({Select:"无",radio:"",type:"posts",id:t._data.id,attributes:{isApproved:0,isDeleted:!1,message:""}})}))})).catch((function(t){console.log(t)}))},getCategories:function(){var t=this;this.appFetch({url:"categories",method:"get",data:{}}).then((function(e){t.categoriesList=[],e.data.forEach((function(e,a){t.categoriesList.push({name:e.attributes.name,id:e.id})}))})).catch((function(t){console.log(t)}))},patchPostsBatch:function(t){var e=this;this.appFetch({url:"postsBatch",method:"patch",data:{data:t}}).then((function(t){t.meta&&t.data?e.$message.error("操作失败！"):(e.getPostsList(Number(o.default.getLItem("currentPag"))||1),e.$message({message:"操作成功",type:"success"})),console.log(t)})).catch((function(t){}))},patchPosts:function(t,e){var a=this;this.appFetch({url:"posts",method:"patch",splice:"/"+e,data:{data:t}}).then((function(t){t.meta&&t.data?a.$message.error("操作失败！"):(a.getPostsList(Number(o.default.getLItem("currentPag"))||1),a.$message({message:"操作成功",type:"success"}))})).catch((function(t){console.log(t)}))}},created:function(){this.getCategories(),this.getPostsList(Number(o.default.getLItem("currentPag"))||1)},components:{Card:s.default,ContArrange:i.default,Page:r.default}}},FCu8:function(t,e,a){"use strict";a.r(e);var s=a("57Wb"),i=a.n(s);for(var r in s)"default"!==r&&function(t){a.d(e,t,(function(){return s[t]}))}(r);e.default=i.a},Q86h:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=r(a("QbLZ"));a("uwep");var i=r(a("u8Dz"));function r(t){return t&&t.__esModule?t:{default:t}}e.default=(0,s.default)({name:"cont-arrange-view"},i.default)},Skey:function(t,e,a){"use strict";a.r(e);var s=a("V71B"),i=a("FCu8");for(var r in i)"default"!==r&&function(t){a.d(e,t,(function(){return i[t]}))}(r);var o=a("KHd+"),n=Object(o.a)(i.default,s.a,s.b,!1,null,null,null);e.default=n.exports},V71B:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"reply-review-box"},[a("Card",{attrs:{header:"搜索"}}),t._v(" "),a("div",{staticClass:"cont-review-header"},[a("div",{staticClass:"cont-review-header__lf"},[a("div",[a("span",{staticClass:"cont-review-header__lf-title"},[t._v("用户名：")]),t._v(" "),a("el-input",{attrs:{size:"medium",placeholder:"搜索用户名",clearable:""},model:{value:t.searchUserName,callback:function(e){t.searchUserName=e},expression:"searchUserName"}})],1),t._v(" "),a("div",[a("span",{staticClass:"cont-review-header__lf-title"},[t._v("每页显示：")]),t._v(" "),a("el-select",{attrs:{size:"medium",placeholder:"选择每页显示"},model:{value:t.pageSelect,callback:function(e){t.pageSelect=e},expression:"pageSelect"}},t._l(t.pageOptions,(function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1)]),t._v(" "),a("div",{staticClass:"cont-review-header__rt"},[a("div",[a("span",{staticClass:"cont-review-header__lf-title"},[t._v("内容包含：")]),t._v(" "),a("el-input",{staticClass:"content-contains-input",attrs:{size:"medium",clearable:"",placeholder:"搜索关键词"},model:{value:t.keyWords,callback:function(e){t.keyWords=e},expression:"keyWords"}}),t._v(" "),a("el-checkbox",{model:{value:t.showSensitiveWords,callback:function(e){t.showSensitiveWords=e},expression:"showSensitiveWords"}},[t._v("显示敏感词")])],1),t._v(" "),a("div",{staticClass:"cont-review-header__rt-search"},[a("span",{staticClass:"cont-review-header__lf-title"},[t._v("搜索范围：")]),t._v(" "),a("el-select",{attrs:{size:"medium",placeholder:"选择审核状态"},model:{value:t.searchReviewSelect,callback:function(e){t.searchReviewSelect=e},expression:"searchReviewSelect"}},t._l(t.searchReview,(function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1),t._v(" "),a("el-select",{attrs:{size:"medium",clearable:"",placeholder:"选择搜索分类"},model:{value:t.categoriesListSelect,callback:function(e){t.categoriesListSelect=e},expression:"categoriesListSelect"}},t._l(t.categoriesList,(function(t){return a("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})})),1),t._v(" "),a("el-select",{attrs:{size:"medium",placeholder:"选择搜索时间"},on:{change:t.searchTimeChange},model:{value:t.searchTimeSelect,callback:function(e){t.searchTimeSelect=e},expression:"searchTimeSelect"}},t._l(t.searchTime,(function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1),t._v(" "),a("el-button",{attrs:{size:"small",type:"primary"},on:{click:t.postSearch}},[t._v("搜索")])],1)])]),t._v(" "),a("div",{staticClass:"cont-review-table"},[t._l(t.themeList,(function(e,s){return a("ContArrange",{key:e._data.id,attrs:{replyBy:e.user?e.user._data.username:"该用户被删除",themeName:e.thread.firstPost._data.content,finalPost:t.formatDate(e._data.createdAt),ip:e._data.ip}},[a("div",{staticClass:"cont-review-table__side",attrs:{slot:"side"},slot:"side"},[a("el-radio-group",{on:{change:function(e){return t.radioChange(e,s)}},model:{value:t.submitForm[s].radio,callback:function(e){t.$set(t.submitForm[s],"radio",e)},expression:"submitForm[index].radio"}},[a("el-radio",{attrs:{label:0}},[t._v("通过")]),t._v(" "),a("el-radio",{attrs:{label:1}},[t._v("删除")]),t._v(" "),2!==e._data.isApproved?a("el-radio",{attrs:{label:2,disabled:2===e._data.isApproved}},[t._v("忽略")]):t._e()],1)],1),t._v(" "),a("div",{staticClass:"cont-review-table__main",attrs:{slot:"main"},slot:"main"},[t._v("\n        "+t._s(e._data.content)+"\n      ")]),t._v(" "),a("div",{staticClass:"cont-review-table__footer",attrs:{slot:"footer"},slot:"footer"},[a("div",{staticClass:"cont-review-table__footer__lf"},[a("el-button",{attrs:{type:"text"},on:{click:function(a){return t.singleOperationSubmit(1,e.thread.category._data.id,e._data.id)}}},[t._v("通过")]),t._v(" "),a("i"),t._v(" "),a("el-button",{attrs:{type:"text"},on:{click:function(a){return t.singleOperationSubmit(2,e.thread.category._data.id,e._data.id,s)}}},[t._v("删除")]),t._v(" "),a("i"),t._v(" "),2!==e._data.isApproved?a("el-button",{attrs:{type:"text"},on:{click:function(a){return t.singleOperationSubmit(3,e.thread.category._data.id,e._data.id)}}},[t._v("忽略")]):t._e()],1),t._v(" "),a("div",{staticClass:"cont-review-table__footer__rt"},[a("span",[t._v("操作理由：")]),t._v(" "),a("el-input",{attrs:{size:"medium",clearable:""},model:{value:t.submitForm[s].attributes.message,callback:function(e){t.$set(t.submitForm[s].attributes,"message",e)},expression:"submitForm[index].attributes.message"}}),t._v(" "),a("el-select",{attrs:{size:"medium",placeholder:"选择操作理由"},on:{change:function(e){return t.reasonForOperationChange(e,s)}},model:{value:t.submitForm[s].Select,callback:function(e){t.$set(t.submitForm[s],"Select",e)},expression:"submitForm[index].Select"}},t._l(t.reasonForOperation,(function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),t._v(" "),a("div",{staticClass:"cont-review-table__footer__bottom"},[a("el-button",{attrs:{type:"text"},on:{click:function(a){return t.viewClick(e.thread._data.id)}}},[t._v("查看")]),t._v(" "),a("el-button",{attrs:{type:"text"},on:{click:function(a){return t.editClick(e.thread._data.id,e._data.id)}}},[t._v("编辑")])],1)])])})),t._v(" "),t.pageCount>1?a("Page",{attrs:{"current-page":t.currentPaga,"page-size":t.pageSelect,total:t.total},on:{"current-change":t.handleCurrentChange}}):t._e()],2),t._v(" "),a("div",{staticClass:"cont-review-footer footer-btn"},[a("el-button",{attrs:{size:"small",type:"primary"},on:{click:t.submitClick}},[t._v("提交")]),t._v(" "),a("el-button",{attrs:{type:"text"},on:{click:function(e){return t.allOperationsSubmit(1)}}},[t._v("全部通过")]),t._v(" "),a("el-button",{attrs:{type:"text"},on:{click:function(e){return t.allOperationsSubmit(2)}}},[t._v("全部删除")]),t._v(" "),a("el-button",{directives:[{name:"show",rawName:"v-show",value:t.ignoreStatus,expression:"ignoreStatus"}],attrs:{type:"text"},on:{click:function(e){return t.allOperationsSubmit(3)}}},[t._v("全部忽略")]),t._v(" "),a("el-checkbox",{model:{value:t.appleAll,callback:function(e){t.appleAll=e},expression:"appleAll"}},[t._v("将操作应用到其他所有页面")])],1)],1)},i=[];a.d(e,"a",(function(){return s})),a.d(e,"b",(function(){return i}))},aoOm:function(t,e,a){"use strict";a.r(e);var s=a("Q86h"),i=a.n(s);for(var r in s)"default"!==r&&function(t){a.d(e,t,(function(){return s[t]}))}(r);e.default=i.a},u8Dz:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{showContStatus:!1,showBottomStatus:!1,mainHeight:0,windowWidth:0,themeNameLeft:70,themeNameStyle:{left:"70",width:"calc(100% - "},styleobj:{color:"red",background:"red"}}},props:{},methods:{showCont:function(){this.mainHeight=this.$slots.main[0].elm.offsetHeight,this.showContStatus=!this.showContStatus;var t=this.$slots.main[0].elm.getBoundingClientRect().width;this.$slots.main[0].elm.offsetHeight+this.$slots.main[0].elm.getBoundingClientRect().top>window.innerHeight&&(this.showBottomStatus=!0,this.$refs.contControl.style.width=t+40+"PX"),this.showContStatus||(this.showBottomStatus=!1,this.$refs.contControl.style.width="100%")},handleScroll:function(){this.$refs.contControl&&(this.$refs.contControl.style.width=this.$slots.main[0].elm.getBoundingClientRect().width+40+"PX"),this.$slots.main[0].elm.offsetHeight+this.$slots.main[0].elm.getBoundingClientRect().top<window.innerHeight?this.showBottomStatus=!1:this.showContStatus&&(this.showBottomStatus=!0)},browserSize:function(){if(this.$refs.contControl){var t=this.$slots.main[0].elm.getBoundingClientRect(),e=t.width,a=t.top,s=this.$refs.contControl.style;this.showContStatus?(this.$slots.main[0].elm.offsetHeight+a>window.innerHeight?s.width=e+40+"PX":s.width="100%",this.$refs.contMain.style.height=this.$slots.main[0].elm.offsetHeight+30+"PX"):s.width="100%"}},removeScrollHandler:function(){window.removeEventListener("scroll",this.handleScroll,!0),window.removeEventListener("resize",this.browserSize,!0)},themeStyle:function(){this.themeNameStyle.left="70",this.themeNameStyle.width="calc(100% - ",this.themeNameStyle.left=70+this.$refs.userName.clientWidth+"px",this.themeNameStyle.width=this.themeNameStyle.width+(100+this.$refs.userName.clientWidth)+"px)"}},mounted:function(){this.mainHeight=this.$slots.main[0].elm.offsetHeight,window.addEventListener("scroll",this.handleScroll,!0),window.addEventListener("resize",this.browserSize,!0),this.windowWidth=window.innerWidth,this.themeStyle()},beforeDestroy:function(){this.removeScrollHandler()}}},uwep:function(t,e,a){}}]);