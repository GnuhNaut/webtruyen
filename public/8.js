(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/readthestory/DocTruyen.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/readthestory/DocTruyen.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_NavigationComponent_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/NavigationComponent.vue */ "./resources/js/components/components/NavigationComponent.vue");
/* harmony import */ var _components_FooterComponent_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/FooterComponent.vue */ "./resources/js/components/components/FooterComponent.vue");
/* harmony import */ var _components_ContactComponent_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ContactComponent.vue */ "./resources/js/components/components/ContactComponent.vue");
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
  name: "DocTruyen",
  components: {
    NavigationComponent: _components_NavigationComponent_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    FooterComponent: _components_FooterComponent_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    ContactComponent: _components_ContactComponent_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      chap: [{
        title: '',
        link: '',
        content: ''
      }],
      truyen: [{
        name: '',
        storyId: '',
        link: ''
      }]
    };
  },
  mounted: function mounted() {
    var _this = this;

    axios.get('/api/index/chap/?storyId=' + this.$route.params.name + '&chapId=' + this.$route.params.id).then(function (response) {
      _this.truyen = response.data['truyen'][0];
      _this.chap = response.data['chap'][0];
      console.log('/api/index/chap/?storyId=' + _this.$route.params.name + '&chapId=' + _this.$route.params.id);
    });
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/readthestory/DocTruyen.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/readthestory/DocTruyen.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.wiki-content {\n    background: #faf5eb url(/img/background/church.png) 0 0 repeat;\n    background-size: 100px;\n    color: #262626;\n    border: 6px solid #b0aca7;\n    padding: 60px 64px;\n    margin-left: auto;\n    margin-right: auto;\n}\n.iconfont {\n    font-family: iconfont!important;\n    font-size: 16px;\n    font-style: normal;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n}\n.box-title{\n  border-top: 2px solid #cfcfcf;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/readthestory/DocTruyen.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/readthestory/DocTruyen.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./DocTruyen.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/readthestory/DocTruyen.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/readthestory/DocTruyen.vue?vue&type=template&id=61dca60e&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/readthestory/DocTruyen.vue?vue&type=template&id=61dca60e& ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "doctruyen" },
    [
      _c("NavigationComponent"),
      _vm._v(" "),
      _c("div", { staticClass: "main-body height-100vh pt-4" }, [
        _c("div", { staticClass: "container" }, [
          _c("div", { staticClass: "row m-0 p-0" }, [
            _c("div", { staticClass: "col-12 pr-0" }, [
              _c("div", { staticClass: "card mb-3 border-0" }, [
                _c("div", { staticClass: "row no-gutters" }, [
                  _c("div", { staticClass: "card-body" }, [
                    _c("ol", { staticClass: "breadcrumb" }, [
                      _vm._m(0),
                      _vm._v(" "),
                      _vm._m(1),
                      _vm._v(" "),
                      _c("li", { staticClass: "breadcrumb-item" }, [
                        _c("a", { attrs: { href: _vm.truyen.link } }, [
                          _vm._v(_vm._s(_vm.truyen.name))
                        ])
                      ]),
                      _vm._v(" "),
                      _c(
                        "li",
                        {
                          staticClass: "breadcrumb-item active",
                          attrs: { "aria-current": "page" }
                        },
                        [_vm._v(_vm._s(_vm.chap.title))]
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "wiki-content text-left",
                      attrs: { id: "id_chap_content" }
                    },
                    [
                      _c("h1", { staticClass: "chapter-title" }, [
                        _vm._v(" Chương: " + _vm._s(_vm.chap.title))
                      ]),
                      _vm._v(" "),
                      _c(
                        "ul",
                        {
                          staticClass: "list-info list-unstyled d-flex flex-row"
                        },
                        [
                          _c("li", [
                            _c("a", { attrs: { href: _vm.truyen.link } }, [
                              _c("i", { staticClass: "fas fa-book" }),
                              _vm._v(_vm._s(_vm.truyen.name))
                            ])
                          ]),
                          _vm._v(" "),
                          _vm._m(2),
                          _vm._v(" "),
                          _vm._m(3)
                        ]
                      ),
                      _vm._v(" "),
                      _vm._m(4),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "inner",
                          staticStyle: {
                            "font-size": "1em",
                            "line-height": "1.7em"
                          }
                        },
                        [
                          _c("div", [
                            _vm._v(
                              "\n                      " +
                                _vm._s(_vm.chap.content) +
                                "\n                    "
                            )
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _vm._m(5)
                    ]
                  )
                ])
              ]),
              _vm._v(" "),
              _vm._m(6)
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "container-fluid py-4 second-background" }, [
        _c("div", { staticClass: "container" }, [
          _c("div", { staticClass: "row m-0 p-0" }, [
            _c(
              "div",
              { staticClass: "col-12 m-0 p-0" },
              [_c("ContactComponent")],
              1
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c("FooterComponent")
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "breadcrumb-item" }, [
      _c("a", { attrs: { href: "/" } }, [_vm._v("Trang Chủ")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "breadcrumb-item" }, [
      _c("a", { attrs: { href: "/truyen-xuyen-khong/" } }, [
        _vm._v("Xuyên Không")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", [
      _c("small", { staticClass: "text-muted text-08" }, [
        _c("i", { staticClass: "far fa-file-word ml-3" }),
        _vm._v(" 2,463 Chữ ")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", [
      _c("small", { staticClass: "text-muted text-08" }, [
        _c("i", { staticClass: "far fa-clock ml-3" }),
        _vm._v(" 22:54 09/04/2020 ")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "d-flex" }, [
      _c(
        "div",
        {
          staticClass: "fb-like fb_iframe_widget",
          attrs: {
            "data-href":
              "https://truyenyy.vn/truyen/do-de-cua-ta-deu-la-trum-phan-dien-dich/",
            "data-width": "600px",
            "data-layout": "button_count",
            "data-action": "like",
            "data-size": "small",
            "data-show-faces": "true",
            "data-share": "false",
            "fb-xfbml-state": "rendered",
            "fb-iframe-plugin-query":
              "action=like&app_id=376408899112473&container_width=0&href=https%3A%2F%2Ftruyenyy.vn%2Ftruyen%2Fdo-de-cua-ta-deu-la-trum-phan-dien-dich%2F&layout=button_count&locale=vi_VN&sdk=joey&share=false&show_faces=true&size=small&width=600px"
          }
        },
        [
          _c(
            "span",
            {
              staticStyle: {
                "vertical-align": "bottom",
                width: "76px",
                height: "20px"
              }
            },
            [
              _c("iframe", {
                staticStyle: {
                  border: "none",
                  visibility: "visible",
                  width: "76px",
                  height: "20px"
                },
                attrs: {
                  name: "ff11cafbcf336",
                  height: "1000px",
                  "data-testid": "fb:like Facebook Social Plugin",
                  title: "fb:like Facebook Social Plugin",
                  frameborder: "0",
                  allowtransparency: "true",
                  allowfullscreen: "true",
                  scrolling: "no",
                  allow: "encrypted-media",
                  src:
                    "https://www.facebook.com/v2.11/plugins/like.php?action=like&app_id=376408899112473&channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df22889ed436e0f4%26domain%3Dtruyenyy.vn%26origin%3Dhttps%253A%252F%252Ftruyenyy.vn%252Ff107ed4ed6d3148%26relation%3Dparent.parent&container_width=0&href=https%3A%2F%2Ftruyenyy.vn%2Ftruyen%2Fdo-de-cua-ta-deu-la-trum-phan-dien-dich%2F&layout=button_count&locale=vi_VN&sdk=joey&share=false&show_faces=true&size=small&width=600px"
                }
              })
            ]
          )
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-center mt-2" }, [
      _c(
        "a",
        {
          staticClass: "btn btn-outline-danger mx-2",
          staticStyle: { "border-radius": "19px" },
          attrs: { href: "/vip/", target: "_blank", role: "button" }
        },
        [
          _c("i", { staticClass: "fas fa-crown" }),
          _vm._v(" Nạp TLT Để Đọc Chất Lượng Hơn")
        ]
      ),
      _vm._v(" "),
      _c(
        "a",
        {
          staticClass: " mx-2 btn btn-outline-success",
          staticStyle: { "border-radius": "19px" },
          attrs: {
            href: "/truyen/do-de-cua-ta-deu-la-trum-phan-dien-dich/ung-ho/",
            target: "_blank",
            role: "button"
          }
        },
        [
          _c("i", { staticClass: "fas fa-hand-holding-heart" }),
          _vm._v(" Ủng Hộ TLT")
        ]
      ),
      _vm._v(" "),
      _c(
        "a",
        {
          staticClass: " mx-2 btn btn-success",
          staticStyle: { "border-radius": "19px" },
          attrs: {
            href: "/truyen/do-de-cua-ta-deu-la-trum-phan-dien-dich/de-cu/add/",
            target: "_blank",
            role: "button"
          }
        },
        [_vm._v("Gửi Đề Cử")]
      ),
      _vm._v(" "),
      _c(
        "a",
        {
          staticClass: "btn btn-warning mx-2",
          staticStyle: { "border-radius": "19px", color: "#212529 !important" },
          attrs: { id: "id_btn_push_gt", role: "button" }
        },
        [_vm._v("Đẩy Kim Phiếu")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card mb-3 border-0" }, [
      _c("div", { staticClass: "row no-gutters" }, [
        _c("div", { staticClass: "col-12" }, [
          _c("div", { staticClass: "card-body" }, [
            _c("h5", { staticClass: "card-title text-left" }, [
              _vm._v("LỜI BÌNH TỪ ĐỌC GIẢ")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "mb-4 mt-2 pt-4 d-flex box-title " }, [
              _c(
                "a",
                { staticClass: "avatar vipAvatar vip3", attrs: { href: "#" } },
                [
                  _c("img", {
                    attrs: {
                      src:
                        "https://media.truyenyy.vn/profile/2019-06/thumb_31691bbca8_40x40.jpg",
                      alt: "#"
                    }
                  })
                ]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "ml-2" }, [
                _c("div", { staticClass: "d-flex" }, [
                  _c("a", { attrs: { href: "#" } }, [
                    _c("strong", [_vm._v("macdanh1712")])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "text-left" }, [
                  _vm._v("Luyện Khí Tầng Sáu")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "message text-left" }, [
                  _vm._v(
                    "Cố lên dịch nhé. Ra chương nhanh rồi tui lại thêm KP TLT cho. Cảm ơn nhiều."
                  )
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "mb-4 mt-2 pt-4 d-flex box-title " }, [
              _c(
                "a",
                { staticClass: "avatar vipAvatar vip3", attrs: { href: "#" } },
                [
                  _c("img", {
                    attrs: {
                      src:
                        "https://media.truyenyy.vn/profile/2019-06/thumb_31691bbca8_40x40.jpg",
                      alt: "#"
                    }
                  })
                ]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "ml-2" }, [
                _c("div", { staticClass: "d-flex" }, [
                  _c("a", { attrs: { href: "#" } }, [
                    _c("strong", [_vm._v("macdanh1712")])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "text-left" }, [
                  _vm._v("Luyện Khí Tầng Sáu")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "message text-left" }, [
                  _vm._v(
                    "Cố lên dịch nhé. Ra chương nhanh rồi tui lại thêm KP TLT cho. Cảm ơn nhiều."
                  )
                ])
              ])
            ])
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/readthestory/DocTruyen.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/readthestory/DocTruyen.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DocTruyen_vue_vue_type_template_id_61dca60e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DocTruyen.vue?vue&type=template&id=61dca60e& */ "./resources/js/components/readthestory/DocTruyen.vue?vue&type=template&id=61dca60e&");
/* harmony import */ var _DocTruyen_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DocTruyen.vue?vue&type=script&lang=js& */ "./resources/js/components/readthestory/DocTruyen.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _DocTruyen_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DocTruyen.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/readthestory/DocTruyen.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DocTruyen_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DocTruyen_vue_vue_type_template_id_61dca60e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DocTruyen_vue_vue_type_template_id_61dca60e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/readthestory/DocTruyen.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/readthestory/DocTruyen.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/readthestory/DocTruyen.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DocTruyen_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./DocTruyen.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/readthestory/DocTruyen.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DocTruyen_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/readthestory/DocTruyen.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/readthestory/DocTruyen.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DocTruyen_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./DocTruyen.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/readthestory/DocTruyen.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DocTruyen_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DocTruyen_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DocTruyen_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DocTruyen_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/readthestory/DocTruyen.vue?vue&type=template&id=61dca60e&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/readthestory/DocTruyen.vue?vue&type=template&id=61dca60e& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DocTruyen_vue_vue_type_template_id_61dca60e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./DocTruyen.vue?vue&type=template&id=61dca60e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/readthestory/DocTruyen.vue?vue&type=template&id=61dca60e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DocTruyen_vue_vue_type_template_id_61dca60e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DocTruyen_vue_vue_type_template_id_61dca60e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);