(this["webpackJsonpreact_tabs-with-router"]=this["webpackJsonpreact_tabs-with-router"]||[]).push([[0],{16:function(e,t,c){},18:function(e,t,c){"use strict";c.r(t);var a=c(9),n=c.n(a),s=c(4),i=c(2),b=(c(14),c(15),c(16),c(1)),j=function(){return Object(b.jsx)("h1",{className:"title",children:"Page not found"})},r=function(){return Object(b.jsx)("h1",{className:"title",children:"Home page"})},l=c(6),d=c.n(l),o=function(e){var t=e.tab,c=e.isSelectedTab,a=t.id,n=t.title;return Object(b.jsx)("li",{"data-cy":"Tab",className:d()({"is-active":c}),children:Object(b.jsx)(s.b,{to:"../".concat(a),children:n})})},x=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],h=function(){var e,t=Object(i.h)().tabId,c=void 0===t?"":t,a=(null===(e=x.find((function(e){return e.id===c})))||void 0===e?void 0:e.content)||"Please select a tab";return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h1",{className:"title",children:"Tabs page"}),Object(b.jsx)("div",{className:"tabs is-boxed",children:Object(b.jsx)("ul",{children:x.map((function(e){var t=e.id===c;return Object(b.jsx)(o,{tab:e,isSelectedTab:t},e.id)}))})}),Object(b.jsx)("div",{className:"block","data-cy":"TabContent",children:a})]})},O=function(e){var t=e.to,c=e.text;return Object(b.jsx)(s.c,{to:t,className:function(e){var t=e.isActive;return d()("navbar-item",{"is-active":t})},children:c})},m=function(){return Object(b.jsx)("nav",{className:"navbar is-light is-fixed-top is-mobile has-shadow","data-cy":"Nav",children:Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("div",{className:"navbar-brand",children:[Object(b.jsx)(O,{to:"/",text:"Home"}),Object(b.jsx)(O,{to:"/tabs",text:"Tabs"})]})})})},u=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(m,{}),Object(b.jsx)("div",{className:"section",children:Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)(i.d,{children:[Object(b.jsx)(i.b,{path:"/",element:Object(b.jsx)(r,{})}),Object(b.jsx)(i.b,{path:"/home",element:Object(b.jsx)(i.a,{to:"/",replace:!0})}),Object(b.jsxs)(i.b,{path:"tabs",children:[Object(b.jsx)(i.b,{index:!0,element:Object(b.jsx)(h,{})}),Object(b.jsx)(i.b,{path:":tabId",element:Object(b.jsx)(h,{})})]}),Object(b.jsx)(i.b,{path:"*",element:Object(b.jsx)(j,{})})]})})})]})};n.a.render(Object(b.jsx)(s.a,{children:Object(b.jsx)(u,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.e67d0ef8.chunk.js.map