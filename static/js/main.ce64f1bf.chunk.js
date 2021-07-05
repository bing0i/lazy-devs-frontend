(this["webpackJsonplazy-devs"]=this["webpackJsonplazy-devs"]||[]).push([[1],{10:function(e,t){e.exports={GET_ALL_CATEGORIES:"getAllCategories",GET_ALL_POSTS:"getAllPosts",PUSH_POST:"pushPost",LOGIN:"login",LOGOUT:"logout"}},19:function(e,t){var n="https://lazy-devs.herokuapp.com";e.exports={URL_CATEGORIES:"".concat(n,"/api/categories"),URL_LOGIN:"".concat(n,"/users/login"),URL_LOGOUT:"".concat(n,"/users/logout"),URL_POSTS:"".concat(n,"/api/posts")}},33:function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return s}));var c=n(10),r=n.n(c),a=function(e){return{type:r.a.PUSH_POST,payload:e}},o=function(e){return{type:r.a.LOGIN,payload:e}},s=function(e){return{type:r.a.LOGOUT,payload:e}}},50:function(e,t,n){},80:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(25),o=n.n(a),s=(n(50),n(20)),i=n(8),u=n(17),l=n(35),A=n(4),b=function(e){var t=e.text,n=e.path,r=e.clicked,a=e.onItemClick,o=Object(c.useCallback)((function(){return a(n)}),[a,n]);return Object(A.jsx)("li",{className:"inline-block",children:Object(A.jsx)(s.b,{to:"/".concat(n),onClick:o,className:"text-sm font-bold inline-block uppercase py-4 mx-3\n          ".concat(r?"text-hover-accent":"text-gray-500","\n          transition duration-300 ease-in-out\n          hover:text-light-text transform hover:scale-110\n        "),children:t})})},p=Object(c.memo)(b),d=n(33),O=function(){var e=Object(u.c)((function(e){return e.categories})),t=Object(u.c)((function(e){return e.isLogin})),n=Object(u.b)(),r=Object(c.useState)(""),a=Object(l.a)(r,2),o=a[0],i=a[1],b=Object(c.useCallback)((function(e){return i(e)}),[]),O=Object(c.useCallback)((function(){b("".concat(t?"logout":"login")),t&&n(Object(d.b)({}))}),[b,t,n]);return Object(A.jsxs)("nav",{className:"grid grid-cols-10 px-9",children:[Object(A.jsxs)("ul",{className:"col-span-8",children:[Object(A.jsx)("li",{className:"inline-block",children:Object(A.jsx)(s.b,{to:"/",className:"mx-3 inline-block align-middle py-4\n            transition duration-300 ease-in-out\n            hover:text-light-text transform hover:scale-150\n            ",children:Object(A.jsx)("img",{src:"data:image/gif;base64,R0lGODlhEAAQAPIAAAAAAAsdRx1O2GCl+qq74wAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJZAAFACwAAAAAEAAQAAAD6lgiIiKilFJKKaUIUUoRQlEURVEUhSAUQiEUglAURVEUhSAURVEUAkFhMBgUCgWBoFAoFAoCwSBACAwKhYKgUCgUCoJBgBAgBAaFgkBQKBQEgsEgQAgMBoWCQCAQCAQCBQMDAwMDBQUFBQICAgICAwMFBQUFBQMDBQUFBQUFBQMDBQMFAwUDAwUFBQUFBQUDAwUFBQUFAwMFBQUFBQUFAwMFBQUFBQMDBQUFBQUFBQUDBQUFBQUDBQUFBQUFBQUFAwMFBQUDAwUFBQUFBQUFBQMDAwMDAwMFBQUFBQUFBQUKDBgwYMCAAgUSAAAh+QQJZAAFACwAAAAAEAAQAIIAAAAMRXodTthgpfqqu+MAAAAAAAAAAAAD6lhVVVVFCCGEEKWUUkophSAURSEIRVEURVEUglAIhVAIQlEUwzAUAkGhUCgUBIJCYRAgBAYCQaFQKBQEgsIgQAgQAgNBoVAoFASFwmAQIAQGA4GgUCgIBIVCYTAYDAYFAgICAgICAgUDAwUFBQUFAwMCAgICAgUFAwMFAwUDBQMDBQUFBQUFBQMDBQUFBQUDAwUFBQUFBQUDAwUFBQUFAwMFBQUFBQUFBQMFBQUFBQMFBQUFBQUFBQUDAwUFBQMDBQUFBQUFBQUFAwMDAwMDAwUFBQUFBQUFBQUDAwMDAwUKFChQoECBAgUSAAA7",alt:"logo",className:"h-5"})})}),e.map((function(e){return Object(A.jsx)(p,{text:e.title.replace("-"," "),path:e.title,clicked:e.title===o,onItemClick:b},e._id)}))]}),Object(A.jsxs)("ul",{className:"col-span-2 justify-self-end",children:[t&&Object(A.jsx)(p,{text:"create post",path:"create-post",clicked:"create-post"===o,onItemClick:b}),Object(A.jsx)("li",{className:"inline-block",children:Object(A.jsx)(s.b,{to:"/".concat(t?"":"login"),onClick:O,className:"text-sm font-bold inline-block uppercase py-4 mx-3\n              ".concat("login"===o?"text-hover-accent":"text-gray-500","\n              transition duration-300 ease-in-out\n              hover:text-light-text transform hover:scale-110\n            "),children:t?"LOG OUT":"LOG IN"})})]})]})},j=Object(c.memo)(O),U=Object(c.lazy)((function(){return Promise.all([n.e(9),n.e(5)]).then(n.bind(null,86))})),x=Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,87))})),f=Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(8)]).then(n.bind(null,81))})),h=Object(c.lazy)((function(){return n.e(7).then(n.bind(null,84))})),g=Object(c.lazy)((function(){return n.e(6).then(n.bind(null,85))})),Q="/lazy-devs-frontend",m=function(){var e=Object(u.c)((function(e){return e.categories})),t=Object(u.c)((function(e){return e.posts})),n=Object(u.c)((function(e){return e.isLogin}));return Object(A.jsx)(s.a,{children:Object(A.jsxs)(c.Suspense,{fallback:Object(A.jsx)("div",{className:"mt-16 text-sm font-bold text-center animate-pulse",children:"LOADING..."}),children:[Object(A.jsx)(j,{}),Object(A.jsxs)(i.d,{children:[Object(A.jsx)(i.b,{exact:!0,path:"".concat(Q,"/login"),component:h,children:n&&Object(A.jsx)(i.a,{to:"".concat(Q)})}),Object(A.jsx)(i.b,{exact:!0,path:"".concat(Q,"/"),component:g}),Object(A.jsx)(i.b,{exact:!0,path:"".concat(Q,"/create-post"),component:x}),e.map((function(e){return Object(A.jsx)(i.b,{exact:!0,path:"".concat(Q,"/").concat(e.title),children:Object(A.jsx)(U,{category:e.title})},e._id)})),t.map((function(e){return Object(A.jsx)(i.b,{exact:!0,path:"".concat(Q,"/").concat(e.category,"/").concat(e._id),children:Object(A.jsx)(f,{post:e})},e._id)}))]})]})})},B=Object(c.memo)(m),F=n(22),w=n(15),v=Object(w.b)({name:"posts",initialState:[],reducers:{addNewPost:function(e,t){e.push(t.payload)},fetchAllPosts:function(e,t){return Object(F.a)(t.payload)}}}),C=v.actions,k=C.addNewPost,y=C.fetchAllPosts,S=v.reducer,E=Object(w.b)({name:"categories",initialState:[],reducers:{addNewCategory:function(e,t){e.push(t.payload)},fetchAllCategories:function(e,t){return Object(F.a)(t.payload)}}}),L=E.actions,I=(L.addNewCategory,L.fetchAllCategories),D=E.reducer,M=Object(w.b)({name:"errors",initialState:[],reducers:{reportError:function(e,t){e.push(t.payload)}}}),G=M.actions.reportError,N=M.reducer,R=Object(w.b)({name:"isLogin",initialState:!1,reducers:{login:function(e,t){return t.payload},logout:function(e,t){return t.payload}}}),T=R.actions,_=T.login,P=T.logout,V=R.reducer,z=n(45),K=n(6),q=n.n(K),J=n(7),Y=n(18),H=n.n(Y),W=n(10),Z=n(19),X=q.a.mark(te),$=q.a.mark(ne);function ee(){return H.a.request({method:"get",url:Z.URL_CATEGORIES})}function te(){var e;return q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(J.b)(ee);case 3:return e=t.sent,t.next=6,Object(J.c)(I(e.data));case 6:t.next=12;break;case 8:return t.prev=8,t.t0=t.catch(0),t.next=12,Object(J.c)(G({message:t.t0.message}));case 12:case"end":return t.stop()}}),X,null,[[0,8]])}function ne(){return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(J.d)(W.GET_ALL_CATEGORIES,te);case 2:case"end":return e.stop()}}),$)}var ce=[ne],re=q.a.mark(ue),ae=q.a.mark(le),oe=q.a.mark(be),se=q.a.mark(pe);function ie(e){return H.a.request({method:"post",url:Z.URL_POSTS,data:e})}function ue(e){var t;return q.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(J.b)(ie,e.payload);case 3:return t=n.sent,n.next=6,Object(J.c)(k(t.data));case 6:n.next=12;break;case 8:return n.prev=8,n.t0=n.catch(0),n.next=12,Object(J.c)(G({message:n.t0.message}));case 12:case"end":return n.stop()}}),re,null,[[0,8]])}function le(){return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(J.d)(W.PUSH_POST,ue);case 2:case"end":return e.stop()}}),ae)}function Ae(){return H.a.request({method:"get",url:Z.URL_POSTS})}function be(){var e;return q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(J.b)(Ae);case 3:return e=t.sent,t.next=6,Object(J.c)(y(e.data));case 6:t.next=12;break;case 8:return t.prev=8,t.t0=t.catch(0),t.next=12,Object(J.c)(G({message:t.t0.message}));case 12:case"end":return t.stop()}}),oe,null,[[0,8]])}function pe(){return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(J.d)(W.GET_ALL_POSTS,be);case 2:case"end":return e.stop()}}),se)}var de=[le,pe],Oe=q.a.mark(ge),je=q.a.mark(Qe),Ue=q.a.mark(me),xe=q.a.mark(Be);function fe(e){return H.a.request({method:"post",url:Z.URL_LOGIN,data:e})}function he(){return H.a.request({method:"get",url:Z.URL_LOGOUT})}function ge(e){return q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(J.b)(fe,e.payload);case 3:if(!t.sent.data){t.next=7;break}return t.next=7,Object(J.c)(_(!0));case 7:t.next=13;break;case 9:return t.prev=9,t.t0=t.catch(0),t.next=13,Object(J.c)(G({message:t.t0.message}));case 13:case"end":return t.stop()}}),Oe,null,[[0,9]])}function Qe(){return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(J.b)(he);case 3:if(!e.sent.data){e.next=7;break}return e.next=7,Object(J.c)(P(!1));case 7:e.next=13;break;case 9:return e.prev=9,e.t0=e.catch(0),e.next=13,Object(J.c)(G({message:e.t0.message}));case 13:case"end":return e.stop()}}),je,null,[[0,9]])}function me(){return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(J.d)(W.LOGIN,ge);case 2:case"end":return e.stop()}}),Ue)}function Be(){return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(J.d)(W.LOGOUT,Qe);case 2:case"end":return e.stop()}}),xe)}var Fe=[me,Be],we=q.a.mark(Ce),ve=[].concat(ce,de,Fe);function Ce(){return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(J.a)(ve.map((function(e){return e()})));case 2:case"end":return e.stop()}}),we)}var ke={posts:S,categories:D,errors:N,isLogin:V},ye=Object(z.a)(),Se=[].concat(Object(F.a)(Object(w.c)({thunk:!1})),[ye]),Ee=Object(w.a)({reducer:ke,preloadedState:{categories:[],posts:[]},middleware:Se});ye.run(Ce),Ee.dispatch({type:"getAllCategories"}),Ee.dispatch({type:"getAllPosts"});var Le=Ee;o.a.render(Object(A.jsx)(r.a.StrictMode,{children:Object(A.jsx)(u.a,{store:Le,children:Object(A.jsx)(B,{})})}),document.getElementById("root"))}},[[80,2,3]]]);
//# sourceMappingURL=main.ce64f1bf.chunk.js.map