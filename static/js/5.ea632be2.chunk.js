(this["webpackJsonplazy-devs"]=this["webpackJsonplazy-devs"]||[]).push([[5],{86:function(e,t,r){"use strict";r.r(t);var s=r(17),c=r(83),n=r(1),a=r(20),i=r(4),o=function(e){var t=e.id,r=e.title,s=e.description,c=e.category,n=e.date;return Object(i.jsxs)("div",{className:"flex-1 m-6 rounded-xl gap-4 grid shadow-md p-9 text-justify \n      transition duration-300 ease-in-out\n      hover:bg-accent transform hover:-translate-y-1 hover:scale-105",children:[Object(i.jsx)(a.b,{to:"/"+c+"/"+t,className:"self-end text-xl font-bold transform text-light-text hover:text-hover-accent",children:r}),Object(i.jsx)("p",{className:"self-start text-sm",children:s}),Object(i.jsx)("p",{className:"self-end text-sm text-gray-500 justify-self-end",children:n})]})},l=Object(n.memo)(o),d=function(e){var t=e.category,r=Object(s.c)((function(e){return e.posts})).filter((function(e){return e.category===t}));return Object(i.jsx)("div",{children:Object(i.jsx)("section",{className:"flex flex-wrap",children:r.map((function(e){return Object(i.jsx)(l,{id:e._id,title:e.title,description:e.description,category:e.category,date:c.DateTime.fromISO(e.date).toLocaleString(c.DateTime.DATETIME_MED)},e._id)}))})})};t.default=Object(n.memo)(d)}}]);
//# sourceMappingURL=5.ea632be2.chunk.js.map