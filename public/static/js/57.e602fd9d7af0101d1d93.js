(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{"2AiC":function(e,a,t){"use strict";t.r(a);var r=t("LOcI"),s=t("IuSB");for(var n in s)"default"!==n&&function(e){t.d(a,e,(function(){return s[e]}))}(n);t("BYh+");var i=t("Yj/X"),c=Object(i.a)(s.default,r.a,r.b,!1,null,"2bdf3404",null);a.default=c.exports},"2NB6":function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var r=n(t("cLjf")),s=n(t("hDQ3"));n(t("VVfg"));function n(e){return e&&e.__esModule?e:{default:e}}a.default={data:function(){return{searchVal:"",userParams:{"filter[username]":"","filter[group_id]":[],"page[limit]":5,"page[number]":1,sort:"createdAt",include:"groups"},themeParamd:{include:["user","firstPost"],"filter[q]":"","filter[isDeleted]":"no","page[limit]":5,"page[number]":1},firstComeIn:!0,searchUserList:[],searchThemeList:[],userLoadMoreStatus:!1,themeLoadMoreStatus:!1,userLoadMorePageChange:!1,themeLoadMorePageChange:!1,userLoading:!1,themeLoading:!1,timerSearch:null,searchMaxSum:3}},methods:{onSearch:function(e){var a=this;if(clearTimeout(this.timerSearch),this.searchVal=e,""===this.searchVal)return this.searchUserList=[],void(this.searchThemeList=[]);this.timerSearch=setTimeout((function(){a.firstComeIn=!1,a.userParams["filter[username]"]="*"+a.searchVal+"*",a.userParams["page[number]"]=1,a.handleSearchUser(!0),a.themeParamd["filter[q]"]=a.searchVal,a.themeParamd["page[number]"]=1,a.handleSearchTheme(!0)}),200)},onCancel:function(){this.$router.push({path:"/"})},handleSearchUser:function(){var e=this,a=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return(0,s.default)(r.default.mark((function t(){var s;return r.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a&&(e.searchUserList=[]),!e.userLoading){t.next=3;break}return t.abrupt("return");case 3:return e.userLoading=!0,t.prev=4,s=e.userParams["page[number]"],t.next=8,e.appFetch({url:"users",methods:"get",data:e.userParams}).then((function(a){e.userLoadMoreStatus=a.readdata.length>e.searchMaxSum,e.searchUserList=a.readdata.splice(0,3)})).catch((function(a){e.userLoadMorePageChange&&e.userParams["page[number]"]>1&&(e.userParams["page[number]"]=s-1)}));case 8:return t.prev=8,e.userLoadMorePageChange=!1,e.userLoading=!1,t.finish(8);case 12:case"end":return t.stop()}}),t,e,[[4,,8,12]])})))()},handleLoadMoreUser:function(){this.$router.push({path:"/circle-members",query:{searchWord:this.searchVal}})},handleSearchTheme:function(){var e=this,a=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return(0,s.default)(r.default.mark((function t(){var s;return r.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a&&(e.searchThemeList=[]),!e.themeLoading){t.next=3;break}return t.abrupt("return");case 3:return e.themeLoading=!0,t.prev=4,s=e.themeParamd["page[number]"],t.next=8,e.appFetch({url:"searchThreads",method:"get",data:e.themeParamd}).then((function(a){e.themeLoadMoreStatus=a.readdata.length>e.searchMaxSum,e.searchThemeList=a.readdata.splice(0,3)})).catch((function(a){e.themeLoadMorePageChange&&e.themeParamd["page[number]"]>1&&(e.themeParamd["page[number]"]=s-1)}));case 8:return t.prev=8,e.themeLoadMorePageChange=!1,e.themeLoading=!1,t.finish(8);case 12:case"end":return t.stop()}}),t,e,[[4,,8,12]])})))()},handleLoadMoreTheme:function(){this.$router.push({path:"/theme-search",query:{searchWord:this.searchVal}})},jumpPerDet:function(e){this.$router.push({path:"/home-page/"+e})},jumpDetails:function(e){this.$router.push({path:"/details/"+e})}},mounted:function(){},beforeRouteLeave:function(e,a,t){t()}}},"8h3k":function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var r=n(t("bS4n")),s=n(t("2NB6"));function n(e){return e&&e.__esModule?e:{default:e}}t("iUmJ"),t("N960"),t("p+Ry"),a.default=(0,r.default)({name:"searchView"},s.default)},"BYh+":function(e,a,t){"use strict";var r=t("Y0G1");t.n(r).a},IuSB:function(e,a,t){"use strict";t.r(a);var r=t("8h3k"),s=t.n(r);for(var n in r)"default"!==n&&function(e){t.d(a,e,(function(){return r[e]}))}(n);a.default=s.a},LOcI:function(e,a,t){"use strict";t.d(a,"a",(function(){return r})),t.d(a,"b",(function(){return s}));var r=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"searchBox"},[t("form",{attrs:{action:"/"}},[t("van-search",{staticClass:"searchCon",attrs:{placeholder:"搜索用户和主题",background:"#f8f8f8","show-action":""},on:{input:e.onSearch,cancel:e.onCancel},model:{value:e.searchVal,callback:function(a){e.searchVal=a},expression:"searchVal"}})],1),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:e.searchUserList.length>0,expression:"searchUserList.length > 0"}],staticClass:"searchRes"},[t("h2",{staticClass:"resultTit"},[e._v("用户")]),e._v(" "),e._l(e.searchUserList,(function(a,r){return t("div",{key:r,staticClass:"resUser",on:{click:function(t){return e.jumpPerDet(a._data.id)}}},[a._data.avatarUrl?t("img",{staticClass:"resUserHead",attrs:{src:a._data.avatarUrl},on:{click:function(t){return e.jumpPerDet(a._data.id)}}}):t("img",{staticClass:"resUserHead",attrs:{src:e.appConfig.staticBaseUrl+"/images/noavatar.gif"},on:{click:function(t){return e.jumpPerDet(a._data.id)}}}),e._v(" "),t("div",{staticClass:"resUserDet"},[t("span",{staticClass:"resUserName",domProps:{innerHTML:e._s(a._data.username.replace(e.searchVal,"<i>"+e.searchVal+"</i>"))}}),e._v(" "),t("span",{staticClass:"userRole"},[e._v(e._s(a.groups[0]&&a.groups[0]._data.name))])])])})),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:e.userLoadMoreStatus,expression:"userLoadMoreStatus"}],staticClass:"searchMore",on:{click:e.handleLoadMoreUser}},[t("i",{staticClass:"icon iconfont icon-search"}),e._v("\n      搜索更多用户\n    ")])],2),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:e.searchThemeList.length>0,expression:"searchThemeList.length > 0"}],staticClass:"gap"}),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:e.searchThemeList.length>0,expression:"searchThemeList.length > 0"}],staticClass:"searchRes"},[t("h2",{staticClass:"resultTit"},[e._v("主题")]),e._v(" "),e._l(e.searchThemeList,(function(a,r){return t("div",{key:r,staticClass:"themeRes"},[t("div",{staticClass:"postTop"},[t("div",{staticClass:"postPer"},[a.user._data.avatarUrl?t("img",{staticClass:"postHead",attrs:{src:a.user._data.avatarUrl},on:{click:function(t){return e.jumpPerDet(a.user._data.id)}}}):t("img",{staticClass:"postHead",attrs:{src:e.appConfig.staticBaseUrl+"/images/noavatar.gif"},on:{click:function(t){return e.jumpPerDet(a.user._data.id)}}}),e._v(" "),t("div",{staticClass:"perDet"},[t("div",{staticClass:"perName"},[e._v(e._s(a.user._data.username))]),e._v(" "),t("div",{staticClass:"postTime"},[e._v(e._s(e.$moment(a._data.createdAt).fromNow()))])])])]),e._v(" "),t("div",{staticClass:"postContent",on:{click:function(t){return e.jumpDetails(a._data.id)}}},[t("a",{attrs:{href:"javascript:;"},domProps:{innerHTML:e._s(a._data.isLongArticle?a._data.title:a.firstPost._data.contentHtml)}}),e._v(" "),a._data.isLongArticle?t("span",{staticClass:"icon iconfont icon-longtext"}):e._e()])])})),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:e.themeLoadMoreStatus,expression:"themeLoadMoreStatus"}],staticClass:"searchMore",on:{click:e.handleLoadMoreTheme}},[t("i",{staticClass:"icon iconfont icon-search"}),e._v("\n      搜索更多主题\n    ")])],2)])},s=[]},Y0G1:function(e,a,t){},"p+Ry":function(e,a,t){}}]);