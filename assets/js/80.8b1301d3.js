(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{386:function(t,n,e){"use strict";e.r(n);var c=e(1),_=Object(c.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"content"},[e("p",[t._v("主要内容在中间1200px部分，背景通过css控制:")]),t._v(" "),e("p",[t._v("footer{width:100%; background:#ccc;}")]),t._v(" "),e("p",[t._v("但在缩小浏览器宽度小于1200px时候，下方出现滚动轴，拉伸到右侧可以看到背景空白部分，不是所愿。")]),t._v(" "),e("p",[t._v("搬运其他解释：")]),t._v(" "),e("p",[t._v("问题的根本在于：当窗口缩小时，浏览器默认100%宽度为浏览器窗口的宽度。而忽略了下部内容层固定宽度(1200px)。从而出现了固定宽度大于100%宽度的现象。浏览以此理解来解析页面，就出现了容器宽度理解上的差异，出现了一个非常奇特的BUG。")]),t._v(" "),e("p",[t._v("问题的解决之道：既然是宽度理解上的差异，只需要告知浏览器页面容器的宽度，底部元素的宽度不能小于内容层的宽度即可。当浏览器窗口缩小时，保持页面容器和头部元素的最小宽度为内容层的宽度。")]),t._v(" "),e("p",[t._v("这边设置，body{min-width:1200px;}可以解决此问题。")])])}],!1,null,null,null);n.default=_.exports}}]);