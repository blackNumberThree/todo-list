(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{22:function(t,e,n){},23:function(t,e,n){"use strict";n.r(e);var i=n(6),a=n.n(i),c=n(0),r=n.n(c),s=n(4),l=n(2),o=n(12),u=n(3),j=n(8),b=function(t){return{type:"ADD",payload:t}},d=function(t){return{type:"DLT",payload:t}},f=function(t){return{type:"CHNG",payload:t}},p=function(t){return{type:"setFilters",payload:t}},O=n(1);var h=Object(u.b)(null,(function(t){var e=Object(s.a)(b,t);return{dispatchNewCase:function(t){return e(t)}}}))((function(t){var e=t.dispatchNewCase,n=Object(c.useState)(""),i=Object(j.a)(n,2),a=i[0],r=i[1];return Object(O.jsxs)("div",{className:"input-block",children:[Object(O.jsx)("input",{type:"text",onChange:function(t){r(t.target.value)},value:a,placeholder:"input new case"}),Object(O.jsx)("button",{className:"addCase",onClick:function(){var t={label:a,important:!1,id:Date.now()};e(t),r("")},value:a,children:"ADD"})]})}));var m=Object(u.b)((function(t){return{filterList:t.filterList}}),(function(t){var e=Object(s.a)(p,t);return{dispatchFilter:function(t){return e(t)}}}))((function(t){var e=t.dispatchFilter,n=t.filterList;return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("div",{className:"find-block",children:[Object(O.jsx)("button",{className:n.importantFilter?"":"red-shadow",onClick:function(){e(Object(l.a)(Object(l.a)({},n),{},{importantFilter:!1}))},children:"All case"}),Object(O.jsx)("button",{className:n.importantFilter?"red-shadow":"",onClick:function(){e(Object(l.a)(Object(l.a)({},n),{},{importantFilter:!0}))},children:"only important"}),Object(O.jsx)("br",{}),Object(O.jsx)("input",{type:"text",onChange:function(t){""!==t.target.value?e(Object(l.a)(Object(l.a)({},n),{},{inputFilter:!0,inputValue:t.target.value})):e(Object(l.a)(Object(l.a)({},n),{},{inputFilter:!1,inputValue:""}))},placeholder:"input what you are looking "})]})})}));var v=Object(u.b)(null,(function(t){var e=Object(s.a)(f,t),n=Object(s.a)(d,t);return{dispatchDel:function(t){return n(t)},dispathChange:function(t){return e(t)}}}))((function(t){var e=t.element,n=t.dispatchDel,i=t.dispathChange,a=e.label,r=e.important,s=e.id,l=Object(c.useState)(r),o=Object(j.a)(l,2),u=o[0],b=o[1];return r!==u&&b(r),console.log("mini-change"),Object(O.jsxs)("li",{className:u?"important list-item":"list-item",children:[Object(O.jsx)("button",{className:"button-important",onClick:function(){i(s)},children:Object(O.jsx)("i",{className:"fa fa-exclamation"})}),Object(O.jsx)("span",{children:a}),Object(O.jsx)("button",{className:"button-delete",onClick:function(){n(s)},children:Object(O.jsx)("i",{className:"fa fa-trash-o"})})]})}));var x=Object(u.b)((function(t){return{filterList:t.filterList,caseMassive:t.caseMassive}}))((function(t){var e=t.filterList,n=t.caseMassive;e.importantFilter&&(n=n.filter((function(t){return!0===t.important}))),e.inputFilter&&(n=n.filter((function(t){return!0===t.label.includes(e.inputValue)})));var i=n.map((function(t){return Object(O.jsx)(v,{element:t},t.id)}));return Object(O.jsx)("ol",{children:i})})),L=Object(s.b)((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{caseMassive:[],filterList:{inputFilter:!1,inputValue:"",importantFilter:!1}},e=arguments.length>1?arguments[1]:void 0,n=e.type,i=e.payload,a=t.caseMassive,c=t.filterList,r="DLT"===n||"CHNG"===n?a.findIndex((function(t){return t.id===i})):void 0;switch(n){case"ADD":return{caseMassive:[].concat(Object(o.a)(a),[i]),filterList:Object(l.a)({},c)};case"setFilters":return Object(l.a)(Object(l.a)({},t),{},{filterList:i});case"DLT":return{caseMassive:a.filter((function(t,e){if(e!==r)return t})),filterList:Object(l.a)({},c)};case"CHNG":return{caseMassive:a.map((function(t,e){return e===r&&(t.important=!t.important),t})),filterList:c};default:return{caseMassive:a,filterList:c}}}));function N(){return Object(O.jsx)(r.a.StrictMode,{children:Object(O.jsx)(u.a,{store:L,children:Object(O.jsxs)("div",{className:"main-block",children:[Object(O.jsx)("h1",{children:"ToDo List"}),Object(O.jsx)(m,{}),Object(O.jsx)(x,{}),Object(O.jsx)(h,{})]})})})}n(22);a.a.render(Object(O.jsx)(N,{}),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.34e7ed6e.chunk.js.map