(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{35:function(a,t,c){"use strict";c.r(t);var i=c(55),e=c.n(i);c(56),e.a.render=function(a){return a("div",{class:"api-view","data-icrush-4ab8c925":""},[a("p",{"data-icrush-4ab8c925":""},["↵↵            为了绘图的方便，我们提供了最基本的结点相关操作。因为这些操作是为了绘图而开发的，可能和纯粹的结点操作方法在设计上有所不同，请知悉。↵↵        "]),a("h2",{id:"fixed-object","data-icrush-4ab8c925":""},["↵↵            结点对象↵↵        "]),a("p",{"data-icrush-4ab8c925":""},["↵↵            所有的结点操作都是由结点对象提供的，因此，我们首先来看看如何创建一个结点对象：↵↵        "]),a("div",{"ui-copy":"","data-icrush-4ab8c925":""},[a("pre",{class:"prettyprint","data-icrush-4ab8c925":""},["↵↵var imageObject=$$(selector[, context]);↵↵            "])]),a("p",{"data-icrush-4ab8c925":""},["↵↵            如上所示，通过执行$$或image2D方法即可获取一个结点对象，我们可以传递二个参数来确定当前结点对象维护的结点是哪些。↵↵        "]),a("p",{class:"warn","data-icrush-4ab8c925":""},["↵↵            结点对象维护了一些结点，调用结点对象上的方法，就是对维护的这些结点进行操作。↵↵        "]),a("p",{"data-icrush-4ab8c925":""},["↵↵            第一个参数selector（称为选择器）是必须的，用以确定当前维护的结点是哪些。↵↵        "]),a("p",{"data-icrush-4ab8c925":""},["↵↵            第二个参数context是可选的，默认选择器在全局查找，你也可以通过传递一个dom结点指定查找上下文（id选择器会忽略此参数直接在全局查找）。↵↵        "]),a("h4",{id:"fixed-selector","data-icrush-4ab8c925":""},["↵↵            选择器↵↵        "]),a("p",{"data-icrush-4ab8c925":""},["↵↵            任何合法的选择器都应该是下列中的某一种：↵↵        "]),a("ul",{"data-icrush-4ab8c925":""},[a("li",{"data-icrush-4ab8c925":""},["模板字符串，也就是直接传递html字符串。"]),a("li",{"data-icrush-4ab8c925":""},["ID选择器，比如“#demo”会选中id是“demo”的第一个标签。"]),a("li",{"data-icrush-4ab8c925":""},["class和标签选择器，比如“.cls”、“div”、“div.cls”和“g.info.warn”等。"]),a("li",{"data-icrush-4ab8c925":""},["全部选择器，也就是字符串“*”，会选中全部结点。"]),a("li",{"data-icrush-4ab8c925":""},["非查询选择器，包括：结点，结点数组和结点对象。这类选择器不会进行查找，直接把传递的结点作为维护结点，因此也会忽略查找上下文。"]),a("li",{"data-icrush-4ab8c925":""},["筛选函数，传递一个函数，函数形参是当前面对的结点，通过返回true或false来判断是否把当前面对的结点加入结点对象中。"])]),a("p",{"data-icrush-4ab8c925":""},["↵↵            创建好了结点对象以后，后续依旧可以对维护的结点进行筛选后获取新的结点对象：↵↵        "]),a("div",{"ui-copy":"","data-icrush-4ab8c925":""},[a("pre",{class:"prettyprint","data-icrush-4ab8c925":""},["↵↵var new_imageObject=imageObject.filter(filterback);↵↵            "])]),a("p",{"data-icrush-4ab8c925":""},["↵↵            返回新的结点对象，不会修改原来的结点对象。其中filterback叫做筛选函数，有二个形参，分别是当前面对结点序号和维护了当前面对结点的结点对象，通过返回true或false来判断是否把当前面对的结点加入新创建的结点对象中。↵↵        "]),a("p",{class:"warn","data-icrush-4ab8c925":""},['↵↵            特别注意：第二个参数context除了可以是dom结点外，还有二个特殊的字符串可以作为参数"html"（或"HTML"）和"svg"（或"SVG"），如果传递这二个字符串中的某个，表示把第一个参数selector作为模板字符串生成新的结点（前者生成html结点，后者生成svg结点）。↵↵        ']),a("h2",{id:"fixed-modify","data-icrush-4ab8c925":""},["↵↵            编辑↵↵        "]),a("p",{"data-icrush-4ab8c925":""},["↵↵            把当前维护的结点加到目标结点内部的结尾：↵↵        "]),a("div",{"ui-copy":"","data-icrush-4ab8c925":""},[a("pre",{class:"prettyprint","data-icrush-4ab8c925":""},["↵↵imageObject.appendTo(target[, context]);↵↵            "])]),a("p",{class:"warn","data-icrush-4ab8c925":""},['↵↵            target是一个合法的选择器即可，context是一个结点（当然，额外有二个字符串"html"和"svg"可以作为参数，和上面一样），表示目标结点查找上下文，可选，默认全局查找，下同↵↵        ']),a("p",{"data-icrush-4ab8c925":""},["↵↵            把当前维护的结点加到目标结点内部的开头：↵↵        "]),a("div",{"ui-copy":"","data-icrush-4ab8c925":""},[a("pre",{class:"prettyprint","data-icrush-4ab8c925":""},["↵↵imageObject.prependTo(target[, context]);↵↵            "])]),a("p",{"data-icrush-4ab8c925":""},["↵↵            把当前维护的结点加到目标结点之后：↵↵        "]),a("div",{"ui-copy":"","data-icrush-4ab8c925":""},[a("pre",{class:"prettyprint","data-icrush-4ab8c925":""},["↵↵imageObject.afterTo(target[, context]);↵↵            "])]),a("p",{"data-icrush-4ab8c925":""},["↵↵            把当前维护的结点加到目标结点之前：↵↵        "]),a("div",{"ui-copy":"","data-icrush-4ab8c925":""},[a("pre",{class:"prettyprint","data-icrush-4ab8c925":""},["↵↵imageObject.beforeTo(target[, context]);↵↵            "])]),a("p",{"data-icrush-4ab8c925":""},["↵↵            从页面中删除当前维护的结点：↵↵        "]),a("div",{"ui-copy":"","data-icrush-4ab8c925":""},[a("pre",{class:"prettyprint","data-icrush-4ab8c925":""},["↵↵imageObject.remove();↵↵            "])]),a("p",{"data-icrush-4ab8c925":""},["↵↵            设置或获取结点中的文本：↵↵        "]),a("div",{"ui-copy":"","data-icrush-4ab8c925":""},[a("pre",{class:"prettyprint","data-icrush-4ab8c925":""},["↵↵imageObject.text([content]);↵↵            "])]),a("h2",{id:"fixed-attribute","data-icrush-4ab8c925":""},["↵↵            样式和属性↵↵        "]),a("p",{"data-icrush-4ab8c925":""},["↵↵            修改或获取结点样式：↵↵        "]),a("div",{"ui-copy":"","data-icrush-4ab8c925":""},[a("pre",{class:"prettyprint","data-icrush-4ab8c925":""},["↵↵imageObject.css();↵↵            "])]),a("p",{"data-icrush-4ab8c925":""},["↵↵            通过不同的参数来确定是获取样式还是设置样式，具体有下列参数选项可选：↵↵        "]),a("ul",{"data-icrush-4ab8c925":""},[a("li",{"data-icrush-4ab8c925":""},["(key):获取指定样式。"]),a("li",{"data-icrush-4ab8c925":""},["(key,value):设置指定样式。"]),a("li",{"data-icrush-4ab8c925":""},["():获取全部样式。"]),a("li",{"data-icrush-4ab8c925":""},["(json):设置大量样式。"])]),a("p",{"data-icrush-4ab8c925":""},["↵↵            设置或获取结点属性：↵↵        "]),a("div",{"ui-copy":"","data-icrush-4ab8c925":""},[a("pre",{class:"prettyprint","data-icrush-4ab8c925":""},["↵↵                imageObject.attr();↵↵            "])]),a("p",{"data-icrush-4ab8c925":""},["↵↵            和样式css方法类似，也是通过具体参数来确定是获取还是设置样式：↵↵        "]),a("ul",{"data-icrush-4ab8c925":""},[a("li",{"data-icrush-4ab8c925":""},["(attr):获取属性。"]),a("li",{"data-icrush-4ab8c925":""},["(attr,value):设置指定属性值。"]),a("li",{"data-icrush-4ab8c925":""},["(json):设置大量属性。"])]),a("h2",{id:"fixed-event","data-icrush-4ab8c925":""},["↵↵            事件相关↵↵        "]),a("p",{"data-icrush-4ab8c925":""},["↵↵            给维护的结点绑定事件：↵↵        "]),a("div",{"ui-copy":"","data-icrush-4ab8c925":""},[a("pre",{class:"prettyprint","data-icrush-4ab8c925":""},["↵↵imageObject.bind(eventType, callback);↵↵            "])]),a("p",{"data-icrush-4ab8c925":""},["↵↵            获取鼠标相对当前维护的元素左上角位置：↵↵        "]),a("div",{"ui-copy":"","data-icrush-4ab8c925":""},[a("pre",{class:"prettyprint","data-icrush-4ab8c925":""},["↵↵imageObject.position(event);↵↵            "])]),a("h2",{id:"fixed-data","data-icrush-4ab8c925":""},["↵↵            数据绑定↵↵        "]),a("p",{"data-icrush-4ab8c925":""},["↵↵            绘图就离不开数据，把数据和结点关联起来，会简化结点管理和数据保存问题，这里涉及四个核心方法：data、datum、enter和exit，还有一些相关方法（因为结点对象的各个方法之间不完全是独立的）。↵↵        "]),a("p",{"data-icrush-4ab8c925":""},["↵↵            把数据绑定到一组结点或返回第一个结点数据：↵↵        "]),a("div",{"ui-copy":"","data-icrush-4ab8c925":""},[a("pre",{class:"prettyprint","data-icrush-4ab8c925":""},["↵↵imageObject.datum();↵↵            "])]),a("p",{"data-icrush-4ab8c925":""},["↵↵            通过具体的参数来判断是获取还是绑定，有下列参数选项可选：↵↵        "]),a("ul",{"data-icrush-4ab8c925":""},[a("li",{"data-icrush-4ab8c925":""},["():不带任何参数表示获取数据。"]),a("li",{"data-icrush-4ab8c925":""},["(data):带一个参数表示设置结点对象维护的全部结点数据为data。"]),a("li",{"data-icrush-4ab8c925":""},["(data, calcback):和带一个参数类似，只不过绑定的数据是经过calcback函数重新计算后返回的值，该函数有二个形参：data和index。"])]),a("p",{"data-icrush-4ab8c925":""},["↵↵            把一组数据绑定到一组结点或返回一组结点数据：↵↵        "]),a("div",{"ui-copy":"","data-icrush-4ab8c925":""},[a("pre",{class:"prettyprint","data-icrush-4ab8c925":""},["↵↵var update=imageObject.data();↵↵            "])]),a("p",{"data-icrush-4ab8c925":""},["↵↵            和上面的datum方法类似，只不过这是对一组数据进行操作，也就是data变成了数组datas，不再赘述了。↵↵        "]),a("div",{class:"enter_exit","data-icrush-4ab8c925":""},[]),a("p",{"data-icrush-4ab8c925":""},["↵↵            不过，你可能已经注意到了，data方法因为操作的是数组，数组个数和维护的结点个数不一定一样多，这样就存在平衡问题。↵↵        "]),a("p",{"data-icrush-4ab8c925":""},["↵↵            如上图所示，我们把数据和结点匹配的部分称为update（刚刚好平衡，已经更新好了的意思），数据多于结点的部分称为enter（因为绘图是根据数据来的，数据多了，应该添加结点来维持平衡），结点多于数据的部分称为exit（多余的结点删除即可）↵↵        "]),a("div",{"ui-copy":"","data-icrush-4ab8c925":""},[a("pre",{class:"prettyprint","data-icrush-4ab8c925":""},["↵↵var enter=update.enter(template[, type]);↵↵            "])]),a("p",{"data-icrush-4ab8c925":""},["↵↵            如果数据多于结点，调用enter方法，传递一个参数template（模板字符串）来把多余的数据绑定到新建立的结点上去，后续通过之前的常规结点操作追加到页面的合适位置去即可。↵↵        "]),a("p",{"data-icrush-4ab8c925":""},['↵↵            第二个参数type可选，表示第一个参数生成的结点类型，默认"svg"，表示生成svg结点，或者传递字符串"html"表示生成html结点。↵↵        ']),a("div",{"ui-copy":"","data-icrush-4ab8c925":""},[a("pre",{class:"prettyprint","data-icrush-4ab8c925":""},["↵↵var exit=update.exit();↵↵            "])]),a("p",{"data-icrush-4ab8c925":""},["↵↵            如果结点多于数据，调用exit方法获取多余的结点，然后再调用remove方法删除即可。↵↵        "]),a("p",{"data-icrush-4ab8c925":""},["↵↵            通过上面的四个主要方法，可以把数据和结点绑定起来，接下来需要思考的是如何把数据的绘图方法作用到具体的结点上去：↵↵        "]),a("div",{"ui-copy":"","data-icrush-4ab8c925":""},[a("pre",{class:"prettyprint","data-icrush-4ab8c925":""},["↵↵imageObject.loop(function(data,index,target){↵↵    // 绘制图像↵↵    // data是当前结点对象target维护的数据，index是当前结点对象序号↵↵});↵↵            "])]),a("p",{"data-icrush-4ab8c925":""},["↵↵            loop方法会把传递的绘图方法在当前结点对象维护的每一个结点上应用一次，具体的绘图方法可以根据当前面对的结点绑定的数据来绘制。↵↵        "])])},t.default=e.a},40:function(a,t,c){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(a,t){(0,e.default)("."+a).attr("active","no"),(0,e.default)("."+a+"."+t).attr("active","yes")};var i,e=(i=c(9))&&i.__esModule?i:{default:i}},41:function(a,t,c){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var a,t=(0,e.default)().fixed;t?0<(a=(0,i.default)("#fixed-"+t)).length&&i.default.animation((function(t){document.documentElement.scrollTop=a[0].offsetTop*t}),500,(function(){document.documentElement.scrollTop=a[0].offsetTop})):document.documentElement.scrollTop=0};var i=r(c(9)),e=r(c(42));function r(a){return a&&a.__esModule?a:{default:a}}},42:function(a,t,c){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var a=window.location.href.split("?")[1]||"";if(""==a)return{};var t=a.split("&"),c={};return t.forEach((function(a){var t=a.split("=");c[t[0]]=t[1]})),c}},55:function(a,t,c){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r(c(40)),e=r(c(41));function r(a){return a&&a.__esModule?a:{default:a}}t.default={created:function(){(0,i.default)("menu-2","xhtml")},mounted:function(){prettyPrint(),(0,e.default)()}}},56:function(a,t,c){var i=c(57);"string"==typeof i&&(i=[[a.i,i,""]]),i.locals&&(a.exports=i.locals),(0,c(1).default)("data-icrush-4ab8c925",i,!0)},57:function(a,t,c){t=a.exports=c(0)(!1);var i=c(5)(c(58));t.push([a.i,".enter_exit{background-image:url("+i+");height:2.2rem;background-repeat:no-repeat;background-position:left center;background-size:auto 100%}\n",""])},58:function(a,t,c){a.exports=c.p+"dist/enter_exit.png"}}]);