"use strict";
exports.id = 7829;
exports.ids = [7829];
exports.modules = {

/***/ 4611:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9164);






const UpcomingProduct = ({
  upcomingProduct
}) => {
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    (0,_utils_utils__WEBPACK_IMPORTED_MODULE_3__/* .dataImage */ .CC)();
  }, [upcomingProduct]);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
    className: "upcoming-product-area pos-relative box-90 pt-120 pb-120",
    "data-background": upcomingProduct && upcomingProduct.img // style={{ backgroundImage: 'url("img/bg/bg2.jpg")' }}
    ,
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      className: "upc-shape d-none d-xl-block",
      children: upcomingProduct && upcomingProduct.map.map((map, i) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `bakix-marker map-c${i + 1} ${map.class}`,
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          className: "bakix-map-icon",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
            className: "flaticon-add"
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          className: "bakix-map-address",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
            children: map.text.includes("/n") ? map.text.split("/n").map((text, i) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
              children: [text, " ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}), " "]
            }, i)) : map.text
          })
        })]
      }, i))
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UpcomingProduct);

/***/ }),

/***/ 3189:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "n": () => (/* binding */ getUpcomingProduct)
/* harmony export */ });
/* harmony import */ var _utils_fatchData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5764);
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1885);


const getUpcomingProduct = () => async dispatch => {
  dispatch({
    type: _type__WEBPACK_IMPORTED_MODULE_0__/* .GET_UPCOMING_PRODUCT */ .ef,
    payload: await (0,_utils_fatchData__WEBPACK_IMPORTED_MODULE_1__/* .fatchData */ .A)("/static/upcomingProduct.json")
  });
};

/***/ })

};
;