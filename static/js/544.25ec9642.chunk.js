"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[544],{42:function(e,t,n){n.d(t,{LI:function(){return v},Mc:function(){return s},OC:function(){return p},vw:function(){return i}});var r=n(861),c=n(757),a=n.n(c),u=n(44),o="13376ece24dd3764203e2484d15e71b5",i=function(){var e=(0,r.Z)(a().mark((function e(){var t,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.ZP.get("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(o));case 3:return t=e.sent,n=t.data.results,e.abrupt("return",n);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=(0,r.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.ZP.get("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(o));case 3:return n=e.sent,r=n.data,e.abrupt("return",r);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(a().mark((function e(t,n){var r,c;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.ZP.get("https://api.themoviedb.org/3/movie/".concat(t,"/").concat(n,"?api_key=").concat(o));case 3:return r=e.sent,c=r.data,e.abrupt("return",c);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,n){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.ZP.get("https://api.themoviedb.org/3/search/movie?api_key=".concat(o,"&query=").concat(t,"&page=1&include_adult=false"));case 3:return n=e.sent,e.abrupt("return",n.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},544:function(e,t,n){n.r(t),n.d(t,{default:function(){return l}});var r=n(861),c=n(885),a=n(757),u=n.n(a),o=n(791),i=n(689),s=n(42),p=n(184),v=function(e){var t=e.movieReview;return(0,p.jsx)(p.Fragment,{children:(null===t||void 0===t?void 0:t.length)>0?(0,p.jsx)("ul",{children:t.map((function(e){var t=e.id,n=e.author,r=e.content;return(0,p.jsxs)("li",{children:[(0,p.jsx)("h4",{children:"Author: ".concat(n)}),(0,p.jsx)("p",{children:r})]},t)}))}):(0,p.jsx)("p",{children:" We don't have any reviews for this movie"})})},l=function(){var e=(0,o.useState)([]),t=(0,c.Z)(e,2),n=t[0],a=t[1],l=(0,i.UO)().movieId;return(0,o.useEffect)((function(){var e=function(){var e=(0,r.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.OC)(l,"reviews");case 2:t=e.sent,a(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[l]),(0,p.jsx)("div",{children:(0,p.jsx)(v,{movieReview:n.results})})}}}]);
//# sourceMappingURL=544.25ec9642.chunk.js.map