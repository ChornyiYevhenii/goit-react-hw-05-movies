/*! For license information please see 544.f5dd9f65.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[544],{4723:function(e,t,r){r.d(t,{Z:function(){return p}});var n,a,i=r(7689),o=r(168),c=r(6444),u=r(1087),s=(0,c.ZP)(u.rU)(n||(n=(0,o.Z)(["\n  padding: 5px;\n  color: rgba(0, 0, 0);\n  text-decoration: none;\n\n  &:hover,\n  &:focus {\n\n    box-shadow: 0 3px 4px rgba(0, 0, 0, 0.3);\n    color: #02c59b;\n  }\n"]))),l=c.ZP.ul(a||(a=(0,o.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n"]))),f=r(184),p=function(e){var t=e.movies,r=(0,i.TH)();return(0,f.jsx)(f.Fragment,{children:(0,f.jsx)(l,{children:t.map((function(e){var t=e.id,n=e.title;return(0,f.jsx)("li",{children:(0,f.jsx)(s,{state:{from:r},to:"/movies/".concat(t),children:n})},t)}))})})}},378:function(e,t,r){r.d(t,{Z:function(){return i}});r(2791);var n=r(8175),a=r(184),i=function(){return(0,a.jsxs)(n.ZP,{speed:2,width:400,height:250,viewBox:"0 0 400 250",backgroundColor:"#f3f3f3",foregroundColor:"#ecebeb",children:[(0,a.jsx)("rect",{x:"25",y:"15",rx:"5",ry:"5",width:"220",height:"10"}),(0,a.jsx)("rect",{x:"25",y:"45",rx:"5",ry:"5",width:"220",height:"10"}),(0,a.jsx)("rect",{x:"25",y:"75",rx:"5",ry:"5",width:"220",height:"10"}),(0,a.jsx)("rect",{x:"25",y:"104",rx:"5",ry:"5",width:"220",height:"10"}),(0,a.jsx)("rect",{x:"25",y:"130",rx:"5",ry:"5",width:"220",height:"10"}),(0,a.jsx)("rect",{x:"25",y:"156",rx:"5",ry:"5",width:"220",height:"10"}),(0,a.jsx)("rect",{x:"24",y:"179",rx:"5",ry:"5",width:"220",height:"10"}),(0,a.jsx)("rect",{x:"24",y:"201",rx:"5",ry:"5",width:"220",height:"10"})]})}},9544:function(e,t,r){r.r(t);var n=r(5861),a=r(9439),i=r(7757),o=r.n(i),c=r(2791),u=r(3243),s=r(4723),l=r(378),f=r(184);t.default=function(){var e=(0,c.useState)([]),t=(0,a.Z)(e,2),r=t[0],i=t[1],p=(0,c.useState)(!1),d=(0,a.Z)(p,2),h=d[0],y=d[1],g=(0,c.useState)(!1),x=(0,a.Z)(g,2),m=x[0],v=x[1];return(0,c.useEffect)((function(){var e=function(){var e=(0,n.Z)(o().mark((function e(){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,y(!0),e.next=4,(0,u._L)();case 4:t=e.sent,i(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),v(!0);case 11:return e.prev=11,y(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("h1",{children:"Trending today"}),m&&"Error, please reload the page",h&&(0,f.jsx)(l.Z,{}),(0,f.jsx)(s.Z,{movies:r})]})}},3243:function(e,t,r){r.d(t,{TP:function(){return p},Wf:function(){return l},_L:function(){return u},tx:function(){return g},vQ:function(){return h}});var n=r(5861),a=r(7757),i=r.n(a),o=r(1243),c="5f76dde929e4c69194ca7d9e261d3a85";function u(){return s.apply(this,arguments)}function s(){return(s=(0,n.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("trending/movie/day?api_key=".concat(c));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(e){return f.apply(this,arguments)}function f(){return(f=(0,n.Z)(i().mark((function e(t){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("search/movie?api_key=".concat(c,"&language=en-US&query=").concat(t,"&page=1"));case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e){return d.apply(this,arguments)}function d(){return(d=(0,n.Z)(i().mark((function e(t){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("movie/".concat(t,"?api_key=").concat(c,"&language=en-US"));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e){return y.apply(this,arguments)}function y(){return(y=(0,n.Z)(i().mark((function e(t){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("movie/".concat(t,"/credits?api_key=").concat(c));case 2:return r=e.sent,e.abrupt("return",r.data.cast);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(e){return x.apply(this,arguments)}function x(){return(x=(0,n.Z)(i().mark((function e(t){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("movie/".concat(t,"/reviews?api_key=").concat(c));case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}o.Z.defaults.baseURL="https://api.themoviedb.org/3"},8175:function(e,t,r){var n=r(2791),a=function(){return a=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},a.apply(this,arguments)};var i=function(e){var t=e.animate,r=e.animateBegin,i=e.backgroundColor,o=e.backgroundOpacity,c=e.baseUrl,u=e.children,s=e.foregroundColor,l=e.foregroundOpacity,f=e.gradientRatio,p=e.gradientDirection,d=e.uniqueKey,h=e.interval,y=e.rtl,g=e.speed,x=e.style,m=e.title,v=e.beforeMask,b=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r}(e,["animate","animateBegin","backgroundColor","backgroundOpacity","baseUrl","children","foregroundColor","foregroundOpacity","gradientRatio","gradientDirection","uniqueKey","interval","rtl","speed","style","title","beforeMask"]),w=d||Math.random().toString(36).substring(6),k=w+"-diff",E=w+"-animated-diff",Z=w+"-aria",j=y?{transform:"scaleX(-1)"}:null,O="0; "+h+"; 1",C=g+"s",_="top-bottom"===p?"rotate(90)":void 0;return(0,n.createElement)("svg",a({"aria-labelledby":Z,role:"img",style:a(a({},x),j)},b),m?(0,n.createElement)("title",{id:Z},m):null,v&&(0,n.isValidElement)(v)?v:null,(0,n.createElement)("rect",{role:"presentation",x:"0",y:"0",width:"100%",height:"100%",clipPath:"url("+c+"#"+k+")",style:{fill:"url("+c+"#"+E+")"}}),(0,n.createElement)("defs",null,(0,n.createElement)("clipPath",{id:k},u),(0,n.createElement)("linearGradient",{id:E,gradientTransform:_},(0,n.createElement)("stop",{offset:"0%",stopColor:i,stopOpacity:o},t&&(0,n.createElement)("animate",{attributeName:"offset",values:-f+"; "+-f+"; 1",keyTimes:O,dur:C,repeatCount:"indefinite",begin:r})),(0,n.createElement)("stop",{offset:"50%",stopColor:s,stopOpacity:l},t&&(0,n.createElement)("animate",{attributeName:"offset",values:-f/2+"; "+-f/2+"; "+(1+f/2),keyTimes:O,dur:C,repeatCount:"indefinite",begin:r})),(0,n.createElement)("stop",{offset:"100%",stopColor:i,stopOpacity:o},t&&(0,n.createElement)("animate",{attributeName:"offset",values:"0; 0; "+(1+f),keyTimes:O,dur:C,repeatCount:"indefinite",begin:r})))))};i.defaultProps={animate:!0,backgroundColor:"#f5f6f7",backgroundOpacity:1,baseUrl:"",foregroundColor:"#eee",foregroundOpacity:1,gradientRatio:2,gradientDirection:"left-right",id:null,interval:.25,rtl:!1,speed:1.2,style:{},title:"Loading...",beforeMask:null};var o=function(e){return e.children?(0,n.createElement)(i,a({},e)):(0,n.createElement)(c,a({},e))},c=function(e){return(0,n.createElement)(o,a({viewBox:"0 0 476 124"},e),(0,n.createElement)("rect",{x:"48",y:"8",width:"88",height:"6",rx:"3"}),(0,n.createElement)("rect",{x:"48",y:"26",width:"52",height:"6",rx:"3"}),(0,n.createElement)("rect",{x:"0",y:"56",width:"410",height:"6",rx:"3"}),(0,n.createElement)("rect",{x:"0",y:"72",width:"380",height:"6",rx:"3"}),(0,n.createElement)("rect",{x:"0",y:"88",width:"178",height:"6",rx:"3"}),(0,n.createElement)("circle",{cx:"20",cy:"20",r:"20"}))};t.ZP=o}}]);
//# sourceMappingURL=544.f5dd9f65.chunk.js.map