(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[345],{9134:function(e,s,c){"use strict";c.r(s);var i=c(5893),a=c(7294),n=c(7184),t=c(7481),r=c(8752),l=c(5103),d=c(8216),o=c(5511),u=c(5374),h=c(5383),m=c(9851),x=c(4978),j=c(1475),f=c(9164);s.default=(0,d.$j)((function(e){return{products:e.product.products}}),{getProducts:j.X})((function(e){var s=e.getProducts,c=e.products,d=(0,a.useState)(0),j=d[0],p=d[1];return(0,a.useEffect)((function(){s()}),[]),(0,i.jsx)(m.Z,{sticky:!0,container:!0,footerBg:!0,textCenter:!0,children:(0,i.jsxs)("main",{children:[(0,i.jsx)(x.Z,{active:"Shop",pageHeading:"Our Shop"}),(0,i.jsx)("section",{className:"shop-area pt-100 pb-100",children:(0,i.jsx)("div",{className:"container",children:(0,i.jsx)("div",{className:"row",children:(0,i.jsxs)("div",{className:"col-xl-12",children:[(0,i.jsxs)(n.Z,{defaultActiveKey:"grid",children:[(0,i.jsxs)("div",{className:"row",children:[(0,i.jsx)("div",{className:"col-xl-5 col-lg-5 col-md-6",children:(0,i.jsx)("div",{className:"product-showing mb-40",children:(0,i.jsx)("p",{children:(0,f.xV)(j,6,c)})})}),(0,i.jsxs)("div",{className:"col-xl-7 col-lg-7 col-md-6",children:[(0,i.jsx)("div",{className:"shop-tab f-right",children:(0,i.jsxs)(t.Z,{as:"ul",className:"nav text-center",id:"myTab",role:"tablist",children:[(0,i.jsx)(t.Z.Item,{as:"li",children:(0,i.jsxs)(t.Z.Link,{as:"a",href:"#",onClick:function(e){return e.preventDefault()},eventKey:"list",children:[(0,i.jsx)("i",{className:"fas fa-list-ul"})," "]})}),(0,i.jsx)(t.Z.Item,{as:"li",children:(0,i.jsx)(t.Z.Link,{as:"a",href:"#",onClick:function(e){return e.preventDefault()},eventKey:"grid",children:(0,i.jsx)("i",{className:"fas fa-th-large"})})})]})}),(0,i.jsx)("div",{className:"pro-filter-btn mb-40 f-right"})]})]}),(0,i.jsxs)(r.Z,{children:[(0,i.jsx)(l.Z,{eventKey:"grid",children:(0,i.jsx)("div",{className:"row",children:c&&c.map((function(e,s){return(0,i.jsx)("div",{className:"col-lg-4 col-md-6 ".concat((0,f._0)(j,s,6)),children:(0,i.jsx)(u.Z,{product:e})},e.id)}))})}),(0,i.jsx)(l.Z,{eventKey:"list",children:c&&c.map((function(e,s){return(0,i.jsx)("div",{className:"".concat((0,f._0)(j,s,6)),children:(0,i.jsx)(h.Z,{product:e})},s)}))})]})]}),(0,i.jsx)(o.Z,{active:j,setActive:p,sort:6,length:c&&c.length})]})})})})]})})}))},5511:function(e,s,c){"use strict";var i=c(5893);s.Z=function(e){var s=e.setActive,c=e.active,a=e.length,n=e.sort;return(0,i.jsx)("div",{className:"row",children:(0,i.jsx)("div",{className:"col-12",children:(0,i.jsx)("div",{className:"basic-pagination basic-pagination-2 text-center",children:a?(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"#",onClick:function(e){s(0),e.preventDefault()},children:(0,i.jsx)("i",{className:"fas fa-angle-double-left"})})}),Array(Math.ceil(a/n)).fill("p").map((function(e,a){return(0,i.jsx)("li",{className:"".concat(c===a?"active":""),children:(0,i.jsx)("a",{href:"#",onClick:function(e){s(a),e.preventDefault()},children:a<9?"0".concat(a+1):a+1})},a)})),(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"#",onClick:function(e){s(Array(Math.ceil(a/n)).length-1),e.preventDefault()},children:(0,i.jsx)("i",{className:"fas fa-angle-double-right"})})})]}):""})})})}},5383:function(e,s,c){"use strict";var i=c(5893),a=c(1664),n=c(7294),t=c(8178),r=c(8216),l=c(4363),d=c(6032);s.Z=(0,r.$j)(null,{addToCart:l.Xq,addWishlist:l.bj})((function(e){var s=e.product,c=e.col5,l=e.addToCart,o=e.addWishlist,u=(0,r.v9)((function(e){return e.utilis.wishlist})),h=(0,n.useState)(!1),m=h[0],x=h[1],j=(0,n.useState)(!1),f=(j[0],j[1]),p=(0,n.useState)(!1),v=(p[0],p[1]);return(0,i.jsxs)("div",{className:"row",children:[(0,i.jsx)(d.Z,{show:m,handleClose:function(){return x(!1)},product:s}),(0,i.jsx)("div",{className:"col-xl-".concat(c?5:4," col-lg-").concat(c?5:4),children:(0,i.jsx)("div",{className:"product-wrapper mb-30",children:(0,i.jsxs)("div",{className:"product-img",children:[(0,i.jsx)(a.default,{href:"/shop/".concat(s.id),children:(0,i.jsxs)("a",{children:[(0,i.jsx)("img",{src:s.img1,alt:"img 1"}),(0,i.jsx)("img",{className:"secondary-img",src:s.img2,alt:"imge 2"})]})}),(0,i.jsxs)("div",{className:"sale-tag",children:[s.new&&(0,i.jsx)("span",{className:"new",children:"new"}),s.sale&&(0,i.jsx)("span",{className:"sale",children:"sale"})]})]})})}),(0,i.jsx)("div",{className:"col-xl-".concat(c?7:8," col-lg-").concat(c?7:8),children:(0,i.jsxs)("div",{className:"product-content pro-list-content pr-0 mb-50",children:[(0,i.jsxs)("div",{className:"pro-cat mb-10",children:[(0,i.jsx)(a.default,{href:"/shop/".concat(s.id),children:"decor, "}),(0,i.jsx)(a.default,{href:"/shop/".concat(s.id),children:s.brand})]}),(0,i.jsx)("h4",{children:(0,i.jsx)(a.default,{href:"/shop/".concat(s.id),children:s.name})}),(0,i.jsx)("div",{className:"product-meta mb-10",children:(0,i.jsxs)("div",{className:"pro-price",children:[(0,i.jsx)("span",{children:"$".concat(Number(s.mainPrice).toFixed(2)," USD")}),s.price&&(0,i.jsx)("span",{className:"old-price",children:"$".concat(Number(s.price).toFixed(2)," USD")})]})}),(0,i.jsx)("p",{children:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."}),(0,i.jsxs)("div",{className:"product-action",children:[(0,i.jsx)("a",{href:"#",title:"Shoppingb Cart",onClick:function(e){return function(e){e.preventDefault(),l(s),f(!0),t.Am.success("Add item in Cart.")}(e)},children:(0,i.jsx)("i",{className:"flaticon-shopping-cart"})}),(0,i.jsx)("a",{href:"#",onClick:function(e){e.preventDefault(),x(!0)},children:(0,i.jsx)("i",{className:"flaticon-eye"})}),(0,i.jsx)("a",{href:"#",className:" ".concat(u&&u.find((function(e){return e.id===s.id}))?"active":""," "),onClick:function(e){return function(e){e.preventDefault(),o(s),v(!0),u.find((function(e){return e.id===s.id}))?t.Am.error("Remove item in wishlist."):t.Am.success("Add item in wishlist.")}(e)},children:(0,i.jsx)("i",{className:"flaticon-like"})})]})]})})]})}))},4978:function(e,s,c){"use strict";var i=c(5893),a=c(1664),n=c(7294),t=c(9164);s.Z=function(e){var s=e.pageHeading,c=e.active,r=e.thankupage,l=e.id;return(0,n.useEffect)((function(){(0,t.CC)()}),[]),(0,i.jsx)("section",{className:"breadcrumb-area","data-background":"/img/bg/page-title.png",children:(0,i.jsx)("div",{className:"container",children:(0,i.jsx)("div",{className:"row",children:(0,i.jsx)("div",{className:"col-xl-12",children:(0,i.jsxs)("div",{className:"breadcrumb-text text-center",children:[r&&(0,i.jsx)("i",{className:"fa fa-check-circle text-success fs-100 mb-3","aria-hidden":"true"}),(0,i.jsx)("h1",{className:r?"mb-2":"",children:s}),r&&(0,i.jsxs)("p",{className:"fs-20",children:["Payment is successfully processsed and your order is on the way ",(0,i.jsx)("br",{})," Transaction ID:",l]}),(0,i.jsxs)("ul",{className:"breadcrumb-menu",children:[(0,i.jsx)("li",{children:(0,i.jsx)(a.default,{href:"/",children:(0,i.jsx)("a",{children:"home"})})}),(0,i.jsx)("li",{children:(0,i.jsx)("span",{children:c})})]})]})})})})})}},386:function(e,s,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/products",function(){return c(9134)}])}},function(e){e.O(0,[774,640,68,511,851,674,888,179],(function(){return s=386,e(e.s=s);var s}));var s=e.O();_N_E=s}]);