(function e(t,o){if(typeof exports==="object"&&typeof module==="object")module.exports=o();else if(typeof define==="function"&&define.amd)define([],o);else{var r=o();for(var n in r)(typeof exports==="object"?exports:t)[n]=r[n]}})(window,function(){return function(o){var r={};function n(e){if(r[e]){return r[e].exports}var t=r[e]={i:e,l:false,exports:{}};o[e].call(t.exports,t,t.exports,n);t.l=true;return t.exports}n.m=o;n.c=r;n.d=function(e,t,o){if(!n.o(e,t)){Object.defineProperty(e,t,{enumerable:true,get:o})}};n.r=function(e){if(typeof Symbol!=="undefined"&&Symbol.toStringTag){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}Object.defineProperty(e,"__esModule",{value:true})};n.t=function(t,e){if(e&1)t=n(t);if(e&8)return t;if(e&4&&typeof t==="object"&&t&&t.__esModule)return t;var o=Object.create(null);n.r(o);Object.defineProperty(o,"default",{enumerable:true,value:t});if(e&2&&typeof t!="string")for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o};n.n=function(t){var e=t&&t.__esModule?function e(){return t["default"]}:function e(){return t};n.d(e,"a",e);return e};n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)};n.p="/";return n(n.s="./src/Card/index.tsx")}({"./node_modules/webpack/buildin/module.js":function(e,t){e.exports=function(e){if(!e.webpackPolyfill){e.deprecate=function(){};e.paths=[];if(!e.children)e.children=[];Object.defineProperty(e,"loaded",{enumerable:true,get:function(){return e.l}});Object.defineProperty(e,"id",{enumerable:true,get:function(){return e.i}});e.webpackPolyfill=1}return e}},"./src/Card/Card.tsx":function(e,r,n){"use strict";(function(t){(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.enterModule:undefined;e&&e(t)})();var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal["default"].signature:function(e){return e};var s=this&&this.__assign||function(){s=Object.assign||function(e){for(var t,o=1,r=arguments.length;o<r;o++){t=arguments[o];for(var n in t){if(Object.prototype.hasOwnProperty.call(t,n))e[n]=t[n]}}return e};return s.apply(this,arguments)};Object.defineProperty(r,"__esModule",{value:true});r.Card=void 0;var f=n("react");var p=n("@fluentui/react/lib/Button");function o(o){var e,t,r,n,i,l,a,d,c;var u={card:{backgroundColor:"rgb(255, 255, 255)",border:"1px solid #ababab",margin:"0 0 16px",borderRadius:"4px",position:"relative",display:"flex",flexDirection:"column",width:(o===null||o===void 0?void 0:o.width)||"100%",height:(o===null||o===void 0?void 0:o.height)||"150px",userSelect:(o===null||o===void 0?void 0:o.enableUserSelect)?"unset":"none",color:"#333",overflow:"hidden"},top:{borderBottom:"1px solid rgb(237, 235, 233)",overflow:"hidden",height:"100%",display:"grid",gridTemplateColumns:"1fr 120px",columnGap:"8px",padding:"16px",fontFamily:'"Segoe UI", "Segoe UI Web (West European)", "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif'},col:{display:"flex",flexDirection:"column"},rightCol:{display:"flex",flexDirection:"column",alignItems:"flex-end"},leftCol:{display:"flex",flexDirection:"column"},cardTitle:{display:"-webkit-box",WebkitLineClamp:"2",WebkitBoxOrient:"vertical",overflow:"hidden",fontSize:"18px",lineHeight:1.4},projectCode:{fontSize:"16px",opacity:.8},bottom:{display:"flex",padding:"6px 16px",alignItems:"center",justifyContent:"space-between",backgroundColor:"rgb(250, 249, 248)",fontFamily:'"Segoe UI", "Segoe UI Web (West European)", "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif'},circleWrap:{display:"inline-flex",alignItems:"center"},circle:{width:"16px",height:"16px",background:"#06ad51",borderRadius:"50%",border:"1px solid #06ad51",display:"inline-block"},status:{display:"inline-block",marginLeft:"8px"},linkButton:{width:"32px",height:"32px",minWidth:"32px"}};return f.createElement("div",{onClick:function e(t){if(o.onCardClick)o===null||o===void 0?void 0:o.onCardClick(t)},style:u.card},f.createElement("div",{"data-class-name":"card-top",style:u.top},f.createElement("div",{"data-class-name":"card-top-left",style:u.leftCol},f.createElement("div",{style:u.cardTitle},f.createElement("span",null,o===null||o===void 0?void 0:o.cardTitle)),f.createElement("div",{style:u.projectCode},f.createElement("span",null,o===null||o===void 0?void 0:o.cardSubtitle))),f.createElement("div",{"data-class-name":"card-top-right",style:(t=(e=o===null||o===void 0?void 0:o.cardRightColInformation)===null||e===void 0?void 0:e.containerStyle)!==null&&t!==void 0?t:u.rightCol},((n=(r=o===null||o===void 0?void 0:o.cardRightColInformation)===null||r===void 0?void 0:r.values)===null||n===void 0?void 0:n.length)>0&&((i=o===null||o===void 0?void 0:o.cardRightColInformation)===null||i===void 0?void 0:i.values.map(function(e,t){var o,r;return f.createElement("div",{key:(o=e===null||e===void 0?void 0:e.title)!==null&&o!==void 0?o:t,style:(r=e===null||e===void 0?void 0:e.style)!==null&&r!==void 0?r:u.plantName},f.createElement("span",null,e===null||e===void 0?void 0:e.title))})))),f.createElement("div",{"data-class-name":"card-bottom",style:u.bottom},f.createElement("div",{"data-class-name":"card-circle-wrapper",style:u.circleWrap},f.createElement("div",{style:((l=o===null||o===void 0?void 0:o.circleIndicator)===null||l===void 0?void 0:l.color)?s(s({},u.circle),{background:(a=o===null||o===void 0?void 0:o.circleIndicator)===null||a===void 0?void 0:a.color,border:"1px solid ".concat((d=o===null||o===void 0?void 0:o.circleIndicator)===null||d===void 0?void 0:d.color)}):{}}),f.createElement("span",{style:u.status},(c=o===null||o===void 0?void 0:o.circleIndicator)===null||c===void 0?void 0:c.title)),f.createElement("div",{"data-class-name":"card-button-container"},f.createElement(p.PrimaryButton,{onClick:o===null||o===void 0?void 0:o.onClickDownButton,style:u.linkButton,iconProps:{iconName:(o===null||o===void 0?void 0:o.iconName)||"Page"}}))))}r.Card=o;(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default:undefined;if(!e){return}e.register(s,"__assign","F:\\Projetos Individuais\\ReactLibraries\\trentim-react-sdk\\src\\Card\\Card.tsx");e.register(o,"Card","F:\\Projetos Individuais\\ReactLibraries\\trentim-react-sdk\\src\\Card\\Card.tsx")})();(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.leaveModule:undefined;e&&e(t)})()}).call(this,n("./node_modules/webpack/buildin/module.js")(e))},"./src/Card/index.tsx":function(e,n,i){"use strict";(function(t){(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.enterModule:undefined;e&&e(t)})();var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal["default"].signature:function(e){return e};var r=this&&this.__createBinding||(Object.create?function(e,t,o,r){if(r===undefined)r=o;var n=Object.getOwnPropertyDescriptor(t,o);if(!n||("get"in n?!t.__esModule:n.writable||n.configurable)){n={enumerable:true,get:function e(){return t[o]}}}Object.defineProperty(e,r,n)}:function(e,t,o,r){if(r===undefined)r=o;e[r]=t[o]});var o=this&&this.__exportStar||function(e,t){for(var o in e){if(o!=="default"&&!Object.prototype.hasOwnProperty.call(t,o))r(t,e,o)}};Object.defineProperty(n,"__esModule",{value:true});o(i("./src/Card/Card.tsx"),n);(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default:undefined;if(!e){return}e.register(r,"__createBinding","F:\\Projetos Individuais\\ReactLibraries\\trentim-react-sdk\\src\\Card\\index.tsx");e.register(o,"__exportStar","F:\\Projetos Individuais\\ReactLibraries\\trentim-react-sdk\\src\\Card\\index.tsx")})();(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.leaveModule:undefined;e&&e(t)})()}).call(this,i("./node_modules/webpack/buildin/module.js")(e))},"@fluentui/react/lib/Button":function(e,t){e.exports=require("@fluentui/react/lib/Button")},react:function(e,t){e.exports=require("react")}})});
//# sourceMappingURL=bundle.js.map