(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{366:function(s,t,a){"use strict";a.r(t);var e=a(1),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"content"},[s._m(0),s._v(" "),s._m(1),a("p",[s._v("主要时由浏览器的 API 访问限制引起\n"),a("a",{attrs:{href:"https://vuepress.vuejs.org/zh/guide/using-vue.html#%E6%B5%8F%E8%A7%88%E5%99%A8%E7%9A%84-api-%E8%AE%BF%E9%97%AE%E9%99%90%E5%88%B6",target:"_blank",rel:"noopener noreferrer"}},[s._v("文档"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("如果你正在使用，或者需要展示一个对于 SSR 不怎么友好的组件（比如包含了自定义指令），你可以将它们包裹在内置的 "),a("ClientOnly",[s._v(" 组件中：")])],1),s._v(" "),s._m(2),s._m(3),s._v(" "),s._m(4),s._m(5),s._m(6),s._v(" "),s._m(7),a("p",[s._v("应该是依赖项版本不同")]),s._v(" "),s._m(8),s._m(9),s._v(" "),s._m(10),a("p",[s._v("应该是版本不对")]),s._v(" "),s._m(11),a("p",[a("a",{attrs:{href:"https://www.jianshu.com/p/b0714a60b52f",target:"_blank",rel:"noopener noreferrer"}},[s._v("原文"),a("OutboundLink")],1)])])}),[function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"_1-使用自定义指令时build后报错"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-使用自定义指令时build后报错"}},[this._v("#")]),this._v(" 1. 使用自定义指令时build后报错")])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[this._v("npm")]),this._v(" run build\nError: render "),t("span",{pre:!0,attrs:{class:"token keyword"}},[this._v("function")]),this._v(" or template not defined "),t("span",{pre:!0,attrs:{class:"token keyword"}},[this._v("in")]),this._v(" component: BlogList\n")])])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"language-vue extra-class"},[a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("ClientOnly")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("NonSSRFriendlyComponent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("/>")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("ClientOnly")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"_2-can-t-resolve-sass-loader"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-can-t-resolve-sass-loader"}},[this._v("#")]),this._v(" 2. Can't resolve 'sass-loader'")])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[this._v("npm")]),this._v(" run dev\nvuepress Can"),t("span",{pre:!0,attrs:{class:"token string"}},[this._v("'t resolve '")]),this._v("sass-loader'\n")])])])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("//需要安装依赖项\n"),t("span",{pre:!0,attrs:{class:"token function"}},[this._v("yarn")]),this._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[this._v("add")]),this._v(" -D sass-loader node-sass\n")])])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"_3-vue-packages-version-mismatch"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-vue-packages-version-mismatch"}},[this._v("#")]),this._v(" 3. Vue packages version mismatch:")])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[this._v("npm")]),this._v(" run build\nVue packages version mismatch:\n- vue@2.5.21\n- vue-server-renderer@2.5.22\nThis may cause things to work incorrectly. \nMake sure to use the same version "),t("span",{pre:!0,attrs:{class:"token keyword"}},[this._v("for")]),this._v(" both.\n")])])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("//在package.json中强制制定版本\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"devDependencies"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vue-server-renderer"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"^2.5.21"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n//或者 更新vue\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" vue -g\n")])])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"_4-vue-loader报错"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-vue-loader报错"}},[this._v("#")]),this._v(" 4.vue-loader报错")])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[this._v("npm")]),this._v(" run build\nError: "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v("[")]),this._v("vue-loader"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v("]")]),this._v(" vue-template-compiler must be installed \nas a peer dependency, or a compatible compiler implementation\nmust be passed via options.\n")])])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("//package.json 将2.5.21 改为\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"devDependencies"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vue-template-compiler"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"^2.5.22"')]),s._v(",\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])])}],!1,null,null,null);t.default=n.exports}}]);