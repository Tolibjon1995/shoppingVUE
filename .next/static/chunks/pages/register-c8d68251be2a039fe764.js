(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[495],{9249:function(e,r,s){"use strict";s.r(r);var a=s(5893),n=s(8149),i=s(1664),d=s(3609),t=s(9851),l=s(4978),o=s(7885);r.default=function(){return(0,a.jsx)(t.Z,{sticky:!0,container:!0,textCenter:!0,footerBg:!0,children:(0,a.jsxs)("main",{children:[(0,a.jsx)(l.Z,{active:"register",pageHeading:"Register"}),(0,a.jsx)("section",{className:"login-area pt-100 pb-100",children:(0,a.jsx)("div",{className:"container",children:(0,a.jsx)("div",{className:"row",children:(0,a.jsx)("div",{className:"col-lg-8 offset-lg-2",children:(0,a.jsxs)("div",{className:"basic-login",children:[(0,a.jsx)("h3",{className:"text-center mb-60",children:"Signup From Here"}),(0,a.jsx)(n.J9,{initialValues:o.gY.initialValue,validationSchema:o.gY.schema,onSubmit:function(e,r){var s=r.setSubmitting;setTimeout((function(){alert(JSON.stringify(e,null,2)),s(!1)}),400)},children:function(e){var r=e.values,s=e.errors,n=e.handleChange,t=e.handleBlur,l=e.handleSubmit,o=e.isSubmitting;return(0,a.jsxs)("form",{onSubmit:l,children:[(0,a.jsx)(d.Z,{label:"Username",id:"username",name:"username",type:"string",placeholder:"Enter Username ...",values:r.username,errors:s.username,handleBlur:t,handleChange:n}),(0,a.jsx)(d.Z,{label:"Email Address",id:"email",name:"email",type:"string",placeholder:"Enter Email address...",values:r.email,errors:s.email,handleBlur:t,handleChange:n}),(0,a.jsx)(d.Z,{label:"Password",id:"password",name:"password",type:"password",placeholder:"Enter password...",values:r.password,errors:s.password,handleBlur:t,handleChange:n}),(0,a.jsx)("button",{disabled:o,className:"btn theme-btn-2 w-100",children:"Register Now"}),(0,a.jsx)("div",{className:"or-divide",children:(0,a.jsx)("span",{children:"or"})}),(0,a.jsx)(i.default,{href:"/login",children:(0,a.jsx)("a",{className:"btn theme-btn w-100",children:"Login Now"})})]})}})]})})})})})]})})}},3609:function(e,r,s){"use strict";var a=s(5893),n=s(7294);r.Z=function(e){var r=e.label,s=e.handleChange,i=e.handleBlur,d=e.values,t=e.errors,l=e.placeholder,o=e.id,c=e.type,u=e.name;return(0,a.jsxs)(n.Fragment,{children:[(0,a.jsxs)("label",{htmlFor:o,children:[r," ",(0,a.jsx)("span",{className:"required",children:"*"})]}),(0,a.jsx)("input",{id:o,type:c||"text",name:u,onChange:s,onBlur:i,value:d,placeholder:l,className:"mb-0"}),(0,a.jsx)("div",{id:"val-username1-error",className:"invalid-feedback animated fadeInUp mb-3",style:{display:"block"},children:t&&t})]})}},4978:function(e,r,s){"use strict";var a=s(5893),n=s(1664),i=s(7294),d=s(9164);r.Z=function(e){var r=e.pageHeading,s=e.active,t=e.thankupage,l=e.id;return(0,i.useEffect)((function(){(0,d.CC)()}),[]),(0,a.jsx)("section",{className:"breadcrumb-area","data-background":"/img/bg/page-title.png",children:(0,a.jsx)("div",{className:"container",children:(0,a.jsx)("div",{className:"row",children:(0,a.jsx)("div",{className:"col-xl-12",children:(0,a.jsxs)("div",{className:"breadcrumb-text text-center",children:[t&&(0,a.jsx)("i",{className:"fa fa-check-circle text-success fs-100 mb-3","aria-hidden":"true"}),(0,a.jsx)("h1",{className:t?"mb-2":"",children:r}),t&&(0,a.jsxs)("p",{className:"fs-20",children:["Payment is successfully processsed and your order is on the way ",(0,a.jsx)("br",{})," Transaction ID:",l]}),(0,a.jsxs)("ul",{className:"breadcrumb-menu",children:[(0,a.jsx)("li",{children:(0,a.jsx)(n.default,{href:"/",children:(0,a.jsx)("a",{children:"home"})})}),(0,a.jsx)("li",{children:(0,a.jsx)("span",{children:s})})]})]})})})})})}},7885:function(e,r,s){"use strict";s.d(r,{dm:function(){return S},gY:function(){return B},$h:function(){return O},ll:function(){return z}});var a,n,i=s(2809),d=s(9501),t=d.Z_().min(3,"Your username must consist of at least 3 characters ").max(50,"Your username must consist of at least 3 characters ").required("Please enter a username"),l=d.Z_().min(5,"Your password must be at least 5 characters long").max(50,"Your password must be at least 5 characters long").required("Please provide a password"),o=d.Z_().email().required("Please provide your email"),c=d.O7().oneOf([!0],"You must accept the terms and conditions"),u=d.Z_().required("Please provide your country name"),m=d.Z_().required("Please provide your first name"),h=d.Z_().required("Please provide your last name"),p=d.Z_().required("Please provide your company name"),Z=d.Z_().required("Please provide your address"),f=d.Z_().required("Please provide your city"),y=d.Z_().required("Please provide your state"),v=d.Z_().required("Please provide your zip"),x=d.Rx().required("Please provide your phone"),_=d.O7(),w=d.Z_().when("defferentAddress",{is:!0,then:d.Z_().required("Please provide your country name")}),b=d.Z_().when("defferentAddress",{is:!0,then:d.Z_().required("Please provide your frist name")}),g=d.Z_().when("defferentAddress",{is:!0,then:d.Z_().required("Please provide your last name")}),N=d.Z_().when("defferentAddress",{is:!0,then:d.Z_().required("Please provide your company name")}),j=d.Z_().when("defferentAddress",{is:!0,then:d.Z_().required("Please provide your address")}),P=d.Z_().when("defferentAddress",{is:!0,then:d.Z_().required("Please provide your city")}),q=d.Z_().when("defferentAddress",{is:!0,then:d.Z_().required("Please provide your seate name")}),A=d.Z_().when("defferentAddress",{is:!0,then:d.Z_().required("Please provide your zip code")}),C=d.Rx().when("defferentAddress",{is:!0,then:d.Rx().required("Please provide your number")}),E=d.Z_().email().when("defferentAddress",{is:!0,then:d.Z_().email().required("Please provide your email")}),k=d.O7(),Y=d.Z_().when("createAccount",{is:!0,then:d.Z_().min(5,"Your password must be at least 5 characters long").max(50,"Your password must be at least 5 characters long").required("Please provide a password")}),R=d.Z_().required("Please provide your coupon code"),S={schema:d.Ry().shape({email:o,password:l,tandc:c}),initialValue:{email:"",password:"",tandc:!1}},B={schema:d.Ry().shape({username:t,password:l,email:o}),initialValue:{username:"",password:"",email:""}},O={schema:d.Ry().shape((a={country:u,fName:m,lName:h,address:Z,state:y},(0,i.Z)(a,"country",u),(0,i.Z)(a,"cName",p),(0,i.Z)(a,"email",o),(0,i.Z)(a,"city",f),(0,i.Z)(a,"zip",v),(0,i.Z)(a,"phone",x),(0,i.Z)(a,"country2",w),(0,i.Z)(a,"fName2",b),(0,i.Z)(a,"lName2",g),(0,i.Z)(a,"address2",j),(0,i.Z)(a,"state2",q),(0,i.Z)(a,"country2",w),(0,i.Z)(a,"cName2",N),(0,i.Z)(a,"city2",P),(0,i.Z)(a,"zip2",A),(0,i.Z)(a,"phone2",C),(0,i.Z)(a,"email2",E),(0,i.Z)(a,"defferentAddress",_),(0,i.Z)(a,"createAccount",k),(0,i.Z)(a,"password2",Y),a)),initialValue:(n={country:"",fName:"",lName:"",address:"",state:""},(0,i.Z)(n,"country",""),(0,i.Z)(n,"cName",""),(0,i.Z)(n,"city",""),(0,i.Z)(n,"zip",""),(0,i.Z)(n,"phone",""),(0,i.Z)(n,"country2",""),(0,i.Z)(n,"fName2",""),(0,i.Z)(n,"lName2",""),(0,i.Z)(n,"address2",""),(0,i.Z)(n,"state2",""),(0,i.Z)(n,"country2",""),(0,i.Z)(n,"cName2",""),(0,i.Z)(n,"city2",""),(0,i.Z)(n,"zip2",""),(0,i.Z)(n,"phone2",""),(0,i.Z)(n,"email",""),(0,i.Z)(n,"email2",""),(0,i.Z)(n,"defferentAddress",!1),(0,i.Z)(n,"createAccount",!1),n)},z={schema:d.Ry().shape({coupon:R}),initialValue:{coupon:""}}},8740:function(e,r,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/register",function(){return s(9249)}])}},function(e){e.O(0,[640,281,851,774,888,179],(function(){return r=8740,e(e.s=r);var r}));var r=e.O();_N_E=r}]);