webpackJsonp([1],{

/***/ 24:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(75)
}
var Component = __webpack_require__(6)(
  /* script */
  __webpack_require__(53),
  /* template */
  __webpack_require__(78),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 25:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(6)(
  /* script */
  __webpack_require__(54),
  /* template */
  __webpack_require__(79),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Hello__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Hello___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_Hello__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__templates_not_find__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__templates_not_find___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__templates_not_find__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_echarts__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_echarts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__components_echarts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__templates_index__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__templates_index___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__templates_index__);






__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
  routes: [{
    path: '*',
    name: '*',
    component: __WEBPACK_IMPORTED_MODULE_3__templates_not_find___default.a
  }, {
    path: '/',
    name: 'index',
    component: __WEBPACK_IMPORTED_MODULE_5__templates_index___default.a
  }, {
    path: '/echarts',
    component: __WEBPACK_IMPORTED_MODULE_4__components_echarts___default.a
  }, {
    path: '/hello',
    component: __WEBPACK_IMPORTED_MODULE_2__components_Hello___default.a
  }]
}));

/***/ }),

/***/ 28:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(6)(
  /* script */
  __webpack_require__(52),
  /* template */
  __webpack_require__(80),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Hello_vue__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Hello_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_Hello_vue__);
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      num: 3
    };
  },

  components: {
    Hello: __WEBPACK_IMPORTED_MODULE_0__components_Hello_vue___default.a
  }
});

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['value'],
  data: function data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    };
  },

  methods: {
    a: function a() {
      this.$emit('input', 9);
      //this.value=11;
      //num.v=3
    },
    formatter: function formatter(h, _ref) {
      var column = _ref.column,
          $index = _ref.$index;

      //console.log(h)
      //  return h('div',{

      //       },[
      //         h('p',{
      //         style:{
      //           border:'1px solid #f66'
      //         },
      //         on:{
      //           click(){
      //             alert(2)
      //           }
      //         },
      //         value:222
      //       }),
      //     h('p',1),
      //     h('p',1),
      //     h(
      //     'el-button',
      //     {
      //       props: {
      //         content: '222',
      //         effect: 'dark',
      //         placement: 'top'
      //       }
      //     })

      //   ])
      // }
      var children = [];
      children.push(h('p', {
        style: {
          background: '#f66'
        }
      }, 1)); //组件1
      children.push(h('p', {}, 333)); //组件2
      children.push(h('p', {})); //组件3
      return h('div', {}, children);
    }
  }
});

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
	name: '',
	props: ['option', 'config'],
	data: function data() {
		return {
			message: '没有更新',
			echarts: null,
			scriptTagStatus: 0
		};
	},

	watch: {
		option: {
			handler: function handler(newValue) {
				this.echarts.setOption(newValue);
			},

			deep: true
		},
		config: {
			handler: function handler(newValue) {
				if (newValue.loading) {
					this.echarts.hideLoading();
				} else {
					this.echarts.showLoading();
				}
			},

			deep: true
		}
	},
	created: function created() {
		if (window.echarts !== undefined) {
			this.scriptTagStatus = 1;
			this.initEcharts();
		} else {
			this.insertScriptTag();
		}
		console.log(this);
	},

	methods: {
		insertScriptTag: function insertScriptTag() {
			var _this = this;

			console.log(this.config.path);
			var script = document.createElement('script');
			script.src = "/static/lib/echarts.min.js";
			document.body.appendChild(script);
			if (script.loaded) {
				this.scriptTagStatus += 1;
			} else {
				script.addEventListener('load', function () {
					script.loaded = true;
					_this.scriptTagStatus += 1;
					_this.initEcharts();
				});
			}
			this.initEcharts();
		},
		initEcharts: function initEcharts() {
			var _this2 = this;

			if (this.scriptTagStatus === 1 && this.echarts === null) {
				// Vue 异步执行 DOM 更新，这样一来代码执行到这里的时候可能 template 里面的 script 标签还没真正创建
				// 所以，我们只能在 nextTick 里面初始化 UEditor
				this.$nextTick(function () {
					window.addEventListener('load', function () {
						_this2.$emit('ready', _this2.echarts);
					});
					var echartsWrapDom = _this2.$refs.main;
					_this2.echarts = window.echarts.init(echartsWrapDom);
					console.log(_this2.echarts.showLoading());
				});
			}
		}
	}
});

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_echarts_vue__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_echarts_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_echarts_vue__);
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'index',
    data: function data() {
        return {
            option: {
                title: {
                    text: 'ECharts 入门示例'
                },
                tooltip: {},
                legend: {
                    data: ['销量']
                },
                xAxis: {
                    data: []
                },
                yAxis: {},
                series: [{
                    name: '销量',
                    type: 'bar',
                    data: [5, 20, 36, 10, 10, 20]
                }]
            },
            echartsConfig: {
                loading: false,
                path: '../lib/echarts.min.js'
            }
        };
    },
    created: function created() {
        var _this = this;

        setTimeout(function () {
            _this.option.xAxis.data = ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"];
            _this.echartsConfig.loading = true;
        }, 2000);
    },

    components: {
        Echarts: __WEBPACK_IMPORTED_MODULE_0__components_echarts_vue___default.a
    },
    watch: {
        option: function option() {
            console.log(this);
        },
        a: function a() {
            console.log(this);
        }
    },
    methods: {
        initEcharts: function initEcharts(value) {
            //console.log(value)
        },
        change: function change() {
            var _this2 = this;

            this.echartsConfig.loading = false;
            setTimeout(function () {
                _this2.echartsConfig.loading = true;
                _this2.option.xAxis.data = ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋"];
                _this2.option.series = [{
                    name: '销量',
                    type: 'bar',
                    data: [5, 20, 36, 10, 10]
                }];
            }, 2000);
        }
    }
});

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__App__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_element_ui__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_element_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_element_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_element_ui_lib_theme_default_index_css__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_element_ui_lib_theme_default_index_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_element_ui_lib_theme_default_index_css__);
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.






__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_3_element_ui___default.a);
__WEBPACK_IMPORTED_MODULE_0_vue__["default"].config.productionTip = false;

/* eslint-disable no-new */
new __WEBPACK_IMPORTED_MODULE_0_vue__["default"]({
  el: '#app',
  router: __WEBPACK_IMPORTED_MODULE_2__router__["a" /* default */],
  template: '<App/>',
  components: { App: __WEBPACK_IMPORTED_MODULE_1__App___default.a }
});

/***/ }),

/***/ 75:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 76:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(6)(
  /* script */
  __webpack_require__(55),
  /* template */
  __webpack_require__(81),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 77:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(6)(
  /* script */
  null,
  /* template */
  __webpack_require__(82),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 78:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "hello"
  }, [_c('h1', {
    on: {
      "click": _vm.a
    }
  }, [_vm._v(_vm._s(_vm.msg))]), _vm._v("\n  " + _vm._s(_vm.value) + "\n  "), _c('div'), _vm._v(" "), _c('hr'), _vm._v(" "), _c('el-table', {
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "data": _vm.tableData,
      "border": ""
    }
  }, [_c('el-table-column', {
    attrs: {
      "prop": "date",
      "label": "日期",
      "render-header": _vm.formatter,
      "width": "180"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "name",
      "label": "姓名",
      "width": "180"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "address",
      "label": "地址"
    }
  })], 1)], 1)
},staticRenderFns: []}

/***/ }),

/***/ 79:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_vm._v("\n\t" + _vm._s(_vm.option) + "\n\t"), _c('div', {
    ref: "main",
    staticStyle: {
      "width": "auto",
      "height": "400px"
    }
  })])
},staticRenderFns: []}

/***/ }),

/***/ 80:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "app"
    }
  }, [_c('router-view')], 1)
},staticRenderFns: []}

/***/ }),

/***/ 81:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {}, [_c('echarts', {
    attrs: {
      "config": _vm.echartsConfig,
      "option": _vm.option
    },
    on: {
      "ready": _vm.initEcharts
    }
  }), _vm._v(" "), _c('el-button', {
    on: {
      "click": _vm.change
    }
  }, [_vm._v("切换")])], 1)
},staticRenderFns: []}

/***/ }),

/***/ 82:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_vm._v("\n\t页面找不到\n")])
},staticRenderFns: []}

/***/ })

},[56]);
//# sourceMappingURL=app.f9a613b4bbb9faf09c9e.js.map