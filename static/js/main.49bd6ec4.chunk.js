(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{22:function(t,e,a){},23:function(t,e,a){"use strict";a.r(e);var n=a(5),c=a.n(n),i=a(3),r=a(0),s=a(12),l=a(10),o=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0,a=e.type,n=e.payload,c=Object(l.a)(t),i="DLT"===a||"CHNG"===a?c.findIndex((function(t){return t.id===n})):void 0;switch(a){case"ADD":return[].concat(Object(l.a)(t),[n]);case"DLT":return c.splice(i,1),c;case"CHNG":return c[i].important=!c[i].important,c;default:return c}},u=a(11),j=a(1),b=0;function d(){var t=Object(r.useState)(""),e=Object(i.a)(t,2),a=e[0],n=e[1];return Object(j.jsxs)("div",{className:"input-block",children:[Object(j.jsx)("input",{type:"text",onChange:function(t){n(t.target.value)},value:a,placeholder:"input new case"}),Object(j.jsx)("button",{className:"addCase",onClick:function(){var t,e={label:a,important:!1,id:b};b+=1,t=e,f.dispatch({type:"ADD",payload:t}),n("")},value:a,children:"ADD"})]})}var p=a(2);var O=function(t){var e=t.element,a=e.label,n=e.important,c=e.id;return Object(j.jsxs)("li",{className:n?"important list-item":"list-item",children:[Object(j.jsx)("button",{className:"button-important",onClick:function(){var t;t=c,f.dispatch({type:"CHNG",payload:t})},children:Object(j.jsx)("i",{className:"fa fa-exclamation"})}),Object(j.jsx)("span",{children:a}),Object(j.jsx)("button",{className:"button-delete",onClick:function(){var t;t=c,f.dispatch({type:"DLT",payload:t})},children:Object(j.jsx)("i",{className:"fa fa-trash-o"})})]})};function m(t){var e=t.caseMassive,a=t.currentFilterList;return a.importantFilter&&(e=e.filter((function(t){return!0===t.important}))),a.inputFilter&&(e=e.filter((function(t){return!0===t.label.includes(a.inputValue)}))),Object(j.jsx)("ol",{children:e.map((function(t){return Object(j.jsx)(O,{element:t},t.id)}))})}function h(t){var e=t.caseMassive,a=Object(r.useState)({inputFilter:!1,inputValue:"",importantFilter:!1}),n=Object(i.a)(a,2),c=n[0],s=n[1];return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"find-block",children:[Object(j.jsx)("button",{className:c.importantFilter?"":"red-shadow",onClick:function(){s(Object(p.a)(Object(p.a)({},c),{},{importantFilter:!1}))},children:"All case"}),Object(j.jsx)("button",{className:c.importantFilter?"red-shadow":"",onClick:function(){s(Object(p.a)(Object(p.a)({},c),{},{importantFilter:!0}))},children:"only important"}),Object(j.jsx)("br",{}),Object(j.jsx)("input",{type:"text",onChange:function(t){""!==t.target.value?s(Object(p.a)(Object(p.a)({},c),{},{inputFilter:!0,inputValue:t.target.value})):s(Object(p.a)(Object(p.a)({},c),{},{inputFilter:!1,inputValue:""}))},placeholder:"input case what you are looking for "})]}),Object(j.jsx)(m,{caseMassive:e,currentFilterList:c})]})}var f=Object(s.a)(o);function v(){var t=Object(r.useState)(f.getState()),e=Object(i.a)(t,2),a=e[0],n=e[1];return f.subscribe((function(){n(f.getState())})),Object(j.jsx)(u.a,{store:f,children:Object(j.jsxs)("div",{className:"main-block",children:[Object(j.jsx)("h1",{children:"ToDo List"}),Object(j.jsx)(h,{caseMassive:a}),Object(j.jsx)(d,{})]})})}a(22);c.a.render(Object(j.jsx)(v,{}),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.49bd6ec4.chunk.js.map