"use strict";
exports.id = 9337;
exports.ids = [9337];
exports.modules = {

/***/ 1885:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "v1": () => (/* binding */ HOME_1),
/* harmony export */   "C4": () => (/* binding */ GET_BLOG),
/* harmony export */   "OC": () => (/* binding */ GET_MAS_BLOG),
/* harmony export */   "n6": () => (/* binding */ GET_SINGLE_BLOG),
/* harmony export */   "Fm": () => (/* binding */ TOP_SELLER),
/* harmony export */   "A3": () => (/* binding */ GET_FEATURES),
/* harmony export */   "Z5": () => (/* binding */ HOME_2),
/* harmony export */   "ef": () => (/* binding */ GET_UPCOMING_PRODUCT),
/* harmony export */   "u0": () => (/* binding */ HOME_3),
/* harmony export */   "IR": () => (/* binding */ HOME_4),
/* harmony export */   "A$": () => (/* binding */ HOME_5),
/* harmony export */   "N4": () => (/* binding */ GET_PRODUCT),
/* harmony export */   "Ug": () => (/* binding */ GET_SINGLE),
/* harmony export */   "S4": () => (/* binding */ FILTER_NAME),
/* harmony export */   "Aw": () => (/* binding */ FILTER_BRAND),
/* harmony export */   "T1": () => (/* binding */ FILTER_CATAGORY),
/* harmony export */   "Ao": () => (/* binding */ FILTER_SIZE),
/* harmony export */   "L8": () => (/* binding */ FILTER_PRICE),
/* harmony export */   "KE": () => (/* binding */ FILTER_COLOR),
/* harmony export */   "xu": () => (/* binding */ FILTER_TAG),
/* harmony export */   "Rp": () => (/* binding */ GET_CARTS),
/* harmony export */   "G2": () => (/* binding */ ADD_TO_CART),
/* harmony export */   "AB": () => (/* binding */ REMOVE_CART),
/* harmony export */   "cE": () => (/* binding */ DECREASE_CART),
/* harmony export */   "oJ": () => (/* binding */ COMPARE),
/* harmony export */   "Xo": () => (/* binding */ GET_COMPARE),
/* harmony export */   "qG": () => (/* binding */ REMOVE_COMPARE),
/* harmony export */   "Qs": () => (/* binding */ ADD_WISHLIST),
/* harmony export */   "n_": () => (/* binding */ GET_WISHLIST),
/* harmony export */   "WX": () => (/* binding */ CHECKOUT_USER)
/* harmony export */ });
/* unused harmony exports NEXT_POST, PREV_POST, CART_AMOUNT, QUICK_VIEW */
const HOME_1 = "HOME_1";
const GET_BLOG = "GET_BLOG";
const GET_MAS_BLOG = "GET_MAS_BLOG";
const GET_SINGLE_BLOG = "GET_SINGLE_BLOG";
const NEXT_POST = "NEXT_POST";
const PREV_POST = "PREV_POST";
const TOP_SELLER = "TOP_SELLER";
const GET_FEATURES = "GET_FEATURES";
const HOME_2 = "HOME_2";
const GET_UPCOMING_PRODUCT = "GET_UPCOMING_PRODUCT";
const HOME_3 = "HOME_3";
const HOME_4 = "HOME_4";
const HOME_5 = "HOME_5"; // Product

const GET_PRODUCT = "GET_PRODUCT";
const GET_SINGLE = "GET_SINGLE"; // filter

const FILTER_NAME = "FILTER_NAME";
const FILTER_BRAND = "FILTER_BRAND";
const FILTER_CATAGORY = "FILTER_CATAGORY";
const FILTER_SIZE = "FILTER_SIZE";
const FILTER_PRICE = "FILTER_PRICE";
const FILTER_COLOR = "FILTER_COLOR";
const FILTER_TAG = "FILTER_TAG"; // Utiles

const GET_CARTS = "GET_CARTS";
const ADD_TO_CART = "ADD_TO_CART";
const REMOVE_CART = "REMOVE_CART";
const DECREASE_CART = "DECREASE_CART";
const CART_AMOUNT = "CART_AMOUNT";
const COMPARE = "COMPARE";
const GET_COMPARE = "GET_COMPARE";
const REMOVE_COMPARE = "REMOVE_COMPARE";
const QUICK_VIEW = "QUICK_VIEW";
const ADD_WISHLIST = "ADD_WISHLIST";
const GET_WISHLIST = "GET_WISHLIST";
const CHECKOUT_USER = "CHECKOUT_USER";

/***/ }),

/***/ 3970:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ setLocalStorage),
/* harmony export */   "$": () => (/* binding */ getLocalStorage)
/* harmony export */ });
const setLocalStorage = (name, items) => {
  localStorage.setItem(name, JSON.stringify(items));
};
const getLocalStorage = name => {
  const data = localStorage.getItem(name);

  if (data) {
    return JSON.parse(data);
  } else {
    localStorage.setItem(name, JSON.stringify([]));
    return [];
  }
};

/***/ }),

/***/ 9164:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "xV": () => (/* binding */ activeData),
/* harmony export */   "xq": () => (/* binding */ updateState),
/* harmony export */   "WC": () => (/* binding */ clickToActive),
/* harmony export */   "fL": () => (/* binding */ getDiscount),
/* harmony export */   "AR": () => (/* binding */ scroll),
/* harmony export */   "_0": () => (/* binding */ dblock),
/* harmony export */   "CC": () => (/* binding */ dataImage),
/* harmony export */   "X_": () => (/* binding */ totalPrice)
/* harmony export */ });
const activeData = (active, sort, products) => {
  function _(number) {
    return number <= 9 ? `0${number}` : number;
  }

  return `Showing ${products && products.length ? _(active * sort + 1) : "00"}–${products && products.length > (active + 1) * sort ? _((active + 1) * sort) : _(products && products.length)}
     of ${_(products && products.length)} results`;
};
const updateState = (state, payload) => {
  return state && state.includes(payload) ? state.filter(brand => brand !== payload) : [...state, payload];
};
const clickToActive = (activeArr, value, setActiveArr) => {
  if (activeArr.includes(value)) {
    setActiveArr(activeArr.filter(active => active !== value));
  } else {
    setActiveArr([...activeArr, value]);
  }
};
const getDiscount = (value, discount) => {
  const valueBeforDiscount = value - value * discount / 100;
  return valueBeforDiscount.toFixed(2);
};
const scroll = () => {
  let offset = window.scrollY;
  const sticky = document.getElementById("header-sticky");

  if (sticky) {
    if (offset > 300) {
      sticky.classList.add("sticky-header");
    } else {
      sticky.classList.remove("sticky-header");
    }
  }
};
const dblock = (active, id, sort) => {
  if (active === 0) {
    return id + 1 >= 0 && id + 1 <= sort ? "d-block" : "d-none";
  } else {
    return id + 1 > active * sort && id + 1 <= (active + 1) * sort ? "d-block" : "d-none";
  }
};
const dataImage = () => {
  let d = document.querySelectorAll("[data-background");

  for (let i = 0; i < d.length; i++) {
    const element = d[i];
    element.style.backgroundImage = `url(${element.getAttribute("data-background")})`; // console.log(element.getAttribute("data-background"));
  }
};
const totalPrice = items => {
  return items && items.map(item => item.totalPrice).reduce((prev, next) => prev + next, 0).toFixed(2);
};

/***/ })

};
;