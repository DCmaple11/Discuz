(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{"2AiC":function(e,a,t){"use strict";t.r(a);var s=t("XWvy"),r=t("IuSB");for(var n in r)"default"!==n&&function(e){t.d(a,e,(function(){return r[e]}))}(n);t("J8h2");var i=t("KHd+"),o=Object(i.a)(r.default,s.a,s.b,!1,null,"a85f113c",null);a.default=o.exports},"2NB6":function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=n(t("14Xm")),r=n(t("D3Ub"));n(t("VVfg"));function n(e){return e&&e.__esModule?e:{default:e}}a.default={data:function(){return{searchVal:"",userParams:{"filter[username]":this.searchVal,"filter[group_id]":[],"filter[bind]":1,"page[limit]":5,"page[number]":this.pageNumber,sort:"-createdAt",include:"groups"},themeParamd:{"filter[q]":this.searchVal,"filter[isDeleted]":"no","page[limit]":5,"page[number]":this.pageNumber},firstComeIn:!0,searchUserList:[],searchThemeList:[],userLoadMoreStatus:!1,themeLoadMoreStatus:!1,userLoadMorePageChange:!1,themeLoadMorePageChange:!1,userLoading:!1,themeLoading:!1,timerSearch:null,pageNumber:1}},methods:{onSearch:function(e){var a=this;if(clearTimeout(this.timerSearch),this.searchVal=e,""===this.searchVal)return this.searchUserList=[],void(this.searchThemeList=[]);this.timerSearch=setTimeout((function(){a.firstComeIn=!1,a.userParams["filter[username]"]=a.searchVal,a.userParams["page[number]"]=1,a.handleSearchUser(!0),a.themeParamd["filter[q]"]=a.searchVal,a.themeParamd["page[number]"]=1,a.handleSearchTheme(!0)}),200)},onCancel:function(){this.$router.push({path:"/"})},handleSearchUser:function(){var e=this,a=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return(0,r.default)(s.default.mark((function t(){var r;return s.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a&&(e.searchUserList=[]),!e.userLoading){t.next=3;break}return t.abrupt("return");case 3:return e.userLoading=!0,t.prev=4,r=e.userParams["page[number]"],t.next=8,e.appFetch({url:"users",methods:"get",data:e.userParams}).then((function(a){e.searchUserList=e.searchUserList.concat(a.readdata),e.userLoadMoreStatus=a.readdata.length<e.userParams["page[limit]"]})).catch((function(a){e.userLoadMorePageChange&&e.userParams["page[number]"]>1&&(e.userParams["page[number]"]=r-1)}));case 8:return t.prev=8,e.userLoadMorePageChange=!1,e.userLoading=!1,t.finish(8);case 12:case"end":return t.stop()}}),t,e,[[4,,8,12]])})))()},handleLoadMoreUser:function(){this.pageNumber++,console.log(this.userParams["page[number]"]++),this.userLoadMorePageChange=!0,this.handleSearchUser()},handleSearchTheme:function(){var e=this,a=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return(0,r.default)(s.default.mark((function t(){var r;return s.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a&&(e.searchThemeList=[]),!e.themeLoading){t.next=3;break}return t.abrupt("return");case 3:return e.themeLoading=!0,t.prev=4,r=e.themeParamd["page[number]"],t.next=8,e.appFetch({url:"searchThreads",method:"get",data:{include:["user","firstPost"],"filter[q]":e.searchVal,"filter[isDeleted]":"no","page[limit]":5,"page[number]":e.pageNumber}}).then((function(a){e.searchThemeList=e.searchThemeList.concat(a.readdata),e.themeLoadMoreStatus=a.readdata.length<e.themeParamd["page[limit]"]})).catch((function(a){e.themeLoadMorePageChange&&e.themeParamd["page[number]"]>1&&(e.themeParamd["page[number]"]=r-1)}));case 8:return t.prev=8,e.themeLoadMorePageChange=!1,e.themeLoading=!1,t.finish(8);case 12:case"end":return t.stop()}}),t,e,[[4,,8,12]])})))()},handleLoadMoreTheme:function(){this.pageNumber++,this.themeLoadMorePageChange=!0,this.handleSearchTheme()}},mounted:function(){},beforeRouteLeave:function(e,a,t){t()}}},IuSB:function(e,a,t){"use strict";t.r(a);var s=t("ZxSw"),r=t.n(s);for(var n in s)"default"!==n&&function(e){t.d(a,e,(function(){return s[e]}))}(n);a.default=r.a},J8h2:function(e,a,t){"use strict";var s=t("lhk5");t.n(s).a},XWvy:function(e,a,t){"use strict";var s=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"searchBox"},[t("form",{attrs:{action:"/"}},[t("van-search",{staticClass:"searchCon",attrs:{placeholder:"搜索用户和主题",background:"#f8f8f8","show-action":""},on:{input:e.onSearch,cancel:e.onCancel},model:{value:e.searchVal,callback:function(a){e.searchVal=a},expression:"searchVal"}})],1),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:e.searchUserList.length>0,expression:"searchUserList.length > 0"}],staticClass:"searchRes"},[t("h2",{staticClass:"resultTit"},[e._v("用户")]),e._v(" "),e._l(e.searchUserList,(function(a,s){return t("div",{key:s,staticClass:"resUser"},[t("img",{staticClass:"resUserHead",attrs:{src:e.appConfig.staticBaseUrl+"/images/noavatar.gif"}}),e._v(" "),t("div",{staticClass:"resUserDet"},[t("span",{staticClass:"resUserName",domProps:{innerHTML:e._s(a._data.username.replace(e.searchVal,"<i>"+e.searchVal+"</i>"))}}),e._v(" "),t("span",{staticClass:"userRole"},[e._v(e._s(a.groups[0]&&a.groups[0]._data.name))])])])})),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:!e.userLoadMoreStatus,expression:"!userLoadMoreStatus"}],staticClass:"searchMore",on:{click:e.handleLoadMoreUser}},[t("i",{staticClass:"icon iconfont icon-search"}),e._v("\n      搜索更多用户\n    ")])],2),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:e.searchThemeList.length>0,expression:"searchThemeList.length > 0"}],staticClass:"gap"}),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:e.searchThemeList.length>0,expression:"searchThemeList.length > 0"}],staticClass:"searchRes"},[t("h2",{staticClass:"resultTit"},[e._v("主题")]),e._v(" "),e._l(e.searchThemeList,(function(a,s){return t("div",{key:s,staticClass:"themeRes"},[t("div",{staticClass:"postTop"},[t("div",{staticClass:"postPer"},[t("img",{staticClass:"postHead",attrs:{src:e.appConfig.staticBaseUrl+"/images/noavatar.gif"}}),e._v(" "),t("div",{staticClass:"perDet"},[t("div",{staticClass:"perName"},[e._v(e._s(a.user._data.username))]),e._v(" "),t("div",{staticClass:"postTime"},[e._v(e._s(e.$moment(a._data.createdAt).startOf("hour").fromNow()))])])])]),e._v(" "),t("div",{staticClass:"postContent"},[t("a",{attrs:{href:"javascript:;"}},[e._v(e._s(a.firstPost._data&&a.firstPost._data.content))])])])})),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:!e.themeLoadMoreStatus,expression:"!themeLoadMoreStatus"}],staticClass:"searchMore",on:{click:e.handleLoadMoreTheme}},[t("i",{staticClass:"icon iconfont icon-search"}),e._v("\n      搜索更多主题\n    ")])],2)])},r=[];t.d(a,"a",(function(){return s})),t.d(a,"b",(function(){return r}))},ZxSw:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=n(t("QbLZ"));t("E2jd");var r=n(t("2NB6"));function n(e){return e&&e.__esModule?e:{default:e}}a.default=(0,s.default)({name:"searchView"},r.default)},lhk5:function(e,a,t){}}]);