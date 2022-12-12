"use strict";
exports.id = 4025;
exports.ids = [4025];
exports.modules = {

/***/ 4025:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ product_Details)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(9226);
// EXTERNAL MODULE: external "react-hot-toast"
var external_react_hot_toast_ = __webpack_require__(6533);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(79);
// EXTERNAL MODULE: ./src/layouts/Layout.js + 15 modules
var Layout = __webpack_require__(9851);
// EXTERNAL MODULE: ./src/layouts/PageTitle.js
var PageTitle = __webpack_require__(4978);
// EXTERNAL MODULE: ./src/redux/action/product.js
var product = __webpack_require__(1475);
// EXTERNAL MODULE: ./src/redux/action/utilis.js
var utilis = __webpack_require__(4363);
// EXTERNAL MODULE: ./src/utils/filterProduct.js
var filterProduct = __webpack_require__(3971);
// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__(9080);
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);
;// CONCATENATED MODULE: ./src/components/slider/RelatedProduct.js



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const RelatedProduct = ({
  children
}) => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoPlay: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 700,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
      }
    }, {
      breakpoint: 990,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 1190,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    }]
  };
  return /*#__PURE__*/jsx_runtime_.jsx("section", {
    className: "product-area pb-100",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "container",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "row",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-xl-12",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "area-title text-center mb-50",
            children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
              children: "Releted Products"
            }), /*#__PURE__*/jsx_runtime_.jsx("p", {
              children: "Browse the huge variety of our products"
            })]
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "product-slider-2 owl-carousel",
        children: /*#__PURE__*/jsx_runtime_.jsx((external_react_slick_default()), _objectSpread(_objectSpread({}, settings), {}, {
          children: children
        }))
      })]
    })
  });
};

/* harmony default export */ const slider_RelatedProduct = (RelatedProduct);
// EXTERNAL MODULE: ./src/components/product/Product.js
var Product = __webpack_require__(5374);
;// CONCATENATED MODULE: ./src/components/product/Details.js
















const Details = ({
  addToCart,
  decreaseCart,
  getSingleProduct,
  getCarts,
  addWishlist,
  getWishlist,
  product,
  products,
  carts,
  wishlists,
  getProducts,
  upcoming,
  upthumb
}) => {
  const router = (0,router_.useRouter)();
  const {
    id
  } = router.query;
  (0,external_react_.useEffect)(() => {
    getSingleProduct(id);
    getCarts();
    getWishlist();
    getProducts();
  }, [id]);
  const cart = product && carts && carts.find(cart => cart.id === product.id);
  const wishlist = product && wishlists && wishlists.find(wishlist => wishlist.id === product.id);
  const size = ["L", "M", "X", "XL", "XXL"];
  const {
    0: addCart,
    1: setaddCart
  } = (0,external_react_.useState)(false);
  const {
    0: addWishlist_,
    1: setAddWishlist_
  } = (0,external_react_.useState)(false);

  const onClickCart = e => {
    e.preventDefault();
    addToCart(product);
    setaddCart(true);
    external_react_hot_toast_.toast.success("Add item in Cart.");
  };

  const onClickRemoveCart = e => {
    e.preventDefault();
    decreaseCart(cart);
    setaddCart(true);
    external_react_hot_toast_.toast.error("Remove item from Cart.");
  };

  const onClickWishlist = e => {
    e.preventDefault();
    addWishlist(product);
    setAddWishlist_(true);

    if (wishlist) {
      external_react_hot_toast_.toast.error("Remove item in wishlist.");
    } else {
      external_react_hot_toast_.toast.success("Add item in wishlist.");
    }
  };

  return /*#__PURE__*/jsx_runtime_.jsx(Layout/* default */.Z, {
    sticky: true,
    container: true,
    footerBg: true,
    textCenter: true,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("main", {
      children: [/*#__PURE__*/jsx_runtime_.jsx(PageTitle/* default */.Z, {
        active: "SHOP DETAILS",
        pageHeading: "Our Shop"
      }), /*#__PURE__*/jsx_runtime_.jsx("section", {
        className: "shop-details-area pt-100 pb-100",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "container",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "row",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "col-xl-6 col-lg-4",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.Tab.Container, {
                defaultActiveKey: "tum-0",
                children: [upthumb && /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "shop-thumb-tab",
                  children: /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Nav, {
                    as: "ul",
                    children: product && product.images.map((img, i) => /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Nav.Item, {
                      as: "li",
                      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.Nav.Link, {
                        as: "a",
                        href: "#",
                        onClick: e => e.preventDefault(),
                        eventKey: `tum-${i}`,
                        children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                          src: img.src,
                          alt: "Tum"
                        }), " "]
                      })
                    }, i))
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "product-details-img mb-10",
                  children: /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Tab.Content, {
                    id: "myTabContentpro",
                    children: product && product.images.map((img, i) => /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Tab.Pane, {
                      eventKey: `tum-${i}`,
                      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "product-large-img",
                        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                          src: img.src,
                          alt: "tum"
                        })
                      })
                    }, i))
                  })
                }), !upthumb && /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "shop-thumb-tab mb-30",
                  children: /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Nav, {
                    as: "ul",
                    children: product && product.images.map((img, i) => /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Nav.Item, {
                      as: "li",
                      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.Nav.Link, {
                        as: "a",
                        href: "#",
                        onClick: e => e.preventDefault(),
                        eventKey: `tum-${i}`,
                        children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                          src: img.src,
                          alt: "Tum"
                        }), " "]
                      })
                    }, i))
                  })
                })]
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "col-xl-6 col-lg-8",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "product-details mb-30 pl-30",
                children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "details-cat mb-20",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
                    href: "#",
                    onClick: e => e.preventDefault(),
                    children: "decor,"
                  }), /*#__PURE__*/jsx_runtime_.jsx("a", {
                    href: "#",
                    onClick: e => e.preventDefault(),
                    children: product && product.brand
                  })]
                }), /*#__PURE__*/jsx_runtime_.jsx("h2", {
                  className: "pro-details-title mb-15",
                  children: product && product.name
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "details-price mb-20",
                  children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
                    children: ["$", Number(product && product.mainPrice).toFixed(2)]
                  }), product && product.price && /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
                    className: "old-price",
                    children: ["$", Number(product.price).toFixed(2)]
                  })]
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "product-variant",
                  children: [product && product.colors && product.colors.length > 0 && /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "product-color variant-item",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: "variant-name",
                      children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                        children: "Colors"
                      })
                    }), /*#__PURE__*/jsx_runtime_.jsx("ul", {
                      className: "shop-link shop-color",
                      children: product.colors.map(color => /*#__PURE__*/jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                          href: "#",
                          onClick: e => e.preventDefault(),
                          children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                            className: color
                          })
                        })
                      }, color))
                    })]
                  }), upcoming && /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "product-coming variant-item",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: "variant-name",
                      children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                        children: "time left"
                      })
                    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: "event-timer details-timer",
                      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                        "data-countdown": "2019/04/01",
                        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
                          className: "cdown days",
                          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                            className: "time-count",
                            children: "0"
                          }), " ", /*#__PURE__*/jsx_runtime_.jsx("p", {
                            children: "Days"
                          })]
                        }), " ", /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
                          className: "cdown hour",
                          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                            className: "time-count",
                            children: "0"
                          }), " ", /*#__PURE__*/jsx_runtime_.jsx("p", {
                            children: "Hour"
                          })]
                        }), " ", /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
                          className: "cdown minutes",
                          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                            className: "time-count",
                            children: "00"
                          }), " ", /*#__PURE__*/jsx_runtime_.jsx("p", {
                            children: "Min"
                          })]
                        }), " ", /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
                          className: "cdown second",
                          children: [" ", /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
                            children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                              className: "time-count",
                              children: "00"
                            }), " ", /*#__PURE__*/jsx_runtime_.jsx("p", {
                              children: "Sec"
                            })]
                          })]
                        })]
                      })
                    })]
                  }), product && product.size && /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "product-size variant-item",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: "variant-name",
                      children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                        children: "size"
                      })
                    }), /*#__PURE__*/jsx_runtime_.jsx("ul", {
                      className: "shop-link shop-size",
                      children: size && size.map(size => /*#__PURE__*/jsx_runtime_.jsx("li", {
                        className: size.toLowerCase() === product.size.toLowerCase() ? "active" : "",
                        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                          href: "#",
                          onClick: e => e.preventDefault(),
                          children: size
                        })
                      }, size))
                    })]
                  }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "product-desc variant-item",
                    children: /*#__PURE__*/jsx_runtime_.jsx("p", {
                      children: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip."
                    })
                  }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "product-info-list variant-item",
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
                      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
                        className: "text-capitalize",
                        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                          children: "Brands:"
                        }), " ", product && product.brand]
                      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
                        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                          children: "Product Code:"
                        }), " ", product && product.category[0].split("")[0] + product.id]
                      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
                        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                          children: "Reward Points:"
                        }), " 100"]
                      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
                        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                          children: "Stock:"
                        }), " ", /*#__PURE__*/jsx_runtime_.jsx("span", {
                          className: "in-stock",
                          children: product && product.stock ? "In Stock" : "Out Of Stock"
                        })]
                      })]
                    })
                  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "product-action-details variant-item",
                    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                      className: "product-details-action d-flex",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "product-quantity ",
                        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                          className: "cart-plus-minus",
                          children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
                            children: cart ? cart.qty : 1
                          }), /*#__PURE__*/jsx_runtime_.jsx("button", {
                            disabled: cart ? false : true,
                            className: "dec qtybutton",
                            onClick: e => cart && cart.qty !== 1 && onClickRemoveCart(e),
                            children: "-"
                          }), /*#__PURE__*/jsx_runtime_.jsx("button", {
                            disabled: cart ? false : true,
                            className: "inc qtybutton",
                            onClick: e => onClickCart(e),
                            children: "+"
                          })]
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("button", {
                        className: `${wishlist ? "active" : ""} details-action-icon`,
                        type: "submit",
                        onClick: e => onClickWishlist(e),
                        children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                          className: "fas fa-heart"
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("button", {
                        className: "details-action-icon",
                        type: "submit",
                        children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                          className: "fas fa-hourglass"
                        })
                      })]
                    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: "details-cart mt-40",
                      onClick: () => addToCart(product),
                      children: /*#__PURE__*/jsx_runtime_.jsx("button", {
                        className: "btn theme-btn",
                        children: "purchase now"
                      })
                    })]
                  })]
                })]
              })
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "row mt-50",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "col-xl-8 col-lg-8",
              children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "product-review",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.TabContainer, {
                  defaultActiveKey: "dec",
                  children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.Nav, {
                    as: "ul",
                    className: "review-tab",
                    children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Nav.Item, {
                      as: "li",
                      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.Nav.Link, {
                        as: "a",
                        href: "#",
                        onClick: e => e.preventDefault(),
                        eventKey: "dec",
                        children: ["Description", " "]
                      })
                    }), /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Nav.Item, {
                      as: "li",
                      children: /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Nav.Link, {
                        as: "a",
                        href: "#",
                        onClick: e => e.preventDefault(),
                        eventKey: "review",
                        children: "Reviews (2)"
                      })
                    })]
                  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.Tab.Content, {
                    id: "myTabContent2",
                    children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Tab.Pane, {
                      eventKey: "dec",
                      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                        className: "desc-text",
                        children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
                          children: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
                        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                          children: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
                        })]
                      })
                    }), /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Tab.Pane, {
                      eventKey: "review",
                      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                        className: "desc-text review-text",
                        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                          className: "product-commnets",
                          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                            className: "product-commnets-list mb-25 pb-15",
                            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                              className: "pro-comments-img",
                              children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                                src: "/img/product/comments/01.png",
                                alt: "img"
                              })
                            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                              className: "pro-commnets-text",
                              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("h4", {
                                children: ["Roger West -", /*#__PURE__*/jsx_runtime_.jsx("span", {
                                  children: "June 5, 2018"
                                })]
                              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                                className: "pro-rating",
                                children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                                  className: "far fa-star"
                                }), /*#__PURE__*/jsx_runtime_.jsx("i", {
                                  className: "far fa-star"
                                }), /*#__PURE__*/jsx_runtime_.jsx("i", {
                                  className: "far fa-star"
                                }), /*#__PURE__*/jsx_runtime_.jsx("i", {
                                  className: "far fa-star"
                                })]
                              }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                                children: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
                              })]
                            })]
                          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                            className: "product-commnets-list mb-25 pb-15",
                            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                              className: "pro-comments-img",
                              children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                                src: "/img/product/comments/02.png",
                                alt: "img"
                              })
                            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                              className: "pro-commnets-text",
                              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("h4", {
                                children: ["Roger West -", /*#__PURE__*/jsx_runtime_.jsx("span", {
                                  children: "June 5, 2018"
                                })]
                              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                                className: "pro-rating",
                                children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                                  className: "far fa-star"
                                }), /*#__PURE__*/jsx_runtime_.jsx("i", {
                                  className: "far fa-star"
                                }), /*#__PURE__*/jsx_runtime_.jsx("i", {
                                  className: "far fa-star"
                                }), /*#__PURE__*/jsx_runtime_.jsx("i", {
                                  className: "far fa-star"
                                })]
                              }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                                children: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
                              })]
                            })]
                          })]
                        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                          className: "review-box mt-50",
                          children: [/*#__PURE__*/jsx_runtime_.jsx("h4", {
                            children: "Add a Review"
                          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                            className: "your-rating mb-40",
                            children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                              children: "Your Rating:"
                            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                              className: "rating-list",
                              children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
                                href: "#",
                                onClick: e => e.preventDefault(),
                                children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                                  className: "far fa-star"
                                })
                              }), /*#__PURE__*/jsx_runtime_.jsx("a", {
                                href: "#",
                                onClick: e => e.preventDefault(),
                                children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                                  className: "far fa-star"
                                })
                              }), /*#__PURE__*/jsx_runtime_.jsx("a", {
                                href: "#",
                                onClick: e => e.preventDefault(),
                                children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                                  className: "far fa-star"
                                })
                              }), /*#__PURE__*/jsx_runtime_.jsx("a", {
                                href: "#",
                                onClick: e => e.preventDefault(),
                                children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                                  className: "far fa-star"
                                })
                              }), /*#__PURE__*/jsx_runtime_.jsx("a", {
                                href: "#",
                                onClick: e => e.preventDefault(),
                                children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                                  className: "far fa-star"
                                })
                              })]
                            })]
                          }), /*#__PURE__*/jsx_runtime_.jsx("form", {
                            className: "review-form",
                            onSubmit: e => e.preventDefault(),
                            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                              className: "row",
                              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                                className: "col-xl-12",
                                children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                                  htmlFor: "message",
                                  children: "YOUR REVIEW"
                                }), /*#__PURE__*/jsx_runtime_.jsx("textarea", {
                                  name: "message",
                                  id: "message",
                                  cols: 30,
                                  rows: 10,
                                  defaultValue: ""
                                })]
                              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                                className: "col-xl-6",
                                children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                                  htmlFor: "r-name",
                                  children: "Name"
                                }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                                  type: "text",
                                  id: "r-name"
                                })]
                              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                                className: "col-xl-6",
                                children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                                  htmlFor: "r-email",
                                  children: "Email"
                                }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                                  type: "email",
                                  id: "r-email"
                                })]
                              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                                className: "col-xl-12",
                                children: /*#__PURE__*/jsx_runtime_.jsx("button", {
                                  className: "btn theme-btn",
                                  children: "Add your Review"
                                })
                              })]
                            })
                          })]
                        })]
                      })
                    })]
                  })]
                })
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "col-xl-4 col-lg-4",
              children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "pro-details-banner",
                children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                  href: "/shop",
                  children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                    src: "/img/banner/pro-details.jpg",
                    alt: "img"
                  })
                })
              })
            })]
          })]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(slider_RelatedProduct, {
        children: products && (0,filterProduct/* simpleProductFilter */.rK)(product && product.category[0], products).map(product => /*#__PURE__*/jsx_runtime_.jsx(Product/* default */.Z, {
          product: product
        }, product.id))
      }), /*#__PURE__*/jsx_runtime_.jsx("button", {
        id: "scrollUp",
        onClick: () => router.back(),
        style: {
          position: "fixed",
          zIndex: 2147483647,
          border: 'none',
          display: "block" //scrollTop ? "none" : 

        },
        children: /*#__PURE__*/jsx_runtime_.jsx("i", {
          className: "fas fa-reply"
        })
      })]
    })
  });
};

const mapStateToProps = state => ({
  products: state.product.products,
  product: state.product.singleProduct,
  carts: state.utilis.carts,
  wishlists: state.utilis.wishlist
});

/* harmony default export */ const product_Details = ((0,external_react_redux_.connect)(mapStateToProps, {
  addToCart: utilis/* addToCart */.Xq,
  decreaseCart: utilis/* decreaseCart */.Bq,
  getCarts: utilis/* getCarts */.N5,
  getSingleProduct: product/* getSingleProduct */._,
  addWishlist: utilis/* addWishlist */.bj,
  getWishlist: utilis/* getWishlist */.sA,
  getProducts: product/* getProducts */.X
})(Details));

/***/ })

};
;