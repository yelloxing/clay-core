(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{33:function(t,e,a){"use strict";a.r(e);var i=a(73),n=a(44);for(var r in n)"default"!==r&&function(t){a.d(e,t,(function(){return n[t]}))}(r);a(63);var o=a(8),l=Object(o.a)(n.default,i.a,i.b,!1,null,"4fd47a46",null);l.options.__file="src/pages/api.vue",e.default=l.exports},40:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){prettyPrint(),1==arguments.length?((0,n.default)("li",document.getElementById("topHeader")).attr("active","no"),(0,n.default)("#"+t).attr("active","yes")):2==arguments.length&&"api"==t&&((0,n.default)("li.apimenu-item",document.getElementById("api-nav")).attr("active","no"),(0,n.default)("#"+e).attr("active","yes"))};var i,n=(i=a(12))&&i.__esModule?i:{default:i}},44:function(t,e,a){"use strict";a.r(e);var i=a(45),n=a.n(i);for(var r in i)"default"!==r&&function(t){a.d(e,t,(function(){return i[t]}))}(r);e.default=n.a},45:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=r(a(40)),n=r(a(12));function r(t){return t&&t.__esModule?t:{default:t}}e.default={methods:{doScroll:function(){var t=document.documentElement.scrollTop||document.body.scrollTop;document.getElementById("api-nav").style.top=70<t?t-70+"px":"0px"},goItem:function(t,e){(0,n.default)("li.item",this.$refs.apiNav).attr("active","no"),window.location.href="#/api/"+(0,n.default)(t).attr("name"),window.setTimeout((function(){(0,n.default)(t).attr("active","yes"),document.documentElement.scrollTop=(0,n.default)(".title.small")[e-1].offsetTop}),200)}},mounted:function(){(0,i.default)("api"),window.addEventListener("scroll",this.doScroll),document.getElementsByTagName("title")[0].innerText="文档 | image2D"},destroyed:function(){window.removeEventListener("scroll",this.doScroll)}}},46:function(t,e,a){var i=a(64);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals),(0,a(6).default)("935a1880",i,!1,{})},63:function(t,e,a){"use strict";var i=a(46);a.n(i).a},64:function(t,e,a){e=t.exports=a(5)(!1);var i=a(13)(a(65));e.push([t.i,'div[data-v-4fd47a46]{font-size:0}div>*[data-v-4fd47a46]{display:inline-block;font-size:0.16rem;vertical-align:top}div>ul[data-v-4fd47a46]{width:1.4rem;padding:0.3rem 0.1rem;position:relative;max-height:calc(100vh - 2rem);overflow-y:scroll}div>ul>li[data-v-4fd47a46]{color:#a7a0a0}div>ul>li>a[data-v-4fd47a46]{width:100%;display:inline-block;text-align:left;line-height:2em;font-size:0.14rem;color:inherit}div>ul>li[active="yes"]>a[data-v-4fd47a46]{color:#711e32}div>ul>li.item[data-v-4fd47a46]{cursor:pointer;line-height:1.8em;padding-left:1em;font-size:0.13rem}div>ul>li.item[active="yes"][data-v-4fd47a46]{color:#711e32}div>div[data-v-4fd47a46]{width:calc(100% - 1.4rem);padding:0.1rem}div>div[data-v-4fd47a46] .container{width:100%;line-height:2em}div>div[data-v-4fd47a46] .container>pre{font-size:0.14rem}div>div[data-v-4fd47a46] .container>.title{font-weight:800;line-height:2em;padding:0.4rem 0 0.2rem;margin-top:-0.3rem}div>div[data-v-4fd47a46] .container>.title.big{font-size:0.18rem;color:#cb538b}div>div[data-v-4fd47a46] .container>.title.small{font-size:0.16rem;color:#cb538b}div>div[data-v-4fd47a46] .container>.title.little{font-size:0.14rem;color:#85a646}div>div[data-v-4fd47a46] .container>.title.sub-little{font-size:0.12rem;color:#f00}div>div[data-v-4fd47a46] .container>p{text-indent:2em;font-size:0.14rem;font-weight:600}div>div[data-v-4fd47a46] .container>p>a{text-indent:0;color:#ac2c23;text-decoration:underline}div>div[data-v-4fd47a46] .container>p.warn{background-image:url('+i+');background-repeat:no-repeat;background-size:auto 0.21rem;font-size:0.12rem;color:#dac305;font-weight:400}div>div[data-v-4fd47a46] .container>p.nav-footer>a.pre,div>div[data-v-4fd47a46] .container>p.nav-footer>a.next{padding:0.1rem 0.5rem;text-decoration:none}div>div[data-v-4fd47a46] .container>p.nav-footer>a.pre::before,div>div[data-v-4fd47a46] .container>p.nav-footer>a.pre::after,div>div[data-v-4fd47a46] .container>p.nav-footer>a.next::before,div>div[data-v-4fd47a46] .container>p.nav-footer>a.next::after{display:inline-block;width:1.5em;height:1.5em}div>div[data-v-4fd47a46] .container>p.nav-footer>a.pre{float:left}div>div[data-v-4fd47a46] .container>p.nav-footer>a.pre::before{content:"←";text-align:left}div>div[data-v-4fd47a46] .container>p.nav-footer>a.next{float:right}div>div[data-v-4fd47a46] .container>p.nav-footer>a.next::after{content:"→";text-align:right}div>div[data-v-4fd47a46] .container>ul{margin-left:5em;font-size:0.13rem;line-height:2.4em}div>div[data-v-4fd47a46] .container>ul>li{list-style-type:decimal}\n',""])},65:function(t,e,a){t.exports=a.p+"dist/warn.png"},73:function(t,e,a){"use strict";function i(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("ul",{ref:"apiNav",attrs:{id:"api-nav"}},[a("li",{staticClass:"apimenu-item",attrs:{id:"how-to-use"}},[a("router-link",{attrs:{to:"/api/how-to-use"}},[t._v("如何使用")])],1),t._v(" "),a("li",{staticClass:"item",attrs:{name:"how-to-use"},on:{click:function(e){return t.goItem(e.target,1)}}},[t._v("关注的问题")]),t._v(" "),a("li",{staticClass:"item",attrs:{name:"how-to-use"},on:{click:function(e){return t.goItem(e.target,2)}}},[t._v("使用")]),t._v(" "),a("li",{staticClass:"item",attrs:{name:"how-to-use"},on:{click:function(e){return t.goItem(e.target,3)}}},[t._v("获取帮助")]),t._v(" "),a("li",{staticClass:"apimenu-item",attrs:{id:"xhtml"}},[a("router-link",{attrs:{to:"/api/xhtml"}},[t._v("结点操作")])],1),t._v(" "),a("li",{staticClass:"item",attrs:{name:"xhtml"},on:{click:function(e){return t.goItem(e.target,1)}}},[t._v("结点对象")]),t._v(" "),a("li",{staticClass:"item",attrs:{name:"xhtml"},on:{click:function(e){return t.goItem(e.target,2)}}},[t._v("编辑")]),t._v(" "),a("li",{staticClass:"item",attrs:{name:"xhtml"},on:{click:function(e){return t.goItem(e.target,3)}}},[t._v("样式和属性")]),t._v(" "),a("li",{staticClass:"item",attrs:{name:"xhtml"},on:{click:function(e){return t.goItem(e.target,4)}}},[t._v("事件相关")]),t._v(" "),a("li",{staticClass:"item",attrs:{name:"xhtml"},on:{click:function(e){return t.goItem(e.target,5)}}},[t._v("数据绑定")]),t._v(" "),a("li",{staticClass:"apimenu-item",attrs:{id:"painter"}},[a("router-link",{attrs:{to:"/api/painter"}},[t._v("画笔")])],1),t._v(" "),a("li",{staticClass:"item",attrs:{name:"painter"},on:{click:function(e){return t.goItem(e.target,1)}}},[t._v("canvas2D")]),t._v(" "),a("li",{staticClass:"item",attrs:{name:"painter"},on:{click:function(e){return t.goItem(e.target,2)}}},[t._v("svg")]),t._v(" "),a("li",{staticClass:"item",attrs:{name:"painter"},on:{click:function(e){return t.goItem(e.target,3)}}},[t._v("绘图方法")]),t._v(" "),a("li",{staticClass:"item",attrs:{name:"painter"},on:{click:function(e){return t.goItem(e.target,4)}}},[t._v("渐变色")]),t._v(" "),a("li",{staticClass:"item",attrs:{name:"painter"},on:{click:function(e){return t.goItem(e.target,5)}}},[t._v("变换")]),t._v(" "),a("li",{staticClass:"apimenu-item",attrs:{id:"calculate"}},[a("router-link",{attrs:{to:"/api/calculate"}},[t._v("计算")])],1),t._v(" "),a("li",{staticClass:"item",attrs:{name:"calculate"},on:{click:function(e){return t.goItem(e.target,1)}}},[t._v("二维坐标变换")]),t._v(" "),a("li",{staticClass:"item",attrs:{name:"calculate"},on:{click:function(e){return t.goItem(e.target,2)}}},[t._v("矩阵坐标变换")]),t._v(" "),a("li",{staticClass:"item",attrs:{name:"calculate"},on:{click:function(e){return t.goItem(e.target,3)}}},[t._v("曲线插值")]),t._v(" "),a("li",{staticClass:"item",attrs:{name:"calculate"},on:{click:function(e){return t.goItem(e.target,4)}}},[t._v("布局")]),t._v(" "),a("li",{staticClass:"item",attrs:{name:"calculate"},on:{click:function(e){return t.goItem(e.target,5)}}},[t._v("动画轮询")]),t._v(" "),a("li",{staticClass:"apimenu-item",attrs:{id:"tool"}},[a("router-link",{attrs:{to:"/api/tool"}},[t._v("补充")])],1),t._v(" "),a("li",{staticClass:"item",attrs:{name:"tool"},on:{click:function(e){return t.goItem(e.target,1)}}},[t._v("图层")])]),t._v(" "),a("div",[a("router-view")],1)])}var n=[];i._withStripped=!0,a.d(e,"a",(function(){return i})),a.d(e,"b",(function(){return n}))}}]);