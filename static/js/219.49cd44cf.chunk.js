"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[219],{687:function(e,r,t){t.d(r,{Bt:function(){return f},Mc:function(){return i},Tg:function(){return o},vw:function(){return l},y:function(){return p}});var n=t(861),a=t(757),c=t.n(a),u=t(243);u.Z.defaults.baseURL="https://api.themoviedb.org/3";var s="16d168f707f6ea30309ca4c94be54a91",o=function(){var e=(0,n.Z)(c().mark((function e(){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("/trending/movie/day?api_key=".concat(s));case 3:return r=e.sent,e.abrupt("return",r.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,n.Z)(c().mark((function e(r){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("/movie/".concat(r,"?api_key=").concat(s));case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(c().mark((function e(r){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("/movie/".concat(r,"/credits?api_key=").concat(s));case 3:return t=e.sent,e.abrupt("return",t.data.cast);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(c().mark((function e(r){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("/movie/".concat(r,"/reviews?api_key=").concat(s));case 3:return t=e.sent,e.abrupt("return",t.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(c().mark((function e(r){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("/search/movie?query=".concat(r,"&api_key=").concat(s));case 3:return t=e.sent,console.log(t.data.results),e.abrupt("return",t.data.results);case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(r){return e.apply(this,arguments)}}()},794:function(e,r,t){t.d(r,{O:function(){return u}});var n=t(689),a=t(87),c=t(184),u=function(e){var r=e.movies,t=e.basePath,u=(0,n.TH)();return(0,c.jsx)("ul",{children:r.map((function(e){return(0,c.jsx)("li",{children:(0,c.jsx)(a.rU,{to:"".concat(t).concat(e.id),state:{from:u},children:e.title})},e.id)}))})}},219:function(e,r,t){t.r(r),t.d(r,{default:function(){return y}});var n,a,c,u=t(861),s=t(439),o=t(757),i=t.n(o),p=t(87),f=t(791),l=t(794),v=t(168),d=t(867),h=d.ZP.input(n||(n=(0,v.Z)(["\n  border: 1px solid #ccc;\n  border-radius: 2px;\n  width: 45vh;\n\n  &:focus {\n    outline: none;\n    box-shadow: 0px 0px 5px 0px blue;\n  }\n"]))),x=d.ZP.button(a||(a=(0,v.Z)(["\n  border: 1px solid #ccc;\n  border-radius: 2px;\n  cursor: pointer;\n  font-size: 12px;\n"]))),m=d.ZP.form(c||(c=(0,v.Z)(["\n  display: flex;\n  gap: 2px;\n  margin-bottom: 20px;\n"]))),b=t(184),w=function(e){var r=e.onSubmit,t=e.value;return(0,b.jsxs)(m,{onSubmit:r,children:[(0,b.jsx)(h,{type:"text",name:"input",defaultValue:t,required:!0}),(0,b.jsx)(x,{type:"submit",children:"Search"})]})},Z=t(687),g=t(386);function y(){var e,r=(0,f.useState)([]),t=(0,s.Z)(r,2),n=t[0],a=t[1],c=(0,p.lr)(),o=(0,s.Z)(c,2),v=o[0],d=o[1],h=null!==(e=v.get("query"))&&void 0!==e?e:"";(0,f.useEffect)((function(){if(""!==h){var e=function(){var e=(0,u.Z)(i().mark((function e(){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,Z.vw)(h);case 3:r=e.sent,a(r),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}}),[h]);return(0,b.jsxs)(g._,{children:[(0,b.jsx)(w,{onSubmit:function(e){e.preventDefault();var r=e.currentTarget;d({query:r.elements.input.value})},value:h}),(0,b.jsx)(l.O,{movies:n,basePath:""})]})}}}]);
//# sourceMappingURL=219.49cd44cf.chunk.js.map