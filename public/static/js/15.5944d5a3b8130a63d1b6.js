(window.webpackJsonp=window.webpackJsonp||[]).push([[15,4,7,11],{"/4Rx":function(e,t,a){"use strict";var n=function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"table-cont-add-box"},[t("p",{on:{click:this.tableContAddClick}},[t("span",{staticClass:"iconfont iconicon_add icon-add"}),this._v(" "),t("span",[this._v(this._s(this.$attrs.cont))])])])},r=[];a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return r}))},"4U6O":function(e,t,a){"use strict";var n=function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"page-box"},[t("el-pagination",{attrs:{"current-page":this.currentPags,"page-size":this.pageSize,layout:"total, prev, pager, next,jumper",total:this.total},on:{"current-change":this.handleCurrentChange}})],1)},r=[];a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return r}))},"8QIg":function(e,t,a){"use strict";a.r(t);var n=a("spHY"),r=a("dXwq");for(var l in r)"default"!==l&&function(e){a.d(t,e,(function(){return r[e]}))}(l);var u=a("KHd+"),o=Object(u.a)(r.default,n.a,n.b,!1,null,null,null);t.default=o.exports},GHol:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=l(a("QbLZ"));a("nwgc");var r=l(a("mHKG"));function l(e){return e&&e.__esModule?e:{default:e}}t.default=(0,n.default)({name:"table-cont-add-view"},r.default)},MTZ4:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=l(a("QbLZ"));a("twg7");var r=l(a("xlY0"));function l(e){return e&&e.__esModule?e:{default:e}}t.default=(0,n.default)({name:"page"},r.default)},VNy1:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=l(a("QbLZ")),r=l(a("qP3n"));function l(e){return e&&e.__esModule?e:{default:e}}a("zt69"),t.default=(0,n.default)({name:"content-filtering-set-view"},r.default)},dXwq:function(e,t,a){"use strict";a.r(t);var n=a("VNy1"),r=a.n(n);for(var l in n)"default"!==l&&function(e){a.d(t,e,(function(){return n[e]}))}(l);t.default=r.a},kAKY:function(e,t,a){"use strict";a.r(t);var n=a("/4Rx"),r=a("uHrf");for(var l in r)"default"!==l&&function(e){a.d(t,e,(function(){return r[e]}))}(l);var u=a("KHd+"),o=Object(u.a)(r.default,n.a,n.b,!1,null,null,null);t.default=o.exports},lxGk:function(e,t,a){"use strict";a.r(t);var n=a("MTZ4"),r=a.n(n);for(var l in n)"default"!==l&&function(e){a.d(t,e,(function(){return n[e]}))}(l);t.default=r.a},mHKG:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{}},methods:{tableContAddClick:function(){this.$emit("tableContAddClick")}}}},nwgc:function(e,t,a){},qP3n:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=c(a("14Xm")),r=c(a("D3Ub")),l=c(a("4gYi")),u=c(a("pNQN")),o=c(a("kAKY")),s=c(a("rWG0")),i=c(a("VVfg"));function c(e){return e&&e.__esModule?e:{default:e}}t.default={data:function(){return{tableData:[],multipleSelection:[],tableDataLength:"",createCategoriesStatus:!1,options:[{value:"{IGNORE}",label:"不处理"},{value:"{MOD}",label:"审核"},{value:"{BANNED}",label:"禁用"},{value:"{REPLACE}",label:"替换"}],optionsUser:[{value:"{IGNORE}",label:"不处理"},{value:"{BANNED}",label:"禁用"},{value:"{MOD}",label:"审核"}],serachVal:"",checked:!1,searchData:[],replace:!0,inputFind:!1,radio2:"1",total:0,pageLimit:20,pageNum:0,userLoadMoreStatus:!0,userLoadMorePageChange:!1,deleteStatus:!0,deleteList:[],tableAdd:!1}},created:function(){this.handleSearchUser(!0)},beforeRouteEnter:function(e,t,a){a((function(a){e.name!==t.name&&null!==t.name?(console.log("执行"),a.getCreated(!0)):(console.log("不执行"),a.getCreated(!1))}))},methods:{getCreated:function(e){e?(console.log(e),this.pageNum=1):(console.log(e),this.pageNum=Number(i.default.getLItem("currentPag"))||1),this.handleSearchUser(!0)},toggleSelection:function(e){var t=this;e?e.forEach((function(e){t.$refs.multipleTable.toggleRowSelection(e)})):this.$refs.multipleTable.clearSelection()},handleSelectionChange:function(e){this.multipleSelection=e,console.log(this.multipleSelection,"this.multipleSelection"),this.multipleSelection.length>=1?this.deleteStatus=!1:this.deleteStatus=!0},onSearch:function(e){this.searchVal=e,this.pageNum=1,console.log(this.serachVal,"5555555555555555"),this.handleSearchUser(!0)},handleSearchUser:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return(0,r.default)(n.default.mark((function a(){var r;return n.default.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,e.appFetch({url:"serachWords",method:"get",data:{"filter[q]":e.serachVal,"page[limit]":e.pageLimit,"page[number]":e.pageNum}});case 3:(r=a.sent).errors?e.$message.error(r.errors[0].code):(t&&(e.tableData=[]),e.tableData=e.tableData.concat(r.readdata).map((function(t){return void 0===t._data.inputVal&&(t._data.inputVal=""),console.log(r),e.total=r.meta.total,t})),console.log(e.tableData)),a.next=9;break;case 7:a.prev=7,a.t0=a.catch(0);case 9:return a.prev=9,e.userLoadMorePageChange=!1,a.finish(9);case 12:case"end":return a.stop()}}),a,e,[[0,7,9,12]])})))()},handleLoadMoreUser:function(){this.userLoadMorePageChange=!0,this.handleSearchUser()},selectChange:function(e){console.log(e,"scope"),e&&"{REPLACE}"!==e.row._data.ugc&&"{REPLACE}"!==e.row._data.username&&(this.tableData[e.$index]._data.inputVal="")},loginStatus:function(){var e=this;return(0,r.default)(n.default.mark((function t(){var a,r,l,u,o,s,i,c,d;return n.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.tableData.filter((function(e){return e._data.addInputFlag})).concat(e.multipleSelection),t.prev=2,0!==e.tableData.length){t.next=5;break}return t.abrupt("return");case 5:a=[],r=0,l=e.tableData.length;case 7:if(!(r<l)){t.next=18;break}if(u=e.tableData[r]._data,o=u.ugc,s=u.username,i=u.find,""!==(c=u.inputVal)||"{REPLACE}"!==o||"{REPLACE}"!==s){t.next=12;break}return t.abrupt("continue",15);case 12:d="","{REPLACE}"===o&&"{REPLACE}"===s?d=i+"="+c:"{REPLACE}"===o&&"{REPLACE}"!==s?d=i+"="+s+"|"+c:"{REPLACE}"===s&&"{REPLACE}"!==o?d=i+"="+c+"|"+o:"{REPLACE}"!==s&&"{REPLACE}"!==o&&(d=i+"="+o+"|"+s),a.push(d);case 15:r++,t.next=7;break;case 18:if(0!==a.length){t.next=20;break}return t.abrupt("return");case 20:return t.next=22,e.appFetch({url:"batchSubmit",method:"post",standard:!1,data:{data:{type:"stop-words",words:a,overwrite:!0}}});case 22:console.log(e.pageNum,"页码页码页码"),e.handleSearchUser(!0),e.$message({message:"提交成功",type:"success"}),t.next=30;break;case 27:t.prev=27,t.t0=t.catch(2),console.error(t.t0,"function loginStatus error");case 30:case"end":return t.stop()}}),t,e,[[2,27]])})))()},tableContAdd:function(){this.tableData.push({_data:{find:"",username:"",ugc:"",inputVal:"",addInputFlag:!0}}),this.tableAdd=!0},deleteWords:function(){var e=this;this.deleteList=[];for(var t=0;t<this.multipleSelection.length;t++)this.deleteList.push(this.multipleSelection[t]._data.id);console.log(this.deleteList.join(",")),this.appFetch({url:"deleteWords",method:"delete",splice:this.deleteList.join(","),data:{}}).then((function(t){t.errors?e.$message.error(t.errors[0].code):e.handleSearchUser(!0),console.log(t)}))},handleCurrentChange:function(e){this.pageNum=e,this.handleSearchUser(!0)}},components:{Card:l.default,CardRow:u.default,TableContAdd:o.default,Page:s.default}}},rWG0:function(e,t,a){"use strict";a.r(t);var n=a("4U6O"),r=a("lxGk");for(var l in r)"default"!==l&&function(e){a.d(t,e,(function(){return r[e]}))}(l);var u=a("KHd+"),o=Object(u.a)(r.default,n.a,n.b,!1,null,null,null);t.default=o.exports},spHY:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content-filter-set-box"},[a("div",{staticClass:"content-filter-set__search"},[a("Card",[a("el-input",{staticClass:"el-cascader__search-input",attrs:{size:"medium",clearable:"",placeholder:"搜索过滤词"},model:{value:e.serachVal,callback:function(t){e.serachVal=t},expression:"serachVal"}}),e._v(" "),a("el-button",{staticClass:"content-filter-set__search-button",attrs:{size:"medium"},on:{click:e.onSearch}},[e._v("搜索")])],1)],1),e._v(" "),a("main",{staticClass:"content-filter-set-main"},[a("p",{staticClass:"list-set-box"},[a("span",{on:{click:function(t){return e.$router.push({path:"/admin/add-sensitive-words"})}}},[e._v("批量添加")]),e._v(" "),a("a",{attrs:{href:"https://2020.comsenz-service.com/api/stop-words/export"}},[e._v("导出过滤词库")])]),e._v(" "),a("div",[a("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:e.tableData,"tooltip-effect":"dark"},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"50"}}),e._v(" "),a("el-table-column",{attrs:{label:"过滤词"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n            "+e._s(t.row._data.addInputFlag?"":t.row._data.find)+"\n            "),a("el-input",{directives:[{name:"show",rawName:"v-show",value:t.row._data.addInputFlag,expression:"scope.row._data.addInputFlag"}],attrs:{splaceholder:"请输入过滤词",clearable:""},model:{value:t.row._data.find,callback:function(a){e.$set(t.row._data,"find",a)},expression:"scope.row._data.find"}})]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"主题和回复处理方式"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-select",{attrs:{placeholder:"请选择"},on:{change:function(a){return e.selectChange(t)}},model:{value:t.row._data.ugc,callback:function(a){e.$set(t.row._data,"ugc",a)},expression:"scope.row._data.ugc"}},e._l(e.options,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"address",label:"用户名处理方式"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-select",{attrs:{placeholder:"请选择"},on:{change:function(a){return e.selectChange(t)}},model:{value:t.row._data.username,callback:function(a){e.$set(t.row._data,"username",a)},expression:"scope.row._data.username"}},e._l(e.optionsUser,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"address",label:"过滤词替换"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-input",{directives:[{name:"show",rawName:"v-show",value:e.replace,expression:"replace"}],attrs:{placeholder:"请输入替换内容",disabled:"{REPLACE}"!==t.row._data.ugc&&"{REPLACE}"!==t.row._data.username,clearable:""},model:{value:t.row._data.inputVal,callback:function(a){e.$set(t.row._data,"inputVal",a)},expression:"scope.row._data.inputVal"}})]}}])})],1),e._v(" "),a("TableContAdd",{attrs:{cont:"新增"},on:{tableContAddClick:e.tableContAdd}}),e._v(" "),a("Page",{attrs:{total:e.total,pageSize:e.pageLimit,currentPage:e.pageNum},on:{"current-change":e.handleCurrentChange}})],1),e._v(" "),a("Card",{staticClass:"footer-btn"},[a("el-button",{attrs:{type:"primary",size:"medium"},on:{click:e.loginStatus}},[e._v("提交")]),e._v(" "),a("el-button",{attrs:{size:"medium",disabled:e.deleteStatus},on:{click:e.deleteWords}},[e._v("删除")])],1)],1)])},r=[];a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return r}))},twg7:function(e,t,a){},uHrf:function(e,t,a){"use strict";a.r(t);var n=a("GHol"),r=a.n(n);for(var l in n)"default"!==l&&function(e){a.d(t,e,(function(){return n[e]}))}(l);t.default=r.a},xlY0:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a("VVfg"),l=(n=r)&&n.__esModule?n:{default:n};t.default={data:function(){return{currentPags:this.currentPage}},props:{total:Number,pageSize:{type:Number,default:10},currentPage:{type:Number,default:1}},methods:{handleCurrentChange:function(e){l.default.setLItem("currentPag",e),this.$emit("current-change",e)}},beforeUpdate:function(){this.currentPags=Number(l.default.getLItem("currentPag"))||1,l.default.setLItem("currentPag",this.currentPags)},beforeDestroy:function(){l.default.setLItem("currentPag",1),this.currentPags=1},created:function(){this.currentPags=Number(l.default.getLItem("currentPag"))||1}}},zt69:function(e,t,a){}}]);