"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[53],{687:function(e,r,t){t.d(r,{Bt:function(){return f},Mc:function(){return i},Tg:function(){return o},vw:function(){return l},y:function(){return p}});var n=t(861),a=t(757),c=t.n(a),s=t(243);s.Z.defaults.baseURL="https://api.themoviedb.org/3";var u="16d168f707f6ea30309ca4c94be54a91",o=function(){var e=(0,n.Z)(c().mark((function e(){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("/trending/movie/day?api_key=".concat(u));case 3:return r=e.sent,e.abrupt("return",r.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,n.Z)(c().mark((function e(r){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("/movie/".concat(r,"?api_key=").concat(u));case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(c().mark((function e(r){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("/movie/".concat(r,"/credits?api_key=").concat(u));case 3:return t=e.sent,e.abrupt("return",t.data.cast);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(c().mark((function e(r){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("/movie/".concat(r,"/reviews?api_key=").concat(u));case 3:return t=e.sent,e.abrupt("return",t.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(c().mark((function e(r){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("/search/movie?query=".concat(r,"&api_key=").concat(u));case 3:return t=e.sent,e.abrupt("return",t.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}()},53:function(e,r,t){t.r(r),t.d(r,{default:function(){return g}});var n,a,c,s=t(861),u=t(439),o=t(757),i=t.n(o),p=t(791),f=t(689),l=t(687),v=t(168),h=t(867),d=h.ZP.ul(n||(n=(0,v.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 15px;\n  padding: 20px;\n"]))),m=h.ZP.li(a||(a=(0,v.Z)(["\n  flex-basis: calc(100vh/4);\n"]))),x=h.ZP.img(c||(c=(0,v.Z)(["\n  width: 100%;\n"]))),w=t(184);function g(){var e=(0,f.UO)().movieId,r=(0,p.useState)([]),t=(0,u.Z)(r,2),n=t[0],a=t[1];(0,p.useEffect)((function(){if(e){var r=function(){var r=(0,s.Z)(i().mark((function r(){var t;return i().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,(0,l.y)(e);case 3:t=r.sent,a(t),r.next=10;break;case 7:r.prev=7,r.t0=r.catch(0),console.error(r.t0.message);case 10:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(){return r.apply(this,arguments)}}();r()}}),[e]);return(0,w.jsx)(d,{children:n.map((function(e){return(0,w.jsxs)(m,{children:[(0,w.jsx)(x,{src:e.profile_path?"https://image.tmdb.org/t/p/w500/".concat(e.profile_path):"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700",alt:"actor"}),(0,w.jsx)("p",{children:e.name}),(0,w.jsxs)("p",{children:["Character: ",e.character]})]},e.id)}))})}}}]);
//# sourceMappingURL=53.0ae1a5e3.chunk.js.map