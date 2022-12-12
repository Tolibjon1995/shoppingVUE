"use strict";
exports.id = 4312;
exports.ids = [4312];
exports.modules = {

/***/ 4312:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9226);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_filterProduct__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3971);
/* harmony import */ var _slider_MultipleRowsSlider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(409);
/* harmony import */ var _Product__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5374);







const HomePageProducts = ({
  products
}) => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
    className: "product-area box-90 pt-70 pb-40 slick-slider",
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      className: "container-fluid",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.TabContainer, {
        defaultActiveKey: "all",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className: "row",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "col-xl-5 col-lg-12",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
              className: "area-title mb-50",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                children: "Brand New Products"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                children: "Browse the huge variety of our products"
              })]
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "col-xl-7 col-lg-12",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
              className: "product-tab mb-40",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Nav, {
                as: "ul",
                className: "nav product-nav  justify-content-xl-end",
                id: "myTab1",
                role: "tablist",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Nav.Item, {
                  as: "li",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Nav.Link, {
                    as: "a",
                    href: "#",
                    onClick: e => e.preventDefault(),
                    className: "nav-link",
                    id: "home-tab",
                    "data-toggle": "tab",
                    eventKey: "all",
                    role: "tab",
                    "aria-controls": "home",
                    "aria-selected": "true",
                    children: "all"
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Nav.Item, {
                  as: "li",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Nav.Link, {
                    as: "a",
                    href: "#",
                    onClick: e => e.preventDefault(),
                    className: "nav-link",
                    id: "profile-tab",
                    "data-toggle": "tab",
                    eventKey: "furniture",
                    role: "tab",
                    "aria-controls": "profile",
                    "aria-selected": "false",
                    children: "furniture"
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Nav.Item, {
                  as: "li",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Nav.Link, {
                    as: "a",
                    href: "#",
                    onClick: e => e.preventDefault(),
                    className: "nav-link",
                    id: "contact-tab",
                    "data-toggle": "tab",
                    eventKey: "gent",
                    role: "tab",
                    "aria-controls": "contact",
                    "aria-selected": "false",
                    children: "Man cloth"
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Nav.Item, {
                  as: "li",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Nav.Link, {
                    as: "a",
                    href: "#",
                    onClick: e => e.preventDefault(),
                    className: "nav-link",
                    id: "contact-tab1",
                    "data-toggle": "tab",
                    eventKey: "ladies",
                    role: "tab",
                    "aria-controls": "contact",
                    "aria-selected": "false",
                    children: "woman cloth"
                  })
                })]
              })
            })
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          className: "row",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "col-xl-12",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
              className: "product-tab-content",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.TabContent, {
                className: "tab-content",
                id: "myTabContent",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.TabPane, {
                  eventKey: "all",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "product-slider owl-carousel",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_slider_MultipleRowsSlider__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
                      children: products && products.map(product => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Product__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
                        product: product
                      }, product.id))
                    })
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.TabPane, {
                  eventKey: "furniture",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "product-slider owl-carousel ",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_slider_MultipleRowsSlider__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
                      children: products && (0,_utils_filterProduct__WEBPACK_IMPORTED_MODULE_4__/* .simpleProductFilter */ .rK)("furniture", products).map(product => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Product__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
                        product: product
                      }, product.id))
                    })
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.TabPane, {
                  eventKey: "gent",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "product-slider owl-carousel ",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_slider_MultipleRowsSlider__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
                      children: products && (0,_utils_filterProduct__WEBPACK_IMPORTED_MODULE_4__/* .simpleProductFilter */ .rK)("gent", products).map(product => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Product__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
                        product: product
                      }, product.id))
                    })
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.TabPane, {
                  eventKey: "ladies",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "product-slider owl-carousel ",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_slider_MultipleRowsSlider__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
                      children: products && (0,_utils_filterProduct__WEBPACK_IMPORTED_MODULE_4__/* .simpleProductFilter */ .rK)("ladies", products).map(product => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Product__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
                        product: product
                      }, product.id))
                    })
                  })
                })]
              })
            })
          })
        })]
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomePageProducts);

/***/ })

};
;