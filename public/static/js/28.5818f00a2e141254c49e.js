(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{"5W5W":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"cont-arrange-box"},[a("div",{staticClass:"cont-arrange-main"},[a("div",{staticClass:"cont-arrange__lf-side"},[t._t("side")],2),t._v(" "),a("main",{staticClass:"cont-arrange__rt-main"},[a("div",{staticClass:"cont-arrange__rt-main-header"},[a("div",{staticClass:"cont-arrange__rt-main-header__release"},[t.$attrs.author?a("p",{ref:"userName"},[t._v(t._s(t.$attrs.author))]):t._e(),t._v(" "),t.$attrs.replyBy?a("p",{ref:"userName"},[t._v(t._s(t.$attrs.replyBy))]):t._e(),t._v(" "),t.$attrs.author?a("span",[t._v("发布于")]):t._e(),t._v(" "),t.$attrs.replyBy?a("span",[t._v("回复主题")]):t._e(),t._v(" "),t.$attrs.theme?a("p",[t._v(t._s(t.$attrs.theme))]):t._e(),t._v(" "),t.$attrs.themeName?a("p",{ref:"themeName",class:t.$attrs.themeName?"themeName":"",style:t.themeNameStyle},[t._v("123"+t._s(t.$attrs.themeName))]):t._e()]),t._v(" "),t.$attrs.prply>=0&&t.$attrs.browse>=0?a("div",{staticClass:"cont-arrange__rt-main-header__reply-view rt-box"},[a("span",[t._v("回复/查看：")]),t._v(" "),a("span",[t._v(t._s(t.$attrs.prply)+"/"+t._s(t.$attrs.browse))])]):t._e(),t._v(" "),t.$attrs.last?a("div",{staticClass:"cont-arrange__rt-main-header__last-reply rt-box"},[a("span",[t._v("最后回复：")]),t._v(" "),a("span",[t._v(t._s(t.$attrs.last))])]):t._e(),t._v(" "),t.$attrs.ip?a("div",{staticClass:" rt-box"},[a("span",[t._v("IP：")]),t._v(" "),a("span",[t._v(t._s(t.$attrs.ip))])]):t._e(),t._v(" "),t.$attrs.finalPost?a("div",{staticClass:"cont-arrange__rt-main-header__release-time rt-box"},[a("span",[t._v("发布时间：")]),t._v(" "),a("span",[t._v(t._s(t.$attrs.finalPost))])]):t._e(),t._v(" "),t.$attrs.deleTime?a("div",{staticClass:" rt-box"},[a("span",[t._v("删除时间：")]),t._v(" "),a("span",[t._v(t._s(t.$attrs.deleTime))])]):t._e(),t._v(" "),t._t("header")],2),t._v(" "),a("div",{ref:"contMain",staticClass:"cont-arrange__rt-main-box",style:{height:t.showContStatus?t.mainHeight+30+"px":t.mainHeight>78?"78PX":""}},[t._t("main")],2),t._v(" "),t.mainHeight>78?a("div",{ref:"contControl",staticClass:"cont-block-control",class:t.showBottomStatus?"is-bottom-out":"",on:{click:t.showCont}},[a("p",[a("span",{staticClass:"iconfont icondown-menu",class:t.showContStatus?"show-down":""}),t._v("\n          "+t._s(t.showContStatus?"收起详情":"展开详情")+"\n        ")])]):t._e(),t._v(" "),t.$slots.footer?a("div",{staticClass:"cont-arrange__rt-main-footer"},[t._t("footer")],2):t._e()])])])},n=[];a.d(e,"a",(function(){return s})),a.d(e,"b",(function(){return n}))},Dt3C:function(t,e,a){"use strict";a.r(e);var s=a("5W5W"),n=a("aoOm");for(var i in n)"default"!==i&&function(t){a.d(e,t,(function(){return n[t]}))}(i);var o=a("KHd+"),r=Object(o.a)(n.default,s.a,s.b,!1,null,null,null);e.default=r.exports},DvCQ:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i(a("QbLZ"));a("cajz");var n=i(a("MW2h"));function i(t){return t&&t.__esModule?t:{default:t}}e.default=(0,s.default)({name:"cont-manage-view"},n.default)},MW2h:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=l(a("4gYi")),n=l(a("Dt3C")),i=l(a("wd/R")),o=l(a("VVfg")),r=a("L2JU");function l(t){return t&&t.__esModule?t:{default:t}}e.default={data:function(){return{operatingList:[{name:"批量移动到分类",label:"class"},{name:"批量置顶",label:"sticky"},{name:"批量删除",label:"delete"},{name:"批量设置精华",label:"marrow"}],operatingSelect:"",categoriesList:[],categoryId:"",toppingRadio:2,essenceRadio:2,checkAll:!1,checkAllNum:0,themeListAll:[],checkedTheme:[],isIndeterminate:!1,themeList:[],currentPag:1,total:0,pageCount:1}},computed:(0,r.mapState)({searchData:function(t){return t.admin.searchData}}),methods:{handleCheckAllChange:function(t){console.log(this.themeListAll),console.log(t),this.checkedTheme=t?this.themeListAll:[],this.isIndeterminate=!1},handleCheckedCitiesChange:function(t,e,a){var s=this.checkedTheme.length;this.checkAll=s===this.themeListAll.length,this.isIndeterminate=s>0&&s<this.themeListAll.length},formatDate:function(t){return(0,i.default)(t).format("YYYY-MM-DD HH:mm")},submitClick:function(){var t=this,e=[],a={},s={category:{data:{id:""}}},n=!1;switch(this.operatingSelect){case"class":this.categoryId?s.category.data.id=this.categoryId:n=!0;break;case"sticky":a.isSticky=1===this.toppingRadio;break;case"delete":a.isDeleted=!0;break;case"marrow":a.isEssence=1===this.essenceRadio;break;default:n=!0,console.log("操作选项错误，请重新选择或刷新页面(F5)"),this.$message({showClose:!0,message:"操作选项错误，请重新选择或刷新页面(F5)",type:"warning"})}"class"===this.operatingSelect?this.checkedTheme.forEach((function(t,n){e.push({type:"threads",id:t,attributes:a,relationships:s})})):this.checkedTheme.forEach((function(t,s){e.push({type:"threads",id:t,attributes:a})})),e.length<1?this.$message({showClose:!0,message:"主题列表为空，请选择主题",type:"warning"}):n||this.appFetch({url:"threads/batch",method:"patch",data:{data:e}}).then((function(e){e.meta&&e.data?(t.checkedTheme=[],t.$message.error("操作失败！")):(t.pageCount<3&&(t.currentPag=1,o.default.setLItem("currentPag",1)),t.getThemeList(Number(o.default.getLItem("currentPag"))||1),t.isIndeterminate=!1,t.checkAll=!1,t.checkedTheme=[],t.$message({message:"操作成功",type:"success"}))})).catch((function(t){console.log(t)}))},handleSizeChange:function(t){console.log("每页 "+t+" 条")},handleCurrentChange:function(t){o.default.setLItem("currentPag",t),this.isIndeterminate=!1,this.checkAll=!1,this.getThemeList(t)},getThemeList:function(t){var e=this,a=this.searchData;this.appFetch({url:"threads",method:"get",data:{"filter[isDeleted]":"no","filter[isApproved]":"1","filter[username]":a.themeAuthor,"filter[categoryId]":a.categoryId,"page[number]":t,"page[size]":a.pageSelect,"filter[q]":a.themeKeyWords,"filter[createdAtBegin]":a.dataValue[0],"filter[createdAtEnd]":a.dataValue[1],"filter[viewCountGt]":a.viewedTimesMin,"filter[viewCountLt]":a.viewedTimesMax,"filter[postCountGt]":a.numberOfRepliesMin,"filter[postCountLt]":a.numberOfRepliesMax,"filter[isEssence]":a.essentialTheme,"filter[isSticky]":a.topType}}).then((function(t){console.log(t),e.themeList=t.readdata,e.total=t.meta.threadCount,e.pageCount=t.meta.pageCount,e.themeListAll=[],e.themeList.forEach((function(t,a){e.themeListAll.push(t._data.id)}))})).catch((function(t){console.log(t)}))},getCategories:function(){var t=this;this.appFetch({url:"categories",method:"get",data:{}}).then((function(e){e.data.forEach((function(e,a){t.categoriesList.push({name:e.attributes.name,id:e.id})}))})).catch((function(t){console.log(t)}))}},beforeUpdate:function(){o.default.setLItem("currentPag",this.currentPag)},beforeDestroy:function(){o.default.setLItem("currentPag",1)},created:function(){this.currentPag=Number(o.default.getLItem("currentPag"))||1,this.getThemeList(Number(o.default.getLItem("currentPag"))||1),this.getCategories()},components:{Card:s.default,ContArrange:n.default}}},OFsA:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"cont-manage-box"},[a("div",{staticClass:"cont-manage-theme"},[a("div",{staticClass:"cont-manage-theme__table"},[a("div",{staticClass:"cont-manage-theme__table-header"},[a("el-checkbox",{attrs:{indeterminate:t.isIndeterminate},on:{change:t.handleCheckAllChange},model:{value:t.checkAll,callback:function(e){t.checkAll=e},expression:"checkAll"}}),t._v(" "),a("p",{staticClass:"cont-manage-theme__table-header__title"},[t._v("主题列表")])],1),t._v(" "),t._l(t.themeList,(function(e,s){return a("ContArrange",{key:e._data.id,attrs:{author:e.user?e.user._data.username:"该用户被删除",theme:e.category._data.name,prply:e._data.postCount,browse:e._data.viewCount,last:e.lastPostedUser?e.lastPostedUser._data.username:"该用户被删除",finalPost:t.formatDate(e._data.createdAt)}},[a("div",{staticClass:"cont-manage-theme__table-side",attrs:{slot:"side"},slot:"side"},[a("el-checkbox",{attrs:{label:e._data.id},on:{change:function(e){return t.handleCheckedCitiesChange()}},model:{value:t.checkedTheme,callback:function(e){t.checkedTheme=e},expression:"checkedTheme"}})],1),t._v(" "),a("div",{staticStyle:{"line-height":"20PX"},attrs:{slot:"main"},slot:"main"},[t._v("\n          "+t._s(e.firstPost._data.content)+"\n        ")])])})),t._v(" "),t.themeList.length<1?a("div",{staticClass:"cont-manage-theme__table-no-data"},[a("p",[t._v("暂无数据")])]):t._e(),t._v(" "),t.pageCount>1?a("div",{staticClass:"cont-manage-theme__table-footer"},[a("el-pagination",{attrs:{"current-page":t.currentPag,"page-size":parseInt(t.searchData.pageSelect),layout:"total, prev, pager, next,jumper",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.currentPag=e},"update:current-page":function(e){t.currentPag=e}}})],1):t._e()],2)]),t._v(" "),a("div",{staticClass:"cont-manage-operating"},[a("p",[t._v("操作")]),t._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.operatingList,"tooltip-effect":"dark"}},[a("el-table-column",{attrs:{"label-class-name":"cont-manage-operating__table-label",label:"操作",prop:"theme",width:"250"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-radio",{attrs:{label:e.row.label},model:{value:t.operatingSelect,callback:function(e){t.operatingSelect=e},expression:"operatingSelect"}},[t._v(t._s(e.row.name))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"选项","min-width":"250"},scopedSlots:t._u([{key:"default",fn:function(e){return["批量移动到分类"===e.row.name?a("el-select",{attrs:{placeholder:"选择分类"},model:{value:t.categoryId,callback:function(e){t.categoryId=e},expression:"categoryId"}},t._l(t.categoriesList,(function(t){return a("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})})),1):t._e(),t._v(" "),"批量置顶"===e.row.name?a("el-radio-group",{staticClass:"cont-manage__option-select",model:{value:t.toppingRadio,callback:function(e){t.toppingRadio=e},expression:"toppingRadio"}},[a("el-radio",{attrs:{label:1}},[t._v("置顶")]),t._v(" "),a("el-radio",{attrs:{label:2}},[t._v("解除置顶")])],1):t._e(),t._v(" "),"批量设置精华"===e.row.name?a("el-radio-group",{staticClass:"cont-manage__option-select",model:{value:t.essenceRadio,callback:function(e){t.essenceRadio=e},expression:"essenceRadio"}},[a("el-radio",{attrs:{label:1}},[t._v("精华")]),t._v(" "),a("el-radio",{attrs:{label:2}},[t._v("取消精华")])],1):t._e()]}}])})],1),t._v(" "),a("Card",{staticClass:"footer-btn"},[a("el-button",{attrs:{type:"primary"},on:{click:t.submitClick}},[t._v("提交")])],1)],1)])},n=[];a.d(e,"a",(function(){return s})),a.d(e,"b",(function(){return n}))},Q86h:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i(a("QbLZ"));a("uwep");var n=i(a("u8Dz"));function i(t){return t&&t.__esModule?t:{default:t}}e.default=(0,s.default)({name:"cont-arrange-view"},n.default)},WONP:function(t,e,a){"use strict";a.r(e);var s=a("OFsA"),n=a("fthR");for(var i in n)"default"!==i&&function(t){a.d(e,t,(function(){return n[t]}))}(i);var o=a("KHd+"),r=Object(o.a)(n.default,s.a,s.b,!1,null,null,null);e.default=r.exports},aoOm:function(t,e,a){"use strict";a.r(e);var s=a("Q86h"),n=a.n(s);for(var i in s)"default"!==i&&function(t){a.d(e,t,(function(){return s[t]}))}(i);e.default=n.a},fthR:function(t,e,a){"use strict";a.r(e);var s=a("DvCQ"),n=a.n(s);for(var i in s)"default"!==i&&function(t){a.d(e,t,(function(){return s[t]}))}(i);e.default=n.a},u8Dz:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{showContStatus:!1,showBottomStatus:!1,mainHeight:0,windowWidth:0,themeNameLeft:70,themeNameStyle:{left:"70",width:"calc(100% - "},styleobj:{color:"red",background:"red"}}},props:{},methods:{showCont:function(){this.mainHeight=this.$slots.main[0].elm.offsetHeight,this.showContStatus=!this.showContStatus;var t=this.$slots.main[0].elm.getBoundingClientRect().width;this.$slots.main[0].elm.offsetHeight+this.$slots.main[0].elm.getBoundingClientRect().top>window.innerHeight&&(this.showBottomStatus=!0,this.$refs.contControl.style.width=t+40+"PX"),this.showContStatus||(this.showBottomStatus=!1,this.$refs.contControl.style.width="100%")},handleScroll:function(){this.$refs.contControl&&(this.$refs.contControl.style.width=this.$slots.main[0].elm.getBoundingClientRect().width+40+"PX"),this.$slots.main[0].elm.offsetHeight+this.$slots.main[0].elm.getBoundingClientRect().top<window.innerHeight?this.showBottomStatus=!1:this.showContStatus&&(this.showBottomStatus=!0)},browserSize:function(){if(this.$refs.contControl){var t=this.$slots.main[0].elm.getBoundingClientRect(),e=t.width,a=t.top,s=this.$refs.contControl.style;this.showContStatus?(this.$slots.main[0].elm.offsetHeight+a>window.innerHeight?s.width=e+40+"PX":s.width="100%",this.$refs.contMain.style.height=this.$slots.main[0].elm.offsetHeight+30+"PX"):s.width="100%"}},removeScrollHandler:function(){window.removeEventListener("scroll",this.handleScroll,!0),window.removeEventListener("resize",this.browserSize,!0)},themeStyle:function(){this.themeNameStyle.left="70",this.themeNameStyle.width="calc(100% - ",this.themeNameStyle.left=70+this.$refs.userName.clientWidth+"px",this.themeNameStyle.width=this.themeNameStyle.width+(100+this.$refs.userName.clientWidth)+"px)"}},mounted:function(){this.mainHeight=this.$slots.main[0].elm.offsetHeight,window.addEventListener("scroll",this.handleScroll,!0),window.addEventListener("resize",this.browserSize,!0),this.windowWidth=window.innerWidth,this.themeStyle()},beforeDestroy:function(){this.removeScrollHandler()}}},uwep:function(t,e,a){}}]);