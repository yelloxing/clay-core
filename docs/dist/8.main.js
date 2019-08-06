(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{48:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return c});var l=a(1),n=a.n(l),r=a(39),p=a.n(r);class c extends n.a.Component{componentDidMount(){prettyPrint(),p()(".apimenu-item").attr("active","no"),p()("#painter").attr("active","yes")}render(){return n.a.createElement("div",{className:"container"},n.a.createElement("p",null,"画笔是image2D的主体部分，根据当前绑定的结点不同，获取的是不同类型的画笔，目前支持svg和canvas2D画笔："),n.a.createElement("pre",{className:"prettyprint lang-js"},"var painter=imageObject.painter();"),n.a.createElement("p",null,"如果维护的第一个结点是canvas，返回的就是专门在canvas上绘图的位图画笔，svg等别的类似。"),n.a.createElement("p",null,"获取画笔后就可以调用painter上的方法进行绘图了，不过在这之前，你还可以对画笔进行属性（文字大小，颜色等）配置："),n.a.createElement("pre",{className:"prettyprint lang-js"},"painter.config();"),n.a.createElement("p",null,"考虑到属性设置可能有多个或单个，为了方便，提供二种参数类型："),n.a.createElement("ul",null,n.a.createElement("li",null,"(json):一次配置多个属性，键值对的方式。"),n.a.createElement("li",null,"(key, value):对属性key设置为value。")),n.a.createElement("p",null,"不同画笔的使用大体和上面的类似，差异的部分会在具体的绘图工具下说明，下面我们来看看画笔可配置属性有哪些："),n.a.createElement("ul",null,n.a.createElement("li",null,'"fillStyle":填充色或图案，默认"#000"。'),n.a.createElement("li",null,'"strokeStyle":轮廓色或图案，默认"#000"。'),n.a.createElement("li",null,'"lineWidth":线条宽度，默认1(单位px，下同)。'),n.a.createElement("li",null,'"textAlign":文字水平对齐方式，默认"left"左对齐（还有"center"居中和"right"右对齐）。'),n.a.createElement("li",null,'"textBaseline":文字垂直对齐方式，默认"middle"垂直居中（还有"top"上对齐和"bottom"下对齐）。'),n.a.createElement("li",null,'"font-size":文字大小，默认16。'),n.a.createElement("li",null,'"font-family":字体，默认"sans-serif"。'),n.a.createElement("li",null,"\"arc-start-cap\":圆弧开始端闭合方式，默认'butt'直线闭合（还有'round'圆帽闭合）。"),n.a.createElement("li",null,'"arc-end-cap":圆弧结束端闭合方式，和上一个类似。')),n.a.createElement("h4",{className:"title small"},"位图canvas2D"),n.a.createElement("p",null,"除了上面列出的可配置项，因为canvas2D的配置是直接连原始画笔的（不是全部），因此其自身的2d画笔原来可配置的属性依旧可以配置，请知悉。这种绘图方法相对比较简单，下面我们来看看其特有的一些绘图方法。"),n.a.createElement("p",{className:"warn"},"原始画笔的意思是2d上下文，不是我们抽象的painter，因此不同的painter如果管理的是同一个canvas，属性配置不是完全独立的（后面要说明的svg就是独立的）。"),n.a.createElement("p",null,"把当前绘制的图形变成base64返回："),n.a.createElement("pre",{className:"prettyprint lang-js"},"var base64=painter.toDataURL();"),n.a.createElement("p",null,"擦除画布上正方形大小是width*height的区域(正方形左上角坐标(x, y))，x和y默认0，width和height默认就是画布的尺寸，都是可选的："),n.a.createElement("pre",{className:"prettyprint lang-js"},"painter.clearn(x, y, width, height);"),n.a.createElement("p",null,"把图像、画布或视频绘制到画布的指定位置上："),n.a.createElement("pre",{className:"prettyprint lang-js"},"painter.drawImage();"),n.a.createElement("ul",null,n.a.createElement("li",null,"(img, x, y):在画布上定位图像。"),n.a.createElement("li",null,"(img, x, y, width, height):在画布上定位图像，并规定图像的宽度和高度。"),n.a.createElement("li",null,"(img, sx, sy, swidth, sheight, x, y, width, height):剪切图像，并在画布上定位被剪切的部分。")),n.a.createElement("h4",{className:"title small"},"矢图svg"),n.a.createElement("p",null,"这种画笔比较特殊，画笔是绑定在维护了svg结点的结点对象上的，不过具体的绘制（比如文字是text标签）却需要对应更具体的标签，因此获取painter方法的时候可以传递一个选择器selector来绑定本次绘制目标（可选）："),n.a.createElement("pre",{className:"prettyprint lang-js"},"var painter=imageObject.painter(selector);"),n.a.createElement("p",null,"因为绘制文字、圆形和圆弧等对应的目标标签不一样，并且一个结点只可以绘制一个图形，因此在每次绘制前都需要明确目标结点："),n.a.createElement("pre",{className:"prettyprint lang-js"},"painter.bind(selector);"),n.a.createElement("p",null,'大部分情况下，selector应该都是模板字符串，比如"<text>"，绘制结束需要追加到svg中去，我们提供了四种追加方法：'),n.a.createElement("pre",{className:"prettyprint lang-js"},"painter.appendTo|prependTo|afterTo|beforeTo(selector);"),n.a.createElement("p",null,"因为限制了查找上下文是获取画笔的svg，只需要传递一个参数，具体方法和前面常规的结点操作一样。"),n.a.createElement("p",null,"鉴于svg绘图的特殊性，下面以绘制文字举一个例子来看看绘制整体代码："),n.a.createElement("pre",{className:"prettyprint lang-js"},"// 获取画笔\nvar painter=$$('svg').painter('<text>');\n\n// 配置画笔\npainter.config({\n    \"fillStyle\":\"red\",\n    \"font-size\":30\n});\n\n// 绘制文字并追加到画布\npainter.fillText('Step By Step', 100, 100).appendTo('g.text');"),n.a.createElement("h4",{className:"title small"},"通用绘图方法"),n.a.createElement("p",null,"上面说明的绘图方法都是具体画笔特有的（因为不同的画笔存在差异），除此之外，大部分方法是通用的。"),n.a.createElement("p",null,"在点(x, y)处绘制填充的文字text；deg表示文字旋转角度，可选："),n.a.createElement("pre",{className:"prettyprint lang-js"},"painter.fillText(text, x, y[, deg]);"),n.a.createElement("p",null,"在点(x, y)处绘制轮廓的文字text；deg表示文字旋转角度，可选："),n.a.createElement("pre",{className:"prettyprint lang-js"},"painter.strokeText(text, x, y[, deg]);"),n.a.createElement("p",null,"以(cx, cy)为圆心，内外半径分别是r1和r2，从弧度beginDeg开始，跨越弧度deg，绘制填充圆弧："),n.a.createElement("pre",{className:"prettyprint lang-js"},"painter.fillArc(cx, cy, r1, r2, beginDeg, deg);"),n.a.createElement("p",{className:"warn"},"除非特别说明，角度全部采用弧度值，这是为了方便记忆，别的地方一样。"),n.a.createElement("p",null,"和fillArc方法类似，只不过绘制的是轮廓圆弧："),n.a.createElement("pre",{className:"prettyprint lang-js"},"painter.strokeArc(cx, cy, r1, r2, beginDeg, deg);"),n.a.createElement("p",null,"以(cx, cy)为圆心，半径r绘制填充圆形："),n.a.createElement("pre",{className:"prettyprint lang-js"},"painter.fillCircle(cx, cy, r);"),n.a.createElement("p",null,"以(cx, cy)为圆心，半径r绘制轮廓圆形："),n.a.createElement("pre",{className:"prettyprint lang-js"},"painter.strokeCircle(cx, cy, r);"),n.a.createElement("p",null,"以(x, y)为左上角，宽width，高height绘制填充矩形："),n.a.createElement("pre",{className:"prettyprint lang-js"},"painter.fillRect(x, y, width, height);"),n.a.createElement("p",null,"以(x, y)为左上角，宽width，高height绘制轮廓矩形："),n.a.createElement("pre",{className:"prettyprint lang-js"},"painter.strokeRect(x, y, width, height);"),n.a.createElement("h6",{className:"title little"},"路径"),n.a.createElement("p",null,"基于路径可以绘制几乎大部分图形，这里独立一小段来说明。"),n.a.createElement("p",null,"开始一段独立的路径："),n.a.createElement("pre",{className:"prettyprint lang-js"},"painter.beginPath();"),n.a.createElement("p",null,"闭合当前路径，也就是路径首尾闭合："),n.a.createElement("pre",{className:"prettyprint lang-js"},"painter.closePath();"),n.a.createElement("p",null,"画笔移动到点(x, y)，此时笔离开了画布："),n.a.createElement("pre",{className:"prettyprint lang-js"},"painter.moveTo(x, y);"),n.a.createElement("p",null,"画笔移动到点(x, y)，此时笔没有离开画布："),n.a.createElement("pre",{className:"prettyprint lang-js"},"painter.lineTo(x, y);"),n.a.createElement("p",null,"二次贝塞尔曲线到："),n.a.createElement("pre",{className:"prettyprint lang-js"},"painter.quadraticCurveTo(cpx, cpy, x, y);"),n.a.createElement("p",{className:"warn"},"只有一个控制点p(cpx, cpy),画笔当前的位置和p(x, y)分别的起点和终点。"),n.a.createElement("p",null,"三次贝塞尔曲线到："),n.a.createElement("pre",{className:"prettyprint lang-js"},"painter.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);"),n.a.createElement("p",{className:"warn"},"有二个控制点p(cp1x, cp1y)和p(cp2x, cp2y),画笔当前的位置和p(x, y)分别的起点和终点。"),n.a.createElement("p",null,"把当前路径包裹的区域填充颜色："),n.a.createElement("pre",{className:"prettyprint lang-js"},"painter.fill();"),n.a.createElement("p",null,"把当前路径上色（轮廓线）："),n.a.createElement("pre",{className:"prettyprint lang-js"},"painter.stroke();"))}}}}]);