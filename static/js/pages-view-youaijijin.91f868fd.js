(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-view-youaijijin"],{"0d41":function(t,e,a){"use strict";var n;a("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={components:{},data:function(){return{token:"",ditaFund:{},decimals:18,userAccount:"",allNetNum:"--",personalNum:"--",isReceive:0}},onShow:function(){n=this,uni.getStorage({key:"sign",success:function(t){console.log(t.data),n.token=t.data.token,n.getDetails(t.data.token,t.data.addr)}})},methods:{showDrawer:function(){this.$refs[this.showLeft].open()},getDetails:function(t,e){uni.request({url:this.$url+"/info/fund_management",data:{addr:e,token:t},method:"POST",header:{"Content-Type":"application/x-www-form-urlencoded\t"},success:function(t){console.log("↓↓工作室详情数据↓↓"),console.log(t),200==t.data.code?(n.allNetNum=t.data.data.total_num,n.personalNum=t.data.data.personal_num,n.isReceive=t.data.data.is_receive):uni.showToast({title:t.data.msg,icon:"none"})}})}},filters:{getNum:function(t){return Math.floor(1e6*t)/1e6}}};e.default=i},"17ab":function(t,e,a){"use strict";a.r(e);var n=a("0d41"),i=a.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(o);e["default"]=i.a},"209a":function(t,e,a){"use strict";a.r(e);var n=a("2da5"),i=a("17ab");for(var o in i)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(o);a("458a");var c=a("f0c5"),s=Object(c["a"])(i["default"],n["b"],n["c"],!1,null,"2142c82c",null,!1,n["a"],void 0);e["default"]=s.exports},"29db":function(t,e,a){var n=a("4864");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("f5be1760",n,!0,{sourceMap:!1,shadowMode:!1})},"2da5":function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{},[n("v-uni-view",{staticClass:"content"},[n("v-uni-view",{staticClass:"cont1"},[n("v-uni-image",{attrs:{src:a("660a"),mode:"widthFix"}}),n("v-uni-view",{staticClass:"all-num"},[t._v(t._s(t._f("getNum")(t.allNetNum)))])],1),n("v-uni-view",{staticClass:"cont2"},[n("v-uni-image",{attrs:{src:a("a0eb"),mode:"widthFix"}}),n("v-uni-view",{staticClass:"personal"},[n("v-uni-view",{staticClass:"personal-title"},[t._v("个人奖励:")]),n("v-uni-view",{staticClass:"personal-num"},[t._v(t._s(t._f("getNum")(t.personalNum))),n("v-uni-text",{staticClass:"coin-name"},[t._v("UXUN")])],1),n("v-uni-view",{staticClass:"receive-btn",class:{received:0==t.isReceive}},[0==t.isReceive?n("v-uni-text",[t._v("待领取")]):n("v-uni-text",[t._v("领取")])],1)],1)],1),n("v-uni-view",{staticClass:"gzs-rule"},[n("v-uni-text",{staticStyle:{"font-size":"30upx"}},[t._v("考核标准：")]),n("br"),t._v("V2级别、场地40平米，全网每日业绩的0.05%，\n\t\t\t所有服务中心每日平分")],1)],1)],1)},i=[]},"458a":function(t,e,a){"use strict";var n=a("29db"),i=a.n(n);i.a},4864:function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,"uni-image[data-v-2142c82c]{width:100%;height:100%;vertical-align:middle}.flex[data-v-2142c82c]{display:flex;justify-content:space-between;align-items:center}.cont1[data-v-2142c82c]{width:92%;position:relative;margin:%?20?% auto;z-index:2}.all-num[data-v-2142c82c]{font-size:%?96?%;font-weight:900;background-image:linear-gradient(90deg,#f2cb69,#f6e0a5);-webkit-background-clip:text;background-clip:text;color:transparent;width:100%;position:absolute;bottom:10%;left:0;text-align:center}.cont2[data-v-2142c82c]{width:104%;margin:%?-140?% auto 0 -2%;z-index:1}.personal[data-v-2142c82c]{position:absolute;width:70%;top:25%;left:15%;color:#ea0000}.personal-title[data-v-2142c82c]{font-size:%?34?%}.personal-num[data-v-2142c82c]{text-align:center;font-size:%?50?%;font-weight:700;line-height:%?150?%}.coin-name[data-v-2142c82c]{font-size:%?30?%;margin-left:%?10?%}.receive-btn[data-v-2142c82c]{width:65%;margin:0 auto;background-image:linear-gradient(0deg,#f2cb69,#f6e0a5);border-radius:%?100?%;line-height:%?90?%;color:#000;text-align:center;font-size:%?36?%}.received[data-v-2142c82c]{background-image:none;background-color:#d8d8d8;color:#000}.gzs-rule[data-v-2142c82c]{width:82%;margin:%?-80?% auto 0 auto;line-height:%?55?%;font-size:%?28?%}",""]),t.exports=e},"660a":function(t,e,a){t.exports=a.p+"static/img/yajj-bg1.688ab2bb.png"},a0eb:function(t,e,a){t.exports=a.p+"static/img/yajj-bg2.5bfdcf20.png"}}]);