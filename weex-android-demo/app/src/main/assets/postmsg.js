// { "framework": "Vue"} 

!function(e){function n(c){if(l[c])return l[c].exports;var t=l[c]={i:c,l:!1,exports:{}};return e[c].call(t.exports,t,t.exports,n),t.l=!0,t.exports}var l={};n.m=e,n.c=l,n.i=function(e){return e},n.d=function(e,l,c){n.o(e,l)||Object.defineProperty(e,l,{configurable:!1,enumerable:!0,get:c})},n.n=function(e){var l=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(l,"a",l),l},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="",n(n.s=11)}([,,/*!***********************************************************************************************************************************************!*\
  !*** ./~/weex-vue-loader/lib/script-loader.js!./~/babel-loader/lib!./~/weex-vue-loader/lib/selector.js?type=script&index=0!./src/postmsg.vue ***!
  \***********************************************************************************************************************************************/
function(module,exports,__webpack_require__){"use strict";eval('\n\n//\n//\n//\n//\n//\n//\n//\n\nvar modal = weex.requireModule("modal");\nmodule.exports = {\n  data: {\n    test: "duqian2010@gmail.com"\n  },\n  methods: {\n    testToast: function testToast() {\n      modal.toast({\n        message: "test click",\n        duration: 1\n      });\n    },\n    onappear: function onappear(event) {\n      console.log("onappear:", event);\n      modal.toast({\n        message: "onappear",\n        duration: 0.8\n      });\n    },\n    ondisappear: function ondisappear(event) {\n      console.log("ondisappear:", event);\n      modal.toast({\n        message: "ondisappear",\n        duration: 0.8\n      });\n    }\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9wb3N0bXNnLnZ1ZT8xZGUzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuXG52YXIgbW9kYWwgPSB3ZWV4LnJlcXVpcmVNb2R1bGUoXCJtb2RhbFwiKTtcbm1vZHVsZS5leHBvcnRzID0ge1xuICBkYXRhOiB7XG4gICAgdGVzdDogXCJkdXFpYW4yMDEwQGdtYWlsLmNvbVwiXG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICB0ZXN0VG9hc3Q6IGZ1bmN0aW9uIHRlc3RUb2FzdCgpIHtcbiAgICAgIG1vZGFsLnRvYXN0KHtcbiAgICAgICAgbWVzc2FnZTogXCJ0ZXN0IGNsaWNrXCIsXG4gICAgICAgIGR1cmF0aW9uOiAxXG4gICAgICB9KTtcbiAgICB9LFxuICAgIG9uYXBwZWFyOiBmdW5jdGlvbiBvbmFwcGVhcihldmVudCkge1xuICAgICAgY29uc29sZS5sb2coXCJvbmFwcGVhcjpcIiwgZXZlbnQpO1xuICAgICAgbW9kYWwudG9hc3Qoe1xuICAgICAgICBtZXNzYWdlOiBcIm9uYXBwZWFyXCIsXG4gICAgICAgIGR1cmF0aW9uOiAwLjhcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgb25kaXNhcHBlYXI6IGZ1bmN0aW9uIG9uZGlzYXBwZWFyKGV2ZW50KSB7XG4gICAgICBjb25zb2xlLmxvZyhcIm9uZGlzYXBwZWFyOlwiLCBldmVudCk7XG4gICAgICBtb2RhbC50b2FzdCh7XG4gICAgICAgIG1lc3NhZ2U6IFwib25kaXNhcHBlYXJcIixcbiAgICAgICAgZHVyYXRpb246IDAuOFxuICAgICAgfSk7XG4gICAgfVxuICB9XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWV4LXZ1ZS1sb2FkZXIvbGliL3NjcmlwdC1sb2FkZXIuanMhLi9+L2JhYmVsLWxvYWRlci9saWIhLi9+L3dlZXgtdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL3NyYy9wb3N0bXNnLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///2\n')},,/*!**************************************************************************************************************************************************************************************!*\
  !*** ./~/weex-vue-loader/lib/style-loader.js!./~/weex-vue-loader/lib/style-rewriter.js?id=data-v-5e8dd298!./~/weex-vue-loader/lib/selector.js?type=styles&index=0!./src/postmsg.vue ***!
  \**************************************************************************************************************************************************************************************/
function(module,exports){eval('module.exports = {\n  "wrapper": {\n    "alignItems": "center",\n    "paddingTop": 0,\n    "color": "#FAEBD7"\n  },\n  "title": {\n    "paddingTop": 20,\n    "paddingBottom": 20,\n    "fontSize": 28,\n    "alignItems": "center",\n    "color": "#FF0000",\n    "lineHeight": 80,\n    "textAlign": "center"\n  },\n  "btn": {\n    "width": 300,\n    "backgroundColor": "#FFE4C4",\n    "fontSize": 40,\n    "alignItems": "center",\n    "textAlign": "center",\n    "paddingTop": 10,\n    "paddingRight": 10,\n    "paddingBottom": 10,\n    "paddingLeft": 10\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9wb3N0bXNnLnZ1ZT82OTk0Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0ge1xuICBcIndyYXBwZXJcIjoge1xuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiAwLFxuICAgIFwiY29sb3JcIjogXCIjRkFFQkQ3XCJcbiAgfSxcbiAgXCJ0aXRsZVwiOiB7XG4gICAgXCJwYWRkaW5nVG9wXCI6IDIwLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiAyMCxcbiAgICBcImZvbnRTaXplXCI6IDI4LFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwiY29sb3JcIjogXCIjRkYwMDAwXCIsXG4gICAgXCJsaW5lSGVpZ2h0XCI6IDgwLFxuICAgIFwidGV4dEFsaWduXCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCJidG5cIjoge1xuICAgIFwid2lkdGhcIjogMzAwLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI0ZGRTRDNFwiLFxuICAgIFwiZm9udFNpemVcIjogNDAsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJ0ZXh0QWxpZ25cIjogXCJjZW50ZXJcIixcbiAgICBcInBhZGRpbmdUb3BcIjogMTAsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogMTAsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IDEwLFxuICAgIFwicGFkZGluZ0xlZnRcIjogMTBcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWV4LXZ1ZS1sb2FkZXIvbGliL3N0eWxlLWxvYWRlci5qcyEuL34vd2VleC12dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNWU4ZGQyOTghLi9+L3dlZXgtdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3NyYy9wb3N0bXNnLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///4\n')},,,/*!***************************************************************************************************************************************************!*\
  !*** ./~/weex-vue-loader/lib/template-compiler.js?id=data-v-5e8dd298!./~/weex-vue-loader/lib/selector.js?type=template&index=0!./src/postmsg.vue ***!
  \***************************************************************************************************************************************************/
function(module,exports){eval('module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;\n  return _c(\'div\', {\n    staticClass: ["wrapper"]\n  }, [_c(\'text\', {\n    staticClass: ["title"],\n    on: {\n      "click": _vm.testToast\n    }\n  }, [_vm._v("weex page 2,  " + _vm._s(_vm.test))]), _c(\'button\', {\n    staticClass: ["btn"],\n    on: {\n      "appear": _vm.ondisappear\n    }\n  }, [_vm._v("测试appear")])], 1)\n},staticRenderFns: []}\nmodule.exports.render._withStripped = true//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9wb3N0bXNnLnZ1ZT8wOWNjIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBbXCJ3cmFwcGVyXCJdXG4gIH0sIFtfYygndGV4dCcsIHtcbiAgICBzdGF0aWNDbGFzczogW1widGl0bGVcIl0sXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogX3ZtLnRlc3RUb2FzdFxuICAgIH1cbiAgfSwgW192bS5fdihcIndlZXggcGFnZSAyLCAgXCIgKyBfdm0uX3MoX3ZtLnRlc3QpKV0pLCBfYygnYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBbXCJidG5cIl0sXG4gICAgb246IHtcbiAgICAgIFwiYXBwZWFyXCI6IF92bS5vbmRpc2FwcGVhclxuICAgIH1cbiAgfSwgW192bS5fdihcIua1i+ivlWFwcGVhclwiKV0pXSwgMSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWV4LXZ1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi01ZThkZDI5OCEuL34vd2VleC12dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9zcmMvcG9zdG1zZy52dWVcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///7\n')},,,,/*!************************************!*\
  !*** ./src/postmsg.vue?entry=true ***!
  \************************************/
function(module,exports,__webpack_require__){eval('var __vue_exports__, __vue_options__\nvar __vue_styles__ = []\n\n/* styles */\n__vue_styles__.push(__webpack_require__(/*! !weex-vue-loader/lib/style-loader!weex-vue-loader/lib/style-rewriter?id=data-v-5e8dd298!weex-vue-loader/lib/selector?type=styles&index=0!./postmsg.vue */ 4)\n)\n\n/* script */\n__vue_exports__ = __webpack_require__(/*! !weex-vue-loader/lib/script-loader!babel-loader!weex-vue-loader/lib/selector?type=script&index=0!./postmsg.vue */ 2)\n\n/* template */\nvar __vue_template__ = __webpack_require__(/*! !weex-vue-loader/lib/template-compiler?id=data-v-5e8dd298!weex-vue-loader/lib/selector?type=template&index=0!./postmsg.vue */ 7)\n__vue_options__ = __vue_exports__ = __vue_exports__ || {}\nif (\n  typeof __vue_exports__.default === "object" ||\n  typeof __vue_exports__.default === "function"\n) {\nif (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}\n__vue_options__ = __vue_exports__ = __vue_exports__.default\n}\nif (typeof __vue_options__ === "function") {\n  __vue_options__ = __vue_options__.options\n}\n__vue_options__.__file = "/Users/duqian/Downloads/Nonolive/Weex_ReactNative/weex_demo/weex-project/src/postmsg.vue"\n__vue_options__.render = __vue_template__.render\n__vue_options__.staticRenderFns = __vue_template__.staticRenderFns\n__vue_options__._scopeId = "data-v-7874c7e6"\n__vue_options__.style = __vue_options__.style || {}\n__vue_styles__.forEach(function (module) {\n  for (var name in module) {\n    __vue_options__.style[name] = module[name]\n  }\n})\nif (typeof __register_static_styles__ === "function") {\n  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)\n}\n\nmodule.exports = __vue_exports__\nmodule.exports.el = \'true\'\nnew Vue(module.exports)\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTEuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcG9zdG1zZy52dWU/OTA0NyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX192dWVfZXhwb3J0c19fLCBfX3Z1ZV9vcHRpb25zX19cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IFtdXG5cbi8qIHN0eWxlcyAqL1xuX192dWVfc3R5bGVzX18ucHVzaChyZXF1aXJlKFwiISF3ZWV4LXZ1ZS1sb2FkZXIvbGliL3N0eWxlLWxvYWRlciF3ZWV4LXZ1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyP2lkPWRhdGEtdi01ZThkZDI5OCF3ZWV4LXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9wb3N0bXNnLnZ1ZVwiKVxuKVxuXG4vKiBzY3JpcHQgKi9cbl9fdnVlX2V4cG9ydHNfXyA9IHJlcXVpcmUoXCIhIXdlZXgtdnVlLWxvYWRlci9saWIvc2NyaXB0LWxvYWRlciFiYWJlbC1sb2FkZXIhd2VleC12dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vcG9zdG1zZy52dWVcIilcblxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhd2VleC12dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtNWU4ZGQyOTghd2VleC12dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9wb3N0bXNnLnZ1ZVwiKVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fIHx8IHt9XG5pZiAoXG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJvYmplY3RcIiB8fFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIlxuKSB7XG5pZiAoT2JqZWN0LmtleXMoX192dWVfZXhwb3J0c19fKS5zb21lKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIiB9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0XG59XG5pZiAodHlwZW9mIF9fdnVlX29wdGlvbnNfXyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gIF9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX29wdGlvbnNfXy5vcHRpb25zXG59XG5fX3Z1ZV9vcHRpb25zX18uX19maWxlID0gXCIvVXNlcnMvZHVxaWFuL0Rvd25sb2Fkcy9Ob25vbGl2ZS9XZWV4X1JlYWN0TmF0aXZlL3dlZXhfZGVtby93ZWV4LXByb2plY3Qvc3JjL3Bvc3Rtc2cudnVlXCJcbl9fdnVlX29wdGlvbnNfXy5yZW5kZXIgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnJlbmRlclxuX192dWVfb3B0aW9uc19fLnN0YXRpY1JlbmRlckZucyA9IF9fdnVlX3RlbXBsYXRlX18uc3RhdGljUmVuZGVyRm5zXG5fX3Z1ZV9vcHRpb25zX18uX3Njb3BlSWQgPSBcImRhdGEtdi03ODc0YzdlNlwiXG5fX3Z1ZV9vcHRpb25zX18uc3R5bGUgPSBfX3Z1ZV9vcHRpb25zX18uc3R5bGUgfHwge31cbl9fdnVlX3N0eWxlc19fLmZvckVhY2goZnVuY3Rpb24gKG1vZHVsZSkge1xuICBmb3IgKHZhciBuYW1lIGluIG1vZHVsZSkge1xuICAgIF9fdnVlX29wdGlvbnNfXy5zdHlsZVtuYW1lXSA9IG1vZHVsZVtuYW1lXVxuICB9XG59KVxuaWYgKHR5cGVvZiBfX3JlZ2lzdGVyX3N0YXRpY19zdHlsZXNfXyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gIF9fcmVnaXN0ZXJfc3RhdGljX3N0eWxlc19fKF9fdnVlX29wdGlvbnNfXy5fc2NvcGVJZCwgX192dWVfc3R5bGVzX18pXG59XG5cbm1vZHVsZS5leHBvcnRzID0gX192dWVfZXhwb3J0c19fXG5tb2R1bGUuZXhwb3J0cy5lbCA9ICd0cnVlJ1xubmV3IFZ1ZShtb2R1bGUuZXhwb3J0cylcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3Bvc3Rtc2cudnVlP2VudHJ5PXRydWVcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///11\n')}]);