(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/story/truyen.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/story/truyen.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_NavigationComponent_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/NavigationComponent.vue */ "./resources/js/components/components/NavigationComponent.vue");
/* harmony import */ var _components_FooterComponent_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/FooterComponent.vue */ "./resources/js/components/components/FooterComponent.vue");
/* harmony import */ var _components_BackgroundComponent_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/BackgroundComponent.vue */ "./resources/js/components/components/BackgroundComponent.vue");
/* harmony import */ var _components_ContactComponent_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ContactComponent.vue */ "./resources/js/components/components/ContactComponent.vue");
/* harmony import */ var _components_SlideBar_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/SlideBar.vue */ "./resources/js/components/components/SlideBar.vue");
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
  name: "truyen",
  components: {
    NavigationComponent: _components_NavigationComponent_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    FooterComponent: _components_FooterComponent_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    BackgroundComponent: _components_BackgroundComponent_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    ContactComponent: _components_ContactComponent_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    SlideBar: _components_SlideBar_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  data: function data() {
    return {
      truyenNgonTinh: [],
      truyenDeCu: [],
      truyen: [{
        link: ''
      }],
      storyName: ""
    };
  },
  mounted: function mounted() {
    var _this = this;

    axios.get('/api/index').then(function (response) {
      _this.truyenDeCu = response.data['truyendecu'];
      _this.truyenNgonTinh = response.data['truyenngontinh'];
    });
    axios.get('/api/index/story/?id=' + this.$route.params.name).then(function (response) {
      _this.truyen = response.data['truyen'];
      _this.storyName = response.data['storyName'];
    });
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/story/truyen.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/story/truyen.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.novel-info {\n  display: flex;\n  border: 1px solid #ddd;\n  padding: 10px;\n  margin-top: 20px;\n  position: relative;\n  border-radius: 8px;\n}\n.info {\n  display: flex;\n  flex-direction: column;\n  height: 240px;\n}\n.novel-stripe {\n  top: 0;\n  overflow: hidden;\n  width: 60px;\n  height: 60px;\n  text-align: center;\n  white-space: nowrap;\n}\n.novel-stripe>span.red {\n  background-color: #dc3545;\n}\n.novel-stripe>span {\n  line-height: 10px;\n  right: -50%;\n  bottom: 0;\n  padding: 2px 0;\n  transform: rotate(-45deg);\n  transform-origin: left bottom;\n  color: #fff;\n  text-transform: uppercase;\n}\n.novel-stripe, .novel-stripe>span {\n  font-size: 10px;\n  position: absolute;\n  left: 0;\n}\n.novel-detail .novel-info .numbers li>small {\n  font-size: 10px;\n  color: #aaa;\n}\na:hover {\n  text-decoration: none;\n}\nh1 {\n  padding-left: 15px;\n  font-size: 22px;\n  font-weight: 700;\n}\n.border-item {\n  height: 40px;\n  border-top: 2px dashed #cfcfcf;\n}\n.box-title{\n  border-top: 2px solid #cfcfcf;\n}\nul > li {\n  list-style: none;\n}\na {\n  color: #2c3e50;\n  text-decoration: none;\n}\n.avatar {\n    width: 40px;\n    height: 40px;\n    border-radius: 20px;\n    position: relative;\n    border-width: 2px;\n}\n.avatar img {\n    width: 100%;\n    height: 100%;\n    border-radius: 50%;\n    border: 1px solid #fff;\n}\n.vipLevel {\n    font-weight: 700;\n    position: relative;\n    display: inline-block;\n    width: 40px;\n    height: 18px;\n    text-align: center;\n    color: #fff;\n}\n.vipLevel:before {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    width: 0;\n    height: 0;\n    margin-left: -3px;\n    content: \"\";\n    border-right: 6px solid transparent;\n    border-bottom: 13px solid #968fcf;\n    border-left: 4px solid transparent;\n}\n.vipLevel>span {\n    font-size: 20px;\n    line-height: 1;\n    position: absolute;\n    z-index: 3;\n    top: 50%;\n    left: 50%;\n    width: 4em;\n    margin-top: -.5em;\n    margin-left: -2em;\n    transform: scale(.5);\n}\n.vipLevel:after {\n    position: absolute;\n    z-index: 2;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    content: \"\";\n    border-radius: 64px;\n    background-color: #e1bee7;\n    background-image: linear-gradient(90deg,#968fcf,#323481);\n}\n.message {\n    margin-top: 15px;\n    padding: 18px 20px;\n    line-height: 16px;\n    font-size: 13px;\n    border-radius: 5px;\n    position: relative;\n    background: #ccdbdc;\n    color: #036;\n}\n.message:after {\n    content: \"\";\n    position: absolute;\n    top: -10px;\n    left: 15px;\n    border-color: #ccdbdc transparent;\n    border-style: solid;\n    border-width: 0 10px 10px;\n    display: block;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/story/truyen.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/story/truyen.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./truyen.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/story/truyen.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/story/truyen.vue?vue&type=template&id=a705dd20&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/story/truyen.vue?vue&type=template&id=a705dd20& ***!
  \***************************************************************************************************************************************************************************************************************/
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
    { staticClass: "truyen" },
    [
      _c("NavigationComponent"),
      _vm._v(" "),
      _c("BackgroundComponent"),
      _vm._v(" "),
      _c("div", { staticClass: "main-body height-100vh pt-4" }, [
        _c("div", { staticClass: "container" }, [
          _c(
            "div",
            { staticClass: "row m-0 p-0" },
            [
              _c("div", { staticClass: "col-lg-8 pr-0" }, [
                _c("div", { staticClass: "card mb-3 border-0" }, [
                  _c("div", { staticClass: "row no-gutters" }, [
                    _c("div", { staticClass: "col-12" }, [
                      _c("div", { staticClass: "card-body" }, [
                        _c("h5", { staticClass: "card-title text-left" }, [
                          _vm._v("Truyện Vip")
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "novel-info text-left" }, [
                          _vm._m(0),
                          _vm._v(" "),
                          _c("div", { staticClass: "info" }, [
                            _c("h1", [
                              _vm._v(
                                "\n                              " +
                                  _vm._s(_vm.storyName) +
                                  "\n                          "
                              )
                            ]),
                            _vm._v(" "),
                            _vm._m(1),
                            _vm._v(" "),
                            _vm._m(2),
                            _vm._v(" "),
                            _vm._m(3),
                            _vm._v(" "),
                            _c("div", { staticClass: "px-3" }, [
                              _c(
                                "a",
                                {
                                  staticClass: "btn btn-primary py-1 mr-2",
                                  attrs: {
                                    href: _vm.truyen[0].link,
                                    role: "button"
                                  }
                                },
                                [_vm._v("Đọc Từ Đầu")]
                              ),
                              _vm._v(" "),
                              _c(
                                "a",
                                {
                                  staticClass: "btn btn-warning py-1 mr-2",
                                  attrs: {
                                    href: _vm.truyen.link,
                                    role: "button"
                                  }
                                },
                                [_vm._v("Mua Chương VIP")]
                              )
                            ])
                          ])
                        ])
                      ])
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "card mb-3 border-0" }, [
                  _c("div", { staticClass: "row no-gutters" }, [
                    _c("div", { staticClass: "col-12" }, [
                      _c("div", { staticClass: "card-body" }, [
                        _c("h5", { staticClass: "card-title text-left" }, [
                          _vm._v("DANH SÁCH CHƯƠNG")
                        ]),
                        _vm._v(" "),
                        _vm._m(4),
                        _vm._v(" "),
                        _c("div", { staticClass: " d-flex flex-column" }, [
                          _c(
                            "ul",
                            { staticClass: "py-1 my-0" },
                            _vm._l(_vm.truyen, function(item) {
                              return _c(
                                "li",
                                {
                                  key: item.id,
                                  staticClass:
                                    "d-flex flex-row text-justify border-item"
                                },
                                [
                                  _c(
                                    "h6",
                                    {
                                      staticClass:
                                        "card-text col-2 text-left my-0 py-2"
                                    },
                                    [
                                      _c("a", { attrs: { href: item.link } }, [
                                        _vm._v(_vm._s(item.chuong))
                                      ])
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "h6",
                                    {
                                      staticClass:
                                        "card-text col-8 text-left my-0 py-2"
                                    },
                                    [
                                      _c("a", { attrs: { href: item.link } }, [
                                        _vm._v(_vm._s(item.text))
                                      ])
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass: "col-2 my-0 py-2 text-center"
                                    },
                                    [
                                      _c("p", { staticClass: "mx-2 text-09" }, [
                                        _vm._v(_vm._s(item.time))
                                      ])
                                    ]
                                  )
                                ]
                              )
                            }),
                            0
                          )
                        ])
                      ])
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "card mb-3 border-0" }, [
                  _c("div", { staticClass: "row no-gutters" }, [
                    _c("div", { staticClass: "col-12" }, [
                      _c("div", { staticClass: "card-body" }, [
                        _c("h5", { staticClass: "card-title text-left" }, [
                          _vm._v("CÓ THỂ BẠN CŨNG MUỐN ĐỌC")
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: " d-flex flex-row" },
                          _vm._l(_vm.truyenDeCu, function(item) {
                            return _c(
                              "ul",
                              { key: item.id, staticClass: "col-3" },
                              [
                                _c("li", [
                                  _c(
                                    "a",
                                    {
                                      attrs: {
                                        href: item.link,
                                        title: item.title
                                      }
                                    },
                                    [
                                      _c("img", {
                                        attrs: {
                                          src: item.src,
                                          alt: item.title
                                        }
                                      })
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("h6", { staticClass: "card-text" }, [
                                    _c("a", { attrs: { href: "" } }, [
                                      _vm._v(_vm._s(item.text))
                                    ])
                                  ])
                                ])
                              ]
                            )
                          }),
                          0
                        )
                      ])
                    ])
                  ])
                ]),
                _vm._v(" "),
                _vm._m(5),
                _vm._v(" "),
                _vm._m(6)
              ]),
              _vm._v(" "),
              _c("SlideBar")
            ],
            1
          )
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
    return _c(
      "a",
      {
        staticClass: "cover position-relative",
        attrs: {
          href: "/truyen/do-de-cua-ta-deu-la-trum-phan-dien-dich/chuong-1.html"
        }
      },
      [
        _c("img", {
          staticClass: "zoom-me lazy loaded",
          attrs: {
            "data-src":
              "https://media.truyenyy.vn/novels/2020-04/d37990b1ed.jpg",
            title: "Truyện Đồ Đệ Của Ta Đều Là Trùm Phản Diện (Dịch)",
            src: "https://media.truyenyy.vn/novels/2020-04/d37990b1ed.jpg",
            "data-was-processed": "true"
          }
        }),
        _vm._v(" "),
        _c("span", { staticClass: "novel-stripe" }, [
          _c("span", { staticClass: "red" }, [_vm._v("Top 7")])
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "author px-3" }, [
      _c(
        "a",
        { staticClass: "text-dark text-black-50", attrs: { href: "#" } },
        [_vm._v("Mưu Sinh Nhâm Chuyển Bồng")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-08 px-3 my-2" }, [
      _vm._v(
        "\n                            Giới thiệu\n                            "
      ),
      _c("p", { staticClass: "my-0" }, [
        _vm._v(
          "Khi tỉnh dậy, Lục Châu phát hiện mình đã biến thành đại ma đầu tổ sư gia cường đại nhất thế gian, hắn còn có chín tên đồ đệ tội ác chồng chất uy chấn thiên hạ.Đại đồ đệ là Giáo chủ U Minh giáo, thủ hạ dưới tay có ngàn vạn ma đầu. Nhị đồ đệ là Kiếm Ma, một lời không hợp là đại khai sát giới..."
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", { staticClass: "numbers list-unstyled d-flex px-3 mb-3" }, [
      _c("li", { staticClass: "text-09" }, [
        _vm._v("844,215 "),
        _c("small", { staticClass: "text-muted text-06" }, [_vm._v("Chữ")])
      ]),
      _vm._v(" "),
      _c("small", { staticClass: "px-2 text-09" }, [_vm._v("|")]),
      _vm._v(" "),
      _c("li", { staticClass: "text-09" }, [
        _vm._v("508 "),
        _c("small", { staticClass: "text-muted text-06" }, [_vm._v("Chương")])
      ]),
      _vm._v(" "),
      _c("small", { staticClass: "px-2 text-09 text-muted" }, [_vm._v("|")]),
      _vm._v(" "),
      _c("li", { staticClass: "text-09" }, [
        _c(
          "span",
          {
            staticClass: "num-format",
            attrs: {
              title: "",
              "data-toggle": "tooltip",
              "data-original-title": "67,686"
            }
          },
          [_vm._v("67.7K ")]
        ),
        _vm._v(" "),
        _c("small", { staticClass: "text-muted text-06" }, [_vm._v("Lượt Xem")])
      ]),
      _vm._v(" "),
      _c("small", { staticClass: "px-2 text-09 text-muted" }, [_vm._v("|")]),
      _vm._v(" "),
      _c("li", { staticClass: "text-09" }, [
        _c(
          "span",
          {
            staticClass: "num-format",
            attrs: {
              title: "",
              "data-toggle": "tooltip",
              "data-original-title": "1,139"
            }
          },
          [_vm._v("1.1K ")]
        ),
        _vm._v(" "),
        _c("small", { staticClass: "text-muted text-06" }, [
          _vm._v("Lượt Thích")
        ])
      ]),
      _vm._v(" "),
      _c("small", { staticClass: "px-2 text-09 text-muted" }, [_vm._v("|")]),
      _vm._v(" "),
      _c("li", { staticClass: "text-09" }, [
        _c(
          "a",
          {
            attrs: {
              href:
                "/truyen/do-de-cua-ta-deu-la-trum-phan-dien-dich/kim-phieu/",
              target: "_blank"
            }
          },
          [
            _c(
              "span",
              {
                staticClass: "num-format",
                attrs: {
                  title: "",
                  "data-toggle": "tooltip",
                  "data-original-title": "3,054"
                }
              },
              [_vm._v("3.1K ")]
            )
          ]
        ),
        _vm._v(" "),
        _c("small", { staticClass: "text-muted text-06" }, [
          _vm._v("Kim Phiếu")
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: " d-flex flex-column" }, [
      _c("ul", { staticClass: "py-1 my-0" }, [
        _c(
          "li",
          { staticClass: "d-flex flex-row text-justify box-title pt-3" },
          [
            _c("h6", { staticClass: "card-text col-2 text-left my-0 py-2" }, [
              _vm._v(
                "\n                          Chương Số\n                        "
              )
            ]),
            _vm._v(" "),
            _c("h6", { staticClass: "card-text col-8 text-left my-0 py-2" }, [
              _vm._v(
                "\n                          Tựa Chương\n                        "
              )
            ]),
            _vm._v(" "),
            _c("h6", { staticClass: "col-2 my-0 py-2" }, [
              _vm._v(
                "\n                          Thời Gian\n                        "
              )
            ])
          ]
        )
      ])
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
              _vm._v("DANH SÁCH ỦNG HỘ CHO TRUYỆN")
            ]),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "donateItem vipUser mb-4 mt-2 pt-4 d-flex box-title "
              },
              [
                _c(
                  "a",
                  {
                    staticClass: "avatar vipAvatar vip3",
                    attrs: { href: "#" }
                  },
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
                _c("div", { staticClass: "ml-2 mr-auto" }, [
                  _c("div", { staticClass: "d-flex" }, [
                    _c("a", { attrs: { href: "#" } }, [
                      _c("strong", [_vm._v("macdanh1712")])
                    ]),
                    _vm._v(" "),
                    _c(
                      "strong",
                      {
                        staticClass: "vipLevel vip3 ml-3",
                        attrs: { title: "30%" }
                      },
                      [_c("span", [_vm._v("VIP 3")])]
                    )
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
                ]),
                _vm._v(" "),
                _c("div", [
                  _c("b", [_c("span", [_vm._v("10,000")])]),
                  _vm._v(" "),
                  _c("span", { staticClass: "ml-1" }, [
                    _vm._v(
                      "\n                        VNĐ\n                      "
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "text-muted ml-4" }, [
                  _c(
                    "time",
                    {
                      attrs: {
                        datetime: "2020-10-03T16:21:57.231Z",
                        title: "2020-10-03T23:21:57.231166+07:00"
                      }
                    },
                    [_vm._v("2d")]
                  )
                ])
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "donateItem vipUser mb-4 mt-2 pt-4 d-flex box-title "
              },
              [
                _c(
                  "a",
                  {
                    staticClass: "avatar vipAvatar vip3",
                    attrs: { href: "#" }
                  },
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
                _c("div", { staticClass: "ml-2 mr-auto" }, [
                  _c("div", { staticClass: "d-flex" }, [
                    _c("a", { attrs: { href: "#" } }, [
                      _c("strong", [_vm._v("macdanh1712")])
                    ]),
                    _vm._v(" "),
                    _c(
                      "strong",
                      {
                        staticClass: "vipLevel vip3 ml-3",
                        attrs: { title: "30%" }
                      },
                      [_c("span", [_vm._v("VIP 3")])]
                    )
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
                ]),
                _vm._v(" "),
                _c("div", [
                  _c("b", [_c("span", [_vm._v("10,000")])]),
                  _vm._v(" "),
                  _c("span", { staticClass: "ml-1" }, [
                    _vm._v(
                      "\n                        VNĐ\n                      "
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "text-muted ml-4" }, [
                  _c(
                    "time",
                    {
                      attrs: {
                        datetime: "2020-10-03T16:21:57.231Z",
                        title: "2020-10-03T23:21:57.231166+07:00"
                      }
                    },
                    [_vm._v("2d")]
                  )
                ])
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "donateItem vipUser mb-4 mt-2 pt-4 d-flex box-title "
              },
              [
                _c(
                  "a",
                  {
                    staticClass: "avatar vipAvatar vip3",
                    attrs: { href: "#" }
                  },
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
                _c("div", { staticClass: "ml-2 mr-auto" }, [
                  _c("div", { staticClass: "d-flex" }, [
                    _c("a", { attrs: { href: "#" } }, [
                      _c("strong", [_vm._v("macdanh1712")])
                    ]),
                    _vm._v(" "),
                    _c(
                      "strong",
                      {
                        staticClass: "vipLevel vip3 ml-3",
                        attrs: { title: "30%" }
                      },
                      [_c("span", [_vm._v("VIP 3")])]
                    )
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
                ]),
                _vm._v(" "),
                _c("div", [
                  _c("b", [_c("span", [_vm._v("10,000")])]),
                  _vm._v(" "),
                  _c("span", { staticClass: "ml-1" }, [
                    _vm._v(
                      "\n                        VNĐ\n                      "
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "text-muted ml-4" }, [
                  _c(
                    "time",
                    {
                      attrs: {
                        datetime: "2020-10-03T16:21:57.231Z",
                        title: "2020-10-03T23:21:57.231166+07:00"
                      }
                    },
                    [_vm._v("2d")]
                  )
                ])
              ]
            )
          ])
        ])
      ])
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
            _c(
              "div",
              {
                staticClass:
                  "donateItem vipUser mb-4 mt-2 pt-4 d-flex box-title "
              },
              [
                _c(
                  "a",
                  {
                    staticClass: "avatar vipAvatar vip3",
                    attrs: { href: "#" }
                  },
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
              ]
            )
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/story/truyen.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/story/truyen.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _truyen_vue_vue_type_template_id_a705dd20___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./truyen.vue?vue&type=template&id=a705dd20& */ "./resources/js/components/story/truyen.vue?vue&type=template&id=a705dd20&");
/* harmony import */ var _truyen_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./truyen.vue?vue&type=script&lang=js& */ "./resources/js/components/story/truyen.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _truyen_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./truyen.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/story/truyen.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _truyen_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _truyen_vue_vue_type_template_id_a705dd20___WEBPACK_IMPORTED_MODULE_0__["render"],
  _truyen_vue_vue_type_template_id_a705dd20___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/story/truyen.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/story/truyen.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/story/truyen.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_truyen_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./truyen.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/story/truyen.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_truyen_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/story/truyen.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/story/truyen.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_truyen_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./truyen.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/story/truyen.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_truyen_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_truyen_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_truyen_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_truyen_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/story/truyen.vue?vue&type=template&id=a705dd20&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/story/truyen.vue?vue&type=template&id=a705dd20& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_truyen_vue_vue_type_template_id_a705dd20___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./truyen.vue?vue&type=template&id=a705dd20& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/story/truyen.vue?vue&type=template&id=a705dd20&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_truyen_vue_vue_type_template_id_a705dd20___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_truyen_vue_vue_type_template_id_a705dd20___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);